---

title: kraken-xmm (monstrosity)
type: note
tags:
- note

created: '2025-01-15'
modified: '2025-01-15'

--- # kraken-xmm ---

## Description

Detailed description pending.
title: kraken xmm
aliases:
- Kraken

type: monster
tags:
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/compendium/src/5e/xmm
- world/aquabyssos
- ttrpg-cli/monster/cr/23
- monster
- ttrpg-cli/monster/type/monstrosity/titan
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
updated: '2025-08-12T23:37:35.027690'
world: Both

--- > [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-kraken-xmm-kraken-xmm.svg) # [[Kraken]]

*Source: Monster Manual (2024) p. 187. Available in the SRD and the Free Rules (2024)* ## 🔧 Deep Evaluation Improvements *20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 12_Research-specific enhancement ## Kraken *Leviathan of Legend* - **Habitat.** Underwater - **Treasure.** Any Ancient weapons of the gods, krakens slumber in the deepest oceanic abysses, awaiting their time to rise and dominate the world. These massive, many-tentacled horrors combine overwhelming physical might with formidable cunning. Their powerful limbs shatter ships and topple spires, and they use their control over storms to rain down lightning on their foes. Krakens usually have little interest in mortal affairs. These terrors were created by the gods to wage war in ages long forgotten. Since that era, most krakens have vanished beneath the waves to slumber until the gods call on them again. Some krakens serve divine masters still, protecting deep sea treasures or entire oceans. Others have forsaken their divine creators and pursue their own agendas, manipulating forces beneath the sea and beyond. Krakens rarely appear on the surface, but when they do, they herald times of change and doom. When roused to action, these titans directly attack coastal cities or whole armadas. Kraken onslaughts persist until their wrath is sated, their divine patrons are appeased, or their egos are placated by valuable offerings. Roll on or choose a result from the Kraken Attacks table to inspire what ruin a kraken might unleash. **Kraken Attacks**`dice: [](kraken-xmm.md#^kraken-attacks)`| dice: `dice: 1d8` | The Enraged Kraken... |

|-----------|-----------------------|
| 1 | Abducts the vessel of a leader or another important community member. |
| 2 | Attacks a community from below using flooded ruins, hidden aquifers, or sewers. |
| 3 | Breaks a lighthouse or seaside tower, carrying it and the occupants to a secret island. |
| 4 | Calls down lightning on any ship that enters its aquatic territory. |
| 5 | Carries ships to an inescapable sargassum. |
| 6 | Dams a river or cuts off a city's sea access. |
| 7 | Devours all sea life near a fishing community, threatening it with ruin. |
| 8 | Masterminds an invasion from the sea by merfolk, sahuagin, or storm giants. |

^kraken-attacks ### Kraken Lairs Kraken lairs tend to be sunken temples, eldritch ritual sites, or primeval places of divine power. They might lie deep beneath bodies of fresh or salt water, and they often connect to labyrinths of flooded subterranean tunnels or networks of magical portals. > [!quote] A quote from Malfeore Serrang > > A kraken dreams of casting its tentacles into the heavens and strangling that which birthed it, and when its dream exceeds its reach, it settles for the occasional passing ship.```statblock

"name": "Kraken (XMM)"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "titan"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "481"
"hit_dice": "`dice: 26d20` + 208"
"modifier": !!int "14"
"stats": - !!int "30" - !!int "11" - !!int "26" - !!int "22" - !!int "18" - !!int "20"
"speed": "30 ft., swim 120 ft."
"saves": - "strength": !!int "17" - "dexterity": !!int "7" - "constitution": !!int "15" - "wisdom": !!int "11"
"skillsaves": - "name": "[[skills#History|History" "desc": "+13" - "name": "[skills#Perception|Perception]]" "desc": "+11"
"damage_immunities": "cold, lightning"
"condition_immunities": "[[conditions#frightened|frightened,\ \ [conditions#Grappled|grappled]], [[conditions#Paralyzed|paralyzed,\ \ [conditions#Restrained|restrained]]"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "understands Abyssal, Celestial, Infernal, and Primordial but can't speak;\ \ telepathy 120 ft."
"cr": "23"
"traits": - "desc": "The kraken can breathe air and water." "name": "Amphibious" - "desc": "If the kraken fails a saving throw, it can choose to succeed instead." "name": "Legendary Resistance (4/Day, or 5/Day in Lair)" - "desc": "The kraken deals double damage to objects and structures." "name": "Siege Monster"
"actions": - "desc": "The kraken makes two Tentacle attacks and uses Fling, Lightning Strike,\ \ or Swallow." "name": "Multiattack" - "desc": "Melee Attack Roll: +17, reach 30 ft. Hit: 24 (`dice: 4d6` + 10) Bludgeoning\ \ damage. The target has the [[conditions#Grappled|Grappled\ \ condition (escape **DC 20**) from one of ten tentacles, and it has the [conditions#Restrained|Restrained]]\ \ condition until the grapple ends." "name": "Tentacle" - "desc": "The kraken throws a Large or smaller creature [[conditions#Grappled|Grappled\ \ by it to a space it can see within 60 feet of itself that isn't in the air.\ \ Dexterity Saving Throw: **DC 25**, the creature thrown and each creature in\ \ the destination space. Failure: 18 (`dice: 4d8`) Bludgeoning damage, and the target\ \ has the [conditions#prone|Prone]] condition. Success:\ \ Half damage only." "name": "Fling" - "desc": "Dexterity Saving Throw: **DC 23**, one creature the kraken can see within\ \ 120 feet. Failure: 33 (`dice: 6d10`) Lightning damage. Success: Half damage." "name": "Lightning Strike" - "desc": "Dexterity Saving Throw: **DC 25**, one creature [[conditions#Grappled|Grappled\ \ by the kraken (it can have up to four creatures swallowed at a time). Failure:\ \ 23 (`dice: 3d8` + 10) Piercing damage. If the target is Large or smaller, it is swallowed\ \ and no longer [conditions#Grappled|Grappled]]. A swallowed\ \ creature has the [[conditions#Restrained|Restrained condition,\ \ has [Cover Xphb]] against attacks\ \ and other effects outside the kraken, and takes 24 (`dice: 7d6`) Acid damage at the\ \ start of each of its turns.\n\n If the kraken takes 50 damage or more on a\ \ single turn from a creature inside it, the kraken must succeed on a **DC 25**\ \ Constitution saving throw at the end of that turn or regurgitate all swallowed\ \ creatures, each of which falls in a space within 10 feet of the kraken with\ \ the [[conditions#prone|Prone condition. If the kraken\ \ dies, any swallowed creature no longer has the [conditions#Restrained|Restrained]]\ \ condition and can escape from the corpse using 15 feet of movement, exiting\ \ [[conditions#prone|Prone." "name": "Swallow"
"legendary_actions": - "desc": "The kraken uses Lightning Strike." "name": "Storm Bolt" - "desc": "Constitution Saving Throw: **DC 23**, each creature in a 15-foot [Area of Effect Xphb]]\ \ originating from the kraken while it is underwater. Failure: The target\ \ has the [[conditions#Blinded|Blinded and [conditions#Poisoned|Poisoned]]\ \ conditions until the end of the kraken's next turn. The kraken then moves\ \ up to its [[Fly Speed Xphb. Failure\ \ or Success: The kraken can't take this action again until the start of its\ \ next turn." "name": "Toxic Ink"
"regional_effects": - "desc": "The region containing a kraken's lair is twisted by its presence, creating\ \ the following effects:" "name": "" - "desc": "- Ocean Tyrant. The kraken exerts its domice over animals in its\ \ domain. All Beasts within 1 mile of the lair have the [conditions#Charmed|Charmed]]\ \ condition while in that area. \n- Sea and Storms. While in its lair,\ \ the kraken can cast [[weather,\ \ requiring no spell components and using Intelligence as the spellcasting ability.\ \ " - "desc": "If the kraken dies or moves its lair elsewhere, these effects end immediately."
"source": - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/kraken-xmm.webp"```^statblock ## Environment underwater ## Player-Facing Summary Kraken xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices. ## Lore Details Legends speak of kraken xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around kraken xmm. ## DM Notes Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. Parley) and one wildcard complication tied to a faction clock. Reward scouting and map use. ## Related *Links to related content will be added here.* ## Plot Hooks - A letter reveals ancient history about this place

- A noble needs help delivering before winter
- A noble needs help finding before dawn
- A shipment has gone missing and war looms ## Related Notes - [Similar Topic 1]]

- [[Contrasting Approach
- [Advanced Version]]
- [[Historical Context]] ## 12_Research Specific Content Contextual improvement based on 12_Research

## Notes

*Additional notes*
