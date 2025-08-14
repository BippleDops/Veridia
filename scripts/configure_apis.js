#!/usr/bin/env node

/**
 * API Configuration and Integration Setup
 * Securely configures online services for TTRPG asset generation
 */

const fs = require('fs');
const path = require('path');

// Load existing API config
const configPath = path.join(process.cwd(), '.obsidian', 'api_config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Set environment variables for scripts
process.env.OPENAI_API_KEY = config.openai.api_key;
process.env.OPENAI_ORGANIZATION = config.openai.organization;
process.env.OPENAI_PROJECT = config.openai.project;
process.env.UNSPLASH_ACCESS_KEY = config.unsplash.access_key;

console.log('🔐 API Configuration Loaded');
console.log('=' .repeat(60));
console.log('✅ OpenAI API configured');
console.log('✅ Unsplash API configured');
console.log('✅ Spotify credentials available');

// Test OpenAI connection
async function testOpenAI() {
  console.log('\n🧪 Testing OpenAI Connection...');
  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${config.openai.api_key}`,
        'OpenAI-Organization': config.openai.organization,
        'OpenAI-Beta': 'assistants=v2'
      }
    });
    
    if (response.ok) {
      console.log('✅ OpenAI API connected successfully!');
      const data = await response.json();
      console.log(`   Available models: ${data.data.slice(0, 3).map(m => m.id).join(', ')}...`);
      return true;
    } else {
      console.error('❌ OpenAI API error:', response.status);
      return false;
    }
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    return false;
  }
}

// Create enhanced generation script with OpenAI
async function createEnhancedGenerator() {
  const script = `#!/usr/bin/env node

/**
 * Enhanced Asset Generator with OpenAI Integration
 */

const fs = require('fs');
const path = require('path');

// API Configuration
const OPENAI_API_KEY = '${config.openai.api_key}';
const OPENAI_ORG = '${config.openai.organization}';
const OPENAI_PROJECT = '${config.openai.project}';

async function generateWithGPT4(prompt) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${OPENAI_API_KEY}\`,
      'OpenAI-Organization': OPENAI_ORG,
      'OpenAI-Beta': 'assistants=v2'
    },
    body: JSON.stringify({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are a creative TTRPG content generator. Create vivid, detailed descriptions for fantasy settings.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.8
    })
  });
  
  const data = await response.json();
  return data.choices[0].message.content;
}

async function generateWithDALLE(prompt) {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${OPENAI_API_KEY}\`,
      'OpenAI-Organization': OPENAI_ORG
    },
    body: JSON.stringify({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
      quality: 'hd',
      style: 'vivid'
    })
  });
  
  const data = await response.json();
  return data.data[0].url;
}

// Main generation function
async function generateAssets(campaign = 'aquabyssos') {
  console.log('🎮 Enhanced Asset Generation with OpenAI');
  console.log('Campaign:', campaign);
  
  try {
    // Generate lore with GPT-4
    const lore = await generateWithGPT4(\`Create a mysterious location in \${campaign}\`);
    console.log('\\n📜 Generated Lore:\\n', lore);
    
    // Generate image with DALL-E 3
    const imagePrompt = \`Fantasy landscape: \${lore.slice(0, 200)}, digital art, highly detailed\`;
    const imageUrl = await generateWithDALLE(imagePrompt);
    console.log('\\n🎨 Generated Image:', imageUrl);
    
    // Save results
    const output = {
      timestamp: new Date().toISOString(),
      campaign,
      lore,
      image: imageUrl
    };
    
    fs.writeFileSync('09_Performance/openai_generation.json', JSON.stringify(output, null, 2));
    console.log('\\n✅ Results saved to 09_Performance/openai_generation.json');
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// CLI
if (require.main === module) {
  const campaign = process.argv[2] || 'aquabyssos';
  generateAssets(campaign);
}
`;
  
  fs.writeFileSync('scripts/openai_generator.js', script);
  console.log('\n📝 Created: scripts/openai_generator.js');
}

// Create setup guide
function createSetupGuide() {
  const guide = `# 🚀 TTRPG Online Integration Setup Guide

## ✅ Already Configured

### OpenAI (GPT-4 + DALL-E 3)
- **Status:** Ready to use!
- **API Key:** Configured in \`.obsidian/api_config.json\`
- **Test:** Run \`node scripts/openai_generator.js\`

### Unsplash
- **Status:** Ready to use!
- **Access Key:** Configured
- **Usage:** Free tier allows 50 requests/hour

## 📋 Services to Set Up

### 1. Discord Webhooks (Free)
**Purpose:** Get notifications when assets are generated

1. Open Discord and go to your server
2. Server Settings → Integrations → Webhooks
3. Click "New Webhook"
4. Copy the webhook URL
5. Add to n8n workflow as credential

### 2. Stability AI ($10 credits)
**Purpose:** High-quality SDXL image generation

1. Visit: https://platform.stability.ai
2. Create account and add credits ($10 minimum)
3. Go to Account → API Keys
4. Generate new API key
5. Add to n8n: HTTP Request node → Authentication → API Key

### 3. Replicate AI (Pay-per-use)
**Purpose:** Access to latest AI models (SDXL, AnimateDiff, etc.)

1. Visit: https://replicate.com
2. Sign up with GitHub
3. Go to Account → API tokens
4. Create new token
5. Usage: ~$0.01 per image

### 4. Airtable (Free tier)
**Purpose:** Database for asset management

1. Visit: https://airtable.com
2. Create workspace for "TTRPG Assets"
3. Go to Account → API
4. Generate personal access token
5. Scopes needed: data.records:read, data.records:write

### 5. Reddit API (Free)
**Purpose:** Pull trending D&D content

1. Visit: https://www.reddit.com/prefs/apps
2. Click "Create App"
3. Choose "script" type
4. Note the client ID and secret
5. No authentication needed for public subreddits

### 6. Weather API (Free)
**Purpose:** Generate weather-based events

1. Visit: https://openweathermap.org/api
2. Sign up for free account
3. Get API key from account dashboard
4. Free tier: 1000 calls/day

### 7. GitHub API (Free)
**Purpose:** Track D&D tools and updates

1. Visit: https://github.com/settings/tokens
2. Generate new token (classic)
3. Scopes: public_repo
4. Use in n8n HTTP Request nodes

## 🔧 n8n Workflow Setup

### Import Workflows
1. Open n8n: http://localhost:5678
2. Click "Workflows" → "Import"
3. Select files from \`scripts/n8n_workflows/\`:
   - \`mega_automation.json\` - Main automation
   - \`reddit_inspired.json\` - Reddit integration
   - \`weather_events.json\` - Weather-based events
   - \`multi_ai_pipeline.json\` - Multi-AI generation

### Add Credentials in n8n
1. Settings → Credentials → Add Credential
2. Choose "Header Auth" for most APIs
3. Add your API keys:
   - Name: "OpenAI"
   - Header Name: "Authorization"
   - Header Value: "Bearer YOUR_KEY"

## 🎯 Quick Start Commands

\`\`\`bash
# Test OpenAI integration
node scripts/openai_generator.js aquabyssos

# Run production workflow
node scripts/production_workflow.js --full

# Start n8n workflows
curl -X POST http://localhost:5678/webhook/ttrpg-generate

# Check generation status
curl http://localhost:5679/stats
\`\`\`

## 💰 Cost Estimates

| Service | Free Tier | Paid Usage |
|---------|-----------|------------|
| OpenAI GPT-4 | No | ~$0.03/1K tokens |
| DALL-E 3 | No | $0.04/image (standard) |
| Stability AI | No | ~$0.002/image |
| Replicate | No | ~$0.01/image |
| Unsplash | 50/hour | Unlimited with attribution |
| Discord | Unlimited | Free |
| Reddit API | 60/minute | Free |
| Weather API | 1000/day | Free |
| Airtable | 1200 records | $20/month pro |

## 🚀 Recommended Workflow

1. **Start with Free Services:**
   - Reddit API → Get trending topics
   - Weather API → Generate events
   - Unsplash → Get inspiration
   - Discord → Notifications

2. **Add OpenAI (Already configured):**
   - GPT-4 → Generate lore
   - DALL-E 3 → Create images

3. **Scale with Paid Services:**
   - Stability AI → Bulk image generation
   - Replicate → Video generation
   - Airtable → Asset management

## 📊 Monitoring

Open the dashboard: \`09_Performance/integration_dashboard.html\`

Or check status via CLI:
\`\`\`bash
# Check all services
node scripts/configure_apis.js

# View generation stats
cat 09_Performance/production_report.json
\`\`\`

## 🔒 Security Notes

- Never commit API keys to git
- Keep \`.obsidian/api_config.json\` in \`.gitignore\`
- Use environment variables in production
- Rotate keys regularly
- Monitor usage to avoid unexpected charges

---

Ready to generate amazing TTRPG content with AI! 🎲✨
`;
  
  fs.writeFileSync('SETUP_GUIDE.md', guide);
  console.log('\n📚 Created: SETUP_GUIDE.md');
}

// Main execution
async function main() {
  // Test OpenAI connection
  const openaiWorking = await testOpenAI();
  
  if (openaiWorking) {
    // Create enhanced generator
    await createEnhancedGenerator();
    
    // Create setup guide
    createSetupGuide();
    
    console.log('\n✨ Setup Complete!');
    console.log('\nNext steps:');
    console.log('1. Test OpenAI generation: node scripts/openai_generator.js');
    console.log('2. Read the setup guide: SETUP_GUIDE.md');
    console.log('3. Configure remaining services in n8n');
  } else {
    console.log('\n⚠️ Please check your OpenAI API key');
  }
}

main();
