#!/usr/bin/env node

/**
 * PARALLEL VIDEO GENERATION SYSTEM
 * ================================
 * Runs multiple video generators in parallel for maximum throughput
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class ParallelVideoSystem {
  constructor() {
    this.workers = [];
    this.config = {
      maxWorkers: 3,
      priorityTypes: ['combat', 'character', 'location']
    };
  }

  /**
   * Start parallel video generation
   */
  async start() {
    console.log('⚡ PARALLEL VIDEO GENERATION SYSTEM');
    console.log('====================================\n');
    
    // Find all images and categorize them
    const images = this.categorizeImages();
    
    console.log('📊 Images to process:');
    console.log(`  Combat scenes: ${images.combat.length}`);
    console.log(`  Characters: ${images.character.length}`);
    console.log(`  Locations: ${images.location.length}`);
    console.log(`  Other: ${images.other.length}\n`);
    
    // Launch specialized workers
    this.launchWorker('combat', images.combat);
    this.launchWorker('character', images.character);
    this.launchWorker('location', images.location);
    
    // Monitor progress
    this.startMonitoring();
  }

  /**
   * Categorize images by type
   */
  categorizeImages() {
    const categories = {
      combat: [],
      character: [],
      location: [],
      other: []
    };
    
    const generatedDir = path.join(process.cwd(), '04_Resources/Assets/Generated');
    
    const scan = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          scan(fullPath);
        } else if (entry.name.endsWith('.png')) {
          // Skip if video exists
          if (fs.existsSync(fullPath.replace('.png', '.mp4'))) {
            continue;
          }
          
          // Check metadata for type
          const metadataPath = fullPath.replace('.png', '.json');
          if (fs.existsSync(metadataPath)) {
            try {
              const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
              
              if (metadata.type === 'combat' || metadata.description?.includes('battle')) {
                categories.combat.push({ path: fullPath, metadata });
              } else if (metadata.type === 'character') {
                categories.character.push({ path: fullPath, metadata });
              } else if (metadata.type === 'location') {
                categories.location.push({ path: fullPath, metadata });
              } else {
                categories.other.push({ path: fullPath, metadata });
              }
            } catch (error) {
              categories.other.push({ path: fullPath, metadata: {} });
            }
          }
        }
      }
    };
    
    scan(generatedDir);
    return categories;
  }

  /**
   * Launch a video generation worker
   */
  launchWorker(type, images) {
    if (images.length === 0) {
      console.log(`No ${type} images to process`);
      return;
    }
    
    const workerScript = `
      const EnhancedVideoGenerator = require('./enhanced_video_generator');
      const generator = new EnhancedVideoGenerator();
      
      async function processVideos() {
        const images = ${JSON.stringify(images)};
        console.log('[${type}] Processing ${images.length} videos');
        
        let processed = 0;
        for (const img of images) {
          try {
            const videoPath = img.path.replace('.png', '.mp4');
            await generator.generateVideo(img.path, img.metadata, videoPath);
            
            processed++;
            if (processed % 5 === 0) {
              console.log('[${type}] Processed ${processed}/${images.length}');
            }
            
            // Delay between videos
            await new Promise(r => setTimeout(r, 2000));
          } catch (error) {
            console.error('[${type}] Error:', error.message);
          }
        }
        
        console.log('[${type}] Complete! Processed ${processed} videos');
      }
      
      processVideos().catch(console.error);
    `;
    
    // Write and launch worker
    const workerPath = path.join(process.cwd(), `scripts/video_worker_${type}.js`);
    fs.writeFileSync(workerPath, workerScript);
    
    const worker = spawn('node', [workerPath], {
      detached: true,
      stdio: ['ignore',
        fs.openSync(`09_Performance/video_${type}.log`, 'a'),
        fs.openSync(`09_Performance/video_${type}.log`, 'a')
      ]
    });
    
    worker.unref();
    this.workers.push({ type, pid: worker.pid, count: images.length });
    
    console.log(`✅ Video worker [${type}] started (PID: ${worker.pid})`);
  }

  /**
   * Monitor progress
   */
  startMonitoring() {
    console.log('\n📊 Monitoring video generation...\n');
    
    setInterval(() => {
      // Count videos
      let videoCount = 0;
      const generatedDir = path.join(process.cwd(), '04_Resources/Assets/Generated');
      
      const countVideos = (dir) => {
        if (!fs.existsSync(dir)) return;
        const entries = fs.readdirSync(dir);
        videoCount += entries.filter(f => f.endsWith('.mp4')).length;
        
        entries.forEach(entry => {
          const fullPath = path.join(dir, entry);
          if (fs.statSync(fullPath).isDirectory()) {
            countVideos(fullPath);
          }
        });
      };
      
      countVideos(generatedDir);
      
      console.log(`\n📹 Video Generation Status:`);
      console.log(`  Total videos: ${videoCount}`);
      console.log(`  Workers active: ${this.workers.length}`);
      
      // Check worker logs
      this.workers.forEach(w => {
        const logPath = `09_Performance/video_${w.type}.log`;
        if (fs.existsSync(logPath)) {
          const log = fs.readFileSync(logPath, 'utf8');
          const matches = log.match(/Processed (\d+)/g);
          if (matches && matches.length > 0) {
            console.log(`  [${w.type}]: ${matches[matches.length - 1]}`);
          }
        }
      });
      
    }, 30000); // Every 30 seconds
  }
}

// Run if called directly
if (require.main === module) {
  const system = new ParallelVideoSystem();
  system.start().catch(console.error);
}

module.exports = ParallelVideoSystem;
