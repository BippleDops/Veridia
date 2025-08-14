---
aliases:
- Medusa
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
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
- world/both
type: monster
updated: '2025-08-13T12:34:05.348939+00:00'
world: Both
---


# [[medusa-xmm|Medusa]]
*Source: Monster Manual (2024) p. 205. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Medusa

*Snake-Haired Recluse with a Petrifying Gaze*

- **Habitat.** Desert  
- **Treasure.** Any  

With their hair of living snakes and their infamous petrifying gazes, medusas are hubristic creatures that inhabit sites of fallen glory. They often dwell beyond the fringes of civilization or travel in disguise, leaving trails of [[conditions#Petrified|petrified]] victims. Some medusas dominate groups of monsters or criminals, controlling them with threats of [[conditions#Petrified|petrified]] doom, while others recruit servants that are immune to being [[conditions#Petrified|petrified]], such as gargoyles and gorgons.

Medusas are born or created through preternatural circumstances. Roll on or choose a result from the Medusa Fates table to inspire what led to a medusa's creation.

**Medusa Fates**

`dice: [](medusa-xmm.md#^medusa-fates)`

| dice: 1d6 | The Medusa Was... |
|-----------|-------------------|
| 1 | Born a medusa and lives unaware of whatever curse or circumstances afflicted its ancestor. |
| 2 | Created by a god and tasked with guarding a treasure or secret. |
| 3 | A cultist who made a fiendish bargain and enjoyed rewards that have since faded. |
| 4 | An explorer transformed and compelled to defend a cursed ruin. |
| 5 | A vain noble whose magical attempt to gain eternal beauty backfired. |
| 6 | The victim of a bite from a magical serpent or reptilian god in disguise. |
^medusa-fates

```statblock
"name": "Medusa (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"modifier": !!int "6"
"stats":
  - !!int "10"
  - !!int "17"
  - !!int "16"
  - !!int "12"
  - !!int "13"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+6"
"senses": "darkvision 150 ft., passive Perception 14"
"languages": "Common plus one other language"
"cr": "6"
"actions":
  - "desc": "The medusa makes two Claw attacks and one Snake Hair attack, or it makes\
      \ three Poison Ray attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage."
    "name": "Claw"
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 5 (1d4 + 3) Piercing damage\
      \ plus 14 (4d6) Poison damage."
    "name": "Snake Hair"
  - "desc": "Ranged Attack Roll: +5, range 150 ft. Hit: 11 (2d8 + 2) Poison damage."
    "name": "Poison Ray"
"bonus_actions":
  - "desc": "Constitution Saving Throw: DC 13, each creature in a 30-foot [[cone-area-of-effect-xphb|Cone]].\
      \ If the medusa sees its reflection in the [[cone-area-of-effect-xphb|Cone]],\
      \ the medusa must make this save. 1st Failure: The target has the [[conditions#Restrained|Restrained]]\
      \ condition and repeats the save at the end of its next turn if it is still\
      \ [[conditions#Restrained|Restrained]], ending the effect\
      \ on itself on a success. 2nd Failure: The target has the [[conditions#Petrified|Petrified]]\
      \ condition instead of the [[conditions#Restrained|Restrained]]\
      \ condition."
    "name": "Petrifying Gaze (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/medusa-xmm.webp"
```
^statblock

## Environment

desert

## Player-Facing Summary

Medusa xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of medusa xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around medusa xmm.

## Adventure Hooks

- A rumor ties medusa xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at medusa xmm to avert a public scandal.
- A map overlay reveals a hidden approach to medusa xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
