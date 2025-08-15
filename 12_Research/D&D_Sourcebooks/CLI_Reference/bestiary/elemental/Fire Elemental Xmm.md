---
title: Fire Elemental Xmm
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Fire Elemental Xmm

---
title: Fire Elemental Xmm
aliases:
- Fire Elemental
type: monster
tags:
- both
- ttrpg-cli/compendium/src/5e/xmm
- monster
- ttrpg-cli/monster/environment/fire
- ttrpg-cli/monster/type/elemental
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/environment/planar
- world/both
- research
- active
- status/in-progress
- ttrpg-cli/monster/environment/desert
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.768888+00:00'
world: Both
---

# [[fire elemental xmm|Fire Elemental]]
*Source: Monster Manual (2024) p. 118. Available in the SRD and the Free Rules (2024)*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Fire Elemental

*Primal Spirit of Heat and Flame*

- **Habitat.** Desert, Planar (Elemental Plane of Fire)  
- **Treasure.** None  

Fire elementals arise when spirits of the Elemental Plane of Fire inhabit flames, burning cinders, and heated smoke. These beings are tangible despite largely being made of flames and particles, and they can uses their vague limbs to ignite foes and flammable materials. Fire elementals typically burn in shades of orange and red, but other colors are possible. Most on the Material Plane are summoned by magical means, or they might appear near rifts amid desert depths, volcanoes, wildfires, or magma flows that connect to their home plane.

Fire elementals might burn in distinctive ways. Roll on or choose a result from the Fire Elemental Compositions table to inspire a fire elemental's features.

**Fire Elemental Compositions**

`dice: [](fire-elemental-xmm.md#^fire-elemental-compositions)`

| dice: 1d8 | The Fire Elemental's Body Features... |
|-----------|---------------------------------------|
| 1 | Colorful, superheated gases. |
| 2 | A column of diabolical or divine flame. |
| 3 | Crackling shapes that look like animals, fiends, skeletons, sprites, or other beings. |
| 4 | Flames that are predomitly white, blue, or a more unusual color. |
| 5 | The form of a calm or tormented humanoid. |
| 6 | Smoke that forms eerie shapes or symbols. |
| 7 | Soot that smells like cedar, cloves, incense, or burning meat. |
| 8 | Swirls of cinders and burning debris. |
^fire-elemental-compositions

> [!quote] A quote from Marrake the Incandescent, Ruler of Efreet  
> 
> All the elements bow to fire. The strongest earth melts. Water boils. Even air ignites. We are all souls of flame, and we know what it is to burn.

```statblock
"name": "Fire Elemental (XMM)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "93"
"hit_dice": "11d10 + 33"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "17"
  - !!int "16"
  - !!int "6"
  - !!int "7"
"speed": "50 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "fire, poison"
"condition_immunities": "[[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Grappled|grappled]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Petrified|petrified]], [[conditions#Poisoned|poisoned]],\
  \ [[conditions#prone|prone]], [[conditions#Restrained|restrained]],\
  \ [[conditions#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Primordial (Ig)"
"cr": "5"
"traits":
  - "desc": "At the end of each of the elemental's turns, each creature in a 10-foot\
      \ [[emanation area of effect xphb|Emanation]]\
      \ originating from the elemental takes 5 (d10) Fire damage. Creatures and flammable\
      \ objects in the [[emanation area of effect xphb|Emanation]]\
      \ start [[burning xphb|burning]]."
    "name": "Fire Aura"
  - "desc": "The elemental can move through a space as narrow as 1 inch without expending\
      \ extra movement to do so, and it can enter a creature's space and stop there.\
      \ The first time it enters a creature's space on a turn, that creature takes\
      \ 5 (d10) Fire damage."
    "name": "Fire Form"
  - "desc": "The elemental sheds [[bright light xphb|Bright Light]]\
      \ in a 30-foot radius and [[dim light xphb|Dim Light]]\
      \ for an additional 30 feet."
    "name": "Illumination"
  - "desc": "The elemental takes 3 (d6) Cold damage for every 5 feet the elemental\
      \ moves in water or for every gallon of water splashed on it."
    "name": "Water Susceptibility"
"actions":
  - "desc": "The elemental makes two Burn attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +6, reach 5 ft. Hit: 10 (2d6 + 3) Fire damage.\
      \ If the target is a creature or a flammable object, it starts [[burning xphb|burning]]."
    "name": "Burn"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/fire-elemental-xmm.webp"
```
^statblock

## Environment

desert, planar, fire

## Player-Facing Summary

Fire elemental xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of fire elemental xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around fire elemental xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]

## 12_Research Specific Content

Contextual improvement based on 12_Research
