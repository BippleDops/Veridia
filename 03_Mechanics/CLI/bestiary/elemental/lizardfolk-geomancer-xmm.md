---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/2
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/swamp
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Lizardfolk Geomancer
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-lizardfolk-geomancer-xmm-lizardfolk-geomancer-xmm.svg)

# [Lizardfolk Geomancer](3-Mechanics\CLI\bestiary\elemental/lizardfolk-geomancer-xmm.md)
*Source: Monster Manual (2024) p. 197*  

Lizardfolk geomancers draw magic from the natural world, using it to protect their people and territories.

## Lizardfolk

*Reptilian Defenders of the Land*

- **Habitat.** Forest, Swamp  
- **Treasure.** Individual  

Lizardfolk dwell in wildernesses suffused with primal magic. While many lizardfolk are Humanoids with varied skills, some forge powerful bonds with the Elemental Plane of Earth, granting them magical connections to the cycle of growth and rebirth.

```statblock
"name": "Lizardfolk Geomancer (XMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "0"
"stats":
  - !!int "15"
  - !!int "10"
  - !!int "13"
  - !!int "10"
  - !!int "15"
  - !!int "8"
"speed": "30 ft., burrow 20 ft., swim 30 ft."
"skillsaves":
  - "name": "[Nature](/03_Mechanics/CLI/skills.md#Nature)"
    "desc": "+2"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": "Draconic, Primordial (Terran)"
"cr": "2"
"actions":
  - "desc": "The lizardfolk makes two Earth Burst attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Attack Roll: +4, reach 5 ft. or range 60 ft. Hit:\
      \ 9 (2d6 + 2) Bludgeoning damage."
    "name": "Earth Burst"
  - "desc": "Constitution Saving Throw: DC 12, each creature in a 20-foot-radius,\
      \ 40-foot-high [Cylinder](/03_Mechanics/CLI/variant-rules/cylinder-area-of-effect-xphb.md)\
      \ centered on a point the lizardfolk can see within 60 feet. Failure: 15 (6d4)\
      \ Bludgeoning damage, and the target has the [Prone](/03_Mechanics/CLI/conditions.md#Prone)\
      \ condition. Success: Half damage only."
    "name": "Hail of Stone (Recharge 5-6)"
  - "desc": "The lizardfolk casts one of the following spells, requiring no Material\
      \ components and using Wisdom as the spellcasting ability (spell save DC 12):\n\
      \nAt will: [Elementalism](/03_Mechanics/CLI/spells/elementalism-xphb.md)\n\
      \n1/day each: [Meld into Stone](/03_Mechanics/CLI/spells/meld-into-stone-xphb.md),\
      \ [Speak with Plants](/03_Mechanics/CLI/spells/speak-with-plants-xphb.md), [Spike\
      \ Growth](/03_Mechanics/CLI/spells/spike-growth-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/lizardfolk-geomancer-xmm.webp"
```
^statblock

## Environment

forest, swamp

## Player-Facing Summary

Lizardfolk geomancer xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of lizardfolk geomancer xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around lizardfolk geomancer xmm.

## Adventure Hooks

- A rumor ties lizardfolk geomancer xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at lizardfolk geomancer xmm to avert a public scandal.
- A map overlay reveals a hidden approach to lizardfolk geomancer xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
