---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/15
  - ttrpg-cli/monster/environment/desert
  - ttrpg-cli/monster/environment/swamp
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/undead/sorcerer
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Skull Lord
---
# [Skull Lord](3-Mechanics\CLI\bestiary\undead/skull-lord-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 220, Mordenkainen's Tome of Foes p. 230*  

Skull lords have claimed vast regions of the Shadowfell as their dominion. From these blighted lands, they wage war against their rivals, commanding hordes of the undying in a bid to establish dominance. Yet skull lords always prove to be their own worst enemies; each is a combined being born from three hateful individuals, and they constantly plot against themselves.

Infighting and treachery brought skull lords into existence. The first of them appeared in the aftermath of Vecna's bid to conquer the world of Greyhawk, after the vampire Kas betrayed Vecna and took his eye and hand. In the confusion resulting from this turn of events, Vecna's warlords turned against each other, and his plans were dashed. In a rage, Vecna gathered up his generals and captains and bound them in groups of three, fusing them into abominations cursed to fight among themselves for all time. Since the first skull lords were exiled into the shadows, others have arisen, typically created from other leaders who betrayed their masters.

```statblock
"name": "Skull Lord (MPMM)"
"size": "Medium"
"type": "undead"
"subtype": "sorcerer"
"alignment": "Typically  Lawful Evil"
"ac": !!int "18"
"ac_class": "[plate](/3-Mechanics/CLI/items/plate-armor-xphb.md)"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "17"
  - !!int "16"
  - !!int "15"
  - !!int "21"
"speed": "30 ft."
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/skills.md#Athletics)"
    "desc": "+7"
  - "name": "[History](/3-Mechanics/CLI/skills.md#History)"
    "desc": "+8"
  - "name": "[Perception](/3-Mechanics/CLI/skills.md#Perception)"
    "desc": "+12"
  - "name": "[Stealth](/3-Mechanics/CLI/skills.md#Stealth)"
    "desc": "+8"
"damage_resistances": "cold; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "[blinded](/3-Mechanics/CLI/conditions.md#Blinded), [charmed](/3-Mechanics/CLI/conditions.md#Charmed),\
  \ [deafened](/3-Mechanics/CLI/conditions.md#Deafened), [exhaustion](/3-Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/conditions.md#Frightened), [poisoned](/3-Mechanics/CLI/conditions.md#Poisoned),\
  \ [stunned](/3-Mechanics/CLI/conditions.md#Stunned), [unconscious](/3-Mechanics/CLI/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., passive Perception 22"
"languages": "all the languages it knew in life"
"cr": "15"
"traits":
  - "desc": "If the skull lord is subjected to an effect that allows it to make a\
      \ Dexterity saving throw to take only half the damage, the skull lord instead\
      \ takes no damage if it succeeds on the saving throw and only half damage if\
      \ it fails, provided it isn't [incapacitated](/3-Mechanics/CLI/conditions.md#Incapacitated)."
    "name": "Evasion"
  - "desc": "If the skull lord fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "While within 30 feet of the skull lord, any Undead ally of the skull\
      \ lord makes saving throws with advantage, and that ally regains d6 hit points\
      \ whenever it starts its turn there."
    "name": "Master of the Grave"
  - "desc": "The skull lord doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The skull lord makes three Bone Staff or Deathly Ray attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) bludgeoning damage plus 21 (6d6) necrotic damage."
    "name": "Bone Staff"
  - "desc": "Ranged Spell Attack: +10 to hit, range 60 ft., one target. Hit: 27\
      \ (5d8 + 5) necrotic damage."
    "name": "Deathly Ray"
  - "desc": "The skull, lord casts one of the following spells, using Charisma as\
      \ the spellcasting ability (spell save DC 18):\n\nAt will: [mage hand](/3-Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [message](/3-Mechanics/CLI/spells/message-xphb.md)\n\n2/day each: [dimension\
      \ door](/3-Mechanics/CLI/spells/dimension-door-xphb.md), [fear](/3-Mechanics/CLI/spells/fear-xphb.md)\n\
      \n1/day each: [cloudkill](/3-Mechanics/CLI/spells/cloudkill-xphb.md), [cone\
      \ of cold](/3-Mechanics/CLI/spells/cone-of-cold-xphb.md)"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The skull lord makes one Bone Staff or Deathly Ray attack."
    "name": "Attack"
  - "desc": "The skull lord moves up to its speed without provoking [opportunity attacks](/3-Mechanics/CLI/actions.md#Opportunity%20Attack)."
    "name": "Move"
  - "desc": "The skull lord summons up to five [skeletons](/3-Mechanics/CLI/bestiary/undead/skeleton-xmm.md)\
      \ or [zombies](/3-Mechanics/CLI/bestiary/undead/zombie-xmm.md) in unoccupied\
      \ spaces within 30 feet of it. They remain until destroyed. Undead summoned\
      \ in this way roll initiative, act in the next available turn, and obey the\
      \ skull lord. The skull lord can have no more than five Undead summoned by this\
      \ ability at a time."
    "name": "Summon Undead (Costs 2 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "/3-Mechanics/CLI/bestiary/undead/token/skull-lord-mpmm.webp"
```
^statblock

## Environment

desert, swamp, underdark