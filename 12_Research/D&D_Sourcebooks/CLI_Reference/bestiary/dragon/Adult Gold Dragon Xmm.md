# Adult Gold Dragon Xmm

---
title: Adult Gold Dragon Xmm
aliases:
- Adult Gold Dragon
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- world/surface
- ttrpg-cli/monster/size/huge
- monster
- research
- world/both
- active
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/type/dragon/metallic
- ttrpg-cli/monster/environment/forest
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:06.021361+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-adult-gold-dragon-xmm-adult-gold-dragon-xmm.svg)

# [[adult-gold-dragon-xmm|Adult Gold Dragon]]
*Source: Monster Manual (2024) p. 145. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Adult gold dragons act subtly, frequently changing their shape to resemble harmless animals or cultivating personas so they can pass as common people.

## Gold Dragons

*Dragons of Hope and Majesty*

- **Habitat.** Forest, Grassland  
- **Treasure.** Arcana  

Gold dragons work to make the world a better place. The most powerful of the metallic dragons, these awe-inspiring dragons strive to protect that which is good and bend fate toward a brighter future. Their kind dispositions don't prevent gold dragons from engaging in combat when necessary, though, and they exhale brilliant flames and weakening magic to rout their foes.

Gold dragons favor grasslands and pristine forests, frequently dwelling near awe-inspiring natural wonders or guarding monuments from ancient civilizations. In their lairs, gold dragons hoard coins and gems, but they frequently put their treasure to use in pursuit of greater goals. They often use their riches to buy rare lore books, pay informants, or patronize idealistic adventurers.

### Gold Dragon Lairs

Gold dragons make their homes in places of natural and magical wonder.

```statblock
"name": "Adult Gold Dragon (XMM)"
"size": "Huge"
"type": "dragon"
"subtype": "metallic"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "243"
"hit_dice": "18d12 + 126"
"modifier": !!int "14"
"stats":
  - !!int "27"
  - !!int "14"
  - !!int "25"
  - !!int "16"
  - !!int "15"
  - !!int "24"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "8"
"skillsaves":
  - "name": "[[skills#Insight|Insight]]"
    "desc": "+8"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+14"
  - "name": "[[skills#Persuasion|Persuasion]]"
    "desc": "+13"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+8"
"damage_immunities": "fire"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 24"
"languages": "Common, Draconic"
"cr": "17"
"traits":
  - "desc": "The dragon can breathe air and water."
    "name": "Amphibious"
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of (A) Spellcasting to cast [[guiding-bolt-xphb|Guiding Bolt]]\
      \ (level 2 version) or (B) Weakening Breath."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +14, reach 10 ft. Hit: 17 (2d8 + 8) Slashing damage\
      \ plus 4 (d8) Fire damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 21, each creature in a 60-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: 66 (12d10) Fire damage. Success: Half damage."
    "name": "Fire Breath (Recharge 5-6)"
  - "desc": "Strength Saving Throw: DC 21, each creature that isn't currently affected\
      \ by this breath in a 60-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: The target has [[disadvantage-xphb|Disadvantage]]\
      \ on Strength-based [[d20-test-xphb|D20 Tests]]\
      \ and subtracts 3 (d6) from its damage rolls. It repeats the save at the end\
      \ of each of its turns, ending the effect on itself on a success. After 1 minute,\
      \ it succeeds automatically."
    "name": "Weakening Breath"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 21, +13 to hit\
      \ with spell attacks):\n\nAt will: [[detect-magic-xphb|Detect Magic]],\
      \ [[guiding-bolt-xphb|Guiding Bolt]] (level 2 version),\
      \ [[shapechange-xphb|Shapechange]] (Beast or Humanoid\
      \ form only, no [[temporary-hit-points-xphb|Temporary Hit Points]]\
      \ gained from the spell, and no Concentration or [[temporary-hit-points-xphb|Temporary Hit Points]]\
      \ required to maintain the spell)\n\n1/day each: [[flame-strike-xphb|Flame Strike]],\
      \ [[zone-of-truth-xphb|Zone of Truth]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "Charisma Saving Throw: DC 21, one creature the dragon can see within\
      \ 120 feet. Failure: 10 (3d6) Force damage, and the target has the [[conditions#Incapacitated|Incapacitated]]\
      \ condition and is transported to a harmless demiplane until the start of the\
      \ dragon's next turn, at which point it reappears in an unoccupied space of\
      \ the dragon's choice within 120 feet of the dragon. Failure or Success: The\
      \ dragon can't take this action again until the start of its next turn."
    "name": "Banish"
  - "desc": "The dragon uses Spellcasting to cast [[guiding-bolt-xphb|Guiding Bolt]]\
      \ (level 2 version)."
    "name": "Guiding Light"
  - "desc": "The dragon moves up to half its [[speed-xphb|Speed]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
"regional_effects":
  - "desc": "The region containing an adult or ancient gold dragon's lair is altered\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Dream Messenger. While in its lair, the dragon can cast [[dream-xphb|Dream]],\
      \ requiring no Material components and using Charisma as the spellcasting ability.\
      \ When casting the spell this way, the dragon can target any creature within\
      \ 6 miles.  \n- Foretelling Fog. The area within 1 mile of the lair is [[lightly-obscured-xphb|Lightly\
      \ Obscured]] by opalescent\
      \ fog. While in that area, creatures can't be [[conditions#Surprised|surprised]],\
      \ as the fog swirls into shapes that warn of danger.  "
    "name": ""
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/adult-gold-dragon-xmm.webp"
```
^statblock

## Environment

forest, grassland

## Player-Facing Summary

Adult gold dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of adult gold dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around adult gold dragon xmm.

## Adventure Hooks

- A rumor ties adult gold dragon xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at adult gold dragon xmm to avert a public scandal.
- A map overlay reveals a hidden approach to adult gold dragon xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
