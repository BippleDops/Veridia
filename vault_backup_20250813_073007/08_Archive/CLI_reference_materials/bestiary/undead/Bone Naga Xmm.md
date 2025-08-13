---
aliases:
- Bone Naga
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
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
- world/both
type: monster
updated: '2025-08-13T12:34:20.037971+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-bone-naga-xmm-bone-naga-xmm.svg)

# [[3-Mechanics\CLI\bestiary\undead/bone-naga-xmm|Bone Naga]]
*Source: Monster Manual (2024) p. 53*  

## Bone Naga

*Deathless Serpentine Mind Bender*

- **Habitat.** Underdark  
- **Treasure.** Relics  

Nagas are immortal but not invincible, and powerful magic can end their lives. Bone nagas are skeletal terrors raised from the remains of magically slain nagas or nagas that were killed but that hadn't yet rejuvenated. They are granted unlife through rituals practiced by cultists, yuan-ti, and morbid spirit nagas. These Undead nagas possess magical abilities similar to those they had in life, along with an eerie gaze that can beguile other creatures.

Bone nagas typically obey those who resurrected them, serving their creators as tireless guards and sharing the lore they collected in life. Undeath disrupts the perfect memory bone nagas enjoyed while alive, leaving them with gaps in their memories or details scrambled into puzzle-like jumbles.

In rare cases, bone nagas continue to pursue the goals they had while alive instead of serving other creatures. Most free-willed bone nagas are evil beings raised from spirit naga remains, but in unusual instances, bone nagas created from guardian nagas continue good, albeit confused, existences.

```statblock
"name": "Bone Naga (XMM)"
"size": "Large"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d10 + 10"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "15"
  - !!int "15"
"speed": "40 ft."
"damage_immunities": "poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Paralyzed|paralyzed]], [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common plus one other language"
"cr": "4"
"actions":
  - "desc": "The naga makes two Bite attacks. It can replace any attack with a use\
      \ of Serpentine Gaze."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 10 ft. Hit: 10 (2d6 + 3) Piercing damage\
      \ plus 7 (2d6) Necrotic damage."
    "name": "Bite"
  - "desc": "Wisdom Saving Throw: DC 13, one creature the naga can see within 60\
      \ feet. Failure: 13 (3d6 + 3) Psychic damage, and the target has the [[/03_Mechanics/CLI/conditions#Charmed|Charmed]]\
      \ condition until the start of the naga's next turn."
    "name": "Serpentine Gaze"
  - "desc": "The naga casts one of the following spells, requiring no Material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 13):\n\n\
      At will: [[/03_Mechanics/CLI/spells/mage-hand-xphb|Mage Hand]], [[/03_Mechanics/CLI/spells/thaumaturgy-xphb|Thaumaturgy]]\n\
      \n1/day each: [[/03_Mechanics/CLI/spells/command-xphb|Command]], [[/03_Mechanics/CLI/spells/detect-thoughts-xphb|Detect\
      \ Thoughts]], [[/03_Mechanics/CLI/spells/lightning-bolt-xphb|Lightning Bolt]]"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/bone-naga-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Bone naga xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of bone naga xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around bone naga xmm.

## Adventure Hooks

- A rumor ties bone naga xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at bone naga xmm to avert a public scandal.
- A map overlay reveals a hidden approach to bone naga xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
