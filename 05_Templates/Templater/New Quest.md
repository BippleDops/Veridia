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
updated: '2025-08-11T13:08:47.002463+00:00'
created: '2025-08-11T13:08:47.002463+00:00'
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
