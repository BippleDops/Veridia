---
aliases:
- Giant Frog
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
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
- world/both
type: monster
updated: '2025-08-13T12:34:05.433433+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-giant-frog-xmm-giant-frog-xmm.svg)

# [[3-Mechanics\CLI\bestiary\beast/giant-frog-xmm|Giant Frog]]
*Source: Monster Manual (2024) p. 357. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [[/03_Mechanics/CLI/bestiary/beast/panther-xmm|Panther]] stat block can also represent a mountain lion, while the [[/03_Mechanics/CLI/bestiary/beast/giant-goat-xmm|Giant Goat]] stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Giant Frog (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "18"
"hit_dice": "4d8"
"modifier": !!int "1"
"stats":
  - !!int "12"
  - !!int "13"
  - !!int "11"
  - !!int "2"
  - !!int "10"
  - !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 30 ft., passive Perception 12"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The frog can breathe air and water."
    "name": "Amphibious"
  - "desc": "The frog's [[/03_Mechanics/CLI/variant-rules/long-jump-xphb|Long Jump]]\
      \ is up to 20 feet and its [[/03_Mechanics/CLI/variant-rules/high-jump-xphb|High Jump]]\
      \ is up to 10 feet with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage.\
      \ If the target is a Medium or smaller creature, it has the [[/03_Mechanics/CLI/conditions#Grappled|Grappled]]\
      \ condition (escape DC 11)."
    "name": "Bite"
  - "desc": "The frog swallows a Small or smaller target it is grappling. While swallowed,\
      \ the target isn't [[/03_Mechanics/CLI/conditions#Grappled|Grappled]] but has\
      \ the [[/03_Mechanics/CLI/conditions#Blinded|Blinded]] and [[/03_Mechanics/CLI/conditions#Restrained|Restrained]]\
      \ conditions, and it has [[/03_Mechanics/CLI/variant-rules/cover-xphb|Total Cover]]\
      \ against attacks and other effects outside the frog. While swallowing the target,\
      \ the frog can't use Bite, and if the frog dies, the swallowed target is no\
      \ longer [[/03_Mechanics/CLI/conditions#Restrained|Restrained]] and can escape\
      \ from the corpse using 5 feet of movement, exiting with the [[/03_Mechanics/CLI/conditions#Prone|Prone]]\
      \ condition.\n\nAt the end of the frog's next turn, the swallowed target takes\
      \ 5 (2d4) Acid damage. If that damage doesn't kill it, the frog disgorges it,\
      \ causing it to exit [[/03_Mechanics/CLI/conditions#Prone|Prone]]."
    "name": "Swallow"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/beast/token/giant-frog-xmm.webp"
```
^statblock

## Environment

forest, swamp

## Player-Facing Summary

Giant frog xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of giant frog xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around giant frog xmm.

## Adventure Hooks

- A rumor ties giant frog xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at giant frog xmm to avert a public scandal.
- A map overlay reveals a hidden approach to giant frog xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
