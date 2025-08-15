---
tags: [codex, npcs, reference]
created: 2025-08-15T14:13:16.711147
---

# 👥 NPC CODEX

## Major NPCs
```dataview
TABLE faction as "Faction", location as "Location", status as "Status"
FROM "03_People"
WHERE contains(tags, "major")
SORT file.name
```

## By Location
```dataview
TABLE file.link as "NPC", faction as "Faction"
FROM "03_People"
GROUP BY location
```

## By Faction
```dataview
TABLE file.link as "NPC", role as "Role"
FROM "03_People"
GROUP BY faction
```

## Quick Reference
- [[03_People/Allies|Allied NPCs]]
- [[03_People/Villains|Antagonists]]
- [[03_People/Neutral|Neutral NPCs]]

---
*Complete NPC reference*