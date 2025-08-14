#!/usr/bin/env node

/**
 * Enhanced Asset Generator with OpenAI Integration
 */

const fs = require('fs');
const path = require('path');

// API Configuration
const OPENAI_API_KEY = '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';
const OPENAI_ORG = 'org-2RQvi6xSEdaTmDXO2Brvi99T';
const OPENAI_PROJECT = 'proj_b6VDmkRDhaa7ZlYvOxEtzJvv';

async function generateWithGPT4(prompt) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
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
  if (data.error) {
    throw new Error(data.error.message);
  }
  return data.choices?.[0]?.message?.content || 'No response generated';
}

async function generateWithDALLE(prompt) {
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
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
    const lore = await generateWithGPT4(`Create a mysterious location in ${campaign}`);
    console.log('\n📜 Generated Lore:\n', lore);
    
    // Generate image with DALL-E 3
    const imagePrompt = `Fantasy landscape: ${lore.slice(0, 200)}, digital art, highly detailed`;
    const imageUrl = await generateWithDALLE(imagePrompt);
    console.log('\n🎨 Generated Image:', imageUrl);
    
    // Save results
    const output = {
      timestamp: new Date().toISOString(),
      campaign,
      lore,
      image: imageUrl
    };
    
    fs.writeFileSync('09_Performance/openai_generation.json', JSON.stringify(output, null, 2));
    console.log('\n✅ Results saved to 09_Performance/openai_generation.json');
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// CLI
if (require.main === module) {
  const campaign = process.argv[2] || 'aquabyssos';
  generateAssets(campaign);
}
