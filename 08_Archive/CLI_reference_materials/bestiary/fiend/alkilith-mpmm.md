---
updated: '2025-08-13T01:18:32.795908+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: '#^statblock'
aliases:
- Alkilith
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-alkilith-mpmm-alkilith-mpmm.svg)

# [Alkilith](3-Mechanics\CLI\bestiary\fiend/alkilith-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 44, Mordenkainen's Tome of Foes p. 130*  

An alkilith is easily mistaken for some kind of foul fungal growth that appears on doorways, windows, and other portals. These dripping infestations conceal the demonic nature of the alkilith, making what should be a dire warning appear strange but otherwise innocuous. Wherever alkiliths take root, they weaken the fabric of reality, creating a portal through which even nastier demons can invade.

The appearance of an alkilith in the world heralds a great wrongness and an imminent catastrophe. An alkilith searches for an aperture such as a window or a door around which it can take root, stretching its body around the opening and anchoring itself with a sticky secretion. If left undisturbed, the opening becomes attuned to the Abyss and eventually becomes a portal to that plane (see "Planar Portals" in the Dungeon Master's Guide).

Alkiliths spring from cast-off bits of the hideous, shuddering body of Juiblex. They gradually become self-aware and seek to find their way onto the Material Plane. Since most cultists consider them too risky to summon—they can, after all, create portals to the Abyss—alkiliths must find other escape routes out of their native plane.

```statblock
"name": "Alkilith (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "168"
"hit_dice": "16d8 + 96"
"modifier": !!int "4"
"stats":
  - !!int "12"
  - !!int "19"
  - !!int "22"
  - !!int "6"
  - !!int "11"
  - !!int "7"
"speed": "40 ft., climb 40 ft."
"saves":
  - "dexterity": !!int "8"
  - "constitution": !!int "10"
"skillsaves":
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+8"
"damage_resistances": "acid; cold; fire; lightning; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [frightened](/03_Mechanics/CLI/conditions.md#Frightened),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Abyssal but can't speak"
"cr": "11"
"traits":
  - "desc": "If the alkilith surrounds a door, window, or similar opening continuously\
      \ for 6d6 days, the opening becomes a permanent portal to a random layer of\
      \ the Abyss."
    "name": "Abyssal Rift"
  - "desc": "The alkilith can move through a space as narrow as 1 inch wide without\
      \ squeezing."
    "name": "Amorphous"
  - "desc": "If the alkilith is motionless at the start of combat, it has advantage\
      \ on its initiative roll. Moreover, if a creature hasn't observed the alkilith\
      \ move or act, that creature must succeed on a DC 18 Intelligence ([Investigation](/03_Mechanics/CLI/skills.md#Investigation))\
      \ check to discern that the alkilith isn't ordinary slime or fungus."
    "name": "False Appearance"
  - "desc": "Any creature that isn't a demon that starts its turn within 30 feet of\
      \ the alkilith must succeed on a DC 18 Wisdom saving throw, or it hears a faint\
      \ buzzing in its head for a moment and has disadvantage on its next attack roll,\
      \ saving throw, or ability check.\n\nIf the saving throw against Foment Confusion\
      \ fails by 5 or more, the creature is instead subjected to the [confusion](/03_Mechanics/CLI/spells/confusion-xphb.md)\
      \ spell for 1 minute (no [concentration](/03_Mechanics/CLI/conditions.md#Concentration)\
      \ required by the alkilith). While under the effect of that confusion, the creature\
      \ is immune to Foment Confusion."
    "name": "Foment Confusion"
  - "desc": "The alkilith has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The alkilith can climb difficult surfaces, such as upside down on ceilings,\
      \ without making an ability check."
    "name": "Spider Climb"
  - "desc": "The alkilith doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The alkilith makes three Tentacle attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 18\
      \ (4d6 + 4) acid damage."
    "name": "Tentacle"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/alkilith-mpmm.webp"
```
^statblock

## Environment

underdark, urban

## Player-Facing Summary

Alkilith mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of alkilith mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around alkilith mpmm.

## Adventure Hooks

- A rumor ties alkilith mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at alkilith mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to alkilith mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
