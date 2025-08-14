---
created: 2025-08-14
type: player-resource
tags:
- player
- character
- resource
---

# Player Dashboard

## Character Sheets
```dataview
TABLE WITHOUT ID
  file.link as Character,
  class as Class,
  level as Level,
  hp as HP,
  ac as AC
FROM "05_Player_Resources/Characters"
WHERE type = "pc"
```

## Session Recaps
```dataview
TABLE WITHOUT ID
  file.link as Session,
  date as Date,
  recap as "Quick Summary"
FROM "01_Adventures"
WHERE type = "session" AND player-visible = true
SORT date DESC
LIMIT 5
```

## Available Quests
```dataview
LIST
FROM #quest
WHERE status = "available" AND player-visible = true
```

## Party Inventory
```dataview
TABLE WITHOUT ID
  item as Item,
  quantity as Qty,
  carried-by as "Carried By"
FROM "05_Player_Resources/Inventory"
```

## Known NPCs
```dataview
TABLE WITHOUT ID
  file.link as NPC,
  relationship as Relationship,
  location as "Last Seen"
FROM "02_Worldbuilding/People"
WHERE player-known = true
SORT relationship DESC
```

## Maps & Locations
- [[World Map]]
- [[Current Region]]
- [[Known Locations]]

---
*Player dashboard - auto-updating*
