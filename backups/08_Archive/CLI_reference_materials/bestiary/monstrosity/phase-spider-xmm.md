---
aliases:
- Phase Spider
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
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/ethereal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
- world/both
- world/surface
type: monster
updated: '2025-08-12T23:37:35.016737'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-phase-spider-xmm-phase-spider-xmm.svg)

# [Phase Spider](3-Mechanics\CLI\bestiary\monstrosity/phase-spider-xmm.md)
*Source: Monster Manual (2024) p. 239. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Phase Spider

*Plane-Shifting Arachnid Ambusher*

- **Habitat.** Desert, Forest, Grassland, Hill, Planar (Ethereal Plane), Underdark, Urban  
- **Treasure.** Any  

Phase spiders appear out of nowhere to attack, then vanish just as swiftly. These horse-size, magical arachnids are endemic to the Ethereal Plane. From vaporous lairs, they peer through the Border Ethereal into the Material Plane. When they detect prey, phase spiders draw close and then shift or "phase" to the Material Plane to attack. They shift between planes of existence and attack from unexpected directions until they overcome their prey or are forced to retreat.

Phase spiders are more intelligent than mundane spiders, but most are cowards. They usually flee if they're outnumbered by creatures capable of seeing them on the Ethereal Plane or pursuing them there. They make exceptions for ghosts and similar spirits, which phase spiders gain sustenance from and pursue as favored prey.

> [!quote] A quote from Marcus Wands, Doubtful Authority  
> 
> Some sages say you unknowingly occupy the same ethereally coterminous point as a phase spider an average of four times each year.


```statblock
"name": "Phase Spider (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "7d10 + 7"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "16"
  - !!int "12"
  - !!int "6"
  - !!int "10"
  - !!int "6"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+7"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The spider can see 60 feet into the Ethereal Plane while on the Material\
      \ Plane and vice versa."
    "name": "Ethereal Sight"
  - "desc": "The spider can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The spider ignores movement restrictions caused by webs, and the spider\
      \ knows the location of any other creature in contact with the same web."
    "name": "Web Walker"
"actions":
  - "desc": "The spider makes two Bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Piercing damage\
      \ plus 9 (2d8) Poison damage. If this damage reduces the target to 0 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md),\
      \ the target becomes [Stable](/03_Mechanics/CLI/variant-rules/stable-xphb.md),\
      \ and it has the [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned) condition\
      \ for 1 hour. While [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned), the\
      \ target also has the [Paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed)\
      \ condition."
    "name": "Bite"
"bonus_actions":
  - "desc": "The spider teleports from the Material Plane to the Ethereal Plane or\
      \ vice versa."
    "name": "Ethereal Jaunt"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/phase-spider-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill, planar, ethereal, underdark, urban

## Player-Facing Summary

Phase spider xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of phase spider xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around phase spider xmm.

## Adventure Hooks

- A rumor ties phase spider xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at phase spider xmm to avert a public scandal.
- A map overlay reveals a hidden approach to phase spider xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
