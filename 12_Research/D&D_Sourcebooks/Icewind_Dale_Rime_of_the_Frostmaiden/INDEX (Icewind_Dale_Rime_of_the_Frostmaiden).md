---
title: INDEX (Icewind_Dale_Rime_of_the_Frostmaiden)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# INDEX

---
title: INDEX
type: Resource
tags:
- integration/available
- type/resource
- research
- status/active
- dnd/sourcebook
- active
created: '2025-08-13'
modified: '2025-08-14'
status: active
updated: '2025-08-13T12:48:04.962674'
world: Both
sourcebook: 'Icewind Dale: Rime of the Frostmaiden'
abbreviation: RotFM
---

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Overview
**Type**: Campaign  
**Level Range**: 1-12  
**Themes**: arctic, horror, survival, mystery  
**Integration Status**: Available

## Description
Arctic horror and survival adventure

### 🎭 NPCs
```dataview
TABLE WITHOUT ID
    file.link as "NPC",
    status as "Status", 
    world as "Adapted To"
FROM "Icewind_Dale_Rime_of_the_Frostmaiden/NPCs"
WHERE type = "Character"
SORT file.name
```

### 👹 Monsters & Creatures
    file.link as "Monster",
    cr as "CR",
    status as "Status"
FROM "Icewind_Dale_Rime_of_the_Frostmaiden/Monsters"  
WHERE type = "Monster"
SORT cr

### 🗺️ Locations
    file.link as "Location",
    threat_level as "Danger",
FROM "Icewind_Dale_Rime_of_the_Frostmaiden/Locations"
WHERE type = "Location" 

### ⚔️ Items & Equipment
    file.link as "Item",
    rarity as "Rarity",
FROM "Icewind_Dale_Rime_of_the_Frostmaiden/Items"
WHERE type = "Item"
SORT rarity

### 📜 Adventures & Scenarios
    file.link as "Adventure",
    suggested_level as "Level",
    status as "Status" 
FROM "Icewind_Dale_Rime_of_the_Frostmaiden/Adventures"
WHERE type = "Adventure"
SORT suggested_level

## Usage in Campaigns
This content can be used as:
- **Direct Import**: Use scenarios as-written in neutral zones
- **Realm Adaptation**: Convert for specific Aquabyssos/Aethermoor use
- **Inspiration Source**: Mine for ideas and adapt loosely
- **Crossover Events**: Bridge between D&D and Cordelia continuity

---
*Integration managed through the D&D Sourcebook Integration System*  
*Last updated: 2025-08-13 12:48*

## Related

*Links to related content will be added here.*

## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes

## Secret Connections

*[Hidden from players]* Connected to The Veiled Covenant - Control trade routes

## Plot Hooks

- Someone is protecting a witness for power
- A stranger needs help delivering before winter

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
