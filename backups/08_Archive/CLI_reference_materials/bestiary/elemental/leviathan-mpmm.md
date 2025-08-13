---
aliases:
- Leviathan
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/elemental
- world/aquabyssos
- world/both
type: monster
updated: '2025-08-12T23:37:35.451432'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-leviathan-mpmm-leviathan-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\elemental/leviathan-mpmm|Leviathan]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 171, Mordenkainen's Tome of Foes p. 198*  

A leviathan is an immense creature that acts as a force of nature, dragging ships down to the ocean's depths and washing away coastal settlements. When called forth, a leviathan arises from a large body of water and takes on the form of a gigantic serpent.

Usually found only on the Elemental Plane of Water, a leviathan sometimes swims through a portal to another world, where tritons, sea elves, and other aquatic folk attempt to contain it. Nihilistic cults have also been known to perform arduous rituals to summon a leviathan to a world, with the aim of using the creature to destroy coastal communities. Those cultists often consider it a blessing to drown themselves in the elemental's waters.

```statblock
"name": "Leviathan (MPMM)"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Typically  Neutral"
"ac": !!int "17"
"hp": !!int "328"
"hit_dice": "16d20 + 160"
"modifier": !!int "7"
"stats":
  - !!int "27"
  - !!int "24"
  - !!int "30"
  - !!int "2"
  - !!int "18"
  - !!int "17"
"speed": "40 ft., swim 120 ft."
"saves":
  - "wisdom": !!int "10"
  - "charisma": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Grappled|grappled]], [[/03_Mechanics/CLI/conditions#Paralyzed|paralyzed]],\
  \ [[/03_Mechanics/CLI/conditions#Petrified|petrified]], [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]],\
  \ [[/03_Mechanics/CLI/conditions#Prone|prone]], [[/03_Mechanics/CLI/conditions#Restrained|restrained]],\
  \ [[/03_Mechanics/CLI/conditions#Stunned|stunned]]"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "20"
"traits":
  - "desc": "If the leviathan fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "If the leviathan takes 50 cold damage or more during a single turn, the\
      \ leviathan partially freezes; until the end of its next turn, its speeds are\
      \ reduced to 20 feet, and it makes attack rolls with disadvantage."
    "name": "Partial Freeze"
  - "desc": "The leviathan deals double damage to objects and structures."
    "name": "Siege Monster"
  - "desc": "The leviathan can enter a hostile creature's space and stop there. It\
      \ can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Water Form"
"actions":
  - "desc": "The leviathan makes one Slam attack and one Tail attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 21\
      \ (2d12 + 8) bludgeoning damage plus 13 (2d12) acid damage."
    "name": "Slam"
  - "desc": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 19\
      \ (2d10 + 8) bludgeoning damage plus 10 (3d6) acid damage."
    "name": "Tail"
  - "desc": "The leviathan magically creates a wave of water that extends from a point\
      \ it can see within 120 feet of itself. The wave is up to 250 feet long, up\
      \ to 250 feet tall, and up to 50 feet wide. Each creature in the wave must make\
      \ a DC 24 Strength saving throw. On a failed save, a creature takes 45 (7d12)\
      \ bludgeoning damage and is knocked [[/03_Mechanics/CLI/conditions#Prone|prone]].\
      \ On a successful save, a creature takes half as much damage and isn't knocked\
      \ [[/03_Mechanics/CLI/conditions#Prone|prone]]. The water spreads out across\
      \ the ground in all directions, extinguishing unprotected flames in its area\
      \ and within 250 feet of it, and then it vanishes."
    "name": "Tidal Wave (Recharge 6)"
"legendary_actions":
  - "desc": "The leviathan moves up to its speed."
    "name": "Move"
  - "desc": "The leviathan makes one Slam attack."
    "name": "Slam (Costs 2 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/leviathan-mpmm.webp"
```
^statblock

## Environment

coastal, underwater

## Player-Facing Summary

Leviathan mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of leviathan mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around leviathan mpmm.

## Adventure Hooks

- A rumor ties leviathan mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at leviathan mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to leviathan mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
