---
title: ghast-xmm (undead)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# ghast-xmm

---
title: ghast xmm
aliases:
- Ghast
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/environment/underdark
- research
- world/both
- ttrpg-cli/monster/environment/swamp
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
updated: '2025-08-12T23:37:35.657014'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ghast-xmm-ghast-xmm.svg)

# [[ghast-xmm (undead)]]
*Source: Monster Manual (2024) p. 130. Available in the SRD and the Free Rules (2024)*  

Ghasts frequently organize ghouls into packs to despoil crypts and steal the wealth within.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Ghasts

*Tyrants among Corpses*

- **Habitat.** Swamp, Underdark, Urban  
- **Treasure.** Any  

Ghasts are reeking, undying corpses closely related to ghouls. They hunger for the vices they enjoyed in life as much as they do for rotting flesh.

```statblock
"name": "Ghast (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "36"
"hit_dice": "8d8"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "17"
  - !!int "10"
  - !!int "11"
  - !!int "8"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "2"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "2"
"traits":
  - "desc": "Constitution Saving Throw: DC 10, any creature that starts its turn\
      \ in a 5-foot [[Area of Effect Xphb]]\
      \ originating from the ghast. Failure: The target has the [[conditions#Poisoned|Poisoned]]\
      \ condition until the start of its next turn. Success: The target is immune\
      \ to this ghast's Stench for 24 hours."
    "name": "Stench"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage\
      \ plus 9 (2d8) Necrotic damage."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage.\
      \ If the target is a non-Undead creature, it is subjected to the following effect.\
      \ Constitution Saving Throw: DC 10. Failure: The target has the [[conditions#Paralyzed|Paralyzed]]\
      \ condition until the end of its next turn."
    "name": "Claw"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/ghast-xmm.webp"
```
^statblock

## Environment

swamp, underdark, urban

## Player-Facing Summary

Ghast xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ghast xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ghast xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*
