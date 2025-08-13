---
tags:
- complete
- index
- shards
- universal
status: complete
world: Universal
type: index
obsidianUIMode: preview
created: null
updated: '2025-08-13T01:18:31.107320+00:00'
---


# Seven Shards Tracker

## Summary Table
```dataview
TABLE WITHOUT ID link(file.name) AS "Shard",
  shard_location AS "Current Location",
  shard_guardian AS "Guardian",
  shard_activation AS "Activation",
  shard_power AS "Power",
  shard_convergence AS "Convergence Impact"
FROM "02_Worldbuilding/Lore"
WHERE contains(file.name, "Shard") OR contains(file.name, "Shards")
SORT file.name ASC
```

## Notes
- Activation may require synchronized rituals during Convergence windows or negotiated consent with guardians.
- Each shard’s impact shifts regional weather, economy, or faction standing when active.