---
title: Relationship_Web
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

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

### Faction Affiliations
```dataview
TABLE WITHOUT ID
  faction as Faction,
  length(rows) as Members,
  leader as Leader
FROM "02_Worldbuilding/People"
WHERE faction != 
GROUP BY faction
SORT length(rows) DESC
```

### Romantic Relationships
  file.link as Character,
  romance as "Romantic Interest",
  relationship-status as Status
WHERE romance != 

### Rivalries
  rival as Rival,
  conflict as "Nature of Conflict"
WHERE rival != 

### Alliances
  allies as Allies,
  alliance-type as "Type"
WHERE allies != 

### Leaders
  file.link as Leader,
  faction as Organization,
  location as Base,
  followers as Followers
WHERE role = "leader" OR contains(tags, "leader")

### Advisors
  file.link as Advisor,
  advises as "Advises",
  expertise as Expertise
WHERE role = "advisor" OR contains(tags, "advisor")

## 🔗 Connection Statistics

  "Total NPCs" as Metric,
  length(file.link) as Count
WHERE type = "npc"

UNION ALL

  "Has Relationships" as Metric,
WHERE relationships !=  OR allies !=  OR enemies != 

  "In Factions" as Metric,

## 🎯 Quest Givers

  file.link as "Quest Giver",
  quests-given as Quests,
  location as Location,
  faction as Faction
WHERE quests-given !=  OR contains(tags, "quest-giver")

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
