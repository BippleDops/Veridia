---
title: adult-black-dragon-xmm (dragon)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# adult-black-dragon-xmm

---
title: adult black dragon xmm
aliases:
- Adult Black Dragon
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/huge
- monster
- ttrpg-cli/monster/type/dragon/chromatic
- ttrpg-cli/monster/cr/14
- world/both
- research
- ttrpg-cli/monster/environment/swamp
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.760280'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-adult-black-dragon-xmm-adult-black-dragon-xmm.svg)

# [[Black Dragon Xmm]]
*Source: Monster Manual (2024) p. 39. Available in the SRD and the Free Rules (2024)*  

By the time they're adults, black dragons are among the greatest terrors in the lands they claim. Wretched swamps and monster-haunted ruins grow more dismal and spread under an adult black dragon's influence. Morbid cultists and doomsayers frequently gather in the dragon's service, bringing with them undead terrors that answer to the black dragon and aid it in spreading ruin to nearby bastions of beauty and peace.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Black Dragons

*Dragons of Decay and Despair*

- **Habitat.** Swamp  
- **Treasure.** Relics  

Black dragons delight in suffering and ruin. While other chromatic dragons scheme for power and wealth, these dragons seek to tear down all they see and rule over what remains.

Black dragons are terrifying creatures with curved horns and withered visages suggestive of fiendish skulls. They typically inhabit stagt swamps, crumbling ruins, or places of magical or environmental corruption. Their acid breath scars their domains, eroding the features from ancient statues and leaving nature with festering wounds.

Black dragons hoard tarnished symbols of hope and relics of fallen empires. The more sought-after the treasure, the more black dragons prize it—particularly if they were responsible for it being lost.

### Black Dragon Lairs

Black dragons lurk in dismal ruins, polluted bogs, or other sites gripped by decay.

```statblock
"name": "Adult Black Dragon (XMM)"
"size": "Huge"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "195"
"hit_dice": "17d12 + 85"
"modifier": !!int "12"
"stats":
  - !!int "23"
  - !!int "14"
  - !!int "21"
  - !!int "13"
  - !!int "19"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+11"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+7"
"damage_immunities": "acid"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "14"
"traits":
  - "desc": "The dragon can breathe air and water."
    "name": "Amphibious"
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of Spellcasting to cast [[Melfs Acid Arrow Xphb]]\
      \ (level 3 version)."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +11, reach 10 ft. Hit: 13 (2d6 + 6) Slashing damage\
      \ plus 4 (d8) Acid damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 18, each creature in a 60-foot-long, 5-foot-wide\
      \ [[Area of Effect Xphb]]. Failure:\
      \ 54 (12d8) Acid damage. Success: Half damage."
    "name": "Acid Breath (Recharge 5-6)"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 17, +9 to hit\
      \ with spell attacks):\n\nAt will: [[detect-magic-xphb (spells)]],\
      \ [[Fear Xphb]], [[Melfs Acid Arrow Xphb]]\
      \ (level 3 version)\n\n1/day each: [[Speak With Dead Xphb]],\
      \ [[vitriolic-sphere-xphb (spells)]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "Dexterity Saving Throw: DC 17, one creature the dragon can see within\
      \ 120 feet. Failure: 22 (4d10) Poison damage, and the target has [[Advantage Xphb]]\
      \ on saving throws to maintain [[conditions#Concentration|Concentration]]\
      \ until the end of its next turn. Failure or Success: The dragon can't take\
      \ this action again until the start of its next turn."
    "name": "Cloud of Insects"
  - "desc": "The dragon uses Spellcasting to cast [[Fear Xphb]].\
      \ The dragon can't take this action again until the start of its next turn."
    "name": "Frightful Presence"
  - "desc": "The dragon can move up to half its [[Fly Speed Xphb]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
"regional_effects":
  - "desc": "The region containing an adult or ancient black dragon's lair is warped\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Acrid Haze. Odorous and stifling fog covers the area within 1 mile\
      \ of the lair, rendering that area [[lightly-obscured-xphb (variant-rules)]].\
      \ Travel for creatures other than the dragon and its allies takes twice the\
      \ usual time in that area.  \n- Foul Water. Water sources within 1 mile\
      \ of the lair are supernaturally fouled. A creature that drinks such water must\
      \ succeed on a DC 15 Constitution saving throw or have the [[conditions#Poisoned|Poisoned]]\
      \ condition for 1 hour.  "
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/adult-black-dragon-xmm.webp"
```
^statblock

## Environment

swamp

## Player-Facing Summary

Adult black dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of adult black dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around adult black dragon xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Secret Connections

*[Hidden from players]* Connected to The Shadow Alliance - Control trade routes

## Plot Hooks

- A map reveals ancient history about the cult
- Strange dreams suggest a conspiracy
- Someone is protecting a witness for love

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
