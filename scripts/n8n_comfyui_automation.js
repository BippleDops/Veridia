#!/usr/bin/env node

/**
 * n8n + ComfyUI Automation System
 * Orchestrates batch image generation with intelligent queue management
 */

const fs = require('fs');
const path = require('path');
const { generateEnhancedImage, WORLD_STYLES } = require('./comfyui_enhanced');

const ROOT = process.env.WORKSPACE_DIR || process.cwd();
const QUEUE_DIR = path.join(ROOT, '09_Performance', 'generation_queue');
const COMPLETED_DIR = path.join(ROOT, '09_Performance', 'completed_jobs');

// Ensure directories exist
[QUEUE_DIR, COMPLETED_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

class GenerationOrchestrator {
  constructor(options = {}) {
    this.concurrency = options.concurrency || 2;
    this.queueCheckInterval = options.queueCheckInterval || 5000;
    this.activeJobs = new Map();
    this.stats = {
      completed: 0,
      failed: 0,
      totalTime: 0,
      startTime: Date.now()
    };
  }

  async start() {
    console.log(`[Orchestrator] Starting with concurrency=${this.concurrency}`);
    
    // Start workers
    for (let i = 0; i < this.concurrency; i++) {
      this.startWorker(i);
    }
    
    // Monitor queue
    this.monitorQueue();
    
    // Stats reporter
    setInterval(() => this.reportStats(), 30000);
  }

  async startWorker(workerId) {
    while (true) {
      try {
        const job = await this.getNextJob();
        if (!job) {
          await new Promise(r => setTimeout(r, 5000));
          continue;
        }
        
        console.log(`[Worker ${workerId}] Processing job: ${job.id}`);
        const startTime = Date.now();
        
        await this.processJob(job);
        
        const duration = Date.now() - startTime;
        this.stats.completed++;
        this.stats.totalTime += duration;
        
        console.log(`[Worker ${workerId}] Completed ${job.id} in ${duration}ms`);
      } catch (error) {
        console.error(`[Worker ${workerId}] Error:`, error.message);
        this.stats.failed++;
        await new Promise(r => setTimeout(r, 10000));
      }
    }
  }

  async getNextJob() {
    const files = fs.readdirSync(QUEUE_DIR)
      .filter(f => f.endsWith('.json'))
      .sort(); // Process in order
    
    if (files.length === 0) return null;
    
    const jobFile = path.join(QUEUE_DIR, files[0]);
    
    try {
      const job = JSON.parse(fs.readFileSync(jobFile, 'utf8'));
      
      // Move to processing
      const processingFile = jobFile.replace('.json', '.processing');
      fs.renameSync(jobFile, processingFile);
      
      job.file = processingFile;
      return job;
    } catch (e) {
      return null;
    }
  }

  async processJob(job) {
    const { 
      id, 
      type, 
      prompts, 
      world, 
      outputDir,
      metadata = {}
    } = job;
    
    const results = [];
    
    for (const promptData of prompts) {
      try {
        // Generate image
        const imageBuffer = await generateEnhancedImage({
          prompt: promptData.prompt,
          type: type || 'portrait',
          world: world || null,
          width: promptData.width || 512,
          height: promptData.height || 512,
          seed: promptData.seed || -1
        });
        
        // Save image
        const outputPath = path.join(
          ROOT,
          outputDir || '04_Resources/Assets/Generated',
          type || 'misc',
          `${promptData.name || 'unnamed'}_${Date.now()}.png`
        );
        
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        fs.writeFileSync(outputPath, imageBuffer);
        
        // Save metadata
        const metaPath = outputPath.replace('.png', '.json');
        fs.writeFileSync(metaPath, JSON.stringify({
          ...metadata,
          ...promptData,
          generated: new Date().toISOString(),
          path: outputPath,
          world,
          type
        }, null, 2));
        
        results.push({
          success: true,
          path: outputPath,
          name: promptData.name
        });
      } catch (error) {
        results.push({
          success: false,
          error: error.message,
          name: promptData.name
        });
      }
    }
    
    // Mark job complete
    const completedJob = {
      ...job,
      results,
      completedAt: new Date().toISOString()
    };
    
    const completedPath = path.join(COMPLETED_DIR, `${id}_completed.json`);
    fs.writeFileSync(completedPath, JSON.stringify(completedJob, null, 2));
    
    // Remove processing file
    if (job.file && fs.existsSync(job.file)) {
      fs.unlinkSync(job.file);
    }
    
    return results;
  }

  async monitorQueue() {
    setInterval(() => {
      const queueSize = fs.readdirSync(QUEUE_DIR)
        .filter(f => f.endsWith('.json')).length;
      
      const processingSize = fs.readdirSync(QUEUE_DIR)
        .filter(f => f.endsWith('.processing')).length;
      
      if (queueSize > 0 || processingSize > 0) {
        console.log(`[Queue] Pending: ${queueSize}, Processing: ${processingSize}`);
      }
    }, this.queueCheckInterval);
  }

  reportStats() {
    const runtime = Math.floor((Date.now() - this.stats.startTime) / 1000);
    const avgTime = this.stats.completed > 0 
      ? Math.floor(this.stats.totalTime / this.stats.completed / 1000)
      : 0;
    
    console.log(`[Stats] Runtime: ${runtime}s, Completed: ${this.stats.completed}, Failed: ${this.stats.failed}, Avg: ${avgTime}s/image`);
  }
}

// Job creation utilities
function createBatchJob(options) {
  const {
    type,
    world,
    prompts, // Array of { name, prompt, width?, height?, seed? }
    priority = 5
  } = options;
  
  const jobId = `job_${type}_${world}_${Date.now()}`;
  const job = {
    id: jobId,
    type,
    world,
    prompts,
    priority,
    createdAt: new Date().toISOString(),
    outputDir: `04_Resources/Assets/${type.charAt(0).toUpperCase() + type.slice(1)}s`
  };
  
  const jobPath = path.join(QUEUE_DIR, `${priority}_${jobId}.json`);
  fs.writeFileSync(jobPath, JSON.stringify(job, null, 2));
  
  console.log(`Created job: ${jobId} with ${prompts.length} prompts`);
  return jobId;
}

// n8n integration endpoint
function startN8nListener(port = 5679) {
  const http = require('http');
  
  const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/queue/add') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const jobData = JSON.parse(body);
          const jobId = createBatchJob(jobData);
          
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, jobId }));
        } catch (error) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: error.message }));
        }
      });
    } else if (req.method === 'GET' && req.url === '/stats') {
      const orchestrator = global.orchestrator;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(orchestrator ? orchestrator.stats : {}));
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  
  server.listen(port, '127.0.0.1', () => {
    console.log(`n8n listener on http://127.0.0.1:${port}`);
  });
  
  return server;
}

// CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--orchestrate')) {
    // Start orchestrator
    const orchestrator = new GenerationOrchestrator({
      concurrency: parseInt(args[args.indexOf('--concurrency') + 1] || '2', 10)
    });
    global.orchestrator = orchestrator;
    orchestrator.start();
    
    // Start n8n listener
    if (args.includes('--n8n')) {
      startN8nListener(parseInt(args[args.indexOf('--n8n') + 1] || '5679', 10));
    }
  } else if (args.includes('--queue')) {
    // Queue a job
    const type = args[args.indexOf('--type') + 1] || 'portrait';
    const world = args[args.indexOf('--world') + 1] || 'aquabyssos';
    const count = parseInt(args[args.indexOf('--count') + 1] || '5', 10);
    
    const prompts = [];
    for (let i = 0; i < count; i++) {
      prompts.push({
        name: `${type}_${world}_${i}`,
        prompt: `${type} in ${world} setting, highly detailed, fantasy art`,
        width: 512,
        height: 512
      });
    }
    
    createBatchJob({ type, world, prompts });
  } else {
    console.log(`
Usage:
  --orchestrate           Start the generation orchestrator
    --concurrency N       Number of parallel workers (default: 2)
    --n8n [PORT]         Start n8n listener (default: 5679)
  
  --queue                Queue a generation job
    --type TYPE          Asset type (portrait, creature, location, etc.)
    --world WORLD        World setting (aquabyssos, aethermoor, void)
    --count N            Number of images to generate
    `);
  }
}
