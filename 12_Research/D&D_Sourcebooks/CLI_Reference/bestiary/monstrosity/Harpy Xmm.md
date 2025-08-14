---
aliases:
- Harpy
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
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
- world/both
type: monster
updated: '2025-08-13T12:34:05.288005+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-harpy-xmm-harpy-xmm.svg)

# [[harpy-xmm|Harpy]]
*Source: Monster Manual (2024) p. 164. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Harpy

*Winged Voice of Doom*

- **Habitat.** Coastal, Forest, Hill, Mountain  
- **Treasure.** Any  

Hate-filled creatures, harpies strive to cause pain and bring an end to love and life. These monsters combine humanlike features with the talons and wings of avian scavengers. Their notorious songs compel listeners to follow them, heedless of danger. Creatures captivated by a harpy's song frequently meet their deaths on harpies' vicious claws or amid natural perils.

Harpies dwell in remote, dismal places tainted by tragedy and despair. Some tales claim harpies offended the gods and were transformed as a punishment; harpies might also be the descendants of such cursed souls.

Every harpy sings a distinct song. While some songs are said to be heartbreaking in their beauty, others are wretched squawking and compel only the magically enthralled.

```statblock
"name": "Harpy (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"modifier": !!int "1"
"stats":
  - !!int "12"
  - !!int "13"
  - !!int "12"
  - !!int "7"
  - !!int "10"
  - !!int "13"
"speed": "20 ft., fly 40 ft."
"senses": "passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
  - "desc": "Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1) Slashing damage."
    "name": "Claw"
  - "desc": "The harpy sings a magical melody, which lasts until the harpy's [[conditions#Concentration|Concentration]]\
      \ ends on it. Wisdom Saving Throw: DC 11, each Humanoid and Giant in a 300-foot\
      \ [[emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the harpy when the song starts. Failure: The target has\
      \ the [[conditions#Charmed|Charmed]] condition until the\
      \ song ends and repeats the save at the end of each of its turns. While [[conditions#Charmed|Charmed]],\
      \ the target has the [[conditions#Incapacitated|Incapacitated]]\
      \ condition and ignores the Luring Song of other harpies. If the target is more\
      \ than 5 feet from the harpy, the target moves on its turn toward the harpy\
      \ by the most direct route, trying to get within 5 feet of the harpy. It doesn't\
      \ avoid [[actions#Opportunity%20Attack|Opportunity Attacks]];\
      \ however, before moving into damaging terrain (such as lava or a pit) and whenever\
      \ it takes damage from a source other than the harpy, the target repeats the\
      \ save. Success: The target is immune to this harpy's Luring Song for 24 hours."
    "name": "Luring Song"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/harpy-xmm.webp"
```
^statblock

## Environment

coastal, forest, hill, mountain

## Player-Facing Summary

Harpy xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of harpy xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around harpy xmm.

## Adventure Hooks

- A rumor ties harpy xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at harpy xmm to avert a public scandal.
- A map overlay reveals a hidden approach to harpy xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
