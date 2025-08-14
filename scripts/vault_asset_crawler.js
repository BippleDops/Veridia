#!/usr/bin/env node

/**
 * VAULT ASSET CRAWLER
 * ===================
 * Systematically crawls the entire vault and generates missing assets in batches
 */

const fs = require('fs');
const path = require('path');
const { ToolLibrary } = require('./tool_library.js');

// Configuration
const BATCH_SIZE = 100;
const DELAY_BETWEEN_ASSETS = 2000; // 2 seconds
const DELAY_BETWEEN_BATCHES = 30000; // 30 seconds

// Initialize tool library
const tools = new ToolLibrary({
  outputDir: path.join(process.cwd(), '04_Resources/Assets'),
  toolsDir: path.join(process.env.HOME, 'AITools'),
  apiKeys: fs.existsSync('.obsidian/api_config.json') 
    ? require('../.obsidian/api_config.json')
    : {}
});

// Asset queue
const assetQueue = [];
const processedFiles = new Set();

// Statistics
const stats = {
  filesScanned: 0,
  assetsFound: 0,
  assetsGenerated: 0,
  assetsFailed: 0,
  batchesProcessed: 0,
  startTime: Date.now()
};

/**
 * Extract content context from markdown file
 */
function extractContext(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Extract key information
    let title = path.basename(filePath, '.md');
    let description = '';
    let tags = [];
    let type = '';
    
    // Parse frontmatter
    if (content.startsWith('---')) {
      const frontmatterEnd = content.indexOf('---', 3);
      if (frontmatterEnd > 0) {
        const frontmatter = content.substring(3, frontmatterEnd);
        const matches = frontmatter.match(/tags:\s*\[(.*?)\]/);
        if (matches) {
          tags = matches[1].split(',').map(t => t.trim().replace(/['"]/g, ''));
        }
      }
    }
    
    // Extract first paragraph as description
    const paragraphs = content.split('\n\n');
    for (const para of paragraphs) {
      if (para.trim() && !para.startsWith('#') && !para.startsWith('---')) {
        description = para.trim().substring(0, 200);
        break;
      }
    }
    
    // Determine type from path
    if (filePath.includes('/People/')) type = 'character';
    else if (filePath.includes('/Places/')) type = 'location';
    else if (filePath.includes('/Items/')) type = 'item';
    else if (filePath.includes('/Groups/')) type = 'faction';
    else if (filePath.includes('/Creatures/')) type = 'creature';
    else if (filePath.includes('/Adventures/')) type = 'scene';
    
    return { title, description, tags, type };
  } catch (error) {
    return { title: path.basename(filePath, '.md'), description: '', tags: [], type: '' };
  }
}

/**
 * Generate enhanced prompt based on context
 */
function generatePrompt(context, assetType) {
  const { title, description, tags, type } = context;
  
  // Base prompt
  let prompt = title;
  
  // Add type-specific enhancements
  switch (type) {
    case 'character':
      prompt = `${title} character portrait, ${description || 'fantasy RPG character'}, detailed face, professional concept art`;
      break;
    case 'location':
      prompt = `${title} location, ${description || 'fantasy setting'}, establishing shot, atmospheric lighting, detailed architecture`;
      break;
    case 'item':
      prompt = `${title} magical item, ${description || 'fantasy artifact'}, detailed textures, item showcase, game asset`;
      break;
    case 'faction':
      prompt = `${title} faction banner or symbol, ${description || 'organization emblem'}, heraldic design, medieval style`;
      break;
    case 'creature':
      prompt = `${title} creature, ${description || 'fantasy monster'}, full body, detailed anatomy, bestiary illustration`;
      break;
    case 'scene':
      prompt = `${title} scene, ${description || 'dramatic moment'}, cinematic composition, wide shot, narrative illustration`;
      break;
    default:
      prompt = `${title}, ${description || 'fantasy RPG'}, highly detailed, professional art`;
  }
  
  // Add world-specific modifiers from tags
  if (tags.includes('aquabyssos') || title.toLowerCase().includes('aquabyssos')) {
    prompt += ', underwater theme, bioluminescent, deep sea atmosphere';
  } else if (tags.includes('aethermoor') || title.toLowerCase().includes('aethermoor')) {
    prompt += ', sky islands, floating cities, ethereal atmosphere';
  } else if (tags.includes('void') || title.toLowerCase().includes('void')) {
    prompt += ', eldritch horror, cosmic void, dark atmosphere';
  }
  
  // Add quality modifiers
  prompt += ', highly detailed, 8k quality, professional fantasy art';
  
  return prompt;
}

/**
 * Scan a single markdown file for needed assets
 */
function scanFile(filePath) {
  if (processedFiles.has(filePath)) return;
  
  stats.filesScanned++;
  processedFiles.add(filePath);
  
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath, '.md');
  const context = extractContext(filePath);
  
  // Check for existing images
  const hasImage = content.includes('![') || content.includes('<img');
  const hasAudio = content.includes('.wav') || content.includes('.mp3');
  const hasVideo = content.includes('.mp4') || content.includes('.webm');
  
  // Determine what assets are needed
  const assets = [];
  
  // Priority 1: Main image for important content
  if (!hasImage && shouldHaveImage(filePath, context)) {
    const outputDir = getOutputDir(context.type);
    assets.push({
      type: 'image',
      path: path.join(process.cwd(), '04_Resources/Assets', outputDir, `${fileName.replace(/[^a-zA-Z0-9_-]/g, '_')}.png`),
      prompt: generatePrompt(context, 'image'),
      source: filePath,
      priority: 1,
      context: context
    });
  }
  
  // Priority 2: Battle map for locations
  if (context.type === 'location' && !content.includes('map')) {
    assets.push({
      type: 'map',
      path: path.join(process.cwd(), '04_Resources/Assets/Maps', `${fileName.replace(/[^a-zA-Z0-9_-]/g, '_')}_map.png`),
      prompt: `${context.title} battle map, top-down view, grid overlay, D&D style, tactical map`,
      source: filePath,
      priority: 2,
      context: context
    });
  }
  
  // Priority 3: Ambient audio for major locations
  if (context.type === 'location' && !hasAudio && isMajorLocation(context)) {
    assets.push({
      type: 'audio',
      path: path.join(process.cwd(), '04_Resources/Assets/Audio/Ambient', `${fileName.replace(/[^a-zA-Z0-9_-]/g, '_')}.wav`),
      prompt: `${context.title} ambient soundscape, ${context.description || 'atmospheric'} sounds`,
      source: filePath,
      priority: 3,
      context: context
    });
  }
  
  // Priority 4: Theme music for major characters
  if (context.type === 'character' && !hasAudio && isMajorCharacter(context)) {
    assets.push({
      type: 'audio',
      path: path.join(process.cwd(), '04_Resources/Assets/Audio/Themes', `${fileName.replace(/[^a-zA-Z0-9_-]/g, '_')}_theme.wav`),
      prompt: `${context.title} character theme music, ${context.description || 'heroic'} melody`,
      source: filePath,
      priority: 3,
      context: context
    });
  }
  
  // Add to queue
  assets.forEach(asset => {
    stats.assetsFound++;
    assetQueue.push(asset);
  });
}

/**
 * Determine if content should have an image
 */
function shouldHaveImage(filePath, context) {
  // Always generate for main content types
  if (context.type && ['character', 'location', 'item', 'creature', 'faction'].includes(context.type)) {
    return true;
  }
  
  // Skip meta files
  if (filePath.includes('#') || filePath.includes('Template') || filePath.includes('Index')) {
    return false;
  }
  
  return false;
}

/**
 * Get output directory based on content type
 */
function getOutputDir(type) {
  switch (type) {
    case 'character': return 'Portraits';
    case 'location': return 'Locations';
    case 'item': return 'Items';
    case 'creature': return 'Creatures';
    case 'faction': return 'Groups';
    case 'scene': return 'Scenes';
    default: return 'Generated';
  }
}

/**
 * Check if location is major (worth generating audio)
 */
function isMajorLocation(context) {
  const content = context.description + ' ' + context.title;
  return content.includes('city') || content.includes('capital') || 
         content.includes('temple') || content.includes('palace') ||
         content.includes('major') || context.tags.includes('important');
}

/**
 * Check if character is major (worth generating theme)
 */
function isMajorCharacter(context) {
  const content = context.description + ' ' + context.title;
  return content.includes('lord') || content.includes('queen') || 
         content.includes('king') || content.includes('captain') ||
         content.includes('major') || context.tags.includes('important') ||
         context.tags.includes('npc');
}

/**
 * Crawl directory recursively
 */
function crawlDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    // Skip certain directories
    if (file.startsWith('.') || 
        file === 'node_modules' || 
        file === '09_Performance' ||
        file === '04_Resources' ||
        file === 'scripts') {
      continue;
    }
    
    if (stat.isDirectory()) {
      crawlDirectory(filePath);
    } else if (file.endsWith('.md')) {
      scanFile(filePath);
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
  
  // Skip if file already exists
  if (fs.existsSync(asset.path)) {
    console.log(`⏭️ Skipping existing: ${path.basename(asset.path)}`);
    return true;
  }
  
  try {
    let result;
    
    switch (asset.type) {
      case 'image':
      case 'map':
        result = await tools.generateImage(asset.prompt, {
          method: 'auto',
          width: asset.type === 'map' ? 1024 : 512,
          height: asset.type === 'map' ? 1024 : 512
        });
        break;
        
      case 'audio':
        result = await tools.generateAudio(asset.prompt, {
          duration: 60,
          method: 'audiocraft'
        });
        break;
        
      case 'video':
        result = await tools.generateVideo(asset.prompt, {
          frames: 24,
          fps: 8,
          method: 'animatediff'
        });
        break;
    }
    
    if (result) {
      // Save the result
      if (Buffer.isBuffer(result)) {
        fs.writeFileSync(asset.path, result);
      }
      
      stats.assetsGenerated++;
      console.log(`✅ Generated: ${path.basename(asset.path)}`);
      
      // Update source file with asset link
      updateSourceFile(asset);
      
      return true;
    }
  } catch (error) {
    console.error(`❌ Failed: ${error.message}`);
    stats.assetsFailed++;
    return false;
  }
}

/**
 * Update source markdown with generated asset
 */
function updateSourceFile(asset) {
  if (!asset.source || !fs.existsSync(asset.source)) return;
  
  try {
    let content = fs.readFileSync(asset.source, 'utf8');
    const relativePath = path.relative(path.dirname(asset.source), asset.path);
    
    // Add asset reference based on type
    if (asset.type === 'image' || asset.type === 'map') {
      // Check if image already exists
      if (content.includes('![')) return;
      
      // Add after frontmatter
      const frontmatterEnd = content.indexOf('---', 3);
      if (frontmatterEnd > 0) {
        const before = content.substring(0, frontmatterEnd + 3);
        const after = content.substring(frontmatterEnd + 3);
        content = `${before}\n\n![${asset.context.title}](${relativePath})${after}`;
      } else {
        content = `![${asset.context.title}](${relativePath})\n\n${content}`;
      }
      
      fs.writeFileSync(asset.source, content);
      console.log(`📝 Updated: ${path.basename(asset.source)}`);
    }
  } catch (error) {
    console.error(`Failed to update source: ${error.message}`);
  }
}

/**
 * Process assets in batches
 */
async function processBatches() {
  // Sort by priority
  assetQueue.sort((a, b) => a.priority - b.priority);
  
  while (assetQueue.length > 0) {
    stats.batchesProcessed++;
    
    // Get next batch
    const batch = assetQueue.splice(0, BATCH_SIZE);
    
    console.log(`\n📦 Processing Batch ${stats.batchesProcessed}`);
    console.log(`   Assets in batch: ${batch.length}`);
    console.log(`   Remaining in queue: ${assetQueue.length}`);
    console.log('');
    
    // Process batch
    for (const asset of batch) {
      await generateAsset(asset);
      
      // Delay between assets
      await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_ASSETS));
    }
    
    // Save progress
    saveProgress();
    
    // Delay between batches
    if (assetQueue.length > 0) {
      console.log(`\n⏸️ Pausing ${DELAY_BETWEEN_BATCHES / 1000} seconds before next batch...`);
      await new Promise(resolve => setTimeout(resolve, DELAY_BETWEEN_BATCHES));
    }
  }
}

/**
 * Save progress to file
 */
function saveProgress() {
  const progress = {
    timestamp: new Date().toISOString(),
    stats: stats,
    queueLength: assetQueue.length,
    processedFiles: Array.from(processedFiles)
  };
  
  fs.writeFileSync(
    path.join(process.cwd(), '09_Performance', 'crawler_progress.json'),
    JSON.stringify(progress, null, 2)
  );
}

/**
 * Load previous progress
 */
function loadProgress() {
  const progressFile = path.join(process.cwd(), '09_Performance', 'crawler_progress.json');
  if (fs.existsSync(progressFile)) {
    try {
      const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));
      progress.processedFiles.forEach(file => processedFiles.add(file));
      console.log(`📂 Loaded progress: ${processedFiles.size} files already processed`);
      return true;
    } catch (error) {
      console.error(`Failed to load progress: ${error.message}`);
    }
  }
  return false;
}

/**
 * Main execution
 */
async function main() {
  console.log('🕷️ VAULT ASSET CRAWLER');
  console.log('=' .repeat(60));
  console.log(`Batch Size: ${BATCH_SIZE} assets`);
  console.log(`Delay Between Assets: ${DELAY_BETWEEN_ASSETS / 1000}s`);
  console.log(`Delay Between Batches: ${DELAY_BETWEEN_BATCHES / 1000}s`);
  console.log('');
  
  // Load previous progress
  loadProgress();
  
  // Check services
  console.log('🔍 Checking services...');
  const services = await tools.checkAllServices();
  console.log('Service status:', services);
  console.log('');
  
  // Crawl vault
  console.log('🕸️ Crawling vault for assets...');
  crawlDirectory(process.cwd());
  
  console.log(`\n📊 Crawl Complete:`);
  console.log(`   Files scanned: ${stats.filesScanned}`);
  console.log(`   Assets found: ${stats.assetsFound}`);
  console.log(`   Batches needed: ${Math.ceil(assetQueue.length / BATCH_SIZE)}`);
  
  if (assetQueue.length === 0) {
    console.log('\n✨ No new assets needed!');
    return;
  }
  
  // Process in batches
  console.log('\n🚀 Starting batch processing...');
  await processBatches();
  
  // Final report
  const duration = Math.round((Date.now() - stats.startTime) / 1000);
  console.log('\n' + '=' .repeat(60));
  console.log('📊 CRAWL COMPLETE');
  console.log('=' .repeat(60));
  console.log(`✅ Generated: ${stats.assetsGenerated} assets`);
  console.log(`❌ Failed: ${stats.assetsFailed} assets`);
  console.log(`📦 Batches: ${stats.batchesProcessed}`);
  console.log(`⏱️ Duration: ${duration} seconds (${Math.round(duration / 60)} minutes)`);
  
  // Save final report
  const report = {
    timestamp: new Date().toISOString(),
    duration: duration,
    stats: stats,
    success: true
  };
  
  fs.writeFileSync(
    path.join(process.cwd(), '09_Performance', 'crawler_final_report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('\n📄 Report saved to: 09_Performance/crawler_final_report.json');
}

// Handle interruption
process.on('SIGINT', () => {
  console.log('\n\n⚠️ Interrupted! Saving progress...');
  saveProgress();
  console.log('✅ Progress saved. Run again to continue.');
  process.exit(0);
});

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  crawlDirectory,
  generateAsset,
  processBatches
};
