---
aliases:
- Will-o'-Wisp
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
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
- world/both
type: monster
updated: '2025-08-12T23:37:35.652033'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-will-o-wisp-xmm-v1-will-o-wisp-xmm.svg)

# [Will-o'-Wisp](3-Mechanics\CLI\bestiary\undead/will-o-wisp-xmm.md)
*Source: Monster Manual (2024) p. 333. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Will-o'-Wisp

*Guide on the Path to Doom*

- **Habitat.** Forest, Swamp, Urban  
- **Treasure.** None  

From a distance, will-o'-wisps look like lanterns bobbing in the dark. Through the windows of abandoned structures or around the bends of treacherous paths, these spirits tempt the curious into peril. Once their prey is vulnerable, will-o'-wisps feed on the life force of those they lay low.

Roll on or choose a result from the Will-o'-Wisp Ambushes table to inspire how a will-o'-wisp imperils its victims.

**Will-o'-Wisp Ambushes**

`dice: [](will-o-wisp-xmm.md#^will-o-wisp-ambushes)`

| dice: 1d6 | The Will-o'-Wisp Tempts Victims Into... |
|-----------|-----------------------------------------|
| 1 | An abandoned structure ready to collapse. |
| 2 | An ambush by hungry ghouls or vampires. |
| 3 | A dreaded ruin that curses those who enter. |
| 4 | The lair of a predator, like a bear or wyvern. |
| 5 | Patches of brown mold or green slime. |
| 6 | Quicksand or pools covered in thin ice. |
^will-o-wisp-ambushes

```statblock
"name": "Will-o'-Wisp (XMM)"
"size": "Tiny"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "27"
"hit_dice": "11d4"
"modifier": !!int "9"
"stats":
  - !!int "1"
  - !!int "28"
  - !!int "10"
  - !!int "13"
  - !!int "14"
  - !!int "11"
"speed": "5 ft., fly 50 ft. (hover)"
"damage_resistances": "acid, bludgeoning, cold, fire, necrotic, piercing, slashing"
"damage_immunities": "lightning, poison"
"condition_immunities": "[exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [grappled](/03_Mechanics/CLI/conditions.md#Grappled), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned),\
  \ [prone](/03_Mechanics/CLI/conditions.md#Prone), [restrained](/03_Mechanics/CLI/conditions.md#Restrained),\
  \ [unconscious](/03_Mechanics/CLI/conditions.md#Unconscious)"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Common plus one other language"
"cr": "2"
"traits":
  - "desc": "The wisp can't wear or carry anything."
    "name": "Ephemeral"
  - "desc": "The wisp sheds [Bright Light](/03_Mechanics/CLI/variant-rules/bright-light-xphb.md)\
      \ in a 20-foot radius and [Dim Light](/03_Mechanics/CLI/variant-rules/dim-light-xphb.md)\
      \ for an additional 20 feet."
    "name": "Illumination"
  - "desc": "The wisp can move through other creatures and objects as if they were\
      \ [Difficult Terrain](/03_Mechanics/CLI/variant-rules/difficult-terrain-xphb.md).\
      \ It takes 5 (d10) Force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 11 (2d8 + 2) Lightning damage."
    "name": "Shock"
"bonus_actions":
  - "desc": "Constitution Saving Throw: DC 10, one living creature the wisp can\
      \ see within 5 feet that has 0 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md).\
      \ Failure: The target dies, and the wisp regains 10 (3d6) [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)."
    "name": "Consume Life"
  - "desc": "The wisp and its light have the [Invisible](/03_Mechanics/CLI/conditions.md#Invisible)\
      \ condition until the wisp's [Concentration](/03_Mechanics/CLI/conditions.md#Concentration)\
      \ ends on this effect, which ends early immediately after the wisp makes an\
      \ attack roll or uses Consume Life."
    "name": "Vanish"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/will-o-wisp-xmm.webp"
```
^statblock

## Environment

forest, swamp, urban

## Player-Facing Summary

Will o wisp xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of will o wisp xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around will o wisp xmm.

## Adventure Hooks

- A rumor ties will o wisp xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at will o wisp xmm to avert a public scandal.
- A map overlay reveals a hidden approach to will o wisp xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
