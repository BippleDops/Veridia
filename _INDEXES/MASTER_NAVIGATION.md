---
tags: [index, navigation, master, flattened]
created: 2025-08-15
---

# 🗺️ Master Navigation - Flattened Vault

## ✅ Reorganization Complete

Your vault has been successfully flattened from numbered directories to a clean topic-based structure.

### 📊 Statistics
- **Old Structure**: 20+ numbered directories (00_, 01_, etc.)
- **New Structure**: 7 main categories
- **Items Reorganized**: 201+
- **Maximum Depth**: 3 levels

## 📁 Directory Structure

### 🎮 [[Adventures]]
Game content and campaign materials
- `Sessions/` - Game session notes
- `Quests/` - Quest descriptions
- `Encounters/` - Combat and social encounters
- `Campaigns/` - Campaign overviews

### 🌍 [[World]]
World-building content
- `NPCs/` - All non-player characters
- `Locations/` - Cities, dungeons, regions
- `Factions/` - Organizations and groups
- `Lore/` - History and mythology
- `Timeline/` - Chronological events
- `Places/` - Geographic locations
- `People/` - Notable individuals
- `Groups/` - Factions and organizations
- `Items/` - Magical items and artifacts

### 📖 [[Rules]]
Game mechanics and references
- `Mechanics/` - Core game rules
- `Homebrew/` - Custom content
- `References/` - Quick guides
- `Spells/` - Spell compendium
- `Calculators/` - Game calculators
- `Rules_Reference/` - Official rules
- `Transformations/` - Character transformations

### 🎨 [[Resources]]
Supporting materials
- `Maps/` - Battle and world maps
- `Assets/` - Images and artwork
- `Handouts/` - Player materials
- `Research/` - Reference materials
- `Tools/` - Generators and utilities
- `References/` - External resources
- `GM_Resources/` - DM tools

### 👥 [[Characters]]
Character-related content
- `PCs/` - Player characters
- `Party/` - Party resources
- `Tools/` - Character tools
- `Player_Resources/` - Player aids
- `Sheets/` - Character sheets
- `Backstories/` - Character histories

### ⚙️ [[System]]
Vault management
- `Indexes/` - Navigation aids
- `Metadata/` - Configuration
- `Analytics/` - Performance tracking
- `Guides/` - Master documentation
- `Templates/` - Note templates
- `Automation/` - Scripts and queries
- `Canvas_Templates/` - Visual templates

### 📦 [[Archive]]
Historical content
- `backups/` - Backup copies
- `Old/` - Previous versions
- `Deprecated/` - Outdated content
- `Personal/` - Personal notes

## 🔍 Quick Access

### Essential Files
- [[README|Vault Overview]]
- [[System/Guides/DM_COMPLETE_GUIDE|DM Guide]]
- [[System/Guides/PLAYER_HANDBOOK|Player Handbook]]
- [[System/Guides/WORLD_BIBLE|World Bible]]

### Indexes by Type
- [[System/Indexes/MOC_NPCs|NPC Index]]
- [[System/Indexes/MOC_Locations|Location Index]]
- [[System/Indexes/MOC_Quests|Quest Index]]
- [[System/Indexes/MOC_Sessions|Session Index]]
- [[System/Indexes/MOC_Rules|Rules Index]]
- [[System/Indexes/MOC_Combat|Combat Index]]
- [[System/Indexes/MOC_Items|Items Index]]
- [[System/Indexes/MOC_Lore|Lore Index]]

### Recent Activity
```dataview
TABLE file.mtime as "Modified"
FROM ""
WHERE file.mtime >= date(today) - dur(1 day)
SORT file.mtime DESC
LIMIT 20
```

### Largest Directories
```dataview
TABLE length(file.folder) as "Files"
FROM ""
GROUP BY file.folder
SORT length(file.folder) DESC
LIMIT 10
```

## 🚀 Benefits of Flattened Structure

### ✅ Improved Navigation
- No more confusing numbered directories
- Topic-based organization is intuitive
- Maximum 3 levels deep for easy access
- Clear separation of concerns

### ✅ Better Performance
- Faster file searches
- Reduced directory traversal
- Simpler link resolution
- Cleaner vault structure

### ✅ Easier Maintenance
- Clear where new content belongs
- Simple backup strategy
- Straightforward organization
- No duplicate directory names

## 📝 Migration Notes

### From → To Mapping
- `00_Indexes` → `System/Indexes`
- `00_System` → `System`
- `01_Adventures` → `Adventures`
- `02_Worldbuilding` → `World`
- `03_People` → `World/NPCs`
- `03_Mechanics` → `Rules`
- `04_Resources` → `Resources`
- `05_Player_Characters` → `Characters`
- `05_Rules` → `Rules`
- `06_Sessions` → `Adventures/Sessions`
- `07_Player_Resources` → `Characters`
- `08_Archive` → `Archive`
- `09_Performance` → `System/Analytics`
- `12_Research` → `Resources/Research`

## 🎯 Next Steps

1. **Update Bookmarks** - Update any saved locations
2. **Check Links** - Verify internal links work
3. **Review Content** - Ensure everything is accessible
4. **Customize Further** - Adjust structure as needed

---
*Vault successfully flattened and reorganized on 2025-08-15*