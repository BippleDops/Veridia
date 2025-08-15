---
title: Griffon Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

> [!figure] Asset
![](04_Resources/Assets/Creatures/creature-creature-griffon-xmm-griffon-xmm.png)

# Griffon Xmm

---
title: Griffon Xmm
aliases:
- Griffon
type: monster
tags:
- ttrpg-cli/monster/environment/coastal
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/hill
- world/surface
- ttrpg-cli/monster/environment/mountain
- monster
- research
- ttrpg-cli/monster/size/large
- world/both
- ttrpg-cli/monster/type/monstrosity
- active
- campaign/arc
- ttrpg-cli/monster/cr/2
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.342033+00:00'
world: Both
---

> [!figure] Creature

# [[griffon xmm|Griffon]]
*Source: Monster Manual (2024) p. 159. Available in the SRD and the Free Rules (2024)*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Griffon

*Majestic Hunter of Land and Sky*

- **Habitat.** Arctic, Coastal, Grassland, Hill, Mountain  
- **Treasure.** None  

Griffons combine the features of raptors and big cats—most commonly eagles and lions—and possess the precision and ferocity of such predators. Rarer breeds of griffons have the features of condors and panthers, while others resemble hawks and tigers. Regardless of their appearances, griffons are often associated with royalty and are widely called the Masters of Animals.

Countless tales surround griffons. Roll on or choose a result from the Griffon Tales table to inspire stories about them.

**Griffon Tales**

`dice: [](griffon-xmm.md#^griffon-tales)`

| dice: 1d6 | Legends Claim That Griffons... |
|-----------|--------------------------------|
| 1 | Attack anything in the skies near their lairs. |
| 2 | Curse their killers. Those who slay a griffon face the enmity of all animals. |
| 3 | Lay eggs with remarkable healing properties. |
| 4 | Prefer the taste of horses over all other prey. |
| 5 | Serve the first creature they see after hatching. |
| 6 | Won't attack those with royal blood. |
^griffon-tales

> [!quote] A quote from Sildar Hallwinter, retired member of the Waterdeep Griffon Cavalry  
> 
> People think we flew high over the city to avoid weather vanes and laundry lines and whatnot. Truth is, if the griffons smelled how much horse meat trotted just below, folks would have worse than joy-flying mages and stirges to worry about!

```statblock
"name": "Griffon (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "2"
  - !!int "13"
  - !!int "8"
"speed": "30 ft., fly 80 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "2"
"actions":
  - "desc": "The griffon makes two Rend attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d8 + 4) Piercing damage.\
      \ If the target is a Medium or smaller creature, it has the [[conditions#Grappled|Grappled]]\
      \ condition (escape DC 14) from both of the griffon's front claws."
    "name": "Rend"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/griffon-xmm.webp"
```
^statblock

## Environment

arctic, coastal, grassland, hill, mountain

## Player-Facing Summary

Griffon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of griffon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around griffon xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- Someone is protecting information for love
- Strange disappearances suggest ancient magic
- An heirloom has gone missing and truth emerges
- A document has gone missing and evil awakens

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
