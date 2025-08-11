---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/oota
  - ttrpg-cli/monster/cr/4
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Chuul Spore Servant
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-chuul-spore-servant-oota-chuul-spore-servant-oota.svg)

# [Chuul Spore Servant](3-Mechanics\CLI\bestiary\plant/chuul-spore-servant-oota.md)
*Source: Out of the Abyss p. 228*  

```statblock
"name": "Chuul Spore Servant (OotA)"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "10"
  - !!int "16"
  - !!int "2"
  - !!int "6"
  - !!int "1"
"speed": "30 ft., swim 30 ft."
"damage_immunities": "poison"
"condition_immunities": "[blinded](/03_Mechanics/CLI/conditions.md#Blinded), [charmed](/03_Mechanics/CLI/conditions.md#Charmed),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "4"
"actions":
  - "desc": "The spore servant makes two pincer attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11\
      \ (2d6 + 4) bludgeoning damage. The target is [grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ (Escape DC 14) if it is a Large or smaller creature and the spore servant\
      \ doesn't have two other creatures [grappled](/03_Mechanics/CLI/conditions.md#Grappled)."
    "name": "Pincer"
"source":
  - "OotA"
"image": "/03_Mechanics/CLI/bestiary/plant/token/chuul-spore-servant-oota.webp"
```
^statblock