---
tags: [npc, <%tp.system.suggester(["faction/parliament", "faction/shadow-liberation", "faction/silhouette-surgeons", "faction/memory-traders", "faction/resonance-prophets", "faction/deep-cults", "faction/independent"])%>, depth/<%tp.system.suggester(["surface", "shallow", "moderate", "deep", "abyssal", "hadal"])%>]
npc_name: "<%tp.system.prompt("NPC Full Name")%>"
title: "<%tp.system.prompt("Title/Role", "")%>"
race: "<%tp.system.prompt("Race/Species")%>"
gender: "<%tp.system.prompt("Gender")%>"
age: <%tp.system.prompt("Age", "Unknown")%>
faction: "<%tp.system.prompt("Primary Faction")%>"
location: "<%tp.system.prompt("Primary Location")%>"
first_appearance: "Session <%tp.system.prompt("First Appearance Session", "TBD")%>"
status: "<%tp.system.suggester(["alive", "dead", "missing", "unknown", "transformed"])%>"
danger_level: <%tp.system.prompt("Danger Level (1-10)", "5")%>
importance: "<%tp.system.suggester(["minor", "supporting", "major", "critical"])%>"
---

# 🧠 <%tp.get("npc_name")%>
> *<%tp.get("title")%>*

## 🎭 Core Identity

### Quick Reference
- **Name**: <%tp.get("npc_name")%>
- **Role**: <%tp.get("title")%>
- **Faction**: [[<%tp.get("faction")%>]]
- **Location**: <%tp.get("location")%>
- **Status**: <%tp.get("status")%>
- **Threat**: <%tp.get("danger_level")%>/10

### Physical Description
<%tp.system.prompt("Describe physical appearance in 2-3 sentences")%>

**Distinguishing Features**:
- <%tp.system.prompt("Feature 1")%>
- <%tp.system.prompt("Feature 2")%>
- <%tp.system.prompt("Feature 3 (optional)", "")%>

### Personality Traits
**Primary**: <%tp.system.prompt("Main personality trait")%>
**Secondary**: <%tp.system.prompt("Secondary trait")%>
**Under Pressure**: <%tp.system.prompt("How they act when stressed")%>

## 🎯 Motivation Pyramid

### 🔺 Core Drive (Why they exist)
**Ultimate Goal**: <%tp.system.prompt("What drives everything they do?")%>

### 🔷 Needs (What they require)
1. **Survival**: <%tp.system.prompt("What do they need to survive?")%>
2. **Security**: <%tp.system.prompt("What makes them feel safe?")%>
3. **Social**: <%tp.system.prompt("What social needs do they have?")%>

### 💎 Wants (What they desire)
1. **Short-term**: <%tp.system.prompt("What do they want right now?")%>
2. **Medium-term**: <%tp.system.prompt("What do they want this month?")%>
3. **Long-term**: <%tp.system.prompt("What do they want eventually?")%>

### 😨 Fears (What they avoid)
1. **Immediate Fear**: <%tp.system.prompt("What scares them daily?")%>
2. **Deep Fear**: <%tp.system.prompt("What terrifies them fundamentally?")%>
3. **Secret Fear**: <%tp.system.prompt("What fear do they hide?")%>

### 🔐 Secrets (What they hide)
1. **Public Secret**: <%tp.system.prompt("Open secret many suspect")%>
2. **Private Secret**: <%tp.system.prompt("Known only to a few")%>
3. **Dark Secret**: <%tp.system.prompt("Would destroy them if revealed")%>

## 🕸️ Relationship Matrix

### 💚 Allies & Friends
```dataviewjs
const relationships = [
    { name: "<%tp.system.prompt("Ally 1 Name", "")%>", relation: "<%tp.system.prompt("Relationship", "")%>", trust: <%tp.system.prompt("Trust 1-10", "7")%> },
    { name: "<%tp.system.prompt("Ally 2 Name", "")%>", relation: "<%tp.system.prompt("Relationship", "")%>", trust: <%tp.system.prompt("Trust 1-10", "6")%> }
];

if (relationships[0].name) {
    dv.table(
        ["Name", "Relationship", "Trust Level"],
        relationships.filter(r => r.name).map(r => [
            `${r.name}`,
            r.relation,
            "🟢".repeat(Math.floor(r.trust/2)) + "⚪".repeat(5 - Math.floor(r.trust/2))
        ])
    );
}
```

- **Primary Rival**: <%tp.system.prompt("Main enemy/rival", "None")%>
  - **Conflict**: <%tp.system.prompt("Nature of conflict", "")%>
- **Secondary Enemies**: 
  - <%tp.system.prompt("Enemy 2", "")%>

### 🟡 Neutral/Complex
- **Complicated**: <%tp.system.prompt("Complex relationship", "")%>
  - **Dynamic**: <%tp.system.prompt("Why it's complicated", "")%>

### 📊 Faction Standing
Current Reputation: **<%tp.system.prompt("Reputation in faction", "Respected")%>**
- Superior: <%tp.system.prompt("Who they report to", "")%>
- Peers: <%tp.system.prompt("Faction peers", "")%>
- Subordinates: <%tp.system.prompt("Who reports to them", "")%>

## 🧩 Knowledge Database

### What They Know
#### About the Party
- <%tp.system.prompt("What do they know about the PCs?", "Nothing yet")%>

#### About the World
- **Seven Shards**: <%tp.system.prompt("Knowledge level", "Rumors only")%>
- **Shadow Liberation**: <%tp.system.prompt("What they know", "Basic awareness")%>
- **Deep Mother**: <%tp.system.prompt("Belief/knowledge", "Myth")%>
- **Memory Weapons**: <%tp.system.prompt("Understanding", "No knowledge")%>

#### Exclusive Knowledge
- **Only They Know**: <%tp.system.prompt("Unique information they possess")%>

### What They Don't Know
- <%tp.system.prompt("Important thing they're unaware of")%>
- <%tp.system.prompt("Misconception they have")%>

## 🎭 Behavioral Patterns

### Speech Patterns
**Accent/Dialect**: <%tp.system.prompt("How do they speak?")%>
**Favorite Phrases**: 
- "<%tp.system.prompt("Catchphrase 1")%>"
- "<%tp.system.prompt("Catchphrase 2", "")%>"

**Topics They Avoid**: <%tp.system.prompt("What won't they discuss?")%>

### Mannerisms
**Physical Habits**: <%tp.system.prompt("Nervous tick or habit")%>
**Social Behavior**: <%tp.system.prompt("How they act in groups")%>
**Under Stress**: <%tp.system.prompt("Stress response")%>

### Decision Making
**Method**: <%tp.system.suggester(["Impulsive", "Calculated", "Emotional", "Logical", "Intuitive", "Traditional"])%>
**Risk Tolerance**: <%tp.system.suggester(["Risk-averse", "Cautious", "Balanced", "Risk-taking", "Reckless"])%>
**Moral Flexibility**: <%tp.system.suggester(["Rigid", "Principled", "Pragmatic", "Flexible", "Amoral"])%>

## 📋 Dialogue Banks

### Greetings
- **Friendly**: "<%tp.system.prompt("Friendly greeting")%>"
- **Neutral**: "<%tp.system.prompt("Neutral greeting")%>"
- **Hostile**: "<%tp.system.prompt("Hostile greeting")%>"

### Information Responses
- **Willing to Share**: "<%tp.system.prompt("When cooperative")%>"
- **Reluctant**: "<%tp.system.prompt("When hesitant")%>"
- **Refusing**: "<%tp.system.prompt("When refusing")%>"

### Combat/Threat
- **Warning**: "<%tp.system.prompt("Threat/warning")%>"
- **Combat Start**: "<%tp.system.prompt("Battle cry", "")%>"
- **Defeat**: "<%tp.system.prompt("When defeated", "")%>"

### Faction-Specific
- **Faction Motto**: "<%tp.system.prompt("Faction saying")%>"
- **Faction Business**: "<%tp.system.prompt("Discussing faction")%>"

## 🎯 Current Agenda

### Immediate Goals (This Session)
1. [ ] <%tp.system.prompt("What are they doing right now?")%>
2. [ ] <%tp.system.prompt("Secondary current task", "")%>

### Short-term Plans (Next 3 Sessions)
1. [ ] <%tp.system.prompt("Near future plan")%>
2. [ ] <%tp.system.prompt("Contingency plan", "")%>

### Long-term Schemes (Campaign Arc)
1. [ ] <%tp.system.prompt("Ultimate scheme")%>

## 🔄 Dynamic State Tracking

### Relationship Changes
```dataviewjs
// Track how relationships evolve
const changes = [
    { session: "Current", party: "Neutral", faction: "Stable" }
];

dv.table(
    ["Session", "Party Relation", "Faction Status"],
    changes
);
```

### Knowledge Gained
- **Session X**: Learned about [EVENT]
- **Session Y**: Discovered party's [SECRET]

### Status Changes
- **Health**: <%tp.system.prompt("Current health status", "Healthy")%>
- **Mental State**: <%tp.system.prompt("Current mental state", "Stable")%>
- **Transformation**: <%tp.system.prompt("Any transformation progress", "None")%>

## ⚙️ Mechanical Stats

### Combat Stats (If Needed)
- **CR/Level**: <%tp.system.prompt("Challenge Rating", "N/A")%>
- **HP**: <%tp.system.prompt("Hit Points", "N/A")%>
- **AC**: <%tp.system.prompt("Armor Class", "N/A")%>
- **Primary Attack**: <%tp.system.prompt("Main attack", "N/A")%>
- **Special Abilities**: <%tp.system.prompt("Notable abilities", "N/A")%>

### Social Stats
- **Deception**: +<%tp.system.prompt("Deception bonus", "0")%>
- **Insight**: +<%tp.system.prompt("Insight bonus", "0")%>
- **Intimidation**: +<%tp.system.prompt("Intimidation bonus", "0")%>
- **Persuasion**: +<%tp.system.prompt("Persuasion bonus", "0")%>

### Influence Mechanics
- **Persuasion DC**: <%tp.system.prompt("DC to persuade", "15")%>
- **Intimidation DC**: <%tp.system.prompt("DC to intimidate", "15")%>
- **Bribe Threshold**: <%tp.system.prompt("Bribe amount", "Not bribable")%>

## 🎲 DM Tools

### Scene Hooks
1. **Introduction**: <%tp.system.prompt("How to introduce them")%>
2. **Conflict**: <%tp.system.prompt("How to create tension")%>
3. **Resolution**: <%tp.system.prompt("How they might help/hinder")%>

### Plot Connections
- **Main Plot**: <%tp.system.prompt("Connection to main story")%>
- **Side Plots**: <%tp.system.prompt("Potential side quests")%>
- **Future Relevance**: <%tp.system.prompt("Long-term importance")%>

### RP Guidelines
**Personality Summary**: <%tp.system.prompt("One sentence personality")%>
**Core Contradiction**: <%tp.system.prompt("Internal conflict")%>
**Character Arc**: <%tp.system.prompt("Potential development")%>

## 📝 Session Notes

### Session History
<!-- Add session interactions here -->
- **Session X**: First appearance, [INTERACTION]
- **Session Y**: [MAJOR EVENT]

### Player Interactions
<!-- Track specific PC relationships -->
- **[PC Name]**: [Relationship dynamic]

### Evolution Tracker
<!-- How has this NPC changed? -->
- Original Concept: 
- Current State: 
- Potential Future: 

## 🔗 Connections

### Related NPCs
```dataview
LIST
FROM #npc
WHERE contains(file.outlinks, this.file.link) OR contains(this.file.outlinks, file.link)
LIMIT 10
```

### Associated Locations
- Primary: <%tp.get("location")%>
- Secondary: <%tp.system.prompt("Secondary location", "")%>
- Hidden: <%tp.system.prompt("Secret location", "")%>

### Connected Quests
- Main: <%tp.system.prompt("Primary quest involvement", "")%>
- Side: <%tp.system.prompt("Side quest connection", "")%>

---
**NPC Brain Active** | *Last Updated: <%tp.date.now("YYYY-MM-DD")%>*
**Next Review**: Session <%tp.system.prompt("Next appearance session", "TBD")%>