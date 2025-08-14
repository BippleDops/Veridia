# Revenant Xmm

---
title: Revenant Xmm
aliases:
- Revenant
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/urban
- monster
- ttrpg-cli/monster/cr/5
- world/both
- research
- ttrpg-cli/monster/environment/swamp
- active
- ttrpg-cli/monster/environment/forest
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.883854+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-graveyard-revenant-xmm-graveyard-revenant-xmm.svg)

# [[revenant-xmm|Revenant]]
*Source: Monster Manual (2024) p. 259*  

Revenants possess the bodies they had in life, using them to hunt down their killers. If their bodies are destroyed, they take control of new bodies that gradually change to resemble the revenants' original forms.

## Revenants

*Vengeance from beyond the Grave*

- **Habitat.** Forest, Swamp, Urban  
- **Treasure.** Any  

Wrathful spirits bent on revenge, revenants possess corpses and other materials, using them to seek justice or vent their rage on those who wronged them. Revenants refuse to rest until those they seek to punish are no more. If their bodies are destroyed, revenants claim new forms and continue their ruthless quests.

```statblock
"name": "Revenant (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "127"
"hit_dice": "15d8 + 60"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "strength": !!int "7"
  - "constitution": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Frightened|frightened]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Poisoned|poisoned]], [[conditions#Stunned|stunned]]"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common plus one other language"
"cr": "5"
"traits":
  - "desc": "The revenant regains 10 [[hit-points-xphb|Hit Points]]\
      \ at the start of each of its turns. If the revenant takes Fire or Radiant damage,\
      \ this trait doesn't function at the start of its next turn. Its body is destroyed\
      \ only if it starts its turn with 0 [[hit-points-xphb|Hit Points]]\
      \ and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "If the revenant dies, it revives 24 hours later in a different body unless\
      \ [[dispel-evil-and-good-xphb|Dispel Evil and Good]]\
      \ is cast on its corpse. If it revives, it animates a Humanoid corpse elsewhere\
      \ on the same plane of existence; it now looks different but uses the same stat\
      \ block and returns with all its [[hit-points-xphb|Hit Points]]."
    "name": "Undead Restoration"
"actions":
  - "desc": "The revenant uses Vengeful Glare and makes two Slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Necrotic damage."
    "name": "Slam"
  - "desc": "Wisdom Saving Throw: DC 15, one creature the revenant can see within\
      \ 30 feet. Failure: The target has the [[conditions#Frightened|Frightened]]\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically.\
      \ If the [[conditions#Frightened|Frightened]] target is cursed\
      \ by the revenant (see Vow of Revenge), the target also has the [[conditions#Paralyzed|Paralyzed]]\
      \ condition for the duration."
    "name": "Vengeful Glare"
"bonus_actions":
  - "desc": "The revenant curses one creature it can see within 30 feet of itself.\
      \ The revenant knows the distance to and direction of the cursed target, even\
      \ if it is on a different plane of existence. The curse ends on the target if\
      \ the revenant uses this [[bonus-action-xphb|Bonus Action]]\
      \ on a different creature."
    "name": "Vow of Revenge (1/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/revenant-xmm.webp"
```
^statblock

## Environment

forest, swamp, urban

## Player-Facing Summary

Revenant xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of revenant xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around revenant xmm.

## Adventure Hooks

- A rumor ties revenant xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at revenant xmm to avert a public scandal.
- A map overlay reveals a hidden approach to revenant xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
