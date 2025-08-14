---
aliases:
- Allip
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
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
- world/both
type: monster
updated: '2025-08-13T12:34:05.925399+00:00'
world: Both
---



> [!figure] Creature
![[04_Resources/Assets/Creatures/creature-creature-allip-mpmm-allip-mpmm.png]]

# [[allip-mpmm|Allip]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 45, Mordenkainen's Tome of Foes p. 116*  

When a creature uncovers a secret that a powerful being has protected with a mighty curse, the result is often the creation of an allip. Secrets protected in this manner range in scope from a demon lord's true name to the hidden truths of the cosmic order. The creature acquires the secret, but the curse annihilates its body and leaves behind a spectral being composed of fragments from the victim's psyche and overwhelming psychic agony.

Every allip is wracked with a horrifying insight that torments what remains of its mind. In the presence of other creatures, an allip seeks to relieve this burden by sharing its secret. The creature can impart only a shard of the knowledge that doomed it, but that piece is enough to wrack the recipient with temporary mental anguish and violent compulsions. The survivors of an allip's attack are sometimes left with a compulsion to learn more about what spawned this monstrosity. Strange phrases echo through their minds, and weird visions occupy their dreams. The sense that some colossal truth sits just outside their recall plagues them for days, months, and sometimes years after their fateful encounter.

## Insidious Lore

An allip might attempt to share its lore to escape its curse and enter the afterlife. It can transfer knowledge from its mind by guiding another creature to write down what it knows. This process takes days or possibly weeks. An allip can accomplish this task by lurking in the study or workplace of a scholar. If the allip remains hidden, its victim is gradually overcome by frantic energy. A scholar, driven by sudden insights to work night and day, produces reams of text with little memory of exactly what the documents contain. If the allip succeeds, it passes from the world—and its terrible secret hides somewhere in the scholar's text, waiting to be discovered by its next victim.

```statblock
"name": "Allip (MPMM)"
"size": "Medium"
"type": "undead"
"alignment": "Typically  Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d8"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "17"
  - !!int "10"
  - !!int "17"
  - !!int "15"
  - !!int "16"
"speed": "0 ft., fly 40 ft. (hover)"
"saves":
  - "intelligence": !!int "6"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+6"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Frightened|frightened]], [[conditions#Grappled|grappled]],\
  \ [[conditions#Paralyzed|paralyzed]], [[conditions#Petrified|petrified]],\
  \ [[conditions#Poisoned|poisoned]], [[conditions#Prone|prone]],\
  \ [[conditions#Restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
  - "desc": "The allip can move through other creatures and objects as if they were\
      \ difficult terrain. It takes 5 (d10) force damage if it ends its turn inside\
      \ an object."
    "name": "Incorporeal Movement"
  - "desc": "The allip doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "Melee Spell Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (4d6\
      \ + 3) psychic damage."
    "name": "Maddening Touch"
  - "desc": "Each creature within 30 feet of the allip that can hear it must make\
      \ a DC 14 Wisdom saving throw. On a failed save, a target takes 12 (2d8 + 3)\
      \ psychic damage, and it is [[conditions#Stunned|stunned]]\
      \ until the end of its next turn. On a successful save, it takes half as much\
      \ damage and isn't [[conditions#Stunned|stunned]]. Constructs\
      \ and Undead are immune to this effect."
    "name": "Howling Babble (Recharge 6)"
  - "desc": "The allip chooses up to three creatures it can see within 60 feet of\
      \ it. Each target must succeed on a DC 14 Wisdom saving throw, or it takes 12\
      \ (2d8 + 3) psychic damage and must use its reaction to make a melee weapon\
      \ attack against one creature of the allip's choice that the allip can see.\
      \ Constructs and Undead are immune to this effect."
    "name": "Whispers of Compulsion"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/undead/token/allip-mpmm.webp"
```
^statblock

## Environment

swamp, urban

## Player-Facing Summary

Allip mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of allip mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around allip mpmm.

## Adventure Hooks

- A rumor ties allip mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at allip mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to allip mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
