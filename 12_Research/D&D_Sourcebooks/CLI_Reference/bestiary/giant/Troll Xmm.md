# Troll Xmm

---
title: Troll Xmm
aliases:
- Troll
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- monster
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
- ttrpg-cli/monster/environment/swamp
- world/both
- active
- campaign/arc
- research
- ttrpg-cli/monster/environment/forest
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.382003+00:00'
world: Both
---




> [!figure] Creature
![[04_Resources/Assets/Creatures/creature-creature-troll-xmm-troll-xmm.png]]

# [[troll-xmm|Troll]]
*Source: Monster Manual (2024) p. 310. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Troll

*Loathsome, Regenerating Lurker*

- **Habitat.** Arctic, Forest, Hill, Mountain, Swamp, Underdark  
- **Treasure.** None  

Trolls creep forth to prey on smaller creatures and drag captives back to festering lairs. These misshapen brutes can regenerate from wounds and regrow severed body parts—including their heads. A troll's severed limbs continue to move and attack. Unless they're burned by flames or acid, trolls can recover from egregious wounds and seek revenge on those who felled them.

Trolls typically hunt alone, but small groups occasionally cooperate to ambush prey or raid villages. Creatures such as hags and hill giants might convince trolls to work for them in exchange for disgusting meals.

```statblock
"name": "Troll (XMM)"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "94"
"hit_dice": "9d10 + 45"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "20"
  - !!int "7"
  - !!int "9"
  - !!int "7"
"speed": "30 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Giant"
"cr": "5"
"traits":
  - "desc": "If the troll ends any turn [[bloodied-xphb|Bloodied]]\
      \ and took 15+ Slashing damage during that turn, one of the troll's limbs is\
      \ severed, falls into the troll's space, and becomes a [[troll-limb-xmm|Troll Limb]].\
      \ The limb acts immediately after the troll's turn. The troll has 1 [[conditions#Exhaustion|Exhaustion]]\
      \ level for each missing limb, and it grows replacement limbs the next time\
      \ it regains [[hit-points-xphb|Hit Points]]."
    "name": "Loathsome Limbs (4/Day)"
  - "desc": "The troll regains 15 [[hit-points-xphb|Hit Points]]\
      \ at the start of each of its turns. If the troll takes Acid or Fire damage,\
      \ this trait doesn't function on the troll's next turn. The troll dies only\
      \ if it starts its turn with 0 [[hit-points-xphb|Hit Points]]\
      \ and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "The troll makes three Rend attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Slashing damage."
    "name": "Rend"
"bonus_actions":
  - "desc": "The troll moves up to half its [[speed-xphb|Speed]]\
      \ straight toward an enemy it can see."
    "name": "Charge"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/giant/token/troll-xmm.webp"
```
^statblock

## Environment

arctic, forest, hill, mountain, swamp, underdark

## Player-Facing Summary

Troll xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of troll xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around troll xmm.

## Adventure Hooks

- A rumor ties troll xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at troll xmm to avert a public scandal.
- A map overlay reveals a hidden approach to troll xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
