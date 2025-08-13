---
updated: '2025-08-13T01:18:32.806512+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/yugoloth
statblock: inline
statblock-link: '#^statblock'
aliases:
- Oinoloth
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-oinoloth-mpmm-oinoloth-mpmm.svg)

# [Oinoloth](3-Mechanics\CLI\bestiary\fiend/oinoloth-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 202, Mordenkainen's Tome of Foes p. 251*  

Grim specters of death, oinoloths bring pestilence wherever they go. When armies recognize their awful forms, their mere appearance causes soldiers to break ranks and flee, lest they succumb to one of the awful plagues that oinoloths let loose.

Oinoloths solve thorny problems by killing everyone involved. They are typically hired as a last resort when a siege has gone on too long or an army has proven too strong to overcome. Once summoned, oinoloths stalk the killing field, poisoning the ground and sickening creatures they encounter. Sometimes they might be hired to lift the very plagues they spread, but the price for such work is high, and the effort turns the creatures they save into debilitated wrecks.

```statblock
"name": "Oinoloth (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"modifier": !!int "3"
"stats":
  - !!int "19"
  - !!int "17"
  - !!int "18"
  - !!int "17"
  - !!int "16"
  - !!int "19"
"speed": "40 ft."
"saves":
  - "constitution": !!int "8"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Deception](/03_Mechanics/CLI/skills.md#Deception)"
    "desc": "+8"
  - "name": "[Intimidation](/03_Mechanics/CLI/skills.md#Intimidation)"
    "desc": "+8"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 17"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "12"
"traits":
  - "desc": "The oinoloth has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The oinoloth makes two Claw attacks, and it uses Spellcasting or Teleport."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14\
      \ (3d6 + 4) slashing damage plus 22 (4d10) necrotic damage."
    "name": "Claw"
  - "desc": "The oinoloth touches one willing creature within 5 feet of it. The target\
      \ regains all its hit points. In addition, the oinoloth can end one disease\
      \ on the target or remove one of the following conditions from it: [blinded](/03_Mechanics/CLI/conditions.md#Blinded),\
      \ [deafened](/03_Mechanics/CLI/conditions.md#Deafened), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
      \ or [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned). The target then gains\
      \ 1 level of [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion), and its\
      \ hit point maximum is reduced by 7 (2d6). This reduction can be removed only\
      \ by a [wish](/03_Mechanics/CLI/spells/wish-xphb.md) spell or by casting [greater\
      \ restoration](/03_Mechanics/CLI/spells/greater-restoration-xphb.md) on the target\
      \ three times within the same hour. The target dies if its hit point maximum\
      \ is reduced to 0."
    "name": "Corrupted Healing (Recharge 6)"
  - "desc": "The oinoloth teleports, along with any equipment it is wearing or carrying,\
      \ up to 60 feet to an unoccupied space it can see."
    "name": "Teleport"
  - "desc": "The oinoloth casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 16):\n\
      \nAt will: [darkness](/03_Mechanics/CLI/spells/darkness-xphb.md), [detect\
      \ magic](/03_Mechanics/CLI/spells/detect-magic-xphb.md), [dispel magic](/03_Mechanics/CLI/spells/dispel-magic-xphb.md),\
      \ [hold monster](/03_Mechanics/CLI/spells/hold-monster-xphb.md), [invisibility](/03_Mechanics/CLI/spells/invisibility-xphb.md)\
      \ (self only)\n\n1/day each: [feeblemind](/03_Mechanics/CLI/spells/befuddlement-xphb.md),\
      \ [globe of invulnerability](/03_Mechanics/CLI/spells/globe-of-invulnerability-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The oinoloth blights the area in a 30-foot-radius sphere centered on\
      \ itself. The blight lasts for 24 hours. While the area is blighted, all normal\
      \ plants there wither and die.\n\nFurthermore, when a creature moves into the\
      \ blighted area or starts its turn there, that creature must make a DC 16 Constitution\
      \ saving throw. On a failed save, the creature takes 14 (4d6) poison damage\
      \ and is [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned). On a successful\
      \ save, the creature is immune to the oinoloth's Bringer of Plagues for the\
      \ next 24 hours.\n\nThe [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ creature can't regain hit points. After every 24 hours that elapse, the [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ creature can repeat the saving throw. On a failed save, the creature's hit\
      \ point maximum is reduced by 5 (d10). This reduction lasts until the poison\
      \ ends, and the target dies if its hit point maximum is reduced to 0. The poison\
      \ ends after the creature successfully saves against it three times."
    "name": "Bringer of Plagues (Recharge 5-6)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/oinoloth-mpmm.webp"
```
^statblock

## Environment

desert, underdark

## Player-Facing Summary

Oinoloth mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of oinoloth mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around oinoloth mpmm.

## Adventure Hooks

- A rumor ties oinoloth mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at oinoloth mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to oinoloth mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
