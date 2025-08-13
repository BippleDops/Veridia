---
aliases:
- Ghoul
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
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
- world/both
type: monster
updated: '2025-08-13T12:34:05.874551+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ghoul-xmm-ghoul-xmm.svg)

# [[3-Mechanics\CLI\bestiary\undead/ghoul-xmm|Ghoul]]
*Source: Monster Manual (2024) p. 132. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Ghouls rise from the bodies of cannibals and villains with depraved hungers. They form packs out of shared voracity.

## Ghouls

*Eaters of the Dead*

- **Habitat.** Swamp, Underdark, Urban  
- **Treasure.** Any  

Packs of ghouls haunt the rotten corners of the world, ravenously hunting for corpses and those soon to be corpses. These gaunt, animate cadavers with unnaturally long tongues dwell in catacombs and ruins where they devour the contents of graves and paralyze foes with vicious claws.

> [!quote]  
> 
> On a plain of teeth, in a temple of filth, the starving king wastes no morsel. Every coffin a banquet. Every slab a platter. Now is the time of feasting!


```statblock
"name": "Ghoul (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "13"
  - !!int "15"
  - !!int "10"
  - !!int "7"
  - !!int "10"
  - !!int "6"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
  - "desc": "The ghoul makes two Bite attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage\
      \ plus 3 (d6) Necrotic damage."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing damage.\
      \ If the target is a creature that isn't an Undead or elf, it is subjected to\
      \ the following effect. Constitution Saving Throw: DC 10. Failure: The target\
      \ has the [[/03_Mechanics/CLI/conditions#Paralyzed|Paralyzed]] condition until\
      \ the end of its next turn."
    "name": "Claw"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/ghoul-xmm.webp"
```
^statblock

## Environment

swamp, underdark, urban

## Player-Facing Summary

Ghoul xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ghoul xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ghoul xmm.

## Adventure Hooks

- A rumor ties ghoul xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ghoul xmm to avert a public scandal.
- A map overlay reveals a hidden approach to ghoul xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
