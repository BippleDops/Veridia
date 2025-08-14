#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

// N8N Configuration
const N8N_URL = process.env.N8N_URL || 'http://localhost:5678';
const N8N_API_KEY = process.env.N8N_API_KEY || '';

// Local service endpoints
const LOCAL_SERVICES = {
  comfyui: 'http://localhost:8188',
  animatediff: 'http://localhost:7860',
  audiocraft: 'http://localhost:7861',
  n8n: N8N_URL
};

// Service health status
const serviceHealth = {
  n8n: false,
  comfyui: false,
  animatediff: false,
  audiocraft: false
};

// === N8N WEBHOOK TRIGGER ===
async function triggerN8NWorkflow(workflowId, data) {
  try {
    const webhookUrl = `${N8N_URL}/webhook/${workflowId}`;
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-N8N-API-KEY': N8N_API_KEY
      },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log(`✅ N8N workflow ${workflowId} triggered successfully`);
      return result;
    } else {
      throw new Error(`N8N workflow failed: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`❌ N8N trigger failed: ${error.message}`);
    return null;
  }
}

// === LOCAL VIDEO GENERATION (AnimateDiff) ===
async function generateVideoLocal(prompt, outputPath) {
  try {
    // First, generate a base image with ComfyUI
    const imagePrompt = `${prompt}, single frame, high quality`;
    const imageBuffer = await generateImageViaComfyUI(imagePrompt);
    
    if (!imageBuffer) {
      throw new Error('Failed to generate base image');
    }
    
    // Save base image temporarily
    const tempImagePath = path.join('/tmp', `base_${Date.now()}.png`);
    fs.writeFileSync(tempImagePath, imageBuffer);
    
    // Trigger AnimateDiff workflow via N8N
    const videoResult = await triggerN8NWorkflow('video-generation', {
      image: tempImagePath,
      prompt: prompt,
      frames: 24,
      fps: 8,
      outputPath: outputPath
    });
    
    // Clean up temp file
    fs.unlinkSync(tempImagePath);
    
    if (videoResult && videoResult.success) {
      console.log(`✅ Video generated: ${outputPath}`);
      return true;
    }
    
    throw new Error('Video generation failed');
  } catch (error) {
    console.error(`❌ Local video generation failed: ${error.message}`);
    
    // Fallback to simple frame interpolation
    return generateSimpleVideo(prompt, outputPath);
  }
}

// === SIMPLE VIDEO GENERATION (Frame Interpolation) ===
async function generateSimpleVideo(prompt, outputPath) {
  try {
    const frames = [];
    const frameCount = 16;
    
    console.log(`🎬 Generating ${frameCount} frames for video...`);
    
    // Generate multiple frames with slight variations
    for (let i = 0; i < frameCount; i++) {
      const framePrompt = `${prompt}, frame ${i + 1} of ${frameCount}, slight motion`;
      const frameBuffer = await generateImageViaComfyUI(framePrompt);
      
      if (frameBuffer) {
        const framePath = path.join('/tmp', `frame_${i.toString().padStart(3, '0')}.png`);
        fs.writeFileSync(framePath, frameBuffer);
        frames.push(framePath);
      }
    }
    
    if (frames.length === 0) {
      throw new Error('No frames generated');
    }
    
    // Use ffmpeg to create video from frames
    const ffmpegCmd = `ffmpeg -framerate 8 -pattern_type glob -i '/tmp/frame_*.png' -c:v libx264 -pix_fmt yuv420p -y "${outputPath}"`;
    await execAsync(ffmpegCmd);
    
    // Clean up frames
    frames.forEach(frame => {
      try { fs.unlinkSync(frame); } catch {}
    });
    
    console.log(`✅ Simple video created: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`❌ Simple video generation failed: ${error.message}`);
    return false;
  }
}

// === COMFYUI IMAGE GENERATION ===
async function generateImageViaComfyUI(prompt) {
  try {
    const { generateImageViaComfy } = require('./comfy_client');
    return await generateImageViaComfy({
      prompt: prompt,
      width: 512,
      height: 512,
      seed: Math.floor(Math.random() * 1e9),
      ckpt: process.env.COMFY_CKPT || 'v1-5-pruned-emaonly-fp16.safetensors'
    });
  } catch (error) {
    console.error(`ComfyUI error: ${error.message}`);
    return null;
  }
}

// === N8N WORKFLOW DEFINITIONS ===
async function createN8NWorkflows() {
  const workflows = {
    'image-generation': {
      name: 'TTRPG Image Generation',
      nodes: [
        {
          type: 'webhook',
          name: 'Webhook',
          webhookId: 'image-generation'
        },
        {
          type: 'http',
          name: 'ComfyUI',
          url: 'http://localhost:8188/prompt',
          method: 'POST'
        },
        {
          type: 'function',
          name: 'Process Image',
          code: `
            const imageData = items[0].json;
            return [{
              json: {
                success: true,
                image: imageData.image,
                prompt: $node["Webhook"].json.prompt
              }
            }];
          `
        }
      ]
    },
    'video-generation': {
      name: 'TTRPG Video Generation',
      nodes: [
        {
          type: 'webhook',
          name: 'Webhook',
          webhookId: 'video-generation'
        },
        {
          type: 'execute',
          name: 'AnimateDiff',
          command: 'python animatediff_cli.py',
          args: '--prompt "{{$json.prompt}}" --image "{{$json.image}}"'
        },
        {
          type: 'function',
          name: 'Process Video',
          code: `
            return [{
              json: {
                success: true,
                video: $node["AnimateDiff"].json.output,
                frames: $json.frames
              }
            }];
          `
        }
      ]
    },
    'audio-generation': {
      name: 'TTRPG Audio Generation',
      nodes: [
        {
          type: 'webhook',
          name: 'Webhook',
          webhookId: 'audio-generation'
        },
        {
          type: 'execute',
          name: 'AudioCraft',
          command: 'node scripts/generate_audio_pack.js',
          args: '--type "{{$json.type}}" --count {{$json.count}}'
        }
      ]
    },
    'orchestrator': {
      name: 'TTRPG Master Orchestrator',
      nodes: [
        {
          type: 'cron',
          name: 'Schedule',
          cronExpression: '*/5 * * * *' // Every 5 minutes
        },
        {
          type: 'switch',
          name: 'Route by Service',
          rules: [
            { condition: 'API available', output: 'API Generation' },
            { condition: 'API limited', output: 'Local Generation' }
          ]
        },
        {
          type: 'parallel',
          name: 'Generate Assets',
          branches: [
            'Image Generation',
            'Video Generation',
            'Audio Generation'
          ]
        }
      ]
    }
  };
  
  // Save workflow definitions
  for (const [id, workflow] of Object.entries(workflows)) {
    const workflowPath = path.join(process.cwd(), 'scripts/n8n_workflows', `${id}.json`);
    fs.writeFileSync(workflowPath, JSON.stringify(workflow, null, 2));
    console.log(`📝 Created N8N workflow: ${id}`);
  }
}

// === SERVICE HEALTH CHECK ===
async function checkServices() {
  console.log('\n🔍 Checking local services...');
  
  // Check N8N
  try {
    const response = await fetch(`${N8N_URL}/healthz`);
    serviceHealth.n8n = response.ok;
  } catch {
    serviceHealth.n8n = false;
  }
  
  // Check ComfyUI
  try {
    const response = await fetch(`${LOCAL_SERVICES.comfyui}/system_stats`);
    serviceHealth.comfyui = response.ok;
  } catch {
    serviceHealth.comfyui = false;
  }
  
  // Check AnimateDiff
  try {
    const response = await fetch(`${LOCAL_SERVICES.animatediff}/api/health`);
    serviceHealth.animatediff = response.ok;
  } catch {
    serviceHealth.animatediff = false;
  }
  
  console.log('Service Status:');
  console.log(`  N8N:         ${serviceHealth.n8n ? '✅' : '❌'}`);
  console.log(`  ComfyUI:     ${serviceHealth.comfyui ? '✅' : '❌'}`);
  console.log(`  AnimateDiff: ${serviceHealth.animatediff ? '✅' : '❌'}`);
  
  return serviceHealth;
}

// === FALLBACK ORCHESTRATION ===
async function generateWithFallback(type, prompt, outputPath) {
  console.log(`\n🎯 Generating ${type}: ${prompt.substring(0, 50)}...`);
  
  // Try API services first (if available)
  try {
    const { generateImage } = require('./smart_generator');
    if (type === 'image' && await generateImage(prompt, outputPath, 'auto')) {
      return true;
    }
  } catch (error) {
    console.log(`⚠️ API services unavailable: ${error.message}`);
  }
  
  // Fallback to N8N workflow
  if (serviceHealth.n8n) {
    console.log('📡 Attempting N8N workflow...');
    const result = await triggerN8NWorkflow(`${type}-generation`, {
      prompt: prompt,
      outputPath: outputPath
    });
    
    if (result && result.success) {
      return true;
    }
  }
  
  // Final fallback to direct local generation
  console.log('🏠 Falling back to direct local generation...');
  
  switch (type) {
    case 'image':
      const imageBuffer = await generateImageViaComfyUI(prompt);
      if (imageBuffer) {
        fs.writeFileSync(outputPath, imageBuffer);
        return true;
      }
      break;
      
    case 'video':
      return await generateVideoLocal(prompt, outputPath);
      
    case 'audio':
      try {
        await execAsync(`node scripts/generate_audio_pack.js --single --output "${outputPath}"`);
        return true;
      } catch {
        return false;
      }
  }
  
  return false;
}

// === BATCH GENERATION WITH N8N ===
async function generateBatch(assets) {
  const results = {
    successful: 0,
    failed: 0,
    assets: []
  };
  
  for (const asset of assets) {
    const { type, prompt, category } = asset;
    const timestamp = Date.now();
    const extension = type === 'video' ? 'mp4' : type === 'audio' ? 'wav' : 'png';
    const filename = `${category}_${timestamp}.${extension}`;
    const outputPath = path.join(
      process.cwd(),
      '04_Resources/Assets',
      category.charAt(0).toUpperCase() + category.slice(1),
      filename
    );
    
    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    if (await generateWithFallback(type, prompt, outputPath)) {
      results.successful++;
      results.assets.push({
        type,
        category,
        path: outputPath,
        prompt
      });
      console.log(`✅ Generated: ${filename}`);
    } else {
      results.failed++;
      console.log(`❌ Failed: ${filename}`);
    }
    
    // Small delay between generations
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  return results;
}

// === MAIN EXECUTION ===
async function main() {
  console.log('🤖 N8N Orchestrator with Local Fallback');
  console.log('=' .repeat(50));
  
  // Check services
  await checkServices();
  
  // Create N8N workflows if needed
  if (!fs.existsSync('scripts/n8n_workflows')) {
    fs.mkdirSync('scripts/n8n_workflows', { recursive: true });
  }
  await createN8NWorkflows();
  
  // Define test batch
  const testAssets = [
    { type: 'image', prompt: 'fantasy tavern interior, warm lighting', category: 'locations' },
    { type: 'image', prompt: 'heroic knight portrait, detailed armor', category: 'portraits' },
    { type: 'video', prompt: 'magical portal opening, swirling energy', category: 'scenes' },
    { type: 'audio', prompt: 'ambient dungeon sounds', category: 'audio' }
  ];
  
  console.log('\n🚀 Starting generation with N8N fallback...\n');
  
  const results = await generateBatch(testAssets);
  
  console.log('\n' + '=' .repeat(50));
  console.log('📊 Generation Complete:');
  console.log(`✅ Successful: ${results.successful}`);
  console.log(`❌ Failed: ${results.failed}`);
  
  // Save report
  const report = {
    timestamp: new Date().toISOString(),
    services: serviceHealth,
    results: results
  };
  
  fs.writeFileSync(
    path.join(process.cwd(), '09_Performance', 'n8n_generation_report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('\n📄 Report saved to: 09_Performance/n8n_generation_report.json');
}

// Export for use in other scripts
module.exports = {
  triggerN8NWorkflow,
  generateWithFallback,
  generateVideoLocal,
  checkServices
};

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}
