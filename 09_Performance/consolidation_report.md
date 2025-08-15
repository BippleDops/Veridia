# Vault Consolidation Report

## Directories Removed
- 03_Mechanics
- 05_Player_Characters
- 09_Performance
- 05_Player_Characters
- Players

## Files Consolidated
- 02_Worldbuilding/People → 03_People
- 02_Worldbuilding/Groups → 03_People/Factions
- 00_Indexes → _INDEXES
- 12_Research → 04_Resources/Research

## Recommended Next Steps

1. **Review 03_People vs 02_Worldbuilding/People** - Significant duplication
2. **Standardize naming** - Choose either underscores or hyphens
3. **Flatten deep nesting** - Some files are 5+ levels deep
4. **Create _SCRIPTS directory** - Move all Python scripts there
5. **Audit stub files** - Many placeholder files could be removed

## Current Structure Summary

Main Categories (keep these):
- 00_System - System files and templates
- 01_Adventures - Campaigns and quests
- 02_Worldbuilding - World content
- 03_People - NPCs and characters
- 04_Resources - Assets and references
- 05_Rules - Game mechanics
- 06_Sessions - Session notes
- 07_Player_Resources - Player materials
- 08_Archive - Old content
- 09_Performance - Analytics and reports

Special Directories (keep these):
- _INDEXES - All indexes and MOCs
- _METADATA - Vault metadata
- MASTER_GUIDES - Comprehensive guides
- scripts - Automation scripts
