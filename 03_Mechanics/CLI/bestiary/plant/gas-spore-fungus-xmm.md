---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1-2
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Gas Spore Fungus
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-gas-spore-fungus-xmm-gas-spore-fungus-xmm.svg)

# [Gas Spore Fungus](3-Mechanics\CLI\bestiary\plant/gas-spore-fungus-xmm.md)
*Source: Monster Manual (2024) p. 125*  

Gas spores are floating, orbicular fungi with rhizome growths and protuberances that resemble the stalks and eyes of beholders. If destroyed, a gas spore explodes in a poisonous burst that can infect creatures and slay them in hours. Infected corpses spawn more gas spores that grow to full size in a matter of days.

## Fungi

*Deadly Spores and Predatory Polyps*

- **Habitat.** Underdark  
- **Treasure.** None  

The dank, sunless Underdark is a fertile breeding ground for weird and dangerous fungi.

```statblock
"name": "Gas Spore Fungus (XMM)"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "13"
"hit_dice": "9d10 - 36"
"modifier": !!int "-5"
"stats":
  - !!int "5"
  - !!int "1"
  - !!int "3"
  - !!int "1"
  - !!int "1"
  - !!int "1"
"speed": "5 ft., fly 10 ft. (hover)"
"damage_immunities": "poison"
"condition_immunities": "[blinded](/03_Mechanics/CLI/conditions.md#Blinded), [charmed](/03_Mechanics/CLI/conditions.md#Charmed),\
  \ [deafened](/03_Mechanics/CLI/conditions.md#Deafened), [frightened](/03_Mechanics/CLI/conditions.md#Frightened),\
  \ [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned),\
  \ [prone](/03_Mechanics/CLI/conditions.md#Prone)"
"senses": "blindsight 30 ft., passive Perception 5"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The gas spore bursts when it dies. Constitution Saving Throw: DC 10,\
      \ each creature in a 20-foot [Emanation](/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the gas spore. Failure: The target takes 10 (3d6) Poison\
      \ damage and has the [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned) condition\
      \ for d12 hours. Unless the [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ condition is removed, the target dies at the end of that time and sprouts\
      \ 2d4 Tiny Gas Spore Fungi (each with 1 [Hit Point](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)).\
      \ After 2d6 days, they become Large and have 13 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)."
    "name": "Death Burst"
"actions":
  - "desc": "Melee Attack Roll: +0, reach 5 ft. Hit: 3 (d6) Poison damage, and\
      \ the target has the [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned) condition\
      \ until the end of its next turn."
    "name": "Tendril"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/plant/token/gas-spore-fungus-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Gas spore fungus xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of gas spore fungus xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around gas spore fungus xmm.

## Adventure Hooks

- A rumor ties gas spore fungus xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at gas spore fungus xmm to avert a public scandal.
- A map overlay reveals a hidden approach to gas spore fungus xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
