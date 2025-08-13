---
created: '2025-08-11'
status: complete
tags:
- content/mechanics
- fleets
- importance/core
- status/complete
- vehicles
- world/both
title: Vehicle Core Rules
type: Mechanics
updated: '2025-08-12T23:37:41.142762'
world: Both
---



# Vehicle Core Rules

These rules standardize vehicles across Aquabyssos (submarines), Aethermoor (airships), and Merger Zones (impossible vessels), integrating with [[Complete Pressure Adaptation System]], [[Complete Reality Merger System]], [[02_Worldbuilding/Quests/Aquabyssos|02 Worldbuilding/Quests/Aquabyssos]], [[Complete Faction Warfare System]], [[Memory Trading Economy System|Memory Trading Economy]], and [[Deep Mother]].

## 1) Vehicle Stat Block
- Class: Scout, Frigate, Cruiser, Carrier, Leviathan
- Scale: Tiny, Small, Medium, Large, Gargantuan
- Hull (HP): Integrity of structure; segments for locations (bow, stern, dorsal, ventral, core)
- Armor (AC): Material + field + adaptation
- Speed: Knots (sub), Knots Air (airship), Shift Rate (merger)
- Maneuver: Turn radius and climb/dive rate (3D grid)
- Crew: Min/Optimal/Max; role requirements
- Power: Crystal/Parasite/Memory/Hybrid output units (POU)
- Sanity Threshold: Ship consciousness tolerance (merger-capable or living ships)
- Reality Stability Bonus (RSB): How much it resists merger effects
- Sensor Suite: Sonar/Lidar/Aetheric/Memory-Echo
- Anchor Capacity: Number of [[Complete Reality Merger System#Reality Anchor Mechanics|Reality Anchors]] mount points
- Upgrade Slots: Bio, Crystal, Pressure, Memory, Anchor, Shrine
- Special: Signature abilities

## 2) Piloting & Adaptation Requirements
- Piloting DC = 10 + Zone Modifier + Complexity
- Zone Modifiers:
  - Aquatic Depth: Surface +0, Twilight +1, Pressure +2, Crush +3, Abyss +4, Hadal +5, Void +6
  - Altitude: Low +0, Mid +1, High +2, Stratos +3, Orbital +4
  - Merger: Flicker +1, Oscillate +2, Overlap +3, Anchored +4, Paradox +6
- Adaptation Points (AP) Gate: Pilot must have AP ≥ Zone Modifier×5 or use Ship AP Substitution
- Ship AP Substitution: If pilot lacks AP, vessel spends 1d4 Ship Stress per hour; on 0 Stress, roll Sanity for the ship (see §6)

## 3) Action Economy (Round = 10 seconds)
- Command (1/round): Give up to 2 ordered actions among crew (helm, power, sensors, weapons)
- Helm Action: Move up to Speed; climb/dive up to Maneuver
- Power Action: Allocate POU; overcharge grants advantage but adds 1 Stress
- Sensor Action: Ping (sonar), Scan (crystal harmonics), Scry (memory echo)
- Weapon Action: Fire arrays; reload cycles as listed per system
- Crew Free Actions: Intercom, Brace, Seal Bulkhead, Chant (shrine)

## 4) 3D Movement & Positioning
- Grid Units: 10 ft cubes; vehicles occupy volumes by Scale
- Facing: Bow determines forward; turns consume Maneuver
- Depth/Altitude Change: Each step may trigger [[Depth Survival Mechanics]] checks for exposed crew

## 5) Environmental Pressures
- Pressure/Altitude Saves: Constitution (crew) and Structure (ship)
- Ship Structure Save DC = 10 + Zone Modifier + Rapid Change (+2)
- Failure: Hull segment damage (2d6 per step) and 1 Stress
- Success: No damage; overpressure vents may impose stealth penalties

## 6) Ship Sanity & Madness (Living/Conscious Vessels)
- Sanity Points = (Core Quality×10) + RSB + Crew Cohesion
- Triggers: Merger pulses, Deep Mother whispers, memory overload, paradox engines
- Effects on Failure:
  - Short-term: Random course correction, hostile subsystem, lock doorways
  - Long-term: Personality drift, crew favoritism, refusal of orders
  - Indefinite: Obsessive route, hunger for memories, devotion to [[Deep Mother]]
- Recovery: Anchor rituals, memory purges (lose stored charts), crew lullaby (Performance check)

## 7) Memory Engines & Navigation Charts
- Memory Charts: Consumable or installable; grant route proficiency and reduce DCs
- Trade: Use [[Memory Trading Economy System|Memory Trading Economy]] values; black market offers forbidden routes
- Overwrite Risk: On critical failure, pilot loses a personal memory (DM determines)

## 8) Reality Stability & Anchors
- Local Integrity from [[Complete Reality Merger System#Reality Stability Mechanics|Reality Stability Mechanics]] modifies checks
- Anchors: Mounted devices increase RSB; each anchor reduces merger event severity by 1 step within range

## 9) Faction Doctrines & Mod Slots
- Each faction grants one mod slot and one doctrine bonus to ships they sponsor (see [[Fleet_Dynamics_Generator|Fleet Dynamics Generator]])

## 10) Crew Roles (Examples)
- Captain: Command economy, morale
- Helmsman: Maneuver tests, evasive actions
- Engineer: Power routing, field integrity
- Sensorian: Pings, scans, false echoes
- Gunnery Chief: Batteries, salvo timing
- Chaplain/Anchorite: Sanity stabilization, anchor rites

## 11) Combat Phases (Recommended)
1. Initiative: 1d20 + Sensor Suite
2. Orders: Captains issue Commands
3. Power: Allocate POU
4. Maneuver: Move & position
5. Weapons: Fire and resolve
6. Effects: Pressure/Altitude, Merger ticks, Sanity checks

## 12) Parasite Boarding & Biohazards
- Grapple Test: Opposed Maneuver; on success, boarding tunnel attaches
- Infection Saves: Crew make Con saves vs. parasite traits; failures can seed transformations (see [[Depth Adaptation System]])

## 13) Integration Checklists
- Pressure: Use AP gates and Structure saves
- Reality: Apply Integrity and anchor modifiers
- Sanity: Trigger ship and crew checks as events dictate
- Memory: Require charts for hard routes; risk identity loss
- Faction: Apply doctrines and mod slots
- Deep Mother: Add whispers/events on failed Sanity

## Quick Reference
```dataview
TABLE file.link as "Subsystem", status
FROM "03_Mechanics/Vehicles"
WHERE file.name != this.file.name
SORT file.name ASC
```

## Player-Facing Summary

Vehicle Core Rules is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Vehicle Core Rules as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Vehicle Core Rules.

## Adventure Hooks

- A rumor ties Vehicle Core Rules to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Vehicle Core Rules to avert a public scandal.
- A map overlay reveals a hidden approach to Vehicle Core Rules active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[Campaign_Dashboard|Campaign Dashboard]]


## Connections

- [[Mass_Combat_Evolution|Mass Combat Evolution]]
- [[Aquabyssos_Submarines|Aquabyssos Submarines]]
- [[Player_Handout_Aquabyssos_Submarines|Player Handout Aquabyssos Submarines]]
- [[Pressure_Weather_Events|Pressure Weather Events]]
