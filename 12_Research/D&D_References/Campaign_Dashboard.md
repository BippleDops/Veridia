---
created: '2025-08-11'
status: complete
tags:
- campaign/arc
- content/lore
- dashboard
- master-control
- status/in-progress
- tracking
- world/both
title: Campaign Dashboard - Aquabyssos & Aethermoor
type: Lore
updated: '2025-08-12T23:37:32.982593'
world: Both
timeline: current_era
chronology: active
updated: 2025-08-13T07:59:50.494234
---
# 🌊🌬️ Campaign Dashboard
*Master Control Center for the Dual Worlds*

```dataview
TABLE WITHOUT ID
  "⚡ " + choice(reality_stability < 25, "**CRITICAL**", 
         choice(reality_stability < 50, "**UNSTABLE**", 
         choice(reality_stability < 75, "Wavering", "Stable"))) AC "Reality Status",
  "📊 " + reality_stability + "/100" AC "Stability",
  "🌀 " + deep_mother_influence + "/100" AC "Deep Mother",
  "⏰ Session " + current_session AC "Progress"
FROM "Campaign_Dashboard"
WHERE file.name = this.file.name
```

## 🎯 Campaign Status Overview

### Current Phase: **The Convergence Crisis**
- **Session**: 10 of 20 (Both Campaigns)
- **Reality Integrity**: 72/100 (Wavering)
- **Deep Mother Influence**: 34/100 (Rising)
- **Merger Events Active**: 3
- **Active Fleets**: see [[08_Tracking/Fleet_Tracker.base|Fleet Tracker]]; ships in [[08_Tracking/Ship_Registry.base|Ship Registry]]
- **Travel Events**: use [[06_GM_Resources/Travel/Travel Event Table]]
- **Vehicle Rules**: [[Vehicles - Vehicle Core Rules]]
- **Time Until Convergence**: 6 months (in-game)

### 🌊 Aquabyssos Status
- **Government**: Parliament in Crisis
- **Depth Zones Stable**: 3/5
- **Shadow Conspiracy**: 65% Exposed
- **Adaptation Crisis Level**: Moderate
- **Key Threat**: Shadow Surgeons Remnants

### 🌬️ Aethermoor Status
- **Government**: Monarchy Unstable
- **Crystal Corruption**: 40% Spread
- **Reality Anchors Active**: 2/5
- **Festival Preparations**: 75% Complete
- **Key Threat**: Crystal Plague Acceleration

## 📊 Faction Power Tracker

```dataview
TABLE WITHOUT ID
  faction AC "Faction",
  "⚔️ " + military AC "Military",
  "💰 " + economic AC "Economic",
  "🏛️ " + political AC "Political",
  "🔍 " + information AC "Information",
  "✨ " + ideological AC "Ideological",
  "📈 " + total_power AC "Total"
FROM "02_Worldbuilding/Groups"
WHERE contains(tags, "major-faction")
SORT total_power DESC
LIMIT 10
```

### Power Dynamics This Session
- **Rising**: Surface Seekers (+8), Parasite Priests (+5)
- **Falling**: Tidal Council (-6), Crown Authority (-4)
- **Stable**: Merchant Guilds, Crystal Wardens
- **Wild Card**: Deep Mother Cults (exponential growth)

### Active Conflicts
1. **Tidal Council vs Surface Seekers** - Open hostilities
2. **Crystal Wardens vs Parasite Priests** - Ideological war
3. **Merchant Guilds vs Everyone** - Economic manipulation
4. **Deep Mother Cults vs Reality** - Existential threat

## 🗺️ Active Plot Threads

### 🔴 Critical (Immediate Attention)
- [ ] Marina's fractured identity reaching crisis point
- [ ] Shadow Parliament preparing final vote
- [ ] Crystal Festival date approaching (3 sessions)
- [ ] Reality breach in Lighthouse District
- [ ] Deep Mother avatar manifesting

### 🟡 Major (This Session)
- [ ] Senator Glaucus assassination investigation
- [ ] Silverscale Consortium economic attack
- [ ] Parasite outbreak in Lower Depths
- [ ] Queen Seraphina's madness worsening
- [ ] Memory tide approaching Port Meridian

### 🟢 Developing (Next 2-3 Sessions)
- [ ] Ancient ruins exploration results
- [ ] Faction alliance negotiations
- [ ] Depth migration beginning
- [ ] Crystal corruption cure research
- [ ] Prophecy interpretation needed

### 🔵 Background (Long-term)
- [ ] The Seven Betrayers' return
- [ ] Surface Seal weakening rate
- [ ] Leviathan awakening signs
- [ ] Timeline fracture points
- [ ] Ultimate convergence preparations

## 👥 Key NPC Status Tracker

### Power Players
| NPC | Location | Status | Loyalty | Next Action |
|-----|----------|--------|---------|-------------|
| **Nerissa Deepcurrent** | Maelstrom Palace | Desperate | Neutral | Seeking allies |
| **Queen Seraphina** | Crystal Palace | Mad | Unstable | Festival ritual |
| **Vex Shadowthorn** | Unknown | Active | Hostile | Shadow harvest |
| **Marina Coralheart** | Multiple | Fractured | Confused | Identity crisis |
| **Director Silverscale** | Consortium HQ | Plotting | Self | Economic war |

### Rising Threats
| NPC | Threat Level | Growth Rate | Counter-measures |
|-----|--------------|-------------|------------------|
| **Deep Mother** | 8/10 | Exponential | Reality anchors failing |
| **The Silhouette Prime** | 7/10 | Steady | Shadow detection needed |
| **Prophet Deepest-Dream** | 6/10 | Accelerating | Prophecy interpretation |
| **Archive-Prince Mnemonic** | 5/10 | Unknown | Memory protection |

### Potential Allies
| NPC | Faction | Requirements | Benefits |
|-----|---------|--------------|----------|
| **Captain Stormcutter** | Independent | Protection | Military support |
| **Sage Lysander** | Scholars | Knowledge trade | Ancient secrets |
| **Merchant Prince Akula** | Guilds | Economic deal | Resources |
| **Sister Morwyn** | Temple | Religious quest | Divine protection |

## 🎭 Player Character Tracking

### Party Status
```dataview
TABLE WITHOUT ID
  character_name AC "Character",
  player AC "Player",
  adaptation_points AC "AP",
  faction_standing AC "Primary Faction",
  sanity AC "Sanity",
  status AC "Status"
FROM "Player_Characters"
WHERE campaign = "Active"
```

### Character Arcs Progress
- **Gareth**: Discovering hybrid heritage (60% complete)
- **Marina**: Identity reconciliation (40% complete)
- **Thorne**: Redemption path (30% complete)
- **Lysara**: Power corruption (50% complete)
- **Echo**: Finding humanity (20% complete)

### Party Resources
- **Gold**: 12,500 gp
- **Pressure Suits**: 4 functional, 1 damaged
- **Reality Anchors**: 2 personal, 1 group
- **Memory Pearls**: 17 (various)
- **Faction Tokens**: Tidal Council (2), Merchants (3), Seekers (1)

## 📅 Session Timeline

### Recent Sessions
- **Session 8**: Reality breach, first merger zone
- **Session 9**: Shadow conspiracy partially exposed
- **Session 10**: Deep Mother's first manifestation

### Upcoming Events
- **Session 11**: Memory tide arrival
- **Session 12**: Parliament emergency session
- **Session 13**: Crystal Festival begins
- **Session 14**: Convergence acceleration
- **Session 15**: The Choice

### In-Game Calendar
- **Current Date**: 7th of Depth's Embrace, Year 300 AC (After Sundering)
- **Days Until Festival**: 21
- **Days Until Convergence**: 180
- **Moon Phase**: Waxing (affects tides)
- **Depth Current**: Strong northward

## 🎲 Quick Resolution Tools

### Instant Encounter Generator
```button
name Generate Random Encounter
type command
action Dataview: Generate random encounter based on current location and threat level
color blue
```

### Faction Action Resolver
```button
name Resolve Faction Turn
type command
action Calculate and apply all faction actions for this turn
color green
```

### Reality Check
```button
name Check Reality Stability
type command
action Roll for reality events and apply changes
color red
```

### NPC Reaction
```button
name Generate NPC Response
type command
action Create contextual NPC reaction based on current situation
color yellow
```

## 📜 Handouts & GM Sheets

### Player-Facing Encounter Handouts
```dataview
LIST FROM "04_Resources/Handouts/Encounters"
SORT file.name ASC
```

### GM Encounter Sheets
```dataview
LIST FROM "06_GM_Resources/Travel/Encounter_Sheets"
SORT file.name ASC
```

## 📈 Campaign Metrics

### Pacing Analysis
- **Combat**: 25% (Target: 30%)
- **Roleplay**: 45% (Target: 40%)
- **Exploration**: 20% (Target: 20%)
- **Investigation**: 10% (Target: 10%)

### Player Engagement
- **Rules Mastery**: 75%
- **Lore Investment**: 85%
- **Character Development**: 90%
- **Strategic Planning**: 70%

### Story Progress
- **Main Arc**: 50% complete
- **Side Quests Active**: 7
- **Mysteries Solved**: 4/10
- **Factions Engaged**: 8/12
- **Locations Explored**: 15/30

## 🔧 GM Tools & References

### Quick Links
- [[Master Index]] - Complete vault navigation
- [[World Bible]] - Comprehensive lore reference
- [[Session Planning Toolkit]] - Session preparation
- [[Encounter Builder]] - Combat encounter creation
- [[NPC Dialogue Generator]] - Instant NPC responses

### Active Mechanics
- [[Complete Pressure Adaptation System]] - Full transformation rules
- [[Complete Faction Warfare System]] - Political maneuvering
- [[Complete Reality Merger System]] - Dimensional mechanics
- [[Memory Trading Economy]] - Memory as currency
- [[Sanity Horror Framework]] - Madness tracking

### Resource Management
- [[04_Resources/Assets|04 Resources/Assets]] - Visual materials
- [[04_Resources/Handouts|04 Resources/Handouts]] - Player handouts
- [[04_Resources/Random_Tables|04 Resources/Random Tables]] - Generation tables
- [[07_Player_Resources|07 Player Resources]] - Player references
- [[02_Worldbuilding/Lore/GM Resources]] - GM materials

## 🎯 Session Preparation Checklist

### For Next Session
- [ ] Review player notes from last session
- [ ] Update faction positions
- [ ] Roll for reality stability
- [ ] Generate merger events
- [ ] Prepare key NPC dialogue
- [ ] Create encounter options
- [ ] Update handouts
- [ ] Check player resources
- [ ] Plan pivotal scenes
- [ ] Prepare contingencies

### Long-term Preparation
- [ ] Festival finale planning
- [ ] Convergence event design
- [ ] Character arc resolutions
- [ ] Faction war outcomes
- [ ] Multiple ending paths

## 📊 Reality Convergence Tracker

### Convergence Factors
| Factor | Status | Acceleration |
|--------|--------|--------------|
| Surface Seal | Weakening | +2/session |
| Deep Mother | Awakening | +3/session |
| Reality Anchors | Failing | +1/session |
| Adaptation Spread | Increasing | +1/session |
| Prophecies | Manifesting | +2/session |
| **Total** | **Critical** | **+9/session** |

### Convergence Milestones
- [x] First merger zone appears
- [x] Deep Mother dreams begin
- [x] Reality instability noticed
- [ ] Mass adaptation events
- [ ] Timeline fractures
- [ ] Avatar manifestation
- [ ] Final choice presented
- [ ] Worlds merge/separate

## 🚨 Alert System

### ⚠️ Current Warnings
- **Reality Cascade Risk**: HIGH - Multiple merger zones active
- **Faction War Imminent**: Tidal Council mobilizing
- **Adaptation Pandemic**: Spreading in lower districts
- **Timeline Instability**: Prophecies manifesting
- **Deep Mother Activity**: Influence growing exponentially

### 📝 Notes for Next Session
```
Key Focus Areas:
1. Marina identity crisis resolution scene
2. Parliament emergency vote on Surface Seal
3. First major reality merger event
4. Parasite outbreak containment
5. Crystal Festival preparations reveal

Remember:
- Players have reality anchor (2 charges left)
- Vex Shadowthorn knows party location
- Memory tide will reveal hidden truths
- Queen's madness linked to Deep Mother
- Time loop possibility in Lighthouse
```

## 🔄 Auto-Update Status

```dataviewjs
// This would automatically update based on session logs
const lastUpdate = dv.page("Session Log").file.mtime;
const daysSinceUpdate = (Date.now() - lastUpdate) / (1000 * 60 * 60 * 24);

if (daysSinceUpdate > 7) {
  dv.paragraph("⚠️ **Dashboard needs update** - Last updated: " + daysSinceUpdate + " days ago");
} else {
  dv.paragraph("✅ Dashboard current - Last updated: " + daysSinceUpdate + " days ago");
}
```

---

## Navigation
- [[Master Index]] - Complete vault navigation
- [[World Bible]] - Comprehensive lore reference  
- [[Campaign Index]] - Session archive
- [[Quick Start Guide]] - New player onboarding
- [[02_Worldbuilding/Lore/GM Resources]] - Gamemaster tools

---

*Dashboard Version 2.0 - Real-time campaign tracking and management*
*Auto-refreshes with session updates*
*Integrated with all major vault systems*

## Cross-References

- [[Vault_Navigation_Hub|Vault Navigation Hub]]


## Connections

- [[02_Worldbuilding/Lore/GM Resources]]
- [[07_Player_Resources|07 Player Resources]]
- [[Complete Pressure Adaptation System]]
- [[Complete Reality Merger System]]
- [[Encounter Builder]]
- [[02_Worldbuilding/Lore/GM Resources]]
- [[Memory Trading Economy]]
- [[NPC Dialogue Generator]]
- [[Sanity Horror Framework]]
- [[Session Planning Toolkit]]
- [[World Bible]]
- [[Vehicles - Vehicle Core Rules]]
- [[06_GM_Resources/Travel/Travel Event Table]]
- [[Quick Start Guide]]
