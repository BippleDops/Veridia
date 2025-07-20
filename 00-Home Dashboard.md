---
type: dashboard
tags:
  - dashboard
  - home
  - campaign-overview
cssclasses:
  - dashboard-wide
  - campaign-home
created: 2025-01-25
modified: 2025-01-25
---

# 🏰 Vault Home Dashboard
*Shadowhaven Chronicles - Campaign Command Center*

Welcome to the living index of the campaign vault. This page surfaces the most important information at a glance. All sections refresh automatically via the Dataview plugin.

> [!quote] *"In the city of Shadowhaven, where magic flows like water and secrets hide in every shadow, a new chapter of adventure is about to unfold."*

---

## 📊 Campaign Statistics

```dataview
TABLE WITHOUT ID
  length(rows) as "Total Sessions",
  length(filter(rows, (r) => r.quest-status = "active")) as "Active Quests",
  length(filter(rows, (r) => r.type = "pc")) as "Player Characters",
  length(filter(rows, (r) => r.type = "monster")) as "Monsters",
  length(filter(rows, (r) => r.type = "item")) as "Magic Items"
FROM "1-Session Journals" OR "2-World/Quests" OR "1-Party" OR "3-Mechanics/Bestiary" OR "3-Mechanics/Items"
```

---

## 📅 Recent Sessions

```dataview
LIST FROM "1-Session Journals"
SORT file.mtime DESC
LIMIT 5
```

### Session Quick Stats
```dataview
TABLE WITHOUT ID
  session-number as "Session",
  date as "Date",
  duration as "Duration",
  xp-awarded as "XP",
  mood as "Mood"
FROM "1-Session Journals"
SORT session-number DESC
LIMIT 3
```

---

## 🧑‍🤝‍🧑 Active PCs

```dataview
TABLE name as "Name", race, class, level
FROM "1-Party"
WHERE type = "pc"
SORT name ASC
```

### Party Status
```dataview
TABLE WITHOUT ID
  name as "Character",
  class as "Class",
  level as "Level",
  hp as "HP",
  status as "Status"
FROM "1-Party"
WHERE type = "pc"
SORT name ASC
```

---

## 🗺️ Open Quests

```dataview
TABLE objective as "Objective", status, priority
FROM "2-World/Quests"
WHERE status = "active"
SORT priority DESC
```

### Quest Progress Overview
```dataview
TABLE WITHOUT ID
  file.link as "Quest",
  quest-status as "Status",
  priority as "Priority",
  difficulty as "Difficulty"
FROM "2-World/Quests"
WHERE quest-status = "In Progress" OR quest-status = "Not Started"
SORT priority DESC, file.name ASC
```

---

## 🏙️ Locations Catalog

```dataview
TABLE category, parent
FROM "2-World"
WHERE type = "location"
```

### Recent Locations Visited
```dataview
TABLE WITHOUT ID
  file.link as "Location",
  location_type as "Type",
  danger_level as "Danger"
FROM "2-World/Hubs" OR "2-World/Places" OR "2-World/Points of Interest"
SORT file.mtime DESC
LIMIT 10
```

---

## 🐲 Recent Monsters Added

```dataview
LIST FROM "3-Mechanics/bestiary"
SORT file.mtime DESC
LIMIT 10
```

### Monster Statistics
```dataview
TABLE WITHOUT ID
  file.link as "Monster",
  cr as "CR",
  type as "Type",
  environment as "Environment"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster"
SORT cr DESC
LIMIT 5
```

---

## ⚔️ Recent Items & Equipment

```dataview
TABLE WITHOUT ID
  file.link as "Item",
  rarity as "Rarity",
  item_type as "Type"
FROM "3-Mechanics/Items"
WHERE type = "item"
SORT file.mtime DESC
LIMIT 10
```

### Item Distribution by Rarity
```dataview
TABLE WITHOUT ID
  length(rows) as "Count",
  rarity as "Rarity"
FROM "3-Mechanics/Items"
WHERE type = "item"
GROUP BY rarity
SORT rarity ASC
```

---

## 🎭 Notable NPCs

### Recent NPCs Met
```dataview
TABLE WITHOUT ID
  file.link as "NPC",
  occupation as "Occupation",
  location as "Location",
  relationship as "Relationship"
FROM "2-World/People"
WHERE type = "npc"
SORT file.mtime DESC
LIMIT 10
```

### NPCs by Location
```dataview
TABLE WITHOUT ID
  file.link as "NPC",
  occupation as "Occupation",
  faction as "Faction"
FROM "2-World/People"
WHERE type = "npc" AND contains(location, "Shadowhaven")
SORT file.name ASC
```

---

## 🌍 World Regions

### Active Regions
```dataview
TABLE WITHOUT ID
  file.link as "Region",
  climate as "Climate",
  danger_level as "Danger"
FROM "2-World/Regions"
SORT file.name ASC
```

### Regions by Danger Level
```dataview
TABLE WITHOUT ID
  file.link as "Region",
  climate as "Climate",
  population as "Population"
FROM "2-World/Regions"
WHERE danger_level >= 4
SORT danger_level DESC
```

---

## 🏛️ Organizations & Factions

### Active Groups
```dataview
TABLE WITHOUT ID
  file.link as "Organization",
  organization_type as "Type",
  leader as "Leader"
FROM "2-World/Groups"
SORT file.name ASC
```

### Faction Relations
```dataview
TABLE WITHOUT ID
  file.link as "Group",
  organization_type as "Type",
  allies as "Allies",
  enemies as "Enemies"
FROM "2-World/Groups"
SORT file.name ASC
```

---

## 📚 Campaign Resources

### Quick Access Links
- [[Documentation/Frontmatter Schema]] - Understanding the vault's data structure
- [[Documentation/Vault Style Guide]] - Consistent formatting and organization
- [[CHANGELOG]] - Recent updates and changes to the vault
- [[README]] - Complete vault overview and setup instructions

### DM Tools
- [[1-DM Toolkit/DM Dashboard Ultra]] - Advanced DM interface
- [[1-DM Toolkit/Visual Gallery Dashboard]] - Image and asset management
- [[3-Mechanics/Bestiary/Bestiary]] - Monster database
- [[3-Mechanics/Items/Items]] - Equipment and treasure index
- [[3-Mechanics/races/races]] - Playable races reference

### Session Management
- [[z_Templates/World Builder Templates/Template-Session-Ultra]] - Session template
- [[z_Templates/World Builder Templates/Template-Session-Music-Enhanced]] - Music-enhanced sessions
- [[1-Session Journals]] - All session journals

---

## 🎯 Campaign Themes & Arcs

### Current Story Arc: The Vanishing Ships
- **Primary Quest**: [[The Vanishing Merchant Vessels]]
- **Connected Elements**: Harbor corruption, supernatural interference, political intrigue
- **Key NPCs**: [[Councillor Elara Brightwater]], [[Harbormaster Willem Tidecaller]]
- **Locations**: [[Shadowhaven]], [[The Salty Anchor Tavern]]

### Upcoming Story Hooks
- **The Giant's Skull**: Exploration of cursed island with ancient secrets
- **Arcane Disturbances**: Magical instability affecting the city
- **The Watchers**: Mysterious observers with unknown motives

### Long-term Campaign Elements
- **Ancient Giant History**: Connections to the region's distant past
- **Political Faction Rivalry**: Tensions between guilds and organizations
- **Supernatural Corruption**: The spread of curses and magical corruption
- **Economic Intrigue**: Trade disputes and smuggling operations

---

## 🎲 Game Mechanics Reference

### Combat & Encounters
- **Party Level**: 5-7 (varies by character)
- **Average Session Length**: 4 hours
- **Combat Frequency**: 1-2 encounters per session
- **XP Award Rate**: 400-600 XP per session

### World Building Guidelines
- **Magic Level**: High (magical items common, spellcasters respected)
- **Technology Level**: Medieval with magical enhancements
- **Political Structure**: Guild-based council system
- **Economic System**: Gold standard with magical currency

### Session Planning Tips
- **Pacing**: Mix investigation, social interaction, and combat
- **Player Agency**: Provide multiple solutions to challenges
- **Character Development**: Include personal story elements
- **World Consistency**: Maintain established lore and NPC relationships

---

## 🚨 Current Alerts & Notes

### Session 12 Follow-up
- **Cliffhanger**: Mysterious contact at the Whispering Gallery
- **Next Session Prep**: Warehouse district investigation, corrupt dockworkers
- **Player Decisions**: How to approach the mysterious contact
- **Consequences**: Political implications of the investigation

### Ongoing Plot Threads
- **Missing Ships**: Three merchant vessels vanished, investigation ongoing
- **Harbor Corruption**: Evidence of insider involvement in disappearances
- **Supernatural Elements**: Magical residue and strange barnacles
- **Political Tensions**: Guild rivalries and council politics

### DM Reminders
- **NPC Development**: Expand on key NPCs like Marina Saltwhisper
- **Location Details**: Add more depth to Shadowhaven districts
- **Quest Integration**: Connect current investigation to larger world events
- **Player Backstories**: Incorporate character backgrounds into main plot

---

## 📈 Campaign Progress Tracking

### Session Completion Rate
- **Total Sessions**: 12 completed
- **Average Attendance**: 4 players per session
- **Campaign Duration**: 3 months active
- **Story Progress**: 35% through current arc

### Quest Completion
- **Active Quests**: 3
- **Completed Quests**: 8
- **Failed Quests**: 1
- **Success Rate**: 89%

### Character Development
- **Character Deaths**: 0
- **Level Progression**: Average 1 level per 3 sessions
- **Magic Items Acquired**: 15 total
- **NPC Relationships**: 12 significant connections

---

## 🎨 Visual Assets

### Recent Images Added
```dataview
TABLE WITHOUT ID
  file.link as "Asset",
  file.mtime as "Added"
FROM "z_Assets"
SORT file.mtime DESC
LIMIT 5
```

### Asset Categories
- **Character Portraits**: 45 images
- **Location Maps**: 12 maps
- **Item Illustrations**: 23 images
- **Session Artwork**: 8 pieces

---

*This dashboard automatically updates as the campaign progresses. Use the quick links above to navigate to specific sections of the vault, and check the alerts section for important reminders and follow-up tasks.*

---

## 🔄 Quick Actions

`BUTTON[newSession]` Create New Session
`BUTTON[newQuest]` Create New Quest
`BUTTON[newNPC]` Create New NPC
`BUTTON[newLocation]` Create New Location
`BUTTON[generateLoot]` Generate Random Loot
`BUTTON[randomEncounter]` Generate Random Encounter 