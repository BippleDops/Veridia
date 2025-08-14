# Hydra Xmm

---
title: Hydra Xmm
aliases:
- Hydra
type: monster
tags:
- ttrpg-cli/monster/environment/coastal
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/huge
- monster
- ttrpg-cli/monster/cr/8
- research
- world/both
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/type/monstrosity
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.368633+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-hydra-xmm-hydra-xmm.svg)

# [[hydra-xmm|Hydra]]
*Source: Monster Manual (2024) p. 175. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Hydra

*Multiheaded Serpent of Legend*

- **Habitat.** Coastal, Swamp  
- **Treasure.** Any  

Hydras are storied hero slayers with vicious, serpentine heads and infamous regenerative powers. Endlessly hungry, they devour any creatures they catch. Hydras that deplete an area of prey often go into a lengthy torpor until new prey arrives.

Most hydras have five heads, but some mature or battle-tested hydras have more. Such elder hydras might become local legends, known for their battles with heroes or for the riches lost in their domains.

While many hydras claim their own territories, wicked deities might use them to guard treasures or magical sites. Roll on or choose a result from the Hydra Lairs table to inspire why a hydra lurks where it does.

**Hydra Lairs**

`dice: [](hydra-xmm.md#^hydra-lairs)`

| dice: 1d4 | The Hydra Lurks Where It Does To... |
|-----------|-------------------------------------|
| 1 | Ensure none claim the weapon of a fallen hero. |
| 2 | Defend the home of a wise but sinister oracle. |
| 3 | Guard a magical herb that blooms once a year. |
| 4 | Protect a font of poison that pollutes a river. |
^hydra-lairs

```statblock
"name": "Hydra (XMM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "184"
"hit_dice": "16d12 + 80"
"modifier": !!int "4"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "20"
  - !!int "2"
  - !!int "10"
  - !!int "7"
"speed": "40 ft., swim 40 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+6"
"condition_immunities": "[[conditions#Blinded|blinded]], [[conditions#Charmed|charmed]],\
  \ [[conditions#Deafened|deafened]], [[conditions#Frightened|frightened]],\
  \ [[conditions#Stunned|stunned]], [[conditions#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": ""
"cr": "8"
"traits":
  - "desc": "The hydra can hold its breath for 1 hour."
    "name": "Hold Breath"
  - "desc": "The hydra has five heads. Whenever the hydra takes 25 damage or more\
      \ on a single turn, one of its heads dies. The hydra dies if all its heads are\
      \ dead. At the end of each of its turns when it has at least one living head,\
      \ the hydra grows two heads for each of its heads that died since its last turn,\
      \ unless it has taken Fire damage since its last turn. The hydra regains 20\
      \ [[hit-points-xphb|Hit Points]] when it grows\
      \ new heads."
    "name": "Multiple Heads"
  - "desc": "For each head the hydra has beyond one, it gets an extra [[reaction-xphb|Reaction]]\
      \ that can be used only for [[actions#Opportunity%20Attack|Opportunity Attacks]]."
    "name": "Reactive Heads"
"actions":
  - "desc": "The hydra makes as many Bite attacks as it has heads."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 10 ft. Hit: 10 (1d10 + 5) Piercing damage."
    "name": "Bite"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/hydra-xmm.webp"
```
^statblock

## Environment

coastal, swamp

## Player-Facing Summary

Hydra xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of hydra xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around hydra xmm.

## Adventure Hooks

- A rumor ties hydra xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at hydra xmm to avert a public scandal.
- A map overlay reveals a hidden approach to hydra xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
