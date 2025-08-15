---
title: Behir Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Behir Xmm

---
title: Behir Xmm
aliases:
- Behir
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/huge
- monster
- ttrpg-cli/monster/environment/underdark
- research
- world/both
- ttrpg-cli/monster/type/monstrosity
- active
- ttrpg-cli/monster/cr/11
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.296203+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-behir-xmm-behir-xmm.svg)

# [[Behir Xmm]]
*Source: Monster Manual (2024) p. 34. Available in the SRD and the Free Rules (2024)*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Behir

*Lightning-Spewing Glutton*

- **Habitat.** Underdark  
- **Treasure.** Any  

Twelve-legged, reptilian predators, behirs endlessly hunt for their next meal. Their short legs propel them quickly across floors and walls. Any prey that behirs can't chase down, they blast with breaths of powerful lightning.

Legends claim the first behirs were magically created by storm giants during an ancient, multiversal conflict between giants and dragons. The giants used their mastery of weather to alter the essence of blue dragons. The results were the first behirs, which served as hunters with a particular taste for dragon eggs.

Behirs live in sprawling cave systems and elaborate ruins where they can make the most of their exceptional mobility. They are mindful of areas where dragons dwell, as most dragons view behirs as dangerous abominations and attack them on sight. Nevertheless, behirs occasionally hunt for dragon lairs in the hope of finding and devouring unhatched dragon eggs.

> [!quote] A quote from Lludd, Behir  
> 
> You wouldn't believe all the great stuff I've swallowed! Now just climb on in here, and you can keep whatever you find.

```statblock
"name": "Behir (XMM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "168"
"hit_dice": "16d12 + 64"
"modifier": !!int "3"
"stats":
  - !!int "23"
  - !!int "16"
  - !!int "18"
  - !!int "7"
  - !!int "14"
  - !!int "12"
"speed": "50 ft., climb 50 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+7"
"damage_immunities": "lightning"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": "Draconic"
"cr": "11"
"actions":
  - "desc": "The behir makes one Bite attack and uses Constrict."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +10, reach 10 ft. Hit: 19 (2d12 + 6) Piercing\
      \ damage plus 11 (2d10) Lightning damage."
    "name": "Bite"
  - "desc": "Strength Saving Throw: DC 18, one Large or smaller creature the behir\
      \ can see within 5 feet. Failure: 28 (5d8 + 6) Bludgeoning damage. The target\
      \ has the [[conditions#Grappled|Grappled]] condition (escape\
      \ DC 16), and it has the [[conditions#Restrained|Restrained]]\
      \ condition until the grapple ends."
    "name": "Constrict"
  - "desc": "Dexterity Saving Throw: DC 16, each creature in a 90-foot-long, 5-foot-wide\
      \ [[Area of Effect Xphb]]. Failure:\
      \ 66 (12d10) Lightning damage. Success: Half damage."
    "name": "Lightning Breath (Recharge 5-6)"
"bonus_actions":
  - "desc": "Dexterity Saving Throw: DC 18, one Large or smaller creature [[conditions#Grappled|Grappled]]\
      \ by the behir (the behir can have only one creature swallowed at a time). Failure:\
      \ The behir swallows the target, which is no longer [[conditions#Grappled|Grappled]].\
      \ While swallowed, a creature has the [[conditions#Blinded|Blinded]]\
      \ and [[conditions#Restrained|Restrained]] conditions, has\
      \ [[Cover Xphb]] against attacks\
      \ and other effects outside the behir, and takes 21 (6d6) Acid damage at the\
      \ start of each of the behir's turns.\n\nIf the behir takes 30 damage or more\
      \ on a single turn from the swallowed creature, the behir must succeed on a\
      \ DC 14 Constitution saving throw at the end of that turn or regurgitate the\
      \ creature, which falls in a space within 10 feet of the behir and has the [[conditions#prone|Prone]]\
      \ condition. If the behir dies, a swallowed creature is no longer [[conditions#Restrained|Restrained]]\
      \ and can escape from the corpse by using 15 feet of movement, exiting [[conditions#prone|Prone]]."
    "name": "Swallow"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/behir-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Behir xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of behir xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around behir xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
