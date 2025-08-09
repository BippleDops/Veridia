---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/oota
  - ttrpg-cli/monster/cr/1
  - ttrpg-cli/monster/size/small
  - ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Young Basilisk
---
# [Young Basilisk](3-Mechanics\CLI\bestiary\monstrosity/young-basilisk-oota.md)
*Source: Out of the Abyss p. 100*  

```statblock
"name": "Young Basilisk (OotA)"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d6 + 8"
"modifier": !!int "-1"
"stats":
  - !!int "13"
  - !!int "8"
  - !!int "15"
  - !!int "2"
  - !!int "8"
  - !!int "7"
"speed": "15 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1"
"traits":
  - "desc": "If a creature starts its turn within 15 feet of the basilisk and the\
      \ two of them can see each other, the basilisk can force the creature to make\
      \ a DC 12 Constitution saving throw if the basilisk isn't [incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated).\
      \ On a failed save, the creature magically begins to turn to stone and is [restrained](/03_Mechanics/CLI/conditions.md#Restrained).\
      \ It must repeat the saving throw at the end of its next turn. On a success,\
      \ the effect ends. On a failure, the creature is [petrified](/03_Mechanics/CLI/conditions.md#Petrified)\
      \ until freed by the  [greater restoration](/03_Mechanics/CLI/spells/greater-restoration-xphb.md)\
      \ spell or other magic.\n\nA creature that isn't [surprised](/03_Mechanics/CLI/conditions.md#Surprised)\
      \ can avert its eyes to avoid the saving throw at the start of its turn. If\
      \ it does so, it can't see the basilisk until the start of its next turn, when\
      \ it can avert its eyes again. If it looks at the basilisk in the meantime,\
      \ it must immediately make the save.\n\nIf the basilisk sees its reflection\
      \ within 30 feet of it in bright light, it mistakes itself for a rival and targets\
      \ itself with its gaze."
    "name": "Petrifying Gaze"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
      \ + 1) piercing damage plus 2 (d4) poison damage."
    "name": "Bite"
"source":
  - "OotA"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/young-basilisk-oota.webp"
```
^statblock