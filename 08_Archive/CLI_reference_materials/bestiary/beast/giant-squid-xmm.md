---
updated: '2025-08-13T01:18:32.565165+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: '#^statblock'
aliases:
- Giant Squid
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-giant-squid-xmm-giant-squid-xmm.svg)

# [Giant Squid](3-Mechanics\CLI\bestiary\beast/giant-squid-xmm.md)
*Source: Monster Manual (2024) p. 360*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](/03_Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Squid (XMM)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "120"
"hit_dice": "16d12 + 16"
"modifier": !!int "2"
"stats":
  - !!int "23"
  - !!int "14"
  - !!int "12"
  - !!int "5"
  - !!int "11"
  - !!int "4"
"speed": "5 ft., swim 80 ft."
"saves":
  - "strength": !!int "9"
  - "dexterity": !!int "5"
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": ""
"cr": "6"
"traits":
  - "desc": "The squid can breathe only underwater."
    "name": "Water Breathing"
"actions":
  - "desc": "The squid makes one Bite attack and one Tentacle attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9, reach 5 ft. Hit: 28 (4d10 + 6) Piercing damage."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +9, reach 15 ft. Hit: 19 (3d8 + 6) Bludgeoning\
      \ damage. If the target is a Huge or smaller creature, it has the [Grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ condition (escape DC 16) from one of two tentacles, and the squid can pull\
      \ the target up to 10 feet straight toward itself."
    "name": "Tentacle"
"reactions":
  - "desc": "Trigger: The squid takes damage while underwater. _Response:_ The squid\
      \ releases ink that fills a 15-foot [Cube](/03_Mechanics/CLI/variant-rules/cube-area-of-effect-xphb.md)\
      \ centered on itself, and the squid moves up to its [Swim Speed](/03_Mechanics/CLI/variant-rules/swim-speed-xphb.md).\
      \ The [Cube](/03_Mechanics/CLI/variant-rules/cube-area-of-effect-xphb.md) is\
      \ [Heavily Obscured](/03_Mechanics/CLI/variant-rules/heavily-obscured-xphb.md)\
      \ for 1 minute or until a strong current or similar effect disperses the ink."
    "name": "Ink Cloud (1/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/beast/token/giant-squid-xmm.webp"
```
^statblock

## Environment

underwater

## Player-Facing Summary

Giant squid xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of giant squid xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around giant squid xmm.

## Adventure Hooks

- A rumor ties giant squid xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at giant squid xmm to avert a public scandal.
- A map overlay reveals a hidden approach to giant squid xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
