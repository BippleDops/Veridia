---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/14
  - ttrpg-cli/monster/environment/nine-hells
  - ttrpg-cli/monster/environment/planar
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Ice Devil
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-ice-devil-xmm-ice-devil-xmm.svg)

# [Ice Devil](3-Mechanics\CLI\bestiary\fiend/ice-devil-xmm.md)
*Source: Monster Manual (2024) p. 176. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Ice Devil

*Devil of Antipathy and Intellectual Arrogance*

- **Habitat.** Planar (Nine Hells)  
- **Treasure.** Arcana  

Heartless strategists of the Nine Hells, ice devils—also known as gelugons—forsake emotion to indulge in their own malicious interpretations of logic. For them, the multiverse is a puzzle that must be solved to benefit them, their masters, and the Nine Hells.

Ice devils act maliciously, disguising their whims as reason and strategy. In the service of evil masters, these insectile devils patiently plot the movements of infernal armies and scheme ways to fulfill wicked goals. They might also serve as guardians, owing to their martial prowess and ability to reshape battlefields with walls of ice.

When indulging their own schemes, ice devils tempt mortals to forsake empathy and social connections to embrace selfish, destructive visions of intellectualism. After isolating victims, these devils drain them of their secrets or send them forth to spread fractious dogmas cloaked as reason.

Ice devils usually lurk in frozen realms, particularly the frigid layer of Cania in the Nine Hells.

> [!quote] A quote from Tasha  
> 
> Part of the charm of ice devils is that they always think they're smarter than you. Mmm—there are few pleasures sweeter than proving a devil wrong.


```statblock
"name": "Ice Devil (XMM)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "228"
"hit_dice": "24d10 + 96"
"modifier": !!int "7"
"stats":
  - !!int "21"
  - !!int "14"
  - !!int "18"
  - !!int "18"
  - !!int "15"
  - !!int "18"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "9"
  - "wisdom": !!int "7"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[Insight](/03_Mechanics/CLI/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Persuasion](/03_Mechanics/CLI/skills.md#Persuasion)"
    "desc": "+9"
"damage_immunities": "cold, fire, poison"
"condition_immunities": "[poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "blindsight 120 ft., passive Perception 17"
"languages": "Infernal; telepathy 120 ft."
"cr": "14"
"traits":
  - "desc": "If the devil dies outside the Nine Hells, its body disappears in sulfurous\
      \ smoke, and it gains a new body instantly, reviving with all its [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Nine Hells."
    "name": "Diabolical Restoration"
  - "desc": "The devil has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The devil makes three Ice Spear attacks. It can replace one attack with\
      \ a Tail attack."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Attack Roll: +10, reach 5 ft. or range 30/120 ft.\
      \ Hit: 14 (2d8 + 5) Piercing damage plus 10 (3d6) Cold damage. Until the end\
      \ of its next turn, the target can't take a [Bonus Action](/03_Mechanics/CLI/variant-rules/bonus-action-xphb.md)\
      \ or [Reaction](/03_Mechanics/CLI/variant-rules/reaction-xphb.md), its [Speed](/03_Mechanics/CLI/variant-rules/speed-xphb.md)\
      \ decreases by 10 feet, and it can move or take one action on its turn, not\
      \ both. Hit or Miss: The spear magically returns to the devil's hand immediately\
      \ after a ranged attack."
    "name": "Ice Spear"
  - "desc": "Melee Attack Roll: +10, reach 10 ft. Hit: 15 (3d6 + 5) Bludgeoning\
      \ damage plus 18 (4d8) Cold damage."
    "name": "Tail"
  - "desc": "The devil casts [Wall of Ice](/03_Mechanics/CLI/spells/wall-of-ice-xphb.md)\
      \ (level 8 version), requiring no spell components and using Intelligence as\
      \ the spellcasting ability (spell save DC 17).\n"
    "name": "Ice Wall (Recharge 6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/ice-devil-xmm.webp"
```
^statblock

## Environment

planar, nine hells

## Player-Facing Summary

Ice devil xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ice devil xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ice devil xmm.

## Adventure Hooks

- A rumor ties ice devil xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ice devil xmm to avert a public scandal.
- A map overlay reveals a hidden approach to ice devil xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
