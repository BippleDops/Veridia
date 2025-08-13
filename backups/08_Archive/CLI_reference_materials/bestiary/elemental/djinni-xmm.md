---
aliases:
- Djinni
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
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/air
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental/genie
- world/both
type: monster
updated: '2025-08-12T23:37:35.449423'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-djinni-xmm-djinni-xmm.svg)

# [Djinni](3-Mechanics\CLI\bestiary\elemental/djinni-xmm.md)
*Source: Monster Manual (2024) p. 99. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Djinni

*Genie of the Air*

- **Habitat.** Coastal, Planar (Elemental Plane of Air)  
- **Treasure.** Arcana  

As genies of wind and skies, djinn personify freedom and might. They can control wind and travel as swiftly as a breeze. They might be as serene as drifting clouds or as tempestuous as storms, but most djinn relish their freedom and desire to discover the wonders of the multiverse. Djinn often know many stories, and they might share such lore with those who offer their own exciting stories in trade.

While many djinn create airy palaces on stormy coasts or high in the clouds, untold numbers dwell on the Elemental Plane of Air. In floating cities, djinn collect tales and experiences from across the planes of existence, sharing them in fabulous forums, libraries, and theaters. The greatest of these cities is the Citadel of Ice and Steel, in which wind-sculpted towers contain a city-size trove of incredible knowledge and treasures that defy belief.

```statblock
"name": "Djinni (XMM)"
"size": "Large"
"type": "elemental"
"subtype": "genie"
"alignment": "Chaotic Good"
"ac": !!int "17"
"hp": !!int "218"
"hit_dice": "19d10 + 114"
"modifier": !!int "2"
"stats":
  - !!int "21"
  - !!int "15"
  - !!int "22"
  - !!int "15"
  - !!int "16"
  - !!int "20"
"speed": "30 ft., fly 90 ft. (hover)"
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "7"
"damage_immunities": "lightning, thunder"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Primordial (Auran)"
"cr": "11"
"traits":
  - "desc": "If the djinni dies outside the Elemental Plane of Air, its body dissolves\
      \ into mist, and it gains a new body in d4 days, reviving with all its [Hit\
      \ Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md) somewhere on the\
      \ Plane of Air."
    "name": "Elemental Restoration"
  - "desc": "The djinni has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The djinni has a 30 percent chance of knowing the [Wish](/03_Mechanics/CLI/spells/wish-xphb.md)\
      \ spell. If the djinni knows it, the djinni can cast it only on behalf of a\
      \ non-genie creature who communicates a wish in a way the djinni can understand.\
      \ If the djinni casts the spell for the creature, the djinni suffers none of\
      \ the spell's stress. Once the djinni has cast it three times, the djinni can't\
      \ do so again for 365 days."
    "name": "Wishes"
"actions":
  - "desc": "The djinni makes three attacks, using Storm Blade or Storm Bolt in any\
      \ combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9, reach 5 feet. Hit: 12 (2d6 + 5) Slashing damage\
      \ plus 7 (2d6) Lightning damage."
    "name": "Storm Blade"
  - "desc": "Ranged Attack Roll: +9, range 120 feet. Hit: 13 (3d8) Thunder damage.\
      \ If the target is a Large or smaller creature, it has the [Prone](/03_Mechanics/CLI/conditions.md#Prone)\
      \ condition."
    "name": "Storm Bolt"
  - "desc": "The djinni conjures a whirlwind at a point it can see within 120 feet.\
      \ The whirlwind fills a 20-foot-radius, 60-foot-high [Cylinder](/03_Mechanics/CLI/variant-rules/cylinder-area-of-effect-xphb.md)\
      \ centered on that point. The whirlwind lasts until the djinni's [Concentration](/03_Mechanics/CLI/conditions.md#Concentration)\
      \ on it ends. The djinni can move the whirlwind up to 20 feet at the start of\
      \ each of its turns.\n\nWhenever the whirlwind enters a creature's space or\
      \ a creature enters the whirlwind, that creature is subjected to the following\
      \ effect. Strength Saving Throw: DC 17 (a creature makes this save only once\
      \ per turn, and the djinni is unaffected). Failure: While in the whirlwind,\
      \ the target has the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ condition and moves with the whirlwind. At the start of each of its turns,\
      \ the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained) target takes 21\
      \ (6d6) Thunder damage. At the end of each of its turns, the target repeats\
      \ the save, ending the effect on itself on a success."
    "name": "Create Whirlwind"
  - "desc": "The djinni casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt\
      \ will: [Detect Evil and Good](/03_Mechanics/CLI/spells/detect-evil-and-good-xphb.md),\
      \ [Detect Magic](/03_Mechanics/CLI/spells/detect-magic-xphb.md)\n\n2/day each:\
      \ [Create Food and Water](/03_Mechanics/CLI/spells/create-food-and-water-xphb.md)\
      \ (can create wine instead of water), [Tongues](/03_Mechanics/CLI/spells/tongues-xphb.md),\
      \ [Wind Walk](/03_Mechanics/CLI/spells/wind-walk-xphb.md)\n\n1/day each:\
      \ [Creation](/03_Mechanics/CLI/spells/creation-xphb.md), [Gaseous Form](/03_Mechanics/CLI/spells/gaseous-form-xphb.md),\
      \ [Invisibility](/03_Mechanics/CLI/spells/invisibility-xphb.md), [Major Image](/03_Mechanics/CLI/spells/major-image-xphb.md),\
      \ [Plane Shift](/03_Mechanics/CLI/spells/plane-shift-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/djinni-xmm.webp"
```
^statblock

## Environment

coastal, planar, air

## Player-Facing Summary

Djinni xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of djinni xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around djinni xmm.

## Adventure Hooks

- A rumor ties djinni xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at djinni xmm to avert a public scandal.
- A map overlay reveals a hidden approach to djinni xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
