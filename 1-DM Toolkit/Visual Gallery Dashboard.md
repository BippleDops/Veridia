---
cssclasses: dashboard-wide
tags:
  - dashboard
  - gallery
---

# 🎨 Visual Gallery Dashboard

> [!multi-column]
>
>> [!NOTE|clean no-t]
>> ## 🧑 Characters
>> `EMBED[Image Library.base][Character Gallery]`
>
>> [!NOTE|clean no-t]
>> ## 📍 Locations
>> `EMBED[Image Library.base][Location Gallery]`

---

## ⚔️ Combat Tracker

`EMBED[Combat Tracker.base][Initiative Tracker]`

---

## 🎒 Item Showcase

> [!NOTE|clean no-t]
> ### Magic Items
> `EMBED[Item Showcase.base][Magic Item Showcase]`

> [!NOTE|clean no-t]
> ### All Items
> `EMBED[Item Showcase.base][Item Gallery]`

---

## 🖼️ Image Management

> [!column|no-i flex]
>
>> [!INFO|clean] Quick Add Images
>> Use these buttons to quickly add images to your vault:
>> 
>> `BUTTON[addCharacterImage]` Add Character Portrait
>> `BUTTON[addLocationImage]` Add Location Image
>> `BUTTON[addItemImage]` Add Item Image
>> `BUTTON[addMonsterImage]` Add Monster Art
>
>> [!WARNING|clean] Image Guidelines
>> - **Character Portraits**: 400x600px recommended
>> - **Location Images**: 800x600px recommended
>> - **Item Images**: 256x256px recommended
>> - **Monster Art**: Variable, but square preferred
>> 
>> Store images in `z_Assets/` organized by type

---

## 📊 Statistics

```dataviewjs
// Count different types of content
const people = dv.pages('#Category/People').length;
const places = dv.pages('#Category/Place OR #Category/Hub OR #Category/Region').length;
const items = dv.pages('"3-Mechanics/Items"').length;
const quests = dv.pages('#Category/Quest').length;

// Count images
const allPages = dv.pages();
const withImages = allPages.where(p => p.image_path).length;
const totalPages = allPages.length;

dv.paragraph(`### Vault Overview
- **Characters**: ${people} NPCs
- **Locations**: ${places} places
- **Items**: ${items} items
- **Quests**: ${quests} adventures
- **Images**: ${withImages} of ${totalPages} notes have custom images (${Math.round(withImages/totalPages*100)}%)
`);
```

---

## 🎯 Quick Actions

> [!TIP|clean] Meta Bind Button Scripts
> Add these to your Meta Bind settings for the buttons above:
> 
> **addCharacterImage**:
> ```js
> const tp = app.plugins.plugins['templater-obsidian'].templater;
> const file = await tp.system.prompt("Character name to add image to:");
> if (file) {
>   const targetFile = app.vault.getAbstractFileByPath(`2-World/People/${file}.md`);
>   if (targetFile) {
>     const imagePath = await tp.system.prompt("Image path (relative to vault root):");
>     if (imagePath) {
>       await app.fileManager.processFrontMatter(targetFile, fm => {
>         fm.image_path = imagePath;
>       });
>     }
>   }
> }
> ``` 