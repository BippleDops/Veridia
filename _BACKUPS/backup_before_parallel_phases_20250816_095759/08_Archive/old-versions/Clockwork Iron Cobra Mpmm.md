---

title: Clockwork Iron Cobra Mpmm
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # Clockwork Iron Cobra Mpmm ---

## Description

Detailed description pending.
title: Clockwork Iron Cobra Mpmm
aliases:
- Clockwork Iron Cobra

type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- ttrpg-cli/monster/environment/hill
- world/surface
- ttrpg-cli/monster/cr/4
- monster
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/type/construct
- ttrpg-cli/compendium/src/5e/mpmm
- world/both
- research
- active
- ttrpg-cli/monster/environment/forest
- status/in-progress

created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:06.079952+00:00'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-clockwork-iron-cobra-mpmm-clockwork-iron-cobra-mpmm.svg) # [[clockwork-iron-cobra-mpmm (construct)]]

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 79, Mordenkainen's Tome of Foes p. 125* An iron cobra is exactly what its name implies: a metal snake with a poisonous bite. Gnomes load this clockwork with alchemical concoctions that can paralyze creatures and cloud the mind. ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Clockworks Gnomes' tinkering with magic and mechanical devices has produced many failed Constructs but also has resulted in genuine advances, such as clockworks. The methods used to craft clockworks have been shared between gnome communities over many generations. ### Individual Designs Gnome artisans prefer unique clockworks over perfectly functioning ones that copy too much from other creations. A clockwork can be customized by adding one of the following enhancements and one potential malfunction to its stat block. You can select randomly or choose a pair of modifications that fit the temperament of the clockwork's builder. **Clockwork Enhancements**`dice: [](clockwork-iron-cobra-mpmm.md#^clockwork-enhancements)`| dice: d10 | Enhancement |

|-----------|-------------|
| 1 | **Camouflaged.** The clockwork gains proficiency in [[skills#Stealth|Stealth if it lacks that proficiency. While motionless, it is indistinguishable from a stopped machine. |
| 2 | **Sensors.** The range of the clockwork's [senses#Darkvision|darkvision]] increases by 60 feet, and it gains proficiency in [[skills#Perception|Perception]] if it lacks that proficiency. |
| 3 | **Fortified.** The clockwork's AC increases by 2. |
| 4 | **Increased Speed.** The clockwork's speed increases by 10 feet. |
| 5 | **Reinforced Construction.** The clockwork has resistance to force, lightning, and thunder damage. |
| 6 | **Self-Repairing.** If the clockwork starts its turn with fewer than half its hit points but at least 1 hit point, it regains 5 hit points. If it takes lightning damage, this ability doesn't function at the start of its next turn. |
| 7 | **Sturdy Frame.** The clockwork's hit point maximum increases by an amount equal to its number of Hit Dice. |
| 8 | **Suction.** The clockwork gains a climbing speed of 30 feet. |
| 9 | **Vocal Resonator.** The clockwork gains the ability to speak rudimentary Common or Gnomish. |
| 10 | **Water Propulsion.** The clockwork gains a swimming speed of 30 feet. |

^clockwork-enhancements **Clockwork Malfunctions**`dice: [](clockwork-iron-cobra-mpmm.md#^clockwork-malfunctions)`| dice: d8 | Malfunction |
|----------|-------------|
| 1 | **Faulty Sensors.** Roll a`d6`at the start of the clock work's turn. If you roll a 1, the clockwork is [[conditions#Blinded|blinded until the end of its turn. |
| 2 | **Flawed Targeting.** Roll a`d6`at the start of the clock work's turn. If you roll a 1, the clockwork makes attack rolls with disadvantage until the end of its turn. |
| 3 | **Ground Fault.** The clockwork has vulnerability to lightning damage. |
| 4 | **Imprinting Loop.** Roll a`d6`at the start of the clock work's turn. If you roll a 1, the clockwork mistakes one creature it can see within 30 feet for its creator. The clockwork won't willingly harm that creature for 1 minute or until that creature attacks or dam ages it. |
| 5 | **Limited Steering.** The clockwork must move in a straight line. It can turn up to 90 degrees before moving and again at the midpoint of its movement. It can rotate freely if it doesn't use any of its speeds on its turn. |
| 6 | **Overactive Sense of Self-Preservation.** If the clock work has half its hit points or fewer at the start of its turn in combat, roll a`d6`. If you roll a 1, it retreats from combat if possible. It otherwise keeps fighting. |
| 7 | **Overheats.** Roll a`d6`at the start of the clockwork's turn. If you roll a 1, the clockwork is [conditions#Incapacitated|incapacitated]] until the end of its turn. |
| 8 | **Rusty Gears.** The clockwork has disadvantage on initiative rolls, and its speed decreases by 10 feet. |

^clockwork-malfunctions```statblock
"name": "Clockwork Iron Cobra (MPMM)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "91"
"hit_dice": "`dice: 14d8` + 28"
"modifier": !!int "3"
"stats": - !!int "12" - !!int "16" - !!int "14" - !!int "3" - !!int "10" - !!int "1"
"speed": "30 ft."
"skillsaves": - "name": "[[skills#Stealth|Stealth" "desc": "+7"
"damage_immunities": "poison"
"condition_immunities": "[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion,\ \ [conditions#frightened|frightened]], [[conditions#Paralyzed|paralyzed,\ \ [conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands one language of its creator but can't speak"
"cr": "4"
"traits": - "desc": "The clockwork has advantage on saving throws against spells and other\ \ magical effects." "name": "Magic Resistance" - "desc": "The clockwork doesn't require air, food, drink, or sleep." "name": "Unusual Nature"
"actions": - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (`dice: 1d6`\ \ + 3) piercing damage. If the target is a creature, it must succeed on a DC\ \ 13 Constitution saving throw or suffer one random effect (roll a d6):\n\n\ - 1–2 Confusion. On its next turn, the target must use its action to make\ \ one weapon attack against a random creature it can see within 30 feet of it,\ \ using whatever weapon it has in hand and moving beforehand if necessary to\ \ get in range. If it's holding no weapon, it makes an unarmed strike. If no\ \ creature is visible within 30 feet, it takes the [actions#Dash|Dash]]\ \ action, moving toward the nearest creature. \n- 3–4 Paralysis. The target\ \ is [[conditions#Paralyzed|paralyzed]] until the end of\ \ its next turn. \n- 5–6 Poison. The target takes 13 (`dice: 3d8`) poison damage.\ \ " "name": "Bite"
"source": - "MPMM" - "MTF"
"image": "/03_Mechanics/CLI/bestiary/construct/token/clockwork-iron-cobra-mpmm.webp"```^statblock ## Environment forest, grassland, hill, mountain ## Player-Facing Summary Clockwork iron cobra mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of clockwork iron cobra mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around clockwork iron cobra mpmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## 12_Research Specific Content Contextual improvement based on 12_Research

## Notes

*Additional notes*
