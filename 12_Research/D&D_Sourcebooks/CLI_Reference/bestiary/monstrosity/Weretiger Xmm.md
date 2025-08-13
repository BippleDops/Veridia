---
aliases:
- Weretiger
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
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/monstrosity/lycanthrope
- world/both
- world/surface
type: monster
updated: '2025-08-13T12:34:05.342940+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-weretiger-xmm-v1-weretiger-xmm.svg)

# [[3-Mechanics\CLI\bestiary\monstrosity/weretiger-xmm|Weretiger]]
*Source: Monster Manual (2024) p. 326. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Weretiger

*Changed by the Power of the Tiger*

- **Habitat.** Desert, Forest, Grassland  
- **Treasure.** Armaments  

Weretigers shape-shift from humanoid forms into tigers or tiger-humanoid hybrids. Although they can transform at will or when their magical nature demands, many weretigers are nocturnal and transform into their bestial shapes at night. Some weretigers' transformations might also be tied to the crescent moon, seasons, or momentous events. Weretigers often view their abilities as a blessing or a family honor, and they use their shape-shifting abilities to defend something with historic importance. Roll on or choose a result from the Weretiger Wards table to inspire what a weretiger defends.

**Weretiger Wards**

`dice: [](weretiger-xmm.md#^weretiger-wards)`

| dice: 1d4 | The Weretiger Protects A... |
|-----------|-----------------------------|
| 1 | Legendary weapon or symbol of rulership. |
| 2 | Proving ground for prophesied heroes. |
| 3 | Rare species of magical plant or animal. |
| 4 | Sacred fountain with magical waters. |
^weretiger-wards

> [!quote] A quote from Delmair Rallyhorn, Weretiger  
> 
> I hunt evil like the great cat hunts its prey, but evil will not long yield to blade alone. It takes strength, honor, and sometimes a little more.


```statblock
"name": "Weretiger (XMM)"
"size": "Small or Medium"
"type": "monstrosity"
"subtype": "lycanthrope"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "13"
  - !!int "11"
"speed": "30 ft., 40 ft. (tiger form only)"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common (can't speak in tiger form)"
"cr": "4"
"actions":
  - "desc": "The weretiger makes two attacks, using Scratch or Longbow in any combination.\
      \ It can replace one attack with a Bite attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 12 (2d8 + 3) Piercing damage.\
      \ If the target is a Humanoid, it is subjected to the following effect. Constitution\
      \ Saving Throw: DC 13. Failure: The target is cursed. If the cursed target\
      \ drops to 0 [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]],\
      \ it instead becomes a Weretiger under the DM's control and has 10 [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]].\
      \ Success: The target is immune to this weretiger's curse for 24 hours."
    "name": "Bite (Tiger or Hybrid Form Only)"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage."
    "name": "Scratch"
  - "desc": "Ranged Attack Roll: +4, range 150/600 ft. Hit: 11 (2d8 + 2) Piercing\
      \ damage."
    "name": "Longbow (Humanoid or Hybrid Form Only)"
"bonus_actions":
  - "desc": "The weretiger moves up to its [[/03_Mechanics/CLI/variant-rules/speed-xphb|Speed]]\
      \ without provoking [[/03_Mechanics/CLI/actions#Opportunity%20Attack|Opportunity Attacks]].\
      \ At the end of this movement, the weretiger can take the Hide action."
    "name": "Prowl (Tiger or Hybrid Form Only)"
  - "desc": "The weretiger shape-shifts into a Large tiger-humanoid hybrid or a Large\
      \ tiger, or it returns to its true humanoid form. Its game statistics, other\
      \ than its size, are the same in each form. Any equipment it is wearing or carrying\
      \ isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/weretiger-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland

## Player-Facing Summary

Weretiger xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of weretiger xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around weretiger xmm.

## Adventure Hooks

- A rumor ties weretiger xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at weretiger xmm to avert a public scandal.
- A map overlay reveals a hidden approach to weretiger xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
