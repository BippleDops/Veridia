---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/15
  - ttrpg-cli/monster/environment/desert
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/gargantuan
  - ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Purple Worm
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-purple-worm-xmm-purple-worm-xmm.svg)

# [Purple Worm](3-Mechanics\CLI\bestiary\monstrosity/purple-worm-xmm.md)
*Source: Monster Manual (2024) p. 250. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Purple Worm

*What Gnaws the Roots of the World*

- **Habitat.** Desert, Underdark  
- **Treasure.** None  

Titanic purple worms burrow through the earth and sand. Ever ravenous, they devour smaller creatures and ravage entire communities in their aimless burrowing.

> [!quote] A quote from Morrikan d'Kundarak  
> 
> Purple worms alone are bad enough, but the blasted monsters have a knack for unearthing things that are even worse!


```statblock
"name": "Purple Worm (XMM)"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "247"
"hit_dice": "15d20 + 90"
"modifier": !!int "3"
"stats":
  - !!int "28"
  - !!int "7"
  - !!int "22"
  - !!int "1"
  - !!int "8"
  - !!int "4"
"speed": "50 ft., burrow 50 ft."
"saves":
  - "constitution": !!int "11"
  - "wisdom": !!int "4"
"senses": "blindsight 30 ft., tremorsense 60 ft., passive Perception 9"
"languages": ""
"cr": "15"
"traits":
  - "desc": "The worm can burrow through solid rock at half its [Burrow Speed](/03_Mechanics/CLI/variant-rules/burrow-speed-xphb.md)\
      \ and leaves a 10-foot-diameter tunnel in its wake."
    "name": "Tunneler"
"actions":
  - "desc": "The worm makes one Bite attack and one Tail Stinger attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +14, reach 10 ft. Hit: 22 (3d8 + 9) Piercing damage.\
      \ If the target is a Large or smaller creature, it has the [Grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ condition (escape DC 19), and it has the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ condition until the grapple ends."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +14, reach 10 ft. Hit: 16 (2d6 + 9) Piercing damage\
      \ plus 35 (10d6) Poison damage."
    "name": "Tail Stinger"
"bonus_actions":
  - "desc": "Strength Saving Throw: DC 19, one Large or smaller creature [Grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ by the worm (it can have up to three creatures swallowed at a time). Failure:\
      \ The target is swallowed by the worm, and the [Grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ condition ends. A swallowed creature has the [Blinded](/03_Mechanics/CLI/conditions.md#Blinded)\
      \ and [Restrained](/03_Mechanics/CLI/conditions.md#Restrained) conditions, has\
      \ [Total Cover](/03_Mechanics/CLI/variant-rules/cover-xphb.md) against attacks\
      \ and other effects outside the worm, and takes 17 (5d6) Acid damage at the\
      \ start of each of the worm's turns.\n\nIf the worm takes 30 damage or more\
      \ on a single turn from a creature inside it, the worm must succeed on a DC\
      \ 21 Constitution saving throw at the end of that turn or regurgitate all swallowed\
      \ creatures, each of which falls in a space within 5 feet of the worm and has\
      \ the [Prone](/03_Mechanics/CLI/conditions.md#Prone) condition. If the worm dies,\
      \ any swallowed creature no longer has the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ condition and can escape from the corpse using 20 feet of movement, exiting\
      \ [Prone](/03_Mechanics/CLI/conditions.md#Prone)."
    "name": "Swallow"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/purple-worm-xmm.webp"
```
^statblock

## Environment

desert, underdark

## Player-Facing Summary

Purple worm xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of purple worm xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around purple worm xmm.

## Adventure Hooks

- A rumor ties purple worm xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at purple worm xmm to avert a public scandal.
- A map overlay reveals a hidden approach to purple worm xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
