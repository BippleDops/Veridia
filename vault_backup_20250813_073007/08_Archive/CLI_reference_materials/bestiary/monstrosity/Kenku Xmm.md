---
aliases:
- Kenku
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
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
- world/both
type: monster
updated: '2025-08-13T12:34:19.492126+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-kenku-xmm-kenku-xmm.svg)

# [[3-Mechanics\CLI\bestiary\monstrosity/kenku-xmm|Kenku]]
*Source: Monster Manual (2024) p. 183*  

## Kenku

*Flightless, Noise-Mimicking Avian*

- **Habitat.** Forest, Planar (Shadowfell), Urban  
- **Treasure.** Implements, Individual  

Kenku are birdlike folk who once soared the skies and sang enchanted songs, but a curse stole their wings and transformed their voices. Now kenku slip through the shadows of cities and the Shadowfell, trying to recover what they've lost. To some, this means seeking an end to their curse; others search for magic or contraptions to enable them to fly and sing again.

The curse affecting kenku allows them to vocally communicate only by mimicking sounds they've heard. Kenku can supernaturally re-create vast varieties of noises, from crying babies to running water and short phrases in others' voices. Cunning kenku use their mimicry to deceive foes, lure creatures into ambushes, and signal to allies.

```statblock
"name": "Kenku (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d8"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "10"
  - !!int "11"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Deception|Deception]]"
    "desc": "+4"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Primordial (Auran)"
"cr": "1/4"
"traits":
  - "desc": "The kenku can mimic any sounds it has heard, including voices. A creature\
      \ that hears the sounds can tell they are imitations with a successful DC 14\
      \ Wisdom ([[/03_Mechanics/CLI/skills#Insight|Insight]]) check."
    "name": "Mimicry"
"actions":
  - "desc": "Melee  or Ranged Attack Roll: +5, reach 5 ft. or range 60 ft. Hit:\
      \ 6 (1d6 + 3) Necrotic damage. Hit or Miss: The blade magically returns to\
      \ the kenku's hand immediately after a ranged attack."
    "name": "Shadow Blade"
"bonus_actions":
  - "desc": "The kenku casts [[/03_Mechanics/CLI/spells/faerie-fire-xphb|Faerie Fire]],\
      \ using Intelligence as the spellcasting ability (spell save DC 10).\n"
    "name": "Eldritch Lantern (Recharge 4-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/kenku-xmm.webp"
```
^statblock

## Environment

forest, planar, shadowfell, urban

## Player-Facing Summary

Kenku xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of kenku xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around kenku xmm.

## Adventure Hooks

- A rumor ties kenku xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at kenku xmm to avert a public scandal.
- A map overlay reveals a hidden approach to kenku xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
