# Invisible Stalker Xmm

---
title: Invisible Stalker Xmm
aliases:
- Invisible Stalker
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/type/elemental
- research
- ttrpg-cli/monster/size/large
- world/both
- active
- ttrpg-cli/monster/cr/6
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.727679+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-invisible-stalker-xmm-invisible-stalker-xmm.svg)

# [[invisible-stalker-xmm|Invisible Stalker]]
*Source: Monster Manual (2024) p. 180. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Invisible Stalker

*Unseen Magical Assassin*

- **Habitat.** Urban  
- **Treasure.** None  

Magic and malice give form to invisible stalkers, bodiless spirits of the air. These elusive beings pass unseen with nothing more than a stirring of air. They control powerful winds capable of moving objects and battering foes. Magic-users conjure these creatures to serve as killers and thieves. [[conditions#Invisible|Invisible]] stalkers relentlessly pursue their quarry, and they rarely leave evidence of their crimes.

In rare cases, an invisible stalker lingers in the world without a spellcaster controlling it. Roll on or choose a result from the Uncontrolled [[conditions#Invisible|Invisible]] Stalkers table to inspire why one of these monsters lurks in an area without a direct command.

**Uncontrolled Invisible Stalkers**

`dice: [](invisible-stalker-xmm.md#^uncontrolled-invisible-stalkers)`

| dice: 1d6 | The Invisible Stalker Is... |
|-----------|-----------------------------|
| 1 | The breath of an infamous god or monster. |
| 2 | A guardian of a hidden portal or magical site. |
| 3 | The lingering violent thoughts of someone killed in a great battle. |
| 4 | A manifestation of uncontrolled magic. |
| 5 | A servant of an evil elemental ruler such as Yan-C-Bin (the Elemental Prince of Evil Air). |
| 6 | Unable to complete its duty and tries to create circumstances allowing it to fulfill its task. |
^uncontrolled-invisible-stalkers

> [!quote]  
> 
> As detectives, we seek truth by eliminating the impossible, ever mindful that the impossible might also be seeking to eliminate us.


```statblock
"name": "Invisible Stalker (XMM)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "97"
"hit_dice": "13d10 + 26"
"modifier": !!int "7"
"stats":
  - !!int "16"
  - !!int "19"
  - !!int "14"
  - !!int "10"
  - !!int "15"
  - !!int "11"
"speed": "50 ft., fly 50 ft. (hover)"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+8"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+10"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Grappled|grappled]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned]],\
  \ [[conditions#Prone|prone]], [[conditions#Restrained|restrained]],\
  \ [[conditions#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "Common, Primordial (Auran)"
"cr": "6"
"traits":
  - "desc": "The stalker can enter an enemy's space and stop there. It can move through\
      \ a space as narrow as 1 inch without expending extra movement to do so."
    "name": "Air Form"
  - "desc": "The stalker has the [[conditions#Invisible|Invisible]]\
      \ condition."
    "name": "Invisibility"
"actions":
  - "desc": "The stalker makes three Wind Swipe attacks. It can replace one attack\
      \ with a use of Vortex."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Force damage."
    "name": "Wind Swipe"
  - "desc": "Constitution Saving Throw: DC 14, one Large or smaller creature in\
      \ the stalker's space. Failure: 7 (1d8 + 3) Thunder damage, and the target\
      \ has the [[conditions#Grappled|Grappled]] condition (escape\
      \ DC 13). Until the grapple ends, the target can't cast spells with a Verbal\
      \ component and takes 7 (2d6) Thunder damage at the start of each of the stalker's\
      \ turns."
    "name": "Vortex"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/invisible-stalker-xmm.webp"
```
^statblock

## Environment

urban

## Player-Facing Summary

Invisible stalker xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of invisible stalker xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around invisible stalker xmm.

## Adventure Hooks

- A rumor ties invisible stalker xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at invisible stalker xmm to avert a public scandal.
- A map overlay reveals a hidden approach to invisible stalker xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
