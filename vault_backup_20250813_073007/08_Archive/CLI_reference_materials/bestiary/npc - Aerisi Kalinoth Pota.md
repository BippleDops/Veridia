---
aliases:
- Aerisi Kalinoth
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: alive
tags:
- alive
- content/npc
- ttrpg-cli/compendium/src/5e/pota
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
- world/both
type: npc
updated: '2025-08-12T23:37:35.796304'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-aerisi-kalinoth-pota-aerisi-kalinoth-pota.png)

# [[3-Mechanics\CLI\bestiary\npc/aerisi-kalinoth-pota|Aerisi Kalinoth]]
*Source: Princes of the Apocalypse p. 192*  

Aerisi Kalinoth is the air prophet of the Elder Elemental Eye and leader of the Cult of the Howling Hatred. Tall and slender, with dark hair and (illusory) feathered wings that gently fan the air, Aerisi Kalinoth speaks to her people in a whisper that belies her violent temper, which reveals itself whenever she is denied.

Aerisi was a sheltered moon elf princess named Dara Algwynenn Kalinoth who grew up in a remote Faerie realm. Her parents had wished to protect her from the harsh realities of the world, but they only succeeded in spoiling her. When they tried to discipline their wilful daughter, she used the power of elemental air against them. Soon after, her dreams led her to the ancient dwarven ruins where the spear Windvane awaited her.

Dara changed her name to Aerisi and pretended to be an avariel (winged elf) princess like the ones from her storybooks. Then Aerisi used her talents for enchantment magic to sway mortals into joining her cult. She has convinced all her followers that she is in fact an avariel, and believes it herself even though she must cast [[/03_Mechanics/CLI/spells/seeming-xphb|seeming]] each day to "reveal" her wings.

Aerisi is prone to deluded flights of fancy and impulsive decadence. She sees herself as a beautiful, fierce, and just ruler who wields elemental power because she deserves it.

## In the Air Node

When danger threatens the Temple of Howling Hatred, Aerisi retreats to the Howling Caves, the air node. Within this node, Aerisi gains one additional use of her Legendary Resistance trait.

```statblock
"name": "Aerisi Kalinoth (PotA)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "16 with [[/03_Mechanics/CLI/spells/mage-armor-xphb|mage armor]]"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "16"
  - !!int "12"
  - !!int "17"
  - !!int "10"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Arcana|Arcana]]"
    "desc": "+6"
  - "name": "[[/03_Mechanics/CLI/skills#History|History]]"
    "desc": "+6"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+3"
"damage_resistances": "lightning"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Auran, Common, Elvish"
"cr": "7"
"traits":
  - "desc": "Aerisi is a 12th-level spellcaster. Her spellcasting ability is Intelligence\
      \ (spell save DC 14, +6 to hit with spell attacks). Aerisi has the following\
      \ wizard spells prepared:\n\nCantrips (at will): [[/03_Mechanics/CLI/spells/gust-xge|gust]],\
      \ [[/03_Mechanics/CLI/spells/mage-hand-xphb|mage hand]], [[/03_Mechanics/CLI/spells/message-xphb|message]],\
      \ [[/03_Mechanics/CLI/spells/prestidigitation-xphb|prestidigitation]], [[/03_Mechanics/CLI/spells/ray-of-frost-xphb|ray\
      \ of frost]], [[/03_Mechanics/CLI/spells/shocking-grasp-xphb|shocking grasp]]\n\
      \n1st level (4 slots): [[/03_Mechanics/CLI/spells/charm-person-xphb|charm person]],\
      \ [[/03_Mechanics/CLI/spells/feather-fall-xphb|feather fall]], [[/03_Mechanics/CLI/spells/mage-armor-xphb|mage armor]],\
      \ [[/03_Mechanics/CLI/spells/thunderwave-xphb|thunderwave]]\n\n2nd level\
      \ (3 slots): [[/03_Mechanics/CLI/spells/dust-devil-xge|dust devil]], [[/03_Mechanics/CLI/spells/gust-of-wind-xphb|gust\
      \ of wind]], [[/03_Mechanics/CLI/spells/invisibility-xphb|invisibility]]\n\
      \n3rd level (3 slots): [[/03_Mechanics/CLI/spells/fly-xphb|fly]], [[/03_Mechanics/CLI/spells/gaseous-form-xphb|gaseous\
      \ form]], [[/03_Mechanics/CLI/spells/lightning-bolt-xphb|lightning bolt]]\n\
      \n4th level (3 slots): [[/03_Mechanics/CLI/spells/ice-storm-xphb|ice storm]],\
      \ [[/03_Mechanics/CLI/spells/storm-sphere-xge|storm sphere]]\n\n5th level\
      \ (2 slots): [[/03_Mechanics/CLI/spells/cloudkill-xphb|cloudkill]], [[/03_Mechanics/CLI/spells/seeming-xphb|seeming]]\
      \ (cast each day)\n\n6th level (1 slots): [[/03_Mechanics/CLI/spells/chain-lightning-xphb|chain lightning]]"
    "name": "Spellcasting"
  - "desc": "Aerisi has advantage on saving throws against being [[/03_Mechanics/CLI/conditions#Charmed|charmed]],\
      \ and magic can't put her to sleep."
    "name": "Fey Ancestry"
  - "desc": "When Aerisi drops to 0 hit points, her body disappears in a howling whirlwind\
      \ that disperses quickly and harmlessly. Anything she is wearing or carrying\
      \ is left behind."
    "name": "Howling Defeat"
  - "desc": "If Aerisi fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (2/Day)"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 9 (1d6 + 6) piercing damage, or 10 (1d8 + 6) piercing\
      \ damage if used with two hands to make a melee attack, plus 3 (d6) lightning\
      \ damage."
    "name": "Windvane"
"lair_actions":
  - "desc": "If Aerisi is in the air node while [[/03_Mechanics/CLI/bestiary/npc/yan-c-bin-pota|Yan-C-Bin]]\
      \ isn't, Aerisi can take lair actions. On initiative count 20 (losing initiative\
      \ ties), Aerisi uses a lair action to cast one of her spells, up to 3rd level,\
      \ without using components or a spell slot. She can't cast the same spell two\
      \ rounds in a row, although she can continue to concentrate on a spell she previously\
      \ cast using a lair action. Aerisi can take no other lair actions while [[/03_Mechanics/CLI/conditions#Concentration|concentrating]]\
      \ on a spell cast as a lair action."
    "name": ""
  - "desc": "If Aerisi casts [[/03_Mechanics/CLI/spells/invisibility-xphb|invisibility]]\
      \ using this lair action, she also draws the power of the air node into herself.\
      \ By doing so, she regains 15 (3d8 + 2) hit points."
    "name": ""
"source":
  - "PotA"
"image": "/03_Mechanics/CLI/bestiary/npc/token/aerisi-kalinoth-pota.webp"
```
^statblock

## Player-Facing Summary

Aerisi kalinoth pota is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of aerisi kalinoth pota as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around aerisi kalinoth pota.

## Adventure Hooks

- A rumor ties aerisi kalinoth pota to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at aerisi kalinoth pota to avert a public scandal.
- A map overlay reveals a hidden approach to aerisi kalinoth pota active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
