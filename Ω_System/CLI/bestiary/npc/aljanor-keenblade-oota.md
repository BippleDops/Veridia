---
type: npc
status: alive
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/oota
  - ttrpg-cli/monster/cr/3
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Aljanor Keenblade
---
# [Aljanor Keenblade](3-Mechanics\CLI\bestiary\npc/aljanor-keenblade-oota.md)
*Source: Out of the Abyss p. 149*  

```statblock
"name": "Aljanor Keenblade (OotA)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "11"
  - !!int "14"
  - !!int "11"
  - !!int "11"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "constitution": !!int "4"
  - "wisdom": !!int "2"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
  - "desc": "Aljanor has advantage on saving throws against being [frightened](/3-Mechanics/CLI/conditions.md#Frightened)."
    "name": "Brave"
"actions":
  - "desc": "Aljanor makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) slashing damage."
    "name": "Greatsword"
  - "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
      \ 5 (d10) piercing damage."
    "name": "Heavy Crossbow"
  - "desc": "For 1 minute, Aljanor can utter a special command or warning whenever\
      \ a nonhostile creature that it can see within 30 feet of it makes an attack\
      \ roll or a saving throw. The creature can add a d4 to its roll provided it\
      \ can hear and understand Aljanor. A creature can benefit from only one Leadership\
      \ die at a time. This effect ends if Aljanor is [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated)."
    "name": "Leadership (Recharges after a Short or Long Rest)"
"reactions":
  - "desc": "Aljanor adds 2 to its AC against one melee attack that would hit it.\
      \ To do so, Aljanor must see the attacker and be wielding a melee weapon."
    "name": "Parry"
"source":
  - "OotA"
"image": "/3-Mechanics/CLI/bestiary/npc/token/aljanor-keenblade-oota.webp"
```
^statblock