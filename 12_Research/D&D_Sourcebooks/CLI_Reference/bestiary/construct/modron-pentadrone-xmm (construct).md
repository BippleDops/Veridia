---
title: modron-pentadrone-xmm (construct)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# modron-pentadrone-xmm

---
title: modron pentadrone xmm
aliases:
- Modron Pentadrone
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/type/construct
- monster
- research
- ttrpg-cli/monster/environment/mechanus
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- world/both
- active
- ttrpg-cli/monster/cr/2
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.839243'
world: Both
---

# [[modron pentadrone xmm|Modron Pentadrone]]
*Source: Monster Manual (2024) p. 218*  

Pentadrones oversee and protect contingents of lesser modrons. They're quick to call lengthy meetings with other modrons when making decisions.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Modrons

*Mechanized Caretakers of Multiversal Law*

- **Habitat.** Planar (Mechanus)  
- **Treasure.** None  

Beings of magic and machinery, modrons embody absolute law. These inhabitants of the clockwork plane of Mechanus tend to the incredible mechanisms of their orderly home and oppose chaotic forces across the multiverse.

Modrons are parts of a vast hierarchy, spanning from quirky monodrones to the leader of their kind, the godlike Primus. Every modron carries out tasks assigned to it by higher-ranking modrons, doing so without question. Generally, modrons communicate only with other modrons of their own rank or the ranks immediately above and below them. Those more than one rank away tend to be either too advanced or too simple for them to understand.

Modrons excel at tasks that require patience and precision, but they have little understanding of non-literal concepts such as art or humor. They have no egos; they have only their work and the certainty that multiversal law depends on their efficacy.

In rare cases, a modron goes rogue and develops its own will. In these cases, other modrons are sent to recover or destroy their malfunctioning kin.

### Modron Marches

Whether in service to lawful deities or as part of the Great Modron March, modrons travel from Mechanus to spread their vision of law to other planes of existence. Roll on or choose a result from the Modron Operations table to inspire what effort leads a group of modrons to other realms.

**Modron Operations**

`dice: [](modron-pentadrone-xmm.md#^modron-operations)`

| dice: 1d8 | The Modrons Work To... |
|-----------|------------------------|
| 1 | Create a clockwork outpost to monitor the balance of obscure planar forces. |
| 2 | Ensure neither side gains the upper hand in a conflict between good and evil. |
| 3 | Excavate a portal to another plane. |
| 4 | Find a lost contingent of modrons. |
| 5 | Reactivate a titanic but lost modron device. |
| 6 | Remove a forest, mountain, or city before the arrival of a modron procession. |
| 7 | Seal off a planar rift or wild magic zone. |
| 8 | Wage war with demons, slaadi, or chaotic Fey. |
^modron-operations

> [!quote] A quote from A planar explorer learning modrons have no sense of humor  
> 
> The guide swore "beep boop" meant "hello, friend." I don't know why they're after us!

```statblock
"name": "Modron Pentadrone (XMM)"
"size": "Large"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "16"
"hp": !!int "32"
"hit_dice": "5d10 + 5"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "12"
  - !!int "10"
  - !!int "13"
"speed": "40 ft."
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+4"
"condition_immunities": "[[conditions#Charmed|charmed]]"
"senses": "truesight 120 ft., passive Perception 14"
"languages": "Modron"
"cr": "2"
"traits":
  - "desc": "If the modron dies, it disintegrates into dust, leaving behind anything\
      \ it was wearing or carrying."
    "name": "Disintegration"
"actions":
  - "desc": "The modron makes five Slam attacks or five Electrical Discharge attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +4, reach 5 ft. Hit: 5 (1d6 + 2) Force damage."
    "name": "Slam"
  - "desc": "Ranged Attack Roll: +4, range 120 ft. Hit: 5 (1d6 + 2) Lightning\
      \ damage."
    "name": "Electrical Discharge"
  - "desc": "Constitution Saving Throws: DC 11, each creature in a 30-foot [[cone area of effect xphb|Cone]].\
      \ Failure: The target has the [[conditions#Paralyzed|Paralyzed]]\
      \ condition and repeats the save at the end of each of its turns, ending the\
      \ effect on itself on a success. After 1 minute, it succeeds automatically."
    "name": "Paralysis Gas (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/construct/token/modron-pentadrone-xmm.webp"
```
^statblock

## Environment

planar, mechanus

## Player-Facing Summary

Modron pentadrone xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of modron pentadrone xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around modron pentadrone xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Plot Hooks

- Someone is protecting information for power
- A letter reveals ancient history about the cult
- A document has gone missing and evil awakens
- A shipment has gone missing and war looms