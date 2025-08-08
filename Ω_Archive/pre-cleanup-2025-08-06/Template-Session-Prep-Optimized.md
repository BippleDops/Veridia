---
type: session-prep
tags: [session, prep, gm-tools]
campaign: "{{campaign_name}}"
session_number: {{number}}
date: <% tp.date.now("YYYY-MM-DD") %>
status: planned
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
---

# Session {{number}} Prep - <% tp.date.now("YYYY-MM-DD") %>

## 📍 Session Parameters

| Parameter | Value |
|-----------|-------|
| **Campaign** | [[{{campaign_name}}]] |
| **Date** | <% tp.date.now("YYYY-MM-DD") %> |
| **Time** | {{time}} |
| **Location** | {{location}} |
| **Expected Duration** | {{duration}} hours |
| **Player Count** | {{player_count}} |

---

## 🎬 Previously On...

```dataview
TABLE WITHOUT ID
  file.link AS "Session",
  key_events AS "Key Events",
  cliffhanger AS "Ended With"
FROM "01_Campaigns"
WHERE type = "session" AND campaign = this.campaign AND status = "completed"
SORT session_number DESC
LIMIT 1
```

### Unresolved Threads
```dataview
LIST
FROM #plot-thread
WHERE status = "active" AND campaign = this.campaign
```

---

## 🎯 Session Goals

### Primary Objectives
- [ ] **Main Quest Progress**: 
- [ ] **Character Development**: 
- [ ] **World Building**: 

### Secondary Goals
- [ ] **Loot/Rewards**: 
- [ ] **NPC Interactions**: 
- [ ] **Foreshadowing**: 

---

## 🎭 Scenes & Encounters

### Scene 1: [Opening Scene]
**Type**: `Roleplay/Combat/Exploration`
**Location**: [[Location Name]]
**Key NPCs**: 
- [[NPC Name]]

**Description**:
```
[Scene description]
```

**Potential Outcomes**:
1. **Success**: 
2. **Failure**: 
3. **Unexpected**: 

---

### Scene 2: [Development]
**Type**: `Roleplay/Combat/Exploration`
**Location**: [[Location Name]]
**Key NPCs**: 
- [[NPC Name]]

**Description**:
```
[Scene description]
```

**Potential Outcomes**:
1. **Success**: 
2. **Failure**: 
3. **Unexpected**: 

---

### Scene 3: [Climax/Resolution]
**Type**: `Roleplay/Combat/Exploration`
**Location**: [[Location Name]]
**Key NPCs**: 
- [[NPC Name]]

**Description**:
```
[Scene description]
```

**Potential Outcomes**:
1. **Success**: 
2. **Failure**: 
3. **Unexpected**: 

---

## ⚔️ Prepared Encounters

```dataview
TABLE WITHOUT ID
  file.link AS "Encounter",
  difficulty AS "CR",
  enemy_count AS "Enemies",
  terrain AS "Terrain"
FROM #encounter
WHERE session = this.session_number OR tagged_for = "next-session"
```

### Quick Combat Stats
> [!multi-column]
>
>> [!example]+ Enemy Group A
>> **Composition**: 
>> **Total CR**: 
>> **Tactics**: 
>> **Motivation**: 
>
>> [!example]+ Enemy Group B
>> **Composition**: 
>> **Total CR**: 
>> **Tactics**: 
>> **Motivation**: 

---

## 👥 NPC Roster

### Featured NPCs This Session
```dataview
TABLE WITHOUT ID
  file.link AS "NPC",
  race + " " + class AS "Type",
  faction AS "Faction",
  motivation AS "Motivation",
  voice_notes AS "Voice"
FROM #npc
WHERE appears_in_session = this.session_number OR location_current = this.primary_location
```

### NPC Quick Reference
> [!info]- Voice & Mannerism Notes
> - **Name**: Voice description, mannerisms
> - **Name**: Voice description, mannerisms

---

## 🗺️ Locations & Maps

### Primary Location
**Name**: [[Location Name]]
**Description**: 

### Points of Interest
1. **Location**: Description
2. **Location**: Description
3. **Location**: Description

### Maps & Handouts
- [ ] Map of {{location}}
- [ ] Handout: {{item}}
- [ ] Prop: {{prop}}

---

## 💰 Treasure & Rewards

### Planned Loot
| Item | Rarity | Location | Notes |
|------|--------|----------|-------|
| | | | |

### Experience Points
- **Combat XP**: 
- **Quest XP**: 
- **Roleplay XP**: 
- **Total Available**: 

---

## 🎲 Random Tables

### Random Encounters (d12)
| Roll | Encounter |
|------|-----------|
| 1-2 | |
| 3-4 | |
| 5-6 | |
| 7-8 | |
| 9-10 | |
| 11-12 | |

### NPC Reactions (d6)
| Roll | Reaction |
|------|----------|
| 1 | Hostile |
| 2 | Unfriendly |
| 3-4 | Neutral |
| 5 | Friendly |
| 6 | Helpful |

---

## 📝 Contingency Plans

### If Players Go Off-Rails
- **Option A**: 
- **Option B**: 
- **Option C**: 

### If Combat Goes Too Fast/Slow
- **Add**: 
- **Remove**: 
- **Modify**: 

### If Session Runs Short/Long
- **Short**: 
- **Long**: 

---

## 🎬 Potential Cliffhangers

1. **Dramatic Reveal**: 
2. **Immediate Danger**: 
3. **Moral Dilemma**: 

---

## 📋 Session Checklist

### Pre-Session
- [ ] Review player notes from last session
- [ ] Prepare battle maps
- [ ] Set up music playlists
- [ ] Review NPC voices and motivations
- [ ] Prepare handouts
- [ ] Check player character sheets
- [ ] Set up initiative tracker
- [ ] Prepare random name list

### During Session
- [ ] Opening recap
- [ ] Set scene and atmosphere
- [ ] Track initiative order
- [ ] Note important player decisions
- [ ] Track XP awards
- [ ] Monitor pacing
- [ ] Take notes for post-session

### Post-Session
- [ ] Convert to session notes
- [ ] Update NPC locations
- [ ] Track loot distribution
- [ ] Update quest progress
- [ ] Note player feedback
- [ ] Plan next session hooks

---

## 🔮 Foreshadowing & Long-term Hooks

- **Near Future** (1-2 sessions): 
- **Mid-term** (3-5 sessions): 
- **Long-term** (Campaign arc): 

---

## 📓 Private DM Notes

```
[Secrets, plot twists, and things players shouldn't know]
```

---

## 🎵 Atmosphere & Music

### Playlists
- **Ambient**: 
- **Combat**: 
- **Tension**: 
- **Victory**: 
- **Emotional**: 

### Key Descriptions to Read
> [!quote] Opening Description
> 

> [!quote] Major Location Description
> 

---

*Prep completed: <% tp.date.now("YYYY-MM-DD HH:mm") %>*