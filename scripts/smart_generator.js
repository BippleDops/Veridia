#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load configuration
const CONFIG_PATH = path.join(process.cwd(), '.obsidian', 'api_config.json');
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

// Rate limiting configuration
const rateLimits = {
  stability: { 
    requestsPerMinute: 10, 
    lastRequest: 0,
    queue: [],
    failures: 0
  },
  openai: { 
    requestsPerMinute: 20, 
    lastRequest: 0,
    queue: [],
    failures: 0
  }
};

// Statistics
const stats = {
  generated: { openai: 0, stability: 0, comfyui: 0 },
  failed: { openai: 0, stability: 0, comfyui: 0 },
  startTime: Date.now()
};

// === RATE LIMITED REQUEST ===
async function rateLimitedRequest(service, requestFn) {
  const limit = rateLimits[service];
  const now = Date.now();
  const timeSinceLastRequest = now - limit.lastRequest;
  const minInterval = 60000 / limit.requestsPerMinute;
  
  if (timeSinceLastRequest < minInterval) {
    const waitTime = minInterval - timeSinceLastRequest;
    console.log(`⏱️ Rate limiting ${service}: waiting ${Math.round(waitTime/1000)}s`);
    await new Promise(resolve => setTimeout(resolve, waitTime));
  }
  
  limit.lastRequest = Date.now();
  
  try {
    const result = await requestFn();
    limit.failures = 0; // Reset failure count on success
    return result;
  } catch (error) {
    limit.failures++;
    
    // Exponential backoff on failures
    if (limit.failures > 3) {
      const backoffTime = Math.min(60000 * limit.failures, 300000); // Max 5 minutes
      console.log(`⚠️ ${service} failing repeatedly, backing off for ${backoffTime/1000}s`);
      limit.lastRequest = Date.now() + backoffTime;
    }
    
    throw error;
  }
}

// === OPENAI DALL-E GENERATION ===
async function generateWithOpenAI(prompt, outputPath) {
  return rateLimitedRequest('openai', async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.openai.api_key}`,
          'OpenAI-Organization': config.openai.organization,
          'OpenAI-Project': config.openai.project
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: prompt,
          n: 1,
          size: '1024x1024',
          quality: 'standard'
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`OpenAI error: ${error.error?.message || response.statusText}`);
      }

      const data = await response.json();
      
      // Download the image
      const imageUrl = data.data[0].url;
      const imageResponse = await fetch(imageUrl);
      const buffer = Buffer.from(await imageResponse.arrayBuffer());
      
      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ [OpenAI] Generated: ${path.basename(outputPath)}`);
      stats.generated.openai++;
      return true;
    } catch (error) {
      console.error(`❌ [OpenAI] Failed: ${error.message}`);
      stats.failed.openai++;
      throw error;
    }
  });
}

// === STABILITY AI GENERATION ===
async function generateWithStability(prompt, outputPath) {
  return rateLimitedRequest('stability', async () => {
    try {
      const response = await fetch(
        `https://api.stability.ai/v1/generation/${config.stability.engine}/text-to-image`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${config.stability.api_key}`
          },
          body: JSON.stringify({
            text_prompts: [{ text: prompt, weight: 1 }],
            cfg_scale: 7,
            height: 1024,
            width: 1024,
            steps: 30,
            samples: 1
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Stability error: ${response.statusText}`);
      }

      const data = await response.json();
      
      for (const image of data.artifacts) {
        const buffer = Buffer.from(image.base64, 'base64');
        fs.writeFileSync(outputPath, buffer);
        console.log(`✅ [Stability] Generated: ${path.basename(outputPath)}`);
        stats.generated.stability++;
        return true;
      }
    } catch (error) {
      console.error(`❌ [Stability] Failed: ${error.message}`);
      stats.failed.stability++;
      throw error;
    }
  });
}

// === COMFYUI LOCAL GENERATION ===
async function generateWithComfyUI(prompt, outputPath) {
  try {
    const { generateImageViaComfy } = require('./comfy_client');
    const buffer = await generateImageViaComfy({
      prompt: prompt,
      width: 512,
      height: 512,
      seed: Math.floor(Math.random() * 1e9)
    });
    
    if (buffer) {
      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ [ComfyUI] Generated: ${path.basename(outputPath)}`);
      stats.generated.comfyui++;
      return true;
    }
  } catch (error) {
    console.error(`❌ [ComfyUI] Failed: ${error.message}`);
    stats.failed.comfyui++;
    return false;
  }
}

// === INTELLIGENT GENERATION WITH FALLBACK ===
async function generateImage(prompt, outputPath, preferredService = 'auto') {
  const services = [];
  
  // Determine service order based on preference and availability
  if (preferredService === 'auto') {
    // Auto mode: prioritize based on failure rates
    if (stats.failed.stability < 5) services.push('stability');
    if (stats.failed.openai < 5) services.push('openai');
    services.push('n8n'); // Add N8N as fallback
    services.push('comfyui');
  } else {
    services.push(preferredService);
    // Add fallbacks
    if (preferredService !== 'stability') services.push('stability');
    if (preferredService !== 'openai') services.push('openai');
    if (preferredService !== 'n8n') services.push('n8n');
    if (preferredService !== 'comfyui') services.push('comfyui');
  }
  
  // Try each service in order
  for (const service of services) {
    try {
      switch (service) {
        case 'openai':
          if (await generateWithOpenAI(prompt, outputPath)) return true;
          break;
        case 'stability':
          if (await generateWithStability(prompt, outputPath)) return true;
          break;
        case 'n8n':
          // Try N8N orchestrated generation
          try {
            const { triggerN8NWorkflow } = require('./n8n_orchestrator');
            const result = await triggerN8NWorkflow('image-generation', {
              prompt: prompt,
              outputPath: outputPath
            });
            if (result && result.success) {
              console.log(`✅ [N8N] Generated: ${path.basename(outputPath)}`);
              return true;
            }
          } catch (error) {
            console.log(`⚠️ N8N fallback failed: ${error.message}`);
          }
          break;
        case 'comfyui':
          if (await generateWithComfyUI(prompt, outputPath)) return true;
          break;
      }
    } catch (error) {
      console.log(`⚠️ ${service} failed, trying next service...`);
    }
  }
  
  return false;
}

// === BATCH GENERATION ===
async function generateBatch(type, count = 10) {
  console.log(`\n🎨 Generating ${count} ${type} with smart fallback...`);
  
  const outputDir = path.join(process.cwd(), '04_Resources/Assets', type);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const prompts = {
    Portraits: [
      'fantasy RPG character portrait, heroic adventurer, detailed face',
      'mysterious wizard portrait, arcane symbols, magical aura',
      'battle-scarred warrior portrait, determined expression',
      'elven ranger portrait, forest background, keen eyes',
      'dwarven craftsman portrait, forge lighting, proud stance'
    ],
    Locations: [
      'ancient temple ruins, overgrown with vines, mystical atmosphere',
      'bustling fantasy marketplace, diverse merchants, colorful stalls',
      'hidden underground sanctuary, crystal formations, magical glow',
      'fortress gate at sunset, imposing architecture, dramatic shadows',
      'enchanted forest grove, bioluminescent plants, ethereal mist'
    ],
    Creatures: [
      'elemental beast made of living fire, intimidating presence',
      'aberrant horror from the void, tentacles and eyes, cosmic terror',
      'celestial guardian angel, radiant wings, divine armor',
      'shadow demon emerging from darkness, red eyes glowing',
      'nature spirit of the forest, made of wood and leaves'
    ]
  };
  
  const typePrompts = prompts[type] || prompts.Portraits;
  let generated = 0;
  
  // Process in small concurrent batches to avoid overwhelming APIs
  const batchSize = 3;
  for (let i = 0; i < count; i += batchSize) {
    const batch = [];
    
    for (let j = 0; j < batchSize && i + j < count; j++) {
      const promptIndex = (i + j) % typePrompts.length;
      const enhancedPrompt = `${typePrompts[promptIndex]}, highly detailed, 8k quality, professional fantasy art`;
      const filename = `${type.toLowerCase()}_${Date.now()}_${j}.png`;
      const outputPath = path.join(outputDir, filename);
      
      batch.push(generateImage(enhancedPrompt, outputPath));
    }
    
    const results = await Promise.all(batch);
    generated += results.filter(r => r).length;
    
    // Small delay between batches
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log(`✅ Successfully generated ${generated}/${count} ${type}`);
  return generated;
}

// === MAIN EXECUTION ===
async function main() {
  console.log('🤖 Smart Multi-Service Generator');
  console.log('=' .repeat(50));
  console.log('Services will automatically fallback if one fails');
  console.log('Rate limiting is enforced to prevent API errors');
  console.log('=' .repeat(50));
  
  const types = ['Portraits', 'Locations', 'Creatures'];
  const promises = [];
  
  // Generate multiple types in parallel
  for (const type of types) {
    promises.push(generateBatch(type, 20));
  }
  
  await Promise.all(promises);
  
  // Statistics
  const duration = Math.round((Date.now() - stats.startTime) / 1000);
  console.log('\n' + '=' .repeat(50));
  console.log('📊 Generation Statistics:');
  console.log('=' .repeat(50));
  console.log(`✅ OpenAI: ${stats.generated.openai} generated, ${stats.failed.openai} failed`);
  console.log(`✅ Stability: ${stats.generated.stability} generated, ${stats.failed.stability} failed`);
  console.log(`✅ ComfyUI: ${stats.generated.comfyui} generated, ${stats.failed.comfyui} failed`);
  console.log(`⏱️ Total time: ${duration} seconds`);
  
  // Save report
  fs.writeFileSync(
    path.join(process.cwd(), '09_Performance', 'smart_generation_report.json'),
    JSON.stringify({ stats, duration, timestamp: new Date().toISOString() }, null, 2)
  );
}

// Export for use in other scripts
module.exports = { generateImage, generateBatch };

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}
