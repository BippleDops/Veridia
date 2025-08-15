---
title: mind-flayer-psion-vgm (aberration)
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# mind-flayer-psion-vgm

---
title: mind flayer psion vgm
aliases:
- Mind Flayer Psion
type: monster
tags:
- ttrpg-cli/monster/size/medium
- monster
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/type/aberration
- research
- world/both
- active
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/compendium/src/5e/vgm
- status/in-progress
created: 2025-08-11
modified: '2025-08-14'
status: active
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
updated: '2025-08-12T23:37:35.292975'
world: Both
---

> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-mind-flayer-psion-vgm-mind-flayer-psion-vgm.svg)

# [[Mind Flayer Psion Vgm]]
*Source: Volo's Guide to Monsters p. 71*  

Mind flayers sometimes devote themselves to deeper study of psionic power, and many excel at using their innate psionic energy to duplicate the casting of spells.

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

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
"ac_class": "[[Breastplate Xphb]]"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "19"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[[skills#Arcana|Arcana]]"
    "desc": "+7"
  - "name": "[[skills#Deception|Deception]]"
    "desc": "+6"
  - "name": "[[skills#Insight|Insight]]"
  - "name": "[[skills#Perception|Perception]]"
  - "name": "[[skills#Persuasion|Persuasion]]"
  - "name": "[[skills#Stealth|Stealth]]"
    "desc": "+4"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "The mind flayer is a 10th-level spellcaster. Its innate spellcasting\
      \ ability is Intelligence (spell save DC 15; +7 to hit with spell attacks).\
      \ It can innately cast the following spells, requiring no components:\n\nAt\
      \ will: [[guidance-xphb (spells)]], [[mage-hand-xphb (spells)]],\
      \ [[Vicious Mockery Xphb]], [[True Strike Xphb]]
      \ strike]], [[detect-thoughts-xphb (spells)]],\
      \ [[levitate-xphb (spells)]]\n\n1/day each: [[Dominate Monster Xphb]]
      \ monster]], [[plane-shift-xphb (spells)]]\
      \ (self only)\n\n1st level (4 slots): [[Charm Person Xphb]],\
      \ [[command-xphb (spells)]], [[Comprehend Languages Xphb]],\
      \ [[sanctuary-xphb (spells)]]\n\n2nd level (3 slots):\
      \ [[Crown of Madness Xphb]], [[Phantasmal Force Xphb]]
      \ force]], [[see-invisibility-xphb (spells)]]\n\
      \n3rd level (3 slots): [[clairvoyance-xphb (spells)]],\
      \ [[Fear Xphb]], [[Meld Into Stone Xphb]]\n\
      \n4th level (3 slots): [[Confusion Xphb]],\
      \ [[stone-shape-xphb (spells)]]\n\n5th level\
      \ (2 slots): [[Scrying Xphb]], [[telekinesis-xphb (spells)]]"
    "name": "Innate Spellcasting (Psionics)"
  - "desc": "The mind flayer has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15\
      \ (2d10 + 4) psychic damage. If the target is Medium or smaller, it is [[conditions#Grappled|grappled]]\
      \ (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be\
      \ [[conditions#Stunned|stunned]] until this grapple ends."
    "name": "Tentacles"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [[conditions#Incapacitated|incapacitated]]\
      \ humanoid [[conditions#Grappled|grappled]] by the mind flayer.\
      \ Hit: The target takes 55 (10d10) piercing damage. If this damage reduces\
      \ the target to 0 hit points, the mind flayer kills the target by extracting\
      \ and devouring its brain."
    "name": "Extract Brain"
  - "desc": "The mind flayer magically emits psychic energy in a 60-foot cone. Each\
      \ creature in that area must succeed on a DC 15 Intelligence saving throw or\
      \ take 22 (4d8 + 4) psychic damage and be [[conditions#Stunned|stunned]]\
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

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## 12_Research Specific Content

Contextual improvement based on 12_Research
