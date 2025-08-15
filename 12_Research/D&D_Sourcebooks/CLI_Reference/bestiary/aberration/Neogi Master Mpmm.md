---

title: Neogi Master Mpmm
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # Neogi Master Mpmm ---

## Description

Detailed description pending.
title: Neogi Master Mpmm
aliases:
- Neogi Master

type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/cr/4
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/type/aberration/warlock
- ttrpg-cli/compendium/src/5e/mpmm
- world/both
- research
- active
- status/in-progress

created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.615286+00:00'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-neogi-master-mpmm-neogi-master-mpmm.svg) # [[neogi-master-mpmm (aberration)]]

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 192, Volo's Guide to Monsters p. 180* Neogi masters use magic, as a result of a pact between neogi and aberrant entities they met during their journey from their home world. These entities—known by such names as Acamar, Caiphon, Gibbeth, and Hadar—resemble stars and embody the essence of evil. ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Neogi > [!quote] A quote from Mordenkainen > > Only the malevolent or the desperate do business with neogi. I generally advise against working with beings who view you as property or prey. A neogi looks like an outsize spider with an eel's neck and head. It can poison the body and the mind of its targets and can subjugate even beings that are physically superior. Neogi usually dwell in far-flung locations on the Material Plane, as well as in the Astral Plane and the Ethereal Plane. They left their home world long ago to conquer and devour creatures in other realms. During this era, they dominated umber hulks and used them to build sleek, spidery ships capable of traversing the multiverse.```statblock

"name": "Neogi Master (MPMM)"
"size": "Medium"
"type": "aberration"
"subtype": "warlock"
"alignment": "Typically Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "3"
"stats": - !!int "6" - !!int "16" - !!int "14" - !!int "12" - !!int "18"
"speed": "30 ft., climb 30 ft."
"saves": - "wisdom": !!int "3"
"skillsaves": - "name": "[[skills#Arcana|Arcana]]" "desc": "+5" - "name": "[[skills#Deception|Deception]]" "desc": "+6" - "name": "[[skills#Intimidation|Intimidation]]" - "name": "[[skills#Perception|Perception]]" "desc": "+3" - "name": "[[skills#Persuasion|Persuasion]]"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Common, Deep Speech, Undercommon, telepathy 30 ft."
"cr": "4"
"traits": - "desc": "Magical darkness doesn't impede the neogi's [[senses#Darkvision|darkvision]]." "name": "Devil's Sight" - "desc": "The neogi has advantage on saving throws against being [[conditions#Charmed|charmed]]\ \ or [[conditions#frightened|frightened]], and magic can't\ \ put the neogi to sleep." "name": "Mental Fortitude" - "desc": "The neogi can climb difficult surfaces, including upside down on ceilings,\ \ without needing to make an ability check." "name": "Spider Climb"
"actions": - "desc": "The neogi makes one Bite attack and one Claw attack, or it makes two\ \ Tentacle of Hadar attacks." "name": "Multiattack" - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\ \ + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed\ \ on a DC 12 Constitution saving throw or become [[conditions#Poisoned|poisoned]]\ \ for 1 minute. A target can repeat the saving throw at the end of each of its\ \ turns, ending the effect on itself on a success." "name": "Bite" - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\ \ + 3) piercing damage." "name": "Claw" - "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 14\ \ (3d6 + 4) necrotic damage, and the target can't take reactions until the end\ \ of the neogi's next turn, as a spectral tentacle clings to the target." "name": "Tentacle of Hadar" - "desc": "The neogi casts one of the following spells, using Charisma as the spellcasting\ \ ability (spell save DC 14):\n\n At will: [[guidance-xphb (spells)]],\ \ [[mage-hand-xphb (spells)]], [[Minor Illusion Xphb]],\ \ [[Prestidigitation Xphb]]\n\n1/day\ \ each: [[Dimension Door Xphb]],\ \ [[Hold Person Xphb]], [[hunger-of-hadar-xphb (spells)]]" "name": "Spellcasting"
"bonus_actions": - "desc": "The neogi targets one creature it can see within 30 feet of it. The target\ \ must succeed on a DC 14 Wisdom saving throw or be magically [[conditions#Charmed|charmed]]\ \ by the neogi for 1 day, or until the neogi dies or is more than 1 mile from\ \ the target. The [[conditions#Charmed|charmed]] target obeys\ \ the neogi's commands and can't take reactions, and the neogi and the target\ \ can communicate telepathically with each other at a distance of up to 1 mile.\ \ Whenever the [[conditions#Charmed|charmed]] target takes\ \ damage, it can repeat the saving throw, ending the effect on itself on a success." "name": "Enslave (Recharges after a Short or Long Rest)"
"source": - "MPMM" - "VGM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/neogi-master-mpmm.webp"```^statblock ## Environment hill, underdark ## Player-Facing Summary Neogi master mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of neogi master mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around neogi master mpmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## Secret Connections *[Hidden from players]* Connected to The Veiled Alliance - Manipulate succession ## Plot Hooks - Strange accidents suggest a conspiracy

- Strange disappearances suggest ancient magic
- The authorities needs help delivering before the new moon
- A letter reveals a conspiracy about the government ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research


## Notes

*Additional notes*
