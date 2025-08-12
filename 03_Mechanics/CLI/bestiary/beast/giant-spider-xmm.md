---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1
  - ttrpg-cli/monster/environment/desert
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/swamp
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/environment/urban
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Giant Spider
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-giant-spider-xmm-giant-spider-xmm.svg)

# [Giant Spider](3-Mechanics\CLI\bestiary\beast/giant-spider-xmm.md)
*Source: Monster Manual (2024) p. 359, Player's Handbook (2024) p. 351. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](/03_Mechanics/CLI/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Spider (XMM)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "12"
  - !!int "2"
  - !!int "11"
  - !!int "4"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+7"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The spider can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The spider ignores movement restrictions caused by webs, and it knows\
      \ the location of any other creature in contact with the same web."
    "name": "Web Walker"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage\
      \ plus 7 (2d6) Poison damage."
    "name": "Bite"
  - "desc": "Dexterity Saving Throw: DC 13, one creature the spider can see within\
      \ 60 feet. Failure: The target has the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ condition until the web is destroyed (AC 10; HP 5; [Vulnerability](/03_Mechanics/CLI/variant-rules/vulnerability-xphb.md)\
      \ to Fire damage; [Immunity](/03_Mechanics/CLI/variant-rules/immunity-xphb.md)\
      \ to Poison and Psychic damage)."
    "name": "Web (Recharge 5-6)"
"source":
  - "XMM"
  - "XPHB"
"image": "/03_Mechanics/CLI/bestiary/beast/token/giant-spider-xmm.webp"
```
^statblock

## Environment

desert, forest, swamp, underdark, urban

## Player-Facing Summary

Giant spider xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of giant spider xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around giant spider xmm.

## Adventure Hooks

- A rumor ties giant spider xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at giant spider xmm to avert a public scandal.
- A map overlay reveals a hidden approach to giant spider xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
