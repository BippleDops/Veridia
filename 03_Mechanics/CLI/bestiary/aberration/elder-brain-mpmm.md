---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/mpmm
  - ttrpg-cli/monster/cr/14
  - ttrpg-cli/monster/environment/underdark
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/aberration/mind-flayer
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Elder Brain
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-elder-brain-mpmm-elder-brain-mpmm.svg)

# [Elder Brain](3-Mechanics\CLI\bestiary\aberration/elder-brain-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 120, Volo's Guide to Monsters p. 173*  

The ultimate expression of mind flayer domination, an elder brain sprawls within a vat of viscous brine, cared for by mind flayer minions as it touches the thoughts of creatures near and far. It scrawls upon the canvas of the creatures' minds, rewriting their thoughts and authoring their dreams.

An elder brain sustains itself by consuming the brains of other creatures. If its mind flayer servants don't bring meals directly to it, the elder brain reaches out with tendrils of thought, compelling creatures to come to it so that it can feed on them.

When a mind flayer perishes, the elder brain's servants feed its brain to their master, which then absorbs the knowledge and experience contained therein. Mind flayers conceive of this oneness with the elder brain as a sacred state akin to an afterlife.

## Hive Mind

Elder brains are so-called among non-illithids because they act as the central communication hub for an entire mind flayer colony, just as a brain does for a living body. Linked to the elder brain, the colony acts like a single organism, acting in concert as if each illithid were the digit of a hand.

An elder brain considers itself and its desires the most important things in the multiverse, and the mind flayers in its colony nothing more than extensions of its will. Each presides over its colony according to its own unique personality and storehouse of collected knowledge and experience. Some elder brains reign as tyrants, while others serve as sages, counselors, and repositories of information and lore for the mind flayers that protect and nourish them.

## An Elder Brain's Lair

The lair of an elder brain lies deep in the heart of a mind flayer colony. The brain dwells in a dimly glowing brine pool filled with brackish water infused with its vital fluids and psionic energy.

An elder brain's ambitions are always tempered by its relative immobility. Although its telepathic senses can reach for miles, moving anywhere is always a dangerous proposition. If forced outside its brine pool, an elder brain swiftly expires, and transporting an elder brain in its pool through confining and tortuous subterranean tunnels frequently proves difficult or impossible.

```statblock
"name": "Elder Brain (MPMM)"
"size": "Large"
"type": "aberration"
"subtype": "mind flayer"
"alignment": "Typically  Lawful Evil"
"ac": !!int "10"
"hp": !!int "210"
"hit_dice": "20d10 + 100"
"modifier": !!int "0"
"stats":
  - !!int "15"
  - !!int "10"
  - !!int "20"
  - !!int "21"
  - !!int "19"
  - !!int "24"
"speed": "5 ft., swim 10 ft."
"saves":
  - "intelligence": !!int "10"
  - "wisdom": !!int "9"
  - "charisma": !!int "12"
"skillsaves":
  - "name": "[Arcana](/03_Mechanics/CLI/skills.md#Arcana)"
    "desc": "+10"
  - "name": "[Deception](/03_Mechanics/CLI/skills.md#Deception)"
    "desc": "+12"
  - "name": "[Insight](/03_Mechanics/CLI/skills.md#Insight)"
    "desc": "+14"
  - "name": "[Intimidation](/03_Mechanics/CLI/skills.md#Intimidation)"
    "desc": "+12"
  - "name": "[Persuasion](/03_Mechanics/CLI/skills.md#Persuasion)"
    "desc": "+12"
"senses": "blindsight 120 ft., passive Perception 14"
"languages": "understands Common, Deep Speech, and Undercommon but can't speak, telepathy\
  \ 5 miles"
"cr": "14"
"traits":
  - "desc": "The elder brain is aware of creatures within 5 miles of it that have\
      \ an Intelligence score of 4 or higher. It knows the distance and direction\
      \ to each creature, as well as each one's Intelligence score, but can't sense\
      \ anything else about it. A creature protected by a [mind blank](/03_Mechanics/CLI/spells/mind-blank-xphb.md)\
      \ spell, a [nondetection](/03_Mechanics/CLI/spells/nondetection-xphb.md) spell,\
      \ or similar magic can't be perceived in this manner."
    "name": "Creature Sense"
  - "desc": "If the elder brain fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The elder brain has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The elder brain can use its telepathy to initiate and maintain telepathic\
      \ conversations with up to ten creatures at a time. The elder brain can let\
      \ those creatures telepathically hear each other while connected in this way."
    "name": "Telepathic Hub"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 20\
      \ (4d8 + 2) bludgeoning damage. If the target is a Huge or smaller creature,\
      \ it is [grappled](/03_Mechanics/CLI/conditions.md#Grappled) (escape DC 15) and\
      \ takes 9 (1d8 + 5) psychic damage at the start of each of its turns until the\
      \ grapple ends. The elder brain can have up to four targets [grappled](/03_Mechanics/CLI/conditions.md#Grappled)\
      \ at a time."
    "name": "Tentacle"
  - "desc": "Creatures of the elder brain's choice within 60 feet of it must succeed\
      \ on a DC 18 Intelligence saving throw or take 32 (5d10 + 5) psychic damage\
      \ and be [stunned](/03_Mechanics/CLI/conditions.md#Stunned) for 1 minute. A target\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success."
    "name": "Mind Blast (Recharge 5-6)"
  - "desc": "The elder brain casts one of the following spells, requiring no spell\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 18):\n\nAt will: [detect thoughts](/03_Mechanics/CLI/spells/detect-thoughts-xphb.md),\
      \ [levitate](/03_Mechanics/CLI/spells/levitate-xphb.md)\n\n3/day: [modify\
      \ memory](/03_Mechanics/CLI/spells/modify-memory-xphb.md)\n\n1/day each:\
      \ [dominate monster](/03_Mechanics/CLI/spells/dominate-monster-xphb.md), [plane\
      \ shift](/03_Mechanics/CLI/spells/plane-shift-xphb.md) (self only)"
    "name": "Spellcasting (Psionics)"
"bonus_actions":
  - "desc": "The elder brain targets one [incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated)\
      \ creature it senses with its Creature Sense trait and establishes a psychic\
      \ link with the target. Until the link ends, the elder brain can perceive everything\
      \ the target senses. The target becomes aware that something is linked to its\
      \ mind once it is no longer [incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated),\
      \ and the elder brain can terminate the link at any time (no action required).\
      \ The target can use an action on its turn to attempt to break the link, doing\
      \ so with a successful DC 18 Charisma saving throw. On a successful save, the\
      \ target takes 10 (3d6) psychic damage. The link also ends if the target and\
      \ the elder brain are more than 5 miles apart. The elder brain can form psychic\
      \ links with up to ten creatures at a time."
    "name": "Psychic Link"
  - "desc": "The elder brain targets a creature with which it has a psychic link.\
      \ The elder brain gains insight into the target's emotional state and foremost\
      \ thoughts (including worries, loves, and hates)."
    "name": "Sense Thoughts"
"legendary_actions":
  - "desc": "The elder brain targets one creature within 120 feet of it with which\
      \ it has a psychic link. The elder brain breaks the creature's [concentration](/03_Mechanics/CLI/conditions.md#Concentration)\
      \ on a spell it has cast. The creature also takes 2 (d4) psychic damage per\
      \ level of the spell."
    "name": "Break Concentration"
  - "desc": "The elder brain targets one creature within 120 feet of it with which\
      \ it has a psychic link. The target and enemies of the elder brain within 30\
      \ feet of target take 10 (3d6) psychic damage."
    "name": "Psychic Pulse"
  - "desc": "The elder brain targets one creature within 120 feet of it with which\
      \ it has a psychic link. The elder brain ends the link, causing the creature\
      \ to have disadvantage on all ability checks, attack rolls, and saving throws\
      \ until the end of the creature's next turn."
    "name": "Sever Psychic Link"
  - "desc": "The elder brain makes one Tentacle attack."
    "name": "Tentacle (Costs 2 Actions)"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/elder-brain-mpmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Elder brain mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of elder brain mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around elder brain mpmm.

## Adventure Hooks

- A rumor ties elder brain mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at elder brain mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to elder brain mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
