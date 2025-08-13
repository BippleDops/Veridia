---
aliases:
- Choker
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
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/aberration
- world/both
type: monster
updated: '2025-08-13T12:34:05.592745+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-choker-mpmm-choker-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\aberration/choker-mpmm|Choker]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 76, Mordenkainen's Tome of Foes p. 123*  

The choker is a subterranean predator far more dangerous than its small size and spindly, rubbery limbs would suggest.

Chokers have cartilage rather than a bony skeleton. This flexible internal structure enables them to easily slip into narrow fissures and niches in the walls of their cavern homes. They lurk in these spots, silent and unseen, waiting for prey to happen by.

A choker's usual method for luring prey involves positioning the body of its latest catch just outside its hiding spot. Whenever it gets hungry, it tears off a few chunks of flesh to feed itself. In the meantime, the corpse serves to entice other curious folk—explorers from the surface world, drow, duergar, or the choker's favorite prey, goblins—to come within reach.

When a target presents itself, the choker's starfish-shaped hands dart out of its hiding spot, wrap around the victim's throat, and pin the unfortunate creature against the cavern wall. Because its arms are so long, the choker can keep its body deep inside the crevice where it hides, beyond the reach of most normal weapons.

Chokers tend to set their ambushes alone, rather than working in concert, but where one choker is found, others are likely to be nearby. They communicate through eerie, keening howls that travel long distances through caves and tunnels but are difficult to identify or locate in a typical echo-filled cavern.

```statblock
"name": "Choker (MPMM)"
"size": "Small"
"type": "aberration"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "4"
  - !!int "12"
  - !!int "7"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+6"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Deep Speech"
"cr": "1"
"traits":
  - "desc": "The choker can take an extra action on its turn."
    "name": "Aberrant Quickness (Recharges after a Short or Long Rest)"
  - "desc": "The choker can move through and occupy a space as narrow as 4 inches\
      \ wide without squeezing."
    "name": "Boneless"
  - "desc": "The choker can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The choker makes two Tentacle attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 5\
      \ (1d4 + 3) piercing damage. If the target is a Large or smaller creature, it\
      \ is [[/03_Mechanics/CLI/conditions#Grappled|grappled]] (escape DC 15). Until\
      \ this grapple ends, the target is [[/03_Mechanics/CLI/conditions#Restrained|restrained]],\
      \ and the choker can't use this tentacle on another target. The choker has two\
      \ tentacles. If this attack is a critical hit, the target also can't breathe\
      \ or speak until the grapple ends."
    "name": "Tentacle"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/choker-mpmm.webp"
```
^statblock

## Environment

forest, mountain, underdark

## Player-Facing Summary

Choker mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of choker mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around choker mpmm.

## Adventure Hooks

- A rumor ties choker mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at choker mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to choker mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
