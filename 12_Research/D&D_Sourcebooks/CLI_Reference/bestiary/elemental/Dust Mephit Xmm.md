---
title: Dust Mephit Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Dust Mephit Xmm

---
title: Dust Mephit Xmm
aliases:
- Dust Mephit
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/elemental
- monster
- ttrpg-cli/monster/type/elemental
- research
- world/both
- ttrpg-cli/monster/environment/planar
- active
- status/in-progress
- ttrpg-cli/monster/size/small
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.709361+00:00'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-dust-mephit-xmm-dust-mephit-xmm.svg)

# [[dust mephit xmm|Dust Mephit]]
*Source: Monster Manual (2024) p. 206. Available in the SRD and the Free Rules (2024)*  

Dust mephits are composed of air and fine earth. They are drawn to forsaken places, and they think everything associated with death is hilarious.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Mephits

*Malicious Elemental Hooligans*

- **Habitat.** Planar (Elemental Planes)  
- **Treasure.** None  

Mephits are mean-spirited tricksters that dwell on the Elemental Planes. The six most prominent types of mephits resemble halfling-size gargoyles with wings, exaggerated features, and bodies composed of two elements. Most live self-interested existences, indulging their warped senses of humor or overblown egos on their home planes of existence. Some serve as messengers or spies for genies or magic-users.

Mephits resent leaving the elemental extremes where they make their homes. If loosed on the Material Plane or other realms, they lash out with nasty pranks or by tormenting weaker creatures. When destroyed, mephits explode in a burst of elemental magic.

> [!quote] A quote from Seamusxanthuszenus, smoke mephit with a typically inflated impression of itself  
> 
> I am Seamusxanthuszenus, Slayer of Fiends, Merchant Most Excellent, Purveyor of Death!

```statblock
"name": "Dust Mephit (XMM)"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "17"
"hit_dice": "5d6"
"modifier": !!int "2"
"stats":
  - !!int "5"
  - !!int "14"
  - !!int "10"
  - !!int "9"
  - !!int "11"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+4"
"damage_vulnerabilities": "fire"
"damage_immunities": "poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Primordial (Auran, Terran)"
"cr": "1/2"
"traits":
  - "desc": "The mephit explodes when it dies. Dexterity Saving Throw: DC 10, each\
      \ creature in a 5-foot [[emanation area of effect xphb|Emanation]]\
      \ originating from the mephit. Failure: 5 (2d4) Bludgeoning damage. Success:\
      \ Half damage."
    "name": "Death Burst"
"actions":
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 4 (1d4 + 2) Slashing damage."
    "name": "Claw"
  - "desc": "Dexterity Saving Throw: DC 10, each creature in a 15-foot [[cone area of effect xphb|Cone]].\
      \ Failure: The target has the [[conditions#Blinded|Blinded]]\
      \ condition until the end of the mephit's next turn."
    "name": "Blinding Breath (Recharge 6)"
  - "desc": "The mephit casts the [[sleep xphb|Sleep]] spell,\
      \ requiring no spell components and using Charisma as the spellcasting ability\
      \ (spell save DC 10).\n"
    "name": "Sleep (1/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/dust-mephit-xmm.webp"
```
^statblock

## Environment

planar, elemental

## Player-Facing Summary

Dust mephit xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of dust mephit xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around dust mephit xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Secret Connections

*[Hidden from players]* Connected to The Shadow Alliance - Control trade routes

## Plot Hooks

- A corpse reveals a betrayal about this place
- A merchant needs help delivering before dawn