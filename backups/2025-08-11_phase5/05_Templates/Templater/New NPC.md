---
aliases: []
tags:
- Category/Note
type: note
status: unknown
world: Both
updated: '2025-08-11T13:08:41.733992+00:00'
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
