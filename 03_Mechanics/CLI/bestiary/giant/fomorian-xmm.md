---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/8
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/huge
  - ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Fomorian
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-fomorian-xmm-fomorian-xmm.svg)

# [Fomorian](3-Mechanics\CLI\bestiary\giant/fomorian-xmm.md)
*Source: Monster Manual (2024) p. 123*  

## Fomorian

*Cursed Giant of the Dark*

- **Habitat.** Underdark  
- **Treasure.** Any  

Once infamous for their magical aptitude, fomorians are giants afflicted with a fey curse. In their pride, they were tricked into invading the Feywild to claim its magic for their own. When the archfey rulers of that realm united, the fomorians were turned back and cursed with supernatural strangeness to make their bodies match their vile souls. Ever since, fomorians have dwelled in the Underdark amid the ruins of their magical cities. The archfey's curse afflicts them still, tormenting them with wandering cankers, lurching organs, and stranger discomforts. Rather than atoning for their offenses, fomorians harness the magic of their curse and turn it against others. Roll on or choose a result from the Fomorian Warping table to inspire the cosmetic effects a creature undergoes while they're affected by a fomorian's Warping Hex.

**Fomorian Warping**

`dice: [](fomorian-xmm.md#^fomorian-warping)`

| dice: 1d4 | The Fomorian's Hex Causes... |
|-----------|------------------------------|
| 1 | Colorful, wandering pustules. |
| 2 | Excessive sweating of rainbow-hued fluids. |
| 3 | Patches of wriggling hair. |
| 4 | Veins that bulge and lurch under the skin. |
^fomorian-warping

> [!quote] A quote from Bigby  
> 
> All-Father Annam banished his son, Karontor, for Karontor's part in the fomorian assault on the Feywild. That day, the ordning—the hierarchy of the giants and their gods—changed forever, and the fomorians were part of it no more.


```statblock
"name": "Fomorian (XMM)"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"modifier": !!int "0"
"stats":
  - !!int "23"
  - !!int "10"
  - !!int "20"
  - !!int "9"
  - !!int "14"
  - !!int "6"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+3"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Giant, Undercommon"
"cr": "8"
"actions":
  - "desc": "The fomorian makes two Stone Club attacks. It can replace one attack\
      \ with a use of Warping Hex if available."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9, reach 15 ft. Hit: 24 (4d8 + 6) Bludgeoning\
      \ damage."
    "name": "Stone Club"
  - "desc": "Wisdom Saving Throw: DC 16, one creature the fomorian can see within\
      \ 120 feet. Failure: 21 (6d6) Psychic damage, and the target gains 1 [Exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion)\
      \ level. Success: Half damage only."
    "name": "Warping Hex (Recharge 4-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/giant/token/fomorian-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Fomorian xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of fomorian xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around fomorian xmm.

## Adventure Hooks

- A rumor ties fomorian xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at fomorian xmm to avert a public scandal.
- A map overlay reveals a hidden approach to fomorian xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
