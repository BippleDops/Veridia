---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/pota
  - ttrpg-cli/monster/cr/5
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Molten Magma Roper
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-molten-magma-roper-pota-molten-magma-roper-pota.svg)

# [Molten Magma Roper](3-Mechanics\CLI\bestiary\monstrosity/molten-magma-roper-pota.md)
*Source: Princes of the Apocalypse p. 143*  

```statblock
"name": "Molten Magma Roper (PotA)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "8"
  - !!int "17"
  - !!int "7"
  - !!int "16"
  - !!int "6"
"speed": "10 ft., climb 10 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"damage_vulnerabilities": "cold"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "5"
"traits":
  - "desc": "While the roper remains motionless, it is indistinguishable from a normal\
      \ cave formation, such as a stalagmite."
    "name": "False Appearance"
  - "desc": "The roper can have up to six tendrils at a time. Each tendril can be\
      \ attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying\
      \ a tendril deals no damage to the roper, which can extrude a replacement tendril\
      \ on its next turn. A tendril can also be broken if a creature takes an action\
      \ and succeeds on a DC 15 Strength check against it."
    "name": "Grasping Tendrils"
  - "desc": "The roper can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The roper makes four attacks with its tendrils, uses Reel, and makes\
      \ one attack with its bite."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22\
      \ (4d8 + 4) fire damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit:\
      \ 4 (d8) fire damage and the target is [grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ (escape DC 15). Until the grapple ends, the target is [restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ and has disadvantage on Strength checks and Strength saving throws, and the\
      \ roper can't use the same tendril on another target. A creature takes 4 (d8)\
      \ fire damage each time it ends its turn grappled by the roper."
    "name": "Tendril"
  - "desc": "The roper pulls each creature [grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ by it up to 25 feet straight toward it."
    "name": "Reel"
"source":
  - "PotA"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/molten-magma-roper-pota.webp"
```
^statblock