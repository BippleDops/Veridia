---
title: elemental-cataclysm-xmm (elemental)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# elemental-cataclysm-xmm

---
title: elemental cataclysm xmm
aliases:
- Elemental Cataclysm
type: monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/elemental/titan
- monster
- research
- world/both
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/elemental-chaos
- active
- status/in-progress
- ttrpg-cli/monster/cr/22
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.442740'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-elemental-cataclysm-xmm-elemental-cataclysm-xmm.svg)

# [[Elemental Cataclysm Xmm]]
*Source: Monster Manual (2024) p. 111*  

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Elemental Cataclysm

*The End and Beginning of Ages*

- **Habitat.** Planar (Elemental Chaos)  
- **Treasure.** None  

Beyond the fringes of the Elemental Planes, primordial forces endlessly clash amid the Elemental Chaos. Within the vastness and violence of this realm rage elemental cataclysms, entities spawned from the raw forces of the multiverse and awash in dissot elemental powers. These beings of primal conflict annihilate nearly all they encounter and seed the ruins left in their wake with the potential for new creations.

Elemental cataclysms rarely escape the Elemental Chaos. When they do, it is typically due to some planar disruption or the summons of nihilistic cultists. When they emerge on Material Plane worlds, elemental cataclysms create realm-altering trails of destruction, carelessly destroying cities and throwing whole nations into chaos. The rampages aren't random. Elemental cataclysms abhor anything that visibly mars nature, be it mines or monuments, fortresses or cities, but they vent their most intense rage on works of metal and clockwork. As they sow destruction, they howl condemnation and chant words of unmaking in the languages of the Inner Planes.

Little can stop an elemental cataclysm. Those that oppose one of these calamities often attempt to reverse the ritual that summoned it, coax it through a planar rift, or conjure another titan in hopes that the two destroy one another. These terrors leave a wake of ashes, floods, storms, and broken earth. But after these disasters recede, the land is imbued with new life or environmental changes. Roll on or choose a result from the Elemental Alterations table to inspire what changes emerge after an elemental cataclysm's destruction.

**Elemental Alterations**

`dice: [](elemental-cataclysm-xmm.md#^elemental-alterations)`

| dice: 1d8 | The Elemental Cataclysm Leaves Behind A... |
|-----------|--------------------------------------------|
| 1 | Dramatic increase or decrease in temperature. |
| 2 | Gigantic coral reef or fungal forest. |
| 3 | Never-ending storm or whirlpool. |
| 4 | Passage to the Underdark or portal to an Elemental Plane. |
| 5 | Primeval or previously extinct animal population. |
| 6 | Rapidly growing rainforest. |
| 7 | River where previously there was none. |
| 8 | Series of dramatic rock formations. |
^elemental-alterations

```statblock
"name": "Elemental Cataclysm (XMM)"
"size": "Gargantuan"
"type": "elemental"
"subtype": "titan"
"alignment": "Chaotic Neutral"
"ac": !!int "20"
"hp": !!int "370"
"hit_dice": "20d20 + 160"
"modifier": !!int "18"
"stats":
  - !!int "26"
  - !!int "19"
  - !!int "27"
  - !!int "9"
  - !!int "14"
"speed": "60 ft., burrow 60 ft., fly 80 ft. (hover), swim 80 ft."
"saves":
  - "dexterity": !!int "11"
  - "constitution": !!int "15"
  - "wisdom": !!int "9"
  - "charisma": !!int "6"
"damage_immunities": "acid, cold, fire, lightning, poison, thunder"
"condition_immunities": "[[conditions#Blinded|blinded]], [[conditions#Charmed|charmed]],\
  \ [[conditions#Deafened|deafened]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#frightened|frightened]], [[conditions#Grappled|grappled]],\
  \ [[conditions#Paralyzed|paralyzed]], [[conditions#Petrified|petrified]],\
  \ [[conditions#Poisoned|poisoned]], [[conditions#prone|prone]],\
  \ [[conditions#Restrained|restrained]], [[conditions#Stunned|stunned]],\
  \ [[conditions#Unconscious|unconscious]]"
"senses": "truesight 150 ft., passive Perception 12"
"languages": "Primordial"
"cr": "22"
"traits":
  - "desc": "The cataclysm can burrow through nonmagical, unworked earth and stone.\
      \ While doing so, the cataclysm doesn't disturb the material it moves through."
    "name": "Earth Glide"
  - "desc": "If the cataclysm fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (4/Day)"
  - "desc": "The cataclysm deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The cataclysm makes two Elemental Burst attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Attack Roll: +15, reach 30 ft. or range 150 ft. Hit:\
      \ 25 (5d6 + 8) damage of a type chosen by the cataclysm: Acid, Cold, Fire, Lightning,\
      \ or Thunder."
    "name": "Elemental Burst"
  - "desc": "The cataclysm creates one of the following effects at random (roll d4):\n\
      \n- 1 Clinging Flames. Dexterity Saving Throw: DC 23, each creature in\
      \ a 60-foot-radius [[Area of Effect Xphb]]\
      \ centered on a point the cataclysm can see within 150 feet. Failure: 45 (13d6)\
      \ Fire damage. Success: Half damage. Failure or Success: The target starts\
      \ [[burning-xphb (traps-hazards)]].  \n- 2 Freezing\
      \ Waves. Strength Saving Throw: DC 23, each creature in a 90-foot [[Area of Effect Xphb]].\
      \ Failure: 22 (5d8) Bludgeoning damage plus 22 (5d8) Cold damage, and the\
      \ target has the [[conditions#prone|Prone]] condition. Success:\
      \ Half damage only. Failure or Success: The target's [[Fly Speed Xphb]]\
      \ is reduced to 0 until the end of its next turn.  \n- 3 Raging Storm. A\
      \ storm cloud fills a 60-foot-radius [[Area of Effect Xphb]]\
      \ centered on a point the cataclysm can see within 150 feet. The cloud lasts\
      \ for 1 minute or until the cataclysm uses Cataclysmic Event again. Creatures\
      \ entirely in the cloud have the [[conditions#Blinded|Blinded]]\
      \ and [[conditions#Deafened|Deafened]] conditions and can't\
      \ cast spells with a Verbal component. Dexterity Saving Throw: DC 23, each\
      \ creature that enters the cloud for the first time on a turn or starts its\
      \ turn there. Failure: 18 (4d8) Lightning damage plus 18 (4d8) Thunder damage.\
      \ Success: Half damage.  \n- 4 Swallowing Earth. Strength Saving Throw:\
      \ DC 23, each creature in a 90-foot [[Cube Area of Effect Xphb]]\
      \ originating from a point on the ground within 150 feet. Failure: 18 (4d8)\
      \ Bludgeoning damage plus 18 (4d8) Acid damage, and the target has the [[conditions#prone|Prone]]\
      \ condition and is buried under rubble. A buried target has the [[conditions#Restrained|Restrained]]\
      \ condition, has [[Cover Xphb]],\
      \ and is suffocating. As an action, a buried creature or another creature within\
      \ 5 feet of it can make a DC 18 Strength ([[skills#Athletics|Athletics]])\
      \ check. On a successful check, the creature is no longer buried. Success:\
      \ Half damage only.  "
    "name": "Cataclysmic Event (Recharge 4-6)"
  - "desc": "The cataclysm casts the [[weather]]\
      \ spell, requiring no spell components and using Constitution as the spellcasting\
      \ ability.\n"
    "name": "Control Weather"
"legendary_actions":
  - "desc": "The cataclysm makes one Elemental Burst attack."
    "name": "Eruption"
  - "desc": "The cataclysm moves up to its [[Fly Speed Xphb]],\
      \ [[Fly Speed Xphb]], or [[swim-speed-xphb (variant-rules)]]\
      \ without provoking [[actions#Opportunity%20Attack|Opportunity Attacks]].\
      \ Each creature within 5 feet of the cataclysm as it moves is targeted once\
      \ by the following effect. Constitution Saving Throw: DC 23. Failure: The\
      \ target has the [[conditions#prone|Prone]] condition. Failure\
      \ or Success: The cataclysm can't take this action again until the start of\
      \ its next turn."
    "name": "Rumbling Movement"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/elemental/token/elemental-cataclysm-xmm.webp"
```
^statblock

## Environment

planar, elemental chaos

## Player-Facing Summary

Elemental cataclysm xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of elemental cataclysm xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around elemental cataclysm xmm.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Prophecy Connection

Mentioned in The Hidden Prophecy of Shadows

## Plot Hooks

- An heirloom has gone missing and war looms
- Strange sightings suggest a curse

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]

## 12_Research Specific Content

Contextual improvement based on 12_Research
