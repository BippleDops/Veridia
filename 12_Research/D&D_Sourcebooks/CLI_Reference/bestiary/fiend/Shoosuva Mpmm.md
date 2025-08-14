---
aliases:
- Shoosuva
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
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
- world/both
- world/surface
type: monster
updated: '2025-08-13T12:34:05.845095+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-shoosuva-mpmm-shoosuva-mpmm.svg)

# [[shoosuva-mpmm|Shoosuva]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 216, Volo's Guide to Monsters p. 137*  

> [!quote] A quote from Mordenkainen  
> 
> What? Are you expecting me to comment on these creatures? Fine, how's this: a loyal pet deserves a loyal pet.

> [!quote] A quote from Tasha  
> 
> Trust Mordenkainen to look down on any sort of companionship—even the slavering, venomous, demonic puppy kind.

A shoosuva is a hyena-demon gifted by [[/03_Mechanics/CLI/bestiary/npc/yeenoghu-mpmm|Yeenoghu]] to an especially powerful worshiper (typically a [[gnoll-fang-of-yeenoghu-xmm|fang of Yeenoghu]]). A shoosuva manifests shortly after a Yeenoghu-worshiping war band achieves a great victory, emerging from a billowing, fetid cloud of smoke as it arrives from the Abyss. In battle, the demon wraps its slavering jaws around one victim while lashing out with the poisonous stinger on its tail to bring down another. A creature immobilized by the poison becomes easy pickings for any nearby members of the war band.

Each shoosuva is bonded to a particular worshiper of Yeenoghu and fights alongside its master. A gnoll that has been gifted with a shoosuva is second only to a flind in status within a war band dedicated to Yeenoghu.

```statblock
"name": "Shoosuva (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "17"
  - !!int "7"
  - !!int "14"
  - !!int "9"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "4"
  - "constitution": !!int "6"
  - "wisdom": !!int "5"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Frightened|frightened]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Gnoll, telepathy 120 ft."
"cr": "8"
"actions":
  - "desc": "The shoosuva makes one Bite attack and one Tail Stinger attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 26\
      \ (4d10 + 4) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 15 ft., one creature. Hit:\
      \ 13 (2d8 + 4) piercing damage, and the target must succeed on a DC 14 Constitution\
      \ saving throw or become [[conditions#Poisoned|poisoned]].\
      \ While [[conditions#Poisoned|poisoned]] in this way, the\
      \ target is also [[conditions#Paralyzed|paralyzed]]. The\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Tail Stinger"
"bonus_actions":
  - "desc": "When it reduces a creature to 0 hit points with a melee attack on its\
      \ turn, the shoosuva can move up to half its speed and make one Bite attack."
    "name": "Rampage"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/shoosuva-mpmm.webp"
```
^statblock

## Environment

coastal, forest, grassland, hill

## Player-Facing Summary

Shoosuva mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of shoosuva mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around shoosuva mpmm.

## Adventure Hooks

- A rumor ties shoosuva mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at shoosuva mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to shoosuva mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
