---
created: null
obsidianUIMode: preview
status: complete
tags:
- complete
- index
- lore
- narrative
- status/complete
- universal
- world/both
type: Lore
updated: '2025-08-13T12:34:17.880427+00:00'
world: Universal
---



# Master Narrative Web

## Overview
High-level plot threads and how they interconnect across Aquabyssos and Aethermoor. Use this to visualize options, not to constrain play.

## Primary Threads
- Seven Shards Convergence
- Crystal Plague Contagion
- Faction War Over Sovereignty
- Memory Tide and Pressure Depth Hazards

## Decision Trees (Major Branches)
```mermaid
flowchart TD
  A[Inciting Rumors] --> B{Choose Focus}
  B -->|Shards| S1[Seek the First Shard]
  B -->|Plague| P1[Diagnose Crystal Plague]
  B -->|Politics| F1[Broker Faction Truce]
  B -->|Memory| M1[Map Memory Tides]

  S1 --> S2{Guardian Response}
  S2 -->|Parley| S3[Alliance with Guardian]
  S2 -->|Combat| S4[Defeat or Retreat]
  S2 -->|Trial| S5[Pass the Rite]

  P1 --> P2{Vector Identified}
  P2 -->|Cure| P3[Source Antidote]
  P2 -->|Contain| P4[Quarantine District]
  P2 -->|Exploit| P5[Weaponize Strain]

  F1 --> F2{Choose Ally}
  F2 -->|Pearl Guard| F3[Stabilize Trade]
  F2 -->|Syndicate| F4[Black Market Ascendant]
  F2 -->|Verdant Accord| F5[Seed Sanctuaries]

  M1 --> M2{Tide Pattern}
  M2 -->|Safe Routes| M3[Reduce Travel DCs]
  M2 -->|Anomalies| M4[New Ritual Options]
```

## Consequence Cascades
- If players ally with Syndicate early, increase black market availability but raise lawful scrutiny clocks by 2 ticks across port locations.
- If a shard is activated without guardian consent, spawn Convergence anomalies in nearby locations for three sessions.
- If a cure is rushed, it works but creates a resistant strain; later plague checks increase DC by 2 until Verdant Accord research completes.

## Timeline Dependencies
- Festival of Rising Tides must occur before The Second Rising; delaying triggers refugee waves, altering market supply.
- The Sunken Library revelations unlock shard resonance options; attempting before that imposes additional ritual components.
- War Council outcomes set mass-combat stakes for the Faction War finale.

## Cross-Index Links
- [[09_Performance/Indexes/Complete_NPC_Matrix.md|Complete NPC Matrix]]
- [[09_Performance/Indexes/Location_Network_Graph.md|Location Network Graph]]
- [[09_Performance/Indexes/Quest_Dependency_System.md|Quest Dependency System]]
- [[09_Performance/Indexes/Seven_Shards_Tracker.md|Seven Shards Tracker]]
```dataview
LIST FROM "01_Adventures/The_Seven_Shards_Campaign" OR "01_Adventures/Convergence_Crisis_Scenarios" WHERE status = "complete"
```