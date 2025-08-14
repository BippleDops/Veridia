---
created: 2025-08-14
updated: 2025-08-14
type: sidebar
cssclass: quick-access
tags:
- navigation
- sidebar
- quick-access
---

# ⚡ Quick Access Panel

## 🎯 Frequent Actions

### DM Tools
- [[Dice Roller|🎲 Roll Dice]]
- [[Initiative Tracker|⚔️ Track Initiative]]
- [[Random NPC Generator|👤 Generate NPC]]
- [[Loot Generator|💰 Generate Loot]]
- [[Random Encounter|🐾 Random Encounter]]

### Session Tools
- [[Session Template|📝 New Session]]
- [[Session Recap|📋 Write Recap]]
- [[Session Timer|⏱️ Session Timer]]
- [[Player Notes|📓 Player Notes]]
- [[XP Calculator|📊 Calculate XP]]

### Quick References
- [[Conditions Reference|🤒 Conditions]]
- [[Spell List|✨ Spells]]
- [[Item Prices|💎 Items]]
- [[CR Calculator|⚖️ CR Calculator]]
- [[Travel Times|🗺️ Travel]]

## 📌 Pinned Content

```dataview
LIST
FROM ""
WHERE contains(tags, "pinned") OR contains(tags, "favorite")
SORT file.name ASC
```

## 🔥 Hot Keys

| Action | Shortcut | Description |
|--------|----------|-------------|
| Quick Search | `Cmd/Ctrl + O` | Open file |
| Command Palette | `Cmd/Ctrl + P` | Commands |
| Daily Note | `Cmd/Ctrl + D` | Today's note |
| Graph View | `Cmd/Ctrl + G` | Visual graph |
| Tag Search | `Cmd/Ctrl + T` | Find by tag |

## 🎲 Quick Rolls

### Standard Rolls
- `[[1d20]]` - Attack/Check
- `[[2d20kh1]]` - Advantage
- `[[2d20kl1]]` - Disadvantage
- `[[1d100]]` - Percentile

### Damage Rolls
- `[[1d6]]` - Light weapon
- `[[1d8]]` - Medium weapon
- `[[2d6]]` - Greatsword
- `[[8d6]]` - Fireball

## 📍 Jump Points

### Campaigns
```dataview
LIST
FROM "01_Adventures"
WHERE type = "campaign" AND status = "active"
LIMIT 3
```

### Current NPCs
```dataview
LIST
FROM "02_Worldbuilding/People"
WHERE contains(tags, "current") OR contains(tags, "active")
LIMIT 5
```

### Active Locations
```dataview
LIST
FROM "02_Worldbuilding/Places"
WHERE contains(tags, "current") OR last-visited = date(today)
LIMIT 5
```

---
*Quick access sidebar for rapid navigation*
