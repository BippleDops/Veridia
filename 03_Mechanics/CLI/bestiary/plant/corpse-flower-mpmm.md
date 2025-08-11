---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/8
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/environment/swamp
  - ttrpg-cli/monster/environment/urban
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Corpse Flower
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-corpse-flower-mpmm-corpse-flower-mpmm.svg)

# [Corpse Flower](3-Mechanics\CLI\bestiary\plant/corpse-flower-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 82, Mordenkainen's Tome of Foes p. 127*  

A corpse flower can sprout atop the grave of an evil necromancer or the remains of powerful Undead creatures. Unless it is uprooted and burned while it is still a seedling, the corpse flower grows to enormous size over several weeks, then tears itself free of the earth and begins scavenging Humanoid corpses from battlefields and graveyards. Using its fibrous tentacles, it stuffs the remains into its body to sustain and repair itself. The plant has a malevolent bent and despises the living.

With or without corpses nested in its body, a corpse flower exudes a stench of decay that can overwhelm the senses of nearby creatures, causing them to become nauseated. The stench, which serves as a defense mechanism, fades `2d4` days after the corpse flower dies.

```statblock
"name": "Corpse Flower (MPMM)"
"size": "Large"
"type": "plant"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "12"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "16"
  - !!int "7"
  - !!int "15"
  - !!int "3"
"speed": "20 ft., climb 20 ft."
"condition_immunities": "[blinded](/03_Mechanics/CLI/conditions.md#Blinded), [deafened](/03_Mechanics/CLI/conditions.md#Deafened),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 12"
"languages": ""
"cr": "8"
"traits":
  - "desc": "When first encountered, a corpse flower contains the corpses of 1d6 +\
      \ 3 Humanoids. A corpse flower can hold the remains of up to nine Humanoids.\
      \ These remains have total cover against attacks and other effects outside the\
      \ corpse flower. If the corpse flower dies, the corpses within it can be pulled\
      \ free."
    "name": "Corpses"
  - "desc": "The corpse flower can climb difficult surfaces, including upside down\
      \ on ceilings, without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "Each creature that starts its turn within 10 feet of the corpse flower\
      \ or one of its zombies must make a DC 14 Constitution saving throw, unless\
      \ the creature is a Construct or an Undead. On a failed save, the creature is\
      \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned) until the start of its\
      \ next turn. On a successful save, the creature is immune to the Stench of Death\
      \ of all corpse flowers for 24 hours."
    "name": "Stench of Death"
"actions":
  - "desc": "The corpse flower makes three Tentacle attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 9\
      \ (2d6 + 2) bludgeoning damage plus 10 (3d6) poison damage."
    "name": "Tentacle"
  - "desc": "The corpse flower swallows one unsecured Humanoid corpse within 10 feet\
      \ of it, along with any equipment the corpse is wearing or carrying."
    "name": "Harvest the Dead"
"bonus_actions":
  - "desc": "The corpse flower digests one corpse in its body and instantly regains\
      \ 11 (2d10) hit points. Nothing of the digested corpse remains. Any equipment\
      \ on the corpse is expelled from the corpse flower in its space."
    "name": "Digest"
  - "desc": "The corpse flower animates one corpse in its body, turning it into a\
      \ [zombie](/03_Mechanics/CLI/bestiary/undead/zombie-xmm.md). The zombie appears\
      \ in an unoccupied space within 5 feet of the corpse flower and acts immediately\
      \ after it in the initiative order. The zombie acts as an ally of the corpse\
      \ flower but isn't under its control, and the flower's stench clings to it (see\
      \ Stench of Death)."
    "name": "Reanimate"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/plant/token/corpse-flower-mpmm.webp"
```
^statblock

## Environment

forest, swamp, urban

## Player-Facing Summary

Corpse flower mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of corpse flower mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around corpse flower mpmm.

## Adventure Hooks

- A rumor ties corpse flower mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at corpse flower mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to corpse flower mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
