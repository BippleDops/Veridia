---
updated: '2025-08-13T01:18:32.439509+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
- Troglodyte
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-troglodyte-xmm-troglodyte-xmm.svg)

# [Troglodyte](3-Mechanics\CLI\bestiary\monstrosity/troglodyte-xmm.md)
*Source: Monster Manual (2024) p. 309*  

## Troglodyte

*Reeking Subterranean Hunter*

- **Habitat.** Underdark  
- **Treasure.** Armaments  

With features similar to those of pale cave lizards, troglodytes stalk the Underdark in an endless hunt for food. Troglodytes consume almost anything, including bones, giant insects, and other subterranean dwellers. They prey on subterranean communities and those near entrances to the Underdark, stealing livestock and kidnapping residents.

Troglodytes prefer to ambush prey and can change their scale color to blend in with their surroundings. They often climb along cavern walls or emerge from deep fissures to take their prey by surprise. Despite their stealthiness, these stalkers exude a distinctly repulsive stench. Descriptions of what troglodytes smell like span a spectrum as complex as it is vile. This reek nauseates many who smell it, but it can also warn of the presence of troglodytes before they strike.

> [!quote] A quote from Caarey Gelthik, Ghast  
> 
> Smells fine to me.


```statblock
"name": "Troglodyte (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "6"
  - !!int "10"
  - !!int "6"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Troglodyte"
"cr": "1/4"
"traits":
  - "desc": "Constitution Saving Throw: DC 12, any creature (other than a troglodyte)\
      \ that starts its turn in a 5-foot [Emanation](/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the troglodyte. Failure: The target has the [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ condition until the start of its next turn. Success: The target is immune\
      \ to the Stench of all troglodytes for 1 hour."
    "name": "Stench"
  - "desc": "While in sunlight, the troglodyte has [Disadvantage](/03_Mechanics/CLI/variant-rules/disadvantage-xphb.md)\
      \ on ability checks and attack rolls."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Slashing damage."
    "name": "Rend"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/troglodyte-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Troglodyte xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of troglodyte xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around troglodyte xmm.

## Adventure Hooks

- A rumor ties troglodyte xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at troglodyte xmm to avert a public scandal.
- A map overlay reveals a hidden approach to troglodyte xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
