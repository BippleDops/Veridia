---

title: Animal Lord Xmm
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # Animal Lord Xmm ---

## Description

Detailed description pending.
title: Animal Lord Xmm
aliases:
- Animal Lord

type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- ttrpg-cli/compendium/src/5e/xmm
- world/surface
- monster
- research
- world/both
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/type/celestial
- active
- status/in-progress
- ttrpg-cli/monster/cr/20

created: modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:06.037932+00:00'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-animal-lord-xmm-animal-lord-xmm.svg) # [[Animal Lord Xmm]]

*Source: Monster Manual (2024) p. 15* ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Animal Lord *Immortal Regent of the Wild* - **Habitat.** Planar (Beastlands) - **Treasure.** Relics Animal lords are the immortal spirits of legendary animals. They serve as the divine protectors of animals of their kind, and they appear as hybrids of humanoids and the animals they defend. They frequently change into giant, idealized versions of the animals they're associated with—albeit with glowing eyes. When contending with people, they sometimes appear as humanlike beings with subtle, animal-like features. No matter their appearance, animal lords exhibit the instincts and predilections of the animals they represent, tempered by their intellect and experience. Most animal lords make their homes in the Beastlands, but they occasionally journey to the Feywild or other idyllic realms. They rarely travel to the Material Plane, making exceptions only when a world faces environmental disaster or droves of animals are otherwise in jeopardy. Among the best-known animal lords are those that represent cats, hawks, lizards, and wolves, but animal lords exist for beasts of all types. Some animal lords even embody creatures that are rare or extinct on Material Plane worlds, like megafauna or dinosaurs. Using their divine might, animal lords can summon spectral animals, channel spiritual energy, and exhibit powers associated with one of three broad groups: foragers, hunters, or sages. These powers are tied to an animal lord's personality and traits associated with the creature it resembles. Roll on or choose results from the relevant Animal Lord Appearances table to inspire what creature an animal lord resembles. > [!quote] A quote from Brother of Shadows, Cat Lord > > While I don't deny the compliment, I assure you, I'm more akin to a god than a "pretty kitty." > [!quote] A quote from Wind and Moon, Wolf Lord > You call yourself hunter, but your fear makes you smell like prey. **Forager Animal Lord Appearances**`dice: [](animal-lord-xmm.md#^forager-animal-lord-appearances)`| dice: `dice: 1d10` | Bestial Shape |

|------------|---------------|
| 1 | Bear |
| 2 | Bee |
| 3 | Bison |
| 4 | Capybara |
| 5 | Carp |
| 6 | Rabbit |
| 7 | Rooster |
| 8 | Sloth |
| 9 | Stag |
| 10 | Vulture |

^forager-animal-lord-appearances **Hunter Animal Lord Appearances**`dice: [](animal-lord-xmm.md#^hunter-animal-lord-appearances)`| 1 | Alligator |
| 2 | Badger |
| 3 | Bat |
| 4 | Cat |
| 5 | Hawk |
| 6 | Mongoose |
| 7 | Praying mantis |
| 8 | Shark |
| 9 | Snake |
| 10 | Wolf |

^hunter-animal-lord-appearances **Sage Animal Lord Appearances**`dice: [](animal-lord-xmm.md#^sage-animal-lord-appearances)`| 1 | Coyote |
| 2 | Crow |
| 3 | Elephant |
| 4 | Lizard |
| 5 | Mouse |
| 6 | Owl |
| 7 | Salmon |
| 8 | Spider |
| 9 | Turtle |
| 10 | Whale |

^sage-animal-lord-appearances```statblock
"name": "Animal Lord (XMM)"
"size": "Medium"
"type": "celestial"
"alignment": "Neutral"
"ac": !!int "19"
"hp": !!int "323"
"hit_dice": "`dice: 34d8` + 170"
"modifier": !!int "19"
"stats": - !!int "24" - !!int "25" - !!int "20" - !!int "19" - !!int "23" - !!int "22"
"speed": "60 ft., fly 60 ft. (hover), swim 60 ft."
"saves": - "constitution": !!int "11" - "wisdom": !!int "12"
"skillsaves": - "name": "[[skills#Acrobatics|Acrobatics" "desc": "+13" - "name": "[skills#Athletics|Athletics]]" - "name": "[[skills#Perception|Perception" "desc": "+18" - "name": "[skills#Stealth|Stealth]]"
"damage_resistances": "cold, fire, necrotic, psychic, radiant"
"condition_immunities": "[[conditions#Charmed|charmed, [conditions#frightened|frightened]],\ \ [[conditions#Stunned|stunned"
"senses": "truesight 120 ft., passive Perception 28"
"languages": "all"
"cr": "20"
"traits": - "desc": "An animal lord represents a Forager, Hunter, or Sage (DM's choice), which\ \ determines certain traits in this stat block." "name": "Animal Lordship" - "desc": "If the animal lord fails a saving throw, it can choose to succeed instead." "name": "Legendary Resistance (4/Day)" - "desc": "Wisdom Saving Throw: **DC 20**, any enemy that starts its turn in a 30-foot\ \ [Area of Effect Xphb]]\ \ originating from the animal lord. Failure: The target suffers one of the\ \ following effects:\n\n- Captivated (Forager Only). The target has the\ \ [[conditions#Charmed|Charmed condition until the end\ \ of its next turn. While [conditions#Charmed|Charmed]],\ \ the target has the [[conditions#Incapacitated|Incapacitated\ \ condition. \n- Fearful (Hunter Only). The target has the [conditions#frightened|Frightened]]\ \ condition until the end of its next turn. \n- Mired (Sage Only). The\ \ target takes 10 (`dice: 3d6`) Psychic damage, and the target is magically bewildered\ \ until the end of its next turn. While bewildered, the target subtracts d4\ \ from its saving throws. " "name": "Lordly Presence" - "desc": "The animal lord has [[Advantage Xphb\ \ on saving throws against spells and other magical effects." "name": "Magic Resistance"
"actions": - "desc": "The animal lord makes two attacks, using Rend or Radiant Ray in any combination,\ \ and uses Animal Spirit." "name": "Multiattack" - "desc": "Melee Attack Roll: +13, reach 5 ft. Hit: 14 (`dice: 2d6` + 7) Slashing damage\ \ plus 7 (`dice: 2d6`) Force damage." "name": "Rend" - "desc": "Ranged Attack Roll: +12, range 120 ft. Hit: 20 (`dice: 4d6` + 6) Radiant\ \ damage." "name": "Radiant Ray" - "desc": "The animal lord conjures an animal spirit that strikes at a creature\ \ and then disappears. Dexterity Saving Throw: **DC 20**, one creature the animal\ \ lord can see within 120 feet. Failure: 28 (`dice: 4d10` + 6) Radiant damage. Success:\ \ Half damage. Failure or Success: One of the following effects occurs:\n\n\ - Fortify (Forager Only). The animal lord gains 20 [temporary-hit-points-xphb (variant-rules)]].\ \ \n- Marked as Prey (Hunter Only). The animal lord has [[Advantage Xphb\ \ on attack rolls against the target until the start of the animal lord's next\ \ turn. \n- Pesky Swarm (Sage Only). The target has [Advantage Xphb]]\ \ on attack rolls and ability checks until the end of its next turn. " "name": "Animal Spirit" - "desc": "The animal lord casts one of the following spells, requiring no Material\ \ components and using Wisdom as the spellcasting ability (spell save **DC 20**):\n\ \n At will: [[Animal Friendship Xphb,\ \ [animal-messenger-xphb (spells)]], [[Speak With Animals Xphb \ with Animals]]\n\n2/day\ \ each: [[Awaken Xphb, [greater-restoration-xphb (spells)]]\n\ \n1/day each: [[animal-shapes-xphb (spells),\ \ [Sunburst Xphb]]" "name": "Spellcasting"
"bonus_actions": - "desc": "The animal lord shape-shifts into a Huge or smaller version of the animal\ \ it represents or a Medium or Small Humanoid, or it returns to its true form.\ \ Its game statistics, other than its size, are the same in each form. Any equipment\ \ it is wearing or carrying isn't transformed." "name": "Shape-Shift"
"legendary_actions": - "desc": "The animal lord moves up to its [[Fly Speed Xphb\ \ without provoking [actions#Opportunity%20Attack|Opportunity Attacks]],\ \ and it makes one Rend attack." "name": "Feral Strike" - "desc": "The animal lord makes one Radiant Ray attack." "name": "Radiant Strike"
"source": - "XMM"
"image": "/03_Mechanics/CLI/bestiary/celestial/token/animal-lord-xmm.webp"```^statblock ## Environment planar, beastlands ## Player-Facing Summary Animal lord xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of animal lord xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around animal lord xmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## Plot Hooks - Someone is searching for information for love

- Someone is protecting an heir for power
- A journal reveals a conspiracy about the government
- A letter reveals ancient history about the cult ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research ## References - [[animal-lord-xmm (celestial)

- [Scroll of Titan Summoning Animal Lord Xdmg]]
- [[scroll-of-titan-summoning-animal-lord-xdmg (items)]]

## Notes

*Additional notes*
