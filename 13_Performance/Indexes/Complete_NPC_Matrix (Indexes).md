---
title: Complete NPC Matrix
type: Lore
tags:
- index
- status/complete
- report
- world/both
- content/npc
- active
created: null
modified: '2025-08-14'
status: complete
obsidianUIMode: preview
updated: '2025-08-12T23:37:33.013920'
world: Universal
---

# Complete NPC Matrix

## Relationship Scores (-3..+3)
```dataview
TABLE WITHOUT ID link(file.name) AS "NPC",
  char_race AS "Race",
  char_gender AS "Gender",
  MyContainer AS "Primary Location",
  Connected_Groups AS "Factions",
  Connected_Quests AS "Quests",
  relationships AS "Relationships",
  NoteStatus AS "Note"
FROM "02_Worldbuilding/People"
WHERE status = "complete"
SORT file.name ASC
```

## Faction Affiliations
```dataview
TABLE WITHOUT ID link(file.name) AS "NPC", Connected_Groups AS "Factions"
FROM "02_Worldbuilding/People"
WHERE status = "complete" AND Connected_Groups
FLATTEN Connected_Groups AS Faction
SORT Faction ASC, file.name ASC
```

## Location Assignments
```dataview
TABLE WITHOUT ID link(file.name) AS "NPC", MyContainer AS "Location"
FROM "02_Worldbuilding/People"
WHERE status = "complete" AND MyContainer
SORT MyContainer ASC
```

## Quest Involvement
```dataview
TABLE WITHOUT ID link(file.name) AS "NPC", Connected_Quests AS "Quests"
FROM "02_Worldbuilding/People"
WHERE status = "complete" AND Connected_Quests
SORT file.name ASC
```

## Secret Knowledge
```dataview
TABLE WITHOUT ID link(file.name) AS "NPC", secret_knowledge AS "Secrets"
FROM "02_Worldbuilding/People"
WHERE status = "complete" AND secret_knowledge
SORT file.name ASC
```

## Connections

- See also: [[Central Index]]
- Related: [[Regional Politics]]
- Connected to: [[Side Adventures]]

## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes
