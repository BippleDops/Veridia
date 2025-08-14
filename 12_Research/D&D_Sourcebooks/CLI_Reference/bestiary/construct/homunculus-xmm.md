# homunculus-xmm

---
title: homunculus xmm
aliases:
- Homunculus
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/construct
- monster
- ttrpg-cli/monster/cr/0
- world/both
- research
- ttrpg-cli/monster/environment/any
- active
- status/in-progress
- ttrpg-cli/monster/size/tiny
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.870236'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-homunculus-xmm-homunculus-xmm.svg)

# [[homunculus-xmm|Homunculus]]
*Source: Monster Manual (2024) p. 172. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Homunculus

*Winged Servant Given Magical Life*

- **Habitat.** Any  
- **Treasure.** None  

A mage can create a cat-sized, obedient assistant called a homunculus through a ritual that uses the mage's blood. Each homunculus shares a telepathic bond with the mage who created it and loyally serves its creator. A homunculus is reduced to inert material if its creator dies.

A homunculus's appearance reflects its creator's tastes. Roll on or choose a result from the Homunculus Features table to inspire a homunculus's form.

**Homunculus Features**

`dice: [](homunculus-xmm.md#^homunculus-features)`

| dice: 1d8 | The Homunculus Has Features That Are... |
|-----------|-----------------------------------------|
| 1 | Bat-like with tattered wings. |
| 2 | Made of soft metal and delicate gears. |
| 3 | Marked with its creator's symbol. |
| 4 | Similar to those of a winged humanoid. |
| 5 | Sprouting flowers and leaves. |
| 6 | Suggestive of its creator's appearance. |
| 7 | Underdeveloped and fleshy with beady eyes. |
| 8 | Woven and patchwork, like a well-loved toy. |
^homunculus-features

```statblock
"name": "Homunculus (XMM)"
"size": "Tiny"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "4"
"hit_dice": "1d4 + 2"
"modifier": !!int "2"
"stats":
  - !!int "4"
  - !!int "15"
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "7"
"speed": "20 ft., fly 40 ft."
"saves":
  - "wisdom": !!int "2"
  - "charisma": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands Common plus one other language but can't speak"
"cr": "0"
"traits":
  - "desc": "While the homunculus is on the same plane of existence as its master,\
      \ the two of them can communicate telepathically with each other."
    "name": "Telepathic Bond"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 1 Piercing damage, and the\
      \ target is subjected to the following effect. Constitution Saving Throw:\
      \ DC 12. Failure: The target has the [[conditions#Poisoned|Poisoned]]\
      \ condition until the end of the homunculus's next turn. By 5th Failure: The\
      \ target has the [[conditions#Poisoned|Poisoned]] condition\
      \ for 1 minute. While [[conditions#Poisoned|Poisoned]], the\
      \ target has the [[conditions#Unconscious|Unconscious]] condition,\
      \ which ends early if the target takes any damage."
    "name": "Bite"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/construct/token/homunculus-xmm.webp"
```
^statblock

## Environment

any

## Player-Facing Summary

Homunculus xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of homunculus xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around homunculus xmm.

## Adventure Hooks

- A rumor ties homunculus xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at homunculus xmm to avert a public scandal.
- A map overlay reveals a hidden approach to homunculus xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
