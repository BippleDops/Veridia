---
aliases:
- Poltergeist
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
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/undead
- world/both
type: monster
updated: '2025-08-12T23:37:35.662456'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-poltergeist-xmm-poltergeist-xmm.svg)

# [[poltergeist-xmm|Poltergeist]]
*Source: Monster Manual (2024) p. 246*  

## Poltergeist

*Malevolent or Mischievous Spirit*

- **Habitat.** Underdark, Urban  
- **Treasure.** Any  

Poltergeists are spirits that confuse and torment the living. While typically not visible, they sometimes appear as faded images of whoever they were in life. Some poltergeists don't realize they're dead and go through the motions of their past lives. Others are malicious beings or embodiments of fractured psyches that sow discord where they haunt.

Poltergeists telekinetically move objects in the places they lurk. Roll on or choose a result from the Poltergeist Activities table to inspire how a poltergeist menaces the living.

**Poltergeist Activities**

`dice: [](poltergeist-xmm.md#^poltergeist-activities)`

| dice: 1d8 | To Torment the Living, the Poltergeist... |
|-----------|-------------------------------------------|
| 1 | Keeps returning a discarded item. |
| 2 | Leaves footprints on vertical surfaces. |
| 3 | Makes noises like someone trapped in a wall. |
| 4 | Organizes a pack's contents across the floor. |
| 5 | Playfully puppets a corpse or doll. |
| 6 | Removes bedding while someone sleeps. |
| 7 | Sticks knives or weapons in the ceiling. |
| 8 | Uncannily stacks books, furniture, or utensils. |
^poltergeist-activities

```statblock
"name": "Poltergeist (XMM)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "1"
  - !!int "14"
  - !!int "11"
  - !!int "10"
  - !!int "10"
  - !!int "14"
"speed": "5 ft., fly 50 ft. (hover)"
"damage_resistances": "acid, bludgeoning, cold, fire, lightning, piercing, slashing,\
  \ thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Grappled|grappled]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned]],\
  \ [[conditions#Prone|prone]], [[conditions#Restrained|restrained]],\
  \ [[conditions#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common plus one other language"
"cr": "2"
"traits":
  - "desc": "The poltergeist can move through other creatures and objects as if they\
      \ were [[difficult-terrain-xphb|Difficult Terrain]].\
      \ It takes 5 (d10) Force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
"actions":
  - "desc": "The poltergeist makes one Object Slam attack and uses Telekinetic Thrust."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Attack Roll: +4, reach 5 ft. or range 30 ft. Hit:\
      \ 7 (2d4 + 2) Bludgeoning damage."
    "name": "Object Slam"
  - "desc": "Strength Saving Throw: DC 12, one creature the poltergeist can see\
      \ within 30 feet. Failure: 9 (2d6 + 2) Force damage, and the target is pushed\
      \ up to 30 feet straight away from the poltergeist."
    "name": "Telekinetic Thrust"
"bonus_actions":
  - "desc": "The poltergeist gives itself the [[conditions#Invisible|Invisible]]\
      \ condition or ends that condition on itself."
    "name": "Vanish"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/poltergeist-xmm.webp"
```
^statblock

## Environment

underdark, urban

## Player-Facing Summary

Poltergeist xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of poltergeist xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around poltergeist xmm.

## Adventure Hooks

- A rumor ties poltergeist xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at poltergeist xmm to avert a public scandal.
- A map overlay reveals a hidden approach to poltergeist xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
