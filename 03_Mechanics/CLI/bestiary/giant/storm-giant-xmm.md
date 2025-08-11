---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/13
  - ttrpg-cli/monster/environment/coastal
  - ttrpg-cli/monster/environment/underwater
  - ttrpg-cli/monster/size/huge
  - ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Storm Giant
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-storm-giant-xmm-storm-giant-xmm.svg)

# [Storm Giant](3-Mechanics\CLI\bestiary\giant/storm-giant-xmm.md)
*Source: Monster Manual (2024) p. 302. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Storm Giant

*Giant of Seas and Skies*

- **Habitat.** Coastal, Underwater  
- **Treasure.** Armaments  

Among the tallest giants, storm giants live amid extreme forces of nature. In palaces at the bottom of the sea and castles floating amid the clouds, they revel in the power of mighty storms. When angered, they can shape the weather and call down devastating lightning. More often, though, these giants watch the rise and fall of nations and interpret supernatural omens, interfering in the world only when they're needed most.

```statblock
"name": "Storm Giant (XMM)"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Good"
"ac": !!int "16"
"hp": !!int "230"
"hit_dice": "20d12 + 100"
"modifier": !!int "7"
"stats":
  - !!int "29"
  - !!int "14"
  - !!int "20"
  - !!int "16"
  - !!int "20"
  - !!int "18"
"speed": "50 ft., fly 25 ft. (hover), swim 50 ft."
"saves":
  - "strength": !!int "14"
  - "constitution": !!int "10"
  - "wisdom": !!int "10"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[Arcana](/03_Mechanics/CLI/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[Athletics](/03_Mechanics/CLI/skills.md#Athletics)"
    "desc": "+14"
  - "name": "[History](/03_Mechanics/CLI/skills.md#History)"
    "desc": "+8"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+10"
"damage_resistances": "cold"
"damage_immunities": "lightning, thunder"
"senses": "darkvision 120 ft., truesight 30 ft., passive Perception 20"
"languages": "Common, Giant"
"cr": "13"
"traits":
  - "desc": "The giant can breathe air and water."
    "name": "Amphibious"
"actions":
  - "desc": "The giant makes two attacks, using Storm Sword or Thunderbolt in any\
      \ combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +14, reach 10 ft. Hit: 23 (4d6 + 9) Slashing damage\
      \ plus 13 (3d8) Lightning damage."
    "name": "Storm Sword"
  - "desc": "Ranged Attack Roll: +14, range 500 ft. Hit: 22 (2d12 + 9) Lightning\
      \ damage, and the target has the [Blinded](/03_Mechanics/CLI/conditions.md#Blinded)\
      \ and [Deafened](/03_Mechanics/CLI/conditions.md#Deafened) conditions until the\
      \ start of the giant's next turn."
    "name": "Thunderbolt"
  - "desc": "Dexterity Saving Throw: DC 18, each creature in a 10-foot-radius, 40-foot-high\
      \ [Cylinder](/03_Mechanics/CLI/variant-rules/cylinder-area-of-effect-xphb.md)\
      \ originating from a point the giant can see within 500 feet. Failure: 55\
      \ (10d10) Lightning damage. Success: Half damage."
    "name": "Lightning Storm (Recharge 5-6)"
  - "desc": "The giant casts one of the following spells, requiring no Material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 18):\n\nAt will:\
      \ [Detect Magic](/03_Mechanics/CLI/spells/detect-magic-xphb.md), [Light](/03_Mechanics/CLI/spells/light-xphb.md)\n\
      \n1/day: [Control Weather](/03_Mechanics/CLI/spells/control-weather-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/giant/token/storm-giant-xmm.webp"
```
^statblock

## Environment

coastal, underwater

## Player-Facing Summary

Storm giant xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of storm giant xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around storm giant xmm.

## Adventure Hooks

- A rumor ties storm giant xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at storm giant xmm to avert a public scandal.
- A map overlay reveals a hidden approach to storm giant xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
