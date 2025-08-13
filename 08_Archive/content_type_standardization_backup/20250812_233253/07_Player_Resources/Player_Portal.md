---
aliases: []
tags:
- both
- category/note
- draft
- lore
- note
- unknown
type: Lore
status: draft
world: Both
updated: '2025-08-13T12:34:11.649247+00:00'
created: '2025-08-11'
---




# Player Portal

Welcome! This section contains player-safe information (no spoilers).

## World Overview
- [[08_Archive/2025-08-09/Campaign_Docs/Aethermoor/Aethermoor Campaign Overview|08 Archive/2025 08 09/Campaign Docs/Aethermoor/Aethermoor Campaign Overview]] (player-safe sections)
- [[08_Archive/2025-08-09/Campaign_Docs/Aquabyssos/Aquabyssos Campaign Overview|08 Archive/2025 08 09/Campaign Docs/Aquabyssos/Aquabyssos Campaign Overview]] (player-safe sections)

## Your Party
- Character sheets: 07_Player_Resources/Character_Sheets/
- Session summaries: 07_Player_Resources/Session_Summaries/

## Known NPCs
```dataview
TABLE file.link as "NPC", faction, disposition
FROM #npc
WHERE status != "dead" AND !contains(tags, "dm-only")
SORT file.name ASC
```

## Known Locations
```dataview
TABLE file.link as "Location", danger_level, MyCategory
FROM #location
WHERE !contains(tags, "dm-only")
SORT danger_level DESC
```

## Active Quests
```dataview
TABLE file.link as "Quest", quest_status, quest_priority
FROM #quest
WHERE quest_status = "Active" OR quest_status = "In Progress"
```

## Rules Quick Reference
- Conditions summary
- Common actions
- Homebrew notes (player-facing)

## Vehicles & Travel
- Ship Handouts: [[04_Resources/Handouts/Ships/Player_Handout_Aquabyssos_Submarines|Aquabyssos Submarines]] • [[04_Resources/Handouts/Ships/Player_Handout_Aethermoor_Airships|Aethermoor Airships]] • [[04_Resources/Handouts/Ships/Player_Handout_Merger_Vessels|Merger Vessels]]
- Encounter Handouts:
```dataview
LIST FROM "04_Resources/Handouts/Encounters"
SORT file.name ASC
```
- Doctrine Quick Reference: [[04_Resources/Handouts/Doctrines/Doctrine_Quick_Reference|Doctrine Quick Reference]]

## Quick References
- [[07_Player_Resources/Handouts/Sanity_Quick_Reference|Sanity System]] — Mental health mechanics
- [[07_Player_Resources/Handouts/Welcome_to_Aquabyssos|Welcome to Aquabyssos]] — World primer
- [[07_Player_Resources/Character_Creation_Extended|Character Creation]] — Build options
- [[07_Player_Resources/Faction_Guide|Faction Guide]] — Political landscape

---
Last updated: {{date:YYYY-MM-DD}}

## Player-Facing Summary

Player Portal is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Player Portal as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Player Portal.

## Adventure Hooks

- A rumor ties Player Portal to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Player Portal to avert a public scandal.
- A map overlay reveals a hidden approach to Player Portal active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[Master_Campaign_Index|Master Campaign Index]]
