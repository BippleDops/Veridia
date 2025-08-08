# Quick Query Reference for AI Assistants
*Comprehensive guide for navigating the vault and finding information quickly*

## 🎯 Common Questions & Where to Find Answers

### Session Information
**"What happened last session?"**
- Check: `01_Campaigns/[Campaign]/Sessions/Session [X].md`
- Latest Aethermoor: Session 10 - The Deep Mother Rises
- Latest Aquabyssos: Session 10 - The Shadow Finale

**"What's the party's current level?"**
- Check: `_CAMPAIGN_CONTEXT.md` → Current Status section
- Default: Level 3-5 (varies by campaign)

**"Who attended session X?"**
- Check: Session file → Metadata → `players` field
- Or: `campaign-dashboard.base` → Session view

### NPC Information
**"What's NPC X's motivation?"**
- Primary: `01_Campaigns/[Campaign]/NPCs/[Name].md` → `motivation` field
- Database: `npc-roster.base` → Filter by name
- Quick ref: `_CAMPAIGN_CONTEXT.md` → NPC Relationship Summary

**"Which NPCs are in [location]?"**
- Check: `01_Campaigns/[Campaign]/Locations/[Location].md` → NPCs section
- Database: `location-tracker.base` → Resident NPCs view
- Cross-ref: `npc-roster.base` → Filter by location

**"What's the relationship between X and Y?"**
- Visual: `relationship-graph.base` → Network view
- Canvas: `01_Campaigns/Aquabyssos/Relationship_Web.canvas`
- Notes: Individual NPC files → relationships field

### Mechanics & Rules
**"How does crystal corruption work?"**
- Full rules: `03_Rules_Reference/Homebrew/Crystal-Plague-Mechanics.md`
- Quick ref: `_5E_CONNECTIONS.md` → Crystal Corruption Condition
- In practice: `_CAMPAIGN_CONTEXT.md` → Rules Modifications

**"What are the depth adaptation rules?"**
- Aquabyssos: `01_Campaigns/Aquabyssos/Mechanics/Depth Survival Mechanics.md`
- Complete: `02_Worldbuilding/Aquabyssos-Survival-Mechanics.md`
- Quick ref: `_5E_CONNECTIONS.md` → Depth Sickness

**"How do factions work?"**
- System: `_CAMPAIGN_CONTEXT.md` → Faction Reputation
- Current standings: Check individual campaign overview
- Relationships: `02_Worldbuilding/Factions/` folder

### Quest & Story Information
**"What quests are active?"**
- Database: `quest-tracker.base` → Active view
- Campaign specific: `01_Campaigns/[Campaign]/Quests/`
- Context: `_CAMPAIGN_CONTEXT.md` → Active Threats

**"What are the Seven Shards?"**
- Lore: `01_Campaigns/Aethermoor/Lore/The Seven Shards.md`
- Current status: `_CAMPAIGN_CONTEXT.md` → The Seven Shards
- Mechanics: `_5E_CONNECTIONS.md` → Seven Shards Artifacts

**"What's the main plot?"**
- Overview: `_WORLD_SUMMARY.md` → Campaign overview
- Current: `_CAMPAIGN_CONTEXT.md` → Quick Campaign Primer
- Details: Campaign Overview files in each campaign folder

### Location Information
**"What's in [location]?"**
- Primary: `01_Campaigns/[Campaign]/Locations/[Location].md`
- Database: `location-tracker.base` → Search by name
- Connected: Check `connected_locations` field

**"Which locations are dangerous?"**
- Database: `location-tracker.base` → Dangerous Areas view
- Status: `_CAMPAIGN_CONTEXT.md` → Location Status
- Destroyed: `_INCONSISTENCIES_LOG.md` → Location updates

### Combat & Encounters
**"What's the initiative order?"**
- Active: `combat-tracker.base` → Initiative Tracker view
- Templates: `05_Templates/Encounter_Template.md`
- Quick ref: `03_Rules_Reference/Quick_Reference/` DM screens

**"What monsters are appropriate?"**
- Homebrew: `03_Rules_Reference/Homebrew/Bestiary/`
- 5e conversions: `_5E_CONNECTIONS.md` → Monster Manual Connections
- CLI reference: `Ω_System/CLI/bestiary/`

## 📁 Vault Navigation Tips

### File Organization Structure
```
Root Level Summary Files (_*.md):
- _VAULT_OVERVIEW.md - Statistics and structure
- _WORLD_SUMMARY.md - Campaign world details
- _CAMPAIGN_CONTEXT.md - Current campaign state
- _5E_CONNECTIONS.md - Homebrew to official mapping
- _QUERY_HELPER.md - This file
- _AI_CONTEXT.md - Themes and tone
- _INCONSISTENCIES_LOG.md - Known issues
- _VALIDATION_REPORT.md - System check results

Campaign Content:
- 01_Campaigns/[Campaign]/[Type]/[Name].md
- Types: NPCs, Locations, Sessions, Quests, Lore, Factions

Databases (.base files):
- campaign-dashboard.base - Session timeline
- npc-roster.base - Character database
- quest-tracker.base - Quest management
- location-tracker.base - Location database
- combat-tracker.base - Initiative tracking
- relationship-graph.base - NPC connections
```

### Search Strategies

#### Finding Content Fast
1. **Use Grep for text search**: Search content within files
2. **Use Glob for file patterns**: Find files by name pattern
3. **Check Bases first**: Structured data is faster to query
4. **Follow naming conventions**: Predictable paths save time

#### Common Search Patterns
```bash
# Find all NPCs in a campaign
Glob: "01_Campaigns/*/NPCs/*.md"

# Find all sessions mentioning a character
Grep: "Marina" in "01_Campaigns/*/Sessions/"

# Find all crystal-related mechanics
Grep: "crystal" in "03_Rules_Reference/"

# Find faction information
Glob: "**/Factions/*.md"
```

## 🔗 Content Relationships

### Cross-Campaign Connections
**Aethermoor ↔️ Aquabyssos**
- Same timeline, different dimensions
- Crystal plague = Depth calling
- Seven Shards = Dimensional anchors
- Shared NPCs exist in both worlds

### NPC Web
```
Marina Coralheart (bloodline carrier)
    → Captain Lyanna (ally)
    → Queen Seraphina (unknown connection)
    → Vex Shadowthorn (enemy)
    → Senator Glaucus (Aquabyssos version)
```

### Location Hierarchy
```
World → Continent → Region → City → District → Building
Example: Aquabyssos → Abyssos Prime → Parliament District → Parliament of Echoes
```

## 🛠️ Database Queries

### Most Useful Base Views

#### campaign-dashboard.base
- **Recent Sessions**: Last 5 sessions with details
- **NPC Appearances**: Which NPCs appeared when
- **Timeline**: Chronological campaign progression

#### npc-roster.base
- **By Location**: NPCs grouped by current location
- **Quest Givers**: NPCs with active quests
- **Gallery**: Visual NPC browser with images

#### quest-tracker.base
- **Active**: Current quests by priority
- **Blocked**: Quests awaiting prerequisites
- **Quest Board**: Visual card layout

#### location-tracker.base
- **Quest Hubs**: Locations with multiple quests
- **Dangerous Areas**: High-threat locations
- **Gallery**: Visual location browser

## 📝 Quick Answer Templates

### For Campaign Questions
"The party is currently [level X] in [location], dealing with [current threat]. Last session they [major event]. Their immediate goal is [next objective]."

### For NPC Questions
"[NPC name] is a [role/class] located in [location], allied with [faction]. Their motivation is [goal] and they're currently [status/activity]."

### For Mechanics Questions
"[Mechanic name] works by [brief explanation]. Full rules are in [file path]. It's based on [5e reference] with [modification]."

### For Location Questions
"[Location] is a [type] in [region] with [notable features]. Current status: [accessible/restricted/destroyed]. Important NPCs there include [list]."

## 🚨 Important Vault Conventions

### Naming Patterns
- NPCs: `[First] [Last].md` or `[Title] [Name].md`
- Sessions: `Session ## - Title.md`
- Locations: `[Location Name].md` (no the/a)
- Quests: `Quest - [Quest Name].md`

### Metadata Standards
Every file should have frontmatter with:
- `tags`: Classification tags
- `type`: Content type (npc/location/session/quest)
- `status`: Current state (active/completed/deceased)
- `created`: Creation date
- `modified`: Last edit date

### Linking Conventions
- Use `[[Name]]` for wiki-style links
- Backlinks automatically tracked
- Aliases in frontmatter for alternate names
- Cross-campaign links marked clearly

## 🎮 Campaign Management Tips

### Before Each Session
1. Check `_CAMPAIGN_CONTEXT.md` for current state
2. Review relevant NPCs in `npc-roster.base`
3. Check active quests in `quest-tracker.base`
4. Prepare encounters using templates

### After Each Session
1. Update session file with events
2. Mark completed quests
3. Update NPC statuses
4. Log loot and experience
5. Update `_CAMPAIGN_CONTEXT.md` if major changes

### For Quick Reference During Play
Keep open:
- `_CAMPAIGN_CONTEXT.md` - Current state
- `combat-tracker.base` - For encounters
- `npc-roster.base` - For roleplay
- DM Screen files - For rules

---

*This guide helps AI assistants and DMs quickly locate information within the vault. Reference specific file paths when answering queries for maximum accuracy.*