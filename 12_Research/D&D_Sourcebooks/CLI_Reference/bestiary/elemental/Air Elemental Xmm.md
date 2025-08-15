---
title: Air Elemental Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Air Elemental Xmm

---
title: Air Elemental Xmm
aliases:
- Air Elemental
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/mountain
- monster
- ttrpg-cli/monster/type/elemental
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/environment/air
- ttrpg-cli/monster/environment/planar
- world/both
- active
- research
- status/in-progress
- ttrpg-cli/monster/environment/desert
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.746945+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-air-elemental-xmm-air-elemental-xmm.svg)

# [[air elemental xmm|Air Elemental]]
*Source: Monster Manual (2024) p. 13. Available in the SRD and the Free Rules (2024)*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Air Elemental

*Primal Spirit of Wind and Storm*

- **Habitat.** Desert, Mountain, Planar (Elemental Plane of Air)  
- **Treasure.** None  

Energetic spirits from the Elemental Plane of Air, air elementals gather clouds and winds into ever-changing bodies with indistinct limbs and vague features. Beyond their home plane, these elementals might serve magic-users who conjure them, or they might congregate around nexuses of unbridled planar energy, such as wind-scoured mountain peaks or endless storms. In battle, air elementals batter enemies with powerful gusts or transform into whirlwinds to fling away foes.

Air elementals often have distinctive compositions. Roll on or choose a result from the Air Elemental Compositions table to inspire the elemental's appearance.

> [!quote] A quote from Husam, Son of the Breezes, Ruler of Djinn  
> 
> What can withstand the storm's scream? The lightning's spear? The want of sweet breath? Air is the mightiest of elements—respect its power.

**Air Elemental Compositions**

`dice: [](air-elemental-xmm.md#^air-elemental-compositions)`

| dice: 1d6 | The Air Elemental's Body Features... |
|-----------|--------------------------------------|
| 1 | Cumulus or cirrus clouds. |
| 2 | A mixture of vibrantly colored gases. |
| 3 | A pungent, sour-looking miasma |
| 4 | Shifting cloud clusters that resemble animals and simple shapes. |
| 5 | Sinister features obscured in a misty mass. |
| 6 | Swirling storm clouds. |
^air-elemental-compositions

```statblock
"name": "Air Elemental (XMM)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"modifier": !!int "5"
"stats":
  - !!int "14"
  - !!int "20"
  - !!int "6"
  - !!int "10"
"speed": "10 ft., fly 90 ft. (hover)"
"damage_resistances": "bludgeoning, lightning, piercing, slashing"
"damage_immunities": "poison, thunder"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Grappled|grappled]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned]],\
  \ [[conditions#prone|prone]], [[conditions#Restrained|restrained]],\
  \ [[conditions#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Primordial (Auran)"
"cr": "5"
"traits":
  - "desc": "The elemental can enter a creature's space and stop there. It can move\
      \ through a space as narrow as 1 inch without expending extra movement to do\
      \ so."
    "name": "Air Form"
"actions":
  - "desc": "The elemental makes two Thunderous Slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 10 ft. Hit: 14 (2d8 + 5) Thunder damage."
    "name": "Thunderous Slam"
  - "desc": "Strength Saving Throw: DC 13, one Medium or smaller creature in the\
      \ elemental's space. Failure: 24 (4d10 + 2) Thunder damage, and the target\
      \ is pushed up to 20 feet straight away from the elemental and has the [[conditions#prone|Prone]]\
      \ condition. Success: Half damage only."
    "name": "Whirlwind (Recharge 4-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/air-elemental-xmm.webp"
```
^statblock

## Environment

desert, mountain, planar, air

## Player-Facing Summary

Air elemental xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of air elemental xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around air elemental xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- A stranger needs help investigating before winter
- Strange disappearances suggest a portal

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
