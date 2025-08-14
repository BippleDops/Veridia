# Scarecrow Xmm

---
title: Scarecrow Xmm
aliases:
- Scarecrow
type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- ttrpg-cli/compendium/src/5e/xmm
- world/surface
- ttrpg-cli/monster/type/construct
- monster
- ttrpg-cli/monster/cr/1
- research
- world/both
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:06.079076+00:00'
world: Both
---



# [[scarecrow-xmm|Scarecrow]]
*Source: Monster Manual (2024) p. 269*  

## Scarecrow

*Servant of Superstition*

- **Habitat.** Grassland  
- **Treasure.** None  

Spirits of vengeance bound to crude frames, scarecrows arise from folk magic, the prayers of desperate commoners, or possession by spirits that died with violent work left undone. Scarecrows might serve those who created them or might defend a place, family, or community from threats—whether physical or to their way of life.

Although scarecrows take their name from rural effigies, they might take varied patchwork forms. Roll on or choose a result from the Scarecrow Frames table to inspire a scarecrow's appearance.

**Scarecrow Frames**

`dice: [](scarecrow-xmm.md#^scarecrow-frames)`

| dice: 1d8 | The Scarecrow Is Made From... |
|-----------|-------------------------------|
| 1 | Animal furs, bones, horns, and claws. |
| 2 | Beehives or wasp nests over a wicker frame. |
| 3 | A carved pumpkin atop a body of thick vines. |
| 4 | Nets, flotsam, grapnels, and fishing tackle. |
| 5 | Oversize stuffed animal or mannequin parts. |
| 6 | Rusty armor and torture devices. |
| 7 | A sackcloth head atop straw-stuffed clothes. |
| 8 | Wedding clothes that were never worn. |
^scarecrow-frames

```statblock
"name": "Scarecrow (XMM)"
"size": "Medium"
"type": "construct"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "6d8"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "13"
  - !!int "11"
  - !!int "10"
  - !!int "10"
  - !!int "13"
"speed": "30 ft."
"damage_vulnerabilities": "fire"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Frightened|frightened]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned]],\
  \ [[conditions#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common plus one other language"
"cr": "1"
"actions":
  - "desc": "Melee Attack Roll: +3, reach 5 ft. Hit: 6 (2d4 + 1) Slashing damage,\
      \ and the target has the [[conditions#Frightened|Frightened]]\
      \ condition until the end of the scarecrow's next turn."
    "name": "Fearsome Claw"
  - "desc": "Wisdom Saving Throw: DC 11, one creature the scarecrow can see within\
      \ 30 feet. Failure: The target has the [[conditions#Frightened|Frightened]]\
      \ condition until the end of the scarecrow's next turn. While [[conditions#Frightened|Frightened]],\
      \ the target has the [[conditions#Paralyzed|Paralyzed]] condition."
    "name": "Terrifying Glare"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/construct/token/scarecrow-xmm.webp"
```
^statblock

## Environment

grassland

## Player-Facing Summary

Scarecrow xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of scarecrow xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around scarecrow xmm.

## Adventure Hooks

- A rumor ties scarecrow xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at scarecrow xmm to avert a public scandal.
- A map overlay reveals a hidden approach to scarecrow xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
