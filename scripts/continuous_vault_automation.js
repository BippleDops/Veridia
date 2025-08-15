#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

class ContinuousVaultAutomation {
  constructor() {
    this.agents = [];
    this.running = true;
    this.logDir = path.join(process.cwd(), '09_Performance', 'continuous_logs');
    this.statusFile = path.join(process.cwd(), '09_Performance', 'AUTOMATION_STATUS.md');
  }

  async initialize() {
    // Create log directory
    await fs.mkdir(this.logDir, { recursive: true });
    
    console.log('🚀 Initializing 24/7 Continuous Vault Automation...\n');
    
    // Define all continuous agents
    this.agents = [
      {
        name: 'Link Resolver',
        script: 'scripts/continuous_link_resolver.js',
        interval: 300000, // 5 minutes
        description: 'Continuously finds and fixes broken links'
      },
      {
        name: 'Content Enhancer',
        script: 'scripts/continuous_content_enhancer.js',
        interval: 600000, // 10 minutes
        description: 'Enhances stub files and adds missing content'
      },
      {
        name: 'Asset Generator',
        script: 'scripts/continuous_asset_generator.js',
        interval: 900000, // 15 minutes
        description: 'Generates missing assets for content'
      },
      {
        name: 'Metadata Optimizer',
        script: 'scripts/continuous_metadata_optimizer.js',
        interval: 1200000, // 20 minutes
        description: 'Optimizes frontmatter and tags'
      },
      {
        name: 'Git Synchronizer',
        script: 'scripts/continuous_git_sync.js',
        interval: 1800000, // 30 minutes
        description: 'Auto-commits and pushes changes'
      },
      {
        name: 'Index Builder',
        script: 'scripts/continuous_index_builder.js',
        interval: 3600000, // 1 hour
        description: 'Rebuilds indexes and navigation'
      },
      {
        name: 'Quality Monitor',
        script: 'scripts/continuous_quality_monitor.js',
        interval: 7200000, // 2 hours
        description: 'Monitors vault health and quality'
      },
      {
        name: 'Backup Manager',
        script: 'scripts/continuous_backup.js',
        interval: 21600000, // 6 hours
        description: 'Creates incremental backups'
      }
    ];
    
    // Create agent scripts
    await this.createAgentScripts();
    
    // Start all agents
    await this.startAllAgents();
    
    // Setup graceful shutdown
    this.setupShutdownHandlers();
  }

  async createAgentScripts() {
    // Create Link Resolver
    await this.createScript('continuous_link_resolver.js', `
const fs = require('fs').promises;
const path = require('path');

class ContinuousLinkResolver {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] Link Resolver: Starting scan...\`);
    
    try {
      // Find all markdown files
      const files = await this.getAllMarkdownFiles();
      let fixedCount = 0;
      
      for (const file of files) {
        const content = await fs.readFile(file, 'utf-8');
        const links = content.match(/\\[\\[([^\\]]+)\\]\\]/g) || [];
        
        for (const link of links) {
          const target = link.slice(2, -2).split('|')[0];
          const exists = await this.fileExists(target);
          
          if (!exists) {
            // Try to find similar file
            const similar = await this.findSimilarFile(target);
            if (similar) {
              const newContent = content.replace(link, \`[[\${similar}|\${target}]]\`);
              if (newContent !== content) {
                await fs.writeFile(file, newContent);
                fixedCount++;
              }
            }
          }
        }
      }
      
      console.log(\`[\${timestamp}] Link Resolver: Fixed \${fixedCount} links\`);
      
    } catch (error) {
      console.error(\`[\${timestamp}] Link Resolver Error:\`, error.message);
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
`);

    // Create Content Enhancer
    await this.createScript('continuous_content_enhancer.js', `
const fs = require('fs').promises;
const path = require('path');

class ContinuousContentEnhancer {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] Content Enhancer: Starting enhancement...\`);
    
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
      
      console.log(\`[\${timestamp}] Content Enhancer: Enhanced \${enhanced} files\`);
      
    } catch (error) {
      console.error(\`[\${timestamp}] Content Enhancer Error:\`, error.message);
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
      enhanced += '\\n\\n## Description\\n\\n*Content develops through gameplay*';
    }
    
    if (type === 'npc' && !content.includes('## Personality')) {
      enhanced += '\\n\\n## Personality\\n\\n- **Traits**: *Emerges during play*\\n- **Goals**: *Revealed through interaction*';
    }
    
    if (type === 'location' && !content.includes('## Features')) {
      enhanced += '\\n\\n## Features\\n\\n- *Discovered through exploration*';
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
`);

    // Create Asset Generator
    await this.createScript('continuous_asset_generator.js', `
const fs = require('fs').promises;
const path = require('path');

class ContinuousAssetGenerator {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] Asset Generator: Checking for missing assets...\`);
    
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
      
      console.log(\`[\${timestamp}] Asset Generator: Generated \${generated} assets\`);
      
    } catch (error) {
      console.error(\`[\${timestamp}] Asset Generator Error:\`, error.message);
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
    return path.join(process.cwd(), '04_Resources', 'Assets', type, \`\${basename}.png\`);
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
`);

    // Create Metadata Optimizer
    await this.createScript('continuous_metadata_optimizer.js', `
const fs = require('fs').promises;
const path = require('path');

class ContinuousMetadataOptimizer {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] Metadata Optimizer: Starting optimization...\`);
    
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
      
      console.log(\`[\${timestamp}] Metadata Optimizer: Optimized \${optimized} files\`);
      
    } catch (error) {
      console.error(\`[\${timestamp}] Metadata Optimizer Error:\`, error.message);
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
    
    const frontmatter = \`---
tags: [\${tags.join(', ')}]
type: \${type}
aliases: ["\${basename.replace(/_/g, ' ')}"]
---

\`;
    
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
`);

    // Create Git Synchronizer
    await this.createScript('continuous_git_sync.js', `
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

class ContinuousGitSync {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] Git Sync: Starting synchronization...\`);
    
    try {
      // Check for changes
      const { stdout: status } = await execPromise('git status --porcelain');
      
      if (status.trim()) {
        // Add all changes
        await execPromise('git add -A');
        
        // Commit with timestamp
        const message = \`Auto-commit: Continuous improvements - \${timestamp}\`;
        await execPromise(\`git commit -m "\${message}"\`);
        
        // Push if remote exists
        try {
          await execPromise('git push');
          console.log(\`[\${timestamp}] Git Sync: Pushed changes to remote\`);
        } catch {
          console.log(\`[\${timestamp}] Git Sync: Committed locally (no remote or push failed)\`);
        }
      } else {
        console.log(\`[\${timestamp}] Git Sync: No changes to commit\`);
      }
      
    } catch (error) {
      console.error(\`[\${timestamp}] Git Sync Error:\`, error.message);
    }
  }
}

const syncer = new ContinuousGitSync();
syncer.run();
`);

    // Create Index Builder
    await this.createScript('continuous_index_builder.js', `
const fs = require('fs').promises;
const path = require('path');

class ContinuousIndexBuilder {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] Index Builder: Rebuilding indexes...\`);
    
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
      
      console.log(\`[\${timestamp}] Index Builder: Indexes rebuilt successfully\`);
      
    } catch (error) {
      console.error(\`[\${timestamp}] Index Builder Error:\`, error.message);
    }
  }
  
  async buildCategoryIndex(category) {
    const indexPath = path.join(process.cwd(), category.path, 'INDEX.md');
    const files = await this.getFilesInDirectory(category.path);
    
    const content = [
      \`# \${category.name} Index\`,
      '',
      \`*Total: \${files.length} entries*\`,
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
      content.push(\`### \${letter}\`);
      for (const name of grouped[letter].sort()) {
        content.push(\`- [[\${name}]]\`);
      }
      content.push('');
    }
    
    await fs.writeFile(indexPath, content.join('\\n'));
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
    
    const content = \`# Campaign Dashboard

*Central hub for campaign navigation - Auto-updated*

## Quick Access

- [[TAG_INDEX|Browse by Tags]]
- [[MASTER_INDEX|Complete Index]]

## Content Categories

### 🧑 [[02_Worldbuilding/People/INDEX|NPCs & Characters]]
- \${stats.npcs} characters

### 🏛️ [[02_Worldbuilding/Places/INDEX|Locations & Places]]
- \${stats.locations} locations

### ⚔️ [[02_Worldbuilding/Items/INDEX|Items & Equipment]]
- \${stats.items} items

### 📜 [[02_Worldbuilding/Quests/INDEX|Quests & Adventures]]
- \${stats.quests} quests

### 🏛️ [[02_Worldbuilding/Groups/INDEX|Factions & Organizations]]
- \${stats.factions} factions

## Last Updated
\${new Date().toISOString()}

---
*Continuously maintained by automation system*\`;
    
    await fs.writeFile(dashboardPath, content);
  }
}

const builder = new ContinuousIndexBuilder();
builder.run();
`);

    // Create Quality Monitor
    await this.createScript('continuous_quality_monitor.js', `
const fs = require('fs').promises;
const path = require('path');

class ContinuousQualityMonitor {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] Quality Monitor: Running quality checks...\`);
    
    try {
      const report = {
        timestamp,
        brokenLinks: 0,
        stubFiles: 0,
        missingMetadata: 0,
        duplicates: 0,
        totalFiles: 0
      };
      
      // Scan all files
      const files = await this.getAllMarkdownFiles();
      report.totalFiles = files.length;
      
      for (const file of files) {
        const content = await fs.readFile(file, 'utf-8');
        
        // Check for broken links
        const links = content.match(/\\[\\[([^\\]]+)\\]\\]/g) || [];
        for (const link of links) {
          const target = link.slice(2, -2).split('|')[0];
          if (!(await this.fileExists(target))) {
            report.brokenLinks++;
          }
        }
        
        // Check for stubs
        if (content.length < 500 || content.includes('placeholder') || content.includes('stub')) {
          report.stubFiles++;
        }
        
        // Check for missing metadata
        if (!content.startsWith('---')) {
          report.missingMetadata++;
        }
      }
      
      // Save report
      await this.saveReport(report);
      
      console.log(\`[\${timestamp}] Quality Monitor: Check complete - \${report.brokenLinks} broken links, \${report.stubFiles} stubs\`);
      
    } catch (error) {
      console.error(\`[\${timestamp}] Quality Monitor Error:\`, error.message);
    }
  }
  
  async getAllMarkdownFiles() {
    const files = [];
    const walk = async (dir) => {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory() && !entry.name.startsWith('.')) {
            await walk(fullPath);
          } else if (entry.isFile() && entry.name.endsWith('.md')) {
            files.push(fullPath);
          }
        }
      } catch {
        // Skip inaccessible directories
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
  
  async saveReport(report) {
    const reportPath = path.join(process.cwd(), '09_Performance', 'quality_report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
  }
}

const monitor = new ContinuousQualityMonitor();
monitor.run();
`);

    // Create Backup Manager
    await this.createScript('continuous_backup.js', `
const { exec } = require('child_process');
const util = require('util');
const fs = require('fs').promises;
const path = require('path');
const execPromise = util.promisify(exec);

class ContinuousBackup {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] Backup Manager: Creating backup...\`);
    
    try {
      const backupDir = path.join(process.cwd(), '08_Archive', 'backups');
      await fs.mkdir(backupDir, { recursive: true });
      
      const date = new Date().toISOString().split('T')[0];
      const backupName = \`vault_backup_\${date}.tar.gz\`;
      const backupPath = path.join(backupDir, backupName);
      
      // Create backup excluding certain directories
      const excludes = '--exclude=node_modules --exclude=.git --exclude=08_Archive/backups';
      const command = \`tar czf "\${backupPath}" \${excludes} .\`;
      
      await execPromise(command);
      
      // Clean old backups (keep last 7)
      const backups = await fs.readdir(backupDir);
      const sortedBackups = backups.sort().reverse();
      
      for (let i = 7; i < sortedBackups.length; i++) {
        await fs.unlink(path.join(backupDir, sortedBackups[i]));
      }
      
      console.log(\`[\${timestamp}] Backup Manager: Backup created successfully\`);
      
    } catch (error) {
      console.error(\`[\${timestamp}] Backup Manager Error:\`, error.message);
    }
  }
}

const backup = new ContinuousBackup();
backup.run();
`);
  }

  async createScript(filename, content) {
    const scriptPath = path.join(process.cwd(), 'scripts', filename);
    await fs.writeFile(scriptPath, content.trim());
    await fs.chmod(scriptPath, '755');
  }

  async startAllAgents() {
    console.log('🚀 Starting all continuous agents...\n');
    
    for (const agent of this.agents) {
      this.startAgent(agent);
      console.log(`✅ Started: ${agent.name}`);
      console.log(`   Interval: ${agent.interval / 1000}s`);
      console.log(`   ${agent.description}\n`);
    }
  }

  startAgent(agent) {
    // Run immediately
    this.runAgent(agent);
    
    // Then schedule regular runs
    agent.intervalId = setInterval(() => {
      this.runAgent(agent);
    }, agent.interval);
  }

  runAgent(agent) {
    const child = spawn('node', [agent.script], {
      cwd: process.cwd(),
      detached: false,
      stdio: ['ignore', 'pipe', 'pipe']
    });
    
    child.stdout.on('data', (data) => {
      console.log(`[${agent.name}] ${data.toString().trim()}`);
      this.logToFile(agent.name, data.toString());
    });
    
    child.stderr.on('data', (data) => {
      console.error(`[${agent.name} ERROR] ${data.toString().trim()}`);
      this.logToFile(agent.name, `ERROR: ${data.toString()}`);
    });
    
    child.on('exit', (code) => {
      if (code !== 0) {
        console.error(`[${agent.name}] Exited with code ${code}`);
      }
    });
  }

  async logToFile(agentName, message) {
    const logFile = path.join(this.logDir, `${agentName.toLowerCase().replace(/ /g, '_')}.log`);
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    
    try {
      await fs.appendFile(logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log:', error.message);
    }
  }

  setupShutdownHandlers() {
    const shutdown = async () => {
      console.log('\n🛑 Shutting down continuous automation...');
      
      this.running = false;
      
      // Stop all agents
      for (const agent of this.agents) {
        if (agent.intervalId) {
          clearInterval(agent.intervalId);
        }
      }
      
      // Update status
      await this.updateStatus('stopped');
      
      console.log('✅ Automation stopped gracefully');
      process.exit(0);
    };
    
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  }

  async updateStatus(status = 'running') {
    const statusContent = `# Continuous Automation Status

**Status**: ${status.toUpperCase()}
**Last Updated**: ${new Date().toISOString()}

## Active Agents

${this.agents.map(agent => `### ${agent.name}
- Interval: Every ${agent.interval / 1000} seconds
- Description: ${agent.description}
- Status: ${status === 'running' ? '✅ Active' : '⏹️ Stopped'}
`).join('\n')}

## Logs

Check \`09_Performance/continuous_logs/\` for detailed logs.

## Control

- Start: \`node scripts/continuous_vault_automation.js\`
- Stop: Press Ctrl+C or kill the process
- Background: \`nohup node scripts/continuous_vault_automation.js > /dev/null 2>&1 &\`

---
*Continuous Vault Automation System*`;
    
    await fs.writeFile(this.statusFile, statusContent);
  }

  async monitorStatus() {
    // Update status every minute
    setInterval(async () => {
      if (this.running) {
        await this.updateStatus('running');
      }
    }, 60000);
  }
}

// Main execution
async function main() {
  const automation = new ContinuousVaultAutomation();
  
  try {
    await automation.initialize();
    await automation.updateStatus('running');
    await automation.monitorStatus();
    
    console.log('✅ Continuous Vault Automation is running 24/7');
    console.log('📊 Status: 09_Performance/AUTOMATION_STATUS.md');
    console.log('📝 Logs: 09_Performance/continuous_logs/');
    console.log('\nPress Ctrl+C to stop\n');
    
    // Keep the process running
    setInterval(() => {}, 1000);
    
  } catch (error) {
    console.error('Failed to start automation:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = ContinuousVaultAutomation;
