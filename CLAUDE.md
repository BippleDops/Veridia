---
created: 2024-01-01
updated: 2024-01-01
---

# Claude Code Configuration - Cordelia World Building

## Project Overview
This is a comprehensive TTRPG vault for the world of Cordelia, encompassing the dual realms of Aquabyssos (underwater kingdom) and Aethermoor (sky kingdom). The vault contains 739+ documents including worldbuilding lore, NPCs, locations, mechanics, and campaign materials.

## Core Themes & Elements
- **Duality**: Ocean vs Sky, Pressure vs Wind, Depths vs Heights
- **Corruption**: Shadow Conspiracy, Void Touch, Crystal Plague, Reality Distortion
- **Unity**: Cross-realm cooperation, merged realities, cultural exchange
- **Transformation**: Physical mutations, consciousness alterations, reality mergers
- **Ancient Powers**: Deep Mother entity, Seven Shards, Lighthouse of Storms

## Key Narrative Threads
1. **Shadow Conspiracy**: Government infiltration through consciousness manipulation
2. **Crystal Plague**: Spreading corruption affecting Queen Seraphina
3. **The Deep Mother**: Eldritch entity threatening reality itself
4. **Seven Shards Quest**: Ancient artifacts with reality-altering powers
5. **Parliamentary Corruption**: Shadow Chamber controlling Aquabyssos government
6. **Cross-World Tensions**: Trade wars, diplomatic crises, cultural conflicts

## Important NPCs to Develop
- Queen Seraphina Lumengarde (Crystal Queen with hidden corruption)
- Emperor Thalassius (Deep Ruler balancing power)
- Vex Shadowthorn (Shadow Surgeon Prime)
- Lord Aurelius Goldwave (Merchant with redemption quest)
- The Deep Mother (Cosmic entity)

## Priority Development Areas
1. **Shadow Conspiracy Details**: Expand surgical facilities, infiltration methods, consciousness tech
2. **Crystal Plague Progression**: Stages, symptoms, cure research, social impact
3. **Deep Mother Manifestations**: Cultists, reality breaches, eldritch influences
4. **Economic Systems**: Trade routes, currency, cross-world commerce
5. **Political Intrigue**: Parliamentary procedures, faction relationships, succession crises

## Automation Tasks
- Generate interconnected NPCs with deep relationships
- Create location descriptions with sensory details
- Develop quest hooks linking major narrative threads
- Build encounter tables for different regions/depths
- Establish trade good catalogs and economic flows
- Design faction missions and reputation systems

## Code Conventions
- Use existing templates in 05_Templates/
- Follow metadata format with tags, status, world, type fields
- Create bidirectional links using [[WikiLink]] syntax
- Place new content in appropriate 02_Worldbuilding subdirectories
- Run scripts/link_assets.js after adding new content

## Testing & Validation
- Check for broken links with scripts/redlink_resolver.py
- Validate metadata with scripts/metadata_linter.py
- Ensure timeline consistency with scripts/timeline_alignment_checker.py
- Run content depth audit with scripts/content_depth_audit.py

## AI Assistant Guidelines
When developing content:
1. Maintain internal consistency with existing lore
2. Create multi-layered conflicts (personal, political, cosmic)
3. Include sensory descriptions for immersion
4. Build interconnected storylines not isolated content
5. Consider pressure/altitude mechanics in all encounters
6. Reference existing NPCs and locations frequently
7. Add moral complexity to faction relationships
8. Include both public faces and hidden truths for organizations

## Quick Command Reference
```bash
# Generate new assets
node scripts/generate_assets.js --limit=50 --types=portrait,location

# Link and organize content  
node scripts/link_assets.js

# Validate vault integrity
DRY_RUN=1 python3 scripts/redlink_resolver.py
DRY_RUN=1 python3 scripts/metadata_linter.py

# Apply all fixes with backup
BACKUP_DIR=backups/$(date +%F) scripts/safe_apply.sh
```

## Current Focus: Phase 5 Enhancement
Simultaneously developing:
- Shadow Conspiracy investigation chains
- Crystal Plague medical research storylines  
- Deep Mother cult activities
- Cross-world diplomatic missions
- Economic warfare scenarios
- Reality merger events