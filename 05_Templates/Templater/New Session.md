---
aliases: []
tags:
  - Category/Note
type: note
status: unknown
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
- [[Player 1]]
- [[Player 2]]
- [[Player 3]]
- [[Player 4]]

## Quests
- [[Quest 1]]

## NPCs
- [[NPC 1]]

## Locations
- [[Location 1]]

## GM Notes
