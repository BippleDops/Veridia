---
title: 13_Performance/Indexes/Seven_Shards_Tracker.md
type: lore
tags:
- lore
- worldbuilding
created: '2025-08-14'
modified: '2025-08-14'
tags: [combat, lore]
---

# 13_Performance/Indexes/Seven_Shards_Tracker.md

## Overview

13_Performance/Indexes/Seven_Shards_Tracker.md represents a crucial aspect of the world's history, cosmology, or fundamental nature.

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
> This character is not who they seem

## Campaign Connection
Connected to the main villain's plan


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


## Game Mechanics
- **Combat**: See PHB p.189-198


## D&D 5e References

*(Combat rules: PHB p.189-198)*
*(Attack rolls: PHB p.194)*
*(Damage & Healing: PHB p.196-197)*
*(Character creation: PHB p.11-15)*
*(Ability scores: PHB p.12-13)*
*(Backgrounds: PHB p.125-141)*