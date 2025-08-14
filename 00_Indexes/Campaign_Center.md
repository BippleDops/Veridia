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


# ⚔️ Campaign Command Center

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

## 📅 Session Planning

### Upcoming Sessions
```dataview
TABLE WITHOUT ID
  file.link as Session,
  campaign as Campaign,
  date as "Scheduled",
  status as Status
FROM "01_Adventures"
WHERE type = "session" AND status != "completed"
SORT date ASC
```

### Recent Sessions
```dataview
TABLE WITHOUT ID
  file.link as Session,
  campaign as Campaign,
  date as Date,
  recap as "Quick Recap"
FROM "01_Adventures"
WHERE type = "session" AND status = "completed"
SORT date DESC
LIMIT 5
```

## 📊 Campaign Progress

```dataview
TABLE WITHOUT ID
  file.link as Campaign,
  sessions-completed as "Completed",
  sessions-total as "Total",
  completion as "Progress %"
FROM "01_Adventures"
WHERE type = "campaign"
```

## 🎭 Campaign NPCs

### By Faction
```dataview
TABLE WITHOUT ID
  faction as Faction,
  length(rows) as "NPC Count"
FROM "02_Worldbuilding/People"
WHERE type = "npc" AND faction != null
GROUP BY faction
SORT length(rows) DESC
```

### Important NPCs
```dataview
TABLE WITHOUT ID
  file.link as NPC,
  faction as Faction,
  role as Role,
  status as Status
FROM "02_Worldbuilding/People"
WHERE importance = "major" OR contains(tags, "important")
LIMIT 10
```

## 📍 Campaign Locations

```dataview
TABLE WITHOUT ID
  file.link as Location,
  campaign as "Used In",
  visits as Visits,
  status as Status
FROM "02_Worldbuilding/Places"
WHERE campaign != null
SORT visits DESC
```

---
*Campaign management powered by Dataview*


## Related

*Links to related content will be added here.*
