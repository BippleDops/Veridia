# Lamia Xmm

---
title: Lamia Xmm
aliases:
- Lamia
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/fiend
- ttrpg-cli/monster/cr/4
- monster
- research
- ttrpg-cli/monster/size/large
- world/both
- active
- status/in-progress
- ttrpg-cli/monster/environment/desert
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.807239+00:00'
world: Both
---

# [[lamia-xmm|Lamia]]
*Source: Monster Manual (2024) p. 192. Available in the SRD and the Free Rules (2024)*  


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


## Lamia

*Accursed Bargainer and Ruin Raider*

- **Habitat.** Desert  
- **Treasure.** Arcana  

Legends say the first lamia was an ambitious ruler who made a sinister bargain with the demon lord Graz'zt for everlasting majesty. As a consequence, the ruler was transformed into a lamia, a monster with the body of a lion and an accursed touch.

Lamias either are descendants of that first lamia or have made similar deals. They often dwell near ruins, seeking mysterious magic they can use to gain riches and influence. Lamias use magical illusions and enchantments to trick others into serving them. They sometimes work with bandits to abduct travelers, releasing captives only if they accept a dangerous bargain. Roll on or choose a result from the Lamia Pacts table to inspire a lamia's desires.

**Lamia Pacts**

`dice: [](lamia-xmm.md#^lamia-pacts)`

| dice: 1d6 | The Lamia Compels the Bargainer To... |
|-----------|---------------------------------------|
| 1 | Bring it a possession from a ruler or noble. |
| 2 | Create a map of a dungeon or ruin. |
| 3 | Escort it through a nearby community's gate. |
| 4 | Place a strange idol in a specific site or home. |
| 5 | Remove a magic item's curse, then return it. |
| 6 | Slay a monster and retrieve a specific organ. |
^lamia-pacts

```statblock
"name": "Lamia (XMM)"
"size": "Large"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "97"
"hit_dice": "13d10 + 26"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "15"
  - !!int "14"
"speed": "40 ft."
"skillsaves":
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+7"
  - "name": "[[skills#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common"
"cr": "4"
"actions":
  - "desc": "The lamia makes two Claw attacks. It can replace one attack with a use\
      \ of Corrupting Touch."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing damage\
      \ plus 7 (2d6) Psychic damage."
    "name": "Claw"
  - "desc": "Wisdom Saving Throw: DC 13, one creature the lamia can see within 5\
      \ feet. Failure: 13 (3d8) Psychic damage, and the target is cursed for 1 hour.\
      \ Until the curse ends, the target has the [[conditions#Charmed|Charmed]]\
      \ and [[conditions#Poisoned|Poisoned]] conditions."
    "name": "Corrupting Touch"
  - "desc": "The lamia casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt\
      \ will: [[disguise-self-xphb|Disguise Self]] (can\
      \ appear as a Large or Medium biped), [[minor-illusion-xphb|Minor Illusion]]\n\
      \n1/day each: [[geas-xphb|Geas]], [[major-image-xphb|Major Image]],\
      \ [[scrying-xphb|Scrying]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The lamia jumps up to 30 feet by spending 10 feet of movement."
    "name": "Leap"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/lamia-xmm.webp"
```
^statblock

## Environment

desert

## Player-Facing Summary

Lamia xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of lamia xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around lamia xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Prophecy Connection

Mentioned in The First Prophecy of Shadows


## 12_Research Specific Content

Contextual improvement based on 12_Research
