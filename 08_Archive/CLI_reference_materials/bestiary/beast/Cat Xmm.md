---
aliases:
- Cat
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
- world/both
- world/surface
type: monster
updated: '2025-08-12T23:37:35.096358'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-cat-xmm-cat-xmm.svg)

# [[3-Mechanics\CLI\bestiary\beast/cat-xmm|Cat]]
*Source: Monster Manual (2024) p. 351, Player's Handbook (2024) p. 347. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [[/03_Mechanics/CLI/bestiary/beast/panther-xmm|Panther]] stat block can also represent a mountain lion, while the [[/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm|Giant Goat]] stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Cat (XMM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "2"
"hit_dice": "1d4"
"modifier": !!int "2"
"stats":
  - !!int "3"
  - !!int "15"
  - !!int "10"
  - !!int "3"
  - !!int "12"
  - !!int "7"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": !!int "4"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The cat's jump distance is determined using its Dexterity rather than\
      \ its Strength."
    "name": "Jumper"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 1 Slashing damage."
    "name": "Scratch"
"source":
  - "XMM"
  - "XPHB"
"image": "/03_Mechanics/CLI/bestiary/beast/token/cat-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, urban

## Player-Facing Summary

Cat xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of cat xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around cat xmm.

## Adventure Hooks

- A rumor ties cat xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at cat xmm to avert a public scandal.
- A map overlay reveals a hidden approach to cat xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
