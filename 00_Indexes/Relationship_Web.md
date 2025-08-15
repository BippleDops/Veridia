# Relationship_Web

---
title: Relationship Web
type: index
tags:
- relationships
- npcs
- index
- active
created: 2025-08-14
modified: '2025-08-14'
updated: 2025-08-14
cssclass: relationship-web
---


# 👥 Character Relationship Web

## 🕸️ Relationship Overview

### Faction Affiliations
```dataview
TABLE WITHOUT ID
  faction as Faction,
  length(rows) as Members,
  leader as Leader
FROM "02_Worldbuilding/People"
WHERE faction != null
GROUP BY faction
SORT length(rows) DESC
```

### Romantic Relationships
```dataview
TABLE WITHOUT ID
  file.link as Character,
  romance as "Romantic Interest",
  relationship-status as Status
FROM "02_Worldbuilding/People"
WHERE romance != null
```

### Rivalries
```dataview
TABLE WITHOUT ID
  file.link as Character,
  rival as Rival,
  conflict as "Nature of Conflict"
FROM "02_Worldbuilding/People"
WHERE rival != null
```

### Alliances
```dataview
TABLE WITHOUT ID
  file.link as Character,
  allies as Allies,
  alliance-type as "Type"
FROM "02_Worldbuilding/People"
WHERE allies != null
```

## 👑 Power Structure

### Leaders
```dataview
TABLE WITHOUT ID
  file.link as Leader,
  faction as Organization,
  location as Base,
  followers as Followers
FROM "02_Worldbuilding/People"
WHERE role = "leader" OR contains(tags, "leader")
```

### Advisors
```dataview
TABLE WITHOUT ID
  file.link as Advisor,
  advises as "Advises",
  expertise as Expertise
FROM "02_Worldbuilding/People"
WHERE role = "advisor" OR contains(tags, "advisor")
```

## 🔗 Connection Statistics

```dataview
TABLE WITHOUT ID
  "Total NPCs" as Metric,
  length(file.link) as Count
FROM "02_Worldbuilding/People"
WHERE type = "npc"

UNION ALL

TABLE WITHOUT ID
  "Has Relationships" as Metric,
  length(file.link) as Count
FROM "02_Worldbuilding/People"
WHERE relationships != null OR allies != null OR enemies != null

UNION ALL

TABLE WITHOUT ID
  "In Factions" as Metric,
  length(file.link) as Count
FROM "02_Worldbuilding/People"
WHERE faction != null
```

## 🎯 Quest Givers

```dataview
TABLE WITHOUT ID
  file.link as "Quest Giver",
  quests-given as Quests,
  location as Location,
  faction as Faction
FROM "02_Worldbuilding/People"
WHERE quests-given != null OR contains(tags, "quest-giver")
```

---
*Relationship tracking powered by Dataview*


## Related

*Links to related content will be added here.*


## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes
