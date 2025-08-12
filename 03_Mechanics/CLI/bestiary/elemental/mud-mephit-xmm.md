---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1-4
  - ttrpg-cli/monster/environment/elemental
  - ttrpg-cli/monster/environment/planar
  - ttrpg-cli/monster/size/small
  - ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Mud Mephit
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-mud-mephit-xmm-mud-mephit-xmm.svg)

# [Mud Mephit](3-Mechanics\CLI\bestiary\elemental/mud-mephit-xmm.md)
*Source: Monster Manual (2024) p. 207*  

A combination of earth and water, mud mephits are crude, disgusting creatures. They take every opportunity to ruin objects and pollute food with muck.

## Mephits

*Malicious Elemental Hooligans*

- **Habitat.** Planar (Elemental Planes)  
- **Treasure.** None  

Mephits are mean-spirited tricksters that dwell on the Elemental Planes. The six most prominent types of mephits resemble halfling-size gargoyles with wings, exaggerated features, and bodies composed of two elements. Most live self-interested existences, indulging their warped senses of humor or overblown egos on their home planes of existence. Some serve as messengers or spies for genies or magic-users.

Mephits resent leaving the elemental extremes where they make their homes. If loosed on the Material Plane or other realms, they lash out with nasty pranks or by tormenting weaker creatures. When destroyed, mephits explode in a burst of elemental magic.

> [!quote] A quote from Seamusxanthuszenus, smoke mephit with a typically inflated impression of itself  
> 
> I am Seamusxanthuszenus, Slayer of Fiends, Merchant Most Excellent, Purveyor of Death!


```statblock
"name": "Mud Mephit (XMM)"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"modifier": !!int "1"
"stats":
  - !!int "8"
  - !!int "12"
  - !!int "12"
  - !!int "9"
  - !!int "11"
  - !!int "7"
"speed": "20 ft., fly 20 ft., swim 20 ft."
"skillsaves":
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+3"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Primordial (Aquan, Terran)"
"cr": "1/4"
"traits":
  - "desc": "The mephit explodes when it dies. Dexterity Saving Throw: DC 11, each\
      \ creature in a 5-foot [Emanation](/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the mephit. Failure: The target has the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ condition until the end of its next turn."
    "name": "Death Burst"
"actions":
  - "desc": "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Bludgeoning damage."
    "name": "Slam"
  - "desc": "Dexterity Saving Throw: DC 11, one creature the mephit can see within\
      \ 15 feet. Failure: The target has the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ condition until the end of the mephit's next turn."
    "name": "Mud Breath (Recharge 6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/mud-mephit-xmm.webp"
```
^statblock

## Environment

planar, elemental

## Player-Facing Summary

Mud mephit xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of mud mephit xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around mud mephit xmm.

## Adventure Hooks

- A rumor ties mud mephit xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at mud mephit xmm to avert a public scandal.
- A map overlay reveals a hidden approach to mud mephit xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
