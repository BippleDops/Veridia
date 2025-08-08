---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rot
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
- Animated Tile Chimera
type: note
created: 2025-07-23 12:39
modified: 2025-07-23 12:39
---
# [Animated Tile Chimera](3-Mechanics\CLI\bestiary\monstrosity/animated-tile-chimera-rot.md)
*Source: The Rise of Tiamat p. 42*  

```statblock
"name": "Animated Tile Chimera (RoT)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "11"
  - !!int "19"
  - !!int "3"
  - !!int "14"
  - !!int "10"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+8"
"damage_resistances": "piercing"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [frightened](/3-Mechanics/CLI/conditions.md#Frightened),\
  \ [paralyzed](/3-Mechanics/CLI/conditions.md#Paralyzed), [petrified](/3-Mechanics/CLI/conditions.md#Petrified),\
  \ [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "understands Draconic but can't speak"
"cr": "6"
"traits":
  - "desc": "If destroyed, the tile creature regains all its hit points and becomes\
      \ active again in 24 hours unless at least half its tiles are collected and\
      \ kept separate from the rest of the creature's tiles."
    "name": "Rejuvenation"
"actions":
  - "desc": "The chimera makes three attacks: one with its bite, one with its horns,\
      \ and one with its claws. When its fire breath is available, it can use the\
      \ breath in place of its bite or horns."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10\
      \ (1d12 + 4) bludgeoning damage."
    "name": "Horns"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claws"
  - "desc": "The dragon head exhales fire in a 15-foot cone. Each creature in that\
      \ area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Fire Breath (Recharge 5-6)"
"reactions":
  - "desc": "When targeted by a melee attack, the tile creature can take a reaction\
      \ to turn its narrowest aspect toward the attacker. The attacker has disadvantage\
      \ on the attack roll."
    "name": "Narrow Dodge"
"source":
  - "RoT"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/animated-tile-chimera-rot.webp"
```
^statblock