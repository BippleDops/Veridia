---
aliases:
- Blob of Annihilation
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
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/ooze/titan
- world/both
type: monster
updated: '2025-08-13T12:34:19.803972+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-blob-of-annihilation-xmm-blob-of-annihilation-xmm.svg)

# [[3-Mechanics\CLI\bestiary\ooze/blob-of-annihilation-xmm|Blob of Annihilation]]
*Source: Monster Manual (2024) p. 47*  

## Blob of Annihilation

*All-Consuming Cosmic Entropy Unleashed*

- **Habitat.** Any  
- **Treasure.** Any  

The blob of annihilation is a coagulation of cosmic entropy conjoined to the remains of dead gods. This malicious entity drifts through Wildspace and multiversal expanses inimical to life—vast regions where the chance of encountering it is low.

The blob poses the greatest threat when disasters or nihilistic magic-users summon it to inhabited realms. Once unleashed, the blob of annihilation rolls across the land in vast, cosmic gyres, with fragments of the blob splitting off to engulf targets. The blob consumes anything it encounters, sweeping forests, villages, and fortresses into its mass. Within the blob is an expanse without air or gravity where entropic forces destroy whatever they engulf. Nothing can survive within for long.

Only magic items and the corpses of gods and titans can endure inside the blob. Because of that fact, treasure hunters and theologians sometimes give themselves the deadly task of trying to retrieve something from within the blob. This quest usually ends in annihilation, but occasionally it results in the find of a lifetime.

When the blob appears, roll on or choose a result from the Blob of Annihilation Contents table to inspire what extraordinary thing remains within its goop.

> [!quote] A quote from Vi, Artificer of Eberron  
> 
> Honey, I've seen horrors that would make you shit your drawers and reach for the nearest drink. And then there's the blob of annihilation. If you see it, run. And if you can't get away from it, just hope you dissolve fast.

**Blob of Annihilation Contents**

`dice: [](blob-of-annihilation-xmm.md#^blob-of-annihilation-contents)`

| dice: 1d10 | The Blob Contains... |
|------------|----------------------|
| 1 | An [[/03_Mechanics/CLI/items/amulet-of-the-planes-xdmg|Amulet of the Planes]]. |
| 2 | An Artifact of the DM's choice. |
| 3 | The corpses of two gods who were entangled in battle when the blob consumed them. |
| 4 | A Cubic Gate. |
| 5 | A [[/03_Mechanics/CLI/items/deck-of-many-things-xdmg|Deck of Many Things]]. |
| 6 | A magic key that opens a door in Sigil that no other key and no spell can open. |
| 7 | The preserved corpse of an empyrean. |
| 8 | The remains of half a kraken. |
| 9 | The skull of a death god. |
| 10 | A tarrasque that just died. |
^blob-of-annihilation-contents

```statblock
"name": "Blob of Annihilation (XMM)"
"size": "Gargantuan"
"type": "ooze"
"subtype": "titan"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "448"
"hit_dice": "23d20 + 207"
"modifier": !!int "16"
"stats":
  - !!int "27"
  - !!int "14"
  - !!int "28"
  - !!int "10"
  - !!int "16"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "9"
  - "constitution": !!int "16"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "acid, necrotic, poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Frightened|frightened]], [[/03_Mechanics/CLI/conditions#Grappled|grappled]],\
  \ [[/03_Mechanics/CLI/conditions#Paralyzed|paralyzed]], [[/03_Mechanics/CLI/conditions#Petrified|petrified]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]], [[/03_Mechanics/CLI/conditions#Prone|prone]],\
  \ [[/03_Mechanics/CLI/conditions#Restrained|restrained]], [[/03_Mechanics/CLI/conditions#Stunned|stunned]],\
  \ [[/03_Mechanics/CLI/conditions#Unconscious|unconscious]]"
"senses": "blindsight 120 ft., passive Perception 13"
"languages": ""
"cr": "23"
"traits":
  - "desc": "If the blob is reduced to 0 [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]],\
      \ it implodes and ejects any creatures and objects engulfed by it into the Astral\
      \ Sea. The blob itself vanishes, leaving behind a layer of slime on everything\
      \ that was within 600 feet of it. In d20 years, the blob reconstitutes on a\
      \ random world in the Material Plane."
    "name": "Astral Implosion"
  - "desc": "If the blob fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day)"
  - "desc": "The blob has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The blob makes two Pseudopod attacks and uses Engulf. It can replace\
      \ one attack with a use of Restraining Glob."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +15, reach 30 ft. Hit: 24 (3d10 + 8) Force damage."
    "name": "Pseudopod"
  - "desc": "The blob moves up to its [[/03_Mechanics/CLI/variant-rules/speed-xphb|Speed]]\
      \ and can move through the spaces of Huge or smaller creatures and objects.\
      \ Strength Saving Throw: DC 23, each creature or object whose space the blob\
      \ enters for the first time during this move. Failure: The target is engulfed.\
      \ While engulfed, a target has [[/03_Mechanics/CLI/variant-rules/cover-xphb|Total Cover]]\
      \ against attacks and other effects outside the blob, and when the blob moves,\
      \ the engulfed target moves with it. A nonmagical object is destroyed after\
      \ spending 1 minute engulfed.\n\nWhile engulfed, a creature takes 21 (6d6) Force\
      \ damage at the start of each of its turns, is suffocating, has the [[/03_Mechanics/CLI/conditions#Restrained|Restrained]]\
      \ condition, and repeats the save at the end of each of its turns. An engulfed\
      \ creature that is reduced to 0 [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ dissolves into ash, which is ejected into the Astral Sea. Success: The target\
      \ escapes and enters the nearest unoccupied space."
    "name": "Engulf"
  - "desc": "The blob lobs a slimy glob at one Large or smaller creature it can see\
      \ within 600 feet of itself. Dexterity Saving Throw: DC 23, the targeted creature.\
      \ Failure: 18 (3d6 + 8) Acid damage. The glob rolls the target 60 feet straight\
      \ toward the blob, and the target has the [[/03_Mechanics/CLI/conditions#Restrained|Restrained]]\
      \ condition until the end of its next turn, when the glob harmlessly dissolves.\
      \ Success: Half damage only."
    "name": "Restraining Glob"
"legendary_actions":
  - "desc": "The blob deals 14 (4d6) Necrotic damage to each creature engulfed by\
      \ it. The blob can't take this action again until the start of its next turn."
    "name": "Decay"
  - "desc": "The blob uses Restraining Glob. The blob can't take this action again\
      \ until the start of its next turn."
    "name": "Grasping Glob"
  - "desc": "The blob makes one Pseudopod attack."
    "name": "Lashing Goop"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/ooze/token/blob-of-annihilation-xmm.webp"
```
^statblock

## Environment

any

## Player-Facing Summary

Blob of annihilation xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of blob of annihilation xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around blob of annihilation xmm.

## Adventure Hooks

- A rumor ties blob of annihilation xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at blob of annihilation xmm to avert a public scandal.
- A map overlay reveals a hidden approach to blob of annihilation xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
