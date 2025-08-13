---
tags:
- complete
- index
- npc
- universal
status: complete
world: Universal
type: index
obsidianUIMode: preview
created: null
updated: '2025-08-13T01:18:31.105989+00:00'
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