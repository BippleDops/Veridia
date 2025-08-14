---
aliases:
- Ancient White Dragon
created: null
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- campaign/arc
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon/chromatic
- world/both
type: monster
updated: '2025-08-12T23:37:35.784611'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-ancient-white-dragon-xmm-ancient-white-dragon-xmm.svg)

# [[ancient-white-dragon-xmm|Ancient White Dragon]]
*Source: Monster Manual (2024) p. 330. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Like arctic storms, ancient white dragons threaten icy realms. They emerge from their frozen lairs to indulge their hungers for food or treasure, menacing other creatures with lethal cold. While they might ignore animals or small groups of polar wanderers, these dragons are quick to challenge other dragons and creatures wielding powerful magic, hoping to add their foes' skulls and magic items to their own hoards.

## White Dragons

*Dragons of Cold and Cruelty*

- **Habitat.** Arctic  
- **Treasure.** Arcana  

Among the most primal chromatic dragons, white dragons prioritize survival over all. Life is harsh and uncertain in the arctic expanses, glacial heights, and frozen seas where these dragons dwell. White dragons fiercely protect their territories, scouring the frigid regions for food and evidence of trespassers. Most white dragons ignore the plots of smaller creatures and other dragons, concerning themselves only with their own survival.

White dragons create lairs to defend themselves from other deadly arctic creatures and from dangerous natural conditions. Within these shelters, white dragons hoard testaments to their superiority, such as monstrous skulls, the gear of defeated rivals, and curiosities that capture their interest. To protect such treasure, white dragons coax ice to form over their hoards or sink their wealth in frigid pools. For white dragons, each piece of treasure embodies a victory—the details of which inflate as these dragons age.

### White Dragon Lairs

White dragons brood in bitterly cold lairs clawed from stone and ice.

```statblock
"name": "Ancient White Dragon (XMM)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "chromatic"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"hp": !!int "333"
"hit_dice": "18d20 + 144"
"modifier": !!int "12"
"stats":
  - !!int "26"
  - !!int "10"
  - !!int "26"
  - !!int "10"
  - !!int "13"
  - !!int "18"
"speed": "40 ft., burrow 40 ft., fly 80 ft., swim 40 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "7"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+13"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+6"
"damage_immunities": "cold"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic"
"cr": "20"
"traits":
  - "desc": "The dragon can move across and climb icy surfaces without needing to\
      \ make an ability check. Additionally, [[difficult-terrain-xphb|Difficult Terrain]]\
      \ composed of ice or snow doesn't cost it extra movement."
    "name": "Ice Walk"
  - "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day, or 5/Day in Lair)"
"actions":
  - "desc": "The dragon makes three Rend attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +14, reach 15 ft. Hit: 17 (2d8 + 8) Slashing damage\
      \ plus 7 (2d6) Cold damage."
    "name": "Rend"
  - "desc": "Constitution Saving Throw: DC 22, each creature in a 90-foot [[cone-area-of-effect-xphb|Cone]].\
      \ Failure: 63 (14d8) Cold damage. Success: Half damage."
    "name": "Cold Breath (Recharge 5-6)"
"legendary_actions":
  - "desc": "Constitution Saving Throw: DC 20, each creature in a 30-foot-radius\
      \ [[sphere-area-of-effect-xphb|Sphere]] centered\
      \ on a point the dragon can see within 120 feet. Failure: 14 (4d6) Cold damage,\
      \ and the target's [[speed-xphb|Speed]] is\
      \ 0 until the end of the target's next turn. Failure or Success: The dragon\
      \ can't take this action again until the start of its next turn."
    "name": "Freezing Burst"
  - "desc": "The dragon moves up to half its [[speed-xphb|Speed]],\
      \ and it makes one Rend attack."
    "name": "Pounce"
  - "desc": "The dragon casts [[fear-xphb|Fear]], requiring\
      \ no Material components and using Charisma as the spellcasting ability (spell\
      \ save DC 18). The dragon can't take this action again until the start of its\
      \ next turn.\n"
    "name": "Frightful Presence"
"regional_effects":
  - "desc": "The region containing an adult or ancient white dragon's lair is affected\
      \ by its presence, creating the following effects:"
    "name": ""
  - "desc": "- Frigid Cold. The area within 1 mile of the lair is an area of [[extreme-cold-xdmg|extreme\
      \ cold]]. Any water in that\
      \ area is [[frigid-water-xdmg|frigid water]].\
      \ See the \"Dungeon Master's Guide\" for rules on extreme cold and frigid water.\
      \  \n- Glacial Gloom. The area within 1 mile of the lair is [[lightly-obscured-xphb|Lightly Obscured]]\
      \ by chilly fog. Whenever a creature other than the dragon or one of its allies\
      \ finishes a [[long-rest-xphb|Long Rest]] in\
      \ that area, that creature must succeed on a DC 15 Constitution saving throw\
      \ or have its [[speed-xphb|Speed]] reduced\
      \ by 10 feet for 1 hour.  "
    "name": ""
  - "desc": "If the dragon dies or moves its lair elsewhere, these effects end immediately."
    "name": ""
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/dragon/token/ancient-white-dragon-xmm.webp"
```
^statblock

## Environment

arctic

## Player-Facing Summary

Ancient white dragon xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ancient white dragon xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ancient white dragon xmm.

## Adventure Hooks

- A rumor ties ancient white dragon xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ancient white dragon xmm to avert a public scandal.
- A map overlay reveals a hidden approach to ancient white dragon xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
