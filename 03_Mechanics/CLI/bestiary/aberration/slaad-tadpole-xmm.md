---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1-8
  - ttrpg-cli/monster/environment/limbo
  - ttrpg-cli/monster/environment/planar
  - ttrpg-cli/monster/size/tiny
  - ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Slaad Tadpole
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-slaad-tadpole-xmm-slaad-tadpole-xmm.svg)

# [Slaad Tadpole](3-Mechanics\CLI\bestiary\aberration/slaad-tadpole-xmm.md)
*Source: Monster Manual (2024) p. 284, Player's Handbook (2024) p. 357. Available in the Free Rules (2024)*  

Slaad tadpoles are ravenous, newborn slaadi. They hatch from eggs implanted into living hosts by red slaadi, but they also appear in great numbers in Limbo and other chaotic realms. Under most conditions, a slaad tadpole transforms into a blue slaad—or a green slaad if its host was able to cast spells of level 3 or higher—within `2d12` hours of hatching.

## Slaadi

*Chaos-Spawned Hordes of Limbo*

- **Habitat.** Planar (Limbo)  
- **Treasure.** Any  

Unpredictable slaadi devour and multiply across the Ever-Changing Chaos of Limbo. These toad-like, extraplanar beings embody the endless potentiality of their home plane of existence. While slaadi aren't inherently evil, their impulses are wild and often destructive. Many are driven to propagate through supernatural processes. Unfortunately, these processes typically are fatal for other creatures.

Slaadi have no formal society. Rather, strong slaadi dominate weaker ones. Blue and red slaadi rampage across Limbo and spill into other worlds at the direction of green slaadi. More powerful slaadi have connections to the Spawning Stone, a source of chaotic magic from which the first slaadi originated. The Spawning Stone is hidden deep within Limbo, and legends tie its origins to the modron overlord Primus or the ruinous slaad lords, such as Ssendam, the golden amoeboid terror, and Ygorl, the winged skeleton. These slaad lords and others plot to spread slaadi across the multiverse.

> [!note] Slaad Control Gems
> 
> A slaad born from the Spawning Stone has a magical control gem embedded in its head. If a creature claims the gem, the slaad has the [Charmed](/03_Mechanics/CLI/conditions.md#Charmed) condition and obeys the gem's bearer. The slaad ceases to be [Charmed](/03_Mechanics/CLI/conditions.md#Charmed) if it is harmed by the gem's bearer or the bearer's allies or if the gem is returned to the slaad. A [Greater Restoration](/03_Mechanics/CLI/spells/greater-restoration-xphb.md) spell cast on a slaad destroys the gem, and the slaad ceases to be [Charmed](/03_Mechanics/CLI/conditions.md#Charmed).
> 
> One can obtain a slaad's control gem using a [Wish](/03_Mechanics/CLI/spells/wish-xphb.md) or [Imprisonment](/03_Mechanics/CLI/spells/imprisonment-xphb.md) spell. If the slaad fails its saving throw against [Imprisonment](/03_Mechanics/CLI/spells/imprisonment-xphb.md), the caster gains the gem, and the slaad isn't imprisoned. An [Incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated) slaad's control gem can be removed by spending 1 minute and succeeding on a DC 20 Wisdom ([Medicine](/03_Mechanics/CLI/skills.md#Medicine)) check. Failing this check deals 22 (`4d10`) Piercing damage to the slaad.
^slaad-control-gems

> [!quote] A quote from Jebeel Sloom  
> 
> Fight a slaad and lose, the story's over. Fight a slaad and win, there's a thousand more standing in line just to prove they're tougher.


```statblock
"name": "Slaad Tadpole (XMM)"
"size": "Tiny"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "7"
"hit_dice": "3d4"
"modifier": !!int "2"
"stats":
  - !!int "7"
  - !!int "15"
  - !!int "10"
  - !!int "3"
  - !!int "5"
  - !!int "3"
"speed": "30 ft., burrow 10 ft."
"skillsaves":
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+4"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"senses": "darkvision 60 ft., passive Perception 7"
"languages": "understands Slaad but can't speak"
"cr": "1/8"
"traits":
  - "desc": "The slaad has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Piercing damage."
    "name": "Bite"
"source":
  - "XMM"
  - "XPHB"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/slaad-tadpole-xmm.webp"
```
^statblock

## Environment

planar, limbo

## Player-Facing Summary

Slaad tadpole xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of slaad tadpole xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around slaad tadpole xmm.

## Adventure Hooks

- A rumor ties slaad tadpole xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at slaad tadpole xmm to avert a public scandal.
- A map overlay reveals a hidden approach to slaad tadpole xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
