---
aliases: []
tags:
- both
- category/note
- note
- unknown
type: Lore
status: unknown
world: Both
updated: '2025-08-11T13:08:47.001722+00:00'
created: '2025-08-11T13:08:47.001722+00:00'
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
