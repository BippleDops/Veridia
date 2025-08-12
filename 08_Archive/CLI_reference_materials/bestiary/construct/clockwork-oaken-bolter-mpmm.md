---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/5
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/grassland
  - ttrpg-cli/monster/environment/hill
  - ttrpg-cli/monster/environment/mountain
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Clockwork Oaken Bolter
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-clockwork-oaken-bolter-mpmm-clockwork-oaken-bolter-mpmm.svg)

# [Clockwork Oaken Bolter](3-Mechanics\CLI\bestiary\construct/clockwork-oaken-bolter-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 80, Mordenkainen's Tome of Foes p. 126*  

No ordinary ballista, an oaken bolter is a Construct capable of striking at long distances. The bolts it launches can rend flesh, destroy armor, or drag enemies toward traps or melee-oriented clockworks—and at shorter ranges, burst with explosive force.

## Clockworks

Gnomes' tinkering with magic and mechanical devices has produced many failed Constructs but also has resulted in genuine advances, such as clockworks. The methods used to craft clockworks have been shared between gnome communities over many generations.

### Individual Designs

Gnome artisans prefer unique clockworks over perfectly functioning ones that copy too much from other creations. A clockwork can be customized by adding one of the following enhancements and one potential malfunction to its stat block. You can select randomly or choose a pair of modifications that fit the temperament of the clockwork's builder.

**Clockwork Enhancements**

`dice: [](clockwork-oaken-bolter-mpmm.md#^clockwork-enhancements)`

| dice: d10 | Enhancement |
|-----------|-------------|
| 1 | **Camouflaged.** The clockwork gains proficiency in [Stealth](/03_Mechanics/CLI/skills.md#Stealth) if it lacks that proficiency. While motionless, it is indistinguishable from a stopped machine. |
| 2 | **Sensors.** The range of the clockwork's [darkvision](/03_Mechanics/CLI/senses.md#Darkvision) increases by 60 feet, and it gains proficiency in [Perception](/03_Mechanics/CLI/skills.md#Perception) if it lacks that proficiency. |
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

`dice: [](clockwork-oaken-bolter-mpmm.md#^clockwork-malfunctions)`

| dice: d8 | Malfunction |
|----------|-------------|
| 1 | **Faulty Sensors.** Roll a `d6` at the start of the clock work's turn. If you roll a 1, the clockwork is [blinded](/03_Mechanics/CLI/conditions.md#Blinded) until the end of its turn. |
| 2 | **Flawed Targeting.** Roll a `d6` at the start of the clock work's turn. If you roll a 1, the clockwork makes attack rolls with disadvantage until the end of its turn. |
| 3 | **Ground Fault.** The clockwork has vulnerability to lightning damage. |
| 4 | **Imprinting Loop.** Roll a `d6` at the start of the clock work's turn. If you roll a 1, the clockwork mistakes one creature it can see within 30 feet for its creator. The clockwork won't willingly harm that creature for 1 minute or until that creature attacks or dam ages it. |
| 5 | **Limited Steering.** The clockwork must move in a straight line. It can turn up to 90 degrees before moving and again at the midpoint of its movement. It can rotate freely if it doesn't use any of its speeds on its turn. |
| 6 | **Overactive Sense of Self-Preservation.** If the clock work has half its hit points or fewer at the start of its turn in combat, roll a `d6`. If you roll a 1, it retreats from combat if possible. It otherwise keeps fighting. |
| 7 | **Overheats.** Roll a `d6` at the start of the clockwork's turn. If you roll a 1, the clockwork is [incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated) until the end of its turn. |
| 8 | **Rusty Gears.** The clockwork has disadvantage on initiative rolls, and its speed decreases by 10 feet. |
^clockwork-malfunctions

```statblock
"name": "Clockwork Oaken Bolter (MPMM)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"modifier": !!int "4"
"stats":
  - !!int "12"
  - !!int "18"
  - !!int "15"
  - !!int "3"
  - !!int "10"
  - !!int "1"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands one language of its creator but can't speak"
"cr": "5"
"traits":
  - "desc": "The clockwork has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The clockwork doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The clockwork makes two Lancing Bolt attacks or one Lancing Bolt attack\
      \ and one Harpoon attack."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 100/400\
      \ ft., one target. Hit: 15 (2d10 + 4) piercing damage."
    "name": "Lancing Bolt"
  - "desc": "Ranged Weapon Attack: +7 to hit, range 50/200 ft., one target. Hit:\
      \ 9 (1d10 + 4) piercing damage, and the target is [grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ (escape DC 12). While [grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ in this way, a creature's speed isn't reduced, but it can move only in directions\
      \ that bring it closer to the clockwork. A creature takes 5 (d10) slashing damage\
      \ if it escapes from the grapple or if it tries and fails. The clockwork can\
      \ grapple only one creature at a time with its harpoon."
    "name": "Harpoon"
  - "desc": "The clockwork launches an explosive charge at a point within 120 feet.\
      \ Each creature in a 20-foot-radius sphere centered on that point must make\
      \ a DC 15 Dexterity saving throw, taking 17 (5d6) fire damage on a failed save,\
      \ or half as much damage on a successful one."
    "name": "Explosive Bolt (Recharge 5-6)"
"bonus_actions":
  - "desc": "The clockwork pulls the creature [grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ by its Harpoon up to 20 feet closer."
    "name": "Reel In"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/construct/token/clockwork-oaken-bolter-mpmm.webp"
```
^statblock

## Environment

forest, grassland, hill, mountain

## Player-Facing Summary

Clockwork oaken bolter mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of clockwork oaken bolter mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around clockwork oaken bolter mpmm.

## Adventure Hooks

- A rumor ties clockwork oaken bolter mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at clockwork oaken bolter mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to clockwork oaken bolter mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
