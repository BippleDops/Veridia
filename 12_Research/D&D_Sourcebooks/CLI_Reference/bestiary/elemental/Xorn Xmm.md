---
title: Xorn Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Xorn Xmm

---
title: Xorn Xmm
aliases:
- Xorn
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/environment/earth
- both
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/type/elemental
- ttrpg-cli/monster/cr/5
- world/both
- ttrpg-cli/monster/environment/planar
- research
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.769800+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-xorn-xmm-v1-xorn-xmm.svg)

# [[xorn-xmm (elemental)]]
*Source: Monster Manual (2024) p. 338. Available in the SRD and the Free Rules (2024)*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Xorn

*Treasure-Devouring Glutton*

- **Habitat.** Underdark, Planar (Elemental Plane of Earth)  
- **Treasure.** Any  

On the Elemental Plane of Earth, xorn roam in search of meals they consider delicacies: gems, crystals, and veins of precious metals. For xorn, the Elemental Plane of Earth presents an endless buffet. Those that find their way to the Material Plane discover that most worlds are culinary wastelands. These xorn scour subterranean depths, consuming whatever sparse gems and ores they find. This might bring them into conflict with miners or others who hide their treasures underground.

Xorn have three eyes, three arms, and three legs arranged around their trilaterally symmetrical frames. At the top of their bodies is a toothy maw that's equally capable of crushing minerals and dangerous creatures. Xorn move through the earth magically, leaving no tunnel or sign of their passage.

Rapt gourmands, xorn focus on their next meals. They care little for living creatures and avoid harming them when possible. They know others also covet the earth's treasures, and they're not above bargaining for their meals. Xorn might share their knowledge of the Underdark in exchange for snacks of gems, coins, or magical metals. If starving or angered, xorn might try to forcibly take their meals.

Roll on or choose a result from the Xorn Delicacies table to inspire a xorn's favorite fare.

**Xorn Delicacies**

`dice: [](xorn-xmm.md#^xorn-delicacies)`

| dice: 1d8 | The Xorn Craves... |
|-----------|--------------------|
| 1 | Adamantine or mithral. |
| 2 | Coins minted by a long-dead empire. |
| 3 | Fossils or petrified wood. |
| 4 | A gem that's part of a magic item. |
| 5 | The keystone of a great arch or bridge. |
| 6 | Parts of a galeb duhr or stone golem. |
| 7 | A piece of a meteor or moon. |
| 8 | The stone crowning a mountain peak. |
^xorn-delicacies

```statblock
"name": "Xorn (XMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "19"
"hp": !!int "84"
"hit_dice": "8d8 + 48"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "22"
  - !!int "11"
"speed": "20 ft., burrow 20 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[skills#Stealth|Stealth]]"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Paralyzed|paralyzed]], [[conditions#Petrified|petrified]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 16"
"languages": "Primordial (Terran)"
"cr": "5"
"traits":
  - "desc": "The xorn can burrow through nonmagical, unworked earth and stone. While\
      \ doing so, the xorn doesn't disturb the material it moves through."
    "name": "Earth Glide"
  - "desc": "The xorn can pinpoint the location of precious metals and stones within\
      \ 60 feet of itself."
    "name": "Treasure Sense"
"actions":
  - "desc": "The xorn makes one Bite attack and three Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 17 (4d6 + 3) Piercing damage."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 8 (1d10 + 3) Slashing damage."
    "name": "Claw"
"bonus_actions":
  - "desc": "The xorn moves up to its [[Fly Speed Xphb]]\
      \ or [[burrow-speed-xphb (variant-rules)]] straight\
      \ toward an enemy it can sense."
    "name": "Charge"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/xorn-xmm.webp"
```
^statblock

## Environment

planar, earth, underdark

## Player-Facing Summary

Xorn xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of xorn xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around xorn xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
