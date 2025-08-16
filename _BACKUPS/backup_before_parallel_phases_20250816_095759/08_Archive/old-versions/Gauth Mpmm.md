---

title: Gauth Mpmm
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # Gauth Mpmm ---

## Description

Detailed description pending.
title: Gauth Mpmm
aliases:
- Gauth

type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/compendium/src/5e/mpmm
- world/both
- research
- active
- ttrpg-cli/monster/cr/6
- status/in-progress
- status/archived

created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.611527+00:00'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-gauth-mpmm-gauth-mpmm.svg) # [[Gauth Mpmm

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 133, Volo's Guide to Monsters p. 125* A gauth is a hungry, tyrannical creature similar to a beholder that eats magic and tries to exact tribute from anything weaker than itself. Its body is about 4 feet in diameter, with six eyestalks, a central eye (sometimes surrounded by multiple smaller eyes), and four small grasping tentacles near its mouth. It has color and texture variations similar to a true beholder. A gauth can survive on meat but prefers to sustain itself with power drained from magic objects. If starved of magic for several weeks, it is forced back to its home plane, so it constantly seeks new items to drain. A gauth might employ creatures to bring it items that can provide it with sustece. When the ritual to summon a spectator goes wrong, a gauth might push itself through the flawed connection, arriving immediately or several minutes later. It might present itself as a beholder to ignorant creatures in an attempt to intimidate them, or as a spectator to its summoner in order to drain magic items it is expected to guard. A [beholder]] usually drives away or kills any gauths that enter its territory, but it might choose to force them to serve it as lieutets. Gauths are less xenophobic than beholders, so they might form small clusters and work together, though they're just as likely to ignore each other entirely.```statblock
"name": "Gauth (MPMM)"
"size": "Medium"
"type": "aberration"
"subtype": "beholder"
"alignment": "Typically Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "`dice: 7d8` + 21"
"modifier": !!int "2"
"stats": - !!int "10" - !!int "14" - !!int "16" - !!int "15" - !!int "13"
"speed": "0 ft., fly 20 ft. (hover)"
"saves": - "intelligence": !!int "5" - "wisdom": !!int "5" - "charisma": !!int "4"
"skillsaves": - "name": "[[skills#Perception|Perception" "desc": "+5"
"condition_immunities": "[conditions#prone|prone]]"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Deep Speech, Undercommon"
"cr": "6"
"traits": - "desc": "When a creature that can see the gauth's central eye starts its turn\ \ within 30 feet of the gauth, the gauth can force it to make a **DC 14** Wisdom\ \ saving throw if the gauth isn't [[conditions#Incapacitated|incapacitated\ \ and can see the creature. A creature that fails the save is [conditions#Stunned|stunned]]\ \ until the start of its next turn.\n\n Unless [[conditions#Surprised|surprised,\ \ a creature can avert its eyes at the start of its turn to avoid the saving\ \ throw. If the creature does so, it can't see the gauth until the start of\ \ its next turn, when it can avert its eyes again. If the creature looks at\ \ the gauth in the meantime, it must immediately make the save." "name": "Stunning Gaze" - "desc": "When the gauth dies, the magical energy within it explodes, and each\ \ creature within 10 feet of it must make a **DC 14** Dexterity saving throw, taking\ \ 13 (`dice: 3d8`) force damage on a failed save, or half as much damage on a successful\ \ one." "name": "Death Throes"
"actions": - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 9 (`dice: 2d8`)\ \ piercing damage." "name": "Bite" - "desc": "The gauth shoots three of the following magical eye rays at random (roll\ \ three d6s, and reroll duplicates), targeting one to three creatures it can\ \ see within 120 feet of it:\n\n- 1 Devour Magic Ray. The target must succeed\ \ on a **DC 14** Dexterity saving throw or have one of its magic items lose all\ \ magical properties until the start of the gauth's next turn. If the object\ \ is a charged item, it also loses d4 charges. Determine the affected item randomly,\ \ ignoring single-use items such as potions and scrolls. \n- 2 Enervation\ \ Ray. The target must make a **DC 14** Constitution saving throw, taking 18 (`dice: 4d8`)\ \ necrotic damage on a failed save, or half as much damage on a successful one.\ \ \n- 3 Fire Ray. The target must succeed on a **DC 14** Dexterity saving throw\ \ or take 22 (`dice: 4d10`) fire damage. \n- 4 Paralyzing Ray. The target must\ \ succeed on a **DC 14** Constitution saving throw or be [conditions#Paralyzed|paralyzed]]\ \ for 1 minute. The target can repeat the saving throw at the end of each of\ \ its turns, ending the effect on itself on a success. \n- 5 Pushing Ray.\ \ The target must succeed on a **DC 14** Strength saving throw or be pushed up to\ \ 15 feet away from the gauth and have its speed halved until the start of the\ \ gauth's next turn. \n- 6 Sleep Ray. The target must succeed on a **DC 14**\ \ Wisdom saving throw or fall asleep and remain [[conditions#Unconscious|unconscious\ \ for 1 minute. The target awakens if it takes damage or another creature takes\ \ an action to wake it. This ray has no effect on Constructs and Undead. " "name": "Eye Rays"
"source": - "MPMM" - "VGM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/gauth-mpmm.webp"```^statblock ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Environment underdark ## Player-Facing Summary Gauth mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of gauth mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around gauth mpmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## Related Notes - [Similar Topic 1]]

- [[Contrasting Approach
- [Advanced Version]]
- [[Historical Context ## 12_Research Specific Content Contextual improvement based on 12_Research ## References - [gauth-mpmm (aberration)]]

- [[3 Bestiary
- [3-bestiary (volos-guide-to-monsters)]]

## Notes

*Additional notes*
