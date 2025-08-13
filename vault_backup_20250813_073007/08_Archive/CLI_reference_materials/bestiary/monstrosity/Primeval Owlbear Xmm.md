---
aliases:
- Primeval Owlbear
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
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
- world/both
type: monster
updated: '2025-08-13T12:34:19.540576+00:00'
world: Both
---


# [[3-Mechanics\CLI\bestiary\monstrosity/primeval-owlbear-xmm|Primeval Owlbear]]
*Source: Monster Manual (2024) p. 234*  

Ancient forests and Feywild demesnes steeped in magic can give rise to particularly large and vicious owlbears. These primeval specimens can fly—albeit poorly—and emit thunderous screeches that can rattle foes and even tear them asunder.

## Owlbears

*Magically Perfected Predators*

- **Habitat.** Forest  
- **Treasure.** None  

Created long ago by misguided mages, owlbears combine keen avian eyes, thick feathers, and a tearing beak with a mighty bearlike frame. Despite their magical origins, owlbears have propagated and spread to wildernesses across the multiverse.

Owlbears dwell in distinctive dens. Roll on or choose a result from the Owlbear Den Features table to inspire an owlbear den's noteworthy traits.

**Owlbear Den Features**

`dice: [](primeval-owlbear-xmm.md#^owlbear-den-features)`

| dice: 1d4 | An Owlbear Den Contains... |
|-----------|----------------------------|
| 1 | Evidence of previous occupants, like bandits, wolves, or dragons. |
| 2 | Heaps of regurgitated pellets studded with coins or other treasure. |
| 3 | A nest with `d6` owlbear eggs. |
| 4 | Passages through the earth or hollow trees. |
^owlbear-den-features

```statblock
"name": "Primeval Owlbear (XMM)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "126"
"hit_dice": "12d12 + 48"
"modifier": !!int "5"
"stats":
  - !!int "22"
  - !!int "14"
  - !!int "19"
  - !!int "8"
  - !!int "15"
  - !!int "7"
"speed": "40 ft., climb 40 ft., fly 5 ft."
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+8"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": ""
"cr": "7"
"traits":
  - "desc": "The owlbear has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The owlbear makes two Ravage attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9, reach 5 ft. Hit: 15 (2d8 + 6) Slashing damage.\
      \ If the target is a Huge or smaller creature and the owlbear moved 20+ feet\
      \ straight toward it immediately before the hit, the target takes an extra 9\
      \ (2d8) Slashing damage and has the [[/03_Mechanics/CLI/conditions#Prone|Prone]]\
      \ condition."
    "name": "Ravage"
  - "desc": "Constitution Saving Throw: DC 15, each creature in a 30-foot [[/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the owlbear. Failure: 27 (6d8) Thunder damage, and the\
      \ target has the [[/03_Mechanics/CLI/conditions#Incapacitated|Incapacitated]]\
      \ condition until the end of its next turn. Success: Half damage only."
    "name": "Screech (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/primeval-owlbear-xmm.webp"
```
^statblock

## Environment

forest

## Player-Facing Summary

Primeval owlbear xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of primeval owlbear xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around primeval owlbear xmm.

## Adventure Hooks

- A rumor ties primeval owlbear xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at primeval owlbear xmm to avert a public scandal.
- A map overlay reveals a hidden approach to primeval owlbear xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
