---
aliases:
- Vampire Umbral Lord
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/undead
- world/both
type: monster
updated: '2025-08-12T23:37:35.650358'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-vampire-umbral-lord-xmm-v1-vampire-umbral-lord-xmm.svg)

# [[3-Mechanics\CLI\bestiary\undead/vampire-umbral-lord-xmm|Vampire Umbral Lord]]
*Source: Monster Manual (2024) p. 318*  

Vampire umbral lords embrace their ties to the darkness, devoting themselves to sinister powers in exchange for access to forbidden magic.

## Vampires

*Blood-Sucking Lords of the Night*

- **Habitat.** Underdark, Urban  
- **Treasure.** Any  

Vampires disguise their accursed, immortal natures, passing as mortals to feed on the blood of the living. While the youngest vampires might be little more than bloodthirsty servants of their creators, the eldest possess incredible cunning and control over supernatural forces of the night.

Undead vampires lie dormant during the day, retreating to resting places hidden from foes and the sun's searing rays. Roll on or choose a result from the Vampire Resting Places table to inspire a vampire's grim sanctuary.

**Vampire Resting Places**

`dice: [](vampire-umbral-lord-xmm.md#^vampire-resting-places)`

| dice: 1d6 | The Vampire's Resting Place Is... |
|-----------|-----------------------------------|
| 1 | Among the roots of a dead tree. |
| 2 | At the bottom of a stagnant pool. |
| 3 | A coffin filled with grave dirt. |
| 4 | A large pot full of blood or vinegar. |
| 5 | A space accessible only by shape-shifting. |
| 6 | Within a statue or suit of armor. |
^vampire-resting-places

### Vampire Lairs

Vampires and vampire umbral lords create sanctuaries apart from the living, whether hidden in cosmopolitan cities or sequestered in ruins where they dwelled in life.

> [!quote] A quote from Astarion, Vampire Spawn  
> 
> Darling, you are simply delicious...


```statblock
"name": "Vampire Umbral Lord (XMM)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "187"
"hit_dice": "22d8 + 88"
"modifier": !!int "14"
"stats":
  - !!int "20"
  - !!int "18"
  - !!int "18"
  - !!int "19"
  - !!int "16"
  - !!int "21"
"speed": "40 ft., climb 40 ft., fly 40 ft. (hover)"
"saves":
  - "strength": !!int "10"
  - "dexterity": !!int "9"
  - "wisdom": !!int "8"
  - "charisma": !!int "10"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Arcana|Arcana]]"
    "desc": "+9"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+13"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+9"
"damage_immunities": "cold, necrotic"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]]"
"senses": "blindsight 120 ft., passive Perception 23"
"languages": "Common plus three other languages"
"cr": "15"
"traits":
  - "desc": "If the vampire fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
  - "desc": "If the vampire drops to 0 [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ outside its resting place, it teleports into its resting place unless it is\
      \ in running water or sunlight. If it can't teleport, it is destroyed. Once\
      \ inside its resting place, it has the [[/03_Mechanics/CLI/conditions#Paralyzed|Paralyzed]]\
      \ condition for 1 hour, after which it regains 1 [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Point]]."
    "name": "Shadow Escape"
  - "desc": "The vampire has these weaknesses:\n\n- Forbiddance. The vampire can't\
      \ enter a residence without an invitation from an occupant.  \n- Running Water.\
      \ The vampire takes 20 Acid damage if it ends its turn in running water.  \n\
      - Stake to the Heart. If a weapon that deals Piercing damage is driven into\
      \ the vampire's heart while the vampire has the [[/03_Mechanics/CLI/conditions#Incapacitated|Incapacitated]]\
      \ condition in its resting place, the vampire has the [[/03_Mechanics/CLI/conditions#Paralyzed|Paralyzed]]\
      \ condition until the weapon is removed.  \n- Sunlight. The vampire takes\
      \ 20 Radiant damage if it starts its turn in sunlight. While in sunlight, it\
      \ has [[/03_Mechanics/CLI/variant-rules/disadvantage-xphb|Disadvantage]] on\
      \ attack rolls and ability checks.  "
    "name": "Vampire Weakness"
"actions":
  - "desc": "The vampire makes two attacks, using Grave Strike or Sickening Ray in\
      \ any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +10, reach 5 ft. Hit: 9 (1d8 + 5) Slashing damage\
      \ plus 13 (3d8) Necrotic damage."
    "name": "Grave Strike"
  - "desc": "Ranged Attack Roll: +10, range 120 ft. Hit: 16 (2d10 + 5) Necrotic\
      \ damage, and the target has the [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]]\
      \ condition until the start of the vampire's next turn."
    "name": "Sickening Ray"
  - "desc": "The vampire casts [[/03_Mechanics/CLI/spells/hunger-of-hadar-xphb|Hunger of Hadar]]\
      \ (level 5 version), requiring no spell components and using Charisma as the\
      \ spellcasting ability (spell save DC 18).\n"
    "name": "Hunger of Hadar (Recharge 5-6)"
"bonus_actions":
  - "desc": "Constitution Saving Throw: DC 18, one creature the vampire can see\
      \ within 30 feet that isn't a Construct or an Undead. Failure: 14 (4d6) Necrotic\
      \ damage. The target's [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Point]]\
      \ maximum decreases by an amount equal to the damage taken, and the vampire\
      \ regains [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]] equal\
      \ to that amount."
    "name": "Sanguine Drain"
"legendary_actions":
  - "desc": "The vampire moves up to half its [[/03_Mechanics/CLI/variant-rules/speed-xphb|Speed]],\
      \ and it makes one Grave Strike or Sickening Ray attack."
    "name": "Umbral Strike"
  - "desc": "The vampire casts [[/03_Mechanics/CLI/spells/command-xphb|Command]],\
      \ requiring no spell components and using Charisma as the spellcasting ability\
      \ (spell save DC 18). The vampire can't take this action again until the start\
      \ of its next turn.\n"
    "name": "Beguile"
"regional_effects":
  - "desc": "The region containing a vampire's lair is warped by its presence, creating\
      \ the following effects:"
    "name": ""
  - "desc": "- Children of the Night. The vampire exerts influence over the animals\
      \ in its domain. From dusk until dawn, Medium or smaller Beasts have the [[/03_Mechanics/CLI/conditions#Charmed|Charmed]]\
      \ condition while within 1 mile of the lair.  \n- Looming Shadows. Shadows\
      \ within 1 mile of the lair seem to move as if alive. Any creature (excluding\
      \ the vampire and its allies) that finishes a [[/03_Mechanics/CLI/variant-rules/short-rest-xphb|Short Rest]]\
      \ while within 1 mile of the lair must succeed on a DC 15 Wisdom saving throw\
      \ or gain no benefit from that rest.  \n- Mists. The area within 1 mile\
      \ of the lair is [[/03_Mechanics/CLI/variant-rules/lightly-obscured-xphb|Lightly Obscured]]\
      \ by a persistent, creeping fog. The vampire and any creatures of its choice\
      \ are unaffected by the fog.  "
    "name": ""
  - "desc": "If the vampire dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/vampire-umbral-lord-xmm.webp"
```
^statblock

## Environment

underdark, urban

## Player-Facing Summary

Vampire umbral lord xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of vampire umbral lord xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around vampire umbral lord xmm.

## Adventure Hooks

- A rumor ties vampire umbral lord xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at vampire umbral lord xmm to avert a public scandal.
- A map overlay reveals a hidden approach to vampire umbral lord xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
