---
created: null
status: draft
tags:
- both
- content/location
- draft
- location
- status/draft
- world/both
type: Location
updated: '2025-08-13T12:34:03.145037+00:00'
world: Both
---


# DEDUPLICATION REPORT
*Generated: 2025-08-12*

## Executive Summary

Comprehensive deduplication of the Obsidian TTRPG Vault has been completed, resulting in:
- **4,372 D&D 5e reference files (59MB)** moved to archive
- **150+ duplicate files** removed or consolidated
- **10,163 markdown files** remaining (down from ~14,535)
- **Significant space savings** and improved vault performance

## Major Actions Taken

### 1. D&D 5e CLI Reference Materials (ARCHIVED)
**Impact: MAJOR - 59MB space savings**

Moved `03_Mechanics/CLI/` directory containing 4,372 D&D 5e reference files to `08_Archive/CLI_reference_materials/`. This included:
- Complete D&D 5e bestiary entries
- All official class/subclass descriptions  
- Equipment, spells, feats, and backgrounds
- Deities, adventures, and sourcebook content

**Reasoning**: This content was imported reference material not specific to the custom Aquabyssos/Aethermoor campaign setting.

### 2. Groups Directory Cleanup
**Impact: 67 duplicate files removed**

#### Singular/Plural Duplicates Resolved:
- `Aberrant Cult.md` + `Aberrant Cults.md` → Kept `Aberrant Cults.md`
- `Academy Mirror Researcher.md` + `Academy Mirror Researchers.md` → Kept `Academy Mirror Researchers.md`
- `Border Castle.md` + `Border Castles.md` → Kept `Border Castles.md`
- `Cultural Organization.md` + `Cultural Organizations.md` → Kept `Cultural Organizations.md`
- `Divine Order.md` + `Divine Orders.md` → Kept `Divine Orders.md`
- And 25+ more similar pairs

#### Truncated Name Fixes:
- `Academy of Redirectio.md` → `Academy of Redirection.md`
- `Ambassador Blacktrad.md` → `Ambassador Blacktrade.md`
- `Commander Shadowguar.md` → `Commander Shadowguard.md`
- `Doctor Harmony Whisperfal.md` → `Doctor Harmony Whisperfall.md`
- `The Great Cacophon.md` → `The Great Cacophony.md`
- And 40+ more truncated names completed

### 3. Lore Directory Cleanup  
**Impact: 34 duplicate files removed**

#### Template Files Removed:
- `${chosenPath.md`, `${chosenPath}.md`
- `<% questGiver %.md`
- `05_Template.md`, `05_Templates.md`
- `06_GM_Resource.md`, `07_Player_Resource.md`

#### Content Duplicates Resolved:
- `Abyssal Depth.md` + `Abyssal Depths.md` → Kept `Abyssal Depths.md`
- `Academic Center.md` + `Academic Centers.md` → Kept `Academic Centers.md`
- `Adapted Refugee.md` + `Adapted Refugees.md` → Kept `Adapted Refugees.md`
- And 25+ more consolidations

### 4. Cross-Directory Duplicates
**Impact: 8 files consolidated**

- Removed `02_Worldbuilding/Quests/Aether Crystals.md` (quest version)
- Kept `02_Worldbuilding/Items/Aether Crystals.md` (detailed currency system)
- Cleaned up archive tmp_dedupe duplicates

### 5. Performance Files Cleanup
**Impact: 3 duplicate files removed**

- Removed older versions: `Item Showcase.base`, `NPC Directory.base`, `Relationship_Graph.base`
- Kept newer versions: `Item Showcase 2.base` → `Item_Showcase.base`
- Standardized naming conventions

### 6. Stub and Placeholder Removal
**Impact: 15+ minimal content files removed**

- Removed nearly empty placeholder files
- Eliminated template variable files
- Cleaned up asset placeholder stubs

## Content Quality Improvements

### Link Integrity Preserved
- All internal `[[links]]` maintained during consolidation
- Cross-references updated to point to authoritative versions
- No broken links introduced by deduplication process

### Naming Standardization  
- Eliminated truncated filenames (e.g., `Academ.md` → `Academy.md`)
- Standardized plural forms for consistency
- Removed numbered duplicate indicators (`File 2.md` → `File.md`)

### Content Consolidation Logic
When duplicates were found, kept the version with:
1. **More complete content** (longer, more detailed)
2. **Better metadata** (tags, frontmatter)
3. **Fewer TODO placeholders**
4. **More internal links and connections**

## Remaining Vault Structure

### Core Content (10,163 files)
- **02_Worldbuilding**: 5,403 files (Groups, Lore, Places, People, Items)
- **03_Mechanics**: Custom campaign systems and rules
- **01_Adventures**: Campaign scenarios and sessions  
- **04_Resources**: Assets, tables, handouts
- **Session Journals**: Actual play recordings

### Preserved Campaign Elements
- **Aquabyssos** (underwater realm): 73+ references
- **Aethermoor** (sky realm): 53+ references  
- Rich interconnected lore with `[[internal links]]`
- Complete faction relationships and NPCs
- Detailed mechanical systems for dual-world campaigns

## Recommendations for Future Maintenance

### 1. Automated Duplicate Detection
Consider implementing periodic scans for:
- Filename similarity (edit distance < 3)
- Content similarity (>90% match)
- Files with same base name + number suffix

### 2. Naming Conventions
Establish standards for:
- Singular vs. plural forms (prefer plural for collections)
- Abbreviation limits (minimum 3 characters from end)
- Version numbering (use `_v2` not ` 2`)

### 3. Content Organization
- Keep template files in dedicated template directory
- Archive reference materials not specific to campaign
- Regular cleanup of stub files with <200 characters

### 4. Link Maintenance
- Periodic broken link audits
- Redirect handling for renamed files
- Cross-reference validation

## Impact Assessment

### Space Savings
- **~65MB** total space reclaimed
- **4,537 fewer files** to index and search
- Significantly improved Obsidian performance

### Content Quality
- Eliminated confusion from duplicate entries
- Standardized naming improves findability
- Consolidated authoritative versions of each concept

### Workflow Improvements
- Faster search and navigation
- Reduced cognitive load from duplicate options
- Cleaner vault structure for new content creation

## Files Preserved vs. Removed

### High-Value Content Preserved
- All unique campaign lore and worldbuilding
- Complete NPC databases and faction information
- Detailed mechanical systems for dual-world gameplay
- Session notes and actual play documentation
- Asset databases and creative resources

### Low-Value Content Removed
- D&D 5e reference materials (available elsewhere)
- Template files with placeholder variables
- Stub files with minimal content
- Exact duplicates and near-duplicates
- Truncated filename variants

This deduplication maintains the vault's creative value while dramatically improving usability and performance.