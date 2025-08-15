---
title: gelatinous-cube-xmm (ooze)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# gelatinous-cube-xmm

---
title: gelatinous cube xmm
aliases:
- Gelatinous Cube
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/ooze
- monster
- ttrpg-cli/monster/environment/underdark
- research
- ttrpg-cli/monster/size/large
- world/both
- active
- ttrpg-cli/monster/cr/2
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.400145'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-gelatinous-cube-xmm-gelatinous-cube-xmm.svg)

# [[gelatinous-cube-xmm (ooze)]]
*Source: Monster Manual (2024) p. 129. Available in the SRD and the Free Rules (2024)*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Gelatinous Cube

*Dungeon-Scouring Block of Ooze*

- **Habitat.** Underdark  
- **Treasure.** Any  

Quivering masses of acidic goo, gelatinous cubes wobble through narrow caverns and dungeons, engulfing anything in their paths. These Oozes are naturally transparent, making them difficult to see while they're stationary. Creatures and objects that become stuck within these slimes are gradually dissolved. Undigested detritus sometimes floats within a gelatinous cube, hinting at its past meals. Roll on or choose a result from the Gelatinous Cube Debris table to inspire a gelatinous cube's contents.

**Gelatinous Cube Debris**

`dice: [](gelatinous-cube-xmm.md#^gelatinous-cube-debris)`

| dice: 1d6 | Floating in the Gelatinous Cube Is A... |
|-----------|-----------------------------------------|
| 1 | Chest or recently trapped mimic. |
| 2 | Collection of bubbles or rocks resembling eyes. |
| 3 | Key to a nearby door or coffer. |
| 4 | Remarkable weapon in need of repair. |
| 5 | Skeleton belonging to a famous adventurer. |
| 6 | Tablet bearing a mysterious message. |
^gelatinous-cube-debris

```statblock
"name": "Gelatinous Cube (XMM)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "6"
"hp": !!int "63"
"hit_dice": "6d10 + 30"
"modifier": !!int "-4"
"stats":
  - !!int "14"
  - !!int "3"
  - !!int "20"
  - !!int "1"
  - !!int "6"
"speed": "15 ft."
"damage_immunities": "acid"
"condition_immunities": "[[conditions#Blinded|blinded]], [[conditions#Charmed|charmed]],\
  \ [[conditions#Deafened|deafened]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#frightened|frightened]], [[conditions#prone|prone]]"
"senses": "blindsight 60 ft., passive Perception 8"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The cube fills its entire space and is transparent. Other creatures can\
      \ enter that space, but a creature that does so is subjected to the cube's Engulf\
      \ and has [[Advantage Xphb]]\
      \ on the saving throw.\n\nCreatures inside the cube have [[Cover Xphb]],\
      \ and the cube can hold one Large creature or up to four Medium or Small creatures\
      \ inside itself at a time.\n\nAs an action, a creature within 5 feet of the\
      \ cube can pull a creature or an object out of the cube by succeeding on a DC\
      \ 12 Strength ([[skills#Athletics|Athletics]]) check, and\
      \ the puller takes 10 (3d6) Acid damage."
    "name": "Ooze Cube"
  - "desc": "Even when the cube is in plain sight, a creature must succeed on a DC\
      \ 15 Wisdom ([[skills#Perception|Perception]]) check to notice\
      \ the cube if the creature hasn't witnessed the cube move or otherwise act."
    "name": "Transparent"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 12 (3d6 + 2) Acid damage."
    "name": "Pseudopod"
  - "desc": "The cube moves up to its [[Fly Speed Xphb]]\
      \ without provoking [[actions#Opportunity%20Attack|Opportunity Attacks]].\
      \ The cube can move through the spaces of Large or smaller creatures if it has\
      \ room inside itself to contain them (see the Ooze [[Cube Area of Effect Xphb]]\
      \ trait). Dexterity Saving Throw: DC 12, each creature whose space the cube\
      \ enters for the first time during this move. Failure: 10 (3d6) Acid damage,\
      \ and the target is engulfed. An engulfed target is suffocating, can't cast\
      \ spells with a Verbal component, has the [[conditions#Restrained|Restrained]]\
      \ condition, and takes 10 (3d6) Acid damage at the start of each of the cube's\
      \ turns. When the cube moves, the engulfed target moves with it. An engulfed\
      \ target can try to escape by taking an action to make a DC 12 Strength ([[skills#Athletics|Athletics]])\
      \ check. On a successful check, the target escapes and enters the nearest unoccupied\
      \ space. Success: Half damage, and the target moves to an unoccupied space\
      \ within 5 feet of the cube. If there is no unoccupied space, the target fails\
      \ the save instead."
    "name": "Engulf"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/ooze/token/gelatinous-cube-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Gelatinous cube xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of gelatinous cube xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around gelatinous cube xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## 12_Research Specific Content

Contextual improvement based on 12_Research

## References

- [[Gelatinous Cube Xmm]]
- [[Exploring the Mine Xdmg]]
- [[Random Traps Trap Effects]]
- [[exploring-the-mine-xdmg (tables)]]
- [[random-traps-trap-effects (tables)]]
