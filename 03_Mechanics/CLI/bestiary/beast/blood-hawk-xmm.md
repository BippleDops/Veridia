---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1-8
  - ttrpg-cli/monster/environment/arctic
  - ttrpg-cli/monster/environment/coastal
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/grassland
  - ttrpg-cli/monster/environment/hill
  - ttrpg-cli/monster/environment/mountain
  - ttrpg-cli/monster/size/small
  - ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Blood Hawk
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-blood-hawk-xmm-blood-hawk-xmm.svg)

# [Blood Hawk](3-Mechanics\CLI\bestiary\beast/blood-hawk-xmm.md)
*Source: Monster Manual (2024) p. 350. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](/03_Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Blood Hawk (XMM)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "10"
  - !!int "3"
  - !!int "14"
  - !!int "5"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+6"
"senses": "passive Perception 16"
"languages": ""
"cr": "1/8"
"traits":
  - "desc": "The hawk has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the hawk's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage,\
      \ or 6 (1d8 + 2) Piercing damage if the target is [Bloodied](/03_Mechanics/CLI/variant-rules/bloodied-xphb.md)."
    "name": "Beak"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/beast/token/blood-hawk-xmm.webp"
```
^statblock

## Environment

arctic, coastal, forest, grassland, hill, mountain