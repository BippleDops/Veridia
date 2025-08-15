#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const AdvancedAssetGenerationSystem = require('./advanced_asset_generation_system');

class ContinuousAdvancedAssets {
  constructor() {
    this.generator = new AdvancedAssetGenerationSystem();
    this.vaultRoot = process.cwd();
    this.lastProcessed = new Set();
    this.generationQueue = [];
  }

  async run() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Advanced Asset Generator: Starting intelligent scan...`);
    
    try {
      // Initialize the advanced system if needed
      if (!this.initialized) {
        await this.generator.initialize();
        this.initialized = true;
      }
      
      // Scan for content needing assets
      const candidates = await this.findAssetCandidates();
      
      // Prioritize by importance
      const prioritized = this.prioritizeCandidates(candidates);
      
      // Generate top priority assets
      const toGenerate = prioritized.slice(0, 5); // Generate 5 per run
      
      if (toGenerate.length > 0) {
        console.log(`[${timestamp}] Generating ${toGenerate.length} high-quality assets...`);
        
        for (const candidate of toGenerate) {
          const asset = await this.generateSmartAsset(candidate);
          if (asset) {
            this.lastProcessed.add(candidate.path);
            console.log(`  ✅ Generated: ${asset.type} for ${candidate.name}`);
          }
        }
      } else {
        console.log(`[${timestamp}] All priority assets are up to date`);
      }
      
    } catch (error) {
      console.error(`[${timestamp}] Advanced Asset Error:`, error.message);
    }
  }

  async findAssetCandidates() {
    const candidates = [];
    
    // Scan different content types
    const contentDirs = [
      { path: '02_Worldbuilding/People', type: 'portraits', priority: 1 },
      { path: '02_Worldbuilding/Places', type: 'locations', priority: 2 },
      { path: '02_Worldbuilding/Items', type: 'items', priority: 3 },
      { path: '02_Worldbuilding/Groups', type: 'scenes', priority: 4 },
      { path: '03_Mechanics/Monsters', type: 'creatures', priority: 5 }
    ];
    
    for (const dir of contentDirs) {
      const files = await this.scanDirectory(dir.path);
      
      for (const file of files) {
        // Skip if recently processed
        if (this.lastProcessed.has(file)) continue;
        
        // Check if asset exists
        const assetPath = this.getAssetPath(file, dir.type);
        if (!(await this.fileExists(assetPath))) {
          // Analyze content importance
          const importance = await this.analyzeImportance(file);
          
          candidates.push({
            path: file,
            name: path.basename(file, '.md'),
            type: dir.type,
            priority: dir.priority,
            importance,
            assetPath
          });
        }
      }
    }
    
    return candidates;
  }

  async analyzeImportance(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      let importance = 0;
      
      // Check for various importance indicators
      if (content.includes('main') || content.includes('primary')) importance += 3;
      if (content.includes('boss') || content.includes('leader')) importance += 3;
      if (content.includes('legendary') || content.includes('artifact')) importance += 2;
      if (content.includes('quest') || content.includes('mission')) importance += 2;
      if (content.match(/\[\[.*\]\]/g)?.length > 5) importance += 1; // Many links
      
      // Check file size (larger = more developed = more important)
      const stats = await fs.stat(filePath);
      if (stats.size > 3000) importance += 2;
      if (stats.size > 5000) importance += 1;
      
      // Recent modification (recently edited = currently relevant)
      const daysSinceModified = (Date.now() - stats.mtime) / (1000 * 60 * 60 * 24);
      if (daysSinceModified < 1) importance += 3;
      if (daysSinceModified < 7) importance += 1;
      
      return importance;
    } catch {
      return 0;
    }
  }

  prioritizeCandidates(candidates) {
    // Sort by combined priority and importance
    return candidates.sort((a, b) => {
      const scoreA = (10 - a.priority) + a.importance;
      const scoreB = (10 - b.priority) + b.importance;
      return scoreB - scoreA;
    });
  }

  async generateSmartAsset(candidate) {
    // Extract context from the file
    const context = await this.extractContext(candidate.path);
    
    // Generate intelligent prompt based on content
    const prompt = await this.buildSmartPrompt(candidate, context);
    
    // Determine style based on content
    const style = this.determineStyle(context);
    
    // Generate with advanced system
    const result = await this.generator.generateAdvancedAsset(
      candidate.type,
      prompt,
      {
        name: candidate.name,
        style,
        seed: this.generateSeed(candidate.name)
      }
    );
    
    return result;
  }

  async extractContext(filePath) {
    const content = await fs.readFile(filePath, 'utf-8');
    const context = {
      race: null,
      occupation: null,
      type: null,
      alignment: null,
      description: null,
      tags: []
    };
    
    // Extract frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      
      const raceMatch = frontmatter.match(/race:\s*(.+)/);
      if (raceMatch) context.race = raceMatch[1].trim();
      
      const typeMatch = frontmatter.match(/type:\s*(.+)/);
      if (typeMatch) context.type = typeMatch[1].trim();
      
      const tagsMatch = frontmatter.match(/tags:\s*\[([^\]]+)\]/);
      if (tagsMatch) context.tags = tagsMatch[1].split(',').map(t => t.trim());
    }
    
    // Extract from content
    const occupationMatch = content.match(/occupation[:\s]+([^\n]+)/i);
    if (occupationMatch) context.occupation = occupationMatch[1].trim();
    
    const alignmentMatch = content.match(/alignment[:\s]+([^\n]+)/i);
    if (alignmentMatch) context.alignment = alignmentMatch[1].trim();
    
    // Get first paragraph as description
    const descMatch = content.match(/## Description\n+([^\n#]+)/);
    if (descMatch) context.description = descMatch[1].trim();
    
    return context;
  }

  async buildSmartPrompt(candidate, context) {
    let prompt = '';
    
    switch (candidate.type) {
      case 'portraits':
        prompt = this.buildPortraitPrompt(candidate.name, context);
        break;
      case 'locations':
        prompt = this.buildLocationPrompt(candidate.name, context);
        break;
      case 'items':
        prompt = this.buildItemPrompt(candidate.name, context);
        break;
      case 'creatures':
        prompt = this.buildCreaturePrompt(candidate.name, context);
        break;
      case 'scenes':
        prompt = this.buildScenePrompt(candidate.name, context);
        break;
      default:
        prompt = `fantasy ${candidate.type} named ${candidate.name}`;
    }
    
    return prompt;
  }

  buildPortraitPrompt(name, context) {
    const parts = [];
    
    // Base
    parts.push('portrait of');
    
    // Race and occupation
    if (context.race) parts.push(context.race.toLowerCase());
    if (context.occupation) parts.push(context.occupation.toLowerCase());
    
    // Alignment-based mood
    if (context.alignment) {
      if (context.alignment.includes('evil')) {
        parts.push('menacing expression, dark aura');
      } else if (context.alignment.includes('good')) {
        parts.push('kind expression, noble bearing');
      } else {
        parts.push('neutral expression, professional demeanor');
      }
    }
    
    // Quality modifiers
    parts.push('detailed face, character portrait, fantasy art, professional quality');
    
    // Special tags
    if (context.tags.includes('aquabyssos')) {
      parts.push('underwater theme, aquatic features, bioluminescent details');
    }
    if (context.tags.includes('aethermoor')) {
      parts.push('sky theme, ethereal quality, floating elements');
    }
    
    return parts.join(', ');
  }

  buildLocationPrompt(name, context) {
    const parts = [];
    
    // Determine location type from name
    if (name.includes('City')) {
      parts.push('fantasy cityscape, grand architecture');
    } else if (name.includes('Temple')) {
      parts.push('ancient temple, sacred architecture');
    } else if (name.includes('Forest')) {
      parts.push('mystical forest, ancient trees');
    } else if (name.includes('Cave')) {
      parts.push('mysterious cave, underground chamber');
    } else {
      parts.push('fantasy landscape');
    }
    
    // Add context-specific details
    if (context.type === 'underwater') {
      parts.push('underwater environment, coral structures, bioluminescent lighting');
    }
    
    // Quality and style
    parts.push('establishing shot, cinematic composition, detailed environment, atmospheric lighting');
    
    return parts.join(', ');
  }

  buildItemPrompt(name, context) {
    const parts = [];
    
    // Item type detection
    if (name.includes('Sword') || name.includes('Blade')) {
      parts.push('ornate sword, detailed blade');
    } else if (name.includes('Staff')) {
      parts.push('magical staff, glowing crystals');
    } else if (name.includes('Ring')) {
      parts.push('enchanted ring, intricate design');
    } else if (name.includes('Armor')) {
      parts.push('detailed armor set, metallic textures');
    } else {
      parts.push('magical artifact');
    }
    
    // Rarity indicators
    if (name.includes('Legendary') || context.tags?.includes('legendary')) {
      parts.push('legendary quality, epic artifact, glowing magical aura');
    }
    
    // Style
    parts.push('item showcase, centered composition, detailed textures, transparent background');
    
    return parts.join(', ');
  }

  buildCreaturePrompt(name, context) {
    const parts = [];
    
    // Base creature
    parts.push('fantasy creature');
    
    // Type detection
    if (context.type) {
      parts.push(context.type);
    }
    
    // Threat level
    if (name.includes('Ancient') || name.includes('Elder')) {
      parts.push('ancient powerful being, imposing presence');
    }
    
    // Quality
    parts.push('detailed creature design, dynamic pose, fantasy monster art');
    
    return parts.join(', ');
  }

  buildScenePrompt(name, context) {
    return `dramatic scene depicting ${name}, cinematic composition, multiple characters, action scene, detailed environment, epic fantasy art`;
  }

  determineStyle(context) {
    // Determine artistic style based on context
    if (context.tags?.includes('ethereal') || context.race?.includes('Elf')) {
      return 'ethereal';
    } else if (context.tags?.includes('dark') || context.alignment?.includes('evil')) {
      return 'dark';
    } else if (context.type === 'location' || context.type === 'place') {
      return 'painterly';
    } else {
      return 'fantasy';
    }
  }

  generateSeed(name) {
    // Generate consistent seed from name for reproducibility
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash) + name.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash);
  }

  getAssetPath(filePath, type) {
    const name = path.basename(filePath, '.md');
    const typeDir = {
      portraits: 'Portraits',
      locations: 'Locations',
      items: 'Items',
      creatures: 'Creatures',
      scenes: 'Scenes'
    }[type] || 'Misc';
    
    return path.join(
      this.vaultRoot,
      '04_Resources',
      'Assets',
      'Generated',
      typeDir,
      `${name}.png`
    );
  }

  async scanDirectory(relativePath) {
    const fullPath = path.join(this.vaultRoot, relativePath);
    const files = [];
    
    try {
      const entries = await fs.readdir(fullPath);
      for (const entry of entries) {
        if (entry.endsWith('.md')) {
          files.push(path.join(fullPath, entry));
        }
      }
    } catch {
      // Directory doesn't exist
    }
    
    return files;
  }

  async fileExists(filepath) {
    try {
      await fs.access(filepath);
      return true;
    } catch {
      return false;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const generator = new ContinuousAdvancedAssets();
  generator.run();
}

module.exports = ContinuousAdvancedAssets;
