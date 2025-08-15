# Quest_Tracker

---
title: Quest Tracker
type: index
tags:
- active
- index
- objectives
- quests
created: 2025-08-14
modified: '2025-08-14'
updated: 2025-08-14
cssclass: quest-tracker
---

### Main Quests
```dataview
TABLE WITHOUT ID
  file.link as Quest,
  giver as "Quest Giver",
  level as Level,
  reward as Reward
FROM #quest OR "01_Adventures"
WHERE status = "active" AND type = "main"
SORT priority DESC
```

### Side Quests
  location as Location,
  difficulty as Difficulty,
WHERE status = "active" AND type = "side"
SORT level ASC

## ⏰ Time-Sensitive

  deadline as Deadline,
  consequence as "If Failed"
WHERE deadline !=  AND status = "active"
SORT deadline ASC

## ✅ Completed Quests

  completed as "Completed Date",
  reward-received as "Rewards"
WHERE status = "completed"
SORT completed DESC
LIMIT 10

## 📊 Quest Statistics

  status as Status,
  length(rows) as Count
WHERE type = "quest" OR contains(tags, "quest")
GROUP BY status

---
*Quest tracking powered by Dataview*

## Related

*Links to related content will be added here.*

## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes
