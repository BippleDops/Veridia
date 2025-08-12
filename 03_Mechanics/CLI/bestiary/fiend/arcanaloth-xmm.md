---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/12
  - ttrpg-cli/monster/environment/lower
  - ttrpg-cli/monster/environment/planar
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/fiend/yugoloth
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Arcanaloth
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-arcanaloth-xmm-arcanaloth-xmm.svg)

# [Arcanaloth](3-Mechanics\CLI\bestiary\fiend/arcanaloth-xmm.md)
*Source: Monster Manual (2024) p. 19*  

## Arcanaloth

*Yugoloth of Magical Manipulation*

- **Habitat.** Planar (Lower Planes)  
- **Treasure.** Arcana  

While all yugoloths are fiendish manifestations of wickedness and greed, arcanaloths bend their considerable intellects toward hoarding and exploiting secrets. They then deploy these secrets to ensnare countless victims and lesser villains, beguiling foes with false promises and powerful magic.

Arcanaloths possess considerable spellcasting prowess and frequently disguise themselves with magic. While they prefer to let magical servants or other yugoloths do their fighting for them, arcanaloths can defend themselves with arcane might, banishing opponents into the pages of their magic tomes.

```statblock
"name": "Arcanaloth (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "175"
"hit_dice": "27d8 + 54"
"modifier": !!int "5"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "14"
  - !!int "20"
  - !!int "16"
  - !!int "17"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  - "dexterity": !!int "5"
  - "constitution": !!int "6"
  - "intelligence": !!int "9"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[Arcana](/03_Mechanics/CLI/skills.md#Arcana)"
    "desc": "+9"
  - "name": "[Deception](/03_Mechanics/CLI/skills.md#Deception)"
    "desc": "+7"
  - "name": "[Insight](/03_Mechanics/CLI/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "acid, poison"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "all; telepathy 120 ft."
"cr": "12"
"traits":
  - "desc": "If the arcanaloth dies outside Gehenna, its body dissolves into ichor,\
      \ and it gains a new body instantly and revives with all its [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ in Gehenna."
    "name": "Fiendish Restoration"
  - "desc": "The arcanaloth has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The arcanaloth has a magic tome. While holding or carrying the tome,\
      \ the arcanaloth can use its Banishing Claw action.\n\nThe tome has AC 17; HP\
      \ 35; and [Immunity](/03_Mechanics/CLI/variant-rules/immunity-xphb.md) to Necrotic,\
      \ Poison, and Psychic damage. The tome regains all its [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ at the end of every turn, but it turns to dust if reduced to 0 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ or when the arcanaloth dies. If the tome is destroyed, the arcanaloth can\
      \ create a new one when it finishes a [Short](/03_Mechanics/CLI/variant-rules/short-rest-xphb.md)\
      \ or [Long Rest](/03_Mechanics/CLI/variant-rules/long-rest-xphb.md)."
    "name": "Soul Tome"
"actions":
  - "desc": "The arcanaloth makes three Fiendish Burst attacks. It can replace one\
      \ attack with a Banishing Claw attack."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Attack Roll: +9, reach 5 ft. or range 120 ft. Hit:\
      \ 31 (4d12 + 5) Necrotic damage."
    "name": "Fiendish Burst"
  - "desc": "Melee Attack Roll: +9, reach 5 ft. Hit: 10 (2d4 + 5) Slashing damage\
      \ plus 19 (3d12) Psychic damage. If the target is a creature, it is subjected\
      \ to the following effect. Charisma Saving Throw: DC 17. Failure: The target\
      \ is trapped in a demiplane inside the Soul Tome. While trapped there, the target\
      \ has the [Incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated) condition.\
      \ At the end of each of its turns, the target repeats the save, escaping the\
      \ tome on a success. When the target escapes, it appears in the space it left\
      \ or, if that space is occupied, the nearest unoccupied space.\n\nIf the target\
      \ fails three of these saves while in the demiplane, it becomes bound to the\
      \ tome and can escape only if the tome is reduced to 0 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)."
    "name": "Banishing Claw (Requires Soul Tome)"
  - "desc": "The arcanaloth casts one of the following spells, requiring no Material\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 17):\n\nAt will: [Alter Self](/03_Mechanics/CLI/spells/alter-self-xphb.md),\
      \ [Detect Magic](/03_Mechanics/CLI/spells/detect-magic-xphb.md), [Identify](/03_Mechanics/CLI/spells/identify-xphb.md),\
      \ [Mage Hand](/03_Mechanics/CLI/spells/mage-hand-xphb.md), [Prestidigitation](/03_Mechanics/CLI/spells/prestidigitation-xphb.md)\n\
      \n1/day each: [Contact Other Plane](/03_Mechanics/CLI/spells/contact-other-plane-xphb.md),\
      \ [Detect Thoughts](/03_Mechanics/CLI/spells/detect-thoughts-xphb.md), [Dimension\
      \ Door](/03_Mechanics/CLI/spells/dimension-door-xphb.md), [Mind Blank](/03_Mechanics/CLI/spells/mind-blank-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The arcanaloth teleports up to 30 feet to an unoccupied space it can\
      \ see."
    "name": "Teleport"
"reactions":
  - "desc": "The arcanaloth casts [Counterspell](/03_Mechanics/CLI/spells/counterspell-xphb.md)\
      \ in response to that spell's trigger, using the same spellcasting ability as\
      \ Spellcasting.\n"
    "name": "Counterspell"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/arcanaloth-xmm.webp"
```
^statblock

## Environment

planar, lower

## Player-Facing Summary

Arcanaloth xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of arcanaloth xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around arcanaloth xmm.

## Adventure Hooks

- A rumor ties arcanaloth xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at arcanaloth xmm to avert a public scandal.
- A map overlay reveals a hidden approach to arcanaloth xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
