# Wraith Xmm

---
title: Wraith Xmm
aliases:
- Wraith
type: monster
tags:
- ttrpg-cli/monster/environment/shadowfell
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/undead
- ttrpg-cli/monster/size/small-or-medium
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/cr/5
- world/both
- ttrpg-cli/monster/environment/planar
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
updated: '2025-08-13T12:34:05.867345+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-wraith-xmm-v1-wraith-xmm.svg)

# [[wraith-xmm|Wraith]]
*Source: Monster Manual (2024) p. 336. Available in the SRD and the Free Rules (2024)*  


## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement


## Wraith

*Essence of Evil*

- **Habitat.** Planar (Shadowfell), Underdark  
- **Treasure.** None  

Wraiths are spectral evils, life-hungry embodiments of malice and terror. Arising from the souls of tyrants, moments of catastrophic pain, or magical blasphemies, wraiths spread suffering and the torment of undeath. Humanoids that die near a wraith might be entrapped by the foul spirit and rise as specters bound to the wraith's sinister will.

Wraiths lurk in forgotten dungeons, accursed ruins, or lands influenced by sinister planes of existence. Such haunted domains might bear hints of the tragedies or foul magic that brought the wraiths into being.

Wraiths might arise from a single powerfully evil soul or other baleful forces. Roll on or choose a result from the Wraith Manifestations table to inspire the wickedness a wraith embodies.

**Wraith Manifestations**

`dice: [](wraith-xmm.md#^wraith-manifestations)`

| dice: 1d10 | The Wraith Embodies... |
|------------|------------------------|
| 1 | The blasphemous magic of a cursed location. |
| 2 | The exorcised evil of a redeemed villain. |
| 3 | A legendary villain who returns once a century. |
| 4 | Locals' fear of a superstition or legend. |
| 5 | The memory of a tragedy. |
| 6 | A profane idea or foul piece of lore. |
| 7 | The torment of one or more suffering souls. |
| 8 | The viciousness of a profane Artifact. |
| 9 | The vile dreams of a slumbering god. |
| 10 | The voracity of a life-hungry realm, such as the Shadowfell or Negative Plane. |
^wraith-manifestations

```statblock
"name": "Wraith (XMM)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "16"
  - !!int "12"
  - !!int "14"
  - !!int "15"
"speed": "5 ft., fly 60 ft. (hover)"
"damage_resistances": "acid, bludgeoning, cold, fire, piercing, slashing"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Grappled|grappled]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned]],\
  \ [[conditions#prone|prone]], [[conditions#Restrained|restrained]],\
  \ [[conditions#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common plus two other languages"
"cr": "5"
"traits":
  - "desc": "The wraith can move through other creatures and objects as if they were\
      \ [[difficult-terrain-xphb|Difficult Terrain]].\
      \ It takes 5 (d10) Force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
  - "desc": "While in sunlight, the wraith has [[disadvantage-xphb|Disadvantage]]\
      \ on ability checks and attack rolls."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 21 (4d8 + 3) Necrotic damage.\
      \ If the target is a creature, its [[hit-points-xphb|Hit Point]]\
      \ maximum decreases by an amount equal to the damage taken."
    "name": "Life Drain"
  - "desc": "The wraith targets a Humanoid corpse within 10 feet of itself that has\
      \ been dead for no longer than 1 minute. The target's spirit rises as a [[specter-xmm|Specter]]\
      \ in the space of its corpse or in the nearest unoccupied space. The specter\
      \ is under the wraith's control. The wraith can have no more than seven specters\
      \ under its control at a time."
    "name": "Create Specter"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/wraith-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark

## Player-Facing Summary

Wraith xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of wraith xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around wraith xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]


## 12_Research Specific Content

Contextual improvement based on 12_Research
