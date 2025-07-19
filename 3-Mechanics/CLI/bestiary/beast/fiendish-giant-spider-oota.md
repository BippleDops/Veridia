---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/oota
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fiendish Giant Spider
---
# [Fiendish Giant Spider](3-Mechanics\CLI\bestiary\beast/fiendish-giant-spider-oota.md)
*Source: Out of the Abyss p. 97*  

```statblock
"name": "Fiendish Giant Spider (OotA)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "13"
  - !!int "3"
  - !!int "12"
  - !!int "4"
"speed": "40 ft., climb 40 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "While in contact with a web, the spider knows the exact location of any\
      \ other creature in contact with the same web."
    "name": "Web Sense"
  - "desc": "The spider ignores movement restrictions caused by webbing."
    "name": "Web Walker"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4\
      \ (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving\
      \ throw, taking 7 (2d6) poison damage on a failed save, or half as much damage\
      \ on a successful one. If the poison damage reduces the target to 0 hit points,\
      \ the target is stable but [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)\
      \ for 1 hour, even after regaining hit points, and is [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed)\
      \ while [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned) in this way."
    "name": "Bite"
"source":
  - "OotA"
"image": "/3-Mechanics/CLI/bestiary/beast/token/fiendish-giant-spider-oota.webp"
```
^statblock