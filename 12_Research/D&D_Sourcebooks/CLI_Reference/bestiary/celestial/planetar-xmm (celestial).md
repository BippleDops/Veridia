---
title: planetar-xmm (celestial)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# planetar-xmm

---
title: planetar xmm
aliases:
- Planetar
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/type/celestial/angel
- ttrpg-cli/monster/environment/upper
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/environment/planar
- world/both
- research
- active
- ttrpg-cli/monster/cr/16
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.802799'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-planetar-xmm-planetar-xmm.svg)

# [[planetar xmm|Planetar]]
*Source: Monster Manual (2024) p. 245. Available in the SRD and the Free Rules (2024)*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Planetar

*Righteously Wrathful Angelic Warrior*

- **Habitat.** Planar (Upper Planes)  
- **Treasure.** Relics  

Planetars deliver the punishment of righteous gods. These angels innately know truth from lies, and they use magic and blessed weapons to protect the just and root out wickedness across the Multiverse.

These angels act where they can against overwhelming evil, but to avoid the attention of the Lower Planes, they prefer to let mortals attend to affairs on the Material Plane. Planetars often choose mortal champions to oppose threats they're loath to face directly, involving themselves only if necessary. Roll on or choose a result from the Planetar Quests table to inspire what evil a planetar might recruit heroes to thwart.

**Planetar Quests**

`dice: [](planetar-xmm.md#^planetar-quests)`

| dice: 1d6 | The Planetar Entreats a Mortal Hero To... |
|-----------|-------------------------------------------|
| 1 | Convince a villain to meet with the angel. |
| 2 | Find a loved one a villain believes is dead. |
| 3 | Heal the loved one of an evil ruler. |
| 4 | Inspire the defenders of a besieged holy site. |
| 5 | Recover and destroy an evil Artifact. |
| 6 | Reveal the true name of a devil to banish it. |
^planetar-quests

```statblock
"name": "Planetar (XMM)"
"size": "Large"
"type": "celestial"
"subtype": "angel"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "262"
"hit_dice": "21d10 + 147"
"modifier": !!int "10"
"stats":
  - !!int "24"
  - !!int "20"
  - !!int "19"
  - !!int "22"
  - !!int "25"
"speed": "40 ft., fly 120 ft. (hover)"
"saves":
  - "strength": !!int "12"
  - "constitution": !!int "12"
  - "wisdom": !!int "11"
  - "charisma": !!int "12"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+11"
"damage_resistances": "radiant"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#frightened|frightened]]"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all; telepathy 120 ft."
"cr": "16"
"traits":
  - "desc": "The planetar knows if it hears a lie."
    "name": "Divine Awareness"
  - "desc": "If the planetar dies outside Mount Celestia, its body disappears, and\
      \ it gains a new body instantly, reviving with all its [[hit points xphb|Hit Points]]\
      \ somewhere in Mount Celestia."
    "name": "Exalted Restoration"
  - "desc": "The planetar has [[advantage xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The planetar makes three Radiant Sword attacks or uses Holy Burst twice."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +12, reach 10 ft. Hit: 14 (2d6 + 7) Slashing damage\
      \ plus 18 (4d8) Radiant damage."
    "name": "Radiant Sword"
  - "desc": "Dexterity Saving Throw: DC 20, each enemy in a 20-foot-radius [[sphere area of effect xphb|Sphere]]\
      \ centered on a point the planetar can see within 120 feet. Failure: 24 (7d6)\
      \ Radiant damage. Success: Half damage."
    "name": "Holy Burst"
  - "desc": "The planetar casts one of the following spells, requiring no Material\
      \ components and using Charisma as spellcasting ability (spell save DC 20):\n\
      \nAt will: [[detect evil and good xphb|Detect Evil and Good]]\n\
      \n1/day each: [[commune xphb|Commune]], [[control weather xphb|Control\]]
      \ Weather]], [[dispel evil and good xphb|Dispel Evil and\]]
      \ Good]], [[raise dead xphb|Raise Dead]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The planetar casts [[cure wounds xphb|Cure Wounds]],\
      \ [[invisibility xphb|Invisibility]], [[lesser restoration xphb|Lesser Restoration]],\
      \ or [[remove curse xphb|Remove Curse]], using the\
      \ same spellcasting ability as Spellcasting.\n"
    "name": "Divine Aid (2/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/celestial/token/planetar-xmm.webp"
```
^statblock

## Environment

planar, upper

## Player-Facing Summary

Planetar xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of planetar xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around planetar xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- Strange disappearances suggest a curse
- A prisoner has gone missing and war looms
- A stranger needs help delivering before the festival
- A shipment has gone missing and truth emerges

## 12_Research Specific Content

Contextual improvement based on 12_Research
