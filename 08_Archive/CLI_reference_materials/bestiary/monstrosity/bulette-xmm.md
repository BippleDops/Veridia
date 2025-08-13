---
updated: '2025-08-13T01:18:32.492608+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
- Bulette
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-bulette-xmm-bulette-xmm.svg)

# [Bulette](3-Mechanics\CLI\bestiary\monstrosity/bulette-xmm.md)
*Source: Monster Manual (2024) p. 63. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Bulettes range under vast territories. They often threaten animal herds, and they can wipe out whole farming communities.

## Bulettes

*Ravenous, Subsurface Land Sharks*

- **Habitat.** Grassland, Hill, Mountain  
- **Treasure.** None  

Also called "land sharks," bulettes are single-minded predators that burrow under, leap over, and burst through obstacles in pursuit of their quarry. They burrow rapidly just below ground. On sensing movement, they erupt from below, attempting to catch prey in their oversize maws.

```statblock
"name": "Bulette (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "94"
"hit_dice": "9d10 + 45"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "11"
  - !!int "21"
  - !!int "2"
  - !!int "10"
  - !!int "5"
"speed": "40 ft., burrow 40 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+6"
"senses": "darkvision 60 ft., tremorsense 120 ft., passive Perception 16"
"languages": ""
"cr": "5"
"actions":
  - "desc": "The bulette makes two Bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 17 (2d12 + 4) Piercing damage."
    "name": "Bite"
  - "desc": "The bulette spends 5 feet of movement to jump to a space within 15 feet\
      \ that contains one or more Large or smaller creatures. Dexterity Saving Throw:\
      \ DC 15, each creature in the bulette's destination space. Failure: 19 (3d12)\
      \ Bludgeoning damage, and the target has the [Prone](/03_Mechanics/CLI/conditions.md#Prone)\
      \ condition. Success: Half damage, and the target is pushed 5 feet straight\
      \ away from the bulette."
    "name": "Deadly Leap"
"bonus_actions":
  - "desc": "The bulette jumps up to 30 feet by spending 10 feet of movement."
    "name": "Leap"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/bulette-xmm.webp"
```
^statblock

## Environment

grassland, hill, mountain

## Player-Facing Summary

Bulette xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of bulette xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around bulette xmm.

## Adventure Hooks

- A rumor ties bulette xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at bulette xmm to avert a public scandal.
- A map overlay reveals a hidden approach to bulette xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
