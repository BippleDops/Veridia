---
aliases:
- Narzugon
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
- world/both
type: monster
updated: '2025-08-12T23:37:35.466593'
world: Both
---

# [[3-Mechanics\CLI\bestiary\fiend/narzugon-mpmm|Narzugon]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 190, Mordenkainen's Tome of Foes p. 167*  

Paladins who make deals with devils and carry their twisted sense of honor into the afterlife are especially valuable to the archdukes of the Nine Hells. These narzugons act as horrific perversions of knights errant, carrying out their masters' will.

Narzugons wield hell-forged lances that shunt the souls of any they killed to the River Styx for rebirth as [[/03_Mechanics/CLI/bestiary/fiend/lemure-xmm|lemures]]. Every lance bears the marks of both a narzugon and its master.

Each narzugon claims a [[/03_Mechanics/CLI/bestiary/fiend/nightmare-xmm|nightmare]] as its mount. These steeds are bound by [[/03_Mechanics/CLI/items/infernal-tack-mtf|infernal tack]] and must respond to the summons and commands of the spurs' wearer.

```statblock
"name": "Narzugon (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "20"
"ac_class": "[[/03_Mechanics/CLI/items/plate-armor-xphb|plate armor]], [[/03_Mechanics/CLI/items/shield-xphb|shield]]"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "17"
  - !!int "16"
  - !!int "14"
  - !!int "19"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "5"
  - "constitution": !!int "8"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+12"
"damage_resistances": "acid; cold; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Frightened|frightened]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Common, Infernal, telepathy 120 ft."
"cr": "13"
"traits":
  - "desc": "The narzugon wears spurs that are part of [[/03_Mechanics/CLI/items/infernal-tack-mtf|infernal tack]],\
      \ which allow it to summon its [[/03_Mechanics/CLI/bestiary/fiend/nightmare-xmm|nightmare]]\
      \ companion as an action."
    "name": "Infernal Tack"
  - "desc": "The narzugon has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The narzugon makes three Hellfire Lance attacks. It also uses Infernal\
      \ Command or Terrifying Command."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 11\
      \ (1d12 + 5) piercing damage plus 16 (3d10) fire damage. If this damage kills\
      \ a creature with a soul, the soul rises from the River Styx as a [[/03_Mechanics/CLI/bestiary/fiend/lemure-xmm|lemure]]\
      \ in Avernus in d4 hours. If the creature isn't revived before then, only a\
      \ [[/03_Mechanics/CLI/spells/wish-xphb|wish]] spell or killing the lemure and\
      \ casting true resurrection on the creature's original body can restore it to\
      \ life. Constructs and devils are immune to this effect."
    "name": "Hellfire Lance"
  - "desc": "Each ally of the narzugon within 60 feet of it can't be [[/03_Mechanics/CLI/conditions#Charmed|charmed]]\
      \ or [[/03_Mechanics/CLI/conditions#Frightened|frightened]] until the end of\
      \ the narzugon's next turn."
    "name": "Infernal Command"
  - "desc": "Each creature within 60 feet of the narzugon that isn't a Fiend must\
      \ succeed on a DC 17 Charisma saving throw or become [[/03_Mechanics/CLI/conditions#Frightened|frightened]]\
      \ of the narzugon for 1 minute. A creature can repeat the saving throw at the\
      \ end of each of its turns, ending the effect on itself on a success. A creature\
      \ that makes a successful saving throw is immune to this narzugon's Terrifying\
      \ Command for 24 hours."
    "name": "Terrifying Command"
  - "desc": "The narzugon, or one creature it touches, regains 100 hit points."
    "name": "Healing (1/Day)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/narzugon-mpmm.webp"
```
^statblock

## Player-Facing Summary

Narzugon mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of narzugon mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around narzugon mpmm.

## Adventure Hooks

- A rumor ties narzugon mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at narzugon mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to narzugon mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
