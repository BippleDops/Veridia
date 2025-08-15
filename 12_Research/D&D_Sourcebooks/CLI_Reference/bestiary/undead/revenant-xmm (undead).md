---
title: revenant-xmm (undead)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# revet-xmm

---
title: revet xmm
aliases:
- Revet
type: monster
tags:
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
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
updated: '2025-08-12T23:37:35.663416'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-graveyard-revet-xmm-graveyard-revet-xmm.svg)

# [[revet xmm|Revet]]
*Source: Monster Manual (2024) p. 259*  

Revets possess the bodies they had in life, using them to hunt down their killers. If their bodies are destroyed, they take control of new bodies that gradually change to resemble the revets' original forms.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Revets

*Vengeance from beyond the Grave*

- **Habitat.** Forest, Swamp, Urban  
- **Treasure.** Any  

Wrathful spirits bent on revenge, revets possess corpses and other materials, using them to seek justice or vent their rage on those who wronged them. Revets refuse to rest until those they seek to punish are no more. If their bodies are destroyed, revets claim new forms and continue their ruthless quests.

```statblock
"name": "Revet (XMM)"
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
  - !!int "13"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "strength": !!int "7"
  - "constitution": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#frightened|frightened]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Poisoned|poisoned]], [[conditions#Stunned|stunned]]"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common plus one other language"
"cr": "5"
"traits":
  - "desc": "The revet regains 10 [[hit-points-xphb (variant-rules)]]\
      \ at the start of each of its turns. If the revet takes Fire or Radiant damage,\
      \ this trait doesn't function at the start of its next turn. Its body is destroyed\
      \ only if it starts its turn with 0 [[hit-points-xphb (variant-rules)]]\
      \ and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "If the revet dies, it revives 24 hours later in a different body unless\
      \ [[dispel-evil-and-good-xphb (spells)]]\
      \ is cast on its corpse. If it revives, it animates a Humanoid corpse elsewhere\
      \ on the same plane of existence; it now looks different but uses the same stat\
      \ block and returns with all its [[hit-points-xphb (variant-rules)]]."
    "name": "Undead Restoration"
"actions":
  - "desc": "The revet uses Vengeful Glare and makes two Slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Necrotic damage."
    "name": "Slam"
  - "desc": "Wisdom Saving Throw: DC 15, one creature the revet can see within\
      \ 30 feet. Failure: The target has the [[conditions#frightened|Frightened]]\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically.\
      \ If the [[conditions#frightened|Frightened]] target is cursed\
      \ by the revet (see Vow of Revenge), the target also has the [[conditions#Paralyzed|Paralyzed]]\
      \ condition for the duration."
    "name": "Vengeful Glare"
"bonus_actions":
  - "desc": "The revet curses one creature it can see within 30 feet of itself.\
      \ The revet knows the distance to and direction of the cursed target, even\
      \ if it is on a different plane of existence. The curse ends on the target if\
      \ the revet uses this [[Action Xphb]]\
      \ on a different creature."
    "name": "Vow of Revenge (1/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/revet-xmm.webp"
```
^statblock

## Environment

forest, swamp, urban

## Player-Facing Summary

Revet xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of revet xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around revet xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]

## 12_Research Specific Content

Contextual improvement based on 12_Research
