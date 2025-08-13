---
created: null
obsidianUIMode: preview
status: complete
tags:
- content/item
- index
- status/complete
- world/both
type: Lore
updated: '2025-08-12T23:37:33.005251'
world: Universal
---


# Item Catalog Complete

## Items Overview
```dataview
TABLE WITHOUT ID link(file.name) AS "Item",
  item_type AS "Type",
  rarity AS "Rarity",
  cost_gp AS "Price (gp)",
  weight AS "Weight",
  Connected_Quests AS "Plot Links",
  MyContainer AS "Found/Owner"
FROM "02_Worldbuilding/Items"
WHERE status = "complete"
SORT rarity ASC, file.name ASC
```

## Merchant Inventories by Location
```dataview
TABLE WITHOUT ID link(file.name) AS "Location", merchant_inventory AS "Inventory"
FROM "02_Worldbuilding/Places"
WHERE status = "complete" AND merchant_inventory
SORT file.name ASC
```

## Crafting Requirements
```dataview
TABLE WITHOUT ID link(file.name) AS "Item", crafting AS "Requirements"
FROM "02_Worldbuilding/Items"
WHERE status = "complete" AND crafting
SORT file.name ASC
```