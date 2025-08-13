---
aliases:
- Ancient Green Dragon
created: null
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/chromatic
- world/both
type: monster
updated: '2025-08-12T23:37:35.775945'
world: Both
---

# [[3-Mechanics\CLI\bestiary\dragon/ancient-green-dragon-xmm|Ancient Green Dragon]]
*Source: Monster Manual (2024) p. 154. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Ancient green dragons are creatures of legend, rarely seen by their servants or foes. Via magic and well-hidden agents, these dragons stoke suspicion between allies and undermine noble works. As bonds fray, the dragons reap rewards of greater wealth and control. Eventually the ambitions of ancient green dragons stretch beyond their territories as they seek control over empires, planar realms, or death itself.

## Green Dragons

*Dragons of Deceit and Derision*

- **Habitat.** Forest  
- **Treasure.** Arcana  

From forbidden forest depths, green dragons whisper evils into the world and manipulate the lives of those who listen. Elusive, conniving, and egotistical, these chromatic dragons patiently prey on the fears of shorter-lived beings, corrupting and isolating them. Green dragons might lurk amid labyrinthine wildernesses for centuries without revealing themselves; even their most devoted followers might know them only as the voice of the woodlands or a whisper in their dreams.

Despite their might, most green dragons disdain physical violence, viewing combat as servants' work and preferring to trick foes into dangerous or exploitative scenarios. These dragons collect "baubles" that embody their webs of manipulation and serve as tools of extortion, such as compromising documents, family heirlooms, and sentimental treasures.

### Green Dragon Lairs

Green dragons lair in ancient forests, often shaping stands of massive trees into compounds of interwoven branches, hollow trunks, and caverns amid mighty roots. They might also dwell amid forested ruins, particularly the former homes of those they've conquered.

```statblock
"name": "Ancient Green Dragon (XMM)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "402"
"hit_dice": "23d20 + 161"
"modifier": !!int "15"
"stats":
  - !!int "27"
  - !!int "12"
  - !!int "25"
  - !!int "20"
  - !!int "17"
  - !!int "22"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "10"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Deception|Deception]]"
    "desc": "+13"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+17"
  - "name": "[[/03_Mechanics/CLI/skills#Persuasion|Persuasion]]"
    "desc": "+13"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+8"
"damage_immunities": "poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "22"
"traits":
  - "desc": "The dragon can breathe air and water."
    "name": "Amphibious"
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of Spellcasting to cast [[/03_Mechanics/CLI/spells/mind-spike-xphb|Mind Spike]]\
      \ (level 5 version)."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +15, reach 15 ft. Hit: 17 (2d8 + 8) Slashing damage\
      \ plus 10 (3d6) Poison damage."
    "name": "Rend"
  - "desc": "Constitution Saving Throw: DC 22, each creature in a 90-foot [[/03_Mechanics/CLI/variant-rules/cone-area-of-effect-xphb|Cone]].\
      \ Failure: 77 (22d6) Poison damage. Success: Half damage."
    "name": "Poison Breath (Recharge 5-6)"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 21):\n\nAt\
      \ will: [[/03_Mechanics/CLI/spells/detect-magic-xphb|Detect Magic]], [[/03_Mechanics/CLI/spells/mind-spike-xphb|Mind\
      \ Spike]] (level 5 version)\n\n1/day\
      \ each: [[/03_Mechanics/CLI/spells/geas-xphb|Geas]], [[/03_Mechanics/CLI/spells/modify-memory-xphb|Modify Memory]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [[/03_Mechanics/CLI/spells/mind-spike-xphb|Mind Spike]]\
      \ (level 5 version)."
    "name": "Mind Invasion"
  - "desc": "Constitution Saving Throw: DC 21, each creature in a 30-foot-radius\
      \ [[/03_Mechanics/CLI/variant-rules/sphere-area-of-effect-xphb|Sphere]] centered\
      \ on a point the dragon can see within 90 feet. Failure: 17 (5d6) Poison damage,\
      \ and the target takes a -2 penalty to AC until the end of its next turn. Failure\
      \ or Success: The dragon can't take this action again until the start of its\
      \ next turn."
    "name": "Noxious Miasma"
  - "desc": "The dragon moves up to half its [[/03_Mechanics/CLI/variant-rules/speed-xphb|Speed]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
"regional_effects":
  - "desc": "The region containing an adult or ancient green dragon's lair is warped\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Beast Spies. Tiny Beasts magically gain the ability to understand\
      \ Draconic and can communicate telepathically with the dragon while within 1\
      \ mile of the lair.  \n- Poisonous Thicket. Ordinary plants growing within\
      \ 1 mile of the lair poison the air around them. Whenever a creature other than\
      \ the dragon or its allies finishes a [[/03_Mechanics/CLI/variant-rules/long-rest-xphb|Long Rest]]\
      \ in that area, it must succeed on a DC 15 Constitution saving throw or have\
      \ the [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]] condition for 1 hour.\
      \  "
    "name": ""
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/ancient-green-dragon-xmm.webp"
```
^statblock

## Environment

forest

## Player-Facing Summary

Ancient green dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ancient green dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ancient green dragon xmm.

## Adventure Hooks

- A rumor ties ancient green dragon xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ancient green dragon xmm to avert a public scandal.
- A map overlay reveals a hidden approach to ancient green dragon xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
