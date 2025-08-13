---
updated: '2025-08-13T01:18:32.726668+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: '#^statblock'
aliases:
- Lizardfolk Sovereign
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-lizardfolk-sovereign-xmm-lizardfolk-sovereign-xmm.svg)

# [Lizardfolk Sovereign](3-Mechanics\CLI\bestiary\elemental/lizardfolk-sovereign-xmm.md)
*Source: Monster Manual (2024) p. 197*  

Lizardfolk sovereigns undergo magical rites that imbue them with fantastic strength and magic from the Elemental Plane of Earth. In some, though, it also unlocks a primal viciousness.

## Lizardfolk

*Reptilian Defenders of the Land*

- **Habitat.** Forest, Swamp  
- **Treasure.** Individual  

Lizardfolk dwell in wildernesses suffused with primal magic. While many lizardfolk are Humanoids with varied skills, some forge powerful bonds with the Elemental Plane of Earth, granting them magical connections to the cycle of growth and rebirth.

```statblock
"name": "Lizardfolk Sovereign (XMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "15"
  - !!int "11"
  - !!int "11"
  - !!int "15"
"speed": "30 ft., burrow 20 ft., swim 30 ft."
"saves":
  - "constitution": !!int "4"
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"condition_immunities": "[frightened](/03_Mechanics/CLI/conditions.md#Frightened)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Draconic, Primordial (Terran)"
"cr": "4"
"actions":
  - "desc": "The lizardfolk makes one Bite attack and one Earthen Maul attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Piercing damage.\
      \ If the target is a creature that isn't a Construct or an Undead, the lizardfolk\
      \ gains [Temporary Hit Points](/03_Mechanics/CLI/variant-rules/temporary-hit-points-xphb.md)\
      \ equal to the damage dealt."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Bludgeoning\
      \ damage. If the target is a Medium or smaller creature, it has the [Prone](/03_Mechanics/CLI/conditions.md#Prone)\
      \ condition."
    "name": "Earthen Maul"
"bonus_actions":
  - "desc": "The lizardfolk moves up to its [Speed](/03_Mechanics/CLI/variant-rules/speed-xphb.md)\
      \ or [Swim Speed](/03_Mechanics/CLI/variant-rules/swim-speed-xphb.md) straight\
      \ toward an enemy it can see."
    "name": "Charge"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/lizardfolk-sovereign-xmm.webp"
```
^statblock

## Environment

forest, swamp

## Player-Facing Summary

Lizardfolk sovereign xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of lizardfolk sovereign xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around lizardfolk sovereign xmm.

## Adventure Hooks

- A rumor ties lizardfolk sovereign xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at lizardfolk sovereign xmm to avert a public scandal.
- A map overlay reveals a hidden approach to lizardfolk sovereign xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
