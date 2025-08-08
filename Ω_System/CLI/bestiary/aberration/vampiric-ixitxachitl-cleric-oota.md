---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/oota
  - ttrpg-cli/monster/cr/2
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Vampiric Ixitxachitl Cleric
---
# [Vampiric Ixitxachitl Cleric](3-Mechanics\CLI\bestiary\aberration/vampiric-ixitxachitl-cleric-oota.md)
*Source: Out of the Abyss p. 226*  

Ixitxachitl (pronounced ick-zit-zah-chit-ul) are aquatic creatures resembling manta rays, with small, clawed hands at the ends of their "wings" and black eyes gleaming with sinister intelligence. Many creatures mistake ixitxachitl for common manta rays, but this can prove a deadly mistake. The ixitxachitl are as evil as they are cunning, leading to their common nickname "demon rays." They inhabit bodies of fresh and salt water, but their violent nature means that little is known of them.

## Struggle for Survival

Ixitxachitl emerge from eggs as tiny creatures little more than a hand span in width. From that time onward, they struggle to survive at all costs, growing throughout their lives. Those ixitxachitl that master the secrets of survival gain powers of regeneration and feed on the life force of other creatures.

## All Consuming

Ixitxachitl hollow out coral reefs or other natural aquatic formations to create labyrinthine dens, often compelling aid from captured aquatic species they enslave. They typically strip an area bare before moving on to new fertile grounds, leaving their abandoned dens behind. Schools of ixitxachitl often war on other aquatic creatures to claim feeding grounds and territory.

## Demon Worshipers

The ixitxachitl venerate and serve various demons, particularly Demogorgon, whom they consider their patron and creator. They have an intense rivalry with the merrow over which of them are the greatest and most favored servants of the Prince of Demons.

## Variant: Ixitxachitl Cleric

Some ixitxachitl and vampiric ixitxachitl are able to cast divine spells. Such a creature gains the following feature.

### Spellcasting

The ixitxachitl is a 5th-level spellcaster that uses Wisdom as its spellcasting ability (spell save DC 11, +3 to hit with spell attacks). The ixitxachitl has the following cleric spells prepared:

Cantrips (at will): guidance, thaumaturgy

1st Level (4 slots): charm person, create or destroy water

2nd Level (3 slots): hold person, silence

3rd Level (2 slots): [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md), tongues

```statblock
"name": "Vampiric Ixitxachitl Cleric (OotA)"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "13"
  - !!int "12"
  - !!int "13"
  - !!int "7"
"speed": "0 ft., swim 30 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Abyssal, Ixitxachitl"
"cr": "2"
"traits":
  - "desc": "The ixitxachitl is a 5th-level spellcaster that uses Wisdom as its spellcasting\
      \ ability (Spell save DC 11, +3 to hit with spell attacks). The ixitxachitl\
      \ has the following cleric spells prepared:\n\nCantrips (at will): [guidance](/3-Mechanics/CLI/spells/guidance-xphb.md),\
      \ [thaumaturgy](/3-Mechanics/CLI/spells/thaumaturgy-xphb.md)\n\n1st level\
      \ (4 slots): [charm person](/3-Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [create or destroy water](/3-Mechanics/CLI/spells/create-or-destroy-water-xphb.md)\n\
      \n2nd level (3 slots): [hold person](/3-Mechanics/CLI/spells/hold-person-xphb.md),\
      \ [silence](/3-Mechanics/CLI/spells/silence-xphb.md)\n\n3rd level (2 slots):\
      \ [dispel magic](/3-Mechanics/CLI/spells/dispel-magic-xphb.md), [tongues](/3-Mechanics/CLI/spells/tongues-xphb.md)"
    "name": "Spellcasting"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
      \ + 2) piercing damage. The target must succeed on a DC 11 Constitution saving\
      \ throw or its hit point maximum is reduced by an amount equal to the damage\
      \ taken, and the ixitxachitl regains hit points equal to that amount. The reduction\
      \ lasts until the target finishes a long rest. The target dies if its hit point\
      \ maximum is reduced to 0."
    "name": "Vampiric Bite"
"reactions":
  - "desc": "When a creature provokes an opportunity attack from the ixitxachitl,\
      \ the ixitxachitl can make the following attack instead of using its bite.\n\
      \nMelee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10\
      \ + 4) piercing damage."
    "name": "Barbed Tail"
"source":
  - "OotA"
"image": "/3-Mechanics/CLI/bestiary/aberration/token/vampiric-ixitxachitl-cleric-oota.webp"
```
^statblock