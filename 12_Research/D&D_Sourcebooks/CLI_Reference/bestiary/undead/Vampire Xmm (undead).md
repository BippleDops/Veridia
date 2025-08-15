---

title: Vampire Xmm (undead)
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # Vampire Xmm ---

## Description

Detailed description pending.
title: Vampire Xmm
aliases:
- Vampire

type: monster
tags:
- ttrpg-cli/monster/type/undead
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/cr/13
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/small-or-medium
- research
- world/both
- active
- status/in-progress

created: modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.894406+00:00'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-vampire-xmm-v1-vampire-xmm.svg) # [[Vampire Xmm (undead)]]

*Source: Monster Manual (2024) p. 317. Available in the SRD and the Free Rules (2024)* Vampires are terrifying hunters and manipulators. They use their powers to shape-shift and bend other creatures' wills as they terrorize and feed on populations over generations. ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Vampires *Blood-Sucking Lords of the Night* - **Habitat.** Underdark, Urban - **Treasure.** Any Vampires disguise their accursed, immortal natures, passing as mortals to feed on the blood of the living. While the youngest vampires might be little more than bloodthirsty servants of their creators, the eldest possess incredible cunning and control over supernatural forces of the night. Undead vampires lie dormant during the day, retreating to resting places hidden from foes and the sun's searing rays. Roll on or choose a result from the Vampire Resting Places table to inspire a vampire's grim sanctuary. **Vampire Resting Places**`dice: [](vampire-xmm.md#^vampire-resting-places)`| dice: 1d6 | The Vampire's Resting Place Is... |


|-----------|-----------------------------------|
| 1 | Among the roots of a dead tree. |
| 2 | At the bottom of a stagt pool. |
| 3 | A coffin filled with grave dirt. |
| 4 | A large pot full of blood or vinegar. |
| 5 | A space accessible only by shape-shifting. |
| 6 | Within a statue or suit of armor. |

^vampire-resting-places ### Vampire Lairs Vampires and vampire umbral lords create sanctuaries apart from the living, whether hidden in cosmopolitan cities or sequestered in ruins where they dwelled in life. > [!quote] A quote from Astarion, Vampire Spawn > > Darling, you are simply delicious...```statblock

"name": "Vampire (XMM)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "195"
"hit_dice": "23d8 + 92"
"modifier": !!int "14"
"stats": - !!int "18" - !!int "17" - !!int "15"
"speed": "40 ft., climb 40 ft."
"saves": - "dexterity": !!int "9" - "constitution": !!int "9" - "wisdom": !!int "7" - "charisma": !!int "9"
"skillsaves": - "name": "[[skills#Perception|Perception]]" "desc": "+7" - "name": "[[skills#Stealth|Stealth]]" "desc": "+9"
"damage_resistances": "necrotic"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "Common plus two other languages"
"cr": "13"
"traits": - "desc": "If the vampire fails a saving throw, it can choose to succeed instead." "name": "Legendary Resistance (3/Day, or 4/Day in Lair)" - "desc": "If the vampire drops to 0 [[hit-points-xphb (variant-rules)]]\ \ outside its resting place, the vampire uses Shape-Shift to become mist (no\ \ action required). If it can't use Shape-Shift, it is destroyed.\n\n While it\ \ has 0 [[hit-points-xphb (variant-rules)]] in mist\ \ form, it can't return to its vampire form, and it must reach its resting place\ \ within 2 hours or be destroyed. Once in its resting place, it returns to its\ \ vampire form and has the [[conditions#Paralyzed|Paralyzed]]\ \ condition until it regains any [[hit-points-xphb (variant-rules)]],\ \ and it regains 1 [[hit-points-xphb (variant-rules)]]\ \ after spending 1 hour there." "name": "Misty Escape" - "desc": "The vampire can climb difficult surfaces, including along ceilings, without\ \ needing to make an ability check." "name": "Spider Climb" - "desc": "The vampire has these weaknesses:\n\n- Forbiddance. The vampire can't\ \ enter a residence without an invitation from an occupant. \n- Running Water.\ \ The vampire takes 20 Acid damage if it ends its turn in running water. \n\ - Stake to the Heart. If a weapon that deals Piercing damage is driven into\ \ the vampire's heart while the vampire has the [[conditions#Incapacitated|Incapacitated]]\ \ condition in its resting place, the vampire has the [[conditions#Paralyzed|Paralyzed]]\ \ condition until the weapon is removed. \n- Sunlight. The vampire takes\ \ 20 Radiant damage if it starts its turn in sunlight. While in sunlight, it\ \ has [[Advantage Xphb]] on\ \ attack rolls and ability checks. " "name": "Vampire Weakness"
"actions": - "desc": "The vampire makes two Grave Strike attacks and uses Bite." "name": "Multiattack (Vampire Form Only)" - "desc": "Melee Attack Roll: +9, reach 5 ft. Hit: 8 (1d8 + 4) Bludgeoning damage\ \ plus 7 (2d6) Necrotic damage. If the target is a Large or smaller creature,\ \ it has the [[conditions#Grappled|Grappled]] condition (escape\ \ DC 14) from one of two hands." "name": "Grave Strike (Vampire Form Only)" - "desc": "Constitution Saving Throw: DC 17, one creature within 5 feet that is\ \ willing or that has the [[conditions#Grappled|Grappled]],\ \ [[conditions#Incapacitated|Incapacitated]], or [[conditions#Restrained|Restrained]]\ \ condition. Failure: 6 (1d4 + 4) Piercing damage plus 13 (3d8) Necrotic damage.\ \ The target's [[hit-points-xphb (variant-rules)]]\ \ maximum decreases by an amount equal to the Necrotic damage taken, and the\ \ vampire regains [[hit-points-xphb (variant-rules)]]\ \ equal to that amount. A Humanoid reduced to 0 [[hit-points-xphb (variant-rules)]]\ \ by this damage and then buried rises the following sunset as a [[vampire-spawn-xmm (undead)]]\ \ under the vampire's control." "name": "Bite (Bat or Vampire Form Only)"
"bonus_actions": - "desc": "If the vampire isn't in sunlight or running water, it shape-shifts into\ \ a Tiny bat ([[Fly Speed Xphb]] 5 ft., [[Fly Speed Xphb]] \ Speed]] 30 ft.) or a Medium\ \ cloud of mist ([[Fly Speed Xphb]] 5 ft.,\ \ [[Fly Speed Xphb]] 20 ft. [hover]),\ \ or it returns to its vampire form. Anything it is wearing transforms with\ \ it.\n\n While in bat form, the vampire can't speak. Its game statistics, other\ \ than its size and [[Fly Speed Xphb]], are\ \ unchanged.\n\n While in mist form, the vampire can't take any actions, speak,\ \ or manipulate objects. It is weightless and can enter an enemy's space and\ \ stop there. If air can pass through a space, the mist can do so, but it can't\ \ pass through liquid. It has [[boon-of-energy-resistance-xphb (feats)]]\ \ to all damage, except the damage it takes from sunlight." "name": "Shape-Shift" - "desc": "The vampire casts [[Charm Person Xphb]],\ \ requiring no spell components and using Charisma as the spellcasting ability\ \ (spell save DC 17), and the duration is 24 hours. The Charmed target is a\ \ willing recipient of the vampire's Bite, the damage of which doesn't end the\ \ spell. When the spell ends, the target is unaware it was Charmed by the vampire.\n" "name": "Charm (Recharge 5-6)"
"legendary_actions": - "desc": "The vampire moves up to half its [[Fly Speed Xphb]],\ \ and it makes one Grave Strike attack." "name": "Deathless Strike" - "desc": "The vampire casts [[command-xphb (spells)]],\ \ (spell save DC 17). The vampire can't take this action again until the start\ \ of its next turn.\n" "name": "Beguile"
"regional_effects": - "desc": "The region containing a vampire's lair is warped by its presence, creating\ \ the following effects:" "name": "" - "desc": "- Children of the Night. The vampire exerts influence over the animals\ \ in its domain. From dusk until dawn, Medium or smaller Beasts have the [[conditions#Charmed|Charmed]]\ \ condition while within 1 mile of the lair. \n- Looming Shadows. Shadows\ \ within 1 mile of the lair seem to move as if alive. Any creature (excluding\ \ the vampire and its allies) that finishes a [[short-rest-xphb]]\ \ while within 1 mile of the lair must succeed on a DC 15 Wisdom saving throw\ \ or gain no benefit from that rest. \n- Mists. The area within 1 mile\ \ of the lair is [[lightly-obscured-xphb (variant-rules)]]\ \ by a persistent, creeping fog. The vampire and any creatures of its choice\ \ are unaffected by the fog. " - "desc": "If the vampire dies or moves its lair elsewhere, these effects end immediately."
"source": - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/vampire-xmm.webp"```^statblock ## Environment underdark, urban ## Player-Facing Summary Vampire xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of vampire xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around vampire xmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## Prophecy Connection Mentioned in The First Prophecy of Shadows ## Plot Hooks - A corpse reveals ancient history about this place

- Strange dreams suggest a conspiracy
- A stranger needs help finding before the new moon
- Strange disappearances suggest a portal ## 12_Research Specific Content Contextual improvement based on 12_Research ## References - [[Yeth Hound Mpmm]]

- [[yeth-hound-mpmm (fey)]]
- [[Vampiric Mist Mpmm]]
- [[vampire-xmm (undead)]]
- [[vampiric-mist-mpmm (undead)]]
- [[Saint Markovias Thighbone Cos]]
- [[saint-markovias-thighbone-cos (items)]]
- [[Monsters by Habitat Underdark Monsters Xmm]]
- [[Monsters by Habitat Urban Monsters Xmm]]
- [[Urban Encounters Levels 1116 Xge]]
- [[Urban Encounters Levels 1720 Xge]]
- [[Urban Encounters Levels 510 Xge]]
- [[monsters-by-habitat-underdark-monsters-xmm (tables)]]
- [[monsters-by-habitat-urban-monsters-xmm (tables)]]
- [[urban-encounters-levels-1116-xge (tables)]]
- [[urban-encounters-levels-1720-xge (tables)]]
- [[urban-encounters-levels-510-xge (tables)]]
- [[Player Characters as Vampires Mm]]
- [[player-characters-as-vampires-mm (variant-rules)]]


## Notes

*Additional notes*
