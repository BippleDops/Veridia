---
aliases:
- Rakshasa
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
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/nine-hells
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
- world/both
type: monster
updated: '2025-08-12T23:37:35.488841'
world: Both
---

# [Rakshasa](3-Mechanics\CLI\bestiary\fiend/rakshasa-xmm.md)
*Source: Monster Manual (2024) p. 253. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Rakshasa

*Deceiver Hungry for Power and Flesh*

- **Habitat.** Planar (Nine Hells), Urban  
- **Treasure.** Relics  

Masters of manipulation, rakshasas infiltrate communities to claim positions of power. While disguising their true natures, they kidnap victims and indulge their insatiable hunger for flesh.

Rakshasas can withstand some degree of magic, but legends tell of blessed warriors felling them with crossbow bolts, arrows, or similar weapons.

Rakshasas' appearances combine humanlike bodies with the features of animals and monsters. All rakshasas have a physical oddity that remains when they adopt magical disguises, such as palms where the backs of the hands would be on humans.

```statblock
"name": "Rakshasa (XMM)"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "221"
"hit_dice": "26d8 + 104"
"modifier": !!int "8"
"stats":
  - !!int "14"
  - !!int "17"
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "20"
"speed": "40 ft."
"skillsaves":
  - "name": "[Deception](/03_Mechanics/CLI/skills.md#Deception)"
    "desc": "+10"
  - "name": "[Insight](/03_Mechanics/CLI/skills.md#Insight)"
    "desc": "+8"
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+8"
"damage_vulnerabilities": "piercing damage from weapons wielded by creatures under\
  \ the effect of a Bless spell"
"condition_immunities": "[charmed](/03_Mechanics/CLI/conditions.md#Charmed), [frightened](/03_Mechanics/CLI/conditions.md#Frightened)"
"senses": "truesight 60 ft., passive Perception 18"
"languages": "Common, Infernal"
"cr": "13"
"traits":
  - "desc": "The rakshasa automatically succeeds on saving throws against spells and\
      \ other magical effects, and the attack rolls of spells automatically miss it.\
      \ Without the rakshasa's permission, no spell can observe the rakshasa remotely\
      \ or detect its thoughts, creature type, or alignment."
    "name": "Greater Magic Resistance"
  - "desc": "If the rakshasa dies outside the Nine Hells, its body turns to ichor,\
      \ and it gains a new body instantly, reviving with all its [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md)\
      \ somewhere in the Nine Hells."
    "name": "Fiendish Restoration"
"actions":
  - "desc": "The rakshasa makes three Cursed Touch attacks."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +10, reach 5 ft. Hit: 12 (2d6 + 5) Slashing damage\
      \ plus 19 (3d12) Necrotic damage. If the target is a creature, it is cursed.\
      \ While cursed, the target gains no benefit from finishing a [Short](/03_Mechanics/CLI/variant-rules/short-rest-xphb.md)\
      \ or [Long Rest](/03_Mechanics/CLI/variant-rules/long-rest-xphb.md)."
    "name": "Cursed Touch"
  - "desc": "Wisdom Saving Throw: DC 18, each enemy in a 30-foot [Emanation](/03_Mechanics/CLI/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the rakshasa. Failure: 28 (8d6) Psychic damage, and the\
      \ target has the [Frightened](/03_Mechanics/CLI/conditions.md#Frightened) and\
      \ [Incapacitated](/03_Mechanics/CLI/conditions.md#Incapacitated) conditions until\
      \ the start of the rakshasa's next turn."
    "name": "Baleful Command (Recharge 5-6)"
  - "desc": "The rakshasa casts one of the following spells, requiring no Material\
      \ components and using Charisma as the spellcasting ability (spell save DC 18):\n\
      \nAt will: [Detect Magic](/03_Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [Detect Thoughts](/03_Mechanics/CLI/spells/detect-thoughts-xphb.md), [Disguise\
      \ Self](/03_Mechanics/CLI/spells/disguise-self-xphb.md), [Mage Hand](/03_Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [Minor Illusion](/03_Mechanics/CLI/spells/minor-illusion-xphb.md)\n\n1/day\
      \ each: [Fly](/03_Mechanics/CLI/spells/fly-xphb.md), [Invisibility](/03_Mechanics/CLI/spells/invisibility-xphb.md),\
      \ [Major Image](/03_Mechanics/CLI/spells/major-image-xphb.md), [Plane Shift](/03_Mechanics/CLI/spells/plane-shift-xphb.md)"
    "name": "Spellcasting"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fiend/token/rakshasa-xmm.webp"
```
^statblock

## Environment

planar, nine hells, urban

## Player-Facing Summary

Rakshasa xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of rakshasa xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around rakshasa xmm.

## Adventure Hooks

- A rumor ties rakshasa xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at rakshasa xmm to avert a public scandal.
- A map overlay reveals a hidden approach to rakshasa xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
