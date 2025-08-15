---
title: Vrock Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Vrock Xmm

---
title: Vrock Xmm
aliases:
- Vrock
type: monster
tags:
- both
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
updated: '2025-08-13T12:34:05.803098+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-vrock-xmm-v1-vrock-xmm.svg)

# [[vrock xmm|Vrock]]
*Source: Monster Manual (2024) p. 319. Available in the SRD and the Free Rules (2024)*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Vrock

*Demon of Carnage and Ruin*

- **Habitat.** Planar (Abyss)  
- **Treasure.** Armaments  

Screeching, vulturelike demons, vrocks soar from the Abyss to spread ruin and slaughter. Their filthy feathers carry magical toxins from the Lower Planes, creating a noxious cloud capable of killing those who escape the vrocks' vicious beaks and claws. To further terrorize their foes, vrocks unleash an otherworldly screech so terrible it can halt creatures in their tracks.

```statblock
"name": "Vrock (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "152"
"hit_dice": "16d10 + 64"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "18"
  - !!int "8"
  - !!int "13"
"speed": "40 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "4"
  - "charisma": !!int "2"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal; telepathy 120 ft."
"cr": "6"
"traits":
  - "desc": "If the vrock dies outside the Abyss, its body dissolves into ichor, and\
      \ it gains a new body instantly, reviving with all its [[hit points xphb|Hit Points]]\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The vrock has [[advantage xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The vrock makes two Shred attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Piercing damage\
      \ plus 10 (3d6) Poison damage."
    "name": "Shred"
  - "desc": "Constitution Saving Throw: DC 15, each creature in a 20-foot [[emanation area of effect xphb|Emanation]]\
      \ originating from the vrock. Failure: The target has the [[conditions#Poisoned|Poisoned]]\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. While [[conditions#Poisoned|Poisoned]],\
      \ the target takes 5 (d10) Poison damage at the start of each of its turns.\
      \ Emptying a flask of Holy Water on the target ends the effect early."
    "name": "Spores (Recharge 6)"
      \ originating from the vrock (demons succeed automatically). Failure: 10 (3d6)\
      \ Thunder damage, and the target has the [[conditions#Stunned|Stunned]]\
      \ condition until the end of the vrock's next turn."
    "name": "Stunning Screech (1/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/vrock-xmm.webp"
```
^statblock

## Environment

planar, abyss

## Player-Facing Summary

Vrock xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of vrock xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around vrock xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Secret Connections

*[Hidden from players]* Connected to The Shadow Covenant - Achieve immortality

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
