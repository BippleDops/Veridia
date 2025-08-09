# Player Portal

Welcome! This section contains player-safe information (no spoilers).

## World Overview
- [[Ω_Archive/2025-08-09/Campaign_Docs/Aethermoor/Aethermoor Campaign Overview]] (player-safe sections)
- [[Ω_Archive/2025-08-09/Campaign_Docs/Aquabyssos/Aquabyssos Campaign Overview]] (player-safe sections)

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

---
Last updated: {{date:YYYY-MM-DD}}


