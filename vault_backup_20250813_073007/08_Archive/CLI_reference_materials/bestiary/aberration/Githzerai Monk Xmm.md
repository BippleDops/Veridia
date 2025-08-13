---
aliases:
- Githzerai Monk
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
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/limbo
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration/gith
- world/both
type: monster
updated: '2025-08-13T12:34:19.747201+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-githzerai-monk-xmm-githzerai-monk-xmm.svg)

# [[3-Mechanics\CLI\bestiary\aberration/githzerai-monk-xmm|Githzerai Monk]]
*Source: Monster Manual (2024) p. 136*  

Githzerai monks pursue control of their minds by honing their physical and psionic talents. They might be found beyond githzerai sanctuaries, testing themselves amid the dangerous extremes of the multiverse.

## Githzerai

*Explorers at Reality's Extremes*

- **Habitat.** Planar (Limbo)  
- **Treasure.** Arcana, Individual  

Githzerai are gaunt, humanlike beings, physically identical to githyanki. They share a history with githyanki as creatures physically and psychically transformed by mind flayers (see the "Githyanki" section). Githzerai know that in body and mind, their species was manipulated by their former illithid oppressors. Rather than giving in to this programming, githzerai follow the teachings of their first leader, Zerthimon, and reshape their minds and bodies to find peace.

Githzerai psychically create serene, hidden sanctuaries in chaotic reaches of the multiverse. Most of these redoubts drift through the chaotic plane of Limbo, but githzerai conclaves can also be found in the Abyss, the Elemental Chaos, and the Feywild. Githzerai create these cloisters to hone their psionic abilities, to gain insights from the multiverse, and to avoid githyanki and mind flayers.

### Adventures with Gith

Characters might be drawn into conflicts involving githzerai and githyanki in various ways. Roll on or choose a result from the Gith Conflicts table to inspire adventures featuring these age-old rivals.

**Gith Conflicts**

`dice: [](githzerai-monk-xmm.md#^gith-conflicts)`

| dice: 1d8 | The Characters Are... |
|-----------|-----------------------|
| 1 | Called on to deliver a message or mysterious parcel to or from Vlaakith the Lich Queen. |
| 2 | Encouraged by a disguised intellect devourer to seek out an elusive gith leader. |
| 3 | Entreated to aid githzerai fleeing the githyanki who destroyed their sanctuary. |
| 4 | Entrusted with renewing or disrupting the githyanki's alliance with red dragons. |
| 5 | Invited to hunt illithids with githyanki. |
| 6 | Pressed to uncover a gith spy in a planar community or on a spelljamming ship. |
| 7 | Sent on a quest to discover the last known location of the hero Gith or Zerthimon. |
| 8 | Tasked with returning the blade of a fallen githyanki knight to the knight's people. |
^gith-conflicts

> [!quote] A quote from Zaerith Menyar-Ag-Gith, Githzerai Leader  
> 
> We githzerai crave a challenge, so that when Zerthimon returns, he shall find us ready. Thus we traveled to howling Limbo to make our new home.


```statblock
"name": "Githzerai Monk (XMM)"
"size": "Medium"
"type": "aberration"
"subtype": "gith"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"hp": !!int "38"
"hit_dice": "7d8 + 7"
"modifier": !!int "4"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "12"
  - !!int "13"
  - !!int "14"
  - !!int "10"
"speed": "40 ft."
"saves":
  - "strength": !!int "3"
  - "dexterity": !!int "4"
  - "intelligence": !!int "3"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": "Common, Gith"
"cr": "2"
"actions":
  - "desc": "The githzerai makes two Psi Strike attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 6 (1d8 + 2) Bludgeoning damage\
      \ plus 9 (2d8) Psychic damage."
    "name": "Psi Strike"
  - "desc": "The githzerai casts one of the following spells, requiring no spell components\
      \ and using Wisdom as the spellcasting ability:\n\nAt will: [[/03_Mechanics/CLI/spells/mage-hand-xphb|Mage Hand]]\
      \ (the hand is Invisible)\n\n1/day: [[/03_Mechanics/CLI/spells/see-invisibility-xphb|See Invisibility]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The githzerai casts [[/03_Mechanics/CLI/spells/jump-xphb|Jump]], requiring\
      \ no spell components and using the same spellcasting ability as Spellcasting.\n"
    "name": "Psi-Powered Leap (2/Day)"
"reactions":
  - "desc": "The githzerai casts [[/03_Mechanics/CLI/spells/feather-fall-xphb|Feather Fall]]\
      \ or [[/03_Mechanics/CLI/spells/shield-xphb|Shield]] in response to the spell's\
      \ trigger, requiring no spell components and using the same spellcasting ability\
      \ as Spellcasting.\n"
    "name": "Psionic Defense (2/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/githzerai-monk-xmm.webp"
```
^statblock

## Environment

planar, limbo

## Player-Facing Summary

Githzerai monk xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of githzerai monk xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around githzerai monk xmm.

## Adventure Hooks

- A rumor ties githzerai monk xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at githzerai monk xmm to avert a public scandal.
- A map overlay reveals a hidden approach to githzerai monk xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
