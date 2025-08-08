---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/hotdq
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: '#^statblock'
aliases:
- Four-Armed Troll
type: note
created: 2025-07-23 12:39
modified: 2025-07-23 12:39
---
# [Four-Armed Troll](3-Mechanics\CLI\bestiary\giant/four-armed-troll-hotdq.md)
*Source: Hoard of the Dragon Queen p. 65*  

Sometimes when a troll loses a limb, it regenerates two limbs to replace the one it lost. This can result in trolls with multiple arms. A four-armed troll uses the troll stat block, except that it is a Challenge Rating 6 monster (2,300 XP) and has alternate action options to suit.

```statblock
"name": "Four-Armed Troll (HotDQ)"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "20"
  - !!int "7"
  - !!int "9"
  - !!int "7"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Giant"
"cr": "6"
"traits":
  - "desc": "The troll has advantage on Wisdom ([Perception](/3-Mechanics/CLI/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
  - "desc": "The troll regains 10 hit points at the start of its turn. If the troll\
      \ takes acid or fire damage, this trait doesn't function at the start of the\
      \ troll's next turn. The troll dies only if it starts its turn with 0 hit points\
      \ and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "The troll attacks five times, once with its bite and four times with\
      \ its claws. If two or more claws hit the same target, the troll rends the target,\
      \ dealing an extra 2d6 slashing damage."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) slashing damage."
    "name": "Claw"
"source":
  - "HotDQ"
"image": "/3-Mechanics/CLI/bestiary/giant/token/four-armed-troll-hotdq.webp"
```
^statblock