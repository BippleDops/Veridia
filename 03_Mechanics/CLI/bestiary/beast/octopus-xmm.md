---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/0
  - ttrpg-cli/monster/environment/underwater
  - ttrpg-cli/monster/size/small
  - ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Octopus
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-giant-octopus-xmm-giant-octopus-xmm.svg)

# [Octopus](3-Mechanics\CLI\bestiary\beast/octopus-xmm.md)
*Source: Monster Manual (2024) p. 365, Player's Handbook (2024) p. 353. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](/03_Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Octopus (XMM)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "3"
"hit_dice": "1d6"
"modifier": !!int "2"
"stats":
  - !!int "4"
  - !!int "15"
  - !!int "11"
  - !!int "3"
  - !!int "10"
  - !!int "4"
"speed": "5 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+6"
"senses": "darkvision 30 ft., passive Perception 12"
"languages": ""
"cr": "0"
"traits":
  - "desc": "The octopus can move through a space as narrow as 1 inch without expending\
      \ extra movement to do so."
    "name": "Compression"
  - "desc": "The octopus can breathe only underwater."
    "name": "Water Breathing"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 1 Bludgeoning damage."
    "name": "Tentacles"
"reactions":
  - "desc": "Trigger: A creature ends its turn within 5 feet of the octopus while\
      \ underwater. _Response:_ The octopus releases ink that fills a 5-foot [Cube](/03_Mechanics/CLI/variant-rules/cube-area-of-effect-xphb.md)\
      \ centered on itself, and the octopus moves up to its [Swim Speed](/03_Mechanics/CLI/variant-rules/swim-speed-xphb.md).\
      \ The [Cube](/03_Mechanics/CLI/variant-rules/cube-area-of-effect-xphb.md) is\
      \ [Heavily Obscured](/03_Mechanics/CLI/variant-rules/heavily-obscured-xphb.md)\
      \ for 1 minute or until a strong current or similar effect disperses the ink."
    "name": "Ink Cloud (1/Day)"
"source":
  - "XMM"
  - "XPHB"
"image": "/03_Mechanics/CLI/bestiary/beast/token/octopus-xmm.webp"
```
^statblock

## Environment

underwater

## Player-Facing Summary

Octopus xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of octopus xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around octopus xmm.

## Adventure Hooks

- A rumor ties octopus xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at octopus xmm to avert a public scandal.
- A map overlay reveals a hidden approach to octopus xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
