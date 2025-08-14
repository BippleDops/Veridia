# Ancient Red Dragon Xmm

---
title: Ancient Red Dragon Xmm
aliases:
- Ancient Red Dragon
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/environment/mountain
- monster
- ttrpg-cli/monster/cr/24
- ttrpg-cli/monster/type/dragon/chromatic
- research
- world/both
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.987630+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ancient-red-dragon-xmm-ancient-red-dragon-xmm.svg)

# [[ancient-red-dragon-xmm|Ancient Red Dragon]]
*Source: Monster Manual (2024) p. 256. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Ancient red dragons number among the most feared and destructive beings in the multiverse. Few can withstand the wrath of an ancient red dragon that turns its mind toward devastation. These dragons' greed matches their ruinous potential, and they collect vast hoards studded with storied treasures and magic items. Their lairs frequently tap into volcanic depths and might pierce other planes of existence, bringing servants from the Elemental Plane of Fire or the Lower Planes into their service.

## Red Dragons

*Dragons of Greed and Devastation*

- **Habitat.** Hill, Mountain  
- **Treasure.** Any  

Red dragons take whatever they desire and burn to ash anything that stands in their way. These chromatic dragons endlessly desire more—more magic, territory, treasure, or whatever else inflames their cruel ambitions.

Red dragons make their lairs amid perilous cliffs and volcanoes. Within, they amass and fiercely protect hoards of treasure, and many have perfect recall of the hoards' contents and the locations of all they've collected. Should anything go missing, red dragons fly into rages. They don't rest until their treasures are returned and the thieves have burned.

Red dragons believe themselves to be the greatest of all dragons and, by extension, the greatest of all creatures. To them, pillaging and conquering are their right—treasures can find no more honored place than in their hoards, and other creatures are privileged to serve them.

### Red Dragon Lairs

Red dragons make their lairs in smoldering, unapproachable places such as volcanic mountains, burning wastelands, and ruins they've stolen from other creatures.

```statblock
"name": "Ancient Red Dragon (XMM)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"hp": !!int "507"
"hit_dice": "26d20 + 234"
"modifier": !!int "14"
"stats":
  - !!int "30"
  - !!int "10"
  - !!int "29"
  - !!int "18"
  - !!int "15"
  - !!int "27"
"speed": "40 ft., climb 40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "9"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+16"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+7"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
"languages": "Common, Draconic"
"cr": "24"
"traits":
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of Spellcasting to cast [[scorching-ray-xphb|Scorching Ray]]\
      \ (level 3 version)."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +17, reach 15 ft. Hit: 19 (2d8 + 10) Slashing\
      \ damage plus 10 (3d6) Fire damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 24, each creature in a 90-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: 91 (26d6) Fire damage. Success: Half damage."
    "name": "Fire Breath (Recharge 5-6)"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 23, +15 to hit\
      \ with spell attacks):\n\nAt will: [[command-xphb|Command]]\
      \ (level 2 version), [[detect-magic-xphb|Detect Magic]],\
      \ [[scorching-ray-xphb|Scorching Ray]] (level 3 version)\n\
      \n1/day each: [[fireball-xphb|Fireball]] (level\
      \ 6 version), [[scrying-xphb|Scrying]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [[command-xphb|Command]]\
      \ (level 2 version). The dragon can't take this action again until the start\
      \ of its next turn."
    "name": "Commanding Presence"
  - "desc": "The dragon uses Spellcasting to cast [[scorching-ray-xphb|Scorching Ray]]\
      \ (level 3 version). The dragon can't take this action again until the start\
      \ of its next turn."
    "name": "Fiery Rays"
  - "desc": "The dragon moves up to half its [[speed-xphb|Speed]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
"regional_effects":
  - "desc": "The region containing an adult or ancient red dragon's lair is warped\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Burning Heat. The area within 1 mile of the lair is an area of\
      \ extreme heat. A burning creature or object takes an additional d4 Fire damage\
      \ at the start of each of its turns.  \n- Smoldering Haze. The area within\
      \ 1 mile of the lair is [[lightly-obscured-xphb|Lightly Obscured]]\
      \ with clouds of ash. Whenever a creature other than the dragon or one of its\
      \ allies finishes a [[long-rest-xphb|Long Rest]]\
      \ in that area, that creature must succeed on a DC 15 Constitution saving throw\
      \ or have the [[conditions#Poisoned|Poisoned]] condition\
      \ for 1 hour.  "
    "name": ""
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/ancient-red-dragon-xmm.webp"
```
^statblock

## Environment

hill, mountain

## Player-Facing Summary

Ancient red dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ancient red dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ancient red dragon xmm.

## Adventure Hooks

- A rumor ties ancient red dragon xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ancient red dragon xmm to avert a public scandal.
- A map overlay reveals a hidden approach to ancient red dragon xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
