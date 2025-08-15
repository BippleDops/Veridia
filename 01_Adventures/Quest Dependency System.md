---
title: Quest Dependency System
type: Lore
tags:
- lore
- index
- status/complete
- content/adventure
- report
- universal
- world/both
- active
- complete
created: null
modified: '2025-08-14'
status: complete
obsidianUIMode: preview
updated: '2025-08-13T12:34:03.167080+00:00'
world: Universal
---

# Quest Dependency System

## Dependencies Overview
```dataview
TABLE WITHOUT ID link(file.name) AS "Quest",
  prereqs AS "Prerequisites",
  exclusions AS "Mutual Exclusions",
  time_sensitive AS "Time Sensitive",
  faction_rep AS "Faction Reputation",
  questLevel AS "Level"
FROM "02_Worldbuilding/Quests"
WHERE status = "complete"
SORT questLevel ASC
```

## Sample Dependency Chains
- The Seven Shards arc requires locating the Sunken Library before ritual activation attempts.
- The Faction War arc depends on at least one stable truce or a clear dominance state.

## Reputation Gates
- Pearl Guard: -1 or worse restricts customs access; +2 or better reduces travel checks by 1 DC near ports.
- Verdant Accord: +1 or better unlocks bio-crafting aid; -2 or worse triggers eco-saboteur encounters.

## Time Pressure Examples
- Convergence Storm windows: rolls with advantage for navigation for 1 day after the Festival; disadvantage in opposing realm for 1 day.

## Connections

- See also: [[Central Index]]
- Related: [[Historical Context]]
- Connected to: [[Side Adventures]]

## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes

## Background
*[Adventure setup and context]*

### What Happened Before
- *[Recent events leading to this adventure]*

### Current Situation  
- *[What's happening now]*

### The Stakes
- *[What happens if PCs don't act]*

## Adventure Hooks
*[Ways to get PCs involved]*

### Direct Approach
- *[Straightforward hook]*

### Indirect Approach
- *[Subtle introduction]*

### Emergency Hook
- *[Urgent situation]*

## Key NPCs
*[Important characters in this adventure]*

### Allies
- *[Helpful NPCs]*

### Antagonists
- *[Opposition NPCs]*

### Neutral Parties
- *[Information sources]*

## Locations
*[Important places in this adventure]*

### Starting Location
- *[Where adventure begins]*

### Key Sites
- *[Major locations to visit]*

### Optional Areas
- *[Side locations]*

## Rewards
*[What PCs gain from completing this adventure]*

### Experience Points
- *[XP awards]*

### Treasure
- *[Gold and magic items]*

### Story Rewards
- *[Reputation, allies, information]*

## Scaling
*[How to adjust for different party levels]*

### Lower Level Parties
- *[Adjustments for weaker groups]*

### Higher Level Parties
- *[Adjustments for stronger groups]*

### Large/Small Parties
- *[Adjustments for party size]*
