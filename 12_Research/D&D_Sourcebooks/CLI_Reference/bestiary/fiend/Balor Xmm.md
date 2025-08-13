---
aliases:
- Balor
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
- ttrpg-cli/monster/cr/19
- ttrpg-cli/monster/environment/abyss
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
- world/both
type: monster
updated: '2025-08-13T12:34:05.846685+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-balor-xmm-balor-xmm.svg)

# [[3-Mechanics\CLI\bestiary\fiend/balor-xmm|Balor]]
*Source: Monster Manual (2024) p. 26. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Balor

*Demon of Overwhelming Rage*

- **Habitat.** Planar (Abyss)  
- **Treasure.** Armaments  

Balors embody demons' ruinous fury and hatred. Towering, winged terrors, these demonic warlords seethe with wrath, their rage erupting in waves of fire and as a pair of vicious weapons: a sword of crackling lightning and a whip of lashing flames. A balor's fury persists until the moment of its demise, at which point it explodes—a last act of vengeance against those who slew it. Demon lords and evil gods harness balors' rage by making balors commanders of armies or guardians of grave secrets.

```statblock
"name": "Balor (XMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "287"
"hit_dice": "23d12 + 138"
"modifier": !!int "14"
"stats":
  - !!int "26"
  - !!int "15"
  - !!int "22"
  - !!int "20"
  - !!int "16"
  - !!int "22"
"speed": "40 ft., fly 80 ft."
"saves":
  - "constitution": !!int "12"
  - "wisdom": !!int "9"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+9"
"damage_resistances": "cold, lightning"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Frightened|frightened]],\
  \ [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Abyssal; telepathy 120 ft."
"cr": "19"
"traits":
  - "desc": "The balor explodes when it dies. Dexterity Saving Throw: DC 20, each\
      \ creature in a 30-foot [[/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the balor. Failure: 31 (9d6) Fire damage plus 31 (9d6)\
      \ Force damage. Success: Half damage. Failure or Success: If the balor dies\
      \ outside the Abyss, it gains a new body instantly, reviving with all its [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit\
      \ Points]] somewhere in the\
      \ Abyss."
    "name": "Death Throes"
  - "desc": "At the end of each of the balor's turns, each creature in a 5-foot [[/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb|Emanation]]\
      \ originating from the balor takes 13 (3d8) Fire damage."
    "name": "Fire Aura"
  - "desc": "If the balor fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The balor has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The balor makes one Flame Whip attack and one Lightning Blade attack."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +14, reach 30 ft. Hit: 18 (3d6 + 8) Force damage\
      \ plus 17 (5d6) Fire damage. If the target is a Huge or smaller creature, the\
      \ balor pulls the target up to 25 feet straight toward itself, and the target\
      \ has the [[/03_Mechanics/CLI/conditions#Prone|Prone]] condition."
    "name": "Flame Whip"
  - "desc": "Melee Attack Roll: +14, reach 10 ft. Hit: 21 (3d8 + 8) Force damage\
      \ plus 22 (4d10) Lightning damage, and the target can't take Reactions until\
      \ the start of the balor's next turn."
    "name": "Lightning Blade"
"bonus_actions":
  - "desc": "The balor teleports itself or a willing demon within 10 feet of itself\
      \ up to 60 feet to an unoccupied space the balor can see."
    "name": "Teleport"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/balor-xmm.webp"
```
^statblock

## Environment

planar, abyss

## Player-Facing Summary

Balor xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of balor xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around balor xmm.

## Adventure Hooks

- A rumor ties balor xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at balor xmm to avert a public scandal.
- A map overlay reveals a hidden approach to balor xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
