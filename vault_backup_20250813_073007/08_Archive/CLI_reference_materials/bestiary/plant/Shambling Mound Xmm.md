---
aliases:
- Shambling Mound
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- active
- both
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
- world/both
type: monster
updated: '2025-08-13T12:34:19.788165+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-shambling-mound-xmm-shambling-mound-xmm.svg)

# [[3-Mechanics\CLI\bestiary\plant/shambling-mound-xmm|Shambling Mound]]
*Source: Monster Manual (2024) p. 276. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Shambling Mound

*Manifestation of Primeval Power*

- **Habitat.** Forest, Swamp  
- **Treasure.** None  

Shambling mounds—also known as "shamblers"—embody the tenacity of the wilderness, seeking only to consume and grow. These masses of vegetation rise up to half again as tall as a human and possess thick limbs and a vague head. As they move through bogs and undergrowth, they ensnare creatures that come within reach. Shambling mounds bury those they catch within their own forms as compost.

Strange circumstances might give rise to shambling mounds, transforming vegetation into hulks with rudimentary cunning. Such conditions include strikes from magical lightning, nature defending itself, or druidic curses. Roll on or choose a result from the Shambling Mound Cultivation table to inspire a shambling mound's origins and features.

**Shambling Mound Cultivation**

`dice: [](shambling-mound-xmm.md#^shambling-mound-cultivation)`

| dice: 1d6 | The Shambling Mound Is... |
|-----------|---------------------------|
| 1 | Covered in vibrant alien or Feywild blooms. |
| 2 | Hauling a rune-etched menhir in its torso. |
| 3 | Infested with vermin or fungi. |
| 4 | Made up of knotty vines entangling skeletons. |
| 5 | Mutated and leaking glowing pollution. |
| 6 | The remains of an ancient tree or a treant. |
^shambling-mound-cultivation

```statblock
"name": "Shambling Mound (XMM)"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "8"
  - !!int "16"
  - !!int "5"
  - !!int "10"
  - !!int "5"
"speed": "30 ft., swim 20 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+3"
"damage_resistances": "cold, fire"
"damage_immunities": "lightning"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Deafened|deafened]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]]"
"senses": "blindsight 60 ft., passive Perception 10"
"languages": ""
"cr": "5"
"traits":
  - "desc": "Whenever the shambling mound is subjected to Lightning damage, it regains\
      \ a number of [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ equal to the Lightning damage dealt."
    "name": "Lightning Absorption"
"actions":
  - "desc": "The shambling mound makes three Charged Tendril attacks. It can replace\
      \ one attack with a use of Engulf."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 10 ft. Hit: 7 (1d6 + 4) Bludgeoning\
      \ damage plus 5 (2d4) Lightning damage. If the target is a Medium or smaller\
      \ creature, the shambling mound pulls the target 5 feet straight toward itself."
    "name": "Charged Tendril"
  - "desc": "Strength Saving Throw: DC 15, one Medium or smaller creature within\
      \ 5 feet. Failure: The target is pulled into the shambling mound's space and\
      \ has the [[/03_Mechanics/CLI/conditions#Grappled|Grappled]] condition (escape\
      \ DC 14). Until the grapple ends, the target has the [[/03_Mechanics/CLI/conditions#Blinded|Blinded]]\
      \ and [[/03_Mechanics/CLI/conditions#Restrained|Restrained]] conditions, and\
      \ it takes 10 (3d6) Lightning damage at the start of each of its turns. When\
      \ the shambling mound moves, the [[/03_Mechanics/CLI/conditions#Grappled|Grappled]]\
      \ target moves with it, costing it no extra movement. The shambling mound can\
      \ have only one creature [[/03_Mechanics/CLI/conditions#Grappled|Grappled]]\
      \ by this action at a time."
    "name": "Engulf"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/plant/token/shambling-mound-xmm.webp"
```
^statblock

## Environment

forest, swamp

## Player-Facing Summary

Shambling mound xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of shambling mound xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around shambling mound xmm.

## Adventure Hooks

- A rumor ties shambling mound xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at shambling mound xmm to avert a public scandal.
- A map overlay reveals a hidden approach to shambling mound xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
