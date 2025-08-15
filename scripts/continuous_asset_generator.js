const fs = require('fs').promises;
const path = require('path');

class ContinuousAssetGenerator {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Asset Generator: Checking for missing assets...`);
    
    try {
      const files = await this.findFilesNeedingAssets();
      let generated = 0;
      
      for (const file of files.slice(0, 3)) { // Process 3 at a time
        const assetPath = await this.generateAssetPath(file);
        
        if (!(await this.assetExists(assetPath))) {
          await this.generatePlaceholderAsset(assetPath);
          generated++;
        }
      }
      
      console.log(`[${timestamp}] Asset Generator: Generated ${generated} assets`);
      
    } catch (error) {
      console.error(`[${timestamp}] Asset Generator Error:`, error.message);
    }
  }
  
  async findFilesNeedingAssets() {
    const files = [];
    const npcs = path.join(process.cwd(), '02_Worldbuilding', 'People');
    const locations = path.join(process.cwd(), '02_Worldbuilding', 'Places');
    
    for (const dir of [npcs, locations]) {
      try {
        const entries = await fs.readdir(dir);
        for (const entry of entries) {
          if (entry.endsWith('.md')) {
            files.push(path.join(dir, entry));
          }
        }
      } catch {
        // Directory doesn't exist
      }
    }
    
    return files;
  }
  
  generateAssetPath(file) {
    const basename = path.basename(file, '.md');
    const type = file.includes('People') ? 'Portraits' : 'Locations';
    return path.join(process.cwd(), '04_Resources', 'Assets', type, `${basename}.png`);
  }
  
  async assetExists(assetPath) {
    try {
      await fs.access(assetPath);
      return true;
    } catch {
      return false;
    }
  }
  
  async generatePlaceholderAsset(assetPath) {
    // Create directory if needed
    await fs.mkdir(path.dirname(assetPath), { recursive: true });
    
    // Create a simple placeholder text file for now
    const placeholder = 'Placeholder asset - will be replaced with actual image';
    await fs.writeFile(assetPath + '.placeholder', placeholder);
  }
}

const generator = new ContinuousAssetGenerator();
generator.run();