---
aliases:
- Dao
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
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/earth
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental/genie
- world/both
type: monster
updated: '2025-08-12T23:37:35.441650'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-dao-xmm-dao-xmm.svg)

# [[dao-xmm|Dao]]
*Source: Monster Manual (2024) p. 89*  

## Dao

*Genie of the Earth*

- **Habitat.** Planar (Elemental Plane of Earth), Underdark  
- **Treasure.** Implements  

Genies of minerals and gemstones, dao embody the resolve of rock. Using innate magic, they move through the earth unimpeded, exploring depths inaccessible to most. Dao delight in the treasures of the earth, whether raw gemstones, jewelry crafted from pure metals, or wondrous fossils. In exchange for such treasures, dao might reveal underground mysteries, such as paths through the Underdark, buried ruins, or whole subterranean realms.

Many dao call the Elemental Plane of Earth home. There, they create cities that glitter with treasure. Among these realms is the labyrinthine expanse called the Great Dismal Delve or the Sevenfold Mazework, which protects the City of Jewels, the Iron Crucible, and the Strait of Magnets.

> [!quote] A quote from Gundren Rockseeker, Dwarf Treasure Hunter  
> 
> On the Elemental Plane of Earth, galaxies of gemstones twinkle over vaults of treasure. If dao are there, so is wealth worth hunting.


```statblock
"name": "Dao (XMM)"
"size": "Large"
"type": "elemental"
"subtype": "genie"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"modifier": !!int "1"
"stats":
  - !!int "23"
  - !!int "12"
  - !!int "24"
  - !!int "12"
  - !!int "13"
  - !!int "18"
"speed": "30 ft., burrow 30 ft., fly 30 ft. (hover)"
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "5"
"condition_immunities": "[[conditions#Petrified|petrified]]"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Primordial (Terran)"
"cr": "11"
"traits":
  - "desc": "The dao can burrow through nonmagical, unworked earth and stone. While\
      \ doing so, the dao doesn't disturb the material it moves through."
    "name": "Earth Glide"
  - "desc": "If the dao dies outside the Elemental Plane of Earth, its body dissolves\
      \ into dirt, and it gains a new body in d4 days, reviving with all its [[hit-points-xphb|Hit\
      \ Points]] somewhere on the\
      \ Plane of Earth."
    "name": "Elemental Restoration"
  - "desc": "The dao has [[advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The dao has a 30 percent chance of knowing the [[wish-xphb|Wish]]\
      \ spell. If the dao knows it, the dao can cast it only on behalf of a non-genie\
      \ creature who communicates a wish in a way the dao can understand. If the dao\
      \ casts the spell for the creature, the dao suffers none of the spell's stress.\
      \ Once the dao has cast it three times, the dao can't do so again for 365 days."
    "name": "Wishes"
"actions":
  - "desc": "The dao makes three Earthen Maul attacks or two Earth Burst attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +10, reach 5 ft. Hit: 20 (4d6 + 6) Bludgeoning\
      \ damage. If the target is a Large or smaller creature, it has the [[conditions#Prone|Prone]]\
      \ condition."
    "name": "Earthen Maul"
  - "desc": "Ranged Attack Roll: +10, range 120 ft. Hit: 15 (2d8 + 6) Bludgeoning\
      \ damage. Hit or Miss: Earth explodes from the target's space, creating the\
      \ following effect. Dexterity Saving Throw: DC 16, each creature in a 10-foot\
      \ [[emanation-area-of-effect-xphb|Emanation]]\
      \ originating from and including the target. Failure: 10 (3d6) Thunder damage."
    "name": "Earth Burst"
  - "desc": "The dao casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 16):\n\nAt\
      \ will: [[detect-evil-and-good-xphb|Detect Evil and Good]],\
      \ [[detect-magic-xphb|Detect Magic]], [[stone-shape-xphb|Stone Shape]]\n\
      \n1/day each: [[gaseous-form-xphb|Gaseous Form]],\
      \ [[invisibility-xphb|Invisibility]], [[move-earth-xphb|Move Earth]],\
      \ [[passwall-xphb|Passwall]], [[plane-shift-xphb|Plane Shift]],\
      \ [[tongues-xphb|Tongues]], [[wall-of-stone-xphb|Wall of Stone]]"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/dao-xmm.webp"
```
^statblock

## Environment

planar, earth, underdark

## Player-Facing Summary

Dao xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of dao xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around dao xmm.

## Adventure Hooks

- A rumor ties dao xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at dao xmm to avert a public scandal.
- A map overlay reveals a hidden approach to dao xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
