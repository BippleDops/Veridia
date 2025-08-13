---
aliases:
- Neogi Master
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
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration/warlock
- world/both
type: monster
updated: '2025-08-13T12:34:19.750141+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-neogi-master-mpmm-neogi-master-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\aberration/neogi-master-mpmm|Neogi Master]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 192, Volo's Guide to Monsters p. 180*  

Neogi masters use magic, as a result of a pact between neogi and aberrant entities they met during their journey from their home world. These entities—known by such names as Acamar, Caiphon, Gibbeth, and Hadar—resemble stars and embody the essence of evil.

## Neogi

> [!quote] A quote from Mordenkainen  
> 
> Only the malevolent or the desperate do business with neogi. I generally advise against working with beings who view you as property or prey.

A neogi looks like an outsize spider with an eel's neck and head. It can poison the body and the mind of its targets and can subjugate even beings that are physically superior.

Neogi usually dwell in far-flung locations on the Material Plane, as well as in the Astral Plane and the Ethereal Plane. They left their home world long ago to conquer and devour creatures in other realms. During this era, they dominated umber hulks and used them to build sleek, spidery ships capable of traversing the multiverse.

```statblock
"name": "Neogi Master (MPMM)"
"size": "Medium"
"type": "aberration"
"subtype": "warlock"
"alignment": "Typically  Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "16"
  - !!int "14"
  - !!int "16"
  - !!int "12"
  - !!int "18"
"speed": "30 ft., climb 30 ft."
"saves":
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Arcana|Arcana]]"
    "desc": "+5"
  - "name": "[[/03_Mechanics/CLI/skills#Deception|Deception]]"
    "desc": "+6"
  - "name": "[[/03_Mechanics/CLI/skills#Intimidation|Intimidation]]"
    "desc": "+6"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/03_Mechanics/CLI/skills#Persuasion|Persuasion]]"
    "desc": "+6"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Common, Deep Speech, Undercommon, telepathy 30 ft."
"cr": "4"
"traits":
  - "desc": "Magical darkness doesn't impede the neogi's [[/03_Mechanics/CLI/senses#Darkvision|darkvision]]."
    "name": "Devil's Sight"
  - "desc": "The neogi has advantage on saving throws against being [[/03_Mechanics/CLI/conditions#Charmed|charmed]]\
      \ or [[/03_Mechanics/CLI/conditions#Frightened|frightened]], and magic can't\
      \ put the neogi to sleep."
    "name": "Mental Fortitude"
  - "desc": "The neogi can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The neogi makes one Bite attack and one Claw attack, or it makes two\
      \ Tentacle of Hadar attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed\
      \ on a DC 12 Constitution saving throw or become [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]\
      \ for 1 minute. A target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
      \ + 3) piercing damage."
    "name": "Claw"
  - "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 14\
      \ (3d6 + 4) necrotic damage, and the target can't take reactions until the end\
      \ of the neogi's next turn, as a spectral tentacle clings to the target."
    "name": "Tentacle of Hadar"
  - "desc": "The neogi casts one of the following spells, using Charisma as the spellcasting\
      \ ability (spell save DC 14):\n\nAt will: [[/03_Mechanics/CLI/spells/guidance-xphb|guidance]],\
      \ [[/03_Mechanics/CLI/spells/mage-hand-xphb|mage hand]], [[/03_Mechanics/CLI/spells/minor-illusion-xphb|minor illusion]],\
      \ [[/03_Mechanics/CLI/spells/prestidigitation-xphb|prestidigitation]]\n\n1/day\
      \ each: [[/03_Mechanics/CLI/spells/dimension-door-xphb|dimension door]],\
      \ [[/03_Mechanics/CLI/spells/hold-person-xphb|hold person]], [[/03_Mechanics/CLI/spells/hunger-of-hadar-xphb|hunger of Hadar]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The neogi targets one creature it can see within 30 feet of it. The target\
      \ must succeed on a DC 14 Wisdom saving throw or be magically [[/03_Mechanics/CLI/conditions#Charmed|charmed]]\
      \ by the neogi for 1 day, or until the neogi dies or is more than 1 mile from\
      \ the target. The [[/03_Mechanics/CLI/conditions#Charmed|charmed]] target obeys\
      \ the neogi's commands and can't take reactions, and the neogi and the target\
      \ can communicate telepathically with each other at a distance of up to 1 mile.\
      \ Whenever the [[/03_Mechanics/CLI/conditions#Charmed|charmed]] target takes\
      \ damage, it can repeat the saving throw, ending the effect on itself on a success."
    "name": "Enslave (Recharges after a Short or Long Rest)"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/neogi-master-mpmm.webp"
```
^statblock

## Environment

hill, underdark

## Player-Facing Summary

Neogi master mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of neogi master mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around neogi master mpmm.

## Adventure Hooks

- A rumor ties neogi master mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at neogi master mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to neogi master mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
