---
tags:
- troubleshooting
- guide
- documentation
type: note
aliases: []
created: 2025-07-23 12:39
modified: 2025-07-23 12:39
---
# 🔧 TTRPG Vault Ultra - Troubleshooting Guide

## 🚨 Common Issues & Solutions

### 1. Templates Not Working

#### Issue: "Template not found" error
**Solutions:**
- Check template path is correct: `z_Templates/World Builder Templates/`
- Ensure template file exists
- Verify Templater is enabled
- Check file permissions

**Test:**
```js
// Run in console (Ctrl+Shift+I)
const templatePath = "z_Templates/World Builder Templates/Template-NPC-Ultra.md";
const template = app.vault.getAbstractFileByPath(templatePath);
console.log("Template exists:", !!template);
```

#### Issue: Template variables not replacing
**Solutions:**
- Check Templater settings → Template Folder Location
- Enable "Trigger Templater on new file creation"
- Verify syntax: `{{variable}}` for QuickAdd, `<% variable %>` for Templater
- Check variable names match exactly

### 2. Bases Not Loading

#### Issue: Base file shows as text
**Solutions:**
- Ensure file extension is `.base` not `.base.md`
- Check Bases plugin is installed and enabled
- Restart Obsidian after creating base files
- Verify YAML syntax:

```yaml
# Correct
filters:
  and:
    - tags.contains("NPC")

# Incorrect
filters:
  and:
  - tags.contains("NPC")  # Wrong indentation
```

#### Issue: Empty base views
**Solutions:**
- Check filter syntax matches your properties
- Verify notes have required frontmatter
- Use debug mode:

```yaml
debug: true
views:
  - type: table
    name: Debug View
    filters:
      and:
        - tags  # Shows all notes with tags property
```

### 3. MetaBind Buttons Not Working

#### Issue: Button shows as text
**Solutions:**
1. Check button ID exists in MetaBind settings
2. Verify syntax: `` `BUTTON[buttonId]` ``
3. Restart Obsidian after adding button actions
4. Check for JavaScript errors (Ctrl+Shift+I)

#### Issue: Button action fails
**Common errors and fixes:**
```js
// Error: Cannot read property 'api' of undefined
// Fix: Check plugin is installed
const qa = app.plugins.plugins['quickadd']?.api;
if (!qa) {
  new Notice("QuickAdd plugin not found!");
  return;
}

// Error: Template not found
// Fix: Use correct path
const template = app.vault.getAbstractFileByPath(templatePath);
if (!template) {
  new Notice(`Template not found: ${templatePath}`);
  return;
}
```

### 4. QuickAdd Macros Failing

#### Issue: Macro not executing
**Solutions:**
1. Open QuickAdd settings
2. Verify macro name matches exactly
3. Check macro type is "Macro" not "Template"
4. Enable macro in QuickAdd choices
5. Test in QuickAdd directly before button

#### Issue: Variables not passing to template
**Fix variable format:**
```js
// Correct
params.variables = {
  npcName: name,
  npcRace: race
};

// Wrong - these won't work
params.vars = {...};  
params.npcName = name;
```

### 5. Performance Issues

#### Issue: Vault is slow
**Optimizations:**

1. **Limit base view sizes:**
```yaml
views:
  - type: table
    name: Large Dataset
    pageSize: 50      # Pagination
    lazy: true        # Lazy loading
    limit: 100        # Hard limit
```

2. **Use path filters:**
```yaml
filters:
  and:
    - path.includes("3-Mechanics/CLI/spells")  # Faster
    # Instead of:
    # - tags.contains("spell")  # Slower
```

3. **Disable unused plugins**
4. **Archive old sessions:**
   - Move to `Archive/` folder
   - Exclude from searches

#### Issue: Search is slow
**Solutions:**
- Use Omnisearch instead of default search
- Rebuild search index: Settings → Files & Links → Rebuild search index
- Exclude large folders from search

### 6. Combat Tracker Issues

#### Issue: Images not showing
**Solutions:**
```yaml
# Check image path format
image_path: "z_Assets/Characters/npc.png"  # Correct
image_path: "[[image.png]]"  # Wrong
image_path: "<image.png>"    # Wrong
```

#### Issue: Initiative not sorting
**Fix formula:**
```yaml
formulas:
  InitiativeSort: |
    js:
    // Ensure initiative is a number
    return parseInt(target.initiative) || 0;
```

### 7. Session Note Problems

#### Issue: Auto-numbering fails
**Debug script:**
```js
// Check session detection
const sessions = app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("5-Campaign/Sessions/"))
  .filter(f => f.basename.match(/Session \d+/));

console.log("Found sessions:", sessions.length);
sessions.forEach(s => {
  const num = s.basename.match(/Session (\d+)/)?.[1];
  console.log(`${s.basename} -> Number: ${num}`);
});
```

#### Issue: Recap not generating
**Check:**
- Previous session has `cliffhanger:` in frontmatter
- Previous session has `plotPoints:` array
- Session files follow naming convention

### 8. Import/Migration Issues

#### Issue: CLI content not displaying
**Solutions:**
1. Check folder structure matches:
   ```
   3-Mechanics/
   └── CLI/
       ├── bestiary/
       ├── spells/
       ├── items/
       └── rules/
   ```

2. Verify frontmatter exists in CLI files
3. Rebuild metadata cache: Ctrl+P → "Reload app without saving"

#### Issue: Missing properties after import
**Fix with bulk update:**
```js
// Add missing tags to all NPCs
const npcs = app.vault.getMarkdownFiles()
  .filter(f => f.path.includes("2-World/NPCs/"));

for (const npc of npcs) {
  await app.fileManager.processFrontMatter(npc, fm => {
    if (!fm.tags) fm.tags = [];
    if (!fm.tags.includes("NPC")) {
      fm.tags.push("NPC");
    }
  });
}
```

### 9. Visual Gallery Issues

#### Issue: Gallery not displaying
**Check:**
1. Base file has gallery view type
2. Notes have `image_path` property
3. Image files exist at specified paths
4. File extensions are correct (.png, .jpg, etc.)

#### Issue: Placeholder images not working
**Verify formula:**
```yaml
formulas:
  ImagePath: |
    js:
    if (target.image_path) {
      return target.image_path;
    } else if (target.char_race && target.char_gender) {
      // Check if placeholder exists
      const placeholder = `z_Assets/Placeholder Images/${target.char_race}_${target.char_gender}.png`;
      const file = app.vault.getAbstractFileByPath(placeholder);
      return file ? placeholder : "z_Assets/Placeholder Images/Default.png";
    }
    return "z_Assets/Placeholder Images/Default.png";
```

## 🛠️ Diagnostic Tools

### 1. Check Plugin Status
```js
// Run in console
const requiredPlugins = [
  'templater-obsidian',
  'quickadd',
  'obsidian-meta-bind-plugin',
  'dataview'
];

requiredPlugins.forEach(id => {
  const plugin = app.plugins.plugins[id];
  console.log(`${id}: ${plugin ? '✅ Installed' : '❌ Missing'}`);
});
```

### 2. Verify Folder Structure
```js
// Check if all required folders exist
const folders = [
  '1-Home',
  '2-World/NPCs',
  '2-World/Locations',
  '3-Mechanics/CLI',
  '4-Party',
  '5-Campaign/Sessions',
  'z_Templates'
];

folders.forEach(folder => {
  const exists = app.vault.getAbstractFileByPath(folder);
  console.log(`${folder}: ${exists ? '✅' : '❌'}`);
});
```

### 3. Test Base File
```js
// Test if a base file is valid
const basePath = "0-Scratch Notes/NPC Directory.base";
const baseFile = app.vault.getAbstractFileByPath(basePath);

if (baseFile) {
  const content = await app.vault.read(baseFile);
  try {
    // Basic YAML validation
    const lines = content.split('\n');
    const hasFormulas = lines.some(l => l.startsWith('formulas:'));
    const hasViews = lines.some(l => l.startsWith('views:'));
    
    console.log("Base file validation:");
    console.log("- Has formulas:", hasFormulas);
    console.log("- Has views:", hasViews);
  } catch (e) {
    console.error("Base file error:", e);
  }
}
```

## 🆘 Emergency Fixes

### Reset All NPCs to Active Status
```js
const npcs = app.vault.getMarkdownFiles()
  .filter(f => f.path.includes("2-World/NPCs/"));

for (const npc of npcs) {
  await app.fileManager.processFrontMatter(npc, fm => {
    fm.status = "active";
  });
}
new Notice(`Reset ${npcs.length} NPCs to active`);
```

### Fix All Session Numbers
```js
const sessions = app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("5-Campaign/Sessions/"))
  .sort((a, b) => a.stat.ctime - b.stat.ctime);

for (let i = 0; i < sessions.length; i++) {
  const session = sessions[i];
  await app.fileManager.processFrontMatter(session, fm => {
    fm.sessionNumber = i + 1;
  });
}
new Notice(`Fixed ${sessions.length} session numbers`);
```

### Clear All Combat States
```js
const files = app.vault.getMarkdownFiles();
let count = 0;

for (const file of files) {
  const cache = app.metadataCache.getFileCache(file);
  if (cache?.frontmatter?.in_combat) {
    await app.fileManager.processFrontMatter(file, fm => {
      fm.in_combat = false;
      fm.initiative = null;
      count++;
    });
  }
}
new Notice(`Cleared combat state from ${count} notes`);
```

## 📞 Getting Help

1. **Check Documentation**
   - This guide
   - Plugin documentation
   - [Obsidian Forum](https://forum.obsidian.md)

2. **Debug Mode**
   - Open Developer Console: Ctrl+Shift+I
   - Check for red error messages
   - Look for failed network requests

3. **Community Support**
   - [Obsidian Discord](https://discord.gg/obsidianmd)
   - [TTRPG Obsidian Community](https://discord.gg/ttrpg-obsidian)
   - [r/ObsidianMD](https://reddit.com/r/ObsidianMD)

---

*When reporting issues, include: Obsidian version, plugin versions, error messages, and steps to reproduce.* 