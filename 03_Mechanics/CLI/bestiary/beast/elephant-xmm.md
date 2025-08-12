---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/4
  - ttrpg-cli/monster/environment/grassland
  - ttrpg-cli/monster/size/huge
  - ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Elephant
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-elephant-xmm-elephant-xmm.svg)

# [Elephant](3-Mechanics\CLI\bestiary\beast/elephant-xmm.md)
*Source: Monster Manual (2024) p. 353, Player's Handbook (2024) p. 349. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](/03_Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Elephant (XMM)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "76"
"hit_dice": "8d12 + 24"
"modifier": !!int "-1"
"stats":
  - !!int "22"
  - !!int "9"
  - !!int "17"
  - !!int "3"
  - !!int "11"
  - !!int "6"
"speed": "40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "4"
"actions":
  - "desc": "The elephant makes two Gore attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 5 ft. Hit: 15 (2d8 + 6) Piercing damage.\
      \ If the target is a Huge or smaller creature and the elephant moved 20+ feet\
      \ straight toward it immediately before the hit, the target has the [Prone](/03_Mechanics/CLI/conditions.md#Prone)\
      \ condition."
    "name": "Gore"
"bonus_actions":
  - "desc": "Dexterity Saving Throw: DC 16, one creature within 5 feet that has\
      \ the [Prone](/03_Mechanics/CLI/conditions.md#Prone) condition. Failure: 17\
      \ (2d10 + 6) Bludgeoning damage. Success: Half damage."
    "name": "Trample"
"source":
  - "XMM"
  - "XPHB"
"image": "/03_Mechanics/CLI/bestiary/beast/token/elephant-xmm.webp"
```
^statblock

## Environment

grassland

## Player-Facing Summary

Elephant xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of elephant xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around elephant xmm.

## Adventure Hooks

- A rumor ties elephant xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at elephant xmm to avert a public scandal.
- A map overlay reveals a hidden approach to elephant xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
