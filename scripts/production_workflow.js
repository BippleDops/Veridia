#!/usr/bin/env node

/**
 * Production Workflow Manager
 * Coordinates image, audio, and video generation for TTRPG assets
 */

const fs = require('fs');
const path = require('path');
const { generateImageViaComfy } = require('./comfy_client');

class ProductionManager {
  constructor() {
    this.stats = {
      images: 0,
      audio: 0,
      videos: 0,
      startTime: Date.now()
    };
  }

  async generateCampaignAssets(campaign = 'aquabyssos', count = 10) {
    console.log(`🎮 Generating ${campaign.toUpperCase()} Campaign Assets`);
    console.log('='.repeat(50));
    
    // Define campaign themes
    const themes = {
      aquabyssos: {
        style: 'underwater, bioluminescent, deep sea, aquatic',
        audio: 'oceanic, bubbling, whale songs, sonar pings',
        motion: 'flowing, drifting, swimming'
      },
      aethermoor: {
        style: 'floating islands, ethereal, sky realm, crystalline',
        audio: 'wind chimes, breeze, ethereal voices',
        motion: 'floating, gliding, wind-swept'
      },
      void: {
        style: 'eldritch, cosmic horror, dimensional rifts',
        audio: 'whispers, distortion, void echoes',
        motion: 'warping, phasing, reality-bending'
      }
    };
    
    const theme = themes[campaign] || themes.aquabyssos;
    
    // 1. Generate Images
    console.log('\n📸 Generating Images...');
    await this.batchGenerateImages(theme, count);
    
    // 2. Generate Audio
    console.log('\n🎵 Generating Audio...');
    await this.generateAmbientAudio(theme, campaign);
    
    // 3. Generate Animations (if AnimateDiff available)
    console.log('\n🎬 Checking Animation Capability...');
    await this.checkAnimationSupport();
    
    // Report
    this.generateReport();
  }

  async batchGenerateImages(theme, count) {
    const types = ['portrait', 'creature', 'location'];
    let generated = 0;
    
    for (const type of types) {
      for (let i = 0; i < Math.ceil(count / types.length); i++) {
        try {
          const prompt = `${type}, ${theme.style}, highly detailed fantasy art, masterpiece quality`;
          console.log(`  Generating ${type} ${i + 1}...`);
          
          const buffer = await generateImageViaComfy({
            prompt,
            width: 512,
            height: type === 'portrait' ? 768 : 512,
            seed: Math.floor(Math.random() * 1e9),
            ckpt: process.env.COMFY_CKPT || 'v1-5-pruned-emaonly-fp16.safetensors'
          });
          
          const dir = `04_Resources/Assets/${type.charAt(0).toUpperCase() + type.slice(1)}s`;
          if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
          
          const filename = `${type}_production_${Date.now()}.png`;
          fs.writeFileSync(path.join(dir, filename), buffer);
          
          generated++;
          this.stats.images++;
        } catch (e) {
          console.error(`    ❌ Failed: ${e.message}`);
        }
      }
    }
    
    console.log(`  ✅ Generated ${generated} images`);
  }

  async generateAmbientAudio(theme, campaign) {
    console.log(`  Creating ${campaign} ambient soundscape...`);
    
    // Simple audio generation using Web Audio API concepts in Node
    const audioScript = `
const fs = require('fs');
const path = require('path');

// Generate simple ambient audio
function generateAmbient(duration = 30, sampleRate = 44100) {
  const samples = new Float32Array(duration * sampleRate);
  
  // Layer 1: Base drone
  for (let i = 0; i < samples.length; i++) {
    const t = i / sampleRate;
    samples[i] = Math.sin(2 * Math.PI * 60 * t) * 0.1; // Deep bass
  }
  
  // Layer 2: Theme-specific modulation
  const modFreq = ${campaign === 'aquabyssos' ? 0.5 : campaign === 'aethermoor' ? 2 : 0.1};
  for (let i = 0; i < samples.length; i++) {
    const t = i / sampleRate;
    samples[i] += Math.sin(2 * Math.PI * modFreq * t) * 0.05;
  }
  
  return samples;
}

// Convert to WAV
function toWav(samples, sampleRate = 44100) {
  const length = samples.length * 2;
  const buffer = new ArrayBuffer(44 + length);
  const view = new DataView(buffer);
  
  // WAV header
  const writeString = (offset, string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };
  
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + length, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, length, true);
  
  // Convert float samples to 16-bit PCM
  let offset = 44;
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s * 0x7FFF, true);
    offset += 2;
  }
  
  return Buffer.from(buffer);
}

// Generate and save
const samples = generateAmbient(30);
const wav = toWav(samples);
const dir = '04_Resources/Assets/Audio/Ambient';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, '${campaign}_ambient_${Date.now()}.wav'), wav);
console.log('    ✅ Audio generated');
`;
    
    // Execute audio generation
    try {
      eval(audioScript);
      this.stats.audio++;
    } catch (e) {
      console.error(`    ❌ Audio generation failed: ${e.message}`);
    }
  }

  async checkAnimationSupport() {
    try {
      const res = await fetch('http://localhost:8188/object_info');
      const data = await res.json();
      const hasAnimateDiff = Object.keys(data).some(k => k.includes('Animate'));
      
      if (hasAnimateDiff) {
        console.log('  ✅ AnimateDiff available for video generation');
        console.log('     Run: node scripts/video_generation.js --image <path>');
      } else {
        console.log('  ⚠️ AnimateDiff not installed');
        console.log('     To install: cd ~/ComfyUI/custom_nodes');
        console.log('     git clone https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved');
      }
    } catch (e) {
      console.log('  ❌ Could not check animation support');
    }
  }

  generateReport() {
    const duration = Math.round((Date.now() - this.stats.startTime) / 1000);
    
    console.log('\n' + '='.repeat(50));
    console.log('📊 PRODUCTION REPORT');
    console.log('='.repeat(50));
    console.log(`Duration: ${duration} seconds`);
    console.log(`Images Generated: ${this.stats.images}`);
    console.log(`Audio Tracks: ${this.stats.audio}`);
    console.log(`Videos: ${this.stats.videos}`);
    
    // Save report
    const report = {
      timestamp: new Date().toISOString(),
      duration,
      stats: this.stats,
      assets: {
        images: fs.readdirSync('04_Resources/Assets/Portraits').length +
                fs.readdirSync('04_Resources/Assets/Creatures').length +
                fs.readdirSync('04_Resources/Assets/Locations').length,
        audio: fs.existsSync('04_Resources/Assets/Audio') ? 
               fs.readdirSync('04_Resources/Assets/Audio').filter(f => f.endsWith('.wav')).length : 0
      }
    };
    
    fs.writeFileSync('09_Performance/production_report.json', JSON.stringify(report, null, 2));
    console.log('\nReport saved to: 09_Performance/production_report.json');
  }

  async runFullProduction() {
    console.log('🚀 FULL PRODUCTION RUN');
    console.log('='.repeat(50));
    
    // Generate assets for each campaign
    for (const campaign of ['aquabyssos', 'aethermoor', 'void']) {
      await this.generateCampaignAssets(campaign, 3);
      console.log('');
    }
    
    console.log('\n✨ Production complete!');
  }
}

// CLI
if (require.main === module) {
  const manager = new ProductionManager();
  const args = process.argv.slice(2);
  
  if (args[0] === '--full') {
    manager.runFullProduction();
  } else {
    const campaign = args[0] || 'aquabyssos';
    const count = parseInt(args[1] || '5', 10);
    manager.generateCampaignAssets(campaign, count);
  }
}

module.exports = ProductionManager;
