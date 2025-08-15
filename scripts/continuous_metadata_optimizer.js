const fs = require('fs').promises;
const path = require('path');

class ContinuousMetadataOptimizer {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Metadata Optimizer: Starting optimization...`);
    
    try {
      const files = await this.findFilesNeedingMetadata();
      let optimized = 0;
      
      for (const file of files.slice(0, 10)) { // Process 10 at a time
        const content = await fs.readFile(file, 'utf-8');
        const optimizedContent = await this.optimizeMetadata(file, content);
        
        if (optimizedContent !== content) {
          await fs.writeFile(file, optimizedContent);
          optimized++;
        }
      }
      
      console.log(`[${timestamp}] Metadata Optimizer: Optimized ${optimized} files`);
      
    } catch (error) {
      console.error(`[${timestamp}] Metadata Optimizer Error:`, error.message);
    }
  }
  
  async findFilesNeedingMetadata() {
    const files = [];
    const walk = async (dir) => {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory() && !entry.name.startsWith('.')) {
            await walk(fullPath);
          } else if (entry.isFile() && entry.name.endsWith('.md')) {
            const content = await fs.readFile(fullPath, 'utf-8');
            if (!content.startsWith('---')) {
              files.push(fullPath);
            }
          }
        }
      } catch {
        // Skip inaccessible directories
      }
    };
    await walk(process.cwd());
    return files;
  }
  
  async optimizeMetadata(file, content) {
    if (content.startsWith('---')) {
      return content; // Already has frontmatter
    }
    
    const type = this.detectType(file);
    const tags = this.generateTags(type, file);
    const basename = path.basename(file, '.md');
    
    const frontmatter = `---
tags: [${tags.join(', ')}]
type: ${type}
aliases: ["${basename.replace(/_/g, ' ')}"]
---

`;
    
    return frontmatter + content;
  }
  
  detectType(file) {
    const filePath = file.toLowerCase();
    if (filePath.includes('people') || filePath.includes('npc')) return 'npc';
    if (filePath.includes('place') || filePath.includes('location')) return 'location';
    if (filePath.includes('item')) return 'item';
    if (filePath.includes('quest')) return 'quest';
    if (filePath.includes('group') || filePath.includes('faction')) return 'faction';
    return 'misc';
  }
  
  generateTags(type, file) {
    const tags = [];
    const typeMap = {
      npc: ['npc', 'character'],
      location: ['location', 'place'],
      item: ['item', 'equipment'],
      quest: ['quest', 'adventure'],
      faction: ['faction', 'organization'],
      misc: ['misc']
    };
    
    tags.push(...(typeMap[type] || typeMap.misc));
    
    if (file.includes('Aquabyssos')) tags.push('aquabyssos');
    if (file.includes('Aethermoor')) tags.push('aethermoor');
    
    return tags;
  }
}

const optimizer = new ContinuousMetadataOptimizer();
optimizer.run();