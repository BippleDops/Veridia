---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/3
  - ttrpg-cli/monster/environment/arctic
  - ttrpg-cli/monster/environment/coastal
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/grassland
  - ttrpg-cli/monster/environment/mountain
  - ttrpg-cli/monster/environment/swamp
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/environment/urban
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Vampiric Mist
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-vampiric-mist-mpmm-v1-vampiric-mist-mpmm.svg)

# [Vampiric Mist](3-Mechanics\CLI\bestiary\undead/vampiric-mist-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 250, Mordenkainen's Tome of Foes p. 246*  

In billowing clouds of fog lurk vampiric mists, the wretched remnants of [vampires](/03_Mechanics/CLI/bestiary/undead/vampire-xmm.md) that were prevented from finding rest. Indistinguishable from the mists they lurk within, they strike unseen and undetected to bleed their victims dry.

Vampiric mists, sometimes called crimson mists, are all that remain of [vampires](/03_Mechanics/CLI/bestiary/undead/vampire-xmm.md) who couldn't return to their burial places after being defeated or suffering some mishap. Denied the restorative power of these places, the [vampires'](/03_Mechanics/CLI/bestiary/undead/vampire-xmm.md) bodies dissolve into mist. The transformation strips the intelligence and personality from them until only an unholy, insatiable thirst for blood remains.

Indistinguishable from fog aside from the charnel reek it exudes, a vampiric mist descends on a creature and causes the blood in the creature's body to ooze through its pores or spill out from its eyes, nose, and mouth. This blood wafts out from the victim like crimson smoke, which the mist then consumes. The feeding causes no pain or discomfort to the victim, so vampiric mists can feed on sleepers without waking them. The more a mist feeds, the redder it gets, such that it turns pink, then red, and finally a deep scarlet hue; when sated, it rains blood droplets wherever it goes.

Like sharks in water, vampiric mists can scent blood from up to a mile away. Any injury, no matter how small, might catch their attention and draw them toward their victims. In battle, a mist focuses its attacks on injured targets, since open wounds are a more ready source of blood.

```statblock
"name": "Vampiric Mist (MPMM)"
"size": "Medium"
"type": "undead"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "13"
"hp": !!int "30"
"hit_dice": "4d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "16"
  - !!int "16"
  - !!int "6"
  - !!int "12"
  - !!int "7"
"speed": "0 ft., fly 30 ft. (hover)"
"saves":
  - "wisdom": !!int "3"
"damage_resistances": "acid; cold; lightning; necrotic; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [grappled](/03_Mechanics/CLI/conditions.md#Grappled), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned),\
  \ [prone](/03_Mechanics/CLI/conditions.md#Prone), [restrained](/03_Mechanics/CLI/conditions.md#Restrained)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The mist can sense the location of any creature within 60 feet of it,\
      \ unless that creature's type is Construct or Undead."
    "name": "Life Sense"
  - "desc": "The mist can't enter a residence without an invitation from one of the\
      \ occupants."
    "name": "Forbiddance"
  - "desc": "The mist can occupy another creature's space and vice versa. In addition,\
      \ if air can pass through a space, the mist can pass through it without squeezing.\
      \ Each foot of movement in water costs it 2 extra feet, rather than 1 extra\
      \ foot. The mist can't manipulate objects in any way that requires fingers or\
      \ manual dexterity."
    "name": "Misty Form"
  - "desc": "The mist takes 10 radiant damage whenever it starts its turn in sunlight.\
      \ While in sunlight, the mist has disadvantage on attack rolls and ability checks."
    "name": "Sunlight Hypersensitivity"
  - "desc": "The mist doesn't require air or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The mist touches one creature in its space. The target must succeed on\
      \ a DC 13 Constitution saving throw (Undead and Constructs automatically succeed),\
      \ or it takes 10 (2d6 + 3) necrotic damage, the mist regains 10 hit points,\
      \ and the target's hit point maximum is reduced by an amount equal to the necrotic\
      \ damage taken. This reduction lasts until the target finishes a long rest.\
      \ The target dies if its hit point maximum is reduced to 0."
    "name": "Life Drain"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/undead/token/vampiric-mist-mpmm.webp"
```
^statblock

## Environment

arctic, coastal, forest, grassland, mountain, swamp, underdark, urban

## Player-Facing Summary

Vampiric mist mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of vampiric mist mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around vampiric mist mpmm.

## Adventure Hooks

- A rumor ties vampiric mist mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at vampiric mist mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to vampiric mist mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
