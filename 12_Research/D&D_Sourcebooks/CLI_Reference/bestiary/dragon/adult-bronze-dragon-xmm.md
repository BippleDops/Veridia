---
aliases:
- Adult Bronze Dragon
created: null
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon/metallic
- world/both
type: monster
updated: '2025-08-12T23:37:35.775040'
world: Both
---

# [[adult-bronze-dragon-xmm|Adult Bronze Dragon]]
*Source: Monster Manual (2024) p. 59. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Adult bronze dragons often dwell near places they defend or where they help others work toward goals. They might become patrons of whole cities, advising leaders and helping generations flourish.

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
      \ use of (A) Repulsion Breath or (B) Spellcasting to cast [[guiding-bolt-xphb|Guiding Bolt]]\
      \ (level 2 version)."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +12, reach 10 ft. Hit: 16 (2d8 + 7) Slashing damage\
      \ plus 5 (d10) Lightning damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 19, each creature in a 90-foot-long, 5-foot-wide\
      \ [[line-area-of-effect-xphb|Line]]. Failure:\
      \ 55 (10d10) Lightning damage. Success: Half damage."
    "name": "Lightning Breath (Recharge 5-6)"
  - "desc": "Strength Saving Throw: DC 19, each creature in a 30-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: The target is pushed up to 60 feet straight away from the dragon\
      \ and has the [[conditions#Prone|Prone]] condition."
    "name": "Repulsion Breath"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 17, +10 to hit\
      \ with spell attacks):\n\nAt will: [[detect-magic-xphb|Detect Magic]],\
      \ [[guiding-bolt-xphb|Guiding Bolt]] (level 2 version),\
      \ [[shapechange-xphb|Shapechange]] (Beast or Humanoid\
      \ form only, no [[temporary-hit-points-xphb|Temporary Hit Points]]\
      \ gained from the spell, and no Concentration or [[temporary-hit-points-xphb|Temporary Hit Points]]\
      \ required to maintain the spell), [[speak-with-animals-xphb|Speak with Animals]],\
      \ [[thaumaturgy-xphb|Thaumaturgy]]\n\n1/day each:\
      \ [[detect-thoughts-xphb|Detect Thoughts]], [[water-breathing-xphb|Water\
      \ Breathing]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [[guiding-bolt-xphb|Guiding Bolt]]\
      \ (level 2 version)."
    "name": "Guiding Light"
  - "desc": "The dragon moves up to half its [[speed-xphb|Speed]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
  - "desc": "Constitution Saving Throw: DC 17, each creature in a 20-foot-radius\
      \ [[sphere-area-of-effect-xphb|Sphere]] centered\
      \ on a point the dragon can see within 90 feet. Failure: 10 (3d6) Thunder\
      \ damage, and the target has the [[conditions#Deafened|Deafened]]\
      \ condition until the end of its next turn."
    "name": "Thunderclap"
"regional_effects":
  - "desc": "The region containing an adult or ancient bronze dragon's lair is changed\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Buoying Currents. Creatures within 1 mile of the lair that lack\
      \ a [[swim-speed-xphb|Swim Speed]] ignore the\
      \ extra cost of movement while swimming.  \n- Sun and Storms. While in its\
      \ lair, the dragon can cast [[control-weather-xphb|Control Weather]],\
      \ requiring no Material components and using the same spellcasting ability as\
      \ its Spellcasting action. When casting the spell this way, the dragon can control\
      \ the weather within 1 mile of its lair, regardless if the dragon is inside\
      \ or outside.  "
    "name": ""
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
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

## Adventure Hooks

- A rumor ties adult bronze dragon xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at adult bronze dragon xmm to avert a public scandal.
- A map overlay reveals a hidden approach to adult bronze dragon xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
