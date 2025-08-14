#!/usr/bin/env node

/**
 * Simple batch generation script for TTRPG assets
 */

const fs = require('fs');
const path = require('path');
const { generateImageViaComfy } = require('./comfy_client');

const WORLDS = {
  aquabyssos: 'underwater, deep sea, bioluminescent, aquatic, oceanic depths',
  aethermoor: 'floating islands, sky realm, ethereal, windswept, celestial',
  void: 'eldritch, cosmic horror, otherworldly, void-touched, dimensional'
};

const TYPES = {
  portrait: 'character portrait, detailed face, fantasy character',
  creature: 'fantasy creature, monster, beast',
  location: 'fantasy landscape, environment, scenic view'
};

async function generateBatch(count = 1) {
  console.log('🎨 Starting batch generation...');
  console.log(`Generating ${count} image(s) per type/world combination`);
  
  let generated = 0;
  let failed = 0;
  
  for (const [worldName, worldStyle] of Object.entries(WORLDS)) {
    for (const [typeName, typeStyle] of Object.entries(TYPES)) {
      for (let i = 0; i < count; i++) {
        const prompt = `${typeStyle}, ${worldStyle}, highly detailed fantasy art, professional quality`;
        
        console.log(`\n📸 Generating ${typeName} for ${worldName} (${i + 1}/${count})...`);
        console.log(`   Prompt: ${prompt.slice(0, 80)}...`);
        
        try {
          const buffer = await generateImageViaComfy({
            prompt,
            width: 512,
            height: 512,
            seed: Math.floor(Math.random() * 1e9),
            ckpt: process.env.COMFY_CKPT || 'v1-5-pruned-emaonly-fp16.safetensors'
          });
          
          // Save to appropriate directory
          const dirName = typeName.charAt(0).toUpperCase() + typeName.slice(1) + 's';
          const dir = path.join('04_Resources', 'Assets', dirName);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          
          const filename = `${typeName}_${worldName}_${Date.now()}.png`;
          const filepath = path.join(dir, filename);
          
          fs.writeFileSync(filepath, buffer);
          console.log(`   ✅ Saved: ${filepath} (${buffer.length} bytes)`);
          generated++;
        } catch (error) {
          console.error(`   ❌ Failed: ${error.message}`);
          failed++;
        }
        
        // Small delay between generations
        await new Promise(r => setTimeout(r, 1000));
      }
    }
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('✨ Batch generation complete!');
  console.log(`   Generated: ${generated} images`);
  console.log(`   Failed: ${failed} attempts`);
  console.log(`   Success rate: ${Math.round(generated / (generated + failed) * 100)}%`);
  
  // Show recent files
  console.log('\n📁 Recent generations:');
  const recentFiles = [];
  for (const type of Object.keys(TYPES)) {
    const dirName = type.charAt(0).toUpperCase() + type.slice(1) + 's';
    const dir = path.join('04_Resources', 'Assets', dirName);
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir)
        .filter(f => f.endsWith('.png'))
        .map(f => ({ name: f, path: path.join(dir, f), mtime: fs.statSync(path.join(dir, f)).mtime }))
        .sort((a, b) => b.mtime - a.mtime)
        .slice(0, 3);
      recentFiles.push(...files);
    }
  }
  
  recentFiles
    .sort((a, b) => b.mtime - a.mtime)
    .slice(0, 10)
    .forEach(f => console.log(`   - ${f.path}`));
}

// CLI
if (require.main === module) {
  const count = parseInt(process.argv[2] || '1', 10);
  generateBatch(count).catch(console.error);
}
