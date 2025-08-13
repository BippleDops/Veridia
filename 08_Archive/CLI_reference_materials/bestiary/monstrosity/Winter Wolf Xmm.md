---
aliases:
- Winter Wolf
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- campaign/arc
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
- world/both
type: monster
updated: '2025-08-12T23:37:34.970529'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-winter-wolf-xmm-v1-winter-wolf-xmm.svg)

# [Winter Wolf](3-Mechanics\CLI\bestiary\monstrosity/winter-wolf-xmm.md)
*Source: Monster Manual (2024) p. 334. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Winter Wolf

*Cold-hearted Pack Hunter*

- **Habitat.** Arctic  
- **Treasure.** None  

Winter wolves are horse-size, supernatural predators that prowl frigid wildernesses in deadly packs. With their great size and chilling breath, winter wolves pursue megafauna, arctic travelers, and any other creatures they catch on the tundra.

Winter wolves are more intelligent than natural wolves and can speak. Most are predominantly concerned with their next meal, and while they might converse with other creatures in exchange for food, few concern themselves with long-term bargains or keeping their word unless they have something to gain. Winter wolves often hunt alongside frost giants that indulge them with frequent hunts and reliable meals.

> [!quote] A quote from Koran, Winter Wolf  
> 
> Snowdrifts, driving hail, and wind fierce enough to strip the hairless skin off your bones—you lot have been through it all. But good news, there's a town full of warm hearths right over this rise.
> 
> You'll never reach it, but at least your last thoughts will be warm.


```statblock
"name": "Winter Wolf (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "14"
  - !!int "7"
  - !!int "12"
  - !!int "8"
"speed": "50 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "cold"
"senses": "passive Perception 15"
"languages": "Common, Giant"
"cr": "3"
"traits":
  - "desc": "The wolf has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the wolf's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [Incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 11 (2d6 + 4) Piercing damage.\
      \ If the target is a Large or smaller creature, it has the [Prone](/03_Mechanics/CLI/conditions.md#Prone)\
      \ condition."
    "name": "Bite"
  - "desc": "Constitution Saving Throw: DC 12, each creature in a 15-foot [Cone](/03_Mechanics/CLI/variant-rules/cone-area-of-effect-xphb.md).\
      \ Failure: 18 (4d8) Cold damage. Success: Half damage."
    "name": "Cold Breath (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/winter-wolf-xmm.webp"
```
^statblock

## Environment

arctic

## Player-Facing Summary

Winter wolf xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of winter wolf xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around winter wolf xmm.

## Adventure Hooks

- A rumor ties winter wolf xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at winter wolf xmm to avert a public scandal.
- A map overlay reveals a hidden approach to winter wolf xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
