const fs = require('fs').promises;
const path = require('path');

class ContinuousIndexBuilder {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Index Builder: Rebuilding indexes...`);
    
    try {
      // Update category indexes
      const categories = [
        { path: '02_Worldbuilding/People', name: 'NPCs' },
        { path: '02_Worldbuilding/Places', name: 'Locations' },
        { path: '02_Worldbuilding/Items', name: 'Items' },
        { path: '02_Worldbuilding/Quests', name: 'Quests' },
        { path: '02_Worldbuilding/Groups', name: 'Factions' }
      ];
      
      for (const category of categories) {
        await this.buildCategoryIndex(category);
      }
      
      // Update master dashboard
      await this.updateDashboard();
      
      console.log(`[${timestamp}] Index Builder: Indexes rebuilt successfully`);
      
    } catch (error) {
      console.error(`[${timestamp}] Index Builder Error:`, error.message);
    }
  }
  
  async buildCategoryIndex(category) {
    const indexPath = path.join(process.cwd(), category.path, 'INDEX.md');
    const files = await this.getFilesInDirectory(category.path);
    
    const content = [
      `# ${category.name} Index`,
      '',
      `*Total: ${files.length} entries*`,
      '',
      '## All Entries',
      ''
    ];
    
    const grouped = {};
    for (const file of files) {
      const basename = path.basename(file, '.md');
      if (basename === 'INDEX') continue;
      
      const firstLetter = basename[0].toUpperCase();
      if (!grouped[firstLetter]) grouped[firstLetter] = [];
      grouped[firstLetter].push(basename);
    }
    
    for (const letter of Object.keys(grouped).sort()) {
      content.push(`### ${letter}`);
      for (const name of grouped[letter].sort()) {
        content.push(`- [[${name}]]`);
      }
      content.push('');
    }
    
    await fs.writeFile(indexPath, content.join('\n'));
  }
  
  async getFilesInDirectory(dir) {
    const fullPath = path.join(process.cwd(), dir);
    const files = [];
    
    try {
      const entries = await fs.readdir(fullPath);
      for (const entry of entries) {
        if (entry.endsWith('.md')) {
          files.push(entry);
        }
      }
    } catch {
      // Directory doesn't exist
    }
    
    return files;
  }
  
  async updateDashboard() {
    const dashboardPath = path.join(process.cwd(), 'Campaign_Dashboard.md');
    
    // Count files in each category
    const stats = {
      npcs: (await this.getFilesInDirectory('02_Worldbuilding/People')).length,
      locations: (await this.getFilesInDirectory('02_Worldbuilding/Places')).length,
      items: (await this.getFilesInDirectory('02_Worldbuilding/Items')).length,
      quests: (await this.getFilesInDirectory('02_Worldbuilding/Quests')).length,
      factions: (await this.getFilesInDirectory('02_Worldbuilding/Groups')).length
    };
    
    const content = `# Campaign Dashboard

*Central hub for campaign navigation - Auto-updated*

## Quick Access

- [[TAG_INDEX|Browse by Tags]]
- [[MASTER_INDEX|Complete Index]]

## Content Categories

### 🧑 [[02_Worldbuilding/People/INDEX|NPCs & Characters]]
- ${stats.npcs} characters

### 🏛️ [[02_Worldbuilding/Places/INDEX|Locations & Places]]
- ${stats.locations} locations

### ⚔️ [[02_Worldbuilding/Items/INDEX|Items & Equipment]]
- ${stats.items} items

### 📜 [[02_Worldbuilding/Quests/INDEX|Quests & Adventures]]
- ${stats.quests} quests

### 🏛️ [[02_Worldbuilding/Groups/INDEX|Factions & Organizations]]
- ${stats.factions} factions

## Last Updated
${new Date().toISOString()}

---
*Continuously maintained by automation system*`;
    
    await fs.writeFile(dashboardPath, content);
  }
}

const builder = new ContinuousIndexBuilder();
builder.run();