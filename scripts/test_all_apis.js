#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load API configuration
const CONFIG_PATH = path.join(process.cwd(), '.obsidian', 'api_config.json');
const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

console.log('🔧 Testing All API Integrations...\n');

// Test results
const results = {
  openai: { status: 'pending', message: '' },
  stability: { status: 'pending', message: '' },
  unsplash: { status: 'pending', message: '' },
  spotify: { status: 'pending', message: '' }
};

// Test OpenAI
async function testOpenAI() {
  console.log('📝 Testing OpenAI...');
  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${config.openai.api_key}`,
        'OpenAI-Organization': config.openai.organization,
        'OpenAI-Project': config.openai.project
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      results.openai.status = 'success';
      results.openai.message = `✅ Connected! Found ${data.data.length} models`;
      console.log(results.openai.message);
    } else {
      const error = await response.json();
      results.openai.status = 'error';
      results.openai.message = `❌ Error: ${error.error?.message || response.statusText}`;
      console.log(results.openai.message);
    }
  } catch (error) {
    results.openai.status = 'error';
    results.openai.message = `❌ Connection failed: ${error.message}`;
    console.log(results.openai.message);
  }
}

// Test Stability AI
async function testStability() {
  console.log('\n🎨 Testing Stability AI...');
  try {
    const response = await fetch('https://api.stability.ai/v1/user/account', {
      headers: {
        'Authorization': `Bearer ${config.stability.api_key}`,
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      const data = await response.json();
      results.stability.status = 'success';
      results.stability.message = `✅ Connected! Credits: ${data.credits || 'Unknown'}`;
      console.log(results.stability.message);
    } else {
      results.stability.status = 'error';
      results.stability.message = `❌ Error: ${response.statusText}`;
      console.log(results.stability.message);
    }
  } catch (error) {
    results.stability.status = 'error';
    results.stability.message = `❌ Connection failed: ${error.message}`;
    console.log(results.stability.message);
  }
}

// Test Unsplash
async function testUnsplash() {
  console.log('\n📸 Testing Unsplash...');
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${config.unsplash.access_key}`);
    
    if (response.ok) {
      const data = await response.json();
      results.unsplash.status = 'success';
      results.unsplash.message = `✅ Connected! Sample photo: ${data.urls?.regular ? 'Available' : 'N/A'}`;
      console.log(results.unsplash.message);
    } else {
      results.unsplash.status = 'error';
      results.unsplash.message = `❌ Error: ${response.statusText}`;
      console.log(results.unsplash.message);
    }
  } catch (error) {
    results.unsplash.status = 'error';
    results.unsplash.message = `❌ Connection failed: ${error.message}`;
    console.log(results.unsplash.message);
  }
}

// Test Spotify (note: requires OAuth flow for full functionality)
async function testSpotify() {
  console.log('\n🎵 Testing Spotify...');
  try {
    // Basic connectivity test - full auth requires OAuth flow
    const response = await fetch('https://api.spotify.com/v1/browse/categories?limit=1', {
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.status === 401) {
      results.spotify.status = 'info';
      results.spotify.message = `⚠️ Auth required (expected). Client ID configured: ${config.spotify.client_id}`;
      console.log(results.spotify.message);
    } else {
      results.spotify.status = 'success';
      results.spotify.message = `✅ API accessible`;
      console.log(results.spotify.message);
    }
  } catch (error) {
    results.spotify.status = 'error';
    results.spotify.message = `❌ Connection failed: ${error.message}`;
    console.log(results.spotify.message);
  }
}

// Main execution
async function main() {
  await testOpenAI();
  await testStability();
  await testUnsplash();
  await testSpotify();
  
  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 API Integration Summary:');
  console.log('='.repeat(50));
  
  let workingAPIs = [];
  let failedAPIs = [];
  
  for (const [api, result] of Object.entries(results)) {
    if (result.status === 'success') {
      workingAPIs.push(api);
    } else if (result.status === 'error') {
      failedAPIs.push(api);
    }
  }
  
  console.log(`\n✅ Working: ${workingAPIs.join(', ') || 'None'}`);
  console.log(`❌ Failed: ${failedAPIs.join(', ') || 'None'}`);
  
  // Save results
  fs.writeFileSync(
    path.join(process.cwd(), '09_Performance', 'api_test_results.json'),
    JSON.stringify(results, null, 2)
  );
  
  console.log('\n💾 Results saved to 09_Performance/api_test_results.json');
  
  return results;
}

// Export for use in other scripts
module.exports = { testOpenAI, testStability, testUnsplash, testSpotify };

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}
