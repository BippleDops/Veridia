---
aliases:
- Neothelid
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
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/aberration
- world/both
type: monster
updated: '2025-08-12T23:37:35.322664'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-neothelid-mpmm-neothelid-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\aberration/neothelid-mpmm|Neothelid]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 193, Volo's Guide to Monsters p. 181*  

A slime-covered worm of immense size, a neothelid is the result of the mind flayer reproductive cycle gone horribly wrong. When an illithid colony collapses, typically after an external assault, and the elder brain is killed, the colony's tadpoles are suddenly freed from their fate. They no longer serve as food—and are no longer fed by their caretakers. Driven by hunger, they turn to devouring one another. Only one tadpole survives out of the thousands in the colony's pool, and it emerges as a neothelid.

Neothelids know nothing beyond their predatory existence. They prowl subterranean passages, using their rudimentary psionic abilities to search out and incapacitate brains to sate their constant hunger, growing ever more vicious. These creatures can spray tissue-dissolving enzymes from their tentacle ducts, reducing victims to puddles of slime and leaving only the pulsing brains unharmed. They have no knowledge of their link to illithids, so they're just as likely to prey on mind flayers as on anything else.

Mind flayers consider neothelids dangerous abominations—normally they eat or destroy any tadpoles that grow larger than a few inches in length without being implanted in a brain so they can't become such threats. Neothelids are not intelligent enough for elder brains to detect, so mind flayers are always alert for signs of their presence and organize hunting parties to exterminate any of these murderous worms they learn of.

```statblock
"name": "Neothelid (MPMM)"
"size": "Gargantuan"
"type": "aberration"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "232"
"hit_dice": "15d20 + 75"
"modifier": !!int "-2"
"stats":
  - !!int "27"
  - !!int "7"
  - !!int "21"
  - !!int "3"
  - !!int "16"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "1"
  - "wisdom": !!int "8"
  - "charisma": !!int "6"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 13"
"languages": ""
"cr": "13"
"traits":
  - "desc": "The neothelid is aware of the presence of creatures within 1 mile of\
      \ it that have an Intelligence score of 4 or higher. It knows the distance and\
      \ direction to each creature, as well as each creature's Intelligence score,\
      \ but can't sense anything else about it. A creature protected by a [[/03_Mechanics/CLI/spells/mind-blank-xphb|mind blank]]\
      \ spell, a [[/03_Mechanics/CLI/spells/nondetection-xphb|nondetection]] spell,\
      \ or similar magic can't be perceived in this manner."
    "name": "Creature Sense"
  - "desc": "The neothelid has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 21\
      \ (3d8 + 8) bludgeoning damage plus 11 (2d10) psychic damage. If the target\
      \ is a Large or smaller creature, it must succeed on a DC 18 Strength saving\
      \ throw or be swallowed by the neothelid. A swallowed creature is [[/03_Mechanics/CLI/conditions#Blinded|blinded]]\
      \ and [[/03_Mechanics/CLI/conditions#Restrained|restrained]], it has total\
      \ cover against attacks and other effects outside the neothelid, and it takes\
      \ 21 (6d6) acid damage at the start of each of the neothelid's turns.\n\nIf\
      \ the neothelid takes 30 damage or more on a single turn from a creature inside\
      \ it, the neothelid must succeed on a DC 18 Constitution saving throw at the\
      \ end of that turn or regurgitate all swallowed creatures, which fall [[/03_Mechanics/CLI/conditions#Prone|prone]]\
      \ in a space within 10 feet of the neothelid. If the neothelid dies, a swallowed\
      \ creature is no longer [[/03_Mechanics/CLI/conditions#Restrained|restrained]]\
      \ by it and can escape from the corpse by using 20 feet of movement, exiting\
      \ [[/03_Mechanics/CLI/conditions#Prone|prone]]."
    "name": "Tentacles"
  - "desc": "The neothelid exhales acid in a 60-foot cone. Each creature in that area\
      \ must make a DC 18 Dexterity saving throw, taking 35 (10d6) acid damage on\
      \ a failed save, or half as much damage on a successful one."
    "name": "Acid Breath (Recharge 5-6)"
  - "desc": "The neothelid casts one of the following spells, requiring no spell components\
      \ and using Wisdom as the spellcasting ability (spell save DC 16):\n\nAt will:\
      \ [[/03_Mechanics/CLI/spells/levitate-xphb|levitate]]\n\n1/day each: [[/03_Mechanics/CLI/spells/confusion-xphb|confusion]],\
      \ [[/03_Mechanics/CLI/spells/befuddlement-xphb|feeblemind]], [[/03_Mechanics/CLI/spells/telekinesis-xphb|telekinesis]]"
    "name": "Spellcasting (Psionics)"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/neothelid-mpmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Neothelid mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of neothelid mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around neothelid mpmm.

## Adventure Hooks

- A rumor ties neothelid mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at neothelid mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to neothelid mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
