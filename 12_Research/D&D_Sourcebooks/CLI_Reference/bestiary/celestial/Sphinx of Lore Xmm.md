---
title: Sphinx of Lore Xmm
type: lore
tags:
- lore
created: '2025-01-15'
modified: '2025-01-15'
---

# Sphinx of Lore Xmm

---
title: Sphinx of Lore Xmm
aliases:
- Sphinx of Lore
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
- research
- ttrpg-cli/monster/cr/11
- status/in-progress
- ttrpg-cli/monster/environment/desert
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:06.058123+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-sphinx-of-lore-xmm-sphinx-of-lore-xmm.svg)

# [[sphinx of lore xmm|Sphinx of Lore]]
*Source: Monster Manual (2024) p. 293. Available in the SRD and the Free Rules (2024)*  

Sphinxes of lore each know a great secret and protect it all costs. This truth might take the form of an ancient text, a magical puzzle, or a path to another world. These sphinxes might gain reputations as sages or oracles, but they typically dwell far from civilization.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

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
"name": "Sphinx of Lore (XMM)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "170"
"hit_dice": "20d10 + 60"
"modifier": !!int "10"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
"speed": "40 ft., fly 60 ft."
"skillsaves":
  - "name": "[[skills#Arcana|Arcana]]"
    "desc": "+12"
  - "name": "[[skills#History|History]]"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+8"
  - "name": "[[skills#Religion|Religion]]"
"damage_resistances": "necrotic, radiant"
"damage_immunities": "psychic"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#frightened|frightened]]"
"senses": "truesight 120 ft., passive Perception 18"
"languages": "Celestial, Common"
"cr": "11"
"traits":
  - "desc": "No magic can observe the sphinx remotely or detect its thoughts without\
      \ its permission. Wisdom ([[skills#Insight|Insight]]) checks\
      \ made to ascertain its intentions or sincerity are made with [[disadvantage xphb|Disadvantage]]."
    "name": "Inscrutable"
  - "desc": "If the sphinx fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The sphinx makes three Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 5 ft. Hit: 14 (3d6 + 4) Slashing damage."
    "name": "Claw"
  - "desc": "Wisdom Saving Throw: DC 16, each enemy in a 300-foot [[emanation area of effect xphb|Emanation]]\
      \ originating from the sphinx. Failure: 35 (10d6) Psychic damage, and the\
      \ target has the [[conditions#Incapacitated|Incapacitated]]\
      \ condition until the start of the sphinx's next turn."
    "name": "Mind-Rending Roar (Recharge 5-6)"
  - "desc": "The sphinx casts one of the following spells, requiring no Material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 16):\n\n\
      At will: [[detect magic xphb|Detect Magic]], [[identify xphb|Identify]],\
      \ [[mage hand xphb|Mage Hand]], [[minor illusion xphb|Minor Illusion]],\
      \ [[prestidigitation xphb|Prestidigitation]]\n\n1/day\
      \ each: [[dispel magic xphb|Dispel Magic]], [[legend lore xphb|Legend\]]
      \ Lore]], [[locate object xphb|Locate Object]],\
      \ [[plane shift xphb|Plane Shift]], [[remove curse xphb|Remove Curse]],\
      \ [[tongues xphb|Tongues]]"
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
  - "desc": "- Distant Sight. While in its lair, the sphinx can cast [[clairvoyance xphb|Clairvoyance]],\
      \ requiring no spell components and using the same spellcasting ability as its\
      \ Spellcasting action. When cast this way, the spell's range is 1 mile.  \n\
      - Infusion of Knowledge. Whenever the sphinx or one of its allies takes\
      \ a [[actions#Study|Study]] action while within 1 mile of\
      \ the lair, it adds d6 to any ability check it makes for that action.  "
  - "desc": "If the sphinx dies or moves its lair elsewhere, these effects end immediately."
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/celestial/token/sphinx-of-lore-xmm.webp"
```
^statblock

## Environment

desert, planar, upper

## Player-Facing Summary

Sphinx of lore xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of sphinx of lore xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around sphinx of lore xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- A corpse reveals a conspiracy about a local noble
- Strange dreams suggest a portal

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
