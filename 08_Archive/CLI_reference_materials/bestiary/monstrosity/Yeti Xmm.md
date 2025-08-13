---
aliases:
- Yeti
created: null
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- campaign/arc
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
- world/both
type: monster
updated: '2025-08-12T23:37:34.986688'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-abominable-yeti-xmm-abominable-yeti-xmm.svg)

# [[3-Mechanics\CLI\bestiary\monstrosity/yeti-xmm|Yeti]]
*Source: Monster Manual (2024) p. 339*  

Yetis hunt alone or in small family groups. They avoid the settlements of other creatures but lurk near paths frequented by traders and herders to pick off unsuspecting prey. Yetis make their homes in icy caves near frozen peaks and at extremes where few dare travel.

## Yetis

*Chilling Stalkers of the Frozen Wilds*

- **Habitat.** Arctic  
- **Treasure.** Any  

Across alpine extremes and frozen frontiers, yetis hunt those that trespass in their territories. Reclusive and merciless, they resemble giant apes with pale fur and ram-like horns. Yetis easily blend in with snow and icy cliffs, revealing themselves with blood-chilling howls just before striking with their icy claws. In addition to their physical might, yetis can chill creatures with a look, freezing their foes in place, and they can conjure ice and hurl it at foes.

Due to yetis' elusiveness, folktales about yetis are more common than sightings. Whether a distant scream is the howl of an enraged yeti or just the wind, few can be certain. Nevertheless, many mountainous settlements burn bonfires to ward off yetis, taking advantage of these brutes' aversion to fire.

> [!quote] A quote from Kelesta Hawke of the Emerald Enclave  
> 
> In the yeti, I find no kinship, no understanding, no mercy. Theirs is not the might of the mountain or the magic of glacial wonders. Theirs is a world where harmony lies murdered and frozen.


```statblock
"name": "Yeti (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "8"
  - !!int "12"
  - !!int "7"
"speed": "40 ft., climb 40 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+5"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Yeti"
"cr": "3"
"traits":
  - "desc": "If the yeti takes Fire damage, it has [[/03_Mechanics/CLI/variant-rules/disadvantage-xphb|Disadvantage]]\
      \ on attack rolls and ability checks until the end of its next turn."
    "name": "Fear of Fire"
"actions":
  - "desc": "The yeti can use its Chilling Gaze and makes two attacks, using Claw\
      \ or Ice Throw in any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 7 (1d6 + 4) Slashing damage\
      \ plus 3 (d6) Cold damage."
    "name": "Claw"
  - "desc": "Ranged Attack Roll: +6, range 30/120 ft. Hit: 6 (1d4 + 4) Bludgeoning\
      \ damage plus 2 (d4) Cold damage."
    "name": "Ice Throw"
  - "desc": "Constitution Saving Throw: DC 13, one creature the yeti can see within\
      \ 30 feet. Failure: 5 (2d4) Cold damage, and the target has the [[/03_Mechanics/CLI/conditions#Paralyzed|Paralyzed]]\
      \ condition until the start of the yeti's next turn unless the target has [[/03_Mechanics/CLI/variant-rules/immunity-xphb|Immunity]]\
      \ to Cold damage. Success: The target is immune to the Chilling Gaze of all\
      \ yetis (but not abominable yetis) for 1 hour."
    "name": "Chilling Gaze"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/yeti-xmm.webp"
```
^statblock

## Environment

arctic

## Player-Facing Summary

Yeti xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of yeti xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around yeti xmm.

## Adventure Hooks

- A rumor ties yeti xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at yeti xmm to avert a public scandal.
- A map overlay reveals a hidden approach to yeti xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
