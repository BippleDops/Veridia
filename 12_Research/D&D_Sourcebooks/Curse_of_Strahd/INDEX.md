---
created: '2025-08-13'
updated: '2025-08-13T12:48:04.960157'
status: active
world: Both
type: Resource
tags:
- type/resource
- dnd/sourcebook
- status/active
- integration/available
sourcebook: 'Curse of Strahd'
abbreviation: 'CoS'
---

# Curse of Strahd - Integration Index

## Overview
**Type**: Campaign  
**Level Range**: 1-10  
**Themes**: horror, undead, gothic, mystery  
**Integration Status**: Available

## Description
Gothic horror campaign in Barovia

## Content Integration

### 🎭 NPCs
```dataview
TABLE WITHOUT ID
    file.link as "NPC",
    status as "Status", 
    world as "Adapted To"
FROM "Curse_of_Strahd/NPCs"
WHERE type = "Character"
SORT file.name
```

### 👹 Monsters & Creatures
```dataview
TABLE WITHOUT ID
    file.link as "Monster",
    cr as "CR",
    status as "Status"
FROM "Curse_of_Strahd/Monsters"  
WHERE type = "Monster"
SORT cr
```

### 🗺️ Locations
```dataview
TABLE WITHOUT ID
    file.link as "Location",
    threat_level as "Danger",
    status as "Status"
FROM "Curse_of_Strahd/Locations"
WHERE type = "Location" 
SORT file.name
```

### ⚔️ Items & Equipment
```dataview
TABLE WITHOUT ID
    file.link as "Item",
    rarity as "Rarity",
    status as "Status"
FROM "Curse_of_Strahd/Items"
WHERE type = "Item"
SORT rarity
```

### 📜 Adventures & Scenarios
```dataview
TABLE WITHOUT ID
    file.link as "Adventure",
    suggested_level as "Level",
    status as "Status" 
FROM "Curse_of_Strahd/Adventures"
WHERE type = "Adventure"
SORT suggested_level
```

## Cordelia Integration Notes

### Aquabyssos Adaptations
- **Water-based encounters**: How scenarios translate to underwater
- **Pressure mechanics**: Environmental adaptations needed
- **Mer-folk alternatives**: NPC race conversions

### Aethermoor Adaptations  
- **Sky-based encounters**: How scenarios translate to aerial
- **Wind mechanics**: Environmental adaptations needed
- **Skyfolk alternatives**: NPC race conversions

### Cross-Realm Opportunities
- **Convergence events**: How storylines could bridge realms
- **Faction integration**: Links to existing Cordelia organizations
- **Artifact connections**: Items that could be Seven Shards

## Implementation Status

### Phase 1: Content Extraction
- [ ] Extract key NPCs and adapt to Cordelia
- [ ] Convert monsters for dual-realm use  
- [ ] Adapt locations for underwater/sky themes
- [ ] Integrate magic items with crystal lore

### Phase 2: Mechanical Integration
- [ ] Adapt encounters for pressure/altitude mechanics
- [ ] Convert travel and navigation rules
- [ ] Integrate with faction relationship systems
- [ ] Link with corruption and transformation themes

### Phase 3: Narrative Weaving
- [ ] Connect plot threads to Shadow Conspiracy
- [ ] Integrate with Crystal Plague storylines
- [ ] Link artifacts to Seven Shards legend
- [ ] Weave into Deep Mother mythology

## Usage in Campaigns
This content can be used as:
- **Direct Import**: Use scenarios as-written in neutral zones
- **Realm Adaptation**: Convert for specific Aquabyssos/Aethermoor use
- **Inspiration Source**: Mine for ideas and adapt loosely
- **Crossover Events**: Bridge between D&D and Cordelia continuity

---
*Integration managed through the D&D Sourcebook Integration System*  
*Last updated: 2025-08-13 12:48*
