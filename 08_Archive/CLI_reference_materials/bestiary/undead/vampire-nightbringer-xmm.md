---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/8
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/environment/urban
  - ttrpg-cli/monster/size/small-or-medium
  - ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Vampire Nightbringer
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-vampire-nightbringer-xmm-v1-vampire-nightbringer-xmm.svg)

# [Vampire Nightbringer](3-Mechanics\CLI\bestiary\undead/vampire-nightbringer-xmm.md)
*Source: Monster Manual (2024) p. 316*  

Born of necromantic rituals and planes of existence suffused with negative energy, vampire nightbringers manipulate shadows and feed on the raw life force of living creatures.

## Vampires

*Blood-Sucking Lords of the Night*

- **Habitat.** Underdark, Urban  
- **Treasure.** Any  

Vampires disguise their accursed, immortal natures, passing as mortals to feed on the blood of the living. While the youngest vampires might be little more than bloodthirsty servants of their creators, the eldest possess incredible cunning and control over supernatural forces of the night.

Undead vampires lie dormant during the day, retreating to resting places hidden from foes and the sun's searing rays. Roll on or choose a result from the Vampire Resting Places table to inspire a vampire's grim sanctuary.

**Vampire Resting Places**

`dice: [](vampire-nightbringer-xmm.md#^vampire-resting-places)`

| dice: 1d6 | The Vampire's Resting Place Is... |
|-----------|-----------------------------------|
| 1 | Among the roots of a dead tree. |
| 2 | At the bottom of a stagnant pool. |
| 3 | A coffin filled with grave dirt. |
| 4 | A large pot full of blood or vinegar. |
| 5 | A space accessible only by shape-shifting. |
| 6 | Within a statue or suit of armor. |
^vampire-resting-places

### Vampire Lairs

Vampires and vampire umbral lords create sanctuaries apart from the living, whether hidden in cosmopolitan cities or sequestered in ruins where they dwelled in life.

> [!quote] A quote from Astarion, Vampire Spawn  
> 
> Darling, you are simply delicious...


```statblock
"name": "Vampire Nightbringer (XMM)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "142"
"hit_dice": "19d8 + 57"
"modifier": !!int "4"
"stats":
  - !!int "16"
  - !!int "18"
  - !!int "16"
  - !!int "13"
  - !!int "14"
  - !!int "15"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+7"
"damage_immunities": "cold, necrotic"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened)"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Common plus one other language"
"cr": "8"
"traits":
  - "desc": "The vampire takes 10 Radiant damage if it starts its turn in sunlight.\
      \ While in sunlight, it has [Disadvantage](/03_Mechanics/CLI/variant-rules/disadvantage-xphb.md)\
      \ on attack rolls and ability checks."
    "name": "Sunlight Hypersensitivity"
"actions":
  - "desc": "The vampire makes one Bite attack and one Shadow Strike attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 7 (1d6 + 4) Piercing damage\
      \ plus 10 (3d6) Necrotic damage. The target's [Hit Point](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the Necrotic damage taken, and the\
      \ vampire regains [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ equal to that amount."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 7 (1d6 + 4) Slashing damage\
      \ plus 14 (4d6) Cold damage."
    "name": "Shadow Strike"
"bonus_actions":
  - "desc": "While in [Dim Light](/03_Mechanics/CLI/variant-rules/dim-light-xphb.md)\
      \ or [Darkness](/03_Mechanics/CLI/variant-rules/darkness-xphb.md), the vampire\
      \ takes the Hide action."
    "name": "Shadow Stealth"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/vampire-nightbringer-xmm.webp"
```
^statblock

## Environment

underdark, urban

## Player-Facing Summary

Vampire nightbringer xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of vampire nightbringer xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around vampire nightbringer xmm.

## Adventure Hooks

- A rumor ties vampire nightbringer xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at vampire nightbringer xmm to avert a public scandal.
- A map overlay reveals a hidden approach to vampire nightbringer xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
