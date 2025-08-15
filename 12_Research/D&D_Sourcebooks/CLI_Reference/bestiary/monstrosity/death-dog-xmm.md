# death-dog-xmm

---
title: death dog xmm
aliases:
- Death Dog
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/cr/1
- research
- world/both
- ttrpg-cli/monster/type/monstrosity
- active
- status/in-progress
- ttrpg-cli/monster/environment/desert
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:34.982118'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-death-dog-xmm-death-dog-xmm.svg)

# [[death-dog-xmm|Death Dog]]
*Source: Monster Manual (2024) p. 91. Available in the SRD and the Free Rules (2024)*  


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


## Death Dog

*Two-Headed Spreader of Disease*

- **Habitat.** Desert  
- **Treasure.** None  

Death dogs are plagues on the arid lands they inhabit. These vicious, two-headed canines ambush creatures they perceive as weaker than themselves, favoring the wounded or infirm. They attack recklessly, infecting as many creatures as possible with their diseased jaws. If driven off, death dogs linger close to their victims, letting infection weaken their prey before they attack again.

Legends tie death dogs to malicious death gods, the underworld, and cursed rulers. These stories are based on the malady death dogs spread. Roll on or choose a result from the Death Dog Malady Symptoms table to inspire symptoms spread by a death dog's bite. These symptoms are cosmetic and don't alter the effects of the death dog's Bite action. The symptoms vanish when a creature no longer has the [[conditions#Poisoned|Poisoned]] condition from a death dog's Bite.

> [!quote] A quote from Tablet Fragment  
> 
> And his sorrows will stalk your land like hungry dogs until the seas turn to sand and the sun burns to cinders.

**Death Dog Malady Symptoms**

`dice: [](death-dog-xmm.md#^death-dog-malady-symptoms)`

| dice: 1d6 | The Death Dog's Malady Causes... |
|-----------|----------------------------------|
| 1 | Marks from canine jaws to appear on the victim's body, as if they were still being mauled. |
| 2 | The victim's body to wither, as if constantly exposed to desert heat. |
| 3 | The victim to be distracted by distant howling or vague whispers only they can hear. |
| 4 | The victim's flesh to rot like a corpse. |
| 5 | The victim to itch, as if they had fleas or sand beneath their skin. |
| 6 | Wicked symbols to gradually appear on and spread across the victim's body. |
^death-dog-malady-symptoms

```statblock
"name": "Death Dog (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "3"
  - !!int "13"
  - !!int "6"
"speed": "40 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+4"
"condition_immunities": "[[conditions#Blinded|blinded]], [[conditions#Charmed|charmed]],\
  \ [[conditions#Deafened|deafened]], [[conditions#frightened|frightened]],\
  \ [[conditions#Stunned|stunned]], [[conditions#Unconscious|unconscious]]"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": ""
"cr": "1"
"actions":
  - "desc": "The death dog makes two Bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Piercing damage.\
      \ If the target is a creature, it is subjected to the following effect. Constitution\
      \ Saving Throw: DC 12. 1st Failure: The target has the [[conditions#Poisoned|Poisoned]]\
      \ condition. While [[conditions#Poisoned|Poisoned]], the\
      \ target's [[hit-points-xphb|Hit Point]] maximum\
      \ doesn't return to normal when finishing a [[long-rest-xphb|Long Rest]],\
      \ and it repeats the save every 24 hours that elapse, ending the effect on itself\
      \ on a success. Subsequent Failures: The [[conditions#Poisoned|Poisoned]]\
      \ decreases by 5 (d10)."
    "name": "Bite"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/death-dog-xmm.webp"
```
^statblock

## Environment

desert

## Player-Facing Summary

Death dog xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of death dog xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around death dog xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]


## 12_Research Specific Content

Contextual improvement based on 12_Research


## 12_Research Specific Content

Contextual improvement based on 12_Research
