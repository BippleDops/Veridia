---
aliases:
- Cloud Giant
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- active
- both
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
- world/both
type: monster
updated: '2025-08-13T12:34:19.550768+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-cloud-giant-xmm-cloud-giant-xmm.svg)

# [[3-Mechanics\CLI\bestiary\giant/cloud-giant-xmm|Cloud Giant]]
*Source: Monster Manual (2024) p. 74. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Cloud Giant

*Giant of the Loftiest Heights*

- **Habitat.** Mountain  
- **Treasure.** Arcana  

Cloud giants use the power of the skies to observe and subtly influence the world. These giants resemble humans with hair ranging from silver to blue and with skin in cloudlike shades from stark white to twilight hues. Curved canines grow in their upper jaws, extending past their lower lips. In battle, they attack with weapons wreathed in storm clouds and throw roaring thunderheads.

Most cloud giants inhabit citadels crowning tremendous mountains or magical palaces that drift amid the clouds. Many of these giants believe they possess similarly lofty status or purpose. Some view themselves as godlike beings who can manipulate and steal from terrestrial beings with impunity. Others claim their long lives and place among the clouds grant them unique perspectives, so they chronicle what they witness in the world below without interfering. In either case, cloud giants often possess fabulous magical treasures, either claimed from across the world or created by (and gigantically sized for) themselves.

```statblock
"name": "Cloud Giant (XMM)"
"size": "Huge"
"type": "giant"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"modifier": !!int "4"
"stats":
  - !!int "27"
  - !!int "10"
  - !!int "22"
  - !!int "12"
  - !!int "16"
  - !!int "16"
"speed": "40 ft., fly 20 ft. (hover)"
"saves":
  - "constitution": !!int "10"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Insight|Insight]]"
    "desc": "+7"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+11"
"senses": "passive Perception 21"
"languages": "Common, Giant"
"cr": "9"
"actions":
  - "desc": "The giant makes two attacks, using Thunderous Mace or Thundercloud in\
      \ any combination. It can replace one attack with a use of Spellcasting to cast\
      \ [[/03_Mechanics/CLI/spells/fog-cloud-xphb|Fog Cloud]]."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +12, reach 10 ft. Hit: 21 (3d8 + 8) Bludgeoning\
      \ damage plus 7 (2d6) Thunder damage."
    "name": "Thunderous Mace"
  - "desc": "Ranged Attack Roll: +12, range 240 ft. Hit: 18 (3d6 + 8) Thunder\
      \ damage, and the target has the [[/03_Mechanics/CLI/conditions#Incapacitated|Incapacitated]]\
      \ condition until the end of its next turn."
    "name": "Thundercloud"
  - "desc": "The giant casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 15):\n\nAt\
      \ will: [[/03_Mechanics/CLI/spells/detect-magic-xphb|Detect Magic]], [[/03_Mechanics/CLI/spells/fog-cloud-xphb|Fog\
      \ Cloud]], [[/03_Mechanics/CLI/spells/light-xphb|Light]]\n\
      \n1/day each: [[/03_Mechanics/CLI/spells/control-weather-xphb|Control Weather]],\
      \ [[/03_Mechanics/CLI/spells/gaseous-form-xphb|Gaseous Form]], [[/03_Mechanics/CLI/spells/telekinesis-xphb|Telekinesis]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The giant casts the [[/03_Mechanics/CLI/spells/misty-step-xphb|Misty Step]]\
      \ spell, using the same spellcasting ability as Spellcasting.\n"
    "name": "Misty Step"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/giant/token/cloud-giant-xmm.webp"
```
^statblock

## Environment

mountain

## Player-Facing Summary

Cloud giant xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of cloud giant xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around cloud giant xmm.

## Adventure Hooks

- A rumor ties cloud giant xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at cloud giant xmm to avert a public scandal.
- A map overlay reveals a hidden approach to cloud giant xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
