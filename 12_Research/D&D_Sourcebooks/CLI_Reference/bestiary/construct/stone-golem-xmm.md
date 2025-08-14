---
aliases:
- Stone Golem
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
- world/both
type: monster
updated: '2025-08-12T23:37:35.830316'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-stone-golem-xmm-stone-golem-xmm.svg)

# [[stone-golem-xmm|Stone Golem]]
*Source: Monster Manual (2024) p. 301. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Stone Golem

*Guardian of the Storied and Sacred*

- **Habitat.** Any  
- **Treasure.** None  

Stone golems take varied forms, such as weathered carvings of ancient deities, lifelike sculptures of heroes, or any other shape their makers imagine. No matter their design or the rock from which they're crafted, these golems are strengthened by the magic that animates them, allowing them to follow their creators' orders for centuries.

Stone golems are typically created to protect places of significance to a group, such as a monument to an important event, a leader's tomb, or a faith's sanctuary. Roll on or choose a result from the Stone Golem Orders table to inspire the commands a stone golem follows.

**Stone Golem Orders**

`dice: [](stone-golem-xmm.md#^stone-golem-orders)`

| dice: 1d6 | The Stone Golem Follows Orders To... |
|-----------|--------------------------------------|
| 1 | Allow only those wearing ritual garb to pass. |
| 2 | Cast [[slow-xphb|Slow]] on and aid in apprehending anyone who touches a city's prized relic. |
| 3 | Destroy a dam or bridge at the command of one bearing a ruler's medallion of office. |
| 4 | Obey whoever places a missing crest in its chest, then deactivate for a year. |
| 5 | Reveal a hidden passage to those who recite a leader's final words. |
| 6 | Watch for and do battle with the type of monster that slew the hero it resembles. |
^stone-golem-orders

> [!quote]  
> 
> Exercise discernment when deciding the golem's appearance, as your creation is likely to long outlive its model.


```statblock
"name": "Stone Golem (XMM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "220"
"hit_dice": "21d10 + 105"
"modifier": !!int "3"
"stats":
  - !!int "22"
  - !!int "9"
  - !!int "20"
  - !!int "3"
  - !!int "11"
  - !!int "1"
"speed": "30 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Frightened|frightened]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Common plus two other languages but can't speak"
"cr": "10"
"traits":
  - "desc": "The golem can't shape-shift."
    "name": "Immutable Form"
  - "desc": "The golem has [[advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The golem makes two attacks, using Slam or Force Bolt in any combination."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +10, reach 5 ft. Hit: 15 (2d8 + 6) Bludgeoning\
      \ damage plus 9 (2d8) Force damage."
    "name": "Slam"
  - "desc": "Ranged Attack Roll: +9, range 120 ft. Hit: 22 (4d10) Force damage."
    "name": "Force Bolt"
"bonus_actions":
  - "desc": "The golem casts the [[slow-xphb|Slow]] spell,\
      \ requiring no spell components and using Constitution as the spellcasting ability\
      \ (spell save DC 17).\n"
    "name": "Slow (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/construct/token/stone-golem-xmm.webp"
```
^statblock

## Environment

any

## Player-Facing Summary

Stone golem xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of stone golem xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around stone golem xmm.

## Adventure Hooks

- A rumor ties stone golem xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at stone golem xmm to avert a public scandal.
- A map overlay reveals a hidden approach to stone golem xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
