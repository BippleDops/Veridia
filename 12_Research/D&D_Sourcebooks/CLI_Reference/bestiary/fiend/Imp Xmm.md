---
aliases:
- Imp
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
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/fiend/devil
- world/both
type: monster
updated: '2025-08-13T12:34:05.792273+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-imp-xmm-imp-xmm.svg)

# [[3-Mechanics\CLI\bestiary\fiend/imp-xmm|Imp]]
*Source: Monster Manual (2024) p. 177, Player's Handbook (2024) p. 352. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Imp

*Devil of Pettiness and Suspicion*

- **Habitat.** Any  
- **Treasure.** None  

Known for their cowardice and toadying, imps serve devils and wicked magic-users. Their abilities to shape-shift and pass unseen make them skillful spies and adept at fleeing danger. Imps sent to surveil other creatures relate what they discover to their masters, but they frequently omit important details or cast events in the worst possible light to mislead their masters into following the imps' devilish council.

Imps without masters delight in manipulating other creatures and inflating their own egos. They might take over bands of weaker monsters, or they might pose as helpful spirits and trick influential individuals into pursuing nefarious ends.

> [!quote] A quote from Skeever, Imp Servant of Firan Zal'Honan  
> 
> I can tell you what I know, but wouldn't you rather I tell you what'll let you do what you know you're going to do anyway?


```statblock
"name": "Imp (XMM)"
"size": "Tiny"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "21"
"hit_dice": "6d4 + 6"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "17"
  - !!int "13"
  - !!int "11"
  - !!int "12"
  - !!int "14"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Deception|Deception]]"
    "desc": "+4"
  - "name": "[[/03_Mechanics/CLI/skills#Insight|Insight]]"
    "desc": "+3"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+5"
"damage_resistances": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft. (unimpeded by magical [[/03_Mechanics/CLI/variant-rules/darkness-xphb|Darkness]]),\
  \ passive Perception 11"
"languages": "Common, Infernal"
"cr": "1"
"traits":
  - "desc": "The imp has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Piercing damage\
      \ plus 7 (2d6) Poison damage."
    "name": "Sting"
  - "desc": "The imp shape-shifts to resemble a rat ([[/03_Mechanics/CLI/variant-rules/speed-xphb|Speed]]\
      \ 20 ft.), a raven (20 ft., Fly 60 ft.), or a spider (20 ft., Climb 20 ft.),\
      \ or it returns to its true form. Its statistics are the same in each form,\
      \ except for its [[/03_Mechanics/CLI/variant-rules/speed-xphb|Speed]]. Any\
      \ equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
  - "desc": "The imp casts [[/03_Mechanics/CLI/spells/invisibility-xphb|Invisibility]]\
      \ on itself, requiring no spell components and using Charisma as the spellcasting\
      \ ability.\n"
    "name": "Invisibility"
"source":
  - "XMM"
  - "XPHB"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/imp-xmm.webp"
```
^statblock

## Environment

any

## Player-Facing Summary

Imp xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of imp xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around imp xmm.

## Adventure Hooks

- A rumor ties imp xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at imp xmm to avert a public scandal.
- A map overlay reveals a hidden approach to imp xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
