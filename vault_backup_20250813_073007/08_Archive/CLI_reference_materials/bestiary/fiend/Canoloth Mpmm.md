---
aliases:
- Canoloth
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/yugoloth
- world/both
type: monster
updated: '2025-08-12T23:37:35.463500'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-canoloth-mpmm-canoloth-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\fiend/canoloth-mpmm|Canoloth]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 69, Mordenkainen's Tome of Foes p. 247*  

> [!quote] A quote from Mordenkainen  
> 
> Canoloths are glorified guard dogs. If you must engage one, just find out exactly what it's been assigned to do. I've often found I can waltz right past them by taking advantage of a relevant loophole.

A type of yugoloth, canoloths are fiendish trackers and guardians employed by evil powers. They prefer to enter into contracts to guard valuable treasures and important locations. They always do exactly as asked—never any more, never any less.

With senses sharp enough to pinpoint the locations of nearby [[/03_Mechanics/CLI/conditions#Invisible|invisible]] creatures, canoloths respond unfailingly to any threat to their charges. Furthermore, they emit a magical distortion field that prevents creatures close to them from teleporting. Canoloths confront intruders with swift and terrible force, projecting long, spiny tongues to grab their foes and drag them close. What happens next depends on the contract. Unless instructed to kill, a canoloth merely holds on to its prisoner, but if given the order to do so, it tears its prey limb from limb.

```statblock
"name": "Canoloth (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Typically  Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "17"
  - !!int "5"
  - !!int "17"
  - !!int "12"
"speed": "50 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Investigation|Investigation]]"
    "desc": "+3"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+9"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "8"
"traits":
  - "desc": "Other creatures can't teleport to or from a space within 60 feet of the\
      \ canoloth. Any attempt to do so is wasted."
    "name": "Dimensional Lock"
  - "desc": "The canoloth has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The canoloth can't be [[/03_Mechanics/CLI/conditions#Surprised|surprised]]\
      \ unless it's [[/03_Mechanics/CLI/conditions#Incapacitated|incapacitated]]."
    "name": "Uncanny Senses"
"actions":
  - "desc": "The canoloth makes one Bite or Tongue attack and one Claw attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) piercing damage plus 18 (4d8) force damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) slashing damage plus 9 (2d8) force damage."
    "name": "Claw"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 10\
      \ (1d12 + 4) piercing damage plus 7 (2d6) acid damage. If the target is Medium\
      \ or smaller, it is [[/03_Mechanics/CLI/conditions#Grappled|grappled]] (escape\
      \ DC 15), pulled up to 30 feet toward the canoloth, and [[/03_Mechanics/CLI/conditions#Restrained|restrained]]\
      \ until the grapple ends. The canoloth can grapple one target at a time with\
      \ its tongue."
    "name": "Tongue"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/canoloth-mpmm.webp"
```
^statblock

## Environment

coastal, underdark, urban

## Player-Facing Summary

Canoloth mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of canoloth mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around canoloth mpmm.

## Adventure Hooks

- A rumor ties canoloth mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at canoloth mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to canoloth mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
