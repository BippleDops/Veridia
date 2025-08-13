---
updated: '2025-08-13T01:18:32.756765+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/lower
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: '#^statblock'
aliases:
- Spirit Naga
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-spirit-naga-xmm-spirit-naga-xmm.svg)

# [Spirit Naga](3-Mechanics\CLI\bestiary\fiend/spirit-naga-xmm.md)
*Source: Monster Manual (2024) p. 297. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Spirit Naga

*Spiteful Serpentine Grudge Keeper*

- **Habitat.** Planar (Lower Planes), Underdark  
- **Treasure.** Arcana  

Spirit nagas loathe the world and all creatures. Possessing perfect memories, these venomous, cobra-like creatures recall every slight committed against them during their immortal existences. In their dank, joyless lairs, they create vicious plots to avenge themselves against even petty offenses.

Spirit nagas seek to claim what they believe they deserve. Their schemes often involve poisons, vile spells, cursed objects, or magical compulsions, eventually making them wellsprings of diabolical knowledge and evil inspiration. Other villains often seek out spirit nagas as advisers and allies. Roll on or choose a result from the Spirit Naga Grievances table to inspire what motivates a spirit naga's schemes.

**Spirit Naga Grievances**

`dice: [](spirit-naga-xmm.md#^spirit-naga-grievances)`

| dice: 1d6 | The Spirit Naga Believes... |
|-----------|-----------------------------|
| 1 | A character is to blame for its recent failures. |
| 2 | It has been evicted from its rightful home. |
| 3 | Locals have reneged on an age-old bargain. |
| 4 | Other creatures are mocking it. |
| 5 | A rival is spying on it. |
| 6 | Someone's treasure rightfully belongs to it. |
^spirit-naga-grievances

```statblock
"name": "Spirit Naga (XMM)"
"size": "Large"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "135"
"hit_dice": "18d10 + 36"
"modifier": !!int "3"
"stats":
  - !!int "18"
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "15"
  - !!int "16"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "6"
  - "constitution": !!int "5"
  - "wisdom": !!int "5"
  - "charisma": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common"
"cr": "8"
"traits":
  - "desc": "If it dies, the naga returns to life in d6 days and regains all its [Hit\
      \ Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md). Only a [Wish](/03_Mechanics/CLI/spells/wish-xphb.md)\
      \ spell can prevent this trait from functioning."
    "name": "Fiendish Restoration"
"actions":
  - "desc": "The naga makes three attacks, using Bite or Necrotic Ray in any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 10 ft. Hit: 7 (1d6 + 4) Piercing damage\
      \ plus 14 (4d6) Poison damage."
    "name": "Bite"
  - "desc": "Ranged Attack Roll: +6, range 60 ft. Hit: 21 (6d6) Necrotic damage."
    "name": "Necrotic Ray"
  - "desc": "The naga casts one of the following spells, requiring no Somatic or Material\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 14):\n\nAt will: [Detect Magic](/03_Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [Mage Hand](/03_Mechanics/CLI/spells/mage-hand-xphb.md), [Minor Illusion](/03_Mechanics/CLI/spells/minor-illusion-xphb.md),\
      \ [Water Breathing](/03_Mechanics/CLI/spells/water-breathing-xphb.md)\n\n2/day\
      \ each: [Detect Thoughts](/03_Mechanics/CLI/spells/detect-thoughts-xphb.md),\
      \ [Dimension Door](/03_Mechanics/CLI/spells/dimension-door-xphb.md), [Hold Person](/03_Mechanics/CLI/spells/hold-person-xphb.md)\
      \ (level 3 version), [Lightning Bolt](/03_Mechanics/CLI/spells/lightning-bolt-xphb.md)\
      \ (level 4 version)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/spirit-naga-xmm.webp"
```
^statblock

## Environment

planar, lower, underdark

## Player-Facing Summary

Spirit naga xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of spirit naga xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around spirit naga xmm.

## Adventure Hooks

- A rumor ties spirit naga xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at spirit naga xmm to avert a public scandal.
- A map overlay reveals a hidden approach to spirit naga xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
