# Flaming Skeleton Xmm

---
title: Flaming Skeleton Xmm
aliases:
- Flaming Skeleton
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/environment/shadowfell
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/undead
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/environment/underdark
- research
- world/both
- ttrpg-cli/monster/environment/planar
- active
- status/in-progress
- ttrpg-cli/monster/cr/3
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.914818+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-flaming-skeleton-xmm-flaming-skeleton-xmm.svg)

# [[flaming-skeleton-xmm|Flaming Skeleton]]
*Source: Monster Manual (2024) p. 283*  

Flaming skeletons burn with unbridled necromantic energy. This magic grants them blazing attacks and greater awareness, which they use to command lesser Undead.

## Skeletons

*Ossified Evil*

- **Habitat.** Planar (Shadowfell), Underdark, Urban  
- **Treasure.** None  

Skeletons rise at the summons of necromancers and foul spirits. Whether they're the remains of the ancient dead or fresh bones bound to morbid ambitions, they commit deathless work for whatever forces reanimated them, often serving as guardians, soldiers, or laborers. In rare cases, skeletons are reanimated but given no particular direction. Roll on or choose a result from the Skeleton Pantomimes table to inspire how undirected skeletons behave.

**Skeleton Pantomimes**

`dice: [](flaming-skeleton-xmm.md#^skeleton-pantomimes)`

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
"name": "Flaming Skeleton (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "15"
  - !!int "10"
  - !!int "15"
  - !!int "8"
"speed": "30 ft."
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "fire, poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands Common plus one other language but can't speak"
"cr": "3"
"traits":
  - "desc": "The skeleton explodes when it dies. Dexterity Saving Throw: DC 12,\
      \ each creature in a 10-foot [[emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the skeleton. Failure: 14 (4d6) Fire damage. Success:\
      \ Half damage."
    "name": "Death Burst"
  - "desc": "The skeleton sheds [[bright-light-xphb|Bright Light]]\
      \ in a 15-foot radius and [[dim-light-xphb|Dim Light]]\
      \ for an additional 15 feet."
    "name": "Illumination"
"actions":
  - "desc": "The skeleton makes two attacks, using Flame Scepter or Hurl Flame in\
      \ any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Bludgeoning damage\
      \ plus 3 (d6) Fire damage."
    "name": "Flame Scepter"
  - "desc": "Ranged Attack Roll: +4, range 60 ft. Hit: 7 (1d10 + 2) Fire damage."
    "name": "Hurl Flame"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/flaming-skeleton-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban

## Player-Facing Summary

Flaming skeleton xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of flaming skeleton xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around flaming skeleton xmm.

## Adventure Hooks

- A rumor ties flaming skeleton xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at flaming skeleton xmm to avert a public scandal.
- A map overlay reveals a hidden approach to flaming skeleton xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
