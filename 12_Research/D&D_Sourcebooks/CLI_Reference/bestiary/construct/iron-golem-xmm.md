# iron-golem-xmm

---
title: iron golem xmm
aliases:
- Iron Golem
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/construct
- monster
- research
- ttrpg-cli/monster/size/large
- world/both
- ttrpg-cli/monster/environment/any
- active
- ttrpg-cli/monster/cr/16
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.841116'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-iron-golem-xmm-iron-golem-xmm.svg)

# [[iron-golem-xmm|Iron Golem]]
*Source: Monster Manual (2024) p. 181. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Iron Golem

*Guardian of That Which Must Endure*

- **Habitat.** Any  
- **Treasure.** Any  

Their magical cores protected by mighty armor, iron golems defend important sites and objects. These golems are forged in bipedal forms, the details of which are decided by their creators. Many resemble armored guardians or legendary heroes. Iron golems confront their foes with a combination of overwhelming physical force and eruptions from their magical core. These magical blasts take the form of fiery bolts and poisonous emissions.

Iron golems preserve and protect their charges for generations. Roll on or choose a result from the Iron Golem Orders table to inspire what commands an iron golem follows.

**Iron Golem Orders**

`dice: [](iron-golem-xmm.md#^iron-golem-orders)`

| dice: 1d4 | The Iron Golem Follows Orders To... |
|-----------|-------------------------------------|
| 1 | Block a door that has never been opened, moving only when a prophecy is fulfilled. |
| 2 | Exhale poison gas whenever it can, pausing only when someone speaks a passphrase. |
| 3 | Pose as a statue until a community's hour of greatest need. |
| 4 | Stand atop the resting place of a powerful magic item. |
^iron-golem-orders

```statblock
"name": "Iron Golem (XMM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "252"
"hit_dice": "24d10 + 120"
"modifier": !!int "9"
"stats":
  - !!int "24"
  - !!int "9"
  - !!int "20"
  - !!int "3"
  - !!int "11"
  - !!int "1"
"speed": "30 ft."
"damage_immunities": "fire, poison, psychic"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Frightened|frightened]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Common plus two other languages but can't speak"
"cr": "16"
"traits":
  - "desc": "Whenever the golem is subjected to Fire damage, it regains a number of\
      \ [[hit-points-xphb|Hit Points]] equal to the\
      \ Fire damage dealt."
    "name": "Fire Absorption"
  - "desc": "The golem can't shape-shift."
    "name": "Immutable Form"
  - "desc": "The golem has [[advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The golem makes two attacks, using Bladed Arm or Fiery Bolt in any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +12, reach 10 ft. Hit: 20 (3d8 + 7) Slashing damage\
      \ plus 10 (3d6) Fire damage."
    "name": "Bladed Arm"
  - "desc": "Ranged Attack Roll: +10, range 120 ft. Hit: 36 (8d8) Fire damage."
    "name": "Fiery Bolt"
  - "desc": "Constitution Saving Throw: DC 18, each creature in a 60-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: 55 (10d10) Poison damage. Success: Half damage."
    "name": "Poison Breath (Recharge 6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/construct/token/iron-golem-xmm.webp"
```
^statblock

## Environment

any

## Player-Facing Summary

Iron golem xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of iron golem xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around iron golem xmm.

## Adventure Hooks

- A rumor ties iron golem xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at iron golem xmm to avert a public scandal.
- A map overlay reveals a hidden approach to iron golem xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
