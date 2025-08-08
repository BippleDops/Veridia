# Plugin Optimization Guide

## Current Plugin Analysis

### Community Plugins (30 installed)
Based on research and best practices for large vaults, here's an optimization strategy:

## Performance Impact Analysis

### High Impact Plugins (Consider Alternatives/Removal)
1. **Dataview** - Major performance impact on large vaults
   - Alternative: Use native Obsidian search/queries or Datacore (newer, faster)
   - If keeping: Limit queries, avoid complex operations

2. **Excalidraw** - Heavy resource usage
   - Alternative: Use external drawing tool, import as images
   - If keeping: Close drawings when not in use

3. **Kanban** - Can slow down with many boards
   - Alternative: Use native Canvas feature
   - If keeping: Limit number of boards

### Medium Impact Plugins (Optimize Settings)
1. **Initiative Tracker** - Complex calculations
   - Optimization: Disable auto-calculations, manual refresh only

2. **Charts/ChartsView** - Rendering overhead
   - Optimization: Static charts where possible

3. **Various Complements** - Background indexing
   - Optimization: Limit suggestion sources

### Low Impact Plugins (Generally Safe)
- Style Settings
- Folder Notes
- Markdown Attributes
- Table Editor
- Text Format

## Recommended Configuration Changes

### 1. Core Plugin Optimization
```json
{
  "graph": false,  // Disable for vaults >10k notes
  "workspaces": true,  // Enable for better session management
  "sync": true,  // Consider Obsidian Sync for large vaults
  "bases": false  // New feature, may impact performance
}
```

### 2. App Settings Optimization
```json
{
  "strictLineBreaks": false,
  "vimMode": false,  // Unless actively used
  "legacyEditor": false,
  "livePreview": false,  // For better performance
  "defaultViewMode": "source",  // Faster than preview
  "showLineNumber": false,
  "spellcheck": false,  // Significant performance boost
  "hardwareAcceleration": true  // Enable if supported
}
```

### 3. Search & Indexing
- Exclude large folders from search
- Use `.obsidianignore` for non-note files
- Disable "Files & Links" core plugin if not needed

## Plugin-Specific Optimizations

### Dataview
```javascript
// Use this in settings
{
  "renderNullAs": "-",
  "warnOnEmptyResult": false,
  "refreshEnabled": false,  // Manual refresh only
  "refreshInterval": 2500,
  "enableDataviewJs": false,  // Unless required
  "enableInlineDataview": false
}
```

### Templater
- Use simple templates
- Avoid complex JavaScript
- Cache template results

### Style Settings
- Minimize CSS variables
- Avoid complex selectors
- Use native themes when possible

## Performance Monitoring

### Enable Debug Mode
1. Settings → Community Plugins → Debug startup time
2. Monitor which plugins take longest to load
3. Consider using Plugin Groups for delayed loading

### Regular Maintenance
1. Clear cache monthly: `.obsidian/cache`
2. Rebuild search index: Settings → Files & Links → Rebuild
3. Remove unused plugins completely

## Vault Structure Optimization

### Folder Organization
```
/
├── 0-Inbox/          # Temporary notes
├── 1-Active/         # Current campaigns/sessions
├── 2-Reference/      # Static reference material
├── 3-Archive/        # Completed campaigns
└── z_System/         # Templates, assets, etc.
```

### File Naming
- Use consistent prefixes
- Avoid special characters
- Keep names under 100 characters

## Mobile Optimization
For mobile devices, create a separate plugin profile:
- Disable Dataview
- Disable Excalidraw
- Minimal visual plugins
- Focus on note-taking essentials

## Recommended Plugin Stack for Large D&D Vaults

### Essential (Keep)
1. **Templater** - Note creation
2. **Folder Notes** - Organization
3. **Style Settings** - Customization
4. **BRAT** - Beta testing
5. **5e Statblocks** - D&D specific

### Consider Replacing
1. **Dataview** → Native search or Datacore
2. **Kanban** → Canvas
3. **Various Complements** → Limit to essential

### Consider Removing
1. Duplicate functionality plugins
2. Rarely used visual plugins
3. Heavy processing plugins

## Implementation Priority
1. **Immediate**: Disable graph view, optimize search
2. **Short-term**: Review and remove unused plugins
3. **Medium-term**: Restructure vault organization
4. **Long-term**: Implement automated maintenance 

---

## Phase 5 Plugin Configuration (Applied)

### Dataview
- Added limits to new dashboard queries (5–12 rows) to keep render times low.
- Prefer simple property filters; avoid heavy `map`/`reduce` in inline JS.

### Dice Roller
- Enable inline rolls using `dice: ...` syntax in templates.
- Examples added:
  - Session: `dice: 1d20+X|Ability Check`
  - Encounter: `dice: 1d20+Dex|Initiative`
  - NPC/PC: `dice: 1d20+X|Deception`

### Fantasy Calendar
- Source file: `04_Resources/Calendars/Aethel.json`.
- Configuration: In plugin settings → Calendars → Import `Aethel.json` and set as default.
- Content guidance: add `event_date: YYYY-MM-DD` (and optional `event_location`) to notes to surface in Upcoming Events.

### Initiative Tracker + 5e Statblocks
- Use HP fields `current_hp` and `max_hp` for compatibility with Initiative views and LowHP badge.
- Keep AC in `ac`; optional conditions flags: `is_concentrating`, `is_prone`, etc.

### Mobile Profile
- Ensure heavy views have limits; use card/table views over unbounded galleries.