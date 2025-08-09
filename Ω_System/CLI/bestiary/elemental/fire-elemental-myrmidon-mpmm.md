---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/7
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Fire Elemental Myrmidon
---
# [Fire Elemental Myrmidon](3-Mechanics\CLI\bestiary\elemental/fire-elemental-myrmidon-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 123, Mordenkainen's Tome of Foes p. 203*  

## Elemental Myrmidons

Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.

```statblock
"name": "Fire Elemental Myrmidon (MPMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Typically  Neutral"
"ac": !!int "18"
"ac_class": "[plate](/03_Mechanics/CLI/items/plate-armor-xphb.md)"
"hp": !!int "123"
"hit_dice": "19d8 + 38"
"modifier": !!int "4"
"stats":
  - !!int "13"
  - !!int "18"
  - !!int "15"
  - !!int "9"
  - !!int "10"
  - !!int "10"
"speed": "40 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "[paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed), [petrified](/03_Mechanics/CLI/conditions.md#Petrified),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned), [prone](/03_Mechanics/CLI/conditions.md#Prone)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ignan, one language of its creator's choice"
"cr": "7"
"traits":
  - "desc": "The myrmidon sheds bright light in a 20-foot radius and dim light in\
      \ a 40-foot radius."
    "name": "Illumination"
  - "desc": "For every 5 feet the myrmidon moves in 1 foot or more of water, it takes\
      \ 2 (d4) cold damage."
    "name": "Water Susceptibility"
"actions":
  - "desc": "The myrmidon makes three Scimitar attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) force damage."
    "name": "Scimitar"
  - "desc": "The myrmidon uses Multiattack. Each attack that hits deals an extra 7\
      \ (2d6) fire damage."
    "name": "Fiery Strikes (Recharge 6)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/fire-elemental-myrmidon-mpmm.webp"
```
^statblock