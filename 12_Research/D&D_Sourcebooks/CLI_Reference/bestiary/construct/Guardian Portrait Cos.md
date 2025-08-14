---
aliases:
- Guardian Portrait
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
- ttrpg-cli/compendium/src/5e/cos
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
- world/both
type: monster
updated: '2025-08-13T12:34:06.094635+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-guardian-portrait-cos-guardian-portrait-cos.svg)

# [[guardian-portrait-cos|Guardian Portrait]]
*Source: Curse of Strahd p. 227*  

A guardian portrait looks like a finely rendered and beautifully framed work of art, usually depicting someone important in a realistic manner. The picture and its frame are bound with powerful magic and are inseparable.

## Living Image

The eyes of the figure depicted in the painting are imbued with [[senses#Darkvision|darkvision]], and they appear to follow creatures that move in front of them.

## Innate Spells

When a guardian portrait attacks, the figure in the painting animates and moves as though alive (albeit in two dimensions). The guardian portrait has no effective melee attacks, but it has a repertoire of innate spells that it can cast. When it casts a spell, the figure painted on the canvas makes all the appropriate somatic gestures and verbal incantations for the spell.

```statblock
"name": "Guardian Portrait (CoS)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "5"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "-5"
"stats":
  - !!int "1"
  - !!int "1"
  - !!int "10"
  - !!int "14"
  - !!int "10"
  - !!int "10"
"speed": "0 ft."
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Frightened|frightened]], [[conditions#Grappled|grappled]],\
  \ [[conditions#Paralyzed|paralyzed]], [[conditions#Petrified|petrified]],\
  \ [[conditions#Poisoned|poisoned]], [[conditions#Prone|prone]],\
  \ [[conditions#Restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, plus up to two other languages"
"cr": "1"
"traits":
  - "desc": "The portrait's innate spellcasting ability is Intelligence (spell save\
      \ DC 12). The portrait can innately cast the following spells, requiring no\
      \ material components:\n\n3/day each: [[counterspell-xphb|counterspell]],\
      \ [[crown-of-madness-xphb|crown of madness]], [[hypnotic-pattern-xphb|hypnotic\
      \ pattern]], [[telekinesis-xphb|telekinesis]]"
    "name": "Innate Spellcasting"
  - "desc": "An animated object doesn't require air, food, drink, or sleep.\n\nThe\
      \ magic that animates an object is dispelled when the construct drops to 0 hit\
      \ points. An animated object reduced to 0 hit points becomes inanimate and is\
      \ too damaged to be of much use or value to anyone."
    "name": "Constructed Nature"
  - "desc": "The portrait is [[conditions#Incapacitated|incapacitated]]\
      \ while in the area of an [[antimagic-field-xphb|antimagic field]].\
      \ If targeted by [[dispel-magic-xphb|dispel magic]],\
      \ the portrait must succeed on a Constitution saving throw against the caster's\
      \ spell save DC or become [[conditions#Unconscious|unconscious]]\
      \ for 1 minute."
    "name": "Antimagic Susceptibility"
  - "desc": "While the figure in the portrait remains motionless, the portrait is\
      \ indistinguishable from a normal painting."
    "name": "False Appearance"
"source":
  - "CoS"
"image": "/03_Mechanics/CLI/bestiary/construct/token/guardian-portrait-cos.webp"
```
^statblock

## Player-Facing Summary

Guardian portrait cos is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of guardian portrait cos as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around guardian portrait cos.

## Adventure Hooks

- A rumor ties guardian portrait cos to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at guardian portrait cos to avert a public scandal.
- A map overlay reveals a hidden approach to guardian portrait cos active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
