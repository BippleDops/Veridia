#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

// Configuration
const BATCH_SIZE = 50;
const GENERATION_INTERVAL = 300000; // 5 minutes
const COMMIT_INTERVAL = 1800000; // 30 minutes

// State tracking
const state = {
  totalGenerated: 0,
  lastGeneration: Date.now(),
  lastCommit: Date.now(),
  running: true,
  currentBatch: 0
};

// Load mega generator functions
const { generateBatch } = require('./mega_generator');

// Asset categories to rotate through
const CATEGORIES = ['portraits', 'locations', 'creatures', 'items', 'maps', 'scenes'];

// Generation queue
class GenerationQueue {
  constructor() {
    this.queue = [];
    this.processing = false;
  }
  
  add(task) {
    this.queue.push(task);
    this.process();
  }
  
  async process() {
    if (this.processing || this.queue.length === 0) return;
    
    this.processing = true;
    
    while (this.queue.length > 0) {
      const task = this.queue.shift();
      try {
        await task();
      } catch (error) {
        console.error(`Task failed: ${error.message}`);
      }
    }
    
    this.processing = false;
  }
}

const queue = new GenerationQueue();

// Continuous generation loop
async function generationLoop() {
  while (state.running) {
    const category = CATEGORIES[state.currentBatch % CATEGORIES.length];
    
    console.log(`\n🎯 Batch ${state.currentBatch}: Generating ${category}...`);
    
    try {
      const generated = await generateBatch(category, 10);
      state.totalGenerated += generated;
      state.lastGeneration = Date.now();
      
      console.log(`✅ Total generated: ${state.totalGenerated} assets`);
      
      // Save state
      fs.writeFileSync(
        path.join(process.cwd(), '09_Performance', 'orchestrator_state.json'),
        JSON.stringify(state, null, 2)
      );
    } catch (error) {
      console.error(`Generation error: ${error.message}`);
    }
    
    state.currentBatch++;
    
    // Check if we should commit
    if (Date.now() - state.lastCommit > COMMIT_INTERVAL) {
      await autoCommit();
    }
    
    // Wait before next batch
    await new Promise(resolve => setTimeout(resolve, GENERATION_INTERVAL));
  }
}

// Auto-commit function
async function autoCommit() {
  console.log('\n📦 Auto-committing changes...');
  
  try {
    await execAsync('git add -A');
    await execAsync(`git commit -m "Auto-commit: ${state.totalGenerated} assets generated"`);
    await execAsync('git push origin main');
    
    state.lastCommit = Date.now();
    console.log('✅ Changes committed and pushed');
  } catch (error) {
    console.error(`Commit failed: ${error.message}`);
  }
}

// Monitor system health
async function healthMonitor() {
  setInterval(async () => {
    const stats = {
      uptime: Math.round((Date.now() - state.lastGeneration) / 1000),
      totalGenerated: state.totalGenerated,
      queueLength: queue.queue.length,
      memory: process.memoryUsage()
    };
    
    fs.writeFileSync(
      path.join(process.cwd(), '09_Performance', 'health_stats.json'),
      JSON.stringify(stats, null, 2)
    );
    
    // Check ComfyUI health
    try {
      const response = await fetch('http://127.0.0.1:8188/system_stats');
      if (!response.ok) {
        console.log('⚠️ ComfyUI not responding, attempting restart...');
        await restartComfyUI();
      }
    } catch {
      // ComfyUI is down
    }
  }, 60000); // Check every minute
}

// Restart ComfyUI if needed
async function restartComfyUI() {
  try {
    // Kill existing process
    if (fs.existsSync('09_Performance/pid/comfyui.pid')) {
      const pid = fs.readFileSync('09_Performance/pid/comfyui.pid', 'utf8');
      try {
        process.kill(parseInt(pid));
      } catch {}
      fs.unlinkSync('09_Performance/pid/comfyui.pid');
    }
    
    // Start new instance
    const comfyPath = path.join(process.env.HOME, 'ComfyUI');
    if (fs.existsSync(comfyPath)) {
      exec(
        'PYTORCH_ENABLE_MPS_FALLBACK=1 PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0 python main.py --port 8188',
        { cwd: comfyPath },
        (error) => {
          if (error) console.error(`ComfyUI restart failed: ${error.message}`);
        }
      );
      console.log('✅ ComfyUI restarted');
    }
  } catch (error) {
    console.error(`Failed to restart ComfyUI: ${error.message}`);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down orchestrator...');
  state.running = false;
  
  // Final commit
  await autoCommit();
  
  // Save final state
  fs.writeFileSync(
    path.join(process.cwd(), '09_Performance', 'orchestrator_final_state.json'),
    JSON.stringify(state, null, 2)
  );
  
  console.log('✅ Orchestrator stopped gracefully');
  process.exit(0);
});

// Main execution
async function main() {
  console.log('🎭 TTRPG Asset Orchestrator Started');
  console.log('=' .repeat(40));
  console.log(`📊 Batch Size: ${BATCH_SIZE} assets`);
  console.log(`⏱️ Generation Interval: ${GENERATION_INTERVAL / 60000} minutes`);
  console.log(`📦 Commit Interval: ${COMMIT_INTERVAL / 60000} minutes`);
  console.log('=' .repeat(40));
  
  // Load previous state if exists
  const statePath = path.join(process.cwd(), '09_Performance', 'orchestrator_state.json');
  if (fs.existsSync(statePath)) {
    const savedState = JSON.parse(fs.readFileSync(statePath, 'utf8'));
    Object.assign(state, savedState);
    console.log(`📂 Resumed from batch ${state.currentBatch}`);
  }
  
  // Start monitoring
  healthMonitor();
  
  // Start generation loop
  generationLoop();
}

// Start the orchestrator
main().catch(console.error);
