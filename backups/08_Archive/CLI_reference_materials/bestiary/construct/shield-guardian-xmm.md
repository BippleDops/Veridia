---
aliases:
- Shield Guardian
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
- world/both
type: monster
updated: '2025-08-12T23:37:35.847048'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-shield-guardian-xmm-shield-guardian-xmm.svg)

# [Shield Guardian](3-Mechanics\CLI\bestiary\construct/shield-guardian-xmm.md)
*Source: Monster Manual (2024) p. 277. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Shield Guardian

*Device-Controlled Magical Bodyguard*

- **Habitat.** Urban  
- **Treasure.** None  

An intimidating magical automaton, a shield guardian obeys its master's commands and protects its master from danger. When such a guardian is created, the magic that animates it is intertwined with a bonded command amulet. Any creature that has a shield guardian's command amulet can control that Construct and, in the case of magic-users, imbue it with a spell to unleash under predetermined circumstances. Yet a shield guardian's primary goal is to protect its master. It escorts whoever bears its command amulet and intercedes between the bearer and any threat. Although it isn't mindless, a shield guardian has no sense of self preservation and will sacrifice itself to protect its master.

Shield guardians are typically constructed of steel, stone, and wood in the shape of watchful soldiers. More fanciful designs exist, reflecting the tastes of their creators. Given their resilience, it's common for shield guardians to eventually serve creatures other than their creators. A shield guardian's command amulet might be passed down through a magic-using society or family for generations.

```statblock
"name": "Shield Guardian (XMM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "8"
  - !!int "18"
  - !!int "7"
  - !!int "10"
  - !!int "3"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [petrified](/03_Mechanics/CLI/conditions.md#Petrified), [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 10"
"languages": "understands commands given in any language but can't speak"
"cr": "7"
"traits":
  - "desc": "The guardian is magically bound to an amulet. While the guardian and\
      \ its amulet are on the same plane of existence, the amulet's wearer can telepathically\
      \ call the guardian to travel to it, and the guardian knows the distance and\
      \ direction to the amulet. If the guardian is within 60 feet of the amulet's\
      \ wearer, half of any damage the wearer takes (round up) is transferred to the\
      \ guardian."
    "name": "Bound"
  - "desc": "The guardian regains 10 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ at the start of each of its turns if it has at least 1 [Hit Point](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)."
    "name": "Regeneration"
  - "desc": "A spellcaster who wears the guardian's amulet can cause the guardian\
      \ to store one spell of level 4 or lower. To do so, the wearer must cast the\
      \ spell on the guardian while within 5 feet of it. The spell has no effect but\
      \ is stored within the guardian. Any previously stored spell is lost when a\
      \ new spell is stored. The guardian can cast the spell stored with any parameters\
      \ set by the original caster, requiring no spell components and using the caster's\
      \ spellcasting ability. The stored spell is then lost."
    "name": "Spell Storing"
"actions":
  - "desc": "The guardian makes two Fist attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 10 ft. Hit: 11 (2d6 + 4) Bludgeoning\
      \ damage plus 7 (2d6) Force damage."
    "name": "Fist"
"reactions":
  - "desc": "Trigger: An attack roll hits the wearer of the guardian's amulet while\
      \ the wearer is within 5 feet of the guardian. _Response:_ The wearer gains\
      \ a +5 bonus to AC, including against the triggering attack and possibly causing\
      \ it to miss, until the start of the guardian's next turn."
    "name": "Protection"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/construct/token/shield-guardian-xmm.webp"
```
^statblock

## Environment

urban

## Player-Facing Summary

Shield guardian xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of shield guardian xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around shield guardian xmm.

## Adventure Hooks

- A rumor ties shield guardian xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at shield guardian xmm to avert a public scandal.
- A map overlay reveals a hidden approach to shield guardian xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
