#!/usr/bin/env node

/**
 * VAULT INTEGRATION SCRIPT
 * ========================
 * Connects the global AI tools to your Obsidian vault
 */

const { ToolLibrary } = require('./tool_library.js');
const fs = require('fs');
const path = require('path');

// Vault-specific configuration
const VAULT_CONFIG = {
  outputDir: path.join(process.cwd(), '04_Resources/Assets'),
  apiKeys: require('../.obsidian/api_config.json'),
  toolsDir: path.join(process.env.HOME, 'AITools')
};

// Initialize tool library with vault config
const tools = new ToolLibrary(VAULT_CONFIG);

// === VAULT-SPECIFIC FUNCTIONS ===

/**
 * Generate assets for a character
 */
async function generateCharacterAssets(name, description) {
  console.log(`🎨 Generating assets for ${name}...`);
  
  const assets = {
    portrait: null,
    theme: null,
    backstory: null
  };
  
  // Generate portrait
  try {
    const portraitPath = path.join(VAULT_CONFIG.outputDir, 'Portraits', `${name.replace(/\s+/g, '_')}.png`);
    const portrait = await tools.generateImage(
      `${description}, fantasy RPG character portrait, detailed face, professional art`,
      { outputPath: portraitPath }
    );
    assets.portrait = portraitPath;
    console.log(`✅ Portrait generated: ${portraitPath}`);
  } catch (error) {
    console.error(`❌ Portrait generation failed: ${error.message}`);
  }
  
  // Generate theme music
  try {
    const audioPath = path.join(VAULT_CONFIG.outputDir, 'Audio', `${name.replace(/\s+/g, '_')}_theme.wav`);
    const theme = await tools.generateAudio(
      `fantasy character theme music, ${description}`,
      { duration: 30, outputPath: audioPath }
    );
    assets.theme = audioPath;
    console.log(`✅ Theme music generated: ${audioPath}`);
  } catch (error) {
    console.error(`❌ Audio generation failed: ${error.message}`);
  }
  
  // Generate backstory
  try {
    const backstory = await tools.generateText(
      `Write a detailed backstory for a fantasy RPG character: ${name}, ${description}. Include personality, motivations, and plot hooks.`
    );
    assets.backstory = backstory;
    
    // Save backstory to character file
    const characterFile = path.join(process.cwd(), '02_Worldbuilding/People', `${name}.md`);
    if (fs.existsSync(characterFile)) {
      let content = fs.readFileSync(characterFile, 'utf8');
      content += `\n\n## Generated Backstory\n\n${backstory}\n`;
      fs.writeFileSync(characterFile, content);
      console.log(`✅ Backstory added to ${characterFile}`);
    }
  } catch (error) {
    console.error(`❌ Text generation failed: ${error.message}`);
  }
  
  return assets;
}

/**
 * Generate a complete location
 */
async function generateLocation(name, type) {
  console.log(`🏛️ Generating location: ${name}...`);
  
  const assets = {};
  
  // Generate location image
  const imagePath = path.join(VAULT_CONFIG.outputDir, 'Locations', `${name.replace(/\s+/g, '_')}.png`);
  assets.image = await tools.generateImage(
    `${type} called ${name}, fantasy RPG location, establishing shot, atmospheric`,
    { outputPath: imagePath }
  );
  
  // Generate battle map
  const mapPath = path.join(VAULT_CONFIG.outputDir, 'Maps', `${name.replace(/\s+/g, '_')}_map.png`);
  assets.map = await tools.generateImage(
    `battle map of ${type}, top-down view, grid, D&D style`,
    { outputPath: mapPath }
  );
  
  // Generate ambience
  const audioPath = path.join(VAULT_CONFIG.outputDir, 'Audio', `${name.replace(/\s+/g, '_')}_ambience.wav`);
  assets.ambience = await tools.generateAudio(
    `${type} ambience, atmospheric sounds`,
    { duration: 60, outputPath: audioPath }
  );
  
  // Generate description
  assets.description = await tools.generateText(
    `Describe a ${type} called ${name} for a fantasy RPG. Include sensory details, inhabitants, and secrets.`
  );
  
  return assets;
}

/**
 * Generate a cinematic scene video
 */
async function generateSceneVideo(description) {
  console.log(`🎬 Generating scene video: ${description}...`);
  
  const videoPath = path.join(VAULT_CONFIG.outputDir, 'Videos', `scene_${Date.now()}.mp4`);
  
  try {
    await tools.generateVideo(
      description,
      {
        method: 'animatediff',
        frames: 24,
        fps: 8,
        outputPath: videoPath
      }
    );
    console.log(`✅ Video generated: ${videoPath}`);
    return videoPath;
  } catch (error) {
    console.error(`❌ Video generation failed: ${error.message}`);
    return null;
  }
}

/**
 * Batch generate campaign assets
 */
async function generateCampaignAssets(campaign) {
  console.log(`🎯 Generating assets for campaign: ${campaign.name}`);
  
  const results = {
    characters: [],
    locations: [],
    items: [],
    audio: []
  };
  
  // Generate character assets
  if (campaign.characters) {
    for (const char of campaign.characters) {
      const assets = await generateCharacterAssets(char.name, char.description);
      results.characters.push({ ...char, assets });
    }
  }
  
  // Generate location assets
  if (campaign.locations) {
    for (const loc of campaign.locations) {
      const assets = await generateLocation(loc.name, loc.type);
      results.locations.push({ ...loc, assets });
    }
  }
  
  // Generate item images
  if (campaign.items) {
    for (const item of campaign.items) {
      const imagePath = path.join(VAULT_CONFIG.outputDir, 'Items', `${item.name.replace(/\s+/g, '_')}.png`);
      const image = await tools.generateImage(
        `${item.description}, magical item, fantasy RPG, detailed`,
        { outputPath: imagePath }
      );
      results.items.push({ ...item, image });
    }
  }
  
  // Generate campaign music
  const musicTracks = [
    { name: 'main_theme', prompt: 'epic fantasy main theme, orchestral' },
    { name: 'battle_music', prompt: 'intense combat music, fast-paced' },
    { name: 'exploration', prompt: 'mysterious exploration music, ambient' },
    { name: 'tavern', prompt: 'lively tavern music, medieval instruments' }
  ];
  
  for (const track of musicTracks) {
    const audioPath = path.join(VAULT_CONFIG.outputDir, 'Audio', `${campaign.name}_${track.name}.wav`);
    const audio = await tools.generateAudio(track.prompt, { duration: 120, outputPath: audioPath });
    results.audio.push({ name: track.name, path: audioPath });
  }
  
  return results;
}

// === SERVICE MANAGEMENT ===

async function startVaultServices() {
  console.log('🚀 Starting services for vault...');
  
  // Start essential services
  await tools.startService('comfyui');
  await tools.startService('n8n');
  await tools.startService('ollama');
  
  // Check status
  const status = await tools.checkAllServices();
  console.log('Service status:', status);
  
  return status;
}

// === CLI INTERFACE ===

if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  async function main() {
    switch (command) {
      case 'start':
        await startVaultServices();
        break;
        
      case 'character':
        const name = args[1];
        const description = args.slice(2).join(' ');
        await generateCharacterAssets(name, description);
        break;
        
      case 'location':
        const locName = args[1];
        const locType = args.slice(2).join(' ');
        await generateLocation(locName, locType);
        break;
        
      case 'video':
        const videoDesc = args.slice(1).join(' ');
        await generateSceneVideo(videoDesc);
        break;
        
      case 'campaign':
        // Load campaign from JSON file
        const campaignFile = args[1];
        if (fs.existsSync(campaignFile)) {
          const campaign = JSON.parse(fs.readFileSync(campaignFile, 'utf8'));
          const results = await generateCampaignAssets(campaign);
          
          // Save results
          const resultsFile = campaignFile.replace('.json', '_assets.json');
          fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
          console.log(`✅ Results saved to ${resultsFile}`);
        } else {
          console.error(`Campaign file not found: ${campaignFile}`);
        }
        break;
        
      default:
        console.log('Vault Integration Commands:');
        console.log('');
        console.log('  node vault_integration.js start');
        console.log('    Start all services');
        console.log('');
        console.log('  node vault_integration.js character "Name" "description"');
        console.log('    Generate character assets');
        console.log('');
        console.log('  node vault_integration.js location "Name" "type"');
        console.log('    Generate location assets');
        console.log('');
        console.log('  node vault_integration.js video "scene description"');
        console.log('    Generate scene video');
        console.log('');
        console.log('  node vault_integration.js campaign campaign.json');
        console.log('    Generate all campaign assets from JSON');
    }
  }
  
  main().catch(console.error);
}

// Export for use in other vault scripts
module.exports = {
  tools,
  generateCharacterAssets,
  generateLocation,
  generateSceneVideo,
  generateCampaignAssets,
  startVaultServices
};
