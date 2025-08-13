---
aliases:
- Graveyard Revenant
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
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/undead
- world/both
type: monster
updated: '2025-08-12T23:37:35.585762'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-graveyard-revenant-xmm-graveyard-revenant-xmm.svg)

# [Graveyard Revenant](3-Mechanics\CLI\bestiary\undead/graveyard-revenant-xmm.md)
*Source: Monster Manual (2024) p. 260*  

Graveyard revenants possess dozens of bodies that combine to form grotesque masses. They take revenge on those responsible for mass deaths or institutions that callously ruin lives.

## Revenants

*Vengeance from beyond the Grave*

- **Habitat.** Forest, Swamp, Urban  
- **Treasure.** Any  

Wrathful spirits bent on revenge, revenants possess corpses and other materials, using them to seek justice or vent their rage on those who wronged them. Revenants refuse to rest until those they seek to punish are no more. If their bodies are destroyed, revenants claim new forms and continue their ruthless quests.

```statblock
"name": "Graveyard Revenant (XMM)"
"size": "Huge"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "161"
"hit_dice": "14d12 + 70"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "14"
  - !!int "20"
  - !!int "13"
  - !!int "16"
  - !!int "18"
"speed": "40 ft."
"saves":
  - "strength": !!int "8"
  - "constitution": !!int "8"
  - "wisdom": !!int "6"
  - "charisma": !!int "7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned),\
  \ [stunned](/03_Mechanics/CLI/conditions.md#Stunned), [unconscious](/03_Mechanics/CLI/conditions.md#Unconscious)"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Common plus two other languages"
"cr": "7"
"traits":
  - "desc": "If the revenant dies, it revives 24 hours later unless [Dispel Evil and\
      \ Good](/03_Mechanics/CLI/spells/dispel-evil-and-good-xphb.md) is cast on its\
      \ remains. If it revives, it animates another group of corpses elsewhere on\
      \ the same plane of existence; it now looks different but uses the same stat\
      \ block and returns with all its [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)."
    "name": "Undead Restoration"
"actions":
  - "desc": "The revenant makes two Suffocate attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 10 ft. Hit: 10 (1d10 + 5) Bludgeoning\
      \ damage plus 10 (3d6) Necrotic damage. If the target is a Large or smaller\
      \ creature, it has the [Grappled](/03_Mechanics/CLI/conditions.md#Grappled) condition\
      \ (escape DC 15). Until the grapple ends, the target is suffocating. The revenant\
      \ can have up to two targets [Grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ in this way at a time."
    "name": "Suffocate"
  - "desc": "Wisdom Saving Throw: DC 15, each creature in a 30-foot [Emanation](/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the revenant. Failure: The target has the [Paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed)\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically."
    "name": "Haunting Glare (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/graveyard-revenant-xmm.webp"
```
^statblock

## Environment

forest, swamp, urban

## Player-Facing Summary

Graveyard revenant xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of graveyard revenant xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around graveyard revenant xmm.

## Adventure Hooks

- A rumor ties graveyard revenant xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at graveyard revenant xmm to avert a public scandal.
- A map overlay reveals a hidden approach to graveyard revenant xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
