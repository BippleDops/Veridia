---
updated: '2025-08-13T01:18:32.589181+00:00'
created: 2025-08-11
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
- active
- both
- monster
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: '#^statblock'
aliases:
- Meenlock
world: Both
status: active
---

# [Meenlock](3-Mechanics\CLI\bestiary\fey/meenlock-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 178, Volo's Guide to Monsters p. 170*  

Meenlocks are Fey that invoke terror and seek to destroy all that is good, innocent, and beautiful. These bipeds have the heads and claws of crustaceans, and they primarily live in forests, although they adapt well to urban and subterranean settings.

Meenlocks are spawned by fear. When terror overwhelms a creature in the Feywild or another location where the Feywild's influence is strong, one or more meenlocks might spontaneously arise in the shadows or darkness nearby. If more than one meenlock is born, a lair also magically forms. The earth creaks and moans as narrow, twisting tunnels open up within it. One of these passageways serves as the lair's only entrance, and a large central chamber serves as the meenlocks' den. Inside the warren, black moss covers every surface, muffling sound.

A meenlock can supernaturally sense areas of darkness and shadow in its vicinity and can teleport from one darkened space to another—enabling it to sneak up on its prey or run away when outmatched. Meenlocks also project a supernatural aura that instills terror in those nearby.

## Telepathic Torment

Up to four meenlocks can telepathically torment one [incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated) creature, filling its mind with disturbing sounds and dreadful imagery. Participating meenlocks can't use their telepathy for any other purpose during this time, though they can move about and take actions and reactions as normal. This torment has no effect on a creature that is immune to the [frightened](/03_Mechanics/CLI/conditions.md#Frightened) condition. If the creature is susceptible and remains [incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated) for 1 hour, the creature must make a Wisdom saving throw, taking 10 (`3d6`) psychic damage on a failed save, or half as much damage on a successful one. The save DC is 10 + the number of meenlocks participating in the torment, considering only those that remain within sight of the victim for the entire hour and aren't [incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated) during it. The process can be repeated. A Humanoid that drops to 0 hit points as a result of this damage instantly transforms into a meenlock at full health and under the DM's control. Only a [wish](/03_Mechanics/CLI/spells/wish-xphb.md) spell or divine intervention can restore a transformed creature to its former state.

```statblock
"name": "Meenlock (MPMM)"
"size": "Small"
"type": "fey"
"alignment": "Typically  Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "31"
"hit_dice": "7d6 + 7"
"modifier": !!int "2"
"stats":
  - !!int "7"
  - !!int "15"
  - !!int "12"
  - !!int "11"
  - !!int "10"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/03_Mechanics/CLI/skills.md#Stealth)"
    "desc": "+6"
  - "name": "[Survival](/03_Mechanics/CLI/skills.md#Survival)"
    "desc": "+2"
"condition_immunities": "[frightened](/03_Mechanics/CLI/conditions.md#Frightened)"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "telepathy 120 ft."
"cr": "2"
"traits":
  - "desc": "Any Beast or Humanoid that starts its turn within 10 feet of the meenlock\
      \ must succeed on a DC 11 Wisdom saving throw or be [frightened](/03_Mechanics/CLI/conditions.md#Frightened)\
      \ until the start of the creature's next turn."
    "name": "Fear Aura"
  - "desc": "While in bright light, the meenlock has disadvantage on attack rolls,\
      \ as well as on Wisdom ([Perception](/03_Mechanics/CLI/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Light Sensitivity"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
      \ + 2) slashing damage, and the target must succeed on a DC 11 Constitution\
      \ saving throw or be [paralyzed](/03_Mechanics/CLI/conditions.md#Paralyzed) for\
      \ 1 minute. The target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Claw"
"bonus_actions":
  - "desc": "The meenlock teleports to an unoccupied space within 30 feet of it, provided\
      \ that both the space it's teleporting from and its destination are in dim light\
      \ or darkness. The destination need not be within line of sight."
    "name": "Shadow Teleport (Recharge 5-6)"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/fey/token/meenlock-mpmm.webp"
```
^statblock

## Environment

forest, swamp, urban

## Player-Facing Summary

Meenlock mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of meenlock mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around meenlock mpmm.

## Adventure Hooks

- A rumor ties meenlock mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at meenlock mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to meenlock mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
