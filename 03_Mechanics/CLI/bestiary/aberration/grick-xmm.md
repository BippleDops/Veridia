---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/2
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Grick
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-grick-xmm-grick-xmm.svg)

# [Grick](3-Mechanics\CLI\bestiary\aberration/grick-xmm.md)
*Source: Monster Manual (2024) p. 158. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Gricks tend to be solitary hunters, but young gricks might lurk near dozens of their brood mates for years before gradually drifting apart.

## Gricks

*Worms That Hunt the Dark and Decaying*

- **Habitat.** Forest, Underdark  
- **Treasure.** Any  

Gricks are wormlike predators that burst from hiding—flailing and snapping—to consume whatever prey passes near. They hide in cavernous crags or amid deadfalls, the scattered bones and possessions of past meals the only evidence of their threat.

Gricks' origins are unclear, but some suggest these creatures arise from natural worms or similar invertebrates mutated by magical phenomena. Many cite the presence of gricks in a region as evidence of portals to other planes of existence, legendary magic items, or powerful supernatural beings.

```statblock
"name": "Grick (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "54"
"hit_dice": "12d8"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "11"
  - !!int "3"
  - !!int "14"
  - !!int "5"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "2"
"actions":
  - "desc": "The grick makes one Beak attack and one Tentacles attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 9 (2d6 + 2) Piercing damage."
    "name": "Beak"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (1d10 + 2) Slashing damage.\
      \ If the target is a Medium or smaller creature, it has the [Grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ condition (escape DC 12) from all four tentacles."
    "name": "Tentacles"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/grick-xmm.webp"
```
^statblock

## Environment

forest, underdark

## Player-Facing Summary

Grick xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of grick xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around grick xmm.

## Adventure Hooks

- A rumor ties grick xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at grick xmm to avert a public scandal.
- A map overlay reveals a hidden approach to grick xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
