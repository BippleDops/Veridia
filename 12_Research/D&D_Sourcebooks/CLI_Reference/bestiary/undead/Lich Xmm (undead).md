---

title: Lich Xmm (undead)
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # Lich Xmm ---

## Description

Detailed description pending.
title: Lich Xmm
aliases:
- Lich

type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/undead/wizard
- monster
- research
- world/both
- ttrpg-cli/monster/environment/any
- active
- status/in-progress
- ttrpg-cli/monster/cr/21

created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.895413+00:00'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-demilich-xmm-demilich-xmm.svg) # [[Demilich Xmm (undead)]]

*Source: Monster Manual (2024) p. 196. Available in the SRD and the Free Rules (2024)* ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Lich *Deathless Master of Magic* - **Habitat.** Any - **Treasure.** Arcana Some nefarious magic-users carry out forbidden necromantic rituals that sever their souls from their bodies to turn themselves into liches, masters of magic and undeath. With their souls preserved in hidden relics, liches puppet their own corpses as they pursue ambitions free from mortal bonds. Liches possess exceptional cunning and magical prowess, and they use their unnatural immortality to pursue arcane secrets few could grasp in a single life. Uncanny agendas lead them to plumb the secrets of life, the multiverse, godhood, and less fathomable topics. Careless of mortal lives or desires, liches go to any lengths to achieve their goals. A lich's age and origin influences its form. Older liches appear as little more than brittle skeletons clad in the rotten finery of forgotten empires, while younger liches more closely resemble living creatures and are clad in contemporary garb. Many cloak themselves in illusions of their idealized mortal forms. Although liches don't fear death, they're not free from the ravages of time. Over ages, some liches lose their connection to time and the physical world, degenerating into demiliches. ### Lich Spirit Jars The process of becoming a lich is involved, dangerous, and unique to each would-be lich. If the rite succeeds, the lich's soul is bound to a spirit jar, a specially prepared magical repository. This relic anchors the lich's spirit to the world and preserves it should the lich's body be destroyed. A lich can be slain only if its spirit jar is ruined. As such, a lich goes to great lengths to hide and protect its spirit jar. Spirit jars are typically small, well-made objects that were meaningful to a lich in life. Roll on or choose a result from the Lich Spirit Jar table to inspire where a lich hides its soul. **Lich Spirit Jars**`dice: [](lich-xmm.md#^lich-spirit-jars)`| dice: 1d8 | The Lich's Spirit Jar Is... |


|-----------|-----------------------------|
| 1 | A bottle or puzzle box inscribed with sigils. |
| 2 | A contract folded into a paper figure. |
| 3 | The first magic item the lich created. |
| 4 | A hollow figurine of a deity or monster. |
| 5 | An hourglass with its sands floating in stasis. |
| 6 | A locket or signet ring with a noble crest. |
| 7 | A rune-etched egg. |
| 8 | The skull of the lich's mentor. |

^lich-spirit-jars ### Lich Lairs Liches create secluded libraries of magical lore and arcane laboratories hidden within extraplanar bastions, fortresses with cursed reputations, or other such deadly sanctuaries. > [!quote] A quote from Rudolph van Richten > > Ambition can become an addiction of the mind and spirit. It builds beyond a driving flame into an insidious inferno that burns a mage hollow until only the desire for more magical power remains```statblock

"name": "Lich (XMM)"
"size": "Medium"
"type": "undead"
"subtype": "wizard"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "315"
"hit_dice": "42d8 + 126"
"modifier": !!int "17"
"stats": - !!int "11" - !!int "16" - !!int "21" - !!int "14"
"speed": "30 ft."
"saves": - "dexterity": !!int "10" - "constitution": !!int "10" - "intelligence": !!int "12" - "wisdom": !!int "9"
"skillsaves": - "name": "[[skills#Arcana|Arcana]]" "desc": "+19" - "name": "[[skills#History|History]]" "desc": "+12" - "name": "[[skills#Insight|Insight]]" "desc": "+9" - "name": "[[skills#Perception|Perception]]"
"damage_resistances": "cold, lightning"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\ \ [[conditions#frightened|frightened]], [[conditions#Paralyzed|paralyzed]],\ \ [[conditions#Poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "all"
"cr": "21"
"traits": - "desc": "If the lich fails a saving throw, it can choose to succeed instead." "name": "Legendary Resistance (4/Day, or 5/Day in Lair)" - "desc": "If destroyed, the lich reforms in d10 days if it has a spirit jar, reviving\ \ with all its [[hit-points-xphb (variant-rules)]].\ \ The new body appears in an unoccupied space within the lich's lair." "name": "Spirit Jar"
"actions": - "desc": "The lich makes three attacks, using Eldritch Burst or Paralyzing Touch\ \ in any combination." "name": "Multiattack" - "desc": "Melee or Ranged Attack Roll: +12, reach 5 ft. Or range 120 ft. Hit:\ \ 31 (4d12 + 5) Force damage." "name": "Eldritch Burst" - "desc": "Melee Attack Roll: +12, reach 5 ft. Hit: 15 (3d6 + 5) Cold damage,\ \ and the target has the [[conditions#Paralyzed|Paralyzed]]\ \ condition until the start of the lich's next turn." "name": "Paralyzing Touch" - "desc": "The lich casts one of the following spells, using Intelligence as the\ \ spellcasting ability (spell save DC 20):\n\n At will: [[detect-magic-xphb (spells)]],\ \ [[detect-thoughts-xphb (spells)]], [[dispel-magic-xphb (spells)]] \ Magic]], [[fireball-xphb (spells)]]\ \ (level 5 version), [[see-invisibility-xphb (spells)]],\ \ [[Lightning Bolt Xphb]] (level 5\ \ version), [[mage-hand-xphb (spells)]], [[Prestidigitation Xphb]]\n\ \n2/day each: [[animate-dead-xphb (spells)]],\ \ [[Dimension Door Xphb]], [[plane-shift-xphb (spells)]]\n\ \n1/day each: [[chain-lightning-xphb (spells)]],\ \ [[finger-of-death-xphb (spells)]], [[power-word-kill-xphb (spells)]] \ Word Kill]], [[Scrying Xphb]]" "name": "Spellcasting"
"reactions": - "desc": "The lich casts [[counterspell-xphb (spells)]]\ \ or [[Shield]] in response to the spell's\ \ trigger, using the same spellcasting ability as Spellcasting.\n" "name": "Protective Magic"
"legendary_actions": - "desc": "The lich teleports up to 60 feet to an unoccupied space it can see, and\ \ each creature within 10 feet of the space it left takes 11 (2d10) Necrotic\ \ damage." "name": "Deathly Teleport" - "desc": "Constitution Saving Throw: DC 20, each creature that isn't an Undead\ \ in a 20-foot [[Area of Effect Xphb]]\ \ originating from the lich. Failure: 31 (9d6) Necrotic damage. Success:\ \ Half damage. Failure or Success: The lich can't take this action again until\ \ the start of its next turn." "name": "Disrupt Life" - "desc": "The lich casts [[Fear Xphb]], using the\ \ same spellcasting ability as Spellcasting. The lich can't take this action\ \ again until the start of its next turn.\n" "name": "Frightening Gaze"
"regional_effects": - "desc": "The region containing a lich's lair is warped by its presence, creating\ \ the following effects:" "name": "" - "desc": "- All-Seeing. While in its lair, the lich can cast [[clairvoyance-xphb (spells)]],\ \ requiring no spell components and using the same spellcasting ability as its\ \ Spellcasting action. \n- Inevitable Siphon. Whenever a Humanoid dies\ \ within 1 mile of the lair, its soul is immediately consumed by the lich. A\ \ Humanoid whose soul is consumed in this way can be brought back to life only\ \ by a True Resurrection or [[wish-xphb (spells)]] spell.\ \ " - "desc": "If the lich is destroyed or moves its lair elsewhere, these effects end\ \ immediately. These effects resume if the lich gains a new body (see its Spirit\ \ Jar trait)."
"source": - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/lich-xmm.webp"```^statblock ## Environment any ## Player-Facing Summary Lich xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of lich xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around lich xmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research ## 12_Research Specific Content Contextual improvement based on 12_Research


## Notes

*Additional notes*
