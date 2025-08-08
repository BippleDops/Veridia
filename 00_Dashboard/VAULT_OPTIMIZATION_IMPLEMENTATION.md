---
tags: [meta, documentation, implementation-guide]
created: 2025-08-07
---

# 🚀 Aquabyssos Vault Optimization Implementation Guide
> *Transform your vault into a living, breathing campaign management system*

## ✅ Implementation Complete

### 🎯 Core Systems Implemented

#### 1. **Dynamic Campaign State Tracking** ✅
- **File**: `00_Dashboard/Campaign_State.md`
- **Features**:
  - Real-time depth and pressure tracking
  - Faction reputation matrix with visual bars
  - Party transformation progress monitoring
  - Timeline divergence tracking
  - Probability engine for next session
  - Environmental conditions dashboard
  - Auto-updating world state variables

#### 2. **Automated Session Prep System** ✅
- **File**: `05_Templates/Session_Prep_Automated.md`
- **Features**:
  - Pulls previous session summaries automatically
  - Suggests encounters based on depth
  - Generates faction actions while party was away
  - Creates random encounter tables
  - Includes contingency planning
  - Auto-calculates appropriate rewards
  - Integrates with Campaign State

#### 3. **Investigation Case File System** ✅
- **Files**: 
  - `01_Campaigns/Aquabyssos/_Investigations/Investigation_Template.md`
  - `01_Campaigns/Aquabyssos/_Investigations/Investigation_Board.md`
- **Features**:
  - Complete case management workflow
  - Clue tracking with discovery states
  - Suspect profiling system
  - Investigation phase tracking
  - Evidence chain visualization
  - Mystery web connections
  - DM-only revelation conditions

#### 4. **Advanced Tagging Taxonomy** ✅
- **File**: `00_Dashboard/Tagging_Taxonomy_Guide.md`
- **Features**:
  - Hierarchical tag structure
  - Depth zone classifications
  - Transformation stage tracking
  - Faction reputation levels
  - Timeline branch tags
  - Mystery discovery states
  - Complex query examples

#### 5. **NPC Brain System** ✅
- **File**: `05_Templates/NPC_Brain_Template.md`
- **Features**:
  - Motivation pyramid (needs/wants/fears/secrets)
  - Relationship matrix with trust levels
  - Knowledge database
  - Behavioral patterns & dialogue banks
  - Dynamic state tracking
  - Current agenda & schemes
  - Evolution tracker

#### 6. **Relationship Web Visualization** ✅
- **File**: `01_Campaigns/Aquabyssos/Relationship_Web.canvas`
- **Features**:
  - Visual faction groupings
  - Color-coded relationship strengths
  - Different edge styles for relationship types
  - Party central positioning
  - Dynamic connection tracking

## 📁 Optimized Folder Structure

```
/00_Dashboard/
├── Campaign_State.md (✅ Created - Live world state)
├── Investigation_Board.md (→ Link to Investigations)
├── Tagging_Taxonomy_Guide.md (✅ Created - Tag reference)
├── Session_Prep_Current.md (Generated from template)
└── VAULT_OPTIMIZATION_IMPLEMENTATION.md (✅ This file)

/01_Campaigns/Aquabyssos/
├── _State/ (Campaign state files)
│   └── [Auto-generated state tracking]
├── _Investigations/ (✅ Created)
│   ├── Investigation_Template.md
│   ├── Investigation_Board.md
│   └── [Active case files]
├── _Timeline/ (Timeline tracking)
│   └── [Divergence point records]
├── Relationship_Web.canvas (✅ Created)
├── Factions/
├── Locations/
├── NPCs/
├── Quests/
└── Sessions/

/05_Templates/ (✅ Enhanced)
├── Session_Prep_Automated.md (✅ Created)
├── NPC_Brain_Template.md (✅ Created)
├── Investigation_Template.md (→ Link)
└── [Other templates]

/08_Automation/
├── Scripts/
│   └── [Dataview queries]
├── Templates/
└── Queries/
```

## 🎮 How to Use These Systems

### Daily Workflow

#### Pre-Session
1. Create new session prep using `Session_Prep_Automated.md` template
2. Review `Campaign_State.md` for current world status
3. Check `Investigation_Board.md` for active cases
4. Update NPC goals in relevant Brain files

#### During Session
1. Keep `Campaign_State.md` open for reference
2. Track investigation progress in case files
3. Note relationship changes in NPC Brain files
4. Update faction reputations as events occur

#### Post-Session
1. Update `Campaign_State.md` with new values
2. Complete session notes
3. Update investigation case files
4. Modify NPC Brain states based on interactions
5. Adjust Relationship Web if major changes occurred

### 🔧 Setup Instructions

#### Required Plugins
- **Dataview**: For dynamic queries and tables
- **Templater**: For automated template generation
- **Canvas**: For relationship visualization (Core plugin)
- **Obsidian Git** (Optional): For version control

#### Initial Configuration

1. **Enable Templater**:
   - Set template folder to `05_Templates`
   - Enable "Trigger Templater on new file creation"
   - Set up hotkeys for quick template access

2. **Configure Dataview**:
   - Enable JavaScript queries
   - Enable inline queries
   - Set refresh interval to "On file change"

3. **Tag Migration**:
   - Use search and replace to update existing tags
   - Follow hierarchical structure in Taxonomy Guide

## 📊 Advanced Features

### Automated Queries

#### Active Threats
```dataview
TABLE danger_level as "Threat", location as "Location"
FROM #npc
WHERE danger_level >= 7 AND status = "alive"
SORT danger_level DESC
```

#### Investigation Progress
```dataview
TABLE priority as "Priority", 
      choice(contains(file.tags, "investigation"), 
             length(filter(file.tasks.completed, (t) => t = true)) / length(file.tasks.text) * 100, 
             0) as "Progress %"
FROM #investigation
WHERE status = "active"
```

#### Faction Power Balance
```dataviewjs
const factions = dv.pages("#faction");
// Calculate relative power based on allied NPCs, controlled locations, etc.
```

### Integration Points

#### With External Tools
- Export session summaries to Discord
- Generate encounter maps from location data
- Create character sheets from NPC Brains
- Build timeline visualizations

#### With Existing Content
- Link existing NPCs to Brain templates gradually
- Tag existing sessions with new taxonomy
- Connect old quests to Investigation system
- Update locations with depth zones

## 🚦 Implementation Priorities

### ✅ Immediate (Completed)
1. Campaign State Tracking
2. Session Prep Automation
3. Investigation System
4. Tagging Taxonomy
5. NPC Brain System
6. Relationship Web

### 🔄 Next Phase (Recommended)
1. **Memory Management System**
   - Track PC memory inventories
   - Memory trading mechanics
   - False memory tracker

2. **Modular Encounter Builder**
   - Depth-appropriate enemies
   - Environmental complications
   - Dynamic difficulty scaling

3. **Prophecy & Foreshadowing Tracker**
   - Prophecy interpretation variants
   - Foreshadowing seed management
   - Dream sequence generator

4. **Environmental Effect Automation**
   - Automatic pressure calculations
   - Memory tide scheduler
   - Shadow density tracker

### 🎯 Long-term Goals
1. Cross-campaign synchronization
2. AI-assisted content generation
3. Player agency tracking
4. Achievement & unlock system

## 🐛 Troubleshooting

### Common Issues

**Dataview queries not updating**:
- Check that Dataview is enabled
- Verify JavaScript queries are allowed
- Try refreshing with Ctrl/Cmd + R

**Templater not working**:
- Ensure template folder is set correctly
- Check that Templater is enabled
- Verify template syntax

**Canvas not displaying**:
- Enable Canvas core plugin
- Check file extension is `.canvas`
- Try reopening the file

## 📈 Performance Optimization

### Query Optimization
- Pre-calculate expensive queries in dedicated notes
- Use `LIMIT` in dataview queries
- Cache relationship calculations
- Implement lazy loading for large datasets

### File Organization
- Archive old sessions to reduce query load
- Use folders to segment content
- Keep active investigations separate
- Regular cleanup of completed quests

## 🎉 Success Metrics

Track your vault's effectiveness:
- **Session Prep Time**: Should decrease by 50%
- **Information Retrieval**: Should be instant
- **Continuity Errors**: Should approach zero
- **Player Engagement**: Should increase
- **Story Coherence**: Should improve

## 🔮 Future Enhancements

Potential additions to explore:
1. Voice transcription integration
2. Battle map generation
3. Music playlist automation
4. Player app synchronization
5. AI dialogue generation

## 📚 Resources

### Templates & Examples
- All templates are in `05_Templates/`
- Example investigations in `_Investigations/`
- Sample NPC Brains can be generated

### Documentation
- This implementation guide
- Tagging Taxonomy Guide
- Individual system documentation in each file

### Support
- Test systems with sample data first
- Backup vault before major changes
- Iterate and customize to your needs

---

## 🎯 Quick Start Checklist

- [ ] Install required plugins (Dataview, Templater)
- [ ] Copy all created files to your vault
- [ ] Configure Templater settings
- [ ] Test Campaign State dashboard
- [ ] Create first session prep from template
- [ ] Set up one investigation case
- [ ] Create one NPC using Brain template
- [ ] Open Relationship Web canvas
- [ ] Tag 5 existing notes with new taxonomy
- [ ] Run a test session with new tools

---

*Your Aquabyssos campaign now has a professional-grade management system that practically runs itself!*

*Implementation Date: 2025-08-07*
*Version: 1.0*