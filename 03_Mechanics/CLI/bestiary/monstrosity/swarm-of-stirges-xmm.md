---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/2
  - ttrpg-cli/monster/environment/desert
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/grassland
  - ttrpg-cli/monster/environment/hill
  - ttrpg-cli/monster/environment/mountain
  - ttrpg-cli/monster/environment/swamp
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/environment/urban
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Swarm of Stirges
---
# [Swarm of Stirges](3-Mechanics\CLI\bestiary\monstrosity/swarm-of-stirges-xmm.md)
*Source: Monster Manual (2024) p. 299*  

Swarms of stirges sometimes form in swamps and Underdark caverns, draining livestock and any other creatures that can't escape them.

## Stirges

*Notorious, Clinging Bloodsuckers*

- **Habitat.** Desert, Forest, Grassland, Hill, Mountain, Swamp, Underdark, Urban  
- **Treasure.** None  

Stirges are bat-size vermin with dagger-length proboscises that attach to other creatures and drain life from them. Stirges are most active at night and hide in shadowy places during the day. If disturbed, they take flight and defend themselves. Roll on or choose a result from the Stirge Roosts table to inspire where stirges might lurk.

**Stirge Roosts**

`dice: [](swarm-of-stirges-xmm.md#^stirge-roosts)`

| dice: 1d4 | Between Hunts, the Stirge Lurks In... |
|-----------|---------------------------------------|
| 1 | The attic or furniture of a ruined building. |
| 2 | A cave or narrow crevice. |
| 3 | A hollow tree or thicket. |
| 4 | The remains of a gigantic, dead creature. |
^stirge-roosts

```statblock
"name": "Swarm of Stirges (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "36"
"hit_dice": "8d8"
"modifier": !!int "3"
"stats":
  - !!int "4"
  - !!int "16"
  - !!int "11"
  - !!int "2"
  - !!int "8"
  - !!int "6"
"speed": "10 ft., fly 40 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [frightened](/03_Mechanics/CLI/conditions.md#Frightened),\
  \ [grappled](/03_Mechanics/CLI/conditions.md#Grappled), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [prone](/03_Mechanics/CLI/conditions.md#Prone),\
  \ [restrained](/03_Mechanics/CLI/conditions.md#Restrained), [stunned](/03_Mechanics/CLI/conditions.md#Stunned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny creature. The swarm\
      \ can't regain [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ or gain [Temporary Hit Points](/03_Mechanics/CLI/variant-rules/temporary-hit-points-xphb.md)."
    "name": "Swarm"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 14 (2d10 + 3) Piercing damage,\
      \ or 8 (1d10 + 3) Piercing damage if the swarm is [Bloodied](/03_Mechanics/CLI/variant-rules/bloodied-xphb.md).\
      \ If the target is a Medium or smaller creature in the swarm's space, the target\
      \ has the [Grappled](/03_Mechanics/CLI/conditions.md#Grappled) condition (escape\
      \ DC 13). Until the grapple ends, the target takes 7 (2d6) Necrotic damage at\
      \ the end of each of its turns."
    "name": "Swarm of Proboscises"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/swarm-of-stirges-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill, mountain, swamp, underdark, urban

## Player-Facing Summary

Swarm of stirges xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of swarm of stirges xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around swarm of stirges xmm.

## Adventure Hooks

- A rumor ties swarm of stirges xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at swarm of stirges xmm to avert a public scandal.
- A map overlay reveals a hidden approach to swarm of stirges xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
