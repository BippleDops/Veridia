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

## 📜 Quest & Campaign Tracker

> [!NOTE|clean no-t]
> ### Active Quests
> `EMBED[Quest Campaign Tracker.base][Active Quests]`

> [!NOTE|clean no-t]
> ### Quest Board
> `EMBED[Quest Campaign Tracker.base][Quest Board]`

---

## 🎒 Item Showcase

> [!NOTE|clean no-t]
> ### Magic Items
> `EMBED[Item Showcase.base][Magic Item Showcase]`

> [!NOTE|clean no-t]
> ### All Items
> `EMBED[Item Showcase.base][Item Gallery]`

---

## 🐉 Monster Gallery

`EMBED[Monster Gallery.base][Monster Gallery]`

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
>> `BUTTON[addQuestImage]` Add Quest Image
>
>> [!WARNING|clean] Image Guidelines
>> - **Character Portraits**: 400x600px recommended
>> - **Location Images**: 800x600px recommended
>> - **Item Images**: 256x256px recommended
>> - **Monster Art**: Variable, but square preferred
>> - **Quest Images**: 600x400px recommended
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
const monsters = dv.pages('"3-Mechanics/CLI/bestiary"').length;

// Count images
const allPages = dv.pages();
const withImages = allPages.where(p => p.image_path).length;
const totalPages = allPages.length;

// Quest statistics
const activeQuests = dv.pages('#Category/Quest').where(q => q.quest_status === "Active" || q.quest_status === "In Progress").length;
const completedQuests = dv.pages('#Category/Quest').where(q => q.quest_status === "Completed").length;

dv.paragraph(`### Vault Overview
- **Characters**: ${people} NPCs
- **Locations**: ${places} places
- **Items**: ${items} items
- **Monsters**: ${monsters} creatures
- **Quests**: ${quests} total (${activeQuests} active, ${completedQuests} completed)
- **Images**: ${withImages} of ${totalPages} notes have custom images (${Math.round(withImages/totalPages*100)}%)

### Campaign Progress
- **Active Quests**: ${activeQuests}
- **Completion Rate**: ${quests > 0 ? Math.round(completedQuests/quests*100) : 0}%
`);
```

---

## 🎯 Quick Actions

> [!column|no-i]
>
>> [!TIP|clean] Campaign Management
>> - `BUTTON[createNewQuest]` Create New Quest
>> - `BUTTON[updateQuestProgress]` Update Quest Progress
>> - `BUTTON[completeQuest]` Mark Quest Complete
>> - `BUTTON[generateRandomEncounter]` Random Encounter
>
>> [!TIP|clean] Meta Bind Configuration
>> Add these to your Meta Bind settings for the buttons above.
>> 
>> See `Meta Bind Configuration Guide.md` for:
>> - Button scripts
>> - Input field templates
>> - CSS snippets
>> - Troubleshooting 