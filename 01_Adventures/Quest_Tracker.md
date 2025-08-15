---
title: Quest_Tracker
type: quest
tags:
- quest
created: '2025-01-15'
modified: '2025-01-15'
---

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

## Background
*[Adventure setup and context]*

### What Happened Before
- *[Recent events leading to this adventure]*

### Current Situation  
- *[What's happening now]*

### The Stakes
- *[What happens if PCs don't act]*

## Adventure Hooks
*[Ways to get PCs involved]*

### Direct Approach
- *[Straightforward hook]*

### Indirect Approach
- *[Subtle introduction]*

### Emergency Hook
- *[Urgent situation]*

## Key NPCs
*[Important characters in this adventure]*

### Allies
- *[Helpful NPCs]*

### Antagonists
- *[Opposition NPCs]*

### Neutral Parties
- *[Information sources]*

## Locations
*[Important places in this adventure]*

### Starting Location
- *[Where adventure begins]*

### Key Sites
- *[Major locations to visit]*

### Optional Areas
- *[Side locations]*

## Rewards
*[What PCs gain from completing this adventure]*

### Experience Points
- *[XP awards]*

### Treasure
- *[Gold and magic items]*

### Story Rewards
- *[Reputation, allies, information]*

## Scaling
*[How to adjust for different party levels]*

### Lower Level Parties
- *[Adjustments for weaker groups]*

### Higher Level Parties
- *[Adjustments for stronger groups]*

### Large/Small Parties
- *[Adjustments for party size]*
