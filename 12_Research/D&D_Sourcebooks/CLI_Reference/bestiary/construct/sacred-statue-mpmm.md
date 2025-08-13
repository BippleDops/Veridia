---
aliases:
- Sacred Statue
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
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
- world/both
type: monster
updated: '2025-08-12T23:37:35.849057'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-sacred-statue-mpmm-sacred-statue-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\construct/sacred-statue-mpmm|Sacred Statue]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 114, Mordenkainen's Tome of Foes p. 194*  

To protect sites they deem holy, gods often rely on eidolons, ghostly spirits bound to safeguard a sacred place. Forged from the souls of those with unwavering devotion, eidolons stalk temples and vaults to ensure that no enemy defiles, damages, or plunders these sites. If an enemy sets foot inside a warded location, the [[/03_Mechanics/CLI/bestiary/undead/eidolon-mpmm|eidolon]] plunges into a [[/03_Mechanics/CLI/bestiary/construct/sacred-statue-mpmm|statue]] specially prepared to house its soul; it then animates this effigy and uses the statue to drive out the intruders.

```statblock
"name": "Sacred Statue (MPMM)"
"size": "Large"
"type": "construct"
"alignment": "as the eidolon's alignment"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"modifier": !!int "-1"
"stats":
  - !!int "19"
  - !!int "8"
  - !!int "19"
  - !!int "14"
  - !!int "19"
  - !!int "16"
"speed": "25 ft."
"saves":
  - "wisdom": !!int "8"
"damage_resistances": "acid; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[[/03_Mechanics/CLI/conditions#Charmed|charmed]], [[/03_Mechanics/CLI/conditions#Exhaustion|exhaustion]],\
  \ [[/03_Mechanics/CLI/conditions#Frightened|frightened]], [[/03_Mechanics/CLI/conditions#Paralyzed|paralyzed]],\
  \ [[/03_Mechanics/CLI/conditions#Petrified|petrified]], [[/03_Mechanics/CLI/conditions#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages the [[/03_Mechanics/CLI/bestiary/undead/eidolon-mpmm|eidolon]]\
  \ knew in life"
"traits":
  - "desc": "If the statue is motionless at the start of combat, it has advantage\
      \ on its initiative roll. Moreover, if a creature hasn't observed the statue\
      \ move or act, that creature must succeed on a DC 18 Intelligence ([[/03_Mechanics/CLI/skills#Investigation|Investigation]])\
      \ check to discern that the statue isn't an object."
    "name": "False Appearance"
  - "desc": "The [[/03_Mechanics/CLI/bestiary/undead/eidolon-mpmm|eidolon]] that\
      \ enters the statue remains inside it until the statue drops to 0 hit points,\
      \ the eidolon uses a bonus action to move out of the statue, or the eidolon\
      \ is turned or forced out by an effect such as the [[/03_Mechanics/CLI/spells/dispel-evil-and-good-xphb|dispel evil and good]]\
      \ spell. When the eidolon leaves the statue, it appears in an unoccupied space\
      \ within 5 feet of the statue."
    "name": "Ghostly Inhabitant"
  - "desc": "Without an [[/03_Mechanics/CLI/bestiary/undead/eidolon-mpmm|eidolon]]\
      \ inside, the statue is an object."
    "name": "Inert"
  - "desc": "The statue doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The statue makes two Slam or Rock attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 43\
      \ (6d12 + 4) bludgeoning damage."
    "name": "Slam"
  - "desc": "Ranged Weapon Attack: +8 to hit, range 60 ft./240 ft., one target.\
      \ Hit: 37 (6d10 + 4) bludgeoning damage."
    "name": "Rock"
"source":
  - "MPMM"
  - "MTF"
"image": "/03_Mechanics/CLI/bestiary/construct/token/sacred-statue-mpmm.webp"
```
^statblock

## Player-Facing Summary

Sacred statue mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of sacred statue mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around sacred statue mpmm.

## Adventure Hooks

- A rumor ties sacred statue mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at sacred statue mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to sacred statue mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
