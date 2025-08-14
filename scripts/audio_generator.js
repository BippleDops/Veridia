#!/usr/bin/env node

/**
 * AUDIO GENERATOR FOR COMFYUI
 * ===========================
 * Generates ambient sounds, music, and effects using ComfyUI AudioX
 */

const fs = require('fs');
const path = require('path');
const fetch = require('node:fetch');

const COMFY_URL = 'http://localhost:8188';

class AudioGenerator {
  constructor() {
    this.audioPresets = {
      // Ambient soundscapes
      underwater: {
        description: "deep underwater ambience, bubbles, whale songs, pressure sounds",
        duration: 60,
        style: "ambient, mysterious, deep"
      },
      airship: {
        description: "wind rushing, propeller hum, creaking wood, steam hissing",
        duration: 60,
        style: "adventurous, mechanical, atmospheric"
      },
      dungeon: {
        description: "dripping water, echoing footsteps, distant chains, stone grinding",
        duration: 60,
        style: "dark, ominous, reverberant"
      },
      forest: {
        description: "birds chirping, leaves rustling, wind through trees, insects",
        duration: 60,
        style: "natural, peaceful, organic"
      },
      combat: {
        description: "sword clashing, battle cries, spell explosions, dramatic percussion",
        duration: 30,
        style: "intense, dramatic, action"
      },
      tavern: {
        description: "crowd chatter, clinking glasses, fireplace crackling, lute music",
        duration: 60,
        style: "warm, lively, social"
      },
      temple: {
        description: "chanting, bells, incense burning, ethereal choir",
        duration: 60,
        style: "sacred, mystical, reverberant"
      },
      market: {
        description: "merchant calls, coin jingling, crowd bustle, cart wheels",
        duration: 60,
        style: "busy, vibrant, chaotic"
      }
    };

    this.musicStyles = {
      epic: "orchestral epic fantasy, heroic themes, brass and strings",
      mysterious: "dark ambient, tension building, minor keys, suspenseful",
      peaceful: "calm fantasy, harp and flute, major keys, soothing",
      battle: "intense combat music, drums and percussion, fast tempo",
      emotional: "emotional strings, piano, melancholic, touching",
      celebration: "festive medieval, lutes and drums, upbeat, joyful"
    };
  }

  /**
   * Generate ambient audio for a scene
   */
  async generateAmbientAudio(context, outputPath) {
    const { type, title, description, tags } = context;
    
    console.log(`🔊 Generating ambient audio for: ${title}`);
    
    // Determine audio preset based on context
    const preset = this.selectAudioPreset(context);
    console.log(`   Using preset: ${preset.name}`);
    
    const workflow = {
      '1': {
        'inputs': {
          'text': preset.description,
          'duration': preset.duration,
          'style': preset.style
        },
        'class_type': 'TextToAudio'
      },
      '2': {
        'inputs': {
          'audio': ['1', 0],
          'reverb': this.getReverbLevel(context),
          'eq_preset': this.getEQPreset(context)
        },
        'class_type': 'AudioEffects'
      },
      '3': {
        'inputs': {
          'audio': ['2', 0],
          'filename_prefix': 'ambient',
          'format': 'mp3',
          'bitrate': 192
        },
        'class_type': 'SaveAudio'
      }
    };
    
    try {
      const response = await fetch(`${COMFY_URL}/prompt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: workflow })
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`   ✅ Audio generation queued: ${result.prompt_id}`);
        return await this.waitForAudio(result.prompt_id, outputPath);
      }
    } catch (error) {
      console.error(`   ❌ Audio generation failed: ${error.message}`);
    }
    
    return null;
  }

  /**
   * Generate background music
   */
  async generateBackgroundMusic(context, style, outputPath) {
    console.log(`🎵 Generating background music: ${style}`);
    
    const musicPrompt = this.musicStyles[style] || this.musicStyles.peaceful;
    
    const workflow = {
      '1': {
        'inputs': {
          'text': musicPrompt,
          'duration': 120, // 2 minutes
          'tempo': this.getTempo(style),
          'key': this.getKey(context)
        },
        'class_type': 'TextToMusic'
      },
      '2': {
        'inputs': {
          'music': ['1', 0],
          'mix_preset': style,
          'mastering': true
        },
        'class_type': 'AudioMastering'
      },
      '3': {
        'inputs': {
          'audio': ['2', 0],
          'filename_prefix': 'music',
          'format': 'mp3'
        },
        'class_type': 'SaveAudio'
      }
    };
    
    try {
      const response = await fetch(`${COMFY_URL}/prompt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: workflow })
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`   ✅ Music generation queued: ${result.prompt_id}`);
        return await this.waitForAudio(result.prompt_id, outputPath);
      }
    } catch (error) {
      console.error(`   ❌ Music generation failed: ${error.message}`);
    }
    
    return null;
  }

  /**
   * Generate sound effects
   */
  async generateSoundEffect(effectType, outputPath) {
    console.log(`💥 Generating sound effect: ${effectType}`);
    
    const effectDescriptions = {
      spell_cast: "magical energy charging, ethereal whoosh, sparkles",
      sword_hit: "metal clashing, impact thud, ringing echo",
      door_open: "heavy wooden door creaking, stone grinding",
      footsteps: "boots on stone, echoing steps, rhythmic walking",
      explosion: "massive blast, debris falling, rumbling aftermath",
      item_pickup: "crystalline chime, magical confirmation sound",
      level_up: "triumphant fanfare, ascending notes, achievement",
      death: "dramatic orchestral sting, dark chord, finality"
    };
    
    const description = effectDescriptions[effectType] || effectType;
    
    const workflow = {
      '1': {
        'inputs': {
          'text': description,
          'duration': 3, // Short effect
          'style': 'effect'
        },
        'class_type': 'TextToSoundEffect'
      },
      '2': {
        'inputs': {
          'audio': ['1', 0],
          'filename_prefix': 'sfx',
          'format': 'wav'
        },
        'class_type': 'SaveAudio'
      }
    };
    
    try {
      const response = await fetch(`${COMFY_URL}/prompt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: workflow })
      });
      
      if (response.ok) {
        const result = await response.json();
        return await this.waitForAudio(result.prompt_id, outputPath);
      }
    } catch (error) {
      console.error(`   ❌ Effect generation failed: ${error.message}`);
    }
    
    return null;
  }

  /**
   * Select audio preset based on context
   */
  selectAudioPreset(context) {
    const { type, description, tags, filePath } = context;
    
    // Check for specific environments
    if (description.includes('underwater') || tags.includes('aquatic')) {
      return { name: 'underwater', ...this.audioPresets.underwater };
    }
    if (description.includes('airship') || description.includes('flying')) {
      return { name: 'airship', ...this.audioPresets.airship };
    }
    if (description.includes('dungeon') || description.includes('prison')) {
      return { name: 'dungeon', ...this.audioPresets.dungeon };
    }
    if (description.includes('forest') || description.includes('woods')) {
      return { name: 'forest', ...this.audioPresets.forest };
    }
    if (description.includes('combat') || description.includes('battle')) {
      return { name: 'combat', ...this.audioPresets.combat };
    }
    if (description.includes('tavern') || description.includes('inn')) {
      return { name: 'tavern', ...this.audioPresets.tavern };
    }
    if (description.includes('temple') || description.includes('shrine')) {
      return { name: 'temple', ...this.audioPresets.temple };
    }
    if (description.includes('market') || description.includes('bazaar')) {
      return { name: 'market', ...this.audioPresets.market };
    }
    
    // Default based on type
    const typeDefaults = {
      location: 'forest',
      character: 'tavern',
      combat: 'combat',
      scene: 'mysterious'
    };
    
    const defaultPreset = typeDefaults[type] || 'forest';
    return { name: defaultPreset, ...this.audioPresets[defaultPreset] };
  }

  /**
   * Get reverb level based on environment
   */
  getReverbLevel(context) {
    const { description } = context;
    
    if (description.includes('cave') || description.includes('cavern')) return 0.8;
    if (description.includes('temple') || description.includes('cathedral')) return 0.7;
    if (description.includes('underwater')) return 0.9;
    if (description.includes('forest')) return 0.3;
    if (description.includes('indoor')) return 0.4;
    
    return 0.5; // Default medium reverb
  }

  /**
   * Get EQ preset based on environment
   */
  getEQPreset(context) {
    const { description } = context;
    
    if (description.includes('underwater')) return 'underwater_muffled';
    if (description.includes('cave')) return 'cave_echo';
    if (description.includes('outdoor')) return 'outdoor_open';
    if (description.includes('metal') || description.includes('mechanical')) return 'metallic';
    
    return 'neutral';
  }

  /**
   * Get tempo based on style
   */
  getTempo(style) {
    const tempos = {
      epic: 120,
      mysterious: 80,
      peaceful: 60,
      battle: 140,
      emotional: 70,
      celebration: 130
    };
    
    return tempos[style] || 100;
  }

  /**
   * Get musical key based on context
   */
  getKey(context) {
    const { description, tags } = context;
    
    // Minor keys for dark/mysterious
    if (description.includes('dark') || description.includes('evil')) return 'D minor';
    if (description.includes('mysterious')) return 'A minor';
    if (description.includes('sad') || description.includes('tragic')) return 'E minor';
    
    // Major keys for bright/heroic
    if (description.includes('heroic') || description.includes('triumph')) return 'C major';
    if (description.includes('peaceful') || description.includes('serene')) return 'G major';
    if (description.includes('celebration')) return 'D major';
    
    return 'C major'; // Default
  }

  /**
   * Wait for audio generation to complete
   */
  async waitForAudio(promptId, outputPath) {
    const maxWait = 60000; // 1 minute
    const checkInterval = 2000; // 2 seconds
    const startTime = Date.now();
    
    while (Date.now() - startTime < maxWait) {
      try {
        const response = await fetch(`${COMFY_URL}/history/${promptId}`);
        if (response.ok) {
          const history = await response.json();
          
          if (history[promptId] && history[promptId].outputs) {
            const outputs = history[promptId].outputs;
            for (const nodeId in outputs) {
              if (outputs[nodeId].audio && outputs[nodeId].audio.length > 0) {
                const audioInfo = outputs[nodeId].audio[0];
                const audioUrl = `${COMFY_URL}/view?filename=${audioInfo.filename}&type=output`;
                
                // Download audio
                const audioResponse = await fetch(audioUrl);
                const audioBuffer = await audioResponse.arrayBuffer();
                fs.writeFileSync(outputPath, Buffer.from(audioBuffer));
                
                console.log(`   ✅ Audio saved: ${outputPath}`);
                return outputPath;
              }
            }
          }
        }
      } catch (error) {
        // Continue waiting
      }
      
      await new Promise(resolve => setTimeout(resolve, checkInterval));
    }
    
    throw new Error('Audio generation timeout');
  }
}

// Export for use in other scripts
module.exports = AudioGenerator;

// CLI usage
if (require.main === module) {
  const generator = new AudioGenerator();
  
  // Test context
  const testContext = {
    title: "Underwater Temple",
    description: "An ancient temple submerged beneath the waves",
    tags: ["location", "underwater", "temple"],
    type: "location"
  };
  
  console.log('🎧 Audio Generator Test');
  console.log('=======================');
  
  // Test ambient audio
  generator.generateAmbientAudio(testContext, 'test_ambient.mp3')
    .then(result => {
      if (result) {
        console.log('✨ Ambient audio generated!');
      }
      
      // Test background music
      return generator.generateBackgroundMusic(testContext, 'mysterious', 'test_music.mp3');
    })
    .then(result => {
      if (result) {
        console.log('✨ Background music generated!');
      }
      
      // Test sound effect
      return generator.generateSoundEffect('spell_cast', 'test_effect.wav');
    })
    .then(result => {
      if (result) {
        console.log('✨ Sound effect generated!');
      }
    })
    .catch(console.error);
}
