---
title: Master_Campaign_Index
type: note
tags:
- combat
- quest
- session-notes
- crystal-enhanced
- shadow-touched
- aerial
- aquatic
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Master_Campaign_Index

---
title: Master Campaign Index
type: Lore
tags:
- navigation
- aerial
- session-notes
- index
- master-control
- status/complete
- aquatic
- quest
- content/lore
- world/both
- active
- combat
- crystal-enhanced
created: '2025-08-11'
modified: '2025-08-14'
status: complete
updated: 2025-08-13 07:59:50.495916
world: Both
timeline: current_era
chronology: active
---

# Master Campaign Index

*Complete Navigation System for Aquabyssos & Aethermoor*

See also: [[12_Research/D&D_References/Phase Omega Enhanced Index]]

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
### ⚙️ Mechanics (03_Mechanics/)

  file.link AC "System",
  contains(tags, "complete") AC "Ready"
FROM "03_Mechanics"
WHERE !contains(file.name, "CLI")
AND status = "complete"
SORT file.name ASC
#### Core Systems

**Environmental**:
- [[Aquabyssos Survival Mechanics]] - Underwater survival
- [[12_Research/D&D_References/Depth Adaptation System]] - Transformation mechanics
- [[Crystal Plague Mechanics]] - Corruption system

**Social/Political**:
- [[12_Research/D&D_References/Faction Standing System]] - Reputation tracking
- [[NPC Reactions]] - Social mechanics
- [[02_Worldbuilding/Lore/Political Maneuvering]] - Intrigue rules

**Combat/Action**:
- [[Underwater Combat Rules]] - 3D combat
- [[Pressure Combat Modifiers]] - Environmental effects
- [[02_Worldbuilding/Lore/Mass Combat Resolution]] - Large battles

**Reality/Horror**:
- [[12_Research/D&D_References/Reality Merger Mechanics]] - Dimensional rules
- [[02_Worldbuilding/Places/Aquabyssos]] - Madness tracking
- [[12_Research/D&D_References/Memory Absorption Rules]] - Memory mechanics

#### Aquabyssos Campaign

LIST
FROM "1-Session Journals"
WHERE contains(file.name, "Aquabyssos")
#### Aethermoor Campaign

WHERE contains(file.name, "Aethermoor")
### Find by Status

  file.link AC "File",
  type AC "Type",
  file.folder AC "Location"
FROM ""
WHERE status = "stub"
LIMIT 20
### Recently Modified

  file.mtime AC "Modified",
  status AC "Status"
WHERE file.mtime > date(today) - dur(7 days)
### Most Connected

  length(file.inlinks) AC "Incoming Links",
  length(file.outlinks) AC "Outgoing Links"
SORT length(file.inlinks) DESC
### Priority Completion Areas

1. **Quests**: 86% complete ✅
2. **Items**: 100% complete ✅
3. **Core NPCs**: 28/159 complete ⚠️
4. **Key Locations**: 38/367 complete ⚠️
5. **Factions**: 14/56 complete ⚠️

### Cross-System References

Every major system connects to:
- [[12_Research/D&D_References/Faction Tracker]] - Live faction tracking
- [[01_Adventures/Quest Campaign Tracker.base]] - Quest management
- [[02_Worldbuilding/Lore/Npc Directory.base]] - Character relationships
- [[06_Sessions/Session Log.base]] - Historical record

### Data Flow

Player Actions → Session Log → 
  ↓
Faction Tracker → Quest Updates →
NPC Reactions → World State →
Reality Stability → Merger Events
### Update Procedures

1. Run completion status check
2. Update faction standings
3. Process quest completions
4. Update NPC relationships
5. Check reality stability
6. Generate session prep

## 📊 Quick Stats Dashboard

  "📚 " + length(file.lists) AC "Total Files",
  "✅ " + length(filter(file.lists, (x) => x.status = "complete")) AC "Complete",
  "⚠️ " + length(filter(file.lists, (x) => x.status = "stub")) AC "Stubs",
  "🔄 " + length(filter(file.lists, (x) => x.status = "in-progress")) AC "Active"
### Session Prep

1. Check [[06_Sessions/Session Log]] for last session
2. Update [[12_Research/D&D_References/Faction Tracker]] standings
3. Review [[01_Adventures/Quest Campaign Tracker]] status
4. Check [[02 Worldbuilding/Lore/NPC Directory.base|02 Worldbuilding/Lore/NPC Directory.base]] for active NPCs
5. Generate encounters with [[12_Research/D&D_References/Encounter Builder]]
6. Prepare scenes with [[09_Templates/Scene Framing Templates]]

### World Building

1. Use [[1 DM Toolkit/DM Board]] creation buttons
2. Follow [[05 Templates|05 Templates]] for consistency
3. Update relevant trackers
4. Cross-reference with existing content
5. Maintain completion status

### Player Management

1. Direct players to [[12_Research/D&D_References/Player Portal]]
2. Use [[Quick Start Guide]] for new players
3. Reference [[12_Research/D&D_References/Rules Reference]] for disputes
4. Track progress in [[06_Sessions/Session Log]]

---

*This index integrates with all existing tracking systems while providing high-level navigation and oversight. Use in conjunction with specialized trackers for detailed management.*

## Previous Version Content

---
- both
- complete
- content/lore
- index
- lore
- master-control
- navigation
- status/complete
- world/both
updated: '2025-08-13T12:34:03.151422+00:00'
updated: 2025-08-13T07:59:50.321845
---
# Master Campaign Index

*Complete Navigation System for Aquabyssos & Aethermoor*

### 🌍 Worldbuilding (02_Worldbuilding/)

### ⚙️ Mechanics (03_Mechanics/)

#### Core Systems

**Environmental**:
- [[Aquabyssos Survival Mechanics]] - Underwater survival
- [[12_Research/D&D_References/Depth Adaptation System]] - Transformation mechanics
- [[Crystal Plague Mechanics]] - Corruption system

**Social/Political**:
- [[12_Research/D&D_References/Faction Standing System]] - Reputation tracking
- [[NPC Reactions]] - Social mechanics
- [[02_Worldbuilding/Lore/Political Maneuvering]] - Intrigue rules

**Combat/Action**:
- [[Underwater Combat Rules]] - 3D combat
- [[Pressure Combat Modifiers]] - Environmental effects
- [[02_Worldbuilding/Lore/Mass Combat Resolution]] - Large battles

**Reality/Horror**:
- [[12_Research/D&D_References/Reality Merger Mechanics]] - Dimensional rules
- [[02_Worldbuilding/Places/Aquabyssos]] - Madness tracking
- [[12_Research/D&D_References/Memory Absorption Rules]] - Memory mechanics

#### Aquabyssos Campaign

#### Aethermoor Campaign

### Find by Status

### Recently Modified

### Most Connected

### Priority Completion Areas

### Cross-System References

- [[12_Research/D&D_References/Faction Tracker]] - Live faction tracking
- [[01_Adventures/Quest Campaign Tracker.base]] - Quest management
- [[02_Worldbuilding/Lore/Npc Directory.base]] - Character relationships
- [[06_Sessions/Session Log.base]] - Historical record

### Data Flow

### Update Procedures

## 📊 Quick Stats Dashboard

### Session Prep

### World Building

### Player Management

---

*This index integrates with all existing tracking systems while providing high-level navigation and oversight. Use in conjunction with specialized trackers for detailed management.*

### Network Position

**Direct Connections**: 6 faction relationships
**Network Influence**: 12 degrees of separation reach
**Relationship Complexity**: High

### Network Strategy

**Expansion Opportunities**: Potential new alliances and partnerships
**Risk Management**: Monitoring threats and hostile relationships
**Influence Maximization**: Leveraging relationships for faction goals
**Diplomatic Priorities**: Key relationships requiring attention

## Semantic Connections

*Related concepts and locations:*
- [[02_Worldbuilding/Lore/insect-plague-xphb]]
- [[02_Worldbuilding/Lore/secondary-tables-arcane-matters-xge]]
- [[02_Worldbuilding/Lore/wizard-xphb-school-of-enchantment]]
- [[12_Research/D&D_Sourcebooks/CLI_Reference/tables/githzerai-groups-githzerai-mission-purpose-mtf]]
- [[02_Worldbuilding/Lore/trade-goods-phb]]
- [[12_Research/D&D_Sourcebooks/CLI_Reference/lists/List Spells Optional Features Gift of the Depths Xphb]]
- [[02_Worldbuilding/Lore/Shadow Broker Maximian Darkmarket]]
- [[02_Worldbuilding/Groups/guild-artisan-guild-merchant-variant]]
- [[12_Research/D&D_References/Advocate Lightfight]]
- [[02_Worldbuilding/Groups/Deputy Archmerchant Scroll Deepmind]]

## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes


## Related
- [[02_Worldbuilding/Lore/Aquabyssos World Guide]]
- [[02_Worldbuilding/Lore/Aethermoor World Guide]]
