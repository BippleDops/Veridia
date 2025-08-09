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
  - Earth Elemental Myrmidon
---
# [Earth Elemental Myrmidon](3-Mechanics\CLI\bestiary\elemental/earth-elemental-myrmidon-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 122, Mordenkainen's Tome of Foes p. 202*  

## Elemental Myrmidons

Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.

```statblock
"name": "Earth Elemental Myrmidon (MPMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Typically  Neutral"
"ac": !!int "18"
"ac_class": "[plate](/03_Mechanics/CLI/items/plate-armor-xphb.md)"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "17"
  - !!int "8"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed), [petrified](/03_Mechanics/CLI/conditions.md#Petrified),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned), [prone](/03_Mechanics/CLI/conditions.md#Prone)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Terran, one language of its creator's choice"
"cr": "7"
"actions":
  - "desc": "The myrmidon makes two Maul attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) force damage."
    "name": "Maul"
  - "desc": "The myrmidon makes one Maul attack. On a hit, the target takes an extra\
      \ 22 (4d10) thunder damage, and the target must succeed on a DC 14 Strength\
      \ saving throw or be knocked [prone](/03_Mechanics/CLI/conditions.md#Prone)."
    "name": "Thunderous Strike (Recharge 6)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/earth-elemental-myrmidon-mpmm.webp"
```
^statblock