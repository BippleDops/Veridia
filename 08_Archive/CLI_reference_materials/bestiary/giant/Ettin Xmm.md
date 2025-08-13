---
aliases:
- Ettin
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
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
- world/both
type: monster
updated: '2025-08-13T12:34:05.375194+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ettin-xmm-ettin-xmm.svg)

# [[3-Mechanics\CLI\bestiary\giant/ettin-xmm|Ettin]]
*Source: Monster Manual (2024) p. 116. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Ettin

*Quarrelsome Two-Headed Giant*

- **Habitat.** Hill, Mountain, Underdark  
- **Treasure.** Individual  

Ettins are physically powerful Giants with two heads. While many ettins have features similar to hill giants, others have more bestial or unusual traits, such as tusks, short horns, or a single eye on each head.

Ettins frequently ally with other Giants or groups that value their strength, such as hill giants, bandits, or ogres. Some ettins possess mystical ties to the lands they inhabit, and they might know or guard secrets valued by druids or Fey.

Each ettin head has a distinct personality. While this makes some ettins quarrelsome with themselves and others, many function as a team. An ettin head might have its own name, or both heads might refer to themselves as a single being—either with one name or a portmanteau of two.

Roll on or choose a result from the Ettin Interactions table to inspire how an ettin's heads are interacting when the creature is encountered.

**Ettin Interactions**

`dice: [](ettin-xmm.md#^ettin-interactions)`

| dice: 1d8 | The Ettin's Heads Are... |
|-----------|--------------------------|
| 1 | Amping up one another in preparation for a conflict or challenge. |
| 2 | Arguing over plans for battle, dinner, or how to spend the day. |
| 3 | Criticizing one another as they perform separate tasks. |
| 4 | Engaged in a staring contest. |
| 5 | Making polite small talk as if they were meeting for the first time. |
| 6 | Performatively ignoring one another. |
| 7 | Talking over an increasingly convoluted plot. |
| 8 | Trying to keep one another awake. |
^ettin-interactions

> [!quote] A quote from Bertrand, Inquisitor of the Mind Fire  
> 
> Twice the malice, aggressiveness, and appetite—the ettin demonstrates that two heads aren't necessarily better than one.


```statblock
"name": "Ettin (XMM)"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"modifier": !!int "-1"
"stats":
  - !!int "21"
  - !!int "8"
  - !!int "17"
  - !!int "6"
  - !!int "10"
  - !!int "8"
"speed": "40 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+4"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Blinded|blinded]], [[/03_Mechanics/CLI/conditions#Charmed|charmed]],\
  \ [[/03_Mechanics/CLI/conditions#Deafened|deafened]], [[/03_Mechanics/CLI/conditions#Frightened|frightened]],\
  \ [[/03_Mechanics/CLI/conditions#Stunned|stunned]], [[/03_Mechanics/CLI/conditions#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Giant"
"cr": "4"
"actions":
  - "desc": "The ettin makes one Battleaxe attack and one Morningstar attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 14 (2d8 + 5) Slashing damage.\
      \ If the target is a Large or smaller creature, it has the [[/03_Mechanics/CLI/conditions#Prone|Prone]]\
      \ condition."
    "name": "Battleaxe"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 14 (2d8 + 5) Piercing damage,\
      \ and the target has [[/03_Mechanics/CLI/variant-rules/disadvantage-xphb|Disadvantage]]\
      \ on the next attack roll it makes before the end of its next turn."
    "name": "Morningstar"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/giant/token/ettin-xmm.webp"
```
^statblock

## Environment

hill, mountain, underdark

## Player-Facing Summary

Ettin xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ettin xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ettin xmm.

## Adventure Hooks

- A rumor ties ettin xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ettin xmm to avert a public scandal.
- A map overlay reveals a hidden approach to ettin xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
