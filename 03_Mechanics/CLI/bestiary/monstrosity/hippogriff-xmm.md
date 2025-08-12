---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1
  - ttrpg-cli/monster/environment/grassland
  - ttrpg-cli/monster/environment/hill
  - ttrpg-cli/monster/environment/mountain
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Hippogriff
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-hippogriff-xmm-hippogriff-xmm.svg)

# [Hippogriff](3-Mechanics\CLI\bestiary\monstrosity/hippogriff-xmm.md)
*Source: Monster Manual (2024) p. 169. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Hippogriff

*World-Traveling Hunter and Steed*

- **Habitat.** Grassland, Hill, Mountain  
- **Treasure.** None  

Part hunting bird, part horse, hippogriffs are majestic creatures that hunt opportunistically as they migrate, often targeting lone travelers and livestock. Hippogriffs might carry riders with them in their travels in return for food or other aid.

Hippogriff migrations might take months or years, and sages frequently predict their routes. Roll on or choose a result from the Hippogriff Destination table to inspire where a hippogriff might be en route to.

**Hippogriff Destination**

`dice: [](hippogriff-xmm.md#^hippogriff-destination)`

| dice: 1d6 | The Hippogriff Is Traveling to A... |
|-----------|-------------------------------------|
| 1 | Lost ruin hidden by clouds or fog. |
| 2 | Low-hanging moon, star, or other solar body. |
| 3 | Magical garden on a floating island. |
| 4 | Mountaintop with a view of a giant geoglyph. |
| 5 | Nest full of hippogriff eggs atop a spire. |
| 6 | Portal to the Feywild or an Upper Plane. |
^hippogriff-destination

```statblock
"name": "Hippogriff (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "26"
"hit_dice": "4d10 + 4"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "13"
  - !!int "13"
  - !!int "2"
  - !!int "12"
  - !!int "8"
"speed": "40 ft., fly 60 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
"senses": "passive Perception 15"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The hippogriff doesn't provoke an Opportunity Attack when it flies out\
      \ of an enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "The hippogriff makes two Rend attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing damage."
    "name": "Rend"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/hippogriff-xmm.webp"
```
^statblock

## Environment

grassland, hill, mountain

## Player-Facing Summary

Hippogriff xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of hippogriff xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around hippogriff xmm.

## Adventure Hooks

- A rumor ties hippogriff xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at hippogriff xmm to avert a public scandal.
- A map overlay reveals a hidden approach to hippogriff xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
