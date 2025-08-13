---
created: null
obsidianUIMode: preview
status: complete
tags:
- content/adventure
- index
- status/complete
- world/both
type: Lore
updated: '2025-08-12T23:37:33.008588'
world: Universal
---


# Quest Dependency System

## Dependencies Overview
```dataview
TABLE WITHOUT ID link(file.name) AS "Quest",
  prereqs AS "Prerequisites",
  exclusions AS "Mutual Exclusions",
  time_sensitive AS "Time Sensitive",
  faction_rep AS "Faction Reputation",
  questLevel AS "Level"
FROM "02_Worldbuilding/Quests"
WHERE status = "complete"
SORT questLevel ASC
```

## Sample Dependency Chains
- The Seven Shards arc requires locating the Sunken Library before ritual activation attempts.
- The Faction War arc depends on at least one stable truce or a clear dominance state.

## Reputation Gates
- Pearl Guard: -1 or worse restricts customs access; +2 or better reduces travel checks by 1 DC near ports.
- Verdant Accord: +1 or better unlocks bio-crafting aid; -2 or worse triggers eco-saboteur encounters.

## Time Pressure Examples
- Convergence Storm windows: rolls with advantage for navigation for 1 day after the Festival; disadvantage in opposing realm for 1 day.