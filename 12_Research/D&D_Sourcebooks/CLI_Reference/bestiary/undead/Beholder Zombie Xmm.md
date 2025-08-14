# Beholder Zombie Xmm

---
title: Beholder Zombie Xmm
aliases:
- Beholder Zombie
type: monster
tags:
- ttrpg-cli/monster/environment/shadowfell
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/undead
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/environment/planar
- world/both
- research
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.890888+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-beholder-zombie-xmm-beholder-zombie-xmm.svg)

# [[beholder-zombie-xmm|Beholder Zombie]]
*Source: Monster Manual (2024) p. 347*  

Zombies animated from the corpses of beholders retain some use of those monsters' magical eyestalks. These hovering corpses rely on their magic to destroy impediments and paralyze foes, allowing them to savage foes with their rotting maws.

Magic-using beholders typically raise these abominations from the corpses of defeated rivals.

## Zombies

*Relentless Reanimated Corpses*

- **Habitat.** Planar (Shadowfell), Underdark, Urban  
- **Treasure.** None  

Zombies are unthinking, reanimated corpses, often gruesomely marred by decay and lethal traumas. They serve whatever supernatural force animates them—typically evil necromancers or fiendish spirits. Zombies are relentless, merciless, and resilient, and their dead flesh can carry on even after suffering grievous wounds. While they can follow simple orders, they rely on primal drives rather than thought. They fulfill commands by working tirelessly or battering through foes, but they are easily stymied by barriers or unexpected circumstances.

Zombies are usually created from Humanoid corpses, but the remains of other creatures can also become zombies. Such monstrous zombies might possess the strength they had in life or a measure of their supernatural abilities, but they employ such abilities haphazardly at best.

> [!quote] A quote from Account of the Night of the Walking Dead  
> 
> Then, by a spectacular crack of lightning, the figures came into view, moving slowly toward the village. Over driving winds a voice cried out, "The dead come for Marais d'Tarascon! An army of the walking dead!"


```statblock
"name": "Beholder Zombie (XMM)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "-1"
"stats":
  - !!int "14"
  - !!int "8"
  - !!int "16"
  - !!int "3"
  - !!int "8"
  - !!int "5"
"speed": "5 ft., fly 20 ft. (hover)"
"saves":
  - "wisdom": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Poisoned|poisoned]], [[conditions#Prone|prone]]"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Deep Speech and Undercommon but can't speak"
"cr": "5"
"traits":
  - "desc": "If damage reduces the zombie to 0 [[hit-points-xphb|Hit Points]],\
      \ it makes a Constitution saving throw (DC 5 plus the damage taken) unless the\
      \ damage is Radiant or from a [[critical-hit-xphb|Critical Hit]].\
      \ On a successful save, the zombie drops to 1 [[hit-points-xphb|Hit Point]]\
      \ instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "The zombie uses Eye Rays twice."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 16 (4d6 + 2) Piercing damage."
    "name": "Bite"
  - "desc": "The zombie randomly shoots one of the following magical rays at a target\
      \ it can see within 120 feet of itself (roll d4; reroll if the zombie has already\
      \ used that ray during this turn):\n\n- 1 Paralyzing Ray. Constitution\
      \ Saving Throw: DC 14. Failure: The target has the [[conditions#Paralyzed|Paralyzed]]\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically.\
      \  \n- 2 Fear Ray. Wisdom Saving Throw: DC 14. Failure: 13 (3d8) Psychic\
      \ damage, and the target has the [[conditions#Frightened|Frightened]]\
      \ condition until the end of its next turn.  \n- 3 Enervation Ray. Constitution\
      \ Saving Throw: DC 14. Failure: 10 (3d6) Necrotic damage, and the target\
      \ has the [[conditions#Poisoned|Poisoned]] condition until\
      \ the end of its next turn. While [[conditions#Poisoned|Poisoned]],\
      \ the target can't regain [[hit-points-xphb|Hit Points]].\
      \ Success: Half damage only.  \n- 4 Disintegration Ray. Dexterity Saving\
      \ Throw: DC 14. Failure: 27 (5d10) Force damage. If the target is a nonmagical\
      \ object or a creation of magical force, a 10-foot [[cube-area-of-effect-xphb|Cube]]\
      \ of it disintegrates into dust. Success: Half damage. Failure or Success:\
      \ If the target is a creature and this damage reduces it to 0 [[hit-points-xphb|Hit Points]],\
      \ it disintegrates into dust.  "
    "name": "Eye Rays"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/beholder-zombie-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban

## Player-Facing Summary

Beholder zombie xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of beholder zombie xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around beholder zombie xmm.

## Adventure Hooks

- A rumor ties beholder zombie xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at beholder zombie xmm to avert a public scandal.
- A map overlay reveals a hidden approach to beholder zombie xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
