---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/7
  - ttrpg-cli/monster/environment/feywild
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/grassland
  - ttrpg-cli/monster/environment/planar
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Centaur Warden
---
# [Centaur Warden](3-Mechanics\CLI\bestiary\fey/centaur-warden-xmm.md)
*Source: Monster Manual (2024) p. 67*  

Centaur wardens often lead groups of centaur troopers and act as intermediaries between Fey creatures and trespassers into their territories.

## Centaurs

*Defenders of the Feywild*

- **Habitat.** Forest, Grassland, Planar (Feywild)  
- **Treasure.** Armaments, Individual  

Centaurs are defenders of forests, plains, and sites of primeval power. With upper bodies like humans' and the lower bodies of horses, centaurs charge into battle against those who would harm their allies.

```statblock
"name": "Centaur Warden (XMM)"
"size": "Large"
"type": "fey"
"alignment": "Neutral Good"
"ac": !!int "16"
"hp": !!int "105"
"hit_dice": "14d10 + 28"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "9"
  - !!int "18"
  - !!int "11"
"speed": "50 ft."
"saves":
  - "constitution": !!int "5"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Athletics](/03_Mechanics/CLI/skills.md#Athletics)"
    "desc": "+7"
  - "name": "[Nature](/03_Mechanics/CLI/skills.md#Nature)"
    "desc": "+5"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+7"
"senses": "passive Perception 17"
"languages": "Druidic, Elvish, Sylvan"
"cr": "7"
"actions":
  - "desc": "The centaur makes two attacks, using Forest Staff or Sun Ray in any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Bludgeoning\
      \ damage plus 14 (4d6) Poison damage."
    "name": "Forest Staff"
  - "desc": "Ranged Attack Roll: +7, range 90 ft. Hit: 14 (3d6 + 4) Radiant damage,\
      \ and the target has the [Blinded](/03_Mechanics/CLI/conditions.md#Blinded) condition\
      \ until the start of the centaur's next turn."
    "name": "Sun Ray"
  - "desc": "The centaur casts one of the following spells, using Wisdom as the spellcasting\
      \ ability (spell save DC 15):\n\nAt will: [Druidcraft](/03_Mechanics/CLI/spells/druidcraft-xphb.md),\
      \ [Speak with Animals](/03_Mechanics/CLI/spells/speak-with-animals-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The centaur moves up to its [Speed](/03_Mechanics/CLI/variant-rules/speed-xphb.md)\
      \ without provoking [Opportunity Attacks](/03_Mechanics/CLI/actions.md#Opportunity%20Attack).\
      \ Each creature within 5 feet of the centaur as it moves is targeted once by\
      \ the following effect. Strength Saving Throw: DC 15. Failure: 11 (2d6 +\
      \ 4) Bludgeoning damage, and the target has the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ condition until the end of its next turn."
    "name": "Entangling Trail (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fey/token/centaur-warden-xmm.webp"
```
^statblock

## Environment

forest, grassland, planar, feywild

## Player-Facing Summary

Centaur warden xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of centaur warden xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around centaur warden xmm.

## Adventure Hooks

- A rumor ties centaur warden xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at centaur warden xmm to avert a public scandal.
- A map overlay reveals a hidden approach to centaur warden xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
