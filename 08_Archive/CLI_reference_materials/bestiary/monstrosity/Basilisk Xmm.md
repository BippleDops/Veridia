---
aliases:
- Basilisk
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
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
- world/both
type: monster
updated: '2025-08-13T12:34:05.301123+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-basilisk-xmm-basilisk-xmm.svg)

# [[3-Mechanics\CLI\bestiary\monstrosity/basilisk-xmm|Basilisk]]
*Source: Monster Manual (2024) p. 32. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Basilisk

*Reptilian Guardian with a Petrifying Gaze*

- **Habitat.** Mountain, Underdark  
- **Treasure.** Any  

Basilisks are ponderous predators with eight clawed legs, crystalline spines, and mighty jaws. Rather than chasing prey, they use their supernatural gaze to turn creatures to stone and then consume these victims at their leisure. While basilisks are most comfortable in subterranean lairs, many are captured and kept by unscrupulous folk seeking guardians for their treasures.

The remains of [[/03_Mechanics/CLI/conditions#Petrified|Petrified]] creatures litter the area where a basilisk hunts. These might be mundane creatures or more unusual beings that had dire encounters with a basilisk. Roll on or choose a result from the [[/03_Mechanics/CLI/conditions#Petrified|Petrified]] Basilisk Victims table to inspire the statues that might appear in a basilisk's hunting grounds. There is a 50 percent chance that any of these statues are missing limbs or broken into pieces.

> [!quote] A quote from X the Mystic's  
> 
> Rule 4: No one carves statues of frightened warriors. If you see one, keep your eyes closed and your ears open.

**Petrified Basilisk Victims**

`dice: [](basilisk-xmm.md#^petrified-basilisk-victims)`

| dice: 1d8 | A Basilisk Used Its Gaze to Petrify... |
|-----------|----------------------------------------|
| 1 | An adventurer with an ornate key hanging around their neck. |
| 2 | Animals like bats, bears, deer, or goats. |
| 3 | A climber clinging to a stalactite. |
| 4 | Itself using a large mirror or shiny surface. |
| 5 | A mimic disguised as a chest full of treasure. |
| 6 | A monster such as an umber hulk or a troglodyte. |
| 7 | Someone caught in a comic pose or making a regrettable face. |
| 8 | A victim now being used as a nest for insects or other vermin. |
^petrified-basilisk-victims

```statblock
"name": "Basilisk (XMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "-1"
"stats":
  - !!int "16"
  - !!int "8"
  - !!int "15"
  - !!int "2"
  - !!int "8"
  - !!int "7"
"speed": "20 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "3"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Piercing damage\
      \ plus 7 (2d6) Poison damage."
    "name": "Bite"
"bonus_actions":
  - "desc": "Constitution Saving Throw: DC 12, each creature in a 30-foot [[/03_Mechanics/CLI/variant-rules/cone-area-of-effect-xphb|Cone]].\
      \ If the basilisk sees its reflection within the [[/03_Mechanics/CLI/variant-rules/cone-area-of-effect-xphb|Cone]],\
      \ the basilisk must make this save. 1st Failure: The target has the [[/03_Mechanics/CLI/conditions#Restrained|Restrained]]\
      \ condition and repeats the save at the end of its next turn if it is still\
      \ [[/03_Mechanics/CLI/conditions#Restrained|Restrained]], ending the effect\
      \ on itself on a success. 2nd Failure: The target has the [[/03_Mechanics/CLI/conditions#Petrified|Petrified]]\
      \ condition instead of the [[/03_Mechanics/CLI/conditions#Restrained|Restrained]]\
      \ condition."
    "name": "Petrifying Gaze (Recharge 4-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/basilisk-xmm.webp"
```
^statblock

## Environment

mountain, underdark

## Player-Facing Summary

Basilisk xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of basilisk xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around basilisk xmm.

## Adventure Hooks

- A rumor ties basilisk xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at basilisk xmm to avert a public scandal.
- A map overlay reveals a hidden approach to basilisk xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
