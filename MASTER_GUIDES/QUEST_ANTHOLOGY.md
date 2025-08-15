---
tags: [anthology, quests, adventures]
created: 2025-08-15T14:13:16.711150
---

# 📜 QUEST ANTHOLOGY

## Active Quests
```dataview
TABLE questgiver as "Given By", reward as "Reward"
FROM "01_Adventures"
WHERE status = "active"
```

## Completed Quests
```dataview
TABLE completed as "Completed", outcome as "Outcome"
FROM "01_Adventures"
WHERE status = "complete"
SORT completed DESC
```

## Available Quests
```dataview
TABLE level as "Level", type as "Type"
FROM "01_Adventures"
WHERE status = "available"
```

---
*Complete quest reference*