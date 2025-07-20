# Obsidian Best Practices Research Summary

## Key Findings from 2024-2025

### 1. Performance Optimization for Large Vaults

#### Critical Performance Factors (from Obsidian Forum & Obsidian Rocks)
- **Vault Size Threshold**: Performance issues typically start at 10,000+ notes
- **Major Bottlenecks**:
  - Graph view (disable for vaults >10k notes)
  - Dataview plugin (especially with open queries at startup)
  - Workspace loading with many tabs
  - IndexedDB issues with Electron 33+ (v1.5.8+)

#### Proven Solutions
1. **Use Obsidian v1.7.7 installer** with internal updates (avoids Electron issues)
2. **Disable problematic plugins on mobile**: Tasks, Dataview
3. **Enable Plugin Groups** for delayed loading
4. **Use .obsidianignore** for non-note files

### 2. Plugin Ecosystem Evolution

#### Dataview Alternatives (2024-2025)
- **Datacore**: Faster, more efficient successor to Dataview
- **Native Obsidian Bases**: New built-in database feature
- **Recommendation**: Migrate from Dataview for vaults >5k notes

#### Essential Plugin Stack for TTRPG
1. **Core Functionality**
   - Templater (note creation)
   - Folder Notes (organization)
   - Meta Bind (interactive elements)
   
2. **D&D Specific**
   - Initiative Tracker
   - 5e Statblocks
   - Dice Roller
   
3. **Performance-Safe**
   - Style Settings
   - BRAT (beta testing)
   - Markdown Attributes

### 3. Vault Organization Strategies

#### Minimalist Approach (from PhD20 & Atomic Object)
- **One vault for all D&D content** (not separate per campaign)
- **Simple folder structure** over complex tagging
- **Unique filenames** for easy Quick Switcher use
- **Regular archiving** of completed content

#### Recommended Structure
```
/
├── Atlas/           # World/setting information
├── Campaigns/       # Active campaigns only
├── Characters/      # NPCs across all campaigns
├── Resources/       # Rules, tables, references
├── Archive/         # Completed campaigns
└── _System/         # Templates, scripts, assets
```

### 4. Mobile Optimization

#### Startup Time Improvements (Obsidian 1.7.1+)
- **New Startup Time Overlay**: Settings → General → Advanced
- **Identify problem plugins**: Focus on "workspace" load time
- **Critical finding**: Plugins with custom views impact workspace time

#### Mobile-Specific Settings
```json
{
  "plugins": {
    "disable": ["dataview", "tasks", "excalidraw"],
    "delayLoad": ["style-settings", "templater"]
  }
}
```

### 5. Search and Indexing

#### Optimization Techniques
1. **Exclude patterns in .obsidianignore**:
   ```
   *.png
   *.jpg
   *.pdf
   /Archives/
   /Attachments/
   ```

2. **Search operators for efficiency**:
   - Use `path:` to limit scope
   - Use `file:` for filename search
   - Avoid regex in large vaults

3. **Alternative search**: Omnisearch plugin (but monitor performance)

### 6. Syncing Best Practices

#### Avoid Conflicts
- **Never combine**: Obsidian Sync + OneDrive/Dropbox
- **Choose one**: Either Obsidian Sync OR third-party
- **Git for version control**: Safe with proper .gitignore

#### Recommended .gitignore
```
.obsidian/workspace*
.obsidian/cache
.obsidian/plugins/*/data.json
.trash/
.DS_Store
```

### 7. Future-Proofing Strategies

#### Sustainable Practices
1. **Avoid over-engineering**: Simple systems survive longer
2. **Regular maintenance**: Weekly cache clearing, monthly reorganization
3. **Document everything**: Keep README files in each major folder
4. **Version control**: Git for templates and scripts

#### Migration Preparedness
- Keep notes in standard Markdown
- Avoid plugin-specific syntax where possible
- Export important data regularly
- Maintain compatibility with other tools

### 8. Community Innovations

#### Emerging Patterns (2024-2025)
1. **Canvas for visual organization** (replacing Kanban/Excalidraw)
2. **Properties over YAML** for metadata
3. **Callouts for visual hierarchy** (native feature)
4. **Bookmarks replacing Starred** plugin

#### TTRPG-Specific Innovations
- **Tasha's Notes of Everything** approach: Automated note wizard
- **Initiative Tracker** integration with other tools
- **Leaflet maps** for interactive campaign maps
- **Meta Bind** for character sheets and forms

### 9. Performance Monitoring

#### Key Metrics to Track
- Startup time (target: <5 seconds)
- Search response (<1 second)
- File creation (<500ms)
- Plugin load times (debug mode)

#### Regular Health Checks
```javascript
// Weekly performance audit
- Clear cache
- Check for orphaned attachments
- Review plugin load times
- Update plugin versions
- Compact vault (remove .trash)
```

### 10. Electron Issue Workaround

#### Current Status (as of 2025)
- **Problem**: Electron 33+ causes IndexedDB lock issues
- **Affected versions**: Obsidian 1.5.8+
- **Solution**: Use 1.7.7 installer, update internally
- **Timeline**: Awaiting Electron 30+ integration

## Implementation Priority Matrix

### Immediate Actions (High Impact, Low Effort)
1. Disable graph view
2. Install Plugin Groups
3. Create .obsidianignore
4. Clear cache

### Short-term (High Impact, Medium Effort)
1. Migrate from Dataview to alternatives
2. Restructure folders
3. Implement maintenance scripts
4. Optimize mobile settings

### Long-term (Medium Impact, High Effort)
1. Full vault reorganization
2. Template standardization
3. Automation implementation
4. Complete plugin audit

## Resources and References
- [Obsidian Forum - Performance](https://forum.obsidian.md/)
- [Obsidian Rocks](https://obsidian.rocks/)
- [PhD20 D&D Organization](https://phd20.com/)
- [Kepano's Minimal Theme](https://github.com/kepano/obsidian-minimal)
- [Obsidian Hub](https://obsidian.hub/) 