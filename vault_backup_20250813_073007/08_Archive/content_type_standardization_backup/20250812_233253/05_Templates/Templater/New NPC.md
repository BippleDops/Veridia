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
updated: '2025-08-13T12:34:25.302227+00:00'
created: '2025-08-11'
---




<%*
const npcName = await tp.system.prompt("NPC Name:");
const npcRace = await tp.system.prompt("Race:");
const npcGender = await tp.system.prompt("Gender:");
const npcAge = await tp.system.prompt("Age:");
const npcOccupation = await tp.system.prompt("Occupation:");
await tp.file.rename(npcName);
-%>
---
type: character
tags: [npc]
aliases: [<% npcName %>]
created: <% tp.file.creation_date() %>
modified: <% tp.file.last_modified_date() %>
race: <% npcRace %>
gender: <% npcGender %>
age: <% npcAge %>
occupation: <% npcOccupation %>
---
# <% npcName %>

## General Info
**Race**: <% npcRace %>
**Gender**: <% npcGender %>
**Age**: <% npcAge %>
**Occupation**: <% npcOccupation %>
**Location**: [[Location]]

## Description

## GM Notes

## Player-Facing Summary

New NPC is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of New NPC as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around New NPC.

## Adventure Hooks

- A rumor ties New NPC to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at New NPC to avert a public scandal.
- A map overlay reveals a hidden approach to New NPC active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[reports/bidirectional_links|Reports/bidirectional Links]]
