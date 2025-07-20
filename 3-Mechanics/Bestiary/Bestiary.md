---
type: bestiary-index
tags:
  - bestiary
  - monsters
  - index
cssclasses:
  - bestiary-dashboard
  - wide-page
created: 2025-01-25
modified: 2025-01-25
---

# 🐉 Campaign Bestiary
*Master Index of All Monsters and Creatures*

> [!quote] *"In the shadows of the world, creatures both wondrous and terrible await those brave enough to seek them out."*

---

## 📊 Bestiary Statistics

```dataview
TABLE WITHOUT ID
  length(rows) as "Total Creatures",
  length(filter(rows, (r) => r.cr <= 1)) as "CR 0-1",
  length(filter(rows, (r) => r.cr > 1 and r.cr <= 5)) as "CR 2-5",
  length(filter(rows, (r) => r.cr > 5 and r.cr <= 10)) as "CR 6-10",
  length(filter(rows, (r) => r.cr > 10 and r.cr <= 15)) as "CR 11-15",
  length(filter(rows, (r) => r.cr > 15)) as "CR 16+"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster"
```

---

## 🎯 Quick Search by Challenge Rating

### Low-Level Threats (CR 0-3)
```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  type as "Type",
  environment as "Environment"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster" AND cr <= 3
SORT cr ASC, file.name ASC
```

### Mid-Level Challenges (CR 4-10)
```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  type as "Type",
  environment as "Environment"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster" AND cr > 3 AND cr <= 10
SORT cr ASC, file.name ASC
```

### High-Level Threats (CR 11+)
```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  type as "Type",
  environment as "Environment"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster" AND cr > 10
SORT cr ASC, file.name ASC
```

---

## 🌍 Environment-Based Index

### Aquatic Creatures
```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  type as "Type"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster" AND contains(environment, "aquatic")
SORT cr ASC, file.name ASC
```

### Underground Denizens
```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  type as "Type"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster" AND contains(environment, "underground")
SORT cr ASC, file.name ASC
```

### Aerial Threats
```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  type as "Type"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster" AND contains(environment, "aerial")
SORT cr ASC, file.name ASC
```

### Urban Encounters
```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  type as "Type"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster" AND contains(environment, "urban")
SORT cr ASC, file.name ASC
```

---

## 🏷️ Type-Based Categories

### Undead
```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  environment as "Environment"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster" AND contains(creature_type, "undead")
SORT cr ASC, file.name ASC
```

### Dragons
```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  environment as "Environment"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster" AND contains(creature_type, "dragon")
SORT cr ASC, file.name ASC
```

### Humanoids
```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  environment as "Environment"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster" AND contains(creature_type, "humanoid")
SORT cr ASC, file.name ASC
```

### Fiends
```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  environment as "Environment"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster" AND contains(creature_type, "fiend")
SORT cr ASC, file.name ASC
```

---

## 🎲 Recently Added Creatures

```dataview
TABLE WITHOUT ID
  file.link as "Creature",
  cr as "CR",
  type as "Type",
  file.mtime as "Added"
FROM "3-Mechanics/Bestiary"
WHERE type = "monster"
SORT file.mtime DESC
LIMIT 10
```

---

## 🔗 Connected Content

### Quests Featuring These Creatures
```dataview
TABLE WITHOUT ID
  file.link as "Quest",
  quest-status as "Status"
FROM "2-World/Quests"
WHERE contains(quest-monsters, this.file.link)
SORT file.name ASC
```

### Sessions with Monster Encounters
```dataview
TABLE WITHOUT ID
  file.link as "Session",
  date as "Date"
FROM "1-Session Journals"
WHERE contains(combat-encounters, this.file.link)
SORT date DESC
LIMIT 5
```

---

## 📝 Quick Actions

`BUTTON[newMonster]` Create New Monster
`BUTTON[randomEncounter]` Generate Random Encounter
`BUTTON[monsterGallery]` View Monster Gallery

---

## 🎯 DM Notes

### Bestiary Management Tips:
- **CR Balance**: Ensure encounters have appropriate challenge ratings for your party level
- **Environment Variety**: Mix creatures from different environments to keep encounters interesting
- **Type Diversity**: Include different creature types to test various party abilities
- **Story Integration**: Connect monsters to ongoing plot threads and world events

### Encounter Building:
- **Single Monster**: CR should be party level + 2 for a challenging solo encounter
- **Multiple Monsters**: Use lower CR creatures in groups of 3-6
- **Mixed Encounters**: Combine different creature types for tactical variety
- **Environmental Hazards**: Add terrain and weather effects to enhance encounters

---

*This bestiary index automatically updates as new creatures are added to the vault. Use the quick search functions above to find the perfect monster for any encounter.*