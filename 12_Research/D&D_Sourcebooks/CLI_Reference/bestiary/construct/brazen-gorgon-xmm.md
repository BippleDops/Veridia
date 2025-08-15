# brazen-gorgon-xmm

---
title: brazen gorgon xmm
aliases:
- Brazen Gorgon
type: monster
tags:
- world/surface
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/type/construct
- monster
- research
- ttrpg-cli/monster/size/large
- world/both
- ttrpg-cli/monster/cr/9
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
updated: '2025-08-12T23:37:35.829339'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-brazen-gorgon-xmm-brazen-gorgon-xmm.svg)

# [[brazen-gorgon-xmm|Brazen Gorgon]]
*Source: Monster Manual (2024) p. 149*  

Followers of the exiled archdevil Moloch altered the process of creating gorgons to craft their own diabolical guardians called brazen gorgons. These gorgons are hollow, bull-like automatons whose metal bodies glow with intense heat. When they charge their foes, the ribs of their frames open like cages to ensnare enemies and roast them within. Brazen gorgons are often found in blasphemous sites dedicated to Moloch, other archdevils, or bloodthirsty gods.


## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement


## Gorgons

*Bull-like Guardians with Petrifying Breath*

- **Habitat.** Forest, Grassland, Hill  
- **Treasure.** Any  

Resembling mighty bulls armored in iron plates, gorgons are lifelike automatons that seek to destroy all who enter their territories. In addition to goring foes with their deadly horns and trampling them under their iron hooves, gorgons exhale gouts of noxious gas.

Gorgons are created by magic-users to serve as guardians. The process for creating a gorgon is labor intensive and dangerous, with one method requiring the skeleton of a bull, the blood of a medusa, and the brain of a basilisk fused into a frame of ensorcelled iron. If the process fails, petrifying gas emerges from the materials, creating a magical threat that can fill a structure and linger for years.

When magic-users create gorgons, they often enchant them to ignore those who confront the creature with a specific command key, usually a password or a specific signal. Once a gorgon is set to guard an area, it attacks any who enter until they flee or are destroyed. Should someone provide the command key, the monster ignores that intruder so long as the intruder remains in its sight. But if the intruder ventures out of sight and then returns without again presenting the command key, the gorgon attacks. Those in a gorgon's territory must remain vigilant and aware of the monster's exact position, or they risk being attacked by a gorgon they thought was no longer a threat.

Those who create gorgons strive to give them purposefully obscure command keys. Hints at command keys might be found among the records of a gorgon's creator or in the area the gorgon protects—perhaps scrawled as a [[conditions#Petrified|petrified]] trespasser's final act. Roll on or choose a result from the Gorgon Command Keys table to inspire the word or signal that temporarily neutralizes a gorgon.

**Gorgon Command Keys**

`dice: [](brazen-gorgon-xmm.md#^gorgon-command-keys)`

| dice: 1d6 | Gorgon Won't Attack Those That... |
|-----------|-----------------------------------|
| 1 | Cast a particular spell in the gorgon's presence. |
| 2 | Keep their back to the gorgon or otherwise act like they don't see the monster. |
| 3 | Offer it a drink of blood, water, or wine. |
| 4 | Recite a specific rhyme or sing a certain song. |
| 5 | Say its creator's name backward. |
| 6 | Wear a mask, perhaps in the shape of a bull or an animal meaningful to the gorgon's creator. |
^gorgon-command-keys

> [!quote] A quote from Lum the Maestro  
> 
> Notable among my eccentric ancestor's scattered designs was a schematic of a swamp-dwelling bovine monster and an ominous note: "Do better."

```statblock
"name": "Brazen Gorgon (XMM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "19"
"hp": !!int "161"
"hit_dice": "17d10 + 68"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "19"
  - !!int "2"
  - !!int "7"
"speed": "40 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+10"
"damage_immunities": "fire"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Petrified|petrified]]"
"senses": "darkvision 60 ft., passive Perception 20"
"languages": ""
"cr": "9"
"traits":
  - "desc": "At the end of each of the gorgon's turns, each creature in a 5-foot [[emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the gorgon takes 13 (3d8) Fire damage."
    "name": "Flame Aura"
  - "desc": "The gorgon sheds [[bright-light-xphb|Bright Light]]\
      \ in a 10-foot radius and [[dim-light-xphb|Dim Light]]\
      \ for an additional 10 feet."
    "name": "Illumination"
"actions":
  - "desc": "The gorgon makes two Gore attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 5 ft. Hit: 11 (2d6 + 4) Piercing damage\
      \ plus 10 (3d6) Fire damage."
    "name": "Gore"
  - "desc": "The gorgon moves up to its [[speed-xphb|Speed]]\
      \ without provoking [[actions#Opportunity%20Attack|Opportunity Attacks]]\
      \ and can move through the spaces of Medium or smaller creatures. Each time\
      \ the gorgon enters a creature's space for the first time during this move,\
      \ that target is subjected to the following effect. Dexterity Saving Throw:\
      \ DC 16. Failure: 13 (2d8 + 4) Piercing damage plus 13 (3d8) Fire damage,\
      \ and the target is pulled into the gorgon's space and has the [[conditions#Grappled|Grappled]]\
      \ condition (escape DC 14); if the gorgon already has a creature [[conditions#Grappled|Grappled]],\
      \ the target has the [[conditions#prone|Prone]] condition\
      \ instead. Until the grapple ends, the target has the [[conditions#Restrained|Restrained]]\
      \ condition. When the gorgon moves, the [[conditions#Grappled|Grappled]]\
      \ target moves with it, costing no extra movement."
    "name": "Smelting Charge (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/construct/token/brazen-gorgon-xmm.webp"
```
^statblock

## Environment

forest, grassland, hill

## Player-Facing Summary

Brazen gorgon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of brazen gorgon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around brazen gorgon xmm.

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


## 12_Research Specific Content

Contextual improvement based on 12_Research
