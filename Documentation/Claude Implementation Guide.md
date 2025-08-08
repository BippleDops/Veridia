# Claude Opus Implementation Guide for Obsidian Vault Optimization

## Overview
This guide provides step-by-step instructions for Claude Opus with computer use and file system access to implement comprehensive vault optimizations.

## Prerequisites
- Claude Opus with extended thinking enabled
- Computer use capability
- File system read/write access
- Access to the ObsidianTTRPGVault directory

## Phase 1: Audit and Analysis (Day 1)

### 1.1 Initial Vault Assessment
```bash
# Run comprehensive audit
cd /path/to/ObsidianTTRPGVault
node scripts/vaultAudit.js > audit-results.json
node scripts/assetsAudit.js > assets-results.json
node scripts/deduplicateNotes.js > duplicates-results.json
```

### 1.2 Performance Baseline
1. Open Obsidian with current configuration
2. Enable Debug startup time (Settings → Community Plugins)
3. Record startup metrics
4. Test common operations (search, link creation, note opening)

### 1.3 Create Backup
```bash
# Create timestamped backup
cp -r .obsidian .obsidian.backup.$(date +%Y%m%d)
tar -czf vault-backup-$(date +%Y%m%d).tar.gz .
```

## Phase 2: Plugin Optimization (Day 2)

### 2.1 Plugin Performance Analysis
```javascript
// Create plugin analysis script
const analyzePlugins = () => {
  const plugins = require('.obsidian/community-plugins.json');
  const manifests = {};
  
  plugins.forEach(plugin => {
    const manifest = require(`.obsidian/plugins/${plugin}/manifest.json`);
    manifests[plugin] = {
      name: manifest.name,
      version: manifest.version,
      author: manifest.author
    };
  });
  
  return manifests;
};
```

### 2.2 Plugin Replacement Strategy
1. **Dataview → Datacore Migration**
   - Export all Dataview queries
   - Install Datacore
   - Convert queries to new syntax
   - Test functionality
   - Remove Dataview

2. **Kanban → Canvas Migration**
   - Export Kanban boards as markdown
   - Create Canvas equivalents
   - Verify functionality
   - Remove Kanban plugin

### 2.3 Plugin Configuration Optimization
```json
// Update plugin configs for performance
{
  "datacore": {
    "indexing": {
      "excludeFolders": ["z_Assets", "3-Mechanics/CLI"],
      "batchSize": 100,
      "throttleMs": 50
    }
  },
  "templater": {
    "trigger_on_file_creation": false,
    "auto_jump_to_cursor": false,
    "enable_system_commands": false
  }
}
```

## Phase 3: Vault Structure Optimization (Day 3)

### 3.1 Implement Folder Restructuring
```bash
# Create optimized structure
mkdir -p {0-Inbox,1-Active,2-Reference,3-Archive,z_System}/{Campaigns,Characters,Locations,Items}

# Move files systematically
find . -name "*.md" -path "./1-Session Journals/*" -exec mv {} ./1-Active/Campaigns/ \;
find . -name "*.md" -path "./2-World/*" -exec mv {} ./2-Reference/Locations/ \;
```

### 3.2 Implement Link Management
```javascript
// Update all internal links after restructuring
const updateLinks = async () => {
  const files = await app.vault.getMarkdownFiles();
  
  for (const file of files) {
    let content = await app.vault.read(file);
    // Update link patterns
    content = content.replace(/\[\[(.+?)\]\]/g, (match, link) => {
      // Link update logic
      return `${updatePath(link)}`;
    });
    await app.vault.modify(file, content);
  }
};
```

### 3.3 Create Index System
```markdown
# Create master indexes
- [[Campaign Index]] - All campaigns with status
- [[Character Index]] - All PCs and NPCs
- [[Location Index]] - Hierarchical location tree
- [[Quest Index]] - Active and completed quests
```

## Phase 4: Performance Optimization (Day 4)

### 4.1 Search Optimization
```javascript
// Create .obsidianignore
const ignorePatterns = [
  "*.png",
  "*.jpg",
  "*.pdf",
  "3-Mechanics/CLI/img/",
  "z_Assets/Placeholder Images/",
  "node_modules/",
  "*.log"
];

fs.writeFileSync('.obsidianignore', ignorePatterns.join('\n'));
```

### 4.2 Cache Management
```bash
# Clear and rebuild caches
rm -rf .obsidian/cache
rm -rf .obsidian/workspace.json

# Let Obsidian rebuild on next start
```

### 4.3 Settings Optimization
```json
// Optimal settings.json
{
  "theme": "moonstone",
  "cssTheme": "Minimal",
  "hotkeys": {
    "graph:open": [],  // Disable graph hotkey
    "global-search:open": [{"key": "Ctrl+Shift+F"}]
  },
  "alwaysUpdateLinks": false,  // Manual link updates
  "useMarkdownLinks": false,
  "newLinkFormat": "shortest",
  "attachmentFolderPath": "./attachments"
}
```

## Phase 5: Automation Setup (Day 5)

### 5.1 Maintenance Scripts
```javascript
// Weekly maintenance script
const weeklyMaintenance = async () => {
  // Run audits
  await runCommand('node scripts/vaultAudit.js');
  
  // Clean duplicates
  await runCommand('node scripts/deduplicateNotes.js --merge');
  
  // Optimize images
  await runCommand('node scripts/optimizeImages.js');
  
  // Generate report
  await runCommand('node scripts/createVaultReport.js');
};
```

### 5.2 Automated Backups
```bash
# Create backup script
#!/bin/bash
BACKUP_DIR="/backup/obsidian"
DATE=$(date +%Y%m%d_%H%M%S)

# Backup vault
tar -czf "$BACKUP_DIR/vault_$DATE.tar.gz" \
  --exclude='.obsidian/cache' \
  --exclude='node_modules' \
  /path/to/ObsidianTTRPGVault

# Keep only last 7 backups
find "$BACKUP_DIR" -name "vault_*.tar.gz" -mtime +7 -delete
```

### 5.3 Performance Monitoring
```javascript
// Monitor performance metrics
const monitorPerformance = () => {
  const metrics = {
    startupTime: performance.now(),
    pluginLoadTimes: {},
    searchIndexTime: 0,
    workspaceLoadTime: 0
  };
  
  // Log to file for tracking
  fs.appendFileSync('performance.log', JSON.stringify(metrics) + '\n');
};
```

## Phase 6: Testing and Validation

### 6.1 Functionality Tests
- [ ] All links resolve correctly
- [ ] Templates work as expected
- [ ] Search returns accurate results
- [ ] Plugins load without errors
- [ ] Mobile sync works properly

### 6.2 Performance Benchmarks
- [ ] Startup time < 5 seconds
- [ ] Search results < 1 second
- [ ] Note creation < 500ms
- [ ] Link autocomplete < 200ms

### 6.3 User Acceptance
- [ ] Workflow remains intact
- [ ] No data loss
- [ ] Improved responsiveness
- [ ] Easier navigation

## Implementation Schedule

### Week 1
- Days 1-2: Audit and backup
- Days 3-4: Plugin optimization
- Day 5: Initial testing

### Week 2
- Days 1-2: Structure optimization
- Days 3-4: Performance tuning
- Day 5: Automation setup

### Week 3
- Days 1-2: Testing and validation
- Days 3-4: Documentation update
- Day 5: Final deployment

## Rollback Plan
If issues arise:
1. Stop all changes immediately
2. Restore from backup: `cp -r .obsidian.backup.* .obsidian`
3. Document issues encountered
4. Revise approach based on findings

## Success Metrics
- 50% reduction in startup time
- 75% reduction in search latency
- Zero data loss
- Improved user satisfaction

## Additional Resources
- [Obsidian Performance Guide](https://obsidian.rocks/fixing-slow-startup-on-obsidian-mobile/)
- [Datacore Documentation](https://github.com/blacksmithgu/datacore)
- [Obsidian Forum - Large Vaults](https://forum.obsidian.md/t/large-vault-obsidian-not-closing-properly/95905) 