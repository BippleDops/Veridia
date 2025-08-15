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
updated: '2025-08-13T12:48:04.961398'
world: Both
sourcebook: 'Waterdeep: Dungeon of the Mad Mage'
abbreviation: WDMM
---


## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement


## Overview
**Type**: Campaign  
**Level Range**: 5-20  
**Themes**: dungeon, magic, exploration, mystery  
**Integration Status**: Available

## Description
Mega-dungeon beneath Waterdeep

### 🎭 NPCs
```dataview
TABLE WITHOUT ID
    file.link as "NPC",
    status as "Status", 
    world as "Adapted To"
FROM "Waterdeep_Dungeon_of_the_Mad_Mage/NPCs"
WHERE type = "Character"
SORT file.name
```

### 👹 Monsters & Creatures
    file.link as "Monster",
    cr as "CR",
    status as "Status"
FROM "Waterdeep_Dungeon_of_the_Mad_Mage/Monsters"  
WHERE type = "Monster"
SORT cr

### 🗺️ Locations
    file.link as "Location",
    threat_level as "Danger",
FROM "Waterdeep_Dungeon_of_the_Mad_Mage/Locations"
WHERE type = "Location" 

### ⚔️ Items & Equipment
    file.link as "Item",
    rarity as "Rarity",
FROM "Waterdeep_Dungeon_of_the_Mad_Mage/Items"
WHERE type = "Item"
SORT rarity

### 📜 Adventures & Scenarios
    file.link as "Adventure",
    suggested_level as "Level",
    status as "Status" 
FROM "Waterdeep_Dungeon_of_the_Mad_Mage/Adventures"
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


## Plot Hooks

- A map reveals a betrayal about the government
- A prisoner has gone missing and chaos spreads
- Strange dreams suggest ancient magic

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]


## 12_Research Specific Content

Contextual improvement based on 12_Research


## 12_Research Specific Content

Contextual improvement based on 12_Research
