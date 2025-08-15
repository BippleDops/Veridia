# Sphinx of Valor Xmm

---
title: Sphinx of Valor Xmm
aliases:
- Sphinx of Valor
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/environment/upper
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/environment/planar
- world/both
- ttrpg-cli/monster/type/celestial
- active
- ttrpg-cli/monster/cr/17
- research
- status/in-progress
- ttrpg-cli/monster/environment/desert
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:06.055439+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-sphinx-of-valor-xmm-sphinx-of-valor-xmm.svg)

# [[sphinx-of-valor-xmm|Sphinx of Valor]]
*Source: Monster Manual (2024) p. 294. Available in the SRD and the Free Rules (2024)*  

Sphinxes of valor guard world-changing or dangerous secrets—evidence of weird truths, deadly Artifacts, and things that shouldn't exist. They inhabit hidden, magical sites and hold their duty above mortal life. If threatened, a sphinx of valor defends its charge with its supernaturally empowered roar and fierce strikes.


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


## Sphinxes

*Collectors and Keepers of Secrets*

- **Habitat.** Desert, Planar (Upper Planes)  
- **Treasure.** Arcana  

Sphinxes protect the secrets of the multiverse. Formed from the spirits of sages and explorers, sphinxes know the power of truth and the importance of preserving it. They share their wisdom only with those who prove themselves wise or overcome tests of worthiness, such as riddles or battles with dangerous beasts. Through their existences, sphinxes might change form as they gain more nuanced understanding of cosmic enigmas.

### Sphinx Lairs

Sphinxes typically dwell in places that hold great knowledge or prophetic magic.

> [!quote]  
> 
> Round she is, yet flat as a board
> Altar of the Lupine Lords
> Jewel on black velvet, pearl in the sea
> Unchanged but e'erchanging eternally

> [!note]
> Answer to the riddle of White Plume Mountain: The Moon.

```statblock
"name": "Sphinx of Valor (XMM)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "199"
"hit_dice": "19d10 + 95"
"modifier": !!int "12"
"stats":
  - !!int "22"
  - !!int "10"
  - !!int "20"
  - !!int "16"
  - !!int "23"
  - !!int "18"
"speed": "40 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "6"
  - "constitution": !!int "11"
  - "intelligence": !!int "9"
  - "wisdom": !!int "12"
"skillsaves":
  - "name": "[[skills#Arcana|Arcana]]"
    "desc": "+9"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+12"
  - "name": "[[skills#Religion|Religion]]"
    "desc": "+15"
"damage_resistances": "necrotic, radiant"
"damage_immunities": "psychic"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#frightened|frightened]]"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "Celestial, Common"
"cr": "17"
"traits":
  - "desc": "No magic can observe the sphinx remotely or detect its thoughts without\
      \ its permission. Wisdom ([[skills#Insight|Insight]]) checks\
      \ made to ascertain its intentions or sincerity are made with [[disadvantage-xphb|Disadvantage]]."
    "name": "Inscrutable"
  - "desc": "If the sphinx fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The sphinx makes two Claw attacks and uses Roar."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +12, reach 5 ft. Hit: 20 (4d6 + 6) Slashing damage."
    "name": "Claw"
  - "desc": "The sphinx emits a magical roar. Whenever it roars, the roar has a different\
      \ effect, as detailed below (the sequence resets when it takes a [[long-rest-xphb|Long Rest]]):\n\
      \n- First Roar. Wisdom Saving Throw: DC 20, each enemy in a 500-foot [[emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the sphinx. Failure: The target has the [[conditions#frightened|Frightened]]\
      \ condition for 1 minute.  \n- Second Roar. Wisdom Saving Throw: DC 20,\
      \ each enemy in a 500-foot [[emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the sphinx. Failure: The target has the [[conditions#Paralyzed|Paralyzed]]\
      \ condition, and it repeats the save at the end of each of its turns, ending\
      \ the effect on itself on a success. After 1 minute, it succeeds automatically.\
      \  \n- Third Roar. Constitution Saving Throw: DC 20, each enemy in a 500-foot\
      \ [[emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the sphinx. Failure: 44 (8d10) Thunder damage, and the\
      \ target has the [[conditions#prone|Prone]] condition. Success:\
      \ Half damage only.  "
    "name": "Roar (3/Day)"
  - "desc": "The sphinx casts one of the following spells, requiring no Material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 20):\n\nAt will:\
      \ [[detect-evil-and-good-xphb|Detect Evil and Good]],\
      \ [[thaumaturgy-xphb|Thaumaturgy]]\n\n1/day each:\
      \ [[detect-magic-xphb|Detect Magic]], [[dispel-magic-xphb|Dispel Magic]],\
      \ [[greater-restoration-xphb|Greater Restoration]],\
      \ [[heroes-feast-xphb|Heroes' Feast]], [[zone-of-truth-xphb|Zone of Truth]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The sphinx can teleport up to 30 feet to an unoccupied space it can see,\
      \ and it makes one Claw attack."
    "name": "Arcane Prowl"
  - "desc": "Constitution Saving Throw: DC 16, one creature the sphinx can see within\
      \ 120 feet. Failure: The target gains 1 [[conditions#Exhaustion|Exhaustion]]\
      \ level. While the target has any [[conditions#Exhaustion|Exhaustion]]\
      \ levels, it appears 3d10 years older. Failure or Success: The sphinx can't\
      \ take this action again until the start of its next turn."
    "name": "Weight of Years"
"regional_effects":
  - "desc": "The region containing a sphinx of lore's or sphinx of valor's lair is\
      \ altered by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Distant Sight. While in its lair, the sphinx can cast [[clairvoyance-xphb|Clairvoyance]],\
      \ requiring no spell components and using the same spellcasting ability as its\
      \ Spellcasting action. When cast this way, the spell's range is 1 mile.  \n\
      - Infusion of Knowledge. Whenever the sphinx or one of its allies takes\
      \ a [[actions#Study|Study]] action while within 1 mile of\
      \ the lair, it adds d6 to any ability check it makes for that action.  "
  - "desc": "If the sphinx dies or moves its lair elsewhere, these effects end immediately."
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/celestial/token/sphinx-of-valor-xmm.webp"
```
^statblock

## Environment

desert, planar, upper

## Player-Facing Summary

Sphinx of valor xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of sphinx of valor xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around sphinx of valor xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Plot Hooks

- Strange disappearances suggest ancient magic
- A noble needs help delivering before the festival
- Strange accidents suggest a conspiracy
- A corpse reveals ancient history about the cult

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]


## 12_Research Specific Content

Contextual improvement based on 12_Research
