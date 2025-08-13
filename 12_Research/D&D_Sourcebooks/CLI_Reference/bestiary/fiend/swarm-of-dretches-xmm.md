---
aliases:
- Swarm of Dretches
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
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
- world/both
type: monster
updated: '2025-08-12T23:37:35.537635'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-swarm-of-dretches-xmm-swarm-of-dretches-xmm.png)

# [[3-Mechanics\CLI\bestiary\fiend/swarm-of-dretches-xmm|Swarm of Dretches]]
*Source: Monster Manual (2024) p. 104*  

Swarms of dretches sometimes escape the Abyss onto other planes of existence, or they might be part of a demonic invasion. Without direction, these crude demons rampage and despoil with cruel enthusiasm.

## Dretches

*Demons of Frenzy and Vulgarity*

- **Habitat.** Planar (Abyss)  
- **Treasure.** None  

The servants and victims of greater demons, dretches embody petty instincts, chaotic impulses, and violent urges. Dretches exist in unfathomable numbers in the depths of the Abyss, where their reeking throngs fill vast demonic hordes.

> [!quote] A quote from Jaranda, Expert on the Abyss  
> 
> Ah, the infinite wonders of the Abyss. If there's anything you don't like, you'll find it here.


```statblock
"name": "Swarm of Dretches (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "11"
  - !!int "14"
  - !!int "5"
  - !!int "8"
  - !!int "3"
"speed": "40 ft."
"damage_resistances": "bludgeoning, cold, fire, lightning, piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Frightened|frightened]],\
  \ [[/03_Mechanics/CLI/conditions#Grappled|grappled]], [[/03_Mechanics/CLI/conditions#Paralyzed|paralyzed]],\
  \ [[/03_Mechanics/CLI/conditions#Petrified|petrified]], [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]],\
  \ [[/03_Mechanics/CLI/conditions#Prone|prone]], [[/03_Mechanics/CLI/conditions#Restrained|restrained]],\
  \ [[/03_Mechanics/CLI/conditions#Stunned|stunned]]"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Abyssal; telepathy 60 ft. (works only with creatures that understand\
  \ Abyssal)"
"cr": "4"
"traits":
  - "desc": "Constitution Saving Throw: DC 12, any creature that starts its turn\
      \ in a 10-foot [[/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the swarm. Failure: The target has the [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]]\
      \ condition until the start of its next turn. While [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]],\
      \ the target can take either an action or a [[/03_Mechanics/CLI/variant-rules/bonus-action-xphb|Bonus Action]]\
      \ on its turn, not both, and it can't take Reactions."
    "name": "Fetid Aura"
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Small creature. The\
      \ swarm can't regain [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ or gain [[/03_Mechanics/CLI/variant-rules/temporary-hit-points-xphb|Temporary Hit Points]]."
    "name": "Swarm"
"actions":
  - "desc": "The swarm makes two Rend attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 12 (3d6 + 2) Slashing damage,\
      \ or 9 (3d4 + 2) Slashing damage if the swarm is [[/03_Mechanics/CLI/variant-rules/bloodied-xphb|Bloodied]]."
    "name": "Rend"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/swarm-of-dretches-xmm.webp"
```
^statblock

## Environment

planar, abyss

## Player-Facing Summary

Swarm of dretches xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of swarm of dretches xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around swarm of dretches xmm.

## Adventure Hooks

- A rumor ties swarm of dretches xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at swarm of dretches xmm to avert a public scandal.
- A map overlay reveals a hidden approach to swarm of dretches xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
