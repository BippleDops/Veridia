# death-tyrant-xmm

---
title: death tyrant xmm
aliases:
- Death Tyrant
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/cr/14
- ttrpg-cli/monster/size/large
- world/both
- research
- active
- status/in-progress
- status/archived
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.668997'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-death-tyrant-xmm-death-tyrant-xmm.svg)

# [[death-tyrant-xmm|Death Tyrant]]
*Source: Monster Manual (2024) p. 95*  


## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement


## Death Tyrant

*Beholder beyond Death*

- **Habitat.** Underdark  
- **Treasure.** Any  

A death tyrant is a beholder that pursues aberrant goals beyond its death. Ten magical singularities—all that remains of its magical eyes—orbit its floating, cyclopean skull, while the hateful gaze of its central eye socket stifles life and raises the dead.

Beholders typically transform into death tyrants over years when their dreams fixate on death, morbid apotheoses, or journeys to realms inhospitable to life. Some death tyrants rise from the corpses of slain beholders or result from exposure to strange magic or Underdark radiation. Sometimes beholders purposefully pursue this undead state, just as depraved magic-users pursue lichdom, although it is rare, as most beholders already believe themselves to be perfect beings.

No matter how death tyrants come into being, bizarre impulses drive their deathless existences. Their motivations tend to be extreme or beyond the reason of living creatures.

### Death Tyrant Lairs

Death tyrants often lurk deep in the Underdark, in the tunnel-mazes they occupied in life or in the lairs of enemy beholders they conquered. These lairs are devoid of life, as death tyrants change their servants into Undead horrors.

> [!quote] A quote from Journal of Jastus Hollowquill, explorer of Undermountain  
> 
> A cluster of tiny lights descended from a dark crevice in the ceiling. These motes cast an eerie glow on the great, alien skull that hung beneath them.

```statblock
"name": "Death Tyrant (XMM)"
"size": "Large"
"type": "undead"
"subtype": "beholder"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "195"
"hit_dice": "26d10 + 52"
"modifier": !!int "12"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "19"
  - !!int "15"
"speed": "5 ft., fly 40 ft. (hover)"
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+12"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Paralyzed|paralyzed]], [[conditions#Petrified|petrified]],\
  \ [[conditions#Poisoned|poisoned]], [[conditions#prone|prone]]"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "14"
"traits":
  - "desc": "If the death tyrant fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The death tyrant uses Eye Rays three times."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9, reach 5 feet. Hit: 13 (2d8 + 4) Piercing damage."
    "name": "Bite"
  - "desc": "The death tyrant randomly shoots one of the following magical rays at\
      \ a target it can see within 120 feet of itself (roll d10; reroll if the death\
      \ tyrant has already used that ray during this turn):\n\n- 1 Charm Ray.\
      \ Wisdom Saving Throw: DC 17. Failure: 13 (3d8) Psychic damage, and the\
      \ target has the [[conditions#Charmed|Charmed]] condition\
      \ for 1 hour or until it takes damage. Success: Half damage only.  \n- 2\
      \ Paralyzing Ray. Constitution Saving Throw: DC 17. Failure: The target\
      \ has the [[conditions#Paralyzed|Paralyzed]] condition and\
      \ repeats the save at the end of each of its turns, ending the effect on itself\
      \ on a success. After 1 minute, it succeeds automatically.  \n- 3 Fear Ray.\
      \ Wisdom Saving Throw: DC 17. Failure: 10 (3d6) Psychic damage, and the\
      \ target has the [[conditions#frightened|Frightened]] condition\
      \ until the end of its next turn. Success: Half damage only.  \n- 4 Slowing\
      \ Ray. Constitution Saving Throw: DC 17. Failure: 18 (4d8) Necrotic damage.\
      \ Until the end of the target's next turn, the target can't take Reactions;\
      \ its [[speed-xphb|Speed]] is halved; and it\
      \ can take either an action or a [[bonus-action-xphb|Bonus Action]]\
      \ on its turn, not both. Success: Half damage only.  \n- 5 Enervation Ray.\
      \ Constitution Saving Throw: DC 17. Failure: 16 (3d10) Poison damage, and\
      \ the target has the [[conditions#Poisoned|Poisoned]] condition\
      \ until the end of its next turn. While [[conditions#Poisoned|Poisoned]],\
      \ the target can't regain [[hit-points-xphb|Hit Points]].\
      \ Success: Half damage only.  \n- 6 Telekinetic Ray. Strength Saving\
      \ Throw: DC 17 (the target succeeds automatically if it is Gargantuan). Failure:\
      \ The death tyrant moves the target up to 30 feet in any direction. The target\
      \ has the [[conditions#Restrained|Restrained]] condition\
      \ until the start of the death tyrant's next turn or until the death tyrant\
      \ has the [[conditions#Incapacitated|Incapacitated]] condition.\
      \ The death tyrant can also exert fine control on objects with this ray, such\
      \ as manipulating a tool or opening a door or container.  \n- 7 Sleep Ray.\
      \ Wisdom Saving Throw: DC 17 (the target succeeds automatically if it is a\
      \ Construct or an Undead). Failure: The target has the [[conditions#Unconscious|Unconscious]]\
      \ condition for 1 minute. The condition ends if the target takes damage or a\
      \ creature within 5 feet of it takes an action to wake it.  \n- 8 Petrification\
      \ Ray. Constitution Saving Throw: DC 17. 1st Failure: The target has the\
      \ [[conditions#Restrained|Restrained]] condition and repeats\
      \ the save at the end of its next turn if it is still [[conditions#Restrained|Restrained]],\
      \ ending the effect on itself on a success. 2nd Failure: The target has the\
      \ [[conditions#Petrified|Petrified]] condition instead of\
      \ the [[conditions#Restrained|Restrained]] condition.  \n\
      - 9 Disintegration Ray. Dexterity Saving Throw: DC 17. Failure: 36 (8d8)\
      \ Force damage. If the target is a nonmagical object or a creation of magical\
      \ force, a 10-foot [[cube-area-of-effect-xphb|Cube]]\
      \ of it disintegrates into dust. Success: Half damage. Failure or Success:\
      \ If the target is a creature and this damage reduces it to 0 [[hit-points-xphb|Hit Points]],\
      \ it disintegrates into dust.  \n- 10 Death Ray. Dexterity Saving Throw:\
      \ DC 17. Failure: 55 (10d10) Necrotic damage. Success: Half damage. Failure\
      \ or Success: The target dies if the ray reduces it to 0 [[hit-points-xphb|Hit Points]].\
      \  "
    "name": "Eye Rays"
"bonus_actions":
  - "desc": "The death tyrant's central eye emits an imperceptible, magical wave of\
      \ negative energy in a 150-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Creatures in that area can't regain [[hit-points-xphb|Hit Points]]\
      \ until the start of the death tyrant's next turn. An intact Humanoid corpse\
      \ there instantly rises as a [[zombie-xmm|Zombie]]\
      \ under the death tyrant's control and takes its turn immediately after the\
      \ death tyrant on the same initiative count."
    "name": "Negative Energy Cone"
"legendary_actions":
  - "desc": "The death tyrant makes two Bite attacks."
    "name": "Chomp"
  - "desc": "The death tyrant uses Eye Rays."
    "name": "Glare"
"regional_effects":
  - "desc": "The region containing a death tyrant's lair is warped by its presence,\
      \ creating the following effects:"
    "name": ""
  - "desc": "- Negative Energy Suffusion. Whenever a creature within 1 mile of\
      \ the lair regains [[hit-points-xphb|Hit Points]]\
      \ from a spell, it subtracts d10 from the number of [[hit-points-xphb|Hit Points]]\
      \ regained.  \n- Scopophobia. Creatures within 1 mile of the lair feel as\
      \ if they're being watched. Any creature (excluding the death tyrant and its\
      \ allies) that finishes a [[short-rest-xphb|Short Rest]]\
      \ while within 1 mile of the lair must succeed on a DC 15 Wisdom saving throw\
      \ or gain no benefit from that rest.  "
  - "desc": "If the death tyrant dies or moves its lair elsewhere, these effects end\
      \ immediately."
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/death-tyrant-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Death tyrant xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of death tyrant xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around death tyrant xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Plot Hooks

- A map reveals a conspiracy about a local noble
- A letter reveals a conspiracy about a local noble
- Strange accidents suggest a curse