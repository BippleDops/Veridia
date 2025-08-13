---
aliases:
- Abominable Yeti
created: 2025-08-11
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
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
- world/both
type: monster
updated: '2025-08-12T23:37:34.957138'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-abominable-yeti-xmm-abominable-yeti-xmm.svg)

# [[3-Mechanics\CLI\bestiary\monstrosity/abominable-yeti-xmm|Abominable Yeti]]
*Source: Monster Manual (2024) p. 340*  

Giants even among their own intimidating kind, abominable yetis are stronger and bloodthirstier than their kin. They claim whole regions as their hunting grounds, and they might track trespassers for days. On sighting prey, abominable yetis fling boulders of ice and snow before closing to finish foes. In addition to their icy claws and gaze, they can exhale a blast of arctic cold.

Abominable yetis dwell in frigid ruins or the deserted lairs of other monsters atop infamous peaks.

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
"name": "Abominable Yeti (XMM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "137"
"hit_dice": "11d12 + 66"
"modifier": !!int "4"
"stats":
  - !!int "24"
  - !!int "10"
  - !!int "22"
  - !!int "9"
  - !!int "13"
  - !!int "9"
"speed": "40 ft., climb 40 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+9"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+8"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Yeti"
"cr": "9"
"traits":
  - "desc": "If the yeti takes Fire damage, it has [[/03_Mechanics/CLI/variant-rules/disadvantage-xphb|Disadvantage]]\
      \ on attack rolls and ability checks until the end of its next turn."
    "name": "Fear of Fire"
"actions":
  - "desc": "The yeti can use its Chilling Gaze and makes two attacks, using Claw\
      \ or Ice Throw in any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +11, reach 5 ft. Hit: 14 (2d6 + 7) Slashing damage\
      \ plus 7 (2d6) Cold damage."
    "name": "Claw"
  - "desc": "Ranged Attack Roll: +11, range 60/240 ft. Hit: 12 (2d4 + 7) Bludgeoning\
      \ damage plus 7 (2d6) Cold damage."
    "name": "Ice Throw"
  - "desc": "Constitution Saving Throw: DC 18, one creature the yeti can see within\
      \ 30 feet. Failure: 21 (6d6) Cold damage, and the target has the [[/03_Mechanics/CLI/conditions#Paralyzed|Paralyzed]]\
      \ condition until the start of the yeti's next turn unless the target has [[/03_Mechanics/CLI/variant-rules/immunity-xphb|Immunity]]\
      \ to Cold damage. Success: The target is immune to this yeti's Chilling Gaze\
      \ for 1 hour."
    "name": "Chilling Gaze"
  - "desc": "Constitution Saving Throw: DC 18, each creature in a 30-foot [[/03_Mechanics/CLI/variant-rules/cone-area-of-effect-xphb|Cone]].\
      \ Failure: 45 (10d8) Cold damage. Success: Half damage."
    "name": "Cold Breath (Recharge 6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/abominable-yeti-xmm.webp"
```
^statblock

## Environment

arctic

## Player-Facing Summary

Abominable yeti xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of abominable yeti xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around abominable yeti xmm.

## Adventure Hooks

- A rumor ties abominable yeti xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at abominable yeti xmm to avert a public scandal.
- A map overlay reveals a hidden approach to abominable yeti xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
