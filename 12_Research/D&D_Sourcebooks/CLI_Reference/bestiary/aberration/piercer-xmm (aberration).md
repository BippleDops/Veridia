---
title: piercer-xmm (aberration)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# piercer-xmm

---
title: piercer xmm
aliases:
- Piercer
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/type/aberration
- research
- world/both
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.293910'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-piercer-xmm-piercer-xmm.svg)

# [[piercer xmm|Piercer]]
*Source: Monster Manual (2024) p. 240*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Piercer

*Aberrant Counterfeit Stalactite*

- **Habitat.** Underdark  
- **Treasure.** Individual  

Piercers resemble stalactites, but each has a toothy maw and a single eye. They hang from cavern ceilings along routes frequented by denizens of the Underdark. Piercers might lurk for months at a time, waiting for any creature of their approximate size to pass underneath. When potential meals move below, piercers release their grip and plummet, intent on impaling prey in a single strike. If they're successful, piercers consume their meals and then slowly climb to a new ambush position. If they miss or fail to slay their targets, piercers attempt to squirm away, but they're easily dispatched by creatures aware of their presence.

Piercers are the larval form of ropers. Young piercers seek to move as far from ropers as they can to avoid ropers' undiscerning hunger. Many piercers migrate vast distances through the Underdark, often to caverns or buried ruins near the surface.

> [!quote]  
> 
> Rule 8: Never trust a stalactite

```statblock
"name": "Piercer (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "1"
  - !!int "7"
  - !!int "3"
"speed": "5 ft., climb 15 ft."
"skillsaves":
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+5"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The piercer can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "Melee Attack Roll: +3, reach 5 ft. Hit: 5 (1d8 + 1) Piercing damage."
    "name": "Bite"
  - "desc": "The piercer falls. Dexterity Saving Throw: DC 11, one creature directly\
      \ underneath the piercer. Failure: 10 (3d6) Piercing damage. Failure or Success:\
      \ The piercer reduces any damage it takes from the fall by 20."
    "name": "Drop"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/piercer-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Piercer xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of piercer xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around piercer xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- A journal reveals a betrayal about the cult
- Someone is protecting a artifact for revenge

## 12_Research Specific Content

Contextual improvement based on 12_Research
