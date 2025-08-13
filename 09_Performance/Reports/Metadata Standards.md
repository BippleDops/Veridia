---
created: '2025-08-12'
status: complete
tags:
- documentation
- metadata
- standards
- status/in-progress
- vault-standards
- world/both
type: Lore
updated: '2025-08-12T23:37:32.998758'
world: Both
---


# Vault Metadata Standards

## Standard Frontmatter Templates

### NPCs
```yaml
---
tags:
  - npc
  - [faction-tag]
  - [location-tag]
type: NPC
race: "Race (subrace if applicable)"
class: "Class/Profession"
level: X
alignment: "Alignment"
location: "[[Current_Location]]"
faction: "[[Faction_Name]]"
status: "active/missing/dead/unknown"
world: "Aquabyssos/Aethermoor/Both"
created: YYYY-MM-DD
updated: YYYY-MM-DD
image: "04_Resources/Assets/NPCs/filename.jpg"
---
```

### Groups/Organizations
```yaml
---
tags:
  - group
  - [faction-category]
  - [world-tag]
type: Group
world: "Aquabyssos/Aethermoor/Both"
status: "active/disbanded/hidden/unknown"
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

### Locations
```yaml
---
tags:
  - location
  - [location-type]
  - [world-tag]
type: Location
world: "Aquabyssos/Aethermoor/Both"
region: "[[Parent_Region]]"
status: "active/ruins/hidden/unknown"
created: YYYY-MM-DD
updated: YYYY-MM-DD
image: "04_Resources/Assets/Locations/filename.jpg"
---
```

### Lore
```yaml
---
tags:
  - lore
  - [category-tag]
  - [world-tag]
type: Lore
world: "Aquabyssos/Aethermoor/Both"
era: "Ancient/Imperial/Modern/Post-Convergence"
status: "active/archived/secret"
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

### Mechanics
```yaml
---
tags:
  - mechanics
  - [system-tag]
  - [category-tag]
type: Mechanics
system: "5e/Custom/Universal"
status: "active/draft/deprecated"
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

## Tag Standards

### World Tags
- `aquabyssos` - Content specific to Aquabyssos
- `aethermoor` - Content specific to Aethermoor
- `both` - Content that applies to both worlds

### Type Tags
- `npc` - Non-player characters
- `group` - Organizations, factions, guilds
- `location` - Places, regions, buildings
- `lore` - Historical events, legends, culture
- `mechanics` - Game rules and systems
- `item` - Equipment, artifacts, treasures
- `quest` - Adventures and missions

### Status Tags
- `active` - Currently relevant content
- `draft` - Work in progress
- `template` - Template files (should not be enriched)
- `archived` - Historical content
- `deprecated` - Replaced content

### Faction Tags (lowercase, hyphenated)
- `shadow-conspiracy`
- `parliament-shadows`
- `crystal-academy`
- `deep-merchants`
- `wind-riders`
- etc.

## File Naming Conventions

### Standard Format
- Use Title Case with underscores: `The_Shadow_Parliament.md`
- No special characters except underscores and hyphens
- Maximum 50 characters for filename
- Use full words, no truncation

### Templates
- All template files should end with `_Template.md`
- Templates should have `template` tag to prevent auto-enrichment

### Indexes
- Master indexes: `Master_[Category]_Index.md`
- Category indexes: `[Category]_Index.md`

## Date Standards

### Format
- All dates in YYYY-MM-DD format
- No timestamps in metadata (use simple dates)
- Use `created` and `updated` fields consistently

### Special Dates
- `created`: When the file was first created
- `updated`: Last meaningful content update
- In-world dates should use campaign calendar in content

## Content Structure Standards

### Required Sections
All content files should have:
1. `## Overview` - Brief description
2. `## Player-Facing Summary` - What players can know
3. `## DM Notes` - GM-specific information

### Optional Sections (by type)
- NPCs: Appearance, Personality, Background, Relationships, Combat Stats
- Locations: Geography, Notable Features, Inhabitants, Secrets
- Lore: Historical Context, Timeline, Significance, Consequences
- Groups: Structure, Goals, Resources, Conflicts

## Link Standards

### Format
- Use `[[File_Name]]` for internal links
- Use `[[File_Name|Display Text]]` for custom display
- Use `[[File_Name#Section]]` for section links

### Consistency
- Link to canonical file names only
- Avoid linking to duplicate files
- Use consistent display text for the same entity

## Image Standards

### Paths
- NPCs: `04_Resources/Assets/NPCs/`
- Locations: `04_Resources/Assets/Locations/`
- Items: `04_Resources/Assets/Items/`
- Maps: `04_Resources/Assets/Maps/`

### Naming
- Use snake_case for image filenames
- Include entity name in filename
- Use descriptive suffixes: `_portrait.jpg`, `_map.png`, `_symbol.svg`
