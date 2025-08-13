---
aliases:
- Wererat
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/monstrosity/lycanthrope
- world/both
type: monster
updated: '2025-08-12T23:37:34.966946'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-wererat-xmm-v1-wererat-xmm.svg)

# [Wererat](3-Mechanics\CLI\bestiary\monstrosity/wererat-xmm.md)
*Source: Monster Manual (2024) p. 325. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Wererat

*Changed by the Deviousness of the Rat*

- **Habitat.** Forest, Urban  
- **Treasure.** Individual  

Wererats can shape-shift from their humanoid forms into giant rats or humanoid-rat hybrids. These creatures can transform voluntarily, but some are magically compelled to shape-shift when exposed to complete darkness or during nights of a new moon. Often, wererats' nature results from a divine curse—punishment for their deceitful natures or the crimes of their treacherous families. Wererats frequently work in groups, forming bandit gangs or thieves' guilds.

```statblock
"name": "Wererat (XMM)"
"size": "Small or Medium"
"type": "monstrosity"
"subtype": "lycanthrope"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "12"
  - !!int "11"
  - !!int "10"
  - !!int "8"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common (can't speak in rat form)"
"cr": "2"
"actions":
  - "desc": "The wererat makes two attacks, using Scratch or Hand Crossbow in any\
      \ combination. It can replace one attack with a Bite attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (2d4 + 3) Piercing damage.\
      \ If the target is a Humanoid, it is subjected to the following effect. Constitution\
      \ Saving Throw: DC 11. Failure: The target is cursed. If the cursed target\
      \ drops to 0 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md),\
      \ it instead becomes a Wererat under the DM's control and has 10 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md).\
      \ Success: The target is immune to this wererat's curse for 24 hours."
    "name": "Bite (Rat or Hybrid Form Only)"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Slashing damage."
    "name": "Scratch"
  - "desc": "Ranged Attack Roll: +5, range 30/120 ft. Hit: 6 (1d6 + 3) Piercing\
      \ damage."
    "name": "Hand Crossbow (Humanoid or Hybrid Form Only)"
"bonus_actions":
  - "desc": "The wererat shape-shifts into a Medium rat-humanoid hybrid or a Small\
      \ rat, or it returns to its true humanoid form. Its game statistics, other than\
      \ its size, are the same in each form. Any equipment it is wearing or carrying\
      \ isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/wererat-xmm.webp"
```
^statblock

## Environment

forest, urban

## Player-Facing Summary

Wererat xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of wererat xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around wererat xmm.

## Adventure Hooks

- A rumor ties wererat xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at wererat xmm to avert a public scandal.
- A map overlay reveals a hidden approach to wererat xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
