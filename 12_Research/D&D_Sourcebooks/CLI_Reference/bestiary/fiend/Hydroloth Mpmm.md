---
aliases:
- Hydroloth
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
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/yugoloth
- world/both
type: monster
updated: '2025-08-13T12:34:05.791477+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-hydroloth-mpmm-hydroloth-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\fiend/hydroloth-mpmm|Hydroloth]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 158, Mordenkainen's Tome of Foes p. 249*  

Like the thought-stealing waters of the River Styx they inhabit, hydroloths filch the memories of creatures they attack, stealing away thoughts for delivery to whatever master they happen to serve. Hydroloths also savor finding lost things, especially those that have been swallowed up in the deeps.

For amphibious assaults or underwater conflicts, hydroloths have no equal among yugoloths. They sometimes hire themselves out to attack and scuttle ships and raid coastal settlements.

```statblock
"name": "Hydroloth (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Typically  Neutral Evil"
"ac": !!int "15"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "5"
"stats":
  - !!int "12"
  - !!int "21"
  - !!int "16"
  - !!int "19"
  - !!int "10"
  - !!int "14"
"speed": "20 ft., swim 40 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+4"
"damage_vulnerabilities": "fire"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "9"
"traits":
  - "desc": "The hydroloth can breathe air and water."
    "name": "Amphibious"
  - "desc": "The hydroloth has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The hydroloth is immune to the waters of the River Styx, as well as any\
      \ effect that would steal or modify its memories or detect or read its thoughts."
    "name": "Secure Memory"
  - "desc": "While submerged in liquid, the hydroloth has advantage on attack rolls."
    "name": "Watery Advantage"
"actions":
  - "desc": "The hydroloth makes two Bite or Claw attacks. It can replace one attack\
      \ with a use of Spellcasting."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 16\
      \ (2d10 + 5) force damage plus 9 (2d10) psychic damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target.  Hit: 14\
      \ (2d8 + 5) force damage plus 9 (2d10) psychic damage."
    "name": "Claw"
  - "desc": "The hydroloth targets one creature it can see within 60 feet of it. The\
      \ target takes 14 (4d6) psychic damage, and it must make a DC 16 Intelligence\
      \ saving throw. On a successful save, the target becomes immune to this hydroloth's\
      \ Steal Memory for 24 hours. On a failed save, the target loses all proficiencies;\
      \ it can't cast spells; it can't understand language; and if its Intelligence\
      \ and Charisma scores are higher than 5, they become 5. Each time the target\
      \ finishes a long rest, it can repeat the saving throw, ending the effect on\
      \ itself on a success. A [[/03_Mechanics/CLI/spells/greater-restoration-xphb|greater restoration]]\
      \ or [[/03_Mechanics/CLI/spells/remove-curse-xphb|remove curse]] spell cast\
      \ on the target ends this effect early."
    "name": "Steal Memory (1/Day)"
  - "desc": "The hydroloth teleports, along with any equipment it is wearing or carrying,\
      \ up to 60 feet to an unoccupied space it can see."
    "name": "Teleport"
  - "desc": "The hydroloth casts one of the following spells, requiring no material\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 16):\n\nAt will: [[/03_Mechanics/CLI/spells/darkness-xphb|darkness]],\
      \ [[/03_Mechanics/CLI/spells/detect-magic-xphb|detect magic]], [[/03_Mechanics/CLI/spells/dispel-magic-xphb|dispel magic]],\
      \ [[/03_Mechanics/CLI/spells/invisibility-xphb|invisibility]] (self only)\n\
      \n3/day each: [[/03_Mechanics/CLI/spells/control-water-xphb|control water]],\
      \ [[/03_Mechanics/CLI/spells/crown-of-madness-xphb|crown of madness]], [[/03_Mechanics/CLI/spells/fear-xphb|fear]],\
      \ [[/03_Mechanics/CLI/spells/suggestion-xphb|suggestion]]"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/hydroloth-mpmm.webp"
```
^statblock

## Player-Facing Summary

Hydroloth mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of hydroloth mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around hydroloth mpmm.

## Adventure Hooks

- A rumor ties hydroloth mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at hydroloth mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to hydroloth mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
