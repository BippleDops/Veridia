---
updated: '2025-08-13T01:18:32.843625+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: '#^statblock'
aliases:
- Mummy
world: Both
status: active
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-mummy-xmm-mummy-xmm.svg)

# [Mummy](3-Mechanics\CLI\bestiary\undead/mummy-xmm.md)
*Source: Monster Manual (2024) p. 219. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Common mummies are the remains of priests, nobles, or champions of faith that underwent magical burial rites. Some are preserved through processes using linen wrappings or clay, but others are preserved by peat bogs, ice, magic, or other means.

Roll on or choose a result from the Mummy Resurrections table to determine why a mummy has returned from the dead.

**Mummy Resurrections**

`dice: [](mummy-xmm.md#^mummy-resurrections)`

| dice: 1d8 | The Mummy Reanimates To... |
|-----------|----------------------------|
| 1 | Defend a holy site it was created to protect. |
| 2 | Obey the summons of a mummy lord. |
| 3 | Oppose an enemy who has returned to life. |
| 4 | Protect its descendants from an ancient threat. |
| 5 | Punish the progeny of those who cursed it. |
| 6 | Reclaim treasures robbed from its crypt. |
| 7 | Serve whoever speaks the prayer on its tomb. |
| 8 | Slay anyone who sets eyes on it. |
^mummy-resurrections

> [!quote]  
> 
> Rule 7: Before opening a sarcophagus, light a torch.

## Mummies

*Deathless Ancients with Ageless Ambitions*

- **Habitat.** Desert, Swamp  
- **Treasure.** Relics  

Mysterious rites and mighty faith can tie spirits to their corpses, binding them to their remains for all time. Should their resting places be violated, these beings, known as mummies, reanimate their deteriorating bodies to restore the sanctity of their tombs and punish those who disturbed their rest.

Mummies pursue those who offend them, typically mortals who desecrate their resting places, steal their burial treasures, or defile sites tied to their faith. With undying rage, these ancient corpses go to extreme lengths to avenge themselves and restore what they need to find peace.

A mummy might look frail, but its body possesses supernatural strength, and its gaze can strike fear in the bravest hearts. Those who escape a mummy's grasp might find themselves subject to a terrible curse. Victims of a mummy's curse gradually wither, their bodies rotting away until they're reduced to dust. This curse can be healed only by the [Remove Curse](/03_Mechanics/CLI/spells/remove-curse-xphb.md) spell or similar magic.

```statblock
"name": "Mummy (XMM)"
"size": "Small or Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "11"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "-1"
"stats":
  - !!int "16"
  - !!int "8"
  - !!int "15"
  - !!int "6"
  - !!int "12"
  - !!int "12"
"speed": "20 ft."
"saves":
  - "wisdom": !!int "3"
"damage_vulnerabilities": "fire"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [exhaustion](/03_Mechanics/CLI/conditions.md#Exhaustion),\
  \ [frightened](/03_Mechanics/CLI/conditions.md#Frightened), [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed),\
  \ [poisoned](/03_Mechanics/CLI/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common plus two other languages"
"cr": "3"
"actions":
  - "desc": "The mummy makes two Rotting Fist attacks and uses Dreadful Glare."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 8 (1d10 + 3) Bludgeoning\
      \ damage plus 10 (3d6) Necrotic damage. If the target is a creature, it is cursed.\
      \ While cursed, the target can't regain [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md),\
      \ its [Hit Point](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md) maximum\
      \ doesn't return to normal when finishing a [Long Rest](/03_Mechanics/CLI/variant-rules/long-rest-xphb.md),\
      \ and its [Hit Point](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md) maximum\
      \ decreases by 10 (3d6) every 24 hours that elapse. A creature dies and turns\
      \ to dust if reduced to 0 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ by this attack."
    "name": "Rotting Fist"
  - "desc": "Wisdom Saving Throw: DC 11, one creature the mummy can see within 60\
      \ feet. Failure: The target has the [Frightened](/03_Mechanics/CLI/conditions.md#Frightened)\
      \ condition until the end of the mummy's next turn. Success: The target is\
      \ immune to this mummy's Dreadful Glare for 24 hours."
    "name": "Dreadful Glare"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/mummy-xmm.webp"
```
^statblock

## Environment

desert, swamp

## Player-Facing Summary

Mummy xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of mummy xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around mummy xmm.

## Adventure Hooks

- A rumor ties mummy xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at mummy xmm to avert a public scandal.
- A map overlay reveals a hidden approach to mummy xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
