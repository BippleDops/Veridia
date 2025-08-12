---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/3
  - ttrpg-cli/monster/environment/desert
  - ttrpg-cli/monster/environment/grassland
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Leucrotta
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-leucrotta-mpmm-leucrotta-mpmm.svg)

# [Leucrotta](3-Mechanics\CLI\bestiary\monstrosity/leucrotta-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 170, Volo's Guide to Monsters p. 169*  

A leucrotta is what you would get if you took the head of a giant badger, the legs of a deer, and the body of a large hyena, then put them together and reanimated them with demon ichor without bothering to cover up the stink of death.

The first leucrottas came into being alongside some gnolls during the rampages of Yeenoghu on the Material Plane. While many of the hyenas that ate Yeenoghu's kills transformed into gnolls, others underwent more bizarre changes; leucrottas were the most numerous of these.

As clever as it is cruel, a leucrotta loves to deceive, torture, and kill. Creatures who venerate Yeenoghu—particularly his gnoll followers—view leucrottas with great respect. Although a leucrotta is unlikely to lead a gnoll war band, it can influence the leader and might agree to carry the leader into battle and offer advice during the fight. Followers of Yeenoghu also see leucrottas as a form of entertainment. They enjoy watching a leucrotta work almost as much as they like doing their own killing, since leucrottas are meticulous in their cruelty and able to draw out kills for better and longer sport. And when there are no victims to be had, a leucrotta can mimic the delightful squeals of a suffering victim.

A leucrotta is so loathsome that few outside of its own kind can stand to be around one for long. Its horrific, hodgepodge body oozes a foul stench. This reek is outdone only by the creature's breath, which issues from a maw that drips fluid corrupted with rot and digestive juices. In place of fangs, a leucrotta has bony ridges as hard as steel that can crush bones and lacerate flesh. These plates are so tough that a leucrotta can use them to peel plate armor away from the body of a slain knight.

A leucrotta's stench would normally warn away prey long before the creature could attack. It has two natural capabilities, however, that give it an advantage. First, a leucrotta's tracks are nearly impossible to distinguish from those of common deer. Second, it can duplicate the call or the vocal expressions of just about any creature it has heard. The monster uses its mimicry to lure in potential victims, then attacks while they are confused or unaware of the actual threat.

```statblock
"name": "Leucrotta (MPMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "67"
"hit_dice": "9d10 + 18"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "15"
  - !!int "9"
  - !!int "12"
  - !!int "6"
"speed": "50 ft."
"skillsaves":
  - "name": "[Deception](/03_Mechanics/CLI/skills.md#Deception)"
    "desc": "+2"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Abyssal, Gnoll"
"cr": "3"
"traits":
  - "desc": "The leucrotta can mimic Beast sounds and Humanoid voices. A creature\
      \ that hears the sounds can tell they are imitations only with a successful\
      \ DC 14 Wisdom ([Insight](/03_Mechanics/CLI/skills.md#Insight)) check."
    "name": "Mimicry"
  - "desc": "Any creature other than a leucrotta or gnoll that starts its turn within\
      \ 5 feet of the leucrotta must succeed on a DC 12 Constitution saving throw\
      \ or be [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned) until the start\
      \ of the creature's next turn. On a successful saving throw, the creature is\
      \ immune to the Stench of all leucrottas for 1 hour."
    "name": "Stench"
"actions":
  - "desc": "The leucrotta makes one Bite attack and one Hooves attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) piercing damage. If the leucrotta scores a critical hit, it rolls the\
      \ damage dice three times, instead of twice."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) bludgeoning damage."
    "name": "Hooves"
"bonus_actions":
  - "desc": "Immediately after the leucrotta makes a Hooves attack, it takes the [Disengage](/03_Mechanics/CLI/actions.md#Disengage)\
      \ action."
    "name": "Kicking Retreat"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/leucrotta-mpmm.webp"
```
^statblock

## Environment

desert, grassland

## Player-Facing Summary

Leucrotta mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of leucrotta mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around leucrotta mpmm.

## Adventure Hooks

- A rumor ties leucrotta mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at leucrotta mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to leucrotta mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
