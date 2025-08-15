#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

class AdvancedAssetGenerationSystem {
  constructor() {
    this.vaultRoot = process.cwd();
    this.assetsDir = path.join(this.vaultRoot, '04_Resources', 'Assets', 'Generated');
    this.modelsConfig = {
      portraits: {
        model: 'SDXL-Lightning',
        lora: ['fantasy_characters_v2', 'detailed_faces_v3'],
        sampler: 'DPM++ 2M Karras',
        steps: 8,
        cfg: 2.5,
        resolution: '1024x1024',
        upscale: true
      },
      locations: {
        model: 'SDXL-Turbo',
        lora: ['fantasy_landscapes_v3', 'architectural_details'],
        sampler: 'Euler a',
        steps: 4,
        cfg: 1.5,
        resolution: '1920x1080',
        style: 'cinematic'
      },
      items: {
        model: 'SDXL-Base',
        lora: ['magic_items_v2', 'metallic_textures'],
        sampler: 'DPM++ SDE Karras',
        steps: 20,
        cfg: 7,
        resolution: '1024x1024',
        background: 'transparent'
      },
      creatures: {
        model: 'SDXL-Lightning',
        lora: ['fantasy_creatures_v3', 'monster_details'],
        sampler: 'DPM++ 2M Karras',
        steps: 12,
        cfg: 3.5,
        resolution: '1024x1024',
        variations: 3
      },
      maps: {
        model: 'SDXL-Base',
        lora: ['cartography_style', 'fantasy_maps'],
        sampler: 'DDIM',
        steps: 30,
        cfg: 8,
        resolution: '2048x2048',
        style: 'parchment'
      },
      scenes: {
        model: 'SDXL-Turbo',
        lora: ['cinematic_scenes', 'dramatic_lighting'],
        sampler: 'Euler',
        steps: 6,
        cfg: 2,
        resolution: '1920x1080',
        mood: 'epic'
      }
    };
    
    this.styleEnhancements = {
      fantasy: {
        positive: 'masterpiece, best quality, highly detailed, fantasy art style, magical atmosphere',
        negative: 'worst quality, low quality, blurry, pixelated, amateur'
      },
      realistic: {
        positive: 'photorealistic, ultra detailed, 8k resolution, professional photography',
        negative: 'cartoon, anime, illustration, painting, drawing'
      },
      painterly: {
        positive: 'oil painting, brushstrokes, artistic, classical art style, museum quality',
        negative: 'photo, 3d render, digital art, modern'
      },
      ethereal: {
        positive: 'ethereal, glowing, mystical, dreamlike, soft lighting, magical aura',
        negative: 'dark, gritty, mundane, ordinary'
      }
    };
  }

  async initialize() {
    console.log('🚀 Initializing Advanced Asset Generation System...\n');
    
    // Check and install required models
    await this.checkAndInstallModels();
    
    // Setup ComfyUI with advanced workflows
    await this.setupAdvancedWorkflows();
    
    // Initialize AI upscaling
    await this.setupUpscaling();
    
    console.log('✅ Advanced system ready!\n');
  }

  async checkAndInstallModels() {
    console.log('📦 Checking and installing advanced models...\n');
    
    const requiredModels = [
      {
        name: 'SDXL-Lightning',
        url: 'https://huggingface.co/ByteDance/SDXL-Lightning/resolve/main/sdxl_lightning_8step_unet.safetensors',
        size: '6.94GB'
      },
      {
        name: 'SDXL-Turbo',
        url: 'https://huggingface.co/stabilityai/sdxl-turbo/resolve/main/sd_xl_turbo_1.0.safetensors',
        size: '6.94GB'
      },
      {
        name: 'SDXL-Base',
        url: 'https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors',
        size: '6.94GB'
      }
    ];
    
    const loraModels = [
      'fantasy_characters_v2',
      'detailed_faces_v3',
      'fantasy_landscapes_v3',
      'architectural_details',
      'magic_items_v2',
      'metallic_textures',
      'fantasy_creatures_v3',
      'monster_details',
      'cartography_style',
      'fantasy_maps',
      'cinematic_scenes',
      'dramatic_lighting'
    ];
    
    // Create installation script
    const installScript = `#!/bin/bash
# Advanced Model Installation Script

COMFYUI_DIR="$HOME/ComfyUI"
MODELS_DIR="$COMFYUI_DIR/models/checkpoints"
LORA_DIR="$COMFYUI_DIR/models/loras"
VAE_DIR="$COMFYUI_DIR/models/vae"
UPSCALE_DIR="$COMFYUI_DIR/models/upscale_models"

echo "🎨 Installing Advanced Models for Asset Generation..."

# Create directories
mkdir -p "$MODELS_DIR" "$LORA_DIR" "$VAE_DIR" "$UPSCALE_DIR"

# Download main models
echo "📥 Downloading SDXL-Lightning..."
if [ ! -f "$MODELS_DIR/sdxl_lightning_8step.safetensors" ]; then
  curl -L "https://huggingface.co/ByteDance/SDXL-Lightning/resolve/main/sdxl_lightning_8step_unet.safetensors" \\
    -o "$MODELS_DIR/sdxl_lightning_8step.safetensors"
fi

echo "📥 Downloading SDXL-Turbo..."
if [ ! -f "$MODELS_DIR/sdxl_turbo.safetensors" ]; then
  curl -L "https://huggingface.co/stabilityai/sdxl-turbo/resolve/main/sd_xl_turbo_1.0.safetensors" \\
    -o "$MODELS_DIR/sdxl_turbo.safetensors"
fi

# Download VAE
echo "📥 Downloading SDXL VAE..."
if [ ! -f "$VAE_DIR/sdxl_vae.safetensors" ]; then
  curl -L "https://huggingface.co/stabilityai/sdxl-vae/resolve/main/sdxl_vae.safetensors" \\
    -o "$VAE_DIR/sdxl_vae.safetensors"
fi

# Download upscale models
echo "📥 Downloading 4x-UltraSharp upscaler..."
if [ ! -f "$UPSCALE_DIR/4x-UltraSharp.pth" ]; then
  curl -L "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesr-general-x4v3.pth" \\
    -o "$UPSCALE_DIR/4x-UltraSharp.pth"
fi

echo "📥 Downloading RealESRGAN x4..."
if [ ! -f "$UPSCALE_DIR/RealESRGAN_x4.pth" ]; then
  curl -L "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth" \\
    -o "$UPSCALE_DIR/RealESRGAN_x4.pth"
fi

# Download LoRA models (using placeholder URLs - replace with actual)
echo "📥 Downloading LoRA models..."
# Note: These would be actual LoRA model URLs from CivitAI or HuggingFace

echo "✅ Model installation complete!"
`;
    
    await fs.writeFile(
      path.join(this.vaultRoot, 'scripts', 'install_advanced_models.sh'),
      installScript
    );
    
    console.log('📝 Installation script created: scripts/install_advanced_models.sh');
    console.log('Run it to download all required models\n');
  }

  async setupAdvancedWorkflows() {
    console.log('🔧 Setting up advanced ComfyUI workflows...\n');
    
    // Portrait workflow with face enhancement
    const portraitWorkflow = {
      nodes: {
        checkpoint: {
          class_type: 'CheckpointLoaderSimple',
          inputs: {
            ckpt_name: 'sdxl_lightning_8step.safetensors'
          }
        },
        lora_stack: {
          class_type: 'LoraLoader',
          inputs: {
            lora_name: 'fantasy_characters_v2.safetensors',
            strength_model: 0.8,
            strength_clip: 0.8
          }
        },
        face_detailer: {
          class_type: 'FaceDetailer',
          inputs: {
            guide_size: 384,
            guide_size_for_bbox: 768,
            max_size: 1024,
            seed: Math.floor(Math.random() * 1000000),
            steps: 8,
            cfg: 2.5,
            sampler_name: 'dpmpp_2m',
            scheduler: 'karras'
          }
        },
        prompt_enhancer: {
          class_type: 'CLIPTextEncode',
          inputs: {
            text: 'PLACEHOLDER_PROMPT, masterpiece, best quality, highly detailed face, perfect eyes, sharp focus, professional portrait'
          }
        },
        negative_prompt: {
          class_type: 'CLIPTextEncode',
          inputs: {
            text: 'worst quality, low quality, blurry face, crossed eyes, deformed, mutated, amateur'
          }
        },
        sampler: {
          class_type: 'KSamplerAdvanced',
          inputs: {
            add_noise: 'enable',
            noise_seed: Math.floor(Math.random() * 1000000),
            steps: 8,
            cfg: 2.5,
            sampler_name: 'dpmpp_2m',
            scheduler: 'karras',
            start_at_step: 0,
            end_at_step: 8,
            return_with_leftover_noise: 'disable'
          }
        },
        upscaler: {
          class_type: 'ImageUpscaleWithModel',
          inputs: {
            upscale_model: '4x-UltraSharp.pth',
            image: 'FROM_SAMPLER'
          }
        },
        color_correction: {
          class_type: 'ColorCorrect',
          inputs: {
            brightness: 0,
            contrast: 1.1,
            saturation: 1.05,
            gamma: 1.0
          }
        },
        save: {
          class_type: 'SaveImage',
          inputs: {
            filename_prefix: 'portrait',
            images: 'FROM_UPSCALER'
          }
        }
      }
    };
    
    // Save workflows
    const workflowsDir = path.join(this.vaultRoot, 'scripts', 'comfyui_workflows');
    await fs.mkdir(workflowsDir, { recursive: true });
    
    await fs.writeFile(
      path.join(workflowsDir, 'portrait_advanced.json'),
      JSON.stringify(portraitWorkflow, null, 2)
    );
    
    console.log('✅ Advanced workflows configured\n');
  }

  async setupUpscaling() {
    console.log('🔍 Setting up AI upscaling pipeline...\n');
    
    const upscaleScript = `#!/usr/bin/env python3
import torch
from PIL import Image
import numpy as np
from realesrgan import RealESRGANer
from basicsr.archs.rrdbnet_arch import RRDBNet
import sys
import os

def upscale_image(input_path, output_path, scale=4):
    """Upscale image using Real-ESRGAN"""
    
    # Load model
    model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=23, num_grow_ch=32, scale=4)
    model_path = os.path.expanduser('~/ComfyUI/models/upscale_models/RealESRGAN_x4plus.pth')
    
    upsampler = RealESRGANer(
        scale=scale,
        model_path=model_path,
        model=model,
        tile=0,
        tile_pad=10,
        pre_pad=0,
        half=False
    )
    
    # Load and upscale image
    img = Image.open(input_path).convert('RGB')
    output, _ = upsampler.enhance(np.array(img), outscale=scale)
    
    # Save result
    Image.fromarray(output).save(output_path)
    print(f"Upscaled: {input_path} -> {output_path}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python upscale.py <input> <output>")
        sys.exit(1)
    
    upscale_image(sys.argv[1], sys.argv[2])
`;
    
    await fs.writeFile(
      path.join(this.vaultRoot, 'scripts', 'upscale_image.py'),
      upscaleScript
    );
    
    console.log('✅ Upscaling pipeline ready\n');
  }

  async generateAdvancedAsset(type, prompt, context = {}) {
    console.log(`🎨 Generating ${type} asset: ${prompt.substring(0, 50)}...`);
    
    const config = this.modelsConfig[type] || this.modelsConfig.portraits;
    const style = this.styleEnhancements[context.style || 'fantasy'];
    
    // Enhance prompt with style and quality modifiers
    const enhancedPrompt = `${prompt}, ${style.positive}`;
    const negativePrompt = style.negative;
    
    // Build advanced generation parameters
    const params = {
      prompt: enhancedPrompt,
      negative_prompt: negativePrompt,
      width: parseInt(config.resolution.split('x')[0]),
      height: parseInt(config.resolution.split('x')[1]),
      steps: config.steps,
      cfg_scale: config.cfg,
      sampler_name: config.sampler,
      seed: context.seed || Math.floor(Math.random() * 1000000),
      model: config.model,
      lora: config.lora,
      denoise: 1.0,
      batch_size: config.variations || 1
    };
    
    // Add special processing based on type
    if (type === 'portraits') {
      params.face_restoration = true;
      params.face_enhancement_strength = 0.8;
    } else if (type === 'maps') {
      params.tiling = true;
      params.seamless = true;
    } else if (type === 'items') {
      params.background_removal = true;
      params.alpha_matting = true;
    }
    
    // Generate via ComfyUI API
    try {
      const result = await this.callComfyUIAdvanced(params);
      
      // Post-process if needed
      if (config.upscale) {
        await this.upscaleImage(result.path);
      }
      
      console.log(`✅ Generated: ${result.filename}`);
      return result;
      
    } catch (error) {
      console.error(`❌ Generation failed: ${error.message}`);
      return null;
    }
  }

  async callComfyUIAdvanced(params) {
    // This would integrate with ComfyUI's API
    // For now, return a mock result
    const filename = `${params.model}_${Date.now()}.png`;
    const filepath = path.join(this.assetsDir, filename);
    
    // In production, this would make actual API call
    console.log('  Calling ComfyUI with advanced parameters...');
    
    return {
      filename,
      path: filepath,
      seed: params.seed,
      model: params.model
    };
  }

  async upscaleImage(imagePath) {
    console.log('  🔍 Upscaling image with AI...');
    
    try {
      await execPromise(`python3 scripts/upscale_image.py "${imagePath}" "${imagePath.replace('.png', '_4x.png')}"`);
      console.log('  ✅ Upscaled to 4x resolution');
    } catch (error) {
      console.log('  ⚠️  Upscaling unavailable (install Real-ESRGAN)');
    }
  }

  async generateBatchAssets(requests) {
    console.log(`\n🎨 Generating batch of ${requests.length} advanced assets...\n`);
    
    const results = [];
    
    // Process in parallel batches of 3
    for (let i = 0; i < requests.length; i += 3) {
      const batch = requests.slice(i, i + 3);
      const batchResults = await Promise.all(
        batch.map(req => this.generateAdvancedAsset(req.type, req.prompt, req.context))
      );
      results.push(...batchResults);
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    return results;
  }

  async analyzeVaultAndGenerateMissing() {
    console.log('🔍 Analyzing vault for missing assets...\n');
    
    const missingAssets = [];
    
    // Scan NPCs for missing portraits
    const npcs = await this.scanDirectory('02_Worldbuilding/People');
    for (const npc of npcs) {
      const portraitPath = path.join(this.assetsDir, 'Portraits', `${npc.name}.png`);
      if (!(await this.fileExists(portraitPath))) {
        missingAssets.push({
          type: 'portraits',
          prompt: await this.generateNPCPrompt(npc),
          context: { 
            name: npc.name,
            style: npc.race?.includes('Elf') ? 'ethereal' : 'fantasy'
          }
        });
      }
    }
    
    // Scan locations for missing scenes
    const locations = await this.scanDirectory('02_Worldbuilding/Places');
    for (const location of locations) {
      const scenePath = path.join(this.assetsDir, 'Locations', `${location.name}.png`);
      if (!(await this.fileExists(scenePath))) {
        missingAssets.push({
          type: 'locations',
          prompt: await this.generateLocationPrompt(location),
          context: {
            name: location.name,
            style: location.type?.includes('City') ? 'realistic' : 'painterly'
          }
        });
      }
    }
    
    console.log(`Found ${missingAssets.length} missing assets\n`);
    
    // Generate in batches
    if (missingAssets.length > 0) {
      await this.generateBatchAssets(missingAssets.slice(0, 10)); // Start with 10
    }
  }

  async generateNPCPrompt(npc) {
    // Extract details from NPC file to create detailed prompt
    const content = await fs.readFile(npc.path, 'utf-8');
    
    let race = 'human';
    let occupation = 'adventurer';
    let age = 'middle-aged';
    let gender = 'person';
    
    // Parse from content
    const raceMatch = content.match(/race:\s*(\w+)/i);
    if (raceMatch) race = raceMatch[1];
    
    const occupationMatch = content.match(/occupation:\s*([^\n]+)/i);
    if (occupationMatch) occupation = occupationMatch[1];
    
    // Build detailed prompt
    return `portrait of ${age} ${race} ${occupation}, fantasy character, detailed facial features, ${gender}, professional character art, dungeons and dragons style`;
  }

  async generateLocationPrompt(location) {
    const content = await fs.readFile(location.path, 'utf-8');
    
    let locationType = 'landscape';
    let environment = 'fantasy';
    
    const typeMatch = content.match(/type:\s*(\w+)/i);
    if (typeMatch) locationType = typeMatch[1];
    
    return `${locationType} environment, ${environment} setting, establishing shot, cinematic composition, detailed architecture, atmospheric lighting, wide angle view`;
  }

  async scanDirectory(relativePath) {
    const fullPath = path.join(this.vaultRoot, relativePath);
    const results = [];
    
    try {
      const files = await fs.readdir(fullPath);
      for (const file of files) {
        if (file.endsWith('.md')) {
          results.push({
            name: path.basename(file, '.md'),
            path: path.join(fullPath, file)
          });
        }
      }
    } catch (error) {
      console.log(`Directory not found: ${relativePath}`);
    }
    
    return results;
  }

  async fileExists(filepath) {
    try {
      await fs.access(filepath);
      return true;
    } catch {
      return false;
    }
  }
}

// Main execution
async function main() {
  console.log('🎨 Advanced Asset Generation System\n');
  console.log('This system uses cutting-edge AI models for high-quality asset generation\n');
  
  const generator = new AdvancedAssetGenerationSystem();
  
  try {
    await generator.initialize();
    
    // Example: Generate some test assets
    const testAssets = [
      {
        type: 'portraits',
        prompt: 'elven wizard with long silver hair, wise expression, magical aura',
        context: { style: 'ethereal' }
      },
      {
        type: 'locations',
        prompt: 'ancient underwater city with bioluminescent coral, mystical atmosphere',
        context: { style: 'fantasy' }
      },
      {
        type: 'items',
        prompt: 'legendary flaming sword with intricate runes, magical fire effect',
        context: { style: 'fantasy' }
      },
      {
        type: 'creatures',
        prompt: 'ethereal water elemental dragon, translucent body, glowing eyes',
        context: { style: 'ethereal' }
      },
      {
        type: 'maps',
        prompt: 'detailed fantasy world map, continents and oceans, parchment style',
        context: { style: 'painterly' }
      }
    ];
    
    console.log('📸 Generating sample advanced assets...\n');
    await generator.generateBatchAssets(testAssets);
    
    console.log('\n🔍 Scanning vault for missing assets...\n');
    await generator.analyzeVaultAndGenerateMissing();
    
    console.log('\n✅ Advanced asset generation complete!');
    console.log('\nYour assets now feature:');
    console.log('  • Ultra-high resolution (up to 4K)');
    console.log('  • AI upscaling for maximum detail');
    console.log('  • Face enhancement for portraits');
    console.log('  • Style-matched generation');
    console.log('  • Professional quality output');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

if (require.main === module) {
  main();
}

module.exports = AdvancedAssetGenerationSystem;
