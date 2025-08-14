---
aliases:
- Barghest
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
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
- world/both
- world/surface
type: monster
updated: '2025-08-12T23:37:35.545999'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-barghest-mpmm-barghest-mpmm.svg)

# [[barghest-mpmm|Barghest]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 60, Volo's Guide to Monsters p. 123*  

Long ago, the god Maglubiyet—conqueror and then lord of early goblinoids—bargained with the General of Gehenna for aid. The General provided yugoloths, which then died in service to Maglubiyet. Yet when the time came to honor his part of the compact, Maglubiyet reneged on the deal. In vengeance, the General of Gehenna created the soul-devouring barghests to devour goblinoid souls.

The mission of every barghest, implanted in it by the General of Gehenna, is to consume souls. It eats these souls by devouring the bodies of those it kills, preferring goblinoids.

A barghest hungers for the day when it can complete its mission, return to Gehenna, and serve the General directly in his yugoloth legions, but it doesn't kill goblinoids indiscriminately. By devouring the souls of goblinoid leaders and other powerful individuals, a barghest earns elevated status in the afterlife. Barghests typically keep their true nature secret, preying on the occasional lone goblin when the opportunity arises, until they reach adulthood and are capable of seeking out stronger prey. A barghest avoids contact with large, open fires.

Any conflagration larger than its body acts as a gateway to Gehenna and banishes it to that plane, where it is likely to be slain or enslaved by a yugoloth for its failure.

```statblock
"name": "Barghest (MPMM)"
"size": "Large"
"type": "fiend"
"alignment": "Typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"modifier": !!int "2"
"stats":
  - !!int "19"
  - !!int "15"
  - !!int "14"
  - !!int "13"
  - !!int "12"
  - !!int "14"
"speed": "60 ft. (30 ft. in goblin form)"
"skillsaves":
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+4"
  - "name": "[[skills#Intimidation|Intimidation]]"
    "desc": "+4"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+4"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[[conditions#Poisoned|poisoned]]"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 15"
"languages": "Abyssal, Common, Goblin, Infernal, telepathy 60 ft."
"cr": "4"
"traits":
  - "desc": "When the barghest starts its turn engulfed in flames that are at least\
      \ 10 feet high or wide, it must succeed on a DC 15 Charisma saving throw or\
      \ be instantly banished to Gehenna"
    "name": "Fire Banishment"
  - "desc": "The barghest can feed on the corpse of a Fey or Humanoid it killed within\
      \ the past 10 minutes. This feeding takes at least 1 minute, and it destroys\
      \ the corpse. The victim's soul is trapped in the barghest for 24 hours, after\
      \ which time it is digested and the person is incapable of being revived. If\
      \ the barghest dies before the soul is digested, the soul is released. While\
      \ a soul is trapped in the barghest, any magic that tries to restore the soul\
      \ to life has a 50 percent chance of failing and being wasted."
    "name": "Soul Feeding"
"actions":
  - "desc": "The barghest makes one Bite attack and one Claw attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d8 + 4) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) slashing damage."
    "name": "Claw"
  - "desc": "The barghest casts one of the following spells, requiring no material\
      \ components and using Charisma as the spellcasting ability (spell save DC 12):\n\
      \nAt will: [[levitate-xphb|levitate]], [[minor-illusion-xphb|minor\
      \ illusion]], [[pass-without-trace-xphb|pass without trace]]\n\
      \n1/day each: [[charm-person-xphb|charm person]],\
      \ [[dimension-door-xphb|dimension door]], [[suggestion-xphb|suggestion]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The barghest transforms into a Small goblin or back into its true form.\
      \ Other than its size and speed, its statistics are the same in each form. Any\
      \ equipment it is wearing or carrying isn't transformed. The barghest reverts\
      \ to its true form if it dies."
    "name": "Change Shape"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/barghest-mpmm.webp"
```
^statblock

## Environment

forest, grassland, hill, mountain, underdark

## Player-Facing Summary

Barghest mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of barghest mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around barghest mpmm.

## Adventure Hooks

- A rumor ties barghest mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at barghest mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to barghest mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
