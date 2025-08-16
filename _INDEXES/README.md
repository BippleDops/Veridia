---
enhanced: true
tags: [enhanced, _indexes]
created: 2025-08-15T16:41:29.299343
modified: 2025-08-15T16:41:29.299346
aliases: [README]
---

## Table of Contents
- [[#Recent NPCs|Recent NPCs]]
- [[#Active Quests|Active Quests]]
- [[#Session Log|Session Log]]
- [[#Location Network|Location Network]]
- [[#See Also|See Also]]
- [[#Game Mechanics|Game Mechanics]]
- [[#D&D 5e References|D&D 5e References]]
- [[#Connections|Connections]]
- [[#Visual References|Visual References]]

-tags: ['type/note', 'status/active', combat]e']
created: 2025-08-15
modified: 2025-08-15
aliases: []
---

# _INDEXES

Directory for vault optimization.

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

> [!warning] ⚠️ Warning
> Important safety or rule information

## See Also
- [[NPC00501_Orion_Nightfall_the_Broken]]
- [[NPC01888_Hestara_Ravenheart_the_Redeemed]]
- [[Dockworker_Union_Flyer.md]]
- [[NPC01229_Gavril_Ironwood_the_Scholar]]
- [[NPC01970_Brenna_Dawnstrider_the_Wise]]
- [[NPC00821_Zephyr_Voidwalker_the_Cunning]]
- [[Currency_Guide_Scrip_and_Shard]]
- [[Reference.md]]
- [[NPC01555_Branwen_Xendar_the_Seeker]]
- [[NPC01943_Xander_Proudmore_the_Fallen]]
- [[NPC00661_Corvus_Darkwater_the_Broken]]
- [[NPC01041_Thalia_Dawnstrider_the_Lost]]
- [[MOC_Combat]]
- [[NPC01805_Faelyn_Goldleaf_the_Wanderer]]
- [[NPC_Relationship_Web.png_1 (03_People)]]
- [[NPC01568_Lyanna_Winterborn_the_Strong]]
- [[NPC01286_Xander_Proudmore_the_Bold]]
- [[Measurement_Guide_Depth_and_Pressur]]
- [[NPC01082_Fiora_Ashford_the_Fallen]]
- [[NPC00129_Gareth_Jadeclaw]]
- [[NPC00785_Ysara_Grimholt_the_Mystic]]
- [[NPC00838_Drusilla_Proudmore_the_Risen]]
- [[NPC00260_Wynne_Underhill_the_Fallen]]
- [[NPC01974_Thalia_Zephyrblade_the_Lost]]
- [[01 Introduction Welcome to Adventure]]
- [[Session_Recaps]]
- [[NPC01447_Baelor_Winterborn_the_Strong]]
- [[NPC01827_Kaelen_Ironforge_the_Seeker]]
- [[05 Personality and Background]]
- [[12 Spells]]
- [[NPC01660_Thalia_Moonshadow_the_Fallen]]
- [[NPC01463_Aeliana_Zephyrblade_the_Fallen]]
- [[Basic_Rules]]
- [[Downtime_Activities]]
- [[Quick_Start_Guide]]
- [[Player_Feedback_Form.md]]
- [[MASTER_MOC]]
- [[MOC_Locations]]
-

## Game Mechanics
- **Combat**: See ACX p.189-198

## D&D 5e References

*(Combat rules: ACX p.189-198)*
*(Attack rolls: ACX p.194)*
*(Damage & Healing: ACX p.196-197)*

## Connections

- Parallels [[Aetherite]]
- Related: [[Clerics of Thalassa]]
- Requires [[LOC00249_Planes_Location_250]]
- See also: [[Assets Locations Location City Coral Vortextrader V1 Coral Vortextrader.svg]]
- Affected by [[step_034 (phase_030)]]
- Affected by
- Compare with [[Assets Locations Location City Underwater Religious Practices Underwater Religious Practices.svg]]
- Compare with [[LOC00213_Wilderness_Location_214]]
- See also: [[The Anonymous Accords 2]]
- Affected by [[Island of Scream 2]]
- Compare with [[Bullseye Lantern Xphb]]
- Originates from [[step_033 (phase_059)]]
- See also: [[Assets Handouts Handout Handout Guild License Certificate V3 Guild License Certificate.png]]
- Parallels [[list-spells-races-aasimar-xphb (lists)]]
- Parallels [[step_005 (phase_092)]]
- Requires [[primal-savagery-xge (spells)]]
- Related: [[step_096 (phase_052)]]
- Connects to [[step_078 (phase_035)]]
- Parallels [[physical-variations-yuan-ti-scale-color-vgm (tables)]]
- Connects to
- Affected by [[step_051 (phase_010)]]
- Requires [[Wind Song Linguistic Guide (Lore)]]
- Leads to [[Void-Echo Silence Deafmake]]
- Leads to [[Artificer-General Magnus Gemheart]]
- Related: [[phantom-steed-xphb (spells)]]
- Requires [[LOC00241_Dungeons_Location_242]]
- Parallels [[step_034 (phase_075)]]
- Influences [[LOC00149_Planes_Location_150]]
- Leads to [[Session 10 - Diplomatic Immunity]]
- Connects to [[Deputy Inspector Crystal-Flow Maria 2]]
- Related: [[2-monsters-a-to-z (monster-manual-2025)]]
- Requires [[The Infinite Spiral]]
- Affected by [[LOC00146_Dungeons_Location_147]]
- Connects to
- Affected by [[Portrait NPC Lady Cordelia Windham V2 Lady Cordelia Windham.svg]]
- Connects to [[Echo Resident Sam]]
- Requires [[Eastern Kingdom]]
- Leads to [[Chief Inspector Magnus Ledgerkeep 2]]
- Connects to [[step_085 (phase_032)]]
- Leads to [[Drill Sergeant Discipline]]
- Related: [[legend-lore-xphb (spells)]]
- Parallels [[NPC01969_Cedric_Ironforge_the_Lost]]
- Originates from [[Funeral Directors Guild (Guilds)]]
- Requires
- Parallels [[Democratic Erosion]]
- Leads to [[#People]]
- Related: [[The Memory Synthesis]]
- Originates from [[NPC01693_Kaelen_Crystalbrook_the_Risen]]
- See also: [[deathlock-wight-mpmm (undead)]]
- Influences [[Location City Pressure Tube System Pressure Tube System.svg]]
- Compare with [[Quandrix Student Scc]]
- Connects to [[Age of Skybound Empires]]
- See also: [[ENC00267_Social_Encounter_268]]
- Connects to
- Affected by [[Assets Handouts Handout Handout Guild License Certificate Guild License Certificate.png]]
- Influences [[woodcarvers-tools-xphb (items)]]
- Compare with [[comprehensive_npc_network_analysis]]
- See also: [[NPC00299_Aeliana_Keenblade_the_Bold]]
- Influences [[LOC00271_Towns_Location_272]]
- Parallels [[creature-creature-murgaxor-scc-v3-murgaxor-scc.png]]
- Compare with [[human-names-chinese-female-xge (tables)]]
- Affected by [[LOC00067_Dungeons_Location_68]]
- Connects to [[SPELL00023_Divine_Spell_24]]
- Related: [[Initiate Shadow-Walker (D&D_References)]]
- Influences [[building-your-own-traps-building-a-trap-xdmg (tables)]]
- Connects to [[Border Fortresses 2]]
- Leads to [[step_072 (phase_048)]]
- Influences [[step_068 (phase_079)]]
- See also: [[LORE00292_Prophecies_Entry_293]]
- Affected by [[NPC01747_Zephyr_Goldleaf_the_Swift]]
- See also: [[Portrait NPC the Harmony Collective the Harmony Collective.svg_1 (Portraits)]]
- Parallels [[Swarm of Stirges Xmm]]
- Requires [[step_054 (phase_070)]]
- Affected by [[ITEM01215_Lesser_Elixir_of_Swiftness]]
- Compare with [[Surgeon Shadow-Touched 2]]
- Requires [[Political Alliances (D&D_References)]]
- See also: [[Memory Pearls (D&D_References)]]
- Connects to [[QUEST00247_Side_Quest_248]]
- Affected by [[step_017 (phase_084)]]
- See also: [[hat-of-wizardry-xdmg (items)]]
- Connects to [[step_069 (phase_063)]]
- Influences [[step_082 (phase_093)]]
- Related: [[LORE00287_Prophecies_Entry_288]]
- Originates from [[step_025 (phase_017)]]
- Compare with [[step_067 (phase_014)]]
- Compare with
- Leads to [[LOC00078_Cities_Location_79]]
- Originates from [[Faction Balance Maintenance (Operations)]]
- Parallels [[International Academic Exchange 2]]
- Affected by [[Cross-Realm Democracy]]
- See also: [[NPC01129_Xander_Stormwind_the_Wanderer]]
- See also: [[Crystal Corruption Taboos (Lore)]]
- Influences [[Assets Art Martha Hillbrook.png]]
- Parallels [[pan-flute-xphb (items)]]
- Requires [[Medical Combat Manual]]
- Influences [[QUEST00157_Personal_Quest_158]]
- Related: [[EVENT00030_Political_Event_31]]
- Connects to [[Ancestor Memorial Spaces 2]]
- Influences [[02_Worldbuilding_Factions_The_Tide_Singers]]
- Influences [[Temple of Perpetual Tides (D&D_References)]]

## Visual References
![[04_Resources/maps/world_assets_locations_location_city_nautilus_threadmender_v1_nautilus_threadmender_svg_gm.png]]
![[04_Resources/maps/world_nautilus_threadmender_gm.png]]
![[04_Resources/maps/world_assets_locations_location_city_nautilus_threadmender_nautilus_threadmender_svg_player.png]]
