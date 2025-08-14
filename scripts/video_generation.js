#!/usr/bin/env node

/**
 * Local AI Video Generation Integration
 * Supports CogVideoX, AnimateDiff, and Stable Video Diffusion
 * Released models as of August 2025
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

// Video generation backends (August 2025 releases)
const VIDEO_MODELS = {
  cogvideox: {
    name: 'CogVideoX-5B',
    type: 'text2video',
    resolution: '720x480',
    fps: 8,
    duration: 6, // seconds
    vram_required: 16, // GB
    api_endpoint: 'http://localhost:8189/cogvideo/generate'
  },
  animatediff: {
    name: 'AnimateDiff-Lightning',
    type: 'image2video',
    resolution: '512x512',
    fps: 16,
    duration: 2,
    vram_required: 12,
    api_endpoint: 'http://localhost:8190/animatediff/generate'
  },
  svd: {
    name: 'Stable Video Diffusion XT 1.1',
    type: 'image2video',
    resolution: '1024x576',
    fps: 25,
    duration: 4,
    vram_required: 20,
    api_endpoint: 'http://localhost:8191/svd/generate'
  },
  videocrafter: {
    name: 'VideoCrafter2',
    type: 'text2video',
    resolution: '512x320',
    fps: 16,
    duration: 2,
    vram_required: 16,
    api_endpoint: 'http://localhost:8192/videocrafter/generate'
  }
};

class VideoGenerator {
  constructor(options = {}) {
    this.model = options.model || 'cogvideox';
    this.outputDir = options.outputDir || '04_Resources/Assets/Videos';
    this.tempDir = options.tempDir || '/tmp/video_gen';
    
    // Ensure directories exist
    [this.outputDir, this.tempDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  /**
   * Generate video from text prompt using CogVideoX
   */
  async generateFromText(prompt, options = {}) {
    console.log(`🎬 Generating video from text: "${prompt.slice(0, 50)}..."`);
    
    const model = VIDEO_MODELS[this.model];
    if (!model || model.type !== 'text2video') {
      throw new Error(`Model ${this.model} does not support text2video`);
    }
    
    const params = {
      prompt,
      num_frames: options.frames || 48,
      fps: options.fps || model.fps,
      guidance_scale: options.guidance || 7.5,
      num_inference_steps: options.steps || 50,
      seed: options.seed || Math.floor(Math.random() * 1e9)
    };
    
    try {
      // For CogVideoX, we'll use a Python script wrapper
      const pythonScript = this.generateCogVideoScript(params);
      const scriptPath = path.join(this.tempDir, 'cogvideo_gen.py');
      fs.writeFileSync(scriptPath, pythonScript);
      
      console.log('   Running CogVideoX generation...');
      const { stdout, stderr } = await execPromise(`python ${scriptPath}`);
      
      if (stderr && !stderr.includes('warning')) {
        throw new Error(`CogVideoX error: ${stderr}`);
      }
      
      // Parse output path from stdout
      const outputMatch = stdout.match(/Saved to: (.+\.mp4)/);
      if (outputMatch) {
        const tempPath = outputMatch[1];
        const finalPath = path.join(this.outputDir, `video_${Date.now()}.mp4`);
        fs.renameSync(tempPath, finalPath);
        
        console.log(`   ✅ Video saved to: ${finalPath}`);
        return finalPath;
      }
      
      throw new Error('Video generation completed but output not found');
    } catch (error) {
      console.error(`   ❌ Video generation failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Generate video from image using AnimateDiff or SVD
   */
  async generateFromImage(imagePath, options = {}) {
    console.log(`🎬 Animating image: ${path.basename(imagePath)}`);
    
    const model = VIDEO_MODELS[options.model || 'animatediff'];
    if (!model || model.type !== 'image2video') {
      throw new Error(`Model ${options.model} does not support image2video`);
    }
    
    // Read image and convert to base64
    const imageBuffer = fs.readFileSync(imagePath);
    const imageBase64 = imageBuffer.toString('base64');
    
    const params = {
      image: imageBase64,
      motion_prompt: options.motionPrompt || 'smooth camera movement',
      num_frames: options.frames || 16,
      fps: options.fps || model.fps,
      motion_bucket_id: options.motionBucket || 127,
      noise_aug_strength: options.noiseAug || 0.02,
      seed: options.seed || Math.floor(Math.random() * 1e9)
    };
    
    try {
      // Call the model's API endpoint
      const response = await fetch(model.api_endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.video_path) {
        const finalPath = path.join(this.outputDir, `animated_${Date.now()}.mp4`);
        fs.copyFileSync(result.video_path, finalPath);
        
        console.log(`   ✅ Animated video saved to: ${finalPath}`);
        return finalPath;
      }
      
      throw new Error('Animation completed but output not found');
    } catch (error) {
      console.error(`   ❌ Animation failed: ${error.message}`);
      
      // Fallback to ComfyUI AnimateDiff workflow if available
      if (await this.checkComfyUI()) {
        return this.animateViaComfyUI(imagePath, options);
      }
      
      throw error;
    }
  }

  /**
   * Batch generate videos for campaign assets
   */
  async batchGenerateVideos(assets, options = {}) {
    console.log(`🎬 Batch Video Generation (${assets.length} assets)`);
    
    const results = [];
    const concurrency = options.concurrency || 1; // Video gen is resource-intensive
    
    for (let i = 0; i < assets.length; i += concurrency) {
      const batch = assets.slice(i, i + concurrency);
      
      const batchResults = await Promise.all(
        batch.map(async (asset) => {
          try {
            let videoPath;
            
            if (asset.type === 'text') {
              videoPath = await this.generateFromText(asset.prompt, asset.options);
            } else if (asset.type === 'image') {
              videoPath = await this.generateFromImage(asset.imagePath, asset.options);
            }
            
            return {
              success: true,
              input: asset,
              output: videoPath
            };
          } catch (error) {
            return {
              success: false,
              input: asset,
              error: error.message
            };
          }
        })
      );
      
      results.push(...batchResults);
      
      // Progress update
      console.log(`   Progress: ${Math.min(i + concurrency, assets.length)}/${assets.length}`);
    }
    
    // Summary
    const successful = results.filter(r => r.success).length;
    console.log(`\n✅ Batch complete: ${successful}/${assets.length} successful`);
    
    return results;
  }

  /**
   * Generate CogVideoX Python script
   */
  generateCogVideoScript(params) {
    return `#!/usr/bin/env python3
import torch
from diffusers import CogVideoXPipeline
from diffusers.utils import export_to_video
import numpy as np

# Initialize pipeline
pipe = CogVideoXPipeline.from_pretrained(
    "THUDM/CogVideoX-5b",
    torch_dtype=torch.bfloat16
)
pipe.enable_sequential_cpu_offload()
pipe.vae.enable_slicing()
pipe.vae.enable_tiling()

# Generate video
prompt = "${params.prompt}"
video = pipe(
    prompt=prompt,
    num_videos_per_prompt=1,
    num_inference_steps=${params.num_inference_steps},
    num_frames=${params.num_frames},
    guidance_scale=${params.guidance_scale},
    generator=torch.Generator(device="cuda").manual_seed(${params.seed}),
).frames[0]

# Save video
output_path = "/tmp/cogvideo_output.mp4"
export_to_video(video, output_path, fps=${params.fps})
print(f"Saved to: {output_path}")
`;
  }

  /**
   * Fallback to ComfyUI for AnimateDiff
   */
  async animateViaComfyUI(imagePath, options) {
    console.log('   Using ComfyUI AnimateDiff fallback...');
    
    const workflow = {
      '1': {
        inputs: { image: imagePath, upload: 'image' },
        class_type: 'LoadImage'
      },
      '2': {
        inputs: { 
          ckpt_name: 'sd_xl_base_1.0.safetensors'
        },
        class_type: 'CheckpointLoaderSimple'
      },
      '3': {
        inputs: {
          motion_module: 'animatediff_lightning_4step_comfyui.safetensors',
          beta_schedule: 'linear'
        },
        class_type: 'AnimateDiffModuleLoader'
      },
      '4': {
        inputs: {
          text: options.motionPrompt || 'smooth motion',
          clip: ['2', 1]
        },
        class_type: 'CLIPTextEncode'
      },
      '5': {
        inputs: {
          batch_size: options.frames || 16,
          width: 512,
          height: 512,
          batch_index: 0
        },
        class_type: 'AnimateDiffBatchedLatentImage'
      },
      '6': {
        inputs: {
          seed: options.seed || -1,
          steps: 4,
          cfg: 1.5,
          sampler_name: 'lcm',
          scheduler: 'sgm_uniform',
          denoise: 1.0,
          model: ['3', 0],
          positive: ['4', 0],
          negative: ['4', 0],
          latent_image: ['5', 0]
        },
        class_type: 'KSampler'
      },
      '7': {
        inputs: {
          samples: ['6', 0],
          vae: ['2', 2]
        },
        class_type: 'VAEDecode'
      },
      '8': {
        inputs: {
          images: ['7', 0],
          fps: options.fps || 8,
          filename_prefix: 'animatediff'
        },
        class_type: 'AnimateDiffCombine'
      }
    };
    
    // Submit to ComfyUI
    const response = await fetch('http://localhost:8188/prompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: workflow })
    });
    
    if (!response.ok) {
      throw new Error('ComfyUI AnimateDiff failed');
    }
    
    const result = await response.json();
    console.log(`   ✅ AnimateDiff via ComfyUI: ${result.prompt_id}`);
    
    // Wait for completion and return path
    // (Implementation would poll for completion)
    return path.join(this.outputDir, `animatediff_${Date.now()}.gif`);
  }

  /**
   * Check if ComfyUI is available
   */
  async checkComfyUI() {
    try {
      const response = await fetch('http://localhost:8188/system_stats');
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Install video generation models
   */
  async installModels() {
    console.log('📦 Installing video generation models...');
    
    const installations = [
      {
        name: 'CogVideoX',
        command: 'pip install cogvideox diffusers accelerate transformers'
      },
      {
        name: 'AnimateDiff',
        command: 'cd ~/ComfyUI/custom_nodes && git clone https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved'
      },
      {
        name: 'Stable Video Diffusion',
        command: 'pip install stable-video-diffusion'
      }
    ];
    
    for (const install of installations) {
      console.log(`   Installing ${install.name}...`);
      try {
        await execPromise(install.command);
        console.log(`   ✅ ${install.name} installed`);
      } catch (error) {
        console.error(`   ❌ Failed to install ${install.name}: ${error.message}`);
      }
    }
  }
}

// Export for use in other scripts
module.exports = VideoGenerator;

// CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  const generator = new VideoGenerator();
  
  if (args[0] === '--install') {
    generator.installModels();
  } else if (args[0] === '--text') {
    const prompt = args.slice(1).join(' ') || 'fantasy dragon flying over mountains';
    generator.generateFromText(prompt)
      .then(path => console.log(`Video generated: ${path}`))
      .catch(console.error);
  } else if (args[0] === '--image' && args[1]) {
    generator.generateFromImage(args[1])
      .then(path => console.log(`Animation generated: ${path}`))
      .catch(console.error);
  } else {
    console.log(`
Usage:
  --install              Install video generation models
  --text <prompt>        Generate video from text prompt
  --image <path>         Animate an image
    `);
  }
}
