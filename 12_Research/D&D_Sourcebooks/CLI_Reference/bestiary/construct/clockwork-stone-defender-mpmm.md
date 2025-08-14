# clockwork-stone-defender-mpmm

---
title: clockwork stone defender mpmm
aliases:
- Clockwork Stone Defender
type: monster
tags:
- ttrpg-cli/monster/size/medium
- world/surface
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/cr/4
- monster
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/type/construct
- ttrpg-cli/compendium/src/5e/mpmm
- world/both
- research
- active
- ttrpg-cli/monster/environment/forest
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.876682'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-clockwork-stone-defender-mpmm-clockwork-stone-defender-mpmm.svg)

# [[clockwork-stone-defender-mpmm|Clockwork Stone Defender]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 80, Mordenkainen's Tome of Foes p. 126*  

The thick plates of stone riveted onto a stone [[defender-xdmg|defender]] give it substantial protection. Its chief role is as a bodyguard.

## Clockworks

Gnomes' tinkering with magic and mechanical devices has produced many failed Constructs but also has resulted in genuine advances, such as clockworks. The methods used to craft clockworks have been shared between gnome communities over many generations.

### Individual Designs

Gnome artisans prefer unique clockworks over perfectly functioning ones that copy too much from other creations. A clockwork can be customized by adding one of the following enhancements and one potential malfunction to its stat block. You can select randomly or choose a pair of modifications that fit the temperament of the clockwork's builder.

**Clockwork Enhancements**

`dice: [](clockwork-stone-defender-mpmm.md#^clockwork-enhancements)`

| dice: d10 | Enhancement |
|-----------|-------------|
| 1 | **Camouflaged.** The clockwork gains proficiency in [[skills#Stealth|Stealth]] if it lacks that proficiency. While motionless, it is indistinguishable from a stopped machine. |
| 2 | **Sensors.** The range of the clockwork's [[senses#Darkvision|darkvision]] increases by 60 feet, and it gains proficiency in [[skills#Perception|Perception]] if it lacks that proficiency. |
| 3 | **Fortified.** The clockwork's AC increases by 2. |
| 4 | **Increased Speed.** The clockwork's speed increases by 10 feet. |
| 5 | **Reinforced Construction.** The clockwork has resistance to force, lightning, and thunder damage. |
| 6 | **Self-Repairing.** If the clockwork starts its turn with fewer than half its hit points but at least 1 hit point, it regains 5 hit points. If it takes lightning damage, this ability doesn't function at the start of its next turn. |
| 7 | **Sturdy Frame.** The clockwork's hit point maximum increases by an amount equal to its number of Hit Dice. |
| 8 | **Suction.** The clockwork gains a climbing speed of 30 feet. |
| 9 | **Vocal Resonator.** The clockwork gains the ability to speak rudimentary Common or Gnomish. |
| 10 | **Water Propulsion.** The clockwork gains a swimming speed of 30 feet. |
^clockwork-enhancements

**Clockwork Malfunctions**

`dice: [](clockwork-stone-defender-mpmm.md#^clockwork-malfunctions)`

| dice: d8 | Malfunction |
|----------|-------------|
| 1 | **Faulty Sensors.** Roll a `d6` at the start of the clock work's turn. If you roll a 1, the clockwork is [[conditions#Blinded|blinded]] until the end of its turn. |
| 2 | **Flawed Targeting.** Roll a `d6` at the start of the clock work's turn. If you roll a 1, the clockwork makes attack rolls with disadvantage until the end of its turn. |
| 3 | **Ground Fault.** The clockwork has vulnerability to lightning damage. |
| 4 | **Imprinting Loop.** Roll a `d6` at the start of the clock work's turn. If you roll a 1, the clockwork mistakes one creature it can see within 30 feet for its creator. The clockwork won't willingly harm that creature for 1 minute or until that creature attacks or dam ages it. |
| 5 | **Limited Steering.** The clockwork must move in a straight line. It can turn up to 90 degrees before moving and again at the midpoint of its movement. It can rotate freely if it doesn't use any of its speeds on its turn. |
| 6 | **Overactive Sense of Self-Preservation.** If the clock work has half its hit points or fewer at the start of its turn in combat, roll a `d6`. If you roll a 1, it retreats from combat if possible. It otherwise keeps fighting. |
| 7 | **Overheats.** Roll a `d6` at the start of the clockwork's turn. If you roll a 1, the clockwork is [[conditions#Incapacitated|incapacitated]] until the end of its turn. |
| 8 | **Rusty Gears.** The clockwork has disadvantage on initiative rolls, and its speed decreases by 10 feet. |
^clockwork-malfunctions

```statblock
"name": "Clockwork Stone Defender (MPMM)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "10"
  - !!int "17"
  - !!int "3"
  - !!int "10"
  - !!int "1"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Frightened|frightened]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands one language of its creator but can't speak"
"cr": "4"
"traits":
  - "desc": "The clockwork has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The clockwork doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) bludgeoning damage, and if the target is Large or smaller, it is\
      \ knocked [[conditions#Prone|prone]]."
    "name": "Slam"
"reactions":
  - "desc": "In response to another creature within 5 feet of it being hit by an attack\
      \ roll, the clockwork gives that creature a +5 bonus to its AC against that\
      \ attack, potentially causing a miss. To use this ability, the clockwork must\
      \ be able to see the creature and the attacker."
    "name": "Intercept Attack"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/construct/token/clockwork-stone-defender-mpmm.webp"
```
^statblock

## Environment

forest, grassland, hill, mountain

## Player-Facing Summary

Clockwork stone defender mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of clockwork stone defender mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around clockwork stone defender mpmm.

## Adventure Hooks

- A rumor ties clockwork stone defender mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at clockwork stone defender mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to clockwork stone defender mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
