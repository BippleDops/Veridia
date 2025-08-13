---
aliases:
- Lamia
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
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
- world/both
type: monster
updated: '2025-08-13T12:34:05.807239+00:00'
world: Both
---


# [[3-Mechanics\CLI\bestiary\fiend/lamia-xmm|Lamia]]
*Source: Monster Manual (2024) p. 192. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Lamia

*Accursed Bargainer and Ruin Raider*

- **Habitat.** Desert  
- **Treasure.** Arcana  

Legends say the first lamia was an ambitious ruler who made a sinister bargain with the demon lord Graz'zt for everlasting majesty. As a consequence, the ruler was transformed into a lamia, a monster with the body of a lion and an accursed touch.

Lamias either are descendants of that first lamia or have made similar deals. They often dwell near ruins, seeking mysterious magic they can use to gain riches and influence. Lamias use magical illusions and enchantments to trick others into serving them. They sometimes work with bandits to abduct travelers, releasing captives only if they accept a dangerous bargain. Roll on or choose a result from the Lamia Pacts table to inspire a lamia's desires.

**Lamia Pacts**

`dice: [](lamia-xmm.md#^lamia-pacts)`

| dice: 1d6 | The Lamia Compels the Bargainer To... |
|-----------|---------------------------------------|
| 1 | Bring it a possession from a ruler or noble. |
| 2 | Create a map of a dungeon or ruin. |
| 3 | Escort it through a nearby community's gate. |
| 4 | Place a strange idol in a specific site or home. |
| 5 | Remove a magic item's curse, then return it. |
| 6 | Slay a monster and retrieve a specific organ. |
^lamia-pacts

```statblock
"name": "Lamia (XMM)"
"size": "Large"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "97"
"hit_dice": "13d10 + 26"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "15"
  - !!int "14"
  - !!int "15"
  - !!int "16"
"speed": "40 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Deception|Deception]]"
    "desc": "+7"
  - "name": "[[/03_Mechanics/CLI/skills#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Common"
"cr": "4"
"actions":
  - "desc": "The lamia makes two Claw attacks. It can replace one attack with a use\
      \ of Corrupting Touch."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 7 (1d8 + 3) Slashing damage\
      \ plus 7 (2d6) Psychic damage."
    "name": "Claw"
  - "desc": "Wisdom Saving Throw: DC 13, one creature the lamia can see within 5\
      \ feet. Failure: 13 (3d8) Psychic damage, and the target is cursed for 1 hour.\
      \ Until the curse ends, the target has the [[/03_Mechanics/CLI/conditions#Charmed|Charmed]]\
      \ and [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]] conditions."
    "name": "Corrupting Touch"
  - "desc": "The lamia casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt\
      \ will: [[/03_Mechanics/CLI/spells/disguise-self-xphb|Disguise Self]] (can\
      \ appear as a Large or Medium biped), [[/03_Mechanics/CLI/spells/minor-illusion-xphb|Minor Illusion]]\n\
      \n1/day each: [[/03_Mechanics/CLI/spells/geas-xphb|Geas]], [[/03_Mechanics/CLI/spells/major-image-xphb|Major Image]],\
      \ [[/03_Mechanics/CLI/spells/scrying-xphb|Scrying]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The lamia jumps up to 30 feet by spending 10 feet of movement."
    "name": "Leap"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/lamia-xmm.webp"
```
^statblock

## Environment

desert

## Player-Facing Summary

Lamia xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of lamia xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around lamia xmm.

## Adventure Hooks

- A rumor ties lamia xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at lamia xmm to avert a public scandal.
- A map overlay reveals a hidden approach to lamia xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
