---
aliases:
- Death Knight
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
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/undead
- world/both
type: monster
updated: '2025-08-12T23:37:35.625510'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-death-knight-xmm-death-knight-xmm.svg)

# [Death Knight](3-Mechanics\CLI\bestiary\undead/death-knight-xmm.md)
*Source: Monster Manual (2024) p. 92*  

Death knights are deadly combatants and domineering commanders with grim histories. Some strive to end the curses that doom them to undeath, though their selfish souls eternally shackle them to their fates. Others, like the infamous death knight Lord Soth, brood in dismal ruins for centuries, rousing themselves to action only when something reignites their deathless evil.

## Death Knights

*Haunted Commanders of Unliving Legions*

- **Habitat.** Any  
- **Treasure.** Armaments  

Champions of evil, death knights are armor-clad, skeletal warlords. Combining devastating martial prowess and blasphemous magic, these undying tyrants lead unholy legions against the living or brood in cursed citadels. Every death knight is haunted by a legacy of tragedy and dishonor that drives it to commit greater evils.

```statblock
"name": "Death Knight (XMM)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"hp": !!int "199"
"hit_dice": "21d8 + 105"
"modifier": !!int "12"
"stats":
  - !!int "20"
  - !!int "11"
  - !!int "20"
  - !!int "12"
  - !!int "16"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "9"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Abyssal, Common"
"cr": "17"
"traits":
  - "desc": "If the death knight fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The death knight has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "Undead creatures of the death knight's choice (excluding itself) in a\
      \ 60-foot [Emanation](/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from it have [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on attack rolls and saving throws. It can't use this trait if it has the [Incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated)\
      \ condition."
    "name": "Marshal Undead"
  - "desc": "If the death knight is destroyed before it atones for its evil, it gains\
      \ a new body in d10 days, reviving with all its [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md).\
      \ The new body appears in a location significant to the death knight."
    "name": "Undead Restoration"
"actions":
  - "desc": "The death knight makes three Dread Blade attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +11, reach 5 ft. Hit: 12 (2d6 + 5) Slashing damage\
      \ plus 13 (3d8) Necrotic damage."
    "name": "Dread Blade"
  - "desc": "Dexterity Saving Throw: DC 18, each creature in a 20-foot-radius [Sphere](/03_Mechanics/CLI/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point the death knight can see within 120 feet. Failure: 35\
      \ (10d6) Fire damage plus 35 (10d6) Necrotic damage. Success: Half damage."
    "name": "Hellfire Orb (Recharge 5-6)"
  - "desc": "The death knight casts one of the following spells, requiring no Material\
      \ components and using Charisma as the spellcasting ability (spell save DC 18):\n\
      \nAt will: [Command](/03_Mechanics/CLI/spells/command-xphb.md), [Phantom\
      \ Steed](/03_Mechanics/CLI/spells/phantom-steed-xphb.md)\n\n2/day each: [Destructive\
      \ Wave](/03_Mechanics/CLI/spells/destructive-wave-xphb.md) (Necrotic), [Dispel\
      \ Magic](/03_Mechanics/CLI/spells/dispel-magic-xphb.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "Trigger: The death knight is hit by a melee attack roll while holding\
      \ a weapon. _Response:_ The death knight adds 6 to its AC against that attack,\
      \ possibly causing it to miss."
    "name": "Parry"
"legendary_actions":
  - "desc": "The death knight uses Spellcasting to cast [Command](/03_Mechanics/CLI/spells/command-xphb.md).\
      \ The death knight can't take this action again until the start of its next\
      \ turn."
    "name": "Dread Authority"
  - "desc": "Constitution Saving Throw: DC 18, one creature the death knight can\
      \ see within 120 feet. Failure: 17 (5d6) Necrotic damage, and the target's\
      \ [Hit Point](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md) maximum decreases\
      \ by an amount equal to the damage taken. Failure or Success: The death knight\
      \ can't take this action again until the start of its next turn."
    "name": "Fell Word"
  - "desc": "The death knight moves up to half its [Speed](/03_Mechanics/CLI/variant-rules/speed-xphb.md),\
      \ and it makes one Dread Blade attack."
    "name": "Lunge"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/death-knight-xmm.webp"
```
^statblock

## Environment

any

## Player-Facing Summary

Death knight xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of death knight xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around death knight xmm.

## Adventure Hooks

- A rumor ties death knight xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at death knight xmm to avert a public scandal.
- A map overlay reveals a hidden approach to death knight xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
