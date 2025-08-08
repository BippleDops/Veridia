---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/oota
  - ttrpg-cli/monster/cr/1
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Giant Rocktopus
---
# [Giant Rocktopus](3-Mechanics\CLI\bestiary\beast/giant-rocktopus-oota.md)
*Source: Out of the Abyss p. 28*  

```statblock
"name": "Giant Rocktopus (OotA)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "52"
"hit_dice": "8d10 + 8"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "13"
  - !!int "13"
  - !!int "4"
  - !!int "10"
  - !!int "4"
"speed": "20 ft., climb 10 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The octopus has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/skills.md#Stealth))\
      \ checks."
    "name": "Camouflage"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10\
      \ (2d6 + 3) bludgeoning damage. If the target is a creature, it is [grappled](/3-Mechanics/CLI/conditions.md#Grappled)\
      \ (escape DC 16). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/conditions.md#Restrained),\
      \ and the octopus can't use its tentacles on another target."
    "name": "Tentacles"
  - "desc": "A 20-foot-radius cloud of ink extends all around the octopus if it is\
      \ underwater. The area is heavily obscured for 1 minute, although a significant\
      \ current can disperse the ink. After releasing the ink, the octopus can use\
      \ the Dash action as a bonus action."
    "name": "Ink Cloud (Recharges after a Short or Long Rest)"
"source":
  - "OotA"
"image": "/3-Mechanics/CLI/bestiary/beast/token/giant-rocktopus-oota.webp"
```
^statblock