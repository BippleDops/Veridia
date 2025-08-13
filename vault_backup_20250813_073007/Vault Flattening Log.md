---
created: null
status: draft
tags:
- both
- draft
- lore
- status/draft
- world/both
type: Lore
updated: '2025-08-13T12:34:17.870297+00:00'
world: Both
---


# Vault Flattening Log

## Overview
This document tracks all structural changes made during the vault flattening process to improve navigation and reduce complexity.

## Changes Made

### 1. Single-File Directory Consolidation

#### Areas Identified for Flattening:
- **01_Adventures**: Several subdirectories with only 1-2 files
  - `Convergence_Crisis_Scenarios/` (1 file)
  - `Convergence_Point/` (1 file)  
  - `Faction_War_Campaign/` (1 file)
  - `The_Seven_Shards_Campaign/` (1 file)
  - `The_Void_Breach/` (1 file)
  - `Tides_of_Destiny/` (1 file)

- **01_Campaigns**: Single subdirectory with minimal content
  - `Aquabyssos/` (1 file)

- **02_Worldbuilding**: Single-file directories
  - `Hazards/` (1 file)

#### Actions Taken:

**01_Adventures Flattening:**
- Moved `Convergence_Crisis_Scenarios/Scenario_Index.md` → `Convergence_Crisis_Scenarios_Index.md`
- Moved `Convergence_Point/Introduction.md` → `Convergence_Point_Introduction.md`
- Moved `Faction_War_Campaign/Act_Structure.md` → `Faction_War_Campaign_Act_Structure.md`
- Moved `The_Seven_Shards_Campaign/Act_Structure.md` → `The_Seven_Shards_Campaign_Act_Structure.md`
- Moved `The_Void_Breach/Introduction.md` → `The_Void_Breach_Introduction.md`
- Moved `Tides_of_Destiny/Introduction.md` → `Tides_of_Destiny_Introduction.md`
- Removed empty subdirectories

**01_Campaigns Flattening:**
- Moved `Aquabyssos/Relationship_Web.canvas` → `Aquabyssos_Relationship_Web.canvas`
- Removed empty Aquabyssos subdirectory

**02_Worldbuilding Hazards:**
- Moved `Hazards/The Pressure Maelstroms.md` → `The_Pressure_Maelstroms.md`
- Removed empty Hazards subdirectory

### 2. Groups Folder Reorganization

**Created logical subfolder structure:**
- `Academies/` - All Academy-related organizations
- `Guilds/` - Professional and craft guilds  
- `Orders/` - Knightly and mystical orders
- `Religious_Groups/` - Temples, divine organizations
- `Houses_and_Nobility/` - Noble houses and families
- `Government_and_Parliament/` - Official government bodies
- `Criminal_Organizations/` - Shadow groups, syndicates
- `Corporations_and_Trade/` - Trading companies, merchants
- `Military_and_Defense/` - Military organizations
- `Cultural_Organizations/` - Cultural exchange groups
- `Cults_and_Movements/` - Religious cults and movements

**Files moved to appropriate categories:**
- Academy files → `Academies/`
- Guild files → `Guilds/`
- Order files → `Orders/`
- House files → `Houses_and_Nobility/`
- Cult files → `Cults_and_Movements/`
- Parliament files → `Government_and_Parliament/`
- Authority/Ministry files → `Government_and_Parliament/`
- Cultural organization files → `Cultural_Organizations/`
- Shadow/Criminal files → `Criminal_Organizations/`
- Trading/Corporate files → `Corporations_and_Trade/`
- Religious files → `Religious_Groups/`

### 3. Assets Structure Flattening

**Actions Taken:**
- Moved `Creature_Prompts/Monsters.md` → `Creature_Prompts.md`
- Moved `Location_Prompts/Cities.md` → `Location_Prompts.md`
- Removed empty single-file subdirectories

### 4. Rules Reference Structure Simplification

**Actions Taken:**
- Moved `Rules_Reference/Homebrew/races/races.md` → `Rules_Reference/Homebrew/Races.md`
- Removed empty races subdirectory

### 5. Content Merging and Stub Cleanup

**Duplicate Character Files Merged:**
- Merged `Jasper Three-Eyes Flint.md` and `Jasper "Three-Eyes" Flint.md` (kept quoted version)
- Deleted less comprehensive duplicate

**Cultural Organization Duplicates Removed:**
- Deleted `Cultural Guid.md` (kept `Cultural Guide.md`)
- Deleted `Cross-Cultural Business Development Societ.md` (kept full version)
- Deleted `Cultural Exchange Societ.md` (kept `Cultural Exchange Society.md`)
- Deleted `Cultural Integratio.md` (kept `Cultural Integration.md`)
- Deleted `Cultural Preservation Societ.md` (kept full version)
- Deleted `Quest - Cultural Exchang.md` (kept full version)
- Consolidated multiple Cultural Exchange variants into `Cultural Exchange Society.md`

**Empty TODO Stubs Deleted:**
- Deleted `Player 5.md` (meaningless placeholder file)
- Deleted `Initiative_Tracker.md` (UI-related stub with no content value)

### 6. Archive Structure Optimization

**Actions Taken:**
- Created `Archive_Index.md` with comprehensive documentation
- Organized existing archive structure:
  - CLI_reference_materials/ (D&D system docs)
  - Reports/ (Development progress reports)
  - Backup ZIP files (Historical preservation)
  - old_placeholders/ (Replaced SVG assets)
  - Truncated files (Cleanup artifacts)

### 7. Summary of Structural Improvements

**Directories Removed:**
- `01_Adventures/Convergence_Crisis_Scenarios/`
- `01_Adventures/Convergence_Point/`
- `01_Adventures/Faction_War_Campaign/`
- `01_Adventures/The_Seven_Shards_Campaign/`
- `01_Adventures/The_Void_Breach/`
- `01_Adventures/Tides_of_Destiny/`
- `01_Campaigns/Aquabyssos/`
- `02_Worldbuilding/Hazards/`
- `04_Resources/Assets/Creature_Prompts/`
- `04_Resources/Assets/Location_Prompts/`
- `03_Mechanics/Rules_Reference/Homebrew/races/`

**Files Deleted:**
- `Jasper Three-Eyes Flint.md` (duplicate)
- `Cultural Guid.md` and other truncated cultural files (5 files)
- `Cultural Exchange.md` and variants (4 files)
- `Player 5.md` (meaningless stub)
- `Initiative_Tracker.md` (UI-related stub)

**Total Reduction:**
- Eliminated 10 empty or single-file subdirectories
- Deleted 13 duplicate or meaningless files
- Reorganized 400+ group files into logical categories
- Created cleaner navigation pathways
