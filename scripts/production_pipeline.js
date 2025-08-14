#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

// Load configuration
const CONFIG_PATH = path.join(process.cwd(), '.obsidian', 'api_config.json');
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

console.log('🏭 PRODUCTION PIPELINE - Maximum Asset Generation');
console.log('=' .repeat(60));

// Pipeline configuration
const pipeline = {
  images: {
    portraits: 100,
    locations: 100,
    creatures: 100,
    items: 50,
    maps: 50,
    scenes: 50
  },
  audio: {
    ambient: 50,
    combat: 20,
    tavern: 10,
    dungeon: 20
  },
  text: {
    npcs: 50,
    quests: 30,
    locations: 40
  }
};

// === PARALLEL EXECUTION MANAGER ===
class ParallelExecutor {
  constructor(maxConcurrent = 5) {
    this.maxConcurrent = maxConcurrent;
    this.running = 0;
    this.queue = [];
    this.results = [];
  }
  
  async add(task, name) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, name, resolve, reject });
      this.process();
    });
  }
  
  async process() {
    while (this.running < this.maxConcurrent && this.queue.length > 0) {
      const { task, name, resolve, reject } = this.queue.shift();
      this.running++;
      
      console.log(`🚀 Starting: ${name}`);
      
      task()
        .then(result => {
          console.log(`✅ Completed: ${name}`);
          this.results.push({ name, status: 'success', result });
          resolve(result);
        })
        .catch(error => {
          console.error(`❌ Failed: ${name} - ${error.message}`);
          this.results.push({ name, status: 'failed', error: error.message });
          reject(error);
        })
        .finally(() => {
          this.running--;
          this.process();
        });
    }
  }
  
  async waitAll() {
    while (this.running > 0 || this.queue.length > 0) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    return this.results;
  }
}

// === IMAGE GENERATION TASKS ===
async function generateImageBatch(type, count) {
  const { generateBatch } = require('./smart_generator');
  return generateBatch(type, count);
}

// === AUDIO GENERATION TASKS ===
async function generateAudioBatch(type, count) {
  console.log(`🎵 Generating ${count} ${type} audio tracks...`);
  
  const outputDir = path.join(process.cwd(), '04_Resources/Assets/Audio', type);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Use the audio generator script
  try {
    await execAsync(`node scripts/generate_audio_pack.js --type=${type} --count=${count}`);
    return count;
  } catch (error) {
    console.error(`Audio generation failed: ${error.message}`);
    return 0;
  }
}

// === TEXT CONTENT GENERATION ===
async function generateTextContent(type, count) {
  console.log(`📝 Generating ${count} ${type} descriptions...`);
  
  const outputDir = path.join(process.cwd(), '02_Worldbuilding', 'Generated', type);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const prompts = {
    npcs: 'Generate a detailed fantasy RPG NPC with name, appearance, personality, backstory, and plot hooks',
    quests: 'Generate a compelling fantasy RPG quest with objectives, rewards, complications, and narrative arc',
    locations: 'Generate a detailed fantasy location with description, inhabitants, secrets, and adventure hooks'
  };
  
  let generated = 0;
  
  for (let i = 0; i < count; i++) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.openai.api_key}`,
          'OpenAI-Organization': config.openai.organization,
          'OpenAI-Project': config.openai.project
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            { role: 'system', content: 'You are a creative fantasy RPG content generator.' },
            { role: 'user', content: prompts[type] || prompts.npcs }
          ],
          temperature: 0.8,
          max_tokens: 500
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        const content = data.choices?.[0]?.message?.content || '';
        
        if (content) {
          const filename = `${type}_${Date.now()}_${i}.md`;
          const filepath = path.join(outputDir, filename);
          
          fs.writeFileSync(filepath, `# Generated ${type}\n\n${content}\n\n---\n*Generated at ${new Date().toISOString()}*`);
          generated++;
        }
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
      console.error(`Text generation error: ${error.message}`);
    }
  }
  
  console.log(`✅ Generated ${generated}/${count} ${type}`);
  return generated;
}

// === MAIN PIPELINE ===
async function runPipeline() {
  const startTime = Date.now();
  const executor = new ParallelExecutor(5); // Run 5 tasks concurrently
  
  console.log('\n📋 Pipeline Configuration:');
  console.log(JSON.stringify(pipeline, null, 2));
  console.log('\n🚀 Starting parallel execution...\n');
  
  // Queue all image generation tasks
  for (const [type, count] of Object.entries(pipeline.images)) {
    executor.add(
      () => generateImageBatch(type.charAt(0).toUpperCase() + type.slice(1), count),
      `Images: ${type} (${count})`
    );
  }
  
  // Queue audio generation tasks
  for (const [type, count] of Object.entries(pipeline.audio)) {
    executor.add(
      () => generateAudioBatch(type, count),
      `Audio: ${type} (${count})`
    );
  }
  
  // Queue text generation tasks
  for (const [type, count] of Object.entries(pipeline.text)) {
    executor.add(
      () => generateTextContent(type, count),
      `Text: ${type} (${count})`
    );
  }
  
  // Wait for all tasks to complete
  const results = await executor.waitAll();
  
  // Generate report
  const duration = Math.round((Date.now() - startTime) / 1000);
  const successful = results.filter(r => r.status === 'success').length;
  const failed = results.filter(r => r.status === 'failed').length;
  
  console.log('\n' + '=' .repeat(60));
  console.log('📊 PIPELINE COMPLETE');
  console.log('=' .repeat(60));
  console.log(`✅ Successful tasks: ${successful}`);
  console.log(`❌ Failed tasks: ${failed}`);
  console.log(`⏱️ Total duration: ${duration} seconds (${Math.round(duration/60)} minutes)`);
  
  // Save detailed report
  const report = {
    timestamp: new Date().toISOString(),
    duration: duration,
    configuration: pipeline,
    results: results,
    summary: {
      successful: successful,
      failed: failed,
      totalTasks: results.length
    }
  };
  
  fs.writeFileSync(
    path.join(process.cwd(), '09_Performance', 'production_pipeline_report.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log('\n📄 Detailed report saved to: 09_Performance/production_pipeline_report.json');
  
  // Commit changes
  console.log('\n📦 Committing all changes...');
  try {
    await execAsync('git add -A');
    await execAsync(`git commit -m "Production pipeline: ${successful} tasks completed, ${failed} failed"`);
    await execAsync('git push origin main');
    console.log('✅ Changes committed and pushed');
  } catch (error) {
    console.error(`Commit failed: ${error.message}`);
  }
}

// === EXECUTION ===
async function main() {
  try {
    await runPipeline();
  } catch (error) {
    console.error(`Pipeline error: ${error.message}`);
    process.exit(1);
  }
}

// Run the pipeline
main();
