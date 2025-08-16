---

title: Beholder Xmm
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # Beholder Xmm ---

## Description

Detailed description pending.
title: Beholder Xmm
aliases:
- Beholder

type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/13
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/type/aberration
- research
- ttrpg-cli/monster/size/large
- world/both
- active
- status/in-progress

created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.565482+00:00'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-beholder-xmm-beholder-xmm.svg) # [[beholder

*Source: Monster Manual (2024) p. 36* ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Beholder *Infamous Many-Eyed Tyrant* - **Habitat.** Underdark - **Treasure.** Arcana Beholders—also known as eye tyrants—number among the most notorious inhabitants of the Underdark. Few creatures in the multiverse are as loathed and feared as these maniacal horrors. A beholder's distinctive, globular body is dominated by an oversize maw and a gigantic central eye. Ten stalks ending in smaller eyes crown its form. From each of these eleven eyes, a beholder can unleash a different magic power. The central eye can deactivate magic, while the smaller eyes emit rays that inflict various dooms—such as petrifying creatures, disintegrating them, slaying them outright, or other effects. Beholders possess utterly alien minds. Most exhibit paranoid, narcissistic, and megalomaniacal tendencies, and they act on agendas beyond human reasoning. While some keep to themselves, others force weaker creatures into their service. Still others cultivate grand ambitions, creating networks of minions to manipulate groups, settlements, and whole nations in the Underdark and sometimes the surface world. Few creatures loathe beholders more than other beholders. Every beholder views itself as the physical and intellectual pinnacle of its species. To them, all other beholders are aberrant rivals to be dominated or destroyed. Conflicts between beholders can last for decades and lay waste to vast subterranean realms. Beholders are a particular threat to adventurers because both gravitate toward mysterious ruins and sites of great magic. Many beholders collect the magic items and [conditions#Petrified|petrified]] bodies of heroes they've defeated, displaying them as trophies. ### Beholder Lairs Beholders lurk in cavern complexes they've carved using their eye rays deep in the Underdark or in lairs created for them by their servants.```statblock

"name": "Beholder (XMM)"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "190"
"hit_dice": "`dice: 20d10` + 80"
"modifier": !!int "12"
"stats": - !!int "16" - !!int "14" - !!int "18" - !!int "17" - !!int "15"
"speed": "5 ft., fly 40 ft. (hover)"
"saves": - "constitution": !!int "9" - "wisdom": !!int "7"
"skillsaves": - "name": "[[skills#Perception|Perception" "desc": "+12"
"condition_immunities": "[conditions#prone|prone]]"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "13"
"traits": - "desc": "If the beholder fails a saving throw, it can choose to succeed instead." "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions": - "desc": "The beholder uses Eye Rays three times." "name": "Multiattack" - "desc": "Melee Attack Roll: +8, reach 5 ft. Hit: 13 (`dice: 3d6` + 3) Piercing damage." "name": "Bite" - "desc": "The beholder randomly shoots one of the following magical rays at a target\ \ it can see within 120 feet of itself (roll d10; reroll if the beholder has\ \ already used that ray during this turn):\n\n- 1 Charm Ray. Wisdom Saving\ \ Throw: **DC 16**. Failure: 13 (`dice: 3d8`) Psychic damage, and the target has the\ \ [[conditions#Charmed|Charmed condition for 1 hour or\ \ until it takes damage. Success: Half damage only. \n- 2 Paralyzing Ray.\ \ Constitution Saving Throw: **DC 16**. Failure: The target has the [conditions#Paralyzed|Paralyzed]]\ \ condition and repeats the save at the end of each of its turns, ending the\ \ effect on itself on a success. After 1 minute, it succeeds automatically.\ \ \n- 3 Fear Ray. Wisdom Saving Throw: **DC 16**. Failure: 14 (`dice: 4d6`) Psychic\ \ damage, and the target has the [[conditions#frightened|Frightened\ \ condition until the end of its next turn. Success: Half damage only. \n\ - 4 Slowing Ray. Constitution Saving Throw: **DC 16**. Failure: 18 (`dice: 4d8`)\ \ Necrotic damage. Until the end of the target's next turn, the target's [Fly Speed Xphb]]\ \ is halved; the target can't take Reactions; and it can take either an action\ \ or a [[Action Xphb on\ \ its turn, not both. Success: Half damage only. \n- 5 Enervation Ray.\ \ Constitution Saving Throw: **DC 16**. Failure: 13 (`dice: 3d8`) Poison damage, and\ \ the target has the [conditions#Poisoned|Poisoned]] condition\ \ until the end of its next turn. While [[conditions#Poisoned|Poisoned,\ \ the target can't regain [hit-points-xphb (variant-rules)]].\ \ Success: Half damage only. \n- 6 Telekinetic Ray. Strength Saving\ \ Throw: **DC 16** (the target succeeds automatically if it is Gargantuan). Failure:\ \ The beholder moves the target up to 30 feet in any direction. The target has\ \ the [[conditions#Restrained|Restrained condition until\ \ the start of the beholder's next turn or until the beholder has the [conditions#Incapacitated|Incapacitated]]\ \ condition. The beholder can also exert fine control on objects with this ray,\ \ such as manipulating a tool or opening a door or container. \n- 7 Sleep\ \ Ray. Wisdom Saving Throw: **DC 16** (the target succeeds automatically if\ \ it is a Construct or an Undead). Failure: The target has the [[conditions#Unconscious|Unconscious\ \ condition for 1 minute. The condition ends if the target takes damage or a\ \ creature within 5 feet of it takes an action to wake it. \n- 8 Petrification\ \ Ray. Constitution Saving Throw: **DC 16**. 1st Failure: The target has the\ \ [conditions#Restrained|Restrained]] condition and repeats\ \ the save at the end of its next turn if it is still [[conditions#Restrained|Restrained,\ \ ending the effect on itself on a success. 2nd Failure: The target has the\ \ [conditions#Petrified|Petrified]] condition instead of\ \ the [[conditions#Restrained|Restrained condition. \n\ - 9 Disintegration Ray. Dexterity Saving Throw: **DC 16**. Failure: 36 (`dice: 8d8`)\ \ Force damage. If the target is a nonmagical object or a creation of magical\ \ force, a 10-foot [Cube Area of Effect Xphb]]\ \ of it disintegrates into dust. Success: Half damage. Failure or Success:\ \ If the target is a creature and this damage reduces it to 0 [[hit-points-xphb (variant-rules),\ \ it disintegrates into dust. \n- 10 Death Ray. Dexterity Saving Throw:\ \ **DC 16**. Failure: 55 (`dice: 10d10`) Necrotic damage. Success: Half damage. Failure\ \ or Success: The target dies if the ray reduces it to 0 [hit-points-xphb (variant-rules)]].\ \ " "name": "Eye Rays"
"bonus_actions": - "desc": "The beholder's central eye emits an antimagic wave in a 150-foot [[Area of Effect Xphb.\ \ Until the start of the beholder's next turn, that area acts as an [Antimagic Field Xphb]] \ Field]] spell, and that area\ \ works against the beholder's own Eye Rays." "name": "Antimagic Cone"
"legendary_actions": - "desc": "The beholder makes two Bite attacks." "name": "Chomp" - "desc": "The beholder uses Eye Rays." "name": "Glare"
"regional_effects": - "desc": "The region containing a beholder's lair is twisted by its presence, creating\ \ the following effects:" "name": "" - "desc": "- Scopophobia. Creatures within 1 mile of the lair feel as if they're\ \ being watched. Any creature (excluding the beholder and its allies) that finishes\ \ a [[short-rest-xphb while within\ \ 1 mile of the lair must succeed on a **DC 13** Wisdom saving throw or gain no\ \ benefit from that rest. \n- Warping Terrain. Minor warps in reality occur\ \ near the lair; any creature (excluding the beholder) within 1 mile of the\ \ lair that makes a [d20-test-xphb (variant-rules)]]\ \ and rolls a 1 has the [[conditions#prone|Prone]] condition.\ - "desc": "If the beholder dies or moves its lair elsewhere, these effects end immediately."
"source": - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/beholder-xmm.webp"```^statblock ## Environment underdark ## Player-Facing Summary Beholder xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of beholder xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around beholder xmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## Plot Hooks - Someone is protecting a witness for power

- A letter reveals the truth about a local noble
- Someone is protecting a artifact for revenge
- Someone is searching for information for love ## 12_Research Specific Content Contextual improvement based on 12_Research

## Notes

*Additional notes*
