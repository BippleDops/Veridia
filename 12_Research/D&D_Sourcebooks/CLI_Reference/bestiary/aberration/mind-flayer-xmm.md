# mind-flayer-xmm

---
title: mind flayer xmm
aliases:
- Mind Flayer
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/type/aberration
- research
- world/both
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.338113'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-mind-flayer-xmm-mind-flayer-xmm.svg)

# [[mind-flayer-xmm|Mind Flayer]]
*Source: Monster Manual (2024) p. 214*  

A mind flayer's hunger for brains is outmeasured only by its thirst for dominance, and it embraces any plot that allows it to indulge both.

## Mind Flayers

*Brain-Eating Underdark Tyrants*

- **Habitat.** Underdark  
- **Treasure.** Arcana  

Scattered survivors of a world-ruining, multiversal empire, mind flayers lurk in secret conclaves hidden deep within Material Plane worlds. Within their alien sanctuaries, these wicked masterminds—also known as illithids—reshape the Underdark and its inhabitants to serve their unfathomable whims. Mind flayers are feared for their psionic powers, which allow them to stun and control other creatures, and for their horrific method of feeding: using their four slimy tentacles to extract the brains of their victims.

Mind flayers are infamous plotters and manipulators, concocting plans that reach beyond their subterranean realms. Aside from using their psionic powers to control others, mind flayers often experiment with their own bizarre life cycles, implanting other creatures with illithid young to create unnatural servants. Creatures such as grimlocks and intellect devourers result from mind flayers' biological tampering, while other Underdark-dwelling monsters—including kuo-toa, quaggoths, and troglodytes—often serve illithid masters. Githyanki and githzerai have a long adversarial history with mind flayers and bear the scars of illithid manipulation.

### Mind Flayer Colonies

Mind flayers work as lone schemers, in mysterious cabals, or as part of worlds-spanning illithid conspiracies. In groups, mind flayers work toward bizarre agendas organized by an elder brain—a massive, brain-like being with incredible psionic powers. Without such a leader, groups of mind flayers fall to self-destructive squabbling. Roll on or choose a result from the Mind Flayer Machinations table to inspire an illithid conclave's plots.

**Mind Flayer Machinations**

`dice: [](mind-flayer-xmm.md#^mind-flayer-machinations)`

| dice: 1d6 | The Mind Flayer Colony Seeks To... |
|-----------|------------------------------------|
| 1 | Blot out the sun so their Underdark-dwelling servants can invade the surface. |
| 2 | Create a new monstrous fusion between mind flayers and a legendary monster. |
| 3 | Forge a psionic network uniting illithid colonies. |
| 4 | Replace world leaders with intellect devourers. |
| 5 | Restore a vessel to travel through Wildspace. |
| 6 | Sacrifice the mental energy of a planet's populace to take control of a githyanki bastion. |
^mind-flayer-machinations

```statblock
"name": "Mind Flayer (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"modifier": !!int "4"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "12"
  - !!int "19"
  - !!int "17"
  - !!int "17"
"speed": "30 ft., fly 15 ft. (hover)"
"saves":
  - "dexterity": !!int "4"
  - "intelligence": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[[skills#Arcana|Arcana]]"
    "desc": "+7"
  - "name": "[[skills#Insight|Insight]]"
    "desc": "+6"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+4"
"damage_resistances": "psychic"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon; telepathy 120 ft."
"cr": "7"
"traits":
  - "desc": "The mind flayer has [[advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 22 (4d8 + 4) Psychic damage.\
      \ If the target is a Medium or smaller creature, it has the [[conditions#Grappled|Grappled]]\
      \ condition (escape DC 14) from all the mind flayer's tentacles, and the target\
      \ has the [[conditions#Stunned|Stunned]] condition until\
      \ the grapple ends."
    "name": "Tentacles"
  - "desc": "Constitution Saving Throw: DC 15, one creature that is [[conditions#Grappled|Grappled]]\
      \ by the mind flayer's Tentacles. Failure: 55 (10d10) Piercing damage. Success:\
      \ Half damage. Failure or Success: If this damage reduces the target to 0\
      \ [[hit-points-xphb|Hit Points]], the mind\
      \ flayer kills it and devours its brain."
    "name": "Extract Brain"
  - "desc": "Intelligence Saving Throw: DC 15, each creature in a 60-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: 31 (6d8 + 4) Psychic damage, and the target has the [[conditions#Stunned|Stunned]]\
      \ condition until the end of the mind flayer's next turn. Success: Half damage\
      \ only."
    "name": "Mind Blast (Recharge 5-6)"
  - "desc": "The mind flayer casts one of the following spells, requiring no spell\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 15):\n\nAt will: [[detect-thoughts-xphb|Detect Thoughts]]\n\
      \n1/day each: [[dominate-monster-xphb|Dominate Monster]],\
      \ [[plane-shift-xphb|Plane Shift]] (self only)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/mind-flayer-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Mind flayer xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of mind flayer xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around mind flayer xmm.

## Adventure Hooks

- A rumor ties mind flayer xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at mind flayer xmm to avert a public scandal.
- A map overlay reveals a hidden approach to mind flayer xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
