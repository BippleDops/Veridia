---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/11
  - ttrpg-cli/monster/environment/urban
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/fiend/yugoloth
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Yagnoloth
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-yagnoloth-mpmm-v1-yagnoloth-mpmm.svg)

# [Yagnoloth](3-Mechanics\CLI\bestiary\fiend/yagnoloth-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 268, Mordenkainen's Tome of Foes p. 252*  

Anyone who would contract yugoloths for a task usually ends up dealing with a yagnoloth. Cunning negotiators, these strange Fiends handle the writing of contracts for their fellow yugoloths. Once a yagnoloth is hired, it communicates its employer's desires to the yugoloths it commands.

Although they are entrusted with leading lesser yugoloths, yagnoloths ultimately take their orders from arcanaloths and ultroloths. Aside from their superiors, yagnoloths have full authority over and expect obedience from the yugoloths under their command. Yagnoloths follow the dictates of the contracts they negotiate but always include a loophole to escape their obligations if the situation warrants.

A yagnoloth has one arm of human size and one giant-sized arm. During negotiations, the yagnoloth uses its human-sized arm to draft and sign contracts. When a show of force is necessary or when combat is joined, it attacks with its brutally powerful giant arm.

```statblock
"name": "Yagnoloth (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "147"
"hit_dice": "14d10 + 70"
"modifier": !!int "2"
"stats":
  - !!int "19"
  - !!int "14"
  - !!int "21"
  - !!int "16"
  - !!int "15"
  - !!int "18"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "6"
  - "intelligence": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Deception](/03_Mechanics/CLI/skills.md#Deception)"
    "desc": "+8"
  - "name": "[Insight](/03_Mechanics/CLI/skills.md#Insight)"
    "desc": "+6"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Persuasion](/03_Mechanics/CLI/skills.md#Persuasion)"
    "desc": "+8"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 16"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "11"
"traits":
  - "desc": "The yagnoloth has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The yagnoloth makes one Electrified Touch attack and one Massive Arm\
      \ attack, or it makes one Massive Arm attack and uses Battlefield Cunning, if\
      \ available, or Teleport."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 27\
      \ (6d8) lightning damage."
    "name": "Electrified Touch"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 23\
      \ (3d12 + 4) force damage. If the target is a creature, it must succeed on a\
      \ DC 16 Constitution saving throw or become [stunned](/03_Mechanics/CLI/conditions.md#Stunned)\
      \ until the end of the yagnoloth's next turn."
    "name": "Massive Arm"
  - "desc": "Up to two allied yugoloths within 60 feet of the yagnoloth that can hear\
      \ it can use their reactions to make one melee attack each."
    "name": "Battlefield Cunning (Recharge 4-6)"
  - "desc": "The yagnoloth touches one [incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated)\
      \ creature within 15 feet of it. The target takes 36 (7d8 + 4) necrotic damage,\
      \ and the yagnoloth gains temporary hit points equal to half the damage dealt.\
      \ The target must succeed on a DC 16 Constitution saving throw, or its hit point\
      \ maximum is reduced by an amount equal to half the necrotic damage taken. This\
      \ reduction lasts until the target finishes a long rest, and the target dies\
      \ if its hit point maximum is reduced to 0."
    "name": "Life Leech"
  - "desc": "The yagnoloth teleports, along with any equipment it is wearing or carrying,\
      \ up to 60 feet to an unoccupied space it can see."
    "name": "Teleport"
  - "desc": "The yagnoloth casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 16):\n\
      \nAt will: [darkness](/03_Mechanics/CLI/spells/darkness-xphb.md), [detect\
      \ magic](/03_Mechanics/CLI/spells/detect-magic-xphb.md), [dispel magic](/03_Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [invisibility](/03_Mechanics/CLI/spells/invisibility-xphb.md) (self only),\
      \ [suggestion](/03_Mechanics/CLI/spells/suggestion-xphb.md)\n\n3/day: [lightning\
      \ bolt](/03_Mechanics/CLI/spells/lightning-bolt-xphb.md)"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/yagnoloth-mpmm.webp"
```
^statblock

## Environment

urban

## Player-Facing Summary

Yagnoloth mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of yagnoloth mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around yagnoloth mpmm.

## Adventure Hooks

- A rumor ties yagnoloth mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at yagnoloth mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to yagnoloth mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
