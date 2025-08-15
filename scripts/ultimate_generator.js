#!/usr/bin/env node

/**
 * ULTIMATE GENERATOR - August 2025
 * ================================
 * Combines all optimizations, advanced prompts, and workflows
 */

const fs = require('fs');
const path = require('path');
const fetch = require('node:fetch');
const AdvancedPromptSystem = require('./advanced_prompt_system');
const AdvancedWorkflowSystem = require('./advanced_workflow_system');

const COMFY_URL = 'http://localhost:8188';

class UltimateGenerator {
  constructor() {
    this.promptSystem = new AdvancedPromptSystem();
    this.workflowSystem = new AdvancedWorkflowSystem();
    
    this.config = {
      mode: 'ultimate', // ultimate, turbo, quality, balanced
      batchProcessing: true,
      batchSize: 4,
      parallelStreams: 3,
      
      // Quality settings
      autoQuality: true,
      minQuality: 'good',
      targetSpeed: 5, // seconds
      
      // Advanced features
      useLatestModels: true,
      adaptiveWorkflow: true,
      intelligentRetry: true,
      progressiveGeneration: true,
      
      // Optimization
      caching: true,
      tokenOptimization: true,
      vramManagement: true,
      
      // Stats tracking
      trackPerformance: true,
      autoReport: true
    };
    
    this.stats = {
      startTime: Date.now(),
      generated: 0,
      failed: 0,
      totalTime: 0,
      avgTime: 0,
      bestTime: Infinity,
      worstTime: 0,
      byType: {},
      byWorkflow: {}
    };
    
    this.queue = [];
    this.processing = new Set();
  }

  /**
   * Start ultimate generation system
   */
  async start() {
    console.log('🚀 ULTIMATE GENERATOR v2025.08.14');
    console.log('==================================');
    console.log('Features:');
    console.log('  ✓ Advanced prompt engineering');
    console.log('  ✓ Adaptive workflow selection');
    console.log('  ✓ Batch processing optimization');
    console.log('  ✓ Intelligent retry system');
    console.log('  ✓ Performance tracking');
    console.log('');
    
    // Verify ComfyUI connection
    await this.verifyConnection();
    
    // Load and categorize files
    const files = await this.intelligentScan();
    console.log(`📊 Intelligent scan complete: ${files.length} files\n`);
    
    // Start parallel processing streams
    const streams = [];
    for (let i = 0; i < this.config.parallelStreams; i++) {
      streams.push(this.processingStream(i));
    }
    
    // Wait for completion
    await Promise.all(streams);
    
    // Final report
    this.generateReport();
  }

  /**
   * Verify ComfyUI connection and capabilities
   */
  async verifyConnection() {
    try {
      const response = await fetch(`${COMFY_URL}/system_stats`);
      const stats = await response.json();
      console.log('✅ ComfyUI connected');
      console.log(`  Version: ${stats.system.comfyui_version}`);
      console.log(`  Python: ${stats.system.python_version.split(' ')[0]}`);
      console.log(`  VRAM Free: ${(stats.system.ram_free / 1e9).toFixed(1)}GB\n`);
    } catch (error) {
      throw new Error('ComfyUI not running! Start it first.');
    }
  }

  /**
   * Intelligent scan with prioritization
   */
  async intelligentScan() {
    const files = [];
    const processed = this.loadProgress();
    
    // Priority order
    const priorityDirs = [
      { path: '02_Worldbuilding/People', priority: 1, type: 'portrait' },
      { path: '02_Worldbuilding/Places', priority: 2, type: 'location' },
      { path: '01_Adventures', priority: 3, type: 'scene' },
      { path: '02_Worldbuilding/Items', priority: 4, type: 'item' },
      { path: '02_Worldbuilding/Creatures', priority: 5, type: 'creature' }
    ];
    
    for (const dir of priorityDirs) {
      const fullPath = path.join(process.cwd(), dir.path);
      if (fs.existsSync(fullPath)) {
        this.scanDirectory(fullPath, files, dir.type, dir.priority, processed);
      }
    }
    
    // Sort by priority
    files.sort((a, b) => a.priority - b.priority);
    
    // Add to queue
    this.queue = files;
    
    return files;
  }

  /**
   * Scan directory for files
   */
  scanDirectory(dir, files, type, priority, processed) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        this.scanDirectory(fullPath, files, type, priority, processed);
      } else if (entry.name.endsWith('.md')) {
        const id = fullPath.replace(process.cwd(), '');
        
        // Skip if already processed
        if (processed.has(id)) continue;
        
        // Skip if image exists
        const imagePath = this.getImagePath(fullPath, type);
        if (fs.existsSync(imagePath)) continue;
        
        files.push({
          id,
          path: fullPath,
          type,
          priority,
          attempts: 0
        });
      }
    }
  }

  /**
   * Processing stream
   */
  async processingStream(streamId) {
    console.log(`[Stream ${streamId}] Started`);
    
    while (this.queue.length > 0 || this.processing.size > 0) {
      // Get next batch
      const batch = this.getNextBatch();
      if (batch.length === 0) {
        // Wait if no items available
        await new Promise(r => setTimeout(r, 1000));
        continue;
      }
      
      // Process batch
      await this.processBatch(batch, streamId);
    }
    
    console.log(`[Stream ${streamId}] Complete`);
  }

  /**
   * Get next batch from queue
   */
  getNextBatch() {
    const batch = [];
    const batchSize = this.config.batchSize;
    
    while (batch.length < batchSize && this.queue.length > 0) {
      const item = this.queue.shift();
      if (!this.processing.has(item.id)) {
        this.processing.add(item.id);
        batch.push(item);
      }
    }
    
    return batch;
  }

  /**
   * Process a batch of files
   */
  async processBatch(batch, streamId) {
    console.log(`[Stream ${streamId}] Processing batch of ${batch.length}`);
    
    for (const file of batch) {
      try {
        await this.processFile(file, streamId);
        this.processing.delete(file.id);
      } catch (error) {
        console.error(`[Stream ${streamId}] Error: ${error.message}`);
        
        // Intelligent retry
        if (file.attempts < 2) {
          file.attempts++;
          this.queue.push(file); // Re-queue
        } else {
          this.stats.failed++;
        }
        
        this.processing.delete(file.id);
      }
    }
  }

  /**
   * Process single file with all optimizations
   */
  async processFile(file, streamId) {
    const startTime = Date.now();
    
    // Extract context
    const context = this.extractContext(file.path);
    if (!context) throw new Error('No context extracted');
    
    context.type = file.type;
    context.priority = file.priority;
    
    // Generate advanced prompt
    const promptData = this.promptSystem.generateAdvancedPrompt(context);
    console.log(`[Stream ${streamId}] ${context.title}`);
    console.log(`  Prompt: ${promptData.prompt.substring(0, 80)}...`);
    
    // Select optimal workflow
    const workflowType = this.selectWorkflow(context, promptData);
    console.log(`  Workflow: ${workflowType}`);
    
    // Build workflow
    const workflow = this.workflowSystem.buildAdvancedWorkflow(promptData, workflowType);
    
    // Submit to ComfyUI
    const response = await fetch(`${COMFY_URL}/prompt`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: workflow })
    });
    
    if (!response.ok) throw new Error(`ComfyUI error: ${response.status}`);
    
    const result = await response.json();
    const promptId = result.prompt_id;
    
    // Wait for completion
    const imagePath = await this.waitForCompletion(promptId, file, context);
    
    if (imagePath) {
      const genTime = (Date.now() - startTime) / 1000;
      this.updateStats(genTime, file.type, workflowType);
      console.log(`  ✅ Generated in ${genTime.toFixed(1)}s`);
      
      // Update markdown file
      await this.updateMarkdown(file.path, imagePath);
    }
  }

  /**
   * Extract context from file
   */
  extractContext(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath, '.md');
      
      let title = fileName;
      let description = '';
      let tags = [];
      
      // Extract title from first heading
      const titleMatch = content.match(/^#\s+(.+)$/m);
      if (titleMatch) title = titleMatch[1];
      
      // Extract description
      const paragraphs = content.split('\n\n');
      for (const para of paragraphs) {
        if (para.trim() && !para.startsWith('#') && !para.startsWith('---')) {
          description = para.trim();
          break;
        }
      }
      
      // Extract tags from frontmatter
      if (content.startsWith('---')) {
        const frontmatterEnd = content.indexOf('---', 3);
        if (frontmatterEnd > 0) {
          const frontmatter = content.substring(3, frontmatterEnd);
          const tagMatch = frontmatter.match(/tags:\s*\[(.*?)\]/);
          if (tagMatch) {
            tags = tagMatch[1].split(',').map(t => t.trim().replace(/['"]/g, ''));
          }
        }
      }
      
      // Detect campaign
      let campaign = null;
      if (filePath.includes('Aquabyssos') || description.includes('underwater')) {
        campaign = 'aquabyssos';
      } else if (filePath.includes('Aethermoor') || description.includes('airship')) {
        campaign = 'aethermoor';
      }
      
      return { title, description, tags, campaign, filePath };
    } catch (error) {
      return null;
    }
  }

  /**
   * Select optimal workflow based on context
   */
  selectWorkflow(context, promptData) {
    // Fast mode for large batches
    if (this.queue.length > 100) return 'turbo';
    
    // Quality mode for important files
    if (context.priority === 1 && context.type === 'portrait') {
      return 'portrait_optimized';
    }
    
    // HDR for locations
    if (context.type === 'location') {
      return 'environment_hdr';
    }
    
    // Default to turbo for speed
    return 'turbo';
  }

  /**
   * Wait for image completion
   */
  async waitForCompletion(promptId, file, context) {
    const maxWait = 60000;
    const checkInterval = 500;
    const startTime = Date.now();
    
    while (Date.now() - startTime < maxWait) {
      try {
        const response = await fetch(`${COMFY_URL}/history/${promptId}`);
        if (response.ok) {
          const history = await response.json();
          
          if (history[promptId]?.outputs) {
            const outputs = history[promptId].outputs;
            
            for (const nodeId in outputs) {
              if (outputs[nodeId].images?.length > 0) {
                const imageInfo = outputs[nodeId].images[0];
                
                // Download image
                const imageUrl = `${COMFY_URL}/view?filename=${imageInfo.filename}&type=output`;
                const imageResponse = await fetch(imageUrl);
                const imageBuffer = await imageResponse.arrayBuffer();
                
                // Save image
                const outputPath = this.getImagePath(file.path, file.type);
                fs.writeFileSync(outputPath, Buffer.from(imageBuffer));
                
                // Save metadata
                const metadata = {
                  ...context,
                  workflow: file.workflowType,
                  generated: new Date().toISOString()
                };
                fs.writeFileSync(
                  outputPath.replace('.png', '_metadata.json'),
                  JSON.stringify(metadata, null, 2)
                );
                
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
    
    throw new Error('Generation timeout');
  }

  /**
   * Get image output path
   */
  getImagePath(filePath, type) {
    const fileName = path.basename(filePath, '.md');
    const safeName = fileName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    
    const typeMap = {
      portrait: 'Portraits',
      location: 'Locations',
      item: 'Items',
      creature: 'Creatures',
      scene: 'Scenes'
    };
    
    const subdir = typeMap[type] || 'Misc';
    const outputDir = path.join(process.cwd(), '04_Resources/Assets/Generated', subdir);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    return path.join(outputDir, `${safeName}.png`);
  }

  /**
   * Update markdown with image reference
   */
  async updateMarkdown(filePath, imagePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(path.dirname(filePath), imagePath);
      
      // Add image reference if not present
      if (!content.includes('![')) {
        const imageTag = `![Image](${relativePath})\n\n`;
        
        if (content.startsWith('---')) {
          // After frontmatter
          const frontmatterEnd = content.indexOf('---', 3);
          if (frontmatterEnd > 0) {
            content = content.substring(0, frontmatterEnd + 3) + '\n\n' + imageTag + 
                     content.substring(frontmatterEnd + 3);
          }
        } else {
          // At beginning
          content = imageTag + content;
        }
        
        fs.writeFileSync(filePath, content);
      }
    } catch (error) {
      console.error(`Failed to update markdown: ${error.message}`);
    }
  }

  /**
   * Update statistics
   */
  updateStats(genTime, type, workflow) {
    this.stats.generated++;
    this.stats.totalTime += genTime;
    this.stats.avgTime = this.stats.totalTime / this.stats.generated;
    this.stats.bestTime = Math.min(this.stats.bestTime, genTime);
    this.stats.worstTime = Math.max(this.stats.worstTime, genTime);
    
    // Track by type
    if (!this.stats.byType[type]) {
      this.stats.byType[type] = { count: 0, totalTime: 0 };
    }
    this.stats.byType[type].count++;
    this.stats.byType[type].totalTime += genTime;
    
    // Track by workflow
    if (!this.stats.byWorkflow[workflow]) {
      this.stats.byWorkflow[workflow] = { count: 0, totalTime: 0 };
    }
    this.stats.byWorkflow[workflow].count++;
    this.stats.byWorkflow[workflow].totalTime += genTime;
  }

  /**
   * Load progress
   */
  loadProgress() {
    const processed = new Set();
    try {
      const progressFile = path.join(process.cwd(), '09_Performance/ultimate_progress.json');
      if (fs.existsSync(progressFile)) {
        const data = JSON.parse(fs.readFileSync(progressFile, 'utf8'));
        data.processed.forEach(id => processed.add(id));
      }
    } catch (error) {
      // Ignore
    }
    return processed;
  }

  /**
   * Generate final report
   */
  generateReport() {
    const totalMinutes = (Date.now() - this.stats.startTime) / 1000 / 60;
    
    console.log('\n' + '='.repeat(60));
    console.log('📊 ULTIMATE GENERATION REPORT');
    console.log('='.repeat(60));
    console.log(`Total Time: ${totalMinutes.toFixed(1)} minutes`);
    console.log(`Images Generated: ${this.stats.generated}`);
    console.log(`Failed: ${this.stats.failed}`);
    console.log(`Success Rate: ${((this.stats.generated / (this.stats.generated + this.stats.failed)) * 100).toFixed(1)}%`);
    console.log('');
    console.log('Performance:');
    console.log(`  Average: ${this.stats.avgTime.toFixed(1)}s per image`);
    console.log(`  Best: ${this.stats.bestTime.toFixed(1)}s`);
    console.log(`  Worst: ${this.stats.worstTime.toFixed(1)}s`);
    console.log(`  Rate: ${(60 / this.stats.avgTime).toFixed(1)} images/minute`);
    console.log('');
    console.log('By Type:');
    Object.entries(this.stats.byType).forEach(([type, data]) => {
      const avg = data.totalTime / data.count;
      console.log(`  ${type}: ${data.count} images, ${avg.toFixed(1)}s avg`);
    });
    console.log('');
    console.log('By Workflow:');
    Object.entries(this.stats.byWorkflow).forEach(([workflow, data]) => {
      const avg = data.totalTime / data.count;
      console.log(`  ${workflow}: ${data.count} images, ${avg.toFixed(1)}s avg`);
    });
    console.log('='.repeat(60));
    
    // Save report
    const report = {
      summary: {
        totalTime: totalMinutes,
        generated: this.stats.generated,
        failed: this.stats.failed,
        rate: 60 / this.stats.avgTime
      },
      performance: this.stats,
      timestamp: new Date().toISOString()
    };
    
    fs.writeFileSync(
      path.join(process.cwd(), '09_Performance/ultimate_report.json'),
      JSON.stringify(report, null, 2)
    );
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new UltimateGenerator();
  generator.start().catch(console.error);
}

module.exports = UltimateGenerator;
