#!/usr/bin/env node

/**
 * Setup Online Integrations for TTRPG Asset Generation
 * Connects to multiple online services for enhanced content creation
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

class OnlineIntegrationSetup {
  constructor() {
    this.services = {
      openai: { name: 'OpenAI GPT-4', url: 'https://platform.openai.com/api-keys', required: false },
      stability: { name: 'Stability AI', url: 'https://platform.stability.ai/account/keys', required: false },
      unsplash: { name: 'Unsplash', url: 'https://unsplash.com/oauth/applications', required: false },
      discord: { name: 'Discord Webhook', url: 'https://discord.com/developers/applications', required: false },
      notion: { name: 'Notion API', url: 'https://www.notion.so/my-integrations', required: false },
      airtable: { name: 'Airtable', url: 'https://airtable.com/account', required: false },
      replicate: { name: 'Replicate AI', url: 'https://replicate.com/account/api-tokens', required: false }
    };
    
    this.workflows = [];
  }

  async setup() {
    console.log('🌐 Online Integration Setup for TTRPG Asset Generation');
    console.log('='.repeat(60));
    console.log('\nThis will help you connect powerful online tools:\n');
    
    // List available integrations
    this.listIntegrations();
    
    // Create workflow configurations
    await this.createWorkflows();
    
    // Generate n8n import files
    this.generateN8nWorkflows();
    
    // Create monitoring dashboard
    this.createDashboard();
    
    console.log('\n✅ Setup complete!');
    console.log('\nNext steps:');
    console.log('1. Open n8n at http://localhost:5678');
    console.log('2. Import workflows from scripts/n8n_workflows/');
    console.log('3. Add your API credentials in n8n');
    console.log('4. Activate the workflows you want to use');
  }

  listIntegrations() {
    console.log('Available Online Integrations:');
    console.log('-'.repeat(40));
    
    Object.entries(this.services).forEach(([key, service]) => {
      console.log(`• ${service.name}`);
      console.log(`  Setup: ${service.url}`);
    });
  }

  async createWorkflows() {
    // 1. Content Generation Workflow
    this.workflows.push({
      name: 'AI Content Generator',
      description: 'Uses GPT-4 + DALL-E + Stability AI',
      nodes: [
        { type: 'openai', action: 'generate_lore' },
        { type: 'stability', action: 'generate_images' },
        { type: 'comfyui', action: 'enhance_images' }
      ]
    });
    
    // 2. Social Media Monitor
    this.workflows.push({
      name: 'TTRPG Trend Monitor',
      description: 'Tracks Reddit, Twitter, Discord for inspiration',
      nodes: [
        { type: 'reddit', action: 'fetch_trending' },
        { type: 'twitter', action: 'search_hashtags' },
        { type: 'discord', action: 'monitor_channels' }
      ]
    });
    
    // 3. Asset Database Sync
    this.workflows.push({
      name: 'Cloud Database Sync',
      description: 'Syncs assets to Notion, Airtable, Google Drive',
      nodes: [
        { type: 'local', action: 'scan_assets' },
        { type: 'notion', action: 'update_database' },
        { type: 'airtable', action: 'sync_records' }
      ]
    });
    
    // 4. AI Model Pipeline
    this.workflows.push({
      name: 'Multi-Model Pipeline',
      description: 'Chains multiple AI models for complex generation',
      nodes: [
        { type: 'replicate', action: 'run_sdxl' },
        { type: 'huggingface', action: 'run_llm' },
        { type: 'comfyui', action: 'post_process' }
      ]
    });
  }

  generateN8nWorkflows() {
    console.log('\n📝 Generating n8n Workflows...');
    
    // 1. Reddit + GPT-4 + ComfyUI Workflow
    const redditWorkflow = {
      name: 'Reddit-Inspired Asset Generation',
      nodes: [
        {
          parameters: {
            url: 'https://www.reddit.com/r/DnDBehindTheScreen/top.json?limit=10',
            options: { response: { responseFormat: 'json' } }
          },
          name: 'Reddit DnD',
          type: 'n8n-nodes-base.httpRequest',
          position: [250, 300]
        },
        {
          parameters: {
            functionCode: `
// Extract creative ideas from Reddit posts
const posts = items[0].json.data.children;
const ideas = posts.map(post => ({
  title: post.data.title,
  score: post.data.score,
  prompt: \`Fantasy scene inspired by: \${post.data.title}\`
}));
return ideas.slice(0, 5).map(idea => ({ json: idea }));
            `
          },
          name: 'Process Reddit',
          type: 'n8n-nodes-base.function',
          position: [450, 300]
        },
        {
          parameters: {
            url: 'http://localhost:8188/prompt',
            method: 'POST',
            sendBody: true,
            bodyParameters: { parameters: [{ name: '={{$json}}' }] }
          },
          name: 'Generate in ComfyUI',
          type: 'n8n-nodes-base.httpRequest',
          position: [650, 300]
        }
      ]
    };
    
    // 2. Weather-based Campaign Events
    const weatherWorkflow = {
      name: 'Weather-Driven Events',
      nodes: [
        {
          parameters: {
            url: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_KEY',
            options: {}
          },
          name: 'Get Weather',
          type: 'n8n-nodes-base.httpRequest',
          position: [250, 400]
        },
        {
          parameters: {
            functionCode: `
// Generate campaign events based on real weather
const weather = items[0].json;
const events = {
  'Clear': 'The skies clear, revealing ancient constellations',
  'Clouds': 'Storm clouds gather, bringing ill omens',
  'Rain': 'Torrential rains flood the lower districts',
  'Snow': 'Unexpected snowfall blankets the realm'
};
const event = events[weather.weather[0].main] || 'Strange weather patterns emerge';
return [{ json: { 
  event, 
  prompt: \`Fantasy landscape with \${weather.weather[0].description}, dramatic lighting\`,
  temperature: weather.main.temp
}}];
            `
          },
          name: 'Generate Event',
          type: 'n8n-nodes-base.function',
          position: [450, 400]
        }
      ]
    };
    
    // 3. Multi-AI Collaboration
    const multiAIWorkflow = {
      name: 'Multi-AI Asset Pipeline',
      nodes: [
        {
          parameters: {
            url: 'https://api.replicate.com/v1/predictions',
            authentication: 'genericCredentialType',
            sendHeaders: true,
            headerParameters: {
              parameters: [{ name: 'Authorization', value: 'Token YOUR_KEY' }]
            },
            sendBody: true,
            bodyParameters: {
              parameters: [
                { name: 'version', value: 'sdxl-latest' },
                { name: 'input', value: '={{ { "prompt": $json.prompt } }}' }
              ]
            }
          },
          name: 'Replicate SDXL',
          type: 'n8n-nodes-base.httpRequest',
          position: [450, 500]
        },
        {
          parameters: {
            url: 'https://api.deepai.org/api/text-generator',
            method: 'POST',
            sendHeaders: true,
            headerParameters: {
              parameters: [{ name: 'api-key', value: 'YOUR_DEEPAI_KEY' }]
            },
            sendBody: true,
            bodyParameters: {
              parameters: [{ name: 'text', value: '={{$json.prompt}}' }]
            }
          },
          name: 'DeepAI Text',
          type: 'n8n-nodes-base.httpRequest',
          position: [650, 500]
        }
      ]
    };
    
    // Save workflows
    const workflowDir = 'scripts/n8n_workflows';
    if (!fs.existsSync(workflowDir)) fs.mkdirSync(workflowDir, { recursive: true });
    
    fs.writeFileSync(
      path.join(workflowDir, 'reddit_inspired.json'),
      JSON.stringify(redditWorkflow, null, 2)
    );
    
    fs.writeFileSync(
      path.join(workflowDir, 'weather_events.json'),
      JSON.stringify(weatherWorkflow, null, 2)
    );
    
    fs.writeFileSync(
      path.join(workflowDir, 'multi_ai_pipeline.json'),
      JSON.stringify(multiAIWorkflow, null, 2)
    );
    
    console.log('  ✓ Generated 4 workflow templates');
  }

  createDashboard() {
    console.log('\n📊 Creating Integration Dashboard...');
    
    const dashboard = `
<!DOCTYPE html>
<html>
<head>
    <title>TTRPG Online Integration Dashboard</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
               background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
               color: white; padding: 20px; }
        .container { max-width: 1200px; margin: 0 auto; }
        .card { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); 
                border-radius: 15px; padding: 20px; margin: 20px 0; }
        .service { display: inline-block; margin: 10px; padding: 15px 25px; 
                   background: rgba(255,255,255,0.2); border-radius: 25px; 
                   text-decoration: none; color: white; transition: all 0.3s; }
        .service:hover { transform: translateY(-2px); background: rgba(255,255,255,0.3); }
        .status { display: inline-block; width: 10px; height: 10px; 
                  border-radius: 50%; margin-right: 5px; }
        .online { background: #4ade80; }
        .offline { background: #f87171; }
        h1 { font-size: 2.5em; margin-bottom: 10px; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
                 gap: 20px; margin: 20px 0; }
        .stat { text-align: center; }
        .stat-value { font-size: 2em; font-weight: bold; }
        .workflow { background: rgba(255,255,255,0.05); padding: 15px; 
                    border-radius: 10px; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎮 TTRPG Online Integration Hub</h1>
        <p>Real-time asset generation with AI and online services</p>
        
        <div class="card">
            <h2>🌐 Connected Services</h2>
            <div>
                <a href="http://localhost:8188" class="service">
                    <span class="status online"></span> ComfyUI
                </a>
                <a href="http://localhost:5678" class="service">
                    <span class="status online"></span> n8n
                </a>
                <a href="https://platform.openai.com" class="service">
                    <span class="status offline"></span> OpenAI
                </a>
                <a href="https://stability.ai" class="service">
                    <span class="status offline"></span> Stability AI
                </a>
                <a href="https://replicate.com" class="service">
                    <span class="status offline"></span> Replicate
                </a>
            </div>
        </div>
        
        <div class="card">
            <h2>📊 Generation Statistics</h2>
            <div class="stats">
                <div class="stat">
                    <div class="stat-value" id="images">0</div>
                    <div>Images Generated</div>
                </div>
                <div class="stat">
                    <div class="stat-value" id="audio">0</div>
                    <div>Audio Tracks</div>
                </div>
                <div class="stat">
                    <div class="stat-value" id="workflows">0</div>
                    <div>Active Workflows</div>
                </div>
                <div class="stat">
                    <div class="stat-value" id="queue">0</div>
                    <div>Queue Size</div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <h2>🤖 Active Workflows</h2>
            <div class="workflow">
                <strong>Reddit-Inspired Generation</strong> - 
                Pulls trending D&D content from Reddit and generates matching assets
            </div>
            <div class="workflow">
                <strong>Weather-Based Events</strong> - 
                Creates campaign events based on real-world weather patterns
            </div>
            <div class="workflow">
                <strong>Multi-AI Pipeline</strong> - 
                Chains GPT-4, DALL-E, Stability AI, and ComfyUI for complex generation
            </div>
            <div class="workflow">
                <strong>Social Media Monitor</strong> - 
                Tracks Twitter, Discord, Reddit for TTRPG trends and inspiration
            </div>
        </div>
        
        <div class="card">
            <h2>🚀 Quick Actions</h2>
            <button onclick="generateBatch()" style="padding: 10px 20px; margin: 5px;">
                Generate Asset Batch
            </button>
            <button onclick="syncCloud()" style="padding: 10px 20px; margin: 5px;">
                Sync to Cloud
            </button>
            <button onclick="checkTrends()" style="padding: 10px 20px; margin: 5px;">
                Check Trends
            </button>
        </div>
    </div>
    
    <script>
        // Update stats every 5 seconds
        setInterval(async () => {
            try {
                const stats = await fetch('http://localhost:5679/stats').then(r => r.json());
                document.getElementById('images').textContent = stats.completed || 0;
                document.getElementById('queue').textContent = stats.queue || 0;
            } catch (e) {}
        }, 5000);
        
        function generateBatch() {
            fetch('http://localhost:5678/webhook/ttrpg-generate', { method: 'POST' })
                .then(() => alert('Batch generation started!'))
                .catch(() => alert('Please ensure n8n is running'));
        }
        
        function syncCloud() {
            alert('Cloud sync would upload assets to Notion/Airtable/Google Drive');
        }
        
        function checkTrends() {
            window.open('https://www.reddit.com/r/DnD/top/?t=day', '_blank');
        }
    </script>
</body>
</html>
    `;
    
    fs.writeFileSync('09_Performance/integration_dashboard.html', dashboard);
    console.log('  ✓ Dashboard created at 09_Performance/integration_dashboard.html');
  }
}

// CLI
if (require.main === module) {
  const setup = new OnlineIntegrationSetup();
  setup.setup();
}

module.exports = OnlineIntegrationSetup;
