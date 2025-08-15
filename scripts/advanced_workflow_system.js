#!/usr/bin/env node

/**
 * ADVANCED WORKFLOW SYSTEM - August 2025
 * ======================================
 * Latest ComfyUI workflows with optimization
 */

class AdvancedWorkflowSystem {
  constructor() {
    this.workflows = {
      // Ultra-fast turbo workflow
      turbo: {
        name: "SDXL Turbo Lightning",
        steps: 4,
        cfg: 1.0,
        sampler: "lcm",
        scheduler: "sgm_uniform",
        model: "sdxl_turbo_1.0_fp16.safetensors",
        features: ["teacache", "lcm_lora", "fp8_quant"]
      },
      
      // High-quality portrait workflow
      portrait_optimized: {
        name: "Portrait Excellence",
        steps: 20,
        cfg: 7,
        sampler: "dpmpp_2m_sde",
        scheduler: "karras",
        model: "sdxl_base_1.0.safetensors",
        features: ["face_detailer", "skin_enhancement", "eye_focus"]
      },
      
      // Environment HDR workflow
      environment_hdr: {
        name: "Environment Master",
        steps: 25,
        cfg: 8,
        sampler: "dpmpp_3m_sde",
        scheduler: "exponential",
        model: "sdxl_base_1.0.safetensors",
        features: ["hdr_mode", "depth_map", "atmosphere"]
      },
      
      // Batch optimization workflow
      batch_turbo: {
        name: "Batch Speed",
        steps: 6,
        cfg: 2.0,
        sampler: "euler_a",
        scheduler: "simple",
        batchSize: 4,
        features: ["batch_processing", "vae_tiling", "sequential_cpu_offload"]
      }
    };
  }

  /**
   * Build advanced ComfyUI workflow
   */
  buildAdvancedWorkflow(promptData, workflowType = 'turbo') {
    const workflow = this.workflows[workflowType];
    const nodes = {};
    
    // 1. Model loader with optimizations
    nodes['1'] = {
      class_type: "CheckpointLoaderSimple",
      inputs: {
        ckpt_name: workflow.model
      }
    };
    
    // 2. Add LCM LoRA if turbo mode
    if (workflow.features.includes('lcm_lora')) {
      nodes['2'] = {
        class_type: "LoraLoader",
        inputs: {
          lora_name: "lcm-lora-sdxl.safetensors",
          strength_model: 1.0,
          strength_clip: 1.0,
          model: ["1", 0],
          clip: ["1", 1]
        }
      };
    }
    
    // 3. CLIP Text Encode with token optimization
    const modelNode = workflow.features.includes('lcm_lora') ? "2" : "1";
    nodes['3'] = {
      class_type: "CLIPTextEncode",
      inputs: {
        text: promptData.prompt,
        clip: [modelNode, 1]
      }
    };
    
    nodes['4'] = {
      class_type: "CLIPTextEncode", 
      inputs: {
        text: promptData.negative,
        clip: [modelNode, 1]
      }
    };
    
    // 4. Advanced latent generation
    nodes['5'] = {
      class_type: "EmptyLatentImage",
      inputs: {
        width: promptData.settings.width,
        height: promptData.settings.height,
        batch_size: workflow.batchSize || 1
      }
    };
    
    // 5. Add TeaCache if enabled
    let samplerModelNode = modelNode;
    if (workflow.features.includes('teacache')) {
      nodes['6'] = {
        class_type: "TeaCacheModel",
        inputs: {
          model: [modelNode, 0],
          cache_mode: "aggressive",
          cache_blocks: 4,
          cache_type: "attention"
        }
      };
      samplerModelNode = "6";
    }
    
    // 6. Advanced KSampler with optimizations
    nodes['7'] = {
      class_type: "KSamplerAdvanced",
      inputs: {
        model: [samplerModelNode, 0],
        positive: ["3", 0],
        negative: ["4", 0],
        latent_image: ["5", 0],
        seed: Math.floor(Math.random() * 1e9),
        steps: workflow.steps,
        cfg: workflow.cfg,
        sampler_name: workflow.sampler,
        scheduler: workflow.scheduler,
        denoise: 1.0,
        start_at_step: 0,
        end_at_step: workflow.steps,
        return_with_leftover_noise: false
      }
    };
    
    // 7. VAE Decode with optimizations
    const vaeNode = workflow.features.includes('vae_tiling') ? 
      "VAEDecodeTiled" : "VAEDecode";
    
    nodes['8'] = {
      class_type: vaeNode,
      inputs: {
        samples: ["7", 0],
        vae: ["1", 2]
      }
    };
    
    if (workflow.features.includes('vae_tiling')) {
      nodes['8'].inputs.tile_size = 512;
    }
    
    // 8. Post-processing based on type
    let finalImageNode = "8";
    
    if (workflow.features.includes('face_detailer')) {
      nodes['9'] = {
        class_type: "FaceDetailer",
        inputs: {
          image: ["8", 0],
          model: [modelNode, 0],
          clip: [modelNode, 1],
          vae: ["1", 2],
          positive: ["3", 0],
          negative: ["4", 0],
          face_model: "yolov8n-face.pt",
          confidence: 0.5,
          dilation: 10
        }
      };
      finalImageNode = "9";
    }
    
    // 9. Image save with metadata
    nodes['10'] = {
      class_type: "SaveImageWithMetadata",
      inputs: {
        images: [finalImageNode, 0],
        filename_prefix: workflowType,
        prompt: promptData.prompt,
        extra_pnginfo: {
          workflow: workflowType,
          model: workflow.model,
          steps: workflow.steps,
          cfg: workflow.cfg,
          timestamp: new Date().toISOString()
        }
      }
    };
    
    return nodes;
  }

  /**
   * Build batch processing workflow
   */
  buildBatchWorkflow(prompts, settings) {
    const nodes = {};
    const workflow = this.workflows.batch_turbo;
    
    // Load model once
    nodes['model'] = {
      class_type: "CheckpointLoaderSimple",
      inputs: { ckpt_name: workflow.model }
    };
    
    // Process multiple prompts
    prompts.forEach((promptData, index) => {
      const baseId = index * 10;
      
      // Text encoding for each prompt
      nodes[`clip_${baseId}`] = {
        class_type: "CLIPTextEncode",
        inputs: {
          text: promptData.prompt,
          clip: ["model", 1]
        }
      };
      
      // Latent for each
      nodes[`latent_${baseId}`] = {
        class_type: "EmptyLatentImage",
        inputs: {
          width: settings.width,
          height: settings.height,
          batch_size: 1
        }
      };
      
      // Sampler for each
      nodes[`sample_${baseId}`] = {
        class_type: "KSampler",
        inputs: {
          model: ["model", 0],
          positive: [`clip_${baseId}`, 0],
          negative: ["negative", 0],
          latent_image: [`latent_${baseId}`, 0],
          seed: Math.floor(Math.random() * 1e9),
          steps: workflow.steps,
          cfg: workflow.cfg,
          sampler_name: workflow.sampler,
          scheduler: workflow.scheduler
        }
      };
    });
    
    // Shared negative prompt
    nodes['negative'] = {
      class_type: "CLIPTextEncode",
      inputs: {
        text: "low quality, blurry",
        clip: ["model", 1]
      }
    };
    
    return nodes;
  }

  /**
   * Get optimal workflow for context
   */
  selectOptimalWorkflow(context) {
    const { type, quality, speed } = context;
    
    if (speed === 'turbo') return 'turbo';
    if (type === 'portrait' && quality === 'high') return 'portrait_optimized';
    if (type === 'location') return 'environment_hdr';
    if (context.batch) return 'batch_turbo';
    
    return 'turbo'; // Default to fast
  }

  /**
   * Get workflow info
   */
  getWorkflowInfo(workflowType) {
    const workflow = this.workflows[workflowType];
    return {
      name: workflow.name,
      estimatedTime: workflow.steps * 0.5, // Rough estimate
      features: workflow.features,
      requirements: this.getRequirements(workflow)
    };
  }

  /**
   * Get workflow requirements
   */
  getRequirements(workflow) {
    const reqs = [];
    
    if (workflow.model.includes('sdxl')) reqs.push('SDXL model');
    if (workflow.features.includes('lcm_lora')) reqs.push('LCM LoRA');
    if (workflow.features.includes('teacache')) reqs.push('TeaCache extension');
    if (workflow.features.includes('face_detailer')) reqs.push('Face detailer models');
    
    return reqs;
  }
}

module.exports = AdvancedWorkflowSystem;
