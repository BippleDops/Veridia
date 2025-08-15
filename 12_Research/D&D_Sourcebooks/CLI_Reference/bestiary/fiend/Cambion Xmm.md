---
title: Cambion Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Cambion Xmm

---
title: Cambion Xmm
aliases:
- Cambion
type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/fiend
- monster
- ttrpg-cli/monster/cr/5
- world/both
- research
- ttrpg-cli/monster/environment/any
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.842371+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-cambion-xmm-cambion-xmm.svg)

# [[Cambion Xmm]]
*Source: Monster Manual (2024) p. 65*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Cambion

*Mortal Infused with Fiendish Might*

- **Habitat.** Any  
- **Treasure.** Relics  

Cambions are former mortals corrupted by fiendish power or possessed by insidious forces. While tieflings are free-willed individuals with a hint of fiendish ancestry, cambions are inherently tied to or remade by the wicked magic of the Lower Planes.

Many cambions serve the malevolent forces that are the source of their powers. Others seek to claim the might of whatever created them or to seize otherworldly powers of their own. Among the most notorious of such cambions is Iuz, a villain who became an evil demigod and whose villainous nation threatens the Free City of Greyhawk on Oerth.

Cambions come into being in disparate ways. Roll on or choose a result from the Cambion Origins table to determine the source of a cambion's fiendish might.

> [!quote] A quote from Iuz the Evil, Cambion Demigod  
> 
> It seems that I must do everything myself, since I have only fools for servants. Clearly disappointment must ever be the price of divinity.

**Cambion Origins**

`dice: [](cambion-xmm.md#^cambion-origins)`

| dice: 1d6 | The Cambion Gained Its Power After... |
|-----------|---------------------------------------|
| 1 | Being possessed by a fiendish being. |
| 2 | Being resurrected by an evil magic-user. |
| 3 | Lengthy exposure to a Lower Plane. |
| 4 | Making a bargain with a Fiend. |
| 5 | Suffering a god's curse. |
| 6 | Taking part in fiendish rituals. |
^cambion-origins

```statblock
"name": "Cambion (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "16"
  - !!int "14"
  - !!int "12"
"speed": "30 ft., fly 60 ft."
"saves":
  - "strength": !!int "7"
  - "constitution": !!int "6"
  - "intelligence": !!int "5"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+6"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+7"
"damage_resistances": "cold, fire, lightning, poison"
"condition_immunities": "[[conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Abyssal, Common, Infernal"
"cr": "5"
"actions":
  - "desc": "The cambion makes two attacks, using Claw or Fire Ray in any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 8 (1d8 + 4) Slashing damage\
      \ plus 7 (2d6) Fire damage."
    "name": "Claw"
  - "desc": "Ranged Attack Roll: +7, range 120 ft. Hit: 13 (3d6 + 3) Fire damage."
    "name": "Fire Ray"
  - "desc": "The cambion casts one of the following spells, requiring no Material\
      \ components and using Charisma as the spellcasting ability (spell save DC 14):\n\
      \n2/day each: [[alter-self-xphb (spells)]],\
      \ [[command-xphb (spells)]] (level 3 version), [[detect-magic-xphb (spells)]]
      \ Magic]]\n\n1/day each: [[Dominate Person Xphb]]
      \ Person]] (level 8 version),\
      \ [[plane-shift-xphb (spells)]] (self only)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/cambion-xmm.webp"
```
^statblock

## Environment

any

## Player-Facing Summary

Cambion xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of cambion xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around cambion xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Secret Connections

*[Hidden from players]* Connected to The Veiled Alliance - Manipulate succession

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research

## References

- [[cambion-xmm (fiend)]]
- [[Iron Flask Xdmg]]
- [[iron-flask-xdmg (items)]]
- [[Monsters by Habitat Any Habitat Monsters Xmm]]
- [[Urban Encounters Levels 1116 Xge]]
- [[Urban Encounters Levels 14 Xge]]
- [[Urban Encounters Levels 1720 Xge]]
- [[Urban Encounters Levels 510 Xge]]
- [[monsters-by-habitat-any-habitat-monsters-xmm (tables)]]
- [[urban-encounters-levels-1116-xge (tables)]]
- [[urban-encounters-levels-14-xge (tables)]]
- [[urban-encounters-levels-1720-xge (tables)]]
- [[urban-encounters-levels-510-xge (tables)]]
