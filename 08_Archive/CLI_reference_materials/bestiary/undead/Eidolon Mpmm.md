---
aliases:
- Eidolon
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
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
- world/both
- world/surface
type: monster
updated: '2025-08-13T12:34:05.881979+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-eidolon-mpmm-eidolon-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\undead/eidolon-mpmm|Eidolon]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 114, Mordenkainen's Tome of Foes p. 194*  

To protect sites they deem holy, gods often rely on eidolons, ghostly spirits bound to safeguard a sacred place. Forged from the souls of those with unwavering devotion, eidolons stalk temples and vaults to ensure that no enemy defiles, damages, or plunders these sites. If an enemy sets foot inside a warded location, the [[/03_Mechanics/CLI/bestiary/undead/eidolon-mpmm|eidolon]] plunges into a [[/03_Mechanics/CLI/bestiary/construct/sacred-statue-mpmm|statue]] specially prepared to house its soul; it then animates this effigy and uses the statue to drive out the intruders.

```statblock
"name": "Eidolon (MPMM)"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "9"
"hp": !!int "63"
"hit_dice": "18d8 - 18"
"modifier": !!int "-1"
"stats":
  - !!int "7"
  - !!int "8"
  - !!int "9"
  - !!int "14"
  - !!int "19"
  - !!int "16"
"speed": "0 ft., fly 40 ft. (hover)"
"saves":
  - "wisdom": !!int "8"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+8"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Frightened|frightened]], [[/03_Mechanics/CLI/conditions#Grappled|grappled]],\
  \ [[/03_Mechanics/CLI/conditions#Paralyzed|paralyzed]], [[/03_Mechanics/CLI/conditions#Petrified|petrified]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]], [[/03_Mechanics/CLI/conditions#Prone|prone]],\
  \ [[/03_Mechanics/CLI/conditions#Restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "the languages it knew in life"
"cr": "12"
"traits":
  - "desc": "The eidolon can move through other creatures and objects as if they were\
      \ difficult terrain. It takes 5 (d10) force damage if it ends its turn inside\
      \ an object other than a [[/03_Mechanics/CLI/bestiary/construct/sacred-statue-mpmm|sacred statue]]."
    "name": "Incorporeal Movement"
  - "desc": "When the eidolon moves into a space occupied by a [[/03_Mechanics/CLI/bestiary/construct/sacred-statue-mpmm|sacred statue]],\
      \ the eidolon can disappear, causing the statue to become a creature under the\
      \ eidolon's control. The eidolon uses the [[/03_Mechanics/CLI/bestiary/construct/sacred-statue-mpmm|sacred statue's stat block]]\
      \ in place of its own."
    "name": "Sacred Animation (Recharge 5-6)"
  - "desc": "The eidolon has advantage on saving throws against any effect that turns\
      \ Undead."
    "name": "Turn Resistance"
  - "desc": "The eidolon doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "Each creature within 60 feet of the eidolon that can see it must succeed\
      \ on a DC 15 Wisdom saving throw or be [[/03_Mechanics/CLI/conditions#Frightened|frightened]]\
      \ of it for 1 minute. While [[/03_Mechanics/CLI/conditions#Frightened|frightened]]\
      \ in this way, the creature must take the [[/03_Mechanics/CLI/actions#Dash|Dash]]\
      \ action and move away from the eidolon by the safest available route at the\
      \ start of each of its turns, unless there is nowhere for it to move, in which\
      \ case the creature also becomes [[/03_Mechanics/CLI/conditions#Stunned|stunned]]\
      \ until it can move again. A [[/03_Mechanics/CLI/conditions#Frightened|frightened]]\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success. If a target's saving throw is successful\
      \ or the effect ends for it, the target is immune to any eidolon's Divine Dread\
      \ for the next 24 hours."
    "name": "Divine Dread"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/undead/token/eidolon-mpmm.webp"
```
^statblock

## Environment

coastal, desert, forest, grassland, mountain, urban

## Player-Facing Summary

Eidolon mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of eidolon mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around eidolon mpmm.

## Adventure Hooks

- A rumor ties eidolon mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at eidolon mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to eidolon mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
