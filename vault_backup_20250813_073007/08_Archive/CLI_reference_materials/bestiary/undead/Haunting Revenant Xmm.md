---
aliases:
- Haunting Revenant
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
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/undead
- world/both
type: monster
updated: '2025-08-13T12:34:20.087492+00:00'
world: Both
---


# [[3-Mechanics\CLI\bestiary\undead/haunting-revenant-xmm|Haunting Revenant]]
*Source: Monster Manual (2024) p. 260*  

Haunting revenants possess ruins and forsaken places connected with their deaths—such as abandoned buildings, wrecked ships, or junk heaps. These revenants lurk in plain sight, waiting for their foes to near, then trap their victims within their massive bodies. Those inside a revenant might be battered by animate furnishings or more unsettling manifestations of the revenant's hatred.

The places haunting revenants lurk swiftly gain infamous reputations.

## Revenants

*Vengeance from beyond the Grave*

- **Habitat.** Forest, Swamp, Urban  
- **Treasure.** Any  

Wrathful spirits bent on revenge, revenants possess corpses and other materials, using them to seek justice or vent their rage on those who wronged them. Revenants refuse to rest until those they seek to punish are no more. If their bodies are destroyed, revenants claim new forms and continue their ruthless quests.

```statblock
"name": "Haunting Revenant (XMM)"
"size": "Gargantuan"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "20"
"hp": !!int "203"
"hit_dice": "14d20 + 56"
"modifier": !!int "5"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "18"
  - !!int "16"
  - !!int "18"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "constitution": !!int "8"
  - "wisdom": !!int "8"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Frightened|frightened]], [[/03_Mechanics/CLI/conditions#Grappled|grappled]],\
  \ [[/03_Mechanics/CLI/conditions#Paralyzed|paralyzed]], [[/03_Mechanics/CLI/conditions#Petrified|petrified]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]], [[/03_Mechanics/CLI/conditions#Prone|prone]],\
  \ [[/03_Mechanics/CLI/conditions#Restrained|restrained]], [[/03_Mechanics/CLI/conditions#Unconscious|unconscious]]"
"senses": "truesight 60 ft., passive Perception 14"
"languages": "Common plus two other languages"
"cr": "10"
"traits":
  - "desc": "Constitution Saving Throw: DC 17, any creature that casts a spell while\
      \ inside the revenant's space. Failure: The spell fails and is wasted."
    "name": "Haunted Zone"
  - "desc": "If the revenant dies, it revives 24 hours later unless [[/03_Mechanics/CLI/spells/dispel-evil-and-good-xphb|Dispel Evil and\
      \ Good]] is cast on its\
      \ remains. If it revives, it animates another Gargantuan object or structure\
      \ elsewhere on the same plane of existence; it now looks different but uses\
      \ the same stat block and returns with all its [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]."
    "name": "Undead Restoration"
"actions":
  - "desc": "The revenant makes two [[/03_Mechanics/CLI/variant-rules/object-xphb|Object]]\
      \ Slam attacks and uses Invitation."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Attack Roll: +9 (with [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ if the target is inside the revenant's space), reach 10 ft. or range 30/90\
      \ ft. Hit: 27 (5d8 + 5) Bludgeoning damage."
    "name": "Object Slam"
  - "desc": "Charisma Saving Throw: DC 17, each creature in a 60-foot [[/03_Mechanics/CLI/variant-rules/cone-area-of-effect-xphb|Cone]].\
      \ Failure: The target is teleported inside the revenant's space and swallowed.\
      \ A swallowed creature has [[/03_Mechanics/CLI/variant-rules/cover-xphb|Total Cover]]\
      \ against attacks and other effects outside the revenant.\n\nWhile the revenant\
      \ has [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]], a swallowed\
      \ creature can leave the revenant's space only by using magic that enables planar\
      \ travel, such as the [[/03_Mechanics/CLI/spells/plane-shift-xphb|Plane Shift]]\
      \ spell."
    "name": "Invitation"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/haunting-revenant-xmm.webp"
```
^statblock

## Environment

forest, swamp, urban

## Player-Facing Summary

Haunting revenant xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of haunting revenant xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around haunting revenant xmm.

## Adventure Hooks

- A rumor ties haunting revenant xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at haunting revenant xmm to avert a public scandal.
- A map overlay reveals a hidden approach to haunting revenant xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
