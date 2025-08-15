---
title: Ultroloth Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Ultroloth Xmm

---
title: Ultroloth Xmm
aliases:
- Ultroloth
type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/fiend/yugoloth
- ttrpg-cli/monster/cr/13
- monster
- research
- world/both
- ttrpg-cli/monster/environment/planar
- active
- status/in-progress
- ttrpg-cli/monster/environment/lower
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.823625+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ultroloth-xmm-ultroloth-xmm.svg)

# [[Ultroloth Xmm]]
*Source: Monster Manual (2024) p. 311*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Ultroloth

*Yugoloth of Conspiracy and Control*

- **Habitat.** Planar (Lower Planes)  
- **Treasure.** Armaments  

With uncanny patience and fiendish cunning, ultroloths manipulate mortals and their fellow yugoloths alike, seeking to hoard power and spread suffering. These sinister masterminds often work with other yugoloths, but they might compel nearly any creature into their service. If coercion doesn't work, ultroloths use their eerie eyes and innate magic to hypnotize or charm targets.

Ultroloths strive to achieve planes-spanning plots. Roll on or choose a result from the Ultroloth Conspiracies table to inspire such villainy.

**Ultroloth Conspiracies**

`dice: [](ultroloth-xmm.md#^ultroloth-conspiracies)`

| dice: 1d6 | The Ultroloth Schemes To... |
|-----------|-----------------------------|
| 1 | Convince cultists their god has forsaken them. |
| 2 | Destabilize a nation and rule the chaos. |
| 3 | Incite a calamity and hold a world hostage. |
| 4 | Provoke hostilities between immortal armies and sell magic weapons to both sides. |
| 5 | Steal an invention and slay all who know of it. |
| 6 | Unleash fiendish hordes on a foe's homeland. |
^ultroloth-conspiracies

```statblock
"name": "Ultroloth (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Neutral Evil"
"ac": !!int "19"
"hp": !!int "221"
"hit_dice": "26d8 + 104"
"modifier": !!int "8"
"stats":
  - !!int "19"
  - !!int "16"
  - !!int "18"
  - !!int "15"
"speed": "30 ft., fly 60 ft. (hover)"
"skillsaves":
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+9"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+7"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+8"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "acid, poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#frightened|frightened]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 17"
"languages": "Abyssal, Infernal; telepathy 120 ft."
"cr": "13"
"traits":
  - "desc": "If the ultroloth dies outside Gehenna, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [[hit-points-xphb (variant-rules)]]\
      \ somewhere in Gehenna."
    "name": "Fiendish Restoration"
  - "desc": "The ultroloth has [[Advantage Xphb]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The ultroloth uses Hypnotic Gaze and makes two Mercurial Whip attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9, reach 15 ft. Hit: 25 (6d6 + 4) Force damage,\
      \ and the ultroloth can teleport the target up to 10 feet to an unoccupied space\
      \ the ultroloth can see that isn't in the air."
    "name": "Mercurial Whip"
  - "desc": "Wisdom Saving Throw: DC 17, each creature in a 30-foot [[Area of Effect Xphb]].\
      \ Failure: 10 (3d6) Psychic damage, and the target has the [[conditions#Stunned|Stunned]]\
      \ condition until the start of the ultroloth's next turn. Success: The target\
      \ is immune to this ultroloth's Hypnotic Gaze for 24 hours."
    "name": "Hypnotic Gaze"
  - "desc": "The ultroloth casts one of the following spells, requiring no Material\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 17):\n\nAt will: [[alter-self-xphb (spells)]],\
      \ [[clairvoyance-xphb (spells)]], [[detect-magic-xphb (spells)]]\n\
      \n1/day each: [[Dimension Door Xphb]],\
      \ [[fireball-xphb (spells)]] (level 5 version), [[wall-of-fire-xphb (spells)]]
      \ of Fire]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The ultroloth casts [[dispel-magic-xphb (spells)]],\
      \ [[see-invisibility-xphb (spells)]] (self only),\
      \ [[Misty Step Xphb]], or [[Suggestion Xphb]],\
      \ requiring no Material components and using the same spellcasting ability as\
      \ Spellcasting.\n"
    "name": "Fiendish Guile (Recharge 4-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/ultroloth-xmm.webp"
```
^statblock

## Environment

planar, lower

## Player-Facing Summary

Ultroloth xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ultroloth xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ultroloth xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## 12_Research Specific Content

Contextual improvement based on 12_Research
