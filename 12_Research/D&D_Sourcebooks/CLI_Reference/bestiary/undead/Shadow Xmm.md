# Shadow Xmm

---
title: Shadow Xmm
aliases:
- Shadow
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/environment/shadowfell
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/type/undead
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/environment/underdark
- research
- world/both
- ttrpg-cli/monster/environment/planar
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.879496+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-shadow-xmm-shadow-xmm.svg)

# [[shadow-xmm|Shadow]]
*Source: Monster Manual (2024) p. 272. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Shadow

*Disembodied, Life-Drinking Shade*

- **Habitat.** Planar (Shadowfell), Underdark, Urban  
- **Treasure.** None  

Shadows are incorporeal Undead that feed on life. They resent the living for possessing the potential and vitality lost to them.

Shadows lurk in dark, lonely places, typically sites that were meaningful to them in life or cursed places with ties to death, sinister magic, or the Shadowfell. Their victims rise as new shadows and prey on the living.

Shadows might resemble the silhouettes of who they were in life or take on more menacing forms. Roll on or choose a result from the Shadow Shapes table to inspire a shadow's form and haunting.

**Shadow Shapes**

`dice: [](shadow-xmm.md#^shadow-shapes)`

| dice: 1d6 | The Shadow Appears As... |
|-----------|--------------------------|
| 1 | A distorted stalker that lurks in the woods. |
| 2 | A fiend that dwells near a wicked ritual site. |
| 3 | Grasping hands that haunt a miser's home. |
| 4 | A grim storybook character that follows those who speak its name. |
| 5 | Its target, acting in eerie pantomime. |
| 6 | An ominous priest that haunts a defiled site. |
^shadow-shapes

```statblock
"name": "Shadow (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "13"
  - !!int "6"
  - !!int "10"
  - !!int "8"
"speed": "40 ft."
"skillsaves":
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+6"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Frightened|frightened]], [[conditions#Grappled|grappled]],\
  \ [[conditions#Paralyzed|paralyzed]], [[conditions#Petrified|petrified]],\
  \ [[conditions#Poisoned|poisoned]], [[conditions#Prone|prone]],\
  \ [[conditions#Restrained|restrained]], [[conditions#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The shadow can move through a space as narrow as 1 inch without expending\
      \ extra movement to do so."
    "name": "Amorphous"
  - "desc": "While in sunlight, the shadow has [[disadvantage-xphb|Disadvantage]]\
      \ on [[d20-test-xphb|D20 Tests]]."
    "name": "Sunlight Weakness"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Necrotic damage,\
      \ and the target's Strength score decreases by d4. The target dies if this reduces\
      \ that score to 0. If a Humanoid is slain by this attack, a Shadow rises from\
      \ the corpse d4 hours later."
    "name": "Draining Swipe"
"bonus_actions":
  - "desc": "While in [[dim-light-xphb|Dim Light]]\
      \ or [[darkness-xphb|Darkness]], the shadow\
      \ takes the Hide action."
    "name": "Shadow Stealth"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/shadow-xmm.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban

## Player-Facing Summary

Shadow xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of shadow xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around shadow xmm.

## Adventure Hooks

- A rumor ties shadow xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at shadow xmm to avert a public scandal.
- A map overlay reveals a hidden approach to shadow xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
