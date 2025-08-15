# ankheg-xmm

---
title: ankheg xmm
aliases:
- Ankheg
type: monster
tags:
- world/surface
- ttrpg-cli/compendium/src/5e/xmm
- monster
- research
- ttrpg-cli/monster/size/large
- world/both
- ttrpg-cli/monster/type/monstrosity
- active
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.022682'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ankheg-xmm-ankheg-xmm.svg)

# [[ankheg-xmm|Ankheg]]
*Source: Monster Manual (2024) p. 18. Available in the SRD and the Free Rules (2024)*  


## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement


## Ankheg

*Burrowing Insectile Predator*

- **Habitat.** Forest, Grassland  
- **Treasure.** None  

Oversize insects, ankhegs burrow close to the surface, creating sprawling underground labyrinths. From these tunnels, they burst forth to dissolve and devour smaller creatures using their acid-dripping mandibles and sprays of digestive enzymes.

Ankhegs are the bane of farmers whose grazing livestock are easy prey for these monsters. Many ankhegs hunt alone, but those in places with ample food might collect in nests of several dozen and threaten whole towns. Ankheg nests can be challenging to wipe out unless the monsters' tunnels are cleared out and their eggs destroyed.

Ankheg tunnels are roughly cylindrical and are often littered with the remains of ankhegs' meals and subterranean treasures. Roll on or choose a result from the Ankheg Tunnel Discoveries table to inspire what might be found in an ankheg's tunnel.

> [!quote] A quote from Feil Jenkins, Sage of Kirwak  
> 
> Though they feed on things under the soil, ankhegs prefer live meat—your cattle, your dogs, or you.

**Ankheg Tunnel Discoveries**

`dice: [](ankheg-xmm.md#^ankheg-tunnel-discoveries)`

| dice: 1d8 | Inside the Ankheg Tunnel Is... |
|-----------|--------------------------------|
| 1 | Another tunnel (either natural or of worked stone) that extends into the Underdark. |
| 2 | A buried ruin or grave exposed by the tunnel. |
| 3 | A cluster of `d4` fresh ankheg eggs that can be broken and used as vials of Acid. |
| 4 | A dead ankheg and evidence of a deadlier subterranean predator. |
| 5 | A piece of ankheg carapace usable as a Shield. |
| 6 | A pouch with `2d6` GP near a puddle of acid. |
| 7 | A stray farm or woodland animal. |
| 8 | A viciously mauled scarecrow. |
^ankheg-tunnel-discoveries

```statblock
"name": "Ankheg (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "11"
  - !!int "14"
  - !!int "1"
  - !!int "13"
  - !!int "6"
"speed": "30 ft., burrow 10 ft."
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The ankheg can burrow through solid rock at half its [[burrow-speed-xphb|Burrow Speed]]\
      \ and leaves a 10-foot-diameter tunnel in its wake."
    "name": "Tunneler"
"actions":
  - "desc": "Melee Attack Roll: +5 (with [[advantage-xphb|Advantage]]\
      \ if the target is [[conditions#Grappled|Grappled]] by the\
      \ ankheg), reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage plus 3 (d6) Acid\
      \ damage. If the target is a Large or smaller creature, it has the [[conditions#Grappled|Grappled]]\
      \ condition (escape DC 13)."
    "name": "Bite"
  - "desc": "Dexterity Saving Throw: DC 12, each creature in a 30-foot-long, 5-foot-wide\
      \ [[line-area-of-effect-xphb|Line]]. Failure:\
      \ 14 (4d6) Acid damage. Success: Half damage."
    "name": "Acid Spray (Recharge 6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/ankheg-xmm.webp"
```
^statblock

## Environment

forest, grassland

## Player-Facing Summary

Ankheg xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ankheg xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ankheg xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Plot Hooks

- Someone is blackmailing a witness for revenge
- A merchant needs help delivering before the new moon
- A shipment has gone missing and war looms
- A map reveals the truth about the cult

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]
