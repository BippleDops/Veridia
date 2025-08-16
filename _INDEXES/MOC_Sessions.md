---
enhanced: true
tags: [enhanced, _indexes]
created: 2025-08-15T16:41:29.296279
modified: 2025-08-15T16:41:29.296282
aliases: [MOC Sessions]
---

## Table of Contents
- [[#Quick Links|Quick Links]]
- [[#Content|Content]]
- [[#Recent NPCs|Recent NPCs]]
- [[#Active Quests|Active Quests]]
- [[#Session Log|Session Log]]
- [[#Location Network|Location Network]]
- [[#See Also|See Also]]
- [[#Game Mechanics|Game Mechanics]]
- [[#D&D 5e References|D&D 5e References]]
- [[#Connections|Connections]]

-tags: [moc, index, combat]ex]
created: 2025-08-15
---

# Sessions Index

> Central hub for all Sessions content

## Quick Links
- [[MASTER_MOC|← Back to Master]]

## Content
*Building index...*

## Recent NPCs
```dataview
TABLE file.mtime as "Modified"
FROM "03_People"
SORT file.mtime DESC
LIMIT 10
```

## Active Quests
```dataview
LIST
FROM "01_Adventures"
WHERE contains(status, "active")
```

## Session Log
```dataview
TABLE date as "Date", players_present as "Players"
FROM "06_Sessions"
SORT date DESC
```

## Location Network
```dataview
LIST
FROM "02_Worldbuilding"
WHERE contains(file.name, "Location") OR contains(tags, "location")
```

> [!example] 📝 Example
> How this works in play

## See Also
- [[02 Step by Step Characters]]
- [[NPC00080_Branwen_Proudmore]]
- [[Propaganda_Leaflet_Pearl_Guar]]
- [[NPC00287_Ysara_Underhill_the_Wise]]
- [[12 Spells]]
- [[09 Adventuring]]
- [[NPC00200_Faelyn_Winterborn_the_Guardian]]
- [[NPC00362_Pyria_Stormwind_the_Wise]]
- [[Sage Elara]]
- [[NPC01177_Thalia_Underhill_the_Fallen]]
- [[NPC00451_Malakai_Ravenheart_the_Broken]]
- [[NPC01247_Xander_Zephyrblade_the_Risen]]
- [[NPC01113_Solas_Ravenheart_the_Cunning]]
- [[NPC00844_Cedric_Blackstone_the_Fallen]]
- [[NPC00207_Ysara_Ravenheart]]
- [[NPC00669_Zephyr_Youngblood_the_Lost]]
- [[NPC00812_Kaelen_Jadeclaw_the_Seeker]]
- [[Quick_Start_Guide.md]]
- [[NPC01483_Gavril_Zephyrblade_the_Fallen]]
- [[NPC00707_Fiora_Oakenshield_the_Seeker]]
- [[NPC00321_Aeliana_Zephyrblade_the_Strong]]
- [[06 Equipment]]
- [[NPC01789_Vesper_Proudmore_the_Mystic]]
- [[NPC01979_Fiora_Emberfall_the_Guardian]]
- [[NPC01195_Gareth_Keenblade_the_Guardian]]
- [[09 Appendix a the Multiverse]]
- [[NPC00761_Aldric_Moonshadow_the_Guardian]]
- [[NPC01632_Qadim_Darkwater_the_Guardian]]
- [[NPC01943_Xander_Proudmore_the_Fallen]]
- [[NPC00494_Lyanna_Hawthorne_the_Guardian]]
- [[NPC00058_Elric_Nightfall]]
- [[NPC01730_Faelyn_Emberfall_the_Broken]]
- [[NPC01126_Malakai_Oakenshield_the_Fallen]]
- [[NPC00515_Baelor_Crystalbrook_the_Seeker]]
- [[Player_Portal.md]]
- [[14 Gods of the Multiverse]]
- [[NPC00649_Corvus_Zephyrblade_the_Broken]]
- [[NPC00920_Malakai_Ravenheart_the_Guardian]]
-

## Game Mechanics
- **Combat**: See ACX p.189-198

## D&D 5e References

*(Combat rules: ACX p.189-198)*
*(Attack rolls: ACX p.194)*
*(Damage & Healing: ACX p.196-197)*

## Connections

- Parallels [[Surface Trade Ports]]
- Affected by [[12_Research_D&D_Statblocks_Crystal_Wardens]]
- Requires [[Dragon Sensing Longsword Pota]]
- See also: [[Quest - Hearts and Minds]]
- Compare with [[Nonhuman Surtur]]
- Leads to [[Location City Memory Sharing Techniques Memory Sharing Techniques.svg]]
- Affected by [[step_094 (phase_015)]]
- See also: [[step_028 (phase_028)]]
- Originates from [[ENC00130_Environmental_Encounter_131]]
- Requires [[International Trade Routes]]
- Affected by [[Magic Item Table F]]
- Affected by [[step_077 (phase_060)]]
- Related: [[NPC00055_Rhiannon_Ironforge_the_Swift]]
- Related: [[step_036 (phase_014)]]
- Compare with [[ENC00128_Social_Encounter_129]]
- Parallels [[step_017 (phase_070)]]
- Related: [[Player Handout Merger Vessels]]
- Compare with [[Assets Locations Location City the Original Palace V1 the Original Palace.svg]]
- Related: [[ITEM00169_Shadow_Bow_of_Power]]
- See also: [[NPC0024_Yorick_Stormwind]]
- Influences
- Parallels [[step_059 (phase_097)]]
- Parallels [[elf-names-family-xge (tables)]]
- Influences [[Seven_Shards_Overview (02_Worldbuilding)]]
- Leads to [[Quest - Missing Shipments 2]]
- Compare with
- Compare with [[LOC00223_Towns_Location_224]]
- Influences [[The Pressure Wars]]
- Connects to [[ITEM01118_Distilled_Incense_of_Swiftness]]
- Compare with [[downtime-revisited-xge (variant-rules)]]
- Leads to [[NPC0077_Minerva_Ironforge]]
- Originates from [[Social Movement Tracking]]
- Parallels [[will-o-wisp-xmm (undead)]]
- Parallels [[Druid Xphb Circle of the Moon Xphb]]
- Influences [[Portrait NPC the Deepmind Conspiracy the Deepmind Conspiracy.svg_1 (Portraits)]]
- Connects to
- See also: [[Observatory of Broken Stars]]
- Parallels [[Quest - The Corruption Files]]
- Parallels [[step_015 (phase_069)]]
- Related: [[Economic Impact of Shard Discovery]]
- Related: [[Quest - Identity Crisis_1 (01_Adventures)]]
- Parallels [[ultroloth-xmm (fiend)]]
- Compare with [[Mirror Window]]
- Related: [[item-artifact-windvane-pota-v6-windvane-pota.png]]
- Compare with [[Assets Locations Location City Transportation Guild Transportation Guild.svg]]
- Connects to [[Quest - The Plague of Crystals]]
- Originates from [[Portrait NPC Captain Elara Shadowshard Captain Elara Shadowshard.svg]]
- Connects to [[Assets Locations Location City Weapon Master Dain Sharpedge V1 Weapon Master Dain Sharpedge.svg]]
- See also: [[Portrait NPC Sir Marcus Dawnforge Sir Marcus Dawnforge.svg_1 (Portraits)]]
- Affected by [[The Convergence Entity (D&D_References)]]
- Related:
- Connects to [[step_006 (phase_054)]]
- Originates from [[encumbrance-phb (variant-rules)]]
- See also: [[The Shattered Sanctum (D&D_References)]]
- Affected by [[location-city-forge-of-war-forge-of-war.svg]]
- Related: [[double brackets]]
- Leads to [[Assets Locations Location City Living Supremacist Enclaves V1 Living Supremacist Enclaves.svg]]
- Originates from [[Deep Expeditions 2]]
- Related: [[The Void Seekers 2]]
- Compare with [[hide-armor-xphb (items)]]
- Related: [[Salvage Queen Nerissa Deepfinder (D&D_References)]]
- Leads to [[ASSET_EXPANSION_COMPLETE]]
- Leads to [[second-chance-xge (feats)]]
- Parallels [[ITEM00881_Void-touched_Orb_of_Truth]]
- Parallels [[Location City Echo Translator Vera Echo Translator Vera.svg]]
- Influences [[Eastern Port]]
- Parallels [[portrait-npc-captain-between-captain-between.svg]]
- Leads to [[step_003 (phase_071)]]
- Requires [[Lord Commander Gareth Steelborn (D&D_References)]]
- Leads to [[boon-of-planar-travel (rewards)]]
- Influences [[Codex of Forgotten Depths 2]]
- Connects to [[step_058 (phase_085)]]
- Leads to [[The Glass Twins (D&D_References)]]
- Originates from [[Location City the Hopekeeper Academy the Hopekeeper Academy.svg]]
- Leads to [[Assets Locations Location City Ancient Crystal Technology Ancient Crystal Technology.svg]]
- Compare with [[step_093 (phase_080)]]
- Related: [[Captain Voidguard (D&D_References)]]
- Influences [[Assets Locations Location City Royal Treasury Royal Treasury.svg]]
- See also: [[giant-crocodile-xmm (beast)]]
- See also: [[The Harbormaster's Office (D&D_References)]]
- Leads to [[Location City Void Keeper Null Void Keeper Null.svg]]
- Affected by [[portrait-npc-the-siren-v1-the-siren.svg]]
- Related: [[Dhergoloth Mpmm]]
- See also: [[Quest - The Shattered Memories_1 (01_Adventures)]]
- See also: [[Githyanki Raiding Parties Githyanki Purpose]]
- Affected by [[Princess Celestine Lumengarde (D&D_References)]]
- Originates from [[MON00102_Aberrations_Creature_103]]
- Affected by [[SPELL00124_Arcane_Spell_125]]
- Parallels [[Silver Xdmg]]
- Compare with [[Assets Portraits Portrait NPC the Resonance Prophet the Resonance Prophet.svg]]
- Related:
- Leads to
- See also: [[step_019 (phase_057)]]
- Originates from
- Originates from [[MON00158_Constructs_Creature_159]]
- Connects to [[List Spells Optional Features Sweeping Cinder Strike]]
- Requires [[EVENT00012_Magical_Event_13]]
- Compare with [[Unite or Divide 2]]
- Parallels
- Requires [[Skills Reality Anchor Deployment]]