const fs = require('fs').promises;
const path = require('path');

class ContinuousLinkResolver {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Link Resolver: Starting scan...`);
    
    try {
      // Find all markdown files
      const files = await this.getAllMarkdownFiles();
      let fixedCount = 0;
      
      for (const file of files) {
        const content = await fs.readFile(file, 'utf-8');
        const links = content.match(/\[\[([^\]]+)\]\]/g) || [];
        
        for (const link of links) {
          const target = link.slice(2, -2).split('|')[0];
          const exists = await this.fileExists(target);
          
          if (!exists) {
            // Try to find similar file
            const similar = await this.findSimilarFile(target);
            if (similar) {
              const newContent = content.replace(link, `[[${similar}|${target}]]`);
              if (newContent !== content) {
                await fs.writeFile(file, newContent);
                fixedCount++;
              }
            }
          }
        }
      }
      
      console.log(`[${timestamp}] Link Resolver: Fixed ${fixedCount} links`);
      
    } catch (error) {
      console.error(`[${timestamp}] Link Resolver Error:`, error.message);
    }
  }
  
  async getAllMarkdownFiles() {
    const files = [];
    const walk = async (dir) => {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory() && !entry.name.startsWith('.')) {
          await walk(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.md')) {
          files.push(fullPath);
        }
      }
    };
    await walk(process.cwd());
    return files;
  }
  
  async fileExists(target) {
    try {
      await fs.access(path.join(process.cwd(), target + '.md'));
      return true;
    } catch {
      return false;
    }
  }
  
  async findSimilarFile(target) {
    // Implementation for finding similar files
    return null;
  }
}

const resolver = new ContinuousLinkResolver();
resolver.run();