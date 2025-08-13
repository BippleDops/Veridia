---
aliases:
- Ulitharid
created: 2025-08-11
cssclasses: json5e-monster
obsidian-u-i-mode: preview
statblock: inline
statblock-link: '#^statblock'
status: active
tags:
- active
- both
- monster
- status/in-progress
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration/mind-flayer
- world/both
type: monster
updated: '2025-08-13T12:34:19.757403+00:00'
world: Both
---



> [!figure] Creature
![](04_Resources/Assets/Creatures/creature-creature-ulitharid-mpmm-ulitharid-mpmm.svg)

# [[3-Mechanics\CLI\bestiary\aberration/ulitharid-mpmm|Ulitharid]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 249, Volo's Guide to Monsters p. 175*  

Very rarely, when a tadpole from the brine pool of an [[/03_Mechanics/CLI/bestiary/aberration/elder-brain-mpmm|elder brain]] is implanted into a creature, that creature transforms into an ulitharid: a larger and more potent [[/03_Mechanics/CLI/bestiary/aberration/mind-flayer-xmm|mind flayer]] with six tentacles. Illithids innately recognize that an ulitharid's survival is more important than their own. An [[/03_Mechanics/CLI/bestiary/aberration/elder-brain-mpmm|elder brain's]] reaction to the rise of an ulitharid varies. In most colonies, the ulitharid becomes an elder brain's most favored servant, invested with power and authority. In others, the [[/03_Mechanics/CLI/bestiary/aberration/elder-brain-mpmm|elder brain]] perceives an ulitharid as a potential rival and manipulates or quashes the ulitharid's ambitions accordingly.

When an ulitharid finds sharing leadership with an [[/03_Mechanics/CLI/bestiary/aberration/elder-brain-mpmm|elder brain]] insufferable, it breaks off from the colony, taking a group of [[/03_Mechanics/CLI/bestiary/aberration/mind-flayer-xmm|mind flayers]] with it, and moves to another location to form a new colony. After the death of the ulitharid's body, a special process transforms its brain into a new [[/03_Mechanics/CLI/bestiary/aberration/elder-brain-mpmm|elder brain]] for the colony.

This process doesn't work on the brain of an ulitharid that dies a natural death, as such brains are too decrepit to be used. Instead, each ulitharid carries a psionically enhanced staff; when the ulitharid is ready to give up its life, it attaches the staff to the back of its head, and the staff cracks open its skull, enabling its brain to be extracted. The brain and the staff are then planted in the ulitharid's corpse, causing it to dissolve into ichor. This psionically potent slime helps to fuel the transformation of the area into a brine pool for the embryonic [[/03_Mechanics/CLI/bestiary/aberration/elder-brain-mpmm|elder brain]].

```statblock
"name": "Ulitharid (MPMM)"
"size": "Large"
"type": "aberration"
"subtype": "mind flayer"
"alignment": "Typically  Lawful Evil"
"ac": !!int "15"
"ac_class": "[[/03_Mechanics/CLI/items/breastplate-xphb|breastplate]]"
"hp": !!int "127"
"hit_dice": "17d10 + 14"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "12"
  - !!int "15"
  - !!int "21"
  - !!int "19"
  - !!int "21"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "9"
  - "wisdom": !!int "8"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[[/03_Mechanics/CLI/skills#Arcana|Arcana]]"
    "desc": "+9"
  - "name": "[[/03_Mechanics/CLI/skills#Insight|Insight]]"
    "desc": "+8"
  - "name": "[[/03_Mechanics/CLI/skills#Perception|Perception]]"
    "desc": "+8"
  - "name": "[[/03_Mechanics/CLI/skills#Stealth|Stealth]]"
    "desc": "+5"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Deep Speech, Undercommon, telepathy 2 miles"
"cr": "9"
"traits":
  - "desc": "The ulitharid is aware of the presence of creatures within 2 miles of\
      \ it that have an Intelligence score of 4 or higher. It knows the distance and\
      \ direction to each creature, as well as each creature's intelligence score,\
      \ but can't sense anything else about it. A creature protected by a [[/03_Mechanics/CLI/spells/mind-blank-xphb|mind blank]]\
      \ spell, a [[/03_Mechanics/CLI/spells/nondetection-xphb|nondetection]] spell,\
      \ or similar magic can't be perceived in this manner."
    "name": "Creature Sense"
  - "desc": "The ulitharid has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "If an elder brain establishes a psychic link with the ulitharid, the\
      \ elder brain can form a psychic link with any other creature the ulitharid\
      \ can detect using its Creature Sense. Any such link ends if the creature falls\
      \ outside the telepathy ranges of both the ulitharid and the elder brain. The\
      \ ulitharid can maintain its psychic link with the elder brain regardless of\
      \ the distance between them, so long as they are both on the same plane of existence.\
      \ If the ulitharid is more than 5 miles away from the elder brain, it can end\
      \ the psychic link at any time (no action required)."
    "name": "Psionic Hub"
"actions":
  - "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit:\
      \ 27 (4d10 + 5) psychic damage. If the target is Large or smaller, it is [[/03_Mechanics/CLI/conditions#Grappled|grappled]]\
      \ (escape DC 14) and must succeed on a DC 17 Intelligence saving throw or be\
      \ [[/03_Mechanics/CLI/conditions#Stunned|stunned]] until this grapple ends."
    "name": "Tentacles"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one [[/03_Mechanics/CLI/conditions#Incapacitated|incapacitated]]\
      \ Humanoid [[/03_Mechanics/CLI/conditions#Grappled|grappled]] by the ulitharid.\
      \ Hit: 55 (10d10) piercing damage. If this damage reduces the target to 0\
      \ hit points, the ulitharid kills the target by extracting and devouring its\
      \ brain."
    "name": "Extract Brain"
  - "desc": "The ulitharid magically emits psychic energy in a 60-foot cone. Each\
      \ creature in that area must succeed on a DC 17 Intelligence saving throw or\
      \ take 31 (4d12 + 5) psychic damage and be [[/03_Mechanics/CLI/conditions#Stunned|stunned]]\
      \ for 1 minute. A target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Mind Blast (Recharge 5-6)"
  - "desc": "The ulitharid casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\n\
      At will: [[/03_Mechanics/CLI/spells/detect-thoughts-xphb|detect thoughts]],\
      \ [[/03_Mechanics/CLI/spells/levitate-xphb|levitate]]\n\n1/day each: [[/03_Mechanics/CLI/spells/dominate-monster-xphb|dominate\
      \ monster]], [[/03_Mechanics/CLI/spells/befuddlement-xphb|feeblemind]],\
      \ [[/03_Mechanics/CLI/spells/mass-suggestion-xphb|mass suggestion]], [[/03_Mechanics/CLI/spells/plane-shift-xphb|plane\
      \ shift]] (self only), [[/03_Mechanics/CLI/spells/project-image-xphb|project\
      \ image]], [[/03_Mechanics/CLI/spells/scrying-xphb|scrying]],\
      \ [[/03_Mechanics/CLI/spells/telekinesis-xphb|telekinesis]]"
    "name": "Spellcasting (Psionics)"
"source":
  - "MPMM"
  - "VGM"
"image": "/03_Mechanics/CLI/bestiary/aberration/token/ulitharid-mpmm.webp"
```
^statblock

## Environment

underdark

## Player-Facing Summary

Ulitharid mpmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of ulitharid mpmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ulitharid mpmm.

## Adventure Hooks

- A rumor ties ulitharid mpmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at ulitharid mpmm to avert a public scandal.
- A map overlay reveals a hidden approach to ulitharid mpmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
