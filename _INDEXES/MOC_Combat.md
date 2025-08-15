-tags: [moc, index, combat]ex]
created: 2025-08-15
---

# Combat Index

> Central hub for all Combat content

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

> [!warning] ⚠️ Warning
> Important safety or rule information

## See Also
- [[Related_Content]]


## Game Mechanics
- **Combat**: See PHB p.189-198


## Thematic Connections
- Tactical combat using [[Combat Maneuvers]]
- Environmental hazards from [[Battlefield Terrain]]
- Victory conditions beyond [[Death and Dying]]

## D&D 5e References

*(Combat rules: PHB p.189-198)*
*(Attack rolls: PHB p.194)*
*(Damage & Healing: PHB p.196-197)*

## Connections

- Leads to [[Dr Aquarius Brightwater]]
- Compare with [[step_050 (phase_020)]]
- Influences [[handout-handout-docking-permit-docking-permit.png]]
- Related: [[02_Worldbuilding_Places_Thalassopolis_Ruins]]
- Compare with [[Research Director Past Future (D&D_References)]]
- See also: [[step_011]]
- Affected by [[NARRATIVE_DEEPENING_MASTER_PROMPT]]
- See also: [[Keeper of Secrets Whisper Darkhold]]
- Affected by [[Pressure's End]]
- Compare with [[Deep Current Pirates]]
- Originates from [[Assets Locations Location City Doctor Silas Voidtouch Doctor Silas Voidtouch.svg]]
- Originates from [[Instructor Combat Shadow]]
- See also: [[portrait-npc-the-wake-v1-the-wake.svg_1 (Portraits)]]
- Originates from [[X-103_Leviathan_Mirror_Chase]]
- Related: [[step_016 (phase_071)]]
- Related: [[SPELL0005_Celestial_Bolt]]
- Leads to [[University Philosophy Departments]]
- Originates from [[SPELL00005_Divine_Spell_6]]
- Requires [[Portrait NPC Sacred Healing Gardens Sacred Healing Gardens.svg]]
- Connects to [[Artificer (D&D_References)]]
- Compare with [[QUEST00171_Personal_Quest_172]]
- Related: [[MON00087_Constructs_Creature_88]]
- Affected by [[step_005]]
- Connects to [[LORE0040_History_of_the_First_King]]
- Connects to [[Shadow Surgeons Collective]]
- Affected by [[NPC00369_Alaric_Goldleaf_the_Wanderer]]
- Parallels [[ITEM00734_Divine_Mirror_of_Destiny]]
- Originates from [[jakarions-staff-of-frost-cos (items)]]
- Influences [[step_046 (phase_076)]]
- Originates from [[QUEST00044_Personal_Quest_45]]
- Originates from [[Cultist Leader Depth]]
- Leads to [[step_043 (phase_008)]]
- Affected by [[step_072 (phase_092)]]
- Leads to [[step_028 (phase_086)]]
- Affected by [[Assets Locations Location City the Vote Vault Mystery the Vote Vault Mystery.svg]]
- See also: [[The Umbral Community Center]]
- Affected by [[Tower of Echoes (D&D_References)]]
- Affected by [[Assets Locations Location City Ancient Treasury of Tides V1 Ancient Treasury of Tides.svg]]
- Leads to [[step_082 (phase_037)]]
- Influences [[Concierge Phillip Gracewater (D&D_References)]]
- Connects to [[step_092 (phase_079)]]
- Connects to [[ioun-stone-absorption-xdmg (items)]]
- Leads to [[ITEM0109_Forgotten_Gauntlet_of_the_Dawn]]
- Influences [[Information Broker Whisper Goldtongu (D&D_References)]]
- Parallels [[Goldwave Manor 3 (D&D_References)]]
- Related: [[step_068 (phase_015)]]
- Requires [[rewards]]
- Affected by [[DM Screen]]
- Leads to [[Lumengarde Republi]]
- Compare with [[step_027 (phase_060)]]
- Leads to [[QUEST00006_Main_Quest_7]]
- Related: [[Location City Foreign Affairs V1 Foreign Affairs.svg]]
- Leads to [[NPC00161_Qadim_Winterborn]]
- Compare with [[step_019 (phase_067)]]
- Requires [[Portrait NPC Sunk... Connected To: Regional Politics and Trade Related Locations: Nearby Settlements]]
- Influences [[step_059 (phase_092)]]
- Influences [[step_078 (phase_073)]]
- See also: [[agonizing-blast-xphb (optional-features)]]
- Requires [[Blink Xphb]]
- Influences [[Symbol Heraldry Factional Conflicts Factional Conflicts.svg_1 (Symbols)]]
- Affected by [[Shadow_Separation_Syndrome]]
- Connects to [[Protocol Specialist Sarah Ceremonial (D&D_References)]]
- Influences [[LORE00075_Prophecies_Entry_76]]
- Related: [[step_028 (phase_089)]]
- Originates from [[step_022 (phase_094)]]
- Affected by [[QUEST00045_Personal_Quest_46]]
- Requires [[step_067 (phase_030)]]
- Connects to [[Assets Locations Location City Exotic Imports Market V1 Exotic Imports Market.svg]]
- Requires [[Location City Keeper Stormwall V1 Keeper Stormwall.svg]]
- Originates from [[step_084 (phase_018)]]
- Influences [[The Seven Shards Prophecy]]
- Originates from [[Embassy Quarter]]
- Requires [[devouring-blade-xphb (optional-features)]]
- Originates from [[Master Tidal Engineer Coral Wavewright (D&D_References)]]
- Originates from [[Archmage Velina Duskweaver]]
- Requires [[Scepter of Tidal Command (D&D_References)]]
- Requires [[ENC00284_Combat_Encounter_285]]
- Affected by [[ENC00080_Combat_Encounter_81]]
- Related: [[ENC00081_Combat_Encounter_82]]
- Related: [[ENC00031_Social_Encounter_32]]
- See also: [[LORE00292_Prophecies_Entry_293]]
- Connects to [[QUEST00185_Side_Quest_186]]
- Compare with [[Wand of Fireballs Xdmg]]
- See also: [[step_088 (phase_028)]]
- Requires [[Finn Goodtide]]
- Originates from [[QUEST00071_Personal_Quest_72]]
- Originates from [[Artisan Collective]]
- Parallels [[LORE00007_Legends_Entry_8]]
- Originates from [[step_021 (phase_090)]]
- Connects to [[ITEM00001_Venomous_Dagger_of_the_Ancients]]
- Leads to [[QUEST00057_Personal_Quest_58]]
- See also: [[step_066 (phase_075)]]
- Leads to [[NPC01059_Dara_Goldleaf_the_Wise]]
- Connects to [[Cleric Xphb War Domain Xphb]]
- Related: [[Terrestrial Coalition (D&D_References)]]
- Influences [[The Echo Chambers]]
- Originates from [[tiefling-baalzebul-mtf (races)]]
- Requires [[International Law Enforcement]]
- Compare with [[Crystal Festival (D&D_References)]]
- Influences [[monsters-by-habitat-mountain-monsters-xmm (tables)]]