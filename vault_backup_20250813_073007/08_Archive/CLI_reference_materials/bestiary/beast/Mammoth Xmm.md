---
aliases:
- Mammoth
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- campaign/arc
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
- world/both
type: monster
updated: '2025-08-12T23:37:35.174772'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-mammoth-xmm-mammoth-xmm.svg)

# [[3-Mechanics\CLI\bestiary\beast/mammoth-xmm|Mammoth]]
*Source: Monster Manual (2024) p. 365. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [[/03_Mechanics/CLI/bestiary/beast/panther-xmm|Panther]] stat block can also represent a mountain lion, while the [[/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm|Giant Goat]] stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Mammoth (XMM)"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"modifier": !!int "2"
"stats":
  - !!int "24"
  - !!int "9"
  - !!int "21"
  - !!int "3"
  - !!int "11"
  - !!int "6"
"speed": "50 ft."
"saves":
  - "strength": !!int "10"
  - "constitution": !!int "8"
"senses": "passive Perception 10"
"languages": ""
"cr": "6"
"actions":
  - "desc": "The mammoth makes two Gore attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +10, reach 10 ft. Hit: 18 (2d10 + 7) Piercing\
      \ damage. If the target is a Huge or smaller creature and the mammoth moved\
      \ 20+ feet straight toward it immediately before the hit, the target has the\
      \ [[/03_Mechanics/CLI/conditions#Prone|Prone]] condition."
    "name": "Gore"
"bonus_actions":
  - "desc": "Dexterity Saving Throw: DC 18, one creature within 5 feet that has\
      \ the [[/03_Mechanics/CLI/conditions#Prone|Prone]] condition. Failure: 29\
      \ (4d10 + 7) Bludgeoning damage. Success: Half damage."
    "name": "Trample"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/beast/token/mammoth-xmm.webp"
```
^statblock

## Environment

arctic

## Player-Facing Summary

Mammoth xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of mammoth xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around mammoth xmm.

## Adventure Hooks

- A rumor ties mammoth xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at mammoth xmm to avert a public scandal.
- A map overlay reveals a hidden approach to mammoth xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
