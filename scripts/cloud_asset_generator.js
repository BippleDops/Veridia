#!/usr/bin/env node

/**
 * CLOUD ASSET GENERATOR
 * =====================
 * Uses cloud APIs (OpenAI, Stability) to generate assets when local services are unavailable
 */

const fs = require('fs');
const path = require('path');

// Load API configuration
const CONFIG_PATH = path.join(process.cwd(), '.obsidian', 'api_config.json');
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

// Statistics
const stats = {
  generated: 0,
  failed: 0,
  startTime: Date.now()
};

/**
 * Generate image with Stability AI
 */
async function generateImageStability(prompt, outputPath) {
  try {
    console.log(`🎨 [Stability] Generating: ${path.basename(outputPath)}`);
    
    const response = await fetch(
      `https://api.stability.ai/v1/generation/${config.stability.engine || 'stable-diffusion-xl-1024-v1-0'}/text-to-image`,
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
      const error = await response.text();
      throw new Error(`Stability API error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    
    // Save the image
    for (const image of data.artifacts) {
      const buffer = Buffer.from(image.base64, 'base64');
      
      // Ensure directory exists
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ Generated: ${outputPath}`);
      stats.generated++;
      return true;
    }
  } catch (error) {
    console.error(`❌ Stability failed: ${error.message}`);
    stats.failed++;
    return false;
  }
}

/**
 * Generate image with OpenAI DALL-E
 */
async function generateImageOpenAI(prompt, outputPath) {
  try {
    console.log(`🎨 [OpenAI] Generating: ${path.basename(outputPath)}`);
    
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
    
    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Generated: ${outputPath}`);
    stats.generated++;
    return true;
  } catch (error) {
    console.error(`❌ OpenAI failed: ${error.message}`);
    stats.failed++;
    return false;
  }
}

/**
 * Generate image with fallback
 */
async function generateImage(prompt, outputPath) {
  // Skip if file exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️ Skipping existing: ${path.basename(outputPath)}`);
    return true;
  }
  
  // Try Stability first (usually cheaper)
  if (config.stability?.api_key) {
    if (await generateImageStability(prompt, outputPath)) {
      return true;
    }
  }
  
  // Fallback to OpenAI
  if (config.openai?.api_key) {
    if (await generateImageOpenAI(prompt, outputPath)) {
      return true;
    }
  }
  
  console.error(`❌ No API available for: ${path.basename(outputPath)}`);
  return false;
}

/**
 * Process a batch of assets
 */
async function processBatch(assets) {
  console.log(`\n📦 Processing batch of ${assets.length} assets...`);
  
  for (const asset of assets) {
    await generateImage(asset.prompt, asset.path);
    
    // Rate limiting delay
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log(`\n📊 Batch complete: ${stats.generated} generated, ${stats.failed} failed`);
}

/**
 * Scan and generate missing assets
 */
async function scanAndGenerate() {
  const queue = [];
  
  // Scan for missing portraits
  const peopleDir = path.join(process.cwd(), '02_Worldbuilding/People');
  if (fs.existsSync(peopleDir)) {
    const files = fs.readdirSync(peopleDir).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const name = path.basename(file, '.md');
      const portraitPath = path.join(process.cwd(), '04_Resources/Assets/Portraits', `${name.replace(/[^a-zA-Z0-9_-]/g, '_')}.png`);
      
      if (!fs.existsSync(portraitPath)) {
        queue.push({
          path: portraitPath,
          prompt: `${name} character portrait, fantasy RPG, detailed face, professional concept art`
        });
      }
    }
  }
  
  // Scan for missing location images
  const placesDir = path.join(process.cwd(), '02_Worldbuilding/Places');
  if (fs.existsSync(placesDir)) {
    const files = fs.readdirSync(placesDir).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const name = path.basename(file, '.md');
      const locationPath = path.join(process.cwd(), '04_Resources/Assets/Locations', `${name.replace(/[^a-zA-Z0-9_-]/g, '_')}.png`);
      
      if (!fs.existsSync(locationPath)) {
        queue.push({
          path: locationPath,
          prompt: `${name} location, fantasy setting, establishing shot, atmospheric lighting`
        });
      }
    }
  }
  
  // Scan for missing item images
  const itemsDir = path.join(process.cwd(), '02_Worldbuilding/Items');
  if (fs.existsSync(itemsDir)) {
    const files = fs.readdirSync(itemsDir).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const name = path.basename(file, '.md');
      const itemPath = path.join(process.cwd(), '04_Resources/Assets/Items', `${name.replace(/[^a-zA-Z0-9_-]/g, '_')}.png`);
      
      if (!fs.existsSync(itemPath)) {
        queue.push({
          path: itemPath,
          prompt: `${name} magical item, fantasy artifact, detailed, item showcase`
        });
      }
    }
  }
  
  console.log(`📊 Found ${queue.length} missing assets`);
  
  // Process in batches of 10
  const batchSize = 10;
  for (let i = 0; i < queue.length; i += batchSize) {
    const batch = queue.slice(i, i + batchSize);
    await processBatch(batch);
    
    // Pause between batches
    if (i + batchSize < queue.length) {
      console.log(`⏸️ Pausing 30 seconds before next batch...`);
      await new Promise(resolve => setTimeout(resolve, 30000));
    }
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('☁️ CLOUD ASSET GENERATOR');
  console.log('=' .repeat(50));
  console.log('Using cloud APIs for asset generation');
  console.log('');
  
  // Check API availability
  console.log('🔍 Checking APIs...');
  console.log(`OpenAI: ${config.openai?.api_key ? '✅' : '❌'}`);
  console.log(`Stability: ${config.stability?.api_key ? '✅' : '❌'}`);
  console.log('');
  
  if (!config.openai?.api_key && !config.stability?.api_key) {
    console.error('❌ No API keys configured!');
    console.log('Add keys to .obsidian/api_config.json');
    process.exit(1);
  }
  
  // Start generation
  await scanAndGenerate();
  
  // Final report
  const duration = Math.round((Date.now() - stats.startTime) / 1000);
  console.log('\n' + '=' .repeat(50));
  console.log('📊 GENERATION COMPLETE');
  console.log('=' .repeat(50));
  console.log(`✅ Generated: ${stats.generated} assets`);
  console.log(`❌ Failed: ${stats.failed} assets`);
  console.log(`⏱️ Duration: ${duration} seconds`);
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  generateImage,
  generateImageStability,
  generateImageOpenAI
};
