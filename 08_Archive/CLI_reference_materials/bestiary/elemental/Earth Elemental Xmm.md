---
aliases:
- Earth Elemental
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/earth
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
- world/both
type: monster
updated: '2025-08-12T23:37:35.450472'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-earth-elemental-xmm-earth-elemental-xmm.svg)

# [Earth Elemental](3-Mechanics\CLI\bestiary\elemental/earth-elemental-xmm.md)
*Source: Monster Manual (2024) p. 108. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Earth Elemental

*Primal Spirit of Soil and Stone*

- **Habitat.** Mountain, Planar (Elemental Plane of Earth), Underdark  
- **Treasure.** None  

Primal spirits from the Elemental Plane of Earth merge with rocks and minerals to form earth elementals. These beings possess powerful limbs and coarse features, sometimes studded with ore, gems, crystals, colorful striations, or living plants. On the Material Plane, earth elementals often serve those who conjure them, or they appear in regions influenced by their home plane, such as crystalline nodes, energetic fault lines, or veins of magical ore. Earth elementals effortlessly move through stone and can bring ruin to whole structures with their mighty fists.

Earth elementals are typically made of more than dirt. While an elemental's composition doesn't change its statistics or have monetary value, it makes each elemental distinct. Roll on or choose a result from the Earth Elemental Compositions table to inspire an earth elemental's features.

**Earth Elemental Compositions**

`dice: [](earth-elemental-xmm.md#^earth-elemental-compositions)`

| dice: 1d8 | The Earth Elemental's Body Features... |
|-----------|----------------------------------------|
| 1 | Colorful mineral formations. |
| 2 | Cooled magma in melted heaps. |
| 3 | Grass, moss, or plant roots. |
| 4 | Heaps of peat or decaying matter. |
| 5 | Mounds of sand studded with shells. |
| 6 | Rubble or pieces of a ruined structure. |
| 7 | Striking striations or bands of color. |
| 8 | Veins of iron or other ore. |
^earth-elemental-compositions

> [!quote] A quote from Kabril the Perfect Compass, Ruler of Dao  
> 
> The foundations of our homes, the strength of our weapons, the vaults of our greatest secrets—earth is nothing less than the grip of reality itself. It is the mightiest element. This cannot be denied.


```statblock
"name": "Earth Elemental (XMM)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "147"
"hit_dice": "14d10 + 70"
"modifier": !!int "-1"
"stats":
  - !!int "20"
  - !!int "8"
  - !!int "20"
  - !!int "5"
  - !!int "10"
  - !!int "5"
"speed": "30 ft., burrow 30 ft."
"damage_vulnerabilities": "thunder"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed), [petrified](/03_Mechanics/CLI/conditions.md#Petrified),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned), [unconscious](/03_Mechanics/CLI/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10"
"languages": "Primordial (Terran)"
"cr": "5"
"traits":
  - "desc": "The elemental can burrow through nonmagical, unworked earth and stone.\
      \ While doing so, the elemental doesn't disturb the material it moves through."
    "name": "Earth Glide"
  - "desc": "The elemental deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The elemental makes two attacks, using Slam or Rock Launch in any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 10 ft. Hit: 14 (2d8 + 5) Bludgeoning\
      \ damage."
    "name": "Slam"
  - "desc": "Ranged Attack Roll: +8, range 60 ft. Hit: 8 (1d6 + 5) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, it has the [Prone](/03_Mechanics/CLI/conditions.md#Prone)\
      \ condition."
    "name": "Rock Launch"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/earth-elemental-xmm.webp"
```
^statblock

## Environment

mountain, planar, earth, underdark

## Player-Facing Summary

Earth elemental xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of earth elemental xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around earth elemental xmm.

## Adventure Hooks

- A rumor ties earth elemental xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at earth elemental xmm to avert a public scandal.
- A map overlay reveals a hidden approach to earth elemental xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
