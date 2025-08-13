---
updated: '2025-08-13T01:18:32.800451+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: '#^statblock'
aliases:
- Goristro
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-goristro-xmm-goristro-xmm.svg)

# [Goristro](3-Mechanics\CLI\bestiary\fiend/goristro-xmm.md)
*Source: Monster Manual (2024) p. 150*  

## Goristro

*Demon of Disaster*

- **Habitat.** Planar (Abyss)  
- **Treasure.** Armaments  

Terrifying in scale and overwhelming power, goristros are giant demons capable of bringing cities to ruin. These demons embody senseless anarchy and nihilistic destruction, and they take special offense at creatures or structures that rival them in size. Castles, towers, giants, and beasts of war are all common victims of these monsters' wrath.

Goristros resemble hunched, primeval minotaurs bearing the scars of Abyssal wars or wounds from mighty war machines. Their appearance reflects that of their creator, Baphomet, the demon lord worshiped by many evil minotaurs. Goristros stalk Baphomet's Abyssal realm, known as the Endless Maze, and pulp any non-demons they encounter in that massive, magical labyrinth.

> [!quote] A quote from Mellagorus the Pit Fiend  
> 
> Plot and strategize, bait and scheme, but hubris is no armor against ruin incarnate, and greater beings than you have fallen under the onslaught of the Abyss.


```statblock
"name": "Goristro (XMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "310"
"hit_dice": "23d12 + 161"
"modifier": !!int "6"
"stats":
  - !!int "25"
  - !!int "11"
  - !!int "25"
  - !!int "6"
  - !!int "13"
  - !!int "14"
"speed": "50 ft."
"saves":
  - "strength": !!int "13"
  - "dexterity": !!int "6"
  - "constitution": !!int "13"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Survival](/03_Mechanics/CLI/skills.md#Survival)"
    "desc": "+7"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Abyssal"
"cr": "17"
"traits":
  - "desc": "If the goristro dies outside the Abyss, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The goristro has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The goristro deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The goristro makes one Brutal Gore attack and two Slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +13, reach 10 ft. Hit: 40 (6d10 + 7) Piercing\
      \ damage. If the target is a Huge or smaller creature, it is pushed up to 20\
      \ feet straight away from the goristro and has the [Prone](/03_Mechanics/CLI/conditions.md#Prone)\
      \ condition."
    "name": "Brutal Gore"
  - "desc": "Melee Attack Roll: +13, reach 10 ft. Hit: 29 (4d10 + 7) Bludgeoning\
      \ damage."
    "name": "Slam"
"bonus_actions":
  - "desc": "The goristro moves up to half its [Speed](/03_Mechanics/CLI/variant-rules/speed-xphb.md)\
      \ straight toward an enemy it can see."
    "name": "Charge"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/goristro-xmm.webp"
```
^statblock

## Environment

planar, abyss

## Player-Facing Summary

Goristro xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of goristro xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around goristro xmm.

## Adventure Hooks

- A rumor ties goristro xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at goristro xmm to avert a public scandal.
- A map overlay reveals a hidden approach to goristro xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
