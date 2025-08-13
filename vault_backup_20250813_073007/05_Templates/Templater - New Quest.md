---
aliases: []
created: '2025-08-11'
status: draft
tags:
- category/note
- content/lore
- note
- unknown
- world/both
type: Lore
updated: '2025-08-12T23:37:33.132922'
world: Both
---



<%*
const questName = await tp.system.prompt("Quest Name:");
const questGiver = await tp.system.prompt("Quest Giver:");
await tp.file.rename(questName);
-%>
---
type: quest
tags: [quest]
aliases: [<% questName %>]
created: <% tp.file.creation_date() %>
modified: <% tp.file.last_modified_date() %>
quest_giver: "[[<% questGiver %>]]"
status: "not-started"
---
# <% questName %>

## Quest Info
**Quest Giver**: [[<% questGiver %>]]
**Location**: [[Location]]
**Status**: Not Started

## Quest Details

### Objectives
- [ ] Objective 1

### Rewards
- 

## GM Notes

## Player-Facing Summary

New Quest is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of New Quest as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around New Quest.

## Adventure Hooks

- A rumor ties New Quest to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at New Quest to avert a public scandal.
- A map overlay reveals a hidden approach to New Quest active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[02_Worldbuilding/Lore/<% questGiver %>|02 Worldbuilding/Lore/<% questGiver %>]]
