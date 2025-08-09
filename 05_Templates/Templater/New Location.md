---
aliases: []
tags:
  - Category/Note
type: note
status: unknown
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
