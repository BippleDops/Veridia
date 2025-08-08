---
cssclasses:
  - dashboard-wide
  - modern-cards
tags:
  - dashboard
  - master
  - campaign
type: dashboard
created: 2025-08-08
---

# 🎭 Master Campaign Dashboard
*Your complete TTRPG command center with integrated databases and 5e references*

## 🎲 Active Campaigns

> [!multi-column]
>
>> [!note|clean no-t]
>> ### 🌍 Aethermoor
>> **Current Week**: 3 of Crystal Plague
>> **Party Level**: 3-5
>> **Latest Session**: [[01_Campaigns/Aethermoor/Sessions/Session 10 The Deep Mother Rises]]
>> **Crisis Level**: 🔴 Critical
>> 
>> **Next Session Prep**:
>> - World convergence accelerating
>> - Queen's possession 70% complete
>> - Crystal Festival in 4 weeks
>> - Deep Mother awakening
>
>> [!note|clean no-t]
>> ### 🌊 Aquabyssos
>> **Depth**: 1,000-3,000 ft
>> **Party Adaptation**: Stage 2
>> **Latest Session**: [[01_Campaigns/Aquabyssos/Sessions/Session 10 - The Shadow Finale]]
>> **Parliament Vote**: 2 weeks
>> 
>> **Next Session Prep**:
>> - Shadow independence vote
>> - Memory tide approaching
>> - Senator Glaucus split revealed
>> - Convergence zones expanding

---

## 📊 Database Command Center

### 🧑 NPCs & Characters
`EMBED[NPC Directory.base][Active NPCs]`

> [!column|no-i flex]
> 
>> [!tip|clean no-t min-w]
>> **Quick Stats**
>> - Total NPCs: 92
>> - With 5e Stats: 78%
>> - Active Threats: 12
>> - Quest Givers: 18
>
>> [!warning|clean no-t min-w]
>> **Attention Needed**
>> - Missing statblocks: 14
>> - No faction assigned: 8
>> - Location unknown: 5

### 🏰 Locations & Maps
`EMBED[Location Tracker.base][Quest Hubs]`

### ⚔️ Combat & Initiative
`EMBED[Combat Tracker.base][Initiative Tracker]`

---

## 📅 Campaign Timeline

### Recent Sessions
`EMBED[Session Log.base][Recent Sessions]`

### Major Events This Campaign
`EMBED[Session Log.base][Campaign Timeline]`

### Session Summaries

```dataview
TABLE
  file.link as "Session",
  date as "Date",
  primary_location as "Primary Location",
  length(npcs_met) as "NPCs",
  length(quests_started) as "New Quests",
  length(quests_completed) as "Completed"
FROM "01_Campaigns"
WHERE contains(tags, "session")
SORT (date ?? file.mtime) desc
LIMIT 5
```

---

## 🎯 Quest Management

### Active Quests
`EMBED[Quest Campaign Tracker.base][Active]`

### Quest Completion Progress
> [!column|no-i]
>
>> **Aethermoor Quests**
>> - [ ] Find the Seven Shards (2/7)
>> - [ ] Save Queen Seraphina
>> - [ ] Stop Crystal Festival Ritual
>> - [ ] Investigate Lighthouse
>
>> **Aquabyssos Quests**
>> - [ ] Expose Parliament Conspiracy
>> - [ ] Unite Senator Glaucus
>> - [ ] Navigate Memory Tide
>> - [ ] Find Scattered Emperor

---

## 👥 Character Status

> [!note]
> Active characters and their latest updates

```dataview
TABLE
  file.link as "Character",
  level,
  class,
  status,
  file.mtime as "Last Updated"
FROM "07_Player_Resources/Character_Sheets"
SORT file.mtime desc
LIMIT 12
```

```dataview
TABLE
  file.link as "Character",
  level,
  class,
  status,
  file.mtime as "Last Updated"
WHERE contains(tags, "pc") OR contains(tags, "PC")
SORT file.mtime desc
LIMIT 12
```

---

## 🗓️ Upcoming Events & Sessions

### Scheduled Sessions

```dataview
TABLE file.link as "Session", date
FROM "01_Campaigns"
WHERE contains(tags, "session") AND date >= date(today)
SORT date asc
LIMIT 5
```

> [!tip] Add upcoming in-world events
> Create notes with `event_date: YYYY-MM-DD` in frontmatter to populate this table.

```dataview
TABLE file.link as "Event", event_date as "Date", event_location as "Location"
WHERE event_date AND event_date >= date(today)
SORT event_date asc
LIMIT 10
```

---

## 🏛️ Faction Politics

### Faction Power Rankings
`EMBED[Faction_Tracker.base][Power Rankings]`

### Party Standing
`EMBED[Faction_Tracker.base][Party Standing]`

---

## 💎 Items & Equipment

### Party Inventory
`EMBED[Item_Catalog.base][Party Inventory]`

### Available Magic Items
`EMBED[Item_Catalog.base][Magic Items]`

---

## 🔗 Resource Quick Links

> [!abstract]
> Frequently used references

- 5e DM Screen (2014): [[03_Rules_Reference/Quick_Reference/DnD5e-DM Screen-2014]]
- 5e Side Screen (2024): [[03_Rules_Reference/Quick_Reference/DnD5e-SideScreen-2024]]
- Scene Framing: [[06_GM_Resources/Scene Framing Templates]]
- Aquabyssos Random Encounters: [[04_Resources/Random_Tables/Aquabyssos Random Encounter Tables]]
- Rumors: [[04_Resources/Random_Tables/Abyssos Prime Rumor Tables]]
- NPC Quick Reference: [[06_GM_Resources/NPC Quick Reference Guide]]

### Visuals
- 🧭 Relationship Diagram: [[z_Assets/Canvas/Relationship_Graph.canvas]]

---

## 📖 5e Integration Status

### Content Coverage
| Category | Files | 5e Linked | Coverage |
|----------|-------|-----------|----------|
| NPCs | 92 | 71 | 77% ✅ |
| Monsters | 45 | 42 | 93% ✅ |
| Items | 38 | 30 | 79% ✅ |
| Spells | 25 | 25 | 100% ✅ |
| Locations | 88 | 52 | 59% ⚠️ |

### Reference Books Used
- ✅ Player's Handbook (PHB)
- ✅ Dungeon Master's Guide (DMG)
- ✅ Monster Manual (MM)
- ✅ Volo's Guide to Monsters
- ✅ Xanathar's Guide to Everything
- ⚠️ Mordenkainen's Tome of Foes (partial)

---

## 🎬 Quick Actions

> [!column|no-i flex]
>
>> [!example|clean no-t]
>> ### Session Management
>> - 📝 New Session
>> - 🎯 Prep Next Session
>> - 📊 Timeline_Tracker.base
>> - 📜 [[Session Log.base]]
>
>> [!todo|clean no-t]
>> ### Content Creation
>> - 🧑 Create NPC
>> - 📍 New Location
>> - ⚔️ Design Quest
>> - 💎 [[Item Template|Create Item]]
>
>> [!info|clean no-t]
>> ### References
>> - 📚 [[_5E_CONNECTIONS|5e Mappings]]
>> - 🌍 [[_WORLD_SUMMARY|World Lore]]
>> - 🎭 [[_AI_CONTEXT|Campaign Themes]]
>> - ❓ [[_QUERY_HELPER|Help Guide]]

>> [!example|clean no-t]
>> ### Phase 8–9 Utilities
>> - 🗺️ Map Template: [[05_Templates/Template-Leaflet-Map]]
>> - 🗺️ Aquabyssos Map Demo: [[04_Resources/Maps/Aquabyssos_World_Map]]
>> - 🎲 Generators: [[04_Resources/Random_Tables/Encounter_and_Loot_Generators]]

>> [!example|clean no-t]
>> ### Maintenance
>> - 🔧 Run Agent Setup: [[08_Automation/Run Agent Setup]]
>> - 📄 Latest Agent Report: [[_AGENT_SETUP_REPORT.md]]
>> - ⚙️ QuickAdd Macros: [[08_Automation/Configs/QuickAdd/macros.json]]
>> - 🗄️ Archive Suggestions: See section in latest agent report
>> - 📦 Auto Note Mover Rules: [[08_Automation/Configs/AutoNoteMover/rules.json]]
>> - 🗃️ Auto Archive Rules: [[08_Automation/Configs/AutoArchive/rules.json]]
>> - 🔨 Aggressive Archive Button (QuickAdd):
>>
>> ```button
>> name Aggressive Archive
>> type command
>> action quickadd:choice:Aggressive Archive Sweep
>> ```
>> ```button
>> name Lint All Notes
>> type command
>> action quickadd:choice:Lint All Notes
>> ```
>>
>> Configure QuickAdd → Choices → ensure a choice named "Aggressive Archive Sweep" exists (provided at `08_Automation/Configs/QuickAdd/choices.json`). Map the Button’s command to run that choice if needed.

---

## 📈 Campaign Metrics

### Story Progress
```chart
type: bar
labels: [Setup, Investigation, Revelation, Convergence, Resolution]
series:
  - title: Aethermoor
    data: [100, 100, 100, 75, 10]
  - title: Aquabyssos
    data: [100, 100, 80, 60, 5]
```

### World State
| Metric | Aethermoor | Aquabyssos |
|--------|------------|------------|
| Stability | 65% ⚠️ | 45% 🔴 |
| Corruption | 35% 📈 | 55% 📈 |
| Party Influence | Moderate | High |
| Time Pressure | 4 weeks | 2 weeks |
| Faction Tension | Critical | Extreme |

---

## 🔍 System Validation

### Database Health
- ✅ All 15 databases functional
- ✅ 5e references integrated
- ✅ Links validated
- ✅ Calculations working
- ⚠️ Large datasets may need pagination

### Recent Changes
- ✅ Phase 2 cleanup complete
- ✅ File naming standardized
- ✅ Databases consolidated
- ✅ 5e integration added
- 🔄 Ongoing content additions

---

## 🚀 Quick Links

### Campaign Overviews
- [[01_Campaigns/Aethermoor/Aethermoor Campaign Overview]]
- [[01_Campaigns/Aquabyssos/Aquabyssos Campaign Overview]]

### Key NPCs
- [[01_Campaigns/Aethermoor/NPCs/Queen Seraphina Lumengarde]]
- [[01_Campaigns/Aethermoor/NPCs/Marina-Red-Tide-Coralheart]]
- [[01_Campaigns/Aquabyssos/NPCs/Senator Glaucus]]
- [[01_Campaigns/Aethermoor/NPCs/Captain Lyanna Brightshield]]

### Critical Locations
- [[01_Campaigns/Aethermoor/Locations/Port Meridian]]
- [[01_Campaigns/Aquabyssos/Locations/Abyssos Prime]]
- [[01_Campaigns/Aquabyssos/Lore/The Lighthouse of Storms]]
- [[01_Campaigns/Aquabyssos/Locations/Parliament of Echoes]]

### Active Threats
- Crystal Plague Spreading
- Queen's Possession
- Shadow Parliament Vote
- Deep Mother Awakening
- Dimensional Convergence

---

## 📝 DM Notes & Reminders

> [!warning]
> ### Next Session Priorities
> 1. Address most urgent player goal
> 2. Advance one major threat
> 3. Reveal one mystery element
> 4. Present impossible choice
> 5. Foreshadow future crisis

> [!tip]
> ### Remember
> - No perfect solutions exist
> - NPCs have independent agendas
> - Time continues during rests
> - Consequences cascade
> - Both worlds are "real"

---

*Dashboard powered by Obsidian Bases v1.9.7 with comprehensive 5e integration*
*Last updated: 2025-08-08*