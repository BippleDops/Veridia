---
created: null
obsidianUIMode: preview
status: complete
tags:
- complete
- index
- lore
- shards
- status/complete
- universal
- world/both
type: Lore
updated: '2025-08-13T12:34:17.878767+00:00'
world: Universal
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