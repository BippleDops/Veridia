---
title: Lacedon Ghoul Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Lacedon Ghoul Xmm

---
title: Lacedon Ghoul Xmm
aliases:
- Lacedon Ghoul
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underdark
- research
- world/both
- ttrpg-cli/monster/environment/swamp
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.886495+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-lacedon-ghoul-xmm-lacedon-ghoul-xmm.svg)

# [[lacedon ghoul xmm|Lacedon Ghoul]]
*Source: Monster Manual (2024) p. 132*  

Lacedons are loose-skinned, aquatic ghouls. They often arise from the corpses of greedy pirates, those who starved on deserted islands, or scoundrels who met their end by drowning.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Ghouls

*Eaters of the Dead*

- **Habitat.** Swamp, Underdark, Urban  
- **Treasure.** Any  

Packs of ghouls haunt the rotten corners of the world, ravenously hunting for corpses and those soon to be corpses. These gaunt, animate cadavers with unnaturally long tongues dwell in catacombs and ruins where they devour the contents of graves and paralyze foes with vicious claws.

> [!quote]  
> 
> On a plain of teeth, in a temple of filth, the starving king wastes no morsel. Every coffin a banquet. Every slab a platter. Now is the time of feasting!

```statblock
"name": "Lacedon Ghoul (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "13"
  - !!int "15"
  - !!int "10"
  - !!int "7"
  - !!int "6"
"speed": "30 ft., swim 30 ft."
"damage_resistances": "cold"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
  - "desc": "The ghoul makes two Icy Bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Cold damage,\
      \ and the target's [[speed xphb|Speed]] decreases\
      \ by 5 feet until the start of the ghoul's next turn."
    "name": "Icy Bite"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing damage.\
      \ If the target is a creature that isn't an Undead or elf, it is subjected to\
      \ the following effect. Constitution Saving Throw: DC 10. Failure: The target\
      \ has the [[conditions#Paralyzed|Paralyzed]] condition until\
      \ the end of its next turn."
    "name": "Claw"
"bonus_actions":
  - "desc": "While underwater, the ghoul moves up to half its [[swim speed xphb|Swim Speed]]\
      \ without provoking [[actions#Opportunity%20Attack|Opportunity Attacks]]."
    "name": "Watery Rush"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/lacedon-ghoul-xmm.webp"
```
^statblock

## Environment

swamp, underdark, urban

## Player-Facing Summary

Lacedon ghoul xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of lacedon ghoul xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around lacedon ghoul xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Secret Connections

*[Hidden from players]* Connected to The Veiled Accord - Manipulate succession

## 12_Research Specific Content

Contextual improvement based on 12_Research
