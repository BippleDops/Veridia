---
aliases:
- Adult Blue Dragon
created: null
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- active
- both
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon/chromatic
- world/both
type: monster
updated: '2025-08-13T12:34:06.006644+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-adult-blue-dragon-xmm-adult-blue-dragon-xmm.svg)

# [[3-Mechanics\CLI\bestiary\dragon/adult-blue-dragon-xmm|Adult Blue Dragon]]
*Source: Monster Manual (2024) p. 49. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Adult blue dragons command small empires, which might be territories of subjugated followers, shadowy criminal networks, or cultic enclaves. Endlessly suspicious and wary of rivals, these dragons enact elaborate schemes to ruin their foes, test the loyalty of their servants, and ensure their dominance for centuries.

## Blue Dragons

*Dragons of Tyranny and Tempests*

- **Habitat.** Desert  
- **Treasure.** Relics  

Arrogant and imperious, blue dragons are chromatic dragons that crave control and collect followers like other dragons hoard treasure. They seek to transform their territories into empires, domains to be feared by nations.

Blue dragons have sharp features with piercing horns and scales that range from sapphire to the shades of stormy skies. They dwell in deserts and badlands, particularly regions with dramatic spires from whose tops they might see for miles. They seek lairs near sites of symbolic power, such as the abandoned fortresses of giants, the colossi of fallen empires, or monuments raised by their followers.

Regalia of rulership and artistic masterpieces fill blue dragons' hoards. These dragons have no interest in treasures that are common or flawed, preferring one-of-a-kind gemstones, the crowns of fallen royals, and magic items capable of spreading the dragons' influence.

### Blue Dragon Lairs

Blue dragons dwell in arid lands. Their lairs might be death traps meant to entomb invaders or ostentatious fortresses where they plot domination.

```statblock
"name": "Adult Blue Dragon (XMM)"
"size": "Huge"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "212"
"hit_dice": "17d12 + 102"
"modifier": !!int "10"
"stats":
  - !!int "25"
  - !!int "10"
  - !!int "23"
  - !!int "16"
  - !!int "15"
  - !!int "20"
"speed": "40 ft., burrow 30 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+12"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+5"
"damage_immunities": "lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "16"
"traits":
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks. It can replace one attack with a\
      \ use of Spellcasting to cast [[/03_Mechanics/CLI/spells/shatter-xphb|Shatter]]."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +12, reach 10 ft. Hit: 16 (2d8 + 7) Slashing damage\
      \ plus 5 (d10) Lightning damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 19, each creature in a 90-foot-long, 5-foot-wide\
      \ [[/03_Mechanics/CLI/variant-rules/line-area-of-effect-xphb|Line]]. Failure:\
      \ 60 (11d10) Lightning damage. Success: Half damage."
    "name": "Lightning Breath (Recharge 5-6)"
  - "desc": "The dragon casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 18):\n\nAt\
      \ will: [[/03_Mechanics/CLI/spells/detect-magic-xphb|Detect Magic]], [[/03_Mechanics/CLI/spells/invisibility-xphb|Invisibility]],\
      \ [[/03_Mechanics/CLI/spells/mage-hand-xphb|Mage Hand]], [[/03_Mechanics/CLI/spells/shatter-xphb|Shatter]]\n\
      \n1/day each: [[/03_Mechanics/CLI/spells/scrying-xphb|Scrying]], [[/03_Mechanics/CLI/spells/sending-xphb|Sending]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The dragon uses Spellcasting to cast [[/03_Mechanics/CLI/spells/invisibility-xphb|Invisibility]]\
      \ on itself, and it can fly up to half its [[/03_Mechanics/CLI/variant-rules/fly-speed-xphb|Fly Speed]].\
      \ The dragon can't take this action again until the start of its next turn."
    "name": "Cloaked Flight"
  - "desc": "The dragon uses Spellcasting to cast [[/03_Mechanics/CLI/spells/shatter-xphb|Shatter]].\
      \ The dragon can't take this action again until the start of its next turn."
    "name": "Sonic Boom"
  - "desc": "The dragon makes one Rend attack."
    "name": "Tail Swipe"
"regional_effects":
  - "desc": "The region containing an adult or ancient blue dragon's lair is changed\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Sinkholes. Sinkholes form more frequently in the area within 1\
      \ mile of the lair. Whenever a creature in that area other than the dragon and\
      \ its allies finishes a [[/03_Mechanics/CLI/variant-rules/long-rest-xphb|Long Rest]],\
      \ roll d20. On a 1, a sinkhole opens beneath the creature, and the creature\
      \ must succeed on a DC 15 Dexterity saving throw or fall 2d4 × 10 feet into\
      \ the sinkhole.  \n- Spiteful Storms. Dust devils and thunderstorms rage\
      \ within 1 mile of the lair. The area is [[/03_Mechanics/CLI/variant-rules/lightly-obscured-xphb|Lightly Obscured]].\
      \  "
    "name": ""
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/adult-blue-dragon-xmm.webp"
```
^statblock

## Environment

coastal, desert

## Player-Facing Summary

Adult blue dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of adult blue dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around adult blue dragon xmm.

## Adventure Hooks

- A rumor ties adult blue dragon xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at adult blue dragon xmm to avert a public scandal.
- A map overlay reveals a hidden approach to adult blue dragon xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
