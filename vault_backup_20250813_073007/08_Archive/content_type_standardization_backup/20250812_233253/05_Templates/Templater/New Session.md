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
updated: '2025-08-13T12:34:25.300716+00:00'
created: '2025-08-11'
---




<%*
const sessionNumber = await tp.system.prompt("Session Number:");
const sessionDate = await tp.system.prompt("Session Date (YYYY-MM-DD):");
const title = `Session ${sessionNumber} - ${sessionDate}`;
await tp.file.rename(title);
-%>
---
type: session
tags: [session]
aliases: [Session <% sessionNumber %>]
created: <% tp.file.creation_date() %>
modified: <% tp.file.last_modified_date() %>
session_number: <% sessionNumber %>
session_date: <% sessionDate %>
---
# <% title %>

## Session Summary

## Players
- [[02_Worldbuilding/Lore/Player 7|02 Worldbuilding/Lore/Player 7]]
- [[Player 2]]
- [[02_Worldbuilding/Lore/Player 7|02 Worldbuilding/Lore/Player 7]]
- [[02_Worldbuilding/Lore/Player 7|02 Worldbuilding/Lore/Player 7]]

## Quests
- [[Quest 1]]

## NPCs
- [[NPC 1]]

## Locations
- [[02_Worldbuilding/Lore/Location|02 Worldbuilding/Lore/Location]]

## GM Notes

## Player-Facing Summary

New Session is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of New Session as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around New Session.

## Adventure Hooks

- A rumor ties New Session to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at New Session to avert a public scandal.
- A map overlay reveals a hidden approach to New Session active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[02_Worldbuilding/Lore/Player 7|02 Worldbuilding/Lore/Player 7]]
