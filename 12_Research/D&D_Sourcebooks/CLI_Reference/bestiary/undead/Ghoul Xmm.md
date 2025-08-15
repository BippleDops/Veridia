---
title: Ghoul Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Ghoul Xmm

---
title: Ghoul Xmm
aliases:
- Ghoul
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underdark
- research
- world/both
- ttrpg-cli/monster/environment/swamp
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.874551+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ghoul-xmm-ghoul-xmm.svg)

# [[ghoul-xmm (undead)]]
*Source: Monster Manual (2024) p. 132. Available in the SRD and the Free Rules (2024)*  

Ghouls rise from the bodies of cannibals and villains with depraved hungers. They form packs out of shared voracity.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Ghouls

*Eaters of the Dead*

- **Habitat.** Swamp, Underdark, Urban  
- **Treasure.** Any  

Packs of ghouls haunt the rotten corners of the world, ravenously hunting for corpses and those soon to be corpses. These gaunt, animate cadavers with unnaturally long tongues dwell in catacombs and ruins where they devour the contents of graves and paralyze foes with vicious claws.

> [!quote]  
> 
> On a plain of teeth, in a temple of filth, the starving king wastes no morsel. Every coffin a banquet. Every slab a platter. Now is the time of feasting!

```statblock
"name": "Ghoul (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "13"
  - !!int "15"
  - !!int "10"
  - !!int "7"
  - !!int "6"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
  - "desc": "The ghoul makes two Bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage\
      \ plus 3 (d6) Necrotic damage."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing damage.\
      \ If the target is a creature that isn't an Undead or elf, it is subjected to\
      \ the following effect. Constitution Saving Throw: DC 10. Failure: The target\
      \ has the [[conditions#Paralyzed|Paralyzed]] condition until\
      \ the end of its next turn."
    "name": "Claw"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/ghoul-xmm.webp"
```
^statblock

## Environment

swamp, underdark, urban

## Player-Facing Summary

Ghoul xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ghoul xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ghoul xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- Someone is protecting a witness for money
- A prisoner has gone missing and truth emerges
- Strange disappearances suggest a curse

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
