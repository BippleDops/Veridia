---

title: Adult Brass Dragon Xmm
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # Adult Brass Dragon Xmm ---

## Description

Detailed description pending.
title: Adult Brass Dragon Xmm
aliases:
- Adult Brass Dragon

type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/cr/13
- monster
- research
- world/both
- active
- ttrpg-cli/monster/type/dragon/metallic
- status/in-progress
- ttrpg-cli/monster/environment/desert

created: modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.999907+00:00'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-adult-brass-dragon-xmm-adult-brass-dragon-xmm.svg) # [[Brass Dragon

*Source: Monster Manual (2024) p. 55. Available in the SRD and the Free Rules (2024)* Adult brass dragons know many secrets and have vast networks of contacts. These dragons share perspectives they've learned from across the world and passionately combat the lies of con artists and villains that lead people astray. ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Brass Dragons *Dragons of Lore and Rapport* - **Habitat.** Desert - **Treasure.** Arcana Gregarious and outgoing, brass dragons relish sharing knowledge and stories. Although these metallic dragons favor arid lands, they cheerfully journey considerable distances to visit friendly creatures, pass on what they've learned, and collect news. Though good natured, brass dragons don't shirk from combat when necessary, thwarting foes with magical sleep and searing them with flame. Brass dragons favor warm climes, particularly steppes and rocky or sandy deserts, and they usually dwell near prominent crossroads or oases that regularly draw visitors. They enjoy adopting Humanoid forms, disguising themselves as traveling merchants, scholars, storytellers, or anyone else invested in others' stories. Brass dragons collect eclectic objects. While such items might seem like knickknacks, each is part of a story—perhaps a nostalgic memento or evidence of a tale passed into myth. An old friend's hat and the crown of the last ruler of a forgotten dynasty could occupy the same shelf in a brass dragon's hoard. ### Brass Dragon Lairs Brass dragons usually dwell in secret caves and canyons near well-traveled routes.```statblock

"name": "Adult Brass Dragon (XMM)"
"size": "Huge"
"type": "dragon"
"subtype": "metallic"
"alignment": "Chaotic Good"
"ac": !!int "18"
"hp": !!int "172"
"hit_dice": "`dice: 15d12` + 75"
"modifier": !!int "10"
"stats": - !!int "23" - !!int "10" - !!int "21" - !!int "14" - !!int "13" - !!int "17"
"speed": "40 ft., burrow 30 ft., fly 80 ft."
"saves": - "dexterity": !!int "5" - "wisdom": !!int "6"
"skillsaves": - "name": "[skills#History|History]]" "desc": "+7" - "name": "[[skills#Perception|Perception" "desc": "+11" - "name": "[skills#Persuasion|Persuasion]]" "desc": "+8" - "name": "[[skills#Stealth|Stealth" "desc": "+5"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "13"
"traits": - "desc": "If the dragon fails a saving throw, it can choose to succeed instead." "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions": - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\ \ use of (A) Sleep Breath or (B) Spellcasting to cast [Scorching Ray Xphb]]." "name": "Multiattack" - "desc": "Melee Attack Roll: +11, reach 10 ft. Hit: 17 (`dice: 2d10` + 6) Slashing\ \ damage plus 4 (d8) Fire damage." "name": "Rend" - "desc": "Dexterity Saving Throw: **DC 18**, each creature in a 60-foot-long, 5-foot-wide\ \ [[Area of Effect Xphb. Failure:\ \ 45 (`dice: 10d8`) Fire damage. Success: Half damage." "name": "Fire Breath (Recharge 5-6)" - "desc": "Constitution Saving Throw: **DC 18**, each creature in a 60-foot [Area of Effect Xphb]].\ \ Failure: The target has the [[conditions#Incapacitated|Incapacitated\ \ condition until the end of its next turn, at which point it repeats the save.\ \ 2nd Failure: The target has the [conditions#Unconscious|Unconscious]]\ \ condition for 10 minutes. This effect ends for the target if it takes damage\ \ or a creature within 5 feet of it takes an action to wake it." "name": "Sleep Breath" - "desc": "The dragon casts one of the following spells, requiring no Material components\ \ and using Charisma as the spellcasting ability (spell save **DC 16**):\n\n At\ \ will: [[detect-magic-xphb (spells), [Minor Illusion Xphb]] \ Illusion]], [[Scorching Ray Xphb,\ \ [Shapechange Xphb]] (Beast or Humanoid\ \ form only, no [[temporary-hit-points-xphb (variant-rules)\ \ gained from the spell, and no Concentration or [temporary-hit-points-xphb (variant-rules)]]\ \ required to maintain the spell), [[Speak With Animals Xphb\n\ \n1/day each: [detect-thoughts-xphb (spells)]],\ \ [[weather" "name": "Spellcasting"
"legendary_actions": - "desc": "The dragon uses Spellcasting to cast [Scorching Ray Xphb]]." "name": "Blazing Light" - "desc": "The dragon moves up to half its [[Fly Speed Xphb,\ \ and it makes one Rend attack." "name": "Pounce" - "desc": "Dexterity Saving Throw: **DC 16**, one creature the dragon can see within\ \ 120 feet. Failure: 27 (`dice: 6d8`) Fire damage, and the target's [Fly Speed Xphb]]\ \ is halved until the end of its next turn. Failure or Success: The dragon\ \ can't take this action again until the start of its next turn." "name": "Scorching Sands"
"regional_effects": - "desc": "The area containing an adult or ancient brass dragon's lair is altered\ \ by its presence, creating the following effects:" "name": "" - "desc": "- Mirages. While in its lair, the dragon can cast [[Major Image Xphb,\ \ requiring no Material components and using the same spellcasting ability as\ \ its Spellcasting action. When casting the spell this way, the spell's range\ \ is 1 mile, and the dragon doesn't need to see the spot where the illusion\ \ appears. \n- Refreshing Water. Water within 1 mile of the lair is magically\ \ refreshing. A creature that drinks such water gains `dice: 2d4` [temporary-hit-points-xphb (variant-rules)]],\ \ and the dragon is immediately aware of the creature's presence. " - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
"source": - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/adult-brass-dragon-xmm.webp"```^statblock ## Environment desert ## Player-Facing Summary Adult brass dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of adult brass dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around adult brass dragon xmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## Plot Hooks - An heirloom has gone missing and war looms

- Someone is blackmailing an heir for love
- A document has gone missing and evil awakens ## Related Notes - [[Similar Topic 1

- [Contrasting Approach]]
- [[Advanced Version
- [Historical Context]] ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research

## Notes

*Additional notes*
