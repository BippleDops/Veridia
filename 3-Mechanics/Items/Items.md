---
type: items-index
tags:
  - items
  - equipment
  - magic-items
  - treasure
cssclasses:
  - items-dashboard
  - wide-page
created: 2025-01-25
modified: 2025-01-25
---

# ⚔️ Campaign Items & Equipment
*Master Index of All Items, Weapons, Armor, and Treasures*

> [!quote] *"The right tool for the right job, and sometimes the wrong tool for the right job makes for the most interesting stories."*

---

## 📊 Items Statistics

```dataview
TABLE WITHOUT ID
  length(rows) as "Total Items",
  length(filter(rows, (r) => r.rarity = "common")) as "Common",
  length(filter(rows, (r) => r.rarity = "uncommon")) as "Uncommon",
  length(filter(rows, (r) => r.rarity = "rare")) as "Rare",
  length(filter(rows, (r) => r.rarity = "very rare")) as "Very Rare",
  length(filter(rows, (r) => r.rarity = "legendary")) as "Legendary"
FROM "3-Mechanics/Items"
WHERE type = "item"
```

---

## 🏷️ Items by Rarity

### Common Items
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  item_type as "Type",
  attunement as "Attunement"
FROM "3-Mechanics/Items"
WHERE type = "item" AND rarity = "common"
SORT file.name ASC
```

### Uncommon Items
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  item_type as "Type",
  attunement as "Attunement"
FROM "3-Mechanics/Items"
WHERE type = "item" AND rarity = "uncommon"
SORT file.name ASC
```

### Rare Items
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  item_type as "Type",
  attunement as "Attunement"
FROM "3-Mechanics/Items"
WHERE type = "item" AND rarity = "rare"
SORT file.name ASC
```

### Very Rare Items
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  item_type as "Type",
  attunement as "Attunement"
FROM "3-Mechanics/Items"
WHERE type = "item" AND rarity = "very rare"
SORT file.name ASC
```

### Legendary Items
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  item_type as "Type",
  attunement as "Attunement"
FROM "3-Mechanics/Items"
WHERE type = "item" AND rarity = "legendary"
SORT file.name ASC
```

---

## ⚔️ Items by Type

### Weapons
```dataview
TABLE WITHOUT ID
  file.link as "Weapon",
  rarity as "Rarity",
  damage as "Damage",
  attunement as "Attunement"
FROM "3-Mechanics/Items"
WHERE type = "item" AND item_type = "weapon"
SORT rarity ASC, file.name ASC
```

### Armor
```dataview
TABLE WITHOUT ID
  file.link as "Armor",
  rarity as "Rarity",
  ac_bonus as "AC Bonus",
  attunement as "Attunement"
FROM "3-Mechanics/Items"
WHERE type = "item" AND item_type = "armor"
SORT rarity ASC, file.name ASC
```

### Wondrous Items
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  rarity as "Rarity",
  attunement as "Attunement"
FROM "3-Mechanics/Items"
WHERE type = "item" AND item_type = "wondrous"
SORT rarity ASC, file.name ASC
```

### Consumables
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  rarity as "Rarity",
  charges as "Charges"
FROM "3-Mechanics/Items"
WHERE type = "item" AND item_type = "consumable"
SORT rarity ASC, file.name ASC
```

---

## 🎯 Items by Class

### Items for Warriors
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  rarity as "Rarity",
  item_type as "Type"
FROM "3-Mechanics/Items"
WHERE type = "item" AND contains(classes, "fighter") OR contains(classes, "barbarian") OR contains(classes, "paladin")
SORT rarity ASC, file.name ASC
```

### Items for Spellcasters
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  rarity as "Rarity",
  item_type as "Type"
FROM "3-Mechanics/Items"
WHERE type = "item" AND contains(classes, "wizard") OR contains(classes, "sorcerer") OR contains(classes, "warlock")
SORT rarity ASC, file.name ASC
```

### Items for Rogues
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  rarity as "Rarity",
  item_type as "Type"
FROM "3-Mechanics/Items"
WHERE type = "item" AND contains(classes, "rogue") OR contains(classes, "ranger")
SORT rarity ASC, file.name ASC
```

### Items for Clerics
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  rarity as "Rarity",
  item_type as "Type"
FROM "3-Mechanics/Items"
WHERE type = "item" AND contains(classes, "cleric") OR contains(classes, "druid")
SORT rarity ASC, file.name ASC
```

---

## 🗺️ Items by Location

### Items Found in Shadowhaven
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  rarity as "Rarity",
  location_found as "Location"
FROM "3-Mechanics/Items"
WHERE type = "item" AND contains(location_found, "Shadowhaven")
SORT rarity ASC, file.name ASC
```

### Items from The Island of Skulls
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  rarity as "Rarity",
  location_found as "Location"
FROM "3-Mechanics/Items"
WHERE type = "item" AND contains(location_found, "Island of Skulls")
SORT rarity ASC, file.name ASC
```

### Items from Dungeons
```dataview
TABLE WITHOUT ID
  file.link as "Item",
  rarity as "Rarity",
  location_found as "Location"
FROM "3-Mechanics/Items"
WHERE type = "item" AND contains(location_found, "dungeon") OR contains(location_found, "cave")
SORT rarity ASC, file.name ASC
```

---

## 🎲 Recently Added Items

```dataview
TABLE WITHOUT ID
  file.link as "Item",
  rarity as "Rarity",
  item_type as "Type",
  file.mtime as "Added"
FROM "3-Mechanics/Items"
WHERE type = "item"
SORT file.mtime DESC
LIMIT 10
```

---

## 🔗 Connected Content

### Quests Rewarding These Items
```dataview
TABLE WITHOUT ID
  file.link as "Quest",
  quest-status as "Status"
FROM "2-World/Quests"
WHERE contains(quest-loot-avail, this.file.link)
SORT file.name ASC
```

### Sessions Where Items Were Found
```dataview
TABLE WITHOUT ID
  file.link as "Session",
  date as "Date"
FROM "1-Session Journals"
WHERE contains(treasure, this.file.link)
SORT date DESC
LIMIT 5
```

### NPCs Who Own These Items
```dataview
TABLE WITHOUT ID
  file.link as "NPC",
  occupation as "Occupation"
FROM "2-World/People"
WHERE contains(possessions, this.file.link)
SORT file.name ASC
```

---

## 💰 Treasure Hoards

### Low-Level Hoards (CR 0-4)
```dataview
TABLE WITHOUT ID
  file.link as "Hoard",
  total_value as "Value",
  location as "Location"
FROM "3-Mechanics/Items"
WHERE type = "treasure-hoard" AND cr_range = "0-4"
SORT total_value DESC
```

### Mid-Level Hoards (CR 5-10)
```dataview
TABLE WITHOUT ID
  file.link as "Hoard",
  total_value as "Value",
  location as "Location"
FROM "3-Mechanics/Items"
WHERE type = "treasure-hoard" AND cr_range = "5-10"
SORT total_value DESC
```

### High-Level Hoards (CR 11+)
```dataview
TABLE WITHOUT ID
  file.link as "Hoard",
  total_value as "Value",
  location as "Location"
FROM "3-Mechanics/Items"
WHERE type = "treasure-hoard" AND cr_range = "11+"
SORT total_value DESC
```

---

## 📝 Quick Actions

`BUTTON[newItem]` Create New Item
`BUTTON[generateLoot]` Generate Random Loot
`BUTTON[itemGallery]` View Item Gallery
`BUTTON[treasureHoard]` Create Treasure Hoard

---

## 🎯 DM Notes

### Item Distribution Guidelines:
- **Common Items**: Available in most shops, 50-100 gp
- **Uncommon Items**: Specialized shops, 100-500 gp
- **Rare Items**: Major cities only, 500-5000 gp
- **Very Rare Items**: Quest rewards or legendary craftsmen, 5000-50000 gp
- **Legendary Items**: Unique, often tied to major storylines

### Attunement Management:
- Players can attune to 3 magic items maximum
- Attunement takes a short rest
- Breaking attunement requires another short rest
- Some items don't require attunement

### Item Creation Rules:
- **Common**: 1 week, 100 gp materials
- **Uncommon**: 2 weeks, 500 gp materials
- **Rare**: 1 month, 5000 gp materials
- **Very Rare**: 3 months, 50000 gp materials
- **Legendary**: 6 months, 500000 gp materials

### Treasure Distribution:
- **Individual Treasure**: 1d4 items per character level
- **Hoards**: 1d6 items per CR level
- **Story Items**: Place strategically to advance plot
- **Random Items**: Use for unexpected encounters

---

*This items index automatically updates as new equipment and treasures are added to the vault. Use the categorization above to find the perfect item for any situation.*