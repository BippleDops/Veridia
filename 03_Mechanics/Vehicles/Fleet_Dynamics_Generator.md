---
title: Fleet Dynamics Generator
type: mechanics
status: complete
tags: [mechanics, fleets, factions, warfare]
created: 2025-08-11
---

# Fleet Dynamics Generator

Procedures to build faction fleets and AI opponent behavior. Interfaces with [[Complete Faction Warfare System]] and vehicle subsystems.

## Faction Naval Doctrines (d12)
1 Stealth & Ambush • 2 Anchor Fortress • 3 Parasite Swarm • 4 Crystal Artillery • 5 Carrier Strike • 6 Trade Escort • 7 Guerrilla Currents • 8 Zealot Crusade • 9 Memory Warfare • 10 Reality Control • 11 Humanitarian Relief • 12 Pirate Confederacy

## Fleet Composition Rules
- Doctrine determines mandatory elements (e.g., Anchor Frigate for Reality Control)
- Point System: Assign Fleet Points per hull class; balance vs. objectives
- Readiness: Supply, crew sanity, and anchor stock affect deployment

## Admiral AI Personalities (d8)
1 Cautious • 2 Bold • 3 Trickster • 4 Zealot • 5 Scholar • 6 Tyrant • 7 Prophet • 8 Opportunist
- Behavior Scripts: Opening, Mid-battle shift, Retreat triggers

## Supply Lines & Naval Bases
- Supply Nodes: Fuel (POU crystals/memories), ammo, sanity medicine
- Naval Bases: Anchor arrays, repair yards, shrines, black markets
- Raid/Sabotage: Effects ripple through [[Complete Faction Warfare System#Resource Management|Resource Management]]

## Quick Build Procedure
1 Pick Doctrine → 2 Assign Fleet Points → 3 Choose Admirals → 4 Place Bases → 5 Define Objectives

Use with: [[Transportation_Infrastructure]], [[Journey_Event_Compiler]].
