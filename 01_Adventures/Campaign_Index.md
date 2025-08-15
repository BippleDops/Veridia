---

title: Campaign_Index
type: quest
tags:
- quest
created: '2025-01-15'
modified: '2025-01-15'
status: active
---

# Campaign_Index

---
title: Campaign Index
aliases:
- Campaign Index
- Quick Navigation
type: Lore
tags:
- navigation
- index
- performance
- content/lore
- world/both
- research
- active
- status/in-progress
created: '2025-08-05'
modified: '2025-08-14'
status: complete
cssclasses:
- wide-page
- index-page
updated: '2025-08-12T23:37:33.006581'
world: Both
---

# 📚 Campaign Master Index

> [!navigation] Quick Navigation Hub
> Optimized index for rapid access to campaign content. Updated automatically via Dataview.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## 📜 Active Quests

```dataview
TABLE 
	quest_priority as "Priority",
	quest_progress as "Progress",
	current_objective as "Current Objective",
	related_npcs as "Key NPCs"
FROM #quest
WHERE quest_status = "active"
SORT quest_priority DESC, quest_progress DESC
```

#### Shadowhaven
LIST
FROM #npc
WHERE contains(location, "Shadowhaven")
SORT importance DESC
LIMIT 10

#### Port Celeste
WHERE contains(location, "Port Celeste")

### By Faction

Merchants Guild

WHERE contains(faction, "Merchants Guild")

The Crimson Fleet

WHERE contains(faction, "Crimson Fleet")

### Major Settlements
	size as "Size",
	population as "Population",
	government as "Government",
	file.mtime as "Last Updated"
FROM #settlement OR #city
SORT population DESC

### Last 5 Sessions
	date_played as "Date",
	duration_hours as "Hours",
	xp_awarded as "XP",
	file.link as "Session"
FROM #session
SORT session_number DESC
LIMIT 5

### Character Sheets
FROM "01_Campaigns/Campaign_Name/Player_Characters"
SORT file.name ASC

### Handouts Available
FROM "07_Player_Resources/Handouts"
WHERE file.mtime > date(today) - dur(30 days)
SORT file.mtime DESC

---

### Content Overview
TABLE WITHOUT ID
	"Type" as "Content Type",
	length(rows) as "Count"
FROM #quest OR #npc OR #location OR #session OR #faction
GROUP BY type

### Activity Heatmap
	dateformat(date(file.mtime), "yyyy-MM-dd") as "Date",
	length(rows) as "Files Modified"
FROM ""
GROUP BY dateformat(date(file.mtime), "yyyy-MM-dd")
SORT date DESC

---

## 🔧 Performance Notes

> [!info] Index Optimization
> - This index uses Dataview queries with limits to prevent performance issues
> - Large tables are collapsed by default
> - Consider archiving content older than 6 months
> - Run vault optimization monthly

### Vault Health Check
- **Total Files**: `$= dv.pages().length`
- **Total Markdown Files**: `$= dv.pages().where(p => p.file.ext == "md").length`
- **Files Over 100KB**: `$= dv.pages().where(p => p.file.size > 100000).length`
- **Orphaned Files**: `$= dv.pages().where(p => p.file.inlinks.length == 0 && p.file.outlinks.length == 0).length`

---

*Index last updated: 2025-08-05*
*Auto-refresh: Every vault reload*

## Related

*Links to related content will be added here.*

## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes

## Prophecy Connection

Mentioned in The Hidden Prophecy of Shadows

## 12_Research Specific Content

Contextual improvement based on 12_Research

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


## DM Tips
> 💡 **Running This Content**: Advice for game masters
> Adjust difficulty based on party composition