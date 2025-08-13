---
aliases:
- Neogi
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
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/aberration
- world/both
type: monster
updated: '2025-08-12T23:37:35.321626'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-neogi-mpmm-neogi-mpmm.svg)

# [Neogi](3-Mechanics\CLI\bestiary\aberration/neogi-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 192, Volo's Guide to Monsters p. 180*  

The mentality of neogi is alien to many other peoples. Because adult neogi have the power to control minds, they consider doing so to be entirely appropriate. Their society makes no distinction between individuals, aside from the ability that a given creature has to control others, and they don't comprehend the emotional aspects of existence that humans and similar beings experience. To a neogi, hatred is as foreign a sensation as love, and showing loyalty in the absence of authority is foolishness.

Neogi mark themselves and those they capture through the use of dyes, transformational magic, and other markings intended to signify rank, achievements, and the identity of the individual's leader. By these signs, neogi can identify each others' place in the hierarchy—and they must defer to those of higher station or risk harsh punishment.

## Neogi

> [!quote] A quote from Mordenkainen  
> 
> Only the malevolent or the desperate do business with neogi. I generally advise against working with beings who view you as property or prey.

A neogi looks like an outsize spider with an eel's neck and head. It can poison the body and the mind of its targets and can subjugate even beings that are physically superior.

Neogi usually dwell in far-flung locations on the Material Plane, as well as in the Astral Plane and the Ethereal Plane. They left their home world long ago to conquer and devour creatures in other realms. During this era, they dominated umber hulks and used them to build sleek, spidery ships capable of traversing the multiverse.

```statblock
"name": "Neogi (MPMM)"
"size": "Small"
"type": "aberration"
"alignment": "Typically  Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d6 + 12"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "12"
  - !!int "15"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Intimidation](/03_Mechanics/CLI/skills.md#Intimidation)"
    "desc": "+4"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Deep Speech, Undercommon"
"cr": "3"
"traits":
  - "desc": "The neogi has advantage on saving throws against being [charmed](/03_Mechanics/CLI/conditions.md#Charmed)\
      \ or [frightened](/03_Mechanics/CLI/conditions.md#Frightened), and magic can't\
      \ put the neogi to sleep."
    "name": "Mental Fortitude"
  - "desc": "The neogi can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The neogi makes one Bite attack and two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed\
      \ on a DC 12 Constitution saving throw or become [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ for 1 minute. A target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
      \ + 3) slashing damage."
    "name": "Claw"
"bonus_actions":
  - "desc": "The neogi targets one creature it can see within 30 feet of it. The target\
      \ must succeed on a DC 14 Wisdom saving throw or be magically [charmed](/03_Mechanics/CLI/conditions.md#Charmed)\
      \ by the neogi for 1 day, or until the neogi dies or is more than 1 mile from\
      \ the target. The [charmed](/03_Mechanics/CLI/conditions.md#Charmed) target obeys\
      \ the neogi's commands and can't take reactions, and the neogi and the target\
      \ can communicate telepathically with each other at a distance of up to 1 mile.\
      \ Whenever the [charmed](/03_Mechanics/CLI/conditions.md#Charmed) target takes\
      \ damage, it can repeat the saving throw, ending the effect on itself on a success."
    "name": "Enslave (Recharges after a Short or Long Rest)"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/neogi-mpmm.webp"
```
^statblock

## Environment

hill, underdark

## Player-Facing Summary

Neogi mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of neogi mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around neogi mpmm.

## Adventure Hooks

- A rumor ties neogi mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at neogi mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to neogi mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
