---
aliases:
- Grell
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
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
- world/both
type: monster
updated: '2025-08-13T12:34:19.734723+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-grell-xmm-grell-xmm.svg)

# [[3-Mechanics\CLI\bestiary\aberration/grell-xmm|Grell]]
*Source: Monster Manual (2024) p. 157*  

## Grell

*Bizarre Hunter That Travels between Worlds*

- **Habitat.** Underdark  
- **Treasure.** None  

With barbed tentacles sprouting from their brain-shaped bodies, grells hunt the lightless depths. These silent predators defy gravity, allowing them to strike from unexpected places, and they perceive their surroundings via sound and electrical fields. Their tentacles secrete paralytic venom, which prevents most creatures ambushed by grells from crying out before being dragged into the dark and consumed.

Grells are sapient beings, but their intellects and motivations are alien to most. They typically cooperate with one another only to defeat more powerful prey. Most demonstrate no interest in creating things or in communicating with other creatures, including their own kind.

Many grells pursue methods of traveling between worlds and planes of existence. They sometimes slip onto star-faring vessels or enter portals heedless of their destination. Roll on or choose a result from the Grell Explorations table to inspire why grells seek passage between realms.

**Grell Explorations**

`dice: [](grell-xmm.md#^grell-explorations)`

| dice: 1d6 | Grells Travel Because They Are... |
|-----------|-----------------------------------|
| 1 | Advanced viruses, each the clone of all other grell. They exist only to feed and spread. |
| 2 | The larvae of another creature and require electrically charged environs to reproduce. |
| 3 | Seeking to escape some catastrophe or terror lurking in the depths. |
| 4 | Supernaturally connected to ravenous alien beings and serve as their feeding appendages. |
| 5 | Vestiges of an ancient evil that will return if grells collectively consume enough creatures. |
| 6 | Without souls, but convinced they can attain souls by eating certain beings. |
^grell-explorations

> [!quote] A quote from Evard  
> 
> For meal, my hunger grinds within my teeth. For might, my hunger clenches in my grip. But for what we're told we mustn't know, my hunger snaps a raptor's beak and makes my mind a muscle that knows only how to chew.


```statblock
"name": "Grell (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"modifier": !!int "6"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "13"
  - !!int "12"
  - !!int "11"
  - !!int "9"
"speed": "10 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+6"
"damage_immunities": "lightning"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Blinded|blinded]], [[/03_Mechanics/CLI/conditions#Prone|prone]]"
"senses": "blindsight 60 ft., passive Perception 14"
"languages": "Deep Speech"
"cr": "3"
"traits":
  - "desc": "The grell needn't spend extra movement to move a creature it is grappling."
    "name": "Abduct"
"actions":
  - "desc": "The grell makes one Beak attack and one Paralyzing Tentacles attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 11 (2d8 + 2) Piercing damage."
    "name": "Beak"
  - "desc": "Melee Attack Roll: +4, reach 10 ft. Hit: 7 (1d10 + 2) Piercing damage.\
      \ If the target is a Medium or smaller creature, it has the [[/03_Mechanics/CLI/conditions#Grappled|Grappled]]\
      \ condition (escape DC 12) from two of ten tentacles. The target is also subjected\
      \ to the following effect. Constitution Saving Throw: DC 11. Failure: The\
      \ target has the [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]] condition\
      \ and repeats the save at the end of each of its turns, ending the effect on\
      \ itself on a success. After 1 minute, it succeeds automatically. While [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]],\
      \ the target has the [[/03_Mechanics/CLI/conditions#Paralyzed|Paralyzed]] condition."
    "name": "Paralyzing Tentacles"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/grell-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Grell xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of grell xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around grell xmm.

## Adventure Hooks

- A rumor ties grell xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at grell xmm to avert a public scandal.
- A map overlay reveals a hidden approach to grell xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
