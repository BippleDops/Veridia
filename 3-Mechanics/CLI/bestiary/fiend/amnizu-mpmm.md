---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/18
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Amnizu
---
# [Amnizu](3-Mechanics\CLI\bestiary\fiend/amnizu-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 46, Mordenkainen's Tome of Foes p. 164*  

Amnizus lead infernal legions into battle and command guardians at the gateways to the Hells. Amnizus are arrogant, bullying, and ruthless, but they're also highly intelligent tacticians and unfailingly loyal—qualities the hellish archdukes value.

Some amnizus perform the critical task of watching over the River Styx from fortresses along the river's blighted banks, where it flows through Dis and Stygia. They collect the souls arriving in the form of [lemures](/3-Mechanics/CLI/bestiary/fiend/lemure-xmm.md). Lemures have no personalities or memories; they're driven only by the desire to commit evil. The amnizus that patrol here drill the rules of the Nine Hells into the new arrivals' minds and marshal them into legions.

```statblock
"name": "Amnizu (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "202"
"hit_dice": "27d8 + 81"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "13"
  - !!int "16"
  - !!int "20"
  - !!int "12"
  - !!int "18"
"speed": "30 ft., fly 40 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "9"
  - "wisdom": !!int "7"
  - "charisma": !!int "10"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/conditions.md#Charmed), [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Common, Infernal, telepathy 1,000 ft."
"cr": "18"
"traits":
  - "desc": "Magical darkness doesn't impede the amnizu's [darkvision](/3-Mechanics/CLI/senses.md#Darkvision)."
    "name": "Devil's Sight"
  - "desc": "The amnizu has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The amnizu uses Blinding Rot or Forgetfulness, if available. It also\
      \ makes two Taskmaster Whip attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 9\
      \ (1d8 + 5) slashing damage plus 16 (3d10) force damage."
    "name": "Taskmaster Whip"
  - "desc": "The amnizu targets one or two creatures that it can see within 60 feet\
      \ of it. Each target must succeed on a DC 19 Wisdom saving throw or take 26\
      \ (4d12) necrotic damage and be [blinded](/3-Mechanics/CLI/conditions.md#Blinded)\
      \ until the start of the amnizu's next turn."
    "name": "Blinding Rot"
  - "desc": "The amnizu targets one creature it can see within 60 feet of it. That\
      \ creature must succeed on a DC 18 Intelligence saving throw or take 26 (4d12)\
      \ psychic damage and become [stunned](/3-Mechanics/CLI/conditions.md#Stunned)\
      \ for 1 minute. A [stunned](/3-Mechanics/CLI/conditions.md#Stunned) creature\
      \ repeats the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success. If the target is [stunned](/3-Mechanics/CLI/conditions.md#Stunned)\
      \ for the full minute, it forgets everything it sensed, experienced, and learned\
      \ during the last 5 hours."
    "name": "Forgetfulness (Recharge 6)"
  - "desc": "The amnizu casts one of the following spells, requiring no material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 19):\n\n\
      At will: [command](/3-Mechanics/CLI/spells/command-xphb.md)\n\n3/day:\
      \ [dominate monster](/3-Mechanics/CLI/spells/dominate-monster-xphb.md)\n\n1/day:\
      \ [feeblemind](/3-Mechanics/CLI/spells/befuddlement-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "When a creature within 60 feet of the amnizu makes an attack roll against\
      \ it, and another creature is within the attack's range, the attacker must make\
      \ a DC 19 Wisdom saving throw. On a failed save, the attacker must target the\
      \ creature that is closest to it, not including the amnizu or itself. If multiple\
      \ creatures are closest, the attacker chooses which one to target. If the saving\
      \ throw is successful, the attacker is immune to the amnizu's Instinctive Charm\
      \ for 24 hours."
    "name": "Instinctive Charm"
"source":
  - "MPMM"
  - "MTF"
"image": "/3-Mechanics/CLI/bestiary/fiend/token/amnizu-mpmm.webp"
```
^statblock