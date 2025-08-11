---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/5
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/environment/urban
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Swarm of Cranium Rats
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-swarm-of-cranium-rats-mpmm-swarm-of-cranium-rats-mpmm.svg)

# [Swarm of Cranium Rats](3-Mechanics\CLI\bestiary\aberration/swarm-of-cranium-rats-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 83, Volo's Guide to Monsters p. 133*  

## Cranium Rat

Mind flayers create cranium rats by bombarding rats with psionic energy. Cranium rats are somewhat smarter than ordinary rats and behave as such. If enough cranium rats come together to form a swarm, they merge their minds into a single intelligence with the accumulated memories of all the swarm's constituents. The rats become smarter as a result, and retain their heightened intelligence for as long as the swarm persists. The swarm also awakens latent psionic abilities implanted within each cranium rat by its mind flayer creators, bestowing upon the swarm psionic powers.

A single cranium rat uses its natural telepathy to communicate hunger, fear, and other base emotions. A swarm of cranium rats communicating telepathically "speaks" as one creature, often referring to itself using the collective pronouns "we" and "us." Some mind flayer colonies use cranium rats as spies. The rats invade communities and act as eyes and ears for the colony's elder brain, transmitting their thoughts when they swarm and are within range of the elder brain's telepathy.

```statblock
"name": "Swarm of Cranium Rats (MPMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Typically  Lawful Evil"
"ac": !!int "12"
"hp": !!int "76"
"hit_dice": "17d8"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "10"
  - !!int "15"
  - !!int "11"
  - !!int "14"
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [frightened](/03_Mechanics/CLI/conditions.md#Frightened),\
  \ [grappled](/03_Mechanics/CLI/conditions.md#Grappled), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [prone](/03_Mechanics/CLI/conditions.md#Prone),\
  \ [restrained](/03_Mechanics/CLI/conditions.md#Restrained), [stunned](/03_Mechanics/CLI/conditions.md#Stunned)"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": "telepathy 30 ft."
"cr": "5"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny rat. The swarm\
      \ can't regain hit points or gain temporary hit points."
    "name": "Swarm"
  - "desc": "The swarm is immune to any effect that would sense its emotions or read\
      \ its thoughts, as well as to all divination spells."
    "name": "Telepathic Shroud"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 0 ft., one target in the swarm's\
      \ space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the\
      \ swarm has half of its hit points or fewer, plus 22 (5d8) psychic damage."
    "name": "Bites"
  - "desc": "As long as it has more than half of its hit points remaining, the swarm\
      \ casts one of the following spells, requiring no spell components and using\
      \ Intelligence as the spellcasting ability (spell save DC 13):\n\nAt will:\
      \ [command](/03_Mechanics/CLI/spells/command-xphb.md), [comprehend languages](/03_Mechanics/CLI/spells/comprehend-languages-xphb.md),\
      \ [detect thoughts](/03_Mechanics/CLI/spells/detect-thoughts-xphb.md)\n\n1/day\
      \ each: [confusion](/03_Mechanics/CLI/spells/confusion-xphb.md), [dominate\
      \ monster](/03_Mechanics/CLI/spells/dominate-monster-xphb.md)"
    "name": "Spellcasting (Psionics)"
"bonus_actions":
  - "desc": "The swarm sheds dim light from its brains in a 5-foot radius, increases\
      \ the illumination to bright light in a 5- to 20-foot radius (and dim light\
      \ for an additional number of feet equal to the chosen radius), or extinguishes\
      \ the light."
    "name": "Illumination"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/swarm-of-cranium-rats-mpmm.webp"
```
^statblock

## Environment

underdark, urban