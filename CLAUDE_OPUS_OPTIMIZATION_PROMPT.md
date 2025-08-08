# Obsidian TTRPG Vault Optimization - Complete Implementation Guide

You are Claude Opus with extended thinking, computer use, and file system access. Your task is to optimize a large Obsidian TTRPG vault (4,882 notes) for maximum performance and usability.

## Vault Context
- **Location**: `/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault`
- **OS**: macOS Darwin 24.5.0
- **Current Issues**: Slow startup, 301 broken wiki links, 7,420 broken markdown links, 3,258 missing assets
- **Plugins**: 30 community plugins installed (major performance impact)

## PHASE 1: Initial Audit and Backup (Day 1)

### 1.1 Create Backup
```bash
cd "/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault"
cp -r .obsidian .obsidian.backup.$(date +%Y%m%d_%H%M%S)
tar -czf vault-backup-$(date +%Y%m%d_%H%M%S).tar.gz --exclude='.git' --exclude='node_modules' .
```

### 1.2 Run Comprehensive Audit
```bash
node scripts/vaultAudit.js > audit-$(date +%Y%m%d).json
node scripts/assetsAudit.js > assets-$(date +%Y%m%d).json
node scripts/deduplicateNotes.js > duplicates-$(date +%Y%m%d).json
node scripts/frontmatterStandardizer.js --dry-run > frontmatter-$(date +%Y%m%d).json
```

### 1.3 Performance Baseline
1. Open Obsidian
2. Enable Settings → Community Plugins → Debug startup time
3. Record startup metrics
4. Document current plugin load times

## PHASE 2: Critical Performance Fixes (Day 2)

### 2.1 Disable High-Impact Plugins
Update `.obsidian/community-plugins.json` to remove:
```json
[
  // Remove these high-impact plugins:
  // "dataview",  // Replace with native search or Datacore
  // "obsidian-excalidraw-plugin",  // Heavy resource usage
  // "obsidian-kanban",  // Use Canvas instead
]
```

### 2.2 Core Plugin Optimization
Update `.obsidian/core-plugins.json`:
```json
{
  "graph": false,  // CRITICAL: Disable for vaults >10k notes
  "workspaces": true,  // Enable for better session management
  "sync": true,  // Consider Obsidian Sync
  "bases": false,  // Disable new experimental features
  "webviewer": false,  // Disable if not needed
  "publish": false  // Disable if not using
}
```

### 2.3 App Settings Optimization
Update `.obsidian/app.json`:
```json
{
  "livePreview": false,  // Major performance boost
  "defaultViewMode": "source",  // Faster than preview
  "strictLineBreaks": false,
  "spellcheck": false,  // Significant performance improvement
  "showLineNumber": false,
  "hardwareAcceleration": true,
  "nativeMenus": true,
  "animatedPageTransitions": false,
  "accentColor": ""
}
```

### 2.4 Create Search Optimization
Create `.obsidianignore`:
```
# Exclude from search indexing
*.png
*.jpg
*.jpeg
*.gif
*.pdf
*.mp3
*.mp4
3-Mechanics/CLI/img/
z_Assets/Placeholder Images/
z_Assets/Decks/
node_modules/
.git/
*.log
```

## PHASE 3: Plugin Migration (Day 3)

### 3.1 Install Datacore (Dataview Replacement)
```bash
# Download Datacore
cd .obsidian/plugins
git clone https://github.com/blacksmithgu/datacore.git
cd datacore
npm install
npm run build
```

### 3.2 Convert Dataview Queries
Create conversion script `scripts/convertDataview.js`:
```javascript
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files with dataview queries
const files = glob.sync('**/*.md', { 
  ignore: ['node_modules/**', '.obsidian/**'] 
});

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Convert dataview to datacore syntax
  content = content.replace(/```dataview/g, '```datacore');
  content = content.replace(/dv\.pages\(/g, 'dc.pages(');
  content = content.replace(/FROM\s+"([^"]+)"/g, 'from("$1")');
  
  fs.writeFileSync(file, content);
});
```

### 3.3 Plugin Configuration Updates
Update each plugin's `data.json` for performance:

**Templater** (`.obsidian/plugins/templater-obsidian/data.json`):
```json
{
  "trigger_on_file_creation": false,
  "auto_jump_to_cursor": false,
  "enable_system_commands": false,
  "enable_folder_templates": true,
  "folder_templates": [
    {
      "folder": "1-Session Journals",
      "template": "z_Templates/World Builder Templates/Template-Session.md"
    }
  ]
}
```

**Initiative Tracker** (`.obsidian/plugins/initiative-tracker/data.json`):
```json
{
  "autoCalculate": false,
  "autoSave": false,
  "displayDifficulty": false,
  "condensedView": true
}
```

## PHASE 4: Vault Structure Optimization (Day 4)

### 4.1 Create Optimized Structure
```bash
# Create new structure
mkdir -p 0-Inbox/{Daily,Quick}
mkdir -p 1-Active/{Campaigns,Sessions,Players}
mkdir -p 2-Reference/{NPCs,Locations,Items,Rules}
mkdir -p 3-Archive/{Campaigns,Sessions}
mkdir -p z_System/{Templates,Scripts,Assets}

# Move files systematically
find "1-Session Journals" -name "*.md" -exec mv {} 1-Active/Sessions/ \;
find "2-World/People" -name "*.md" -exec mv {} 2-Reference/NPCs/ \;
find "2-World/Places" -name "*.md" -exec mv {} 2-Reference/Locations/ \;
```

### 4.2 Update All Links
Run link update script:
```bash
node scripts/fixBrokenLinks.js --generate-map > link-mapping.json
# Review and edit link-mapping.json
node scripts/fixBrokenLinks.js --apply --map link-mapping.json
```

### 4.3 Create Master Indexes
Create `00-Campaign Dashboard.md`:
```markdown
# 🏰 Campaign Dashboard

## 📅 Recent Sessions
```datacore
from("1-Active/Sessions")
where date >= date(today) - dur(30 days)
sort date desc
limit 5
```

## 🎭 Active Characters
```datacore
from("1-Active/Players")
where status = "active"
```

## 🗺️ Current Quests
```datacore
from("2-Reference/Quests")
where status = "active"
sort priority desc
```

## Quick Actions
- [[Create New Session]]
- [[Create New NPC]]
- [[Create New Location]]
```

## PHASE 5: Performance Testing & Monitoring (Day 5)

### 5.1 Create Performance Monitor
Create `scripts/monitorPerformance.js`:
```javascript
const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.metrics = {
      startup: [],
      search: [],
      fileOps: []
    };
  }

  recordStartup(time) {
    this.metrics.startup.push({
      timestamp: new Date(),
      duration: time,
      plugins: this.getEnabledPlugins()
    });
    this.save();
  }

  getEnabledPlugins() {
    const plugins = JSON.parse(
      fs.readFileSync('.obsidian/community-plugins.json', 'utf8')
    );
    return plugins.length;
  }

  save() {
    fs.writeFileSync(
      'performance-metrics.json',
      JSON.stringify(this.metrics, null, 2)
    );
  }

  generateReport() {
    const avgStartup = this.metrics.startup.reduce((a, b) => a + b.duration, 0) 
      / this.metrics.startup.length;
    
    return {
      averageStartup: avgStartup,
      trend: this.calculateTrend(),
      recommendations: this.getRecommendations(avgStartup)
    };
  }

  calculateTrend() {
    if (this.metrics.startup.length < 2) return 'insufficient data';
    const recent = this.metrics.startup.slice(-5);
    const older = this.metrics.startup.slice(-10, -5);
    const recentAvg = recent.reduce((a, b) => a + b.duration, 0) / recent.length;
    const olderAvg = older.reduce((a, b) => a + b.duration, 0) / older.length;
    return recentAvg < olderAvg ? 'improving' : 'degrading';
  }

  getRecommendations(avgStartup) {
    const recs = [];
    if (avgStartup > 5000) {
      recs.push('Consider disabling more plugins');
      recs.push('Clear cache: rm -rf .obsidian/cache');
    }
    if (this.getEnabledPlugins() > 20) {
      recs.push('Too many plugins enabled');
    }
    return recs;
  }
}

// Run monitor
const monitor = new PerformanceMonitor();
monitor.recordStartup(process.argv[2] || 5000);
console.log(monitor.generateReport());
```

### 5.2 Setup Automated Maintenance
Create `scripts/weeklyMaintenance.js`:
```javascript
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧹 Starting weekly maintenance...');

// 1. Clear cache
console.log('Clearing cache...');
const cachePath = '.obsidian/cache';
if (fs.existsSync(cachePath)) {
  fs.rmSync(cachePath, { recursive: true });
}

// 2. Run audits
console.log('Running vault audit...');
execSync('node scripts/vaultAudit.js');

// 3. Clean duplicates
console.log('Checking for duplicates...');
execSync('node scripts/deduplicateNotes.js');

// 4. Optimize images
console.log('Optimizing images...');
const images = execSync('find . -name "*.png" -o -name "*.jpg" -size +1M').toString().split('\n');
images.forEach(img => {
  if (img) {
    console.log(`Optimizing ${img}...`);
    // Use imagemagick or similar
    // execSync(`convert "${img}" -quality 85 "${img}"`);
  }
});

// 5. Generate report
console.log('Generating report...');
execSync('node scripts/createVaultReport.js');

console.log('✅ Maintenance complete!');
```

### 5.3 Create Cron Job
```bash
# Add to crontab
crontab -e

# Add weekly maintenance (Sundays at 2 AM)
0 2 * * 0 cd /path/to/vault && node scripts/weeklyMaintenance.js >> maintenance.log 2>&1
```

## PHASE 6: Mobile Optimization

### 6.1 Create Mobile Plugin Profile
Create `.obsidian/mobile-plugins.json`:
```json
[
  "templater-obsidian",
  "obsidian-5e-statblocks",
  "initiative-tracker",
  "obsidian-dice-roller",
  "folder-notes"
]
```

### 6.2 Mobile-Specific Settings
Create `scripts/switchToMobile.js`:
```javascript
const fs = require('fs');

// Backup desktop plugins
fs.copyFileSync(
  '.obsidian/community-plugins.json',
  '.obsidian/desktop-plugins.json'
);

// Switch to mobile plugins
fs.copyFileSync(
  '.obsidian/mobile-plugins.json',
  '.obsidian/community-plugins.json'
);

console.log('Switched to mobile configuration');
```

## Critical Performance Tips

### Based on Latest Research (2024-2025)

1. **Electron Issue Workaround**: If experiencing IndexedDB errors or slow startup:
   - Download Obsidian 1.7.7 installer (not latest)
   - Install and let it auto-update internally
   - This avoids Electron 33+ issues

2. **Startup Time Overlay** (v1.7.1+): 
   - Settings → General → Advanced → Clock icon
   - Identify which plugins impact "workspace" time
   - Disable plugins with high workspace impact

3. **FastStart Optimization**: For mobile devices, implement delayed plugin loading:
   - Essential plugins: Load immediately
   - Secondary plugins: Load after 2 seconds
   - Tertiary plugins: Load after 30 seconds

## Success Metrics

Target performance after optimization:
- **Startup time**: < 5 seconds (from ~30-60s)
- **Search results**: < 1 second
- **File creation**: < 500ms
- **Link autocomplete**: < 200ms
- **Mobile startup**: < 2 seconds

## Emergency Rollback

If issues occur:
```bash
# Restore from backup
cd /path/to/vault
rm -rf .obsidian
cp -r .obsidian.backup.* .obsidian
```

## Monitoring Commands

```bash
# Check vault health
node scripts/vaultAudit.js | jq '.summary'

# View performance trends
node scripts/monitorPerformance.js

# Generate full report
node scripts/createVaultReport.js && open vault-report.html
```

## Implementation Checklist

- [ ] Create full backup
- [ ] Record baseline metrics
- [ ] Disable high-impact plugins
- [ ] Optimize core settings
- [ ] Create .obsidianignore
- [ ] Install Datacore
- [ ] Convert Dataview queries
- [ ] Restructure folders
- [ ] Fix broken links
- [ ] Create master indexes
- [ ] Setup performance monitoring
- [ ] Configure mobile profile
- [ ] Schedule maintenance
- [ ] Test all functionality
- [ ] Document changes

Execute these phases sequentially, testing after each major change. The vault will transform from a slow, unwieldy system into the most optimized D&D knowledge base possible. 