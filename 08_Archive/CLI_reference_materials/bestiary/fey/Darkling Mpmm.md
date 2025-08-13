---
aliases:
- Darkling
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
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
- world/both
type: monster
updated: '2025-08-12T23:37:35.254601'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-darkling-mpmm-darkling-mpmm.svg)

# [Darkling](3-Mechanics\CLI\bestiary\fey/darkling-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 84, Volo's Guide to Monsters p. 134*  

The Summer Queen's curse causes a darkling's body to absorb light, which wizens the creature, much like the effect of rapid aging. For this reason, darklings cover their entire bodies with clothing when exposure to light is a risk. The light darklings absorb over the course of their lives explodes outward when they die, incinerating the creatures and much of their possessions.

## Darklings

Ancient legends speak of a seelie fey who betrayed the Summer Queen. In the Summer Queens' wrath, she cursed every member of his house. The seelie fey's true name has been stricken from history, but the stories call him Dubh Catha ("Dark Crow" in Common), and other Fey refer to the house's descendants as dubh sith—"darklings." Darklings dwell in secluded caverns and chambers beneath the towns of other species. From such enclaves, they quietly ply their trade as thieves and assassins.

```statblock
"name": "Darkling (MPMM)"
"size": "Small"
"type": "fey"
"alignment": "Typically  Chaotic Neutral"
"ac": !!int "14"
"ac_class": "[leather armor](/03_Mechanics/CLI/items/leather-armor-xphb.md)"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"modifier": !!int "3"
"stats":
  - !!int "9"
  - !!int "16"
  - !!int "12"
  - !!int "10"
  - !!int "12"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Acrobatics](/03_Mechanics/CLI/skills.md#Acrobatics)"
    "desc": "+5"
  - "name": "[Deception](/03_Mechanics/CLI/skills.md#Deception)"
    "desc": "+2"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+7"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 15"
"languages": "Elvish, Sylvan"
"cr": "1/2"
"traits":
  - "desc": "When the darkling dies, nonmagical light flashes out from it in a 10-foot\
      \ radius as its body and possessions, other than metal or magic objects, burn\
      \ to ash. Any creature in that area must succeed on a DC 10 Constitution saving\
      \ throw or be [blinded](/03_Mechanics/CLI/conditions.md#Blinded) until the end\
      \ of its next turn."
    "name": "Death Flash"
  - "desc": "While in bright light, the darkling has disadvantage on attack rolls,\
      \ as well as on Wisdom ([Perception](/03_Mechanics/CLI/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Light Sensitivity"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 7 (2d6) necrotic\
      \ damage."
    "name": "Dagger"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/fey/token/darkling-mpmm.webp"
```
^statblock

## Environment

forest, swamp, underdark, urban

## Player-Facing Summary

Darkling mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of darkling mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around darkling mpmm.

## Adventure Hooks

- A rumor ties darkling mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at darkling mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to darkling mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
