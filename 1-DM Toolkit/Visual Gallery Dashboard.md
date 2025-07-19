---
cssclasses: 
  - dashboard-wide
  - modern-cards
tags:
  - dashboard
  - gallery
---

# 🎨 Visual Gallery Dashboard Ultra

> [!multi-column]
>
>> [!NOTE|clean no-t]
>> ## 🧑 Character Gallery
>> `EMBED[Modern Card Galleries.base][NPC Cards]`
>
>> [!NOTE|clean no-t]
>> ## 📍 Location Explorer
>> `EMBED[Modern Card Galleries.base][Location Cards]`

---

## ⚔️ Combat Management

> [!column|no-i]
>
>> [!DANGER|clean no-t]
>> ### Initiative Tracker
>> `EMBED[Combat Tracker.base][Initiative Tracker]`
>
>> [!NOTE|clean no-t]
>> ### Combat Gallery
>> `EMBED[Combat Tracker.base][Combat Gallery]`

---

## 📜 Campaign Progress

> [!multi-column]
>
>> [!NOTE|clean no-t]
>> ### Active Quests Board
>> `EMBED[Quest Campaign Tracker.base][Quest Board]`
>
>> [!TIP|clean no-t]
>> ### Quest Progress
>> `EMBED[Quest Campaign Tracker.base][Active Quests]`

---

## 🎒 Modern Item Showcase

> [!column|no-i]
>
>> [!NOTE|clean no-t]
>> ### Magic Item Cards
>> `EMBED[Modern Card Galleries.base][Magic Item Cards]`
>
>> [!INFO|clean no-t]
>> ### All Items
>> `EMBED[Modern Card Galleries.base][Item Cards]`

---

## 🐉 Monster Management

> [!multi-column]
>
>> [!WARNING|clean no-t]
>> ### Boss Monsters
>> `EMBED[Modern Card Galleries.base][Boss Cards]`
>
>> [!NOTE|clean no-t]
>> ### Monster Cards
>> `EMBED[Modern Card Galleries.base][Monster Cards]`

---

## 📚 Spell Compendium

> [!NOTE|clean no-t]
> ### Spell Cards by Level
> `EMBED[Modern Card Galleries.base][Spell Cards]{level: 1}`

> [!column|no-i]
>
>> [!INFO] Quick Spell Access
>> **By Level:**
>> - `EMBED[Modern Card Galleries.base][Spell Cards]{level: 1}` Level 1
>> - `EMBED[Modern Card Galleries.base][Spell Cards]{level: 3}` Level 3  
>> - `EMBED[Modern Card Galleries.base][Spell Cards]{level: 5}` Level 5
>
>> [!TIP] Spell Search
>> `EMBED[Spell Compendium.base][Spell Search]`

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
>> [!WARNING|clean] Image Guidelines - Obsidian 1.9.6
>> - **Character Portraits**: 400x600px recommended
>> - **Location Images**: 800x600px recommended  
>> - **Item Icons**: 256x256px (square preferred)
>> - **Monster Art**: Variable, optimized for cards
>> - **Quest Images**: 600x400px recommended
>> 
>> Store images in `z_Assets/` organized by type
>> **New:** Card view automatically optimizes display

---

## 📊 Campaign Analytics

```dataviewjs
// Enhanced campaign statistics
const sessions = dv.pages('#session').length;
const lastSession = dv.pages('#session').sort(s => s.sessionNumber, 'desc').first();
const activeQuests = dv.pages('#quest').where(q => q.quest_status === "active" || q.quest_status === "in-progress").length;
const completedQuests = dv.pages('#quest').where(q => q.quest_status === "completed").length;
const npcs = dv.pages('#NPC').length;
const locations = dv.pages('#location').length;
const monsters = dv.pages('"3-Mechanics/CLI/bestiary"').length;
const items = dv.pages('"3-Mechanics/Items"').length + dv.pages('"3-Mechanics/CLI/items"').length;
const pcs = dv.pages('"4-Party"').length;

// Image statistics
const allPages = dv.pages();
const withImages = allPages.where(p => p.image_path).length;
const totalPages = allPages.length;

// Quest statistics
const totalQuests = activeQuests + completedQuests;
const completionRate = totalQuests > 0 ? Math.round((completedQuests / totalQuests) * 100) : 0;

dv.paragraph(`## 📈 Campaign Overview

### Session Management
- **Total Sessions:** ${sessions}
- **Last Session:** ${lastSession ? lastSession.date : "None"}
- **Party Size:** ${pcs} characters

### Quest Progress  
- **Active Quests:** ${activeQuests}
- **Completed Quests:** ${completedQuests}
- **Completion Rate:** ${completionRate}%

### World Building
- **NPCs Created:** ${npcs}
- **Locations:** ${locations}
- **Custom Items:** ${items}
- **Monster Library:** ${monsters}

### Visual System
- **Images:** ${withImages} of ${totalPages} notes have images (${Math.round(withImages/totalPages*100)}%)
- **Modern Cards:** Enabled with Obsidian 1.9.6+
- **Performance:** Optimized galleries with pagination`);
```

---

## 🎯 Ultra Quick Actions

> [!column|no-i]
>
>> [!TIP|clean] Session Management
>> - `BUTTON[newSession]` 🆕 New Session
>> - `BUTTON[generateRecap]` 📝 Generate Recap  
>> - `BUTTON[endSession]` 🏁 End Session
>> - `BUTTON[sessionPrep]` 📋 Session Prep
>
>> [!NOTE|clean] World Building
>> - `BUTTON[newNPC]` 👤 New NPC
>> - `BUTTON[newLocation]` 📍 New Location
>> - `BUTTON[newQuest]` 📜 New Quest
>> - `BUTTON[generateWorldContent]` 🌍 Generate Content

> [!column|no-i]
>
>> [!WARNING|clean] Combat Tools
>> - `BUTTON[newCombat]` ⚔️ Start Combat
>> - `BUTTON[generateEncounter]` 🎲 Random Encounter
>> - `BUTTON[buildEncounter]` 🏗️ Build Encounter
>> - `BUTTON[resetCombat]` 🔄 Reset All Combat
>
>> [!INFO|clean] Utilities
>> - `BUTTON[generateLoot]` 💰 Generate Loot
>> - `BUTTON[bulkImageUpdate]` 🖼️ Bulk Image Update
>> - `BUTTON[vaultMaintenance]` 🔧 Vault Maintenance
>> - `BUTTON[performanceCheck]` ⚡ Performance Check

---

## 🎵 Media Integration

> [!multi-column]
>
>> [!NOTE|clean] Music Control
>> `BUTTON[playAmbient]` 🎵 Ambient Music
>> `BUTTON[playCombat]` ⚔️ Combat Music
>> `BUTTON[playTavern]` 🍺 Tavern Ambience
>> `BUTTON[stopMusic]` 🔇 Stop All
>
>> [!INFO|clean] Discord Integration
>> **Session Channel:** `VIEW[{discord_channel}]`
>> `BUTTON[createDiscordSession]` 🤖 Create Session Channel
>> `BUTTON[invitePlayers]` 👥 Invite Players
>> `BUTTON[startRecording]` 📹 Start Recording

---

## 🔧 System Health

> [!NOTE|clean no-t minimal]
> **Vault Performance Stats:**
> - Notes: `$= dv.pages().length`
> - NPCs: `$= dv.pages('#NPC').length`
> - Locations: `$= dv.pages('#location').length`
> - Items: `$= dv.pages('"3-Mechanics/Items"').length`
> - Spells: `$= dv.pages('"3-Mechanics/CLI/spells"').length`
> - Monsters: `$= dv.pages('"3-Mechanics/CLI/bestiary"').length`
> - Base Files: `$= dv.pages('').where(p => p.file.path.endsWith('.base')).length`
> - **Status**: 🟢 Optimized for Obsidian 1.9.6

> [!column|no-i]
>
>> [!SUCCESS|clean] Recent Updates
>> - ✅ Modern card galleries implemented
>> - ✅ Performance optimizations active
>> - ✅ Agile patterns standardized
>> - ✅ API integrations ready
>> - ✅ Discord companion available
>
>> [!WARNING|clean] Maintenance
>> `BUTTON[checkForUpdates]` 🔄 Check Updates
>> `BUTTON[optimizeVault]` ⚡ Optimize Performance
>> `BUTTON[backupVault]` 💾 Create Backup
>> `BUTTON[runDiagnostics]` 🩺 Run Diagnostics

---

## 📚 Quick Access Links

| Section | Dashboard | Configuration |
|---------|-----------|---------------|
| **Combat** | [Combat Tracker](obsidian://open?vault=TTRPG&file=Combat%20Tracker.base) | [Combat Setup](obsidian://open?vault=TTRPG&file=1-DM%20Toolkit%2FCombat%20Configuration.md) |
| **NPCs** | [NPC Directory](obsidian://open?vault=TTRPG&file=NPC%20Directory.base) | [NPC Templates](obsidian://open?vault=TTRPG&file=z_Templates%2FWorld%20Builder%20Templates) |
| **Sessions** | [Session Log](obsidian://open?vault=TTRPG&file=Session%20Log.base) | [Session Config](obsidian://open?vault=TTRPG&file=1-DM%20Toolkit%2FSession%20Configuration.md) |
| **Quests** | [Quest Tracker](obsidian://open?vault=TTRPG&file=Quest%20Campaign%20Tracker.base) | [Quest Setup](obsidian://open?vault=TTRPG&file=1-DM%20Toolkit%2FQuest%20Configuration.md) |
| **API** | [Integration Guide](obsidian://open?vault=TTRPG&file=1-DM%20Toolkit%2FAPI%20Integration%20Guide.md) | [Discord Guide](obsidian://open?vault=TTRPG&file=1-DM%20Toolkit%2FDiscord%20Integration%20Guide.md) |

---

*Last updated: `= this.file.mtime` | System Version: Ultra 2.0 | Obsidian 1.9.6+ Optimized*

<style>
.modern-cards .meta-bind-gallery-item {
  border-radius: 12px !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
  transition: transform 0.2s, box-shadow 0.2s !important;
}

.modern-cards .meta-bind-gallery-item:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15) !important;
}

.dashboard-wide {
  max-width: none !important;
}
</style> 