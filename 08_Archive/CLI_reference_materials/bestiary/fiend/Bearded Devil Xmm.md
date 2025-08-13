---
aliases:
- Bearded Devil
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
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
- world/both
type: monster
updated: '2025-08-12T23:37:35.517401'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-bearded-devil-xmm-bearded-devil-xmm.svg)

# [[3-Mechanics\CLI\bestiary\fiend/bearded-devil-xmm|Bearded Devil]]
*Source: Monster Manual (2024) p. 33. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Bearded Devil

*Devil of Force and Intimidation*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** Armaments  

Bearded devils, also known as barbazus, fill the legions of the Nine Hells. These cruel soldiers follow the orders of diabolical generals as they defend infernal realms, invade Material Plane worlds, and clash against demons in planes-spanning conflicts.

Left to their own devices, bearded devils encourage mortals to act callously and abuse their power, inflating their egos and inspiring petty tyrannies. Villains aligned with the Nine Hells call on bearded devils to serve as guardians, enforce their will, or fight in wicked armies.

Bearded devils' eponymous beards consist of grotesque, tentacle-like growths. These squirming, barb-riddled beards carry poison capable of preventing magical healing. Bearded devils are also known for their distinctive glaives, through which they channel hellish energy. Those struck by these unnatural weapons suffer infernal wounds that grow worse until stanched or magically healed.

```statblock
"name": "Bearded Devil (XMM)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "15"
  - !!int "15"
  - !!int "9"
  - !!int "11"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "strength": !!int "5"
  - "constitution": !!int "4"
  - "charisma": !!int "4"
"damage_resistances": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Frightened|frightened]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft. (unimpeded by magical [[/03_Mechanics/CLI/variant-rules/darkness-xphb|Darkness]]),\
  \ passive Perception 10"
"languages": "Infernal; telepathy 120 ft."
"cr": "3"
"traits":
  - "desc": "The devil has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The devil makes one Beard attack and one Infernal Glaive attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Piercing damage,\
      \ and the target has the [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]]\
      \ condition until the start of the devil's next turn. Until this poison ends,\
      \ the target can't regain [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]."
    "name": "Beard"
  - "desc": "Melee Attack Roll: +5, reach 10 ft. Hit: 8 (1d10 + 3) Slashing damage.\
      \ If the target is a creature and doesn't already have an infernal wound, it\
      \ is subjected to the following effect. Constitution Saving Throw: DC 12.\
      \ Failure: The target receives an infernal wound. While wounded, the target\
      \ loses 5 (d10) [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ at the start of each of its turns. The wound closes after 1 minute, after\
      \ a spell restores [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ to the target, or after the target or a creature within 5 feet of it takes\
      \ an action to stanch the wound, doing so by succeeding on a DC 12 Wisdom ([[/03_Mechanics/CLI/skills#Medicine|Medicine]])\
      \ check."
    "name": "Infernal Glaive"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/bearded-devil-xmm.webp"
```
^statblock

## Environment

planar, nine hells

## Player-Facing Summary

Bearded devil xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of bearded devil xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around bearded devil xmm.

## Adventure Hooks

- A rumor ties bearded devil xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at bearded devil xmm to avert a public scandal.
- A map overlay reveals a hidden approach to bearded devil xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
