---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1
  - ttrpg-cli/monster/environment/underwater
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Giant Octopus
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-giant-octopus-xmm-giant-octopus-xmm.svg)

# [Giant Octopus](3-Mechanics\CLI\bestiary\beast/giant-octopus-xmm.md)
*Source: Monster Manual (2024) p. 358. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](/03_Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Octopus (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "45"
"hit_dice": "7d10 + 7"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "13"
  - !!int "13"
  - !!int "5"
  - !!int "10"
  - !!int "4"
"speed": "10 ft., swim 60 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The octopus can breathe only underwater. It can hold its breath for 1\
      \ hour outside water."
    "name": "Water Breathing"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 10 ft. Hit: 10 (2d6 + 3) Bludgeoning\
      \ damage. If the target is a Medium or smaller creature, it has the [Grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ condition (escape DC 13) from all eight tentacles. While [Grappled](/03_Mechanics/CLI/conditions.md#Grappled),\
      \ the target has the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ condition."
    "name": "Tentacles"
"reactions":
  - "desc": "Trigger: The octopus takes damage while underwater. _Response:_ The octopus\
      \ releases ink that fills a 10-foot [Cube](/03_Mechanics/CLI/variant-rules/cube-area-of-effect-xphb.md)\
      \ centered on itself, and the octopus moves up to its [Swim Speed](/03_Mechanics/CLI/variant-rules/swim-speed-xphb.md).\
      \ The [Cube](/03_Mechanics/CLI/variant-rules/cube-area-of-effect-xphb.md) is\
      \ [Heavily Obscured](/03_Mechanics/CLI/variant-rules/heavily-obscured-xphb.md)\
      \ for 1 minute or until a strong current or similar effect disperses the ink."
    "name": "Ink Cloud (1/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/beast/token/giant-octopus-xmm.webp"
```
^statblock

## Environment

underwater

## Player-Facing Summary

Giant octopus xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of giant octopus xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around giant octopus xmm.

## Adventure Hooks

- A rumor ties giant octopus xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at giant octopus xmm to avert a public scandal.
- A map overlay reveals a hidden approach to giant octopus xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
