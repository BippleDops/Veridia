# ogre-zombie-xmm

---
title: ogre zombie xmm
aliases:
- Ogre Zombie
type: monster
tags:
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/type/undead
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/environment/underdark
- research
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/environment/planar
- world/both
- active
- ttrpg-cli/monster/cr/2
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.587388'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ogre-zombie-xmm-ogre-zombie-xmm.svg)

# [[ogre-zombie-xmm|Ogre Zombie]]
*Source: Monster Manual (2024) p. 346. Available in the SRD and the Free Rules (2024)*  

Ogre zombies serve as tireless labor and undying weapons of war. These massive zombies possess the size and strength to break through barriers that repel smaller zombies.


## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement


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
"name": "Ogre Zombie (XMM)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "85"
"hit_dice": "9d10 + 36"
"modifier": !!int "-2"
"stats":
  - !!int "19"
  - !!int "6"
  - !!int "18"
  - !!int "3"
  - !!int "5"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Common and Giant but can't speak"
"cr": "2"
"traits":
  - "desc": "If damage reduces the zombie to 0 [[hit-points-xphb|Hit Points]],\
      \ it makes a Constitution saving throw (DC 5 plus the damage taken) unless the\
      \ damage is Radiant or from a [[critical-hit-xphb|Critical Hit]].\
      \ On a successful save, the zombie drops to 1 [[hit-points-xphb|Hit Point]]\
      \ instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 13 (2d8 + 4) Bludgeoning\
      \ damage."
    "name": "Slam"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/ogre-zombie-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban

## Player-Facing Summary

Ogre zombie xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ogre zombie xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ogre zombie xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Prophecy Connection

Mentioned in The Hidden Prophecy of Depths


## 12_Research Specific Content

Contextual improvement based on 12_Research
