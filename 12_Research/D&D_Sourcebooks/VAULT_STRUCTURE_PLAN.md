# Vault Structure Plan & Status

## Current Folder Status

### Existing Folders (Active)
- **01_Adventures**: Campaign content and sessions ✅
- **02_Worldbuilding**: Lore, locations, NPCs ✅  
- **03_Mechanics**: Game rules and systems ✅
- **04_Resources**: Assets and handouts ✅
- **08_Research**: D&D sourcebooks and references ✅
- **09_Documentation**: Planning and guides ✅
- **12_Archive**: Old/deprecated content ✅
- **13_Performance**: System monitoring files ✅

### Missing Folders (Deleted in Recent Cleanup)
- **05_Player_Resources**: Player handouts, character sheets
- **06_Session_Management**: GM tools, session notes
- **07_Templates**: Note templates

### Support Folders
- **data/**: Analysis reports and vault metadata
- **reports/**: Optimization and audit reports
- **scripts/**: Python automation scripts

## Restoration & Organization Plan

### Phase 1: Immediate Recovery (NOW)
1. ✅ Created vault_optimization_comprehensive.py
2. 🔄 Run optimization to recover critical deleted files
3. 🔄 Fix broken links from mass deletion
4. 🔄 Remove any remaining duplicates

### Phase 2: Folder Recreation
#### 05_Player_Resources (To Create)
```
05_Player_Resources/
├── Character_Sheets/
├── Quick_References/
├── World_Maps/
├── Player_Handouts/
└── Session_Recaps/
```

#### 06_Session_Management (To Create)
```
06_Session_Management/
├── Session_Notes/
├── GM_Screen/
├── Encounter_Tracker/
├── Initiative_Tools/
└── Campaign_Calendar/
```

#### 07_Templates (To Create)
```
07_Templates/
├── NPC_Template.md
├── Location_Template.md
├── Session_Template.md
├── Item_Template.md
└── Quest_Template.md
```

### Phase 3: Future Folders (10-11)
#### 10_Homebrew (Planned)
```
10_Homebrew/
├── Custom_Classes/
├── Custom_Races/
├── Custom_Items/
├── Custom_Spells/
└── House_Rules/
```

#### 11_Media (Planned)
```
11_Media/
├── Maps/
├── Character_Art/
├── Location_Images/
├── Music_Playlists/
└── Sound_Effects/
```

## Data & Reports Folders

### data/ Folder Purpose
- Campaign analysis data
- NPC network mappings
- Content validation results
- Vault configuration files
- Performance metrics

### reports/ Folder Purpose
- Optimization reports
- Link validation reports
- Content audit results
- Campaign completion tracking
- System health reports

## Immediate Actions Required

1. **Run vault optimization in DRY RUN mode first**
   ```bash
   python3 scripts/vault_optimization_comprehensive.py
   ```

2. **Review what would be recovered/fixed**

3. **Run in LIVE mode if satisfied**
   ```bash
   python3 scripts/vault_optimization_comprehensive.py --live
   ```

4. **Create missing folder structure**
   - Recreate folders 05, 06, 07
   - Populate with templates
   - Move misplaced content

5. **Validate campaign content**
   - Seven Shards: Need 14 more sessions
   - Shadow Conspiracy: Need 7 more sessions
   - Crystal Plague: Need all 6 sessions

## Why This Structure?

The numbered folder system provides:
- **01-04**: Core game content (adventures, world, mechanics, resources)
- **05-07**: Active play support (player tools, GM tools, templates)
- **08-09**: Reference and documentation
- **10-11**: Extended content (homebrew, media)
- **12**: Archive for old/deprecated content
- **13**: System performance monitoring

This organization ensures:
- Clear separation of concerns
- Easy navigation for players and GMs
- Scalable structure for growth
- Performance optimization (avoiding deep nesting)
- Clean git tracking

## Next Steps

1. Run optimization script to recover deleted files
2. Create missing folders 05-07
3. Generate standard templates
4. Reorganize misplaced content
5. Complete missing campaign sessions
6. Update all index files
7. Validate all cross-references

---
*Last Updated: 2025-08-14*
*Status: Recovery in Progress*