# spring-eladrin-mpmm

---
title: spring eladrin mpmm
aliases:
- Spring Eladrin
type: monster
tags:
- ttrpg-cli/monster/size/medium
- world/surface
- ttrpg-cli/monster/cr/10
- monster
- ttrpg-cli/monster/type/fey/elf
- ttrpg-cli/compendium/src/5e/mpmm
- world/both
- research
- active
- ttrpg-cli/monster/environment/forest
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.285875'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-spring-eladrin-mpmm-spring-eladrin-mpmm.svg)

# [[spring-eladrin-mpmm|Spring Eladrin]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 116, Mordenkainen's Tome of Foes p. 196*  

Their hearts filled with joy, spring eladrin cavort through their sylvan realms, their songs and laughter filling the air. These playful eladrin beguile other creatures to fill them with the joy of spring. Their antics can lead other creatures into danger and make mischief for them.


## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement


## Eladrin

> [!quote] A quote from Tasha  
> 
> If an autumn eladrin invites you over for dinner, come with an empty stomach. Their goodwill extends to heaping portions.
> Note to self: send some of my spring eladrin friends to visit Mordenkainen. That'll teach him to lighten up.

Eladrin dwell in the verdant splendor of the Feywild. They are related to the elves found on the Material Plane. But while other elves can temper their wild impulses, eladrin are ruled by emotion—and due to their magical nature, they undergo physical changes to match their changes in temperament.

Eladrin have spent centuries in the Feywild, and most of them have become Fey creatures as a result—those presented here are of the Fey variety. Some are still Humanoid, however, similar in that respect to their other elven kin.

The magic flowing through eladrin responds to their emotional state by transforming them into different seasonal aspects, with behaviors and abilities that change with their forms. Some eladrin might remain in a particular aspect for years, while others run through the emotional spectrum each week.

### Changeable Natures

Whenever one of the eladrin presented here finishes a long rest, they can associate themself with a different season, provided they aren't [[conditions#Incapacitated|incapacitated]]. When the eladrin makes this change, they use the stat block of the new season rather than their old stat block. Any damage the eladrin sustained in their previous form applies to the new form, as do any conditions or other ongoing effects affecting them.

```statblock
"name": "Spring Eladrin (MPMM)"
"size": "Medium"
"type": "fey"
"subtype": "elf"
"alignment": "Typically  Chaotic Neutral"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "165"
"hit_dice": "22d8 + 66"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "18"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+8"
  - "name": "[[skills#Persuasion|Persuasion]]"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Elvish, Sylvan"
"cr": "10"
"traits":
  - "desc": "Any non-eladrin creature that starts its turn within 60 feet of the eladrin\
      \ must make a DC 16 Wisdom saving throw. On a failed save, the creature becomes\
      \ [[conditions#Charmed|charmed]] by the eladrin for 1 minute.\
      \ On a successful save, the creature becomes immune to any eladrin's Joyful\
      \ Presence for 24 hours.\n\nWhenever the eladrin deals damage to the [[conditions#Charmed|charmed]]\
      \ creature, the [[conditions#Charmed|charmed]] creature can\
      \ repeat the saving throw, ending the effect on itself on a success."
    "name": "Joyful Presence"
  - "desc": "The eladrin has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The eladrin makes two Longsword or Longbow attacks. It can replace one\
      \ attack with a use of Spellcasting."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d8\
      \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands,\
      \ plus 22 (5d8) psychic damage."
    "name": "Longsword"
  - "desc": "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit:\
      \ 7 (1d8 + 3) piercing damage plus 22 (5d8) psychic damage."
    "name": "Longbow"
  - "desc": "The eladrin casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 16):\n\
      \nAt will: [[tashas-hideous-laughter-xphb|Tasha's hideous laughter]]\n\
      \n1/day each: [[major-image-xphb|major image]],\
      \ [[suggestion-xphb|suggestion]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The eladrin teleports, along with any equipment it is wearing or carrying,\
      \ up to 30 feet to an unoccupied space it can see."
    "name": "Fey Step (Recharge 4-6)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fey/token/spring-eladrin-mpmm.webp"
```
^statblock

## Environment

forest, grassland

## Player-Facing Summary

Spring eladrin mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of spring eladrin mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around spring eladrin mpmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Plot Hooks

- A letter reveals a conspiracy about the government
- A letter reveals a betrayal about this place
- A map reveals ancient history about this place
- A prisoner has gone missing and truth emerges

## 12_Research Specific Content

Contextual improvement based on 12_Research


## 12_Research Specific Content

Contextual improvement based on 12_Research
