---

title: ancient-bronze-dragon-xmm (dragon)
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # ancient-bronze-dragon-xmm ---

## Description

Detailed description pending.
title: ancient bronze dragon xmm
aliases:
- Ancient Bronze Dragon

type: monster
tags:
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/gargantuan
- monster
- research
- world/both
- active
- ttrpg-cli/monster/type/dragon/metallic
- status/in-progress
- ttrpg-cli/monster/cr/22

created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.772891'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ancient-bronze-dragon-xmm-ancient-bronze-dragon-xmm.svg) # [[Bronze Dragon Xmm]]

*Source: Monster Manual (2024) p. 60. Available in the SRD and the Free Rules (2024)* Ancient bronze dragons develop dramatic patinas on their glimmering scales. These dragons strive to protect whole regions, continents, or planets from threats. They seek solutions to planes-spanning calamities or multiversal perils and oppose the evil of mighty chromatic dragons. ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Bronze Dragons *Dragons of Potential and Preservation* - **Habitat.** Coastal - **Treasure.** Implements Where bronze dragons dwell, wonders flourish. Imaginative yet mindful, these metallic dragons work toward greatness and help others achieve all they can. They strive to preserve innovations, from the works of past civilizations to new discoveries, and they share such works widely. When dealing with shorter-lived beings, bronze dragons prefer to win them over through conversation and cultivation, but they don't shy from battle when villains keep others from achieving their potential. Bronze dragons enjoy the power and endless possibilities of the sea, and they often make their lairs in places of natural beauty or communities they wish to preserve. Within their dwellings, bronze dragons hoard things they believe will be useful one day. They salvage treasure lost to the sea, reclaiming wealth or sunken ships. ### Bronze Dragon Lairs Bronze dragons usually make their homes near or under the sea.```statblock

"name": "Ancient Bronze Dragon (XMM)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "metallic"
"alignment": "Lawful Good"
"ac": !!int "22"
"hp": !!int "444"
"hit_dice": "24d20 + 192"
"modifier": !!int "14"
"stats": - !!int "29" - !!int "10" - !!int "27" - !!int "18" - !!int "17" - !!int "25"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves": - "dexterity": !!int "7" - "wisdom": !!int "10"
"skillsaves": - "name": "[[skills#Insight|Insight]]" "desc": "+10" - "name": "[[skills#Perception|Perception]]" "desc": "+17" - "name": "[[skills#Stealth|Stealth]]" "desc": "+7"
"damage_immunities": "lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "22"
"traits": - "desc": "The dragon can breathe air and water." "name": "Amphibious" - "desc": "If the dragon fails a saving throw, it can choose to succeed instead." "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
"actions": - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\ \ use of (A) Repulsion Breath or (B) Spellcasting to cast [[Guiding Bolt Xphb]]\ \ (level 2 version)." "name": "Multiattack" - "desc": "Melee Attack Roll: +16, reach 15 ft. Hit: 18 (2d8 + 9) Slashing damage\ \ plus 9 (2d8) Lightning damage." "name": "Rend" - "desc": "Dexterity Saving Throw: DC 23, each creature in a 120-foot-long, 10-foot-wide\ \ [[Area of Effect Xphb]]. Failure:\ \ 82 (15d10) Lightning damage. Success: Half damage." "name": "Lightning Breath (Recharge 5-6)" - "desc": "Strength Saving Throw: DC 23, each creature in a 30-foot [[Area of Effect Xphb]].\ \ Failure: The target is pushed up to 60 feet straight away from the dragon\ \ and has the [[conditions#prone|Prone]] condition." "name": "Repulsion Breath" - "desc": "The dragon casts one of the following spells, requiring no Material components\ \ and using Charisma as the spellcasting ability (spell save DC 22, +14 to hit\ \ with spell attacks):\n\n At will: [[detect-magic-xphb (spells)]],\ \ [[Guiding Bolt Xphb]] (level 2 version),\ \ [[Shapechange Xphb]] (Beast or Humanoid\ \ form only, no [[temporary-hit-points-xphb (variant-rules)]]\ \ gained from the spell, and no Concentration or [[temporary-hit-points-xphb (variant-rules)]]\ \ required to maintain the spell), [[Speak With Animals Xphb]],\ \ [[Thaumaturgy Xphb]]\n\n1/day each:\ \ [[detect-thoughts-xphb (spells)]], [[Control Water Xphb]] \ Water]], [[Scrying Xphb]],\ \ [[Water Breathing Xphb]]" "name": "Spellcasting"
"legendary_actions": - "desc": "The dragon uses Spellcasting to cast [[Guiding Bolt Xphb]]\ "name": "Guiding Light" - "desc": "The dragon moves up to half its [[Fly Speed Xphb]],\ \ and it makes one Rend attack." "name": "Pounce" - "desc": "Constitution Saving Throw: DC 22, each creature in a 20-foot-radius\ \ [[Area of Effect Xphb]] centered\ \ on a point the dragon can see within 120 feet. Failure: 13 (3d8) Thunder\ \ damage, and the target has the [[conditions#Deafened|Deafened]]\ \ condition until the end of its next turn." "name": "Thunderclap"
"regional_effects": - "desc": "The region containing an adult or ancient bronze dragon's lair is changed\ \ by its presence, creating the following effects:" "name": "" - "desc": "- Buoying Currents. Creatures within 1 mile of the lair that lack\ \ a [[swim-speed-xphb (variant-rules)]] ignore the\ \ extra cost of movement while swimming. \n- Sun and Storms. While in its\ \ lair, the dragon can cast [[weather]],\ \ requiring no Material components and using the same spellcasting ability as\ \ its Spellcasting action. When casting the spell this way, the dragon can control\ \ the weather within 1 mile of its lair, regardless if the dragon is inside\ \ or outside. " - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
"source": - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/ancient-bronze-dragon-xmm.webp"```^statblock ## Environment coastal ## Player-Facing Summary Ancient bronze dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of ancient bronze dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ancient bronze dragon xmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## Plot Hooks - An heirloom has gone missing and evil awakens

- Someone is protecting information for revenge
- A document has gone missing and chaos spreads
- A stranger needs help stealing before the festival ## Related Notes - [[Similar Topic 1]]

- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]] ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research


## Notes

*Additional notes*
