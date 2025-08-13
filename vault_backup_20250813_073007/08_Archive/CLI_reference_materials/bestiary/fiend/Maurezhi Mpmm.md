---
aliases:
- Maurezhi
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
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
- world/both
type: monster
updated: '2025-08-13T12:34:19.992346+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-maurezhi-mpmm-maurezhi-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\fiend/maurezhi-mpmm|Maurezhi]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 175, Mordenkainen's Tome of Foes p. 133*  

When Doresain, the King of Ghouls, corrupted a society of elves, he created a new sort of demon—the maurezhi—to lead packs of [[/03_Mechanics/CLI/bestiary/undead/ghoul-xmm|ghouls]] and [[/03_Mechanics/CLI/bestiary/undead/ghast-xmm|ghasts]] on the Material Plane.

When a maurezhi consumes the corpse of a Humanoid it has slain—a process that takes about 10 minutes—it instantly assumes the creature's appearance as it was in life. The new appearance begins to rot away over the next few days, eventually revealing the demon's original form.

A maurezhi is contagion incarnate. Its bite can drain a victim's sense of self. If this affliction is allowed to go far enough, the victim is infected with an unholy hunger for flesh that overpowers their personality and transforms them into a ghoul.

```statblock
"name": "Maurezhi (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "17"
  - !!int "12"
  - !!int "11"
  - !!int "12"
  - !!int "15"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Deception|Deception]]"
    "desc": "+5"
"damage_resistances": "cold; fire; lightning; necrotic; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, Elvish, telepathy 120 ft."
"cr": "7"
"traits":
  - "desc": "The maurezhi can assume the appearance of any Medium Humanoid it eats.\
      \ It remains in this form for d6 days, during which time the form gradually\
      \ decays until, when the effect ends, the form sloughs from the demon's body."
    "name": "Assume Form"
  - "desc": "The maurezhi has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The maurezhi makes one Bite attack and one Claw attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14\
      \ (2d10 + 3) piercing damage. If the target is a Humanoid, its Charisma score\
      \ is reduced by d4. This reduction lasts until the target finishes a short or\
      \ long rest. The target dies if this reduces its Charisma to 0. It rises 24\
      \ hours later as a [[/03_Mechanics/CLI/bestiary/undead/ghoul-xmm|ghoul]]  unless\
      \ it has been revived or its corpse has been destroyed."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12\
      \ (2d8 + 3) slashing damage. If the target is a creature other than an Undead,\
      \ it must succeed on a DC 12 Constitution saving throw or be [[/03_Mechanics/CLI/conditions#Paralyzed|paralyzed]]\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Claw"
  - "desc": "The maurezhi targets one dead ghoul or [[/03_Mechanics/CLI/bestiary/undead/ghast-xmm|ghast]]\
      \ it can see within 30 feet of it. The target is revived with all its hit points."
    "name": "Raise Ghoul (Recharge 5-6)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/maurezhi-mpmm.webp"
```
^statblock

## Environment

swamp, urban

## Player-Facing Summary

Maurezhi mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of maurezhi mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around maurezhi mpmm.

## Adventure Hooks

- A rumor ties maurezhi mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at maurezhi mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to maurezhi mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
