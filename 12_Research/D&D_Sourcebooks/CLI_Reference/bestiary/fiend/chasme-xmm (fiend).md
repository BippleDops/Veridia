---
title: chasme-xmm (fiend)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# chasme-xmm

---
title: chasme xmm
aliases:
- Chasme
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/type/fiend/demon
- research
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/environment/planar
- world/both
- active
- ttrpg-cli/monster/cr/6
- status/in-progress
- ttrpg-cli/monster/environment/abyss
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.504995'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-chasme-xmm-chasme-xmm.svg)

# [[chasme xmm|Chasme]]
*Source: Monster Manual (2024) p. 69*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Chasme

*Demon of Betrayal and Sycophancy*

- **Habitat.** Planar (Abyss)  
- **Treasure.** Relics  

Flying forth from the Abyss, chasmes resemble horse-size flies. They incapacitate foes by producing a mind-numbing droning, then use their proboscises to drain victims of life. In the Abyss, most chasmes obsequiously serve more powerful demons and search for captives to press into demonic hordes.

```statblock
"name": "Chasme (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d10 + 12"
"modifier": !!int "5"
"stats":
  - !!int "15"
  - !!int "12"
  - !!int "11"
  - !!int "14"
  - !!int "10"
"speed": "20 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+5"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Poisoned|poisoned]]"
"senses": "blindsight 10 ft., darkvision 120 ft., passive Perception 15"
"languages": "Abyssal; telepathy 120 ft."
"cr": "6"
"traits":
  - "desc": "If the chasme dies outside the Abyss, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [[hit points xphb|Hit Points]]\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The chasme has [[advantage xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The chasme can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 16 (4d6 + 2) Piercing damage\
      \ plus 21 (6d6) Necrotic damage. If the target is a creature, its [[hit points xphb|Hit Point]]\
      \ maximum decreases by an amount equal to the Necrotic damage taken."
    "name": "Proboscis"
"bonus_actions":
  - "desc": "Constitution Saving Throw: DC 12, each creature in a 30-foot [[emanation area of effect xphb|Emanation]]\
      \ originating from the chasme (demons automatically succeed on this save). Failure:\
      \ The target has the [[conditions#Unconscious|Unconscious]]\
      \ condition and repeats the save at the end of each of its turns. The target\
      \ succeeds automatically after 10 minutes or if it takes damage or a creature\
      \ within 5 feet of it takes an action to empty a flask of Holy Water on it.\
      \ Success: The target is immune to this chasme's Drone for 24 hours."
    "name": "Drone"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/chasme-xmm.webp"
```
^statblock

## Environment

planar, abyss

## Player-Facing Summary

Chasme xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of chasme xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around chasme xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Secret Connections

*[Hidden from players]* Connected to The Secret Pact - Summon ancient evil

## Prophecy Connection

Mentioned in The First Prophecy of Shadows

## Plot Hooks

- A journal reveals a conspiracy about this place
- Someone is blackmailing a witness for love
- Someone is protecting a witness for revenge

## 12_Research Specific Content

Contextual improvement based on 12_Research
