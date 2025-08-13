---
updated: '2025-08-13T01:18:32.775254+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: '#^statblock'
aliases:
- Molydeus
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-molydeus-mpmm-molydeus-mpmm.svg)

# [Molydeus](3-Mechanics\CLI\bestiary\fiend/molydeus-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 184, Mordenkainen's Tome of Foes p. 134*  

The fearsome molydeus speaks for the demon lord it serves and enforces its master's will. This demon is 12 feet tall, and its bipedal body has a slavering wolfs head and a fanged serpent's head. Its demon lord can speak and see through the serpent head; this master also uses the molydeus to guard treasures, slay foes, and terrify troops into obedience.

A molydeus' demon lord bestows on it a powerful weapon that dissolves if the molydeus dies. The weapon's form varies depending on the creator, but that doesn't affect the weapon's capabilities.

```statblock
"name": "Molydeus (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "216"
"hit_dice": "16d12 + 112"
"modifier": !!int "6"
"stats":
  - !!int "28"
  - !!int "22"
  - !!int "25"
  - !!int "21"
  - !!int "24"
  - !!int "24"
"speed": "40 ft."
"saves":
  - "strength": !!int "16"
  - "constitution": !!int "14"
  - "wisdom": !!int "14"
  - "charisma": !!int "14"
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+21"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[blinded](/03_Mechanics/CLI/conditions.md#Blinded), [charmed](/03_Mechanics/CLI/conditions.md#Charmed),\
  \ [deafened](/03_Mechanics/CLI/conditions.md#Deafened), [frightened](/03_Mechanics/CLI/conditions.md#Frightened),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned), [stunned](/03_Mechanics/CLI/conditions.md#Stunned)"
"senses": "truesight 120 ft., passive Perception 31"
"languages": "Abyssal, telepathy 120 ft."
"cr": "21"
"traits":
  - "desc": "If the molydeus fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The molydeus has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The molydeus makes one Demonic Weapon attack, one Snakebite attack, and\
      \ one Wolf Bite attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 35\
      \ (4d12 + 9) force damage. If the target has at least one head and the molydeus\
      \ rolled a 20 on the attack roll, the target is decapitated and dies if it can't\
      \ survive without that head. A target is immune to this effect if it takes none\
      \ of the damage, has legendary actions, or is Huge or larger. Such a creature\
      \ takes an extra 27 (6d8) force damage from the hit."
    "name": "Demonic Weapon"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one creature. Hit:\
      \ 16 (2d6 + 9) poison damage. The target must succeed on a DC 22 Constitution\
      \ saving throw, or its hit point maximum is reduced by an amount equal to the\
      \ damage taken. This reduction lasts until the target finishes a long rest.\
      \ The target transforms into a [manes](/03_Mechanics/CLI/bestiary/fiend/manes-xmm.md)\
      \ if this reduces its hit point maximum to 0. This transformation can be ended\
      \ only by a [wish](/03_Mechanics/CLI/spells/wish-xphb.md) spell."
    "name": "Snakebite"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 25\
      \ (3d10 + 9) necrotic damage."
    "name": "Wolf Bite"
  - "desc": "The molydeus casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 22):\n\
      \nAt will: [dispel magic](/03_Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [polymorph](/03_Mechanics/CLI/spells/polymorph-xphb.md), [telekinesis](/03_Mechanics/CLI/spells/telekinesis-xphb.md),\
      \ [teleport](/03_Mechanics/CLI/spells/teleport-xphb.md)\n\n3/day: [lightning\
      \ bolt](/03_Mechanics/CLI/spells/lightning-bolt-xphb.md)"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The molydeus makes one Demonic Weapon or Snakebite attack."
    "name": "Attack"
  - "desc": "The molydeus moves without provoking [opportunity attacks](/03_Mechanics/CLI/actions.md#Opportunity%20Attack)."
    "name": "Move"
  - "desc": "The molydeus uses Spellcasting."
    "name": "Cast a Spell (Costs 2 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/molydeus-mpmm.webp"
```
^statblock

## Player-Facing Summary

Molydeus mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of molydeus mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around molydeus mpmm.

## Adventure Hooks

- A rumor ties molydeus mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at molydeus mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to molydeus mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
