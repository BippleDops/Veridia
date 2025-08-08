---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/oota
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: '#^statblock'
aliases:
- Chamberlain of Zuggtmoy
type: note
created: 2025-07-23 12:39
modified: 2025-07-23 12:39
---
# [Chamberlain of Zuggtmoy](3-Mechanics\CLI\bestiary\plant/chamberlain-of-zuggtmoy-oota.md)
*Source: Out of the Abyss p. 230*  

```statblock
"name": "Chamberlain of Zuggtmoy (OotA)"
"size": "Large"
"type": "plant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "-2"
"stats":
  - !!int "17"
  - !!int "7"
  - !!int "14"
  - !!int "11"
  - !!int "8"
  - !!int "12"
"speed": "20 ft."
"damage_resistances": "bludgeoning, piercing"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Abyssal, Undercommon"
"cr": "2"
"traits":
  - "desc": "The chamberlain counts as a mushroom for the Fungus Stride feature of\
      \ the bridesmaid of Zuggtmoy."
    "name": "Mushroom Portal"
  - "desc": "Whenever the chamberlain takes damage, it releases a cloud of spores.\
      \ Creatures within 5 feet of the chamberlain when this happens must succeed\
      \ on a DC 12 Constitution saving throw or be [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on a success."
    "name": "Poison Spores"
"actions":
  - "desc": "The chamberlain makes two slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) bludgeoning damage."
    "name": "Slam"
  - "desc": "The chamberlain releases spores that burst out in a cloud that fills\
      \ a 10-foot-radius sphere centered on it, and the cloud lingers for 1 minute.\
      \ Any flesh-and-blood creature in the cloud when it appears, or that enters\
      \ it later, must make a DC 12 Constitution saving throw. On a successful save,\
      \ the creature can't be infected by these spores for 24 hours. On a failed save,\
      \ the creature is infected with a disease called the spores of Zuggtmoy and\
      \ also gains a random form of indefinite madness (determined by rolling on the\
      \ Madness of Zuggtmoy table in appendix D) that lasts until the creature is\
      \ cured of the disease or dies. While infected in this way, the creature can't\
      \ be reinfected, and it must be repeat the saving throw at the end of every\
      \ 24 hours, ending the infection on a success. On a failure, the infected creature's\
      \ body is slowly taken over by fungal growth, and after three such failed saves,\
      \ the creature dies and is reanimated as a spore servant if it's a type of creature\
      \ that can be (see the \"Myconids\" entry in the Monster Manual)."
    "name": "Infestation Spores (1/Day)"
"source":
  - "OotA"
"image": "/3-Mechanics/CLI/bestiary/plant/token/chamberlain-of-zuggtmoy-oota.webp"
```
^statblock