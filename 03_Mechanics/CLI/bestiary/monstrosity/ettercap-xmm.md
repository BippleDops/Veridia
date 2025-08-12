---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/2
  - ttrpg-cli/monster/environment/forest
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Ettercap
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-ettercap-xmm-ettercap-xmm.svg)

# [Ettercap](3-Mechanics\CLI\bestiary\monstrosity/ettercap-xmm.md)
*Source: Monster Manual (2024) p. 115. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Ettercap

*Venomous Arachnid Abductor*

- **Habitat.** Forest  
- **Treasure.** Implements  

Spiderlike hunters, ettercaps lurk in forested depths and seek prey to drag into their web-choked lairs. These vicious predators have arachnid features and hunched, bipedal frames, and they're notorious for their venomous bites and ability to shoot out webs to entrap their victims. Ettercaps often hunt in small groups alongside giant spiders and mundane spider swarms.

Ettercaps frequently overhunt their environment. Left unchecked, ettercaps might fill whole woodlands with their webs and the cocooned remains of past meals, which puts ettercaps in conflict with Fey. Spiteful ettercaps go out of their way to torment and feed on Fey; they prefer to menace those smaller than themselves, like pixies and sprites. They rarely devour other sapient creatures swiftly, preferring to cocoon their captives and terrorize them for days.

Ettercaps avoid fire, which can quickly burn through their webs and the dead trees where they make their homes.

```statblock
"name": "Ettercap (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "15"
  - !!int "13"
  - !!int "7"
  - !!int "12"
  - !!int "8"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+4"
  - "name": "[Survival](/03_Mechanics/CLI/skills.md#Survival)"
    "desc": "+3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The ettercap can climb difficult surfaces, including along ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The ettercap ignores movement restrictions caused by webs, and the ettercap\
      \ knows the location of any other creature in contact with the same web."
    "name": "Web Walker"
"actions":
  - "desc": "The ettercap makes one Bite attack and one Claw attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage\
      \ plus 2 (d4) Poison damage, and the target has the [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ condition until the start of the ettercap's next turn."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 7 (2d4 + 2) Slashing damage."
    "name": "Claw"
  - "desc": "Dexterity Saving Throw: DC 12, one Large or smaller creature the ettercap\
      \ can see within 30 feet. Failure: The target has the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ condition until the web is destroyed (AC 10; HP 5; [Vulnerability](/03_Mechanics/CLI/variant-rules/vulnerability-xphb.md)\
      \ to Fire damage; [Immunity](/03_Mechanics/CLI/variant-rules/immunity-xphb.md)\
      \ to Bludgeoning, Poison, and Psychic damage)."
    "name": "Web Strand (Recharge 5-6)"
"bonus_actions":
  - "desc": "The ettercap pulls one creature within 30 feet of itself that is [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ by its Web Strand up to 25 feet straight toward itself."
    "name": "Reel"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/ettercap-xmm.webp"
```
^statblock

## Environment

forest

## Player-Facing Summary

Ettercap xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ettercap xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ettercap xmm.

## Adventure Hooks

- A rumor ties ettercap xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ettercap xmm to avert a public scandal.
- A map overlay reveals a hidden approach to ettercap xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
