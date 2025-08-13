---
aliases:
- Stirge
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
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/monstrosity
- world/both
- world/surface
type: monster
updated: '2025-08-13T12:34:19.500221+00:00'
world: Both
---


# [[3-Mechanics\CLI\bestiary\monstrosity/stirge-xmm|Stirge]]
*Source: Monster Manual (2024) p. 299. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

A single stirge is usually little more than an annoyance, but several can be deadly if they attach faster than a victim can remove them.

## Stirges

*Notorious, Clinging Bloodsuckers*

- **Habitat.** Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban  
- **Treasure.** None  

Stirges are bat-size vermin with dagger-length proboscises that attach to other creatures and drain life from them. Stirges are most active at night and hide in shadowy places during the day. If disturbed, they take flight and defend themselves. Roll on or choose a result from the Stirge Roosts table to inspire where stirges might lurk.

**Stirge Roosts**

`dice: [](stirge-xmm.md#^stirge-roosts)`

| dice: 1d4 | Between Hunts, the Stirge Lurks In... |
|-----------|---------------------------------------|
| 1 | The attic or furniture of a ruined building. |
| 2 | A cave or narrow crevice. |
| 3 | A hollow tree or thicket. |
| 4 | The remains of a gigantic, dead creature. |
^stirge-roosts

```statblock
"name": "Stirge (XMM)"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "5"
"hit_dice": "2d4"
"modifier": !!int "3"
"stats":
  - !!int "4"
  - !!int "16"
  - !!int "11"
  - !!int "2"
  - !!int "8"
  - !!int "6"
"speed": "10 ft., fly 40 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1/8"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 6 (1d6 + 3) Piercing damage,\
      \ and the stirge attaches to the target. While attached, the stirge can't make\
      \ Proboscis attacks, and the target takes 5 (2d4) Necrotic damage at the start\
      \ of each of the stirge's turns.\n\nThe stirge can detach itself by spending\
      \ 5 feet of its movement. The target or a creature within 5 feet of it can detach\
      \ the stirge as an action."
    "name": "Proboscis"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/stirge-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill, mountain, swamp, underdark, urban

## Player-Facing Summary

Stirge xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of stirge xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around stirge xmm.

## Adventure Hooks

- A rumor ties stirge xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at stirge xmm to avert a public scandal.
- A map overlay reveals a hidden approach to stirge xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
