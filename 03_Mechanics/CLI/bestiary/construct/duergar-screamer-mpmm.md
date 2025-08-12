---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/3
  - ttrpg-cli/monster/environment/mountain
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/construct/dwarf
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Duergar Screamer
---
# [Duergar Screamer](3-Mechanics\CLI\bestiary\construct/duergar-screamer-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 111, Mordenkainen's Tome of Foes p. 190*  

A duergar screamer uses sonic energy to grind rock into dust and to hurl invaders to the ground.

## Duergar Constructs

Creative duergar engineers have built numerous war machines, including some that can be fused with a duergar. Such a duergar-machine hybrid is fueled by the duergar's psionic energy, and the duergar inside the machine can psychically channel pain into power when attacked.

These machines are deployed to assist with construction projects and war. Some duergar bravely volunteer to become hybrids, while other duergar are forced into the fusion by Underdark tyrants. Unless incapacitated, the duergar inside a machine can extricate themself from it over the course of a short rest, completing the process at the rest's end.

```statblock
"name": "Duergar Screamer (MPMM)"
"size": "Medium"
"type": "construct"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"modifier": !!int "-2"
"stats":
  - !!int "18"
  - !!int "7"
  - !!int "12"
  - !!int "5"
  - !!int "5"
  - !!int "5"
"speed": "20 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 7"
"languages": "understands Dwarvish but can't speak"
"cr": "3"
"actions":
  - "desc": "The screamer makes one Drill attack, and it uses Sonic Scream."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
      \ (1d12 + 4) piercing damage."
    "name": "Drill"
  - "desc": "The screamer emits destructive energy in a 15-foot cube. Each creature\
      \ in that area must succeed on a DC 11 Strength saving throw or take 7 (2d6)\
      \ thunder damage and be knocked [prone](/03_Mechanics/CLI/conditions.md#Prone)."
    "name": "Sonic Scream"
"reactions":
  - "desc": "Immediately after a creature within 5 feet of the screamer hits it with\
      \ an attack roll, the screamer makes a Drill attack against that creature."
    "name": "Engine of Pain"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/construct/token/duergar-screamer-mpmm.webp"
```
^statblock

## Environment

mountain, underdark

## Player-Facing Summary

Duergar screamer mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of duergar screamer mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around duergar screamer mpmm.

## Adventure Hooks

- A rumor ties duergar screamer mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at duergar screamer mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to duergar screamer mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
