---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/oota
  - ttrpg-cli/monster/cr/2
  - ttrpg-cli/monster/size/huge
  - ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Awakened Zurkhwood
---
# [Awakened Zurkhwood](3-Mechanics\CLI\bestiary\plant/awakened-zurkhwood-oota.md)
*Source: Out of the Abyss p. 230*  

This creature is an ordinary zurkhwood mushroom (see "Fungi of the Underdark" in chapter 2) given sentience and mobility. An awakened zurkhwood can be created by casting the [awaken](/3-Mechanics/CLI/spells/awaken-xphb.md) spell on a normal zurkhwood mushroom. A myconid sovereign can create one by performing a lengthy ritual.

An awakened zurkhwood has the same statistics as an awakened tree (see appendix A of the Monster Manual), with the following modifications:

- The awakened zurkhwood has [darkvision](/3-Mechanics/CLI/senses.md#Darkvision) out to a range of 120 feet.  
- If the awakened zurkhwood was created by a myconid sovereign, it can't speak.  
- The awakened zurkhwood's False Appearance feature allows it to be mistaken for a normal zurkhwood mushroom (instead of a tree).  

```statblock
"name": "Awakened Zurkhwood (OotA)"
"size": "Huge"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "59"
"hit_dice": "7d12 + 14"
"modifier": !!int "-2"
"stats":
  - !!int "19"
  - !!int "6"
  - !!int "15"
  - !!int "10"
  - !!int "10"
  - !!int "7"
"speed": "20 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "one language known by its creator"
"cr": "2"
"traits":
  - "desc": "While the tree remains motionless, it is indistinguishable from a normal\
      \ zurkhwood mushroom."
    "name": "False Appearance"
  - "desc": "If the awakened zurkhwood was created by a myconid sovereign, it can't\
      \ speak."
    "name": "Mute"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14\
      \ (3d6 + 4) bludgeoning damage."
    "name": "Slam"
"source":
  - "OotA"
"image": "/3-Mechanics/CLI/bestiary/plant/token/awakened-zurkhwood-oota.webp"
```
^statblock