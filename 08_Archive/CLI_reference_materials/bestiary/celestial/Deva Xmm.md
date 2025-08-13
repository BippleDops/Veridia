---
aliases:
- Deva
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
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/upper
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial/angel
- world/both
type: monster
updated: '2025-08-13T12:34:06.040805+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-deva-xmm-deva-xmm.svg)

# [[3-Mechanics\CLI\bestiary\celestial/deva-xmm|Deva]]
*Source: Monster Manual (2024) p. 97. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Deva

*World-Changing Angelic Messenger*

- **Habitat.** Planar (Upper Planes)  
- **Treasure.** Relics  

Devas are emissaries of divine will. These immortal messengers adopt the shapes of mystical beasts or idealized, winged mortals. As with all angels, their true forms are known only to the gods they serve.

Rather than literal correspondence from a god, a deva conveys an allegory or quest to mortals, tasking them with delivering something to its rightful place. While the angel might be called on in times of need, it encourages mortal heroism. Should a deva's chosen champions carry out their charge, they experience a revelation or the world is changed in line with divine purpose. Roll on or choose a result from the Deva Messages table to inspire a deva's charge.

**Deva Messages**

`dice: [](deva-xmm.md#^deva-messages)`

| dice: 1d6 | The Deva Tasks a Mortal with Delivering... |
|-----------|--------------------------------------------|
| 1 | The corpse of a hero in need of redemption. |
| 2 | The cure for a plague in a distant land. |
| 3 | A holy coffer that must not be opened. |
| 4 | A magic weapon usable only by a true hero. |
| 5 | A seedling that wilts if exposed to anger. |
| 6 | Someone from another world with a prophesied purpose but no memory. |
^deva-messages

```statblock
"name": "Deva (XMM)"
"size": "Medium"
"type": "celestial"
"subtype": "angel"
"alignment": "Lawful Good"
"ac": !!int "17"
"hp": !!int "229"
"hit_dice": "27d8 + 108"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "18"
  - !!int "17"
  - !!int "20"
  - !!int "20"
"speed": "30 ft., fly 90 ft. (hover)"
"saves":
  - "wisdom": !!int "9"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Insight|Insight]]"
    "desc": "+9"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+9"
"damage_resistances": "radiant"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Frightened|frightened]]"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all; telepathy 120 ft."
"cr": "10"
"traits":
  - "desc": "If the deva dies outside Mount Celestia, its body disappears, and it\
      \ gains a new body instantly, reviving with all its [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ somewhere in Mount Celestia."
    "name": "Exalted Restoration"
  - "desc": "The deva has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The deva makes two Holy Mace attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +8, reach 5 ft. Hit: 7 (1d6 + 4) Bludgeoning damage\
      \ plus 18 (4d8) Radiant damage."
    "name": "Holy Mace"
  - "desc": "The deva casts one of the following spells, requiring no Material components\
      \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt\
      \ will: [[/03_Mechanics/CLI/spells/detect-evil-and-good-xphb|Detect Evil and Good]],\
      \ [[/03_Mechanics/CLI/spells/shapechange-xphb|Shapechange]] (Beast or Humanoid\
      \ form only, no [[/03_Mechanics/CLI/variant-rules/temporary-hit-points-xphb|Temporary Hit Points]]\
      \ gained from the spell, and no Concentration or [[/03_Mechanics/CLI/variant-rules/temporary-hit-points-xphb|Temporary Hit Points]]\
      \ required to maintain the spell)\n\n1/day each: [[/03_Mechanics/CLI/spells/commune-xphb|Commune]],\
      \ [[/03_Mechanics/CLI/spells/raise-dead-xphb|Raise Dead]]"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The deva casts [[/03_Mechanics/CLI/spells/cure-wounds-xphb|Cure Wounds]],\
      \ [[/03_Mechanics/CLI/spells/lesser-restoration-xphb|Lesser Restoration]],\
      \ or [[/03_Mechanics/CLI/spells/remove-curse-xphb|Remove Curse]], using the\
      \ same spellcasting ability as Spellcasting.\n"
    "name": "Divine Aid (2/Day)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/celestial/token/deva-xmm.webp"
```
^statblock

## Environment

planar, upper

## Player-Facing Summary

Deva xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of deva xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around deva xmm.

## Adventure Hooks

- A rumor ties deva xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at deva xmm to avert a public scandal.
- A map overlay reveals a hidden approach to deva xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
