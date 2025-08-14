---
aliases:
- Adult Kruthik
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
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
- world/both
type: monster
updated: '2025-08-12T23:37:34.977350'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-adult-kruthik-mpmm-adult-kruthik-mpmm.svg)

# [[adult-kruthik-mpmm|Adult Kruthik]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 169, Mordenkainen's Tome of Foes p. 212*  

It takes six months of steady eating for a [[young-kruthik-mpmm|young kruthik]] to reach adult size. The natural life span of an adult kruthik is roughly seven years.

Adult kruthiks grow spiky protrusions on their legs and can fling these dagger-sized spikes at enemies beyond the reach of their claws.

## Kruthiks

> [!quote] A quote from Mordenkainen  
> 
> Imagine a hive of ants the size of horses, but the ants are wearing armor.

> [!quote] A quote from Mordenkainen  
> 
> Other creatures that abide in hives serve a purpose in the natural world. Bees pollinate flowers. Termites make earth out of wood. Kruthiks, by contrast, slay societies.

Kruthiks are chitin-covered reptiles that hunt in packs and nest in sprawling subterranean warrens. They are attracted to sources of heat, such as dwarven forges and pools of molten lava, and carve out lairs as close to such locations as possible. As they burrow through the earth, they leave behind tunnels—evidence that is often the first clue to the nearby presence of a kruthik hive. Kruthiks also make use of preexisting underground chambers, incorporating them into their lairs when they can.

Kruthiks communicate with one another through a series of hisses and chittering noises. These sounds can often be heard in advance of a kruthik attack. Whenever their lair is invaded, kruthik guards send out an alarm by rapidly tapping the stone floor with their sharp legs.

In addition to having an acute sense of smell, kruthiks can see in the dark and can detect vibrations in the earth around them. They take the scent of their own dead as a warning and avoid areas where many other kruthiks have died. Slaying a sufficient number of kruthiks in one area might cause the remaining hive members to move elsewhere.

Although they can feed on carrion, kruthiks prefer live prey. They kill enemies by impaling them on their spiked limbs, then grind up the flesh and bones with mandibles strong enough to chew rock. When several kruthiks gang up on a single foe, they become frenzied and even more lethal.

Kruthiks abide the presence of Constructs, Elementals, Oozes, and Undead, and they use such creatures to help guard their hive. They are smart enough to barricade some tunnels and dig new ones that keep their neighbors away from their eggs.

```statblock
"name": "Adult Kruthik (MPMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "16"
  - !!int "15"
  - !!int "7"
  - !!int "12"
  - !!int "8"
"speed": "40 ft., burrow 20 ft., climb 40 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+5"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 15"
"languages": "Kruthik"
"cr": "2"
"traits":
  - "desc": "The kruthik has advantage on an attack roll against a creature if at\
      \ least one of the kruthik's allies is within 5 feet of the creature and the\
      \ ally isn't [[conditions#Incapacitated|incapacitated]]."
    "name": "Pack Tactics"
  - "desc": "The kruthik can burrow through solid rock at half its burrowing speed\
      \ and leaves a 5-foot-diameter tunnel in its wake."
    "name": "Tunneler"
"actions":
  - "desc": "The kruthik makes two Stab or Spike attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage."
    "name": "Stab"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit:\
      \ 5 (1d4 + 3) piercing damage."
    "name": "Spike"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/adult-kruthik-mpmm.webp"
```
^statblock

## Environment

desert, mountain, underdark

## Player-Facing Summary

Adult kruthik mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of adult kruthik mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around adult kruthik mpmm.

## Adventure Hooks

- A rumor ties adult kruthik mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at adult kruthik mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to adult kruthik mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
