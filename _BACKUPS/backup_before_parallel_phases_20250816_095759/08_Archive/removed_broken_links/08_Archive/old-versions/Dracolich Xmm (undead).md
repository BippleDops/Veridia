---

title: Dracolich Xmm (undead)
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # Dracolich Xmm ---

## Description

Detailed description pending.
title: Dracolich Xmm
aliases:
- Dracolich

type: monster
tags:
- ttrpg-cli/monster/type/undead
- both
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/size/unknown
- research
- world/both
- ttrpg-cli/monster/environment/any
- active
- ttrpg-cli/monster/cr/17
- status/in-progress

created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.870924+00:00'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-dracolich-xmm-dracolich-xmm.svg) # [[dracolich-xmm (legendary-group)]]

*Source: Monster Manual (2024) p. 102* ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Dracolich *Draconic Tyrant Reborn* - **Habitat.** Any - **Treasure.** Any The vilest dragons seek to escape the grip of death, employing ageless secrets and blasphemous magic to become horrors called dracoliches. These deathless dragons bind their spirits to gems and magically animate their rotting corpses. Eventually becoming skeletal horrors, dracoliches continue the centuries-spanning plots they pursued in life, seek revenge on those that brought them low, and strive toward vicious goals they couldn't indulge in life. Dracoliches combine the corrupt immortality of the undead with the legendary power of dragons. A dracolich retains a breath weapon, but it is a chilling necrotic blast. These terrors gradually sicken the land near their lairs and attract sinister followers—usually other undead or cultists seeking to revel in their terrible might. Living dragons of all types loathe and seek to destroy dracoliches, viewing them as distortions of draconic magic. There are untold profane routes by which a dragon might become a dracolich. However one is created, a dracolich chooses a gem that becomes the anchor for its spirit and binds the deathless dragon to the world. So long as a dracolich is on the same plane of existence as its soul gem, the dracolich can survive the destruction of its physical body. Its spirit retreats into the gem if the dracolich's body is destroyed, and the monster might one day regain its terrifying form. Dracoliches often sequester their soul gems within meaningful treasure from their hoard or in unassuming baubles. Roll on or choose a result from the Dracolich Soul Gem Vessels table to inspire what holds a dracolich's soul gem. **Dracolich Soul Gem Vessels**`dice: [](dracolich-xmm.md#^dracolich-soul-gem-vessels)`| dice: `dice: 1d10` | A Dracolich's Soul Gem Is Hidden In... |

|------------|----------------------------------------|
| 1 | Another dragon's treasure hoard. |
| 2 | The body of a servant or an ancestor. |
| 3 | The core of a dracolich's melted hoard. |
| 4 | A corrupted dragon egg. |
| 5 | A dragon horn a hero took as a trophy. |
| 6 | A nation's royal or religious treasure. |
| 7 | A powerful magic item. |
| 8 | A source of magical wonders, such as a giant tree or mystical pool. |
| 9 | The vault of an archdevil, a wicked god, or another extraplanar villain. |
| 10 | The weapon that slew the dracolich. |

^dracolich-soul-gem-vessels ### Dracolich Lairs A dracolich lurks in a corrupted version of the lair it had in life. > [!quote] A quote from Sammaster the Fallen's translation of The Chronicle of Years to Come > > And naught will be left save shattered thrones with no rulers. But the dead dragons shall rule the world entire...```statblock

"name": "Dracolich (XMM)"
"size": "Unknown"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "20"
"hp": !!int "225"
"hit_dice": "`dice: 18d12` + 108"
"modifier": !!int "12"
"stats": - !!int "25" - !!int "10" - !!int "23" - !!int "19" - !!int "15" - !!int "21"
"speed": "40 ft., burrow 30 ft., fly 80 ft."
"saves": - "dexterity": !!int "6" - "wisdom": !!int "8"
"skillsaves": - "name": "[[skills#Perception|Perception" "desc": "+14" - "name": "[skills#Stealth|Stealth]]" "desc": "+6"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[conditions#Charmed|charmed, [conditions#Exhaustion|exhaustion]],\ \ [[conditions#frightened|frightened, [conditions#Paralyzed|paralyzed]],\ \ [[conditions#Poisoned|poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "17"
"traits": - "desc": "If the dracolich fails a saving throw, it can choose to succeed instead." "name": "Legendary Resistance (3/Day, or 4/Day in Lair)" - "desc": "Creatures within 60 feet of the dracolich can't regain [hit-points-xphb (variant-rules)]]." "name": "Life Suppression" - "desc": "The dracolich has [[Advantage Xphb\ \ on saving throws against spells and other magical effects." "name": "Magic Resistance" - "desc": "The dracolich has a magical gem. If the dracolich is destroyed while\ \ the gem is on the same plane of existence as it, the dracolich gains a new\ \ body in d20 days, regaining all its [hit-points-xphb (variant-rules)]]\ \ and appearing within 5 feet of the gem.\n\n The gem is a Tiny object that has\ \ AC 20; HP 50; and [[immunity-xphb (variant-rules)\ \ to Necrotic, Poison, and Psychic damage. The gem regains all its [hit-points-xphb (variant-rules)]]\ \ at the end of every turn, but it turns to dust if reduced to 0 [[hit-points-xphb (variant-rules).\ \ If the gem is destroyed, the dracolich can create a new one by completing\ \ an 8-hour ritual using a gem worth 1,000+ GP and by expending 5,000 GP, which\ \ the ritual consumes." "name": "Soul Gem"
"actions": - "desc": "The dracolich makes three Rend attacks. It can replace one attack with\ \ a use of Spellcasting to cast [Ray of Sickness Xphb]]\ \ (level 2 version)." "name": "Multiattack" - "desc": "Melee Attack Roll: +13, reach 10 ft. Hit: 18 (`dice: 2d10` + 7) Slashing\ \ damage plus 4 (d8) Necrotic damage." "name": "Rend" - "desc": "Constitution Saving Throw: **DC 20**, each creature in a 60-foot [[Area of Effect Xphb.\ \ Failure: 52 (`dice: 8d12`) Necrotic damage. Success: Half damage." "name": "Necrotic Breath (Recharge 5-6)" - "desc": "The dracolich casts one of the following spells, requiring no Material\ \ components and using Charisma as the spellcasting ability (spell save **DC 19**,\ \ +11 to hit with spell attacks):\n\n At will: [detect-magic-xphb (spells)]],\ \ [[Ray of Sickness Xphb (level\ \ 2 version)\n\n1/day each: [create-undead-xphb (spells)]]\ \ (level 8 version), [[finger-of-death-xphb (spells)" "name": "Spellcasting"
"legendary_actions": - "desc": "The dracolich moves up to half its [Fly Speed Xphb]],\ \ and it makes one Rend attack." "name": "Pounce" - "desc": "The dracolich uses Spellcasting to cast [[Ray of Sickness Xphb\ \ (level 2 version). The dracolich can't take this action again until the start\ \ of its next turn." "name": "Sickening Ray" - "desc": "Wisdom Saving Throw: **DC 19**, each creature in a 30-foot [Area of Effect Xphb]]\ \ originating from the dracolich. Failure: 11 (`dice: 2d10`) Psychic damage, and the\ \ target has the [[conditions#frightened|Frightened condition\ \ until the end of its next turn. Failure or Success: The dracolich can't\ \ take this action again until the start of its next turn." "name": "Terrifying Presence"
"regional_effects": - "desc": "The region containing a dracolich's lair is warped by its presence, creating\ \ the following effects:" "name": "" - "desc": "- Sapping Mist. The area within 1 mile of the lair is [lightly-obscured-xphb (variant-rules)]]\ \ by pale fog. Whenever a creature other than the dracolich or one of its allies\ \ finishes a [[long-rest-xphb in\ \ that area, it must succeed on a **DC 15** Constitution saving throw or gain 1\ \ [conditions#Exhaustion|Exhaustion]] level. \n- Soul\ \ Drain. Creatures within 1 mile of the lair have [[Advantage Xphb]]\ \ on Death Saving Throws. " - "desc": "If the dracolich is destroyed or moves its lair elsewhere, these effects\ \ end immediately. The effects resume if the dracolich gains a new body (see\ \ its Soul Gem trait)."
"source": - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/dracolich-xmm.webp"```^statblock ## Environment any ## Player-Facing Summary Dracolich xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of dracolich xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around dracolich xmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## Secret Connections *[Hidden from players]* Connected to The Hidden Alliance - Manipulate succession ## Plot Hooks - A journal reveals the truth about a local noble

- A corpse reveals a betrayal about this place
- A journal reveals the truth about the government ## Related Notes - [[Similar Topic 1

- [Contrasting Approach]]
- [[Advanced Version
- [Historical Context]] ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research

## Notes

*Additional notes*
