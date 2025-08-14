---
aliases:
- Star Spawn Larva Mage
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
- world/both
type: monster
updated: '2025-08-12T23:37:35.333118'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-star-spawn-larva-mage-mpmm-star-spawn-larva-mage-mpmm.svg)

# [[star-spawn-larva-mage-mpmm|Star Spawn Larva Mage]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 228, Mordenkainen's Tome of Foes p. 235*  

A larva mage is a nightmarish combination of a mortal body and otherworldly substance. When a powerful cultist of a wormlike entity such as Kyuss or Kezef—usually a warlock or other spellcaster—contacts the comet-borne emissary of an Elder Evil, the emissary can merge with a mortal consciousness to create a larva mage. None of the original cultist's personality survives the transformation; what emerges is wholly alien.

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
"name": "Star Spawn Larva Mage (MPMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "168"
"hit_dice": "16d8 + 96"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "23"
  - !!int "18"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "6"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+6"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "psychic"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Frightened|frightened]],\
  \ [[conditions#Paralyzed|paralyzed]], [[conditions#Petrified|petrified]],\
  \ [[conditions#Poisoned|poisoned]], [[conditions#Restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Deep Speech"
"cr": "16"
"traits":
  - "desc": "When the mage is reduced to 0 hit points, it breaks apart into a [[swarm-of-insects-xmm|swarm\
      \ of insects]] in the\
      \ same space. Unless the swarm is destroyed, the mage reforms from it 24 hours\
      \ later."
    "name": "Return to Worms"
"actions":
  - "desc": "The mage makes three Slam or Eldritch Bolt attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 7\
      \ (1d8 + 3) bludgeoning damage, and the target must succeed on a DC 19 Constitution\
      \ saving throw or be [[conditions#Poisoned|poisoned]] until\
      \ the end of its next turn."
    "name": "Slam"
  - "desc": "Ranged Spell Attack: +8 to hit, range 60 ft., one target. Hit: 19\
      \ (3d10 + 3) force damage."
    "name": "Eldritch Bolt"
  - "desc": "Each creature other than a star spawn within 10 feet of the mage must\
      \ succeed on a DC 19 Dexterity saving throw or take 22 (5d8) necrotic damage\
      \ and be [[conditions#Blinded|blinded]] and [[conditions#Restrained|restrained]]\
      \ by masses of swarming worms. The affected creature takes 22 (5d8) necrotic\
      \ damage at the start of each of the mage's turns. The creature can repeat the\
      \ saving throw at the end of each of its turns, ending the effect on itself\
      \ on a success."
    "name": "Plague of Worms (Recharge 6)"
  - "desc": "The mage casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 16):\n\nAt\
      \ will: [[mage-hand-xphb|mage hand]], [[message-xphb|message]],\
      \ [[minor-illusion-xphb|minor illusion]]\n\n1/day:\
      \ [[dominate-monster-xphb|dominate monster]]"
    "name": "Spellcasting"
"reactions":
  - "desc": "When a creature within 20 feet of the mage fails a saving throw, the\
      \ mage gains 10 temporary hit points."
    "name": "Feed on Weakness"
"legendary_actions":
  - "desc": "The mage makes one Slam attack."
    "name": "Slam"
  - "desc": "The mage makes one Eldritch Bolt attack."
    "name": "Eldritch Bolt (Costs 2 Actions)"
  - "desc": "Each creature [[conditions#Restrained|restrained]]\
      \ by the mage's Plague of Worms takes 13 (3d8) necrotic damage, and the mage\
      \ gains 6 temporary hit points."
    "name": "Feed (Costs 3 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/star-spawn-larva-mage-mpmm.webp"
```
^statblock

## Environment

mountain

## Player-Facing Summary

Star spawn larva mage mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of star spawn larva mage mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around star spawn larva mage mpmm.

## Adventure Hooks

- A rumor ties star spawn larva mage mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at star spawn larva mage mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to star spawn larva mage mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
