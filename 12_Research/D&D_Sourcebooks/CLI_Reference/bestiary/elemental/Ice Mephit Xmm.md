---
aliases:
- Ice Mephit
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
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/elemental
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
- world/both
type: monster
updated: '2025-08-13T12:34:05.725479+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ice-mephit-xmm-ice-mephit-xmm.svg)

# [[ice-mephit-xmm|Ice Mephit]]
*Source: Monster Manual (2024) p. 206. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Ice mephits have bodies made of frigid air and frozen water. They delight in freezing things and dropping ice into peoples' clothes.

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
"name": "Ice Mephit (XMM)"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "21"
"hit_dice": "6d6"
"modifier": !!int "1"
"stats":
  - !!int "7"
  - !!int "13"
  - !!int "10"
  - !!int "9"
  - !!int "11"
  - !!int "12"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+3"
"damage_vulnerabilities": "fire"
"damage_immunities": "cold, poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Primordial (Aquan, Auran)"
"cr": "1/2"
"traits":
  - "desc": "The mephit explodes when it dies. Constitution Saving Throw: DC 10,\
      \ each creature in a 5-foot [[emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the mephit. Failure: 5 (2d4) Cold damage. Success: Half\
      \ damage."
    "name": "Death Burst"
"actions":
  - "desc": "Melee Attack Roll: +3, reach 5 ft. Hit: 3 (1d4 + 1) Slashing damage\
      \ plus 2 (d4) Cold damage."
    "name": "Claw"
  - "desc": "Constitution Saving Throw: DC 10, each creature in a 15-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: 7 (3d4) Cold damage. Success: Half damage."
    "name": "Frost Breath (Recharge 6)"
  - "desc": "The mephit casts [[fog-cloud-xphb|Fog Cloud]],\
      \ requiring no spell components and using Charisma as the spellcasting ability.\n"
    "name": "Fog Cloud (1/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/ice-mephit-xmm.webp"
```
^statblock

## Environment

planar, elemental

## Player-Facing Summary

Ice mephit xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ice mephit xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ice mephit xmm.

## Adventure Hooks

- A rumor ties ice mephit xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ice mephit xmm to avert a public scandal.
- A map overlay reveals a hidden approach to ice mephit xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
