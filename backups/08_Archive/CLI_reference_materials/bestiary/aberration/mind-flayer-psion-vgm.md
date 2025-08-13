---
aliases:
- Mind Flayer Psion
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/vgm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
- world/both
type: monster
updated: '2025-08-12T23:37:35.292975'
world: Both
---


> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-mind-flayer-psion-vgm-mind-flayer-psion-vgm.svg)

# [[3-Mechanics\CLI\bestiary\aberration/mind-flayer-psion-vgm|Mind Flayer Psion]]
*Source: Volo's Guide to Monsters p. 71*  

Mind flayers sometimes devote themselves to deeper study of psionic power, and many excel at using their innate psionic energy to duplicate the casting of spells.

## Mind Flayer

Mind flayers, also called illithids, are the scourge of sentient creatures across countless worlds. Psionic tyrants, slavers, and interdimensional voyagers, they are insidious masterminds that harvest entire races for their own twisted ends. Four tentacles snake from their octopus-like heads, flexing in hungry anticipation when sentient creatures come near.

In eons past, illithids controlled empires that spanned many worlds. They subjugated and consequently warped whole races of humanoid slaves, including the githyanki and githzerai, the grimlocks, and the kuo-toa. Conjoined by a collective consciousness, the illithids hatch plots as far-reaching and evil as their fathomless minds can conceive.

Since the fall of their empires, illithid collectives on the Material Plane have resided in the Underdark. Psionic Commanders. Mind flayers possess psionic powers that enable them to control the minds of creatures such as troglodytes, grimlocks, quaggoths, and ogres. Illithids prefer to communicate via telepathy and use their telepathy when issuing commands to their thralls.

When an illithid meets strong resistance, it avoids initial combat as it orders its thralls to attack. Like physical extensions of the illithid's thoughts, these thralls interpose themselves between the mind flayer and its foes, sacrificing their lives so that their master can escape.

### Hive Mind Colonies

Solitary mind flayers are likely rogues and outcasts. Most illithids belong to a colony of sibling mind flayers devoted to an elder brain-a massive brain-like being that resides in a briny pool near the center of a mind flayer community. From its pool, an elder brain telepathically dictates its desires to each individual mind flayer within 5 miles of it, for it is able to hold multiple mental conversations at once.

An illithid experiences euphoria as it devours the brain of a humanoid, along with its memories, personality, and innermost fears. Mind flayers will sometimes harvest a brain rather than devour it, using it as part of some alien experiment or transforming it into an intellect devourer.

Qualith

On the rare occasion that mind flayers need to write something down, they do so in Qualith. This system of tactile writing (similar to braille) is read by an illithid's tentacles. Qualith is written in four-line stanzas and is so alien in construction that non-illithids must resort to magic to discern its meaning. Though Qualith can be used to keep records, illithids most often use it to mark portals or other surfaces with warnings or instructions.

### Hunger of the Mind

Illithids subsist on the brains of humanoids. The brains provide enzymes, hormones, and psychic energy necessary for their survival. An illithid healthy from a brain-rich diet secretes a thin glaze of mucus that coats its mauve skin.

```statblock
"name": "Mind Flayer Psion (VGM)"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "[[/03_Mechanics/CLI/items/breastplate-xphb|breastplate]]"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "12"
  - !!int "19"
  - !!int "17"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Arcana|Arcana]]"
    "desc": "+7"
  - "name": "[[/03_Mechanics/CLI/skills#Deception|Deception]]"
    "desc": "+6"
  - "name": "[[/03_Mechanics/CLI/skills#Insight|Insight]]"
    "desc": "+6"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/03_Mechanics/CLI/skills#Persuasion|Persuasion]]"
    "desc": "+6"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "The mind flayer is a 10th-level spellcaster. Its innate spellcasting\
      \ ability is Intelligence (spell save DC 15; +7 to hit with spell attacks).\
      \ It can innately cast the following spells, requiring no components:\n\nAt\
      \ will: [[/03_Mechanics/CLI/spells/guidance-xphb|guidance]], [[/03_Mechanics/CLI/spells/mage-hand-xphb|mage hand]],\
      \ [[/03_Mechanics/CLI/spells/vicious-mockery-xphb|vicious mockery]], [[/03_Mechanics/CLI/spells/true-strike-xphb|true\
      \ strike]], [[/03_Mechanics/CLI/spells/detect-thoughts-xphb|detect thoughts]],\
      \ [[/03_Mechanics/CLI/spells/levitate-xphb|levitate]]\n\n1/day each: [[/03_Mechanics/CLI/spells/dominate-monster-xphb|dominate\
      \ monster]], [[/03_Mechanics/CLI/spells/plane-shift-xphb|plane shift]]\
      \ (self only)\n\n1st level (4 slots): [[/03_Mechanics/CLI/spells/charm-person-xphb|charm person]],\
      \ [[/03_Mechanics/CLI/spells/command-xphb|command]], [[/03_Mechanics/CLI/spells/comprehend-languages-xphb|comprehend languages]],\
      \ [[/03_Mechanics/CLI/spells/sanctuary-xphb|sanctuary]]\n\n2nd level (3 slots):\
      \ [[/03_Mechanics/CLI/spells/crown-of-madness-xphb|crown of madness]], [[/03_Mechanics/CLI/spells/phantasmal-force-xphb|phantasmal\
      \ force]], [[/03_Mechanics/CLI/spells/see-invisibility-xphb|see invisibility]]\n\
      \n3rd level (3 slots): [[/03_Mechanics/CLI/spells/clairvoyance-xphb|clairvoyance]],\
      \ [[/03_Mechanics/CLI/spells/fear-xphb|fear]], [[/03_Mechanics/CLI/spells/meld-into-stone-xphb|meld into stone]]\n\
      \n4th level (3 slots): [[/03_Mechanics/CLI/spells/confusion-xphb|confusion]],\
      \ [[/03_Mechanics/CLI/spells/stone-shape-xphb|stone shape]]\n\n5th level\
      \ (2 slots): [[/03_Mechanics/CLI/spells/scrying-xphb|scrying]], [[/03_Mechanics/CLI/spells/telekinesis-xphb|telekinesis]]"
    "name": "Innate Spellcasting (Psionics)"
  - "desc": "The mind flayer has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15\
      \ (2d10 + 4) psychic damage. If the target is Medium or smaller, it is [[/03_Mechanics/CLI/conditions#Grappled|grappled]]\
      \ (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be\
      \ [[/03_Mechanics/CLI/conditions#Stunned|stunned]] until this grapple ends."
    "name": "Tentacles"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [[/03_Mechanics/CLI/conditions#Incapacitated|incapacitated]]\
      \ humanoid [[/03_Mechanics/CLI/conditions#Grappled|grappled]] by the mind flayer.\
      \ Hit: The target takes 55 (10d10) piercing damage. If this damage reduces\
      \ the target to 0 hit points, the mind flayer kills the target by extracting\
      \ and devouring its brain."
    "name": "Extract Brain"
  - "desc": "The mind flayer magically emits psychic energy in a 60-foot cone. Each\
      \ creature in that area must succeed on a DC 15 Intelligence saving throw or\
      \ take 22 (4d8 + 4) psychic damage and be [[/03_Mechanics/CLI/conditions#Stunned|stunned]]\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Mind Blast (Recharge 5-6)"
"source":
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/mind-flayer-psion-vgm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Mind flayer psion vgm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of mind flayer psion vgm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around mind flayer psion vgm.

## Adventure Hooks

- A rumor ties mind flayer psion vgm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at mind flayer psion vgm to avert a public scandal.
- A map overlay reveals a hidden approach to mind flayer psion vgm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
