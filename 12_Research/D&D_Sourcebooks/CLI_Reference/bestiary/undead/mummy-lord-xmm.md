---
aliases:
- Mummy Lord
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
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/undead/cleric
- world/both
type: monster
updated: '2025-08-12T23:37:35.628969'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-mummy-lord-xmm-mummy-lord-xmm.svg)

# [[mummy-lord-xmm|Mummy Lord]]
*Source: Monster Manual (2024) p. 221. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

Those desperate to escape death sometimes make terrible bargains with wicked deities. Devoting their hearts to evil forces, these villains gain power over death and a cursed immortality that binds their minds and spirits within a desiccated corpse. Freed from mortal concerns, these mummy lords pursue their obsessions across ages.

Most mummy lords linger amid the ruins of ancient palaces or temples where they once held sway. Their age-old faith and ties to deathly forces grant them fearful magic, which they use to sow ruin and animate undead servants.

A mummy lord's heart embodies the pact that grants it immortality. Rather than bearing its heart within its corpse, a mummy lord removes and hides this accursed organ. As long as its heart isn't destroyed by fire, a mummy lord can return to unlife no matter what doom it meets.

Mummy lords are usually consumed by ageless plots. Roll on or choose a result from the Mummy Lord Plots table to determine a mummy lord's ancient agenda.

**Mummy Lord Plots**

`dice: [](mummy-lord-xmm.md#^mummy-lord-plots)`

| dice: 1d8 | The Mummy Lord Seeks To... |
|-----------|----------------------------|
| 1 | Open a portal to the past, when its power was at its height. |
| 2 | Perform a ritual that can be attempted only once every eight hundred years. |
| 3 | Reclaim and resurrect a loved one's corpse. |
| 4 | Reconquer the lands that once composed its empire. |
| 5 | Recover the pieces of its lost heart. |
| 6 | Replace its descendant as the ruler of a realm. |
| 7 | Sacrifice a thousand souls to its god in return for true life. |
| 8 | Transform the people of an entire nation into Undead servants. |
^mummy-lord-plots

## Mummy Lord Lairs

Mummy lords typically lurk in the ruins of places they dwelled in life. Such sites have forbidding reputations, or they might be lost and forgotten.

> [!quote] A quote from Isu, High Priest of Muhar  
> 
> The scroll contained a foul ritual to raise one of the children of Anhktepot. I tried to burn it, but the flames refused to touch the parchment. Forgive me, but I cannot destroy it... and I cannot help myself.

## Mummies

*Deathless Ancients with Ageless Ambitions*

- **Habitat.** Desert, Swamp  
- **Treasure.** Relics  

Mysterious rites and mighty faith can tie spirits to their corpses, binding them to their remains for all time. Should their resting places be violated, these beings, known as mummies, reanimate their deteriorating bodies to restore the sanctity of their tombs and punish those who disturbed their rest.

Mummies pursue those who offend them, typically mortals who desecrate their resting places, steal their burial treasures, or defile sites tied to their faith. With undying rage, these ancient corpses go to extreme lengths to avenge themselves and restore what they need to find peace.

A mummy might look frail, but its body possesses supernatural strength, and its gaze can strike fear in the bravest hearts. Those who escape a mummy's grasp might find themselves subject to a terrible curse. Victims of a mummy's curse gradually wither, their bodies rotting away until they're reduced to dust. This curse can be healed only by the [[remove-curse-xphb|Remove Curse]] spell or similar magic.

```statblock
"name": "Mummy Lord (XMM)"
"size": "Small or Medium"
"type": "undead"
"subtype": "cleric"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "187"
"hit_dice": "25d8 + 75"
"modifier": !!int "10"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "17"
  - !!int "11"
  - !!int "19"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "5"
  - "wisdom": !!int "9"
"skillsaves":
  - "name": "[[skills#History|History]]"
    "desc": "+5"
  - "name": "[[skills#Perception|Perception]]"
    "desc": "+9"
  - "name": "[[skills#Religion|Religion]]"
    "desc": "+5"
"damage_vulnerabilities": "fire"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[conditions#Charmed|charmed]], [[conditions#Exhaustion|exhaustion]],\
  \ [[conditions#Frightened|frightened]], [[conditions#Paralyzed|paralyzed]],\
  \ [[conditions#Poisoned|poisoned]]"
"senses": "truesight 60 ft., passive Perception 19"
"languages": "Common plus three other languages"
"cr": "15"
"traits":
  - "desc": "If the mummy fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
  - "desc": "The mummy has [[advantage-xphb|Advantage]]\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "If destroyed, the mummy gains a new body in 24 hours if its heart is\
      \ intact, reviving with all its [[hit-points-xphb|Hit Points]].\
      \ The new body appears in an unoccupied space within the mummy's lair. The heart\
      \ is a Tiny object that has AC 17, HP 10, and [[immunity-xphb|Immunity]]\
      \ to all damage except Fire."
    "name": "Undead Restoration"
"actions":
  - "desc": "The mummy makes one Rotting Fist or Channel Negative Energy attack, and\
      \ it uses Dreadful Glare."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +9, reach 5 ft. Hit: 15 (2d10 + 4) Bludgeoning\
      \ damage plus 10 (3d6) Necrotic damage. If the target is a creature, it is cursed.\
      \ While cursed, the target can't regain [[hit-points-xphb|Hit Points]],\
      \ it gains no benefit from finishing a [[long-rest-xphb|Long Rest]],\
      \ and its [[hit-points-xphb|Hit Point]] maximum\
      \ decreases by 10 (3d6) every 24 hours that elapse. A creature dies and turns\
      \ to dust if reduced to 0 [[hit-points-xphb|Hit Points]]\
      \ by this attack."
    "name": "Rotting Fist"
  - "desc": "Ranged Attack Roll: +9, range 60 ft. Hit: 25 (6d6 + 4) Necrotic damage."
    "name": "Channel Negative Energy"
  - "desc": "Wisdom Saving Throw: DC 17, one creature the mummy can see within 60\
      \ feet. Failure: 25 (6d6 + 4) Psychic damage, and the target has the [[conditions#Paralyzed|Paralyzed]]\
      \ condition until the end of the mummy's next turn."
    "name": "Dreadful Glare"
  - "desc": "The mummy casts one of the following spells, requiring no Material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 17, +9 to hit\
      \ with spell attacks):\n\nAt will: [[dispel-magic-xphb|Dispel Magic]],\
      \ [[thaumaturgy-xphb|Thaumaturgy]]\n\n1/day each:\
      \ [[animate-dead-xphb|Animate Dead]], [[harm-xphb|Harm]],\
      \ [[insect-plague-xphb|Insect Plague]] (level 7 version)"
    "name": "Spellcasting"
"reactions":
  - "desc": "Trigger: The mummy is hit by an attack roll. _Response:_ The mummy adds\
      \ 2 to its AC against the attack, possibly causing the attack to miss, and the\
      \ mummy teleports up to 60 feet to an unoccupied space it can see. Each creature\
      \ of its choice that it can see within 5 feet of its destination space has the\
      \ [[conditions#Blinded|Blinded]] condition until the end\
      \ of the mummy's next turn."
    "name": "Whirlwind of Sand"
"legendary_actions":
  - "desc": "The mummy uses Dreadful Glare. The mummy can't take this action again\
      \ until the start of its next turn."
    "name": "Glare"
  - "desc": "The mummy makes one Rotting Fist or Channel Negative Energy attack."
    "name": "Necrotic Strike"
  - "desc": "The mummy casts [[command-xphb|Command]] (level\
      \ 2 version), using the same spellcasting ability as Spellcasting. The mummy\
      \ can't take this action again until the start of its next turn.\n"
    "name": "Dread Command"
"regional_effects":
  - "desc": "The region containing a mummy lord's lair is warped by its presence,\
      \ creating the following effects:"
    "name": ""
  - "desc": "- Cursed Fate. Whenever a creature other than the mummy or one of\
      \ its allies casts a Divination spell while within 1 mile of the lair, the creature\
      \ makes a DC 15 Constitution saving throw. On a failed save, the spell dissipates\
      \ with no effect, and the action, [[bonus-action-xphb|Bonus Action]],\
      \ or [[reaction-xphb|Reaction]] used to cast\
      \ the spell is wasted, but any resources used to cast it aren't expended.  \n\
      - Soul Drain. Creatures within 1 mile of the lair have [[disadvantage-xphb|Disadvantage]]\
      \ on Death Saving Throws.  "
    "name": ""
  - "desc": "If the mummy lord is destroyed or moves its lair elsewhere, these effects\
      \ end immediately. The effects resume if the mummy lord gains a new body (see\
      \ its Undead Restoration trait)."
    "name": ""
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/undead/token/mummy-lord-xmm.webp"
```
^statblock

## Environment

desert, swamp

## Player-Facing Summary

Mummy lord xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of mummy lord xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around mummy lord xmm.

## Adventure Hooks

- A rumor ties mummy lord xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at mummy lord xmm to avert a public scandal.
- A map overlay reveals a hidden approach to mummy lord xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
