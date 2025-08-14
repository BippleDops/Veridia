#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

// Load configuration
const CONFIG_PATH = path.join(process.cwd(), '.obsidian', 'api_config.json');
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

// Service status
const services = {
  openai: { available: false, credits: 0 },
  stability: { available: true, credits: 1000 },
  unsplash: { available: true, rateLimit: 50 },
  comfyui: { available: false, url: 'http://127.0.0.1:8188' }
};

// Asset queues
const queues = {
  portraits: [],
  locations: [],
  creatures: [],
  items: [],
  maps: [],
  scenes: [],
  audio: [],
  videos: []
};

// Generation statistics
const stats = {
  generated: 0,
  failed: 0,
  startTime: Date.now()
};

// === STABILITY AI IMAGE GENERATION ===
async function generateWithStability(prompt, outputPath) {
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
      throw new Error(`Stability API error: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Save the image
    for (const image of data.artifacts) {
      const buffer = Buffer.from(image.base64, 'base64');
      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ Generated via Stability: ${outputPath}`);
      stats.generated++;
      return true;
    }
  } catch (error) {
    console.error(`❌ Stability generation failed: ${error.message}`);
    stats.failed++;
    return false;
  }
}

// === UNSPLASH INSPIRATION FETCHER ===
async function fetchUnsplashInspiration(query) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${config.unsplash.access_key}&per_page=5`
    );
    
    if (response.ok) {
      const data = await response.json();
      return data.results.map(photo => ({
        url: photo.urls.regular,
        description: photo.description || photo.alt_description,
        author: photo.user.name
      }));
    }
  } catch (error) {
    console.error(`Unsplash fetch error: ${error.message}`);
  }
  return [];
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
      console.log(`✅ Generated via ComfyUI: ${outputPath}`);
      stats.generated++;
      return true;
    }
  } catch (error) {
    console.error(`ComfyUI generation failed: ${error.message}`);
  }
  return false;
}

// === INTELLIGENT PROMPT ENHANCEMENT ===
function enhancePrompt(basePrompt, category, world) {
  const worldStyles = {
    aquabyssos: 'underwater, bioluminescent, deep sea, aquatic, pressure-adapted, coral architecture',
    aethermoor: 'floating islands, sky cities, windswept, ethereal, crystalline structures, aurora-lit',
    void: 'eldritch, cosmic horror, non-euclidean geometry, shadow-touched, reality-warped'
  };
  
  const categoryEnhancements = {
    portraits: 'character portrait, detailed face, fantasy RPG style, professional concept art',
    locations: 'environmental concept art, establishing shot, atmospheric lighting, detailed architecture',
    creatures: 'creature design, full body, anatomical detail, fantasy bestiary illustration',
    items: 'item showcase, magical artifact, detailed textures, game asset style',
    maps: 'top-down view, cartographic style, detailed terrain, fantasy map illustration',
    scenes: 'cinematic composition, dramatic lighting, narrative moment, wide shot'
  };
  
  return `${basePrompt}, ${categoryEnhancements[category] || ''}, ${worldStyles[world] || ''}, highly detailed, 8k, masterpiece`;
}

// === BATCH GENERATION ORCHESTRATOR ===
async function generateBatch(category, count = 10) {
  console.log(`\n🎨 Generating ${count} ${category}...`);
  
  const outputDir = path.join(process.cwd(), '04_Resources/Assets', category);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const worlds = ['aquabyssos', 'aethermoor', 'void'];
  const basePrompts = {
    portraits: ['heroic adventurer', 'mysterious mage', 'grizzled warrior', 'elven diplomat', 'dwarven craftsman'],
    locations: ['ancient temple', 'bustling marketplace', 'hidden sanctuary', 'fortress gate', 'mystical grove'],
    creatures: ['elemental beast', 'aberrant horror', 'celestial guardian', 'shadow demon', 'nature spirit'],
    items: ['enchanted sword', 'mystical orb', 'ancient tome', 'magical ring', 'divine artifact'],
    maps: ['dungeon layout', 'city district', 'wilderness region', 'island chain', 'underground cavern'],
    scenes: ['epic battle', 'tense negotiation', 'magical ritual', 'discovery moment', 'dramatic escape']
  };
  
  let generated = 0;
  
  for (let i = 0; i < count; i++) {
    const world = worlds[i % worlds.length];
    const basePrompt = basePrompts[category][i % basePrompts[category].length];
    const enhancedPrompt = enhancePrompt(basePrompt, category, world);
    
    const timestamp = Date.now();
    const filename = `${category}_${world}_${timestamp}.png`;
    const outputPath = path.join(outputDir, filename);
    
    // Try Stability AI first (best quality)
    if (services.stability.available) {
      if (await generateWithStability(enhancedPrompt, outputPath)) {
        generated++;
        continue;
      }
    }
    
    // Fallback to ComfyUI
    if (services.comfyui.available) {
      if (await generateWithComfyUI(enhancedPrompt, outputPath)) {
        generated++;
        continue;
      }
    }
    
    // If all else fails, create a placeholder with Unsplash inspiration
    const inspiration = await fetchUnsplashInspiration(basePrompt);
    if (inspiration.length > 0) {
      const metadataPath = outputPath.replace('.png', '.json');
      fs.writeFileSync(metadataPath, JSON.stringify({
        prompt: enhancedPrompt,
        inspiration: inspiration,
        status: 'pending_generation',
        timestamp: new Date().toISOString()
      }, null, 2));
      console.log(`📝 Saved inspiration metadata: ${metadataPath}`);
    }
  }
  
  console.log(`✅ Generated ${generated}/${count} ${category}`);
  return generated;
}

// === AUDIO GENERATION ===
async function generateAudioPack() {
  console.log('\n🎵 Generating Audio Pack...');
  
  try {
    await execAsync('node scripts/generate_audio_pack.js');
    console.log('✅ Audio pack generated');
    stats.generated += 20;
  } catch (error) {
    console.error(`Audio generation failed: ${error.message}`);
    stats.failed += 20;
  }
}

// === SERVICE HEALTH CHECK ===
async function checkServices() {
  console.log('\n🔍 Checking service availability...');
  
  // Check OpenAI
  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${config.openai.api_key}`,
        'OpenAI-Organization': config.openai.organization
      }
    });
    services.openai.available = response.ok;
  } catch {
    services.openai.available = false;
  }
  
  // Check ComfyUI
  try {
    const response = await fetch('http://127.0.0.1:8188/system_stats');
    services.comfyui.available = response.ok;
  } catch {
    services.comfyui.available = false;
  }
  
  console.log('Service Status:');
  console.log(`  OpenAI: ${services.openai.available ? '✅' : '❌'}`);
  console.log(`  Stability: ${services.stability.available ? '✅' : '❌'}`);
  console.log(`  Unsplash: ${services.unsplash.available ? '✅' : '❌'}`);
  console.log(`  ComfyUI: ${services.comfyui.available ? '✅' : '❌'}`);
}

// === MAIN ORCHESTRATION ===
async function main() {
  console.log('🚀 MEGA GENERATOR - Full Service Asset Creation');
  console.log('=' .repeat(50));
  
  // Check services
  await checkServices();
  
  // Generate assets in parallel batches
  const categories = ['portraits', 'locations', 'creatures', 'items', 'maps', 'scenes'];
  
  console.log('\n📦 Starting parallel generation...');
  
  // Run multiple categories in parallel
  const promises = [];
  
  for (const category of categories) {
    promises.push(generateBatch(category, 20));
  }
  
  // Also generate audio in parallel
  promises.push(generateAudioPack());
  
  // Wait for all to complete
  await Promise.all(promises);
  
  // Final statistics
  const duration = Math.round((Date.now() - stats.startTime) / 1000);
  console.log('\n' + '='.repeat(50));
  console.log('📊 Generation Complete!');
  console.log('='.repeat(50));
  console.log(`✅ Successfully generated: ${stats.generated} assets`);
  console.log(`❌ Failed: ${stats.failed} assets`);
  console.log(`⏱️ Duration: ${duration} seconds`);
  console.log(`💾 Assets saved to: 04_Resources/Assets/`);
  
  // Save report
  const report = {
    timestamp: new Date().toISOString(),
    duration: duration,
    stats: stats,
    services: services
  };
  
  fs.writeFileSync(
    path.join(process.cwd(), '09_Performance', 'mega_generation_report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('\n📄 Report saved to: 09_Performance/mega_generation_report.json');
}

// Export for use in other scripts
module.exports = {
  generateWithStability,
  generateWithComfyUI,
  fetchUnsplashInspiration,
  enhancePrompt,
  generateBatch
};

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}
