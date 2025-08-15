# zombie-xmm

---
title: zombie xmm
aliases:
- Zombie
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/type/undead
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/cr/1-4
- research
- world/both
- ttrpg-cli/monster/environment/planar
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.595120'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-beholder-zombie-xmm-beholder-zombie-xmm.svg)

# [[zombie-xmm|Zombie]]
*Source: Monster Manual (2024) p. 346, Player's Handbook (2024) p. 359. Available in the SRD and the Free Rules (2024)*  

Humanoid zombies usually serve as guardians, servants, or soldiers for evil magic-users. In rare cases, foul magic might result in widespread reanimation of the dead, unleashing hordes of zombies to terrorize the living.


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
"name": "Zombie (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "8"
"hp": !!int "15"
"hit_dice": "2d8 + 6"
"modifier": !!int "-2"
"stats":
  - !!int "13"
  - !!int "6"
  - !!int "16"
  - !!int "3"
  - !!int "5"
"speed": "20 ft."
"saves":
  - "wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "understands Common plus one other language but can't speak"
"cr": "1/4"
"traits":
  - "desc": "If damage reduces the zombie to 0 [[hit-points-xphb|Hit Points]],\
      \ it makes a Constitution saving throw (DC 5 plus the damage taken) unless the\
      \ damage is Radiant or from a [[critical-hit-xphb|Critical Hit]].\
      \ On a successful save, the zombie drops to 1 [[hit-points-xphb|Hit Point]]\
      \ instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d8 + 1) Bludgeoning damage."
    "name": "Slam"
"source":
  - "XMM"
  - "XPHB"
"image": "/03_Mechanics/CLI/bestiary/undead/token/zombie-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban

## Player-Facing Summary

Zombie xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of zombie xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around zombie xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Plot Hooks

- The authorities needs help delivering before the new moon
- The authorities needs help stealing before winter
- The authorities needs help delivering before dawn

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]


## 12_Research Specific Content

Contextual improvement based on 12_Research


## 12_Research Specific Content

Contextual improvement based on 12_Research
