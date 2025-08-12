---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/10
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/aberration/beholder
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Death Kiss
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-death-kiss-mpmm-death-kiss-mpmm.svg)

# [Death Kiss](3-Mechanics\CLI\bestiary\aberration/death-kiss-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 85, Volo's Guide to Monsters p. 124*  

A death kiss is a lesser beholder that can come into being when a true beholder has a vivid nightmare about losing blood. Its coloration and shape resemble those of the beholder that dreamed it into existence, but its hue is more muted, and instead of magical eye rays, it has ten long tentacles, each ending in a mouth full of teeth. It can speak through any of its tentacle-maws in a high-pitched, nasal voice.

Death kisses fear true beholders, which can easily kill or subdue them. Lacking the egotism of their stronger kin, a death kiss usually submits to the rule of its creator or any other beholder it encounters, but it tries to escape as soon as the beholder is preoccupied.

A death kiss consumes ingested blood, which it also uses to heal and generate electrical energy inside its body. Terrified of dying from starvation, it obsessively drains even little creatures such as rats, leaving behind a trail of bloodless corpses. When underground, it uses its tentacles as feelers, prodding and examining the environment in all directions. Above ground, it usually keeps its tentacles retracted when on the hunt, then lashes out with them to catch opponents off guard.

A death kiss lacks the combat finesse and intelligence of a true beholder. In most cases, it simply latches on to its prey with one or more of its tentacles and drains blood until the prey collapses. If it's in a superior position and its foe poses no threat, it might toy with its food, drawing out its prey's death. A death kiss prefers to hunt alone. If it meets another of its kind, it might fight, flee, or team up, depending on its health and pride.

```statblock
"name": "Death Kiss (MPMM)"
"size": "Large"
"type": "aberration"
"subtype": "beholder"
"alignment": "Typically  Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "18"
  - !!int "10"
  - !!int "12"
  - !!int "10"
"speed": "0 ft., fly 30 ft. (hover)"
"saves":
  - "constitution": !!int "8"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
"damage_immunities": "lightning"
"condition_immunities": "[prone](/03_Mechanics/CLI/conditions.md#Prone)"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Deep Speech, Undercommon"
"cr": "10"
"traits":
  - "desc": "A creature within 5 feet of the death kiss takes 5 (d10) lightning damage\
      \ whenever it hits the death kiss with a melee attack that deals piercing or\
      \ slashing damage."
    "name": "Lightning Blood"
"actions":
  - "desc": "The death kiss makes three Tentacle attacks. Up to three of these attacks\
      \ can be replaced by Blood Drain—one replacement per tentacle grappling a creature."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 20 ft., one target. Hit: 11\
      \ (2d6 + 4) piercing damage, and the target is [grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ (escape DC 14) if it is a Huge or smaller creature. Until this grapple ends,\
      \ the target is [restrained](/03_Mechanics/CLI/conditions.md#Restrained), and\
      \ the death kiss can't use the same tentacle on another target. The death kiss\
      \ has ten tentacles."
    "name": "Tentacle"
  - "desc": "One creature [grappled](/03_Mechanics/CLI/conditions.md#Grappled) by a\
      \ tentacle of the death kiss must make a DC 16 Constitution saving throw. On\
      \ a failed save, the target takes 22 (4d10) lightning damage, and the death\
      \ kiss regains half as many hit points."
    "name": "Blood Drain"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/death-kiss-mpmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Death kiss mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of death kiss mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around death kiss mpmm.

## Adventure Hooks

- A rumor ties death kiss mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at death kiss mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to death kiss mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
