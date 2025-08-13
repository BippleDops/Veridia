---
updated: '2025-08-13T01:18:32.745341+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/elemental
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: '#^statblock'
aliases:
- Smoke Mephit
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-smoke-mephit-xmm-smoke-mephit-xmm.svg)

# [Smoke Mephit](3-Mechanics\CLI\bestiary\elemental/smoke-mephit-xmm.md)
*Source: Monster Manual (2024) p. 208*  

Smoke mephits are elusive beings formed of fiery cinders and hot air. They love misleading creatures and then mocking them for their gullibility.

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
"name": "Smoke Mephit (XMM)"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "12"
  - !!int "10"
  - !!int "10"
  - !!int "11"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+4"
"damage_immunities": "fire, poison"
"condition_immunities": "[exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Primordial (Auran, Ignan)"
"cr": "1/4"
"traits":
  - "desc": "The mephit explodes when it dies. Constitution Saving Throw: DC 11,\
      \ each creature in a 5-foot [Emanation](/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the mephit. Failure: The target has the [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ condition until the end of its next turn."
    "name": "Death Burst"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing damage."
    "name": "Claw"
  - "desc": "Dexterity Saving Throw: DC 11, one creature the mephit can see within\
      \ 15 feet. Failure: The target has the [Blinded](/03_Mechanics/CLI/conditions.md#Blinded)\
      \ condition until the end of the mephit's next turn."
    "name": "Cinder Breath (Recharge 6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/smoke-mephit-xmm.webp"
```
^statblock

## Environment

planar, elemental

## Player-Facing Summary

Smoke mephit xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of smoke mephit xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around smoke mephit xmm.

## Adventure Hooks

- A rumor ties smoke mephit xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at smoke mephit xmm to avert a public scandal.
- A map overlay reveals a hidden approach to smoke mephit xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
