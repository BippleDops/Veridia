---
title: wastrilith-mpmm (fiend)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# wastrilith-mpmm

---
title: wastrilith mpmm
aliases:
- Wastrilith
type: monster
tags:
- ttrpg-cli/monster/environment/coastal
- world/aquabyssos
- ttrpg-cli/monster/cr/13
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/type/fiend/demon
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/size/large
- world/both
- ttrpg-cli/monster/environment/swamp
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
updated: '2025-08-12T23:37:35.475825'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-wastrilith-mpmm-v1-wastrilith-mpmm.svg)

# [[wastrilith-mpmm (fiend)]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 258, Mordenkainen's Tome of Foes p. 139*  

Found in the waters of the Abyss and other bodies of water contaminated by that plane's fell influence, wastriliths establish themselves as lords of the deep and rule their dominions with cruelty.

A wastrilith pollutes the waters around it. Its noxious presence even affects nearby sources of water when the demon travels on land. The corrupted water, which contains a measure of the demon's essence, responds to the wastrilith's commands—perhaps hardening to prevent foes from escaping or erupting in a surge that drags victims into its reach.

Creatures that ingest water corrupted by a wastrilith risk their very souls. Those who drink the poisonous liquid might wither away until they finally die, or they remain alive only to become thralls of chaos and evil. To represent this defilement, you can use the [[Optional Rule Abyssal Corruption Abyssal Corruption]] in "chapter 2 of the Dungeon Master's Guide", causing the poisoned creature to be corrupted.

```statblock
"name": "Wastrilith (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"modifier": !!int "4"
"stats":
  - !!int "19"
  - !!int "18"
  - !!int "21"
  - !!int "12"
  - !!int "14"
"speed": "30 ft., swim 80 ft."
"saves":
  - "strength": !!int "9"
  - "constitution": !!int "10"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, telepathy 120 ft."
"cr": "13"
"traits":
  - "desc": "The wastrilith can breathe air and water."
    "name": "Amphibious"
  - "desc": "At the start of each of the wastrilith's turns, exposed water within\
      \ 30 feet of it is befouled. Underwater, this effect lightly obscures the area\
      \ until a current clears it away. Water in containers remains corrupted until\
      \ it evaporates.\n\nA creature that consumes this foul water or swims in it\
      \ must make a DC 18 Constitution saving throw. On a successful save, the creature\
      \ is immune to the foul water for 24 hours. On a failed save, the creature takes\
      \ 14 (4d6) poison damage and is [[conditions#Poisoned|poisoned]]\
      \ for 1 minute. At the end of this time, the [[conditions#Poisoned|poisoned]]\
      \ creature must repeat the saving throw. On a failure, the creature takes 18\
      \ (4d8) poison damage and is [[conditions#Poisoned|poisoned]]\
      \ until it finishes a long rest.\n\nIf another demon drinks the foul water as\
      \ an action, it gains 11 (2d10) temporary hit points."
    "name": "Corrupt Water"
  - "desc": "The wastrilith has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The wastrilith makes one Bite attack and two Claw attacks, and it uses\
      \ Grasping Spout."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 30\
      \ (4d12 + 4) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 18\
      \ (4d6 + 4) slashing damage."
    "name": "Claws"
  - "desc": "The wastrilith magically launches a spout of water at one creature it\
      \ can see within 60 feet of it. The target must make a DC 17 Strength saving\
      \ throw, and it has disadvantage if it's underwater. On a failed save, it takes\
      \ 22 (4d8 + 4) acid damage and is pulled up to 60 feet toward the wastrilith.\
      \ On a successful save, it takes half as much damage and isn't pulled."
    "name": "Grasping Spout"
"bonus_actions":
  - "desc": "If the wastrilith is underwater, it causes all water within 60 feet of\
      \ it to be difficult terrain for other creatures until the start of its next\
      \ turn."
    "name": "Undertow"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/wastrilith-mpmm.webp"
```
^statblock

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Environment

coastal, swamp, underdark, underwater

## Player-Facing Summary

Wastrilith mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of wastrilith mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around wastrilith mpmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Secret Connections

*[Hidden from players]* Connected to The Veiled Covenant - Control trade routes

## Plot Hooks

- An heirloom has gone missing and war looms
- A document has gone missing and truth emerges
- Someone is searching for information for revenge
- A corpse reveals a betrayal about a local noble

## 12_Research Specific Content

Contextual improvement based on 12_Research
