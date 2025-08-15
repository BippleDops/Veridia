#!/usr/bin/env node

/**
 * ENHANCED VIDEO GENERATOR
 * ========================
 * Generates videos from images using ComfyUI workflows
 * Supports multiple video types: combat, pans, character motion
 */

const fs = require('fs');
const path = require('path');
const fetch = require('node:fetch');

const COMFY_URL = 'http://localhost:8188';

class EnhancedVideoGenerator {
  constructor() {
    this.stats = {
      videosGenerated: 0,
      videosFailed: 0,
      startTime: Date.now()
    };
  }

  /**
   * Generate video from static image
   */
  async generateVideo(imagePath, context, outputPath) {
    const { type, title, description } = context;
    
    // Select appropriate video type
    let videoType = 'pan';
    let duration = 3;
    let fps = 8;
    
    if (type === 'combat' || description?.includes('battle')) {
      videoType = 'combat';
      duration = 5;
      fps = 12;
    } else if (type === 'character') {
      videoType = 'character';
      duration = 4;
      fps = 10;
    } else if (type === 'location') {
      videoType = 'pan';
      duration = 6;
      fps = 8;
    }
    
    console.log(`🎬 Generating ${videoType} video for: ${title}`);
    
    try {
      // Read image
      const imageBuffer = fs.readFileSync(imagePath);
      const imageBase64 = imageBuffer.toString('base64');
      
      // Build workflow based on type
      const workflow = this.buildWorkflow(videoType, imageBase64, duration, fps);
      
      // Submit to ComfyUI
      const response = await fetch(`${COMFY_URL}/prompt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: workflow })
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`  ✅ Video queued: ${result.prompt_id}`);
        
        // Wait for completion
        const videoPath = await this.waitForVideo(result.prompt_id, outputPath);
        if (videoPath) {
          this.stats.videosGenerated++;
          return videoPath;
        }
      }
    } catch (error) {
      console.error(`  ❌ Video failed: ${error.message}`);
      this.stats.videosFailed++;
    }
    
    return null;
  }

  /**
   * Build video generation workflow
   */
  buildWorkflow(type, imageBase64, duration, fps) {
    const frames = duration * fps;
    
    // Base workflow structure
    const workflow = {
      '1': {
        'inputs': { 
          'image': imageBase64,
          'upload': 'image'
        },
        'class_type': 'LoadImage'
      }
    };
    
    // Add type-specific nodes
    if (type === 'combat') {
      // Combat animation with motion
      workflow['2'] = {
        'inputs': {
          'image': ['1', 0],
          'motion_type': 'combat_swing',
          'intensity': 0.8,
          'frames': frames
        },
        'class_type': 'AnimateDiffMotion'
      };
    } else if (type === 'character') {
      // Character breathing/idle animation
      workflow['2'] = {
        'inputs': {
          'image': ['1', 0],
          'motion_type': 'idle_breathing',
          'intensity': 0.3,
          'frames': frames
        },
        'class_type': 'AnimateDiffMotion'
      };
    } else {
      // Camera pan for locations
      workflow['2'] = {
        'inputs': {
          'image': ['1', 0],
          'pan_type': 'horizontal',
          'speed': 0.5,
          'frames': frames
        },
        'class_type': 'CameraPan'
      };
    }
    
    // Add video encoding
    workflow['3'] = {
      'inputs': {
        'images': ['2', 0],
        'fps': fps,
        'format': 'h264',
        'crf': 23
      },
      'class_type': 'VideoEncode'
    };
    
    // Save video
    workflow['4'] = {
      'inputs': {
        'video': ['3', 0],
        'filename_prefix': 'video'
      },
      'class_type': 'SaveVideo'
    };
    
    return workflow;
  }

  /**
   * Wait for video to complete
   */
  async waitForVideo(promptId, outputPath) {
    const maxWait = 60000; // 1 minute
    const checkInterval = 2000;
    const startTime = Date.now();
    
    while (Date.now() - startTime < maxWait) {
      try {
        const response = await fetch(`${COMFY_URL}/history/${promptId}`);
        if (response.ok) {
          const history = await response.json();
          
          if (history[promptId]?.outputs) {
            // Check for video output
            for (const nodeId in history[promptId].outputs) {
              const output = history[promptId].outputs[nodeId];
              if (output.videos?.length > 0) {
                const videoInfo = output.videos[0];
                
                // Download video
                const videoUrl = `${COMFY_URL}/view?filename=${videoInfo.filename}&type=output`;
                const videoResponse = await fetch(videoUrl);
                const videoBuffer = await videoResponse.arrayBuffer();
                
                // Save video
                fs.writeFileSync(outputPath, Buffer.from(videoBuffer));
                console.log(`  ✅ Video saved: ${outputPath}`);
                return outputPath;
              }
            }
          }
        }
      } catch (error) {
        // Continue waiting
      }
      
      await new Promise(r => setTimeout(r, checkInterval));
    }
    
    return null;
  }

  /**
   * Process all images to generate videos
   */
  async processAllImages() {
    console.log('🎬 VIDEO GENERATION SYSTEM');
    console.log('==========================\n');
    
    const generatedDir = path.join(process.cwd(), '04_Resources/Assets/Generated');
    const imageFiles = this.findAllImages(generatedDir);
    
    console.log(`Found ${imageFiles.length} images to process\n`);
    
    let processed = 0;
    for (const imagePath of imageFiles) {
      // Skip if video already exists
      const videoPath = imagePath.replace('.png', '.mp4');
      if (fs.existsSync(videoPath)) {
        continue;
      }
      
      // Load metadata for context
      const metadataPath = imagePath.replace('.png', '.json');
      if (fs.existsSync(metadataPath)) {
        try {
          const context = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
          
          // Generate video
          await this.generateVideo(imagePath, context, videoPath);
          
          processed++;
          if (processed % 10 === 0) {
            this.showStats(processed, imageFiles.length);
          }
          
          // Small delay between videos
          await new Promise(r => setTimeout(r, 1000));
        } catch (error) {
          console.error(`Error processing ${imagePath}: ${error.message}`);
        }
      }
    }
    
    this.showStats(processed, imageFiles.length);
    console.log('\n✨ Video generation complete!');
  }

  /**
   * Find all image files
   */
  findAllImages(dir) {
    const images = [];
    
    const scan = (d) => {
      if (!fs.existsSync(d)) return;
      const entries = fs.readdirSync(d, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(d, entry.name);
        if (entry.isDirectory()) {
          scan(fullPath);
        } else if (entry.name.endsWith('.png')) {
          images.push(fullPath);
        }
      }
    };
    
    scan(dir);
    return images;
  }

  /**
   * Show statistics
   */
  showStats(processed, total) {
    const elapsed = (Date.now() - this.stats.startTime) / 1000 / 60;
    const rate = this.stats.videosGenerated / elapsed;
    
    console.log('\n📊 Video Generation Stats:');
    console.log(`  Processed: ${processed}/${total}`);
    console.log(`  Generated: ${this.stats.videosGenerated}`);
    console.log(`  Failed: ${this.stats.videosFailed}`);
    console.log(`  Rate: ${rate.toFixed(1)} videos/min`);
    console.log(`  Time: ${elapsed.toFixed(1)} minutes`);
  }
}

// Export for use
module.exports = EnhancedVideoGenerator;

// Run if called directly
if (require.main === module) {
  const generator = new EnhancedVideoGenerator();
  generator.processAllImages().catch(console.error);
}
