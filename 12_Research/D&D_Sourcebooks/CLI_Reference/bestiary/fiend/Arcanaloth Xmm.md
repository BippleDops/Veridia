---
title: Arcanaloth Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Arcanaloth Xmm

---
title: Arcanaloth Xmm
aliases:
- Arcanaloth
type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/fiend/yugoloth
- ttrpg-cli/monster/cr/12
- monster
- research
- world/both
- ttrpg-cli/monster/environment/planar
- active
- status/in-progress
- ttrpg-cli/monster/environment/lower
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.851783+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-arcanaloth-xmm-arcanaloth-xmm.svg)

# [[arcanaloth xmm|Arcanaloth]]
*Source: Monster Manual (2024) p. 19*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Arcanaloth

*Yugoloth of Magical Manipulation*

- **Habitat.** Planar (Lower Planes)  
- **Treasure.** Arcana  

While all yugoloths are fiendish manifestations of wickedness and greed, arcanaloths bend their considerable intellects toward hoarding and exploiting secrets. They then deploy these secrets to ensnare countless victims and lesser villains, beguiling foes with false promises and powerful magic.

Arcanaloths possess considerable spellcasting prowess and frequently disguise themselves with magic. While they prefer to let magical servants or other yugoloths do their fighting for them, arcanaloths can defend themselves with arcane might, banishing opponents into the pages of their magic tomes.

```statblock
"name": "Arcanaloth (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "175"
"hit_dice": "27d8 + 54"
"modifier": !!int "5"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "14"
  - !!int "20"
  - !!int "16"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  - "dexterity": !!int "5"
  - "constitution": !!int "6"
  - "intelligence": !!int "9"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[[skills#Arcana|Arcana]]"
    "desc": "+9"
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+7"
  - "name": "[[skills#Insight|Insight]]"
  - "name": "[[skills#Perception|Perception]]"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "acid, poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "all; telepathy 120 ft."
"cr": "12"
"traits":
  - "desc": "If the arcanaloth dies outside Gehenna, its body dissolves into ichor,\
      \ and it gains a new body instantly and revives with all its [[hit points xphb|Hit Points]]\
      \ in Gehenna."
    "name": "Fiendish Restoration"
  - "desc": "The arcanaloth has [[advantage xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The arcanaloth has a magic tome. While holding or carrying the tome,\
      \ the arcanaloth can use its Banishing Claw action.\n\nThe tome has AC 17; HP\
      \ 35; and [[immunity xphb|Immunity]] to Necrotic,\
      \ Poison, and Psychic damage. The tome regains all its [[hit points xphb|Hit Points]]\
      \ at the end of every turn, but it turns to dust if reduced to 0 [[hit points xphb|Hit Points]]\
      \ or when the arcanaloth dies. If the tome is destroyed, the arcanaloth can\
      \ create a new one when it finishes a [[short rest xphb|Short]]\
      \ or [[long rest xphb|Long Rest]]."
    "name": "Soul Tome"
"actions":
  - "desc": "The arcanaloth makes three Fiendish Burst attacks. It can replace one\
      \ attack with a Banishing Claw attack."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Attack Roll: +9, reach 5 ft. or range 120 ft. Hit:\
      \ 31 (4d12 + 5) Necrotic damage."
    "name": "Fiendish Burst"
  - "desc": "Melee Attack Roll: +9, reach 5 ft. Hit: 10 (2d4 + 5) Slashing damage\
      \ plus 19 (3d12) Psychic damage. If the target is a creature, it is subjected\
      \ to the following effect. Charisma Saving Throw: DC 17. Failure: The target\
      \ is trapped in a demiplane inside the Soul Tome. While trapped there, the target\
      \ has the [[conditions#Incapacitated|Incapacitated]] condition.\
      \ At the end of each of its turns, the target repeats the save, escaping the\
      \ tome on a success. When the target escapes, it appears in the space it left\
      \ or, if that space is occupied, the nearest unoccupied space.\n\nIf the target\
      \ fails three of these saves while in the demiplane, it becomes bound to the\
      \ tome and can escape only if the tome is reduced to 0 [[hit points xphb|Hit Points]]."
    "name": "Banishing Claw (Requires Soul Tome)"
  - "desc": "The arcanaloth casts one of the following spells, requiring no Material\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 17):\n\nAt will: [[alter self xphb|Alter Self]],\
      \ [[detect magic xphb|Detect Magic]], [[identify xphb|Identify]],\
      \ [[mage hand xphb|Mage Hand]], [[prestidigitation xphb|Prestidigitation]]\n\
      \n1/day each: [[contact other plane xphb|Contact Other Plane]],\
      \ [[detect thoughts xphb|Detect Thoughts]], [[dimension door xphb|Dimension\]]
      \ Door]], [[mind blank xphb|Mind Blank]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The arcanaloth teleports up to 30 feet to an unoccupied space it can\
      \ see."
    "name": "Teleport"
"reactions":
  - "desc": "The arcanaloth casts [[counterspell xphb|Counterspell]]\
      \ in response to that spell's trigger, using the same spellcasting ability as\
      \ Spellcasting.\n"
    "name": "Counterspell"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/arcanaloth-xmm.webp"
```
^statblock

## Environment

planar, lower

## Player-Facing Summary

Arcanaloth xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of arcanaloth xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around arcanaloth xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
