---
aliases:
- Moonblade
- Moonblade Greatsword
- Moonblade Longsword
- Moonblade Rapier
- Moonblade Scimitar
- Moonblade Shortsword
attunement: false
created: 2025-07-23
cssclasses: json5e-item
modified: 2025-07-23 12:39
obsidian-u-i-mode: preview
status: active
tags:
- active
- both
- content/item
- content/lore
- note
- status/in-progress
- ttrpg-cli/compendium/src/5e/xdmg
- world/both
type: note
updated: '2025-08-13T12:34:07.967170+00:00'
world: Both
---


# Moonblade
*Legendary (requires attunement by a creature of the weapon's choice)*  
![](/03_Mechanics/CLI/items/img/moonblade.webp#right)


Of all the magic items created by elves, one of the most prized and jealously guarded is a Moonblade. In ancient times, nearly all elven noble houses claimed one such weapon. Over the centuries, some of these weapons have faded from the world, their magic lost as family lines have become extinct. Others have vanished with their bearers during great quests. Thus, only a few of these weapons remain.

Every Moonblade longs for a bearer whose disposition and goals are compatible with its own. If you try to attune to a Moonblade that doesn't want you as its bearer, the weapon not only rejects you but also places a curse on you, causing you to make [[/03_Mechanics/CLI/variant-rules/d20-test-xphb|D20 Tests]] with [[/03_Mechanics/CLI/variant-rules/disadvantage-xphb|Disadvantage]] for 24 hours or until the curse is ended by a [[/03_Mechanics/CLI/spells/remove-curse-xphb|Remove Curse]] spell or similar magic. If you're accepted by the weapon and try to attune to it, you become attuned to it instantly, and a new rune appears on it. You remain attuned to the weapon until you die or the weapon is destroyed. A Moonblade functions like a nonmagical weapon of its kind for anyone other than its chosen bearer.

A Moonblade has one rune on it for each bearer it has willingly served (typically `1d6 + 1`). The first rune grants a +1 bonus to attack rolls and damage rolls made with this magic weapon. Each rune beyond the first grants the Moonblade an additional property. The DM chooses each property or determines it randomly by rolling on the Moonblade Properties table.

## Minor Property

In addition to its aforementioned properties, each Moonblade has a minor property determined by rolling on the [[/03_Mechanics/CLI/actions#Magic|Magic]] Item's Minor Property table.

## Sentience

A Moonblade is a sentient weapon with an Intelligence of 12, a Wisdom of 10, and a Charisma of 12. It has hearing and [[/03_Mechanics/CLI/senses#Darkvision|Darkvision]] out to 120 feet. Its alignment matches that of its creator.

The weapon communicates by transmitting emotions, sending a tingling sensation through the wielder's hand when it wants to communicate something it has sensed. It can communicate through visions or dreams when the wielder is either in a trance or asleep.

## Personality

A Moonblade has a personality similar to that of its creator. Once a Moonblade has decided on an owner, it believes that only that person should wield it, even if the bearer's alignment differs from that of the weapon's or the bearer's goals later clash with the weapon's goals.

**Moonblade Properties**

`dice: [](moonblade-xdmg.md#^moonblade-properties)`

| dice: 1d100 | Property |
|-------------|----------|
| 01-60 | Increase the weapon's bonus to attack rolls and damage rolls by 1, to a maximum of +3. Reroll if the *Moonblade* already has a +3 bonus. |
| 61-75 | When you hit with an attack roll using the *Moonblade*, you deal an extra `d6` Force damage. Each time the weapon gains this property after the first, the extra damage increases by `d6`, to a maximum of `3d6`. Reroll if the *Moonblade* already deals an extra `3d6` Force damage on a hit. |
| 76-80 | The *Moonblade* gains [[/03_Mechanics/CLI/item-properties#Thrown|Thrown]] with a normal range of 20 feet and a long range of 60 feet. Each time you throw the weapon, it flies back to your hand after the attack. |
| 81-85 | The *Moonblade* scores a [[/03_Mechanics/CLI/variant-rules/critical-hit-xphb|Critical Hit]] on a roll of 19 or 20 on the `d20`. |
| 86-95 | You can take a [[/03_Mechanics/CLI/variant-rules/bonus-action-xphb|Bonus Action]] to cause the *Moonblade* to flash brightly. Each other creature that is within 30 feet of you and not behind [[/03_Mechanics/CLI/variant-rules/cover-xphb|Total Cover]] must succeed on a DC 15 Constitution saving throw or have the [[/03_Mechanics/CLI/conditions#Blinded|Blinded]] condition for 1 minute. A creature repeats the save at the end of each of its turns, ending the effect on itself on a success. You can't use this property again until you finish a [[/03_Mechanics/CLI/variant-rules/short-rest-xphb|Short]] or [[/03_Mechanics/CLI/variant-rules/long-rest-xphb|Long Rest]]. |
| 96-99 | The Moonblade has the properties of a [[/03_Mechanics/CLI/items/ring-of-spell-storing-xdmg|Ring of Spell Storing]]. |
| 100 | You can take a [[/03_Mechanics/CLI/actions#Magic|Magic]] action to conjure a spectral entity that resembles a shadowy elf if you don't already have one serving you. The entity appears in an unoccupied space within 120 feet of you. It uses the [[/03_Mechanics/CLI/bestiary/undead/shadow-xmm|Shadow]] stat block with these changes: it is a Fey, has a Neutral alignment, and doesn't create new shadows. You control this entity, deciding how it acts and moves. It remains until it drops to 0 [[/03_Mechanics/CLI/variant-rules/hit-points-xphb|Hit Points]] or you dismiss it as a [[/03_Mechanics/CLI/actions#Magic|Magic]] action. |
^moonblade-properties

**Variants**:
- [Moonblade Greatsword](#Moonblade%20Greatsword)
- [Moonblade Longsword](#Moonblade%20Longsword)
- [Moonblade Rapier](#Moonblade%20Rapier)
- [Moonblade Scimitar](#Moonblade%20Scimitar)
- [Moonblade Shortsword](#Moonblade%20Shortsword)

### Moonblade Greatsword

- **Damage**: 2d6 slashing
- **Properties**: [[/03_Mechanics/CLI/item-properties#Heavy|Heavy]], [[/03_Mechanics/CLI/item-properties#Two-Handed|Two-Handed]]
- **Weight**: 6.0 lbs.

### Moonblade Longsword

- **Damage**:
  - One-handed: 1d8 slashing
  - Two-handed: 1d10 slashing
- **Properties**: [[/03_Mechanics/CLI/item-properties#Versatile|Versatile]]
- **Weight**: 3.0 lbs.

### Moonblade Rapier

- **Damage**: 1d8 piercing
- **Properties**: [[/03_Mechanics/CLI/item-properties#Finesse|Finesse]]
- **Weight**: 2.0 lbs.

### Moonblade Scimitar

- **Damage**: 1d6 slashing
- **Properties**: [[/03_Mechanics/CLI/item-properties#Finesse|Finesse]], [[/03_Mechanics/CLI/item-properties#Light|Light]]
- **Weight**: 3.0 lbs.

### Moonblade Shortsword

- **Damage**: 1d6 piercing
- **Properties**: [[/03_Mechanics/CLI/item-properties#Finesse|Finesse]], [[/03_Mechanics/CLI/item-properties#Light|Light]]
- **Weight**: 2.0 lbs.


*Source: Dungeon Master's Guide (2024) p. 279*

## Player-Facing Summary

Moonblade xdmg is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of moonblade xdmg as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around moonblade xdmg.

## Adventure Hooks

- A rumor ties moonblade xdmg to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at moonblade xdmg to avert a public scandal.
- A map overlay reveals a hidden approach to moonblade xdmg active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
