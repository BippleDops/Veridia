---
tags:
- complete
- ecology
- index
- universal
status: complete
world: Universal
type: index
obsidianUIMode: preview
created: null
updated: '2025-08-13T01:18:31.104006+00:00'
---


# Monster Ecology Web

## Habitat Map
```dataview
TABLE WITHOUT ID link(file.name) AS "Creature",
  habitat AS "Habitat",
  migration AS "Migration",
  mutation AS "Convergence Mutation",
  prey AS "Prey",
  predator AS "Predators"
FROM "02_Worldbuilding/Hazards" OR "02_Worldbuilding/Creatures"
WHERE status = "complete"
SORT habitat ASC, file.name ASC
```

## Encounter Tables by Region
- Whisper Island and Surrounds
  - 1: Silent Reef Stalkers
  - 2: Lanternfish Swarm
  - 3: Memory-Leached Eels
  - 4: Pearl Guard Patrol
  - 5: Syndicate Cutters
  - 6: Convergence Aberrant (roll variant)

- Aethermoor Plains
  - 1: Glassback Grazers
  - 2: Verdant Accord Wardens
  - 3: Shard-Glitter Jackals
  - 4: Harmony Collective Scouts
  - 5: Storm-Woken Elemental
  - 6: Convergence Aberrant (roll variant)