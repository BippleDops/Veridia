---
title: gargoyle-xmm (elemental)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# gargoyle-xmm

---
title: gargoyle xmm
aliases:
- Gargoyle
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/type/elemental
- research
- world/both
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
updated: '2025-08-12T23:37:35.430099'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-gargoyle-xmm-gargoyle-xmm.svg)

# [[gargoyle xmm|Gargoyle]]
*Source: Monster Manual (2024) p. 128. Available in the SRD and the Free Rules (2024)*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Gargoyle

*Sculpted Sentinel Hidden in Plain Sight*

- **Habitat.** Underdark, Urban  
- **Treasure.** Any  

Gargoyles are sculptures inhabited by elemental spirits. Wings and magic allow their heavy stone bodies to fly, and they often perch where they can blend in amid ornate architecture, rock formations, or mundane statues. Gargoyles usually serve the magic-users who conjured them into their bodies, but if left to their own devices, they might play cruel pranks and steal treasures to hoard in lofty lairs.

Gargoyles have a variety of appearances. Roll on or choose a result from the Gargoyle Sculptures table to inspire how a gargoyle looks.

**Gargoyle Sculptures**

`dice: [](gargoyle-xmm.md#^gargoyle-sculptures)`

| dice: 1d6 | The Gargoyle Is Sculpted to Appear... |
|-----------|---------------------------------------|
| 1 | Cherubic with perpetually smiling features. |
| 2 | Crudely hewed or naturally formed. |
| 3 | Damaged or marred by mismatched pieces. |
| 4 | Dragon-like with polished stone scales. |
| 5 | Gothically fiendish with horns and a tail. |
| 6 | Useful, like an ornate podium or a pillar. |
^gargoyle-sculptures

### Gargoyle Ambushes

Gargoyles seek to ambush foes or creatures that trespass on their territories. With no biological needs and supernatural patience, these monsters might wait unmoving for months, revealing themselves only when conditions are perfect to attack. They tend to lurk where statuary seems commonplace or where terrain obscures the shape and color of their bodies. Roll on or choose a result from the Gargoyle Camouflage table to inspire where a gargoyle sets up an ambush.

**Gargoyle Camouflage**

`dice: [](gargoyle-xmm.md#^gargoyle-camouflage)`

| dice: 1d8 | The Gargoyle Conceals Itself Amid... |
|-----------|--------------------------------------|
| 1 | Burls and bark on a giant tree. |
| 2 | Monuments in a graveyard or memorial. |
| 3 | Outcroppings on a cliff or rock formation |
| 4 | The [[conditions#Petrified|petrified]] victims of a basilisk or medusa. |
| 5 | Reliefs on a sculpted gate or wall. |
| 6 | Rubble in a ruin or junkyard. |
| 7 | Stalactites or icicles on a cavern ceiling. |
| 8 | Statuary on a castle, mansion, or temple. |
^gargoyle-camouflage

> [!quote] A quote from Tiv, Scholar of the Elemental Planes  
> 
> Where evil passes in the Elemental Plane of Earth, it stains the rock and spoils the soil. Malice vanishes amid other elements, but in the dismal dark, the wicked shape it into nightmares.

```statblock
"name": "Gargoyle (XMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "11"
  - !!int "16"
  - !!int "6"
  - !!int "7"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+4"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Primordial (Terran)"
"cr": "2"
"traits":
  - "desc": "The gargoyle doesn't provoke an Opportunity Attack when it flies out\
      \ of an enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "The gargoyle makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Slashing damage."
    "name": "Claw"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/gargoyle-xmm.webp"
```
^statblock

## Environment

underdark, urban

## Player-Facing Summary

Gargoyle xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of gargoyle xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around gargoyle xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## 12_Research Specific Content

Contextual improvement based on 12_Research
