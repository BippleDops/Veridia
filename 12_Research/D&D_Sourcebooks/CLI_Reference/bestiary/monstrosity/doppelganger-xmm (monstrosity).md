---
title: doppelganger-xmm (monstrosity)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# doppelganger-xmm

---
title: doppelganger xmm
aliases:
- Doppelganger
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/environment/underdark
- research
- world/both
- ttrpg-cli/monster/type/monstrosity
- active
- status/in-progress
- ttrpg-cli/monster/cr/3
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.035109'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-doppelganger-xmm-doppelganger-xmm.svg)

# [[Doppelganger Xmm]]
*Source: Monster Manual (2024) p. 100. Available in the SRD and the Free Rules (2024)*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Doppelganger

*Shape-Shifting Infiltrator*

- **Habitat.** Underdark, Urban  
- **Treasure.** Individual  

Doppelgangers are supernatural beings with the ability to shape-shift into any humanlike form. Their mind-reading abilities aid them in creating near-perfect disguises and plucking secrets from unguarded minds. Occasionally, doppelgangers use their shape-shifting ability in more overt ways, transforming into unsettling forms to frighten foes.

A doppelganger's agenda might relate to its mysterious magical origins or to more mercenary goals. Roll on or choose a result from the Doppelganger Deceptions table to inspire a doppelganger's plot.

**Doppelganger Deceptions**

`dice: [](doppelganger-xmm.md#^doppelganger-deceptions)`

| dice: 1d6 | The Doppelganger Schemes To... |
|-----------|--------------------------------|
| 1 | Cause chaos within the temple of a deity that cursed it to live without a true form. |
| 2 | Conceal evidence of a vast conspiracy. |
| 3 | Control a community through fear by posing as a legendary bogeyman. |
| 4 | Replace a noble to enjoy a decadent lifestyle. |
| 5 | Spy on wizards to learn how to complete its own botched magical creation. |
| 6 | Take an influential position, acting as a sleeper agent for a doppelganger invasion. |
^doppelganger-deceptions

> [!quote] A quote from Someone claiming to be Lorhirin of Fearchor Keep  
> 
> Meeting yourself is the surest way to realize you're not as charming as you think you are.

```statblock
"name": "Doppelganger (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "4"
"stats":
  - !!int "11"
  - !!int "18"
  - !!int "14"
  - !!int "12"
"speed": "30 ft."
"skillsaves":
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+6"
  - "name": "[[skills#Insight|Insight]]"
    "desc": "+3"
"condition_immunities": "[[conditions#Charmed|charmed]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common plus three other languages"
"cr": "3"
"actions":
  - "desc": "The doppelganger makes two Slam attacks and uses Unsettling Visage if\
      \ available."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +6 (with [[Advantage Xphb]]\
      \ during the first round of each combat), reach 5 ft. Hit: 11 (2d6 + 4) Bludgeoning\
      \ damage."
    "name": "Slam"
  - "desc": "Wisdom Saving Throw: DC 12, each creature in a 15-foot [[Area of Effect Xphb]]\
      \ originating from the doppelganger that can see the doppelganger. Failure:\
      \ The target has the [[conditions#frightened|Frightened]]\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically."
    "name": "Unsettling Visage (Recharge 6)"
  - "desc": "The doppelganger casts [[detect-thoughts-xphb (spells)]],\
      \ requiring no spell components and using Charisma as the spellcasting ability\
      \ (spell save DC 12).\n"
    "name": "Read Thoughts"
"bonus_actions":
  - "desc": "The doppelganger shape-shifts into a Medium or Small Humanoid, or it\
      \ returns to its true form. Its game statistics, other than its size, are the\
      \ same in each form. Any equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/doppelganger-xmm.webp"
```
^statblock

## Environment

underdark, urban

## Player-Facing Summary

Doppelganger xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of doppelganger xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around doppelganger xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Secret Connections

*[Hidden from players]* Connected to The Secret Covenant - Summon ancient evil
