---
aliases:
- Bone Devil
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
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/devil
- world/both
type: monster
updated: '2025-08-13T12:34:05.821982+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-bone-devil-xmm-bone-devil-xmm.svg)

# [[3-Mechanics\CLI\bestiary\fiend/bone-devil-xmm|Bone Devil]]
*Source: Monster Manual (2024) p. 52. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Bone Devil

*Devil of Dread and Obedience*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** Implements  

Bone devils are gaunt, nightmarish Fiends with pallid skin stretched tight over frames that combine human and insectile features. Also known as osyluths, these Fiends command weaker devils and other beings aligned with infernal legions. Bone devils ensure that the commands of hellish sovereigns are exacted efficiently and that non-devils fulfill their commitments to the Nine Hells. They slay those who renege on infernal deals, sending treacherous mortal souls to face unspeakable punishments.

When not serving their diabolical masters, bone devils tempt self-obsessed mortals with promises of other creatures' adulation and obedience. These devils prop up petty tyrants, helping them grow increasingly calloused and amoral.

Bone devils travel across the multiverse to fulfill diabolical orders. If left with no other choices, they might conscript mortals to aid them in their vicious goals. Roll on or choose a result from the Bone Devil Objectives table to inspire a bone devil's goals.

> [!quote] A quote from Sylvira Savikas, Candlekeep Sage  
> 
> Bone devils are just one of a thousand reasons never to make a deal with a devil, but they're a significant one. Break said deal, and it'll likely be one of these nightmares that drags you down to the Nine Hells.

**Bone Devil Objectives**

`dice: [](bone-devil-xmm.md#^bone-devil-objectives)`

| dice: 1d4 | The Bone Devil Seeks To... |
|-----------|----------------------------|
| 1 | Capture a soul that escaped the Nine Hells. |
| 2 | Convey a message or make an example of someone in the name of an archdevil. |
| 3 | Find someone who broke a deal with a devil. |
| 4 | Slay someone or steal something as part of its pact with a wicked magic-user. |
^bone-devil-objectives

```statblock
"name": "Bone Devil (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "161"
"hit_dice": "17d10 + 68"
"modifier": !!int "7"
"stats":
  - !!int "18"
  - !!int "16"
  - !!int "18"
  - !!int "13"
  - !!int "14"
  - !!int "16"
"speed": "40 ft., fly 40 ft."
"saves":
  - "strength": !!int "8"
  - "intelligence": !!int "5"
  - "wisdom": !!int "6"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Deception|Deception]]"
    "desc": "+7"
  - "name": "[[/03_Mechanics/CLI/skills#Insight|Insight]]"
    "desc": "+6"
"damage_resistances": "cold"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 120 ft. (unimpeded by magical [[/03_Mechanics/CLI/variant-rules/darkness-xphb|Darkness]]),\
  \ passive Perception 12"
"languages": "Infernal; telepathy 120 ft."
"cr": "9"
"traits":
  - "desc": "If the devil dies outside the Nine Hells, its body disappears in sulfurous\
      \ smoke, and it gains a new body instantly, reviving with all its [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ somewhere in the Nine Hells."
    "name": "Diabolical Restoration"
  - "desc": "The devil has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The devil makes two Claw attacks and one Infernal Sting attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 10 ft. Hit: 13 (2d8 + 4) Slashing damage."
    "name": "Claw"
  - "desc": "Melee Attack Roll: +8, reach 10 ft. Hit: 15 (2d10 + 4) Piercing damage\
      \ plus 18 (4d8) Poison damage, and the target has the [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]]\
      \ condition until the start of the devil's next turn. While [[/03_Mechanics/CLI/conditions#Poisoned|Poisoned]],\
      \ the target can't regain [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]."
    "name": "Infernal Sting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/bone-devil-xmm.webp"
```
^statblock

## Environment

planar, nine hells

## Player-Facing Summary

Bone devil xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of bone devil xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around bone devil xmm.

## Adventure Hooks

- A rumor ties bone devil xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at bone devil xmm to avert a public scandal.
- A map overlay reveals a hidden approach to bone devil xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
