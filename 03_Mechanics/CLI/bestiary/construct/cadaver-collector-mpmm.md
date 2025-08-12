---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/14
  - ttrpg-cli/monster/environment/grassland
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Cadaver Collector
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-cadaver-collector-mpmm-cadaver-collector-mpmm.svg)

# [Cadaver Collector](3-Mechanics\CLI\bestiary\construct/cadaver-collector-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 68, Mordenkainen's Tome of Foes p. 122*  

The ancient war machines known as cadaver collectors lumber aimlessly across the blasted plains of Acheron until they are called upon by a necromancer to bolster the ranks of a conquering army on the Material Plane. These fearsome Constructs obey their summoners until they are dismissed back to Acheron, but if a summoner comes to a bad end, a cadaver collector might wander the Material Plane for centuries, collecting corpses while searching for a way to return home.

Cadaver collectors respond to a summons from a mortal only when they are called to the scene of a great battle—either where one is in progress, where one is imminent, or where one once took place. They encase themselves in the armor and weapons of fallen warriors and impale the corpses of those warriors on the lances and other weapons embedded in their salvaged armor.

Corpses that accumulate on a cadaver collector's shell aren't just grisly battle trophies. A cadaver collector can summon the spirits of these cadavers to battle against its enemies. Although these specters are individually weak, a cadaver collector can call up an almost endless supply of them, if given enough time.

```statblock
"name": "Cadaver Collector (MPMM)"
"size": "Large"
"type": "construct"
"alignment": "Typically  Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"modifier": !!int "2"
"stats":
  - !!int "21"
  - !!int "14"
  - !!int "20"
  - !!int "5"
  - !!int "11"
  - !!int "8"
"speed": "30 ft."
"damage_immunities": "necrotic; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands all languages but can't speak"
"cr": "14"
"traits":
  - "desc": "The collector has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The collector doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The collector makes two Slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 18\
      \ (3d8 + 5) bludgeoning damage plus 16 (3d10) necrotic damage."
    "name": "Slam"
  - "desc": "The collector releases paralyzing gas in a 30-foot cone. Each creature\
      \ in that area must make a successful DC 18 Constitution saving throw or be\
      \ [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed) for 1 minute. A [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed)\
      \ creature repeats the saving throw at the end of each of its turns, ending\
      \ the effect on itself with a success."
    "name": "Paralyzing Breath (Recharge 5-6)"
"bonus_actions":
  - "desc": "The collector calls up the enslaved spirits of those it has slain; d4\
      \ [specters](/03_Mechanics/CLI/bestiary/undead/specter-xmm.md) (without Sunlight\
      \ Sensitivity) arise in unoccupied spaces within 15 feet of it. The specters\
      \ act right after the collector on the same initiative count and fight until\
      \ they're destroyed. They disappear when the collector is destroyed."
    "name": "Summon Specters (Recharges after a Short or Long Rest)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/construct/token/cadaver-collector-mpmm.webp"
```
^statblock

## Environment

grassland

## Player-Facing Summary

Cadaver collector mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of cadaver collector mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around cadaver collector mpmm.

## Adventure Hooks

- A rumor ties cadaver collector mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at cadaver collector mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to cadaver collector mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
