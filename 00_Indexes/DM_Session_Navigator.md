# DM_Session_Navigator

---
title: DM Session Navigator
type: dm-tool
tags:
- navigation
- index
- session
- dm-tool
- active
created: 2025-08-14
modified: '2025-08-14'
updated: 2025-08-14
cssclass: session-navigator
---


# 🎭 DM Session Navigator

## 📅 Session Timeline

### Next Session
```dataview
TABLE WITHOUT ID
  file.link as Session,
  campaign as Campaign,
  date as Date,
  prep-status as "Prep Status"
FROM "01_Adventures"
WHERE type = "session" AND date >= date(today)
SORT date ASC
LIMIT 1
```

### Session History
```dataview
TABLE WITHOUT ID
  file.link as Session,
  date as Date,
  players as Players,
  xp-awarded as XP
FROM "01_Adventures"
WHERE type = "session" AND status = "completed"
SORT date DESC
LIMIT 5
```

## 🎯 Session Prep Checklist

### Pre-Session
- [ ] Review last session notes
- [ ] Update NPC stats/motivations
- [ ] Prepare encounter maps
- [ ] Queue music playlists
- [ ] Print player handouts
- [ ] Review player backstories
- [ ] Set up initiative tracker
- [ ] Prepare random tables

### Required NPCs
```dataview
TABLE WITHOUT ID
  file.link as NPC,
  faction as Faction,
  location as Location,
  stat-block as "Stats Ready?"
FROM "02_Worldbuilding/People"
WHERE session-appearance = this.file.name OR contains(tags, "next-session")
```

### Required Locations
```dataview
TABLE WITHOUT ID
  file.link as Location,
  type as Type,
  map as "Map Ready?",
  description as "Description"
FROM "02_Worldbuilding/Places"
WHERE session-appearance = this.file.name OR contains(tags, "next-session")
```

## 📊 Session Metrics

### Player Attendance
```dataview
TABLE WITHOUT ID
  player as Player,
  length(rows) as "Sessions Attended",
  last-session as "Last Seen"
FROM "01_Adventures"
WHERE type = "session" AND players
FLATTEN players as player
GROUP BY player
```

### Session Pacing
```dataview
TABLE WITHOUT ID
  file.link as Session,
  combat-time as "Combat %",
  rp-time as "RP %",
  exploration-time as "Exploration %"
FROM "01_Adventures"
WHERE type = "session" AND status = "completed"
SORT date DESC
LIMIT 5
```

## 🎲 Quick Session Tools

### Random Generators
- [[Random NPC|👤 Quick NPC]]
- [[Random Shop|🏪 Shop Inventory]]
- [[Random Tavern|🍺 Tavern Generator]]
- [[Random Encounter|⚔️ Encounter]]
- [[Random Loot|💰 Treasure]]

### Combat Tools
- [[Initiative Tracker|📋 Initiative]]
- [[HP Tracker|❤️ Hit Points]]
- [[Condition Tracker|🤒 Conditions]]
- [[Spell Slot Tracker|✨ Spell Slots]]

### Reference Sheets
- [[DC Guidelines|🎯 Difficulty Classes]]
- [[XP Thresholds|📊 Experience]]
- [[Encounter Builder|⚖️ Balance]]
- [[Travel Pace|🗺️ Movement]]

## 📝 Session Notes Template

```markdown
# Session [Number]: [Title]
Date: [Date]
Players: [List]
Level: [X]

## Recap
[Previous session summary]

## Events
[What happened]

## NPCs Met
- [NPC]: [Interaction]

## Locations Visited
- [Location]: [Events]

## Combat
- [Encounter]: [Outcome]

## Loot
- [Items found]

## XP Awarded
[Amount and reason]

## Notes for Next Session
[Hooks and reminders]
```

## 🔮 Upcoming Plot Points

```dataview
LIST
FROM ""
WHERE contains(tags, "plot-point") AND status = "pending"
SORT priority DESC
```

---
*DM session navigation and management toolkit*


## Related

*Links to related content will be added here.*
