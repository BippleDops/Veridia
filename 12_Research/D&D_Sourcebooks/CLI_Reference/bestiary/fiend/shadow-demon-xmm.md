---
aliases:
- Shadow Demon
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
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
- world/both
type: monster
updated: '2025-08-12T23:37:35.506917'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-shadow-demon-xmm-shadow-demon-xmm.svg)

# [[shadow-demon-xmm|Shadow Demon]]
*Source: Monster Manual (2024) p. 273*  

## Shadow Demon

*Vestige of Evil*

- **Habitat.** Planar (Abyss)  
- **Treasure.** None  

Shadow demons form when exceptionally wicked demons are destroyed and prevented from reconstituting their physical forms in the Abyss. This might occur due to divine intervention, when a demon is destroyed in the Abyss, or under more unusual circumstances. Shadow demons are the incorporeal remnants of these destroyed demons' evil. They usually vaguely resemble their former shapes, but some take purposefully deceptive shapes. Many lurk in dark places or venture out only at night to hide their true forms from those they manipulate.

Shadow demons seek ways to regain their former might and take revenge on those who destroyed them. They often ingratiate themselves with more powerful demons or mortal spellcasters, bargaining with and coercing others into restoring them to power. Many try to claim or corrupt souls to restore their fiendish forms, while some shadow demons seek wicked relics or nexuses of profane magic. It typically takes shadow demons centuries to recover their demonic power, if they ever do.

Particularly powerful demons might return as multiple shadow demons after being defeated. These fiendish entities each think they're the true manifestation of their past self and hunt one another to recover their power.

In rare cases, Fiends other than demons might adopt forms similar to shadow demons.

> [!quote] A quote from Tarsheva Longreach, Planar Traveler  
> 
> There are three rules to endings. First, good always wins. Second, evil always returns. Third, the first rule isn't always true.


```statblock
"name": "Shadow Demon (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "1"
  - !!int "17"
  - !!int "12"
  - !!int "14"
  - !!int "13"
  - !!int "14"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  - "dexterity": !!int "5"
  - "charisma": !!int "4"
"skillsaves":
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+7"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid, bludgeoning, cold, fire, lightning, piercing, slashing,\
  \ thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Grappled|grappled]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned]],\
  \ [[conditions#Prone|prone]], [[conditions#Restrained|restrained]]"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal; telepathy 120 ft."
"cr": "4"
"traits":
  - "desc": "If the demon dies outside the Abyss, its body dissolves into ichor, and\
      \ it gains a new body instantly, reviving with all its [[hit-points-xphb|Hit Points]]\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The demon can move through other creatures and objects as if they were\
      \ [[difficult-terrain-xphb|Difficult Terrain]].\
      \ It takes 5 (d10) Force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
  - "desc": "While in [[bright-light-xphb|Bright Light]],\
      \ the demon has [[disadvantage-xphb|Disadvantage]]\
      \ on ability checks and attack rolls."
    "name": "Light Sensitivity"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 16 (3d8 + 3) Psychic damage."
    "name": "Umbral Claw"
"bonus_actions":
  - "desc": "While in [[dim-light-xphb|Dim Light]]\
      \ or [[darkness-xphb|Darkness]], the demon\
      \ takes the Hide action."
    "name": "Shadow Stealth"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/shadow-demon-xmm.webp"
```
^statblock

## Environment

planar, abyss

## Player-Facing Summary

Shadow demon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of shadow demon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around shadow demon xmm.

## Adventure Hooks

- A rumor ties shadow demon xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at shadow demon xmm to avert a public scandal.
- A map overlay reveals a hidden approach to shadow demon xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
