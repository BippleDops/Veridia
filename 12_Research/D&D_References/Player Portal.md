# Player Portal

---
title: Player Portal
aliases: []
type: Lore
tags:
- lore
- both
- note
- content/lore
- unknown
- world/both
- research
- category/note
- active
- draft
created: '2025-08-11'
modified: '2025-08-14'
status: draft
updated: '2025-08-13T12:34:17.935232+00:00'
world: Both
---

# Player Portal

Welcome! This section contains player-safe information (no spoilers).


## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement


## Known NPCs
```dataview
TABLE file.link as "NPC", faction, disposition
FROM #npc
WHERE status != "dead" AND !contains(tags, "dm-only")
SORT file.name ASC
```

## Known Locations
TABLE file.link as "Location", danger_level, MyCategory
FROM #location
WHERE !contains(tags, "dm-only")
SORT danger_level DESC

## Active Quests
TABLE file.link as "Quest", quest_status, quest_priority
FROM #quest
WHERE quest_status = "Active" OR quest_status = "In Progress"

## Vehicles & Travel
- Ship Handouts: [[Player Handout Aquabyssos Submarines]] • [[Player Handout Aethermoor Airships]] • [[Player Handout Merger Vessels]]
- Encounter Handouts:
LIST FROM "04_Resources/Handouts/Encounters"
- Doctrine Quick Reference: [[Doctrine Quick Reference]]

## Quick References
- [[07_Player_Resources/Handouts/Sanity Quick Reference]] — Mental health mechanics
- [[07_Player_Resources/Handouts/Welcome to Aquabyssos]] — World primer
- [[Character Creation Extended]] — Build options
- [[Faction Guide]] — Political landscape

---
Last updated: {{date:YYYY-MM-DD}}

## Player-Facing Summary

Player Portal is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Player Portal as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Player Portal.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Plot Hooks

- A journal reveals the truth about the cult
- Strange sightings suggest a portal
- A prisoner has gone missing and evil awakens
- The authorities needs help stealing before winter

## 12_Research Specific Content

Contextual improvement based on 12_Research


## 12_Research Specific Content

Contextual improvement based on 12_Research
