# ancient-silver-dragon-xmm

---
title: ancient silver dragon xmm
aliases:
- Ancient Silver Dragon
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/environment/mountain
- monster
- research
- world/both
- active
- ttrpg-cli/monster/type/dragon/metallic
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.766880'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ancient-silver-dragon-xmm-ancient-silver-dragon-xmm.svg)

# [[ancient-silver-dragon-xmm|Ancient Silver Dragon]]
*Source: Monster Manual (2024) p. 280. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Ancient silver dragons pursue world-wide change. They defend their communities and allies, encouraging them to perform deeds worthy of legend. Some set their sights on other worlds and planes of existence, creating extraplanar alliances or combating multiplanar threats. They might have guises in multiple societies and forge generation-spanning friendships with heroic families or valorous groups.

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
"name": "Ancient Silver Dragon (XMM)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "metallic"
"alignment": "Lawful Good"
"ac": !!int "22"
"hp": !!int "468"
"hit_dice": "24d20 + 216"
"modifier": !!int "14"
"stats":
  - !!int "30"
  - !!int "10"
  - !!int "29"
  - !!int "18"
  - !!int "15"
  - !!int "26"
"speed": "40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "9"
"skillsaves":
  - "name": "[[skills#History|History]]"
    "desc": "+11"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+16"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+7"
"damage_immunities": "cold"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
"languages": "Common, Draconic"
"cr": "23"
"traits":
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of (A) Paralyzing Breath or (B) Spellcasting to cast [[ice-knife-xphb|Ice Knife]]\
      \ (level 2 version)."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +17, reach 15 ft. Hit: 19 (2d8 + 10) Slashing\
      \ damage plus 9 (2d8) Cold damage."
    "name": "Rend"
  - "desc": "Constitution Saving Throw: DC 24, each creature in a 90-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: 67 (15d8) Cold damage. Success: Half damage."
    "name": "Cold Breath (Recharge 5-6)"
  - "desc": "Constitution Saving Throw: DC 24, each creature in a 90-foot [[cone-area-of-effect-xphb|Cone]].\
      \ 1st Failure: The target has the [[conditions#Incapacitated|Incapacitated]]\
      \ condition until the end of its next turn, when it repeats the save. 2nd Failure:\
      \ The target has the [[conditions#Paralyzed|Paralyzed]] condition,\
      \ and it repeats the save at the end of each of its turns, ending the effect\
      \ on itself on a success. After 1 minute, it succeeds automatically."
    "name": "Paralyzing Breath"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 23, +15 to hit\
      \ with spell attacks):\n\nAt will: [[detect-magic-xphb|Detect Magic]],\
      \ [[hold-monster-xphb|Hold Monster]], [[ice-knife-xphb|Ice Knife]]\
      \ (level 2 version), [[shapechange-xphb|Shapechange]]\
      \ (Beast or Humanoid form only, no [[temporary-hit-points-xphb|Temporary Hit Points]]\
      \ gained from the spell, and no Concentration or [[temporary-hit-points-xphb|Temporary Hit Points]]\
      \ required to maintain the spell)\n\n1/day each: [[control-weather-xphb|Control Weather]],\
      \ [[ice-storm-xphb|Ice Storm]] (level 7 version),\
      \ [[teleport-xphb|Teleport]], [[zone-of-truth-xphb|Zone of Truth]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [[hold-monster-xphb|Hold Monster]].\
      \ The dragon can't take this action again until the start of its next turn."
    "name": "Chill"
  - "desc": "Dexterity Saving Throw: DC 23, each creature in a 60-foot-long, 10-foot-wide\
      \ [[line-area-of-effect-xphb|Line]]. Failure:\
      \ 14 (4d6) Cold damage, and the target is pushed up to 30 feet straight away\
      \ from the dragon. Success: Half damage only. Failure or Success: The dragon\
      \ can't take this action again until the start of its next turn."
    "name": "Cold Gale"
  - "desc": "The dragon moves up to half its [[speed-xphb|Speed]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
"regional_effects":
  - "desc": "The region containing an adult or ancient silver dragon's lair is changed\
      \ by its magic, creating the following effects:"
    "name": ""
  - "desc": "- Gentle Gusts. Winds buoy creatures that fall within 1 mile of the\
      \ lair. Such creatures descend at a rate of 60 feet per round and take no damage\
      \ from falling.  \n- Sun and Storms. While in its lair, the dragon can cast\
      \ [[control-weather-xphb|Control Weather]], requiring\
      \ no Material components and using the same spellcasting ability as its Spellcasting\
      \ action.  "
    "name": ""
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/ancient-silver-dragon-xmm.webp"
```
^statblock

## Environment

mountain, urban

## Player-Facing Summary

Ancient silver dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ancient silver dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ancient silver dragon xmm.

## Adventure Hooks

- A rumor ties ancient silver dragon xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ancient silver dragon xmm to avert a public scandal.
- A map overlay reveals a hidden approach to ancient silver dragon xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
