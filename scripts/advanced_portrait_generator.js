#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Portrait style configurations
const PORTRAIT_STYLES = {
  realistic: {
    description: 'Photorealistic portraits with natural lighting',
    techniques: ['oil painting', 'digital painting', 'photography'],
    lighting: ['rembrandt', 'butterfly', 'split', 'rim'],
    mood: ['serious', 'contemplative', 'confident', 'mysterious']
  },
  
  fantasy_art: {
    description: 'Classic fantasy illustration style',
    techniques: ['watercolor', 'acrylic', 'digital fantasy art'],
    lighting: ['dramatic', 'magical glow', 'ethereal', 'candlelight'],
    mood: ['heroic', 'mystical', 'adventurous', 'wise']
  },
  
  anime: {
    description: 'Anime/manga character art style',
    techniques: ['cell shaded', 'soft shading', 'lineart with color'],
    features: ['large expressive eyes', 'stylized hair', 'emotional expressions'],
    mood: ['cheerful', 'determined', 'mysterious', 'cool']
  },
  
  portrait_miniature: {
    description: 'Medieval illuminated manuscript style',
    techniques: ['gold leaf details', 'flat perspective', 'decorative borders'],
    elements: ['heraldry', 'religious symbols', 'ornate frames'],
    mood: ['noble', 'divine', 'scholarly', 'regal']
  },
  
  noir: {
    description: 'Dark, atmospheric noir style',
    techniques: ['high contrast', 'shadow play', 'monochromatic'],
    lighting: ['venetian blinds', 'street lamp', 'cigarette glow'],
    mood: ['brooding', 'dangerous', 'melancholic', 'cynical']
  }
};

// Character archetypes for portraits
const CHARACTER_ARCHETYPES = {
  // Player Character Classes
  fighter: {
    features: ['battle scars', 'weathered face', 'strong jaw', 'determined eyes'],
    accessories: ['armor pieces', 'weapon pommel visible', 'military insignia'],
    backgrounds: ['training ground', 'battlefield', 'armory']
  },
  
  wizard: {
    features: ['intelligent eyes', 'aged wisdom', 'mystical aura', 'arcane tattoos'],
    accessories: ['spell components', 'magical staff', 'tome', 'crystal orb'],
    backgrounds: ['library', 'arcane laboratory', 'star chart']
  },
  
  rogue: {
    features: ['sharp features', 'knowing smirk', 'alert eyes', 'shadowed face'],
    accessories: ['hood', 'lockpicks', 'daggers', 'mask partially visible'],
    backgrounds: ['dark alley', 'thieves guild', 'shadowy corner']
  },
  
  cleric: {
    features: ['kind eyes', 'serene expression', 'divine glow', 'wisdom lines'],
    accessories: ['holy symbol', 'prayer beads', 'ceremonial robes', 'healing herbs'],
    backgrounds: ['temple', 'shrine', 'divine light']
  },
  
  // NPC Roles
  merchant: {
    features: ['calculating eyes', 'well-groomed', 'friendly smile', 'shrewd expression'],
    accessories: ['fine clothes', 'coin purse', 'ledger', 'scales'],
    backgrounds: ['market stall', 'shop interior', 'trade caravan']
  },
  
  noble: {
    features: ['refined features', 'proud bearing', 'elegant', 'commanding presence'],
    accessories: ['jewelry', 'fine fabrics', 'house sigil', 'crown or circlet'],
    backgrounds: ['throne room', 'manor', 'garden']
  },
  
  commoner: {
    features: ['weathered', 'honest face', 'tired eyes', 'genuine smile'],
    accessories: ['work tools', 'simple clothes', 'worn hat', 'produce basket'],
    backgrounds: ['farm', 'workshop', 'tavern', 'street']
  },
  
  villain: {
    features: ['cruel smile', 'cold eyes', 'sinister expression', 'imposing presence'],
    accessories: ['dark regalia', 'evil artifact', 'scars', 'ominous jewelry'],
    backgrounds: ['dark throne', 'lair', 'storm clouds']
  }
};

// Age and demographic variations
const DEMOGRAPHICS = {
  age: ['child', 'young_adult', 'adult', 'middle_aged', 'elderly', 'ancient'],
  gender: ['masculine', 'feminine', 'androgynous'],
  build: ['slight', 'average', 'athletic', 'stocky', 'imposing'],
  
  // Fantasy races with unique features
  races: {
    human: { features: ['varied skin tones', 'diverse features'] },
    elf: { features: ['pointed ears', 'ethereal beauty', 'ageless', 'graceful'] },
    dwarf: { features: ['broad features', 'magnificent beard', 'stocky build'] },
    halfling: { features: ['cherubic face', 'curly hair', 'friendly demeanor'] },
    orc: { features: ['tusks', 'strong jaw', 'green skin', 'battle scars'] },
    tiefling: { features: ['horns', 'unusual skin tone', 'tail hint', 'glowing eyes'] },
    dragonborn: { features: ['scales', 'draconic features', 'noble bearing'] },
    gnome: { features: ['large eyes', 'pointed features', 'wild hair'] }
  }
};

class AdvancedPortraitGenerator {
  constructor() {
    this.vaultRoot = process.cwd();
    this.portraitRoot = path.join(this.vaultRoot, '04_Resources/Assets/Portraits');
    this.stats = {
      generated: {},
      total: 0
    };
  }
  
  async initialize() {
    console.log('🎨 Initializing Advanced Portrait Generator...\n');
    
    // Create portrait directories
    const dirs = [
      'NPCs/Major',
      'NPCs/Minor',
      'NPCs/Faction_Leaders',
      'PCs/Active',
      'PCs/Retired',
      'PCs/Pregens',
      'Monsters/Unique',
      'Monsters/Leaders',
      'Deities/Major',
      'Deities/Minor',
      'Groups/Parties',
      'Groups/Factions',
      'Tokens/Small',
      'Tokens/Medium',
      'Tokens/Large',
      'Expressions/Happy',
      'Expressions/Angry',
      'Expressions/Sad',
      'Expressions/Surprised'
    ];
    
    for (const dir of dirs) {
      await fs.mkdir(path.join(this.portraitRoot, dir), { recursive: true });
    }
  }
  
  async analyzeCharacters() {
    console.log('👥 Analyzing characters for portrait generation...\n');
    
    const characters = {
      npcs: [],
      pcs: [],
      monsters: [],
      deities: []
    };
    
    // Scan People directory
    try {
      const peopleDir = path.join(this.vaultRoot, '02_Worldbuilding/People');
      const files = await this.scanDirectory(peopleDir);
      
      for (const file of files) {
        const content = await fs.readFile(file, 'utf-8');
        const character = this.parseCharacter(content, file);
        
        if (character) {
          // Categorize character
          if (character.divine) {
            characters.deities.push(character);
          } else if (character.monstrous) {
            characters.monsters.push(character);
          } else if (character.pc) {
            characters.pcs.push(character);
          } else {
            characters.npcs.push(character);
          }
        }
      }
    } catch (error) {
      console.log('People directory not found, using defaults');
    }
    
    // Add essential portraits if missing
    this.addEssentialPortraits(characters);
    
    return characters;
  }
  
  parseCharacter(content, filepath) {
    const name = path.basename(filepath, '.md');
    const lines = content.split('\n');
    
    const character = {
      name,
      filename: filepath,
      race: this.extractField(content, 'race') || 'human',
      class: this.extractField(content, 'class') || 'commoner',
      age: this.extractField(content, 'age') || 'adult',
      gender: this.extractField(content, 'gender') || 'neutral',
      alignment: this.extractField(content, 'alignment'),
      faction: this.extractField(content, 'faction'),
      description: this.extractDescription(content),
      personality: this.extractPersonality(content),
      appearance: this.extractAppearance(content)
    };
    
    // Determine character type
    character.divine = content.match(/deity|god|goddess|divine|celestial/i);
    character.monstrous = content.match(/monster|aberration|fiend|undead/i);
    character.pc = content.match(/player character|PC:|played by/i);
    character.major = content.match(/major npc|important|key figure|leader/i);
    
    return character;
  }
  
  extractField(content, field) {
    const regex = new RegExp(`${field}:?\\s*([^\\n]+)`, 'i');
    const match = content.match(regex);
    return match ? match[1].trim() : null;
  }
  
  extractDescription(content) {
    const descMatch = content.match(/description:?\s*\n([^#]+)/i);
    if (descMatch) {
      return descMatch[1].trim();
    }
    
    // Get first substantial paragraph
    const paragraphs = content.split('\n\n');
    for (const para of paragraphs) {
      if (!para.startsWith('#') && para.length > 50) {
        return para.trim();
      }
    }
    
    return '';
  }
  
  extractPersonality(content) {
    const personalityMatch = content.match(/personality:?\s*\n([^#]+)/i);
    if (personalityMatch) {
      return personalityMatch[1].trim();
    }
    
    // Look for personality traits
    const traits = [];
    const traitWords = ['brave', 'cowardly', 'wise', 'foolish', 'kind', 'cruel', 'honest', 'deceptive'];
    const contentLower = content.toLowerCase();
    
    for (const trait of traitWords) {
      if (contentLower.includes(trait)) {
        traits.push(trait);
      }
    }
    
    return traits.join(', ');
  }
  
  extractAppearance(content) {
    const appearanceMatch = content.match(/appearance:?\s*\n([^#]+)/i);
    if (appearanceMatch) {
      return appearanceMatch[1].trim();
    }
    
    // Look for physical descriptions
    const physical = [];
    const physicalTerms = ['tall', 'short', 'hair', 'eyes', 'scar', 'beard', 'muscular', 'thin'];
    const contentLower = content.toLowerCase();
    
    for (const term of physicalTerms) {
      const termMatch = content.match(new RegExp(`[^.]*${term}[^.]*\\.`, 'i'));
      if (termMatch) {
        physical.push(termMatch[0].trim());
      }
    }
    
    return physical.join(' ');
  }
  
  addEssentialPortraits(characters) {
    // Ensure we have some basic portraits
    if (characters.npcs.length === 0) {
      characters.npcs.push(
        { name: 'Generic_Merchant', race: 'human', class: 'merchant', age: 'middle_aged' },
        { name: 'Generic_Guard', race: 'human', class: 'fighter', age: 'adult' },
        { name: 'Generic_Innkeeper', race: 'halfling', class: 'commoner', age: 'middle_aged' }
      );
    }
    
    if (characters.pcs.length === 0) {
      characters.pcs.push(
        { name: 'Pregen_Fighter', race: 'human', class: 'fighter', age: 'young_adult' },
        { name: 'Pregen_Wizard', race: 'elf', class: 'wizard', age: 'adult' },
        { name: 'Pregen_Rogue', race: 'halfling', class: 'rogue', age: 'young_adult' },
        { name: 'Pregen_Cleric', race: 'dwarf', class: 'cleric', age: 'adult' }
      );
    }
  }
  
  async scanDirectory(dir) {
    const files = [];
    
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          files.push(...await this.scanDirectory(fullPath));
        } else if (entry.name.endsWith('.md')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Directory doesn't exist
    }
    
    return files;
  }
  
  async generatePortraits(characters) {
    console.log('\n🖼️ Generating character portraits...\n');
    
    // Generate NPCs
    if (characters.npcs.length > 0) {
      console.log(`👤 Generating ${characters.npcs.length} NPC portraits...`);
      for (const npc of characters.npcs) {
        await this.generateCharacterPortrait(npc, 'NPCs');
      }
    }
    
    // Generate PCs
    if (characters.pcs.length > 0) {
      console.log(`🦸 Generating ${characters.pcs.length} PC portraits...`);
      for (const pc of characters.pcs) {
        await this.generateCharacterPortrait(pc, 'PCs');
      }
    }
    
    // Generate Monsters
    if (characters.monsters.length > 0) {
      console.log(`👹 Generating ${characters.monsters.length} monster portraits...`);
      for (const monster of characters.monsters) {
        await this.generateCharacterPortrait(monster, 'Monsters');
      }
    }
    
    // Generate Deities
    if (characters.deities.length > 0) {
      console.log(`⚡ Generating ${characters.deities.length} deity portraits...`);
      for (const deity of characters.deities) {
        await this.generateCharacterPortrait(deity, 'Deities');
      }
    }
    
    return this.stats;
  }
  
  async generateCharacterPortrait(character, category) {
    // Determine portrait style based on character
    const style = this.determinePortraitStyle(character);
    const archetype = this.determineArchetype(character);
    
    // Generate multiple versions
    const versions = [
      { suffix: 'standard', expression: 'neutral', lighting: 'balanced' },
      { suffix: 'dramatic', expression: 'intense', lighting: 'dramatic' },
      { suffix: 'friendly', expression: 'smiling', lighting: 'warm' }
    ];
    
    if (character.major) {
      versions.push(
        { suffix: 'angry', expression: 'angry', lighting: 'harsh' },
        { suffix: 'sad', expression: 'sad', lighting: 'soft' }
      );
    }
    
    for (const version of versions) {
      const filename = `portrait_${this.sanitizeName(character.name)}_${version.suffix}.png`;
      const subdir = character.major ? `${category}/Major` : `${category}/Minor`;
      const filepath = path.join(this.portraitRoot, subdir, filename);
      
      const prompt = this.buildPortraitPrompt(character, style, archetype, version);
      
      await this.createPortraitPlaceholder(filepath, {
        character,
        style,
        archetype,
        version,
        prompt,
        size: '1024x1024'
      });
    }
    
    // Generate token versions
    await this.generateTokenVersions(character, category);
    
    this.stats.generated[category.toLowerCase()] = 
      (this.stats.generated[category.toLowerCase()] || 0) + 1;
    this.stats.total++;
  }
  
  determinePortraitStyle(character) {
    // Choose style based on character attributes
    if (character.divine) return 'portrait_miniature';
    if (character.monstrous) return 'noir';
    if (character.class === 'wizard' || character.class === 'sorcerer') return 'fantasy_art';
    if (character.race === 'elf' || character.race === 'gnome') return 'fantasy_art';
    if (character.age === 'child' || character.age === 'young_adult') return 'anime';
    
    return 'realistic';
  }
  
  determineArchetype(character) {
    // Map character to archetype
    const classArchetypes = {
      fighter: 'fighter',
      wizard: 'wizard',
      rogue: 'rogue',
      cleric: 'cleric',
      merchant: 'merchant',
      noble: 'noble'
    };
    
    if (classArchetypes[character.class]) {
      return CHARACTER_ARCHETYPES[classArchetypes[character.class]];
    }
    
    if (character.faction && character.faction.match(/noble|royal|court/i)) {
      return CHARACTER_ARCHETYPES.noble;
    }
    
    if (character.alignment && character.alignment.match(/evil|chaotic/i)) {
      return CHARACTER_ARCHETYPES.villain;
    }
    
    return CHARACTER_ARCHETYPES.commoner;
  }
  
  buildPortraitPrompt(character, style, archetype, version) {
    const styleConfig = PORTRAIT_STYLES[style] || PORTRAIT_STYLES.realistic;
    const raceFeatures = DEMOGRAPHICS.races[character.race]?.features || [];
    
    let prompt = `${style} portrait of ${character.race} ${character.class}`;
    
    // Add appearance details
    if (character.appearance) {
      prompt += `, ${character.appearance}`;
    }
    
    // Add race features
    if (raceFeatures.length > 0) {
      prompt += `, ${raceFeatures.join(', ')}`;
    }
    
    // Add archetype features
    if (archetype.features) {
      prompt += `, ${archetype.features[0]}`;
    }
    
    // Add expression and lighting
    prompt += `, ${version.expression} expression`;
    prompt += `, ${version.lighting} lighting`;
    
    // Add style elements
    if (styleConfig.techniques) {
      prompt += `, ${styleConfig.techniques[0]} style`;
    }
    
    // Add background
    if (archetype.backgrounds) {
      prompt += `, ${archetype.backgrounds[0]} background`;
    }
    
    return prompt;
  }
  
  async generateTokenVersions(character, category) {
    const sizes = {
      tiny: '128x128',
      small: '256x256',
      medium: '512x512',
      large: '1024x1024'
    };
    
    const tokenStates = ['normal', 'bloodied', 'unconscious'];
    
    for (const state of tokenStates) {
      const filename = `token_${this.sanitizeName(character.name)}_${state}.png`;
      const filepath = path.join(this.portraitRoot, 'Tokens/Medium', filename);
      
      await this.createPortraitPlaceholder(filepath, {
        character: character.name,
        type: 'token',
        state,
        size: sizes.medium,
        border: character.faction ? 'faction' : 'standard'
      });
    }
  }
  
  async createPortraitPlaceholder(filepath, metadata) {
    await fs.mkdir(path.dirname(filepath), { recursive: true });
    
    // Save metadata
    const metaPath = filepath.replace(/\.[^.]+$/, '_meta.json');
    await fs.writeFile(metaPath, JSON.stringify({
      ...metadata,
      generated: new Date().toISOString(),
      placeholder: true
    }, null, 2));
    
    // Create placeholder image
    await fs.writeFile(filepath, Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
      'base64'
    ));
  }
  
  sanitizeName(name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
  }
  
  async generatePortraitGallery() {
    console.log('\n🖼️ Generating portrait gallery...\n');
    
    const gallery = `# Portrait Gallery

Generated: ${new Date().toISOString()}

## Overview

Total Portraits: ${this.stats.total}

### By Category
${Object.entries(this.stats.generated).map(([cat, count]) => 
  `- **${cat.charAt(0).toUpperCase() + cat.slice(1)}**: ${count} characters`
).join('\n')}

## Portrait Styles

${Object.entries(PORTRAIT_STYLES).map(([style, config]) => `
### ${style.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
${config.description}
- **Techniques**: ${config.techniques?.join(', ') || 'Various'}
- **Best for**: ${this.getStyleRecommendation(style)}
`).join('\n')}

## Character Archetypes

${Object.entries(CHARACTER_ARCHETYPES).map(([arch, config]) => `
### ${arch.charAt(0).toUpperCase() + arch.slice(1)}
- **Features**: ${config.features.join(', ')}
- **Accessories**: ${config.accessories.join(', ')}
- **Backgrounds**: ${config.backgrounds.join(', ')}
`).join('\n')}

## Usage Guide

### Portrait Versions
- **Standard**: Neutral expression for general use
- **Dramatic**: Intense lighting for key moments
- **Friendly**: Warm expression for social encounters
- **Emotional**: Various expressions for major NPCs

### Token Usage
- **Normal**: Standard appearance
- **Bloodied**: Below half hit points
- **Unconscious**: 0 hit points

### Integration Tips
1. Use consistent styles for related characters
2. Match portrait mood to scene tone
3. Update tokens based on condition
4. Use dramatic versions for boss encounters

## File Organization

\`\`\`
Portraits/
├── NPCs/
│   ├── Major/      # Important NPCs with multiple expressions
│   └── Minor/      # Background characters
├── PCs/
│   ├── Active/     # Current player characters
│   ├── Retired/    # Former PCs
│   └── Pregens/    # Pre-generated characters
├── Monsters/
│   ├── Unique/     # Named monsters
│   └── Leaders/    # Monster commanders
├── Deities/
│   ├── Major/      # Primary pantheon
│   └── Minor/      # Lesser deities
└── Tokens/
    ├── Small/      # 128x128
    ├── Medium/     # 256x256
    └── Large/      # 512x512
\`\`\`
`;

    await fs.writeFile(
      path.join(this.portraitRoot, 'PORTRAIT_GALLERY.md'),
      gallery
    );
    
    console.log('✅ Portrait gallery created');
  }
  
  getStyleRecommendation(style) {
    const recommendations = {
      realistic: 'Human NPCs, serious campaigns',
      fantasy_art: 'Magic users, fantasy races',
      anime: 'Young characters, lighthearted games',
      portrait_miniature: 'Deities, historical figures',
      noir: 'Villains, dark campaigns'
    };
    
    return recommendations[style] || 'Various character types';
  }
}

// Main execution
async function main() {
  const generator = new AdvancedPortraitGenerator();
  
  try {
    await generator.initialize();
    const characters = await generator.analyzeCharacters();
    
    console.log(`📊 Characters identified:
- NPCs: ${characters.npcs.length}
- PCs: ${characters.pcs.length}
- Monsters: ${characters.monsters.length}
- Deities: ${characters.deities.length}
`);
    
    await generator.generatePortraits(characters);
    await generator.generatePortraitGallery();
    
    console.log(`\n✅ Portrait generation complete!`);
    console.log(`Total portraits created: ${generator.stats.total}`);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

if (require.main === module) {
  main();
}

module.exports = AdvancedPortraitGenerator;
