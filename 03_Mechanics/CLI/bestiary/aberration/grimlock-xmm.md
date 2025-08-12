---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1-4
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Grimlock
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-grimlock-xmm-grimlock-xmm.svg)

# [Grimlock](3-Mechanics\CLI\bestiary\aberration/grimlock-xmm.md)
*Source: Monster Manual (2024) p. 160. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Grimlock

*Puppet of the Mind Flayer Menace*

- **Habitat.** Underdark  
- **Treasure.** None  

Grimlocks are victims of biological manipulation by mind flayers. To create grimlocks, illithids capture Humanoids, expose them to strange forms of Underdark radiation, and implant new directives into their brains. The process of creating a grimlock rends the creature's mind such that no semblance of the individual's former personality remains.

Grimlocks have shallow depressions rather than eyes. A sixth sense allows grimlocks to perceive their surroundings. Psychic energies from their transformations linger in grimlocks' bodies, and they channel these eerie forces into their attacks.

Roll on or choose a result from the Grimlock Tasks table to inspire how grimlocks serve illithids.

**Grimlock Tasks**

`dice: [](grimlock-xmm.md#^grimlock-tasks)`

| dice: 1d4 | The Grimlock Serves Mind Flayers By... |
|-----------|----------------------------------------|
| 1 | Carving caves to serve as illithid outposts. |
| 2 | Hiding the threat of mind flayers beneath fake, purposefully crude dwellings. |
| 3 | Pretending to be helpful and luring travelers into false senses of security. |
| 4 | Raiding surface communities and tempting other creatures to pursue it into illithid traps. |
^grimlock-tasks

> [!quote] A quote from Aljayera, Underdark Seer  
> 
> We thought we'd discovered a new people living deeper than we believed possible. The truth was something far worse.


```statblock
"name": "Grimlock (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "12"
  - !!int "9"
  - !!int "8"
  - !!int "6"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Athletics](/03_Mechanics/CLI/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"senses": "blindsight 30 ft., passive Perception 13"
"languages": ""
"cr": "1/4"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Bludgeoning damage\
      \ plus 2 (d4) Psychic damage."
    "name": "Bone Cudgel"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/grimlock-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Grimlock xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of grimlock xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around grimlock xmm.

## Adventure Hooks

- A rumor ties grimlock xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at grimlock xmm to avert a public scandal.
- A map overlay reveals a hidden approach to grimlock xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
