---
aliases:
- Stone Cursed
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
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
- world/both
type: monster
updated: '2025-08-13T12:34:20.250572+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-stone-cursed-mpmm-stone-cursed-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\construct/stone-cursed-mpmm|Stone Cursed]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 233, Mordenkainen's Tome of Foes p. 240*  

Stone cursed are spawned through a foul alchemical ritual performed on a Humanoid that has been turned to stone. The ritual, which requires a mixture of basilisk blood and the ashes from the burned feathers of a cockatrice, awakens a dim echo of the [[/03_Mechanics/CLI/conditions#Petrified|petrified]] victim's spirit, animating the statue and turning it into a useful guardian.

Stone cursed possess a malevolent drive to slay the living, yet they are utterly loyal to whoever performed the ritual to animate them, and they obey that being's orders to the best of their ability. In combat, stony claws that drip with thick, gray sludge emerge from a stone cursed's fingers. This alchemical sludge transforms those slashed by the claws into statues.

As part of the ritual used to create a stone cursed, a fist-sized obsidian skull forms within the creature's torso. The skull isn't visible while the stone cursed is active, but when it is slain, the statue shatters and the skull clatters to the ground. Because it is the nexus for the alchemy used to create these horrors, a faint echo of the original victim's memories resonates within the skull. A skilled magic-wielder can attempt to extract memories from it to gain insight into the victim's past or find lore that otherwise would be lost.

## Cryptic Whispers

Even though a creature transformed into a stone cursed is long dead, a vague whisper of their memories lives on in the obsidian skull embedded within the stone cursed's body. At the end of a short rest, a character can make a DC 20 Intelligence ([[/03_Mechanics/CLI/skills#Arcana|Arcana]]) check to attempt to extract a memory from the skull that is a response to a verbal question posed to the skull by the character. Once this check is made, whether it succeeds or fails, the skull can't be used in this manner again.

```statblock
"name": "Stone Cursed (MPMM)"
"size": "Medium"
"type": "construct"
"alignment": "Typically  Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"modifier": !!int "-3"
"stats":
  - !!int "16"
  - !!int "5"
  - !!int "14"
  - !!int "5"
  - !!int "8"
  - !!int "7"
"speed": "10 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Frightened|frightened]], [[/03_Mechanics/CLI/conditions#Petrified|petrified]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "passive Perception 9"
"languages": "the languages it knew in life"
"cr": "1"
"traits":
  - "desc": "The stone cursed has advantage on the attack rolls of [[/03_Mechanics/CLI/actions#Opportunity%20Attack|opportunity attacks]]."
    "name": "Cunning Opportunist"
  - "desc": "If the stone cursed is motionless at the start of combat, it has advantage\
      \ on its initiative roll. Moreover, if a creature hasn't observed the stone\
      \ cursed move or act, that creature must succeed on a DC 18 Intelligence ([[/03_Mechanics/CLI/skills#Investigation|Investigation]])\
      \ check to discern that the stone cursed isn't a statue."
    "name": "False Appearance"
  - "desc": "The stone cursed doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12\
      \ (2d8 + 3) slashing damage. If the target is a creature, it must succeed on\
      \ a DC 12 Constitution saving throw, or it begins to turn to stone and is [[/03_Mechanics/CLI/conditions#Restrained|restrained]]\
      \ until the end of its next turn, when it must repeat the saving throw. The\
      \ effect ends if the second save is successful; otherwise the target is [[/03_Mechanics/CLI/conditions#Petrified|petrified]]\
      \ for 24 hours."
    "name": "Petrifying Claws"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/construct/token/stone-cursed-mpmm.webp"
```
^statblock

## Environment

desert, mountain, urban

## Player-Facing Summary

Stone cursed mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of stone cursed mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around stone cursed mpmm.

## Adventure Hooks

- A rumor ties stone cursed mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at stone cursed mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to stone cursed mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
