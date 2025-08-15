---
title: adult-red-dragon-xmm (dragon)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# adult-red-dragon-xmm

---
title: adult red dragon xmm
aliases:
- Adult Red Dragon
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/environment/mountain
- monster
- ttrpg-cli/monster/type/dragon/chromatic
- research
- world/both
- ttrpg-cli/monster/cr/17
- active
- status/in-progress
created: 
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.795393'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-adult-red-dragon-xmm-adult-red-dragon-xmm.svg)

# [[Red Dragon Xmm]]
*Source: Monster Manual (2024) p. 255. Available in the SRD and the Free Rules (2024)*  

Adult red dragons are tyrants that claim vast domains and might command armies of followers or significant magical resources. Red dragons rarely pay attention to the nations and claims of smaller creatures, and they might consider entire cities part of their realm. Most red dragons are inattentive rulers, though, spending decades focused on their own comforts, hoards, or magical concerns within their lairs. But when their attention returns to their territories, if they find matters not to their liking, whole lands might burn.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

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
"name": "Adult Red Dragon (XMM)"
"size": "Huge"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "256"
"hit_dice": "19d12 + 133"
"modifier": !!int "12"
"stats":
  - !!int "27"
  - !!int "10"
  - !!int "25"
  - !!int "16"
  - !!int "13"
  - !!int "23"
"speed": "40 ft., climb 40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+13"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+6"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic"
"cr": "17"
"traits":
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of Spellcasting to cast [[Scorching Ray Xphb]]."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +14, reach 10 ft. Hit: 13 (1d10 + 8) Slashing\
      \ damage plus 5 (2d4) Fire damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 21, each creature in a 60-foot [[Area of Effect Xphb]].\
      \ Failure: 59 (17d6) Fire damage. Success: Half damage."
    "name": "Fire Breath (Recharge 5-6)"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 20, +12 to hit\
      \ with spell attacks):\n\nAt will: [[command-xphb (spells)]]\
      \ (level 2 version), [[detect-magic-xphb (spells)]],\
      \ [[Scorching Ray Xphb]]\n\n1/day:\
      \ [[fireball-xphb (spells)]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [[command-xphb (spells)]]\
      \ (level 2 version). The dragon can't take this action again until the start\
      \ of its next turn."
    "name": "Commanding Presence"
  - "desc": "The dragon uses Spellcasting to cast [[Scorching Ray Xphb]].\
      \ The dragon can't take this action again until the start of its next turn."
    "name": "Fiery Rays"
  - "desc": "The dragon moves up to half its [[Fly Speed Xphb]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
"regional_effects":
  - "desc": "The region containing an adult or ancient red dragon's lair is warped\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Burning Heat. The area within 1 mile of the lair is an area of\
      \ extreme heat. A burning creature or object takes an additional d4 Fire damage\
      \ at the start of each of its turns.  \n- Smoldering Haze. The area within\
      \ 1 mile of the lair is [[lightly-obscured-xphb (variant-rules)]]\
      \ with clouds of ash. Whenever a creature other than the dragon or one of its\
      \ allies finishes a [[long-rest-xphb]]\
      \ in that area, that creature must succeed on a DC 15 Constitution saving throw\
      \ or have the [[conditions#Poisoned|Poisoned]] condition\
      \ for 1 hour.  "
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/adult-red-dragon-xmm.webp"
```
^statblock

## Environment

hill, mountain

## Player-Facing Summary

Adult red dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of adult red dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around adult red dragon xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- A shipment has gone missing and evil awakens
- Strange dreams suggest ancient magic

## 12_Research Specific Content

Contextual improvement based on 12_Research
