---
aliases:
- Gibbering Mouther
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
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
- world/both
type: monster
updated: '2025-08-12T23:37:35.315677'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-gibbering-mouther-xmm-gibbering-mouther-xmm.svg)

# [Gibbering Mouther](3-Mechanics\CLI\bestiary\aberration/gibbering-mouther-xmm.md)
*Source: Monster Manual (2024) p. 133. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Gibbering Mouther

*Ravenous Chorus of Unreality*

- **Habitat.** Underdark  
- **Treasure.** None  

Gibbering mouthers endlessly feed on and regrow their own amoeboid bodies—amorphous heaps roiling with eyes, teeth, and strange organs. These mind-bending terrors sing and scream, laugh and cry with a cacophony of voices ranging from disturbingly unnatural to shockingly familiar. They exist only to feed and to unleash their disdain for reality, their many maws dripping with otherworldly spittle.

Gibbering mouthers come into being in various unpleasant ways. Roll on or choose a result from the Gibbering Mouther Nascencies table to inspire what brought one of these horrors into being.

**Gibbering Mouther Nascencies**

`dice: [](gibbering-mouther-xmm.md#^gibbering-mouther-nascencies)`

| dice: 1d6 | The Gibbering Mouther Is... |
|-----------|-----------------------------|
| 1 | Another creature warped by dangerous magic. |
| 2 | The autonomous appendage of a chaotic deity, Far Realm entity, or star-spawn horror. |
| 3 | The experiment of an aberrant manipulator. |
| 4 | Part of the life cycle of some other Aberration. |
| 5 | A shape-shifter that lost control of its powers. |
| 6 | Someone cursed by a cult or vengeful deity. |
^gibbering-mouther-nascencies

> [!quote]  
> 
> Alas, the Elder Elves made a fatal mistake. When the Dragon's Tear comet next returned, the Vast Gate—still keyed to the Far Realm of alien entities—linked to the comet and opened again. And what emerged, ululating profanities, sang unnameable hungers into an unguarded world.


```statblock
"name": "Gibbering Mouther (XMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Neutral"
"ac": !!int "9"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"modifier": !!int "-1"
"stats":
  - !!int "10"
  - !!int "8"
  - !!int "16"
  - !!int "3"
  - !!int "10"
  - !!int "6"
"speed": "20 ft., swim 20 ft."
"condition_immunities": "[prone](/03_Mechanics/CLI/conditions.md#Prone)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The ground in a 10-foot [Emanation](/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the mouther is [Difficult Terrain](/03_Mechanics/CLI/variant-rules/difficult-terrain-xphb.md)."
    "name": "Aberrant Ground"
  - "desc": "The mouther babbles incoherently while it doesn't have the [Incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated)\
      \ condition. Wisdom Saving Throw: DC 10, any creature that starts its turn\
      \ within 20 feet of the mouther while it is babbling. Failure: The target\
      \ rolls d8 to determine what it does during the current turn:\n\n- 1-4.\
      \ The target does nothing.  \n- 5-6. The target takes no action or [Bonus\
      \ Action](/03_Mechanics/CLI/variant-rules/bonus-action-xphb.md) and uses all\
      \ its movement to move in a random direction.  \n- 7-8. The target makes\
      \ a melee attack against a randomly determined creature within its reach or\
      \ does nothing if it can't make such an attack.  "
    "name": "Gibbering"
"actions":
  - "desc": "Melee Attack Roll: +2, reach 5 ft. Hit: 7 (2d6) Piercing damage.\
      \ If the target is a Medium or smaller creature, it has the [Prone](/03_Mechanics/CLI/conditions.md#Prone)\
      \ condition. The target dies if it is reduced to 0 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ by this attack. Its body is then absorbed into the mouther, leaving only equipment\
      \ behind."
    "name": "Bite"
  - "desc": "Dexterity Saving Throw: DC 10, each creature in a 10-foot-radius [Sphere](/03_Mechanics/CLI/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point within 30 feet. Failure: 7 (2d6) Radiant damage, and\
      \ the target has the [Blinded](/03_Mechanics/CLI/conditions.md#Blinded) condition\
      \ until the end of the mouther's next turn."
    "name": "Blinding Spittle (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/gibbering-mouther-xmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Gibbering mouther xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of gibbering mouther xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around gibbering mouther xmm.

## Adventure Hooks

- A rumor ties gibbering mouther xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at gibbering mouther xmm to avert a public scandal.
- A map overlay reveals a hidden approach to gibbering mouther xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
