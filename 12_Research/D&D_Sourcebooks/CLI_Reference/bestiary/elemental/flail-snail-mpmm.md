---
aliases:
- Flail Snail
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
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
- world/both
type: monster
updated: '2025-08-12T23:37:35.410118'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-flail-snail-mpmm-flail-snail-mpmm.svg)

# [[flail-snail-mpmm|Flail Snail]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 126, Volo's Guide to Monsters p. 144*  

A flail snail is a creature of elemental earth that is prized for its multihued shell. It may seem harmless, but if a creature big enough to be a threat approaches too close, the snail flashes a scintillating light and attacks with its mace-like tentacles.

Left undisturbed, a flail snail moves slowly along the ground. It consumes everything on the surface, including rocks, sand, and soil, and it stops periodically to relish crystal growths and other large mineral deposits. It leaves behind a shimmering trail that quickly solidifies into a thin and nearly transparent layer. This glassy residue can be harvested and cut to form window panes. It can also be heated and spun into other glass objects. Some folk make a living from trailing flail snails to collect this glass.

## Using the Shell of a Flail Snail

A flail snail shell weighs about 250 pounds and has numerous uses. An intact shell can sell for 5,000 gp.

Many hunters seek the shell for its antimagic properties. A skilled armorer can make three shields from one shell. For 1 month, each shield gives its wielder the snail's Antimagic Shell trait. When the shield's magic fades, it becomes an exotic shield that is the perfect item from which to make a [[spellguard-shield-xdmg|spellguard shield]].

A flail snail shell can also be used to make a [[robe-of-scintillating-colors-xdmg|robe of scintillating colors]]. The shell is ground and added to the dye applied to the fabric. The powder is also a material component of the ritual that enchants the robe.

```statblock
"name": "Flail Snail (MPMM)"
"size": "Large"
"type": "elemental"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "5d10 + 25"
"modifier": !!int "-3"
"stats":
  - !!int "17"
  - !!int "5"
  - !!int "20"
  - !!int "3"
  - !!int "10"
  - !!int "5"
"speed": "10 ft."
"damage_immunities": "fire, poison"
"condition_immunities": "[[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 10"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The snail has advantage on saving throws against spells, and any creature\
      \ making a spell attack against the snail has disadvantage on the attack roll.\n\
      \nIf the snail succeeds on its saving throw against a spell or a spell's attack\
      \ roll misses it, the snail's shell converts some of the spell's energy into\
      \ a burst of destructive force if the spell is of 1st level or higher; each\
      \ creature within 30 feet of the snail must make a DC 15 Constitution saving\
      \ throw, taking 3 (d6) force damage per level of the spell on a failed save,\
      \ or half as much damage on a successful one."
    "name": "Antimagic Shell"
"actions":
  - "desc": "The snail makes five Flail Tentacle attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 5\
      \ (1d4 + 3) bludgeoning damage."
    "name": "Flail Tentacle"
  - "desc": "The snail's shell emits dazzling, colored light until the end of the\
      \ snail's next turn. During this time, the shell sheds bright light in a 30-foot\
      \ radius and dim light for an additional 30 feet, and creatures that can see\
      \ the snail have disadvantage on attack rolls against it. In addition, any creature\
      \ within the bright light and able to see the snail when this power is activated\
      \ must succeed on a DC 15 Wisdom saving throw or be [[conditions#Stunned|stunned]]\
      \ until the light ends."
    "name": "Scintillating Shell (Recharges after a Short or Long Rest)"
  - "desc": "The flail snail withdraws into its shell. Until it emerges, it gains\
      \ a +4 bonus to its AC and is [[conditions#Restrained|restrained]].\
      \ It can emerge from its shell as a bonus action on its turn."
    "name": "Shell Defense"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/flail-snail-mpmm.webp"
```
^statblock

## Environment

forest, swamp, underdark

## Player-Facing Summary

Flail snail mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of flail snail mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around flail snail mpmm.

## Adventure Hooks

- A rumor ties flail snail mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at flail snail mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to flail snail mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
