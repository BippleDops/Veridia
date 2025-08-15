---
title: Black Pudding Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Black Pudding Xmm

---
title: Black Pudding Xmm
aliases:
- Black Pudding
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/ooze
- ttrpg-cli/monster/cr/4
- monster
- ttrpg-cli/monster/environment/underdark
- research
- ttrpg-cli/monster/size/large
- world/both
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.690683+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-black-pudding-xmm-black-pudding-xmm.svg)

# [[black-pudding-xmm]]
*Source: Monster Manual (2024) p. 42. Available in the SRD and the Free Rules (2024)*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Black Pudding

*Divisible, Corrosive Blob*

- **Habitat.** Underdark  
- **Treasure.** None  

Black puddings are shapeless masses of predatory cells. Once a pudding detects organic matter, it oozes toward its prey, dissolving living matter and various objects. If a black pudding is split by lightning or slashing attacks, it divides into two smaller, independent puddings.

Various supernatural conditions might bring black puddings into being. Roll on or choose a result from the Black Pudding Sources table to inspire a pudding's origins.

**Black Pudding Sources**

`dice: [](black-pudding-xmm.md#^black-pudding-sources)`

| dice: 1d6 | The Black Pudding Formed From... |
|-----------|----------------------------------|
| 1 | An ancient black dragon's acidic saliva. |
| 2 | The blood or extreme emotions of a foul deity. |
| 3 | Cosmic entropy or ruinous planar forces. |
| 4 | A curse that transformed a forgotten tyrant. |
| 5 | Forbidden or industrialized magic. |
| 6 | Necrotic material animated by aimless spirits. |
^black-pudding-sources

```statblock
"name": "Black Pudding (XMM)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "7"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"modifier": !!int "-3"
"stats":
  - !!int "16"
  - !!int "5"
  - !!int "1"
  - !!int "6"
"speed": "20 ft., climb 20 ft."
"damage_immunities": "acid, cold, lightning, slashing"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Deafened|deafened]],\
  \ [[conditions#Exhaustion|exhaustion]], [[conditions#frightened|frightened]],\
  \ [[conditions#Grappled|grappled]], [[conditions#prone|prone]],\
  \ [[conditions#Restrained|restrained]]"
"senses": "blindsight 60 ft., passive Perception 8"
"languages": ""
"cr": "4"
"traits":
  - "desc": "The pudding can move through a space as narrow as 1 inch without expending\
      \ extra movement to do so."
    "name": "Amorphous"
  - "desc": "A creature that hits the pudding with a melee attack roll takes 4 (d8)\
      \ Acid damage. Nonmagical ammunition is destroyed immediately after hitting\
      \ the pudding and dealing any damage. Any nonmagical weapon takes a cumulative\
      \ -1 penalty to attack rolls immediately after dealing damage to the pudding\
      \ and coming into contact with it. The weapon is destroyed if the penalty reaches\
      \ -5. The penalty can be removed by casting the [[Mending Xphb]]\
      \ spell on the weapon.\n\nIn 1 minute, the pudding can eat through 2 feet of\
      \ nonmagical wood or metal."
    "name": "Corrosive Form"
  - "desc": "The pudding can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 10 ft. Hit: 17 (4d6 + 3) Acid damage.\
      \ Nonmagical armor worn by the target takes a -1 penalty to the AC it offers.\
      \ The armor is destroyed if the penalty reduces its AC to 10. The penalty can\
      \ be removed by casting the [[Mending Xphb]]\
      \ spell on the armor."
    "name": "Dissolving Pseudopod"
"reactions":
  - "desc": "Trigger: While the pudding is Large or Medium and has 10+ [[hit-points-xphb (variant-rules)]],\
      \ it becomes [[bloodied-xphb (variant-rules)]] or\
      \ is subjected to Lightning or Slashing damage. _Response:_ The pudding splits\
      \ into two new Black Puddings. Each new pudding is one size smaller than the\
      \ original pudding and acts on its [[Initiative Xphb]].\
      \ The original pudding's [[hit-points-xphb (variant-rules)]]\
      \ are divided evenly between the new puddings (round down)."
    "name": "Split"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/ooze/token/black-pudding-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Black pudding xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of black pudding xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around black pudding xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Prophecy Connection

Mentioned in The Hidden Prophecy of Winds

## Plot Hooks

- Strange sightings suggest ancient magic
- A stranger needs help stealing before winter
- A map reveals ancient history about a local noble

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
