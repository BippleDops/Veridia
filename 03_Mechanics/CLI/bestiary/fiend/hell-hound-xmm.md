---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/3
  - ttrpg-cli/monster/environment/lower
  - ttrpg-cli/monster/environment/mountain
  - ttrpg-cli/monster/environment/planar
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Hell Hound
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-hell-hound-xmm-hell-hound-xmm.svg)

# [Hell Hound](3-Mechanics\CLI\bestiary\fiend/hell-hound-xmm.md)
*Source: Monster Manual (2024) p. 165. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Hell Hound

*Unrelenting Warden of the Lower Planes*

- **Habitat.** Mountain, Planar (Lower Planes), Underdark  
- **Treasure.** None  

Spawned from the pits of Acheron, Gehenna, and the Nine Hells, hell hounds enforce the merciless order of those realms and the whims of tyrannical masters. On their home planes of existence, these grim canines ensure that souls don't escape their bleak afterlives. On the Material Plane, hell hounds typically serve cruel masters—such as fire giants and cultists—who appreciate their viciousness, obedience, and fiery characteristics. Hell hounds serve other creatures so long as they're given opportunities to hunt and kill, but they're quick to turn on those who treat them as mere animals.

Hell hounds have greater cunning than normal canines. They're skilled trackers and work together well in packs, often employing tricks and ambushes. Hell hounds enjoy hearing prey scream in their scorching jaws and fiery breath. They often go out of their way to draw out the terror of their victims' final moments.

```statblock
"name": "Hell Hound (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "14"
  - !!int "6"
  - !!int "13"
  - !!int "6"
"speed": "50 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "understands Infernal but can't speak"
"cr": "3"
"traits":
  - "desc": "The hound has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the hound's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "The hound makes two Bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage\
      \ plus 3 (d6) Fire damage."
    "name": "Bite"
  - "desc": "Dexterity Saving Throw: DC 12, each creature in a 15-foot [Cone](/03_Mechanics/CLI/variant-rules/cone-area-of-effect-xphb.md).\
      \ Failure: 17 (5d6) Fire damage. Success: Half damage."
    "name": "Fire Breath (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/hell-hound-xmm.webp"
```
^statblock

## Environment

mountain, planar, lower, underdark

## Player-Facing Summary

Hell hound xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of hell hound xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around hell hound xmm.

## Adventure Hooks

- A rumor ties hell hound xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at hell hound xmm to avert a public scandal.
- A map overlay reveals a hidden approach to hell hound xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
