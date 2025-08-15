# ancient-blue-dragon-xmm

---
title: ancient blue dragon xmm
aliases:
- Ancient Blue Dragon
type: monster
tags:
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/cr/23
- monster
- ttrpg-cli/monster/type/dragon/chromatic
- research
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
updated: '2025-08-12T23:37:35.749479'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ancient-blue-dragon-xmm-ancient-blue-dragon-xmm.svg)

# [[ancient-blue-dragon-xmm|Ancient Blue Dragon]]
*Source: Monster Manual (2024) p. 50. Available in the SRD and the Free Rules (2024)*  

Ancient blue dragons think beyond dominating groups of short-lived servants. Instead, they seek to claim their places above other dragons and their world's most powerful inhabitants. If world domination seems too tedious or cliché, these dragons might seek to seize control of extraplanar realms, multi-world empires, or forces of reality—like life, storms, or time itself.


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


## Blue Dragons

*Dragons of Tyranny and Tempests*

- **Habitat.** Desert  
- **Treasure.** Relics  

Arrogant and imperious, blue dragons are chromatic dragons that crave control and collect followers like other dragons hoard treasure. They seek to transform their territories into empires, domains to be feared by nations.

Blue dragons have sharp features with piercing horns and scales that range from sapphire to the shades of stormy skies. They dwell in deserts and badlands, particularly regions with dramatic spires from whose tops they might see for miles. They seek lairs near sites of symbolic power, such as the abandoned fortresses of giants, the colossi of fallen empires, or monuments raised by their followers.

Regalia of rulership and artistic masterpieces fill blue dragons' hoards. These dragons have no interest in treasures that are common or flawed, preferring one-of-a-kind gemstones, the crowns of fallen royals, and magic items capable of spreading the dragons' influence.

### Blue Dragon Lairs

Blue dragons dwell in arid lands. Their lairs might be death traps meant to entomb invaders or ostentatious fortresses where they plot domination.

```statblock
"name": "Ancient Blue Dragon (XMM)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Lawful Evil"
"ac": !!int "22"
"hp": !!int "481"
"hit_dice": "26d20 + 208"
"modifier": !!int "14"
"stats":
  - !!int "29"
  - !!int "10"
  - !!int "27"
  - !!int "18"
  - !!int "17"
  - !!int "25"
"speed": "40 ft., burrow 40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "10"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+17"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+7"
"damage_immunities": "lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "23"
"traits":
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of Spellcasting to cast [[shatter-xphb|Shatter]]\
      \ (level 3 version)."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +16, reach 15 ft. Hit: 18 (2d8 + 9) Slashing damage\
      \ plus 11 (2d10) Lightning damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 23, each creature in a 120-foot-long, 10-foot-wide\
      \ [[line-area-of-effect-xphb|Line]]. Failure:\
      \ 88 (16d10) Lightning damage. Success: Half damage."
    "name": "Lightning Breath (Recharge 5-6)"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt\
      \ will: [[detect-magic-xphb|Detect Magic]], [[invisibility-xphb|Invisibility]],\
      \ [[mage-hand-xphb|Mage Hand]], [[shatter-xphb|Shatter]]\
      \ (level 3 version)\n\n1/day each: [[scrying-xphb|Scrying]],\
      \ [[sending-xphb|Sending]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [[invisibility-xphb|Invisibility]]\
      \ on itself, and it can fly up to half its [[fly-speed-xphb|Fly Speed]].\
      \ The dragon can't take this action again until the start of its next turn."
    "name": "Cloaked Flight"
  - "desc": "The dragon uses Spellcasting to cast [[shatter-xphb|Shatter]]\
      \ (level 3 version). The dragon can't take this action again until the start\
      \ of its next turn."
    "name": "Sonic Boom"
  - "desc": "The dragon makes one Rend attack."
    "name": "Tail Swipe"
"regional_effects":
  - "desc": "The region containing an adult or ancient blue dragon's lair is changed\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Sinkholes. Sinkholes form more frequently in the area within 1\
      \ mile of the lair. Whenever a creature in that area other than the dragon and\
      \ its allies finishes a [[long-rest-xphb|Long Rest]],\
      \ roll d20. On a 1, a sinkhole opens beneath the creature, and the creature\
      \ must succeed on a DC 15 Dexterity saving throw or fall 2d4 × 10 feet into\
      \ the sinkhole.  \n- Spiteful Storms. Dust devils and thunderstorms rage\
      \ within 1 mile of the lair. The area is [[lightly-obscured-xphb|Lightly Obscured]].\
      \  "
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/ancient-blue-dragon-xmm.webp"
```
^statblock

## Environment

coastal, desert

## Player-Facing Summary

Ancient blue dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ancient blue dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ancient blue dragon xmm.

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
