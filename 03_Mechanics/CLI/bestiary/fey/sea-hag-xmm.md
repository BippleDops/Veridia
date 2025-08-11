---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/2
  - ttrpg-cli/monster/environment/coastal
  - ttrpg-cli/monster/environment/underwater
  - ttrpg-cli/monster/size/medium
  - ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Sea Hag
---

> [!figure] Creature
![](04_Resources/Assets/Generated/Creatures/creature-creature-sea-hag-xmm-sea-hag-xmm.svg)

# [Sea Hag](3-Mechanics\CLI\bestiary\fey/sea-hag-xmm.md)
*Source: Monster Manual (2024) p. 271. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Sea Hag

*Hag of Despair and the Dismal Deep*

- **Habitat.** Coastal, Underwater  
- **Treasure.** Arcana  

Sea hags loathe peace and beauty. Bitter, jealous creatures, they spread chaos and undermine joy however they can, undertaking elaborate deceptions to sow discord for its own sake. The hags' true forms are supernaturally vile, and their baleful gazes can strike down creatures [frightened](/03_Mechanics/CLI/conditions.md#Frightened) by their appearance.

Sea hags cloak themselves in illusions to work their schemes. Roll on or choose a result from the Sea Hag Disguises table to inspire a sea hag's illusion and how they might use it to wreak chaos and destruction.

**Sea Hag Disguises**

`dice: [](sea-hag-xmm.md#^sea-hag-disguises)`

| dice: 1d6 | The Sea Hag Takes the Form of A... |
|-----------|------------------------------------|
| 1 | Captive and claims nearby villagers bound them and left them to drown. |
| 2 | Castaway and shares a cursed item's location with would-be rescuers. |
| 3 | Healer and passes off poisons as medicine. |
| 4 | Panic-spreading prophesier of doom. |
| 5 | Ship captain and delivers passengers to the hag's pet sea monster. |
| 6 | Wounded sailor and claims their ship was destroyed by merfolk or other peaceful people. |
^sea-hag-disguises

```statblock
"name": "Sea Hag (XMM)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "16"
  - !!int "12"
  - !!int "12"
  - !!int "13"
"speed": "30 ft., swim 40 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Giant, Primordial (Aquan)"
"cr": "2"
"traits":
  - "desc": "While within 30 feet of at least two hag allies, the hag can cast one\
      \ of the following spells, requiring no Material components, using the spell's\
      \ normal casting time, and using Intelligence as the spellcasting ability (spell\
      \ save DC 11): [Augury](/03_Mechanics/CLI/spells/augury-xphb.md), [Find Familiar](/03_Mechanics/CLI/spells/find-familiar-xphb.md),\
      \ [Identify](/03_Mechanics/CLI/spells/identify-xphb.md), [Locate Object](/03_Mechanics/CLI/spells/locate-object-xphb.md),\
      \ [Scrying](/03_Mechanics/CLI/spells/scrying-xphb.md), or [Unseen Servant](/03_Mechanics/CLI/spells/unseen-servant-xphb.md).\
      \ The hag must finish a [Long Rest](/03_Mechanics/CLI/variant-rules/long-rest-xphb.md)\
      \ before using this trait to cast that spell again.\n"
    "name": "Coven Magic"
  - "desc": "The hag can breathe air and water."
    "name": "Amphibious"
  - "desc": "Wisdom Saving Throw: DC 11, any Beast or Humanoid that starts its turn\
      \ within 30 feet of the hag and can see the hag's true form. Failure: The\
      \ target has the [Frightened](/03_Mechanics/CLI/conditions.md#Frightened) condition\
      \ until the start of its next turn. Success: The target is immune to this\
      \ hag's Vile Appearance for 24 hours."
    "name": "Vile Appearance"
"actions":
  - "desc": "Melee Attack Roll: +5, reach 5 ft. Hit: 10 (2d6 + 3) Slashing damage."
    "name": "Claw"
  - "desc": "Wisdom Saving Throw: DC 11, one [Frightened](/03_Mechanics/CLI/conditions.md#Frightened)\
      \ creature the hag can see within 30 feet. Failure: If the target has 20 [Hit\
      \ Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md) or fewer, it drops\
      \ to 0 [Hit Points](/03_Mechanics/CLI/variant-rules/hit-points-xphb.md). Otherwise,\
      \ the target takes 13 (3d8) Psychic damage."
    "name": "Death Glare (Recharge 5-6)"
  - "desc": "The hag casts [Disguise Self](/03_Mechanics/CLI/spells/disguise-self-xphb.md),\
      \ using Constitution as the spellcasting ability (spell save DC 13). The spell's\
      \ duration is 24 hours.\n"
    "name": "Illusory Appearance"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/fey/token/sea-hag-xmm.webp"
```
^statblock

## Environment

coastal, underwater

## Player-Facing Summary

Sea hag xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of sea hag xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around sea hag xmm.

## Adventure Hooks

- A rumor ties sea hag xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at sea hag xmm to avert a public scandal.
- A map overlay reveals a hidden approach to sea hag xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
