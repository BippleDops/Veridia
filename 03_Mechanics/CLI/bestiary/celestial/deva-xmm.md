---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/10
  - ttrpg-cli/monster/environment/planar
  - ttrpg-cli/monster/environment/upper
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/celestial/angel
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Deva
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-deva-xmm-deva-xmm.svg)

# [Deva](3-Mechanics\CLI\bestiary\celestial/deva-xmm.md)
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
  - "name": "[Insight](/03_Mechanics/CLI/skills.md#Insight)"
    "desc": "+9"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+9"
"damage_resistances": "radiant"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened)"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all; telepathy 120 ft."
"cr": "10"
"traits":
  - "desc": "If the deva dies outside Mount Celestia, its body disappears, and it\
      \ gains a new body instantly, reviving with all its [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ somewhere in Mount Celestia."
    "name": "Exalted Restoration"
  - "desc": "The deva has [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
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
      \ will: [Detect Evil and Good](/03_Mechanics/CLI/spells/detect-evil-and-good-xphb.md),\
      \ [Shapechange](/03_Mechanics/CLI/spells/shapechange-xphb.md) (Beast or Humanoid\
      \ form only, no [Temporary Hit Points](/03_Mechanics/CLI/variant-rules/temporary-hit-points-xphb.md)\
      \ gained from the spell, and no Concentration or [Temporary Hit Points](/03_Mechanics/CLI/variant-rules/temporary-hit-points-xphb.md)\
      \ required to maintain the spell)\n\n1/day each: [Commune](/03_Mechanics/CLI/spells/commune-xphb.md),\
      \ [Raise Dead](/03_Mechanics/CLI/spells/raise-dead-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The deva casts [Cure Wounds](/03_Mechanics/CLI/spells/cure-wounds-xphb.md),\
      \ [Lesser Restoration](/03_Mechanics/CLI/spells/lesser-restoration-xphb.md),\
      \ or [Remove Curse](/03_Mechanics/CLI/spells/remove-curse-xphb.md), using the\
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
