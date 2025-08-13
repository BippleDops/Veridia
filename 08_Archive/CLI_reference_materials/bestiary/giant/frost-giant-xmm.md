---
updated: '2025-08-13T01:18:32.513505+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: '#^statblock'
aliases:
- Frost Giant
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-frost-giant-xmm-frost-giant-xmm.svg)

# [Frost Giant](3-Mechanics\CLI\bestiary\giant/frost-giant-xmm.md)
*Source: Monster Manual (2024) p. 124. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Frost Giant

*Giant of the Ice and Snow*

- **Habitat.** Arctic, Mountain  
- **Treasure.** Armaments  

From glacial mountain heights and vast tundras rise the homes of frost giants. These giants have skin and hair of icy hues. Their natural immunity to cold allows them to flourish in places inhospitable to most other creatures. They use this resilience to aid them when hunting and in combat, bolstering their allies with chilling war cries.

Frost giants often travel far to find food and goods. This leads many to become raiders and earn violent reputations. Others live more peaceably by hunting titanic game or creating sanctuaries from the cold (frequently featuring hot springs or snowy contests). Frost giants sometimes forge partnerships with icy Fey or fire giants dwelling underground, serving as guardians to their realms in exchange for treasure, weapons, and crafts.

> [!quote] A quote from Jarl Grugnur, Frost Giant  
> 
> The small folk have barely anything worth looting, so they shouldn't much mind when we take it from them.


```statblock
"name": "Frost Giant (XMM)"
"size": "Huge"
"type": "giant"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "149"
"hit_dice": "13d12 + 65"
"modifier": !!int "2"
"stats":
  - !!int "23"
  - !!int "9"
  - !!int "21"
  - !!int "9"
  - !!int "10"
  - !!int "12"
"speed": "40 ft."
"saves":
  - "constitution": !!int "8"
  - "wisdom": !!int "3"
  - "charisma": !!int "4"
"skillsaves":
  - "name": "[Athletics](/03_Mechanics/CLI/skills.md#Athletics)"
    "desc": "+9"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
"damage_immunities": "cold"
"senses": "passive Perception 13"
"languages": "Giant"
"cr": "8"
"actions":
  - "desc": "The giant makes two attacks, using Frost Axe or Great Bow in any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9, reach 10 ft. Hit: 19 (2d12 + 6) Slashing damage\
      \ plus 9 (2d8) Cold damage."
    "name": "Frost Axe"
  - "desc": "Ranged Attack Roll: +9, range 150/600 ft. Hit: 17 (2d10 + 6) Piercing\
      \ damage plus 7 (2d6) Cold damage, and the target's [Speed](/03_Mechanics/CLI/variant-rules/speed-xphb.md)\
      \ decreases by 10 feet until the end of its next turn."
    "name": "Great Bow"
"bonus_actions":
  - "desc": "The giant or one creature of its choice that can see or hear it gains\
      \ 16 (2d10 + 5) [Temporary Hit Points](/03_Mechanics/CLI/variant-rules/temporary-hit-points-xphb.md)\
      \ and has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md) on attack\
      \ rolls until the start of the giant's next turn."
    "name": "War Cry (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/giant/token/frost-giant-xmm.webp"
```
^statblock

## Environment

arctic, mountain

## Player-Facing Summary

Frost giant xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of frost giant xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around frost giant xmm.

## Adventure Hooks

- A rumor ties frost giant xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at frost giant xmm to avert a public scandal.
- A map overlay reveals a hidden approach to frost giant xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
