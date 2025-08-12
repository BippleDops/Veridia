---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/1-2
  - ttrpg-cli/monster/environment/swamp
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Swarm of Rot Grubs
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-swarm-of-rot-grubs-mpmm-swarm-of-rot-grubs-mpmm.svg)

# [Swarm of Rot Grubs](3-Mechanics\CLI\bestiary\beast/swarm-of-rot-grubs-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 237, Volo's Guide to Monsters p. 208*  

Rot grubs are finger-sized maggots that eat living and dead creatures, although they can survive on vegetation. They infest corpses and piles of decaying matter and attack anyone that disturbs them. After burrowing into a creature, rot grubs instinctively chew their way toward vital parts.

Rot grubs recoil from flames, and fire is the main weapon against rot grubs once they're inside a body. Magic that neutralizes poison can also stop them before they kill their host.

## Single Rot Grub

Rot grubs pose a threat both singly and as a swarm. See the stat block for the mechanics of a swarm of rot grubs. A single rot grub has no stat block.

Any creature that comes into contact with a single rot grub must succeed on a DC 10 Constitution saving throw or be [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned), as the rot grub burrows into the creature. The [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned) creature takes 3 (`d6`) poison damage at the end of each of its turns. Whenever the [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned) creature takes fire damage, the creature can repeat the saving throw, ending the effect on itself on a success. If the [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned) creature ends its turn with 0 hit points, it dies, as the rot grub kills it.

```statblock
"name": "Swarm of Rot Grubs (MPMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "-2"
"stats":
  - !!int "2"
  - !!int "7"
  - !!int "10"
  - !!int "1"
  - !!int "2"
  - !!int "1"
"speed": "5 ft., climb 5 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "piercing, slashing"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [frightened](/03_Mechanics/CLI/conditions.md#Frightened),\
  \ [grappled](/03_Mechanics/CLI/conditions.md#Grappled), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [prone](/03_Mechanics/CLI/conditions.md#Prone),\
  \ [restrained](/03_Mechanics/CLI/conditions.md#Restrained)"
"senses": "blindsight 10 ft., passive Perception 6"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny maggot. The swarm\
      \ can't regain hit points or gain temporary hit points."
    "name": "Swarm"
"actions":
  - "desc": "Melee Weapon Attack: +0 to hit, reach 0 ft., one creature in the swarm's\
      \ space. Hit: 7 (2d6) piercing damage, and the target must succeed on a DC\
      \ 10 Constitution saving throw or be [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned).\
      \ At the end of each of the [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ target's turns, the target takes 3 (d6) poison damage. Whenever the [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ target takes fire damage, the target can repeat the saving throw, ending the\
      \ effect on itself on a success. If the [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ target ends its turn with 0 hit points, it dies."
    "name": "Bites"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/beast/token/swarm-of-rot-grubs-mpmm.webp"
```
^statblock

## Environment

swamp, underdark

## Player-Facing Summary

Swarm of rot grubs mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of swarm of rot grubs mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around swarm of rot grubs mpmm.

## Adventure Hooks

- A rumor ties swarm of rot grubs mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at swarm of rot grubs mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to swarm of rot grubs mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
