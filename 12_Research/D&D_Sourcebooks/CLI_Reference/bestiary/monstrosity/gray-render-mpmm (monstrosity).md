---
title: gray-render-mpmm (monstrosity)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# gray-render-mpmm

---
title: gray render mpmm
aliases:
- Gray Render
type: monster
tags:
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/cr/12
- monster
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/size/large
- world/both
- research
- ttrpg-cli/monster/type/monstrosity
- active
- ttrpg-cli/monster/environment/forest
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:34.978383'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-gray-render-mpmm-gray-render-mpmm.svg)

# [[Gray Render Mpmm]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 146, Mordenkainen's Tome of Foes p. 209*  

A curious impulse drives the gray render. Despite its hulking form and terrible appetite, it wants most of all to bond with an intelligent creature and, once bonded, to give its life to protect that creature. Great strength and a ferocious nature make gray renders fierce guardians, but they lack a shred of cunning.

Gray renders reproduce by forming nodules on their bodies that, on reaching maturity, break off to begin life as young gray renders. They feel no obligation to their young and have no inclination to gather with others of their kind. Instead, each has an overpowering need to bond with an intelligent creature. When one encounters a suitable master, it sings to that creature—a weird, warbling cry accompanied by scratching at the earth and a show of deference. Once it forms a bond, a gray render serves its master devotedly.

A gray render might be a strong ally, but it's always an unpredictable one. In combat, a gray render fights viciously and never willingly harms its master, but outside battle, it might cause considerable difficulties. It might follow its master despite being told to stay put, destroy its master's house, burrow holes through a ship's hull, attack out of jealousy, or worse.

The Gray Render Quirks table presents possible quirks for gray renders that can be generated randomly or selected as desired.

**Gray Render Quirks**

`dice: [](gray-render-mpmm.md#^gray-render-quirks)`

| dice: d12 | Quirk |
|-----------|-------|
| 1 | Hates horses and other mounts |
| 2 | Roars loudly when its bonded creature is touched by another creature |
| 3 | Likes to snuggle |
| 4 | Uproots and chews on trees |
| 5 | Has terrific and eye-watering flatulence |
| 6 | Brings offerings of meat to its bonded creature |
| 7 | Compulsively digs up the ground |
| 8 | Attacks carts and wagons as if they were terrible monsters |
| 9 | Howls when it rains |
| 10 | Whines piteously in the dark |
| 11 | Buries treasure it finds |
| 12 | Chases birds, leaping into the air to catch them, heedless of the destruction it causes |
^gray-render-quirks

```statblock
"name": "Gray Render (MPMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Typically  Chaotic Neutral"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"modifier": !!int "1"
"stats":
  - !!int "19"
  - !!int "13"
  - !!int "20"
  - !!int "3"
  - !!int "6"
  - !!int "8"
"speed": "30 ft."
"saves":
  - "strength": !!int "8"
  - "constitution": !!int "9"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "12"
"actions":
  - "desc": "The gray render makes one Bite attack and two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 17\
      \ (2d12 + 4) piercing damage. If the target is Medium or smaller, the target\
      \ must succeed on a DC 16 Strength saving throw or be knocked [[conditions#prone|prone]]."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13\
      \ (2d8 + 4) slashing damage, plus 10 (3d6) bludgeoning damage if the target\
      \ is [[conditions#prone|prone]]."
    "name": "Claw"
"reactions":
  - "desc": "When the gray render takes damage, it makes one Claw attack against a\
      \ random creature within its reach, other than its master."
    "name": "Bloody Rampage"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/gray-render-mpmm.webp"
```
^statblock

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Environment

forest, hill

## Player-Facing Summary

Gray render mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of gray render mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around gray render mpmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Secret Connections

*[Hidden from players]* Connected to The Veiled Covenant - Control trade routes

## 12_Research Specific Content

Contextual improvement based on 12_Research
