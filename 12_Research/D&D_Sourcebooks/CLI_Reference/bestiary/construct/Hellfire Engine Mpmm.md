# Hellfire Engine Mpmm

---
title: Hellfire Engine Mpmm
aliases:
- Hellfire Engine
type: monster
tags:
- both
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/construct
- monster
- ttrpg-cli/compendium/src/5e/mpmm
- world/both
- research
- active
- ttrpg-cli/monster/cr/16
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:06.076731+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-hellfire-engine-mpmm-hellfire-engine-mpmm.svg)

# [[hellfire-engine-mpmm|Hellfire Engine]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 152, Mordenkainen's Tome of Foes p. 165*  

Hellfire engines are semiautonomous bringers of destruction. Amnizus (in this book) and other devilish generals hold them in reserve until they are needed to repel an incursion by demons or crusading mortals, but occasionally one of these magical-mechanical hybrids gets loose, driven berserk by its need to destroy.

Hellfire engines take many forms, but all of them have one purpose: to mow down foes in waves. They are incapable of subtlety or trickery, but their destructive capability is immense.

Mortal creatures slain by hellfire engines are doomed to join the infernal legions in mere hours unless powerful magic-wielders intervene on their behalf. The archdukes of the Nine Hells would like nothing better than to modify this magic so it works against demons, too, but that discovery has eluded them so far.

```statblock
"name": "Hellfire Engine (MPMM)"
"size": "Huge"
"type": "construct"
"alignment": "Typically  Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "216"
"hit_dice": "16d12 + 112"
"modifier": !!int "3"
"stats":
  - !!int "20"
  - !!int "16"
  - !!int "24"
  - !!int "2"
  - !!int "10"
  - !!int "1"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "5"
  - "charisma": !!int "0"
"damage_resistances": "cold; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Deafened|deafened]],\
  \ [[conditions#Exhaustion|exhaustion]], [[conditions#Frightened|frightened]],\
  \ [[conditions#Paralyzed|paralyzed]], [[conditions#Poisoned|poisoned]],\
  \ [[conditions#Unconscious|unconscious]]"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Infernal but can't speak"
"cr": "16"
"traits":
  - "desc": "The hellfire engine is immune to any spell or effect that would alter\
      \ its form."
    "name": "Immutable Form"
  - "desc": "The hellfire engine has advantage on saving throws against spells and\
      \ other magical effects."
    "name": "Magic Resistance"
  - "desc": "The hellfire engine doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The hellfire engine moves up to its speed in a straight line. During\
      \ this move, it can enter Large or smaller creatures' spaces. A creature whose\
      \ space the hellfire engine enters must make a DC 18 Dexterity saving throw.\
      \ On a successful save, the creature is pushed to the nearest space out of the\
      \ hellfire engine's path. On a failed save, the creature falls [[conditions#Prone|prone]]\
      \ and takes 28 (8d6) bludgeoning damage.\n\nIf the hellfire engine remains in\
      \ the [[conditions#Prone|prone]] creature's space, the creature\
      \ is also [[conditions#Restrained|restrained]] until it's\
      \ no longer in the same space as the hellfire engine. While [[conditions#Restrained|restrained]]\
      \ in this way, the creature, or another creature within 5 feet of it, can make\
      \ a DC 18 Strength check. On a success, the creature is shunted to an unoccupied\
      \ space of its choice within 5 feet of the hellfire engine and is no longer\
      \ [[conditions#Restrained|restrained]]."
    "name": "Flesh-Crushing Stride"
  - "desc": "The hellfire engine uses one of the following options (choose one or\
      \ roll a d6):\n\n- 1–2 Bonemelt Sprayer. The hellfire engine spews acidic\
      \ flame in a 60-foot cone. Each creature in the cone must make a DC 20 Dexterity\
      \ saving throw, taking 11 (2d10) fire damage plus 18 (4d8) acid damage on a\
      \ failed save, or half as much damage on a successful one. Creatures that fail\
      \ the saving throw are drenched in burning acid and take 5 (d10) fire damage\
      \ plus 9 (2d8) acid damage at the end of their turns. An affected creature or\
      \ another creature within 5 feet of it can take an action to scrape off the\
      \ burning fuel.  \n- 3–4 Lightning Flail. Melee Weapon Attack: +10 to\
      \ hit, reach 15 ft., one creature. Hit: 18 (3d8 + 5) bludgeoning damage plus\
      \ 22 (5d8) lightning damage. Up to three other creatures of the hellfire engine's\
      \ choice that it can see within 30 feet of the target must each make a DC 20\
      \ Dexterity saving throw, taking 22 (5d8) lightning damage on a failed save,\
      \ or half as much damage on a successful one.  \n- 5–6 Thunder Cannon. The\
      \ hellfire engine targets a point within 120 feet of it that it can see. Each\
      \ creature within 30 feet of that point must make a DC 20 Dexterity saving throw,\
      \ taking 27 (5d10) bludgeoning damage plus 19 (3d12) thunder damage on a failed\
      \ save, or half as much damage on a successful one.  \n\n    If the chosen option\
      \ kills a creature, the creature's soul rises from the River Styx as a [[lemure-xmm|lemure]]\
      \ in Avernus in d4 hours. If the creature isn't revived before then, only a\
      \ [[wish-xphb|wish]] spell or killing the [[lemure-xmm|lemure]]\
      \ and casting true resurrection on the creature's original body can restore\
      \ it to life. Constructs and devils are immune to this effect.  "
    "name": "Hellfire Weapons"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/construct/token/hellfire-engine-mpmm.webp"
```
^statblock

## Player-Facing Summary

Hellfire engine mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of hellfire engine mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around hellfire engine mpmm.

## Adventure Hooks

- A rumor ties hellfire engine mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at hellfire engine mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to hellfire engine mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
