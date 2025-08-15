---
title: gulthias-blight-xmm (plant)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# gulthias-blight-xmm

---
title: gulthias blight xmm
aliases:
- Gulthias Blight
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/gargantuan
- monster
- research
- world/both
- ttrpg-cli/monster/type/plant
- active
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/forest
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.381672'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-gulthias-blight-xmm-gulthias-blight-xmm.svg)

# [[gulthias blight xmm|Gulthias Blight]]
*Source: Monster Manual (2024) p. 45*  

Ancient plants twisted by evil, Gulthias blights feed on blood and despoil the surrounding land, often giving rise to subservient blights. These cursed plants take their name from the story of their creation; the first of their kind was a tree that grew from the stake piercing the heart of the vampire Gulthias. These blights consider all creatures either servants or fertilizer for the blights' corruption.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Blights

*Plants Sprouted from Evil*

- **Habitat.** Forest  
- **Treasure.** None  

Blights are malicious plants that sprout from deep-rooted evil. Their gnarled forms twist with fearsome features suggestive of human limbs and vicious maws. Blights lurk in ambush amid mundane vegetation and lash out at non-Plant creatures. While blights can act independently, they're usually motivated by whatever sinister forces spawned them or by wicked creatures with control over nature. The magic that creates blights often affects other vegetation as well, causing brambles, vines, and gnarled trees to overwhelm roads and fields, choke wells and streams, and force animals from their natural habitat. This might make blights the first sign of an oncoming wave of corruption.

> [!quote] A quote from Belak the Outcast, Druid of the Twilight Grove  
> 
> It lives, though it looks dead. In an age long past, someone staked a vampire to the earth on this very spot. The wooden stake was yet green and took root. And so grew the Gulthias Tree, reverberating with primal power.

```statblock
"name": "Gulthias Blight (XMM)"
"size": "Gargantuan"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "20"
"hp": !!int "264"
"hit_dice": "16d20 + 96"
"modifier": !!int "5"
"stats":
  - !!int "25"
  - !!int "10"
  - !!int "22"
  - !!int "18"
  - !!int "12"
"speed": "50 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+9"
"damage_resistances": "fire, necrotic"
"condition_immunities": "[[conditions#Deafened|deafened]]"
"senses": "blindsight 120 ft., passive Perception 19"
"languages": "Common, Druidic"
"cr": "16"
"traits":
  - "desc": "When it finishes a [[long rest xphb|Long Rest]],\
      \ the blight expels d6 seeds into unoccupied spaces on the ground within 30\
      \ feet of itself. After 24 hours, the seeds become creatures under the blight's\
      \ control. Roll d8 for each seed to determine the creature it becomes: on 1-4,\
      \ [[twig blight xmm|Twig Blight]]; on 5-6,\
      \ [[needle blight xmm|Needle Blight]]; on\
      \ 7-8, [[vine blight xmm|Vine Blight]]."
    "name": "Blight Seeds"
"actions":
  - "desc": "The blight makes two attacks, using Slam or Thorn Volley in any combination.\
      \ It also uses Life-Draining Root."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +12, reach 10 ft. Hit: 25 (4d8 + 7) Bludgeoning\
      \ damage."
    "name": "Slam"
  - "desc": "Ranged Attack Roll: +12, range 60/180 ft. Hit: 20 (3d8 + 7) Piercing\
    "name": "Thorn Volley"
  - "desc": "Constitution Saving Throw: DC 20, one Huge or smaller creature the\
      \ blight can see within 30 feet. Failure: 14 (2d6 + 7) Necrotic damage, and\
      \ the target has the [[conditions#Grappled|Grappled]] condition\
      \ (escape DC 17) from one of six roots. Until the grapple ends, the target has\
      \ the [[conditions#Restrained|Restrained]] condition and\
      \ takes 14 (4d6) Necrotic damage at the start of each of its turns. The target's\
      \ [[hit points xphb|Hit Point]] maximum decreases\
      \ by an amount equal to the Necrotic damage taken, and the blight regains [[hit points xphb|Hit\]]
      \ Points]] equal to that amount."
    "name": "Life-Draining Root"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/plant/token/gulthias-blight-xmm.webp"
```
^statblock

## Environment

forest

## Player-Facing Summary

Gulthias blight xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of gulthias blight xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around gulthias blight xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Prophecy Connection

Mentioned in The First Prophecy of Stars

## 12_Research Specific Content

Contextual improvement based on 12_Research
