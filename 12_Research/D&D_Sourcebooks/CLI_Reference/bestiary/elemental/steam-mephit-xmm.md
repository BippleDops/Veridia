---
aliases:
- Steam Mephit
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/elemental
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
- world/both
type: monster
updated: '2025-08-12T23:37:35.428264'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-steam-mephit-xmm-steam-mephit-xmm.svg)

# [[steam-mephit-xmm|Steam Mephit]]
*Source: Monster Manual (2024) p. 208. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

These arrogant mephits are made of heat and vaporous water. They often trick creatures into doing them favors, then renege on promised rewards.

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
"name": "Steam Mephit (XMM)"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "10"
"hp": !!int "17"
"hit_dice": "5d6"
"modifier": !!int "0"
"stats":
  - !!int "5"
  - !!int "11"
  - !!int "10"
  - !!int "11"
  - !!int "10"
  - !!int "12"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+2"
"damage_immunities": "fire, poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Primordial (Aquan, Ignan)"
"cr": "1/4"
"traits":
  - "desc": "Attack rolls against the mephit are made with [[disadvantage-xphb|Disadvantage]]\
      \ unless the mephit has the [[conditions#Incapacitated|Incapacitated]]\
      \ condition."
    "name": "Blurred Form"
  - "desc": "The mephit explodes when it dies. Dexterity Saving Throw: DC 10, each\
      \ creature in a 5-foot [[emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the mephit. Failure: 5 (2d4) Fire damage. Success: Half\
      \ damage."
    "name": "Death Burst"
"actions":
  - "desc": "Melee Attack Roll: +2, reach 5 ft. Hit: 2 (d4) Slashing damage plus\
      \ 2 (d4) Fire damage."
    "name": "Claw"
  - "desc": "Constitution Saving Throw: DC 10, each creature in a 15-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: 5 (2d4) Fire damage, and the target's [[speed-xphb|Speed]]\
      \ decreases by 10 feet until the end of the mephit's next turn. Success: Half\
      \ damage only. Failure or Success: Being underwater doesn't grant [[resistance-xphb|Resistance]]\
      \ to this Fire damage."
    "name": "Steam Breath (Recharge 6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/steam-mephit-xmm.webp"
```
^statblock

## Environment

planar, elemental

## Player-Facing Summary

Steam mephit xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of steam mephit xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around steam mephit xmm.

## Adventure Hooks

- A rumor ties steam mephit xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at steam mephit xmm to avert a public scandal.
- A map overlay reveals a hidden approach to steam mephit xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
