---
title: Nilbog Mpmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Nilbog Mpmm

---
title: Nilbog Mpmm
aliases:
- Nilbog
type: monster
tags:
- both
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/type/fey/goblinoid
- monster
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/compendium/src/5e/mpmm
- world/both
- research
- active
- ttrpg-cli/monster/environment/forest
- status/in-progress
- ttrpg-cli/monster/size/small
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.556337+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-nilbog-mpmm-nilbog-mpmm.svg)

# [[nilbog mpmm|Nilbog]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 195, Volo's Guide to Monsters p. 182*  

When Maglubiyet conquered the goblin gods, a trickster deity was determined to get the last laugh. Although Maglubiyet shattered its essence, this trickster god survives in a splintered form as possessing spirits that cause disorder unless they are appeased. Goblins have no name for this deity and dare not give it one, lest Maglubiyet use its name to ensnare and crush it as he did their other deities. They call the possessing spirit, as well as the goblin possessed by it, a nilbog ("goblin" spelled backward), and they revel in the chaos a nilbog sows.

Whenever goblinoids form a host, there is a chance that a goblin will become possessed by a nilbog, particularly if the goblins have been mistreated by their betters. The possessed goblin turns into a wisecracking, impish creature fearless of reprisal. This nilbog also gains strange powers that drive others to do the opposite of what they desire. Attacking the possessed goblin is foolhardy, and killing them just prompts the spirit to possess another goblin. The only way to keep a nilbog from wreaking havoc is to treat it well and give it respect and praise.

Among fey courts, the risk of attracting a nilbog has given rise to the practice of always including at least one goblin jester. This jester is allowed to go anywhere and do whatever they please, hopefully preventing a nilbog from manifesting. The position of jester is much sought-after among the courts' goblins, because even if the jester is obviously not a nilbog, the court must indulge their chaotic behavior.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Nilbogism

A nilbog is an invisible spirit that possesses only goblins. When bereft of a host, the spirit has a flying speed of 30 feet, it can't be attacked, and it is immune to all damage and conditions. Acting on initiative count 20 (losing initiative ties), the only action it can take is to attempt to possess a goblin within 5 feet of it.

A goblin targeted by the spirit must succeed on a DC 15 Charisma saving throw or become possessed. While possessed, the goblin uses the nilbog stat block. If the save succeeds, the spirit can't possess that goblin for 24 hours.

If its host is killed or the possession is ended by a spell such as hallow, magic circle, or protection from evil and good, the spirit searches for another goblin to possess. The spirit can leave its host at any time, but it won't do so willingly unless it knows there's another potential host nearby. A goblin stripped of their nilbog spirit reverts to their normal statistics and loses the traits they gained while possessed.

```statblock
"name": "Nilbog (MPMM)"
"size": "Small"
"type": "fey"
"subtype": "goblinoid"
"alignment": "Typically  Chaotic Neutral"
"ac": !!int "13"
"ac_class": "[[leather armor xphb|leather armor]]"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "14"
  - !!int "10"
  - !!int "15"
"speed": "30 ft."
"skillsaves":
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+6"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Goblin"
"cr": "1"
"traits":
  - "desc": "Any creature that attempts to damage the nilbog must first succeed on\
      \ a DC 12 Charisma saving throw or be [[conditions#Charmed|charmed]]\
      \ until the end of the creature's next turn. A creature [[conditions#Charmed|charmed]]\
      \ in this way must use its action praising the nilbog.\n\nThe nilbog can't regain\
      \ hit points, including through magical healing, except through its Reversal\
      \ of Fortune reaction."
    "name": "Nilbogism"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) bludgeoning damage."
    "name": "Fool's Scepter"
  - "desc": "The nilbog targets one creature it can see within 60 feet of it. The\
      \ target must succeed on a DC 12 Wisdom saving throw or take 5 (2d4) psychic\
      \ damage and have disadvantage on its next attack roll before the end of its\
      \ next turn."
    "name": "Mocking Word"
  - "desc": "The nilbog casts one of the following spells, using Charisma as the spellcasting\
      \ ability (spell save DC 12):\n\nAt will: [[mage hand xphb|mage hand]],\
      \ [[tashas hideous laughter xphb|Tasha's hideous laughter]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The nilbog takes the [[actions#Disengage|Disengage]]\
      \ or [[actions#Hide|Hide]] action."
    "name": "Nimble Escape"
"reactions":
  - "desc": "In response to another creature dealing damage to the nilbog, the nilbog\
      \ reduces the damage to 0 and regains 3 (d6) hit points."
    "name": "Reversal of Fortune"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/fey/token/nilbog-mpmm.webp"
```
^statblock

## Environment

forest, hill, underdark

## Player-Facing Summary

Nilbog mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of nilbog mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around nilbog mpmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Secret Connections

*[Hidden from players]* Connected to The Hidden Covenant - Control trade routes

## Plot Hooks

- The authorities needs help finding before winter
- Strange accidents suggest ancient magic
- A noble needs help investigating before dawn

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
