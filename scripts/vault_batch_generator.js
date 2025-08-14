#!/usr/bin/env node

/**
 * VAULT BATCH ASSET GENERATOR
 * ===========================
 * Batch processes asset generation for the entire vault using ComfyUI
 * with nuanced, context-aware prompts
 */

const fs = require('fs');
const path = require('path');
const EnhancedPromptGenerator = require('./enhanced_prompt_generator');
const { generateImageViaComfy } = require('./comfy_client');

// Configuration
const CONFIG = {
  batchSize: 10, // Process 10 assets at a time
  delayBetweenAssets: 3000, // 3 seconds between each asset
  delayBetweenBatches: 15000, // 15 seconds between batches
  maxRetries: 2,
  outputDir: path.join(process.cwd(), '04_Resources/Assets/Generated'),
  progressFile: path.join(process.cwd(), '09_Performance/generation_progress.json'),
  logFile: path.join(process.cwd(), '09_Performance/batch_generator.log')
};

// Initialize components
const promptGenerator = new EnhancedPromptGenerator();
const assetQueue = [];
const processedAssets = new Set();
const failedAssets = new Map();

// Statistics
const stats = {
  filesScanned: 0,
  assetsQueued: 0,
  assetsGenerated: 0,
  assetsFailed: 0,
  batchesProcessed: 0,
  startTime: Date.now(),
  currentBatch: 0
};

/**
 * Log message to console and file
 */
function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  console.log(logMessage);
  
  try {
    fs.appendFileSync(CONFIG.logFile, logMessage + '\n');
  } catch (error) {
    // Silent fail for logging
  }
}

/**
 * Load progress from previous run
 */
function loadProgress() {
  try {
    if (fs.existsSync(CONFIG.progressFile)) {
      const progress = JSON.parse(fs.readFileSync(CONFIG.progressFile, 'utf8'));
      progress.processed.forEach(asset => processedAssets.add(asset));
      log(`Loaded progress: ${processedAssets.size} assets already processed`);
      return progress;
    }
  } catch (error) {
    log(`Could not load progress: ${error.message}`, 'WARN');
  }
  return { processed: [], failed: {} };
}

/**
 * Save progress
 */
function saveProgress() {
  try {
    const progress = {
      processed: Array.from(processedAssets),
      failed: Object.fromEntries(failedAssets),
      stats: stats,
      lastUpdate: new Date().toISOString()
    };
    fs.writeFileSync(CONFIG.progressFile, JSON.stringify(progress, null, 2));
  } catch (error) {
    log(`Could not save progress: ${error.message}`, 'ERROR');
  }
}

/**
 * Extract context from markdown file
 */
function extractContext(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath, '.md');
    
    // Extract title from first heading or filename
    let title = fileName;
    const titleMatch = content.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      title = titleMatch[1];
    }
    
    // Extract description from first paragraph
    let description = '';
    const paragraphs = content.split('\n\n');
    for (const para of paragraphs) {
      if (para.trim() && !para.startsWith('#') && !para.startsWith('---') && !para.startsWith('!')) {
        description = para.trim().substring(0, 300);
        break;
      }
    }
    
    // Extract tags from frontmatter
    let tags = [];
    if (content.startsWith('---')) {
      const frontmatterEnd = content.indexOf('---', 3);
      if (frontmatterEnd > 0) {
        const frontmatter = content.substring(3, frontmatterEnd);
        const tagMatch = frontmatter.match(/tags:\s*\[(.*?)\]/);
        if (tagMatch) {
          tags = tagMatch[1].split(',').map(t => t.trim().replace(/['"]/g, ''));
        }
      }
    }
    
    // Determine type from path
    let type = 'scene';
    if (filePath.includes('/People/') || filePath.includes('/NPCs/')) type = 'character';
    else if (filePath.includes('/Places/') || filePath.includes('/Locations/')) type = 'location';
    else if (filePath.includes('/Items/') || filePath.includes('/Equipment/')) type = 'item';
    else if (filePath.includes('/Creatures/') || filePath.includes('/Monsters/')) type = 'creature';
    else if (filePath.includes('/Groups/') || filePath.includes('/Factions/')) type = 'faction';
    
    return { title, description, tags, type, filePath };
  } catch (error) {
    log(`Error extracting context from ${filePath}: ${error.message}`, 'ERROR');
    return null;
  }
}

/**
 * Check if file needs assets
 */
function needsAssets(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has images
    if (content.includes('![') && content.includes('](')) {
      const imageMatch = content.match(/!\[.*?\]\((.*?)\)/);
      if (imageMatch && fs.existsSync(path.join(process.cwd(), imageMatch[1]))) {
        return false;
      }
    }
    
    // Skip certain file types
    const fileName = path.basename(filePath);
    const skipPatterns = [
      /^_/, // Files starting with underscore
      /template/i, // Template files
      /index/i, // Index files
      /readme/i, // README files
      /\.canvas$/, // Canvas files
      /\.json$/ // JSON files
    ];
    
    if (skipPatterns.some(pattern => pattern.test(fileName))) {
      return false;
    }
    
    // Check if it's a content file that needs an image
    const needsImagePaths = [
      '/People/', '/NPCs/', '/Places/', '/Locations/',
      '/Items/', '/Equipment/', '/Creatures/', '/Monsters/',
      '/Groups/', '/Factions/', '/Adventures/', '/Scenes/'
    ];
    
    return needsImagePaths.some(p => filePath.includes(p));
  } catch (error) {
    return false;
  }
}

/**
 * Scan directory for files needing assets
 */
function scanDirectory(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Skip certain directories
        if (!entry.name.startsWith('.') && !entry.name.includes('node_modules')) {
          scanDirectory(fullPath);
        }
      } else if (entry.name.endsWith('.md')) {
        stats.filesScanned++;
        
        // Check if already processed
        const assetId = fullPath.replace(process.cwd(), '');
        if (processedAssets.has(assetId)) {
          continue;
        }
        
        // Check if needs assets
        if (needsAssets(fullPath)) {
          const context = extractContext(fullPath);
          if (context) {
            assetQueue.push({
              id: assetId,
              filePath: fullPath,
              context: context
            });
            stats.assetsQueued++;
          }
        }
      }
    }
  } catch (error) {
    log(`Error scanning ${dir}: ${error.message}`, 'ERROR');
  }
}

/**
 * Generate asset for a single file
 */
async function generateAsset(asset) {
  const { id, filePath, context } = asset;
  
  try {
    log(`Generating asset for: ${context.title}`);
    
    // Generate enhanced prompt
    const promptData = promptGenerator.generatePrompt(context);
    log(`  Prompt: ${promptData.prompt.substring(0, 100)}...`);
    
    // Generate image via ComfyUI
    const imageBuffer = await generateImageViaComfy({
      prompt: promptData.prompt,
      width: promptData.settings.width,
      height: promptData.settings.height,
      seed: Math.floor(Math.random() * 1000000)
    });
    
    if (!imageBuffer || imageBuffer.length === 0) {
      throw new Error('No image data received');
    }
    
    // Determine output path
    const assetType = context.type === 'character' ? 'Portraits' : 
                     context.type === 'location' ? 'Locations' :
                     context.type === 'item' ? 'Items' :
                     context.type === 'creature' ? 'Creatures' : 'Misc';
    
    const outputDir = path.join(CONFIG.outputDir, assetType);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Save image
    const safeName = context.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const outputPath = path.join(outputDir, `${safeName}.png`);
    fs.writeFileSync(outputPath, imageBuffer);
    
    // Update markdown file with image reference
    const relativePath = path.relative(path.dirname(filePath), outputPath);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Add image at the top if not present
    if (!content.includes('![')) {
      const imageTag = `![${context.title}](${relativePath})\n\n`;
      const updatedContent = content.startsWith('---') ? 
        content.replace(/---\n(.*?)\n---\n/s, (match) => match + '\n' + imageTag) :
        imageTag + content;
      
      fs.writeFileSync(filePath, updatedContent);
    }
    
    // Save metadata
    const metadataPath = path.join(outputDir, `${safeName}.json`);
    fs.writeFileSync(metadataPath, JSON.stringify({
      title: context.title,
      prompt: promptData.prompt,
      negative: promptData.negative,
      settings: promptData.settings,
      generated: new Date().toISOString(),
      sourceFile: id
    }, null, 2));
    
    processedAssets.add(id);
    stats.assetsGenerated++;
    log(`  ✅ Generated: ${outputPath}`);
    
    return true;
  } catch (error) {
    log(`  ❌ Failed: ${error.message}`, 'ERROR');
    
    // Track failures
    if (!failedAssets.has(id)) {
      failedAssets.set(id, { attempts: 1, lastError: error.message });
    } else {
      const failures = failedAssets.get(id);
      failures.attempts++;
      failures.lastError = error.message;
    }
    
    stats.assetsFailed++;
    return false;
  }
}

/**
 * Process a batch of assets
 */
async function processBatch(batch) {
  log(`\n📦 Processing batch ${stats.currentBatch + 1} (${batch.length} assets)`);
  
  for (let i = 0; i < batch.length; i++) {
    const asset = batch[i];
    log(`  [${i + 1}/${batch.length}] ${asset.context.title}`);
    
    // Check if should retry failed asset
    if (failedAssets.has(asset.id)) {
      const failures = failedAssets.get(asset.id);
      if (failures.attempts >= CONFIG.maxRetries) {
        log(`    Skipping (failed ${failures.attempts} times)`, 'WARN');
        continue;
      }
    }
    
    await generateAsset(asset);
    
    // Delay between assets
    if (i < batch.length - 1) {
      await new Promise(resolve => setTimeout(resolve, CONFIG.delayBetweenAssets));
    }
  }
  
  stats.batchesProcessed++;
  stats.currentBatch++;
  saveProgress();
  
  // Show statistics
  const elapsed = (Date.now() - stats.startTime) / 1000;
  const rate = stats.assetsGenerated / (elapsed / 60);
  log(`\n📊 Statistics:`);
  log(`  Files scanned: ${stats.filesScanned}`);
  log(`  Assets queued: ${stats.assetsQueued}`);
  log(`  Assets generated: ${stats.assetsGenerated}`);
  log(`  Assets failed: ${stats.assetsFailed}`);
  log(`  Generation rate: ${rate.toFixed(1)} assets/min`);
  log(`  Time elapsed: ${(elapsed / 60).toFixed(1)} minutes`);
}

/**
 * Main execution
 */
async function main() {
  log('\n🚀 VAULT BATCH ASSET GENERATOR');
  log('================================\n');
  
  // Load previous progress
  loadProgress();
  
  // Scan vault for assets
  log('📂 Scanning vault for files needing assets...');
  const vaultDirs = [
    '01_Adventures',
    '02_Worldbuilding',
    '03_Mechanics',
    '04_Player_Resources',
    '06_GM_Resources'
  ];
  
  for (const dir of vaultDirs) {
    const fullPath = path.join(process.cwd(), dir);
    if (fs.existsSync(fullPath)) {
      log(`  Scanning ${dir}...`);
      scanDirectory(fullPath);
    }
  }
  
  log(`\n✅ Scan complete: ${assetQueue.length} assets to generate`);
  
  if (assetQueue.length === 0) {
    log('No assets to generate. Exiting.');
    return;
  }
  
  // Process in batches
  log(`\n🎨 Starting batch generation (batch size: ${CONFIG.batchSize})`);
  
  while (assetQueue.length > 0) {
    const batch = assetQueue.splice(0, CONFIG.batchSize);
    await processBatch(batch);
    
    if (assetQueue.length > 0) {
      log(`\n⏳ Waiting ${CONFIG.delayBetweenBatches / 1000}s before next batch...`);
      await new Promise(resolve => setTimeout(resolve, CONFIG.delayBetweenBatches));
    }
  }
  
  // Final statistics
  log('\n✨ GENERATION COMPLETE');
  log('======================');
  const totalTime = (Date.now() - stats.startTime) / 1000 / 60;
  log(`Total time: ${totalTime.toFixed(1)} minutes`);
  log(`Assets generated: ${stats.assetsGenerated}`);
  log(`Assets failed: ${stats.assetsFailed}`);
  log(`Success rate: ${((stats.assetsGenerated / (stats.assetsGenerated + stats.assetsFailed)) * 100).toFixed(1)}%`);
  
  // List failed assets if any
  if (failedAssets.size > 0) {
    log('\n⚠️ Failed assets:');
    failedAssets.forEach((failure, id) => {
      log(`  ${id}: ${failure.lastError} (${failure.attempts} attempts)`);
    });
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  log('\n⚠️ Interrupted - saving progress...');
  saveProgress();
  process.exit(0);
});

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    log(`Fatal error: ${error.message}`, 'ERROR');
    console.error(error);
    process.exit(1);
  });
}

module.exports = { generateAsset, EnhancedPromptGenerator };
