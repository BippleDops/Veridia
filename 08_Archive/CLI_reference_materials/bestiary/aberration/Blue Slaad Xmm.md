---
aliases:
- Blue Slaad
created: null
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/limbo
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
- world/both
type: monster
updated: '2025-08-12T23:37:35.330402'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-blue-slaad-xmm-blue-slaad-xmm.svg)

# [[3-Mechanics\CLI\bestiary\aberration/blue-slaad-xmm|Blue Slaad]]
*Source: Monster Manual (2024) p. 285*  

Almost as numerous as red slaadi, blue slaadi are muscular brutes with vicious blades extending from the backs of their claws. These claws carry a magical curse called chaos phage, which can transform victims into red or green slaadi. Blue slaadi accompany red slaadi and behave similarly. They innately know the signs of chaos phage and avoid slaying creatures that carry it or other slaad curses.

## Slaadi

*Chaos-Spawned Hordes of Limbo*

- **Habitat.** Planar (Limbo)  
- **Treasure.** Any  

Unpredictable slaadi devour and multiply across the Ever-Changing Chaos of Limbo. These toad-like, extraplanar beings embody the endless potentiality of their home plane of existence. While slaadi aren't inherently evil, their impulses are wild and often destructive. Many are driven to propagate through supernatural processes. Unfortunately, these processes typically are fatal for other creatures.

Slaadi have no formal society. Rather, strong slaadi dominate weaker ones. Blue and red slaadi rampage across Limbo and spill into other worlds at the direction of green slaadi. More powerful slaadi have connections to the Spawning Stone, a source of chaotic magic from which the first slaadi originated. The Spawning Stone is hidden deep within Limbo, and legends tie its origins to the modron overlord Primus or the ruinous slaad lords, such as Ssendam, the golden amoeboid terror, and Ygorl, the winged skeleton. These slaad lords and others plot to spread slaadi across the multiverse.

> [!note] Slaad Control Gems
> 
> A slaad born from the Spawning Stone has a magical control gem embedded in its head. If a creature claims the gem, the slaad has the [[/03_Mechanics/CLI/conditions#Charmed|Charmed]] condition and obeys the gem's bearer. The slaad ceases to be [[/03_Mechanics/CLI/conditions#Charmed|Charmed]] if it is harmed by the gem's bearer or the bearer's allies or if the gem is returned to the slaad. A [[/03_Mechanics/CLI/spells/greater-restoration-xphb|Greater Restoration]] spell cast on a slaad destroys the gem, and the slaad ceases to be [[/03_Mechanics/CLI/conditions#Charmed|Charmed]].
> 
> One can obtain a slaad's control gem using a [[/03_Mechanics/CLI/spells/wish-xphb|Wish]] or [[/03_Mechanics/CLI/spells/imprisonment-xphb|Imprisonment]] spell. If the slaad fails its saving throw against [[/03_Mechanics/CLI/spells/imprisonment-xphb|Imprisonment]], the caster gains the gem, and the slaad isn't imprisoned. An [[/03_Mechanics/CLI/conditions#Incapacitated|Incapacitated]] slaad's control gem can be removed by spending 1 minute and succeeding on a DC 20 Wisdom ([[/03_Mechanics/CLI/skills#Medicine|Medicine]]) check. Failing this check deals 22 (`4d10`) Piercing damage to the slaad.
^slaad-control-gems

> [!quote] A quote from Jebeel Sloom  
> 
> Fight a slaad and lose, the story's over. Fight a slaad and win, there's a thousand more standing in line just to prove they're tougher.


```statblock
"name": "Blue Slaad (XMM)"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"hp": !!int "133"
"hit_dice": "14d10 + 56"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "15"
  - !!int "18"
  - !!int "7"
  - !!int "7"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+1"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Slaad; telepathy 60 ft."
"cr": "7"
"traits":
  - "desc": "The slaad has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The slaad regains 10 [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ at the start of each of its turns if it has at least 1 [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Point]]."
    "name": "Regeneration"
"actions":
  - "desc": "The slaad makes three Mutating Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 10 ft. Hit: 12 (2d6 + 5) Slashing damage\
      \ plus 3 (d6) Poison damage. If the target is a Humanoid not cursed by a slaad,\
      \ it is subjected to the following effect. Constitution Saving Throw: DC 15.\
      \ Failure: The target is cursed. The cursed target can't regain [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]],\
      \ and its [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Point]] maximum\
      \ decreases by 10 (3d6) after every 24 hours and doesn't return to normal after\
      \ finishing a [[/03_Mechanics/CLI/variant-rules/long-rest-xphb|Long Rest]].\
      \ If the curse reduces the target's [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Point]]\
      \ maximum to 0, the curse ends, and instead of dying, the target instantly transforms\
      \ into a [[/03_Mechanics/CLI/bestiary/aberration/red-slaad-xmm|Red Slaad]]\
      \ or, if it can cast spells of level 3 or higher, a [[/03_Mechanics/CLI/bestiary/aberration/green-slaad-xmm|Green Slaad]].\
      \ Only a [[/03_Mechanics/CLI/spells/wish-xphb|Wish]] spell can reverse this\
      \ transformation."
    "name": "Mutating Claw"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/blue-slaad-xmm.webp"
```
^statblock

## Environment

planar, limbo

## Player-Facing Summary

Blue slaad xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of blue slaad xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around blue slaad xmm.

## Adventure Hooks

- A rumor ties blue slaad xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at blue slaad xmm to avert a public scandal.
- A map overlay reveals a hidden approach to blue slaad xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
