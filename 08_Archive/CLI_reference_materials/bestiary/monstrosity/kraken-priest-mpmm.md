---
updated: '2025-08-13T01:18:32.480343+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
- Kraken Priest
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-kraken-priest-mpmm-kraken-priest-mpmm.svg)

# [Kraken Priest](3-Mechanics\CLI\bestiary\monstrosity/kraken-priest-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 167, Volo's Guide to Monsters p. 215*  

A kraken can seem godlike to folk who have faced its fury. Those who mistake its might for divine power and those who seek to appease the monster through veneration are sometimes rewarded with power, to serve thereafter as kraken priests.

Every kraken priest undergoes a change in appearance that reflects the kraken's influence, although each one differs in how their reverence is displayed. One kraken priest might have ink-black eyes and a suckered tentacle for a tongue, while another has a featureless face and a body covered in eyes and mouths that dribble seawater. These horrific manifestations intensify when the kraken possesses its minion to utter dire pronouncements.

```statblock
"name": "Kraken Priest (MPMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "0"
"stats":
  - !!int "12"
  - !!int "10"
  - !!int "16"
  - !!int "10"
  - !!int "15"
  - !!int "14"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
"senses": "passive Perception 15"
"languages": "any two languages"
"cr": "5"
"traits":
  - "desc": "The priest can breathe air and water."
    "name": "Amphibious"
"actions":
  - "desc": "The priest makes two Thunderous Touch or Thunderbolt attacks."
    "name": "Multiattack"
  - "desc": "Melee Spell Attack: +5 to hit, reach 5 ft., one target. Hit: 27 (5d10)\
      \ thunder damage."
    "name": "Thunderous Touch"
  - "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one target. Hit: 11\
      \ (2d10) lightning damage plus 11 (2d10) thunder damage, and the target is knocked\
      \ [prone](/03_Mechanics/CLI/conditions.md#Prone)."
    "name": "Thunderbolt"
  - "desc": "A kraken speaks through the priest with a thunderous voice audible within\
      \ 300 feet. Creatures of the priest's choice that can hear the kraken's words\
      \ (which are spoken in Abyssal, Infernal, or Primordial) must succeed on a DC\
      \ 14 Wisdom saving throw or be [frightened](/03_Mechanics/CLI/conditions.md#Frightened)\
      \ of the priest for 1 minute. A [frightened](/03_Mechanics/CLI/conditions.md#Frightened)\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Voice of the Kraken (Recharges after a Short or Long Rest)"
  - "desc": "The priest casts one of the following spells, requiring no material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 13):\n\nAt will:\
      \ [command](/03_Mechanics/CLI/spells/command-xphb.md), [create or destroy water](/03_Mechanics/CLI/spells/create-or-destroy-water-xphb.md)\n\
      \n3/day each: [control water](/03_Mechanics/CLI/spells/control-water-xphb.md),\
      \ [darkness](/03_Mechanics/CLI/spells/darkness-xphb.md), [water breathing](/03_Mechanics/CLI/spells/water-breathing-xphb.md),\
      \ [water walk](/03_Mechanics/CLI/spells/water-walk-xphb.md)\n\n1/day: [Evard's\
      \ black tentacles](/03_Mechanics/CLI/spells/evards-black-tentacles-xphb.md)"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/kraken-priest-mpmm.webp"
```
^statblock

## Environment

coastal, underwater

## Player-Facing Summary

Kraken priest mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of kraken priest mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around kraken priest mpmm.

## Adventure Hooks

- A rumor ties kraken priest mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at kraken priest mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to kraken priest mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
