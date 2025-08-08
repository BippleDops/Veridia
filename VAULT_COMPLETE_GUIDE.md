# 📚 Obsidian TTRPG Vault - Complete Guide
*Version 1.9.7 Implementation | August 6, 2025*

---

## 🎯 Quick Start

### Your Main Dashboard
**Location:** `/00_Dashboard/Master_Campaign_Control_Center.md`
- This is your central hub for everything
- All bases are embedded here
- Quick links to all tools and templates

### Essential Files
1. **Base Files** (root directory)
   - `combat-tracker.base` - Combat management
   - `npc-roster.base` - NPC database
   - `quest-tracker.base` - Quest management
   - `location-tracker.base` - Location database
   - `relationship-graph.base` - Relationship networks
   - `campaign-dashboard.base` - Session timeline

2. **Templates** (`/05_Templates/`)
   - `NPC_Template.md` - Create NPCs
   - `Quest_Template.md` - Create quests
   - `Location_Template.md` - Create locations
   - `Session_Template.md` - Session notes
   - `Encounter_Template.md` - Combat encounters

---

## 📁 Vault Structure

```
ObsidianTTRPGVault/
├── 00_Dashboard/           # Control center
│   └── Master_Campaign_Control_Center.md
├── 01_Campaigns/          # Campaign content
│   ├── NPCs/             # Character notes
│   ├── Locations/        # Location notes
│   ├── Quests/          # Quest notes
│   └── Sessions/        # Session notes
├── 02_Worldbuilding/     # Lore & setting
├── 03_Rules_Reference/   # Game mechanics
├── 04_Resources/         # Tables & references
├── 05_Templates/         # Note templates
├── 06_GM_Resources/      # GM tools
├── 07_Player_Resources/  # Player handouts
├── Ω_Assets/            # Images & media
│   ├── npcs/           # NPC portraits
│   ├── locations/      # Location images
│   ├── quests/         # Quest images
│   ├── items/          # Item artwork
│   └── Maps/           # Battle maps
└── Ω_Archive/          # Old versions

Root Level:
├── *.base files        # Database definitions
└── Documentation       # This guide
```

---

## 🔗 Linking System

### How to Link Entities

**In Properties (Frontmatter):**
```yaml
# For NPCs
location: "[[Market District]]"
faction: "[[Merchant's Guild]]"
relationships: 
  - "[[Other NPC Name]]"
related_quests:
  - "[[Quest Name]]"

# For Quests
quest_giver: "[[NPC Name]]"
location: "[[Location Name]]"
prerequisite_quests:
  - "[[Previous Quest]]"

# For Sessions
npcs_met:
  - "[[NPC Name]]"
locations_visited:
  - "[[Location Name]]"
```

**In Content:**
- Use `[[Note Name]]` for any internal link
- Links are case-sensitive
- Must match exact note name

---

## 🖼️ Image Management

### Image Locations
- **NPC Portraits:** `Ω_Assets/npcs/`
- **Location Images:** `Ω_Assets/locations/`
- **Quest Images:** `Ω_Assets/quests/`
- **Battle Maps:** `Ω_Assets/Maps/`

### Setting Images in Properties
```yaml
# For NPCs
portrait: "Ω_Assets/npcs/character-name.png"

# For Locations
map_image: "Ω_Assets/locations/location-name.jpg"

# For Quests
quest_image: "Ω_Assets/quests/quest-name.png"
```

### Supported Formats
- PNG, JPG, GIF, WebP
- Use relative paths from vault root
- No leading slash needed

---

## 📊 Base Views

### Table View
- Default view for all data
- Sortable columns
- Filterable rows
- Best for analysis

### Cards View
- Visual gallery display
- Shows images from properties
- Great for NPCs and locations
- Click to open full note

### Switching Views
- Use dropdown in base toolbar
- Each base can have multiple views
- Views remember their settings

---

## 🎮 Workflow Examples

### Creating an NPC
1. Use `NPC_Template.md`
2. Add required tags: `[npc]`
3. Fill in properties:
   - Name, location, faction
   - Relationships to other NPCs
   - Related quests
4. Add portrait image to `Ω_Assets/npcs/`
5. NPC automatically appears in:
   - NPC Roster base
   - Location's resident list
   - Relationship Graph

### Running a Session
1. **Before Session:**
   - Create from `Session_Template.md`
   - Link planned NPCs and locations
   - Note expected quests

2. **During Session:**
   - Update `npcs_met` as encountered
   - Add `quests_started` when given
   - Track `encounters` run

3. **After Session:**
   - Update NPC `disposition` values
   - Complete quest objectives
   - Add session to `last_encounter` in NPCs

### Quest Chains
1. Create first quest normally
2. For follow-up quests:
   - Add first quest to `prerequisite_quests`
   - Quest won't show as available until prerequisite complete
3. Bases automatically track the chain

---

## 🛠️ Advanced Features

### Backlink Tracking
- `file.backlinks` shows who references each entity
- Automatically counts references
- Used for influence scoring

### Property Access from Links
- `Link.asFile()` accesses linked file properties
- Example: Get quest giver's disposition
- Enables complex relationship tracking

### Formula Examples
```yaml
# Count active quests for an NPC
active_quests: filter(property.related_quests, 
  Link.asFile().property.status != "completed")

# Calculate days until deadline
days_remaining: dateDiff(date(today), 
  property.deadline, "days")

# Network centrality score
influence: length(file.backlinks) + 
  length(property.relationships)
```

---

## 🐛 Troubleshooting

### Links Not Working
- Check exact spelling (case-sensitive)
- Ensure note exists
- Use `[[]]` format
- No quotes needed inside brackets

### Images Not Showing
- Check file path is correct
- Use relative path from vault root
- Ensure image is in correct folder
- Verify property name matches

### Bases Not Updating
- Refresh vault (Cmd/Ctrl + R)
- Check tag is present in frontmatter
- Verify property names match exactly
- Save all files

---

## 📖 Additional Resources

### Templates Available
- `Template-Loot-Table.md` - Treasure generation
- `Template-Player-Character.md` - PC tracking
- `Template-Random-Encounter.md` - Random encounters
- `Template-Settlement.md` - Town/city details
- `Template-World-Event-Timeline.md` - Campaign timeline

### Documentation
- **This Guide:** Complete reference
- **Implementation Log:** `IMPLEMENTATION_COMPLETE.md`
- **Technical Details:** `BASES_v1.9.7_IMPLEMENTATION_GUIDE.md`

### Community
- [Obsidian Forum](https://forum.obsidian.md)
- Discord: #tabletop-games
- [Joshua Plunkett's Patreon](https://patreon.com/JPlunkett)

---

## ✅ Vault Status

### Cleanup Completed
- ✅ Duplicate files archived
- ✅ Templates consolidated
- ✅ Images organized
- ✅ Bases configured for images
- ✅ Example content created
- ✅ Documentation unified

### Active Systems
- **6 Base Files** - All functional
- **5 Core Templates** - With full linking
- **3 Example Entities** - Demonstrating connections
- **Organized Assets** - Proper folder structure

### Archive Location
Old files safely stored in:
`Ω_Archive/pre-cleanup-2025-08-06/`

---

## 🚀 You're Ready!

Your vault is now:
- **Streamlined** - No duplicate files
- **Organized** - Clear folder structure
- **Connected** - Full entity linking
- **Visual** - Images in Cards views
- **Documented** - This comprehensive guide

**Start with:** `/00_Dashboard/Master_Campaign_Control_Center.md`

---

*Happy Gaming! 🎲*