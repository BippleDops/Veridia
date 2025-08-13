---
aliases:
- Satyr Revelmaster
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
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/feywild
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
- world/both
type: monster
updated: '2025-08-12T23:37:35.282713'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-satyr-revelmaster-xmm-satyr-revelmaster-xmm.svg)

# [Satyr Revelmaster](3-Mechanics\CLI\bestiary\fey/satyr-revelmaster-xmm.md)
*Source: Monster Manual (2024) p. 268*  

Satyr revelmasters use magical music to change the moods of other creatures. They do so to keep their celebrations exciting and to ward off foes.

## Satyrs

*Horned and Hoofed Revelers*

- **Habitat.** Forest, Planar (Feywild)  
- **Treasure.** Implements  

Satyrs embody the untamed joys of the wilderness. They indulge in sprees of merrymaking—eating, drinking, performing, fighting, and frolicking.

```statblock
"name": "Satyr Revelmaster (XMM)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"modifier": !!int "7"
"stats":
  - !!int "12"
  - !!int "18"
  - !!int "12"
  - !!int "12"
  - !!int "14"
  - !!int "17"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "7"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Acrobatics](/03_Mechanics/CLI/skills.md#Acrobatics)"
    "desc": "+7"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Performance](/03_Mechanics/CLI/skills.md#Performance)"
    "desc": "+9"
"senses": "passive Perception 15"
"languages": "Common, Elvish, Sylvan"
"cr": "6"
"traits":
  - "desc": "The satyr has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The satyr makes three Prance attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Bludgeoning\
      \ damage, and the target has the [Charmed](/03_Mechanics/CLI/conditions.md#Charmed)\
      \ condition until the start of the satyr's next turn."
    "name": "Prance"
  - "desc": "The satyr conjures a charming or frightening song. Wisdom Saving Throw:\
      \ DC 14, each enemy in a 60-foot [Emanation](/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the satyr. Failure: The target is subjected to the song's\
      \ effect:\n\n- Charming. The target has the [Charmed](/03_Mechanics/CLI/conditions.md#Charmed)\
      \ condition for 1 minute. While [Charmed](/03_Mechanics/CLI/conditions.md#Charmed),\
      \ the target has the [Incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated)\
      \ condition and uses all its movement to dance in place. The effect ends on\
      \ the target if it takes any damage.  \n- Frightening. 10 (2d6 + 3) Psychic\
      \ damage, and the target has the [Frightened](/03_Mechanics/CLI/conditions.md#Frightened)\
      \ condition for 1 minute. If the target ends its turn out of line of sight from\
      \ the satyr, the condition ends on it.  "
    "name": "Fey Melody (Recharge 4-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fey/token/satyr-revelmaster-xmm.webp"
```
^statblock

## Environment

forest, planar, feywild

## Player-Facing Summary

Satyr revelmaster xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of satyr revelmaster xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around satyr revelmaster xmm.

## Adventure Hooks

- A rumor ties satyr revelmaster xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at satyr revelmaster xmm to avert a public scandal.
- A map overlay reveals a hidden approach to satyr revelmaster xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
