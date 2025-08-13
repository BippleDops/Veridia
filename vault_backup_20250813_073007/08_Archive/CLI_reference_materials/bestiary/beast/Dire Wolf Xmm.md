---
aliases:
- Dire Wolf
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- active
- both
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
- world/both
type: monster
updated: '2025-08-13T12:34:19.580908+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-dire-wolf-xmm-dire-wolf-xmm.svg)

# [[3-Mechanics\CLI\bestiary\beast/dire-wolf-xmm|Dire Wolf]]
*Source: Monster Manual (2024) p. 352, Player's Handbook (2024) p. 348. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [[/03_Mechanics/CLI/bestiary/beast/panther-xmm|Panther]] stat block can also represent a mountain lion, while the [[/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm|Giant Goat]] stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Dire Wolf (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "22"
"hit_dice": "3d10 + 6"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "15"
  - !!int "3"
  - !!int "12"
  - !!int "7"
"speed": "50 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The wolf has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on an attack roll against a creature if at least one of the wolf's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [[/03_Mechanics/CLI/conditions#Incapacitated|Incapacitated]]\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Piercing damage.\
      \ If the target is a Large or smaller creature, it has the [[/03_Mechanics/CLI/conditions#Prone|Prone]]\
      \ condition."
    "name": "Bite"
"source":
  - "XMM"
  - "XPHB"
"image": "/03_Mechanics/CLI/bestiary/beast/token/dire-wolf-xmm.webp"
```
^statblock

## Environment

forest, hill

## Player-Facing Summary

Dire wolf xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of dire wolf xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around dire wolf xmm.

## Adventure Hooks

- A rumor ties dire wolf xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at dire wolf xmm to avert a public scandal.
- A map overlay reveals a hidden approach to dire wolf xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
