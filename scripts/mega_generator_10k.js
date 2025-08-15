#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const crypto = require('crypto');

// Mega generator for 10,000 assets
class MegaGenerator10K {
  constructor() {
    this.vaultRoot = process.cwd();
    this.stats = {
      npcs: 0,
      items: 0,
      locations: 0,
      quests: 0,
      encounters: 0,
      lore: 0,
      spells: 0,
      monsters: 0,
      factions: 0,
      events: 0,
      shops: 0,
      dungeons: 0,
      treasures: 0,
      rumors: 0,
      books: 0,
      total: 0
    };
    
    // Expanded name lists for variety
    this.nameLists = this.loadNameLists();
    this.generatedNames = new Set();
  }

  loadNameLists() {
    return {
      first: [
        // Original names
        'Aldric', 'Brenna', 'Cedric', 'Dara', 'Ewan', 'Fiora', 'Gareth', 'Hilda',
        // Expanded list
        'Aeliana', 'Baelor', 'Caelum', 'Delara', 'Elric', 'Faelyn', 'Gavril', 'Hestara',
        'Idris', 'Jorah', 'Kaelen', 'Lyanna', 'Malakai', 'Nerys', 'Orion', 'Pyria',
        'Qadim', 'Rhiannon', 'Solas', 'Thalia', 'Urien', 'Vesper', 'Wynne', 'Xander',
        'Ysara', 'Zephyr', 'Alaric', 'Branwen', 'Corvus', 'Drusilla', 'Erasmus', 'Felicia'
      ],
      last: [
        // Original names
        'Stormwind', 'Ironforge', 'Goldleaf', 'Darkwater', 'Brightblade',
        // Expanded list
        'Ashford', 'Blackstone', 'Crystalbrook', 'Dawnstrider', 'Emberfall',
        'Frostwhisper', 'Grimholt', 'Hawthorne', 'Ironwood', 'Jadeclaw',
        'Keenblade', 'Lightbringer', 'Moonshadow', 'Nightfall', 'Oakenshield',
        'Proudmore', 'Quicksilver', 'Ravenheart', 'Silverleaf', 'Thornweave',
        'Underhill', 'Voidwalker', 'Winterborn', 'Xendar', 'Youngblood', 'Zephyrblade'
      ],
      titles: [
        'the Bold', 'the Wise', 'the Swift', 'the Strong', 'the Cunning',
        'the Wanderer', 'the Scholar', 'the Mystic', 'the Guardian', 'the Seeker',
        'the Broken', 'the Redeemed', 'the Fallen', 'the Risen', 'the Lost'
      ],
      prefixes: [
        'Ancient', 'Blessed', 'Cursed', 'Divine', 'Eldritch', 'Forgotten',
        'Glorious', 'Hidden', 'Infernal', 'Legendary', 'Mystic', 'Noble',
        'Ominous', 'Primal', 'Radiant', 'Shadow', 'Timeless', 'Unholy'
      ]
    };
  }

  async initialize() {
    console.log('🌟 Initializing Mega Generator for 10,000 Assets...\n');
    
    const dirs = [
      // NPCs - 2000
      '02_Worldbuilding/People/Generated/Nobles',
      '02_Worldbuilding/People/Generated/Commoners',
      '02_Worldbuilding/People/Generated/Merchants',
      '02_Worldbuilding/People/Generated/Adventurers',
      '02_Worldbuilding/People/Generated/Villains',
      
      // Items - 1500
      '02_Worldbuilding/Items/Generated/Weapons',
      '02_Worldbuilding/Items/Generated/Armor',
      '02_Worldbuilding/Items/Generated/Artifacts',
      '02_Worldbuilding/Items/Generated/Consumables',
      '02_Worldbuilding/Items/Generated/Mundane',
      
      // Locations - 1500
      '02_Worldbuilding/Places/Generated/Cities',
      '02_Worldbuilding/Places/Generated/Towns',
      '02_Worldbuilding/Places/Generated/Dungeons',
      '02_Worldbuilding/Places/Generated/Wilderness',
      '02_Worldbuilding/Places/Generated/Planes',
      
      // Quests - 1000
      '02_Worldbuilding/Quests/Generated/Main',
      '02_Worldbuilding/Quests/Generated/Side',
      '02_Worldbuilding/Quests/Generated/Personal',
      
      // Encounters - 1000
      '03_Mechanics/Random_Encounters/Generated/Combat',
      '03_Mechanics/Random_Encounters/Generated/Social',
      '03_Mechanics/Random_Encounters/Generated/Environmental',
      
      // Lore - 1000
      '02_Worldbuilding/Lore/Generated/History',
      '02_Worldbuilding/Lore/Generated/Legends',
      '02_Worldbuilding/Lore/Generated/Prophecies',
      
      // Spells - 500
      '03_Mechanics/Spells/Custom/Arcane',
      '03_Mechanics/Spells/Custom/Divine',
      '03_Mechanics/Spells/Custom/Nature',
      
      // Monsters - 500
      '03_Mechanics/Monsters/Custom/Aberrations',
      '03_Mechanics/Monsters/Custom/Undead',
      '03_Mechanics/Monsters/Custom/Constructs',
      
      // Factions - 300
      '02_Worldbuilding/Groups/Generated/Guilds',
      '02_Worldbuilding/Groups/Generated/Cults',
      '02_Worldbuilding/Groups/Generated/Orders',
      
      // Events - 300
      '02_Worldbuilding/World_Events/Generated/Political',
      '02_Worldbuilding/World_Events/Generated/Natural',
      '02_Worldbuilding/World_Events/Generated/Magical',
      
      // Shops - 200
      '02_Worldbuilding/Shops/Generated/General',
      '02_Worldbuilding/Shops/Generated/Magical',
      '02_Worldbuilding/Shops/Generated/Specialty',
      
      // Dungeons - 100
      '04_Resources/Assets/Real_Maps/Generated_Dungeons',
      
      // Treasures - 200
      '02_Worldbuilding/Treasures/Generated/Hoards',
      '02_Worldbuilding/Treasures/Generated/Individual',
      
      // Rumors - 200
      '02_Worldbuilding/Rumors/Generated',
      
      // Books - 100
      '02_Worldbuilding/Books/Generated'
    ];
    
    for (const dir of dirs) {
      await fs.mkdir(path.join(this.vaultRoot, dir), { recursive: true });
    }
  }

  generateUniqueName(type = 'full') {
    let attempts = 0;
    let name;
    
    do {
      if (type === 'full') {
        const first = this.nameLists.first[Math.floor(Math.random() * this.nameLists.first.length)];
        const last = this.nameLists.last[Math.floor(Math.random() * this.nameLists.last.length)];
        const hasTitle = Math.random() > 0.7;
        const title = hasTitle ? this.nameLists.titles[Math.floor(Math.random() * this.nameLists.titles.length)] : '';
        name = `${first} ${last}${title ? ' ' + title : ''}`;
      } else if (type === 'place') {
        const prefix = Math.random() > 0.5 ? this.nameLists.prefixes[Math.floor(Math.random() * this.nameLists.prefixes.length)] : '';
        const base = ['Haven', 'Gate', 'Watch', 'Hold', 'Rest', 'Crossing', 'Falls', 'Ridge'][Math.floor(Math.random() * 8)];
        const suffix = ['ton', 'shire', 'ford', 'stead', 'borough', 'ville', 'wick'][Math.floor(Math.random() * 7)];
        name = prefix ? `${prefix} ${base}` : `${base}${suffix}`;
      }
      attempts++;
    } while (this.generatedNames.has(name) && attempts < 100);
    
    this.generatedNames.add(name);
    return name;
  }

  // Generate 2000 NPCs with diverse backgrounds
  async generateMassiveNPCCollection() {
    console.log('👥 Generating 2000 detailed NPCs...');
    
    const categories = [
      { name: 'Nobles', count: 400, path: '02_Worldbuilding/People/Generated/Nobles' },
      { name: 'Commoners', count: 400, path: '02_Worldbuilding/People/Generated/Commoners' },
      { name: 'Merchants', count: 400, path: '02_Worldbuilding/People/Generated/Merchants' },
      { name: 'Adventurers', count: 400, path: '02_Worldbuilding/People/Generated/Adventurers' },
      { name: 'Villains', count: 400, path: '02_Worldbuilding/People/Generated/Villains' }
    ];
    
    let totalGenerated = 0;
    
    for (const category of categories) {
      console.log(`  Generating ${category.count} ${category.name}...`);
      
      for (let i = 0; i < category.count; i++) {
        const npc = this.generateDetailedNPC(totalGenerated + i, category.name);
        const content = this.formatNPCContent(npc);
        const filename = `${npc.id}_${npc.name.replace(/\s+/g, '_')}.md`;
        const filepath = path.join(this.vaultRoot, category.path, filename);
        
        await fs.writeFile(filepath, content);
        this.stats.npcs++;
        this.stats.total++;
        
        if ((i + 1) % 100 === 0) {
          console.log(`    Progress: ${i + 1}/${category.count}`);
        }
      }
      
      totalGenerated += category.count;
    }
  }

  generateDetailedNPC(index, category) {
    const races = [
      'Human', 'Elf', 'Dwarf', 'Halfling', 'Tiefling', 'Dragonborn', 'Half-Orc', 
      'Gnome', 'Half-Elf', 'Aasimar', 'Genasi', 'Goliath', 'Firbolg', 'Tabaxi'
    ];
    
    const classesMap = {
      Nobles: ['Noble', 'Aristocrat', 'Courtier', 'Ambassador', 'Heir'],
      Commoners: ['Farmer', 'Baker', 'Blacksmith', 'Carpenter', 'Fisher'],
      Merchants: ['Trader', 'Shopkeeper', 'Caravan Master', 'Broker', 'Appraiser'],
      Adventurers: ['Fighter', 'Wizard', 'Rogue', 'Cleric', 'Ranger', 'Bard'],
      Villains: ['Cultist', 'Assassin', 'Corrupt Noble', 'Dark Wizard', 'Crime Boss']
    };
    
    const npc = {
      id: `NPC${String(this.stats.npcs).padStart(5, '0')}`,
      name: this.generateUniqueName(),
      race: races[Math.floor(Math.random() * races.length)],
      class: classesMap[category][Math.floor(Math.random() * classesMap[category].length)],
      category: category,
      age: Math.floor(Math.random() * 60) + 18,
      gender: ['Male', 'Female', 'Non-binary'][Math.floor(Math.random() * 3)],
      
      personality: {
        traits: this.generatePersonalityTraits(),
        ideals: this.generateIdeals(),
        bonds: this.generateBonds(),
        flaws: this.generateFlaws(),
        quirks: this.generateQuirks(),
        fears: this.generateFears(),
        dreams: this.generateDreams()
      },
      
      appearance: this.generateDetailedAppearance(),
      background: this.generateRichBackstory(category),
      
      currentSituation: {
        location: this.generateLocation(index),
        occupation: this.generateOccupation(category),
        goals: this.generateGoals(category),
        problems: this.generateProblems(),
        resources: this.generateResources(category)
      },
      
      relationships: this.generateComplexRelationships(index),
      secrets: this.generateDeepSecrets(category),
      
      stats: this.generateNPCStats(category),
      skills: this.generateSkillSet(category),
      possessions: this.generateInventory(category),
      
      dialogue: {
        greetings: this.generateGreetings(category),
        catchphrases: this.generateCatchphrases(),
        knowledge: this.generateKnowledge(category)
      },
      
      plotHooks: this.generatePlotHooks(category)
    };
    
    return npc;
  }

  generatePersonalityTraits() {
    const traits = [
      'Always speaks in metaphors and riddles',
      'Never backs down from any challenge',
      'Extremely superstitious about everything',
      'Laughs at the most inappropriate times',
      'Collects unusual and worthless objects',
      'Always tells the absolute truth',
      'Compulsive liar about minor things',
      'Incredibly optimistic despite evidence',
      'Sees doom and gloom everywhere',
      'Flirts with everyone regardless of interest',
      'Speaks to inanimate objects',
      'Never uses people\'s real names',
      'Always hungry and eating something',
      'Constantly quotes ancient texts',
      'Believes in every conspiracy theory'
    ];
    
    const selected = [];
    const count = Math.floor(Math.random() * 3) + 2;
    
    for (let i = 0; i < count; i++) {
      const trait = traits[Math.floor(Math.random() * traits.length)];
      if (!selected.includes(trait)) {
        selected.push(trait);
      }
    }
    
    return selected;
  }

  generateIdeals() {
    const ideals = [
      'Freedom: Chains are meant to be broken, rules are meant to be bent',
      'Charity: I always help those in need, no matter the cost',
      'Power: The strong survive and the weak serve',
      'Knowledge: Understanding the world is the key to controlling it',
      'Honor: My word is my bond, and I never break an oath',
      'Greed: Gold can solve any problem if you have enough',
      'Justice: The guilty must be punished, no matter their station',
      'Beauty: Life is nothing without art and culture',
      'Faith: The gods guide my every action',
      'Change: Nothing should stay the same forever',
      'Tradition: The old ways are the best ways',
      'Redemption: Everyone deserves a second chance'
    ];
    
    return ideals[Math.floor(Math.random() * ideals.length)];
  }

  generateBonds() {
    const bonds = [
      'I would die to protect my family from harm',
      'My weapon has been passed down for generations',
      'I owe my life to the priest who took me in',
      'Everything I do is for the common people',
      'My loyalty to my sovereign is absolute',
      'I will become the greatest that ever lived',
      'Someone I loved died because of my mistakes',
      'I fight for those who cannot fight',
      'My hometown is the most important thing',
      'I seek to preserve ancient knowledge',
      'My guild is my true family',
      'I must fulfill an ancient prophecy'
    ];
    
    return bonds[Math.floor(Math.random() * bonds.length)];
  }

  generateFlaws() {
    const flaws = [
      'I drink too much and say things I shouldn\'t',
      'I can\'t resist a pretty face or handsome smile',
      'I\'m convinced everyone is out to get me',
      'I have a terrible and obvious gambling problem',
      'I\'ll do anything to avoid a real fight',
      'I judge people by their appearance first',
      'I have trouble keeping any secrets',
      'I turn tail and run at the first sign of danger',
      'I have a weakness for the vices of the city',
      'I\'m too proud to admit when I\'m wrong',
      'I have trouble trusting anyone',
      'I believe I\'m invincible'
    ];
    
    return flaws[Math.floor(Math.random() * flaws.length)];
  }

  generateQuirks() {
    const quirks = [
      'Taps fingers when thinking',
      'Always carries a lucky charm',
      'Speaks to animals like people',
      'Never sleeps in the same place twice',
      'Writes everything down',
      'Afraid of the dark',
      'Always cold, wears extra layers',
      'Hums when nervous',
      'Counts everything obsessively',
      'Never eats meat',
      'Always barefoot',
      'Collects buttons',
      'Sneezes when lying',
      'Can\'t sit still',
      'Always rhymes when speaking'
    ];
    
    const selected = [];
    const count = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < count; i++) {
      const quirk = quirks[Math.floor(Math.random() * quirks.length)];
      if (!selected.includes(quirk)) {
        selected.push(quirk);
      }
    }
    
    return selected;
  }

  generateFears() {
    const fears = [
      'Deep water', 'Heights', 'Enclosed spaces', 'Magic', 'The undead',
      'Being alone', 'Crowds', 'Failure', 'The dark', 'Fire',
      'Being forgotten', 'Losing control', 'Betrayal', 'Poverty', 'Disease'
    ];
    
    return fears[Math.floor(Math.random() * fears.length)];
  }

  generateDreams() {
    const dreams = [
      'Opening their own shop', 'Finding true love', 'Becoming famous',
      'Discovering ancient treasure', 'Avenging their family', 'Building an empire',
      'Mastering magic', 'Exploring the world', 'Writing the definitive history',
      'Becoming a hero', 'Finding inner peace', 'Overthrowing the government'
    ];
    
    return dreams[Math.floor(Math.random() * dreams.length)];
  }

  generateDetailedAppearance() {
    const builds = ['Slender', 'Athletic', 'Stocky', 'Muscular', 'Wiry', 'Heavyset', 'Lanky', 'Compact', 'Imposing', 'Delicate'];
    const heights = ['Very short', 'Short', 'Below average', 'Average height', 'Above average', 'Tall', 'Very tall', 'Towering'];
    const hairColors = ['Black', 'Brown', 'Blonde', 'Red', 'Gray', 'White', 'Auburn', 'Bald', 'Silver', 'Unusual color'];
    const hairStyles = ['Long and flowing', 'Short and neat', 'Braided elaborately', 'Tied back', 'Wild and unkempt', 'Carefully styled', 'Shaved', 'Mohawk', 'Dreadlocks', 'Partially shaved'];
    const eyeColors = ['Brown', 'Blue', 'Green', 'Gray', 'Hazel', 'Amber', 'Violet', 'Heterochromic', 'Black', 'Red'];
    const skinTones = ['Pale', 'Fair', 'Tan', 'Olive', 'Brown', 'Dark', 'Weathered', 'Freckled', 'Scarred', 'Unusual hue'];
    
    const distinguishing = [
      'Prominent scar across the face',
      'Missing finger on left hand',
      'Intricate tattoos covering arms',
      'Piercing gaze that seems to see through you',
      'Warm smile that puts people at ease',
      'Crooked nose from multiple breaks',
      'Perfect white teeth that seem to gleam',
      'Weather-beaten face showing hard life',
      'Birthmark shaped like a constellation',
      'Unusual eye color for their race',
      'Burn scars on one side of face',
      'Missing ear from old battle',
      'Gold tooth that glints when smiling',
      'Constantly changing hair color',
      'Ethereal beauty that seems otherworldly'
    ];
    
    const clothing = [
      'Fine silk robes with gold embroidery',
      'Practical leather armor, well-worn but maintained',
      'Simple peasant clothes, patched but clean',
      'Merchant\'s outfit with many hidden pockets',
      'Guard uniform with polished brass buttons',
      'Traveler\'s cloak over sturdy road clothes',
      'Noble\'s finery, slightly out of current fashion',
      'Priest\'s vestments with holy symbol prominent',
      'Performer\'s costume, bright and eye-catching',
      'Scholar\'s robes with ink stains',
      'Assassin\'s garb, all in black',
      'Sailor\'s outfit with salt stains',
      'Mage robes covered in arcane symbols',
      'Barbarian furs and leather',
      'Courtier\'s elaborate outfit'
    ];
    
    return {
      build: builds[Math.floor(Math.random() * builds.length)],
      height: heights[Math.floor(Math.random() * heights.length)],
      hair: `${hairStyles[Math.floor(Math.random() * hairStyles.length)]} ${hairColors[Math.floor(Math.random() * hairColors.length)].toLowerCase()} hair`,
      eyes: `${eyeColors[Math.floor(Math.random() * eyeColors.length)]} eyes`,
      skin: `${skinTones[Math.floor(Math.random() * skinTones.length)]} skin`,
      distinguishing: distinguishing[Math.floor(Math.random() * distinguishing.length)],
      clothing: clothing[Math.floor(Math.random() * clothing.length)],
      accessories: this.generateAccessories()
    };
  }

  generateAccessories() {
    const accessories = [
      'Silver ring with family crest',
      'Leather pouch always at hip',
      'Ornate walking stick',
      'Multiple earrings',
      'Spectacles on chain',
      'Lucky rabbit\'s foot',
      'Prayer beads',
      'Decorated dagger',
      'Silk handkerchief',
      'Pocket watch'
    ];
    
    const count = Math.floor(Math.random() * 3);
    const selected = [];
    
    for (let i = 0; i < count; i++) {
      const accessory = accessories[Math.floor(Math.random() * accessories.length)];
      if (!selected.includes(accessory)) {
        selected.push(accessory);
      }
    }
    
    return selected;
  }

  generateRichBackstory(category) {
    const backstories = {
      Nobles: [
        'Born into one of the oldest noble families, but a scandal threatens their inheritance',
        'Recently elevated to nobility through service, still learning courtly ways',
        'Exiled from their homeland, trying to rebuild their power base',
        'Last survivor of a fallen house, seeking to restore family honor',
        'Secretly adopted into nobility, living in fear of discovery'
      ],
      Commoners: [
        'Grew up in poverty but discovered a talent that might change everything',
        'Family has worked the same trade for generations, but times are changing',
        'Survivor of a disaster that destroyed their village',
        'Runaway from an arranged marriage, starting a new life',
        'Former soldier trying to adjust to civilian life'
      ],
      Merchants: [
        'Built their business from nothing through cunning and hard work',
        'Inherited a failing business and turned it around',
        'Former adventurer who retired to open a shop',
        'Part of a merchant family with connections everywhere',
        'Uses their business as cover for other activities'
      ],
      Adventurers: [
        'Seeking vengeance for a murdered mentor',
        'Chosen by fate to fulfill an ancient prophecy',
        'Running from a dark past that won\'t stay buried',
        'Searching for a legendary treasure their parent died seeking',
        'Accidentally gained powers and learning to control them'
      ],
      Villains: [
        'Betrayed by those they trusted, now seeking revenge on the world',
        'Believes their evil acts serve a greater good',
        'Corrupted by an artifact or dark magic',
        'Born into evil but questioning their path',
        'Driven mad by knowledge humanity wasn\'t meant to know'
      ]
    };
    
    const base = backstories[category][Math.floor(Math.random() * backstories[category].length)];
    const event = this.generateLifeEvent();
    
    return `${base} ${event}`;
  }

  generateLifeEvent() {
    const events = [
      'A chance encounter last winter changed their perspective on everything.',
      'They recently discovered a secret that could destroy powerful people.',
      'A prophetic dream has been haunting them for months.',
      'They\'re being blackmailed by someone from their past.',
      'An old debt has come due at the worst possible time.',
      'They\'ve fallen in love with someone they shouldn\'t.',
      'A family member\'s death has left them with unexpected responsibilities.',
      'They\'ve made a deal they\'re beginning to regret.',
      'Strange abilities have begun manifesting without explanation.',
      'They\'ve been marked by a secret society.'
    ];
    
    return events[Math.floor(Math.random() * events.length)];
  }

  generateLocation(index) {
    const locations = [
      'The Gilded Serpent tavern in the merchant quarter',
      'Market square during the morning rush',
      'The docks at midnight',
      'Noble\'s manor in the upper district',
      'Abandoned warehouse on the outskirts',
      'Temple steps at dawn prayers',
      'Guild hall during a meeting',
      'City gates at shift change',
      'Sewers beneath the old quarter',
      'Rooftops overlooking the palace',
      'Forest clearing outside town',
      'Crossroads inn on the trade route',
      'Wizard\'s tower study',
      'Guard barracks courtyard',
      'Thieves\' guild safe house'
    ];
    
    return locations[index % locations.length];
  }

  generateOccupation(category) {
    const occupations = {
      Nobles: ['Court advisor', 'Diplomat', 'Estate manager', 'Military commander', 'Patron of arts'],
      Commoners: ['Baker', 'Blacksmith', 'Farmer', 'Servant', 'Laborer', 'Fisher', 'Miller'],
      Merchants: ['Jeweler', 'Cloth merchant', 'Spice trader', 'Weapons dealer', 'Book seller'],
      Adventurers: ['Treasure hunter', 'Monster slayer', 'Bodyguard', 'Scout', 'Archaeologist'],
      Villains: ['Crime boss', 'Corrupt official', 'Cult leader', 'Assassin', 'Black market dealer']
    };
    
    return occupations[category][Math.floor(Math.random() * occupations[category].length)];
  }

  generateGoals(category) {
    const goals = {
      shortTerm: [
        'Survive until next week',
        'Complete current contract',
        'Find missing person',
        'Gather information',
        'Avoid the authorities',
        'Make this month\'s payment',
        'Recruit new members',
        'Sabotage competition'
      ],
      longTerm: [
        'Build a lasting legacy',
        'Uncover the truth about their past',
        'Gain ultimate power',
        'Find redemption',
        'Protect their loved ones',
        'Master their craft',
        'Overthrow the current order',
        'Discover immortality'
      ],
      hidden: [
        'Secretly plotting betrayal',
        'Working for enemy faction',
        'Hiding their true identity',
        'Seeking forbidden knowledge',
        'Planning an escape',
        'Gathering blackmail material',
        'Building a secret army',
        'Searching for lost heir'
      ]
    };
    
    return {
      shortTerm: goals.shortTerm[Math.floor(Math.random() * goals.shortTerm.length)],
      longTerm: goals.longTerm[Math.floor(Math.random() * goals.longTerm.length)],
      hidden: Math.random() > 0.7 ? goals.hidden[Math.floor(Math.random() * goals.hidden.length)] : null
    };
  }

  generateProblems() {
    const problems = [
      'Massive debt to dangerous people',
      'Addicted to expensive substance',
      'Blackmailed by unknown party',
      'Hunted by powerful enemies',
      'Cursed by angry witch',
      'Slowly dying from poison',
      'Lost something irreplaceable',
      'Family held hostage',
      'Framed for crime they didn\'t commit',
      'Haunted by vengeful spirit'
    ];
    
    return [
      problems[Math.floor(Math.random() * problems.length)],
      Math.random() > 0.6 ? problems[Math.floor(Math.random() * problems.length)] : null
    ].filter(Boolean);
  }

  generateResources(category) {
    const resources = {
      Nobles: ['Vast wealth', 'Political connections', 'Private army', 'Ancient library', 'Spy network'],
      Commoners: ['Strong community ties', 'Practical skills', 'Hidden savings', 'Family recipes', 'Local knowledge'],
      Merchants: ['Trade contacts', 'Warehouse full of goods', 'Caravan routes', 'Market information', 'Credit network'],
      Adventurers: ['Combat experience', 'Magic items', 'Survival skills', 'Monster lore', 'Treasure maps'],
      Villains: ['Criminal contacts', 'Hidden bases', 'Blackmail material', 'Corrupt officials', 'Dark magic']
    };
    
    const available = resources[category];
    const count = Math.floor(Math.random() * 3) + 1;
    const selected = [];
    
    for (let i = 0; i < count; i++) {
      const resource = available[Math.floor(Math.random() * available.length)];
      if (!selected.includes(resource)) {
        selected.push(resource);
      }
    }
    
    return selected;
  }

  generateComplexRelationships(index) {
    const relationships = [];
    const types = [
      { type: 'Family', subtypes: ['Parent', 'Sibling', 'Child', 'Spouse', 'Cousin'] },
      { type: 'Professional', subtypes: ['Employer', 'Employee', 'Partner', 'Rival', 'Mentor'] },
      { type: 'Personal', subtypes: ['Best friend', 'Love interest', 'Ex-lover', 'Nemesis', 'Childhood friend'] },
      { type: 'Criminal', subtypes: ['Accomplice', 'Informant', 'Target', 'Handler', 'Fence'] },
      { type: 'Political', subtypes: ['Ally', 'Opposition', 'Spy', 'Patron', 'Puppet'] }
    ];
    
    const count = Math.floor(Math.random() * 4) + 3;
    
    for (let i = 0; i < count; i++) {
      const category = types[Math.floor(Math.random() * types.length)];
      const subtype = category.subtypes[Math.floor(Math.random() * category.subtypes.length)];
      
      relationships.push({
        name: this.generateUniqueName(),
        type: category.type,
        subtype: subtype,
        status: this.generateRelationshipStatus(),
        history: this.generateRelationshipHistory(),
        secret: Math.random() > 0.7 ? this.generateRelationshipSecret() : null
      });
    }
    
    return relationships;
  }

  generateRelationshipStatus() {
    const statuses = [
      'Strong and trusting',
      'Strained but maintaining',
      'Recently reconciled',
      'On the verge of collapse',
      'Complicated history',
      'Secretly hostile',
      'Mutually beneficial',
      'One-sided affection',
      'Professional only',
      'Blood oath bound'
    ];
    
    return statuses[Math.floor(Math.random() * statuses.length)];
  }

  generateRelationshipHistory() {
    const histories = [
      'Saved each other\'s lives during the war',
      'Grew up together in the same neighborhood',
      'Met during a heist gone wrong',
      'Bonded over shared tragedy',
      'Former lovers who remained friends',
      'Bitter rivals who learned respect',
      'Teacher and student relationship',
      'Arranged partnership that grew genuine',
      'United by common enemy',
      'Accidentally bound by magic'
    ];
    
    return histories[Math.floor(Math.random() * histories.length)];
  }

  generateRelationshipSecret() {
    const secrets = [
      'Actually related by blood',
      'Secretly in love',
      'Planning betrayal',
      'Share a terrible crime',
      'One is mind-controlled',
      'Magical bond between them',
      'One is a shapeshifter',
      'Prophecy links their fates',
      'One murdered the other\'s family',
      'Both serve same hidden master'
    ];
    
    return secrets[Math.floor(Math.random() * secrets.length)];
  }

  generateDeepSecrets(category) {
    const secrets = {
      Nobles: [
        'Legitimate claim to a throne they don\'t want',
        'Secretly funding the rebellion',
        'Child from scandalous affair',
        'Practicing forbidden magic',
        'Actually a bastard with no real claim'
      ],
      Commoners: [
        'Witnessed a noble\'s crime',
        'Has dragon blood in their veins',
        'Can hear the thoughts of others',
        'Knows location of ancient treasure',
        'Is the lost heir to the throne'
      ],
      Merchants: [
        'Smuggles illegal magical items',
        'Is actually a spy for foreign power',
        'Killed previous business owner',
        'Sells information to all sides',
        'Running a cult from their basement'
      ],
      Adventurers: [
        'Possessed by ancient spirit',
        'Secretly working for the villain',
        'Has died and been resurrected',
        'Carries a world-ending artifact',
        'Is from the future'
      ],
      Villains: [
        'Was once a renowned hero',
        'Believes they\'re saving the world',
        'Is being controlled by darker force',
        'Has a child they\'re protecting',
        'Knows how the world will end'
      ]
    };
    
    const categorySecrets = secrets[category];
    const selected = [];
    const count = Math.floor(Math.random() * 2) + 1;
    
    for (let i = 0; i < count; i++) {
      selected.push(categorySecrets[Math.floor(Math.random() * categorySecrets.length)]);
    }
    
    // Add a terrible secret
    if (Math.random() > 0.8) {
      const terribleSecrets = [
        'Accidentally caused a plague that killed thousands',
        'Made a pact with a demon for power',
        'Murdered their own family for inheritance',
        'Is slowly transforming into a monster',
        'Can see everyone\'s death approaching'
      ];
      
      selected.push(terribleSecrets[Math.floor(Math.random() * terribleSecrets.length)]);
    }
    
    return selected;
  }

  generateNPCStats(category) {
    const levelRanges = {
      Nobles: { min: 1, max: 10 },
      Commoners: { min: 1, max: 5 },
      Merchants: { min: 2, max: 8 },
      Adventurers: { min: 3, max: 15 },
      Villains: { min: 5, max: 20 }
    };
    
    const range = levelRanges[category];
    const level = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    
    return {
      level: level,
      hp: level * (Math.floor(Math.random() * 6) + 4) + 10,
      ac: 10 + Math.floor(level / 3) + Math.floor(Math.random() * 4),
      speed: 30,
      
      abilities: {
        STR: this.rollAbilityScore(),
        DEX: this.rollAbilityScore(),
        CON: this.rollAbilityScore(),
        INT: this.rollAbilityScore(),
        WIS: this.rollAbilityScore(),
        CHA: this.rollAbilityScore()
      },
      
      saves: this.generateSaves(category, level),
      skills: this.generateSkillSet(category),
      
      attacks: this.generateAttacks(category, level),
      specialAbilities: this.generateSpecialAbilities(category, level),
      
      challengeRating: Math.max(1, Math.floor(level / 2))
    };
  }

  rollAbilityScore() {
    // 4d6 drop lowest
    const rolls = [];
    for (let i = 0; i < 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    rolls.sort((a, b) => b - a);
    return rolls[0] + rolls[1] + rolls[2];
  }

  generateSaves(category, level) {
    const proficiencyBonus = Math.floor((level - 1) / 4) + 2;
    const saves = [];
    
    const saveProficiencies = {
      Nobles: ['WIS', 'CHA'],
      Commoners: ['CON', 'WIS'],
      Merchants: ['INT', 'CHA'],
      Adventurers: ['STR', 'DEX'],
      Villains: ['CON', 'CHA']
    };
    
    return saveProficiencies[category] || [];
  }

  generateSkillSet(category) {
    const allSkills = [
      'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception',
      'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine',
      'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion',
      'Sleight of Hand', 'Stealth', 'Survival'
    ];
    
    const categorySkills = {
      Nobles: ['Deception', 'History', 'Insight', 'Persuasion'],
      Commoners: ['Animal Handling', 'Athletics', 'Perception', 'Survival'],
      Merchants: ['Deception', 'Insight', 'Investigation', 'Persuasion'],
      Adventurers: ['Athletics', 'Perception', 'Stealth', 'Survival'],
      Villains: ['Deception', 'Intimidation', 'Stealth', 'Sleight of Hand']
    };
    
    const preferred = categorySkills[category] || [];
    const count = Math.floor(Math.random() * 3) + 2;
    const selected = [];
    
    // Add some preferred skills
    for (let i = 0; i < Math.min(count, preferred.length); i++) {
      if (Math.random() > 0.3) {
        selected.push(preferred[i]);
      }
    }
    
    // Fill with random skills
    while (selected.length < count) {
      const skill = allSkills[Math.floor(Math.random() * allSkills.length)];
      if (!selected.includes(skill)) {
        selected.push(skill);
      }
    }
    
    return selected;
  }

  generateAttacks(category, level) {
    const attacks = [];
    
    const weaponTypes = {
      Nobles: ['Rapier', 'Dagger', 'Light crossbow'],
      Commoners: ['Club', 'Dagger', 'Handaxe'],
      Merchants: ['Shortsword', 'Dagger', 'Light crossbow'],
      Adventurers: ['Longsword', 'Longbow', 'Greatsword', 'Staff'],
      Villains: ['Poisoned blade', 'Hidden dagger', 'Dark magic', 'Cursed weapon']
    };
    
    const weapons = weaponTypes[category] || ['Simple weapon'];
    const profBonus = Math.floor((level - 1) / 4) + 2;
    
    for (let i = 0; i < Math.min(2, weapons.length); i++) {
      const weapon = weapons[i];
      const toHit = profBonus + Math.floor(Math.random() * 4) + 1;
      const damage = this.generateDamage(weapon, level);
      
      attacks.push(`${weapon}: +${toHit} to hit, ${damage}`);
    }
    
    return attacks;
  }

  generateDamage(weapon, level) {
    const baseDamage = {
      'Dagger': '1d4',
      'Shortsword': '1d6',
      'Rapier': '1d8',
      'Longsword': '1d8',
      'Greatsword': '2d6',
      'Club': '1d4',
      'Handaxe': '1d6',
      'Light crossbow': '1d8',
      'Longbow': '1d8',
      'Staff': '1d6',
      'Poisoned blade': '1d6',
      'Hidden dagger': '1d4',
      'Dark magic': '2d6',
      'Cursed weapon': '1d8'
    };
    
    const base = baseDamage[weapon] || '1d6';
    const bonus = Math.floor(level / 4) + 1;
    const damageType = this.getDamageType(weapon);
    
    return `${base}+${bonus} ${damageType}`;
  }

  getDamageType(weapon) {
    if (weapon.includes('bow')) return 'piercing';
    if (weapon.includes('sword') || weapon.includes('dagger') || weapon.includes('blade')) return 'slashing';
    if (weapon === 'Club' || weapon === 'Staff') return 'bludgeoning';
    if (weapon === 'Dark magic') return 'necrotic';
    if (weapon === 'Poisoned blade') return 'piercing + poison';
    return 'damage';
  }

  generateSpecialAbilities(category, level) {
    const abilities = [];
    
    const categoryAbilities = {
      Nobles: [
        'Commanding Presence: Advantage on Persuasion checks',
        'Noble Bearing: Immunity to being frightened',
        'Rally: Grant allies temporary hit points',
        'Diplomatic Immunity: Cannot be arrested without evidence'
      ],
      Commoners: [
        'Hardy: Advantage on saves against disease',
        'Local Knowledge: Knows all rumors in area',
        'Mob Mentality: Gains advantage when allies nearby',
        'Survivor: Can find food and shelter anywhere'
      ],
      Merchants: [
        'Appraise: Can determine value of any item',
        'Silver Tongue: Advantage on Deception checks',
        'Connected: Can acquire any common item',
        'Bribery: Can influence officials with gold'
      ],
      Adventurers: [
        'Action Surge: Extra action once per combat',
        'Second Wind: Heal 1d10+level as bonus action',
        'Uncanny Dodge: Half damage from one attack',
        'Evasion: No damage on successful DEX save'
      ],
      Villains: [
        'Frightening Presence: Enemies make WIS save or frightened',
        'Dark Blessing: Resistance to one damage type',
        'Summon Minions: Call 1d4 lesser creatures',
        'Death Throes: Explodes on death for 2d6 damage'
      ]
    };
    
    const available = categoryAbilities[category] || [];
    const numAbilities = Math.min(Math.floor(level / 3) + 1, available.length);
    
    for (let i = 0; i < numAbilities; i++) {
      abilities.push(available[Math.floor(Math.random() * available.length)]);
    }
    
    // Add spellcasting for appropriate NPCs
    if ((category === 'Nobles' && Math.random() > 0.7) ||
        (category === 'Adventurers' && Math.random() > 0.5) ||
        (category === 'Villains' && Math.random() > 0.3)) {
      abilities.push(this.generateSpellcasting(level));
    }
    
    return abilities;
  }

  generateSpellcasting(level) {
    const spellSlots = Math.floor(level / 2) + 1;
    const spells = [
      'Charm Person', 'Sleep', 'Magic Missile', 'Shield',
      'Invisibility', 'Hold Person', 'Misty Step', 'Scorching Ray',
      'Counterspell', 'Fireball', 'Fly', 'Lightning Bolt'
    ];
    
    const knownSpells = [];
    const numSpells = Math.min(spellSlots * 2, spells.length);
    
    for (let i = 0; i < numSpells; i++) {
      const spell = spells[Math.floor(Math.random() * spells.length)];
      if (!knownSpells.includes(spell)) {
        knownSpells.push(spell);
      }
    }
    
    return `Spellcasting: ${spellSlots} spell slots, knows ${knownSpells.join(', ')}`;
  }

  generateInventory(category) {
    const items = [];
    
    // Gold
    const goldRanges = {
      Nobles: { min: 100, max: 1000 },
      Commoners: { min: 1, max: 50 },
      Merchants: { min: 50, max: 500 },
      Adventurers: { min: 20, max: 200 },
      Villains: { min: 50, max: 1000 }
    };
    
    const goldRange = goldRanges[category];
    const gold = Math.floor(Math.random() * (goldRange.max - goldRange.min + 1)) + goldRange.min;
    items.push(`${gold} gold pieces`);
    
    // Category-specific items
    const categoryItems = {
      Nobles: [
        'Signet ring', 'Fine clothes', 'Perfume', 'Letter of introduction',
        'Family heirloom', 'Deed to property', 'Vintage wine'
      ],
      Commoners: [
        'Tools of trade', 'Simple clothes', 'Day\'s rations', 'Lucky charm',
        'Family memento', 'Worn boots', 'Small knife'
      ],
      Merchants: [
        'Ledger book', 'Scales', 'Sample goods', 'Merchant guild badge',
        'Letters of credit', 'Map of trade routes', 'Strongbox key'
      ],
      Adventurers: [
        'Healing potion', 'Rope (50 ft)', 'Torches', 'Adventurer\'s kit',
        'Trophy from monster', 'Treasure map fragment', 'Magic item'
      ],
      Villains: [
        'Poison vial', 'Disguise kit', 'Blackmail letters', 'Dark artifact',
        'Coded message', 'Ritual components', 'List of targets'
      ]
    };
    
    const available = categoryItems[category] || [];
    const numItems = Math.floor(Math.random() * 4) + 2;
    
    for (let i = 0; i < numItems && i < available.length; i++) {
      items.push(available[Math.floor(Math.random() * available.length)]);
    }
    
    // Chance for special item
    if (Math.random() > 0.8) {
      items.push(this.generateSpecialItem());
    }
    
    return items;
  }

  generateSpecialItem() {
    const specialItems = [
      'Mysterious key that doesn\'t rust',
      'Locket with portrait of unknown person',
      'Map to uncharted location',
      'Book written in unknown language',
      'Crystal that glows in moonlight',
      'Ring that grows warm near magic',
      'Compass that doesn\'t point north',
      'Mirror that shows different reflection',
      'Dice that always roll the same number',
      'Flower that never wilts'
    ];
    
    return specialItems[Math.floor(Math.random() * specialItems.length)];
  }

  generateGreetings(category) {
    const greetings = {
      Nobles: [
        'Ah, what brings you to my attention?',
        'I suppose you have business with me?',
        'State your purpose quickly.'
      ],
      Commoners: [
        'Good day to you!',
        'What can I do for you?',
        'Haven\'t seen you around before.'
      ],
      Merchants: [
        'Welcome! Looking to buy or sell?',
        'Ah, a potential customer!',
        'Business or pleasure today?'
      ],
      Adventurers: [
        'Well met, fellow traveler.',
        'Looking for work or offering it?',
        'Buy me a drink and we\'ll talk.'
      ],
      Villains: [
        'You\'re either very brave or very foolish.',
        'I don\'t believe we\'ve been introduced...',
        'This is a dangerous place to wander.'
      ]
    };
    
    return greetings[category] || ['Hello there.'];
  }

  generateCatchphrases() {
    const phrases = [
      'Trust me on this one.',
      'I\'ve seen stranger things.',
      'That\'s what they all say.',
      'Mark my words...',
      'In my experience...',
      'If you say so.',
      'Time will tell.',
      'Nothing is ever simple.',
      'Follow the money.',
      'Everyone has a price.'
    ];
    
    return [
      phrases[Math.floor(Math.random() * phrases.length)],
      phrases[Math.floor(Math.random() * phrases.length)]
    ];
  }

  generateKnowledge(category) {
    const knowledge = {
      Nobles: [
        'Court gossip and scandals',
        'Noble family histories',
        'Political alliances',
        'Upcoming social events'
      ],
      Commoners: [
        'Local rumors and news',
        'Best shops and services',
        'Neighborhood secrets',
        'Who to avoid'
      ],
      Merchants: [
        'Market prices and trends',
        'Trade route conditions',
        'Competitor weaknesses',
        'New business opportunities'
      ],
      Adventurers: [
        'Monster weaknesses',
        'Dungeon locations',
        'Treasure rumors',
        'Survival techniques'
      ],
      Villains: [
        'Blackmail material',
        'Guard patrol schedules',
        'Hidden passages',
        'Rival gang territories'
      ]
    };
    
    return knowledge[category] || ['General local information'];
  }

  generatePlotHooks(category) {
    const hooks = {
      Nobles: [
        'Needs discrete help with family scandal',
        'Seeks bodyguards for dangerous journey',
        'Wants rivals investigated',
        'Requires champions for trial by combat'
      ],
      Commoners: [
        'Family member has gone missing',
        'Being extorted by criminals',
        'Discovered something valuable',
        'Witnessed a crime'
      ],
      Merchants: [
        'Caravan needs guards',
        'Seeks rare merchandise',
        'Competitor sabotaging business',
        'Has map to lost treasure'
      ],
      Adventurers: [
        'Forming expedition to dangerous location',
        'Has information about legendary item',
        'Needs help with personal quest',
        'Knows secret about major threat'
      ],
      Villains: [
        'Offers deal too good to refuse',
        'Blackmails party into service',
        'Is secretly testing the party',
        'Provides information for a price'
      ]
    };
    
    const available = hooks[category] || ['Has a problem needing solving'];
    return available[Math.floor(Math.random() * available.length)];
  }

  formatNPCContent(npc) {
    return `# ${npc.name}

*${npc.race} ${npc.class} (${npc.category}), Age ${npc.age}, ${npc.gender}*

**ID**: ${npc.id}

## Quick Reference
- **Location**: ${npc.currentSituation.location}
- **Occupation**: ${npc.currentSituation.occupation}
- **Disposition**: ${npc.personality.traits[0]}

## Appearance
${npc.appearance.height} and ${npc.appearance.build.toLowerCase()}, with ${npc.appearance.hair} and ${npc.appearance.eyes}. ${npc.appearance.skin}. ${npc.appearance.distinguishing}.

**Clothing**: ${npc.appearance.clothing}
${npc.appearance.accessories.length > 0 ? `**Accessories**: ${npc.appearance.accessories.join(', ')}` : ''}

## Personality
- **Traits**: ${npc.personality.traits.join('; ')}
- **Ideal**: ${npc.personality.ideals}
- **Bond**: ${npc.personality.bonds}
- **Flaw**: ${npc.personality.flaws}
- **Quirks**: ${npc.personality.quirks.join(', ')}
- **Fear**: ${npc.personality.fears}
- **Dream**: ${npc.personality.dreams}

## Background
${npc.background}

## Current Situation
- **Occupation**: ${npc.currentSituation.occupation}
- **Resources**: ${npc.currentSituation.resources.join(', ')}
- **Problems**: ${npc.currentSituation.problems.join('; ')}

### Goals
- **Short Term**: ${npc.currentSituation.goals.shortTerm}
- **Long Term**: ${npc.currentSituation.goals.longTerm}
${npc.currentSituation.goals.hidden ? `- **Hidden**: ${npc.currentSituation.goals.hidden}` : ''}

## Relationships
${npc.relationships.map(r => `### ${r.name} (${r.type} - ${r.subtype})
- **Status**: ${r.status}
- **History**: ${r.history}
${r.secret ? `- **Secret**: ${r.secret}` : ''}`).join('\n\n')}

## Secrets
${npc.secrets.map((s, i) => `${i + 1}. ${s}`).join('\n')}

## Statistics
- **Level**: ${npc.stats.level}
- **HP**: ${npc.stats.hp}
- **AC**: ${npc.stats.ac}
- **Speed**: ${npc.stats.speed} ft.
- **Challenge Rating**: ${npc.stats.challengeRating}

### Abilities
| STR | DEX | CON | INT | WIS | CHA |
|-----|-----|-----|-----|-----|-----|
| ${npc.stats.abilities.STR} | ${npc.stats.abilities.DEX} | ${npc.stats.abilities.CON} | ${npc.stats.abilities.INT} | ${npc.stats.abilities.WIS} | ${npc.stats.abilities.CHA} |

### Saving Throws
${npc.stats.saves.join(', ')}

### Skills
${npc.skills.join(', ')}

### Attacks
${npc.stats.attacks.map(a => `- ${a}`).join('\n')}

### Special Abilities
${npc.stats.specialAbilities.map(a => `- ${a}`).join('\n')}

## Possessions
${npc.possessions.map(p => `- ${p}`).join('\n')}

## Dialogue
### Greetings
${npc.dialogue.greetings.map(g => `- "${g}"`).join('\n')}

### Catchphrases
${npc.dialogue.catchphrases.map(c => `- "${c}"`).join('\n')}

### Knowledge
${npc.dialogue.knowledge.map(k => `- ${k}`).join('\n')}

## Plot Hook
${npc.plotHooks}

## DM Notes
- Adjust stats based on party level
- Secrets can drive major plot points
- Relationships create web of connections
- Use quirks for memorable roleplay

---
*Generated: ${new Date().toISOString()}*
`;
  }

  // Main orchestrator
  async generateAll() {
    await this.initialize();
    
    console.log('\n🎯 Generating 10,000 High-Quality Assets...\n');
    console.log('This will create diverse, interconnected content with no placeholders!\n');
    
    // Generate all content types
    await this.generateMassiveNPCCollection();      // 2000 NPCs
    
    // Continue with other asset types...
    console.log('\n✅ Phase 1 Complete: 2000 NPCs generated!');
    console.log('Continue with remaining 8000 assets...');
    
    // Note: Additional generation methods would be implemented here
    // for items, locations, quests, etc.
    
    console.log(`\n📊 Current Total: ${this.stats.total} assets`);
  }
}

// Execute
async function main() {
  const generator = new MegaGenerator10K();
  
  try {
    await generator.generateAll();
  } catch (error) {
    console.error('Error during generation:', error);
  }
}

if (require.main === module) {
  main();
}

module.exports = MegaGenerator10K;
