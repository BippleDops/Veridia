# Jackalwere Xmm

---
title: Jackalwere Xmm
aliases:
- Jackalwere
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- world/surface
- ttrpg-cli/monster/type/fiend
- monster
- research
- world/both
- active
- status/in-progress
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/environment/desert
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.800442+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-jackalwere-xmm-jackalwere-xmm.svg)

# [[jackalwere-xmm|Jackalwere]]
*Source: Monster Manual (2024) p. 182*  

## Jackalwere

*Shape-Shifting Trickster of the Wilds*

- **Habitat.** Desert, Grassland  
- **Treasure.** Implements  

Indistinguishable from jackals in their natural form, jackalweres shape-shift to deceive others. These shape-shifters can take three forms: a jackal, a human, or a monstrous hybrid of the two. Jackalweres are easily mistaken for werewolves, but jackalweres aren't supernaturally afflicted—their jackal forms are their natural state. Jackalweres also possess magical gazes capable of putting foes to sleep, allowing jackalweres to play their tricks unimpeded or get the upper hand over threats.

Jackalweres dwell in inhospitable wildernesses and pride themselves on their cleverness. They take offense at those who travel through their lands without leaving a gift of treasure or fresh game. Roll on or choose a result from the Jackalwere Tricks table to inspire how a jackalwere repays such slights.

**Jackalwere Tricks**

`dice: [](jackalwere-xmm.md#^jackalwere-tricks)`

| dice: 1d4 | The Jackalwere Tricks Travelers By... |
|-----------|---------------------------------------|
| 1 | Guiding them into wildernesses, then abandoning them. |
| 2 | Mapping a shortcut through a monster's lair. |
| 3 | Putting them to sleep, then stealing mounts or supplies. |
| 4 | Sharing the location of hidden treasure, which turns out to be sunlight on sand or water. |
^jackalwere-tricks

```statblock
"name": "Jackalwere (XMM)"
"size": "Small"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "15"
  - !!int "12"
  - !!int "13"
  - !!int "11"
  - !!int "10"
"speed": "40 ft."
"skillsaves":
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+4"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 90 ft., passive Perception 14"
"languages": "Common"
"cr": "1/2"
"traits":
  - "desc": "The jackalwere has [[advantage-xphb|Advantage]]\
      \ on an attack roll against a creature if at least one of the jackalwere's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [[conditions#Incapacitated|Incapacitated]]\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "The jackalwere makes two Rend or Slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage."
    "name": "Rend (Jackal or Hybrid Form Only)"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Bludgeoning damage."
    "name": "Slam (Human or Hybrid Form Only)"
  - "desc": "Wisdom Saving Throw: DC 10, one creature the jackalwere can see within\
      \ 30 feet (Constructs and Undead succeed automatically). Failure: The target\
      \ has the [[conditions#Unconscious|Unconscious]] condition\
      \ for 10 minutes or until it takes damage or a creature within 5 feet of it\
      \ takes an action to wake it. Success: The target is immune to this jackalwere's\
      \ Sleep Gaze for 24 hours."
    "name": "Sleep Gaze (Recharge 5-6)"
"bonus_actions":
  - "desc": "The jackalwere shape-shifts into a Medium human or a Medium jackal-humanoid\
      \ hybrid, or it returns to its true form (that of a Small jackal). Other than\
      \ its size, its game statistics are the same in each form. Any equipment it\
      \ is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/jackalwere-xmm.webp"
```
^statblock

## Environment

desert, grassland

## Player-Facing Summary

Jackalwere xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of jackalwere xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around jackalwere xmm.

## Adventure Hooks

- A rumor ties jackalwere xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at jackalwere xmm to avert a public scandal.
- A map overlay reveals a hidden approach to jackalwere xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
