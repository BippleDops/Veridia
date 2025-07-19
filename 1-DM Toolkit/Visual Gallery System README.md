---
tags:
  - documentation
  - visual-gallery
  - readme
---

# 🎨 Visual Gallery System for D&D 5e TTRPG Vault

This system enhances your D&D vault with dynamic image galleries that link pictures to note properties using Meta Bind and custom bases.

## 📋 Overview

The Visual Gallery System provides:
- **Dynamic Image Galleries** - Visual displays of characters, locations, items, and monsters
- **Smart Image Fallbacks** - Automatic placeholder images based on note properties
- **Interactive Combat Tracker** - Visual initiative tracking with health bars
- **Item Showcase** - Rarity-based visual item management
- **Property-Based Formulas** - Dynamic content generation using Meta Bind

## 🚀 Quick Start

1. **Install Required Plugins**:
   - Meta Bind
   - Dataview
   - Templater
   - TTRPG Statblocks (optional but recommended)

2. **Configure Meta Bind**:
   - Open Settings → Meta Bind
   - Add button scripts from `Meta Bind Configuration Guide.md`
   - Add input field templates for races, items, etc.

3. **Start Using Templates**:
   - Use `Template-Person-Enhanced.md` for new characters
   - Use `Template-Place-Enhanced.md` for new locations
   - Access galleries via `Visual Gallery Dashboard.md`

## 📁 File Structure

```
1-DM Toolkit/
├── Visual Gallery Dashboard.md     # Main dashboard
├── Meta Bind Configuration Guide.md # Setup instructions
└── Visual Gallery System README.md  # This file

0-Scratch Notes/
├── Image Library.base      # Character & location galleries
├── Combat Tracker.base     # Initiative & combat management
├── Item Showcase.base      # Item visual management
└── Monster Gallery.base    # Bestiary with images

z_Templates/World Builder Templates/
├── Template-Person-Enhanced.md  # Enhanced character template
└── Template-Place-Enhanced.md   # Enhanced location template

z_Assets/
├── Characters/          # Character portraits
├── Locations/           # Location images
├── Items/              # Item icons
├── Monsters/           # Monster art
└── Placeholder Images/ # Fallback images
```

## 🎯 Key Features

### 1. Dynamic Image Display
Images automatically display based on the `image_path` property, with intelligent fallbacks:
- Characters: Falls back to `{race}_{gender}.png`
- Locations: Falls back to `{category}_Location.png`
- Items: Falls back to `Item_{type}.png`
- Monsters: Falls back to creature type images

### 2. Visual Galleries
Access different gallery views:
- **Character Gallery**: Grid view of all NPCs with portraits
- **Location Gallery**: Visual map of all locations
- **Monster Gallery**: Bestiary organized by CR and type
- **Item Showcase**: Items displayed with rarity borders

### 3. Combat Tracker
Visual initiative tracking with:
- Character/monster portraits
- Dynamic health bars
- Status condition tracking
- One-click combat management

### 4. Property Formulas
Meta Bind formulas that dynamically generate content:
```javascript
// Example: Dynamic image path
ImagePath: |
  js:
  if (target.image_path) {
    return target.image_path;
  } else if (target.char_race && target.char_gender) {
    return `z_Assets/Placeholder Images/${target.char_race}_${target.char_gender}.png`;
  }
```

## 🛠️ Usage Guide

### Adding Images to Characters

1. **Method 1 - Direct Edit**:
   - Open character note
   - Add `image_path: z_Assets/Characters/portrait.png` to frontmatter
   
2. **Method 2 - Button**:
   - Click "Select from gallery" button in character note
   - Choose image from picker

3. **Method 3 - Dashboard**:
   - Open Visual Gallery Dashboard
   - Click "Add Character Portrait"
   - Select character and image

### Creating Visual Encounters

1. Add combatants to notes with properties:
   ```yaml
   in_combat: true
   initiative: 15
   current_hp: 45
   max_hp: 45
   ac: 16
   ```

2. View in Combat Tracker base or dashboard

### Managing Item Collections

Items automatically display with:
- Rarity-colored borders
- Type-based icons
- Value and weight info
- Magic property summaries

## 🎨 Customization

### Adding Placeholder Images

Place default images in `z_Assets/Placeholder Images/`:
- `Human_Male.png`, `Elf_Female.png` (character defaults)
- `Commerce_Location.png`, `Military_Location.png` (location defaults)
- `Weapon.png`, `Armor.png`, `Potion.png` (item defaults)
- `Dragon.png`, `Undead.png`, `Beast.png` (monster defaults)

### Creating New Views

Edit `.base` files to add custom views:
```yaml
views:
  - type: gallery
    name: Custom Gallery
    filters:
      and:
        - your_property.equals("value")
    columns: 4
    properties:
      - formula.ImageDisplay
      - file.name
```

### Styling with CSS

Add to a CSS snippet:
```css
/* Custom gallery styling */
.meta-bind-gallery-item {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Rarity glow effects */
.item-rarity-legendary {
  box-shadow: 0 0 10px #FFA500;
}
```

## 📊 Base Components

### Image Library Base
- **Character Gallery**: Visual NPC roster
- **Location Gallery**: Place visualization
- **All Images**: Image management table

### Combat Tracker Base
- **Initiative Tracker**: Turn order with portraits
- **Combat Gallery**: Quick combat overview

### Item Showcase Base
- **Item Gallery**: All items with icons
- **Inventory Manager**: Character inventories
- **Magic Item Showcase**: Rare+ items only

### Monster Gallery Base
- **Monster Gallery**: Full bestiary
- **Encounter Builder**: CR-sorted table
- **Boss Gallery**: Legendary creatures
- **By Environment**: Filtered by terrain

## 🐛 Troubleshooting

**Images not displaying?**
- Check image paths are relative to vault root
- Verify image file exists
- Ensure Meta Bind is enabled

**Galleries not loading?**
- Install/enable required plugins
- Check .base file syntax
- Restart Obsidian

**Buttons not working?**
- Add button scripts to Meta Bind settings
- Enable Templater plugin
- Check for JavaScript errors (Ctrl+Shift+I)

## 🚦 Performance Tips

- Limit gallery columns for large vaults
- Use folder filters to reduce scope
- Optimize image sizes (compress/resize)
- Consider pagination for 100+ items

## 📚 Advanced Features

### Bulk Operations
```javascript
// Bulk add images to all characters in a folder
const folder = "2-World/People";
const files = app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith(folder));

for (const file of files) {
  await app.fileManager.processFrontMatter(file, fm => {
    if (!fm.image_path && fm.char_race && fm.char_gender) {
      fm.image_path = `z_Assets/Placeholder Images/${fm.char_race}_${fm.char_gender}.png`;
    }
  });
}
```

### Dynamic Galleries
Create contextual galleries that update based on current note:
```javascript
// Show all NPCs in current location
const currentLocation = dv.current().file.path;
const npcs = dv.pages('#Category/People')
  .where(p => p.MyContainer && p.MyContainer.path === currentLocation);
```

## 🎯 Best Practices

1. **Organize Images**: Keep a consistent folder structure
2. **Name Consistently**: Use descriptive filenames
3. **Optimize Size**: Resize images for performance
4. **Tag Properly**: Use image_tags for searching
5. **Document Changes**: Track customizations

---

*Happy gaming! May your visual galleries enhance your storytelling!* 🎲 