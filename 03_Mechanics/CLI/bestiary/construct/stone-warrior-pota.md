---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/pota
  - ttrpg-cli/monster/cr/4
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Stone Warrior
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-stone-warrior-pota-stone-warrior-pota.svg)

# [Stone Warrior](3-Mechanics\CLI\bestiary\construct/stone-warrior-pota.md)
*Source: Princes of the Apocalypse p. 97*  

```statblock
"name": "Stone Warrior (PotA)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "102"
"hit_dice": "17d10 + 85"
"modifier": !!int "-1"
"stats":
  - !!int "22"
  - !!int "9"
  - !!int "20"
  - !!int "3"
  - !!int "11"
  - !!int "1"
"speed": "30 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "4"
"traits":
  - "desc": "The golem is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The golem has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The golem's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19\
      \ (3d8 + 6) bludgeoning damage."
    "name": "Slam"
  - "desc": "The golem targets one or more creatures it can see within 10 feet of\
      \ it. Each target must make a DC 17 Wisdom saving throw against this magic.\
      \ On a failed save, a target can't use reactions, its speed is halved, and it\
      \ can't make more than one attack on its turn. In addition, the target can take\
      \ either an action or a bonus action on its turn, not both. These effects last\
      \ for 1 minute. A target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Slow (Recharge 5-6)"
"source":
  - "PotA"
"image": "/03_Mechanics/CLI/bestiary/construct/token/stone-warrior-pota.webp"
```
^statblock