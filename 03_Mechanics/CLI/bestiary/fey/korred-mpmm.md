---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/7
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/size/small
  - ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Korred
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-korred-mpmm-korred-mpmm.svg)

# [Korred](3-Mechanics\CLI\bestiary\fey/korred-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 166, Volo's Guide to Monsters p. 168*  

Korreds are unpredictable, secretive Fey with strong ties to earth and stone. Because of their magical hair and mystical understanding of minerals, they are sought after by treasure-hunting dwarves and others who desire wealth beneath the earth.

Korreds prefer to keep their own company but occasionally consort with creatures of elemental earth such as [galeb duhr](/03_Mechanics/CLI/bestiary/elemental/galeb-duhr-xmm.md). They often gather with other korreds to perform ceremonial dances, beating out rhythms on stone with their hooves and clubs. In the depths of the Material Plane, korreds typically flee from other creatures, but they become aggressive when they feel insulted or are annoyed by the sounds of mining.

Korreds can hurl boulders far larger than it seems they should be able to, shape stone as though it were clay, and swim through rock. They also gain supernatural strength just from standing on the ground.

## Magical Hair

Korreds have hair all over their bodies, but the hair that grows from their heads is magical. When cut, it transforms into whatever material was used to cut it. Korreds use iron shears to cut lengths of this magical hair, then twist the strands together to create iron ropes that they can manipulate, animating them to bind or snake around creatures and objects. Korreds take great pride in their hair and equally great offense at anyone who attempts to cut it without permission.

```statblock
"name": "Korred (MPMM)"
"size": "Small"
"type": "fey"
"alignment": "Typically  Chaotic Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d6 + 55"
"modifier": !!int "2"
"stats":
  - !!int "23"
  - !!int "14"
  - !!int "20"
  - !!int "10"
  - !!int "15"
  - !!int "9"
"speed": "30 ft., burrow 30 ft."
"skillsaves":
  - "name": "[Athletics](/03_Mechanics/CLI/skills.md#Athletics)"
    "desc": "+9"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., tremorsense 120 ft., passive Perception 15"
"languages": "Dwarvish, Gnomish, Sylvan, Terran, Undercommon"
"cr": "7"
"traits":
  - "desc": "The korred has advantage on Dexterity ([Stealth](/03_Mechanics/CLI/skills.md#Stealth))\
      \ checks made to hide in rocky terrain."
    "name": "Stone Camouflage"
"actions":
  - "desc": "The korred makes two Greatclub or Rock attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10\
      \ (1d8 + 6) bludgeoning damage, or 19 (3d8 + 6) bludgeoning damage if the korred\
      \ is on the ground."
    "name": "Greatclub"
  - "desc": "Ranged Weapon Attack: +9 to hit, range 60/120 ft., one target. Hit:\
      \ 10 (1d8 + 6) bludgeoning damage, or 19 (3d8 + 6) bludgeoning damage if the\
      \ korred is on the ground."
    "name": "Rock"
  - "desc": "The korred casts one of the following spells, requiring no spell components\
      \ and using Wisdom as the spellcasting ability (spell save DC 13):\n\nAt will:\
      \ [commune with nature](/03_Mechanics/CLI/spells/commune-with-nature-xphb.md)\
      \ (as an action), [meld into stone](/03_Mechanics/CLI/spells/meld-into-stone-xphb.md),\
      \ [stone shape](/03_Mechanics/CLI/spells/stone-shape-xphb.md)\n\n1/day: [Otto's\
      \ irresistible dance](/03_Mechanics/CLI/spells/ottos-irresistible-dance-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The korred has at least one 50-foot-long rope woven out of its hair.\
      \ The korred commands one such rope within 30 feet of it to move up to 20 feet\
      \ and entangle a Large or smaller creature that the korred can see. The target\
      \ must succeed on a DC 13 Dexterity saving throw or become [grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ by the rope (escape DC 13). Until this grapple ends, the target is [restrained](/03_Mechanics/CLI/conditions.md#Restrained).\
      \ The korred can use a bonus action to release the target, which is also freed\
      \ if the korred dies or becomes [incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated).\n\
      \nA rope of korred hair has AC 20 and 20 hit points. It regains 1 hit point\
      \ at the start of each of the korred's turns while the rope has at least 1 hit\
      \ point and the korred is alive. If the rope drops to 0 hit points, it is destroyed."
    "name": "Command Hair"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/fey/token/korred-mpmm.webp"
```
^statblock

## Environment

forest

## Player-Facing Summary

Korred mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of korred mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around korred mpmm.

## Adventure Hooks

- A rumor ties korred mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at korred mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to korred mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
