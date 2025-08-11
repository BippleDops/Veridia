---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1-4
  - ttrpg-cli/monster/environment/abyss
  - ttrpg-cli/monster/environment/planar
  - ttrpg-cli/monster/size/small
  - ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Dretch
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-dretch-xmm-dretch-xmm.svg)

# [Dretch](3-Mechanics\CLI\bestiary\fiend/dretch-xmm.md)
*Source: Monster Manual (2024) p. 103. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Lone dretches serve other demons or evil magic-users. They are erratic, filthy, and violent, and they demonstrate little sense of self-preservation.

## Dretches

*Demons of Frenzy and Vulgarity*

- **Habitat.** Planar (Abyss)  
- **Treasure.** None  

The servants and victims of greater demons, dretches embody petty instincts, chaotic impulses, and violent urges. Dretches exist in unfathomable numbers in the depths of the Abyss, where their reeking throngs fill vast demonic hordes.

> [!quote] A quote from Jaranda, Expert on the Abyss  
> 
> Ah, the infinite wonders of the Abyss. If there's anything you don't like, you'll find it here.


```statblock
"name": "Dretch (XMM)"
"size": "Small"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "18"
"hit_dice": "4d6 + 4"
"modifier": !!int "0"
"stats":
  - !!int "12"
  - !!int "11"
  - !!int "12"
  - !!int "5"
  - !!int "8"
  - !!int "3"
"speed": "20 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Abyssal; telepathy 60 ft. (works only with creatures that understand\
  \ Abyssal)"
"cr": "1/4"
"actions":
  - "desc": "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Slashing damage."
    "name": "Rend"
  - "desc": "Constitution Saving Throw: DC 11, each creature in a 10-foot [Emanation](/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the dretch. Failure: The target has the [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)\
      \ condition until the end of its next turn. While [Poisoned](/03_Mechanics/CLI/conditions.md#Poisoned),\
      \ the creature can take either an action or a [Bonus Action](/03_Mechanics/CLI/variant-rules/bonus-action-xphb.md)\
      \ on its turn, not both, and it can't take Reactions."
    "name": "Fetid Cloud (1/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/dretch-xmm.webp"
```
^statblock

## Environment

planar, abyss

## Player-Facing Summary

Dretch xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of dretch xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around dretch xmm.

## Adventure Hooks

- A rumor ties dretch xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at dretch xmm to avert a public scandal.
- A map overlay reveals a hidden approach to dretch xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
