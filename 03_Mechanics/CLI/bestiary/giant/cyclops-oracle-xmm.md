---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/10
  - ttrpg-cli/monster/environment/coastal
  - ttrpg-cli/monster/environment/desert
  - ttrpg-cli/monster/environment/grassland
  - ttrpg-cli/monster/environment/hill
  - ttrpg-cli/monster/environment/mountain
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/huge
  - ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Cyclops Oracle
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-cyclops-oracle-xmm-cyclops-oracle-xmm.svg)

# [Cyclops Oracle](3-Mechanics\CLI\bestiary\giant/cyclops-oracle-xmm.md)
*Source: Monster Manual (2024) p. 88*  

Cyclops oracles gaze through history to learn hidden truths. Many share these secrets with those who aid them in correcting the mistakes of the past.

## Cyclopes

*Monocular Servants of Destiny*

- **Habitat.** Coastal, Desert, Grassland, Hill, Mountain, Underdark  
- **Treasure.** Armaments  

Cyclopes are gigantic, one-eyed descendants of the gods. Using their mystical vision, cyclopes can witness how future events are likely to occur.

```statblock
"name": "Cyclops Oracle (XMM)"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "207"
"hit_dice": "18d12 + 90"
"modifier": !!int "8"
"stats":
  - !!int "22"
  - !!int "11"
  - !!int "20"
  - !!int "16"
  - !!int "18"
  - !!int "10"
"speed": "40 ft."
"saves":
  - "constitution": !!int "9"
  - "wisdom": !!int "8"
"skillsaves":
  - "name": "[History](/03_Mechanics/CLI/skills.md#History)"
    "desc": "+11"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+12"
"senses": "truesight 30 ft., passive Perception 22"
"languages": "Giant"
"cr": "10"
"actions":
  - "desc": "The cyclops makes three attacks, using Radiant Strike or Flash of Light\
      \ in any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +10, reach 10 ft. Hit: 22 (3d10 + 6) Radiant damage."
    "name": "Radiant Strike"
  - "desc": "Ranged Attack Roll: +10, range 120 ft. Hit: 17 (2d10 + 6) Radiant\
      \ damage, and the target has [Disadvantage](/03_Mechanics/CLI/variant-rules/disadvantage-xphb.md)\
      \ on attack rolls until the end of the cyclops's next turn."
    "name": "Flash of Light"
  - "desc": "The cyclops casts one of the following spells, requiring no Material\
      \ components and using Wisdom as the spellcasting ability (spell save DC 16):\n\
      \n2/day each: [Arcane Eye](/03_Mechanics/CLI/spells/arcane-eye-xphb.md),\
      \ [Detect Magic](/03_Mechanics/CLI/spells/detect-magic-xphb.md), [Locate Object](/03_Mechanics/CLI/spells/locate-object-xphb.md)\n\
      \n1/day: [Legend Lore](/03_Mechanics/CLI/spells/legend-lore-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "Trigger: The cyclops or an ally it can see makes a [D20 Test](/03_Mechanics/CLI/variant-rules/d20-test-xphb.md).\
      \ _Response:_ The cyclops rolls d20 and chooses whether to use that roll in\
      \ place of the d20 rolled for the [D20 Test](/03_Mechanics/CLI/variant-rules/d20-test-xphb.md)."
    "name": "Portent (Recharge 4-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/giant/token/cyclops-oracle-xmm.webp"
```
^statblock

## Environment

coastal, desert, grassland, hill, mountain, underdark

## Player-Facing Summary

Cyclops oracle xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of cyclops oracle xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around cyclops oracle xmm.

## Adventure Hooks

- A rumor ties cyclops oracle xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at cyclops oracle xmm to avert a public scandal.
- A map overlay reveals a hidden approach to cyclops oracle xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
