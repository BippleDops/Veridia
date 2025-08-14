# spectator-xmm

---
title: spectator xmm
aliases:
- Spectator
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/environment/underdark
- research
- world/both
- active
- status/in-progress
- status/archived
- ttrpg-cli/monster/cr/3
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.323772'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-spectator-xmm-spectator-xmm.svg)

# [[spectator-xmm|Spectator]]
*Source: Monster Manual (2024) p. 289*  

## Spectator

*Magic-Bound Beholder-Kin*

- **Habitat.** Underdark  
- **Treasure.** Any  

Invoking mysterious rites involving four beholder eyestalks, a spellcaster can mold aberrant dreams into a beholder-like guardian. Called a spectator, the being summoned by such a ritual resembles a beholder with five magical eyes—a central eye and four on stalks arrayed around the crown of the creature's spherical body.

A spectator serves its conjurer for 101 years by guarding something of the spellcaster's choice—typically a treasure or location. The spectator is a reliable guardian and allows only its summoner access to what it protects. A spectator might converse with other creatures, openly discussing its orders and the magic-user who conjured it, but it has no ambitions of its own and won't abandon its post. Should an intruder ignore its warnings, a spectator attempts to drive away the intruder with its magical eye rays.

At the end of its service, a spectator might discorporate back into nothingness or wander away, seeking to learn more of the multiverse.

```statblock
"name": "Spectator (XMM)"
"size": "Medium"
"type": "aberration"
"subtype": "beholder"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "14"
  - !!int "14"
  - !!int "13"
  - !!int "14"
  - !!int "11"
"speed": "5 ft., fly 30 ft. (hover)"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+6"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Prone|prone]]"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon; telepathy 120 ft."
"cr": "3"
"actions":
  - "desc": "The spectator uses Eye Rays twice."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage."
    "name": "Bite"
  - "desc": "The spectator randomly shoots one of the following magical rays at a\
      \ target it can see within 90 feet of itself (roll d4; reroll if the spectator\
      \ has already used that ray during this turn):\n\n- 1 Confusion Ray. Wisdom\
      \ Saving Throw: DC 12. Failure: 5 (2d4) Psychic damage, and the target can't\
      \ take Reactions until the end of its next turn. On its next turn, the target\
      \ can't move, and it uses its action to make a melee or ranged attack against\
      \ a randomly determined creature within range. If the target can't attack, it\
      \ does nothing on that turn.  \n- 2 Paralyzing Ray. Constitution Saving\
      \ Throw: DC 12. Failure: The target has the [[conditions#Paralyzed|Paralyzed]]\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically.\
      \  \n- 3 Fear Ray. Wisdom Saving Throw: DC 12. Failure: 5 (2d4) Psychic\
      \ damage, and the target has the [[conditions#Frightened|Frightened]]\
      \ condition until the end of its next turn.  \n- 4 Wounding Ray. Constitution\
      \ Saving Throw: DC 12. Failure: 16 (3d10) Necrotic damage. Success: Half\
      \ damage.  "
    "name": "Eye Rays"
"reactions":
  - "desc": "Trigger: The spectator succeeds on a saving throw against a spell, or\
      \ a spell's attack roll misses it. _Response—_Dexterity Saving Throw: DC 12,\
      \ one creature the spectator can see within 120 feet. Failure: 10 (3d6) Force\
      \ damage."
    "name": "Spell Reflection"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/spectator-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Spectator xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of spectator xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around spectator xmm.

## Adventure Hooks

- A rumor ties spectator xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at spectator xmm to avert a public scandal.
- A map overlay reveals a hidden approach to spectator xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
