---
updated: 2025-08-11
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/1-2
  - ttrpg-cli/monster/environment/coastal
  - ttrpg-cli/monster/environment/underwater
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Sahuagin Warrior
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-sahuagin-warrior-xmm-sahuagin-warrior-xmm.svg)

# [Sahuagin Warrior](3-Mechanics\CLI\bestiary\fiend/sahuagin-warrior-xmm.md)
*Source: Monster Manual (2024) p. 264. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Sahuagin warriors are vicious combatants that savage their foes with webbed claws. Once sahuagin draw blood, they usually attack until either they or their foe is slain.

## Sahuagin

*Ravagers from Beneath the Waves*

- **Habitat.** Coastal, Underwater  
- **Treasure.** Any  

Sahuagin are fiendish terrors that prey on creatures above and below the water. Called "sea devils" by residents of coastal communities, sahuagin are ruthless raiders. They ransack ships, fishing villages, and undersea communities to slake their bloodthirst, claim treasure, and make sacrifices to their vicious deity—the sharklike god Sekolah.

Sahuagin constantly war on any peoples living near their territory. Merfolk and other aquatic folk bear the brunt of these attacks, but sahuagin also hunt air-breathers who sail over or swim through the waters the sea devils claim. Sahuagin often attack alongside sharks, which they can telepathically command.

> [!quote] A quote from Tiguran Maremrynd  
> 
> When a sahuagin comes at you, it doesn't seem to be living until it bites you. Then the thing's black eyes turn red as hellfire and the waves foam crimson. Then comes the screaming.


```statblock
"name": "Sahuagin Warrior (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"modifier": !!int "0"
"stats":
  - !!int "13"
  - !!int "11"
  - !!int "12"
  - !!int "12"
  - !!int "13"
  - !!int "9"
"speed": "30 ft., swim 40 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "acid, cold"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Sahuagin"
"cr": "1/2"
"traits":
  - "desc": "The sahuagin has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on attack rolls against any creature that doesn't have all its [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)."
    "name": "Blood Frenzy"
  - "desc": "The sahuagin can breathe air and water, but it must be submerged at least\
      \ once every 4 hours to avoid suffocating outside water."
    "name": "Limited Amphibiousness"
  - "desc": "The sahuagin can magically control sharks within 120 feet of itself,\
      \ using a special telepathy."
    "name": "Shark Telepathy"
"actions":
  - "desc": "The sahuagin makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Slashing damage."
    "name": "Claw"
"bonus_actions":
  - "desc": "The sahuagin swims up to its [Swim Speed](/03_Mechanics/CLI/variant-rules/swim-speed-xphb.md)\
      \ straight toward an enemy it can see."
    "name": "Aquatic Charge"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/sahuagin-warrior-xmm.webp"
```
^statblock

## Environment

coastal, underwater

## Player-Facing Summary

Sahuagin warrior xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of sahuagin warrior xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around sahuagin warrior xmm.

## Adventure Hooks

- A rumor ties sahuagin warrior xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at sahuagin warrior xmm to avert a public scandal.
- A map overlay reveals a hidden approach to sahuagin warrior xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
