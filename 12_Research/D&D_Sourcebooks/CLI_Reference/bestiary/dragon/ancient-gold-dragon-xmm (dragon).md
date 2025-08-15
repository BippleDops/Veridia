---
title: ancient-gold-dragon-xmm (dragon)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# ancient-gold-dragon-xmm

---
title: ancient gold dragon xmm
aliases:
- Ancient Gold Dragon
type: monster
tags:
- world/surface
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/gargantuan
- monster
- ttrpg-cli/monster/cr/24
- research
- world/both
- active
- ttrpg-cli/monster/type/dragon/metallic
- ttrpg-cli/monster/environment/forest
- status/in-progress
created: 
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.768963'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-ancient-gold-dragon-xmm-ancient-gold-dragon-xmm.svg)

# [[ancient-gold-dragon-xmm (dragon)]]
*Source: Monster Manual (2024) p. 146. Available in the SRD and the Free Rules (2024)*  

Ancient gold dragons are wise and mysterious. Many aid virtuous groups, guiding them in secret or patronizing them from afar. Only when stakes are at their highest do ancient gold dragons reveal themselves in all their majesty.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Gold Dragons

*Dragons of Hope and Majesty*

- **Habitat.** Forest, Grassland  
- **Treasure.** Arcana  

Gold dragons work to make the world a better place. The most powerful of the metallic dragons, these awe-inspiring dragons strive to protect that which is good and bend fate toward a brighter future. Their kind dispositions don't prevent gold dragons from engaging in combat when necessary, though, and they exhale brilliant flames and weakening magic to rout their foes.

Gold dragons favor grasslands and pristine forests, frequently dwelling near awe-inspiring natural wonders or guarding monuments from ancient civilizations. In their lairs, gold dragons hoard coins and gems, but they frequently put their treasure to use in pursuit of greater goals. They often use their riches to buy rare lore books, pay informants, or patronize idealistic adventurers.

### Gold Dragon Lairs

Gold dragons make their homes in places of natural and magical wonder.

```statblock
"name": "Ancient Gold Dragon (XMM)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "metallic"
"alignment": "Lawful Good"
"ac": !!int "22"
"hp": !!int "546"
"hit_dice": "28d20 + 252"
"modifier": !!int "16"
"stats":
  - !!int "30"
  - !!int "14"
  - !!int "29"
  - !!int "18"
  - !!int "17"
  - !!int "28"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  - "dexterity": !!int "9"
  - "wisdom": !!int "10"
"skillsaves":
  - "name": "[[skills#Insight|Insight]]"
    "desc": "+10"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+17"
  - "name": "[[skills#Persuasion|Persuasion]]"
    "desc": "+16"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+9"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 27"
"languages": "Common, Draconic"
"cr": "24"
"traits":
  - "desc": "The dragon can breathe air and water."
    "name": "Amphibious"
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of (A) Spellcasting to cast [[Guiding Bolt Xphb]]\
      \ (level 4 version) or (B) Weakening Breath."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +17 to hit, reach 15 ft. Hit: 19 (2d8 + 10) Slashing\
      \ damage plus 9 (2d8) Fire damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 24, each creature in a 90-foot [[Area of Effect Xphb]].\
      \ Failure: 71 (13d10) Fire damage. Success: Half damage."
    "name": "Fire Breath (Recharge 5-6)"
  - "desc": "Strength Saving Throw: DC 24, each creature that isn't currently affected\
      \ by this breath in a 90-foot [[Area of Effect Xphb]].\
      \ Failure: The target has [[Advantage Xphb]]\
      \ on Strength-based [[d20-test-xphb (variant-rules)]]\
      \ and subtracts 5 (d10) from its damage rolls. It repeats the save at the end\
      \ of each of its turns, ending the effect on itself on a success. After 1 minute,\
      \ it succeeds automatically."
    "name": "Weakening Breath"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 24, +16 to hit\
      \ with spell attacks):\n\nAt will: [[detect-magic-xphb (spells)]],\
      \ [[Guiding Bolt Xphb]] (level 4 version),\
      \ [[Shapechange Xphb]] (Beast or Humanoid\
      \ form only, no [[temporary-hit-points-xphb (variant-rules)]]\
      \ gained from the spell, and no Concentration or [[temporary-hit-points-xphb (variant-rules)]]\
      \ required to maintain the spell)\n\n1/day each: [[flame-strike-xphb (spells)]]\
      \ (level 6 version), [[word-of-recall-xphb (spells)]],\
      \ [[zone-of-truth-xphb (spells)]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "Charisma Saving Throw: DC 24, one creature the dragon can see within\
      \ 120 feet. Failure: 24 (7d6) Force damage, and the target has the [[conditions#Incapacitated|Incapacitated]]\
      \ condition and is transported to a harmless demiplane until the start of the\
      \ dragon's next turn, at which point it reappears in an unoccupied space of\
      \ the dragon's choice within 120 feet of the dragon. Failure or Success: The\
      \ dragon can't take this action again until the start of its next turn."
    "name": "Banish"
  - "desc": "The dragon uses Spellcasting to cast [[Guiding Bolt Xphb]]\
      \ (level 4 version)."
    "name": "Guiding Light"
  - "desc": "The dragon moves up to half its [[Fly Speed Xphb]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
"regional_effects":
  - "desc": "The region containing an adult or ancient gold dragon's lair is altered\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Dream Messenger. While in its lair, the dragon can cast [[dream-xphb (spells)]],\
      \ requiring no Material components and using Charisma as the spellcasting ability.\
      \ When casting the spell this way, the dragon can target any creature within\
      \ 6 miles.  \n- Foretelling Fog. The area within 1 mile of the lair is [[lightly-obscured-xphb (variant-rules)]]
      \ Obscured]] by opalescent\
      \ fog. While in that area, creatures can't be [[conditions#Surprised|surprised]],\
      \ as the fog swirls into shapes that warn of danger.  "
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/ancient-gold-dragon-xmm.webp"
```
^statblock

## Environment

forest, grassland

## Player-Facing Summary

Ancient gold dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ancient gold dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ancient gold dragon xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- A noble needs help investigating before the festival
- Strange dreams suggest a portal
- A shipment has gone missing and evil awakens