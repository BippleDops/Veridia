---
aliases:
- Berbalang
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
- world/both
type: monster
updated: '2025-08-12T23:37:35.331298'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-berbalang-mpmm-berbalang-mpmm.svg)

# [Berbalang](3-Mechanics\CLI\bestiary\aberration/berbalang-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 61, Mordenkainen's Tome of Foes p. 120*  

Berbalangs creep across the [petrified](/03_Mechanics/CLI/conditions.md#Petrified) remains of dead gods adrift on the Astral Plane. Obsessed with gathering secrets, both from the gods they inhabit and from the bones of dead creatures, they call forth the spirits of the dead and force them to divulge what they learned in life.

Berbalangs prefer to speak only to dead things, and specifically only to the spirits they call forth in the hope of learning secrets. They record their stories on the bones that once belonged to these creatures, thus preserving the information they gain.

Pursuit of knowledge drives everything berbalangs do. Although they mostly learn their secrets from the dead, they aren't above spying on the living to take knowledge from them as well. A berbalang can create a spectral duplicate of itself and send the duplicate out to gather information on other planes by watching places where the gods and their servants gather. When a berbalang is perceiving its environment through its duplicate, its actual body is [unconscious](/03_Mechanics/CLI/conditions.md#Unconscious) and can't protect itself. Thus, a berbalang typically uses its duplicate for only a short time before returning its consciousness to its body.

The knowledge that berbalangs accumulate makes them great sources of information for powerful people traveling the planes. Berbalangs ignore petitioners, however, unless they come bearing a choice secret or the bones of a particularly interesting creature. Some githyanki have been able to strike deals with the creatures, using berbalangs to spy on their enemies and to watch over their creches on the Material Plane.

```statblock
"name": "Berbalang (MPMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Typically  Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "49"
"hit_dice": "14d8 - 14"
"modifier": !!int "3"
"stats":
  - !!int "9"
  - !!int "16"
  - !!int "9"
  - !!int "17"
  - !!int "11"
  - !!int "10"
"speed": "30 ft., fly 40 ft."
"saves":
  - "dexterity": !!int "5"
  - "intelligence": !!int "5"
"skillsaves":
  - "name": "[Arcana](/03_Mechanics/CLI/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[History](/03_Mechanics/CLI/skills.md#History)"
    "desc": "+5"
  - "name": "[Insight](/03_Mechanics/CLI/skills.md#Insight)"
    "desc": "+2"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Religion](/03_Mechanics/CLI/skills.md#Religion)"
    "desc": "+5"
"senses": "truesight 120 ft., passive Perception 12"
"languages": "all"
"cr": "2"
"actions":
  - "desc": "The berbalang makes one Bite attack and one\n\nClaw attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10\
      \ + 3) piercing damage plus 4 (d8) psychic damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
      \ + 3) slashing damage."
    "name": "Claw"
  - "desc": "The berbalang casts one of the following spells, requiring no material\
      \ components and using Intelligence as the spellcasting ability:\n\nAt will:\
      \ [speak with dead](/03_Mechanics/CLI/spells/speak-with-dead-xphb.md)\n\n1/day:\
      \ [plane shift](/03_Mechanics/CLI/spells/plane-shift-xphb.md) (self only)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The berbalang creates one spectral duplicate of itself in an unoccupied\
      \ space it can see within 60 feet of it. While the duplicate exists, the berbalang\
      \ is [unconscious](/03_Mechanics/CLI/conditions.md#Unconscious). A berbalang\
      \ can have only one duplicate at a time. The duplicate disappears when it or\
      \ the berbalang drops to 0 hit points or when the berbalang dismisses it (no\
      \ action required).\n\nThe duplicate has the same statistics and knowledge as\
      \ the berbalang, and everything experienced by the duplicate is known by the\
      \ berbalang. All damage dealt by the duplicate's attacks is psychic damage."
    "name": "Spectral Duplicate (Recharges after a Short or Long Rest)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/berbalang-mpmm.webp"
```
^statblock

## Environment

desert

## Player-Facing Summary

Berbalang mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of berbalang mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around berbalang mpmm.

## Adventure Hooks

- A rumor ties berbalang mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at berbalang mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to berbalang mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
