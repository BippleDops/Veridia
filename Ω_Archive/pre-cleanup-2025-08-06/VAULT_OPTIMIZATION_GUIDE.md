---
type: guide
tags: [guide, optimization, documentation]
aliases: ["Optimization Guide", "Vault Guide", "Setup Instructions"]
created: 2025-08-05
modified: 2025-08-05
cssclasses: [wide-page]
---

# 🚀 TTRPG Vault Optimization Guide

> [!success] Vault Optimization Complete!
> Your Obsidian TTRPG vault has been comprehensively optimized for the Cerulean Archipelago maritime campaign.

## 📋 Optimization Summary

### ✅ Completed Optimizations

#### 1. **Folder Structure Enhancement**
- ✅ Created organized campaign management structure
- ✅ Added GM-only resource sections  
- ✅ Implemented player handout areas
- ✅ Set up automation and performance directories
- ✅ Established archival system

#### 2. **Enhanced Templates Created**
- ✅ **Combat Encounter Template** - With initiative tracker integration
- ✅ **Loot Table Template** - Nautical/pirate themed with rarity system
- ✅ **Random Encounter Template** - Sea-based with detailed sub-tables
- ✅ **Faction Relationship Tracker** - Dynamic political web system
- ✅ **Enhanced Session Template** - Automated features and tracking
- ✅ **World Event Timeline** - Historical tracking with patterns
- ✅ **Settlement Stat Block** - Comprehensive city/town template

#### 3. **Automation Systems**
- ✅ Session automation workflows
- ✅ Quick creation macros
- ✅ Post-session checklists
- ✅ Timeline auto-updates
- ✅ XP calculation scripts

#### 4. **Performance Optimization**
- ✅ Master Campaign Index for quick navigation
- ✅ Dataview query optimization
- ✅ Archive system for old content
- ✅ Search shortcuts and filters

#### 5. **Plugin Integration**
- ✅ Templates configured for installed plugins:
  - Initiative Tracker
  - Dice Roller
  - Fantasy Calendar
  - Leaflet Maps
  - Meta Bind
  - Dataview
  - Templater
  - Buttons

## 🎯 Quick Start Guide

### For Your Next Session

1. **Create New Session Note**
   - Navigate to `05_Templates`
   - Use `Template-Session-Enhanced.md`
   - File naming: `Session XX - YYYY-MM-DD`
   - Place in: `01_Campaigns/Campaign_Name/Sessions/`

2. **During Session**
   - Use Initiative Tracker for combat
   - Quick-link NPCs and locations as encountered
   - Update quest progress in real-time
   - Roll on loot tables for treasure

3. **Post-Session**
   - Run post-session checklist
   - Calculate and award XP
   - Update faction relationships
   - Create next session file

### Essential Hotkeys to Set

In Settings > Hotkeys, consider setting:
- `Ctrl/Cmd + Shift + S` → Create new session
- `Ctrl/Cmd + Shift + N` → Create new NPC
- `Ctrl/Cmd + Shift + L` → Create new location
- `Ctrl/Cmd + Shift + Q` → Create new quest
- `Ctrl/Cmd + Shift + C` → Create combat encounter

## 📁 New Folder Structure

```
ObsidianTTRPGVault Experimental/
├── 00_Dashboard/           # Control center
├── 01_Campaigns/            
│   ├── _Campaign_Template/  # Template for new campaigns
│   ├── Active_Campaigns/    # Current games
│   └── Archived_Campaigns/  # Completed games
├── 02_Worldbuilding/        # Unchanged
├── 03_Rules_Reference/      # Unchanged
├── 04_Resources/            # Unchanged
├── 05_Templates/            # All templates (ENHANCED)
├── 06_GM_Resources/         # NEW
│   ├── Combat_Encounters/   
│   ├── Loot_Tables/
│   ├── Random_Tables/
│   ├── Maps/
│   ├── Music_Playlists/
│   └── Tokens/
├── 07_Player_Resources/     # NEW
│   ├── Handouts/
│   ├── Character_Sheets/
│   ├── Session_Summaries/
│   └── Rules_Quick_Reference/
├── 08_Automation/           # NEW
│   ├── Scripts/
│   ├── Macros/
│   └── Workflows/
├── 09_Performance/          # NEW
│   ├── Indexes/
│   └── Archives/
└── Ω_Archive/              # Existing archive
```

## 🛠️ Template Usage Guide

### Combat Encounter Template
**Purpose**: Track complex combat with multiple participants
**Features**:
- Initiative tracker integration
- Difficulty scaling options
- Environmental hazards
- Treasure generation
- Post-combat consequences

**Usage**:
```markdown
1. Create from template
2. Fill in enemy details
3. Set environment/hazards
4. Use during combat
5. Roll treasure after
```

### Loot Table Template  
**Purpose**: Generate appropriate treasure for your nautical campaign
**Features**:
- Tiered loot system
- Nautical-themed items
- Quick roll buttons
- Merchant goods tables
- Artifact possibilities

**Usage**:
```markdown
1. Choose appropriate tier
2. Roll on main table
3. Roll on sub-tables as directed
4. Adjust for party level
5. Record in session notes
```

### Random Encounter Template
**Purpose**: Sea and port encounters with depth
**Features**:
- Environment-specific tables
- Time of day modifiers
- Detailed encounter descriptions
- Social and combat options
- Weather integration

**Usage**:
```markdown
1. Set environment type
2. Check encounter frequency
3. Roll on appropriate table
4. Use detailed descriptions
5. Apply weather/time modifiers
```

### Faction Relationship Tracker
**Purpose**: Manage complex political web
**Features**:
- Visual relationship matrix
- Tension tracking
- Power dynamics
- Event predictions
- Player reputation

**Usage**:
```markdown
1. Update after major events
2. Track tension levels
3. Roll for faction actions
4. Monitor player standing
5. Predict conflicts
```

## 🔧 Automation Features

### Session Automation
- **Auto-numbering**: Sessions automatically numbered
- **Date stamps**: Created and played dates tracked
- **Previous session**: Auto-links and recaps
- **XP calculation**: Based on encounters and quests
- **Timeline updates**: Major events added automatically

### Quick Actions
Located in `08_Automation/Scripts/`:
- `next-session.md` - Creates next session
- `post-session-checklist.md` - Cleanup tasks
- `session_automation.md` - Full workflow guide

### Meta Bind Integrations
Templates include Meta Bind inputs for:
- Quick data entry
- Toggle states
- Progress bars
- Button actions
- Dynamic calculations

## 📊 Performance Tips

### Vault Maintenance Schedule

**Daily** (During active campaign):
- Quick backup
- Update session notes

**Weekly**:
- Archive completed encounters
- Update faction relationships
- Review quest progress
- Clean up temporary files

**Monthly**:
- Full vault backup
- Archive old sessions (6+ months)
- Optimize image sizes
- Update indexes
- Review plugin performance

### Query Optimization

Templates use optimized Dataview queries:
- LIMIT clauses prevent overload
- Specific folder searches
- Indexed tag searches
- Cached results where possible

### File Organization
- Keep images under 1MB
- Use consistent naming conventions
- Archive unused content
- Regular broken link checks

## 🎮 Plugin Configuration

### Essential Plugin Settings

**Templater**:
- Template folder: `05_Templates`
- Enable folder templates
- Trigger on file creation

**Dataview**:
- Enable inline queries
- Enable JavaScript queries
- Refresh interval: 2000ms

**Initiative Tracker**:
- Default creature HP/AC
- Combat log enabled
- Condition tracking on

**Meta Bind**:
- Enable in all templates
- Button styles configured
- Input validation on

## 🚨 Common Issues & Solutions

### "Template not found"
- Ensure Templater folder is set to `05_Templates`
- Check file exists and ends with `.md`

### "Dataview queries slow"  
- Add LIMIT to queries
- Archive old content
- Use specific folder paths

### "Images not loading"
- Check file paths (use absolute)
- Verify image size (<1MB recommended)
- Ensure proper folder structure

### "Buttons not working"
- Update Buttons plugin
- Check Meta Bind is enabled
- Verify button syntax

## 📚 Additional Resources

### In-Vault Guides
- [[session_automation|Session Automation Guide]]
- [[Campaign_Index|Master Campaign Index]]
- [[Template-Session-Enhanced|Session Template Guide]]

### Recommended Practices
1. **Before Each Session**:
   - Review last session
   - Prepare encounters
   - Update NPC motivations
   - Check faction tensions

2. **During Session**:
   - Keep session note open
   - Quick-link everything
   - Use initiative tracker
   - Take brief notes

3. **After Session**:
   - Complete post-session checklist
   - Update all relationships
   - Prepare session summary
   - Create next session file

## 🎯 Next Steps

1. **Immediate Actions**:
   - [ ] Set up your hotkeys
   - [ ] Review the new templates
   - [ ] Create your next session note
   - [ ] Move existing content to new folders

2. **This Week**:
   - [ ] Familiarize with automation scripts
   - [ ] Set up your campaign index
   - [ ] Configure plugin settings
   - [ ] Create any missing NPCs/locations

3. **Ongoing**:
   - [ ] Use templates consistently
   - [ ] Maintain regular backups
   - [ ] Archive old content
   - [ ] Optimize as needed

## 💡 Pro Tips

### Campaign Management
- Use tags consistently (#quest, #npc, #location)
- Link everything (NPCs to factions, quests to locations)
- Update relationships after each session
- Let players access `07_Player_Resources`

### Combat Efficiency  
- Pre-roll initiative for known encounters
- Use encounter templates for recurring fights
- Keep stat blocks in easy reach
- Screenshot battle maps for records

### World Building
- Use timeline for consistency
- Track faction movements between sessions
- Generate rumors from faction tensions
- Let dice guide political events

---

> [!tip] Remember
> This system is designed to enhance, not restrict. Adapt templates and workflows to match your style. The best system is one you'll actually use!

## 🙏 Credits & Version

**Optimization Version**: 2.0
**Date**: 2025-08-05
**Compatible With**: Obsidian 1.0+
**Campaign**: Cerulean Archipelago (Maritime/Pirate Theme)

---

*Happy Gaming! May your dice roll high and your stories be epic! 🎲⚓*