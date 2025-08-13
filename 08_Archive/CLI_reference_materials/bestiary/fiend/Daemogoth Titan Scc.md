---
aliases:
- Daemogoth Titan
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/scc
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/fiend
- world/both
type: monster
updated: '2025-08-12T23:37:35.530149'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-daemogoth-titan-scc-daemogoth-titan-scc.svg)

# [Daemogoth Titan](3-Mechanics\CLI\bestiary\fiend/daemogoth-titan-scc.md)
*Source: Strixhaven: A Curriculum of Chaos p. 190*  

Daemogoth titans are towering monsters that blight the land around them. A daemogoth grows in power over the course of decades spent feeding on sorrow and draining life from nature. Eventually that growth turns the daemogoth into a titan.

The titans maintain their lesser cousins' ability to trade magical power for a mortal's pain, but they tend to demand more punishing suffering in exchange for their pacts or knowledge.

## Barbed Gifts

When a supplicant piques a daemogoth titan's interest, the titan can grant a blessing to the supplicant (see "Supernatural Gifts "in the Dungeon Master's Guide). As long as the creature has the blessing, it must expend and roll two of its Hit Dice whenever it finishes a long rest. It takes psychic damage equal to the total rolled, and its hit point maximum is reduced by an amount equal to the psychic damage taken. This reduction lasts until the creature finishes its next long rest. The creature dies if this effect reduces its hit point maximum to 0. The blessing can be removed only by a [wish](/03_Mechanics/CLI/spells/wish-xphb.md) spell.

```statblock
"name": "Daemogoth Titan (SCC)"
"size": "Gargantuan"
"type": "fiend"
"alignment": "typically  Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "203"
"hit_dice": "11d20 + 88"
"modifier": !!int "0"
"stats":
  - !!int "26"
  - !!int "10"
  - !!int "26"
  - !!int "24"
  - !!int "18"
  - !!int "20"
"speed": "40 ft."
"saves":
  - "intelligence": !!int "12"
  - "wisdom": !!int "9"
  - "charisma": !!int "10"
"skillsaves":
  - "name": "[Arcana](/03_Mechanics/CLI/skills.md#Arcana)"
    "desc": "+17"
  - "name": "[Deception](/03_Mechanics/CLI/skills.md#Deception)"
    "desc": "+15"
  - "name": "[History](/03_Mechanics/CLI/skills.md#History)"
    "desc": "+12"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+9"
"damage_immunities": "psychic"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [frightened](/03_Mechanics/CLI/conditions.md#Frightened)"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Abyssal, Infernal, telepathy 120 ft."
"cr": "16"
"traits":
  - "desc": "If the titan fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Using a 10-minute long ritual, the titan can forge a magical bond with\
      \ a willing creature it touches throughout the ritual. The creature becomes\
      \ bound by the pact until it dies, the titan dies, or the pact is broken by\
      \ a [wish](/03_Mechanics/CLI/spells/wish-xphb.md) spell.\n\nThe titan chooses\
      \ one spell from the necromancy or enchantment school that is 8th level or lower.\
      \ The bound creature can cast that spell using this pact, requiring no material\
      \ components and using Intelligence as the spellcasting ability. When it casts\
      \ the spell, the creature takes 21 (6d6) psychic damage, which can't break the\
      \ creature's [concentration](/03_Mechanics/CLI/conditions.md#Concentration) on\
      \ a spell. Once the bound creature casts the spell in this way, it can't do\
      \ so again until it finishes a long rest."
    "name": "Pact of Suffering"
"actions":
  - "desc": "The titan makes two Agonizing Burst attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Spell Attack: +12 to hit, reach 15 ft. or range 120\
      \ ft., one target. Hit: 17 (3d6 + 7) force damage. If the target is a creature,\
      \ the titan regains 5 hit points."
    "name": "Agonizing Burst"
  - "desc": "The titan teleports to an unoccupied space it can see within 120 feet\
      \ of itself."
    "name": "Teleport"
"legendary_actions":
  - "desc": "The titan makes one Agonizing Burst attack."
    "name": "Attack"
  - "desc": "The titan uses Teleport, after which it can target one creature within\
      \ 20 feet of itself that it can see. The target must make a DC 20 Constitution\
      \ saving throw. On a failed save, the target takes 22 (4d10) necrotic damage,\
      \ and the titan regains 10 hit points. On a successful save, the target takes\
      \ half as much damage, and the titan doesn't heal."
    "name": "Stalking Nightmare (Costs 2 Actions)"
  - "desc": "The titan targets one creature it can see within 120 feet of itself.\
      \ The target must make a DC 20 Wisdom saving throw. On a failed save, the target\
      \ takes 38 (7d10) psychic damage and is [frightened](/03_Mechanics/CLI/conditions.md#Frightened)\
      \ of the titan until the end of the target's next turn, and the titan regains\
      \ 15 hit points. On a successful save, the target takes half as much damage\
      \ and isn't [frightened](/03_Mechanics/CLI/conditions.md#Frightened), and the\
      \ titan doesn't heal."
    "name": "Terrorize (Costs 3 Actions)"
"source":
  - "SCC"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/daemogoth-titan-scc.webp"
```
^statblock

## Player-Facing Summary

Daemogoth titan scc is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of daemogoth titan scc as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around daemogoth titan scc.

## Adventure Hooks

- A rumor ties daemogoth titan scc to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at daemogoth titan scc to avert a public scandal.
- A map overlay reveals a hidden approach to daemogoth titan scc active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
