---
aliases:
- Balhannoth
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
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
- world/both
type: monster
updated: '2025-08-13T12:34:19.763002+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-balhannoth-mpmm-balhannoth-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\aberration/balhannoth-mpmm|Balhannoth]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 55, Mordenkainen's Tome of Foes p. 119*  

Native to the Shadowfell, the vicious, predatory balhannoth alters reality in its lair to make the place appear inviting to travelers. A limited form of telepathy enables a balhannoth to identify images of places where its prey expects their needs and desires to be met, such as an inn or a temple offering healing. It then warps reality around itself, hiding itself and remaking its environment to resemble such a place. The imitation is imperfect, but it's good enough to fool greedy or desperate creatures. Once its prey enters the trap, it snatches the targets and teleports away to feed on their fear and despair.

Dungeon builders and Underdark tyrants sometimes venture into the Shadowfell to capture balhannoths for use as guardians.

## A Balhannoth's Lair

In the Shadowfell, balhannoths make their lairs near places inhabited by creatures they hunt. They typically haunt well-traveled roads and paths, snatching people who come along. A balhannoth used as a guardian in the Underdark might lair in caves near Underdark passages and guard the ways in and out of its keepers' enclave.

```statblock
"name": "Balhannoth (MPMM)"
"size": "Large"
"type": "aberration"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"modifier": !!int "-1"
"stats":
  - !!int "17"
  - !!int "8"
  - !!int "18"
  - !!int "6"
  - !!int "15"
  - !!int "8"
"speed": "25 ft., climb 25 ft."
"saves":
  - "constitution": !!int "8"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+6"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Blinded|blinded]]"
"senses": "blindsight 500 ft. (blind beyond this radius), passive Perception 16"
"languages": "understands Deep Speech, telepathy 1 mile"
"cr": "11"
"traits":
  - "desc": "If the balhannoth fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (2/Day)"
"actions":
  - "desc": "The balhannoth makes one Bite attack and two Tentacle attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 19\
      \ (3d10 + 3) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 10\
      \ (2d6 + 3) bludgeoning damage, and the target is [[/03_Mechanics/CLI/conditions#Grappled|grappled]]\
      \ (escape DC 15) and is moved up to 5 feet toward the balhannoth. Until this\
      \ grapple ends, the target is [[/03_Mechanics/CLI/conditions#Restrained|restrained]],\
      \ and the balhannoth can't use this tentacle against other targets. The balhannoth\
      \ has four tentacles."
    "name": "Tentacle"
"legendary_actions":
  - "desc": "The balhannoth makes one Bite attack against one creature it has [[/03_Mechanics/CLI/conditions#Grappled|grappled]]."
    "name": "Bite"
  - "desc": "The balhannoth teleports, along with any equipment it is wearing or carrying\
      \ and any creatures it has [[/03_Mechanics/CLI/conditions#Grappled|grappled]],\
      \ up to 60 feet to an unoccupied space it can see."
    "name": "Teleport"
  - "desc": "The balhannoth magically becomes [[/03_Mechanics/CLI/conditions#Invisible|invisible]]\
      \ for up to 10 minutes or until immediately after it makes an attack roll."
    "name": "Vanish"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/balhannoth-mpmm.webp"
```
^statblock

## Environment

coastal, mountain, underdark

## Player-Facing Summary

Balhannoth mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of balhannoth mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around balhannoth mpmm.

## Adventure Hooks

- A rumor ties balhannoth mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at balhannoth mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to balhannoth mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
