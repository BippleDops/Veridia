---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/oota
  - ttrpg-cli/monster/cr/1-4
  - ttrpg-cli/monster/size/small
  - ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Ixitxachitl
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-ixitxachitl-oota-ixitxachitl-oota.svg)

# [Ixitxachitl](3-Mechanics\CLI\bestiary\aberration/ixitxachitl-oota.md)
*Source: Out of the Abyss p. 225*  

Ixitxachitl (pronounced ick-zit-zah-chit-ul) are aquatic creatures resembling manta rays, with small, clawed hands at the ends of their "wings" and black eyes gleaming with sinister intelligence. Many creatures mistake ixitxachitl for common manta rays, but this can prove a deadly mistake. The ixitxachitl are as evil as they are cunning, leading to their common nickname "demon rays." They inhabit bodies of fresh and salt water, but their violent nature means that little is known of them.

## Struggle for Survival

Ixitxachitl emerge from eggs as tiny creatures little more than a hand span in width. From that time onward, they struggle to survive at all costs, growing throughout their lives. Those ixitxachitl that master the secrets of survival gain powers of regeneration and feed on the life force of other creatures.

## All Consuming

Ixitxachitl hollow out coral reefs or other natural aquatic formations to create labyrinthine dens, often compelling aid from captured aquatic species they enslave. They typically strip an area bare before moving on to new fertile grounds, leaving their abandoned dens behind. Schools of ixitxachitl often war on other aquatic creatures to claim feeding grounds and territory.

## Demon Worshipers

The ixitxachitl venerate and serve various demons, particularly Demogorgon, whom they consider their patron and creator. They have an intense rivalry with the merrow over which of them are the greatest and most favored servants of the Prince of Demons.

```statblock
"name": "Ixitxachitl (OotA)"
"size": "Small"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "13"
  - !!int "12"
  - !!int "13"
  - !!int "7"
"speed": "0 ft., swim 30 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Abyssal, Ixitxachitl"
"cr": "1/4"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
      \ + 1) piercing damage."
    "name": "Bite"
"reactions":
  - "desc": "When a creature provokes an opportunity attack from the ixitxachitl,\
      \ the ixitxachitl can make the following attack instead of using its bite.\n\
      \nMelee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 +\
      \ 3) piercing damage."
    "name": "Barbed Tail"
"source":
  - "OotA"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/ixitxachitl-oota.webp"
```
^statblock