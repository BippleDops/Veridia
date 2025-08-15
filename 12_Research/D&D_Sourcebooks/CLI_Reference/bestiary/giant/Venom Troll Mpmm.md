---
title: Venom Troll Mpmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Venom Troll Mpmm

---
title: Venom Troll Mpmm
aliases:
- Venom Troll
type: monster
tags:
- both
- ttrpg-cli/monster/cr/7
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
- ttrpg-cli/monster/environment/swamp
- world/both
- active
- research
- ttrpg-cli/monster/environment/forest
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.388635+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-venom-troll-mpmm-v1-venom-troll-mpmm.svg)

# [[venom troll mpmm|Venom Troll]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 248, Mordenkainen's Tome of Foes p. 245*  

A troll that survives massive doses of poison might transform into a venom troll. Lingering poison infuses the troll's blood and tissue, and poison leaks from the pores to coat the troll's fangs and claws. These creatures are especially dangerous in close combat because poison drips off their flesh and sprays out from every wound they receive.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Trolls

Trolls that are nearly obliterated but survive and regenerate from mere scraps of flesh can display bizarre features. Radically transformed trolls like the rot trolls, spirit trolls, and venom trolls that follow are especially likely to arise when trolls regenerate in the presence of magical emanations, planar energy, disease, or death on a vast scale, or if their bodies were damaged by elemental forces. These unusual forms can also be produced and shaped by the ritual magic of evil spellcasters or by trolls' own practices, as is the case for dire trolls.

### Vaprak the Destroyer

Although trolls are rarely devout and seldom ponder spiritual questions, some fear and venerate the entity known as Vaprak the Destroyer. Vaprak's true nature is something of a mystery, but Vaprak is always portrayed as a horrid, misshapen, greenish creature strongly resembling a troll. Vaprak is given to fits of mindless destruction and uncontrollably fears the plots and ambitions of other deities.

Vaprak's troll worshipers believe this god devours the souls of those who have been cooked or digested (slain by fire or acid). Otherwise, the god spits the soul back into the world to regenerate a new body.

```statblock
"name": "Venom Troll (MPMM)"
"size": "Large"
"type": "giant"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "94"
"hit_dice": "9d10 + 45"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "20"
  - !!int "7"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+2"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Giant"
"cr": "7"
"traits":
  - "desc": "When the troll takes damage of any type but psychic, each creature within\
      \ 5 feet of the troll takes 9 (2d8) poison damage."
    "name": "Poison Splash"
  - "desc": "The troll regains 10 hit points at the start of each of its turns. If\
      \ the troll takes acid or fire damage, this trait doesn't function at the start\
      \ of the troll's next turn. The troll dies only if it starts its turn with 0\
      \ hit points and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "The troll makes one Bite attack and two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) piercing damage plus 4 (d8) poison damage, and the creature is [[conditions#Poisoned|poisoned]]\
      \ until the start of the troll's next turn."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) slashing damage plus 4 (d8) poison damage."
    "name": "Claws"
  - "desc": "The troll slices itself with a claw, releasing a spray of poison in a\
      \ 15-foot cube. The troll takes 7 (2d6) slashing damage (this damage can't be\
      \ reduced in any way). Each creature in the area must make a DC 16 Constitution\
      \ saving throw. On a failed save, a creature takes 18 (4d8) poison damage and\
      \ is [[conditions#Poisoned|poisoned]] for 1 minute. On a\
      \ successful save, the creature takes half as much damage and isn't [[conditions#Poisoned|poisoned]].\
      \ A [[conditions#Poisoned|poisoned]] creature can repeat\
      \ the saving throw at the end of each of its turns, ending the effect on itself\
      \ on a success."
    "name": "Venom Spray (Recharge 6)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/giant/token/venom-troll-mpmm.webp"
```
^statblock

## Environment

forest, swamp, underdark

## Player-Facing Summary

Venom troll mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of venom troll mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around venom troll mpmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Secret Connections

*[Hidden from players]* Connected to The Hidden Covenant - Control trade routes
