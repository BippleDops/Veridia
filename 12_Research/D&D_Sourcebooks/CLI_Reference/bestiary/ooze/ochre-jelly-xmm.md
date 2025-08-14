---
aliases:
- Ochre Jelly
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
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
- world/both
type: monster
updated: '2025-08-12T23:37:35.392143'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ochre-jelly-xmm-ochre-jelly-xmm.svg)

# [[ochre-jelly-xmm|Ochre Jelly]]
*Source: Monster Manual (2024) p. 230. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Ochre Jelly

*Multiplying Amoeboid Hunter*

- **Habitat.** Underdark  
- **Treasure.** None  

Ochre jellies are giant, yellow-brown amoebas that digest organic creatures. They tirelessly hunt any prey smaller than themselves, oozing over, under, and around obstacles in their path. Once they overwhelm their quarry, these acidic slimes dissolve the flesh, hair, and scales of their prey, leaving behind clothing, equipment, treated leather, and bone.

If damaged by lightning or a slashing weapon, an ochre jelly splits in two. These smaller jellies work together to consume foes, but afterward they move on to hunt independently. Both eventually grow into full-size jellies.

What ochre jellies can't dissolve they leave behind. Roll on or choose a result from the Ochre Jelly Leftovers table to inspire such remains.

**Ochre Jelly Leftovers**

`dice: [](ochre-jelly-xmm.md#^ochre-jelly-leftovers)`

| dice: 1d6 | After a Meal, the Ochre Jelly Leaves Behind... |
|-----------|------------------------------------------------|
| 1 | A bone etched with a word or an eerie symbol. |
| 2 | Broken dragonborn or tiefling horns. |
| 3 | An ornate prosthetic limb. |
| 4 | The skeleton of an explorer's pet (perhaps a small dog, monkey, or parrot). |
| 5 | A skull with gold teeth worth `d4` GP. |
| 6 | A spotless suit of metal armor. |
^ochre-jelly-leftovers

```statblock
"name": "Ochre Jelly (XMM)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "52"
"hit_dice": "7d10 + 14"
"modifier": !!int "-2"
"stats":
  - !!int "15"
  - !!int "6"
  - !!int "14"
  - !!int "2"
  - !!int "6"
  - !!int "1"
"speed": "20 ft., climb 20 ft."
"damage_resistances": "acid"
"damage_immunities": "lightning, slashing"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Deafened|deafened]],\
  \ [[conditions#Exhaustion|exhaustion]], [[conditions#Frightened|frightened]],\
  \ [[conditions#Grappled|grappled]], [[conditions#Prone|prone]],\
  \ [[conditions#Restrained|restrained]]"
"senses": "blindsight 60 ft., passive Perception 8"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The jelly can move through a space as narrow as 1 inch without expending\
      \ extra movement to do so."
    "name": "Amorphous"
  - "desc": "The jelly can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 12 (3d6 + 2) Acid damage."
    "name": "Pseudopod"
"reactions":
  - "desc": "Trigger: While the jelly is Large or Medium and has 10+ [[hit-points-xphb|Hit Points]],\
      \ it becomes [[bloodied-xphb|Bloodied]] or\
      \ is subjected to Lightning or Slashing damage. _Response:_ The jelly splits\
      \ into two new Ochre Jellies. Each new jelly is one size smaller than the original\
      \ jelly and acts on its [[initiative-xphb|Initiative]].\
      \ The original jelly's [[hit-points-xphb|Hit Points]]\
      \ are divided evenly between the new jellies (round down)."
    "name": "Split"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/ooze/token/ochre-jelly-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Ochre jelly xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ochre jelly xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ochre jelly xmm.

## Adventure Hooks

- A rumor ties ochre jelly xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ochre jelly xmm to avert a public scandal.
- A map overlay reveals a hidden approach to ochre jelly xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
