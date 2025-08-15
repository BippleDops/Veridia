-tags: [moc, index, combat]ex]
created: 2025-08-15
---

# [[locations|Locations]] Index

> Central hub for all Locations content

## Quick Links
- [[MASTER_MOC|← Back to Master]]

## Content
*Building index...*



> [!dm] DM Note
> This location connects to the main plot


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
## See Also
- [[Related_Content]]


## Game Mechanics
- **Combat**: See PHB p.189-198


## D&D 5e References

*(Combat rules: PHB p.189-198)*
*(Attack rolls: PHB p.194)*
*(Damage & Healing: PHB p.196-197)*

## Connections

- Parallels [[portrait-npc-the-tidecaller-v1-the-tidecaller.svg_1 (Portraits)]]
- Affected by [[All NPCs]]
- See also: [[step_092 (phase_042)]]
- Related: [[Artificer-General Magnus Gemheart]]
- Leads to [[NPC01228_Brenna_Crystalbrook_the_Scholar]]
- Related: [[step_066 (phase_045)]]
- Related: [[The Crystal Renaissance 2]]
- Affected by [[Depth Enforcers]]
- Compare with [[ITEM00327_Shadow_Dagger_of_Slaying]]
- Compare with [[QUEST0070_The_Sacred_Heir]]
- Leads to [[ochre-jelly-xmm]]
- Requires [[step_035 (phase_053)]]
- Related: [[Magister Voidheart]]
- Leads to [[step_023 (phase_078)]]
- Parallels [[Assets Locations Location City Pressure Brewing Technology Pressure Brewing Technology.svg]]
- Compare with [[step_092]]
- Connects to [[step_035]]
- Originates from [[NPC00493_Lyanna_Proudmore_the_Wanderer]]
- See also: [[LORE00164_Prophecies_Entry_165]]
- See also: [[arcane-eye-xphb (spells)]]
- Connects to [[Location City Freedrift Network V1 Freedrift Network.svg]]
- Parallels [[00_Indexes_Documentation]]
- Parallels [[LORE00247_Prophecies_Entry_248]]
- Requires [[step_095 (phase_093)]]
- Leads to [[Assets Locations Location City Acolyte Sister Tidal Deepfaith Acolyte Sister Tidal Deepfaith.svg]]
- Originates from [[LORE00027_Prophecies_Entry_28]]
- See also: [[Princess Luminara (D&D_References)]]
- See also: [[ITEM00923_Pure_Elixir_of_Clarity]]
- Influences [[step_045 (phase_045)]]
- Requires [[Void Realm Territories]]
- Affected by [[Portrait NPC Find the Shadow Cure V2 Find the Shadow Cure.svg_1 (Portraits)]]
- Compare with [[LOC00245_Planes_Location_246]]
- Influences [[QUEST00029_Side_Quest_30]]
- See also: [[Vehicle Ship Coral Frame Diver Tender V1 Coral Frame Diver Tender.svg]]
- Related: [[Location City the Banker Fish V1 the Banker Fish.svg]]
- Leads to [[air-elemental-xmm (elemental)]]
- Requires [[Unified Mechanics Guide (D&D_References)]]
- Originates from [[step_083 (phase_033)]]
- Related: [[LOC00242_Wilderness_Location_243]]
- Influences [[venomous-snake-xmm]]
- Requires [[Madame Pearl Currentflow (D&D_References)]]
- See also: [[Assets Locations Location City Constitutional Monarchy V1 Constitutional Monarchy.svg]]
- Parallels [[MON00133_Constructs_Creature_134]]
- Compare with [[Festival Calendar Complete]]
- Parallels [[step_012 (phase_056)]]
- Compare with [[earthbind-xge (spells)]]
- Parallels [[dungeon-creator-cults-and-religions (tables)]]
- Originates from [[Corruption Tracking]]
- Leads to [[MON00136_Aberrations_Creature_137]]
- Compare with [[step_090 (phase_007)]]
- Requires [[Ersatz Eye Xdmg]]
- Affected by [[Unicorn Xmm (legendary-group)]]
- Leads to [[Luminous Sterling 2]]
- Originates from [[QUEST00249_Personal_Quest_250]]
- Connects to [[Assets Locations Location City the Phosphor Markets V1 the Phosphor Markets.png]]
- Requires [[MON00043_Undead_Creature_44]]
- Requires [[11 Chapter 11 Gravenhollow]]
- Connects to [[ITEM00919_Superior_Salve_of_Vigor]]
- Parallels [[ITEM01059_Lesser_Elixir_of_Vigor]]
- Requires [[Location City Whisper Translation Whisper Translation.svg]]
- Compare with [[Portrait NPC Jasper Three Eyes Flint 2 Jasper Three Eyes Flint 2.svg]]
- Connects to [[Progressive Movement Infiltration 2]]
- Parallels [[LORE00188_Prophecies_Entry_189]]
- Related: [[step_058 (phase_056)]]
- Affected by [[Shadow Enhancement Elixirs]]
- Compare with [[Inter-Realm Trade Protocol 2]]
- Influences [[The Academy of Fundamental Truths]]
- Related: [[step_018 (phase_010)]]
- Related: [[Aquatic Biology Laboratory]]
- Connects to [[Living the Giant Life Giant Life Spans Vgm]]
- Related: [[Memory Pearls]]
- Leads to [[Crystal Palace Complex (D&D_References)]]
- Parallels [[step_013 (phase_060)]]
- Related: [[hide-armor-xphb (items)]]
- See also: [[step_076 (phase_076)]]
- Parallels [[sailing-ship-xphb (items)]]
- Leads to [[Paladin Xphb Oathbreaker Dmg]]
- Influences [[QUEST00093_Personal_Quest_94]]
- See also: [[step_077 (phase_019)]]
- See also: [[Paradox Traps]]
- Originates from [[Location City Merchant Prince Goldwind Crysalborn V1 Merchant Prince Goldwind Crysalborn.svg]]
- Requires [[NPC_Template_1 (09_Templates)]]
- Influences [[Duergar in the World Duergar Quirks Mtf]]
- Influences [[Locations Abyssal Forges]]
- Originates from [[step_008 (phase_066)]]
- Compare with [[step_016]]
- Parallels [[Diplomatic Minister Reef (D&D_References)]]
- See also: [[ENC00073_Combat_Encounter_74]]
- Leads to [[LOC00011_Wilderness_Location_12]]
- See also: [[step_027]]
- Compare with [[step_079]]
- Originates from [[Voices from Below (D&D_References)]]
- See also: [[ITEM00716_Ancient_Orb_of_Destiny]]
- Parallels [[Abyssos Prime Upper Districts (D&D_References)]]
- Parallels [[step_023 (phase_076)]]
- Parallels [[chamber-purpose-dungeon-maze (tables)]]
- See also: [[QUEST00461_Side_Quest_462]]
- Connects to [[The Hammer Squad]]
- Leads to [[swarm-of-bats-xmm (beast)]]
- Related: [[Portrait NPC the Shadow Warren V2 the Shadow Warren.svg]]