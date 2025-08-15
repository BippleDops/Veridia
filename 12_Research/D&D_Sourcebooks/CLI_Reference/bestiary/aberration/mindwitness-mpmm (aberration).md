---
title: mindwitness-mpmm (aberration)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# mindwitness-mpmm

---
title: mindwitness mpmm
aliases:
- Mindwitness
type: monster
tags:
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/type/aberration
- ttrpg-cli/monster/cr/5
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/size/large
- world/both
- research
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.304773'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-mindwitness-mpmm-mindwitness-mpmm.svg)

# [[mindwitness mpmm|Mindwitness]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 181, Volo's Guide to Monsters p. 176*  

If a beholder is [[conditions#Stunned|stunned]] and brought to the brine pool of an elder brain, the beholder can be converted into a mindwitness. This alters some of its eye rays and transforms four of its eyestalks into tentacles similar to a mind flayer's. The mindwitness is psychically imprinted with devotion to the elder brain and submission to illithid commands.

A mindwitness's primary function is to improve telepathic communication in a mind flayer colony. A creature in telepathic communication with a mindwitness can converse through it to as many as seven other creatures the mindwitness can see, rapidly disseminating commands and other information.

If separated from its illithid masters, a mindwitness seeks out other telepathic creatures to tell it what to do. Mindwitnesses have been known to ally with [[flumph xmm|flumphs]] and planar beings such as demons, shifting their worldview and alignment to match those of their new masters.

```statblock
"name": "Mindwitness (MPMM)"
"size": "Large"
"type": "aberration"
"alignment": "Typically  Lawful Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "15"
"speed": "0 ft., fly 20 ft. (hover)"
"saves":
  - "intelligence": !!int "5"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+8"
"condition_immunities": "[[conditions#prone|prone]]"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Deep Speech, Undercommon, telepathy 600 ft."
"cr": "5"
"traits":
  - "desc": "When the mindwitness receives a telepathic message, it can telepathically\
      \ share that message with up to seven other creatures within 600 feet of it\
      \ that it can see."
    "name": "Telepathic Hub"
"actions":
  - "desc": "The mindwitness makes one Bite attack and one Tentacles attack, or it\
      \ uses Eye Ray three times."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 16\
      \ (4d6 + 2) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit:\
      \ 20 (4d8 + 2) psychic damage. If the target is Large or smaller, it is [[conditions#Grappled|grappled]]\
      \ (escape DC 13), and it must succeed on a DC 13 Intelligence saving throw or\
      \ be [[conditions#Restrained|restrained]] until this grapple\
      \ ends."
    "name": "Tentacles"
  - "desc": "The mindwitness shoots one magical eye ray at random (roll a d6, and\
      \ reroll if the ray has already been used this turn), choosing one target it\
      \ can see within 120 feet of it:\n\n- 1 Aversion Ray. The targeted creature\
      \ must make a DC 13 Charisma saving throw. On a failed save, the target has\
      \ disadvantage on attack rolls for 1 minute. The target can repeat the saving\
      \ throw at the end of each of its turns, ending the effect on itself on a success.\
      \  \n- 2 Fear Ray. The targeted creature must succeed on a DC 13 Wisdom\
      \ saving throw or be [[conditions#frightened|frightened]]\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success.  \n- 3 Psychic Ray.\
      \ The target must succeed on a DC 13 Intelligence saving throw or take 27 (6d8)\
      \ psychic damage.  \n- 4 Slowing Ray. The targeted creature must make a\
      \ DC 13 Dexterity saving throw. On a failed save, the target's speed is halved\
      \ for 1 minute. In addition, the creature can't take reactions, and it can take\
      \ either an action or a bonus action on its turn but not both. The creature\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success.  \n- 5 Stunning Ray. The targeted creature must\
      \ succeed on a DC 13 Constitution saving throw or be [[conditions#Stunned|stunned]]\
      \ its turns, ending the effect on itself on a success.  \n- 6 Telekinetic\
      \ Ray. If the target is a creature, it must make a DC 13 Strength saving throw.\
      \ On a failed save, the mindwitness moves it up to 30 feet in any direction,\
      \ and it is [[conditions#Restrained|restrained]] by the ray's\
      \ telekinetic grip until the start of the mindwitness's next turn or until the\
      \ mindwitness is [[conditions#Incapacitated|incapacitated]].\
      \  \n\n    If the target is an object weighing 300 pounds or less that isn't\
      \ being worn or carried, it is telekinetically moved up to 30 feet in any direction.\
      \ The mindwitness can also exert fine control on objects with this ray, such\
      \ as manipulating a simple tool or opening a door or a container.  "
    "name": "Eye Ray"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/mindwitness-mpmm.webp"
```
^statblock

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Environment

underdark

## Player-Facing Summary

Mindwitness mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of mindwitness mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around mindwitness mpmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- A document has gone missing and chaos spreads
- Someone is protecting a witness for power
- An heirloom has gone missing and war looms
- Someone is searching for a artifact for money

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
