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


# 📜 Quest Tracker

## ⚔️ Active Quests

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
```dataview
TABLE WITHOUT ID
  file.link as Quest,
  location as Location,
  difficulty as Difficulty,
  reward as Reward
FROM #quest OR "01_Adventures"
WHERE status = "active" AND type = "side"
SORT level ASC
```

## ⏰ Time-Sensitive

```dataview
TABLE WITHOUT ID
  file.link as Quest,
  deadline as Deadline,
  consequence as "If Failed"
FROM #quest OR "01_Adventures"
WHERE deadline != null AND status = "active"
SORT deadline ASC
```

## ✅ Completed Quests

```dataview
TABLE WITHOUT ID
  file.link as Quest,
  completed as "Completed Date",
  reward-received as "Rewards"
FROM #quest OR "01_Adventures"
WHERE status = "completed"
SORT completed DESC
LIMIT 10
```

## 📊 Quest Statistics

```dataview
TABLE WITHOUT ID
  status as Status,
  length(rows) as Count
FROM #quest OR "01_Adventures"
WHERE type = "quest" OR contains(tags, "quest")
GROUP BY status
```

---
*Quest tracking powered by Dataview*


## Related

*Links to related content will be added here.*
