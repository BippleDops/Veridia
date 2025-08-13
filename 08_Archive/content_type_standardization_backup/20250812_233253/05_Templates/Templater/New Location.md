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
updated: '2025-08-13T12:34:11.687543+00:00'
created: '2025-08-11'
---




<%*
const locName = await tp.system.prompt("Location Name:");
const locType = await tp.system.prompt("Location Type (e.g., City, Dungeon, Tavern):");
await tp.file.rename(locName);
-%>
---
type: location
tags: [location, <% locType.toLowerCase() %>]
aliases: [<% locName %>]
created: <% tp.file.creation_date() %>
modified: <% tp.file.last_modified_date() %>
location_type: <% locType %>
---
# <% locName %>

## General Info
**Type**: <% locType %>
**Parent Location**: [[Location]]

## Description

## Points of Interest

## GM Notes

## Player-Facing Summary

New Location is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of New Location as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around New Location.

## Adventure Hooks

- A rumor ties New Location to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at New Location to avert a public scandal.
- A map overlay reveals a hidden approach to New Location active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[02_Worldbuilding/Lore/Location|02 Worldbuilding/Lore/Location]]
