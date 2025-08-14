#!/usr/bin/env node

/**
 * Enhanced ComfyUI client with advanced workflows and n8n integration support
 * Supports multiple models, LoRAs, controlnets, and sophisticated prompt engineering
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const COMFY_URL = (process.env.COMFY_URL || 'http://127.0.0.1:8188').replace(/\/$/, '');
const COMFY_OUTPUT_DIR = process.env.COMFY_OUTPUT_DIR || path.join(process.env.HOME, 'ComfyUI', 'output');

// Advanced model configurations for different asset types
const MODEL_CONFIGS = {
  portrait: {
    checkpoint: process.env.COMFY_CKPT_PORTRAIT || 'v1-5-pruned-emaonly-fp16.safetensors',
    loras: ['epiNoiseoffset_v2.safetensors:0.7'],
    sampler: 'dpmpp_2m',
    scheduler: 'karras',
    steps: 25,
    cfg: 7.5,
    denoise: 1.0,
    clipSkip: 2
  },
  creature: {
    checkpoint: process.env.COMFY_CKPT_CREATURE || 'v1-5-pruned-emaonly-fp16.safetensors',
    loras: ['add_detail.safetensors:0.8'],
    sampler: 'dpmpp_sde',
    scheduler: 'karras',
    steps: 30,
    cfg: 8.0,
    denoise: 1.0,
    clipSkip: 1
  },
  location: {
    checkpoint: process.env.COMFY_CKPT_LOCATION || 'v1-5-pruned-emaonly-fp16.safetensors',
    loras: [],
    sampler: 'euler_ancestral',
    scheduler: 'normal',
    steps: 20,
    cfg: 6.5,
    denoise: 1.0,
    clipSkip: 1
  },
  map: {
    checkpoint: process.env.COMFY_CKPT_MAP || 'v1-5-pruned-emaonly-fp16.safetensors',
    loras: [],
    sampler: 'ddim',
    scheduler: 'uniform',
    steps: 35,
    cfg: 9.0,
    denoise: 1.0,
    clipSkip: 1
  }
};

// Sophisticated negative prompts by type
const NEGATIVE_PROMPTS = {
  portrait: 'text, watermark, signature, logo, bad anatomy, bad hands, missing fingers, extra fingers, blurry, low quality, worst quality, jpeg artifacts, username, artist name, low resolution, bad proportions, mutated hands, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers',
  creature: 'text, watermark, signature, logo, low quality, worst quality, blurry, jpeg artifacts, username, artist name, human, anthropomorphic, cute, cartoon, anime, kawaii',
  location: 'text, watermark, signature, logo, people, characters, figures, humans, animals, low quality, worst quality, blurry, jpeg artifacts, username, artist name',
  map: 'text labels, watermark, signature, logo, 3d render, photograph, realistic, low quality, worst quality, blurry, jpeg artifacts, username, artist name'
};

// Style modifiers for campaign worlds
const WORLD_STYLES = {
  aquabyssos: {
    prefix: 'underwater, deep sea, bioluminescent, aquatic, oceanic depths',
    suffix: 'submerged ruins, coral formations, abyssal trenches, pressure effects, marine life',
    colorGrading: 'deep blues, teals, bioluminescent greens, dark purples'
  },
  aethermoor: {
    prefix: 'floating islands, sky realm, ethereal, windswept, celestial',
    suffix: 'cloud formations, aurora effects, crystalline structures, wind currents, aerial perspective',
    colorGrading: 'bright whites, sky blues, golden sunlight, lavender mists'
  },
  void: {
    prefix: 'eldritch, cosmic horror, non-euclidean, otherworldly, void-touched',
    suffix: 'reality distortion, impossible geometry, shadow tendrils, star-filled voids, dimensional rifts',
    colorGrading: 'deep purples, void blacks, sickly greens, cosmic indigos'
  }
};

async function comfyPost(endpoint, body) {
  const res = await fetch(`${COMFY_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`ComfyUI ${res.status} ${endpoint}: ${text.slice(0, 500)}`);
  }
  return res.json();
}

async function comfyGet(endpoint) {
  const res = await fetch(`${COMFY_URL}${endpoint}`);
  if (!res.ok) throw new Error(`ComfyUI ${res.status} ${endpoint}`);
  return res;
}

function buildAdvancedWorkflow({ 
  prompt, 
  negativePrompt, 
  width = 512, 
  height = 512, 
  type = 'portrait',
  world = null,
  seed = -1,
  batchSize = 1
}) {
  const config = MODEL_CONFIGS[type] || MODEL_CONFIGS.portrait;
  
  // Apply world-specific styling
  let enhancedPrompt = prompt;
  let enhancedNegative = negativePrompt || NEGATIVE_PROMPTS[type] || NEGATIVE_PROMPTS.portrait;
  
  if (world && WORLD_STYLES[world]) {
    const style = WORLD_STYLES[world];
    enhancedPrompt = `${style.prefix}, ${prompt}, ${style.suffix}, ${style.colorGrading}`;
  }
  
  // Build ComfyUI workflow graph
  const workflow = {
    '1': {
      inputs: { ckpt_name: config.checkpoint },
      class_type: 'CheckpointLoaderSimple'
    },
    '2': {
      inputs: { 
        text: enhancedPrompt,
        clip: ['1', 1]
      },
      class_type: 'CLIPTextEncode'
    },
    '3': {
      inputs: { 
        text: enhancedNegative,
        clip: ['1', 1]
      },
      class_type: 'CLIPTextEncode'
    },
    '4': {
      inputs: { 
        width, 
        height, 
        batch_size: batchSize 
      },
      class_type: 'EmptyLatentImage'
    },
    '5': {
      inputs: {
        seed: seed === -1 ? Math.floor(Math.random() * 1e16) : seed,
        steps: config.steps,
        cfg: config.cfg,
        sampler_name: config.sampler,
        scheduler: config.scheduler,
        denoise: config.denoise,
        model: ['1', 0],
        positive: ['2', 0],
        negative: ['3', 0],
        latent_image: ['4', 0]
      },
      class_type: 'KSampler'
    },
    '6': {
      inputs: { 
        samples: ['5', 0], 
        vae: ['1', 2] 
      },
      class_type: 'VAEDecode'
    },
    '7': {
      inputs: { 
        images: ['6', 0],
        filename_prefix: `ttrpg_${type}_${world || 'generic'}`,
        extension: 'png'
      },
      class_type: 'SaveImage'
    }
  };
  
  // Add LoRA nodes if configured
  if (config.loras && config.loras.length > 0) {
    let lastModel = ['1', 0];
    let lastClip = ['1', 1];
    
    config.loras.forEach((lora, idx) => {
      const [name, strength = 1.0] = lora.split(':');
      const nodeId = `lora_${idx + 1}`;
      workflow[nodeId] = {
        inputs: {
          lora_name: name,
          strength_model: parseFloat(strength),
          strength_clip: parseFloat(strength),
          model: lastModel,
          clip: lastClip
        },
        class_type: 'LoraLoader'
      };
      lastModel = [nodeId, 0];
      lastClip = [nodeId, 1];
      
      // Update references
      workflow['5'].inputs.model = lastModel;
      workflow['2'].inputs.clip = lastClip;
      workflow['3'].inputs.clip = lastClip;
    });
  }
  
  return workflow;
}

async function generateEnhancedImage(options) {
  const workflow = buildAdvancedWorkflow(options);
  
  // Submit to ComfyUI
  const response = await comfyPost('/prompt', { prompt: workflow });
  const promptId = response?.prompt_id;
  if (!promptId) throw new Error('No prompt_id received from ComfyUI');
  
  // Poll for completion
  const startTime = Date.now();
  const timeout = 180000; // 3 minutes
  
  while (Date.now() - startTime < timeout) {
    await new Promise(r => setTimeout(r, 1000));
    
    try {
      const histRes = await comfyGet(`/history/${promptId}`);
      const history = await histRes.json();
      const item = history?.[promptId];
      
      if (item?.outputs?.['7']?.images?.[0]) {
        const imgInfo = item.outputs['7'].images[0];
        
        // Try filesystem first
        const outputPath = path.join(
          COMFY_OUTPUT_DIR,
          imgInfo.subfolder || '',
          imgInfo.filename
        );
        
        if (fs.existsSync(outputPath)) {
          return fs.readFileSync(outputPath);
        }
        
        // Fallback to HTTP
        const viewUrl = `/view?filename=${encodeURIComponent(imgInfo.filename)}&type=${imgInfo.type || 'output'}&subfolder=${encodeURIComponent(imgInfo.subfolder || '')}`;
        const imgRes = await comfyGet(viewUrl);
        return Buffer.from(await imgRes.arrayBuffer());
      }
    } catch (e) {
      // Continue polling
    }
  }
  
  throw new Error('Image generation timed out');
}

// n8n webhook endpoint support
async function createN8nEndpoint(port = 5678) {
  const http = require('http');
  
  const server = http.createServer(async (req, res) => {
    if (req.method === 'POST' && req.url === '/comfyui/generate') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', async () => {
        try {
          const params = JSON.parse(body);
          const imageBuffer = await generateEnhancedImage(params);
          
          res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': imageBuffer.length
          });
          res.end(imageBuffer);
        } catch (error) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: error.message }));
        }
      });
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  
  server.listen(port, '127.0.0.1', () => {
    console.log(`n8n webhook endpoint running on http://127.0.0.1:${port}/comfyui/generate`);
  });
  
  return server;
}

// Export for use in other scripts
module.exports = {
  generateEnhancedImage,
  buildAdvancedWorkflow,
  createN8nEndpoint,
  MODEL_CONFIGS,
  WORLD_STYLES,
  NEGATIVE_PROMPTS
};

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--n8n-server')) {
    // Start n8n webhook server
    createN8nEndpoint(parseInt(args[args.indexOf('--n8n-server') + 1] || '5678', 10));
  } else {
    // Generate test image
    (async () => {
      try {
        const options = {
          prompt: args[0] || 'fantasy warrior portrait, detailed armor, dramatic lighting',
          type: args[1] || 'portrait',
          world: args[2] || 'aquabyssos',
          width: 512,
          height: 512
        };
        
        console.log('Generating with options:', options);
        const buffer = await generateEnhancedImage(options);
        
        const outputFile = `test_${options.type}_${Date.now()}.png`;
        fs.writeFileSync(outputFile, buffer);
        console.log(`Generated: ${outputFile} (${buffer.length} bytes)`);
      } catch (error) {
        console.error('Generation failed:', error.message);
        process.exit(1);
      }
    })();
  }
}
