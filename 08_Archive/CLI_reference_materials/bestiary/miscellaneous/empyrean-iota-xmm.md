---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1
  - ttrpg-cli/monster/environment/any
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type//titan
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Empyrean Iota
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-empyrean-iota-xmm-empyrean-iota-xmm.svg)

# [Empyrean Iota](3-Mechanics\CLI\bestiary\miscellaneous/empyrean-iota-xmm.md)
*Source: Monster Manual (2024) p. 112*  

Empyrean iotas are the thoughts, memories, or indirect attentions of deities personified and given a measure of autonomy. Resembling floating glyphs, motes of color, icons of divinity, or stranger shapes, these beings are messengers of the gods and aides to those gods' servants. Iotas have their own knowledge and personalities, though they might know little more than the realms and wishes of their creators.

## Empyreans

*Scions of the Gods*

- **Habitat.** Any  
- **Treasure.** Relics  

Empyreans are the spawn of deities. While not gods themselves, they possess divine influence and powers related to their divine parents. Some empyreans are near-demigods with fantastic might and the power to reshape mortal lives. Others are little more than divine thoughts or moments of immortal attention made manifest. Whether empyreans are idealized beings or vestiges of divinity, their appearances are influenced by their creators. Roll on or choose a result from the Empyrean Influences table to inspire what aspects of an empyrean's heritage manifest in its physical form.

**Empyrean Influences**

`dice: [](empyrean-iota-xmm.md#^empyrean-influences)`

| dice: 1d6 | The Empyrean Has Features That Are... |
|-----------|---------------------------------------|
| 1 | Balanced, naturalistic, or suggestive of watching eyes. |
| 2 | Colorful, shadowy, or fluid or that vary depending on the viewer. |
| 3 | Comforting and gentle or that remind viewers of pleasant memories. |
| 4 | Disconnected parts, visible thoughts, or errant shapes. |
| 5 | Machinelike, stoic, symmetrical, or suggestive of judgment. |
| 6 | Morbid, menacing, or monstrous or that embody the viewer's fears. |
^empyrean-influences

> [!quote] A quote from Kopoha, Scion of Storms  
> 
> One day I might be the god of storms—mind countless followers, answer prayers, change whole worlds—but, until then, I do what I please.


```statblock
"name": "Empyrean Iota (XMM)"
"size": "Medium"
"subtype": "titan"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "1"
  - !!int "14"
  - !!int "10"
  - !!int "15"
  - !!int "16"
  - !!int "16"
"speed": "5 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "[History](/03_Mechanics/CLI/skills.md#History)"
    "desc": "+4"
  - "name": "[Insight](/03_Mechanics/CLI/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[prone](/03_Mechanics/CLI/conditions.md#Prone)"
"senses": "truesight 30 ft., passive Perception 15"
"languages": "all"
"cr": "1"
"traits":
  - "desc": "The empyrean can move through other creatures and objects as if they\
      \ were [Difficult Terrain](/03_Mechanics/CLI/variant-rules/difficult-terrain-xphb.md).\
      \ It takes 5 (d10) Force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
  - "desc": "The empyrean has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee  or Ranged Attack Roll: +5, reach 5 ft. or range 30 ft. Hit:\
      \ 7 (1d8 + 3) Necrotic or Radiant damage (empyrean's choice)."
    "name": "Otherworldly Strike"
  - "desc": "The empyrean casts one of the following spells, requiring no Material\
      \ components and using Wisdom as the spellcasting ability:\n\n1/day each:\
      \ [Bless](/03_Mechanics/CLI/spells/bless-xphb.md), [Lesser Restoration](/03_Mechanics/CLI/spells/lesser-restoration-xphb.md)\
      \ (as an action)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The empyrean casts [Healing Word](/03_Mechanics/CLI/spells/healing-word-xphb.md),\
      \ using the same spellcasting ability as Spellcasting.\n"
    "name": "Healing Word (1/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/miscellaneous/token/empyrean-iota-xmm.webp"
```
^statblock

## Environment

any

## Player-Facing Summary

Empyrean iota xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of empyrean iota xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around empyrean iota xmm.

## Adventure Hooks

- A rumor ties empyrean iota xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at empyrean iota xmm to avert a public scandal.
- A map overlay reveals a hidden approach to empyrean iota xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
