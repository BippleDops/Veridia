---
aliases:
- Deathlock Mastermind
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- active
- both
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead/warlock
- world/both
type: monster
updated: '2025-08-13T12:34:20.064282+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-deathlock-mastermind-mpmm-deathlock-mastermind-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\undead/deathlock-mastermind-mpmm|Deathlock Mastermind]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 87, Mordenkainen's Tome of Foes p. 129*  

Though deathlocks exist to serve their patrons, they retain some freedom when it comes to devising tactics and carrying out plans. Powerful deathlocks recruit lesser creatures to help them carry out their missions, becoming the masterminds behind vast conspiracies and intrigues that culminate in the accomplishment of great acts of evil.

## Deathlocks

The forging of a pact between a warlock and a patron is no minor occasion—at least not for the warlock. The consequences of breaking that pact can be dire and, in some cases, lethal. A warlock who fails to live up to a bargain with an evil patron runs the risk of rising from the dead as a deathlock, a foul Undead driven to serve its otherworldly patron.

An powerful necromancer might also discover the wicked methods of creating a deathlock and then subjugate it, acting as the deathlock's patron.

```statblock
"name": "Deathlock Mastermind (MPMM)"
"size": "Medium"
"type": "undead"
"subtype": "warlock"
"alignment": "Typically  Neutral Evil"
"ac": !!int "13"
"hp": !!int "110"
"hit_dice": "20d8 + 20"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "12"
  - !!int "15"
  - !!int "12"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "5"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Arcana|Arcana]]"
    "desc": "+5"
  - "name": "[[/03_Mechanics/CLI/skills#History|History]]"
    "desc": "+5"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+4"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "8"
"traits":
  - "desc": "Magical darkness doesn't impede the deathlock's [[/03_Mechanics/CLI/senses#Darkvision|darkvision]]."
    "name": "Devil's Sight"
  - "desc": "The deathlock has advantage on saving throws against any effect that\
      \ turns Undead."
    "name": "Turn Resistance"
  - "desc": "The deathlock doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The deathlock makes two Deathly Claw or Grave Bolt attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13\
      \ (3d6 + 3 necrotic damage)."
    "name": "Deathly Claw"
  - "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 13\
      \ (3d8) necrotic damage. If the target is Large or smaller, it must succeed\
      \ on a DC 16 Strength saving throw or become [[/03_Mechanics/CLI/conditions#Restrained|restrained]]\
      \ as shadowy tendrils wrap around it for 1 minute. A [[/03_Mechanics/CLI/conditions#Restrained|restrained]]\
      \ target can use its action to repeat the saving throw, ending the effect on\
      \ itself on a success."
    "name": "Grave Bolt"
  - "desc": "The deathlock casts one of the following spells, using Charisma as the\
      \ spellcasting ability (spell save DC 14):\n\nAt will: [[/03_Mechanics/CLI/spells/detect-magic-xphb|detect magic]],\
      \ [[/03_Mechanics/CLI/spells/disguise-self-xphb|disguise self]], [[/03_Mechanics/CLI/spells/mage-armor-xphb|mage armor]],\
      \ [[/03_Mechanics/CLI/spells/minor-illusion-xphb|minor illusion]]\n\n1/day\
      \ each: [[/03_Mechanics/CLI/spells/darkness-xphb|darkness]], [[/03_Mechanics/CLI/spells/dimension-door-xphb|dimension door]],\
      \ [[/03_Mechanics/CLI/spells/dispel-magic-xphb|dispel magic]], [[/03_Mechanics/CLI/spells/fly-xphb|fly]],\
      \ [[/03_Mechanics/CLI/spells/invisibility-xphb|invisibility]]"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/undead/token/deathlock-mastermind-mpmm.webp"
```
^statblock

## Environment

urban

## Player-Facing Summary

Deathlock mastermind mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of deathlock mastermind mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around deathlock mastermind mpmm.

## Adventure Hooks

- A rumor ties deathlock mastermind mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at deathlock mastermind mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to deathlock mastermind mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
