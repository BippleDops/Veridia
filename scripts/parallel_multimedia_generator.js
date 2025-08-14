#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const MultimediaVaultGenerator = require('./multimedia_vault_generator');

async function generateMultimediaForExistingImages() {
  const generator = new MultimediaVaultGenerator();
  const generatedDir = path.join(process.cwd(), '04_Resources/Assets/Generated');
  
  console.log('🎭 Scanning for images to enhance with video/audio...');
  
  // Find all generated images
  const imageFiles = [];
  function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.name.endsWith('.png')) {
        imageFiles.push(fullPath);
      }
    }
  }
  
  scanDir(generatedDir);
  console.log(`Found ${imageFiles.length} images to process`);
  
  // Process images for video/audio
  let processed = 0;
  for (const imagePath of imageFiles) {
    // Load metadata if exists
    const metadataPath = imagePath.replace('.png', '_metadata.json');
    if (fs.existsSync(metadataPath)) {
      const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
      
      // Generate video for combat/action scenes
      if (metadata.type === 'combat' || metadata.description?.includes('battle')) {
        console.log(`\n🎬 Generating video for: ${metadata.title}`);
        const videoPath = imagePath.replace('.png', '.mp4');
        if (!fs.existsSync(videoPath)) {
          await generator.generateVideo(metadata, imagePath);
        }
      }
      
      // Generate audio for locations
      if (metadata.type === 'location' || metadata.type === 'scene') {
        console.log(`\n🔊 Generating audio for: ${metadata.title}`);
        const audioPath = imagePath.replace('.png', '_ambient.mp3');
        if (!fs.existsSync(audioPath)) {
          await generator.generateAudio(metadata);
        }
      }
      
      processed++;
      if (processed % 10 === 0) {
        console.log(`\n📊 Processed ${processed}/${imageFiles.length} assets`);
      }
    }
  }
  
  console.log('\n✨ Multimedia enhancement complete!');
}

generateMultimediaForExistingImages().catch(console.error);
