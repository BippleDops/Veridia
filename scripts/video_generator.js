#!/usr/bin/env node

/**
 * VIDEO GENERATOR FOR COMFYUI
 * ===========================
 * Generates animated videos from static images using ComfyUI workflows
 */

const fs = require('fs');
const path = require('path');
const fetch = require('node:fetch');

const COMFY_URL = 'http://localhost:8188';

class VideoGenerator {
  constructor() {
    this.workflows = {
      // Image to Video workflow for scene animations
      imageToVideo: {
        prompt: {
          '1': {
            'inputs': { 
              'image': null, // Will be set dynamically
              'upload': 'image'
            },
            'class_type': 'LoadImage'
          },
          '2': {
            'inputs': {
              'text': '', // Motion prompt
              'clip': null
            },
            'class_type': 'CLIPTextEncode'
          },
          '3': {
            'inputs': {
              'width': 512,
              'height': 512,
              'fps': 8,
              'frames': 16,
              'motion_scale': 1.0,
              'augmentation_level': 0.5,
              'image': ['1', 0],
              'positive': ['2', 0]
            },
            'class_type': 'AnimateDiffSampler'
          },
          '4': {
            'inputs': {
              'images': ['3', 0],
              'filename_prefix': 'video',
              'format': 'mp4'
            },
            'class_type': 'SaveVideo'
          }
        }
      },
      
      // Combat animation workflow
      combatAnimation: {
        prompt: {
          '1': {
            'inputs': {
              'text': '', // Combat description
              'max_frames': 24,
              'fps': 12
            },
            'class_type': 'TextToAnimation'
          },
          '2': {
            'inputs': {
              'animation': ['1', 0],
              'style': 'epic_combat',
              'camera_movement': 'dynamic'
            },
            'class_type': 'StyleTransfer'
          },
          '3': {
            'inputs': {
              'animation': ['2', 0],
              'filename_prefix': 'combat'
            },
            'class_type': 'SaveAnimation'
          }
        }
      },
      
      // Environment pan workflow
      environmentPan: {
        prompt: {
          '1': {
            'inputs': {
              'image': null,
              'pan_direction': 'horizontal',
              'duration': 3,
              'fps': 30
            },
            'class_type': 'PanoramicAnimation'
          },
          '2': {
            'inputs': {
              'animation': ['1', 0],
              'effects': ['parallax', 'depth_blur']
            },
            'class_type': 'AddEffects'
          },
          '3': {
            'inputs': {
              'animation': ['2', 0],
              'filename_prefix': 'environment'
            },
            'class_type': 'SaveVideo'
          }
        }
      }
    };
  }

  /**
   * Generate video from image with motion prompt
   */
  async generateVideoFromImage(imagePath, motionPrompt, outputPath) {
    try {
      console.log(`🎬 Generating video from: ${path.basename(imagePath)}`);
      console.log(`   Motion: ${motionPrompt}`);
      
      // Read and encode image
      const imageBuffer = fs.readFileSync(imagePath);
      const imageBase64 = imageBuffer.toString('base64');
      
      // Prepare workflow
      const workflow = JSON.parse(JSON.stringify(this.workflows.imageToVideo.prompt));
      workflow['1'].inputs.image = imageBase64;
      workflow['2'].inputs.text = motionPrompt;
      
      // Submit to ComfyUI
      const response = await fetch(`${COMFY_URL}/prompt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: workflow })
      });
      
      if (!response.ok) {
        throw new Error(`ComfyUI error: ${response.status}`);
      }
      
      const result = await response.json();
      console.log(`   ✅ Video generation started: ${result.prompt_id}`);
      
      // Wait for completion and get output
      const videoPath = await this.waitForVideo(result.prompt_id, outputPath);
      return videoPath;
      
    } catch (error) {
      console.error(`   ❌ Video generation failed: ${error.message}`);
      return null;
    }
  }

  /**
   * Generate combat animation from description
   */
  async generateCombatAnimation(description, outputPath) {
    console.log(`⚔️ Generating combat animation: ${description.substring(0, 50)}...`);
    
    const workflow = JSON.parse(JSON.stringify(this.workflows.combatAnimation.prompt));
    workflow['1'].inputs.text = description;
    
    // Submit and process
    const response = await fetch(`${COMFY_URL}/prompt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: workflow })
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log(`   ✅ Combat animation queued: ${result.prompt_id}`);
      return await this.waitForVideo(result.prompt_id, outputPath);
    }
    
    return null;
  }

  /**
   * Create environment pan video
   */
  async generateEnvironmentPan(imagePath, direction = 'horizontal', outputPath) {
    console.log(`🌍 Generating environment pan: ${path.basename(imagePath)}`);
    
    const imageBuffer = fs.readFileSync(imagePath);
    const imageBase64 = imageBuffer.toString('base64');
    
    const workflow = JSON.parse(JSON.stringify(this.workflows.environmentPan.prompt));
    workflow['1'].inputs.image = imageBase64;
    workflow['1'].inputs.pan_direction = direction;
    
    const response = await fetch(`${COMFY_URL}/prompt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: workflow })
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log(`   ✅ Pan animation queued: ${result.prompt_id}`);
      return await this.waitForVideo(result.prompt_id, outputPath);
    }
    
    return null;
  }

  /**
   * Wait for video generation to complete
   */
  async waitForVideo(promptId, outputPath) {
    const maxWait = 120000; // 2 minutes
    const checkInterval = 2000; // 2 seconds
    const startTime = Date.now();
    
    while (Date.now() - startTime < maxWait) {
      try {
        const response = await fetch(`${COMFY_URL}/history/${promptId}`);
        if (response.ok) {
          const history = await response.json();
          
          if (history[promptId] && history[promptId].outputs) {
            // Check for video output
            const outputs = history[promptId].outputs;
            for (const nodeId in outputs) {
              if (outputs[nodeId].videos && outputs[nodeId].videos.length > 0) {
                const videoInfo = outputs[nodeId].videos[0];
                const videoUrl = `${COMFY_URL}/view?filename=${videoInfo.filename}&type=output`;
                
                // Download video
                const videoResponse = await fetch(videoUrl);
                const videoBuffer = await videoResponse.arrayBuffer();
                fs.writeFileSync(outputPath, Buffer.from(videoBuffer));
                
                console.log(`   ✅ Video saved: ${outputPath}`);
                return outputPath;
              }
            }
          }
        }
      } catch (error) {
        // Continue waiting
      }
      
      await new Promise(resolve => setTimeout(resolve, checkInterval));
    }
    
    throw new Error('Video generation timeout');
  }

  /**
   * Generate context-aware motion prompts
   */
  generateMotionPrompt(context) {
    const { type, title, description } = context;
    
    const motionTemplates = {
      character: [
        "subtle breathing animation, slight head turn, blinking eyes",
        "gentle wind effect on hair and clothing, atmospheric particles",
        "magical aura pulsing, energy flowing around character"
      ],
      location: [
        "slow camera pan across scene, parallax depth layers",
        "atmospheric effects, moving clouds, water ripples",
        "day to night transition, changing lighting"
      ],
      combat: [
        "sword clash impact, sparks flying, dynamic action",
        "spell casting effects, energy burst, magical explosion",
        "creature attack animation, dramatic movement"
      ],
      item: [
        "rotating display, gleaming highlights, magical glow",
        "energy pulsing through artifact, mystical effects",
        "transformation sequence, power activation"
      ]
    };
    
    // Select appropriate motion based on context
    let motions = motionTemplates[type] || motionTemplates.location;
    
    // Add context-specific elements
    if (description.includes('underwater')) {
      return "underwater caustics, bubbles rising, seaweed swaying, bioluminescent particles";
    }
    if (description.includes('flying') || description.includes('airship')) {
      return "clouds drifting, propellers spinning, steam effects, birds flying";
    }
    if (description.includes('magic')) {
      return "magical energy swirling, runes glowing, mystical particles floating";
    }
    
    return motions[Math.floor(Math.random() * motions.length)];
  }
}

// Export for use in other scripts
module.exports = VideoGenerator;

// CLI usage
if (require.main === module) {
  const generator = new VideoGenerator();
  
  // Test with example
  const testImage = process.argv[2] || 'test_dragon.png';
  const motionPrompt = process.argv[3] || 'dragon breathing fire, wings spreading, dramatic lighting';
  const outputPath = process.argv[4] || 'test_video.mp4';
  
  if (fs.existsSync(testImage)) {
    generator.generateVideoFromImage(testImage, motionPrompt, outputPath)
      .then(result => {
        if (result) {
          console.log('✨ Video generation complete!');
        } else {
          console.log('❌ Video generation failed');
        }
      })
      .catch(console.error);
  } else {
    console.log('Usage: node video_generator.js <image_path> <motion_prompt> <output_path>');
    console.log('Example: node video_generator.js dragon.png "fire breathing" dragon_video.mp4');
  }
}
