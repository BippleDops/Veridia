---

title: empyrean-xmm (miscellaneous)
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # empyrean-xmm ---

## Description

Detailed description pending.
title: empyrean xmm
aliases:
- Empyrean

type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/cr/23
- monster
- research
- world/both
- ttrpg-cli/monster/environment/any
- active
- status/in-progress
- ttrpg-cli/monster/type//titan

created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.403873'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-empyrean-xmm-empyrean-xmm.svg) # [[empyrean-xmm (miscellaneous)]]

*Source: Monster Manual (2024) p. 113* Inheritors of divine might, empyreans are idealized, human-shaped beings of godly power. These beings might have relationships with their creators akin to those of parents and their children, royalty and their servants, inventors and their creations, or other bonds. Empyreans' existences are fundamentally influenced by their patrons and their connection to the heavenly deities of the Upper Planes or the fiendish deities of the Lower Planes. Nevertheless, empyreans have free will. Celestial empyreans are typically noble beings who quest to prove themselves worthy of their divine pedigree. Many work in the service of their parents or support those gods' causes and champions. Fiendish empyreans are usually dreadful, self-serving villains who seek to claim their parents' power. Some forge unholy armies or rule over hidden realms in mockery of true gods, while others might seek to escape their accursed families. ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Empyreans *Scions of the Gods* - **Habitat.** Any - **Treasure.** Relics Empyreans are the spawn of deities. While not gods themselves, they possess divine influence and powers related to their divine parents. Some empyreans are near-demigods with fantastic might and the power to reshape mortal lives. Others are little more than divine thoughts or moments of immortal attention made manifest. Whether empyreans are idealized beings or vestiges of divinity, their appearances are influenced by their creators. Roll on or choose a result from the Empyrean Influences table to inspire what aspects of an empyrean's heritage manifest in its physical form. **Empyrean Influences**`dice: [](empyrean-xmm.md#^empyrean-influences)`| dice: 1d6 | The Empyrean Has Features That Are... |


|-----------|---------------------------------------|
| 1 | Balanced, naturalistic, or suggestive of watching eyes. |
| 2 | Colorful, shadowy, or fluid or that vary depending on the viewer. |
| 3 | Comforting and gentle or that remind viewers of pleasant memories. |
| 4 | Disconnected parts, visible thoughts, or errant shapes. |
| 5 | Machinelike, stoic, symmetrical, or suggestive of judgment. |
| 6 | Morbid, menacing, or monstrous or that embody the viewer's fears. |

^empyrean-influences > [!quote] A quote from Kopoha, Scion of Storms > > One day I might be the god of storms—mind countless followers, answer prayers, change whole worlds—but, until then, I do what I please.```statblock
"name": "Empyrean (XMM)"
"size": "Huge"
"subtype": "titan"
"alignment": "Neutral"
"ac": !!int "22"
"hp": !!int "346"
"hit_dice": "21d12 + 210"
"modifier": !!int "19"
"stats": - !!int "30" - !!int "21" - !!int "22" - !!int "27"
"speed": "50 ft., fly 50 ft. (hover), swim 50 ft."
"saves": - "strength": !!int "17" - "wisdom": !!int "13"
"skillsaves": - "name": "[[skills#Insight|Insight]]" "desc": "+13" - "name": "[[skills#Perception|Perception]]"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "necrotic, radiant"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "all"
"cr": "23"
"traits": - "desc": "If the empyrean fails a saving throw, it can choose to succeed instead." "name": "Legendary Resistance (4/Day)" - "desc": "The empyrean has [[Advantage Xphb]]\ \ on saving throws against spells and other magical effects." "name": "Magic Resistance"
"actions": - "desc": "The empyrean makes two attacks, using Sacred Weapon or Divine Ray in\ \ any combination." "name": "Multiattack" - "desc": "Melee Attack Roll: +17, reach 10 ft. Hit: 31 (6d6 + 10) Force damage,\ \ and the target has the [[conditions#Stunned|Stunned]] condition\ \ until the start of the empyrean's next turn. The target can choose not to\ \ be [[conditions#Stunned|Stunned]], in which case it takes\ \ an extra 21 Force damage that bypasses [[boon-of-energy-resistance-xphb (feats)]]\ \ or [[immunity-xphb (variant-rules)]]." "name": "Sacred Weapon" - "desc": "Ranged Attack Roll: +15, range 600 ft. Hit: 35 (6d8 + 8) Necrotic\ \ or Radiant damage (empyrean's choice)." "name": "Divine Ray" - "desc": "The empyrean casts one of the following spells, requiring no Material\ \ components and using Charisma as the spellcasting ability (spell save DC 23):\n\ \n At will: [[Calm Emotions Xphb]],\ \ [[greater-restoration-xphb (spells)]],\ \ [[Pass Without Trace Xphb]],\ \ [[Water Breathing Xphb]]\n\n1/day\ \ each: [[Commune Xphb]], [[dispel-evil-and-good-xphb (spells)]] \ Good]], [[plane-shift-xphb (spells)]]" "name": "Spellcasting"
"legendary_actions": - "desc": "The empyrean gains 10 [[temporary-hit-points-xphb (variant-rules)]],\ \ and the empyrean and each ally within 30 feet of it gain [[Advantage Xphb]]\ \ on [[d20-test-xphb (variant-rules)]] until the\ \ end of the empyrean's next turn. The empyrean can't take this action again\ \ until the start of its next turn." "name": "Bolster" - "desc": "Constitution Saving Throw: DC 23, each creature in a 30-foot [[Area of Effect Xphb]]\ \ originating from the empyrean. Failure: 27 (6d8) Force damage, and the target\ \ has the [[conditions#prone|Prone]] condition. Success:\ \ Half damage only. Failure or Success: The empyrean can't take this action\ \ again until the start of its next turn." "name": "Shockwave of Glory" - "desc": "The empyrean makes one Divine Ray attack." "name": "Smite"
"source": - "XMM"
"image": "/03_Mechanics/CLI/bestiary/miscellaneous/token/empyrean-xmm.webp"```^statblock ## Environment any ## Player-Facing Summary Empyrean xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of empyrean xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around empyrean xmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## 12_Research Specific Content Contextual improvement based on 12_Research ## References - [[Empyrean Xmm]]

- [[Scroll of Titan Summoning Empyrean Xdmg]]
- [[scroll-of-titan-summoning-empyrean-xdmg (items)]]
- [[Artifact Properties Major Detrimental Properties Xdmg]]
- [[Artifact Properties Major Detrimental]]
- [[Monsters by Habitat Any Habitat Monsters Xmm]]
- [[artifact-properties-major-detrimental-properties]]
- [[monsters-by-habitat-any-habitat-monsters-xmm (tables)]]


## Notes

*Additional notes*
