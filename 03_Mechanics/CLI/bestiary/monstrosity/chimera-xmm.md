---
type: monster
obsidian-u-i-mode: preview
cssclasses: json5e-monster
tags:
  - ttrpg-cli/compendium/src/5e/xmm
  - ttrpg-cli/monster/cr/6
  - ttrpg-cli/monster/environment/grassland
  - ttrpg-cli/monster/environment/hill
  - ttrpg-cli/monster/environment/mountain
  - ttrpg-cli/monster/size/large
  - ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: '#^statblock'
aliases:
  - Chimera
---
# [Chimera](3-Mechanics\CLI\bestiary\monstrosity/chimera-xmm.md)
*Source: Monster Manual (2024) p. 70. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Chimera

*Multiheaded Ravager*

- **Habitat.** Grassland, Hill, Mountain  
- **Treasure.** Any  

Violent and unpredictable, chimeras combine the deadliest traits of lions, rams, and red dragons. With their fearsome claws, crushing horns, and fiery breath, chimeras are tempests of ferocity, driven by their three heads' conflicting instincts. Their heads agree on little but their desires to feed and to drive competitors from the rugged territories where these monsters make their lairs. When they spot prey, chimeras typically strafe foes with their fire breath before landing to attack with their fangs, horns, and claws.

Owing to their draconic instincts, chimeras are greedy creatures that hoard treasures within cavernous lairs. They're undiscerning about what they collect, gathering shiny objects alongside trophies and bones from their recent kills. Brave souls seeking to distract or temporarily appease a chimera can do so by offering it treasure and food.

```statblock
"name": "Chimera (XMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "11"
  - !!int "19"
  - !!int "3"
  - !!int "14"
  - !!int "10"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  - "name": "[Perception](/03_Mechanics/CLI/skills.md#Perception)"
    "desc": "+8"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "understands Draconic but can't speak"
"cr": "6"
"actions":
  - "desc": "The chimera makes one Ram attack, one Bite attack, and one Claw attack.\
      \ It can replace the Claw attack with a use of Fire Breath if available."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 11 (2d6 + 4) Piercing damage,\
      \ or 18 (4d6 + 4) Piercing damage if the chimera had [Advantage](/03_Mechanics/CLI/variant-rules/advantage-xphb.md)\
      \ on the attack roll."
    "name": "Bite"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 7 (1d6 + 4) Slashing damage."
    "name": "Claw"
  - "desc": "Melee Attack Roll: +7, reach 5 ft. Hit: 10 (1d12 + 4) Bludgeoning\
      \ damage. If the target is a Medium or smaller creature, it has the [Prone](/03_Mechanics/CLI/conditions.md#Prone)\
      \ condition."
    "name": "Ram"
  - "desc": "Dexterity Saving Throw: DC 15, each creature in a 15-foot [Cone](/03_Mechanics/CLI/variant-rules/cone-area-of-effect-xphb.md).\
      \ Failure: 31 (7d8) Fire damage. Success: Half damage."
    "name": "Fire Breath (Recharge 5-6)"
"source":
  - "XMM"
"image": "/03_Mechanics/CLI/bestiary/monstrosity/token/chimera-xmm.webp"
```
^statblock

## Environment

grassland, hill, mountain

## Player-Facing Summary

Chimera xmm is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of chimera xmm as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around chimera xmm.

## Adventure Hooks

- A rumor ties chimera xmm to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at chimera xmm to avert a public scandal.
- A map overlay reveals a hidden approach to chimera xmm active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
