# Vault Cleanup & Optimization Plan

## Files to Archive (Duplicates/Outdated)

### Dashboard Duplicates to Archive
- `00_Dashboard/DM_Dashboard.md` → Keep `Master_Campaign_Control_Center.md`
- `00_Dashboard/GM_Dashboard.md` → Keep `Master_Campaign_Control_Center.md`
- `00_Dashboard/Dashboard.md` → Keep `Master_Campaign_Control_Center.md`
- `00_Dashboard/Combat_Tracker.md` → Using `combat-tracker.base` instead
- `00_Dashboard/*.base` → Move to archive (duplicates of root .base files)

### Template Duplicates to Archive
- `Template-*.md` files → Keep `*_Template.md` versions (newer, with linking)

### Documentation to Consolidate
- Keep: `BASES_v1.9.7_IMPLEMENTATION_GUIDE.md` (most current)
- Archive: `BASES_IMPLEMENTATION_GUIDE.md` (older version)

## Asset Organization

### Image Folders Structure
```
Ω_Assets/
├── npcs/       # NPC portraits
├── locations/  # Location images & maps
├── quests/     # Quest images
├── items/      # Item artwork
├── Maps/       # Battle maps (existing)
├── banners/    # Page banners (existing)
└── icons/      # UI icons
```

## Base Files Updates Needed

### All Bases
- Add proper imageProperty settings for Cards view
- Ensure file paths use forward slashes
- Add proper filters for archived content

### Specific Updates
1. **npc-roster.base** - Set imageProperty to "Ω_Assets/npcs/"
2. **location-tracker.base** - Set imageProperty to "Ω_Assets/locations/"
3. **quest-tracker.base** - Set imageProperty to "Ω_Assets/quests/"

## Property Standardization

### NPC Properties
```yaml
portrait: "Ω_Assets/npcs/npc-name.jpg"  # Standardized path
```

### Location Properties
```yaml
map_image: "Ω_Assets/locations/location-name.jpg"
```

### Quest Properties
```yaml
quest_image: "Ω_Assets/quests/quest-name.jpg"
```

## Files to Keep Active

### Root Level (Keep)
- All `.base` files
- `BASES_v1.9.7_IMPLEMENTATION_GUIDE.md`
- `IMPLEMENTATION_COMPLETE.md`

### Templates (Keep Enhanced Versions)
- `NPC_Template.md`
- `Quest_Template.md`
- `Location_Template.md`
- `Session_Template.md`
- `Encounter_Template.md`

### Dashboard (Keep One)
- `Master_Campaign_Control_Center.md`

## Archive Strategy
Move duplicates to `Ω_Archive/pre-cleanup-2025-08-06/` for safety