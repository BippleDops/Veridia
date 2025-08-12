---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/5
  - ttrpg-cli/monster/environment/any
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Half-Dragon
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-half-dragon-xmm-half-dragon-xmm.svg)

# [Half-Dragon](3-Mechanics\CLI\bestiary\dragon/half-dragon-xmm.md)
*Source: Monster Manual (2024) p. 163. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Half-Dragon

*Warrior Created by Dragons*

- **Habitat.** Any  
- **Treasure.** Armaments  

Born through magical rites involving the essences of dragons, half-dragons serve their creators and their own draconic whims. Most half-dragons are created by chromatic dragons who desire servants with some trace of their own might and grandeur. Half-dragons frequently command other servants of a villainous dragon or act as agents in lands where their draconic master would attract unwanted attention.

Half-dragons share personality traits and agendas with the dragon who spawned them. Those resembling chromatic dragons typically loathe their creator even as they seek the same ends. Half-dragons with the traits of metallic dragons are especially rare, but they might arise through magical accidents, the efforts of reckless magic-users, or the last act of a dying dragon.

> [!quote] A quote from Wyrmlord Azarr Kul, Half–Dragon  
> 
> What blessing demands more yet inspires greater works than the blood of Tiamat?


```statblock
"name": "Half-Dragon (XMM)"
"size": "Medium"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"modifier": !!int "5"
"stats":
  - !!int "19"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "15"
  - !!int "14"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Athletics](/03_Mechanics/CLI/skills.md#Athletics)"
    "desc": "+7"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "Damage type chosen for the Draconic Origin trait below"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 15"
"languages": "Common, Draconic"
"cr": "5"
"traits":
  - "desc": "The half-dragon is related to a type of dragon associated with one of\
      \ the following damage types (DM's choice): Acid, Cold, Fire, Lightning, or\
      \ Poison. This choice affects other aspects of the stat block."
    "name": "Draconic Origin"
"actions":
  - "desc": "The half-dragon makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 10 ft. Hit: 6 (1d4 + 4) Slashing damage\
      \ plus 7 (2d6) damage of the type chosen for the Draconic Origin trait."
    "name": "Claw"
  - "desc": "Dexterity Saving Throw: DC 14, each creature in a 30-foot [Cone](/03_Mechanics/CLI/variant-rules/cone-area-of-effect-xphb.md).\
      \ Failure: 28 (8d6) damage of the type chosen for the Draconic Origin trait.\
      \ Success: Half damage."
    "name": "Dragon's Breath (Recharge 5-6)"
"bonus_actions":
  - "desc": "The half-dragon jumps up to 30 feet by spending 10 feet of movement."
    "name": "Leap"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/half-dragon-xmm.webp"
```
^statblock

## Environment

any

## Player-Facing Summary

Half dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of half dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around half dragon xmm.

## Adventure Hooks

- A rumor ties half dragon xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at half dragon xmm to avert a public scandal.
- A map overlay reveals a hidden approach to half dragon xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
