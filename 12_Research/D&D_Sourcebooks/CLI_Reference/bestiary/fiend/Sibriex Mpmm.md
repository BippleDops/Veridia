# Sibriex Mpmm

---
title: Sibriex Mpmm
aliases:
- Sibriex
type: monster
tags:
- both
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/cr/18
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/type/fiend/demon
- ttrpg-cli/compendium/src/5e/mpmm
- world/both
- research
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.785977+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-sibriex-mpmm-sibriex-mpmm.svg)

# [[sibriex-mpmm|Sibriex]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 217, Mordenkainen's Tome of Foes p. 137*  

Thought to be as old as the Abyss itself, sibriexes haunt remote parts of that plane, where they use their vile abilities to create new horrors and they seek ancient lore. Rivulets of blood and bile cascade from a sibriex's body, polluting the surrounding landscape.

Sibriexes have spent eons amassing knowledge from across the planes, hoarding it for when it might be useful. Such are their incredible intellects and stores of information that many seek them out, including demon lords. Some sibriexes act as advisors and oracles, manipulating demons into serving their ends, while others parcel out lore only when doing so advances their plans.

Sibriexes can channel the power of the Abyss to create new demons from other creatures. Some demons petition sibriexes for physical gifts, for sibriexes can graft on new body parts to give the demons greater strength, vision, or stamina. Sibriexes never give aid freely, though; they demand a service or a treasure in return for the flesh-shaping they provide.

```statblock
"name": "Sibriex (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "12d12 + 72"
"modifier": !!int "-4"
"stats":
  - !!int "10"
  - !!int "3"
  - !!int "23"
  - !!int "25"
  - !!int "24"
  - !!int "25"
"speed": "0 ft., fly 20 ft. (hover)"
"saves":
  - "intelligence": !!int "13"
  - "charisma": !!int "13"
"skillsaves":
  - "name": "[[skills#Arcana|Arcana]]"
    "desc": "+13"
  - "name": "[[skills#History|History]]"
    "desc": "+13"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+13"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "all, telepathy 120 ft."
"cr": "18"
"traits":
  - "desc": "The sibriex emits an aura of corruption 30 feet in every direction. Vegetation\
      \ withers in the aura, and the ground in the aura is difficult terrain for other\
      \ creatures. Any creature that starts its turn in the aura must succeed on a\
      \ DC 20 Constitution saving throw or take 14 (4d6) poison damage. A creature\
      \ that succeeds on the save is immune to this sibriex's Contamination for 24\
      \ hours."
    "name": "Contamination"
  - "desc": "If the sibriex fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The sibriex has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The sibriex makes three Chain attacks, and it uses Squirt Bile."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 20\
      \ (2d12 + 7) force damage."
    "name": "Chain"
  - "desc": "The sibriex targets one creature it can see within 120 feet of it. The\
      \ target must succeed on a DC 20 Dexterity saving throw or take 31 (9d6) acid\
      \ damage."
    "name": "Squirt Bile"
  - "desc": "The sibriex targets up to three creatures it can see within 120 feet\
      \ of it. Each target must make a DC 20 Constitution saving throw. On a successful\
      \ save, a creature becomes immune to this sibriex's Warp Creature. On a failed\
      \ save, the target is [[conditions#Poisoned|poisoned]], which\
      \ causes it to also gain 1 level of [[conditions#Exhaustion|exhaustion]].\
      \ While [[conditions#Poisoned|poisoned]] in this way, the\
      \ target must repeat the saving throw at the start of each of its turns. Three\
      \ successful saves against the poison end it, and ending the poison removes\
      \ any levels of [[conditions#Exhaustion|exhaustion]] caused\
      \ by it. Each failed save causes the target to gain another level of [[conditions#Exhaustion|exhaustion]].\
      \ Once the target reaches 6 levels of [[conditions#Exhaustion|exhaustion]],\
      \ it dies and instantly transforms into a living [[manes-xmm|manes]]\
      \ under the sibriex's control. The transformation of the body can be undone\
      \ only by a [[wish-xphb|wish]] spell."
    "name": "Warp Creature"
  - "desc": "The sibriex casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 21):\n\
      \nAt will: [[command-xphb|command]], [[dispel-magic-xphb|dispel magic]],\
      \ [[hold-monster-xphb|hold monster]]\n\n1/day:\
      \ [[befuddlement-xphb|feeblemind]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The sibriex uses Spellcasting."
    "name": "Cast a Spell"
  - "desc": "The sibriex uses Squirt Bile."
    "name": "Spray Bile"
  - "desc": "The sibriex uses Warp Creature."
    "name": "Warp (Costs 2 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/sibriex-mpmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Sibriex mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of sibriex mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around sibriex mpmm.

## Adventure Hooks

- A rumor ties sibriex mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at sibriex mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to sibriex mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
