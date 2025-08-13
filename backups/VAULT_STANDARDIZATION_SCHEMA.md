# Vault Standardization Schema v2.0
*Comprehensive frontmatter and content standards for Obsidian 1.9.7*

## Universal Frontmatter Schema

### Required Fields (All Content Types)
```yaml
---
title: "Descriptive Title"                    # Human-readable title
type: "content-type"                          # See Content Type Classification
status: "status-value"                        # See Status Values
created: "YYYY-MM-DD"                         # ISO 8601 date format
updated: "YYYY-MM-DDTHH:MM:SS.ssssss+00:00"  # ISO 8601 datetime with timezone
tags:                                         # Hierarchical tag system
  - category/subcategory
  - type/specific-type
cssclasses:                                   # Obsidian CSS styling
  - vault-standard
  - content-type-class
---
```

### Content Type Specific Fields

#### Adventures
```yaml
type: "adventure"
adventure_type: "oneshot|campaign|module|epic"
level_range: "1-3"
party_size: "4-6"
duration: "2-4 sessions"
world: "Aethermoor|Aquabyssos|Both"
themes:
  - theme1
  - theme2
difficulty: "easy|moderate|hard|epic"
campaign_type: "string"
connections:
  - "[[Link1]]"
  - "[[Link2]]"
```

#### NPCs/People
```yaml
type: "npc"
npc_type: "ally|enemy|neutral|quest-giver"
race: "string"
class: "string"
location: "[[Location]]"
faction: "[[Faction]]"
disposition: "friendly|neutral|hostile|unknown"
importance: "minor|major|critical|legendary"
relationships:
  - character: "[[Name]]"
    type: "ally|enemy|family|romantic|rival"
```

#### Locations/Places
```yaml
type: "location"
location_type: "city|dungeon|wilderness|landmark|building"
region: "[[Region]]"
world: "Aethermoor|Aquabyssos"
population: "number|range"
government: "string"
notable_features:
  - feature1
  - feature2
connections:
  - "[[Connected Location]]"
  - "[[Related NPC]]"
```

#### Groups/Factions
```yaml
type: "faction"
faction_type: "political|religious|criminal|merchant|military"
alignment: "lawful good|etc"
size: "small|medium|large|massive"
influence: "local|regional|world|cosmic"
resources: "poor|modest|wealthy|limitless"
goals:
  - primary_goal
  - secondary_goal
allies:
  - "[[Faction]]"
enemies:
  - "[[Faction]]"
```

#### Lore/Worldbuilding
```yaml
type: "lore"
lore_type: "history|culture|religion|magic|technology"
era: "ancient|historical|current|future"
world: "Aethermoor|Aquabyssos|Both|Universal"
scope: "local|regional|world|cosmic"
secrets:
  - secret_level: "public|restricted|secret|cosmic"
    content: "description"
```

#### Items/Equipment
```yaml
type: "item"
item_type: "weapon|armor|tool|consumable|artifact|currency"
rarity: "common|uncommon|rare|very rare|legendary|artifact"
magical: true|false
value: "gp amount"
weight: "lbs"
attunement: true|false
world_origin: "Aethermoor|Aquabyssos|Both|Other"
```

#### Mechanics/Rules
```yaml
type: "mechanics"
mechanic_type: "combat|exploration|social|magic|survival"
system: "5e|custom|hybrid"
complexity: "simple|moderate|complex|advanced"
playtested: true|false
balance_rating: "underpowered|balanced|overpowered"
dependencies:
  - "[[Required Rule]]"
```

#### Templates
```yaml
type: "template"
template_type: "npc|location|adventure|session|item"
version: "2.0"
compatibility: "obsidian-1.9.7"
last_updated: "YYYY-MM-DD"
usage_instructions: "brief description"
```

### Optional Universal Fields
```yaml
aliases:                    # Alternative names/titles
  - "Alt Name 1"
  - "Alt Name 2"
publish: true|false         # Whether to publish externally
confidential: true|false    # GM-only content
player_visible: true|false  # Player access level
world_impact: "local|regional|world|cosmic"
emotional_weight: "light|moderate|heavy|tragic"
content_warnings:           # Sensitive content flags
  - "violence"
  - "horror"
campaign_relevance:         # Active campaign importance
  - campaign: "[[Campaign Name]]"
    relevance: "background|minor|major|critical"
session_notes:              # Session-specific annotations
  - session: "Session X"
    notes: "what happened"
```

## Status Values Standardization

### Universal Status Options
- `draft` - Initial creation, incomplete
- `in-progress` - Actively being developed
- `review` - Needs review/editing
- `complete` - Finished and usable
- `published` - Available to players
- `archived` - No longer active but preserved
- `deprecated` - Superseded by newer version
- `stub` - Placeholder for future development

### Content-Specific Status
- **Adventures**: `outlined|written|playtested|polished`
- **NPCs**: `concept|detailed|in-play|retired`
- **Locations**: `mapped|described|populated|active`
- **Mechanics**: `concept|drafted|tested|balanced`

## Hierarchical Tag System ✅ IMPLEMENTED

### Primary Categories
```yaml
## Content Type Tags (✅ APPLIED TO 10,545 FILES)
- content/adventure     # Adventures, quests, scenarios
- content/npc           # Non-player characters, people
- content/location      # Places, sites, settlements
- content/faction       # Groups, organizations, guilds
- content/lore          # History, legends, background
- content/item          # Equipment, artifacts, treasures
- content/mechanics     # Rules, systems, stats
- content/template      # Frameworks, structures

## World Tags (✅ APPLIED TO 10,545 FILES)
- world/aethermoor          # Crystal realm, sky cities, aerial magic
- world/aquabyssos          # Deep sea realm, pressure magic, underwater
- world/both                # Cross-world content, universal themes
- world/surface             # Land-based, terrestrial content

## Campaign Tags (✅ APPLIED TO 10,545 FILES)
- campaign/session          # Session-ready content, encounters
- campaign/arc               # Campaign storylines, plot arcs
- campaign/hook              # Adventure hooks, leads, opportunities
- campaign/objective         # Goals, missions, targets
- campaign/consequence       # Results, aftermath, impacts

## Status Tags (✅ APPLIED TO 10,545 FILES)
- status/complete           # Finished, done, completed
- status/draft              # Initial creation, work-in-progress
- status/in-progress        # Actively being developed, ongoing
- status/review             # Needs review, checking, verification
- status/archived           # Old, deprecated, legacy content
- status/stub               # Placeholder, minimal, outline

## Importance Tags (✅ APPLIED TO 10,545 FILES)
- importance/critical       # Vital, essential, crucial content
- importance/major          # Important, significant, key content
- importance/minor          # Secondary, supporting, peripheral
- importance/core           # Central, primary, main content

## Access Tags (✅ APPLIED TO 10,545 FILES)
- access/public             # Open, player-facing, visible
- access/restricted         # Limited, controlled, private
- access/secret             # Hidden, classified, confidential
- access/dm-only            # GM-only, spoiler, behind-scenes

## Mechanics Tags (✅ APPLIED TO 10,545 FILES)
- mechanics/combat          # Battle, fight, conflict systems
- mechanics/social          # Diplomacy, negotiation, interaction
- mechanics/exploration     # Discovery, investigation, search
- mechanics/magic           # Spells, enchantment, mystical systems
- mechanics/skill           # Abilities, checks, rolls
```

### Content-Specific Tag Hierarchies

#### Adventure Tags
```yaml
- adventure/oneshot
- adventure/campaign
- adventure/module
- adventure/epic
- adventure/levels/1-3
- adventure/levels/4-6
- adventure/levels/7-9
- adventure/levels/10-12
- adventure/levels/13-15
- adventure/themes/horror
- adventure/themes/politics
- adventure/themes/exploration
```

#### NPC Tags
```yaml
- npc/ally
- npc/enemy
- npc/neutral
- npc/quest-giver
- npc/merchant
- npc/ruler
- npc/scholar
- npc/criminal
```

#### Location Tags
```yaml
- location/city
- location/dungeon
- location/wilderness
- location/landmark
- location/building
- location/safe
- location/dangerous
- location/mysterious
```

## CSS Classes for Styling

### Universal Classes
```yaml
cssclasses:
  - vault-standard        # Base vault styling
  - content-[type]        # Type-specific styling
  - world-[world]         # World-specific colors
  - status-[status]       # Status indicators
  - importance-[level]    # Visual importance
  - access-[level]        # Access level styling
```

### Mobile-Optimized Classes
```yaml
cssclasses:
  - mobile-friendly       # Mobile layout optimization
  - tablet-layout        # Tablet-specific adjustments
  - compact-view         # Condensed information display
  - touch-interface      # Touch-friendly elements
```

## Content Structure Standards

### Universal Section Headers
```markdown
## [Content Title]
*Brief descriptive subtitle*

## Overview
[Essential information summary]

## Key Information
[Critical details in organized format]

## Connections
[Links to related content]

## Notes
[Additional information, GM notes, etc.]

---
*Last updated: [ISO date]*
```

### Content-Type Specific Sections

#### Adventure Structure
```markdown
## [Adventure Title]
*Brief hook and tone*

## Adventure Overview
## Key NPCs
## Important Locations
## Major Plot Points
## Rewards and Consequences
## DM Notes
## Player Handouts
```

### NPC Structure
```markdown
## [NPC Name]
*Brief description and role*

## Character Overview
## Appearance and Mannerisms
## Motivations and Goals
## Relationships
## Stats and Abilities
## Role in Campaign
## Notes and Secrets
```

### Location Structure
```markdown
## [Location Name]
*Brief description and significance*

## Location Overview
## Geography and Layout
## Notable Features
## Important NPCs
## Adventure Hooks
## Secrets and Hidden Elements
## Connections
```

## Cross-Reference Standards

### Link Formatting
```markdown
## Standard link format
[[Target File|Display Text]]

## Content type prefixes for clarity
[[02_Worldbuilding/NPCs/Character Name|02 Worldbuilding/NPCs/Character Name]]
[[03_Mechanics/Rules/System Name|03 Mechanics/Rules/System Name]]

## Contextual links with descriptions
- [[Location Name]] - Brief context why it's relevant
- [[NPC Name]] - Their role or relationship
```

### Reference Blocks
```markdown
> [!info] Quick Reference
> **Type**: [Content Type]
> **Location**: [Primary Location]
> **Campaign Relevance**: [Relevance Level]
> **Player Knowledge**: [What players know]

> [!warning] GM Only
> [Sensitive information for GM eyes only]

> [!tip] Player Hook
> [Information designed to engage players]
```

## Implementation Guidelines

### Phase 1: Schema Application
1. Update all existing frontmatter to match schema
2. Apply hierarchical tags systematically
3. Standardize all dates to ISO 8601
4. Implement consistent status values

### Phase 2: Content Restructuring
1. Apply standard section headers
2. Implement cross-reference standards
3. Add CSS classes for styling
4. Optimize for mobile viewing

### Phase 3: Quality Assurance
1. Validate schema compliance
2. Check link integrity
3. Verify tag hierarchy consistency
4. Test mobile optimization

## Migration Checklist

- [ ] Backup current vault state
- [ ] Create migration scripts for automated updates
- [ ] Update templates with new schema
- [ ] Apply schema to existing content systematically
- [ ] Validate all changes
- [ ] Update documentation
- [ ] Train users on new standards

---

*This schema is designed for Obsidian 1.9.7 and follows best practices for scalable vault organization, mobile optimization, and collaborative content creation.*