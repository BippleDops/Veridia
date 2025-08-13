---
aliases:
- Chuul
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
- world/both
type: monster
updated: '2025-08-12T23:37:35.346814'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-chuul-xmm-chuul-xmm.svg)

# [Chuul](3-Mechanics\CLI\bestiary\aberration/chuul-xmm.md)
*Source: Monster Manual (2024) p. 71. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Chuul

*Chitinous Servant of Primeval Powers*

- **Habitat.** Coastal, Swamp, Underdark  
- **Treasure.** Relics  

Chuuls originated in forgotten ages when aboleths and stranger beings ruled alien empires beneath the waves. The aboleths transformed numerous deep-sea predators into servants that could venture beyond the seas to claim more magic and creatures to exploit. Chuuls are the most enduring of these bizarre servants.

Many chuuls serve aboleth overlords, carrying out their whims amid lightless seas and primeval swamps. Other chuuls obey new aberrant masters, such as beholders, grells, or mind flayers. Some chuuls follow their own drives, endlessly collecting ancient magic treasures or interpreting age-old orders to bizarre ends. Regardless of their agendas, chuuls snare creatures in their massive pincers before rendering foes helpless with their paralytic tentacles.

Chuuls don't age and can lie dormant in hidden places for millennia before threats, ancient orders, or strange compulsions awaken them.

```statblock
"name": "Chuul (XMM)"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "10"
  - !!int "16"
  - !!int "5"
  - !!int "11"
  - !!int "5"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "understands Deep Speech but can't speak"
"cr": "4"
"traits":
  - "desc": "The chuul can breathe air and water."
    "name": "Amphibious"
  - "desc": "The chuul senses magic within 120 feet of itself. This trait otherwise\
      \ works like the [Detect Magic](/03_Mechanics/CLI/spells/detect-magic-xphb.md)\
      \ spell but isn't itself magical."
    "name": "Sense Magic"
"actions":
  - "desc": "The chuul makes two Pincer attacks and uses Paralyzing Tentacles."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +6, reach 10 ft. Hit: 9 (1d10 + 4) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, it has the [Grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ condition (escape DC 14) from one of two pincers."
    "name": "Pincer"
  - "desc": "Constitution Saving Throw: DC 13, one creature [Grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ by the chuul. Failure: The target has the [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically.\
      \ While [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned), the target has\
      \ the [Paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed) condition."
    "name": "Paralyzing Tentacles"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/chuul-xmm.webp"
```
^statblock

## Environment

coastal, swamp, underdark

## Player-Facing Summary

Chuul xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of chuul xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around chuul xmm.

## Adventure Hooks

- A rumor ties chuul xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at chuul xmm to avert a public scandal.
- A map overlay reveals a hidden approach to chuul xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
