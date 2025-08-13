---
aliases:
- Phoenix
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
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/elemental
- world/both
type: monster
updated: '2025-08-12T23:37:35.432799'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-phoenix-mpmm-phoenix-mpmm.svg)

# [Phoenix](3-Mechanics\CLI\bestiary\elemental/phoenix-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 206, Mordenkainen's Tome of Foes p. 199*  

> [!quote] A quote from Mordenkainen  
> 
> To rise like a phoenix from the ashes–so many use that quaint colloquialism. Little do they know about the true horror of such a rebirth.

Releasing a phoenix from the Inner Planes creates an explosion of fire that spreads across the sky. An enormous fiery bird forms in the center of the flames and smoke—an elder Elemental possessed by a need to burn everything to ash. The phoenix rarely stays in one place for long as it strives to transform the world into an inferno.

```statblock
"name": "Phoenix (MPMM)"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Typically  Neutral"
"ac": !!int "18"
"hp": !!int "175"
"hit_dice": "10d20 + 70"
"modifier": !!int "8"
"stats":
  - !!int "19"
  - !!int "26"
  - !!int "25"
  - !!int "2"
  - !!int "21"
  - !!int "18"
"speed": "20 ft., fly 120 ft."
"saves":
  - "wisdom": !!int "10"
  - "charisma": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire, poison"
"condition_immunities": "[exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [grappled](/03_Mechanics/CLI/conditions.md#Grappled), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned),\
  \ [prone](/03_Mechanics/CLI/conditions.md#Prone), [restrained](/03_Mechanics/CLI/conditions.md#Restrained),\
  \ [stunned](/03_Mechanics/CLI/conditions.md#Stunned)"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "16"
"traits":
  - "desc": "If the phoenix dies, it explodes. Each creature in 60-foot-radius sphere\
      \ centered on the phoenix must make a DC 20 Dexterity saving throw, taking 22\
      \ (4d10) fire damage on a failed save, or half as much damage on a successful\
      \ one. The fire ignites flammable objects in the area that aren't being worn\
      \ or carried.\n\nThe explosion destroys the phoenix's body and leaves behind\
      \ an egg-shaped cinder, which weighs 5 pounds. The cinder deals 21 (6d6) fire\
      \ damage to any creature that touches it, though no more than once per round.\
      \ The cinder is immune to all damage, and after d6 days, it hatches a new phoenix."
    "name": "Fiery Death and Rebirth"
  - "desc": "The phoenix can move through a space as narrow as 1 inch wide without\
      \ squeezing.\n\nAny creature that touches the phoenix or hits it with a melee\
      \ attack while within 5 feet of it takes 5 (d10) fire damage. In addition, the\
      \ phoenix can enter a hostile creature's space and stop there. The first time\
      \ it enters a creature's space on a turn, that creature takes 5 (d10) fire damage.\n\
      \nWith a touch, the phoenix can also ignite flammable objects that aren't worn\
      \ or carried (no action required)."
    "name": "Fire Form"
  - "desc": "The phoenix doesn't provoke [opportunity attacks](/03_Mechanics/CLI/actions.md#Opportunity%20Attack)\
      \ when it flies out of an enemy's reach."
    "name": "Flyby"
  - "desc": "The phoenix sheds bright light in a 60-foot radius and dim light for\
      \ an additional 30 feet."
    "name": "Illumination"
  - "desc": "If the phoenix fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The phoenix deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The phoenix makes two attacks: one Beak attack and one Fiery Talons attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 15\
      \ (2d6 + 8) fire damage."
    "name": "Beak"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17\
      \ (2d8 + 8) fire damage."
    "name": "Fiery Talons"
"legendary_actions":
  - "desc": "The phoenix moves up to its speed."
    "name": "Move"
  - "desc": "The phoenix makes one beak attack."
    "name": "Peck"
  - "desc": "The phoenix moves up to its speed and makes one Fiery Talons attack."
    "name": "Swoop (Costs 2 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/phoenix-mpmm.webp"
```
^statblock

## Environment

desert, mountain

## Player-Facing Summary

Phoenix mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of phoenix mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around phoenix mpmm.

## Adventure Hooks

- A rumor ties phoenix mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at phoenix mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to phoenix mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
