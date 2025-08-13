---
aliases:
- Clay Golem
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
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
- world/both
type: monster
updated: '2025-08-12T23:37:35.871388'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-clay-golem-xmm-clay-golem-xmm.svg)

# [[3-Mechanics\CLI\bestiary\construct/clay-golem-xmm|Clay Golem]]
*Source: Monster Manual (2024) p. 72. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Clay Golem

*Guardian of Home and Heart*

- **Habitat.** Urban  
- **Treasure.** Relics  

Clay golems are magical defenders made from earth and clay to protect places or communities. The materials used in creating clay golems originate from near the location the golems protect and often have special significance to their creators, such as clay from a holy site or bricks from a magical ruin. While some clay golems are masterfully sculpted to resemble living beings, others have only vaguely humanlike forms.

These golems obey their creators' orders and protect what their makers value most. Some still follow these orders long after their creators' deaths. Roll on or choose a result from the Clay Golem Orders table to inspire the commands a clay golem follows.

**Clay Golem Orders**

`dice: [](clay-golem-xmm.md#^clay-golem-orders)`

| dice: 1d4 | The Clay Golem Follows Orders To... |
|-----------|-------------------------------------|
| 1 | Block the path of anyone who enters a site with a weapon drawn. |
| 2 | Defend any member of their creator's family or community who is threatened in its sight. |
| 3 | Prevent any Fiend from crossing a bridge. |
| 4 | Remove any who enter its creator's workshop. |
^clay-golem-orders

```statblock
"name": "Clay Golem (XMM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"modifier": !!int "3"
"stats":
  - !!int "20"
  - !!int "9"
  - !!int "18"
  - !!int "3"
  - !!int "8"
  - !!int "1"
"speed": "20 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "acid, poison, psychic"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Frightened|frightened]], [[/03_Mechanics/CLI/conditions#Paralyzed|paralyzed]],\
  \ [[/03_Mechanics/CLI/conditions#Petrified|petrified]], [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common plus one other language"
"cr": "9"
"traits":
  - "desc": "Whenever the golem is subjected to Acid damage, it takes no damage and\
      \ instead regains a number of [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]]\
      \ equal to the Acid damage dealt."
    "name": "Acid Absorption"
  - "desc": "Whenever the golem starts its turn [[/03_Mechanics/CLI/variant-rules/bloodied-xphb|Bloodied]],\
      \ roll d6. On a 6, the golem goes berserk. On each of its turns while berserk,\
      \ the golem attacks the nearest creature it can see. If no creature is near\
      \ enough to move to and attack, the golem attacks an object. Once the golem\
      \ goes berserk, it continues to be berserk until it is destroyed or it is no\
      \ longer [[/03_Mechanics/CLI/variant-rules/bloodied-xphb|Bloodied]]."
    "name": "Berserk"
  - "desc": "The golem can't shape-shift."
    "name": "Immutable Form"
  - "desc": "The golem has [[/03_Mechanics/CLI/variant-rules/advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The golem makes two Slam attacks, or it makes three Slam attacks if it\
      \ used Hasten this turn."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9, reach 5 ft. Hit: 10 (1d10 + 5) Bludgeoning\
      \ damage plus 6 (d12) Acid damage, and the target's [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Point]]\
      \ maximum decreases by an amount equal to the Acid damage taken."
    "name": "Slam"
"bonus_actions":
  - "desc": "The golem takes the Dash and Disengage actions."
    "name": "Hasten (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/construct/token/clay-golem-xmm.webp"
```
^statblock

## Environment

urban

## Player-Facing Summary

Clay golem xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of clay golem xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around clay golem xmm.

## Adventure Hooks

- A rumor ties clay golem xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at clay golem xmm to avert a public scandal.
- A map overlay reveals a hidden approach to clay golem xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
