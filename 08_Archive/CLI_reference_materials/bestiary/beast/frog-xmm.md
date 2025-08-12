---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/0
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/swamp
  - ttrpg-cli/monster/size/tiny
  - ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Frog
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-frog-xmm-frog-xmm.svg)

# [Frog](3-Mechanics\CLI\bestiary\beast/frog-xmm.md)
*Source: Monster Manual (2024) p. 354, Player's Handbook (2024) p. 349. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](/03_Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Frog (XMM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"modifier": !!int "1"
"stats":
  - !!int "1"
  - !!int "13"
  - !!int "8"
  - !!int "1"
  - !!int "8"
  - !!int "3"
"speed": "20 ft., swim 20 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+1"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+3"
"senses": "darkvision 30 ft., passive Perception 11"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The frog can breathe air and water."
    "name": "Amphibious"
  - "desc": "The frog's [Long Jump](/03_Mechanics/CLI/variant-rules/long-jump-xphb.md)\
      \ is up to 10 feet and its [High Jump](/03_Mechanics/CLI/variant-rules/high-jump-xphb.md)\
      \ is up to 5 feet with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "Melee Attack Roll: +3, reach 5 ft. Hit: 1 Piercing damage."
    "name": "Bite"
"source":
  - "XMM"
  - "XPHB"
"image": "/03_Mechanics/CLI/bestiary/beast/token/frog-xmm.webp"
```
^statblock

## Environment

forest, swamp

## Player-Facing Summary

Frog xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of frog xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around frog xmm.

## Adventure Hooks

- A rumor ties frog xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at frog xmm to avert a public scandal.
- A map overlay reveals a hidden approach to frog xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
