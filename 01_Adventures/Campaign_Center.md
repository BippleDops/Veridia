# Campaign_Center

---
title: Campaign Center
type: index
tags:
- management
- index
- active
- campaign
created: 2025-08-14
modified: '2025-08-14'
updated: 2025-08-14
cssclass: campaign-center
---

## 🎲 Active Campaigns

```dataview
TABLE WITHOUT ID
  file.link as Campaign,
  status as Status,
  sessions as "Total Sessions",
  players as Players
FROM "01_Adventures"
WHERE type = "campaign" OR contains(file.name, "Campaign")
SORT status ASC
```

### Upcoming Sessions
  file.link as Session,
  campaign as Campaign,
  date as "Scheduled",
  status as Status
WHERE type = "session" AND status != "completed"
SORT date ASC

### Recent Sessions
  date as Date,
  recap as "Quick Recap"
WHERE type = "session" AND status = "completed"
SORT date DESC
LIMIT 5

## 📊 Campaign Progress

  sessions-completed as "Completed",
  sessions-total as "Total",
  completion as "Progress %"
WHERE type = "campaign"

### By Faction
  faction as Faction,
  length(rows) as "NPC Count"
FROM "02_Worldbuilding/People"
WHERE type = "npc" AND faction != 
GROUP BY faction
SORT length(rows) DESC

### Important NPCs
  file.link as NPC,
  role as Role,
WHERE importance = "major" OR contains(tags, "important")
LIMIT 10

## 📍 Campaign Locations

  file.link as Location,
  campaign as "Used In",
  visits as Visits,
FROM "02_Worldbuilding/Places"
WHERE campaign != 
SORT visits DESC

---
*Campaign management powered by Dataview*

## Related

*Links to related content will be added here.*

## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes
