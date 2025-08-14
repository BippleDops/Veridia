#!/usr/bin/env node

/**
 * UNIFIED ASSET GENERATOR
 * ========================
 * Uses the global AI tools to generate all vault assets
 */

const { ToolLibrary } = require('./tool_library.js');
const fs = require('fs');
const path = require('path');

// Initialize tool library with vault configuration
const tools = new ToolLibrary({
  outputDir: path.join(process.cwd(), '04_Resources/Assets'),
  toolsDir: path.join(process.env.HOME, 'AITools'),
  apiKeys: fs.existsSync('.obsidian/api_config.json') 
    ? require('../.obsidian/api_config.json')
    : {}
});

// Asset generation queue
const queue = {
  images: [],
  videos: [],
  audio: [],
  text: []
};

// Statistics
const stats = {
  scanned: 0,
  missing: 0,
  generated: 0,
  failed: 0
};

/**
 * Scan a markdown file for missing assets
 */
function scanFileForAssets(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath, '.md');
  const assets = [];
  
  // Check for image links
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let match;
  
  while ((match = imageRegex.exec(content)) !== null) {
    const altText = match[1];
    const imagePath = match[2];
    
    // Skip external URLs
    if (imagePath.startsWith('http')) continue;
    
    // Check if file exists
    const fullPath = path.join(process.cwd(), imagePath);
    if (!fs.existsSync(fullPath)) {
      assets.push({
        type: 'image',
        path: fullPath,
        prompt: altText || fileName,
        source: filePath
      });
    }
  }
  
  // Check for audio references
  const audioRegex = /\[\[([^|]+\.(?:wav|mp3|ogg))(?:\|([^\]]+))?\]\]/g;
  while ((match = audioRegex.exec(content)) !== null) {
    const audioPath = match[1];
    const fullPath = path.join(process.cwd(), '04_Resources/Assets/Audio', audioPath);
    
    if (!fs.existsSync(fullPath)) {
      assets.push({
        type: 'audio',
        path: fullPath,
        prompt: match[2] || path.basename(audioPath, path.extname(audioPath)),
        source: filePath
      });
    }
  }
  
  // Check for video references
  const videoRegex = /\[\[([^|]+\.(?:mp4|webm|mov))(?:\|([^\]]+))?\]\]/g;
  while ((match = videoRegex.exec(content)) !== null) {
    const videoPath = match[1];
    const fullPath = path.join(process.cwd(), '04_Resources/Assets/Videos', videoPath);
    
    if (!fs.existsSync(fullPath)) {
      assets.push({
        type: 'video',
        path: fullPath,
        prompt: match[2] || path.basename(videoPath, path.extname(videoPath)),
        source: filePath
      });
    }
  }
  
  // Detect content that needs assets
  if (filePath.includes('People/') && !content.includes('![')) {
    // Character without portrait
    assets.push({
      type: 'image',
      path: path.join(process.cwd(), '04_Resources/Assets/Portraits', `${fileName}.png`),
      prompt: `${fileName} character portrait, fantasy RPG, detailed face`,
      source: filePath
    });
  }
  
  if (filePath.includes('Places/') && !content.includes('![')) {
    // Location without image
    assets.push({
      type: 'image',
      path: path.join(process.cwd(), '04_Resources/Assets/Locations', `${fileName}.png`),
      prompt: `${fileName} location, fantasy setting, establishing shot`,
      source: filePath
    });
  }
  
  if (filePath.includes('Items/') && !content.includes('![')) {
    // Item without image
    assets.push({
      type: 'image',
      path: path.join(process.cwd(), '04_Resources/Assets/Items', `${fileName}.png`),
      prompt: `${fileName} magical item, fantasy RPG, detailed`,
      source: filePath
    });
  }
  
  return assets;
}

/**
 * Scan entire vault for missing assets
 */
function scanVault(dir = process.cwd()) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Skip certain directories
    if (file.startsWith('.') || file === 'node_modules' || file === '09_Performance') {
      continue;
    }
    
    if (stat.isDirectory()) {
      scanVault(filePath);
    } else if (file.endsWith('.md')) {
      stats.scanned++;
      const assets = scanFileForAssets(filePath);
      
      for (const asset of assets) {
        stats.missing++;
        
        switch (asset.type) {
          case 'image':
            queue.images.push(asset);
            break;
          case 'video':
            queue.videos.push(asset);
            break;
          case 'audio':
            queue.audio.push(asset);
            break;
        }
      }
    }
  }
}

/**
 * Generate a single asset
 */
async function generateAsset(asset) {
  console.log(`🎨 Generating ${asset.type}: ${path.basename(asset.path)}`);
  
  // Ensure directory exists
  const dir = path.dirname(asset.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  try {
    let result;
    
    switch (asset.type) {
      case 'image':
        result = await tools.generateImage(asset.prompt, {
          method: 'auto',
          outputPath: asset.path
        });
        break;
        
      case 'video':
        result = await tools.generateVideo(asset.prompt, {
          method: 'animatediff',
          outputPath: asset.path
        });
        break;
        
      case 'audio':
        result = await tools.generateAudio(asset.prompt, {
          duration: 30,
          outputPath: asset.path
        });
        break;
    }
    
    if (result) {
      // Save the result
      if (Buffer.isBuffer(result)) {
        fs.writeFileSync(asset.path, result);
      }
      
      stats.generated++;
      console.log(`✅ Generated: ${path.basename(asset.path)}`);
      
      // Update the source file with the asset link
      updateSourceFile(asset);
      
      return true;
    }
  } catch (error) {
    console.error(`❌ Failed to generate ${asset.type}: ${error.message}`);
    stats.failed++;
    return false;
  }
}

/**
 * Update source markdown file with generated asset
 */
function updateSourceFile(asset) {
  if (!asset.source || !fs.existsSync(asset.source)) return;
  
  let content = fs.readFileSync(asset.source, 'utf8');
  const relativePath = path.relative(path.dirname(asset.source), asset.path);
  
  // Add asset link to file
  if (asset.type === 'image') {
    // Add image at the top of the file after frontmatter
    const frontmatterEnd = content.indexOf('---', 3);
    if (frontmatterEnd > 0) {
      const before = content.substring(0, frontmatterEnd + 3);
      const after = content.substring(frontmatterEnd + 3);
      content = `${before}\n\n![${asset.prompt}](${relativePath})${after}`;
    } else {
      content = `![${asset.prompt}](${relativePath})\n\n${content}`;
    }
    
    fs.writeFileSync(asset.source, content);
    console.log(`📝 Updated ${path.basename(asset.source)} with asset link`);
  }
}

/**
 * Process generation queue
 */
async function processQueue() {
  console.log('\n📊 Asset Queue:');
  console.log(`  Images: ${queue.images.length}`);
  console.log(`  Videos: ${queue.videos.length}`);
  console.log(`  Audio: ${queue.audio.length}`);
  console.log('');
  
  // Check services
  console.log('🔍 Checking services...');
  const services = await tools.checkAllServices();
  console.log('Service status:', services);
  console.log('');
  
  // Process images
  for (const asset of queue.images) {
    await generateAsset(asset);
    
    // Small delay to avoid overwhelming services
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Process audio
  for (const asset of queue.audio) {
    await generateAsset(asset);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Process videos (these take longer)
  for (const asset of queue.videos) {
    await generateAsset(asset);
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 UNIFIED ASSET GENERATOR');
  console.log('=' .repeat(50));
  console.log('Using global AI tools from ~/AITools/');
  console.log('');
  
  // Scan vault for missing assets
  console.log('📂 Scanning vault for missing assets...');
  scanVault();
  
  console.log(`\n✅ Scanned ${stats.scanned} files`);
  console.log(`⚠️ Found ${stats.missing} missing assets`);
  
  if (stats.missing === 0) {
    console.log('\n🎉 No missing assets found!');
    return;
  }
  
  // Process the queue
  await processQueue();
  
  // Final report
  console.log('\n' + '=' .repeat(50));
  console.log('📊 GENERATION COMPLETE');
  console.log('=' .repeat(50));
  console.log(`✅ Generated: ${stats.generated} assets`);
  console.log(`❌ Failed: ${stats.failed} assets`);
  console.log(`📁 Assets saved to: 04_Resources/Assets/`);
  
  // Save report
  const report = {
    timestamp: new Date().toISOString(),
    stats: stats,
    queue: {
      images: queue.images.length,
      videos: queue.videos.length,
      audio: queue.audio.length
    }
  };
  
  fs.writeFileSync(
    path.join(process.cwd(), '09_Performance', 'unified_generation_report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('\n📄 Report saved to: 09_Performance/unified_generation_report.json');
}

// Export for use in other scripts
module.exports = {
  scanFileForAssets,
  scanVault,
  generateAsset,
  processQueue
};

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}
