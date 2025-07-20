---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/pota
  - ttrpg-cli/monster/cr/1
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Aquatic Ghoul
---
# [Aquatic Ghoul](3-Mechanics\CLI\bestiary\undead/aquatic-ghoul-pota.md)
*Source: Princes of the Apocalypse p. 87*  

```statblock
"name": "Aquatic Ghoul (PotA)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "13"
  - !!int "15"
  - !!int "10"
  - !!int "7"
  - !!int "10"
  - !!int "6"
"speed": "30 ft., swim 30 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9\
      \ (2d6 + 2) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
      \ + 2) slashing damage. If the target is a creature other than an elf or undead,\
      \ it must succeed on a DC 10 Constitution saving throw or be [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed)\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Claws"
"source":
  - "PotA"
"image": "/3-Mechanics/CLI/bestiary/undead/token/aquatic-ghoul-pota.webp"
```
^statblock