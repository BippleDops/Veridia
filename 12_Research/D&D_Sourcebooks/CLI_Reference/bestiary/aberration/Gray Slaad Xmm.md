# Gray Slaad Xmm

---
title: Gray Slaad Xmm
aliases:
- Gray Slaad
type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/type/aberration
- research
- world/both
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/cr/9
- active
- ttrpg-cli/monster/environment/limbo
- status/in-progress
created: 
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.575235+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-gray-slaad-xmm-gray-slaad-xmm.svg)

# [[gray-slaad-xmm|Gray Slaad]]
*Source: Monster Manual (2024) p. 286*  

Gray slaadi arise from green slaadi transformed by the Spawning Stone or slaad lords. They explore the planes, seeking Humanoid communities to invade near planar pathways.


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


## Slaadi

*Chaos-Spawned Hordes of Limbo*

- **Habitat.** Planar (Limbo)  
- **Treasure.** Any  

Unpredictable slaadi devour and multiply across the Ever-Changing Chaos of Limbo. These toad-like, extraplanar beings embody the endless potentiality of their home plane of existence. While slaadi aren't inherently evil, their impulses are wild and often destructive. Many are driven to propagate through supernatural processes. Unfortunately, these processes typically are fatal for other creatures.

Slaadi have no formal society. Rather, strong slaadi dominate weaker ones. Blue and red slaadi rampage across Limbo and spill into other worlds at the direction of green slaadi. More powerful slaadi have connections to the Spawning Stone, a source of chaotic magic from which the first slaadi originated. The Spawning Stone is hidden deep within Limbo, and legends tie its origins to the modron overlord Primus or the ruinous slaad lords, such as Ssendam, the golden amoeboid terror, and Ygorl, the winged skeleton. These slaad lords and others plot to spread slaadi across the multiverse.

> [!note] Slaad Control Gems
> 
> A slaad born from the Spawning Stone has a magical control gem embedded in its head. If a creature claims the gem, the slaad has the [[conditions#Charmed|Charmed]] condition and obeys the gem's bearer. The slaad ceases to be [[conditions#Charmed|Charmed]] if it is harmed by the gem's bearer or the bearer's allies or if the gem is returned to the slaad. A [[greater-restoration-xphb|Greater Restoration]] spell cast on a slaad destroys the gem, and the slaad ceases to be [[conditions#Charmed|Charmed]].
> One can obtain a slaad's control gem using a [[wish-xphb|Wish]] or [[imprisonment-xphb|Imprisonment]] spell. If the slaad fails its saving throw against [[imprisonment-xphb|Imprisonment]], the caster gains the gem, and the slaad isn't imprisoned. An [[conditions#Incapacitated|Incapacitated]] slaad's control gem can be removed by spending 1 minute and succeeding on a DC 20 Wisdom ([[skills#Medicine|Medicine]]) check. Failing this check deals 22 (`4d10`) Piercing damage to the slaad.
^slaad-control-gems

> [!quote] A quote from Jebeel Sloom  
> Fight a slaad and lose, the story's over. Fight a slaad and win, there's a thousand more standing in line just to prove they're tougher.

```statblock
"name": "Gray Slaad (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "18"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"modifier": !!int "7"
"stats":
  - !!int "19"
  - !!int "17"
  - !!int "16"
  - !!int "13"
  - !!int "8"
  - !!int "18"
"speed": "40 ft."
"skillsaves":
  - "name": "[[skills#Arcana|Arcana]]"
    "desc": "+5"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+7"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 17"
"languages": "Common, Slaad; telepathy 60 ft."
"cr": "9"
"traits":
  - "desc": "The slaad has [[advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The slaad regains 10 [[hit-points-xphb|Hit Points]]\
      \ at the start of each of its turns if it has at least 1 [[hit-points-xphb|Hit Point]]."
    "name": "Regeneration"
"actions":
  - "desc": "The slaad makes two Chaos Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 10 ft. Hit: 9 (1d10 + 4) Slashing damage\
      \ plus 11 (2d10) Necrotic damage. Until the start of the slaad's next turn,\
      \ the target has a condition determined by rolling d4: on a 1, [[conditions#Charmed|Charmed]];\
      \ on a 2, [[conditions#frightened|Frightened]]; on a 3, [[conditions#Poisoned|Poisoned]];\
      \ or on a 4, [[conditions#Incapacitated|Incapacitated]]."
    "name": "Chaos Claw"
  - "desc": "The slaad casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 16):\n\nAt\
      \ will: [[detect-magic-xphb|Detect Magic]], [[detect-thoughts-xphb|Detect\]]
      \ Thoughts]], [[invisibility-xphb|Invisibility]]\
      \ (self only), [[mage-hand-xphb|Mage Hand]], [[major-image-xphb|Major\]]
      \ Image]]\n\n1/day each: [[cloudkill-xphb|Cloudkill]],\
      \ [[fly-xphb|Fly]], [[plane-shift-xphb|Plane Shift]]\
      \ (self only), [[tongues-xphb|Tongues]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The slaad shape-shifts into a Small or Medium Humanoid, or it returns\
      \ to its true form. Other than its size, its game statistics are the same in\
      \ each form. Any equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/gray-slaad-xmm.webp"
```
^statblock

## Environment

planar, limbo

## Player-Facing Summary

Gray slaad xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of gray slaad xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around gray slaad xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Secret Connections

*[Hidden from players]* Connected to The Secret Pact - Summon ancient evil
