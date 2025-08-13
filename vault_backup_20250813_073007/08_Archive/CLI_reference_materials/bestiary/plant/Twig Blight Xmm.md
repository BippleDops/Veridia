---
aliases:
- Twig Blight
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
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/plant
- world/both
type: monster
updated: '2025-08-13T12:34:19.782925+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-twig-blight-xmm-twig-blight-xmm.svg)

# [[3-Mechanics\CLI\bestiary\plant/twig-blight-xmm|Twig Blight]]
*Source: Monster Manual (2024) p. 43*  

Resembling bundles of sticks or dead brush, twig blights easily blend in among deadwood, flotsam, and the wood piles common in many rural settings. Groups of them are often found near river crossings, forgotten wells, or natural campsites, where they ambush those who let down their guard.

## Blights

*Plants Sprouted from Evil*

- **Habitat.** Forest  
- **Treasure.** None  

Blights are malicious plants that sprout from deep-rooted evil. Their gnarled forms twist with fearsome features suggestive of human limbs and vicious maws. Blights lurk in ambush amid mundane vegetation and lash out at non-Plant creatures. While blights can act independently, they're usually motivated by whatever sinister forces spawned them or by wicked creatures with control over nature. The magic that creates blights often affects other vegetation as well, causing brambles, vines, and gnarled trees to overwhelm roads and fields, choke wells and streams, and force animals from their natural habitat. This might make blights the first sign of an oncoming wave of corruption.

> [!quote] A quote from Belak the Outcast, Druid of the Twilight Grove  
> 
> It lives, though it looks dead. In an age long past, someone staked a vampire to the earth on this very spot. The wooden stake was yet green and took root. And so grew the Gulthias Tree, reverberating with primal power.


```statblock
"name": "Twig Blight (XMM)"
"size": "Small"
"type": "plant"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "11"
  - !!int "4"
  - !!int "8"
  - !!int "3"
"speed": "20 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+4"
"damage_vulnerabilities": "fire"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Deafened|deafened]]"
"senses": "blindsight 60 ft., passive Perception 9"
"languages": "understands Common but can't speak"
"cr": "1/8"
"traits":
  - "desc": "The blight has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on an attack roll against a creature if at least one of the blight's allies\
      \ is within 5 feet of the creature and the ally doesn't have the [[/03_Mechanics/CLI/conditions#Incapacitated|Incapacitated]]\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing damage."
    "name": "Claw"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/plant/token/twig-blight-xmm.webp"
```
^statblock

## Environment

forest

## Player-Facing Summary

Twig blight xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of twig blight xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around twig blight xmm.

## Adventure Hooks

- A rumor ties twig blight xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at twig blight xmm to avert a public scandal.
- A map overlay reveals a hidden approach to twig blight xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
