---

title: Boggle Mpmm
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # Boggle Mpmm ---

## Description

Detailed description pending.
title: Boggle Mpmm
aliases:
- Boggle

type: monster
tags:
- both
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/compendium/src/5e/mpmm
- world/both
- research
- active
- ttrpg-cli/monster/type/fey
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/cr/1-8
- status/in-progress
- ttrpg-cli/monster/size/small

created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.516092+00:00'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-boggle-mpmm-boggle-mpmm.svg) # [[boggle-mpmm (fey)]]

*Source: Mordenkainen Presents: Monsters of the Multiverse p. 65, Volo's Guide to Monsters p. 128* Boggles are the little bogeys of fairy tales. They lurk in the fringes of the Feywild and are also found on the Material Plane, where they hide under beds and in closets, waiting to frighten and bedevil folk with their mischief. Boggles are born out of feelings of loneliness. They materialize when a sapient being feels isolated or abandoned near a place where the Feywild touches the world. For example, a forsaken child might unintentionally conjure a boggle and see them as a sort of imaginary friend. A boggle might also appear in the attic of a lonely widower's house or in a hermit's cave. Boggles engage in petty pranks to amuse themselves, using the oil they excrete to cause trouble. A boggle also isn't above breaking dishes, hiding tools, startling cows to decrease their milk, or hiding a baby in an attic. Although a boggle's antics might cause distress and unintentional harm, mischief—not mayhem—is usually the intent. If threatened, a boggle flees rather than stand and fight. A boggle can create magical openings to travel short distances or to pilfer items that would otherwise be beyond its reach. To create such a rift in space, a boggle must be adjacent to a space defined by a frame, such as an open window or a doorway, a gap between the bars of a cage, or the opening between the feet of a bed and the floor. The rift is [[conditions#Invisible|invisible]] and disappears after a few seconds—just enough time for the boggle to step, reach, or attack through it.```statblock
"name": "Boggle (MPMM)"
"size": "Small"
"type": "fey"
"alignment": "Typically Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"modifier": !!int "4"
"stats": - !!int "8" - !!int "18" - !!int "13" - !!int "6" - !!int "12" - !!int "7"
"speed": "30 ft., climb 30 ft."
"skillsaves": - "name": "[[skills#Perception|Perception]]" "desc": "+5" - "name": "[[skills#Sleight%20of%20Hand|Sleight of Hand]]" "desc": "+6" - "name": "[[skills#Stealth|Stealth]]"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Sylvan"
"cr": "1/8"
"actions": - "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6\ \ - 1) bludgeoning damage." "name": "Pummel" - "desc": "The boggle creates a puddle of nonflammable oil. The puddle is 1 inch\ \ deep and covers the ground in the boggle's space. The puddle is difficult\ \ terrain for all creatures except boggles and lasts for 1 hour. The oil has\ \ one of the following additional effects of the boggle's choice:\n\n- Slippery\ \ Oil. Any non-boggle creature that enters the puddle or starts its turn there\ \ must succeed on a DC 11 Dexterity saving throw or fall [[conditions#prone|prone]].\ \ \n- Sticky Oil. Any non-boggle creature that enters the puddle or starts\ \ its turn there must succeed on a DC 11 Strength saving throw or be [[conditions#Restrained|restrained]].\ \ On its turn, a creature can use an action to try to extricate itself, ending\ \ the effect and moving into the nearest unoccupied space of its choice with\ \ a successful DC 11 Strength check. " "name": "Oil Puddle"
"bonus_actions": - "desc": "The boggle excretes nonflammable oil from its pores, giving itself one\ \ of the following benefits of its choice until it uses this bonus action again:\n\ \n- Slippery Oil. The boggle has advantage on Dexterity ([[skills#Acrobatics|Acrobatics]])\ \ checks made to escape bonds and end grapples, and it can move through openings\ \ large enough for a Tiny creature without squeezing. \n- Sticky Oil. The\ \ boggle has advantage on Strength ([[skills#Athletics|Athletics]])\ \ checks made to grapple and any ability check made to maintain a hold on another\ \ creature, a surface, or an object. The boggle can also climb difficult surfaces,\ \ including upside down on ceilings, without needing to make an ability check.\ \ " "name": "Boggle Oil" - "desc": "The boggle creates an [[conditions#Invisible|invisible]]\ \ and immobile rift within an opening or frame it can see within 5 feet of it,\ \ provided that the space is no bigger than 10 feet on any side. The dimensional\ \ rift bridges the distance between that space and a point within 30 feet of\ \ it that the boggle can see or specify by distance and direction (such as \"\ 30 feet straight up\"). While next to the rift, the boggle can see through it\ \ and is considered to be next to the destination as well, and anything the\ \ boggle puts through the rift (including a portion of its body) emerges at\ \ the destination. Only the boggle can use the rift, and it lasts until the\ \ end of the boggle's next turn." "name": "Dimensional Rift"
"source": - "MPMM" - "VGM"
"image": "/03_Mechanics/CLI/bestiary/fey/token/boggle-mpmm.webp"```^statblock ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Environment forest, hill, underdark, urban ## Player-Facing Summary Boggle mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of boggle mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around boggle mpmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## Plot Hooks - A letter reveals ancient history about this place

- A merchant needs help delivering before the new moon
- A document has gone missing and war looms ## Related Notes - [[Similar Topic 1]]

- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]] ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research


## Notes

*Additional notes*
