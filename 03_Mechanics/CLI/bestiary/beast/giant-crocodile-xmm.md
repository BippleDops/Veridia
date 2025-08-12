---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/5
  - ttrpg-cli/monster/environment/coastal
  - ttrpg-cli/monster/environment/swamp
  - ttrpg-cli/monster/size/huge
  - ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Giant Crocodile
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-giant-crocodile-xmm-giant-crocodile-xmm.svg)

# [Giant Crocodile](3-Mechanics\CLI\bestiary\beast/giant-crocodile-xmm.md)
*Source: Monster Manual (2024) p. 356. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](/03_Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Crocodile (XMM)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "9d12 + 27"
"modifier": !!int "-1"
"stats":
  - !!int "21"
  - !!int "9"
  - !!int "17"
  - !!int "2"
  - !!int "10"
  - !!int "7"
"speed": "30 ft., swim 50 ft."
"skillsaves":
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
  - "desc": "The crocodile can hold its breath for 1 hour."
    "name": "Hold Breath"
"actions":
  - "desc": "The crocodile makes one Bite attack and one Tail attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 5 ft. Hit: 21 (3d10 + 5) Piercing damage.\
      \ If the target is a Large or smaller creature, it has the [Grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ condition (escape DC 15). While [Grappled](/03_Mechanics/CLI/conditions.md#Grappled),\
      \ the target has the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ condition and can't be targeted by the crocodile's Tail."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +8, reach 10 ft. Hit: 18 (3d8 + 5) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, it has the [Prone](/03_Mechanics/CLI/conditions.md#Prone)\
      \ condition."
    "name": "Tail"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/beast/token/giant-crocodile-xmm.webp"
```
^statblock

## Environment

coastal, swamp

## Player-Facing Summary

Giant crocodile xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of giant crocodile xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around giant crocodile xmm.

## Adventure Hooks

- A rumor ties giant crocodile xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at giant crocodile xmm to avert a public scandal.
- A map overlay reveals a hidden approach to giant crocodile xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
