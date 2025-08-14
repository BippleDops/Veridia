---
created: '2025-08-13'
status: active
tags:
- timeline/seven-shards
- calendar-integration
- campaign-tracking
- world/both
- status/active
type: Reference
updated: '2025-08-13T16:45:00.000000'
world: Both
---

# Seven Shards Campaign: Timeline & Calendar Integration
*Complete Timeline with Fantasy Calendar Plugin Integration*

> [!info] Fantasy Calendar Integration
> This timeline is designed to work with the Fantasy Calendar plugin for Obsidian, providing:
> - Interactive calendar views with session markers
> - Event tracking and milestone management
> - Weather and seasonal effects integration
> - Cross-realm time synchronization
> - Campaign pacing and deadline management

## Campaign Calendar Setup

### Cordelia World Calendar System

**Year Structure**: 360 days divided into 12 months of 30 days each  
**Week Structure**: 6-day weeks (5 work days + 1 rest day)  
**Season Cycle**: Each season lasts 3 months (90 days)  
**Moon Phases**: 28-day lunar cycle affects tidal and magical phenomena

```fantasy-calendar
name: "Cordelia Campaign Calendar"
static: 
  year: 1247
  era: "Age of Convergence"
months:
  - name: "Deep Current"
    length: 30
    season: winter
  - name: "Rising Tide"  
    length: 30
    season: winter
  - name: "Storm Breaking"
    length: 30
    season: winter
  - name: "Wind Awakening"
    length: 30
    season: spring
  - name: "Sky Dancing"
    length: 30
    season: spring  
  - name: "Crystal Growing"
    length: 30
    season: spring
  - name: "High Currents"
    length: 30
    season: summer
  - name: "Storm Crown"
    length: 30
    season: summer
  - name: "Deep Calling"
    length: 30
    season: summer
  - name: "Shadow Turning"
    length: 30
    season: autumn
  - name: "Memory Tide"
    length: 30
    season: autumn
  - name: "Unity Dawn"
    length: 30
    season: autumn
weekdays:
  - "Deepday"
  - "Currentday" 
  - "Windday"
  - "Stormday"
  - "Crystalday"
  - "Restday"
moons:
  - name: "The Deep Pearl"
    cycle: 28
    color: "#4a90e2"
  - name: "The Wind Crystal"  
    cycle: 28
    color: "#f5a623"
```

### Campaign Start Date
**Campaign Begins**: 15th Day of Crystal Growing, Year 1247  
**Real-world Start**: Session 1 begins on the Festival of Depths  
**In-game Duration**: Approximately 8 months for complete campaign

## Session Timeline

### Act I: Awakening (Sessions 1-8)
*Duration: 3 months in-game time*

```fantasy-calendar
event:
  name: "Festival of Depths - Session 1"
  date: "Crystal Growing 15, 1247"
  type: "session"
  description: "Heroes witness strange tidal behavior and encounter Memory Thieves. First hints of the Seven Shards crisis."
  category: "major-session"
```

```fantasy-calendar
event:
  name: "Crystal Fever Outbreak - Session 2"
  date: "Crystal Growing 22, 1247" 
  type: "session"
  description: "Investigation of crystal corruption in Silverscale mines. Discovery of Lord Aurelius's involvement."
  category: "major-session"
```

```fantasy-calendar
event:
  name: "Memory Palace Expedition - Session 3"
  date: "High Currents 1, 1247"
  type: "session"
  description: "Deep dive into consciousness-affecting anomalies. First direct contact with Consciousness Shard."
  category: "major-session"
```

```fantasy-calendar
event:
  name: "Deep Mother's First Stirring - Session 4"
  date: "High Currents 10, 1247"
  type: "session" 
  description: "Reality distortions intensify. Heroes learn the true scope of the cosmic threat."
  category: "major-session"
```

```fantasy-calendar
event:
  name: "Cross-Realm Tensions - Session 5"
  date: "High Currents 18, 1247"
  type: "session"
  description: "Political complications as both worlds begin to notice the anomalies."
  category: "major-session"
```

```fantasy-calendar
event:
  name: "Storm Shard Discovery - Session 6"
  date: "Storm Crown 2, 1247"
  type: "session"
  description: "Journey to Aethermoor and confrontation at the Lighthouse of Storms."
  category: "major-session"
```

```fantasy-calendar
event:
  name: "Convergence Signs Multiply - Session 7"
  date: "Storm Crown 12, 1247"
  type: "session"
  description: "Multiple shard activities detected. Heroes realize the timeline is accelerating."
  category: "major-session"
```

```fantasy-calendar
event:
  name: "The Stellar Alignment - Session 8"
  date: "Storm Crown 25, 1247"
  type: "session"
  description: "Cosmic forces align. Heroes must prepare for the coming convergence crisis."
  category: "major-session"
```

### Act II: Convergence (Sessions 9-10)
*Duration: 1 month in-game time*

```fantasy-calendar
event:
  name: "The Shard Convergence - Session 9"
  date: "Deep Calling 5, 1247"
  type: "session"
  description: "Reality fractures as shards begin to resonate. Heroes face the Unity Shard trials."
  category: "climax-session"
```

```fantasy-calendar
event:
  name: "New Horizons - Session 10"
  date: "Shadow Turning 1, 1247"
  type: "session"
  description: "Six months later - consequences of convergence choice. New cosmic threats emerge."
  category: "finale-session"
```

## Key Timeline Events

### Pre-Campaign History

```fantasy-calendar
event:
  name: "The Original Shattering"
  date: "Unity Dawn 30, 1147"
  type: "historical"
  description: "100 years ago - The Deep Mother was shattered into seven fragments by unknown heroes."
  category: "ancient-history"
```

```fantasy-calendar
event:
  name: "Shadow Conspiracy Formation"
  date: "Memory Tide 15, 1220"
  type: "historical"
  description: "27 years ago - Vex Shadowthorn discovers the Shadow Shard and begins building conspiracy."
  category: "faction-history"
```

```fantasy-calendar
event:
  name: "Crystal Mining Expansion"
  date: "Crystal Growing 1, 1245"
  type: "historical"
  description: "2 years ago - Silverscale Consortium begins deep mining, discovers Crystal Shard fragment."
  category: "economic-history"
```

### Campaign Concurrent Events

```fantasy-calendar
event:
  name: "Aquabyssos Royal Wedding Announcement"
  date: "Crystal Growing 20, 1247"
  type: "political"
  description: "Queen Seraphina announces engagement to foreign dignitary - but is this real or shard influence?"
  category: "political-intrigue"
```

```fantasy-calendar
event:
  name: "Aethermoor Trade Embargo"
  date: "High Currents 8, 1247"
  type: "economic"
  description: "Emperor Thalassius restricts trade with Aquabyssos, citing 'security concerns.'"
  category: "diplomatic-crisis"
```

```fantasy-calendar
event:
  name: "The Great Memory Loss"
  date: "High Currents 25, 1247"
  type: "supernatural"
  description: "Mass amnesia event affects thousands. Shadow Conspiracy activity suspected."
  category: "shard-event"
```

```fantasy-calendar
event:
  name: "Crystal Plague Quarantine"
  date: "Storm Crown 5, 1247"
  type: "medical"
  description: "Official quarantine declared for crystal corruption. Public panic ensues."
  category: "health-crisis"
```

```fantasy-calendar
event:
  name: "Storm Chaos Incident"
  date: "Storm Crown 20, 1247"
  type: "environmental"
  description: "Unexpected superstorm damages both realms. Storm Shard destabilization suspected."
  category: "weather-disaster"
```

### Post-Convergence Timeline (Variable)

The following events depend on the heroes' choices in Session 9:

#### If Worlds Separated
```fantasy-calendar
event:
  name: "Dimensional Barrier Solidification"
  date: "Shadow Turning 15, 1247"
  type: "magical"
  description: "Permanent crystal walls established between worlds. Trade becomes heavily regulated."
  category: "convergence-outcome"
```

#### If Controlled Unity Chosen
```fantasy-calendar
event:
  name: "Joint Council Formation"
  date: "Shadow Turning 15, 1247"
  type: "political"
  description: "Cross-dimensional government established with representatives from both worlds."
  category: "convergence-outcome"
```

#### If True Merger Occurred
```fantasy-calendar
event:
  name: "The Great Merging"
  date: "Shadow Turning 15, 1247"
  type: "reality-altering"
  description: "Worlds combine into single realm. Massive environmental and social upheaval begins."
  category: "convergence-outcome"
```

#### If Deep Mother Returned
```fantasy-calendar
event:
  name: "The Benevolent Awakening"
  date: "Shadow Turning 15, 1247"
  type: "divine"
  description: "Deep Mother consciousness guides both worlds. Individual agency subtly diminished."
  category: "convergence-outcome"
```

## Weather and Seasonal Effects

### Seasonal Modifiers by Location

**Winter (Deep Current, Rising Tide, Storm Breaking)**:
- **Aquabyssos**: Deep currents bring cold water, increased pressure effects
- **Aethermoor**: Storm season intensifies, altitude effects more dangerous
- **Mechanical Effect**: +2 DC to environmental Constitution saves

**Spring (Wind Awakening, Sky Dancing, Crystal Growing)**:
- **Aquabyssos**: Warming currents, increased biological activity
- **Aethermoor**: Calmer winds, optimal flying conditions
- **Mechanical Effect**: Advantage on Nature and Survival checks

**Summer (High Currents, Storm Crown, Deep Calling)**:
- **Aquabyssos**: Strongest currents, most dangerous depths accessible
- **Aethermoor**: Peak storm activity, maximum wind speeds
- **Mechanical Effect**: Enhanced travel speed but increased weather hazards

**Autumn (Shadow Turning, Memory Tide, Unity Dawn)**:
- **Aquabyssos**: Mysterious tidal phenomena, enhanced magic
- **Aethermoor**: Unpredictable weather patterns, aurora effects
- **Mechanical Effect**: Magic functions unpredictably (DM discretion)

### Moon Phase Effects

**The Deep Pearl** (Aquabyssos-aligned moon):
- **New Moon**: Darkness enhances shadow magic, creatures more aggressive
- **Full Moon**: Tidal magic at peak power, emotional effects amplified
- **Waxing/Waning**: Gradual changes in pressure and magical intensity

**The Wind Crystal** (Aethermoor-aligned moon):
- **New Moon**: Stillest air, flying becomes difficult
- **Full Moon**: Hurricane-force winds possible, storm magic enhanced  
- **Waxing/Waning**: Weather becomes increasingly unpredictable

### Shard Resonance Events

```fantasy-calendar
event:
  name: "Shard Resonance Pulse"
  date: "High Currents 15, 1247"
  type: "magical"
  description: "All seven shards pulse simultaneously. Reality distortions occur worldwide."
  category: "cosmic-event"
  recurring: "every-28-days"
```

```fantasy-calendar
event:
  name: "Memory Tide Peak"
  date: "Memory Tide 15, 1247"
  type: "psychic"
  description: "Annual peak of consciousness-affecting phenomena. Past memories surface randomly."
  category: "annual-event"
  recurring: "yearly"
```

```fantasy-calendar
event:
  name: "Crystal Growth Acceleration"
  date: "Crystal Growing 1, 1247"
  type: "environmental"
  description: "Crystal formations grow 10x faster during this month. Corruption spreads rapidly."
  category: "seasonal-event"
  recurring: "yearly"
```

## Pacing and Deadlines

### Critical Timeline Pressure Points

**Session 3 Deadline**: "The Memory Palace must be secured before the next Resonance Pulse"  
**Consequence**: If delayed, consciousness corruption spreads to Queen Seraphina's entire court

**Session 6 Deadline**: "The Storm Shard must be stabilized before Storm Crown month ends"  
**Consequence**: If delayed, permanent weather chaos affects both worlds

**Session 9 Deadline**: "The convergence decision must be made before Unity Dawn"  
**Consequence**: If delayed, Deep Mother reforms automatically with no input from heroes

### Session Timing Recommendations

**Optimal Pacing**: One session per week in-game time allows for:
- Natural consequence development
- NPC reaction and adaptation time  
- Environmental changes to manifest
- Political situations to evolve

**Accelerated Pacing**: Multiple sessions per in-game week for:
- High-pressure urgent situations
- Back-to-back dungeon exploration
- Crisis management scenarios
- Time-sensitive investigations

**Extended Pacing**: One session per month in-game time for:
- Political intrigue development
- Long-term consequence exploration
- Character relationship building
- Economic and social change manifestation

## Meta-Bind Calendar Tools

### Session Date Tracker
```meta-bind
INPUT[date]:current-session-date
Label: Current In-Game Date
```

### Timeline Advancement
```meta-bind-button
label: Advance Timeline 1 Week
id: advance-week
action:
  type: templater
  command: tp-obsidian://template?vault=ObsidianTTRPGVault&template=Advance_Timeline
```

### Deadline Monitor
```meta-bind
INPUT[progressBar(minValue(0), maxValue(100)]:deadline-pressure
Label: Current Timeline Pressure
```

### Seasonal Effect Calculator
```meta-bind-button
label: Calculate Seasonal Effects
id: seasonal-effects
action:
  type: command
  command: dice-roller
args: ["4d6"]
```

## Random Timeline Events

### Weekly Random Events `dice: 1d20`
| d20 | Event Type | Description |
|-----|------------|-------------|
| 1-3 | Political Development | Faction relationships shift |
| 4-6 | Economic Change | Trade routes, prices, or resources affected |
| 7-9 | Environmental Shift | Weather, tides, or magical phenomena |
| 10-12 | Social Movement | Public opinion or cultural trends |
| 13-15 | Technological Discovery | New inventions or magical breakthroughs |
| 16-17 | Supernatural Occurrence | Shard activity or cosmic events |
| 18-19 | Crisis Escalation | Existing problems worsen |
| 20 | Unexpected Opportunity | New possibilities or allies emerge |

### Monthly Major Events `dice: 1d12`
| d12 | Event | Impact |
|-----|-------|--------|
| 1-2 | Royal Decree | Legal/political landscape changes |
| 3-4 | Natural Disaster | Environmental challenges |
| 5-6 | Diplomatic Crisis | Inter-realm tensions |
| 7-8 | Economic Upheaval | Trade and resources disrupted |
| 9-10 | Social Revolution | Cultural movements gain momentum |
| 11-12 | Cosmic Phenomenon | Reality-altering events |

### Shard Activity Calendar `dice: 1d8`
Each shard has peak activity periods:
1. **Consciousness Shard**: Memory Tide month (enhanced psychic phenomena)
2. **Crystal Shard**: Crystal Growing month (accelerated corruption)
3. **Storm Shard**: Storm Crown month (weather chaos)
4. **Shadow Shard**: Shadow Turning month (conspiracy activity peaks)
5. **Void Shard**: Deep Calling month (reality distortions)
6. **Life Shard**: Sky Dancing month (biological enhancement)
7. **Unity Shard**: Unity Dawn month (dimensional instability)
8. **All Shards**: Every 28 days during moon alignment

## Campaign Milestone Calendar

### Character Advancement Markers

```fantasy-calendar
event:
  name: "Level 6 Advancement"
  date: "High Currents 5, 1247"
  type: "character-development"
  description: "After Session 3 - Heroes gain deeper understanding of cosmic threats"
  category: "advancement"
```

```fantasy-calendar
event:
  name: "Level 7 Advancement"
  date: "Storm Crown 10, 1247"
  type: "character-development"
  description: "After Session 5 - Cross-realm experience broadens abilities"
  category: "advancement"
```

```fantasy-calendar
event:
  name: "Level 8 Advancement"
  date: "Deep Calling 1, 1247"
  type: "character-development"
  description: "After Session 7 - Shard exposure grants new insights"
  category: "advancement"
```

```fantasy-calendar
event:
  name: "Level 9 Advancement"
  date: "Shadow Turning 5, 1247"
  type: "character-development"
  description: "After Session 9 - Convergence experience transcends normal limits"
  category: "advancement"
```

```fantasy-calendar
event:
  name: "Level 10+ Advancement"
  date: "Memory Tide 1, 1247"
  type: "character-development"
  description: "After Session 10 - Cosmic guardian status achieved"
  category: "advancement"
```

## Dataview Calendar Queries

### Upcoming Events
```dataview
TABLE date, type, description
FROM "Seven_Shards_Campaign"
WHERE contains(tags, "calendar-event") AND date >= current-date
SORT date ASC
LIMIT 10
```

### Historical Context
```dataview
TABLE date, category, impact
FROM "Seven_Shards_Campaign"
WHERE contains(tags, "historical-event")
SORT date DESC
```

### Session Schedule
```dataview
TABLE session-number, date, major-events
FROM "Seven_Shards_Campaign"
WHERE contains(tags, "session-marker")
SORT session-number ASC
```

## Integration with Other Plugins

### Templater Integration
```templater
<%*
const currentDate = tp.system.prompt("Enter current in-game date:");
const advanceDays = tp.system.prompt("Advance by how many days?");
const newDate = calculateNewDate(currentDate, advanceDays);
tR += `New Date: ${newDate}`;
%>
```

### Dataview Integration
Automatic event tracking and timeline visualization through dataview queries embedded throughout the campaign files.

### Dice Roller Integration
```dice-roller
1d20 # Random event type
1d7 # Day of week for event
1d30 # Day of month for event
```

---

## Connected Resources
- [[Seven Shards Campaign Overview]]
- [[Session Planning Templates]]
- [[NPC Development Timeline]]
- [[World Event Consequences]]

---

## GM Timeline Management Tips

### Preparation Guidelines
- Plan events 2-3 sessions in advance
- Leave flexibility for player choice consequences
- Track multiple timeline threads simultaneously
- Use recurring events to build world consistency

### Player Communication
- Share general timeline information openly
- Keep specific deadlines as tension builders
- Allow players to influence event timing through choices
- Celebrate milestone achievements with in-world recognition

### Adaptation Strategies
- Accelerate timeline if players are ahead of schedule
- Slow down if players need more time to process developments
- Shift events between sessions to maintain pacing
- Use timeline pressure as motivation for decisive action