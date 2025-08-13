---
aliases:
- Glabrezu
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- active
- both
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
- world/both
type: monster
updated: '2025-08-13T12:34:05.859457+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-glabrezu-xmm-glabrezu-xmm.svg)

# [[3-Mechanics\CLI\bestiary\fiend/glabrezu-xmm|Glabrezu]]
*Source: Monster Manual (2024) p. 138. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Glabrezu

*Demon of Delusion and Entrapment*

- **Habitat.** Planar (Abyss)  
- **Treasure.** Relics  

Glabrezus embody delusion and predatory guile. These cunning demons know the most effective traps are those that individuals devise for themselves. Despite having massive claws and overwhelming physicality, glabrezus excel at using flattery and misdirection to coerce victims into isolating themselves and harming others.

In the Abyss, glabrezus act as lone hunters or deceitful advisers to greater demons. Glabrezus seek routes to the Material Plane and relish being summoned by magic-users. They eagerly serve mortals while tempting them to betray their allies and indulge in hubristic fantasies. A glabrezu strives to murder its summoner once the magic-user has committed irredeemable misdeeds and the mortal's soul is surely condemned to the Abyss.

> [!quote] A quote from Gerrzog, Glabrezu of the Infinite Staircase  
> 
> Your companion's life, or what you've journeyed through infinity in search of! Make your choice.


```statblock
"name": "Glabrezu (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"modifier": !!int "6"
"stats":
  - !!int "20"
  - !!int "15"
  - !!int "21"
  - !!int "19"
  - !!int "17"
  - !!int "16"
"speed": "40 ft."
"saves":
  - "strength": !!int "9"
  - "constitution": !!int "9"
  - "wisdom": !!int "7"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Deception|Deception]]"
    "desc": "+7"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+7"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "Abyssal; telepathy 120 ft."
"cr": "9"
"traits":
  - "desc": "If the glabrezu dies outside the Abyss, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The glabrezu has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The glabrezu makes two Pincer attacks and uses Pummel or Spellcasting."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9, reach 10 ft. Hit: 16 (2d10 + 5) Slashing damage.\
      \ If the target is a Medium or smaller creature, it has the [[/03_Mechanics/CLI/conditions#Grappled|Grappled]]\
      \ condition (escape DC 15) from one of two pincers."
    "name": "Pincer"
  - "desc": "Dexterity Saving Throw: DC 17, one creature [[/03_Mechanics/CLI/conditions#Grappled|Grappled]]\
      \ by the glabrezu. Failure: 15 (3d6 + 5) Bludgeoning damage. Success: Half\
      \ damage."
    "name": "Pummel"
  - "desc": "The glabrezu casts one of the following spells, requiring no Material\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 16):\n\nAt will: [[/03_Mechanics/CLI/spells/darkness-xphb|Darkness]],\
      \ [[/03_Mechanics/CLI/spells/detect-magic-xphb|Detect Magic]], [[/03_Mechanics/CLI/spells/dispel-magic-xphb|Dispel Magic]]\n\
      \n1/day each: [[/03_Mechanics/CLI/spells/confusion-xphb|Confusion]], [[/03_Mechanics/CLI/spells/fly-xphb|Fly]],\
      \ [[/03_Mechanics/CLI/spells/power-word-stun-xphb|Power Word Stun]]"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/glabrezu-xmm.webp"
```
^statblock

## Environment

planar, abyss

## Player-Facing Summary

Glabrezu xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of glabrezu xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around glabrezu xmm.

## Adventure Hooks

- A rumor ties glabrezu xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at glabrezu xmm to avert a public scandal.
- A map overlay reveals a hidden approach to glabrezu xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
