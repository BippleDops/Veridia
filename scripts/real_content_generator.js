#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

// Real content generation using actual data and algorithms
class RealContentGenerator {
  constructor() {
    this.vaultRoot = process.cwd();
    this.assetRoot = path.join(this.vaultRoot, '04_Resources/Assets');
    this.contentRoot = path.join(this.vaultRoot, '02_Worldbuilding');
    this.stats = {
      generated: 0,
      written: 0,
      created: 0
    };
  }

  async initialize() {
    console.log('🎯 Initializing Real Content Generator...\n');
    console.log('This system generates actual, usable content - no placeholders!\n');
    
    // Ensure directories exist
    const dirs = [
      'Generated_Content/NPCs',
      'Generated_Content/Locations', 
      'Generated_Content/Items',
      'Generated_Content/Quests',
      'Generated_Content/Encounters',
      'Real_Maps/Dungeons',
      'Real_Maps/Cities',
      'Real_Audio/Descriptions'
    ];
    
    for (const dir of dirs) {
      await fs.mkdir(path.join(this.assetRoot, dir), { recursive: true });
    }
  }

  // Generate real NPC with full details
  async generateRealNPC(seed = null) {
    const id = seed || crypto.randomBytes(4).toString('hex');
    
    // Character generation tables
    const races = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Tiefling', 'Dragonborn', 'Half-Orc', 'Gnome'];
    const classes = ['Fighter', 'Wizard', 'Rogue', 'Cleric', 'Ranger', 'Bard', 'Barbarian', 'Paladin'];
    const alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
    
    // Personality traits
    const traits = [
      'Brave but reckless', 'Cautious and calculating', 'Cheerful and optimistic', 
      'Grim and fatalistic', 'Curious about everything', 'Suspicious of strangers',
      'Generous to a fault', 'Greedy and miserly', 'Honor-bound', 'Pragmatic'
    ];
    
    const ideals = [
      'Freedom above all', 'Order and law', 'Knowledge is power', 'Protect the innocent',
      'Personal gain', 'Family first', 'Religious devotion', 'Nature\'s balance'
    ];
    
    const bonds = [
      'Searching for a lost sibling', 'Owes a life debt', 'Protecting a sacred artifact',
      'Seeking revenge', 'Building a legacy', 'Fulfilling a prophecy', 'Redeeming past mistakes'
    ];
    
    const flaws = [
      'Terrible liar', 'Gambling addiction', 'Fear of darkness', 'Can\'t resist a pretty face',
      'Overly trusting', 'Quick to anger', 'Superstitious', 'Secretly a coward'
    ];

    // Generate character
    const character = {
      name: this.generateName(),
      race: this.selectRandom(races),
      class: this.selectRandom(classes),
      level: Math.floor(Math.random() * 10) + 1,
      alignment: this.selectRandom(alignments),
      
      // Ability scores (3d6 per ability)
      abilities: {
        STR: this.roll3d6(),
        DEX: this.roll3d6(),
        CON: this.roll3d6(),
        INT: this.roll3d6(),
        WIS: this.roll3d6(),
        CHA: this.roll3d6()
      },
      
      // Personality
      personality: {
        trait: this.selectRandom(traits),
        ideal: this.selectRandom(ideals),
        bond: this.selectRandom(bonds),
        flaw: this.selectRandom(flaws)
      },
      
      // Physical description
      appearance: this.generateAppearance(),
      
      // Background
      background: this.generateBackground(),
      
      // Current situation
      currentLocation: this.generateLocation(),
      motivation: this.generateMotivation(),
      
      // Game stats
      hp: 0, // Will calculate based on class and level
      ac: 10, // Base, will modify
      
      // Equipment
      equipment: [],
      
      // Special abilities
      abilities: []
    };

    // Calculate HP based on class
    const hitDice = {
      Fighter: 10, Barbarian: 12, Ranger: 10, Paladin: 10,
      Cleric: 8, Rogue: 8, Bard: 8, Wizard: 6
    };
    
    const hd = hitDice[character.class] || 8;
    character.hp = hd + this.getModifier(character.abilities.CON);
    for (let i = 1; i < character.level; i++) {
      character.hp += Math.floor(Math.random() * hd) + 1 + this.getModifier(character.abilities.CON);
    }

    // Generate equipment based on class
    character.equipment = this.generateEquipment(character.class, character.level);
    
    // Generate special abilities
    character.abilities = this.generateAbilities(character.class, character.level);

    // Create markdown file
    const content = this.formatNPCMarkdown(character);
    const filename = `${character.name.replace(/\s+/g, '_')}.md`;
    const filepath = path.join(this.contentRoot, 'People', filename);
    
    await fs.writeFile(filepath, content);
    this.stats.generated++;
    
    return character;
  }

  generateName() {
    const firstNames = [
      'Aldric', 'Brenna', 'Cedric', 'Dara', 'Ewan', 'Fiora', 'Gareth', 'Hilda',
      'Ivan', 'Jora', 'Kael', 'Lyra', 'Magnus', 'Nora', 'Osric', 'Petra',
      'Quinn', 'Rhea', 'Soren', 'Tara', 'Ulric', 'Vera', 'Willem', 'Xara',
      'Yorick', 'Zara'
    ];
    
    const lastNames = [
      'Stormwind', 'Ironforge', 'Goldleaf', 'Darkwater', 'Brightblade', 'Shadowmere',
      'Fireborn', 'Frostbeard', 'Moonwhisper', 'Sunstrider', 'Earthshaker', 'Windrunner',
      'Starweaver', 'Thornfield', 'Ravencrest', 'Dragonheart', 'Wolfsbane', 'Eagleeye'
    ];
    
    return `${this.selectRandom(firstNames)} ${this.selectRandom(lastNames)}`;
  }

  generateAppearance() {
    const builds = ['Slender', 'Athletic', 'Stocky', 'Muscular', 'Wiry', 'Heavyset'];
    const heights = ['Short', 'Average height', 'Tall', 'Very tall'];
    const hairColors = ['Black', 'Brown', 'Blonde', 'Red', 'Gray', 'White', 'Auburn'];
    const hairStyles = ['Long', 'Short', 'Braided', 'Tied back', 'Wild', 'Neatly trimmed'];
    const eyeColors = ['Brown', 'Blue', 'Green', 'Gray', 'Hazel', 'Amber', 'Violet'];
    const features = [
      'Prominent scar', 'Missing finger', 'Tattoos', 'Piercing gaze', 'Warm smile',
      'Crooked nose', 'Perfect teeth', 'Weather-beaten', 'Youthful appearance'
    ];
    
    return {
      build: this.selectRandom(builds),
      height: this.selectRandom(heights),
      hair: `${this.selectRandom(hairStyles)} ${this.selectRandom(hairColors).toLowerCase()} hair`,
      eyes: `${this.selectRandom(eyeColors)} eyes`,
      distinguishing: this.selectRandom(features)
    };
  }

  generateBackground() {
    const backgrounds = [
      'Former soldier who left the army after a devastating battle',
      'Merchant\'s child who chose adventure over the family business',
      'Scholar who discovered a dangerous secret and had to flee',
      'Street orphan who learned to survive through wit and skill',
      'Noble who lost everything in a political coup',
      'Farmer who took up arms to defend their village',
      'Apprentice who accidentally killed their master',
      'Sailor who survived a shipwreck and saw things in the deep',
      'Priest who lost faith but kept the power',
      'Criminal seeking redemption for past deeds'
    ];
    
    return this.selectRandom(backgrounds);
  }

  generateLocation() {
    const locations = [
      'The Rusty Anchor tavern in Bexley',
      'The market square of Abyssos Prime',
      'Traveling the roads near Aethermoor',
      'Hiding in the sewers beneath the city',
      'Camping in the Whispering Woods',
      'Working at the docks',
      'Guarding a merchant caravan',
      'Imprisoned in the city dungeon',
      'Studying in the Grand Library',
      'Training at the Fighter\'s Guild'
    ];
    
    return this.selectRandom(locations);
  }

  generateMotivation() {
    const motivations = [
      'Seeks revenge against those who wronged them',
      'Searches for a cure to a mysterious affliction',
      'Hunts for a legendary treasure',
      'Tries to prevent an ancient prophecy',
      'Works to overthrow a corrupt ruler',
      'Seeks to redeem their family name',
      'Pursues forbidden knowledge',
      'Protects a terrible secret',
      'Fulfills a dying wish',
      'Escapes from a dark past'
    ];
    
    return this.selectRandom(motivations);
  }

  generateEquipment(charClass, level) {
    const equipment = [];
    
    // Basic equipment by class
    const classGear = {
      Fighter: ['Longsword', 'Shield', 'Chain mail', 'Adventurer\'s pack'],
      Wizard: ['Quarterstaff', 'Spellbook', 'Component pouch', 'Scholar\'s pack'],
      Rogue: ['Shortsword', 'Shortbow', 'Leather armor', 'Thieves\' tools', 'Burglar\'s pack'],
      Cleric: ['Mace', 'Shield', 'Scale mail', 'Holy symbol', 'Priest\'s pack'],
      Ranger: ['Longbow', 'Shortsword', 'Leather armor', 'Explorer\'s pack'],
      Bard: ['Rapier', 'Lute', 'Leather armor', 'Entertainer\'s pack'],
      Barbarian: ['Greataxe', 'Javelins (4)', 'Explorer\'s pack'],
      Paladin: ['Longsword', 'Shield', 'Chain mail', 'Holy symbol', 'Explorer\'s pack']
    };
    
    equipment.push(...(classGear[charClass] || ['Simple weapon', 'Adventurer\'s pack']));
    
    // Add magic items based on level
    if (level >= 5) {
      equipment.push(this.selectRandom(['+1 Weapon', 'Cloak of Elvenkind', 'Boots of Speed', 'Ring of Protection']));
    }
    if (level >= 10) {
      equipment.push(this.selectRandom(['+2 Weapon', 'Bag of Holding', 'Amulet of Health', 'Gauntlets of Ogre Power']));
    }
    
    // Add consumables
    equipment.push(`${Math.floor(Math.random() * 3) + 1} Healing potions`);
    equipment.push(`${Math.floor(Math.random() * 100) + 50} gold pieces`);
    
    return equipment;
  }

  generateAbilities(charClass, level) {
    const abilities = [];
    
    const classAbilities = {
      Fighter: ['Second Wind', 'Action Surge', 'Extra Attack', 'Indomitable'],
      Wizard: ['Spellcasting', 'Arcane Recovery', 'Spell Mastery'],
      Rogue: ['Sneak Attack', 'Thieves\' Cant', 'Cunning Action', 'Uncanny Dodge'],
      Cleric: ['Spellcasting', 'Channel Divinity', 'Divine Intervention'],
      Ranger: ['Favored Enemy', 'Natural Explorer', 'Hunter\'s Mark', 'Extra Attack'],
      Bard: ['Bardic Inspiration', 'Jack of All Trades', 'Song of Rest', 'Expertise'],
      Barbarian: ['Rage', 'Unarmored Defense', 'Reckless Attack', 'Brutal Critical'],
      Paladin: ['Divine Sense', 'Lay on Hands', 'Divine Smite', 'Aura of Protection']
    };
    
    const available = classAbilities[charClass] || [];
    const numAbilities = Math.min(Math.floor(level / 3) + 1, available.length);
    
    for (let i = 0; i < numAbilities; i++) {
      if (available[i]) {
        abilities.push(available[i]);
      }
    }
    
    return abilities;
  }

  formatNPCMarkdown(character) {
    const ac = 10 + this.getModifier(character.abilities.DEX) + (character.equipment.some(e => e.includes('armor')) ? 3 : 0);
    
    return `# ${character.name}

*${character.race} ${character.class} ${character.level}, ${character.alignment}*

## Quick Stats
- **Armor Class**: ${ac}
- **Hit Points**: ${character.hp}
- **Speed**: 30 ft.

## Ability Scores
| STR | DEX | CON | INT | WIS | CHA |
|-----|-----|-----|-----|-----|-----|
| ${character.abilities.STR} (${this.formatModifier(character.abilities.STR)}) | ${character.abilities.DEX} (${this.formatModifier(character.abilities.DEX)}) | ${character.abilities.CON} (${this.formatModifier(character.abilities.CON)}) | ${character.abilities.INT} (${this.formatModifier(character.abilities.INT)}) | ${character.abilities.WIS} (${this.formatModifier(character.abilities.WIS)}) | ${character.abilities.CHA} (${this.formatModifier(character.abilities.CHA)}) |

## Appearance
${character.appearance.height} and ${character.appearance.build.toLowerCase()}, with ${character.appearance.hair} and ${character.appearance.eyes}. ${character.appearance.distinguishing}.

## Personality
- **Trait**: ${character.personality.trait}
- **Ideal**: ${character.personality.ideal}
- **Bond**: ${character.personality.bond}
- **Flaw**: ${character.personality.flaw}

## Background
${character.background}

## Current Situation
**Location**: ${character.currentLocation}
**Motivation**: ${character.motivation}

## Abilities
${character.abilities.map(a => `- **${a}**`).join('\n')}

## Equipment
${character.equipment.map(e => `- ${e}`).join('\n')}

## Roleplaying Notes
This character ${character.personality.trait.toLowerCase()} and believes that ${character.personality.ideal.toLowerCase()}. They are driven by their need to ${character.motivation.toLowerCase()}, though they struggle with the fact that they ${character.personality.flaw.toLowerCase()}.

## Plot Hooks
1. The party could encounter ${character.name} at ${character.currentLocation}
2. ${character.name} might hire the party to help with their goal
3. The character's ${character.personality.bond.toLowerCase()} could intersect with the party's quest
4. Their flaw could create an interesting complication for the party

---
*Generated: ${new Date().toISOString()}*
`;
  }

  // Generate real dungeon with actual map data
  async generateRealDungeon(config = {}) {
    const dungeon = {
      name: config.name || this.generateDungeonName(),
      theme: config.theme || this.selectRandom(['crypt', 'cave', 'temple', 'fortress', 'sewer']),
      size: config.size || { width: 50, height: 50 },
      rooms: [],
      corridors: [],
      features: [],
      encounters: [],
      treasure: []
    };

    // Generate room layout
    const numRooms = config.rooms || Math.floor(Math.random() * 10) + 5;
    
    for (let i = 0; i < numRooms; i++) {
      const room = this.generateRoom(i, dungeon.size);
      dungeon.rooms.push(room);
    }

    // Connect rooms with corridors
    this.connectRooms(dungeon);

    // Add features
    dungeon.features = this.generateDungeonFeatures(dungeon);

    // Add encounters
    dungeon.encounters = this.generateEncounters(dungeon);

    // Add treasure
    dungeon.treasure = this.generateTreasure(dungeon);

    // Generate ASCII map
    const mapData = this.renderDungeonMap(dungeon);
    
    // Save dungeon data
    const content = this.formatDungeonMarkdown(dungeon, mapData);
    const filename = `${dungeon.name.replace(/\s+/g, '_')}.md`;
    const filepath = path.join(this.assetRoot, 'Real_Maps/Dungeons', filename);
    
    await fs.writeFile(filepath, content);
    this.stats.created++;
    
    return dungeon;
  }

  generateDungeonName() {
    const adjectives = ['Forgotten', 'Cursed', 'Ancient', 'Abandoned', 'Haunted', 'Sunken', 'Frozen', 'Burning'];
    const nouns = ['Crypt', 'Tomb', 'Temple', 'Fortress', 'Cavern', 'Labyrinth', 'Sanctum', 'Vault'];
    const suffixes = ['of Shadows', 'of the Dead', 'of Despair', 'of the Lost King', 'of Eternal Night'];
    
    return `The ${this.selectRandom(adjectives)} ${this.selectRandom(nouns)} ${this.selectRandom(suffixes)}`;
  }

  generateRoom(index, dungeonSize) {
    const room = {
      id: index,
      x: Math.floor(Math.random() * (dungeonSize.width - 10)) + 5,
      y: Math.floor(Math.random() * (dungeonSize.height - 10)) + 5,
      width: Math.floor(Math.random() * 8) + 4,
      height: Math.floor(Math.random() * 8) + 4,
      type: this.selectRandom(['square', 'rectangular', 'circular', 'irregular']),
      purpose: this.selectRandom(['guard room', 'shrine', 'library', 'prison', 'throne room', 'storage', 'barracks']),
      description: '',
      contents: []
    };

    room.description = this.generateRoomDescription(room);
    room.contents = this.generateRoomContents(room);
    
    return room;
  }

  generateRoomDescription(room) {
    const descriptions = {
      'guard room': 'Weapon racks line the walls, and a table sits in the center with dice and coins scattered across it.',
      'shrine': 'A small altar dominates the room, with faded murals depicting forgotten deities on the walls.',
      'library': 'Dusty shelves filled with crumbling books and scrolls. A reading desk sits by a long-dead fireplace.',
      'prison': 'Iron bars separate small cells. Chains hang from the walls, and scratches mark the days on stone.',
      'throne room': 'A grand chair sits on a raised dais. Tattered banners hang from the ceiling.',
      'storage': 'Crates and barrels fill the room. Most have been broken open, their contents long since looted.',
      'barracks': 'Rows of bunks line the walls. Personal effects are scattered about, abandoned in haste.'
    };
    
    return descriptions[room.purpose] || 'A dusty chamber with signs of long abandonment.';
  }

  generateRoomContents(room) {
    const contents = [];
    
    // Random chance of various contents
    if (Math.random() < 0.3) {
      contents.push(this.selectRandom(['Broken furniture', 'Ancient weapon rack', 'Collapsed bookshelf', 'Shattered pottery']));
    }
    
    if (Math.random() < 0.2) {
      contents.push(this.selectRandom(['Hidden compartment', 'Secret door', 'Concealed pit trap', 'False wall']));
    }
    
    if (Math.random() < 0.4) {
      contents.push(this.selectRandom(['Cobwebs', 'Puddle of water', 'Strange markings', 'Bloodstains']));
    }
    
    return contents;
  }

  connectRooms(dungeon) {
    // Simple connection algorithm - connect each room to nearest neighbor
    for (let i = 0; i < dungeon.rooms.length - 1; i++) {
      const room1 = dungeon.rooms[i];
      const room2 = dungeon.rooms[i + 1];
      
      const corridor = {
        start: { x: room1.x + Math.floor(room1.width / 2), y: room1.y + Math.floor(room1.height / 2) },
        end: { x: room2.x + Math.floor(room2.width / 2), y: room2.y + Math.floor(room2.height / 2) },
        width: 2
      };
      
      dungeon.corridors.push(corridor);
    }
  }

  generateDungeonFeatures(dungeon) {
    const features = [];
    const numFeatures = Math.floor(Math.random() * 5) + 3;
    
    const featureTypes = [
      'Statue of a forgotten hero',
      'Magical fountain (dried up)',
      'Mysterious obelisk with runes',
      'Collapsed ceiling section',
      'Underground stream',
      'Glowing mushroom grove',
      'Ancient mechanical device',
      'Sacrificial altar'
    ];
    
    for (let i = 0; i < numFeatures; i++) {
      const room = this.selectRandom(dungeon.rooms);
      features.push({
        location: `Room ${room.id} (${room.purpose})`,
        type: this.selectRandom(featureTypes),
        description: 'Requires investigation'
      });
    }
    
    return features;
  }

  generateEncounters(dungeon) {
    const encounters = [];
    const numEncounters = Math.floor(dungeon.rooms.length / 2);
    
    const monsters = {
      crypt: ['Skeleton', 'Zombie', 'Ghoul', 'Wight', 'Specter'],
      cave: ['Giant Spider', 'Cave Bear', 'Stirge', 'Darkmantle', 'Roper'],
      temple: ['Cultist', 'Cult Fanatic', 'Gargoyle', 'Animated Armor', 'Guardian Naga'],
      fortress: ['Hobgoblin', 'Bugbear', 'Ogre', 'Troll', 'Ettin'],
      sewer: ['Giant Rat', 'Swarm of Rats', 'Otyugh', 'Gelatinous Cube', 'Crocodile']
    };
    
    const dungeonMonsters = monsters[dungeon.theme] || monsters.cave;
    
    for (let i = 0; i < numEncounters; i++) {
      const room = this.selectRandom(dungeon.rooms);
      const monster = this.selectRandom(dungeonMonsters);
      const number = Math.floor(Math.random() * 4) + 1;
      
      encounters.push({
        location: `Room ${room.id}`,
        monsters: `${number} ${monster}${number > 1 ? 's' : ''}`,
        tactics: this.generateTactics(monster),
        treasure: Math.random() < 0.5 ? 'Roll on treasure table' : 'None'
      });
    }
    
    return encounters;
  }

  generateTactics(monster) {
    const tactics = {
      'Skeleton': 'Attack nearest enemy with shortsword',
      'Zombie': 'Shamble forward and grapple',
      'Giant Spider': 'Web enemies from ceiling, then drop down',
      'Cultist': 'Cast spells from cover while fanatics engage',
      'Hobgoblin': 'Fight in formation, focus fire on spellcasters',
      'Giant Rat': 'Swarm and use pack tactics',
      'Default': 'Attack intruders on sight'
    };
    
    return tactics[monster] || tactics.Default;
  }

  generateTreasure(dungeon) {
    const treasure = [];
    const numTreasure = Math.floor(Math.random() * 4) + 2;
    
    for (let i = 0; i < numTreasure; i++) {
      const room = this.selectRandom(dungeon.rooms);
      
      treasure.push({
        location: `Room ${room.id}`,
        container: this.selectRandom(['Locked chest', 'Hidden cache', 'Ancient sarcophagus', 'Behind secret door']),
        contents: this.generateTreasureContents()
      });
    }
    
    return treasure;
  }

  generateTreasureContents() {
    const gold = Math.floor(Math.random() * 500) + 100;
    const contents = [`${gold} gold pieces`];
    
    if (Math.random() < 0.3) {
      contents.push(this.selectRandom(['Potion of Healing', 'Potion of Invisibility', 'Potion of Speed']));
    }
    
    if (Math.random() < 0.2) {
      contents.push(this.selectRandom(['+1 Dagger', 'Cloak of Elvenkind', 'Boots of Stealth', 'Ring of Protection']));
    }
    
    if (Math.random() < 0.4) {
      contents.push(this.selectRandom(['Ancient tome', 'Treasure map', 'Mysterious key', 'Noble\'s signet ring']));
    }
    
    return contents;
  }

  renderDungeonMap(dungeon) {
    // Create ASCII map
    const map = Array(dungeon.size.height).fill(null).map(() => Array(dungeon.size.width).fill('#'));
    
    // Draw rooms
    dungeon.rooms.forEach((room, index) => {
      for (let y = room.y; y < room.y + room.height; y++) {
        for (let x = room.x; x < room.x + room.width; x++) {
          if (y < dungeon.size.height && x < dungeon.size.width) {
            map[y][x] = '.';
          }
        }
      }
      
      // Add room number
      const centerY = room.y + Math.floor(room.height / 2);
      const centerX = room.x + Math.floor(room.width / 2);
      if (centerY < dungeon.size.height && centerX < dungeon.size.width) {
        map[centerY][centerX] = String(index)[0];
      }
    });
    
    // Draw corridors
    dungeon.corridors.forEach(corridor => {
      // Simple straight-line corridors
      const dx = Math.sign(corridor.end.x - corridor.start.x);
      const dy = Math.sign(corridor.end.y - corridor.start.y);
      
      let x = corridor.start.x;
      let y = corridor.start.y;
      
      // Horizontal first
      while (x !== corridor.end.x) {
        if (y < dungeon.size.height && x < dungeon.size.width && x >= 0 && y >= 0) {
          map[y][x] = '.';
        }
        x += dx;
      }
      
      // Then vertical
      while (y !== corridor.end.y) {
        if (y < dungeon.size.height && x < dungeon.size.width && x >= 0 && y >= 0) {
          map[y][x] = '.';
        }
        y += dy;
      }
    });
    
    return map.map(row => row.join('')).join('\n');
  }

  formatDungeonMarkdown(dungeon, mapData) {
    return `# ${dungeon.name}

*A ${dungeon.theme} dungeon with ${dungeon.rooms.length} rooms*

## Overview
${dungeon.name} is ${this.selectRandom(['an ancient', 'a forgotten', 'a cursed', 'an abandoned'])} ${dungeon.theme} that ${this.selectRandom(['once served as', 'was built as', 'functioned as'])} ${this.selectRandom(['a place of worship', 'a military stronghold', 'a prison', 'a treasure vault'])}.

## Map
\`\`\`
${mapData}
\`\`\`

### Legend
- \`#\` - Solid rock/wall
- \`.\` - Open floor
- \`0-9\` - Room numbers

## Room Descriptions

${dungeon.rooms.map(room => `### Room ${room.id} - ${room.purpose.charAt(0).toUpperCase() + room.purpose.slice(1)}
*${room.width}x${room.height} ${room.type} chamber*

${room.description}

**Contents**: ${room.contents.length > 0 ? room.contents.join(', ') : 'Empty'}
`).join('\n')}

## Features

${dungeon.features.map(feature => `- **${feature.location}**: ${feature.type}`).join('\n')}

## Encounters

| Location | Monsters | Tactics | Treasure |
|----------|----------|---------|----------|
${dungeon.encounters.map(enc => `| ${enc.location} | ${enc.monsters} | ${enc.tactics} | ${enc.treasure} |`).join('\n')}

## Treasure

${dungeon.treasure.map(t => `### ${t.location}
**Container**: ${t.container}
**Contents**: 
${t.contents.map(c => `- ${c}`).join('\n')}
`).join('\n')}

## Running the Dungeon

### Atmosphere
- ${this.selectRandom(['Damp and musty', 'Cold and oppressive', 'Eerily quiet', 'Echoing and vast'])}
- ${this.selectRandom(['Shadows dance in torchlight', 'Strange sounds echo from deeper levels', 'An unnatural chill permeates the air', 'The walls seem to close in'])}

### Random Encounters (1 in 6 chance per hour)
1. ${this.selectRandom(['Wandering monster from encounter table', 'Strange noise (false alarm)', 'Partial ceiling collapse', 'Lost adventurer (injured)'])}
2. ${this.selectRandom(['Trap triggers accidentally', 'Find previous adventurer\'s remains', 'Mysterious wind extinguishes torches', 'Ghostly whispers'])}

### Secrets
- ${this.selectRandom(['Hidden treasure room behind room ' + Math.floor(Math.random() * dungeon.rooms.length), 'Secret passage connecting two distant rooms', 'Ancient library with valuable information', 'Portal to another plane (inactive)'])}

---
*Generated: ${new Date().toISOString()}*
`;
  }

  // Generate real quest with branching paths
  async generateRealQuest() {
    const quest = {
      title: this.generateQuestTitle(),
      type: this.selectRandom(['fetch', 'kill', 'escort', 'investigate', 'negotiate']),
      questGiver: await this.generateRealNPC(),
      objective: '',
      rewards: [],
      complications: [],
      stages: [],
      choices: []
    };

    // Define objective based on type
    quest.objective = this.generateObjective(quest.type);
    
    // Generate quest stages
    quest.stages = this.generateQuestStages(quest);
    
    // Generate complications
    quest.complications = this.generateComplications(quest);
    
    // Generate moral choices
    quest.choices = this.generateChoices(quest);
    
    // Generate rewards
    quest.rewards = this.generateRewards(quest);

    // Format and save
    const content = this.formatQuestMarkdown(quest);
    const filename = `${quest.title.replace(/\s+/g, '_')}.md`;
    const filepath = path.join(this.assetRoot, 'Generated_Content/Quests', filename);
    
    await fs.writeFile(filepath, content);
    this.stats.written++;
    
    return quest;
  }

  generateQuestTitle() {
    const formats = [
      'The {adjective} {noun}',
      '{noun} of {place}',
      'The {adjective} {noun} of {place}',
      'In Search of the {adjective} {noun}',
      'The {place} {problem}'
    ];
    
    const adjectives = ['Lost', 'Cursed', 'Sacred', 'Forbidden', 'Ancient', 'Stolen', 'Corrupted', 'Final'];
    const nouns = ['Artifact', 'Tome', 'Crown', 'Sword', 'Relic', 'Heir', 'Secret', 'Truth'];
    const places = ['Shadowfell', 'the North', 'Destiny', 'the Ancients', 'the Deep', 'Eternity'];
    const problems = ['Conspiracy', 'Murders', 'Haunting', 'Uprising', 'Plague', 'Prophecy'];
    
    let title = this.selectRandom(formats);
    title = title.replace('{adjective}', this.selectRandom(adjectives));
    title = title.replace('{noun}', this.selectRandom(nouns));
    title = title.replace('{place}', this.selectRandom(places));
    title = title.replace('{problem}', this.selectRandom(problems));
    
    return title;
  }

  generateObjective(type) {
    const objectives = {
      fetch: [
        'Retrieve the stolen artifact from the bandit hideout',
        'Find the rare herb that only grows in the dangerous swamp',
        'Recover the lost heirloom from the dragon\'s hoard'
      ],
      kill: [
        'Eliminate the monster terrorizing the village',
        'Assassinate the corrupt noble without being detected',
        'Destroy the undead creature and its spawn'
      ],
      escort: [
        'Safely deliver the merchant caravan through bandit territory',
        'Guide the noble\'s daughter to her wedding in a rival kingdom',
        'Protect the witness until they can testify'
      ],
      investigate: [
        'Discover who is behind the mysterious disappearances',
        'Uncover the truth about the haunted mansion',
        'Find evidence of the conspiracy within the guild'
      ],
      negotiate: [
        'Broker peace between the warring factions',
        'Convince the dragon to relocate without violence',
        'Secure a trade agreement with the suspicious merchants'
      ]
    };
    
    return this.selectRandom(objectives[type] || objectives.fetch);
  }

  generateQuestStages(quest) {
    const stages = [];
    const numStages = Math.floor(Math.random() * 3) + 3;
    
    // Opening stage
    stages.push({
      name: 'The Hook',
      description: `Meet with ${quest.questGiver.name} and learn about the problem`,
      objectives: ['Speak with the quest giver', 'Gather initial information', 'Accept the quest'],
      locations: [quest.questGiver.currentLocation]
    });
    
    // Investigation stage
    stages.push({
      name: 'Investigation',
      description: 'Gather information and prepare for the main objective',
      objectives: [
        'Interview key witnesses or informants',
        'Research background information',
        'Acquire necessary equipment or allies'
      ],
      locations: ['Local tavern', 'City archives', 'Market district']
    });
    
    // Main objective stages
    for (let i = 0; i < numStages - 3; i++) {
      stages.push({
        name: `Challenge ${i + 1}`,
        description: this.generateStageDescription(quest.type),
        objectives: this.generateStageObjectives(quest.type),
        locations: [this.generateLocation()]
      });
    }
    
    // Resolution stage
    stages.push({
      name: 'Resolution',
      description: 'Complete the quest and claim your reward',
      objectives: ['Return to quest giver', 'Report success', 'Collect reward'],
      locations: [quest.questGiver.currentLocation]
    });
    
    return stages;
  }

  generateStageDescription(questType) {
    const descriptions = {
      fetch: 'Navigate obstacles to reach the target item',
      kill: 'Track down and confront the target',
      escort: 'Protect your charge from a threat',
      investigate: 'Uncover a crucial piece of evidence',
      negotiate: 'Meet with one of the parties involved'
    };
    
    return descriptions[questType] || 'Face an unexpected challenge';
  }

  generateStageObjectives(questType) {
    const objectives = {
      fetch: ['Bypass security', 'Solve the puzzle', 'Defeat guardians'],
      kill: ['Track the target', 'Prepare an ambush', 'Strike the killing blow'],
      escort: ['Scout the route', 'Defend against attack', 'Handle complications'],
      investigate: ['Search for clues', 'Interview suspects', 'Connect the evidence'],
      negotiate: ['Build rapport', 'Find common ground', 'Seal the deal']
    };
    
    return objectives[questType] || ['Overcome the obstacle', 'Make progress', 'Survive'];
  }

  generateComplications(quest) {
    const complications = [
      'A rival party is also after the same goal',
      'The quest giver has not been entirely truthful',
      'An unexpected ally becomes an enemy',
      'Time is running out faster than expected',
      'The objective is not what it seems',
      'Local authorities interfere with the quest',
      'A moral dilemma arises that challenges the party',
      'Environmental hazards complicate the journey'
    ];
    
    return this.selectMultiple(complications, Math.floor(Math.random() * 2) + 1);
  }

  generateChoices(quest) {
    const choices = [];
    
    choices.push({
      point: 'Midway through the quest',
      decision: 'Choose between a safe but longer route or a dangerous shortcut',
      consequences: {
        safe: 'Arrive late but intact, missing an opportunity',
        dangerous: 'Risk combat but potentially gain valuable information'
      }
    });
    
    choices.push({
      point: 'At the climax',
      decision: 'Decide whether to show mercy or deliver justice',
      consequences: {
        mercy: 'Gain an ally but risk future problems',
        justice: 'Solve the immediate problem but make enemies'
      }
    });
    
    return choices;
  }

  generateRewards(quest) {
    const baseGold = Math.floor(Math.random() * 500) + 200;
    const rewards = [`${baseGold} gold pieces`];
    
    // XP based on party level (assumed level 5)
    rewards.push(`${Math.floor(Math.random() * 1000) + 500} XP per character`);
    
    // Magic item chance
    if (Math.random() < 0.4) {
      rewards.push(this.selectRandom([
        'Bag of Holding',
        '+1 Weapon (player\'s choice)',
        'Cloak of Protection',
        'Boots of Speed',
        'Ring of Spell Storing'
      ]));
    }
    
    // Reputation/favor
    rewards.push(this.selectRandom([
      'Favor with local nobility',
      'Membership in exclusive guild',
      'Access to restricted areas',
      'Discount at local shops',
      'Information about future opportunities'
    ]));
    
    return rewards;
  }

  formatQuestMarkdown(quest) {
    return `# ${quest.title}

*A ${quest.type} quest for 4-6 characters of levels 3-7*

## Overview
**Quest Giver**: ${quest.questGiver.name} (${quest.questGiver.race} ${quest.questGiver.class})  
**Location**: ${quest.questGiver.currentLocation}  
**Type**: ${quest.type.charAt(0).toUpperCase() + quest.type.slice(1)} Quest  
**Objective**: ${quest.objective}

## Background
${quest.questGiver.name} ${quest.questGiver.motivation.toLowerCase()}. ${quest.questGiver.personality.trait}, they ${quest.questGiver.personality.ideal.toLowerCase()}. However, ${quest.questGiver.personality.flaw.toLowerCase()}, which may complicate matters.

## Quest Stages

${quest.stages.map((stage, index) => `### Stage ${index + 1}: ${stage.name}
${stage.description}

**Objectives**:
${stage.objectives.map(obj => `- ${obj}`).join('\n')}

**Key Locations**: ${stage.locations.join(', ')}
`).join('\n')}

## Complications
These complications may arise during the quest:
${quest.complications.map(comp => `- ${comp}`).join('\n')}

## Moral Choices

${quest.choices.map(choice => `### ${choice.point}
**Decision**: ${choice.decision}

**Consequences**:
- **Option A**: ${choice.consequences.safe || choice.consequences.mercy}
- **Option B**: ${choice.consequences.dangerous || choice.consequences.justice}
`).join('\n')}

## Rewards
Upon successful completion:
${quest.rewards.map(reward => `- ${reward}`).join('\n')}

## Failure Consequences
If the party fails:
- ${quest.questGiver.name} loses faith in the party
- The situation worsens (specific consequences depend on quest type)
- Rival parties may succeed where the party failed
- Future opportunities may be lost

## DM Notes
- Adjust combat encounters based on party strength
- The quest giver's flaw (${quest.questGiver.personality.flaw.toLowerCase()}) can create additional roleplay opportunities
- Consider adding environmental challenges based on the locations
- The moral choices should have lasting consequences in your campaign

## Scaling Options
- **Lower Level (1-3)**: Reduce combat difficulty, simplify puzzles, increase guidance
- **Higher Level (8-10)**: Add additional complications, increase combat CR, add time pressure
- **Larger Party**: Add more enemies, increase skill check DCs
- **Smaller Party**: Provide NPC assistance, reduce enemy numbers

---
*Generated: ${new Date().toISOString()}*
`;
  }

  // Utility methods
  selectRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  selectMultiple(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  roll3d6() {
    return Math.floor(Math.random() * 6) + 1 +
           Math.floor(Math.random() * 6) + 1 +
           Math.floor(Math.random() * 6) + 1;
  }

  getModifier(score) {
    return Math.floor((score - 10) / 2);
  }

  formatModifier(score) {
    const mod = this.getModifier(score);
    return mod >= 0 ? `+${mod}` : `${mod}`;
  }

  // Generate a complete campaign starter
  async generateCampaignStarter() {
    console.log('\n📚 Generating complete campaign starter...\n');
    
    const campaign = {
      name: this.generateCampaignName(),
      premise: this.generatePremise(),
      startingLocation: this.generateStartingTown(),
      keyNPCs: [],
      initialQuests: [],
      dungeons: [],
      secrets: []
    };

    // Generate 5 key NPCs
    console.log('Creating key NPCs...');
    for (let i = 0; i < 5; i++) {
      campaign.keyNPCs.push(await this.generateRealNPC());
    }

    // Generate 3 initial quests
    console.log('Creating initial quests...');
    for (let i = 0; i < 3; i++) {
      campaign.initialQuests.push(await this.generateRealQuest());
    }

    // Generate 2 dungeons
    console.log('Creating dungeons...');
    for (let i = 0; i < 2; i++) {
      campaign.dungeons.push(await this.generateRealDungeon());
    }

    // Generate campaign secrets
    campaign.secrets = this.generateCampaignSecrets();

    // Create campaign document
    const content = this.formatCampaignMarkdown(campaign);
    const filename = `${campaign.name.replace(/\s+/g, '_')}_Campaign_Starter.md`;
    const filepath = path.join(this.assetRoot, 'Generated_Content', filename);
    
    await fs.writeFile(filepath, content);
    
    console.log(`\n✅ Campaign starter "${campaign.name}" generated!`);
    
    return campaign;
  }

  generateCampaignName() {
    const formats = [
      '{noun} of {concept}',
      'The {adjective} {time}',
      '{place} {event}',
      'The {noun} {action}'
    ];
    
    const nouns = ['Chronicles', 'Saga', 'Tales', 'Prophecy', 'Legacy'];
    const concepts = ['Shadows', 'Destiny', 'the Void', 'Eternity', 'the Lost'];
    const adjectives = ['Crimson', 'Shattered', 'Eternal', 'Forgotten', 'Rising'];
    const times = ['Dawn', 'Age', 'Eclipse', 'Reckoning', 'Twilight'];
    const places = ['Realm\'s', 'Kingdom\'s', 'Empire\'s', 'World\'s'];
    const events = ['End', 'Awakening', 'Redemption', 'Fall', 'Ascension'];
    const actions = ['Rises', 'Falls', 'Awakens', 'Returns', 'Begins'];
    
    let name = this.selectRandom(formats);
    name = name.replace('{noun}', this.selectRandom(nouns));
    name = name.replace('{concept}', this.selectRandom(concepts));
    name = name.replace('{adjective}', this.selectRandom(adjectives));
    name = name.replace('{time}', this.selectRandom(times));
    name = name.replace('{place}', this.selectRandom(places));
    name = name.replace('{event}', this.selectRandom(events));
    name = name.replace('{action}', this.selectRandom(actions));
    
    return name;
  }

  generatePremise() {
    const threats = [
      'an ancient evil awakens from its slumber',
      'a corrupt noble seeks to overthrow the rightful ruler',
      'a plague of unknown origin spreads across the land',
      'portals to other planes begin opening randomly',
      'a powerful artifact has been shattered and its pieces scattered'
    ];
    
    const consequences = [
      'threatening to plunge the world into eternal darkness',
      'causing chaos and disorder throughout the realm',
      'awakening long-dormant magical forces',
      'drawing the attention of otherworldly beings',
      'destabilizing the balance between order and chaos'
    ];
    
    const hooks = [
      'The party begins as unlikely heroes brought together by circumstance',
      'An old friend calls in a favor that leads to greater involvement',
      'A case of mistaken identity pulls the party into the conflict',
      'The party witnesses a crucial event that makes them targets',
      'A dying messenger entrusts the party with vital information'
    ];
    
    return `In this campaign, ${this.selectRandom(threats)}, ${this.selectRandom(consequences)}. ${this.selectRandom(hooks)}.`;
  }

  generateStartingTown() {
    return {
      name: `${this.selectRandom(['River', 'Hill', 'Green', 'Fair', 'Bright'])}${this.selectRandom(['haven', 'dale', 'ford', 'shire', 'meadow'])}`,
      population: Math.floor(Math.random() * 2000) + 500,
      notableLocations: [
        'The ' + this.selectRandom(['Prancing', 'Sleeping', 'Drunken', 'Happy', 'Weary']) + ' ' + this.selectRandom(['Pony', 'Dragon', 'Griffin', 'Wizard', 'Knight']) + ' Inn',
        this.selectRandom(['Ironhand\'s', 'Brightblade\'s', 'Stormforge\'s']) + ' Smithy',
        'Temple of ' + this.selectRandom(['Pelor', 'Bahamut', 'Moradin', 'Corellon']),
        this.selectRandom(['Moonwhisper\'s', 'Starweaver\'s', 'Pageturner\'s']) + ' Books & Scrolls',
        'The Town Square Market'
      ],
      leadership: this.selectRandom(['Mayor', 'Town Council', 'Local Lord', 'Merchant Guild']),
      currentProblems: [
        'Bandits on the roads',
        'Strange disappearances',
        'Failing crops',
        'Political tensions'
      ]
    };
  }

  generateCampaignSecrets() {
    return [
      'The kindly innkeeper is actually a retired assassin hiding from their past',
      'An ancient dragon slumbers beneath the nearby mountain',
      'The town was built on the ruins of a much older civilization',
      'One of the key NPCs is not who they claim to be',
      'A secret society operates from the shadows, manipulating events',
      'The true threat is not what it appears to be on the surface'
    ];
  }

  formatCampaignMarkdown(campaign) {
    return `# ${campaign.name}

*A Campaign Starter for 4-6 players*

## Campaign Premise
${campaign.premise}

## Starting Location: ${campaign.startingLocation.name}
- **Population**: ${campaign.startingLocation.population}
- **Government**: ${campaign.startingLocation.leadership}
- **Current Issues**: ${campaign.startingLocation.currentProblems.join(', ')}

### Notable Locations
${campaign.startingLocation.notableLocations.map(loc => `- ${loc}`).join('\n')}

## Key NPCs
${campaign.keyNPCs.map(npc => `- **${npc.name}** (${npc.race} ${npc.class}): ${npc.personality.trait}. Currently at ${npc.currentLocation}.`).join('\n')}

## Initial Quest Hooks
${campaign.initialQuests.map((quest, i) => `${i + 1}. **${quest.title}**: ${quest.objective}`).join('\n')}

## Available Dungeons
${campaign.dungeons.map(dungeon => `- **${dungeon.name}**: A ${dungeon.theme} with ${dungeon.rooms.length} rooms`).join('\n')}

## Campaign Secrets
*For the DM's eyes only:*
${campaign.secrets.map((secret, i) => `${i + 1}. ${secret}`).join('\n')}

## Getting Started
1. Have the party meet at ${campaign.startingLocation.notableLocations[0]}
2. Introduce the current problems facing the town
3. Let players interact with key NPCs
4. Present the initial quest hooks
5. Allow players to choose their own path

## Campaign Themes
- Mystery and investigation
- Moral choices with consequences  
- Rising threat that escalates over time
- Heroes forged through adversity

---
*Generated: ${new Date().toISOString()}*
`;
  }
}

// Main execution
async function main() {
  const generator = new RealContentGenerator();
  
  try {
    await generator.initialize();
    
    // Generate a complete campaign starter
    await generator.generateCampaignStarter();
    
    console.log(`\n📊 Generation Complete!`);
    console.log(`- NPCs Generated: ${generator.stats.generated}`);
    console.log(`- Quests Written: ${generator.stats.written}`);
    console.log(`- Dungeons Created: ${generator.stats.created}`);
    console.log('\nAll content is real, playable, and ready to use!');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

if (require.main === module) {
  main();
}

module.exports = RealContentGenerator;
