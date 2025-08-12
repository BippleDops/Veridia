---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/4
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/environment/urban
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Ghost
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-ghost-xmm-ghost-xmm.svg)

# [Ghost](3-Mechanics\CLI\bestiary\undead/ghost-xmm.md)
*Source: Monster Manual (2024) p. 131. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Ghost

*Lost Soul and Unquiet Spirit*

- **Habitat.** Underdark, Urban  
- **Treasure.** Any  

Ghosts arise when living creatures die in a state of extreme emotion or having left an important task undone. These incorporeal spirits haunt locations that are meaningful to them, lingering until their business is complete or they're put to rest.

Ghosts typically appear as semitransparent versions of the creatures they were in life, though some bear evidence of the wounds that killed them or have nightmarish distortions to their forms. Many have extreme reactions to actions, objects, or individuals that remind them of emotionally charged aspects of their lives. Particularly desperate or vengeful ghosts might possess the living to fulfill their ends.

```statblock
"name": "Ghost (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "11"
"hp": !!int "45"
"hit_dice": "10d8"
"modifier": !!int "1"
"stats":
  - !!int "7"
  - !!int "13"
  - !!int "10"
  - !!int "10"
  - !!int "12"
  - !!int "17"
"speed": "5 ft., fly 40 ft. (hover)"
"damage_resistances": "acid, bludgeoning, cold, fire, lightning, piercing, slashing,\
  \ thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [grappled](/03_Mechanics/CLI/conditions.md#Grappled),\
  \ [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed), [petrified](/03_Mechanics/CLI/conditions.md#Petrified),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned), [prone](/03_Mechanics/CLI/conditions.md#Prone),\
  \ [restrained](/03_Mechanics/CLI/conditions.md#Restrained)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common plus one other language"
"cr": "4"
"traits":
  - "desc": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material\
      \ Plane."
    "name": "Ethereal Sight"
  - "desc": "The ghost can move through other creatures and objects as if they were\
      \ [Difficult Terrain](/03_Mechanics/CLI/variant-rules/difficult-terrain-xphb.md).\
      \ It takes 5 (d10) Force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
"actions":
  - "desc": "The ghost makes two Withering Touch attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 19 (3d10 + 3) Necrotic damage."
    "name": "Withering Touch"
  - "desc": "Wisdom Saving Throw: DC 13, each creature in a 60-foot [Cone](/03_Mechanics/CLI/variant-rules/cone-area-of-effect-xphb.md)\
      \ that can see the ghost and isn't an Undead. Failure: 10 (2d6 + 3) Psychic\
      \ damage, and the target has the [Frightened](/03_Mechanics/CLI/conditions.md#Frightened)\
      \ condition until the start of the ghost's next turn. Success: The target\
      \ is immune to this ghost's Horrific Visage for 24 hours."
    "name": "Horrific Visage"
  - "desc": "Charisma Saving Throw: DC 13, one Humanoid the ghost can see within\
      \ 5 feet. Failure: The target is possessed by the ghost; the ghost disappears,\
      \ and the target has the [Incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated)\
      \ condition and loses control of its body. The ghost now controls the body,\
      \ but the target retains awareness. The ghost can't be targeted by any attack,\
      \ spell, or other effect, except ones that specifically target Undead. The ghost's\
      \ game statistics are the same, except it uses the possessed target's [Speed](/03_Mechanics/CLI/variant-rules/speed-xphb.md),\
      \ as well as the target's Strength, Dexterity, and Constitution modifiers.\n\
      \nThe possession lasts until the body drops to 0 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ or the ghost leaves as a [Bonus Action](/03_Mechanics/CLI/variant-rules/bonus-action-xphb.md).\
      \ When the possession ends, the ghost appears in an unoccupied space within\
      \ 5 feet of the target, and the target is immune to this ghost's [Possession](/03_Mechanics/CLI/variant-rules/possession-xphb.md)\
      \ for 24 hours. Success: The target is immune to this ghost's [Possession](/03_Mechanics/CLI/variant-rules/possession-xphb.md)\
      \ for 24 hours."
    "name": "Possession (Recharge 6)"
  - "desc": "The ghost casts the [Etherealness](/03_Mechanics/CLI/spells/etherealness-xphb.md)\
      \ spell, requiring no spell components and using Charisma as the spellcasting\
      \ ability. The ghost is visible on the Material Plane while on the Border Ethereal\
      \ and vice versa, but it can't affect or be affected by anything on the other\
      \ plane.\n"
    "name": "Etherealness"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/ghost-xmm.webp"
```
^statblock

## Environment

underdark, urban

## Player-Facing Summary

Ghost xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ghost xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ghost xmm.

## Adventure Hooks

- A rumor ties ghost xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ghost xmm to avert a public scandal.
- A map overlay reveals a hidden approach to ghost xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
