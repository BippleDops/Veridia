---
title: Master Campaign Index
type: Lore
status: complete
tags:
- both
- complete
- index
- lore
- master-control
- navigation
created: '2025-08-11'
world: Both
updated: '2025-08-13T01:18:31.093054+00:00'
---




# Master Campaign Index
*Complete Navigation System for Aquabyssos & Aethermoor*

See also: [[03_Mechanics/Phase_Omega_Enhanced_Index|Phase Omega Enhanced Index]]

## 🎮 Control Centers

### Existing Dashboards & Trackers
- [[DM Board]] - Quick creation buttons and party overview
- [[Quest Campaign Tracker]] - Comprehensive quest management
- [[Faction_Tracker]] - Faction relationship tracking
- [[Session Log]] - Session history and notes
- [[02_Worldbuilding/Lore/NPC Directory.base]] - Complete NPC management
- [[Combat Tracker]] - Battle management
- [[Location Tracker]] - Place tracking system
- [[Item_Catalog]] - Equipment and treasure
- [[Spell Compendium]] - Magic reference

### New Integrated Systems
- [[Campaign_Dashboard]] - High-level campaign overview
- [[Complete Pressure Adaptation System]] - Full transformation mechanics
- [[Complete Faction Warfare System]] - Political warfare rules
- [[Complete Reality Merger System]] - Dimensional mechanics
- [[03_Mechanics/Vehicles/Vehicles_Index|Vehicle Systems Index]] - Aquatic, aerial, and merger vessels

## 📚 Content by Category

### 🌍 Worldbuilding (02_Worldbuilding/)
```dataview
TABLE WITHOUT ID
  length(filter(file.inlinks, (x) => contains(x.file.folder, "02_Worldbuilding"))) AC "Links",
  status AC "Status",
  file.mtime AC "Modified"
FROM "02_Worldbuilding"
WHERE status = "complete"
SORT file.mtime DESC
LIMIT 10
```

#### Quick Access by Type
- **People** ([[02_Worldbuilding/People]]) - 159 entries (28 complete)
- **Places** ([[02_Worldbuilding/Places]]) - 367 entries (38 complete)
- **Groups** ([[02_Worldbuilding/Groups]]) - 56 entries (14 complete)
- **Lore** ([[02_Worldbuilding/Lore]]) - 255 entries (7 complete)
- **Items** ([[02_Worldbuilding/Items]]) - 7 entries (100% complete)
- **Quests** ([[02_Worldbuilding/Quests]]) - 51 entries (86% complete)

### ⚙️ Mechanics (03_Mechanics/)
```dataview
TABLE WITHOUT ID
  file.link AC "System",
  status AC "Status",
  contains(tags, "complete") AC "Ready"
FROM "03_Mechanics"
WHERE !contains(file.name, "CLI")
AND status = "complete"
SORT file.name ASC
```

#### Core Systems
**Environmental**:
- [[Aquabyssos Survival Mechanics]] - Underwater survival
- [[Depth Adaptation System]] - Transformation mechanics
- [[Crystal Plague Mechanics]] - Corruption system

**Social/Political**:
- [[Faction Standing System]] - Reputation tracking
- [[NPC Reactions]] - Social mechanics
- [[Political Maneuvering]] - Intrigue rules

**Combat/Action**:
- [[Underwater Combat Rules]] - 3D combat
- [[Pressure Combat Modifiers]] - Environmental effects
- [[Mass Combat Resolution]] - Large battles

**Reality/Horror**:
- [[Reality Merger Mechanics]] - Dimensional rules
- [[02_Worldbuilding/Quests/Aquabyssos]] - Madness tracking
- [[Memory Absorption Rules]] - Memory mechanics

### 📁 Resources (04_Resources/)

#### Visual Assets
- **Maps**: [[04_Resources/Maps]] - World and region maps
- **Character Art**: [[04_Resources/Assets/npcs]] - NPC portraits
- **Location Art**: [[04_Resources/Assets/locations]] - Place imagery
- **Items**: [[04_Resources/Assets/items]] - Equipment visuals

#### Tables & Generators
- [[Random Encounter Tables]] - Comprehensive encounters
- [[Random Encounter Tables - Aquabyssos]] - Underwater specific
- [[Aquabyssos Rumors]] - Information generation

#### Templates
- [[05_Templates]] - All template files
- [[Meta Bind Examples]] - Button and form templates
- [[Dataview Query Guide]] - Query references

### 👥 Player Resources (07_Player_Resources/)
- [[Player_Portal]] - Central player hub
- [[Quick_Start_Guide]] - New player introduction
- [[Character_Creation_Extended]] - Full character building
- [[Rules_Reference]] - Complete rules compilation
- [[World_Primer]] - Setting information
- [[Faction_Guide]] - Organization details

### 🎲 GM Resources (06_GM_Resources/)
- [[Campaign_Management_Guide]] - Campaign orchestration
- [[Encounter_Builder]] - Combat creation
- [[Session_Planning_Toolkit]] - Session preparation
- [[NPC Quick Reference Guide]] - NPC management
- [[Scene Framing Templates]] - Narrative tools

### 📖 Session Records (1-Session Journals/)

#### Aquabyssos Campaign
```dataview
LIST
FROM "1-Session Journals"
WHERE contains(file.name, "Aquabyssos")
SORT file.name ASC
```

#### Aethermoor Campaign
```dataview
LIST
FROM "1-Session Journals"
WHERE contains(file.name, "Aethermoor")
SORT file.name ASC
```

## 🔍 Quick Search Tools

### Find by Status
```dataview
TABLE WITHOUT ID
  file.link AC "File",
  type AC "Type",
  file.folder AC "Location"
FROM ""
WHERE status = "stub"
LIMIT 20
```

### Recently Modified
```dataview
TABLE WITHOUT ID
  file.link AC "File",
  file.mtime AC "Modified",
  status AC "Status"
FROM ""
WHERE file.mtime > date(today) - dur(7 days)
SORT file.mtime DESC
LIMIT 10
```

### Most Connected
```dataview
TABLE WITHOUT ID
  file.link AC "File",
  length(file.inlinks) AC "Incoming Links",
  length(file.outlinks) AC "Outgoing Links"
FROM "02_Worldbuilding"
WHERE status = "complete"
SORT length(file.inlinks) DESC
LIMIT 10
```

## 🎯 Campaign Progress Tracking

### Completion Status
- **Total Files**: 945+ in worldbuilding
- **Complete**: 176 (18.6%)
- **Stubs**: 594 (62.9%)
- **In Progress**: ~175 (18.5%)

### Priority Completion Areas
1. **Quests**: 86% complete ✅
2. **Items**: 100% complete ✅
3. **Core NPCs**: 28/159 complete ⚠️
4. **Key Locations**: 38/367 complete ⚠️
5. **Factions**: 14/56 complete ⚠️

### Session Progression
- **Total Sessions Planned**: 20 per campaign
- **Aquabyssos Complete**: 10/20
- **Aethermoor Complete**: 10/20
- **Convergence Point**: Session 15

## 🔗 Integration Points

### Cross-System References
Every major system connects to:
- [[02_Worldbuilding/Lore/Faction_Tracker]] - Live faction tracking
- [[Quest Campaign Tracker.base]] - Quest management
- [[NPC Directory.base]] - Character relationships
- [[Session Log.base]] - Historical record

### Data Flow
```
Player Actions → Session Log → 
  ↓
Faction Tracker → Quest Updates →
  ↓
NPC Reactions → World State →
  ↓
Reality Stability → Merger Events
```

## 🛠️ Maintenance Tools

### Vault Health Checks
- [[VAULT_COMPLETION_STATUS]] - Current completion metrics
- [[UNIFIED_VAULT_COMPLETION_GUIDE]] - Standards guide
- [[README_FUTURE_WORK]] - Technical maintenance

### Update Procedures
1. Run completion status check
2. Update faction standings
3. Process quest completions
4. Update NPC relationships
5. Check reality stability
6. Generate session prep

## 📊 Quick Stats Dashboard

```dataview
TABLE WITHOUT ID
  "📚 " + length(file.lists) AC "Total Files",
  "✅ " + length(filter(file.lists, (x) => x.status = "complete")) AC "Complete",
  "⚠️ " + length(filter(file.lists, (x) => x.status = "stub")) AC "Stubs",
  "🔄 " + length(filter(file.lists, (x) => x.status = "in-progress")) AC "Active"
FROM "02_Worldbuilding"
```

## 🎮 Quick Actions

### Session Prep
1. Check [[Session Log]] for last session
2. Update [[Faction_Tracker]] standings
3. Review [[Quest Campaign Tracker]] status
4. Check [[02_Worldbuilding/Lore/NPC Directory.base]] for active NPCs
5. Generate encounters with [[Encounter_Builder]]
6. Prepare scenes with [[Scene Framing Templates]]

### World Building
1. Use [[DM Board]] creation buttons
2. Follow [[05_Templates]] for consistency
3. Update relevant trackers
4. Cross-reference with existing content
5. Maintain completion status

### Player Management
1. Direct players to [[Player_Portal]]
2. Use [[Quick_Start_Guide]] for new players
3. Reference [[Rules_Reference]] for disputes
4. Track progress in [[Session Log]]

---

*This index integrates with all existing tracking systems while providing high-level navigation and oversight. Use in conjunction with specialized trackers for detailed management.*

## Cross-References

- [[Vault_Navigation_Hub]]
