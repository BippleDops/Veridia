---
aliases: []
tags:
  - Category/Note
type: note
status: unknown
---
# Player Portal

Welcome! This section contains player-safe information (no spoilers).

## World Overview
- [[08_Archive/2025-08-09/Campaign_Docs/Aethermoor/Aethermoor Campaign Overview]] (player-safe sections)
- [[08_Archive/2025-08-09/Campaign_Docs/Aquabyssos/Aquabyssos Campaign Overview]] (player-safe sections)

## Your Party
- Character sheets: 07_Player_Resources/Character_Sheets/
- Session summaries: 07_Player_Resources/Session_Summaries/

## Known NPCs
```dataview
TABLE file.link as "NPC", faction, disposition
FROM #npc
WHERE status != "dead" AND !contains(tags, "dm-only")
SORT file.name ASC
```

## Known Locations
```dataview
TABLE file.link as "Location", danger_level, MyCategory
FROM #location
WHERE !contains(tags, "dm-only")
SORT danger_level DESC
```

## Active Quests
```dataview
TABLE file.link as "Quest", quest_status, quest_priority
FROM #quest
WHERE quest_status = "Active" OR quest_status = "In Progress"
```

## Rules Quick Reference
- Conditions summary
- Common actions
- Homebrew notes (player-facing)

## Vehicles & Travel
- Ship Handouts: [[04_Resources/Handouts/Ships/Player_Handout_Aquabyssos_Submarines|Aquabyssos Submarines]] • [[04_Resources/Handouts/Ships/Player_Handout_Aethermoor_Airships|Aethermoor Airships]] • [[04_Resources/Handouts/Ships/Player_Handout_Merger_Vessels|Merger Vessels]]
- Encounter Handouts:
```dataview
LIST FROM "04_Resources/Handouts/Encounters"
SORT file.name ASC
```
- Doctrine Quick Reference: [[04_Resources/Handouts/Doctrines/Doctrine_Quick_Reference|Doctrine Quick Reference]]

---
Last updated: {{date:YYYY-MM-DD}}


