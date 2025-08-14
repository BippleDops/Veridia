#!/usr/bin/env node

/**
 * PARALLEL OPTIMIZATION SYSTEM
 * ============================
 * Maximizes throughput by running multiple specialized generators
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const EnhancedPromptGenerator = require('./enhanced_prompt_generator');
const { generateImageViaComfy } = require('./comfy_client');

class ParallelOptimizer {
  constructor() {
    this.promptGenerator = new EnhancedPromptGenerator();
    this.workers = [];
    this.stats = {
      images: 0,
      audio: 0,
      startTime: Date.now(),
      workers: 0
    };
    
    // Optimized configuration
    this.config = {
      maxWorkers: 5, // Run 5 parallel workers
      batchSize: 20, // Larger batches
      delayBetweenAssets: 1000, // Reduced delay (1 second)
      delayBetweenBatches: 5000, // Reduced batch delay (5 seconds)
      priorityDirs: [
        '02_Worldbuilding/People',
        '02_Worldbuilding/Places', 
        '02_Worldbuilding/Items',
        '02_Worldbuilding/Groups',
        '01_Adventures'
      ]
    };
  }

  /**
   * Start optimized parallel generation
   */
  async start() {
    console.log('⚡ PARALLEL OPTIMIZATION SYSTEM');
    console.log('================================\n');
    
    // Load existing progress
    const progress = this.loadProgress();
    const processed = new Set(progress.processed || []);
    
    // Scan and categorize all files
    const allFiles = this.scanVault();
    console.log(`📊 Found ${allFiles.length} total files\n`);
    
    // Filter unprocessed files
    const unprocessed = allFiles.filter(f => !processed.has(f.id));
    console.log(`🎯 ${unprocessed.length} files need processing\n`);
    
    // Categorize by type for specialized processing
    const categories = {
      portraits: unprocessed.filter(f => f.type === 'character'),
      locations: unprocessed.filter(f => f.type === 'location'),
      items: unprocessed.filter(f => f.type === 'item'),
      creatures: unprocessed.filter(f => f.type === 'creature'),
      misc: unprocessed.filter(f => !['character', 'location', 'item', 'creature'].includes(f.type))
    };
    
    console.log('📁 File Distribution:');
    console.log(`  • Portraits: ${categories.portraits.length}`);
    console.log(`  • Locations: ${categories.locations.length}`);
    console.log(`  • Items: ${categories.items.length}`);
    console.log(`  • Creatures: ${categories.creatures.length}`);
    console.log(`  • Misc: ${categories.misc.length}\n`);
    
    // Launch specialized workers
    console.log('🚀 Launching parallel workers...\n');
    
    // Worker 1: High-priority portraits
    this.launchWorker('portraits', categories.portraits.slice(0, 2000), {
      batchSize: 25,
      delay: 800,
      generateAudio: false
    });
    
    // Worker 2: Locations with audio
    this.launchWorker('locations', categories.locations, {
      batchSize: 15,
      delay: 1200,
      generateAudio: true
    });
    
    // Worker 3: Items (fast generation)
    this.launchWorker('items', categories.items, {
      batchSize: 30,
      delay: 600,
      generateAudio: false
    });
    
    // Worker 4: Creatures
    this.launchWorker('creatures', categories.creatures, {
      batchSize: 20,
      delay: 1000,
      generateAudio: false
    });
    
    // Worker 5: Mixed/Misc
    this.launchWorker('misc', categories.misc, {
      batchSize: 20,
      delay: 1000,
      generateAudio: false
    });
    
    // Monitor progress
    this.startMonitoring();
  }

  /**
   * Launch a specialized worker
   */
  launchWorker(name, files, config) {
    if (files.length === 0) return;
    
    const workerScript = `
      const fs = require('fs');
      const path = require('path');
      const EnhancedPromptGenerator = require('./enhanced_prompt_generator');
      const AudioGenerator = require('./audio_generator');
      const { generateImageViaComfy } = require('./comfy_client');
      
      const promptGen = new EnhancedPromptGenerator();
      ${config.generateAudio ? 'const audioGen = new AudioGenerator();' : ''}
      
      async function processFiles() {
        const files = ${JSON.stringify(files)};
        const config = ${JSON.stringify(config)};
        let processed = 0;
        
        console.log('[${name}] Starting with ${files.length} files');
        
        for (let i = 0; i < files.length; i += config.batchSize) {
          const batch = files.slice(i, i + config.batchSize);
          
          for (const file of batch) {
            try {
              // Generate prompt
              const promptData = promptGen.generatePrompt(file.context);
              
              // Generate image
              const imageBuffer = await generateImageViaComfy({
                prompt: promptData.prompt,
                width: promptData.settings.width,
                height: promptData.settings.height,
                seed: Math.floor(Math.random() * 1000000)
              });
              
              if (imageBuffer && imageBuffer.length > 0) {
                // Save image
                const outputDir = path.join(process.cwd(), '04_Resources/Assets/Generated', file.category);
                if (!fs.existsSync(outputDir)) {
                  fs.mkdirSync(outputDir, { recursive: true });
                }
                
                const safeName = file.context.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                const imagePath = path.join(outputDir, safeName + '.png');
                fs.writeFileSync(imagePath, imageBuffer);
                
                // Save metadata
                const metadata = {
                  ...file.context,
                  prompt: promptData.prompt,
                  generated: new Date().toISOString()
                };
                fs.writeFileSync(imagePath.replace('.png', '.json'), JSON.stringify(metadata, null, 2));
                
                ${config.generateAudio ? `
                // Generate audio for locations
                if (file.type === 'location') {
                  try {
                    const audioPath = imagePath.replace('.png', '_ambient.mp3');
                    await audioGen.generateAmbientAudio(file.context, audioPath);
                    console.log('[${name}] Audio generated for', safeName);
                  } catch (e) {
                    // Continue on audio failure
                  }
                }
                ` : ''}
                
                processed++;
                if (processed % 10 === 0) {
                  console.log('[${name}] Processed', processed, '/', files.length);
                }
              }
              
              await new Promise(r => setTimeout(r, config.delay));
            } catch (error) {
              console.error('[${name}] Error:', error.message);
            }
          }
          
          // Batch delay
          if (i + config.batchSize < files.length) {
            await new Promise(r => setTimeout(r, 3000));
          }
        }
        
        console.log('[${name}] Complete! Processed', processed, 'files');
      }
      
      processFiles().catch(console.error);
    `;
    
    // Write worker script
    const workerPath = path.join(process.cwd(), `scripts/worker_${name}.js`);
    fs.writeFileSync(workerPath, workerScript);
    
    // Launch worker
    const worker = spawn('node', [workerPath], {
      detached: true,
      stdio: ['ignore', 
        fs.openSync(`09_Performance/worker_${name}.log`, 'a'),
        fs.openSync(`09_Performance/worker_${name}.log`, 'a')
      ]
    });
    
    worker.unref();
    this.workers.push({ name, pid: worker.pid, count: files.length });
    this.stats.workers++;
    
    console.log(`✅ Worker [${name}] launched (PID: ${worker.pid}) - Processing ${files.length} files`);
  }

  /**
   * Scan vault for all files
   */
  scanVault() {
    const files = [];
    
    const scanDir = (dir, category) => {
      if (!fs.existsSync(dir)) return;
      
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory() && !entry.name.startsWith('.')) {
          scanDir(fullPath, category);
        } else if (entry.name.endsWith('.md')) {
          const context = this.extractContext(fullPath);
          if (context) {
            files.push({
              id: fullPath.replace(process.cwd(), ''),
              path: fullPath,
              context,
              type: context.type,
              category: category || 'Misc'
            });
          }
        }
      }
    };
    
    // Scan priority directories
    scanDir(path.join(process.cwd(), '02_Worldbuilding/People'), 'Portraits');
    scanDir(path.join(process.cwd(), '02_Worldbuilding/Places'), 'Locations');
    scanDir(path.join(process.cwd(), '02_Worldbuilding/Items'), 'Items');
    scanDir(path.join(process.cwd(), '02_Worldbuilding/Creatures'), 'Creatures');
    scanDir(path.join(process.cwd(), '02_Worldbuilding/Groups'), 'Groups');
    scanDir(path.join(process.cwd(), '01_Adventures'), 'Scenes');
    scanDir(path.join(process.cwd(), '03_Mechanics'), 'Misc');
    
    return files;
  }

  /**
   * Extract context from file
   */
  extractContext(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath, '.md');
      
      let title = fileName;
      let description = '';
      let tags = [];
      let type = 'misc';
      
      // Extract title
      const titleMatch = content.match(/^#\s+(.+)$/m);
      if (titleMatch) title = titleMatch[1];
      
      // Extract description
      const paragraphs = content.split('\n\n');
      for (const para of paragraphs) {
        if (para.trim() && !para.startsWith('#') && !para.startsWith('---')) {
          description = para.trim().substring(0, 300);
          break;
        }
      }
      
      // Determine type
      if (filePath.includes('/People/')) type = 'character';
      else if (filePath.includes('/Places/')) type = 'location';
      else if (filePath.includes('/Items/')) type = 'item';
      else if (filePath.includes('/Creatures/')) type = 'creature';
      else if (filePath.includes('/Groups/')) type = 'faction';
      
      return { title, description, tags, type, filePath };
    } catch (error) {
      return null;
    }
  }

  /**
   * Load progress
   */
  loadProgress() {
    try {
      const progressFile = path.join(process.cwd(), '09_Performance/parallel_progress.json');
      if (fs.existsSync(progressFile)) {
        return JSON.parse(fs.readFileSync(progressFile, 'utf8'));
      }
    } catch (error) {
      // Ignore
    }
    return { processed: [] };
  }

  /**
   * Start monitoring system
   */
  startMonitoring() {
    setInterval(() => {
      const elapsed = (Date.now() - this.stats.startTime) / 1000 / 60;
      
      // Count generated files
      const imageCount = this.countFiles('04_Resources/Assets/Generated', '.png');
      const audioCount = this.countFiles('04_Resources/Assets/Generated', '.mp3');
      
      console.log('\n📊 PARALLEL GENERATION STATUS');
      console.log('==============================');
      console.log(`Time Elapsed: ${elapsed.toFixed(1)} minutes`);
      console.log(`Active Workers: ${this.stats.workers}`);
      console.log(`Images Generated: ${imageCount}`);
      console.log(`Audio Generated: ${audioCount}`);
      console.log(`Generation Rate: ${(imageCount / elapsed).toFixed(1)} assets/min`);
      
      // Check worker status
      console.log('\nWorker Status:');
      this.workers.forEach(w => {
        const logFile = `09_Performance/worker_${w.name}.log`;
        if (fs.existsSync(logFile)) {
          const log = fs.readFileSync(logFile, 'utf8');
          const matches = log.match(/Processed (\d+)/g);
          if (matches && matches.length > 0) {
            const lastMatch = matches[matches.length - 1];
            console.log(`  [${w.name}] ${lastMatch} / ${w.count}`);
          }
        }
      });
      
    }, 30000); // Every 30 seconds
  }

  /**
   * Count files with extension
   */
  countFiles(dir, ext) {
    let count = 0;
    
    const scan = (d) => {
      if (!fs.existsSync(d)) return;
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) {
          scan(path.join(d, entry.name));
        } else if (entry.name.endsWith(ext)) {
          count++;
        }
      }
    };
    
    scan(dir);
    return count;
  }
}

// Launch optimizer
if (require.main === module) {
  const optimizer = new ParallelOptimizer();
  optimizer.start().catch(console.error);
}

module.exports = ParallelOptimizer;
