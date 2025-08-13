---
aliases:
- Minotaur Skeleton
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
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
- world/both
type: monster
updated: '2025-08-12T23:37:35.627903'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-minotaur-skeleton-xmm-minotaur-skeleton-xmm.svg)

# [[3-Mechanics\CLI\bestiary\undead/minotaur-skeleton-xmm|Minotaur Skeleton]]
*Source: Monster Manual (2024) p. 283. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Minotaur skeletons are the reanimated remains of minotaurs or the skeletons of multiple creatures merged into a minotaur-like shape. These hulking skeletons have greater speed and might than smaller skeletons. They menace the living with their horns and mighty greataxes.

## Skeletons

*Ossified Evil*

- **Habitat.** Planar (Shadowfell), Underdark, Urban  
- **Treasure.** None  

Skeletons rise at the summons of necromancers and foul spirits. Whether they're the remains of the ancient dead or fresh bones bound to morbid ambitions, they commit deathless work for whatever forces reanimated them, often serving as guardians, soldiers, or laborers. In rare cases, skeletons are reanimated but given no particular direction. Roll on or choose a result from the Skeleton Pantomimes table to inspire how undirected skeletons behave.

**Skeleton Pantomimes**

`dice: [](minotaur-skeleton-xmm.md#^skeleton-pantomimes)`

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
"name": "Minotaur Skeleton (XMM)"
"size": "Large"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "15"
  - !!int "6"
  - !!int "8"
  - !!int "5"
"speed": "40 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "understands Abyssal but can't speak"
"cr": "2"
"actions":
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 11 (2d6 + 4) Piercing damage.\
      \ If the target is a Large or smaller creature and the skeleton moved 20+ feet\
      \ straight toward it immediately before the hit, the target takes an extra 9\
      \ (2d8) Piercing damage and has the [[/03_Mechanics/CLI/conditions#Prone|Prone]]\
      \ condition."
    "name": "Gore"
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 15 (2d10 + 4) Bludgeoning\
      \ damage."
    "name": "Slam"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/minotaur-skeleton-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban

## Player-Facing Summary

Minotaur skeleton xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of minotaur skeleton xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around minotaur skeleton xmm.

## Adventure Hooks

- A rumor ties minotaur skeleton xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at minotaur skeleton xmm to avert a public scandal.
- A map overlay reveals a hidden approach to minotaur skeleton xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
