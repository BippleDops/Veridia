---
aliases:
- Gnoll Demoniac
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
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
- world/both
- world/surface
type: monster
updated: '2025-08-13T12:34:05.824485+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-gnoll-demoniac-xmm-gnoll-demoniac-xmm.svg)

# [[3-Mechanics\CLI\bestiary\fiend/gnoll-demoniac-xmm|Gnoll Demoniac]]
*Source: Monster Manual (2024) p. 141*  

Gnoll demoniacs are berserkers that arise from gnolls who've ritualistically fed on flesh corrupted by the Abyss. Now embodying the ruinous hunger of Yeenoghu, these gnolls throw themselves into battle, heedless of odds or their own survival. Rampaging demoniacs even devour other gnolls in their wild frenzies.

## Gnolls

*Fiends in Feral Flesh*

- **Habitat.** Desert, Forest, Grassland, Hill  
- **Treasure.** Armaments, Individual  

The first gnolls arose from hyenas that fed on flesh tainted by the Abyss. Their corruption and violence delighted the demon lord Yeenoghu, who encouraged their numbers and spread them across the multiverse. Ever since, gnolls have been the cackling servants of Yeenoghu, existing to cause ruin and to feast on what remains.

> [!quote] A quote from Iggwilv  
> 
> Yeenoghu claims gnolls not as his brood but as maggots purposefully released to infest a despised carcass. They are a pernicious rot the Beast of Butchery spreads across mortal worlds. Whatever they once were, they were remade and are now his.


```statblock
"name": "Gnoll Demoniac (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "4"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "17"
  - !!int "14"
  - !!int "15"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "strength": !!int "6"
  - "constitution": !!int "6"
  - "wisdom": !!int "5"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Abyssal, Common, Gnoll"
"cr": "8"
"actions":
  - "desc": "The gnoll makes two Abyssal Strike attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Attack Roll: +6, reach 5 ft. or range 60 ft. Hit:\
      \ 20 (5d6 + 3) Poison damage."
    "name": "Abyssal Strike"
  - "desc": "The gnoll conjures a 30-foot [[/03_Mechanics/CLI/variant-rules/cube-area-of-effect-xphb|Cube]]\
      \ of magical [[/03_Mechanics/CLI/variant-rules/darkness-xphb|Darkness]] originating\
      \ from a point it can see within 60 feet, which lasts for 1 minute or until\
      \ the gnoll's [[/03_Mechanics/CLI/conditions#Concentration|Concentration]]\
      \ ends on it. This area is [[/03_Mechanics/CLI/variant-rules/difficult-terrain-xphb|Difficult Terrain]].\
      \ Dexterity Saving Throw: DC 14, any creature that starts its turn in this\
      \ area or enters it for the first time on a turn. Failure: 28 (8d6) Necrotic\
      \ damage, and the gnoll or a creature of its choice it can see gains 10 [[/03_Mechanics/CLI/variant-rules/temporary-hit-points-xphb|Temporary\
      \ Hit Points]].\
      \ Success: Half damage only."
    "name": "Hunger of Yeenoghu (Recharge 5-6)"
"bonus_actions":
  - "desc": "Immediately after dealing damage to a creature that is already [[/03_Mechanics/CLI/variant-rules/bloodied-xphb|Bloodied]],\
      \ the gnoll moves up to half its [[/03_Mechanics/CLI/variant-rules/speed-xphb|Speed]],\
      \ and it makes one Abyssal Strike attack."
    "name": "Rampage (2/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/gnoll-demoniac-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill

## Player-Facing Summary

Gnoll demoniac xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of gnoll demoniac xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around gnoll demoniac xmm.

## Adventure Hooks

- A rumor ties gnoll demoniac xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at gnoll demoniac xmm to avert a public scandal.
- A map overlay reveals a hidden approach to gnoll demoniac xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
