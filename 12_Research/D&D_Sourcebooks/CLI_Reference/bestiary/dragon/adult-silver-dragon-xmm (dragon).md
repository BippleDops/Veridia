---
title: adult-silver-dragon-xmm (dragon)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# adult-silver-dragon-xmm

---
title: adult silver dragon xmm
aliases:
- Adult Silver Dragon
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/environment/mountain
- monster
- research
- world/both
- active
- ttrpg-cli/monster/type/dragon/metallic
- ttrpg-cli/monster/cr/16
- status/in-progress
created: 
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.776822'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-adult-silver-dragon-xmm-adult-silver-dragon-xmm.svg)

# [[adult silver dragon xmm|Adult Silver Dragon]]
*Source: Monster Manual (2024) p. 279. Available in the SRD and the Free Rules (2024)*  

Adult silver dragons love to spend time among various peoples. Rather than manipulating politics directly, they support individuals who have ambitious goals or who popularize the return of great universities, inspiring athletics events or festivals, and other salutary civic institutions of the past. Silver dragons often surround themselves with like-minded allies and are watchful for hidden threats.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Silver Dragons

*Dragons of Courage and Fairness*

- **Habitat.** Mountain, Urban  
- **Treasure.** Arcana  

Silver dragons work to preserve peace and encourage greatness. They try to live as examples of decency while remaining watchful against evil.

Silver dragons typically dwell amid snow-capped mountains, though aspirations and congeniality drive some to instead live among cosmopolitan societies. Disguised as humanoids, they ally with artists, historians, knights, and humble leaders who learn from the past to create better futures.

Silver dragons take inspiration from legendary heroes and have grand ambitions. Many collect treasures that reflect these interests, such as histories, ancient art, and the gear of famous champions.

### Silver Dragon Lairs

Silver dragons typically lair in picturesque mountain retreats or on sculpted cloud "islands."

```statblock
"name": "Adult Silver Dragon (XMM)"
"size": "Huge"
"type": "dragon"
"subtype": "metallic"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "216"
"hit_dice": "16d12 + 112"
"modifier": !!int "10"
"stats":
  - !!int "27"
  - !!int "10"
  - !!int "25"
  - !!int "16"
  - !!int "13"
  - !!int "22"
"speed": "40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[[skills#History|History]]"
    "desc": "+8"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+11"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+5"
"damage_immunities": "cold"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 21"
"languages": "Common, Draconic"
"cr": "16"
"traits":
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of (A) Paralyzing Breath or (B) Spellcasting to cast [[ice knife xphb|Ice Knife]]."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +13, reach 10 ft. Hit: 17 (2d8 + 8) Slashing damage\
      \ plus 4 (d8) Cold damage."
    "name": "Rend"
  - "desc": "Constitution Saving Throw: DC 20, each creature in a 60-foot [[cone area of effect xphb|Cone]].\
      \ Failure: 54 (12d8) Cold damage. Success: Half damage."
    "name": "Cold Breath (Recharge 5-6)"
      \ 1st Failure: The target has the [[conditions#Incapacitated|Incapacitated]]\
      \ condition until the end of its next turn, when it repeats the save. 2nd Failure:\
      \ The target has the [[conditions#Paralyzed|Paralyzed]] condition,\
      \ and it repeats the save at the end of each of its turns, ending the effect\
      \ on itself on a success. After 1 minute, it succeeds automatically."
    "name": "Paralyzing Breath"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 19, +11 to hit\
      \ with spell attacks):\n\nAt will: [[detect magic xphb|Detect Magic]],\
      \ [[hold monster xphb|Hold Monster]], [[ice knife xphb|Ice Knife]],\
      \ [[shapechange xphb|Shapechange]] (Beast or Humanoid\
      \ form only, no [[temporary hit points xphb|Temporary Hit Points]]\
      \ gained from the spell, and no Concentration or [[temporary hit points xphb|Temporary Hit Points]]\
      \ required to maintain the spell)\n\n1/day each: [[ice storm xphb|Ice Storm]]\
      \ (level 5 version), [[zone of truth xphb|Zone of Truth]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [[hold monster xphb|Hold Monster]].\
      \ The dragon can't take this action again until the start of its next turn."
    "name": "Chill"
  - "desc": "Dexterity Saving Throw: DC 19, each creature in a 60-foot-long, 10-foot-wide\
      \ [[line area of effect xphb|Line]]. Failure:\
      \ 14 (4d6) Cold damage, and the target is pushed up to 30 feet straight away\
      \ from the dragon. Success: Half damage only. Failure or Success: The dragon\
      \ can't take this action again until the start of its next turn."
    "name": "Cold Gale"
  - "desc": "The dragon moves up to half its [[speed xphb|Speed]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
"regional_effects":
  - "desc": "The region containing an adult or ancient silver dragon's lair is changed\
      \ by its magic, creating the following effects:"
    "name": ""
  - "desc": "- Gentle Gusts. Winds buoy creatures that fall within 1 mile of the\
      \ lair. Such creatures descend at a rate of 60 feet per round and take no damage\
      \ from falling.  \n- Sun and Storms. While in its lair, the dragon can cast\
      \ [[control weather xphb|Control Weather]], requiring\
      \ no Material components and using the same spellcasting ability as its Spellcasting\
      \ action.  "
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/adult-silver-dragon-xmm.webp"
```
^statblock

## Environment

mountain, urban

## Player-Facing Summary

Adult silver dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of adult silver dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around adult silver dragon xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- A journal reveals a conspiracy about the government
- A merchant needs help finding before winter

## 12_Research Specific Content

Contextual improvement based on 12_Research
