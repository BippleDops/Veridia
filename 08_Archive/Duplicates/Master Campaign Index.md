---
created: '2025-08-11'
status: complete
tags:
- both
- complete
- content/lore
- index
- lore
- master-control
- navigation
- status/complete
- world/both
title: Master Campaign Index
type: Lore
updated: '2025-08-13T12:34:03.151422+00:00'
world: Both
timeline: current_era
chronology: active
updated: 2025-08-13T07:59:50.321845
---
# Master Campaign Index
*Complete Navigation System for Aquabyssos & Aethermoor*

See also: [[03_Mechanics/Phase Omega Enhanced Index]]

## 🎮 Control Centers

### Existing Dashboards & Trackers
- [[1-DM Toolkit/DM Board]] - Quick creation buttons and party overview
- [[02_Worldbuilding/Lore/Quest Campaign Tracker]] - Comprehensive quest management
- [[02_Worldbuilding/Lore/Faction Tracker]] - Faction relationship tracking
- [[02_Worldbuilding/Lore/Session Log]] - Session history and notes
- [[02_Worldbuilding/Lore/NPC Directory.base|02 Worldbuilding/Lore/NPC Directory.base]] - Complete NPC management
- [[02_Worldbuilding/Lore/Combat Tracker]] - Battle management
- [[02_Worldbuilding/Lore/Location_Tracker]] - Place tracking system
- [[02_Worldbuilding/Lore/Item Catalog]] - Equipment and treasure
- [[02_Worldbuilding/Lore/Spell Compendium]] - Magic reference

### New Integrated Systems
- [[Campaign_Dashboard|Campaign Dashboard]] - High-level campaign overview
- [[03_Mechanics/Complete Pressure Adaptation System]] - Full transformation mechanics
- [[03_Mechanics/Complete Faction Warfare System]] - Political warfare rules
- [[03_Mechanics/Complete Reality Merger System]] - Dimensional mechanics
- [[03_Mechanics/Vehicles - Vehicles Index]] - Aquatic, aerial, and merger vessels

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
- **People** ([[02_Worldbuilding/People|02 Worldbuilding/People]]) - 159 entries (28 complete)
- **Places** ([[02_Worldbuilding/Places|02 Worldbuilding/Places]]) - 367 entries (38 complete)
- **Groups** ([[02_Worldbuilding/Groups|02 Worldbuilding/Groups]]) - 56 entries (14 complete)
- **Lore** ([[02_Worldbuilding/Lore|02 Worldbuilding/Lore]]) - 255 entries (7 complete)
- **Items** ([[02_Worldbuilding/Items|02 Worldbuilding/Items]]) - 7 entries (100% complete)
- **Quests** ([[02_Worldbuilding/Quests|02 Worldbuilding/Quests]]) - 51 entries (86% complete)

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
- [[03_Mechanics/Aquabyssos Survival Mechanics]] - Underwater survival
- [[03_Mechanics/Depth Adaptation System]] - Transformation mechanics
- [[03_Mechanics/Crystal Plague Mechanics]] - Corruption system

**Social/Political**:
- [[03_Mechanics/Faction Standing System]] - Reputation tracking
- [[03_Mechanics/NPC Reactions]] - Social mechanics
- [[02_Worldbuilding/Lore/Political Maneuvering]] - Intrigue rules

**Combat/Action**:
- [[03_Mechanics/Underwater Combat Rules]] - 3D combat
- [[03_Mechanics/Pressure Combat Modifiers]] - Environmental effects
- [[Mass Combat Resolution]] - Large battles

**Reality/Horror**:
- [[02_Worldbuilding/Lore/Reality Merger Mechanics]] - Dimensional rules
- [[02_Worldbuilding/Places/Aquabyssos]] - Madness tracking
- [[03_Mechanics/Memory Absorption Rules]] - Memory mechanics

### 📁 Resources (04_Resources/)

#### Visual Assets
- **Maps**: [[04_Resources/Maps|04 Resources/Maps]] - World and region maps
- **Character Art**: [[04_Resources/Assets/npcs|04 Resources/Assets/npcs]] - NPC portraits
- **Location Art**: [[04_Resources/Assets/locations|04 Resources/Assets/locations]] - Place imagery
- **Items**: [[04_Resources/Assets/items|04 Resources/Assets/items]] - Equipment visuals

#### Tables & Generators
- [[02_Worldbuilding/Lore/Random Encounter Tables]] - Comprehensive encounters
- [[02_Worldbuilding/Lore/Random Encounter Tables - Aquabyssos]] - Underwater specific
- [[02_Worldbuilding/Lore/Aquabyssos Rumors]] - Information generation

#### Templates
- [[05_Templates|05 Templates]] - All template files
- [[02_Worldbuilding/Lore/Meta Bind Examples]] - Button and form templates
- [[02_Worldbuilding/Lore/Dataview Query Guide]] - Query references

### 👥 Player Resources (07_Player_Resources/)
- [[07_Player_Resources/Player Portal]] - Central player hub
- [[07_Player_Resources/Quick Start Guide]] - New player introduction
- [[07_Player_Resources/Character Creation Extended]] - Full character building
- [[07_Player_Resources/Rules Reference]] - Complete rules compilation
- [[07_Player_Resources/World Primer]] - Setting information
- [[07_Player_Resources/Faction Guide]] - Organization details

### 🎲 GM Resources (06_GM_Resources/)
- [[06_GM_Resources/Campaign Management Guide]] - Campaign orchestration
- [[06_GM_Resources/Encounter Builder]] - Combat creation
- [[06_GM_Resources/Session Planning Toolkit]] - Session preparation
- [[06_GM_Resources/NPC Quick Reference Guide]] - NPC management
- [[06_GM_Resources/Scene Framing Templates]] - Narrative tools

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
- [[02_Worldbuilding/Lore/Faction Tracker]] - Live faction tracking
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
- [[VAULT_COMPLETION_STATUS|VAULT COMPLETION STATUS]] - Current completion metrics
- [[02_Worldbuilding/Lore/Unified Vault Completion Guide]] - Standards guide
- [[02_Worldbuilding/Lore/Readme Future Work]] - Technical maintenance

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
1. Check [[02_Worldbuilding/Lore/Session Log]] for last session
2. Update [[02_Worldbuilding/Lore/Faction Tracker]] standings
3. Review [[02_Worldbuilding/Lore/Quest Campaign Tracker]] status
4. Check [[02_Worldbuilding/Lore/NPC Directory.base|02 Worldbuilding/Lore/NPC Directory.base]] for active NPCs
5. Generate encounters with [[06_GM_Resources/Encounter Builder]]
6. Prepare scenes with [[06_GM_Resources/Scene Framing Templates]]

### World Building
1. Use [[1-DM Toolkit/DM Board]] creation buttons
2. Follow [[05_Templates|05 Templates]] for consistency
3. Update relevant trackers
4. Cross-reference with existing content
5. Maintain completion status

### Player Management
1. Direct players to [[07_Player_Resources/Player Portal]]
2. Use [[07_Player_Resources/Quick Start Guide]] for new players
3. Reference [[07_Player_Resources/Rules Reference]] for disputes
4. Track progress in [[02_Worldbuilding/Lore/Session Log]]

---

*This index integrates with all existing tracking systems while providing high-level navigation and oversight. Use in conjunction with specialized trackers for detailed management.*

## Cross-References

- [[Vault_Navigation_Hub|Vault Navigation Hub]]

## Faction Relationships

### Network Position
**Direct Connections**: 6 faction relationships
**Network Influence**: 12 degrees of separation reach
**Relationship Complexity**: High

### Key Relationships
- [[02_Worldbuilding/Lore/Faction Tracker]]: Relationship status pending classification
- [[03_Mechanics/Complete Faction Warfare System]]: Relationship status pending classification
- [[03_Mechanics/Faction Standing System]]: Relationship status pending classification
- [[07_Player_Resources/Faction Guide]]: Relationship status pending classification
- [[02_Worldbuilding/Lore/Faction Tracker]]: Relationship status pending classification

### Relationship Dynamics
- **Alliance Potential**: Opportunities for cooperation and mutual benefit
- **Conflict Risk**: Areas of potential disagreement or competition  
- **Neutral Interactions**: Routine diplomatic and trade relationships
- **Unknown Factors**: Relationships requiring further investigation

### Network Strategy
**Expansion Opportunities**: Potential new alliances and partnerships
**Risk Management**: Monitoring threats and hostile relationships
**Influence Maximization**: Leveraging relationships for faction goals
**Diplomatic Priorities**: Key relationships requiring attention

