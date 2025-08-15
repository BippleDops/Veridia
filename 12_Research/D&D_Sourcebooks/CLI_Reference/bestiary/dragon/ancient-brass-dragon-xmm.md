# ancient-brass-dragon-xmm

---
title: ancient brass dragon xmm
aliases:
- Ancient Brass Dragon
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/gargantuan
- monster
- research
- world/both
- active
- ttrpg-cli/monster/type/dragon/metallic
- status/in-progress
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/environment/desert
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.743948'
world: Both
---

> [!figure] Creature
![[04_Resources/Assets/Creatures/creature-creature-ancient-brass-dragon-xmm-ancient-brass-dragon-xmm.png]]

# [[ancient-brass-dragon-xmm|Ancient Brass Dragon]]
*Source: Monster Manual (2024) p. 56. Available in the SRD and the Free Rules (2024)*  

Ancient brass dragons create worlds-spanning networks. They combat forces of repression and misinformation, helping people learn from the mistakes of the past. Either personally or through webs of messengers, ancient brass dragons keep allies informed about challenges they can face together.


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


## Brass Dragons

*Dragons of Lore and Rapport*

- **Habitat.** Desert  
- **Treasure.** Arcana  

Gregarious and outgoing, brass dragons relish sharing knowledge and stories. Although these metallic dragons favor arid lands, they cheerfully journey considerable distances to visit friendly creatures, pass on what they've learned, and collect news. Though good natured, brass dragons don't shirk from combat when necessary, thwarting foes with magical sleep and searing them with flame.

Brass dragons favor warm climes, particularly steppes and rocky or sandy deserts, and they usually dwell near prominent crossroads or oases that regularly draw visitors. They enjoy adopting Humanoid forms, disguising themselves as traveling merchants, scholars, storytellers, or anyone else invested in others' stories.

Brass dragons collect eclectic objects. While such items might seem like knickknacks, each is part of a story—perhaps a nostalgic memento or evidence of a tale passed into myth. An old friend's hat and the crown of the last ruler of a forgotten dynasty could occupy the same shelf in a brass dragon's hoard.

### Brass Dragon Lairs

Brass dragons usually dwell in secret caves and canyons near well-traveled routes.

```statblock
"name": "Ancient Brass Dragon (XMM)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "metallic"
"alignment": "Chaotic Good"
"ac": !!int "20"
"hp": !!int "332"
"hit_dice": "19d20 + 133"
"modifier": !!int "12"
"stats":
  - !!int "27"
  - !!int "10"
  - !!int "25"
  - !!int "16"
  - !!int "15"
  - !!int "22"
"speed": "40 ft., burrow 40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "8"
"skillsaves":
  - "name": "[[skills#History|History]]"
    "desc": "+9"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+14"
  - "name": "[[skills#Persuasion|Persuasion]]"
    "desc": "+12"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+6"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "20"
"traits":
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of (A) Sleep Breath or (B) Spellcasting to cast [[scorching-ray-xphb|Scorching Ray]]\
      \ (level 3 version)."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +14, reach 15 ft. Hit: 19 (2d10 + 8) Slashing\
      \ damage plus 7 (2d6) Fire damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 21, each creature in a 90-foot-long, 5-foot-wide\
      \ [[line-area-of-effect-xphb|Line]]. Failure:\
      \ 58 (13d8) Fire damage. Success: Half damage."
    "name": "Fire Breath (Recharge 5-6)"
  - "desc": "Constitution Saving Throw: DC 21, each creature in a 90-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: The target has the [[conditions#Incapacitated|Incapacitated]]\
      \ condition until the end of its next turn, at which point it repeats the save.\
      \ 2nd Failure: The target has the [[conditions#Unconscious|Unconscious]]\
      \ condition for 10 minutes. This effect ends for the target if it takes damage\
      \ or a creature within 5 feet of it takes an action to wake it."
    "name": "Sleep Breath"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 20):\n\nAt\
      \ will: [[detect-magic-xphb|Detect Magic]], [[minor-illusion-xphb|Minor\]]
      \ Illusion]], [[scorching-ray-xphb|Scorching Ray]]\
      \ (level 3 version), [[shapechange-xphb|Shapechange]]\
      \ (Beast or Humanoid form only, no [[temporary-hit-points-xphb|Temporary Hit Points]]\
      \ gained from the spell, and no Concentration or [[temporary-hit-points-xphb|Temporary Hit Points]]\
      \ required to maintain the spell), [[speak-with-animals-xphb|Speak with Animals]]\n\
      \n1/day each: [[control-weather-xphb|Control Weather]],\
      \ [[detect-thoughts-xphb|Detect Thoughts]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [[scorching-ray-xphb|Scorching Ray]]\
    "name": "Blazing Light"
  - "desc": "The dragon moves up to half its [[speed-xphb|Speed]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
  - "desc": "Dexterity Saving Throw: DC 20, one creature the dragon can see within\
      \ 120 feet. Failure: 36 (8d8) Fire damage, and the target's [[speed-xphb|Speed]]\
      \ is halved until the end of its next turn. Failure or Success: The dragon\
      \ can't take this action again until the start of its next turn."
    "name": "Scorching Sands"
"regional_effects":
  - "desc": "The area containing an adult or ancient brass dragon's lair is altered\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Mirages. While in its lair, the dragon can cast [[major-image-xphb|Major Image]],\
      \ requiring no Material components and using the same spellcasting ability as\
      \ its Spellcasting action. When casting the spell this way, the spell's range\
      \ is 1 mile, and the dragon doesn't need to see the spot where the illusion\
      \ appears.  \n- Refreshing Water. Water within 1 mile of the lair is magically\
      \ refreshing. A creature that drinks such water gains 2d4 [[temporary-hit-points-xphb|Temporary Hit Points]],\
      \ and the dragon is immediately aware of the creature's presence.  "
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/ancient-brass-dragon-xmm.webp"
```
^statblock

## Environment

desert

## Player-Facing Summary

Ancient brass dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ancient brass dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ancient brass dragon xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Secret Connections

*[Hidden from players]* Connected to The Hidden Alliance - Achieve immortality


## 12_Research Specific Content

Contextual improvement based on 12_Research


## 12_Research Specific Content

Contextual improvement based on 12_Research
