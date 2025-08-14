---
aliases:
- Wyvern
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
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/dragon
- world/both
type: monster
updated: '2025-08-13T12:34:06.030879+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-wyvern-xmm-v1-wyvern-xmm.svg)

# [[wyvern-xmm|Wyvern]]
*Source: Monster Manual (2024) p. 337. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Wyvern

*Draconic Hunter with a Venomous Sting*

- **Habitat.** Hill, Mountain  
- **Treasure.** Any  

Opportunistic predators, wyverns are draconic ambushers that strike from above. These territorial hunters attack with their fangs and stinger-tipped tails. Wyvern stingers drip with deadly venom, a painful toxin feared by monster hunters and coveted by alchemists.

Wyverns are aggressive and claim sizable territories around the mountains, crags, and ruins where they dwell. Despite their considerable strength, they're opportunistic hunters that target unwitting livestock and groups of encamped travelers. Wyverns usually land only to finish off creatures they've weakened with their poison and strafing attacks. Creatures that fight back or take flight might deter wyverns, convincing them to search for easier prey.

Once wyverns overpower a quarry, they carry it to their cavernous lairs to either consume it in safety or trap it to eat later. Most wyverns don't hoard treasure, but their lairs are littered with the possessions of past victims. It isn't uncommon for wyverns to carry off chests, carts, or small boats along with their prey.

```statblock
"name": "Wyvern (XMM)"
"size": "Large"
"type": "dragon"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "10"
  - !!int "16"
  - !!int "5"
  - !!int "12"
  - !!int "6"
"speed": "30 ft., fly 80 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": ""
"cr": "6"
"actions":
  - "desc": "The wyvern makes one Bite attack and one Sting attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Piercing damage."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Piercing damage\
      \ plus 24 (7d6) Poison damage, and the target has the [[conditions#Poisoned|Poisoned]]\
      \ condition until the start of the wyvern's next turn."
    "name": "Sting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/wyvern-xmm.webp"
```
^statblock

## Environment

hill, mountain

## Player-Facing Summary

Wyvern xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of wyvern xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around wyvern xmm.

## Adventure Hooks

- A rumor ties wyvern xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at wyvern xmm to avert a public scandal.
- A map overlay reveals a hidden approach to wyvern xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
