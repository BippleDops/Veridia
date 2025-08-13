---
aliases:
- Marilith
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
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
- world/both
type: monster
updated: '2025-08-12T23:37:35.510744'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-marilith-xmm-marilith-xmm.svg)

# [Marilith](3-Mechanics\CLI\bestiary\fiend/marilith-xmm.md)
*Source: Monster Manual (2024) p. 204. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Marilith

*Demon of Cruelty and Viciousness*

- **Habitat.** Planar (Abyss)  
- **Treasure.** Armaments  

Mariliths are six-armed, serpent-like demons that wield lethal, Abyss-forged blades. With these cursed weapons and experience from countless battles, they lead other demons to slaughter virtuous souls. They often command droves of weaker demons.

```statblock
"name": "Marilith (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "220"
"hit_dice": "21d10 + 105"
"modifier": !!int "10"
"stats":
  - !!int "18"
  - !!int "20"
  - !!int "20"
  - !!int "18"
  - !!int "16"
  - !!int "20"
"speed": "40 ft., climb 40 ft."
"saves":
  - "strength": !!int "9"
  - "constitution": !!int "10"
  - "wisdom": !!int "8"
  - "charisma": !!int "10"
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+8"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 18"
"languages": "Abyssal; telepathy 120 ft."
"cr": "16"
"traits":
  - "desc": "If the marilith dies outside the Abyss, its body dissolves into ichor,\
      \ and it gains a new body instantly, reviving with all its [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Abyss."
    "name": "Demonic Restoration"
  - "desc": "The marilith has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The marilith can take one [Reaction](/03_Mechanics/CLI/variant-rules/reaction-xphb.md)\
      \ on every turn of combat."
    "name": "Reactive"
"actions":
  - "desc": "The marilith makes six Pact Blade attacks and uses Constrict."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +10, reach 5 ft. Hit: 10 (1d10 + 5) Slashing damage\
      \ plus 7 (2d6) Necrotic damage."
    "name": "Pact Blade"
  - "desc": "Strength Saving Throw: DC 17, one Medium or smaller creature the marilith\
      \ can see within 5 feet. Failure: 15 (2d10 + 4) Bludgeoning damage. The target\
      \ has the [Grappled](/03_Mechanics/CLI/conditions.md#Grappled) condition (escape\
      \ DC 14), and it has the [Restrained](/03_Mechanics/CLI/conditions.md#Restrained)\
      \ condition until the grapple ends."
    "name": "Constrict"
"bonus_actions":
  - "desc": "The marilith teleports up to 120 feet to an unoccupied space it can see."
    "name": "Teleport (Recharge 5-6)"
"reactions":
  - "desc": "Trigger: The marilith is hit by a melee attack roll while holding a weapon.\
      \ _Response:_ The marilith adds 5 to its AC against that attack, possibly causing\
      \ it to miss."
    "name": "Parry"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/marilith-xmm.webp"
```
^statblock

## Environment

planar, abyss

## Player-Facing Summary

Marilith xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of marilith xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around marilith xmm.

## Adventure Hooks

- A rumor ties marilith xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at marilith xmm to avert a public scandal.
- A map overlay reveals a hidden approach to marilith xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
