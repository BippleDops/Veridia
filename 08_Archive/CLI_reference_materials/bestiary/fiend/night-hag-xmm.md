---
updated: '2025-08-13T01:18:32.763238+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/lower
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: '#^statblock'
aliases:
- Night Hag
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-night-hag-xmm-night-hag-xmm.svg)

# [Night Hag](3-Mechanics\CLI\bestiary\fiend/night-hag-xmm.md)
*Source: Monster Manual (2024) p. 225. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Night Hag

*Hag of Nightmare and Corruption*

- **Habitat.** Planar (Lower Planes)  
- **Treasure.** Arcana  

Night hags seek mortals to torment and turn to evil. By day, night hags use supernatural deceptions to plague their victims, shape-shifting to pose as other creatures and make their targets believe the world has turned against them. By night, these hags reinforce their tortures with terrifying dreams. Once they force their targets to desperate limits, night hags claim their victims' tormented spirits, capturing them in sinister traps called soul bags. The hags then slip between planes of existence to barter stolen souls to vile magic-users and fiendish entities.

Night hags maintain networks of nefarious customers and collect rumors from across the Lower Planes. These hags might part with their secrets in exchange for magic items and other wicked prices.

```statblock
"name": "Night Hag (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "5"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "16"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[Deception](/03_Mechanics/CLI/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Insight](/03_Mechanics/CLI/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "cold, fire"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed)"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Abyssal, Common, Infernal, Primordial"
"cr": "5"
"traits":
  - "desc": "While within 30 feet of at least two hag allies, the hag can cast one\
      \ of the following spells, requiring no Material components, using the spell's\
      \ normal casting time, and using Intelligence as the spellcasting ability (spell\
      \ save DC 14): [Augury](/03_Mechanics/CLI/spells/augury-xphb.md), [Find Familiar](/03_Mechanics/CLI/spells/find-familiar-xphb.md),\
      \ [Identify](/03_Mechanics/CLI/spells/identify-xphb.md), [Locate Object](/03_Mechanics/CLI/spells/locate-object-xphb.md),\
      \ [Scrying](/03_Mechanics/CLI/spells/scrying-xphb.md), or [Unseen Servant](/03_Mechanics/CLI/spells/unseen-servant-xphb.md).\
      \ The hag must finish a [Long Rest](/03_Mechanics/CLI/variant-rules/long-rest-xphb.md)\
      \ before using this trait to cast that spell again.\n"
    "name": "Coven Magic"
  - "desc": "The hag has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The hag has a soul bag. While holding or carrying the bag, the hag can\
      \ use its Nightmare Haunting action.\n\nThe bag has AC 15, HP 20, and [Resistance](/03_Mechanics/CLI/variant-rules/resistance-xphb.md)\
      \ to all damage. The bag turns to dust if reduced to 0 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md).\
      \ If the bag is destroyed, any souls the bag is holding are released. The hag\
      \ can create a new bag after 7 days."
    "name": "Soul Bag"
"actions":
  - "desc": "The hag makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 13 (2d8 + 4) Slashing damage."
    "name": "Claw"
  - "desc": "The hag casts one of the following spells, requiring no Material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 14):\n\n\
      At will: [Detect Magic](/03_Mechanics/CLI/spells/detect-magic-xphb.md), [Etherealness](/03_Mechanics/CLI/spells/etherealness-xphb.md),\
      \ [Magic Missile](/03_Mechanics/CLI/spells/magic-missile-xphb.md) (level 4 version)\n\
      \n2/day each: [Phantasmal Killer](/03_Mechanics/CLI/spells/phantasmal-killer-xphb.md),\
      \ [Plane Shift](/03_Mechanics/CLI/spells/plane-shift-xphb.md) (self only)"
    "name": "Spellcasting"
  - "desc": "While on the Ethereal Plane, the hag casts [Dream](/03_Mechanics/CLI/spells/dream-xphb.md),\
      \ using the same spellcasting ability as Spellcasting. Only the hag can serve\
      \ as the spell's messenger, and the target must be a creature the hag can see\
      \ on the Material Plane. The spell fails and is wasted if the target is under\
      \ the effect of the [Protection from Evil and Good](/03_Mechanics/CLI/spells/protection-from-evil-and-good-xphb.md)\
      \ spell or within a [Magic Circle](/03_Mechanics/CLI/spells/magic-circle-xphb.md)\
      \ spell.\n\nIf the target takes damage from the [Dream](/03_Mechanics/CLI/spells/dream-xphb.md)\
      \ spell, the target's [Hit Point](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to that damage. If the spell kills the\
      \ target, its soul is trapped in the hag's soul bag, and the target can't be\
      \ raised from the dead until its soul is released.\n"
    "name": "Nightmare Haunting (1/Day; Requires Soul Bag)"
"bonus_actions":
  - "desc": "The hag shape-shifts into a Small or Medium Humanoid, or it returns to\
      \ its true form. Other than its size, its game statistics are the same in each\
      \ form. Any equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/night-hag-xmm.webp"
```
^statblock

## Environment

planar, lower

## Player-Facing Summary

Night hag xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of night hag xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around night hag xmm.

## Adventure Hooks

- A rumor ties night hag xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at night hag xmm to avert a public scandal.
- A map overlay reveals a hidden approach to night hag xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
