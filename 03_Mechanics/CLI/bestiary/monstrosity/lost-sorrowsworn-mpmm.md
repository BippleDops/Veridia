---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/7
  - ttrpg-cli/monster/environment/arctic
  - ttrpg-cli/monster/environment/desert
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/mountain
  - ttrpg-cli/monster/environment/swamp
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/environment/urban
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Lost Sorrowsworn
---
# [Lost Sorrowsworn](3-Mechanics\CLI\bestiary\monstrosity/lost-sorrowsworn-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 224, Mordenkainen's Tome of Foes p. 233*  

The Shadowfell turns visitors around until they become marooned in its twisted landscape. Lost sorrowsworn—often referred to as the Lost—are representations of the anxiety and fear people experience when they can't find their way. These sorrowsworn appear desperate and panicked.

Lost sorrowsworn grasp at any creatures they can reach. A victim experiences a flood of fear and panic as its mind buckles under the fury of this assault. The harder a victim's allies fight to break the grasp, the more the victim suffers.

## Sorrowsworn

The Shadowfell's pervasive melancholy sometimes gives rise to strange incarnations of the plane's bleak nature. Sorrowsworn embody the forms of suffering inherent to the shadowy landscape and visit horror on those who stumble into their midst. Each sorrowsworn personifies a different aspect of despair or distress.

```statblock
"name": "Lost Sorrowsworn (MPMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Typically  Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "15"
  - !!int "6"
  - !!int "7"
  - !!int "5"
"speed": "30 ft."
"skillsaves":
  - "name": "[Athletics](/03_Mechanics/CLI/skills.md#Athletics)"
    "desc": "+6"
"damage_resistances": "bludgeoning, piercing, slashing while in dim light or darkness"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common"
"cr": "7"
"actions":
  - "desc": "The sorrowsworn makes two Arm Spike attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14\
      \ (2d10 + 3) piercing damage."
    "name": "Arm Spike"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 25\
      \ (4d10 + 3) piercing damage, and the target is [grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ (escape DC 14) if it is a Medium or smaller creature. Until the grapple ends,\
      \ the target is [frightened](/03_Mechanics/CLI/conditions.md#Frightened), and\
      \ it takes 27 (6d8) psychic damage at the end of each of its turns. The sorrowsworn\
      \ can grapple only one creature at a time."
    "name": "Embrace (Recharge 4-6)"
"reactions":
  - "desc": "If the sorrowsworn takes damage, the creature [grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ by Embrace takes 18 (4d8) psychic damage."
    "name": "Tightening Embrace"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/lost-sorrowsworn-mpmm.webp"
```
^statblock

## Environment

arctic, desert, forest, mountain, swamp, underdark, urban