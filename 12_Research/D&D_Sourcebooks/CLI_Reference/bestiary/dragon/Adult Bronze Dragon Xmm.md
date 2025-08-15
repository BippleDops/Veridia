---
title: Adult Bronze Dragon Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Adult Bronze Dragon Xmm

---
title: Adult Bronze Dragon Xmm
aliases:
- Adult Bronze Dragon
type: monster
tags:
- ttrpg-cli/monster/environment/coastal
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/huge
- monster
- research
- world/both
- active
- ttrpg-cli/monster/type/dragon/metallic
- status/in-progress
- ttrpg-cli/monster/cr/15
created: 
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.992548+00:00'
world: Both
---

# [[Bronze Dragon Xmm]]
*Source: Monster Manual (2024) p. 59. Available in the SRD and the Free Rules (2024)*  

Adult bronze dragons often dwell near places they defend or where they help others work toward goals. They might become patrons of whole cities, advising leaders and helping generations flourish.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Bronze Dragons

*Dragons of Potential and Preservation*

- **Habitat.** Coastal  
- **Treasure.** Implements  

Where bronze dragons dwell, wonders flourish. Imaginative yet mindful, these metallic dragons work toward greatness and help others achieve all they can. They strive to preserve innovations, from the works of past civilizations to new discoveries, and they share such works widely. When dealing with shorter-lived beings, bronze dragons prefer to win them over through conversation and cultivation, but they don't shy from battle when villains keep others from achieving their potential.

Bronze dragons enjoy the power and endless possibilities of the sea, and they often make their lairs in places of natural beauty or communities they wish to preserve. Within their dwellings, bronze dragons hoard things they believe will be useful one day. They salvage treasure lost to the sea, reclaiming wealth or sunken ships.

### Bronze Dragon Lairs

Bronze dragons usually make their homes near or under the sea.

```statblock
"name": "Adult Bronze Dragon (XMM)"
"size": "Huge"
"type": "dragon"
"subtype": "metallic"
"alignment": "Lawful Good"
"ac": !!int "18"
"hp": !!int "212"
"hit_dice": "17d12 + 102"
"modifier": !!int "10"
"stats":
  - !!int "25"
  - !!int "10"
  - !!int "23"
  - !!int "16"
  - !!int "15"
  - !!int "20"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[[skills#Insight|Insight]]"
    "desc": "+7"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+12"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+5"
"damage_immunities": "lightning"
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
      \ use of (A) Repulsion Breath or (B) Spellcasting to cast [[Guiding Bolt Xphb]]\
      \ (level 2 version)."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +12, reach 10 ft. Hit: 16 (2d8 + 7) Slashing damage\
      \ plus 5 (d10) Lightning damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 19, each creature in a 90-foot-long, 5-foot-wide\
      \ [[Area of Effect Xphb]]. Failure:\
      \ 55 (10d10) Lightning damage. Success: Half damage."
    "name": "Lightning Breath (Recharge 5-6)"
  - "desc": "Strength Saving Throw: DC 19, each creature in a 30-foot [[Area of Effect Xphb]].\
      \ Failure: The target is pushed up to 60 feet straight away from the dragon\
      \ and has the [[conditions#prone|Prone]] condition."
    "name": "Repulsion Breath"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 17, +10 to hit\
      \ with spell attacks):\n\nAt will: [[detect-magic-xphb (spells)]],\
      \ [[Guiding Bolt Xphb]] (level 2 version),\
      \ [[Shapechange Xphb]] (Beast or Humanoid\
      \ form only, no [[temporary-hit-points-xphb (variant-rules)]]\
      \ gained from the spell, and no Concentration or [[temporary-hit-points-xphb (variant-rules)]]\
      \ required to maintain the spell), [[Speak With Animals Xphb]],\
      \ [[Thaumaturgy Xphb]]\n\n1/day each:\
      \ [[detect-thoughts-xphb (spells)]], [[Water Breathing Xphb]]
      \ Breathing]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [[Guiding Bolt Xphb]]\
    "name": "Guiding Light"
  - "desc": "The dragon moves up to half its [[Fly Speed Xphb]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
  - "desc": "Constitution Saving Throw: DC 17, each creature in a 20-foot-radius\
      \ [[Area of Effect Xphb]] centered\
      \ on a point the dragon can see within 90 feet. Failure: 10 (3d6) Thunder\
      \ damage, and the target has the [[conditions#Deafened|Deafened]]\
      \ condition until the end of its next turn."
    "name": "Thunderclap"
"regional_effects":
  - "desc": "The region containing an adult or ancient bronze dragon's lair is changed\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Buoying Currents. Creatures within 1 mile of the lair that lack\
      \ a [[swim-speed-xphb (variant-rules)]] ignore the\
      \ extra cost of movement while swimming.  \n- Sun and Storms. While in its\
      \ lair, the dragon can cast [[weather]],\
      \ requiring no Material components and using the same spellcasting ability as\
      \ its Spellcasting action. When casting the spell this way, the dragon can control\
      \ the weather within 1 mile of its lair, regardless if the dragon is inside\
      \ or outside.  "
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/adult-bronze-dragon-xmm.webp"
```
^statblock

## Environment

coastal

## Player-Facing Summary

Adult bronze dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of adult bronze dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around adult bronze dragon xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- An heirloom has gone missing and war looms
- An heirloom has gone missing and chaos spreads
- A merchant needs help finding before winter

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]

## 12_Research Specific Content

Contextual improvement based on 12_Research
