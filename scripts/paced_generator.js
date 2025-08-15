#!/usr/bin/env node

/**
 * PACED GENERATOR WITH TIMEOUT PROTOCOLS
 * =======================================
 * Generates assets with calm pacing and automatic pauses
 */

const fs = require('fs');
const path = require('path');
const EnhancedPromptGenerator = require('./enhanced_prompt_generator');
const { generateImageViaComfy } = require('./comfy_client');

class PacedGenerator {
  constructor(workerName = 'paced') {
    this.workerName = workerName;
    this.promptGenerator = new EnhancedPromptGenerator();
    
    // Calm pacing configuration
    this.config = {
      batchSize: 5,                    // Small batches
      delayBetweenAssets: 5000,        // 5 seconds between assets
      delayBetweenBatches: 30000,      // 30 seconds between batches
      pauseAfterBatches: 10,           // Pause after every 10 batches
      pauseDuration: 120000,            // 2 minute pause
      maxDailyAssets: 1000,            // Daily limit
      cooldownPeriod: 3600000,         // 1 hour cooldown after limit
      retryDelay: 10000,               // 10 seconds before retry
      maxRetries: 2,                   // Max retries per asset
      quietHours: {                    // Reduced activity hours
        start: 22,                    // 10 PM
        end: 6,                       // 6 AM
        batchSize: 2,                 // Smaller batches at night
        delay: 10000                  // Longer delays at night
      }
    };
    
    this.stats = {
      generated: 0,
      failed: 0,
      batches: 0,
      startTime: Date.now(),
      dailyCount: 0,
      lastPause: Date.now()
    };
    
    this.progressFile = path.join(process.cwd(), `09_Performance/${this.workerName}_progress.json`);
  }

  /**
   * Start paced generation
   */
  async start() {
    console.log(`[${this.workerName}] Starting paced generator`);
    console.log(`[${this.workerName}] Configuration:`);
    console.log(`  • Batch size: ${this.config.batchSize}`);
    console.log(`  • Asset delay: ${this.config.delayBetweenAssets / 1000}s`);
    console.log(`  • Batch delay: ${this.config.delayBetweenBatches / 1000}s`);
    console.log(`  • Pause every: ${this.config.pauseAfterBatches} batches`);
    console.log('');
    
    // Load previous progress
    this.loadProgress();
    
    // Get files to process
    const files = await this.getUnprocessedFiles();
    console.log(`[${this.workerName}] Found ${files.length} files to process\n`);
    
    // Process with pacing
    await this.processWithPacing(files);
  }

  /**
   * Process files with pacing and timeouts
   */
  async processWithPacing(files) {
    let fileIndex = 0;
    
    while (fileIndex < files.length) {
      // Check if we should pause
      if (await this.shouldPause()) {
        await this.pauseGeneration();
      }
      
      // Check quiet hours
      const currentConfig = this.getTimeBasedConfig();
      
      // Process batch
      const batch = files.slice(fileIndex, fileIndex + currentConfig.batchSize);
      console.log(`[${this.workerName}] Processing batch ${this.stats.batches + 1} (${batch.length} files)`);
      
      for (const file of batch) {
        try {
          // Generate with retry logic
          await this.generateWithRetry(file);
          this.stats.generated++;
          this.stats.dailyCount++;
          
          // Save progress periodically
          if (this.stats.generated % 5 === 0) {
            this.saveProgress();
          }
          
          // Delay between assets
          await this.sleep(currentConfig.delay);
          
        } catch (error) {
          console.error(`[${this.workerName}] Failed: ${error.message}`);
          this.stats.failed++;
        }
      }
      
      fileIndex += currentConfig.batchSize;
      this.stats.batches++;
      
      // Batch complete message
      console.log(`[${this.workerName}] Batch ${this.stats.batches} complete`);
      console.log(`  • Generated: ${this.stats.generated}`);
      console.log(`  • Failed: ${this.stats.failed}`);
      console.log(`  • Rate: ${this.getGenerationRate()} assets/hour\n`);
      
      // Delay between batches
      if (fileIndex < files.length) {
        console.log(`[${this.workerName}] Pausing ${currentConfig.batchDelay / 1000}s before next batch...`);
        await this.sleep(currentConfig.batchDelay || this.config.delayBetweenBatches);
      }
    }
    
    console.log(`[${this.workerName}] ✅ Generation complete!`);
    this.showFinalStats();
  }

  /**
   * Generate asset with retry logic
   */
  async generateWithRetry(file, attempt = 1) {
    try {
      const context = this.extractContext(file.path);
      if (!context) throw new Error('No context extracted');
      
      // Generate prompt
      const promptData = this.promptGenerator.generatePrompt(context);
      
      // Add timeout wrapper
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Generation timeout')), 30000)
      );
      
      const generationPromise = generateImageViaComfy({
        prompt: promptData.prompt,
        width: promptData.settings.width,
        height: promptData.settings.height,
        seed: Math.floor(Math.random() * 1000000)
      });
      
      // Race between generation and timeout
      const imageBuffer = await Promise.race([generationPromise, timeoutPromise]);
      
      if (!imageBuffer || imageBuffer.length === 0) {
        throw new Error('No image data received');
      }
      
      // Save image
      const outputPath = this.getOutputPath(context);
      fs.writeFileSync(outputPath, imageBuffer);
      
      // Save metadata
      const metadata = {
        ...context,
        prompt: promptData.prompt,
        generated: new Date().toISOString(),
        worker: this.workerName
      };
      fs.writeFileSync(outputPath.replace('.png', '.json'), JSON.stringify(metadata, null, 2));
      
      console.log(`[${this.workerName}] ✓ Generated: ${path.basename(outputPath)}`);
      
    } catch (error) {
      if (attempt < this.config.maxRetries) {
        console.log(`[${this.workerName}] Retry ${attempt}/${this.config.maxRetries} for ${path.basename(file.path)}`);
        await this.sleep(this.config.retryDelay);
        return this.generateWithRetry(file, attempt + 1);
      }
      throw error;
    }
  }

  /**
   * Check if should pause
   */
  async shouldPause() {
    // Pause after certain number of batches
    if (this.stats.batches > 0 && this.stats.batches % this.config.pauseAfterBatches === 0) {
      return true;
    }
    
    // Pause if daily limit reached
    if (this.stats.dailyCount >= this.config.maxDailyAssets) {
      return true;
    }
    
    // Pause if been running too long without break
    const timeSinceLastPause = Date.now() - this.stats.lastPause;
    if (timeSinceLastPause > 3600000) { // 1 hour
      return true;
    }
    
    return false;
  }

  /**
   * Pause generation
   */
  async pauseGeneration() {
    const pauseMinutes = Math.floor(this.config.pauseDuration / 60000);
    console.log(`\n[${this.workerName}] ⏸️  Taking a ${pauseMinutes} minute break...`);
    console.log(`  Reason: Pacing protocol activated`);
    console.log(`  Resume at: ${new Date(Date.now() + this.config.pauseDuration).toLocaleTimeString()}\n`);
    
    await this.sleep(this.config.pauseDuration);
    
    this.stats.lastPause = Date.now();
    
    // Reset daily count if new day
    const now = new Date();
    if (now.getHours() === 0) {
      this.stats.dailyCount = 0;
    }
    
    console.log(`[${this.workerName}] ▶️  Resuming generation...\n`);
  }

  /**
   * Get time-based configuration
   */
  getTimeBasedConfig() {
    const hour = new Date().getHours();
    
    // Check if in quiet hours
    if (hour >= this.config.quietHours.start || hour < this.config.quietHours.end) {
      return {
        batchSize: this.config.quietHours.batchSize,
        delay: this.config.quietHours.delay,
        batchDelay: this.config.delayBetweenBatches * 2
      };
    }
    
    return {
      batchSize: this.config.batchSize,
      delay: this.config.delayBetweenAssets,
      batchDelay: this.config.delayBetweenBatches
    };
  }

  /**
   * Get unprocessed files
   */
  async getUnprocessedFiles() {
    const processed = new Set(this.loadProgress().processed || []);
    const files = [];
    
    const scanDir = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory() && !entry.name.startsWith('.')) {
          scanDir(fullPath);
        } else if (entry.name.endsWith('.md')) {
          const id = fullPath.replace(process.cwd(), '');
          if (!processed.has(id)) {
            files.push({ path: fullPath, id });
          }
        }
      }
    };
    
    // Scan priority directories
    const dirs = [
      '02_Worldbuilding/People',
      '02_Worldbuilding/Places',
      '02_Worldbuilding/Items',
      '01_Adventures'
    ];
    
    dirs.forEach(dir => scanDir(path.join(process.cwd(), dir)));
    
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
      
      return { title, description, type, filePath };
    } catch (error) {
      return null;
    }
  }

  /**
   * Get output path
   */
  getOutputPath(context) {
    const { title, type } = context;
    
    const typeMap = {
      character: 'Portraits',
      location: 'Locations',
      item: 'Items',
      creature: 'Creatures'
    };
    
    const subdir = typeMap[type] || 'Misc';
    const dir = path.join(process.cwd(), '04_Resources/Assets/Generated', subdir);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const safeName = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    return path.join(dir, `${safeName}.png`);
  }

  /**
   * Load progress
   */
  loadProgress() {
    try {
      if (fs.existsSync(this.progressFile)) {
        return JSON.parse(fs.readFileSync(this.progressFile, 'utf8'));
      }
    } catch (error) {
      // Ignore
    }
    return { processed: [] };
  }

  /**
   * Save progress
   */
  saveProgress() {
    try {
      const progress = {
        processed: [], // Would track processed files
        stats: this.stats,
        lastUpdate: new Date().toISOString()
      };
      fs.writeFileSync(this.progressFile, JSON.stringify(progress, null, 2));
    } catch (error) {
      // Ignore
    }
  }

  /**
   * Get generation rate
   */
  getGenerationRate() {
    const elapsed = (Date.now() - this.stats.startTime) / 1000 / 3600; // hours
    return (this.stats.generated / elapsed).toFixed(1);
  }

  /**
   * Show final statistics
   */
  showFinalStats() {
    const elapsed = (Date.now() - this.stats.startTime) / 1000 / 60;
    
    console.log('\n' + '='.repeat(50));
    console.log(`[${this.workerName}] FINAL STATISTICS`);
    console.log('='.repeat(50));
    console.log(`Generated: ${this.stats.generated} assets`);
    console.log(`Failed: ${this.stats.failed} assets`);
    console.log(`Success Rate: ${((this.stats.generated / (this.stats.generated + this.stats.failed)) * 100).toFixed(1)}%`);
    console.log(`Total Time: ${elapsed.toFixed(1)} minutes`);
    console.log(`Average Rate: ${this.getGenerationRate()} assets/hour`);
    console.log('='.repeat(50) + '\n');
  }

  /**
   * Sleep helper
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Export for use
module.exports = PacedGenerator;

// Run if called directly
if (require.main === module) {
  const workerName = process.argv[2] || 'paced';
  const generator = new PacedGenerator(workerName);
  generator.start().catch(console.error);
}
