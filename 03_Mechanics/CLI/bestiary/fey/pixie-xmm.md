---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1-4
  - ttrpg-cli/monster/environment/feywild
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/planar
  - ttrpg-cli/monster/size/tiny
  - ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Pixie
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-pixie-xmm-pixie-xmm.svg)

# [Pixie](3-Mechanics\CLI\bestiary\fey/pixie-xmm.md)
*Source: Monster Manual (2024) p. 244*  

Pixies spend their days frolicking and exploring and avoid direct conflict when they can.

## Pixies

*Friends of the Forest*

- **Habitat.** Forest, Planar (Feywild)  
- **Treasure.** Arcana  

Barely a foot tall, pixies resemble diminutive elves with gossamer wings. They invisibly observe those who enter their wooded homes, revealing themselves to those with friendly intentions. Those who are unfriendly become the targets of pixies' pranks.

```statblock
"name": "Pixie (XMM)"
"size": "Tiny"
"type": "fey"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "9"
"hit_dice": "6d4 - 6"
"modifier": !!int "5"
"stats":
  - !!int "2"
  - !!int "20"
  - !!int "8"
  - !!int "10"
  - !!int "14"
  - !!int "15"
"speed": "10 ft., fly 30 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+7"
"senses": "passive Perception 14"
"languages": "Sylvan"
"cr": "1/4"
"traits":
  - "desc": "The pixie has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee  or Ranged Attack Roll: +4, reach 5 ft. or range 60 ft. Hit:\
      \ 1 Radiant damage, and the target has the [Charmed](/03_Mechanics/CLI/conditions.md#Charmed)\
      \ or [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned) condition (pixie's\
      \ choice) until the start of the pixie's next turn."
    "name": "Faerie Dust"
  - "desc": "The pixie casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 12):\n\nAt\
      \ will: [Dancing Lights](/03_Mechanics/CLI/spells/dancing-lights-xphb.md),\
      \ [Druidcraft](/03_Mechanics/CLI/spells/druidcraft-xphb.md), [Invisibility](/03_Mechanics/CLI/spells/invisibility-xphb.md)\
      \ (self only)\n\n1/day each: [Detect Thoughts](/03_Mechanics/CLI/spells/detect-thoughts-xphb.md),\
      \ [Fly](/03_Mechanics/CLI/spells/fly-xphb.md), [Sleep](/03_Mechanics/CLI/spells/sleep-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fey/token/pixie-xmm.webp"
```
^statblock

## Environment

forest, planar, feywild

## Player-Facing Summary

Pixie xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of pixie xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around pixie xmm.

## Adventure Hooks

- A rumor ties pixie xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at pixie xmm to avert a public scandal.
- A map overlay reveals a hidden approach to pixie xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
