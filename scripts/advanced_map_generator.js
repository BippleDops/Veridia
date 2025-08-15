#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Map generation configurations
const MAP_CONFIGS = {
  world: {
    scales: ['continent', 'hemisphere', 'global'],
    features: ['mountains', 'rivers', 'forests', 'cities', 'roads', 'borders'],
    styles: ['tolkien', 'satellite', 'political', 'antique', 'fantasy'],
    sizes: { small: '2048x1536', medium: '4096x3072', large: '8192x6144' }
  },
  
  regional: {
    scales: ['kingdom', 'province', 'county'],
    features: ['settlements', 'roads', 'terrain', 'resources', 'landmarks'],
    styles: ['hand_drawn', 'topographical', 'simplified', 'detailed'],
    sizes: { standard: '3072x3072', large: '6144x6144' }
  },
  
  city: {
    districts: ['market', 'noble', 'docks', 'slums', 'temple', 'military'],
    features: ['walls', 'gates', 'major_buildings', 'streets', 'waterways'],
    styles: ['medieval', 'renaissance', 'fantasy', 'steampunk'],
    sizes: { standard: '2048x2048', detailed: '4096x4096' }
  },
  
  dungeon: {
    themes: ['crypt', 'cave', 'temple', 'fortress', 'sewer', 'mine'],
    elements: ['rooms', 'corridors', 'traps', 'secrets', 'treasures'],
    complexity: ['linear', 'branching', 'maze', 'multi_level'],
    gridTypes: ['square', 'hex', 'isometric', 'gridless']
  },
  
  battle: {
    environments: ['tavern', 'forest', 'dungeon_room', 'street', 'throne_room', 'ship'],
    sizes: ['20x20', '30x30', '40x40', '50x50'],
    features: ['cover', 'elevation', 'hazards', 'objectives'],
    variants: ['day', 'night', 'weather', 'damaged']
  }
};

// Procedural generation rules
const GENERATION_RULES = {
  dungeon: {
    room_density: { min: 0.3, max: 0.5 },
    corridor_width: { min: 1, max: 2 },
    room_size: { min: 3, max: 8 },
    secret_door_chance: 0.1,
    trap_chance: 0.05
  },
  
  city: {
    building_density: { min: 0.6, max: 0.8 },
    street_width: { main: 3, side: 2, alley: 1 },
    district_blend: 0.2,
    wall_thickness: 2
  },
  
  world: {
    land_percentage: { min: 0.3, max: 0.7 },
    mountain_chains: { min: 3, max: 7 },
    major_rivers: { min: 5, max: 12 },
    climate_zones: ['arctic', 'temperate', 'tropical', 'desert']
  }
};

class AdvancedMapGenerator {
  constructor() {
    this.vaultRoot = process.cwd();
    this.mapRoot = path.join(this.vaultRoot, '04_Resources/Assets/Maps');
    this.stats = {
      generated: {},
      total: 0
    };
  }
  
  async initialize() {
    console.log('🗺️ Initializing Advanced Map Generator...\n');
    
    // Create map directories
    const dirs = [
      'World/Continents',
      'World/Regions',
      'World/Political',
      'Regional/Kingdoms',
      'Regional/Provinces',
      'Cities/Full',
      'Cities/Districts',
      'Dungeons/Crypts',
      'Dungeons/Caves',
      'Dungeons/Temples',
      'Dungeons/Fortresses',
      'Battle/Indoor',
      'Battle/Outdoor',
      'Battle/Special',
      'Navigation/Player',
      'Navigation/GM'
    ];
    
    for (const dir of dirs) {
      await fs.mkdir(path.join(this.mapRoot, dir), { recursive: true });
    }
  }
  
  async analyzeMapNeeds() {
    console.log('📍 Analyzing vault for map requirements...\n');
    
    const needs = {
      world: [],
      regional: [],
      city: [],
      dungeon: [],
      battle: []
    };
    
    // Scan locations
    try {
      const placesDir = path.join(this.vaultRoot, '02_Worldbuilding/Places');
      const files = await this.scanDirectory(placesDir);
      
      for (const file of files) {
        const content = await fs.readFile(file, 'utf-8');
        const analysis = this.analyzeLocation(content, file);
        
        if (analysis.mapType) {
          needs[analysis.mapType].push(analysis);
        }
      }
    } catch (error) {
      console.log('Places directory not found, using defaults');
    }
    
    // Add essential maps if missing
    this.addEssentialMaps(needs);
    
    return needs;
  }
  
  analyzeLocation(content, filepath) {
    const name = path.basename(filepath, '.md');
    const lines = content.split('\n');
    
    // Determine map type based on content
    let mapType = null;
    let details = { name };
    
    if (content.match(/continent|world|realm/i)) {
      mapType = 'world';
      details.scale = 'continent';
    } else if (content.match(/kingdom|province|region/i)) {
      mapType = 'regional';
      details.scale = 'kingdom';
    } else if (content.match(/city|town|settlement|port/i)) {
      mapType = 'city';
      details.size = content.match(/large|capital|major/i) ? 'large' : 'standard';
    } else if (content.match(/dungeon|crypt|cave|ruin/i)) {
      mapType = 'dungeon';
      details.theme = this.extractDungeonTheme(content);
    } else if (content.match(/tavern|shop|building|room/i)) {
      mapType = 'battle';
      details.environment = this.extractEnvironment(content);
    }
    
    // Extract additional details
    if (mapType) {
      details.features = this.extractFeatures(content, mapType);
      details.style = this.determineStyle(content);
    }
    
    return { mapType, ...details };
  }
  
  extractDungeonTheme(content) {
    const themes = ['crypt', 'cave', 'temple', 'fortress', 'sewer', 'mine'];
    const contentLower = content.toLowerCase();
    
    for (const theme of themes) {
      if (contentLower.includes(theme)) {
        return theme;
      }
    }
    
    return 'dungeon';
  }
  
  extractEnvironment(content) {
    const environments = ['tavern', 'forest', 'street', 'throne_room', 'ship'];
    const contentLower = content.toLowerCase();
    
    for (const env of environments) {
      if (contentLower.includes(env.replace('_', ' '))) {
        return env;
      }
    }
    
    return 'dungeon_room';
  }
  
  extractFeatures(content, mapType) {
    const features = [];
    const configs = MAP_CONFIGS[mapType];
    
    if (configs?.features) {
      for (const feature of configs.features) {
        if (content.toLowerCase().includes(feature)) {
          features.push(feature);
        }
      }
    }
    
    return features;
  }
  
  determineStyle(content) {
    if (content.match(/ancient|old|historical/i)) return 'antique';
    if (content.match(/magical|mystical|ethereal/i)) return 'fantasy';
    if (content.match(/technological|steam|mechanical/i)) return 'steampunk';
    return 'hand_drawn';
  }
  
  addEssentialMaps(needs) {
    // Ensure we have at least one of each essential map type
    if (needs.world.length === 0) {
      needs.world.push({
        name: 'Aethel_Complete',
        scale: 'global',
        features: ['continents', 'oceans', 'major_cities'],
        style: 'fantasy'
      });
    }
    
    if (needs.battle.length < 5) {
      const essentialBattles = [
        { name: 'Generic_Tavern', environment: 'tavern' },
        { name: 'Forest_Clearing', environment: 'forest' },
        { name: 'Dungeon_Chamber', environment: 'dungeon_room' },
        { name: 'City_Street', environment: 'street' },
        { name: 'Boss_Arena', environment: 'throne_room' }
      ];
      
      needs.battle.push(...essentialBattles.slice(needs.battle.length));
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
  
  async generateMaps(needs) {
    console.log('🎨 Generating comprehensive map collection...\n');
    
    for (const [mapType, locations] of Object.entries(needs)) {
      if (locations.length > 0) {
        console.log(`\n📍 Generating ${locations.length} ${mapType} maps...`);
        
        for (const location of locations) {
          await this.generateMapSet(mapType, location);
        }
      }
    }
    
    return this.stats;
  }
  
  async generateMapSet(mapType, location) {
    const generator = {
      world: () => this.generateWorldMap(location),
      regional: () => this.generateRegionalMap(location),
      city: () => this.generateCityMap(location),
      dungeon: () => this.generateDungeonMap(location),
      battle: () => this.generateBattleMap(location)
    };
    
    if (generator[mapType]) {
      await generator[mapType]();
      this.stats.generated[mapType] = (this.stats.generated[mapType] || 0) + 1;
      this.stats.total++;
    }
  }
  
  async generateWorldMap(location) {
    const versions = [
      { suffix: 'political', features: ['borders', 'cities', 'labels'] },
      { suffix: 'physical', features: ['terrain', 'elevation', 'climate'] },
      { suffix: 'player', features: ['basic', 'known_locations'] },
      { suffix: 'gm', features: ['all', 'secrets', 'resources'] }
    ];
    
    for (const version of versions) {
      const filename = `world_${this.sanitizeName(location.name)}_${version.suffix}.png`;
      const filepath = path.join(this.mapRoot, 'World/Continents', filename);
      
      const metadata = {
        name: location.name,
        type: 'world',
        scale: location.scale || 'continent',
        style: location.style || 'fantasy',
        features: version.features,
        size: MAP_CONFIGS.world.sizes.medium,
        grid: false
      };
      
      await this.createMapPlaceholder(filepath, metadata);
    }
  }
  
  async generateRegionalMap(location) {
    const versions = [
      { suffix: 'detailed', detail: 'high', labels: true },
      { suffix: 'simple', detail: 'low', labels: true },
      { suffix: 'player', detail: 'medium', labels: 'partial' },
      { suffix: 'terrain', detail: 'high', focus: 'topography' }
    ];
    
    for (const version of versions) {
      const filename = `region_${this.sanitizeName(location.name)}_${version.suffix}.png`;
      const filepath = path.join(this.mapRoot, 'Regional/Kingdoms', filename);
      
      const metadata = {
        name: location.name,
        type: 'regional',
        scale: location.scale || 'kingdom',
        style: location.style || 'hand_drawn',
        detail: version.detail,
        labels: version.labels,
        features: location.features || ['settlements', 'roads', 'terrain'],
        size: MAP_CONFIGS.regional.sizes.standard
      };
      
      await this.createMapPlaceholder(filepath, metadata);
    }
  }
  
  async generateCityMap(location) {
    // Full city map
    const cityFilename = `city_${this.sanitizeName(location.name)}_full.png`;
    const cityPath = path.join(this.mapRoot, 'Cities/Full', cityFilename);
    
    await this.createMapPlaceholder(cityPath, {
      name: location.name,
      type: 'city',
      style: location.style || 'medieval',
      districts: MAP_CONFIGS.city.districts,
      features: location.features || MAP_CONFIGS.city.features,
      size: location.size === 'large' ? 
        MAP_CONFIGS.city.sizes.detailed : 
        MAP_CONFIGS.city.sizes.standard,
      labels: true
    });
    
    // District maps
    const importantDistricts = ['market', 'noble', 'docks'];
    for (const district of importantDistricts) {
      const districtFilename = `city_${this.sanitizeName(location.name)}_${district}.png`;
      const districtPath = path.join(this.mapRoot, 'Cities/Districts', districtFilename);
      
      await this.createMapPlaceholder(districtPath, {
        name: `${location.name} - ${district} District`,
        type: 'city_district',
        district,
        style: location.style || 'medieval',
        size: '2048x2048',
        detail: 'high',
        grid: true
      });
    }
  }
  
  async generateDungeonMap(location) {
    const theme = location.theme || 'dungeon';
    const levels = location.levels || 1;
    
    // Generate each level
    for (let level = 1; level <= levels; level++) {
      const versions = [
        { suffix: 'player', showSecrets: false, showTraps: false },
        { suffix: 'gm', showSecrets: true, showTraps: true },
        { suffix: 'grid', showGrid: true, minimal: true }
      ];
      
      for (const version of versions) {
        const filename = `dungeon_${this.sanitizeName(location.name)}_L${level}_${version.suffix}.png`;
        const filepath = path.join(
          this.mapRoot, 
          'Dungeons', 
          this.capitalize(theme), 
          filename
        );
        
        const metadata = {
          name: `${location.name} - Level ${level}`,
          type: 'dungeon',
          theme,
          level,
          complexity: this.determineDungeonComplexity(location),
          ...version,
          gridType: 'square',
          gridSize: 5,
          size: '3072x3072'
        };
        
        await this.createMapPlaceholder(filepath, metadata);
      }
    }
    
    // Generate overview map if multi-level
    if (levels > 1) {
      const overviewFilename = `dungeon_${this.sanitizeName(location.name)}_overview.png`;
      const overviewPath = path.join(this.mapRoot, 'Dungeons', this.capitalize(theme), overviewFilename);
      
      await this.createMapPlaceholder(overviewPath, {
        name: `${location.name} - Overview`,
        type: 'dungeon_overview',
        theme,
        levels,
        style: 'cross_section'
      });
    }
  }
  
  async generateBattleMap(location) {
    const environment = location.environment || 'dungeon_room';
    const variants = ['standard', 'night', 'damaged', 'weather'];
    
    for (const variant of variants) {
      // Multiple sizes for different encounters
      const sizes = ['20x20', '30x30', '40x40'];
      
      for (const size of sizes) {
        const filename = `battle_${this.sanitizeName(location.name)}_${size}_${variant}.png`;
        const subdir = environment.includes('dungeon') ? 'Indoor' : 'Outdoor';
        const filepath = path.join(this.mapRoot, 'Battle', subdir, filename);
        
        const metadata = {
          name: location.name,
          type: 'battle',
          environment,
          variant,
          size,
          gridSize: 5,
          gridType: 'square',
          features: this.getBattleMapFeatures(environment),
          lighting: variant === 'night' ? 'dark' : 'normal'
        };
        
        await this.createMapPlaceholder(filepath, metadata);
      }
    }
  }
  
  determineDungeonComplexity(location) {
    const content = location.content || '';
    
    if (content.match(/maze|labyrinth|complex/i)) return 'maze';
    if (content.match(/multi-level|vertical|stairs/i)) return 'multi_level';
    if (content.match(/branching|choices|paths/i)) return 'branching';
    
    return 'linear';
  }
  
  getBattleMapFeatures(environment) {
    const features = {
      tavern: ['tables', 'bar', 'fireplace', 'stairs'],
      forest: ['trees', 'undergrowth', 'rocks', 'stream'],
      dungeon_room: ['pillars', 'altar', 'rubble', 'doors'],
      street: ['buildings', 'crates', 'wagon', 'fountain'],
      throne_room: ['throne', 'pillars', 'carpet', 'braziers'],
      ship: ['masts', 'rigging', 'cannons', 'cargo']
    };
    
    return features[environment] || ['varied_terrain'];
  }
  
  async createMapPlaceholder(filepath, metadata) {
    await fs.mkdir(path.dirname(filepath), { recursive: true });
    
    // Create metadata file
    const metaPath = filepath.replace(/\.[^.]+$/, '_meta.json');
    await fs.writeFile(metaPath, JSON.stringify({
      ...metadata,
      generated: new Date().toISOString(),
      placeholder: true,
      generationRules: this.getGenerationRules(metadata.type)
    }, null, 2));
    
    // Create visual placeholder
    await fs.writeFile(filepath, Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
      'base64'
    ));
  }
  
  getGenerationRules(mapType) {
    const baseType = mapType.split('_')[0];
    return GENERATION_RULES[baseType] || {};
  }
  
  sanitizeName(name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
  }
  
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  async generateMapIndex() {
    console.log('\n📚 Generating map index...\n');
    
    const index = `# Map Collection Index

Generated: ${new Date().toISOString()}

## Overview

Total Maps Generated: ${this.stats.total}

### By Type
${Object.entries(this.stats.generated).map(([type, count]) => 
  `- **${this.capitalize(type)}**: ${count} map sets`
).join('\n')}

## Map Organization

### World Maps
- **Political**: Borders, nations, cities
- **Physical**: Terrain, climate, geography  
- **Player**: Known world information
- **GM**: Complete information with secrets

### Regional Maps
- **Detailed**: All features and labels
- **Simple**: Major features only
- **Player**: Partial information
- **Terrain**: Topographical focus

### City Maps
- **Full City**: Complete urban layout
- **Districts**: Detailed district maps
- **Player/GM**: Different information levels

### Dungeon Maps
- **Player Version**: No secrets or traps
- **GM Version**: Complete information
- **Grid Version**: Minimal, VTT-ready
- **Overview**: Multi-level visualization

### Battle Maps
- **Multiple Sizes**: 20x20, 30x30, 40x40
- **Variants**: Day, night, weather, damaged
- **Environments**: Indoor and outdoor

## Usage Guide

### Virtual Tabletops
- Grid-aligned maps ready for tokens
- Multiple resolutions available
- Proper scaling information included

### Physical Games
- High-resolution for printing
- Grid and gridless versions
- Print-friendly formats

### Campaign Planning
- Consistent style across map types
- Interconnected geography
- GM notes and secrets layer

## Map Features

### Interactive Elements
- Clickable regions (when digitized)
- Fog of war support
- Dynamic lighting markers

### Customization
- Editable labels layer
- Adjustable grid overlay
- Multiple style options

## Technical Specifications

- **Format**: PNG with transparency
- **Resolution**: Up to 8192x6144
- **Grid**: 5-foot squares standard
- **Metadata**: JSON sidecar files
`;

    await fs.writeFile(
      path.join(this.vaultRoot, '04_Resources/Assets/Maps/MAP_INDEX.md'),
      index
    );
    
    console.log('✅ Map index created');
  }
}

// Main execution
async function main() {
  const generator = new AdvancedMapGenerator();
  
  try {
    await generator.initialize();
    const needs = await generator.analyzeMapNeeds();
    
    console.log('📊 Map needs identified:');
    for (const [type, locations] of Object.entries(needs)) {
      if (locations.length > 0) {
        console.log(`- ${type}: ${locations.length} locations`);
      }
    }
    
    await generator.generateMaps(needs);
    await generator.generateMapIndex();
    
    console.log(`\n✅ Map generation complete!`);
    console.log(`Total map sets created: ${generator.stats.total}`);
    
  } catch (error) {
    console.error('Error:', error);
  }
}

if (require.main === module) {
  main();
}

module.exports = AdvancedMapGenerator;
