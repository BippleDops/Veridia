---
aliases:
- Dire Worg
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
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/feywild
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fey
- world/both
- world/surface
type: monster
updated: '2025-08-13T12:34:05.559083+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-dire-worg-xmm-dire-worg-xmm.svg)

# [[3-Mechanics\CLI\bestiary\fey/dire-worg-xmm|Dire Worg]]
*Source: Monster Manual (2024) p. 335*  

Dire worgs are larger than common worgs and possess a supernaturally terrifying howl. They frequently hunt alongside ettins, ogres, and trolls.

## Worgs

*Malicious Lupine Ravagers*

- **Habitat.** Forest, Grassland, Hill, Planar (Feywild)  
- **Treasure.** None  

Sometimes mistaken at first for giant wolves, worgs are vicious hunters. These sapient predators can speak and often taunt their prey, enjoying the taste of fear in their meals.

```statblock
"name": "Dire Worg (XMM)"
"size": "Huge"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "147"
"hit_dice": "14d12 + 56"
"modifier": !!int "2"
"stats":
  - !!int "22"
  - !!int "14"
  - !!int "18"
  - !!int "7"
  - !!int "16"
  - !!int "8"
"speed": "50 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+11"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "Goblin, Sylvan, Worg"
"cr": "10"
"traits":
  - "desc": "The worg has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The worg makes three Bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +10, reach 5 ft. Hit: 15 (2d8 + 6) Piercing damage\
      \ plus 7 (2d6) Poison damage, and the target has the [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]]\
      \ condition until the start of the worg's next turn. While [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]],\
      \ the target can't regain [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]."
    "name": "Bite"
  - "desc": "Wisdom Saving Throw: DC 16, each creature within 30 feet that isn't\
      \ a worg. Failure: 36 (8d8) Psychic damage, and the target has the [[/03_Mechanics/CLI/conditions#Frightened|Frightened]]\
      \ condition until the start of the worg's next turn. Success: Half damage\
      \ only."
    "name": "Dreadful Howl (Recharge 5-6)"
"bonus_actions":
  - "desc": "The worg teleports, along with a willing creature of its choice within\
      \ 5 feet of it, up to 30 feet to an unoccupied space it can see."
    "name": "Warp Step"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fey/token/dire-worg-xmm.webp"
```
^statblock

## Environment

forest, grassland, hill, planar, feywild

## Player-Facing Summary

Dire worg xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of dire worg xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around dire worg xmm.

## Adventure Hooks

- A rumor ties dire worg xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at dire worg xmm to avert a public scandal.
- A map overlay reveals a hidden approach to dire worg xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
