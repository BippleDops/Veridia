# Detected Inconsistencies & Resolutions
*Audit Date: 2025-08-08*

## 🔍 NPC Discrepancies

### Marina Character Variants
**Issue**: Three different Marina characters across campaigns
- `Marina-Red-Tide-Coralheart.md` (Aethermoor) - Smuggler with bloodline
- `Duchess Marina Ever-Drowning.md` (Aquabyssos) - Memory merchant noble
- `Marina Saltwhisper.md` (Campaign_Name) - Template tavern keeper

**Resolution**: 
- First two are intentionally different (cross-world versions of same soul)
- Third is template file - marked for deletion
- **Action**: Delete Campaign_Name template, document cross-world connection

### Captain Lyanna Brightshield Duplicates
**Issue**: Two files with different naming conventions
- `Captain-Lyanna-Brightshield.md` (dashes)
- `Captain Lyanna Brightshield.md` (spaces)

**Resolution**:
- Merge content into single file using space convention
- **Action**: Consolidate to `Captain Lyanna Brightshield.md`, delete dash version

### Senator Glaucus Split
**Issue**: Two files representing same character
- `Senator Glaucus.md` - Standard format
- `Senator_Glaucus_Brain.md` - Advanced brain format

**Resolution**:
- Intentional split (brain separated from body in story)
- **Action**: Add cross-references between files, clarify in documentation

## 📍 Location Discrepancies

### Abyssos Prime Duplicates
**Issue**: Two files with different naming
- `Abyssos Prime.md` (spaces)
- `Abyssos-Prime.md` (dashes)

**Resolution**:
- Consolidate to space convention for consistency
- **Action**: Merge content to `Abyssos Prime.md`, delete dash version

## 📅 Session Naming Inconsistencies

### Format Differences
**Issue**: Different campaigns use different conventions
- Aethermoor: `Session-##-Title-With-Dashes.md`
- Aquabyssos: `Session ## - Title With Spaces.md`

**Resolution**:
- Standardize to Aquabyssos format (more readable)
- **Action**: Rename all Aethermoor sessions to match

**Renaming Plan**:
```
Session-01-Blood-in-the-Harbor.md → Session 01 - Blood in the Harbor.md
Session-02-The-Lighthouse-of-Storms.md → Session 02 - The Lighthouse of Storms.md
[etc...]
```

## 🗂️ File Management Issues

### Backup Files (.bak)
**Issue**: Four .bak files in Ω_Archive
- `0-Obsidian TTRPG Tutorial.md.bak`
- `AI_INTEGRATION_DEMO.md.bak`
- `SPOTIFY_INTEGRATION_COMPLETE.md.bak`
- `SYSTEM_SETUP_COMPLETE.md.bak`

**Resolution**:
- Archive unnecessary, Git handles versioning
- **Action**: Delete all .bak files

### Untitled Files
**Issue**: Three untitled files in 0-Scratch Notes
- `Untitled.md`
- `Untitled 1.md`
- `Untitled [conflicted].md`

**Resolution**:
- Review content, merge if valuable
- **Action**: Delete or rename with descriptive titles

### Template Campaign
**Issue**: Campaign_Name folder contains 57 NPCs, 54 locations
- Appears to be example/template content
- Takes significant space

**Resolution**:
- Move to templates or archive
- **Action**: Relocate to `05_Templates/Example_Campaign/`

## 🔗 Linking Issues

### Cross-Campaign References
**Issue**: Shared NPCs not properly linked between campaigns
- Marina Coralheart appears in both worlds
- Captain Blackwater / Admiral Thorne connection unclear
- Crimson Sage / Resonance Prophet relationship undocumented

**Resolution**:
- Create cross-reference notes
- **Action**: Add "Cross-World Connections" section to each NPC

### Broken Internal Links
**Issue**: Some links point to non-existent or moved files
- References to deleted dashboard files
- Links to reorganized automation scripts

**Resolution**:
- Run link validation
- **Action**: Update all broken links after reorganization

## 📊 Database Inconsistencies

### Multiple Base Files
**Issue**: Duplicate database purposes
- `combat-tracker.base` and `Combat Tracker.base`
- `npc-roster.base` and `NPC Directory.base`
- `quest-tracker.base` and `Quest Campaign Tracker.base`

**Resolution**:
- Consolidate to single version of each
- **Action**: Merge databases, use descriptive names

## ✅ Priority Actions

### Immediate (Do First)
1. [ ] Delete all .bak files
2. [ ] Remove/consolidate Untitled files
3. [ ] Merge duplicate NPC files
4. [ ] Merge duplicate location files

### Short-term (This Session)
1. [ ] Standardize session naming conventions
2. [ ] Consolidate duplicate Base files
3. [ ] Move Campaign_Name to templates
4. [ ] Fix broken internal links

### Long-term (Future Sessions)
1. [ ] Create comprehensive cross-world reference system
2. [ ] Implement automated link checking
3. [ ] Build validation scripts for consistency
4. [ ] Document all intentional duplicates

## 📈 Progress Tracking

### Files to Delete (12 total)
- [ ] 4 .bak files
- [ ] 3 Untitled files
- [ ] 2 duplicate NPC files
- [ ] 1 duplicate location file
- [ ] 2 redundant Base files

### Files to Rename (10+ sessions)
- [ ] All Aethermoor session files
- [ ] NPCs with dash naming
- [ ] Locations with inconsistent naming

### Content to Merge
- [ ] Captain Lyanna Brightshield versions
- [ ] Abyssos Prime versions
- [ ] Duplicate Base databases

---

*This log tracks all identified inconsistencies and their resolution status. Update checkboxes as items are completed.*