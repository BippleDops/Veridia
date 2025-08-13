---
aliases:
- Demilich
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
- ttrpg-cli/monster/cr/18
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
- world/both
type: monster
updated: '2025-08-13T12:34:05.917467+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-demilich-xmm-demilich-xmm.svg)

# [[3-Mechanics\CLI\bestiary\undead/demilich-xmm|Demilich]]
*Source: Monster Manual (2024) p. 96*  

## Demilich

*What Lies beyond Lichdom*

- **Habitat.** Any  
- **Treasure.** Arcana  

A demilich is a skull harboring the remnants of a lich's wicked essence. If the burden of immortality overwhelms a lich, its consciousness turns inward as its body rots away. But if its remains are disturbed, a demilich rises. Demiliches usually appear as skulls adorned with gems or arcane sigils.

### Demilich Lairs

Demiliches jealously guard their deathtrap-laden sanctums. The most notorious of these is the Tomb of Horrors, lair of the infamous Acererak.

```statblock
"name": "Demilich (XMM)"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "180"
"hit_dice": "72d4"
"modifier": !!int "17"
"stats":
  - !!int "1"
  - !!int "20"
  - !!int "10"
  - !!int "20"
  - !!int "17"
  - !!int "20"
"speed": "5 ft., fly 30 ft. (hover)"
"saves":
  - "constitution": !!int "6"
  - "intelligence": !!int "11"
  - "wisdom": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "necrotic, poison, psychic"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Deafened|deafened]],\
  \ [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]], [[/03_Mechanics/CLI/conditions#Frightened|frightened]],\
  \ [[/03_Mechanics/CLI/conditions#Paralyzed|paralyzed]], [[/03_Mechanics/CLI/conditions#Petrified|petrified]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]], [[/03_Mechanics/CLI/conditions#Prone|prone]],\
  \ [[/03_Mechanics/CLI/conditions#Stunned|stunned]]"
"senses": "truesight 120 ft., passive Perception 13"
"languages": ""
"cr": "18"
"traits":
  - "desc": "If the demilich fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
  - "desc": "If the demilich is destroyed, it reforms and regains all its [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ in d10 days unless a [[/03_Mechanics/CLI/spells/wish-xphb|Wish]] spell is\
      \ cast on its remains."
    "name": "Undead Restoration"
"actions":
  - "desc": "The demilich makes three Necrotic Burst attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Attack Roll: +11, reach 5 ft. or range 120 ft. Hit:\
      \ 24 (7d6) Necrotic damage."
    "name": "Necrotic Burst"
  - "desc": "Constitution Saving Throw: DC 19, each creature in a 30-foot [[/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the demilich. Failure: 70 (20d6) Psychic damage. Failure\
      \ or Success: The target has the [[/03_Mechanics/CLI/conditions#Frightened|Frightened]]\
      \ condition until the start of the demilich's next turn."
    "name": "Howl (Recharge 5-6)"
"legendary_actions":
  - "desc": "Constitution Saving Throw: DC 19, one creature the demilich can see\
      \ within 120 feet. Failure: The target's [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Point]]\
      \ maximum decreases by 14 (4d6). Failure or Success: The demilich can't take\
      \ this action again until the start of its next turn."
    "name": "Energy Drain"
  - "desc": "The demilich flies up to its [[/03_Mechanics/CLI/variant-rules/fly-speed-xphb|Fly Speed]],\
      \ shedding grave dust. Each creature within 5 feet of the demilich as it moves\
      \ is targeted once by the following effect. Constitution Saving Throw: DC\
      \ 19. Failure: The target has the [[/03_Mechanics/CLI/conditions#Blinded|Blinded]]\
      \ condition until the end of the demilich's next turn. Failure or Success:\
      \ The demilich can't take this action again until the start of its next turn."
    "name": "Grave-Dust Flight"
  - "desc": "The demilich makes one Necrotic Burst attack."
    "name": "Necrosis"
"regional_effects":
  - "desc": "The region containing a demilich's lair is twisted by its presence, creating\
      \ the following effects:"
    "name": ""
  - "desc": "- Enervating Domain. Whenever a creature other than the demilich\
      \ or one of its allies finishes a [[/03_Mechanics/CLI/variant-rules/long-rest-xphb|Long Rest]]\
      \ within 1 mile of the lair, the creature must succeed on a DC 20 Constitution\
      \ saving throw or have its [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Point]]\
      \ maximum reduced by d4. This reduction lasts until the creature finishes a\
      \ [[/03_Mechanics/CLI/variant-rules/long-rest-xphb|Long Rest]] outside that\
      \ area.  \n- Travel Ward. Creatures can't use teleportation or planar travel\
      \ to enter or exit the lair.  "
    "name": ""
  - "desc": "If the demilich dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/demilich-xmm.webp"
```
^statblock

## Environment

any

## Player-Facing Summary

Demilich xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of demilich xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around demilich xmm.

## Adventure Hooks

- A rumor ties demilich xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at demilich xmm to avert a public scandal.
- A map overlay reveals a hidden approach to demilich xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
