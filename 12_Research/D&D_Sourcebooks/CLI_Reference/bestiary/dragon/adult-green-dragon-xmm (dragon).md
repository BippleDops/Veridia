---
title: adult-green-dragon-xmm (dragon)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# adult-green-dragon-xmm

---
title: adult green dragon xmm
aliases:
- Adult Green Dragon
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/huge
- monster
- ttrpg-cli/monster/type/dragon/chromatic
- research
- world/both
- active
- ttrpg-cli/monster/environment/forest
- status/in-progress
- ttrpg-cli/monster/cr/15
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.755917'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-adult-green-dragon-xmm-adult-green-dragon-xmm.svg)

# [[Green Dragon Xmm]]
*Source: Monster Manual (2024) p. 153. Available in the SRD and the Free Rules (2024)*  

The words of adult green dragons are as deadly as their poisonous breath. They are brilliant schemers that pride themselves on influencing communities near their lairs. They obsess over information and create vast spy networks. Many of these dragons seek magical methods of surveillance or domination, and they manipulate adventurers into hunting down lost magic to aid in such control.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Green Dragons

*Dragons of Deceit and Derision*

- **Habitat.** Forest  
- **Treasure.** Arcana  

From forbidden forest depths, green dragons whisper evils into the world and manipulate the lives of those who listen. Elusive, conniving, and egotistical, these chromatic dragons patiently prey on the fears of shorter-lived beings, corrupting and isolating them. Green dragons might lurk amid labyrinthine wildernesses for centuries without revealing themselves; even their most devoted followers might know them only as the voice of the woodlands or a whisper in their dreams.

Despite their might, most green dragons disdain physical violence, viewing combat as servants' work and preferring to trick foes into dangerous or exploitative scenarios. These dragons collect "baubles" that embody their webs of manipulation and serve as tools of extortion, such as compromising documents, family heirlooms, and sentimental treasures.

### Green Dragon Lairs

Green dragons lair in ancient forests, often shaping stands of massive trees into compounds of interwoven branches, hollow trunks, and caverns amid mighty roots. They might also dwell amid forested ruins, particularly the former homes of those they've conquered.

```statblock
"name": "Adult Green Dragon (XMM)"
"size": "Huge"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "207"
"hit_dice": "18d12 + 90"
"modifier": !!int "11"
"stats":
  - !!int "23"
  - !!int "12"
  - !!int "21"
  - !!int "18"
  - !!int "15"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+9"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+12"
  - "name": "[[skills#Persuasion|Persuasion]]"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+6"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Poisoned|poisoned]]"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "15"
"traits":
  - "desc": "The dragon can breathe air and water."
    "name": "Amphibious"
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of Spellcasting to cast [[Pike Xphb]]\
      \ (level 3 version)."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +11, reach 10 ft. Hit: 15 (2d8 + 6) Slashing damage\
      \ plus 7 (2d6) Poison damage."
    "name": "Rend"
  - "desc": "Constitution Saving Throw: DC 18, each creature in a 60-foot [[Area of Effect Xphb]].\
      \ Failure: 56 (16d6) Poison damage. Success: Half damage."
    "name": "Poison Breath (Recharge 5-6)"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt\
      \ will: [[detect-magic-xphb (spells)]], [[Pike Xphb]]
      \ Spike]] (level 3 version)\n\n1/day:\
      \ [[geas-xphb (spells)]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [[Pike Xphb]]\
    "name": "Mind Invasion"
  - "desc": "Constitution Saving Throw: DC 17, each creature in a 20-foot-radius\
      \ [[Area of Effect Xphb]] centered\
      \ on a point the dragon can see within 90 feet. Failure: 7 (2d6) Poison damage,\
      \ and the target takes a -2 penalty to AC until the end of its next turn. Failure\
      \ or Success: The dragon can't take this action again until the start of its\
      \ next turn."
    "name": "Noxious Miasma"
  - "desc": "The dragon moves up to half its [[Fly Speed Xphb]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
"regional_effects":
  - "desc": "The region containing an adult or ancient green dragon's lair is warped\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Beast Spies. Tiny Beasts magically gain the ability to understand\
      \ Draconic and can communicate telepathically with the dragon while within 1\
      \ mile of the lair.  \n- Poisonous Thicket. Ordinary plants growing within\
      \ 1 mile of the lair poison the air around them. Whenever a creature other than\
      \ the dragon or its allies finishes a [[long-rest-xphb]]\
      \ in that area, it must succeed on a DC 15 Constitution saving throw or have\
      \ the [[conditions#Poisoned|Poisoned]] condition for 1 hour.\
      \  "
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/adult-green-dragon-xmm.webp"
```
^statblock

## Environment

forest

## Player-Facing Summary

Adult green dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of adult green dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around adult green dragon xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- A stranger needs help delivering before the new moon
- Strange sightings suggest a conspiracy
- Someone is blackmailing an heir for money
- An heirloom has gone missing and war looms

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]
