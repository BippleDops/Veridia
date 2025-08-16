---
enhanced: true
title: 13_Performance/Indexes/[[[[[Item_Catalog_Complete.md|Item_Catalog_Complete.md|Item_Catalog_Complete]].md|Item_Catalog_Complete]].md
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

- See also: [[Master_Timeline
- Related: [Regional Politics]]
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
WHERE file.name != ""
```

## Active Quests
```dataview
TABLE file.link as "File"
FROM "01_Adventures"
WHERE contains(status, "active")
```

## Session Log
```dataview
TABLE date as "Date", players_present as "Players"
FROM "06_Sessions"
SORT date DESC
WHERE file.name != ""
```

## Location Network
```dataview
TABLE file.link as "File"
FROM "02_Worldbuilding"
WHERE contains(file.name, "Location") OR contains(tags, "location")
```
## See Also
- [[Seven_Shards_Tracker.md
- [MOC_Items]]
- [[Related_Content

## Item Rarity & Balance
Following magic item guidelines (WWT p.135-136):
- **Rarity**: Common/Uncommon/Rare/Very Rare/Legendary
- **Attunement**: Required for powerful effects
- **Charges**: Limited uses per day (WWT p.141)
- **Curse**: Optional drawback (WWT p.138-139)

### Comparable Official Items
- Power level similar to [Flame Tongue]] (WWT p.170)
- Utility comparable to [[Bag of Holding (WWT p.153)
- Activation like [Wand of Magic Missiles]] (WWT p.211)

## Source References
- Adventurer's Codex (ACX) p.126
- Xanathar's Secrets Revealed to Everything (XSR) p.81
- Volo's Creature Catalog to Monsters (VCC) p.175

## Related Content
- [[SYSTEM_STATUS
- [NEXT_LEVEL_IMPROVEMENTS]]
- [[fifty_improvements_20250815_155453

## Game Mechanics
- **Combat**: See ACX p.189-198

## D&D 5e References

*(Combat rules: ACX p.189-198)*
*(Attack rolls: ACX p.194)*
*(Damage & Healing: ACX p.196-197)*
*(Spellcasting: ACX p.201-205)*
*(Spell slots: ACX p.201)*
*(Ritual casting: ACX p.201-202)*

## Visual References
![04_Resources/Assets/Placeholder Images/DefaultItem.png]]
![[04_Resources/Assets/Placeholder Images/WeaponsArmorItemsTitleBar.png
![04_Resources/Assets/Items/item-artifact-warhammer-xphb-v3-warhammer-xphb.png]]
