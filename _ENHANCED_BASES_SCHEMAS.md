# Enhanced Bases Database Schemas with 5e Integration
*Comprehensive database designs for Obsidian Bases plugin v1.9.7+*

## 📋 NPCs Database Schema

### Core Fields
```yaml
# Identity
name: text (required)
title: text
aliases: list
pronouns: text

# Classification
type: select [PC/NPC/Monster/Deity]
category: select [Major/Supporting/Minor/Background]
status: select [Active/Deceased/Missing/Unknown/Transformed]

# Statistics
level: number (1-20)
cr: number (0-30)
hp_current: number
hp_max: number
ac: number
class: text
subclass: text

# 5e References
base_5e_statblock: link → [[Monster Manual Reference]]
statblock_source: select [MM/Volo/Mordenkainen/Homebrew]
page_reference: text (e.g., "MM p.347")
modifications: text (how differs from base)

# Appearance
race: text
age: text
description: text
image: file (path to image)
token: file (path to token)

# Location & Faction
current_location: link → [[Location]]
home_location: link → [[Location]]
faction: link → [[Faction]]
faction_rank: text
faction_reputation: number (-10 to 10)

# Relationships
allies: list of links → [[NPCs]]
enemies: list of links → [[NPCs]]
family: list of links → [[NPCs]]
romantic_interests: list of links → [[NPCs]]
connected_npcs: list of links → [[NPCs]]

# Quest Connections
quests_given: list of links → [[Quests]]
quests_involved: list of links → [[Quests]]
quest_completion_requirements: text

# Campaign Tracking
sessions_appeared: list of links → [[Sessions]]
first_appearance: link → [[Session]]
last_seen: date
last_seen_location: link → [[Location]]

# Roleplaying
motivation: text
secret: text
personality_traits: list
ideals: text
bonds: text
flaws: text
voice_notes: text

# Knowledge & Skills
knowledge_topics: tags
languages: list
proficiencies: list
expertise: list

# Equipment
magic_items: list of links → [[Items]]
notable_equipment: text
wealth_level: select [Destitute/Poor/Modest/Wealthy/Rich/Aristocratic]

# Special Mechanics
corruption_level: number (0-6)
depth_adaptation: number (0-10)
shadow_independence: select [None/Stage1/Stage2/Stage3/Stage4/Complete]
transformation_stage: text

# Metadata
created: date
modified: date
dm_notes: text (hidden from players)
player_known: boolean
```

### Calculated Fields (Formulas)
```yaml
# Threat Level
threat_score: (cr || level) * (status == "Active" ? 1 : 0)

# Influence Score  
influence: length(file.backlinks) + faction_reputation

# Relationship Complexity
relationship_count: length(allies) + length(enemies) + length(family)

# Quest Importance
quest_relevance: length(quests_given) + length(quests_involved)

# Session Activity
sessions_total: length(sessions_appeared)
sessions_recent: sessions_appeared.filter(s => s.date > today - 30)

# 5e Compatibility Check
has_5e_base: base_5e_statblock != null
is_modified: modifications != null && modifications != ""
```

### Views
1. **Active NPCs** - Filter: status == "Active"
2. **By Location** - Group by: current_location
3. **By Faction** - Group by: faction
4. **Quest Givers** - Filter: length(quests_given) > 0
5. **Combat Ready** - Show: name, cr, hp, ac, modifications
6. **Relationship Web** - Show: name, allies, enemies
7. **5e Reference** - Show: name, base_5e_statblock, page_reference
8. **Gallery View** - Cards with images

## 📍 Locations Database Schema

### Core Fields
```yaml
# Identity
name: text (required)
aliases: list
type: select [Continent/Region/City/District/Building/Landmark/Dungeon]

# Classification
category: select [Safe/Neutral/Dangerous/Deadly]
accessibility: select [Open/Restricted/Hidden/Destroyed/Transformed]
discovery_status: select [Known/Rumored/Hidden/Lost]

# Geography
parent_location: link → [[Location]]
child_locations: list of links → [[Locations]]
connected_locations: list of links → [[Locations]]
region: link → [[Region]]
continent: link → [[Continent]]

# Dimensions
realm: select [Aethermoor/Aquabyssos/Convergence/Other]
depth_feet: number (for Aquabyssos)
elevation_feet: number (for Aethermoor)
size: select [Tiny/Small/Medium/Large/Huge/Gargantuan]

# Demographics
population: number
population_type: text
government: select [Democracy/Monarchy/Oligarchy/Anarchy/Theocracy/Other]
ruler: link → [[NPC]]
notable_npcs: list of links → [[NPCs]]

# 5e Integration
similar_5e_location: text (comparable published setting)
environment_type: select [Arctic/Coast/Desert/Forest/Grassland/Mountain/Swamp/Underdark/Underwater/Urban]
travel_pace: select [Normal/Slow/Fast/Dangerous]
rest_availability: select [Safe/Risky/Dangerous/Impossible]

# Mechanics
unique_mechanics: text (special rules here)
environmental_hazards: list
required_equipment: list
survival_dc: number

# Factions & Politics
controlling_faction: link → [[Faction]]
faction_presence: list of links → [[Factions]]
faction_influence: object {faction: influence_level}
political_tension: number (1-10)

# Economy
wealth_level: select [Impoverished/Poor/Modest/Prosperous/Wealthy/Opulent]
primary_exports: list
primary_imports: list
available_services: checklist
shops: list of links → [[Shops]]
taverns: list of links → [[Establishments]]

# Quests & Events
active_quests: list of links → [[Quests]]
completed_quests: list of links → [[Quests]]
historical_events: list
scheduled_events: list with dates

# Magic & Mystery
magic_level: select [None/Low/Medium/High/Overwhelming]
magical_phenomena: text
mysteries: list
secrets: text

# Travel & Connections
travel_time_days: object {location: days}
travel_methods: list
transportation_available: checklist
portal_connections: list of links → [[Locations]]

# Status Tracking
last_visited: date
visit_count: number
party_reputation: number (-10 to 10)
changes_since_visit: text

# Visual
map: file (path to map)
images: list of files
ambience_notes: text
description_short: text
description_long: text

# Metadata
created: date
modified: date
dm_notes: text
player_known: boolean
discovery_session: link → [[Session]]
```

### Calculated Fields
```yaml
# Population Density
density: population / (size_multiplier)

# NPC Count
npc_count: length(file.backlinks.filter(f => f.type == "npc"))

# Quest Hub Score
quest_activity: length(active_quests) + (length(completed_quests) * 0.5)

# Danger Rating
danger_score: category_value + (environmental_hazards.length * 2)

# Strategic Importance
importance: population_rank + quest_activity + faction_influence_sum

# 5e Travel Time
travel_modifier: travel_pace == "Slow" ? 0.5 : (travel_pace == "Fast" ? 1.5 : 1)
```

### Views
1. **All Locations** - Table with basic info
2. **By Region** - Grouped by parent_location
3. **Quest Hubs** - Filter: length(active_quests) > 0
4. **Dangerous Areas** - Filter: category != "Safe"
5. **Faction Territories** - Group by controlling_faction
6. **Underwater/Surface** - Split by realm
7. **Travel Network** - Show connections and times
8. **Gallery** - Card view with maps/images

## ⚔️ Combat Tracker Schema

### Core Fields
```yaml
# Combat Identity
combat_id: text (auto-generated)
session: link → [[Session]]
location: link → [[Location]]
encounter_name: text

# Participants
combatants: list of objects {
  name: text
  npc_link: link → [[NPC]]
  initiative: number
  hp_current: number
  hp_max: number
  ac: number
  conditions: list
  is_pc: boolean
  is_ally: boolean
}

# Combat State
round: number
current_turn: number
combat_status: select [Preparing/Active/Paused/Complete]

# Threat Assessment
encounter_cr: number
party_level: number
difficulty: select [Easy/Medium/Hard/Deadly]
actual_difficulty: text (post-combat assessment)

# Environmental Factors
terrain: text
visibility: select [Clear/Lightly Obscured/Heavily Obscured/Darkness]
weather: text
special_conditions: list

# Mechanics
lair_actions: boolean
legendary_actions: boolean
environmental_hazards: list
special_rules: text

# Outcomes
victory_type: select [Victory/Defeat/Retreat/Negotiated/Other]
casualties: list of links → [[NPCs]]
captured: list of links → [[NPCs]]
escaped: list of links → [[NPCs]]

# Rewards
experience_awarded: number
treasure_found: text
items_gained: list of links → [[Items]]
information_learned: text

# Time Tracking
start_time_ingame: datetime
end_time_ingame: datetime
duration_rounds: number
duration_real_minutes: number

# Metadata
created: datetime
modified: datetime
dm_notes: text
memorable_moments: text
```

### Views
1. **Active Combat** - Current encounter management
2. **Initiative Order** - Sorted by initiative
3. **Combat History** - Past encounters by session
4. **Threat Analysis** - CR vs party level comparison
5. **NPC Combat Stats** - Quick reference card view

## 🗺️ Quest Tracker Schema

### Core Fields
```yaml
# Quest Identity
name: text (required)
quest_id: text (auto-generated)
type: select [Main/Side/Personal/Faction/Hidden]
category: select [Combat/Investigation/Social/Exploration/Survival]

# Status
status: select [Available/Active/Completed/Failed/Abandoned]
urgency: select [Immediate/Urgent/Normal/Leisurely]
deadline: date
time_limit_days: number

# Connections
quest_giver: link → [[NPC]]
involved_npcs: list of links → [[NPCs]]
locations: list of links → [[Locations]]
related_quests: list of links → [[Quests]]
prerequisites: list of links → [[Quests]]

# 5e Integration
suggested_level: text (e.g., "5-7")
expected_difficulty: select [Easy/Medium/Hard/Deadly]
skill_checks_required: list
combat_likely: boolean

# Objectives
objectives: list of objects {
  description: text
  completed: boolean
  optional: boolean
  hidden: boolean
}

# Progress
progress_percentage: number (0-100)
current_stage: text
stages_completed: list
clues_found: list
decisions_made: list

# Rewards
experience_reward: number
gold_reward: number
item_rewards: list of links → [[Items]]
reputation_rewards: object {faction: amount}
story_rewards: text
consequences: text

# Failure Conditions
failure_triggers: list
failure_consequences: text
can_retry: boolean

# Sessions
sessions_active: list of links → [[Sessions]]
started_session: link → [[Session]]
completed_session: link → [[Session]]

# Metadata
created: date
modified: date
dm_notes: text
player_notes: text
plot_importance: select [Critical/Major/Minor/Flavor]
```

### Views
1. **Active Quests** - Filter: status == "Active"
2. **Quest Board** - Available quests in card format
3. **By Location** - Grouped by primary location
4. **By Quest Giver** - Grouped by NPC
5. **Prerequisites Tree** - Show dependency chains
6. **Deadline Tracker** - Sorted by urgency/deadline
7. **Rewards Summary** - Focus on rewards

## 🎲 Session Log Schema

### Core Fields
```yaml
# Session Identity
session_number: number
title: text
date_played: date
campaign: select [Aethermoor/Aquabyssos/Other]

# Players
players_present: list
characters_present: list of links → [[PCs]]
absent_players: list
guest_players: list

# Timeline
ingame_date_start: text
ingame_date_end: text
time_passed_days: number
long_rests: number
short_rests: number

# Locations
starting_location: link → [[Location]]
locations_visited: list of links → [[Locations]]
ending_location: link → [[Location]]

# NPCs
npcs_met: list of links → [[NPCs]]
npcs_fought: list of links → [[NPCs]]
npc_attitudes_changed: object {npc: change}

# Quests
quests_received: list of links → [[Quests]]
quests_advanced: list of links → [[Quests]]
quests_completed: list of links → [[Quests]]
quests_failed: list of links → [[Quests]]

# Combat
combats: list of links → [[Combat Tracker]]
total_combat_rounds: number
enemies_defeated: list
combat_difficulty_average: text

# Loot & Rewards
experience_gained: number
gold_found: number
items_found: list of links → [[Items]]
information_learned: list
secrets_discovered: list

# Story Progress
major_events: list
decisions_made: list
consequences_triggered: list
foreshadowing: text

# World State Changes
world_changes: list
faction_reputation_changes: object {faction: change}
npc_status_changes: list

# Transformation Tracking
corruption_exposure: list of objects {character: amount}
depth_changes: list of objects {character: change}
shadow_events: list

# Session Quality
session_rating: number (1-5)
memorable_moments: list
player_mvp: text
best_roleplay: text
funniest_moment: text

# Preparation
prep_time_hours: number
prep_notes: link → [[Prep Note]]
planned_vs_actual: text

# Metadata
created: date
modified: date
dm_notes: text
session_recording: link
session_transcript: link
```

### Views
1. **Recent Sessions** - Last 5 sessions
2. **Campaign Timeline** - Chronological by ingame date
3. **NPC Appearances** - Which NPCs appeared when
4. **Quest Progress** - Quest advancement over time
5. **Combat Summary** - Combat statistics
6. **Loot History** - All rewards gained
7. **World State Changes** - Major event timeline

## 🔗 Relationship Graph Schema

### Core Fields
```yaml
# Entity Information
entity_name: text
entity_type: select [NPC/PC/Faction/Location/Item]
entity_link: link → [[Entity]]

# Relationships
relationships: list of objects {
  target: link → [[Entity]]
  relationship_type: select [Ally/Enemy/Neutral/Family/Romantic/Rival/Servant/Master]
  strength: number (1-10)
  public_known: boolean
  description: text
}

# Network Analysis
centrality_score: number (calculated)
cluster_group: text
influence_radius: number
connection_count: number

# Faction Affiliations
primary_faction: link → [[Faction]]
faction_loyalty: number (1-10)
secret_affiliations: list of links → [[Factions]]

# Special Connections
bloodline_connections: list of links → [[NPCs]]
magical_bonds: list of links → [[Entities]]
cursed_connections: list of links → [[Entities]]
prophetic_connections: list of links → [[Entities]]

# Metadata
last_updated: date
confirmed_by_players: boolean
```

### Views
1. **Network Visualization** - Graph view of connections
2. **Most Connected** - Sorted by centrality
3. **Faction Networks** - Grouped by faction
4. **Hidden Connections** - Secret relationships
5. **Power Structure** - Master/Servant hierarchies
6. **Family Trees** - Bloodline connections

## 🎯 Implementation Priority

### Phase 1: Core Databases
1. ✅ npc-roster.base (exists, needs enhancement)
2. ✅ location-tracker.base (exists, needs enhancement)
3. ✅ quest-tracker.base (exists, needs enhancement)
4. ✅ combat-tracker.base (exists, needs enhancement)

### Phase 2: Relationship Management
5. ✅ relationship-graph.base (exists, needs enhancement)
6. ⏳ faction-tracker.base (needs creation)
7. ⏳ timeline-tracker.base (needs creation)

### Phase 3: Advanced Features
8. ⏳ item-catalog.base (needs creation)
9. ⏳ spell-reference.base (needs creation)
10. ⏳ rule-modifications.base (needs creation)

---

*These schemas leverage Bases v1.9.7 features including backlinks, file properties access, and complex formulas. Implementation should prioritize core databases first, then expand based on campaign needs.*