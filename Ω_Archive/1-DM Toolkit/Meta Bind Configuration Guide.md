---
tags:
- documentation
- meta-bind
- configuration
type: note
aliases: []
created: 2025-07-23 12:39
modified: 2025-07-23 12:39
---
# Meta Bind Configuration Guide

This guide will help you set up Meta Bind buttons and input field templates for the Visual Gallery system.

## 📌 Button Scripts

Add these to your Meta Bind settings under **Button Actions**:

### 🖼️ Image Management Buttons

#### `chooseImage`
```js
const tp = app.plugins.plugins['templater-obsidian'].templater;
const currentFile = app.workspace.getActiveFile();

// Get all image files
const imageFiles = app.vault.getFiles()
  .filter(f => f.extension.match(/^(jpg|jpeg|png|gif|webp)$/i))
  .filter(f => f.path.startsWith('z_Assets/'));

// Create display names
const imageChoices = imageFiles.map(f => {
  const parts = f.path.split('/');
  return `${parts[parts.length - 2]}/${f.name}`;
});

// Get full paths
const imagePaths = imageFiles.map(f => f.path);

// Show suggester
const chosenPath = await tp.system.suggester(imageChoices, imagePaths, true);

if (chosenPath && currentFile) {
  await app.fileManager.processFrontMatter(currentFile, fm => {
    fm.image_path = chosenPath;
  });
}
```

#### `addCharacterImage`
```js
const tp = app.plugins.plugins['templater-obsidian'].templater;
const characterName = await tp.system.prompt("Enter character name:");
if (!characterName) return;

// Find character file
const files = app.vault.getMarkdownFiles();
const charFile = files.find(f => f.basename === characterName);

if (!charFile) {
  new Notice(`Character "${characterName}" not found`);
  return;
}

// Get image path
const imagePath = await tp.system.prompt("Image path (or drag & drop):");
if (!imagePath) return;

// Update frontmatter
await app.fileManager.processFrontMatter(charFile, fm => {
  fm.image_path = imagePath;
  fm.image_category = "Character";
  if (!fm.image_tags) fm.image_tags = [];
  if (!fm.image_tags.includes("portrait")) {
    fm.image_tags.push("portrait");
  }
});

new Notice(`Image added to ${characterName}`);
```

#### `addLocationImage`
```js
const tp = app.plugins.plugins['templater-obsidian'].templater;

// Get all location folders
const folders = [
  "2-World/Hubs",
  "2-World/Places", 
  "2-World/Regions",
  "2-World/Points of Interest"
];

// Get all location files
const locationFiles = [];
for (const folder of folders) {
  const files = app.vault.getMarkdownFiles()
    .filter(f => f.path.startsWith(folder + "/"));
  locationFiles.push(...files);
}

// Show suggester
const choices = locationFiles.map(f => f.basename);
const values = locationFiles.map(f => f);
const chosenFile = await tp.system.suggester(choices, values, true);

if (!chosenFile) return;

// Get image path
const imagePath = await tp.system.prompt("Image path:");
if (!imagePath) return;

// Update frontmatter
await app.fileManager.processFrontMatter(chosenFile, fm => {
  fm.image_path = imagePath;
  fm.image_category = "Location";
});

new Notice(`Image added to ${chosenFile.basename}`);
```

#### `button_person`
```js
// Refresh relationship diagram
const currentFile = app.workspace.getActiveFile();
if (currentFile) {
  // Force refresh by toggling preview
  const leaf = app.workspace.activeLeaf;
  if (leaf) {
    await leaf.setViewState({
      type: 'markdown',
      state: { mode: 'source' }
    });
    setTimeout(async () => {
      await leaf.setViewState({
        type: 'markdown',
        state: { mode: 'preview' }
      });
    }, 100);
  }
}
```

### ⚔️ Combat Buttons

#### `addToCombat`
```js
const currentFile = app.workspace.getActiveFile();
if (!currentFile) return;

await app.fileManager.processFrontMatter(currentFile, fm => {
  fm.in_combat = true;
  if (!fm.initiative) {
    fm.initiative = Math.floor(Math.random() * 20) + 1;
  }
  if (!fm.current_hp && fm.max_hp) {
    fm.current_hp = fm.max_hp;
  }
});

new Notice(`${currentFile.basename} added to combat!`);
```

#### `removeFromCombat`
```js
const currentFile = app.workspace.getActiveFile();
if (!currentFile) return;

await app.fileManager.processFrontMatter(currentFile, fm => {
  fm.in_combat = false;
  fm.initiative = null;
  // Reset conditions
  fm.is_stunned = false;
  fm.is_prone = false;
  fm.is_grappled = false;
  fm.is_invisible = false;
  fm.is_concentrating = false;
});

new Notice(`${currentFile.basename} removed from combat!`);
```

## 📝 Input Field Templates

Add these to Meta Bind settings under **Input Field Templates**:

### `template-Race`
```yaml
type: inlineSelect
options:
  - { value: "Human", label: "Human" }
  - { value: "Elf", label: "Elf" }
  - { value: "Dwarf", label: "Dwarf" }
  - { value: "Halfling", label: "Halfling" }
  - { value: "Dragonborn", label: "Dragonborn" }
  - { value: "Gnome", label: "Gnome" }
  - { value: "Half-Elf", label: "Half-Elf" }
  - { value: "Half-Orc", label: "Half-Orc" }
  - { value: "Tiefling", label: "Tiefling" }
  - { value: "Aasimar", label: "Aasimar" }
  - { value: "Firbolg", label: "Firbolg" }
  - { value: "Goliath", label: "Goliath" }
  - { value: "Kenku", label: "Kenku" }
  - { value: "Lizardfolk", label: "Lizardfolk" }
  - { value: "Tabaxi", label: "Tabaxi" }
  - { value: "Triton", label: "Triton" }
  - { value: "Bugbear", label: "Bugbear" }
  - { value: "Goblin", label: "Goblin" }
  - { value: "Hobgoblin", label: "Hobgoblin" }
  - { value: "Kobold", label: "Kobold" }
  - { value: "Orc", label: "Orc" }
  - { value: "Yuan-ti", label: "Yuan-ti" }
  - { value: "Other", label: "Other" }
```

### `template-ItemRarity`
```yaml
type: inlineSelect
options:
  - { value: "Common", label: "Common" }
  - { value: "Uncommon", label: "Uncommon" }
  - { value: "Rare", label: "Rare" }
  - { value: "Very Rare", label: "Very Rare" }
  - { value: "Legendary", label: "Legendary" }
  - { value: "Artifact", label: "Artifact" }
```

### `template-ItemType`
```yaml
type: inlineSelect
options:
  - { value: "Armor", label: "Armor" }
  - { value: "Weapon", label: "Weapon" }
  - { value: "Potion", label: "Potion" }
  - { value: "Ring", label: "Ring" }
  - { value: "Rod", label: "Rod" }
  - { value: "Scroll", label: "Scroll" }
  - { value: "Staff", label: "Staff" }
  - { value: "Wand", label: "Wand" }
  - { value: "Wondrous Item", label: "Wondrous Item" }
```

## 🎨 CSS Snippets

To enhance the visual display, add this CSS snippet:

```css
/* Meta Bind Gallery Enhancements */
.meta-bind-gallery {
  gap: 1rem;
}

.meta-bind-gallery-item {
  border: 1px solid var(--background-modifier-border);
  border-radius: 8px;
  padding: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.meta-bind-gallery-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Rarity borders for items */
.item-rarity-common { border-color: #808080 !important; }
.item-rarity-uncommon { border-color: #00FF00 !important; }
.item-rarity-rare { border-color: #0080FF !important; }
.item-rarity-very-rare { border-color: #800080 !important; }
.item-rarity-legendary { border-color: #FFA500 !important; }
.item-rarity-artifact { border-color: #FF0000 !important; }

/* Combat tracker health bars */
progress {
  appearance: none;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
}

progress::-webkit-progress-bar {
  background-color: #333;
  border-radius: 10px;
}

progress::-webkit-progress-value {
  border-radius: 10px;
  transition: width 0.3s ease;
}
```

## 🚀 Usage Tips

1. **Image Organization**: Keep your images organized in `z_Assets/` with subfolders:
   - `z_Assets/Characters/`
   - `z_Assets/Locations/`
   - `z_Assets/Items/`
   - `z_Assets/Monsters/`

2. **Bulk Image Import**: Use the Templater plugin to bulk update image paths:
   ```js
   // Example: Bulk update all characters in a folder
   const folder = "2-World/People";
   const files = app.vault.getMarkdownFiles()
     .filter(f => f.path.startsWith(folder));
   
   for (const file of files) {
     // Your logic here
   }
   ```

3. **Dynamic Placeholders**: The system automatically falls back to placeholder images based on properties like race, gender, and type.

4. **Performance**: For large vaults, consider limiting gallery views to specific folders or tags to improve performance.

## 🔧 Troubleshooting

- **Images not showing**: Check that image paths are relative to vault root
- **Buttons not working**: Ensure Templater is installed and enabled
- **Bases not loading**: Check that the .base files are in the correct format
- **Meta Bind errors**: Update to the latest version of the plugin

---

*Remember to restart Obsidian after adding button scripts to Meta Bind settings!* 