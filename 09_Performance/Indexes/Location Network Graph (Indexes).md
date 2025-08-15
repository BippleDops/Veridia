---

title: Location Network Graph
type: Lore
tags:
- lore
- index
- status/complete
- report
- universal
- content/location
- world/both
- active
- complete

created: null
modified: '2025-08-14'
status: complete
obsidian UIMode: preview
updated: '2025-08-13T12:34:03.164997+00:00'
world: Universal

--- # Location Network Graph ## Travel Network Overview```dataview

## Description

Detailed description pending.

TABLE WITHOUT ID link(file.name) AS "Location", travel_time AS "Travel Time", realm_shift AS "Realm Shift Points", resources AS "Resources", danger AS "Danger Level"

FROM "02_Worldbuilding/Places"

WHERE status = "complete"

SORT file.name ASC```## Graph (Sample)```mermaid

graph LR A[Whisper Island] -- 1 day skiff --> B[Port Meridian] B -- 2 days caravan --> C[The Memory Meadows] C -- hidden trench --> D[The Sunken Library of Thalassius] D -- realm shift --> E[Aethermoor]```## Notes

- Travel time is expressed in days by default; underwater routes may use pressure-lock segments.
- Realm-shift points are rare; consuming a charge from a shard or meeting ritual requirements may be necessary.
- Resource availability fluctuates with the Living Economy; see [[Living_Economy_System.md]]. ## Connections - See also: [[Campaign Guide]]

- Related: [[Power Structures]]
- Connected to: [[World Events]] ## DM Notes *Private notes for campaign integration:*

- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes


## Atmosphere
- Mood and feeling
- Sensory details


## Resources
- Natural resources
- Trade goods


## Dangers
- Environmental hazards
- Hostile creatures


## Rumors
- Local gossip
- Urban legends


## Weather
- Typical conditions
- Seasonal changes
