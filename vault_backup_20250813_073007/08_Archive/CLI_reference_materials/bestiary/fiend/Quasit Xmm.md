---
aliases:
- Quasit
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
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/fiend/demon
- world/both
type: monster
updated: '2025-08-13T12:34:19.993342+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-quasit-xmm-quasit-xmm.svg)

# [[3-Mechanics\CLI\bestiary\fiend/quasit-xmm|Quasit]]
*Source: Monster Manual (2024) p. 252, Player's Handbook (2024) p. 355. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Quasit

*Demon of Discord and Disorder*

- **Habitat.** Planar (Abyss)  
- **Treasure.** None  

Tirelessly destructive, quasits sow discord through nasty pranks, sabotage, and ambushes. These tiny demons use chaos and violence to terrorize others. By shape-shifting into harmless but ill-omened creatures or by turning [[/03_Mechanics/CLI/conditions#Invisible|invisible]], quasits sneak into places where they spy for villainous masters or set vicious traps. Quasits delight in hiding in dark places and—when least expected—bursting forth to slash foes with their [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]] claws.

Quasits are usually overlooked and underestimated by other demons. This drives them to prove themselves through cruel acts or by seeking paths to the Material Plane. Among mortals, quasits sow senseless chaos, and they might find kindred evil spirits among violent cultists and magic-users.

> [!quote] A quote from Otto the Bard  
> 
> A thing doesn't need to be big to be gut-flippingly dreadful. Just think of all the folks who're squeamish around spiders. Now imagine a spider as big as a cat and that wants to steal your tongue.


```statblock
"name": "Quasit (XMM)"
"size": "Tiny"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "25"
"hit_dice": "10d4"
"modifier": !!int "3"
"stats":
  - !!int "5"
  - !!int "17"
  - !!int "10"
  - !!int "7"
  - !!int "10"
  - !!int "10"
"speed": "40 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+5"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Abyssal, Common"
"cr": "1"
"traits":
  - "desc": "The quasit has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 5 (1d4 + 3) Slashing damage,\
      \ and the target has the [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]]\
      \ condition until the start of the quasit's next turn."
    "name": "Rend"
  - "desc": "Wisdom Saving Throw: DC 10, one creature within 20 feet. Failure:\
      \ The target has the [[/03_Mechanics/CLI/conditions#Frightened|Frightened]]\
      \ condition. At the end of each of its turns, the target repeats the save, ending\
      \ the effect on itself on a success. After 1 minute, it succeeds automatically."
    "name": "Scare (1/Day)"
  - "desc": "The quasit shape-shifts to resemble a bat ([[/03_Mechanics/CLI/variant-rules/speed-xphb|Speed]]\
      \ 10 ft., Fly 40 ft.), a centipede (40 ft., Climb 40 ft.), or a toad (40 ft.,\
      \ Swim 40 ft.), or it returns to its true form. Its game statistics are the\
      \ same in each form, except for its [[/03_Mechanics/CLI/variant-rules/speed-xphb|Speed]].\
      \ Any equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
  - "desc": "The quasit casts [[/03_Mechanics/CLI/spells/invisibility-xphb|Invisibility]]\
      \ on itself, requiring no spell components and using Charisma as the spellcasting\
      \ ability.\n"
    "name": "Invisibility"
"source":
  - "XMM"
  - "XPHB"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/quasit-xmm.webp"
```
^statblock

## Environment

planar, abyss

## Player-Facing Summary

Quasit xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of quasit xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around quasit xmm.

## Adventure Hooks

- A rumor ties quasit xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at quasit xmm to avert a public scandal.
- A map overlay reveals a hidden approach to quasit xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
