#!/usr/bin/env node

/**
 * UNIVERSAL TOOL LIBRARY
 * ======================
 * Unified interface for all AI generation tools
 * Can be imported into any project
 */

const fs = require('fs');
const path = require('path');
const { exec, spawn } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

// Tool configuration
const TOOLS_HOME = process.env.AITOOLS_HOME || path.join(process.env.HOME, 'AITools');

class ToolLibrary {
  constructor(config = {}) {
    this.config = {
      toolsDir: config.toolsDir || TOOLS_HOME,
      outputDir: config.outputDir || process.cwd(),
      apiKeys: config.apiKeys || this.loadAPIKeys(),
      ...config
    };
    
    this.services = {
      comfyui: { url: 'http://localhost:8188', status: 'unknown' },
      sdwebui: { url: 'http://localhost:7860', status: 'unknown' },
      n8n: { url: 'http://localhost:5678', status: 'unknown' },
      ollama: { url: 'http://localhost:11434', status: 'unknown' }
    };
  }
  
  // Load API keys from various sources
  loadAPIKeys() {
    const keys = {};
    
    // Try to load from .obsidian/api_config.json
    const obsidianConfig = path.join(process.cwd(), '.obsidian', 'api_config.json');
    if (fs.existsSync(obsidianConfig)) {
      try {
        const config = JSON.parse(fs.readFileSync(obsidianConfig, 'utf8'));
        Object.assign(keys, config);
      } catch {}
    }
    
    // Try to load from environment variables
    keys.openai = keys.openai || { api_key: process.env.OPENAI_API_KEY };
    keys.stability = keys.stability || { api_key: process.env.STABILITY_API_KEY };
    
    return keys;
  }
  
  // === SERVICE MANAGEMENT ===
  
  async startService(service) {
    console.log(`🚀 Starting ${service}...`);
    
    switch (service) {
      case 'comfyui':
        return this.startComfyUI();
      case 'sdwebui':
        return this.startSDWebUI();
      case 'n8n':
        return this.startN8N();
      case 'ollama':
        return this.startOllama();
      default:
        throw new Error(`Unknown service: ${service}`);
    }
  }
  
  async startComfyUI() {
    const comfyPath = path.join(this.config.toolsDir, 'ComfyUI');
    if (!fs.existsSync(comfyPath)) {
      throw new Error('ComfyUI not installed. Run: bash scripts/install_global_tools.sh');
    }
    
    const proc = spawn('python', ['main.py', '--port', '8188'], {
      cwd: comfyPath,
      env: {
        ...process.env,
        PYTORCH_ENABLE_MPS_FALLBACK: '1',
        PYTORCH_MPS_HIGH_WATERMARK_RATIO: '0.0'
      },
      detached: true
    });
    
    proc.unref();
    this.services.comfyui.status = 'running';
    console.log('✅ ComfyUI started on http://localhost:8188');
    return proc.pid;
  }
  
  async startSDWebUI() {
    const sdPath = path.join(this.config.toolsDir, 'stable-diffusion-webui');
    if (!fs.existsSync(sdPath)) {
      throw new Error('SD WebUI not installed. Run: bash scripts/install_global_tools.sh');
    }
    
    const proc = spawn('./webui.sh', [], {
      cwd: sdPath,
      detached: true
    });
    
    proc.unref();
    this.services.sdwebui.status = 'running';
    console.log('✅ SD WebUI started on http://localhost:7860');
    return proc.pid;
  }
  
  async startN8N() {
    const proc = spawn('n8n', ['start'], {
      env: {
        ...process.env,
        N8N_PORT: '5678',
        N8N_WEBHOOK_URL: 'http://localhost:5678/'
      },
      detached: true
    });
    
    proc.unref();
    this.services.n8n.status = 'running';
    console.log('✅ N8N started on http://localhost:5678');
    return proc.pid;
  }
  
  async startOllama() {
    const proc = spawn('ollama', ['serve'], {
      detached: true
    });
    
    proc.unref();
    this.services.ollama.status = 'running';
    console.log('✅ Ollama started on http://localhost:11434');
    return proc.pid;
  }
  
  async checkService(service) {
    try {
      const response = await fetch(this.services[service].url);
      this.services[service].status = response.ok ? 'running' : 'error';
      return response.ok;
    } catch {
      this.services[service].status = 'stopped';
      return false;
    }
  }
  
  async checkAllServices() {
    const results = {};
    for (const service of Object.keys(this.services)) {
      results[service] = await this.checkService(service);
    }
    return results;
  }
  
  // === IMAGE GENERATION ===
  
  async generateImage(prompt, options = {}) {
    const {
      method = 'auto',
      width = 512,
      height = 512,
      steps = 20,
      outputPath = null
    } = options;
    
    // Auto-select best available method
    if (method === 'auto') {
      if (await this.checkService('comfyui')) {
        return this.generateImageComfyUI(prompt, options);
      } else if (await this.checkService('sdwebui')) {
        return this.generateImageSDWebUI(prompt, options);
      } else if (this.config.apiKeys.stability?.api_key) {
        return this.generateImageStability(prompt, options);
      } else if (this.config.apiKeys.openai?.api_key) {
        return this.generateImageOpenAI(prompt, options);
      } else {
        throw new Error('No image generation service available');
      }
    }
    
    // Use specific method
    switch (method) {
      case 'comfyui':
        return this.generateImageComfyUI(prompt, options);
      case 'sdwebui':
        return this.generateImageSDWebUI(prompt, options);
      case 'stability':
        return this.generateImageStability(prompt, options);
      case 'openai':
        return this.generateImageOpenAI(prompt, options);
      default:
        throw new Error(`Unknown method: ${method}`);
    }
  }
  
  async generateImageComfyUI(prompt, options) {
    // Implementation for ComfyUI
    const workflow = {
      // ComfyUI workflow JSON
    };
    
    const response = await fetch('http://localhost:8188/prompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: workflow })
    });
    
    if (!response.ok) throw new Error('ComfyUI generation failed');
    
    // Get image data
    const result = await response.json();
    return result;
  }
  
  async generateImageStability(prompt, options) {
    const response = await fetch(
      'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKeys.stability.api_key}`
        },
        body: JSON.stringify({
          text_prompts: [{ text: prompt }],
          cfg_scale: 7,
          height: options.height || 1024,
          width: options.width || 1024,
          steps: options.steps || 30
        })
      }
    );
    
    if (!response.ok) throw new Error('Stability generation failed');
    
    const data = await response.json();
    return Buffer.from(data.artifacts[0].base64, 'base64');
  }
  
  // === VIDEO GENERATION ===
  
  async generateVideo(prompt, options = {}) {
    const {
      method = 'animatediff',
      frames = 16,
      fps = 8,
      outputPath = null
    } = options;
    
    switch (method) {
      case 'animatediff':
        return this.generateVideoAnimateDiff(prompt, options);
      case 'svd':
        return this.generateVideoSVD(prompt, options);
      case 'interpolation':
        return this.generateVideoInterpolation(prompt, options);
      default:
        throw new Error(`Unknown video method: ${method}`);
    }
  }
  
  async generateVideoAnimateDiff(prompt, options) {
    const animatePath = path.join(this.config.toolsDir, 'animatediff-cli');
    
    const cmd = `python -m animatediff generate ` +
      `--prompt "${prompt}" ` +
      `--frames ${options.frames} ` +
      `--fps ${options.fps}`;
    
    const { stdout } = await execAsync(cmd, { cwd: animatePath });
    return stdout;
  }
  
  // === AUDIO GENERATION ===
  
  async generateAudio(prompt, options = {}) {
    const {
      method = 'audiocraft',
      duration = 10,
      outputPath = null
    } = options;
    
    const audiocraftPath = path.join(this.config.toolsDir, 'audiocraft');
    
    const cmd = `python -m audiocraft.models.musicgen ` +
      `--prompt "${prompt}" ` +
      `--duration ${duration}`;
    
    const { stdout } = await execAsync(cmd, { cwd: audiocraftPath });
    return stdout;
  }
  
  // === LLM GENERATION ===
  
  async generateText(prompt, options = {}) {
    const {
      method = 'auto',
      model = 'llama2',
      maxTokens = 500
    } = options;
    
    if (method === 'auto' || method === 'ollama') {
      if (await this.checkService('ollama')) {
        return this.generateTextOllama(prompt, { model, ...options });
      }
    }
    
    if (this.config.apiKeys.openai?.api_key) {
      return this.generateTextOpenAI(prompt, options);
    }
    
    throw new Error('No text generation service available');
  }
  
  async generateTextOllama(prompt, options) {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: options.model || 'llama2',
        prompt: prompt,
        stream: false
      })
    });
    
    if (!response.ok) throw new Error('Ollama generation failed');
    
    const data = await response.json();
    return data.response;
  }
  
  async generateTextOpenAI(prompt, options) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKeys.openai.api_key}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: options.maxTokens || 500
      })
    });
    
    if (!response.ok) throw new Error('OpenAI generation failed');
    
    const data = await response.json();
    return data.choices[0].message.content;
  }
  
  // === WORKFLOW AUTOMATION ===
  
  async createWorkflow(name, nodes) {
    // Create N8N workflow
    const workflow = {
      name: name,
      nodes: nodes,
      connections: {}
    };
    
    const response = await fetch('http://localhost:5678/api/v1/workflows', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(workflow)
    });
    
    if (!response.ok) throw new Error('Workflow creation failed');
    
    return await response.json();
  }
  
  async triggerWorkflow(workflowId, data) {
    const response = await fetch(`http://localhost:5678/webhook/${workflowId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) throw new Error('Workflow trigger failed');
    
    return await response.json();
  }
  
  // === BATCH OPERATIONS ===
  
  async generateBatch(items) {
    const results = [];
    
    for (const item of items) {
      try {
        let result;
        
        switch (item.type) {
          case 'image':
            result = await this.generateImage(item.prompt, item.options);
            break;
          case 'video':
            result = await this.generateVideo(item.prompt, item.options);
            break;
          case 'audio':
            result = await this.generateAudio(item.prompt, item.options);
            break;
          case 'text':
            result = await this.generateText(item.prompt, item.options);
            break;
          default:
            throw new Error(`Unknown type: ${item.type}`);
        }
        
        results.push({
          success: true,
          type: item.type,
          prompt: item.prompt,
          result: result
        });
      } catch (error) {
        results.push({
          success: false,
          type: item.type,
          prompt: item.prompt,
          error: error.message
        });
      }
    }
    
    return results;
  }
}

// === CONVENIENCE FUNCTIONS ===

// Quick image generation
async function quickImage(prompt) {
  const lib = new ToolLibrary();
  return lib.generateImage(prompt);
}

// Quick video generation
async function quickVideo(prompt) {
  const lib = new ToolLibrary();
  return lib.generateVideo(prompt);
}

// Quick audio generation
async function quickAudio(prompt) {
  const lib = new ToolLibrary();
  return lib.generateAudio(prompt);
}

// Quick text generation
async function quickText(prompt) {
  const lib = new ToolLibrary();
  return lib.generateText(prompt);
}

// Export for use in other projects
module.exports = {
  ToolLibrary,
  quickImage,
  quickVideo,
  quickAudio,
  quickText
};

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  const prompt = args[1];
  
  const lib = new ToolLibrary();
  
  async function main() {
    switch (command) {
      case 'start':
        const service = prompt;
        await lib.startService(service);
        break;
        
      case 'check':
        const status = await lib.checkAllServices();
        console.log('Service Status:', status);
        break;
        
      case 'image':
        const image = await lib.generateImage(prompt);
        console.log('Image generated:', image);
        break;
        
      case 'video':
        const video = await lib.generateVideo(prompt);
        console.log('Video generated:', video);
        break;
        
      case 'audio':
        const audio = await lib.generateAudio(prompt);
        console.log('Audio generated:', audio);
        break;
        
      case 'text':
        const text = await lib.generateText(prompt);
        console.log('Generated text:', text);
        break;
        
      default:
        console.log('Usage:');
        console.log('  node tool_library.js start <service>');
        console.log('  node tool_library.js check');
        console.log('  node tool_library.js image "<prompt>"');
        console.log('  node tool_library.js video "<prompt>"');
        console.log('  node tool_library.js audio "<prompt>"');
        console.log('  node tool_library.js text "<prompt>"');
    }
  }
  
  main().catch(console.error);
}
