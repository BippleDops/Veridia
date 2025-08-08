# Obsidian TTRPG Bases v1.9.7 Complete Implementation Guide

## 🚀 What's New in v1.9.7 (August 2025)

### Major Features
- **file.backlinks** - Access all notes that link to the current file
- **file() and Link.asFile()** - Access properties from linked files
- **Cards View** - Visual gallery display with image support
- **Enhanced Formulas** - Better autocomplete and error display
- **Image Properties** - Display images from text properties with file paths
- **Improved Performance** - Faster rendering of large bases

## 📁 Installed Base Files

### Core Campaign Bases

#### 1. **combat-tracker.base**
- Tracks active combat with initiative order
- Links to NPCs involved in combat
- Calculates threat levels and damage percentages
- **Views:** Table (Active Combat), Cards (Combat Cards)
- **Key Features:** 
  - Auto-calculates initiative with DEX modifiers
  - Links to session where combat occurred
  - Visual threat indicators

#### 2. **npc-roster.base**
- Complete NPC database with relationship tracking
- Links to quests, locations, and other NPCs
- Tracks disposition changes and last encounters
- **Views:** Table (by Location, All NPCs), Cards (Gallery), Quest Givers
- **Key Features:**
  - Relationship network visualization
  - Quest involvement tracking
  - Backlink counting for influence

#### 3. **quest-tracker.base**
- Quest management with prerequisite tracking
- Links to quest givers (NPCs) and locations
- Auto-calculates urgency based on deadlines
- **Views:** Active, Blocked, Quest Board (Cards), Completed
- **Key Features:**
  - Prerequisite checking
  - Progress percentage tracking
  - NPC disposition integration

#### 4. **location-tracker.base**
- Location database with population tracking
- Links to resident NPCs and active quests
- Tracks visits and danger levels
- **Views:** All Locations, Quest Hubs, Gallery (Cards), Dangerous Areas
- **Key Features:**
  - Auto-counts resident NPCs via backlinks
  - Travel connection mapping
  - Faction influence tracking

#### 5. **relationship-graph.base**
- Visualizes all entity relationships
- Tracks allies, enemies, and neutral connections
- Calculates network centrality and influence
- **Views:** Network, Most Connected, Character Gallery (Cards), Conflict Map
- **Key Features:**
  - Bidirectional relationship tracking
  - Faction affiliation display
  - Romance and family tracking

#### 6. **campaign-dashboard.base**
- Session timeline with comprehensive linking
- Tracks NPCs met, quests progressed, locations visited
- Calculates attendance and participation
- **Views:** Recent Sessions, Timeline, Milestone Gallery (Cards), NPC Appearances
- **Key Features:**
  - Multi-entity linking per session
  - Combat time tracking
  - Loot distribution logging

## 🔗 Linking System Architecture

### How Links Work

```yaml
# In an NPC note:
---
location: "[[Market District]]"  # Links to location note
faction: "[[Merchant's Guild]]"  # Links to faction note
relationships:
  - "[[Gareth Ironforge]]"  # Links to other NPCs
  - "[[Elena Starweaver]]"
related_quests:
  - "[[Find the Missing Caravan]]"  # Links to quests
---
```

### Accessing Linked Properties

```yaml
# In a Base formula:
formulas:
  # Get the name of the linked location
  location_name: file(property.location).name
  
  # Get properties from linked NPCs
  giver_disposition: file(property.quest_giver).property.disposition
  
  # Count backlinks (who references this note)
  influence: length(file.backlinks)
  
  # Filter linked files by criteria
  active_quests: filter(property.related_quests, Link.asFile().property.status != "completed")
```

## 📝 Template System

### Available Templates
1. **NPC_Template.md** - Full NPC with relationships and quest links
2. **Quest_Template.md** - Quest with prerequisites and NPC links
3. **Location_Template.md** - Location with residents and services
4. **Session_Template.md** - Session with all entity tracking
5. **Encounter_Template.md** - Combat with participant links

### Key Linking Properties

#### NPCs
- `location: "[[Location Name]]"` - Current location
- `faction: "[[Faction Name]]"` - Faction membership
- `relationships: ["[[NPC Name]]"]` - Connected NPCs
- `related_quests: ["[[Quest Name]]"]` - Associated quests
- `last_encounter: "[[Session-X]]"` - Last appearance

#### Quests
- `quest_giver: "[[NPC Name]]"` - Who gave the quest
- `location: "[[Location Name]]"` - Where it takes place
- `related_npcs: ["[[NPC Name]]"]` - Involved NPCs
- `prerequisite_quests: ["[[Quest Name]]"]` - Required completions

#### Locations
- `faction: "[[Faction Name]]"` - Controlling faction
- `connected_locations: ["[[Location Name]]"]` - Travel links
- NPCs automatically linked via their `location` property

#### Sessions
- `primary_location: "[[Location Name]]"` - Main location
- `locations_visited: ["[[Location Name]]"]` - All locations
- `npcs_met: ["[[NPC Name]]"]` - NPCs encountered
- `encounters: ["[[Encounter Name]]"]` - Combats run
- `quests_started: ["[[Quest Name]]"]` - New quests

## 🎯 Workflow Examples

### Creating a Quest Chain

1. Create Quest 1:
```yaml
---
tags: [quest]
quest_giver: "[[Mayor Thompson]]"
status: "active"
---
```

2. Create Quest 2 with prerequisite:
```yaml
---
tags: [quest]
prerequisite_quests: ["[[Quest 1]]"]
status: "available"
---
```

Quest 2 won't appear in Active Quests until Quest 1 is completed!

### Tracking NPC Relationships

1. In NPC 1:
```yaml
relationships:
  - "[[NPC 2]]"
disposition: 8  # They're friends
```

2. In NPC 2:
```yaml
relationships:
  - "[[NPC 1]]"
disposition: 7  # Mutual friendship
```

The Relationship Graph will show their connection!

### Running a Session

1. Before session, create note from Session_Template
2. Add planned NPCs and locations
3. During play, update:
   - `npcs_met` as they appear
   - `quests_started` when given
   - `encounters` when combat happens
4. After session, update NPC `disposition` values

## 🎨 View Types

### Table View
- Standard sortable/filterable table
- Best for data analysis
- All bases support this

### Cards View (New!)
- Visual gallery with images
- Set `imageProperty` to display images
- Great for NPCs, locations, items
- Example: `imageProperty: property.portrait`

### Coming Soon
- Graph view for relationships
- Calendar view for sessions
- Kanban view for quest tracking
- Gallery view enhancements

## 🔧 Advanced Formulas

### Relationship Scoring
```yaml
influence_score: property.influence * length(file.backlinks)
```

### Quest Urgency
```yaml
urgency: if(dateDiff(date(today), property.deadline, "days") < 3, "URGENT", "Normal")
```

### NPC Network Centrality
```yaml
centrality: length(file.backlinks) + length(property.relationships)
```

### Location Population
```yaml
population: filter(file.backlinks, Link.asFile().property.location == file.link)
```

## 🐛 Troubleshooting

### Common Issues

1. **Links not working**
   - Ensure exact `[[Note Name]]` format
   - Check note exists with exact name
   - Case-sensitive!

2. **Formulas showing errors**
   - Check property names match exactly
   - Verify linked notes have expected properties
   - Use formula autocomplete (v1.9.7)

3. **Backlinks not counting**
   - Refresh the vault (Cmd/Ctrl + R)
   - Ensure notes are saved
   - Check link syntax

4. **Cards view not showing images**
   - Set `imageProperty` in view config
   - Use relative paths from vault root
   - Supported: JPG, PNG, GIF, WebP

## 📚 Resources

### Official Documentation
- [Obsidian Bases Help](https://help.obsidian.md/bases)
- [Bases Syntax Guide](https://help.obsidian.md/bases/syntax)
- [Functions Reference](https://help.obsidian.md/bases/functions)

### Community Resources
- Joshua Plunkett's Patreon: patreon.com/JPlunkett
- Obsidian TTRPG Tutorials: obsidianttrpgtutorials.com
- Discord: #tabletop-games channel
- Reddit: r/ObsidianMD

### Version Requirements
- **Minimum:** Obsidian v1.9.0
- **Recommended:** Obsidian v1.9.7+
- **Access:** Requires Obsidian Insider (Catalyst license)

## 🎉 Tips for Success

1. **Start Simple** - Begin with NPC roster, add complexity gradually
2. **Consistent Naming** - Use exact same names for reliable linking
3. **Regular Updates** - Update properties after each session
4. **Use Templates** - Consistency ensures Bases work properly
5. **Experiment** - Try different views and formulas
6. **Join Community** - Share discoveries and get help

---

*Implementation Guide for Obsidian Bases v1.9.7*
*Last Updated: August 6, 2025*
*Following Joshua Plunkett's TTRPG Methodology*