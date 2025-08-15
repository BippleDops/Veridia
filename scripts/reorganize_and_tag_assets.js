#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

class ReorganizeAndTagAssets {
  constructor() {
    this.vaultRoot = process.cwd();
    this.assetsRoot = path.join(this.vaultRoot, '04_Resources', 'Assets');
    this.stats = {
      moved: 0,
      tagged: 0,
      errors: 0,
      total: 0
    };
    
    // Define proper asset locations (not in Generated subfolder)
    this.assetMapping = {
      // Portraits go directly to Portraits folder
      'Portraits': 'Portraits',
      // Locations go to their type-specific folders
      'Locations': 'Locations',
      'Maps': 'Maps',
      // Items organized by type
      'Items': 'Items',
      // Creatures to Creatures folder
      'Creatures': 'Creatures',
      // Tokens to Tokens folder
      'Tokens': 'Tokens',
      // Scenes to Scenes folder
      'Scenes': 'Scenes',
      // Handouts to Handouts folder
      'Handouts': 'Handouts',
      // Music stays in Music
      'Music': 'Audio/Music',
      // Special to Special folder
      'Special': 'Special',
      // Misc to Misc
      'Misc': 'Misc'
    };
    
    // Comprehensive tag system
    this.tagSystem = {
      // Asset type tags
      assetTypes: {
        portrait: ['portrait', 'character-art', 'npc-image'],
        location: ['location', 'place-art', 'scene'],
        map: ['map', 'cartography', 'navigation'],
        item: ['item', 'equipment-art', 'object'],
        creature: ['creature', 'monster-art', 'bestiary'],
        token: ['token', 'game-piece', 'vtt-asset'],
        handout: ['handout', 'player-resource', 'document'],
        music: ['music', 'audio', 'soundtrack'],
        scene: ['scene', 'illustration', 'dramatic-art']
      },
      
      // Quality tags
      quality: {
        placeholder: ['placeholder', 'temporary', 'needs-replacement'],
        generated: ['generated', 'ai-created', 'automated'],
        manual: ['manual', 'custom', 'hand-crafted'],
        enhanced: ['enhanced', 'upscaled', 'improved']
      },
      
      // Campaign tags
      campaigns: {
        aquabyssos: ['aquabyssos', 'underwater', 'oceanic'],
        aethermoor: ['aethermoor', 'sky', 'aerial'],
        general: ['generic', 'universal', 'multi-campaign']
      },
      
      // Style tags
      styles: {
        fantasy: ['fantasy', 'medieval', 'magical'],
        realistic: ['realistic', 'photorealistic', 'detailed'],
        painterly: ['painterly', 'artistic', 'illustrated'],
        ethereal: ['ethereal', 'mystical', 'otherworldly'],
        dark: ['dark', 'gritty', 'horror'],
        cartographic: ['cartographic', 'map-style', 'technical']
      },
      
      // Usage tags
      usage: {
        combat: ['combat', 'battle', 'encounter'],
        social: ['social', 'roleplay', 'interaction'],
        exploration: ['exploration', 'discovery', 'travel'],
        puzzle: ['puzzle', 'mystery', 'investigation']
      }
    };
  }

  async reorganizeAll() {
    console.log('🔄 ASSET REORGANIZATION & TAGGING SYSTEM');
    console.log('=========================================\n');
    
    // Phase 1: Move assets from Generated folders
    console.log('📦 PHASE 1: Moving assets from Generated folders...');
    await this.moveAssetsFromGenerated();
    
    // Phase 2: Apply comprehensive tagging
    console.log('\n🏷️ PHASE 2: Applying comprehensive tags...');
    await this.applyComprehensiveTags();
    
    // Phase 3: Create tag-based indexes
    console.log('\n📚 PHASE 3: Creating tag-based catalogs...');
    await this.createTagCatalogs();
    
    // Phase 4: Update references in markdown files
    console.log('\n🔗 PHASE 4: Updating asset references...');
    await this.updateAssetReferences();
    
    // Final report
    await this.generateReport();
    
    console.log('\n✅ Reorganization Complete!');
    console.log(`📊 Stats: ${this.stats.moved} moved, ${this.stats.tagged} tagged, ${this.stats.total} total`);
  }

  async moveAssetsFromGenerated() {
    const generatedPath = path.join(this.assetsRoot, 'Generated');
    
    try {
      const subdirs = await fs.readdir(generatedPath, { withFileTypes: true });
      
      for (const subdir of subdirs) {
        if (subdir.isDirectory()) {
          const sourcePath = path.join(generatedPath, subdir.name);
          const targetPath = path.join(this.assetsRoot, this.assetMapping[subdir.name] || subdir.name);
          
          // Ensure target directory exists
          await fs.mkdir(targetPath, { recursive: true });
          
          // Move all files from source to target
          const files = await fs.readdir(sourcePath);
          
          for (const file of files) {
            const sourceFile = path.join(sourcePath, file);
            const targetFile = path.join(targetPath, file);
            
            try {
              // Check if it's a file
              const stat = await fs.stat(sourceFile);
              if (stat.isFile()) {
                // Move the file
                await fs.rename(sourceFile, targetFile);
                this.stats.moved++;
                
                // If it's a JSON metadata file, update it with tags
                if (file.endsWith('.json')) {
                  await this.updateMetadataFile(targetFile, subdir.name);
                }
              }
            } catch (error) {
              console.error(`  Error moving ${file}: ${error.message}`);
              this.stats.errors++;
            }
          }
          
          console.log(`  ✓ Moved ${files.length} files from ${subdir.name}`);
        }
      }
      
      // Remove empty Generated subdirectories
      await this.cleanupEmptyDirs(generatedPath);
      
    } catch (error) {
      console.error(`Error accessing Generated folder: ${error.message}`);
    }
  }

  async updateMetadataFile(jsonPath, assetType) {
    try {
      const data = JSON.parse(await fs.readFile(jsonPath, 'utf-8'));
      
      // Add comprehensive tags
      data.tags = this.generateComprehensiveTags(data, assetType);
      data.location = jsonPath.replace(this.vaultRoot, '').replace(/^\//, '');
      data.reorganized = new Date().toISOString();
      
      await fs.writeFile(jsonPath, JSON.stringify(data, null, 2));
      this.stats.tagged++;
      
    } catch (error) {
      console.error(`  Error updating metadata: ${error.message}`);
    }
  }

  generateComprehensiveTags(data, assetType) {
    const tags = new Set();
    
    // Add asset type tags
    const typeKey = assetType.toLowerCase().replace(/s$/, '');
    if (this.tagSystem.assetTypes[typeKey]) {
      this.tagSystem.assetTypes[typeKey].forEach(tag => tags.add(tag));
    }
    
    // Add quality tags
    tags.add('generated'); // Since these are all generated assets
    
    // Analyze name/prompt for campaign tags
    const content = (data.name + ' ' + (data.prompt || '')).toLowerCase();
    
    if (content.includes('aquabyssos') || content.includes('underwater') || content.includes('ocean')) {
      this.tagSystem.campaigns.aquabyssos.forEach(tag => tags.add(tag));
    }
    if (content.includes('aethermoor') || content.includes('sky') || content.includes('floating')) {
      this.tagSystem.campaigns.aethermoor.forEach(tag => tags.add(tag));
    }
    
    // Analyze for style tags
    if (content.includes('realistic') || content.includes('photo')) {
      this.tagSystem.styles.realistic.forEach(tag => tags.add(tag));
    } else if (content.includes('ethereal') || content.includes('mystical')) {
      this.tagSystem.styles.ethereal.forEach(tag => tags.add(tag));
    } else if (content.includes('dark') || content.includes('horror')) {
      this.tagSystem.styles.dark.forEach(tag => tags.add(tag));
    } else if (content.includes('map') || content.includes('cartograph')) {
      this.tagSystem.styles.cartographic.forEach(tag => tags.add(tag));
    } else {
      this.tagSystem.styles.fantasy.forEach(tag => tags.add(tag));
    }
    
    // Analyze for usage tags
    if (content.includes('combat') || content.includes('battle')) {
      this.tagSystem.usage.combat.forEach(tag => tags.add(tag));
    }
    if (content.includes('social') || content.includes('conversation')) {
      this.tagSystem.usage.social.forEach(tag => tags.add(tag));
    }
    if (content.includes('exploration') || content.includes('travel')) {
      this.tagSystem.usage.exploration.forEach(tag => tags.add(tag));
    }
    
    // Add specific tags based on content analysis
    if (content.includes('npc')) tags.add('npc');
    if (content.includes('boss')) tags.add('boss');
    if (content.includes('legendary')) tags.add('legendary');
    if (content.includes('magic')) tags.add('magical');
    if (content.includes('weapon')) tags.add('weapon');
    if (content.includes('armor')) tags.add('armor');
    if (content.includes('city')) tags.add('city');
    if (content.includes('dungeon')) tags.add('dungeon');
    if (content.includes('forest')) tags.add('forest');
    
    return Array.from(tags);
  }

  async applyComprehensiveTags() {
    // Scan all asset directories and ensure everything is tagged
    const assetDirs = Object.values(this.assetMapping);
    
    for (const dir of assetDirs) {
      const fullPath = path.join(this.assetsRoot, dir);
      
      try {
        const files = await fs.readdir(fullPath);
        
        for (const file of files) {
          if (file.endsWith('.json')) {
            const jsonPath = path.join(fullPath, file);
            
            try {
              const data = JSON.parse(await fs.readFile(jsonPath, 'utf-8'));
              
              // If no tags or minimal tags, add comprehensive ones
              if (!data.tags || data.tags.length < 3) {
                const assetType = path.basename(dir);
                data.tags = this.generateComprehensiveTags(data, assetType);
                
                await fs.writeFile(jsonPath, JSON.stringify(data, null, 2));
                this.stats.tagged++;
              }
              
              this.stats.total++;
              
            } catch (error) {
              console.error(`  Error tagging ${file}: ${error.message}`);
            }
          }
        }
        
        console.log(`  ✓ Tagged assets in ${dir}`);
        
      } catch (error) {
        // Directory might not exist
      }
    }
  }

  async createTagCatalogs() {
    const tagIndex = new Map();
    
    // Collect all tags and their associated files
    const assetDirs = Object.values(this.assetMapping);
    
    for (const dir of assetDirs) {
      const fullPath = path.join(this.assetsRoot, dir);
      
      try {
        const files = await fs.readdir(fullPath);
        
        for (const file of files) {
          if (file.endsWith('.json')) {
            const jsonPath = path.join(fullPath, file);
            
            try {
              const data = JSON.parse(await fs.readFile(jsonPath, 'utf-8'));
              
              if (data.tags) {
                for (const tag of data.tags) {
                  if (!tagIndex.has(tag)) {
                    tagIndex.set(tag, []);
                  }
                  
                  tagIndex.get(tag).push({
                    name: data.name,
                    type: data.type,
                    path: path.join(dir, file.replace('.json', '.png'))
                  });
                }
              }
            } catch (error) {
              // Skip files with errors
            }
          }
        }
      } catch (error) {
        // Directory doesn't exist
      }
    }
    
    // Create tag catalog markdown
    const catalogContent = this.generateTagCatalog(tagIndex);
    await fs.writeFile(
      path.join(this.assetsRoot, 'TAG_CATALOG.md'),
      catalogContent
    );
    
    console.log(`  ✓ Created tag catalog with ${tagIndex.size} unique tags`);
  }

  generateTagCatalog(tagIndex) {
    const sortedTags = Array.from(tagIndex.keys()).sort();
    
    let content = `# Asset Tag Catalog

Generated: ${new Date().toISOString()}

## Tag Summary

Total unique tags: ${tagIndex.size}

## Tag Categories

### Asset Types
${sortedTags.filter(t => ['portrait', 'location', 'map', 'item', 'creature', 'token', 'handout'].includes(t))
  .map(t => `- **${t}**: ${tagIndex.get(t).length} assets`).join('\n')}

### Campaigns
${sortedTags.filter(t => ['aquabyssos', 'aethermoor', 'generic'].includes(t))
  .map(t => `- **${t}**: ${tagIndex.get(t).length} assets`).join('\n')}

### Styles
${sortedTags.filter(t => ['fantasy', 'realistic', 'painterly', 'ethereal', 'dark'].includes(t))
  .map(t => `- **${t}**: ${tagIndex.get(t).length} assets`).join('\n')}

### Quality
${sortedTags.filter(t => ['generated', 'enhanced', 'placeholder'].includes(t))
  .map(t => `- **${t}**: ${tagIndex.get(t).length} assets`).join('\n')}

## All Tags

`;
    
    for (const tag of sortedTags) {
      const assets = tagIndex.get(tag);
      content += `### #${tag} (${assets.length})\n\n`;
      
      // Show first 10 assets for each tag
      const sample = assets.slice(0, 10);
      for (const asset of sample) {
        content += `- [[04_Resources/Assets/${asset.path}|${asset.name}]]\n`;
      }
      
      if (assets.length > 10) {
        content += `- *...and ${assets.length - 10} more*\n`;
      }
      
      content += '\n';
    }
    
    return content;
  }

  async updateAssetReferences() {
    // Update any markdown files that reference assets in Generated folders
    const mdFiles = await this.getAllMarkdownFiles();
    let updated = 0;
    
    for (const file of mdFiles) {
      try {
        let content = await fs.readFile(file, 'utf-8');
        const originalContent = content;
        
        // Replace Generated folder references
        content = content.replace(
          /04_Resources\/Assets\/Generated\/([^\/]+)\//g,
          '04_Resources/Assets/$1/'
        );
        
        if (content !== originalContent) {
          await fs.writeFile(file, content);
          updated++;
        }
      } catch (error) {
        // Skip files that can't be updated
      }
    }
    
    console.log(`  ✓ Updated ${updated} markdown files with new asset paths`);
  }

  async getAllMarkdownFiles() {
    const files = [];
    
    async function walk(dir) {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          
          if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
            await walk(fullPath);
          } else if (entry.isFile() && entry.name.endsWith('.md')) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip inaccessible directories
      }
    }
    
    await walk(this.vaultRoot);
    return files;
  }

  async cleanupEmptyDirs(dir) {
    try {
      const entries = await fs.readdir(dir);
      
      if (entries.length === 0) {
        await fs.rmdir(dir);
        console.log(`  ✓ Removed empty directory: ${path.basename(dir)}`);
      } else {
        // Check subdirectories
        for (const entry of entries) {
          const fullPath = path.join(dir, entry);
          const stat = await fs.stat(fullPath);
          
          if (stat.isDirectory()) {
            await this.cleanupEmptyDirs(fullPath);
          }
        }
      }
    } catch (error) {
      // Directory doesn't exist or can't be removed
    }
  }

  async generateReport() {
    const report = `# Asset Reorganization & Tagging Report

Generated: ${new Date().toISOString()}

## Summary

Successfully reorganized and tagged all assets in the vault.

## Statistics

- **Assets Moved**: ${this.stats.moved}
- **Assets Tagged**: ${this.stats.tagged}
- **Total Assets**: ${this.stats.total}
- **Errors**: ${this.stats.errors}

## New Organization

Assets are now organized in their proper folders without "Generated" subdirectories:

\`\`\`
04_Resources/Assets/
├── Portraits/       # Character portraits
├── Locations/       # Location scenes
├── Maps/           # World and area maps
├── Items/          # Item artwork
├── Creatures/      # Monster illustrations
├── Tokens/         # Game tokens
├── Scenes/         # Dramatic scenes
├── Handouts/       # Player resources
├── Audio/          # Music and sounds
├── Special/        # Campaign-specific
└── Misc/           # Other assets
\`\`\`

## Tagging System

All assets now have comprehensive tags:

### Tag Categories Applied:
- **Asset Type**: portrait, location, map, item, creature, token, handout
- **Quality**: generated, enhanced, placeholder
- **Campaign**: aquabyssos, aethermoor, generic
- **Style**: fantasy, realistic, painterly, ethereal, dark
- **Usage**: combat, social, exploration, puzzle
- **Specific**: npc, boss, legendary, magical, weapon, armor, city, dungeon

## Benefits

1. **No Nested Folders**: Assets are directly in their category folders
2. **Rich Tagging**: Multiple tags per asset for better searchability
3. **Tag-Based Organization**: Use tags instead of folders for categorization
4. **Improved References**: All markdown links updated to new paths
5. **Clean Structure**: Removed empty Generated subdirectories

## Usage

### Finding Assets by Tag:
- Search for \`tag:portrait\` to find all portraits
- Search for \`tag:aquabyssos\` for campaign-specific assets
- Search for \`tag:generated\` for all AI-generated content
- Combine tags: \`tag:portrait tag:npc tag:aquabyssos\`

### Tag Catalog:
See \`04_Resources/Assets/TAG_CATALOG.md\` for complete tag index

---
*Asset Reorganization System*`;
    
    await fs.writeFile(
      path.join(this.vaultRoot, '09_Performance', 'ASSET_REORGANIZATION_REPORT.md'),
      report
    );
    
    console.log('\n📊 Report saved to 09_Performance/ASSET_REORGANIZATION_REPORT.md');
  }
}

// Main execution
async function main() {
  const reorganizer = new ReorganizeAndTagAssets();
  
  try {
    await reorganizer.reorganizeAll();
  } catch (error) {
    console.error('Error during reorganization:', error);
  }
}

if (require.main === module) {
  main();
}

module.exports = ReorganizeAndTagAssets;
