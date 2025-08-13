---
aliases:
- Howler
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
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
- world/both
- world/surface
type: monster
updated: '2025-08-12T23:37:35.562839'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-howler-mpmm-howler-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\fiend/howler-mpmm|Howler]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 155, Mordenkainen's Tome of Foes p. 210*  

> [!quote] A quote from Mordenkainen  
> 
> Why does the howler sing? Doing so causes its prey to flee, and surely stealth would make for better hunting in howling Pandemonium. There is only one answer: the creature can taste fear.

A far-off wail precedes the sight of a howler. Even at a distance, listeners' minds cringe at the sound and fill with horror at the realization that the noise is drawing closer. When howlers go on the prowl, courage isn't enough to stand up against them.

These nightmare creatures are native to Pandemonium, but they can be found on most of the Lower Planes, where they are trained as war hounds. Howlers can be domesticated, after a fashion, but they respond only to brutal training in which they are forced to recognize the trainer as the pack's undisputed leader. A trained pack then follows its leader without hesitation. Howler packs course over the battlefields of the Blood War and also serve evil mortals powerful and vicious enough to command their loyalty.

Howlers rely on speed, numbers, and their mind-numbing howling to corner prey before they tear it apart. Their howls flood the minds of their victims, making complex thought impossible. Listeners can do little more than stare in horror and stumble around the battlefield in a search for safety. Fiends especially prize howlers for this reason, because for a few crucial moments in a battle, their howls can neutralize an enemy.

```statblock
"name": "Howler (MPMM)"
"size": "Large"
"type": "fiend"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"modifier": !!int "3"
"stats":
  - !!int "17"
  - !!int "16"
  - !!int "15"
  - !!int "5"
  - !!int "14"
  - !!int "6"
"speed": "40 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+5"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Frightened|frightened]]"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "understands Abyssal but can't speak"
"cr": "8"
"traits":
  - "desc": "A howler has advantage on attack rolls against a creature if at least\
      \ one of the howler's allies is within 5 feet of the creature and the ally isn't\
      \ [[/03_Mechanics/CLI/conditions#Incapacitated|incapacitated]]."
    "name": "Pack Tactics"
"actions":
  - "desc": "The howler makes two Rending Bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) piercing damage, plus 22 (4d10) psychic damage if the target is\
      \ [[/03_Mechanics/CLI/conditions#Frightened|frightened]]. This attack ignores\
      \ damage resistance."
    "name": "Rending Bite"
  - "desc": "The howler emits a keening howl in a 60-foot cone. Each creature in that\
      \ area must succeed on a DC 13 Wisdom saving throw or take 16 (3d10) psychic\
      \ damage and be [[/03_Mechanics/CLI/conditions#Frightened|frightened]] until\
      \ the end of the howler's next turn. While a creature is [[/03_Mechanics/CLI/conditions#Frightened|frightened]]\
      \ in this way, its speed is halved, and it is [[/03_Mechanics/CLI/conditions#Incapacitated|incapacitated]].\
      \ A target that successfully saves is immune to the Mind-Breaking Howl of all\
      \ howlers for the next 24 hours."
    "name": "Mind-Breaking Howl (Recharge 4-6)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/howler-mpmm.webp"
```
^statblock

## Environment

desert, grassland, hill, underdark

## Player-Facing Summary

Howler mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of howler mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around howler mpmm.

## Adventure Hooks

- A rumor ties howler mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at howler mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to howler mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
