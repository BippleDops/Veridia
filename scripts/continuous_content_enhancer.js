const fs = require('fs').promises;
const path = require('path');

class ContinuousContentEnhancer {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Content Enhancer: Starting enhancement...`);
    
    try {
      const files = await this.findStubFiles();
      let enhanced = 0;
      
      for (const file of files.slice(0, 5)) { // Process 5 at a time
        const content = await fs.readFile(file, 'utf-8');
        
        if (content.length < 500 && (content.includes('placeholder') || content.includes('stub'))) {
          const enhancedContent = await this.enhanceContent(file, content);
          if (enhancedContent !== content) {
            await fs.writeFile(file, enhancedContent);
            enhanced++;
          }
        }
      }
      
      console.log(`[${timestamp}] Content Enhancer: Enhanced ${enhanced} files`);
      
    } catch (error) {
      console.error(`[${timestamp}] Content Enhancer Error:`, error.message);
    }
  }
  
  async findStubFiles() {
    const files = [];
    const walk = async (dir) => {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory() && !entry.name.startsWith('.')) {
            await walk(fullPath);
          } else if (entry.isFile() && entry.name.endsWith('.md')) {
            const stats = await fs.stat(fullPath);
            if (stats.size < 1000) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip inaccessible directories
      }
    };
    await walk(process.cwd());
    return files;
  }
  
  async enhanceContent(file, content) {
    const basename = path.basename(file, '.md');
    const type = this.detectType(file);
    
    // Add appropriate sections based on type
    let enhanced = content;
    
    if (!content.includes('## Description')) {
      enhanced += '\n\n## Description\n\n*Content develops through gameplay*';
    }
    
    if (type === 'npc' && !content.includes('## Personality')) {
      enhanced += '\n\n## Personality\n\n- **Traits**: *Emerges during play*\n- **Goals**: *Revealed through interaction*';
    }
    
    if (type === 'location' && !content.includes('## Features')) {
      enhanced += '\n\n## Features\n\n- *Discovered through exploration*';
    }
    
    return enhanced;
  }
  
  detectType(file) {
    const filePath = file.toLowerCase();
    if (filePath.includes('people') || filePath.includes('npc')) return 'npc';
    if (filePath.includes('place') || filePath.includes('location')) return 'location';
    if (filePath.includes('item')) return 'item';
    if (filePath.includes('quest')) return 'quest';
    return 'misc';
  }
}

const enhancer = new ContinuousContentEnhancer();
enhancer.run();