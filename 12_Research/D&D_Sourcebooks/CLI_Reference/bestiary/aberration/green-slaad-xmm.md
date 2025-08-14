# green-slaad-xmm

---
title: green slaad xmm
aliases:
- Green Slaad
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/type/aberration
- research
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/environment/planar
- world/both
- active
- ttrpg-cli/monster/environment/limbo
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.302910'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-green-slaad-xmm-green-slaad-xmm.svg)

# [[green-slaad-xmm|Green Slaad]]
*Source: Monster Manual (2024) p. 286*  

Green slaadi come into being when the propagation methods of red or blue slaadi affect certain creatures capable of casting spells of level 3 or higher. Green slaadi are more intelligent than their blue and red brethren and often direct their kin to portals where gray slaadi have identified Humanoid communities ripe for invasion.

## Slaadi

*Chaos-Spawned Hordes of Limbo*

- **Habitat.** Planar (Limbo)  
- **Treasure.** Any  

Unpredictable slaadi devour and multiply across the Ever-Changing Chaos of Limbo. These toad-like, extraplanar beings embody the endless potentiality of their home plane of existence. While slaadi aren't inherently evil, their impulses are wild and often destructive. Many are driven to propagate through supernatural processes. Unfortunately, these processes typically are fatal for other creatures.

Slaadi have no formal society. Rather, strong slaadi dominate weaker ones. Blue and red slaadi rampage across Limbo and spill into other worlds at the direction of green slaadi. More powerful slaadi have connections to the Spawning Stone, a source of chaotic magic from which the first slaadi originated. The Spawning Stone is hidden deep within Limbo, and legends tie its origins to the modron overlord Primus or the ruinous slaad lords, such as Ssendam, the golden amoeboid terror, and Ygorl, the winged skeleton. These slaad lords and others plot to spread slaadi across the multiverse.

> [!note] Slaad Control Gems
> 
> A slaad born from the Spawning Stone has a magical control gem embedded in its head. If a creature claims the gem, the slaad has the [[conditions#Charmed|Charmed]] condition and obeys the gem's bearer. The slaad ceases to be [[conditions#Charmed|Charmed]] if it is harmed by the gem's bearer or the bearer's allies or if the gem is returned to the slaad. A [[greater-restoration-xphb|Greater Restoration]] spell cast on a slaad destroys the gem, and the slaad ceases to be [[conditions#Charmed|Charmed]].
> 
> One can obtain a slaad's control gem using a [[wish-xphb|Wish]] or [[imprisonment-xphb|Imprisonment]] spell. If the slaad fails its saving throw against [[imprisonment-xphb|Imprisonment]], the caster gains the gem, and the slaad isn't imprisoned. An [[conditions#Incapacitated|Incapacitated]] slaad's control gem can be removed by spending 1 minute and succeeding on a DC 20 Wisdom ([[skills#Medicine|Medicine]]) check. Failing this check deals 22 (`4d10`) Piercing damage to the slaad.
^slaad-control-gems

> [!quote] A quote from Jebeel Sloom  
> 
> Fight a slaad and lose, the story's over. Fight a slaad and win, there's a thousand more standing in line just to prove they're tougher.


```statblock
"name": "Green Slaad (XMM)"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "16"
"hp": !!int "144"
"hit_dice": "17d10 + 51"
"modifier": !!int "5"
"stats":
  - !!int "16"
  - !!int "15"
  - !!int "16"
  - !!int "11"
  - !!int "8"
  - !!int "18"
"speed": "30 ft."
"skillsaves":
  - "name": "[[skills#Arcana|Arcana]]"
    "desc": "+3"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+2"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 12"
"languages": "Common, Slaad; telepathy 60 ft."
"cr": "8"
"traits":
  - "desc": "The slaad has [[advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The slaad regains 10 [[hit-points-xphb|Hit Points]]\
      \ at the start of each of its turns if it has at least 1 [[hit-points-xphb|Hit Point]]."
    "name": "Regeneration"
"actions":
  - "desc": "The slaad makes three Chaos Staff attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Attack Roll: +7, reach 10 ft. or range 60 ft. Hit:\
      \ 8 (1d8 + 4) Force damage. Until the start of the slaad's next turn, the target\
      \ has a condition determined by rolling d4: on a 1, [[conditions#Charmed|Charmed]];\
      \ on a 2, [[conditions#Frightened|Frightened]]; on a 3, [[conditions#Poisoned|Poisoned]];\
      \ or on a 4, [[conditions#Incapacitated|Incapacitated]]."
    "name": "Chaos Staff"
  - "desc": "The slaad casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 14, +6 to hit\
      \ with spell attacks):\n\nAt will: [[detect-magic-xphb|Detect Magic]],\
      \ [[detect-thoughts-xphb|Detect Thoughts]], [[mage-hand-xphb|Mage\
      \ Hand]]\n\n1/day each: [[fireball-xphb|Fireball]],\
      \ [[invisibility-xphb|Invisibility]] (self only)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The slaad shape-shifts into a Small or Medium Humanoid, or it returns\
      \ to its true form. Other than its size, its game statistics are the same in\
      \ each form. Any equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/green-slaad-xmm.webp"
```
^statblock

## Environment

planar, limbo

## Player-Facing Summary

Green slaad xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of green slaad xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around green slaad xmm.

## Adventure Hooks

- A rumor ties green slaad xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at green slaad xmm to avert a public scandal.
- A map overlay reveals a hidden approach to green slaad xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
