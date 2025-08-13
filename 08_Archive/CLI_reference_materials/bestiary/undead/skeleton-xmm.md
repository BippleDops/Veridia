---
updated: '2025-08-13T01:18:32.808542+00:00'
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
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: '#^statblock'
aliases:
- Skeleton
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-flaming-skeleton-xmm-flaming-skeleton-xmm.svg)

# [Skeleton](3-Mechanics\CLI\bestiary\undead/skeleton-xmm.md)
*Source: Monster Manual (2024) p. 282, Player's Handbook (2024) p. 356. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Skeletons are reanimated Humanoid bones bearing the equipment they had in life. They have rudimentary faculties and greater agility than zombies and similar shambling corpses. While they aren't capable of creating plans of their own, they avoid obvious barriers and self-destructive situations.

## Skeletons

*Ossified Evil*

- **Habitat.** Planar (Shadowfell), Underdark, Urban  
- **Treasure.** None  

Skeletons rise at the summons of necromancers and foul spirits. Whether they're the remains of the ancient dead or fresh bones bound to morbid ambitions, they commit deathless work for whatever forces reanimated them, often serving as guardians, soldiers, or laborers. In rare cases, skeletons are reanimated but given no particular direction. Roll on or choose a result from the Skeleton Pantomimes table to inspire how undirected skeletons behave.

**Skeleton Pantomimes**

`dice: [](skeleton-xmm.md#^skeleton-pantomimes)`

| dice: 1d6 | Left to Its Own Devices, the Skeleton... |
|-----------|------------------------------------------|
| 1 | Delivers meal salvers or ages-old correspondence to the crypt of its dead master. |
| 2 | Endlessly trains in battle with other skeletons, despite being hacked to animate splinters. |
| 3 | Mimics ways it entertained itself in life, such as acting, dancing, or reading. |
| 4 | Performs a familiar task, such as cleaning, cooking, mining, or praying. |
| 5 | Repeats its final moments of life. |
| 6 | Stands guard at the post it protected in life. |
^skeleton-pantomimes

```statblock
"name": "Skeleton (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "15"
  - !!int "6"
  - !!int "8"
  - !!int "5"
"speed": "30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Common plus one other language but can't speak"
"cr": "1/4"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Piercing damage."
    "name": "Shortsword"
  - "desc": "Ranged Attack Roll: +5, range 80/320 ft. Hit: 6 (1d6 + 3) Piercing\
      \ damage."
    "name": "Shortbow"
"source":
  - "XMM"
  - "XPHB"
"image": "/03_Mechanics/CLI/bestiary/undead/token/skeleton-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban

## Player-Facing Summary

Skeleton xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of skeleton xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around skeleton xmm.

## Adventure Hooks

- A rumor ties skeleton xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at skeleton xmm to avert a public scandal.
- A map overlay reveals a hidden approach to skeleton xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
