# Incubus Xmm

---
title: Incubus Xmm
aliases:
- Incubus
type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/fiend
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/cr/4
- monster
- research
- world/both
- ttrpg-cli/monster/environment/planar
- active
- status/in-progress
- ttrpg-cli/monster/environment/lower
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.839126+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-incubus-xmm-incubus-xmm.svg)

# [[incubus-xmm|Incubus]]
*Source: Monster Manual (2024) p. 178. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Incubus

*Life-Leeching Dream Stalker*

- **Habitat.** Planar (Lower Planes)  
- **Treasure.** Any  

Incubi exploit the vulnerability of mortal dreams. Slipping into the homes of sleepers, incubi feed off dreams and replace them with terrifying nightmares. Incubi visit victims nightly until their prey expires. The incubi then hunt for new victims, preferring the loved ones of past targets.

Incubi can transform into succubi and vice versa, taking the forms they need to manipulate foes in dreams or in the flesh.

Those visited by an incubus have recurring nightmares. Roll on or choose a result from the Incubus Nightmares table to inspire these night terrors.

**Incubus Nightmares**

`dice: [](incubus-xmm.md#^incubus-nightmares)`

| dice: 1d8 | The Incubus's Victim Has Dreams Of... |
|-----------|---------------------------------------|
| 1 | An angry family member or authority figure. |
| 2 | Being chased through the wilderness. |
| 3 | Being devoured by animals or monsters. |
| 4 | [[falling-xphb|Falling]], drowning, or suffocating. |
| 5 | A ruinous public embarrassment. |
| 6 | A shadowy intruder or monstrous silhouette. |
| 7 | A traumatic past event. |
| 8 | A visitor with an eerie or enigmatic message. |
^incubus-nightmares

```statblock
"name": "Incubus (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "17"
  - !!int "13"
  - !!int "15"
  - !!int "12"
  - !!int "20"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+9"
  - "name": "[[skills#Insight|Insight]]"
    "desc": "+5"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[skills#Persuasion|Persuasion]]"
    "desc": "+9"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+7"
"damage_resistances": "cold, fire, poison, psychic"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Abyssal, Common, Infernal; telepathy 60 ft."
"cr": "4"
"traits":
  - "desc": "When the incubus finishes a [[long-rest-xphb|Long Rest]],\
      \ it can shape-shift into a [[succubus-xmm|Succubus]],\
      \ using that stat block instead of this one. Any equipment it's wearing or carrying\
      \ isn't transformed."
    "name": "Succubus Form"
"actions":
  - "desc": "The incubus makes two Restless Touch attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 15 (3d6 + 5) Psychic damage,\
      \ and the target is cursed for 24 hours or until the incubus dies. Until the\
      \ curse ends, the target gains no benefit from finishing Short Rests."
    "name": "Restless Touch"
  - "desc": "The incubus casts one of the following spells, requiring no Material\
      \ components and using Charisma as the spellcasting ability (spell save DC 15):\n\
      \nAt will: [[disguise-self-xphb|Disguise Self]],\
      \ [[etherealness-xphb|Etherealness]]\n\n1/day each:\
      \ [[dream-xphb|Dream]], [[hypnotic-pattern-xphb|Hypnotic Pattern]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Wisdom Saving Throw: DC 15, one creature the incubus can see within\
      \ 60 feet. Failure: If the target has 20 [[hit-points-xphb|Hit Points]]\
      \ or fewer, it has the [[conditions#Unconscious|Unconscious]]\
      \ condition for 1 hour, until it takes damage, or until a creature within 5\
      \ feet of it takes an action to wake it. Otherwise, the target takes 18 (4d8)\
      \ Psychic damage."
    "name": "Nightmare (Recharge 6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/incubus-xmm.webp"
```
^statblock

## Environment

planar, lower, urban

## Player-Facing Summary

Incubus xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of incubus xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around incubus xmm.

## Adventure Hooks

- A rumor ties incubus xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at incubus xmm to avert a public scandal.
- A map overlay reveals a hidden approach to incubus xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
