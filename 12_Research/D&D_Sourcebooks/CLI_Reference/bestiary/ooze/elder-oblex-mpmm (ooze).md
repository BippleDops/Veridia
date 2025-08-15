---
title: elder-oblex-mpmm (ooze)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# elder-oblex-mpmm

---
title: elder oblex mpmm
aliases:
- Elder Oblex
type: monster
tags:
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/type/ooze
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/compendium/src/5e/mpmm
- world/both
- research
- ttrpg-cli/monster/environment/swamp
- active
- status/in-progress
created: 
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.401190'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-elder-oblex-mpmm-elder-oblex-mpmm.svg)

# [[elder-oblex-mpmm (ooze)]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 199, Mordenkainen's Tome of Foes p. 219*  

Older oblexes, called adults and elders, have eaten so many memories that they can form duplicates of the creatures they have devoured from the substance of their bodies, sending these copies off to lure prey into their clutches while remaining tethered to the slime by long tendrils of goo. These duplicated creatures are indistinguishable from their victims except for a faint sulfurous smell. Oblexes use these duplicates to lead prey into danger or to infiltrate settlements so they can feed on superior victims.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Oblexes

> [!quote] A quote from Mordenkainen  
> 
> Mind flayers unleash all manner of foul experiments upon the planes with little thought for the consequences. Here, though, I suspect another influence: Juiblex.

> An oblex wants memories, but not to serve any end of its own making. Oblexes are hungry for memories and personalities because they are empty without such nourishment. In this way they serve their creators, the illithids. An oblex in the range of an elder brain's powers provides everything necessary for the mind flayers to find choice victims.

By experimenting on the slimes, jellies, and puddings that infest the depths of the Underdark, mind flayers created a special breed of Ooze, the oblex—a slime capable of assaulting the minds of other creatures. These pools of jelly are cunning hunters that feed on thoughts and memories. The sharper the mind, the better the meal, so oblexes hunt targets more likely to be intelligent, such as wizards and other spellcasters. When suitable fare comes within reach, an oblex draws its body up to engulf its victim. As it withdraws, it plunders the creature's mind, leaving its prey befuddled and confused—or dead.

When oblexes feed on thoughts, they can form weird copies of their prey to use as lures, which helps them harvest even more victims for their mind flayer masters.

```statblock
"name": "Elder Oblex (MPMM)"
"size": "Huge"
"type": "ooze"
"alignment": "Typically  Lawful Evil"
"ac": !!int "16"
"hp": !!int "115"
"hit_dice": "10d12 + 50"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "16"
  - !!int "21"
  - !!int "22"
  - !!int "13"
  - !!int "18"
"speed": "20 ft."
"saves":
  - "intelligence": !!int "10"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[[skills#Arcana|Arcana]]"
    "desc": "+10"
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+8"
  - "name": "[[skills#History|History]]"
  - "name": "[[skills#Nature|Nature]]"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[skills#Religion|Religion]]"
"condition_immunities": "[[conditions#Blinded|blinded]], [[conditions#Charmed|charmed]],\
  \ [[conditions#Deafened|deafened]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#prone|prone]]"
"senses": "blindsight 60 ft. (blind beyond this distance), passive Perception 15"
"languages": "Common plus six more languages"
"cr": "10"
"traits":
  - "desc": "The oblex can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "If the oblex takes fire damage, it has disadvantage on attack rolls and\
      \ ability checks until the end of its next turn."
    "name": "Aversion to Fire"
  - "desc": "The oblex doesn't require sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The elder oblex makes two Pseudopod attacks, and it uses Eat Memories."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 17\
      \ (4d6 + 3) bludgeoning damage plus 14 (4d6) psychic damage."
    "name": "Pseudopod"
  - "desc": "The oblex targets one creature it can see within 5 feet of it. The target\
      \ must succeed on a DC 18 Wisdom saving throw or take 44 (8d10) psychic damage\
      \ and become memory drained until it finishes a short or long rest or until\
      \ it benefits from the [[greater-restoration-xphb (spells)]]\
      \ or [[heal-xphb (spells)]] spell. Constructs, Oozes,\
      \ Plants, and Undead succeed on the save automatically.\n\nWhile memory drained,\
      \ the target must roll a d4 and subtract the number rolled from any ability\
      \ check or attack roll it makes. Each time the target is memory drained beyond\
      \ the first, the die size increases by one: the d4 becomes a d6, the d6 becomes\
      \ a d8, and so on until the die becomes a d20, at which point the target becomes\
      \ [[conditions#Unconscious|unconscious]] for 1 hour. The\
      \ effect then ends.\n\nThe oblex learns all the languages a memory-drained target\
      \ knows and gains all its skill proficiencies."
    "name": "Eat Memories"
  - "desc": "The oblex casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 18):\n\n\
      At will: [[Charm Person Xphb]] (as\
      \ 5th-level spell), [[detect-thoughts-xphb (spells)]]\n\
      \n3/day each: [[Dimension Door Xphb]],\
      \ [[Dominate Person Xphb]], [[Hypnotic Pattern Xphb]]
      \ pattern]], [[telekinesis-xphb (spells)]]"
    "name": "Spellcasting (Psionics)"
"bonus_actions":
  - "desc": "The oblex extrudes a piece of itself that assumes the appearance of one\
      \ Medium or smaller creature whose memories it has stolen. This simulacrum appears,\
      \ feels, and sounds exactly like the creature it impersonates, though it smells\
      \ faintly of sulfur. The oblex can impersonate 2d6 + 1 different creatures,\
      \ each one tethered to its body by a strand of slime that can extend up to 120\
      \ feet away. The simulacrum is an extension of the oblex, meaning that the oblex\
      \ occupies its space and the simulacrum's space simultaneously. The tether is\
      \ immune to damage, but it is severed if there is no opening at least 1 inch\
      \ wide between the oblex and the simulacrum. The simulacrum disappears if the\
      \ tether is severed."
    "name": "Sulfurous Impersonation"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/ooze/token/elder-oblex-mpmm.webp"
```
^statblock

## Environment

swamp, underdark, urban

## Player-Facing Summary

Elder oblex mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of elder oblex mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around elder oblex mpmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*
