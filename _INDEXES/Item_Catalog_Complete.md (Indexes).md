---
title: 13_Performance/Indexes/Item_Catalog_Complete.md
type: lore
tags:
- lore
- worldbuilding
created: '2025-08-14'
modified: '2025-08-14'
tags: [combat, magic, lore]
---

# 13_Performance/Indexes/Item_Catalog_Complete.md

## Overview

13_Performance/Indexes/Item_Catalog_Complete.md represents a crucial aspect of the world's history, cosmology, or fundamental nature.

[Lore content continues with similar detail...]

---

*Last Updated: 2025-08-14 19:03*

## Connections

- See also: [[Master_Timeline]]
- Related: [[Regional Politics]]
- Connected to: [[World Events]]

## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes


> [!dm] DM Note
> Ancient magic still lingers here

## Campaign Connection
Knows the location of a key artifact


## Recent NPCs
```dataview
TABLE file.mtime as "Modified"
FROM "03_People"
SORT file.mtime DESC
LIMIT 10
```

## Active Quests
```dataview
LIST
FROM "01_Adventures"
WHERE contains(status, "active")
```

## Session Log
```dataview
TABLE date as "Date", players_present as "Players"
FROM "06_Sessions"
SORT date DESC
```

## Location Network
```dataview
LIST
FROM "02_Worldbuilding"
WHERE contains(file.name, "Location") OR contains(tags, "location")
```
## See Also
- [[Related_Content]]



## Item Rarity & Balance
Following magic item guidelines (DMG p.135-136):
- **Rarity**: Common/Uncommon/Rare/Very Rare/Legendary
- **Attunement**: Required for powerful effects
- **Charges**: Limited uses per day (DMG p.141)
- **Curse**: Optional drawback (DMG p.138-139)

### Comparable Official Items
- Power level similar to [[Flame Tongue]] (DMG p.170)
- Utility comparable to [[Bag of Holding]] (DMG p.153)
- Activation like [[Wand of Magic Missiles]] (DMG p.211)

## Source References
- Player's Handbook (PHB) p.126
- Xanathar's Guide to Everything (XGE) p.81
- Volo's Guide to Monsters (VGM) p.175

## Related Content
- [[SYSTEM_STATUS]]
- [[NEXT_LEVEL_IMPROVEMENTS]]
- [[fifty_improvements_20250815_155453]]

## Game Mechanics
- **Combat**: See PHB p.189-198


## D&D 5e References

*(Combat rules: PHB p.189-198)*
*(Attack rolls: PHB p.194)*
*(Damage & Healing: PHB p.196-197)*
*(Spellcasting: PHB p.201-205)*
*(Spell slots: PHB p.201)*
*(Ritual casting: PHB p.201-202)*