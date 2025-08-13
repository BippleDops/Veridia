---
aliases:
- Young Black Dragon
created: 2025-08-11
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
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon/chromatic
- world/both
type: monster
updated: '2025-08-13T12:34:06.027797+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-young-black-dragon-xmm-v1-young-black-dragon-xmm.svg)

# [[3-Mechanics\CLI\bestiary\dragon/young-black-dragon-xmm|Young Black Dragon]]
*Source: Monster Manual (2024) p. 38. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Most young black dragons claim a hidden lair—typically a dismal place accessible through deadly ruins or a treacherous bog. They delight in exploiting fearful servants and might terrorize small communities or impress groups of kobolds or troglodytes into their service. Some ally themselves with powerful undead such as death knights and vampires or aberrations such as aboleths and kuo-toa.

## Black Dragons

*Dragons of Decay and Despair*

- **Habitat.** Swamp  
- **Treasure.** Relics  

Black dragons delight in suffering and ruin. While other chromatic dragons scheme for power and wealth, these dragons seek to tear down all they see and rule over what remains.

Black dragons are terrifying creatures with curved horns and withered visages suggestive of fiendish skulls. They typically inhabit stagnant swamps, crumbling ruins, or places of magical or environmental corruption. Their acid breath scars their domains, eroding the features from ancient statues and leaving nature with festering wounds.

Black dragons hoard tarnished symbols of hope and relics of fallen empires. The more sought-after the treasure, the more black dragons prize it—particularly if they were responsible for it being lost.

### Black Dragon Lairs

Black dragons lurk in dismal ruins, polluted bogs, or other sites gripped by decay.

```statblock
"name": "Young Black Dragon (XMM)"
"size": "Large"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"modifier": !!int "5"
"stats":
  - !!int "19"
  - !!int "14"
  - !!int "17"
  - !!int "12"
  - !!int "11"
  - !!int "15"
"speed": "40 ft., fly 80 ft., swim 40 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+5"
"damage_immunities": "acid"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 16"
"languages": "Common, Draconic"
"cr": "7"
"traits":
  - "desc": "The dragon can breathe air and water."
    "name": "Amphibious"
"actions":
  - "desc": "The dragon makes three Rend attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 10 ft. Hit: 9 (2d4 + 4) Slashing damage\
      \ plus 3 (d6) Acid damage."
    "name": "Rend"
  - "desc": "Dexterity Saving Throw: DC 14, each creature in a 30-foot-long, 5-foot-wide\
      \ [[/03_Mechanics/CLI/variant-rules/line-area-of-effect-xphb|Line]]. Failure:\
      \ 49 (14d6) Acid damage. Success: Half damage."
    "name": "Acid Breath (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/young-black-dragon-xmm.webp"
```
^statblock

## Environment

swamp

## Player-Facing Summary

Young black dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of young black dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around young black dragon xmm.

## Adventure Hooks

- A rumor ties young black dragon xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at young black dragon xmm to avert a public scandal.
- A map overlay reveals a hidden approach to young black dragon xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
