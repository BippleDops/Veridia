# Adult Copper Dragon Xmm

---
title: Adult Copper Dragon Xmm
aliases:
- Adult Copper Dragon
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/huge
- monster
- ttrpg-cli/monster/cr/14
- world/both
- research
- active
- ttrpg-cli/monster/type/dragon/metallic
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:06.015021+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-adult-copper-dragon-xmm-adult-copper-dragon-xmm.svg)

# [[adult-copper-dragon-xmm|Adult Copper Dragon]]
*Source: Monster Manual (2024) p. 79. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Adult copper dragons use their influence to better the world. With broad circles of friends, adult copper dragons delight in introducing people to one another and helping people find places where they can flourish. When disaster strikes, these dragons draw on their family of contacts to offer support, right wrongs, and rebuild stronger than before.

## Copper Dragons

*Dragons of Curiosity and Community*

- **Habitat.** Hill  
- **Treasure.** Arcana  

Relentlessly friendly and curious, most copper dragons view the world as a place of endless wonder and possibility. These gregarious dragons are fonts of patience, hospitality, and humor, and they seek to improve the lives—or, at least, the mood—of those they interact with. If forced to fight to defend themselves or their friends, these dragons favor using their slowing breath and physical attacks to subdue antagonists. Only in cases of extreme peril or emotion do they use their deadly acid breath.

Copper dragons typically live in caverns amid picturesque hills and rock formations—particularly those that are prominent landmarks. These dragons collect gifts, though they have little interest in treasure without meaning, no matter how valuable it is. To them, thoughtfully given presents and the feelings or memories they symbolize are more important than masterpieces or magical relics.

### Copper Dragon Lairs

Copper dragons typically inhabit multi-chamber caves and renovated ruins.

```statblock
"name": "Adult Copper Dragon (XMM)"
"size": "Huge"
"type": "dragon"
"subtype": "metallic"
"alignment": "Chaotic Good"
"ac": !!int "18"
"hp": !!int "184"
"hit_dice": "16d12 + 80"
"modifier": !!int "11"
"stats":
  - !!int "23"
  - !!int "12"
  - !!int "21"
  - !!int "18"
  - !!int "15"
  - !!int "18"
"speed": "40 ft., climb 40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+9"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+12"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+6"
"damage_immunities": "acid"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "14"
"traits":
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of (A) Slowing Breath or (B) Spellcasting to cast [[mind-spike-xphb|Mind Spike]]\
      \ (level 4 version)."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +11, reach 10 ft. Hit: 17 (2d10 + 6) Slashing\
      \ damage plus 4 (d8) Acid damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 18, each creature in an 60-foot-long, 5-foot-wide\
      \ [[line-area-of-effect-xphb|Line]]. Failure:\
      \ 54 (12d8) Acid damage. Success: Half damage."
    "name": "Acid Breath (Recharge 5-6)"
  - "desc": "Constitution Saving Throw: DC 18, each creature in a 60-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: The target can't take Reactions; its [[speed-xphb|Speed]]\
      \ is halved; and it can take either an action or a [[bonus-action-xphb|Bonus Action]]\
      \ on its turn, not both. This effect lasts until the end of its next turn."
    "name": "Slowing Breath"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt\
      \ will: [[detect-magic-xphb|Detect Magic]], [[mind-spike-xphb|Mind\
      \ Spike]] (level 4 version), [[minor-illusion-xphb|Minor\
      \ Illusion]], [[shapechange-xphb|Shapechange]]\
      \ (Beast or Humanoid form only, no [[temporary-hit-points-xphb|Temporary Hit Points]]\
      \ gained from the spell, and no Concentration or [[temporary-hit-points-xphb|Temporary Hit Points]]\
      \ required to maintain the spell)\n\n1/day each: [[greater-restoration-xphb|Greater Restoration]],\
      \ [[major-image-xphb|Major Image]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "Charisma Saving Throw: DC 17, one creature the dragon can see within\
      \ 90 feet. Failure: 24 (7d6) Psychic damage. Until the end of its next turn,\
      \ the target rolls d6 whenever it makes an ability check or attack roll and\
      \ subtracts the number rolled from the [[d20-test-xphb|D20 Test]].\
      \ Failure or Success: The dragon can't take this action again until the start\
      \ of its next turn."
    "name": "Giggling Magic"
  - "desc": "The dragon uses Spellcasting to cast [[mind-spike-xphb|Mind Spike]]\
      \ (level 4 version). The dragon can't take this action again until the start\
      \ of its next turn."
    "name": "Mind Jolt"
  - "desc": "The dragon moves up to half its [[speed-xphb|Speed]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
"regional_effects":
  - "desc": "The region containing an adult or ancient copper dragon's lair is changed\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Chatty Critters. Tiny Beasts magically gain the ability to speak\
      \ and understand Draconic while within 6 miles of the lair.  \n- Giggle Fits.\
      \ Whenever a creature other than the dragon and its allies is within 1 mile\
      \ of the lair and rolls a 1 on a [[d20-test-xphb|D20 Test]],\
      \ it must succeed on a DC 15 Wisdom saving throw or have the [[conditions#Incapacitated|Incapacitated]]\
      \ condition until the end of its next turn, as it is wracked with laughter.\
      \  "
    "name": ""
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/adult-copper-dragon-xmm.webp"
```
^statblock

## Environment

hill

## Player-Facing Summary

Adult copper dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of adult copper dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around adult copper dragon xmm.

## Adventure Hooks

- A rumor ties adult copper dragon xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at adult copper dragon xmm to avert a public scandal.
- A map overlay reveals a hidden approach to adult copper dragon xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
