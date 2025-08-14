# Star Spawn Seer Mpmm

---
title: Star Spawn Seer Mpmm
aliases:
- Star Spawn Seer
type: monster
tags:
- ttrpg-cli/monster/size/medium
- both
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/cr/13
- monster
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/type/aberration
- ttrpg-cli/compendium/src/5e/mpmm
- world/both
- research
- ttrpg-cli/monster/environment/swamp
- active
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-13T12:34:05.627286+00:00'
world: Both
---




> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-star-spawn-seer-mpmm-star-spawn-seer-mpmm.svg)

# [[star-spawn-seer-mpmm|Star Spawn Seer]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 230, Mordenkainen's Tome of Foes p. 236*  

A star spawn seer is most often encountered as the leader of a cult dedicated to one or more Elder Evils. Usually, the seer is the only cult member that grasps the full extent of the horror the cult is venerating. The seer's goal is to tap into vast energy sources and perform the dire rites that will extend a bridge between the Material Plane and the squirming chaos of an Elder Evil's realm.

An entity that appears as a star spawn seer in the Material Plane usually arrives disembodied. When a warlock or other spellcaster establishes communication with it, the seer-entity takes control of the mortal, transforming it into a star spawn seer. Whoever the mortal once was largely vanishes beneath the mass of tumorous skin than builds up in strange whorls all over the seer's body. The mortal's hands become bulky, flipper-like appendages able to grasp the seer's strange staff formed of a blend of flesh, bone, and star stuff.

A star spawn seer is almost always accompanied by one or more star spawn hulks (also in this book). Not only is a hulk a powerful combatant, but when a seer deals psychic damage to a hulk, the hulk isn't hurt, and the effect ricochets off and expands to assault other creatures.

## Star Spawn

> [!quote] A quote from Mordenkainen  
> 
> Stars don't spawn these creatures.
> 
> Such beautiful lights shouldn't be blamed for such balefulness.

The Material Plane represents only one small part of the multiverse. Beyond the best-known planes of existence lie realms alien to mortal life. Some are so hostile that even a moment's contact is enough to break a mortal's mind. Yet beings do exist that are native to these realms: entities that are ever hungering, searching, warring, and sometimes dreaming. These Elder Evils are far older than most of the mortal peoples and always inimical to such creatures' minds.

However much they might desire to enter and dominate the Material Plane, the Elder Evils are unable or unwilling to leave their realms. Some are imprisoned in their dimensions by external forces, some are inextricably bound to their home realities, and others simply can't find any way out.

The creatures known as star spawn are the heralds, servants, and soldiers of the Elder Evils, capable of taking on forms that can journey to the Material Plane. They arrive most often in the wake of a comet—or perhaps this phenomenon merely signals that star spawn are in the vicinity and available for communication. When the signs are right, cultists gather together, read aloud their blasphemous texts, and conduct the mind-searing rituals that guide star spawn into the world.

### Elder Evil Blessings

Disciples of certain Elder Evils can bestow supernatural gifts on those who serve that cult, including star spawn. The following powers are unique to specific cults; typically a creature has only one.

- Cult of Atropus, the World Born Dead  
- Cult of Borem, of the Lake of Boiling Mud  
- Cult of Haask, the Voice of Hargut  
- Cult of Tharizdun, the Chained God  
- Cult of Tyranthraxus, the Flamed One  

```statblock
"name": "Star Spawn Seer (MPMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "12"
  - !!int "18"
  - !!int "22"
  - !!int "19"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "intelligence": !!int "11"
  - "wisdom": !!int "9"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+9"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "psychic"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Frightened|frightened]]"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "Common, Deep Speech, Undercommon"
"cr": "13"
"traits":
  - "desc": "The seer can move through other creatures and objects as if they were\
      \ difficult terrain, and its movement doesn't provoke [[actions#Opportunity%20Attack|opportunity attacks]].\n\
      \nEach creature it moves through takes 5 (d10) psychic damage; no creature can\
      \ take this damage more than once per turn.\n\nThe seer takes 5 (d10) force\
      \ damage if it ends its turn inside an object."
    "name": "Out-Of-Phase Movement"
"actions":
  - "desc": "The seer makes two Comet Staff or Psychic Orb attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 10\
      \ (1d8 + 6) bludgeoning damage plus 18 (4d8) psychic damage, and if the target\
      \ is a creature, it must succeed on a DC 19 Constitution saving throw or be\
      \ [[conditions#Incapacitated|incapacitated]] until the end\
      \ of its next turn."
    "name": "Comet Staff"
  - "desc": "Ranged Spell Attack: +11 to hit, range 120 feet, one creature. Hit:\
      \ 27 (5d10) psychic damage."
    "name": "Psychic Orb"
  - "desc": "The seer warps space around one creature it can see within 30 feet of\
      \ it. That creature must make a DC 19 Wisdom saving throw. On a failed save,\
      \ the target, along with any equipment it is wearing or carrying, is teleported\
      \ up to 60 feet to an unoccupied space the seer can see, and then each creature\
      \ within 10 feet of the target's original space takes 39 (6d12) psychic damage.\
      \ On a successful save, the target takes 19 (3d12) psychic damage and isn't\
      \ teleported."
    "name": "Collapse Distance (Recharge 6)"
"reactions":
  - "desc": "When the seer would be hit by an attack roll, it teleports, along with\
      \ any equipment it is wearing or carrying, exchanging positions with another\
      \ star spawn it can see within 60 feet of it. The other star spawn is hit by\
      \ the attack instead."
    "name": "Bend Space"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/star-spawn-seer-mpmm.webp"
```
^statblock

## Environment

mountain, swamp, urban

## Player-Facing Summary

Star spawn seer mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of star spawn seer mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around star spawn seer mpmm.

## Adventure Hooks

- A rumor ties star spawn seer mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at star spawn seer mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to star spawn seer mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->


## Related

*Links to related content will be added here.*
