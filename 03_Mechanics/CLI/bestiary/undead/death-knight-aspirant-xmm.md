---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/11
  - ttrpg-cli/monster/environment/any
  - ttrpg-cli/monster/size/small-or-medium
  - ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Death Knight Aspirant
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-death-knight-aspirant-xmm-death-knight-aspirant-xmm.svg)

# [Death Knight Aspirant](3-Mechanics\CLI\bestiary\undead/death-knight-aspirant-xmm.md)
*Source: Monster Manual (2024) p. 93*  

When the leader of a villainous order rises as a death knight, their wicked devotees might join them in their cursed existence as death knight aspirants. These followers bear a measure of their leader's power and serve as they did in life, obediently following the death knight's decrees and heralding its terrible will.

## Death Knights

*Haunted Commanders of Unliving Legions*

- **Habitat.** Any  
- **Treasure.** Armaments  

Champions of evil, death knights are armor-clad, skeletal warlords. Combining devastating martial prowess and blasphemous magic, these undying tyrants lead unholy legions against the living or brood in cursed citadels. Every death knight is haunted by a legacy of tragedy and dishonor that drives it to commit greater evils.

```statblock
"name": "Death Knight Aspirant (XMM)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"hp": !!int "178"
"hit_dice": "21d8 + 84"
"modifier": !!int "4"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "18"
  - !!int "10"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "4"
  - "wisdom": !!int "5"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, Common"
"cr": "11"
"traits":
  - "desc": "The aspirant has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "Undead creatures of the aspirant's choice (excluding itself) in a 60-foot\
      \ [Emanation](/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from it have [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on attack rolls and saving throws. It can't use this trait if it has the [Incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated)\
      \ condition."
    "name": "Marshal Undead"
"actions":
  - "desc": "The aspirant makes three Dread Blade attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9, reach 5 ft. Hit: 14 (2d8 + 5) Slashing damage\
      \ plus 10 (3d6) Necrotic damage."
    "name": "Dread Blade"
  - "desc": "Dexterity Saving Throw: DC 15, each creature in a 20-foot-radius [Sphere](/03_Mechanics/CLI/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point the aspirant can see within 120 feet of itself. Failure:\
      \ 21 (6d6) Fire damage plus 21 (6d6) Necrotic damage. Success: Half damage."
    "name": "Hellfire Orb (Recharge 5-6)"
  - "desc": "The aspirant casts one of the following spells, using Charisma as the\
      \ spellcasting ability (spell save DC 15):\n\nAt will: [Phantom Steed](/03_Mechanics/CLI/spells/phantom-steed-xphb.md)\n\
      \n1/day each: [Destructive Wave](/03_Mechanics/CLI/spells/destructive-wave-xphb.md)\
      \ (Necrotic), [Dispel Magic](/03_Mechanics/CLI/spells/dispel-magic-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "Trigger: The aspirant is hit by a melee attack roll while holding a weapon.\
      \ _Response:_ The aspirant adds 4 to its AC against that attack, possibly causing\
      \ it to miss."
    "name": "Parry"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/death-knight-aspirant-xmm.webp"
```
^statblock

## Environment

any

## Player-Facing Summary

Death knight aspirant xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of death knight aspirant xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around death knight aspirant xmm.

## Adventure Hooks

- A rumor ties death knight aspirant xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at death knight aspirant xmm to avert a public scandal.
- A map overlay reveals a hidden approach to death knight aspirant xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
