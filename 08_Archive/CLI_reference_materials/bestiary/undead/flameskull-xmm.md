---
updated: '2025-08-13T01:18:32.818422+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: '#^statblock'
aliases:
- Flameskull
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-flameskull-xmm-flameskull-xmm.svg)

# [Flameskull](3-Mechanics\CLI\bestiary\undead/flameskull-xmm.md)
*Source: Monster Manual (2024) p. 120*  

## Flameskull

*Skull Smoldering with Magical Obsession*

- **Habitat.** Underdark  
- **Treasure.** Arcana  

Flameskulls are flying skulls that blaze with magical fire and the half-remembered arcana of dead spellcasters. They rise from the remains of dead magic-users who were reanimated by sinister necromancers or whose magical pursuits drive them beyond death. Flameskulls might serve as guardians for their creators or pursue ambitions left unfulfilled in life. They lash out at foes with destructive spells and bursts of fire, wielding magic without the need for most components.

Flameskulls take various forms, from skulls with humanlike features to ones with fearsome or bestial alterations. Their flames vary in color and grow more intense when they're angry. Roll on or choose a result from the Flameskull Details table to inspire what makes a flameskull distinctive.

**Flameskull Details**

`dice: [](flameskull-xmm.md#^flameskull-details)`

| dice: 1d6 | The Flameskull Features... |
|-----------|----------------------------|
| 1 | Arcane diagrams etched into it. |
| 2 | Flames like dramatic features, horns, or hair. |
| 3 | Fractured pieces that fly in unison. |
| 4 | An iron plate bolted over its mouth. |
| 5 | Lethal head trauma. |
| 6 | Mismatched animal teeth. |
^flameskull-details

> [!quote] A quote from Trenzia, Undermountain Flameskull  
> 
> I never cared for warmth. I never needed a body. My will is enough, and my work will be the legacy that makes my every sacrifice worthwhile!


```statblock
"name": "Flameskull (XMM)"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d4 + 18"
"modifier": !!int "3"
"stats":
  - !!int "1"
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "10"
  - !!int "11"
"speed": "5 ft., fly 40 ft. (hover)"
"skillsaves":
  - "name": "[Arcana](/03_Mechanics/CLI/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+2"
"damage_immunities": "fire, necrotic, poison"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned), [prone](/03_Mechanics/CLI/conditions.md#Prone)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common plus two other languages"
"cr": "4"
"traits":
  - "desc": "The flameskull sheds [Bright Light](/03_Mechanics/CLI/variant-rules/bright-light-xphb.md)\
      \ in a 15-foot radius and [Dim Light](/03_Mechanics/CLI/variant-rules/dim-light-xphb.md)\
      \ for an additional 15 feet."
    "name": "Illumination"
  - "desc": "The flameskull has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "If the flameskull is destroyed, it regains all its [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ in 1 hour unless Holy Water is sprinkled on its remains or the [Dispel Evil\
      \ and Good](/03_Mechanics/CLI/spells/dispel-evil-and-good-xphb.md) spell is cast\
      \ on them."
    "name": "Undead Restoration"
"actions":
  - "desc": "The flameskull makes two Fire Ray attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Attack Roll: +5, reach 5 ft. or range 60 ft. Hit:\
      \ 13 (3d6 + 3) Fire damage."
    "name": "Fire Ray"
  - "desc": "The flameskull casts one of the following spells, requiring no Somatic\
      \ or Material components and using Intelligence as the spellcasting ability\
      \ (spell save DC 13):\n\nAt will: [Mage Hand](/03_Mechanics/CLI/spells/mage-hand-xphb.md)\n\
      \n2/day: [Magic Missile](/03_Mechanics/CLI/spells/magic-missile-xphb.md)\
      \ (level 2 version)\n\n1/day: [Fireball](/03_Mechanics/CLI/spells/fireball-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/flameskull-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Flameskull xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of flameskull xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around flameskull xmm.

## Adventure Hooks

- A rumor ties flameskull xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at flameskull xmm to avert a public scandal.
- A map overlay reveals a hidden approach to flameskull xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
