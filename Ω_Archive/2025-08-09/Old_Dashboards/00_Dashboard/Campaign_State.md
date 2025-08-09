---
tags: [dashboard, campaign-state, aquabyssos, live-tracking]
cssclass: campaign-state-dashboard
last_session: 10
current_day: 45
reality_version: "prime"
---

# 🌊 Aquabyssos Campaign State Tracker
> *Living World State - Session 10 | Day 45 | Reality: Prime*

## 🎭 Active Campaign: The Parliament of Shadows

### 📊 Core Metrics
```dataviewjs
const currentDepths = {
    "Party Average": 1500,
    "Deepest Reached": 3000,
    "Safe Zone": 500
};

const pressureLevels = {
    0: "Surface (No Pressure)",
    500: "Shallow (Light Pressure)",
    1500: "Mid-Depth (Moderate Pressure)",
    3000: "Deep (Heavy Pressure)",
    5000: "Abyssal (Extreme Pressure)",
    10000: "Hadal (Crushing Pressure)"
};

dv.table(["Metric", "Current Value", "Status"],
    [
        ["Current Depth", currentDepths["Party Average"] + "m", pressureLevels[currentDepths["Party Average"]]],
        ["Shadow Independence", "35%", "🟡 Moderate"],
        ["Memory Integrity", "78%", "🟢 Stable"],
        ["Timeline Position", "Day 45", "Prime Timeline"],
        ["Reality Stability", "92%", "🟢 Normal"]
    ]
);
```

## 🏴 Faction Reputation Matrix
```dataviewjs
const factions = {
    "Parliament of Echoes": { rep: 7, trend: "↑", status: "Allied" },
    "Shadow Liberation Front": { rep: -3, trend: "↓", status: "Hostile" },
    "The Silhouette Surgeons": { rep: 0, trend: "→", status: "Neutral" },
    "Memory Traders Guild": { rep: 4, trend: "↑", status: "Friendly" },
    "The Resonance Prophets": { rep: 2, trend: "→", status: "Neutral" }
};

const rows = Object.entries(factions).map(([name, data]) => {
    const bar = "█".repeat(Math.abs(data.rep)) + "░".repeat(10 - Math.abs(data.rep));
    const color = data.rep > 0 ? "🟢" : data.rep < 0 ? "🔴" : "⚪";
    return [name, bar, data.rep + " " + data.trend, color + " " + data.status];
});

dv.table(["Faction", "Reputation Bar", "Score", "Status"], rows);
```

## 👥 Party Status

### Character Transformations
```dataviewjs
const party = [
    { name: "Character 1", depth_adapt: 45, shadow_ind: 20, memory_int: 85, status: "Healthy" },
    { name: "Character 2", depth_adapt: 60, shadow_ind: 35, memory_int: 70, status: "Shadow-Touched" },
    { name: "Character 3", depth_adapt: 30, shadow_ind: 15, memory_int: 95, status: "Pressure Sick" },
    { name: "Character 4", depth_adapt: 75, shadow_ind: 50, memory_int: 60, status: "Transforming" }
];

dv.table(
    ["Character", "Depth Adaptation", "Shadow Independence", "Memory Integrity", "Status"],
    party.map(p => [
        p.name,
        p.depth_adapt + "%",
        p.shadow_ind + "%",
        p.memory_int + "%",
        p.status
    ])
);
```

## 🔄 Timeline Divergence Points

### Critical Events (Last 5 Sessions)
```dataview
TABLE 
    date as "Session Date",
    choice as "Decision",
    timeline_impact as "Timeline Impact",
    consequences as "Consequences"
FROM #session AND #aquabyssos
WHERE session_number >= 6
SORT session_number DESC
LIMIT 5
```

### Active Timeline Branches
- **Prime Timeline** (Current) - Original sequence of events
- **Shadow Liberation Timeline** - Triggered if shadows gain >75% independence
- **Memory War Timeline** - Activated by memory weapon deployment
- **Recursion Loop** - Initiated by temporal paradox
- **Deep Mother Timeline** - Awakens at 10,000m depth

## 🎯 Campaign Progression

### Act Completion
```dataviewjs
const acts = {
    "Act 1: The Drowning Welcome": 100,
    "Act 2: Shadow Revelations": 100,
    "Act 3: The Silhouette Conspiracy": 75,
    "Act 4: Memory Wars Begin": 25,
    "Act 5: The Deep Beckons": 0
};

for (const [act, progress] of Object.entries(acts)) {
    const filled = "▓".repeat(Math.floor(progress/10));
    const empty = "░".repeat(10 - Math.floor(progress/10));
    dv.paragraph(`**${act}**: ${filled}${empty} ${progress}%`);
}
```

## 🔮 World State Variables

### Environmental Conditions
- **Memory Tide Status**: `Ebbing (Safe for 3 days)`
- **Shadow Density**: `Medium (35% manifestation rate)`
- **Temporal Distortion**: `Minimal (±2 hours per depth zone)`
- **Pressure Anomalies**: `2 detected in Cerulean Trench`

### Political Climate
- **Parliament Stability**: `Contested (65% control)`
- **Shadow Citizenship Act**: `Under Debate (Vote in 2 sessions)`
- **Trade Route Status**: `Disrupted (Shadow attacks)`
- **Public Sentiment**: `Fearful (Unrest level 3/10)`

## 📍 Location Status Tracker

### Key Locations
```dataviewjs
const locations = [
    { name: "Abyssos Prime", control: "Parliament", status: "Stable", threat: 2 },
    { name: "Parliament of Echoes", control: "Contested", status: "Under Siege", threat: 7 },
    { name: "The Inverse Palace", control: "Shadows", status: "Occupied", threat: 9 },
    { name: "Cerulean Trench", control: "Unknown", status: "Unexplored", threat: 8 },
    { name: "Memory Meadows", control: "Neutral", status: "Corrupted", threat: 6 }
];

dv.table(
    ["Location", "Control", "Status", "Threat Level"],
    locations.map(l => [
        `${l.name}`,
        l.control,
        l.status,
        "🔴".repeat(Math.min(l.threat, 5)) + "⚫".repeat(5 - Math.min(l.threat, 5))
    ])
);
```

## 🗺️ Active Investigations

### Open Cases
```dataview
TABLE 
    priority as "Priority",
    lead as "Current Lead",
    progress as "Progress"
FROM #investigation AND #aquabyssos
WHERE status = "active"
SORT priority DESC
```

## ⚠️ Pending Consequences

### Immediate (Next Session)
- [ ] Senator Glaucus dissolution timer: **2 days remaining**
- [ ] Shadow Duchess arrival at Parliament
- [ ] Memory trader deadline for artifact delivery

### Near Future (2-3 Sessions)
- [ ] Parliament vote on Shadow Citizenship
- [ ] First Memory Tide of the season
- [ ] Silhouette Surgeon recruitment attempt

### Long Term (5+ Sessions)
- [ ] Deep Mother stirring detected at 8,000m
- [ ] Timeline recursion probability: 15% and rising
- [ ] Reality anchor degradation: 78% integrity

## 🎲 Probability Engine

### Likely Outcomes (Next Session)
```dataviewjs
const probabilities = [
    { event: "Shadow attack on party", chance: 75 },
    { event: "New faction emerges", chance: 30 },
    { event: "Memory corruption event", chance: 45 },
    { event: "Depth forced descent", chance: 60 },
    { event: "NPC betrayal", chance: 35 }
];

dv.table(
    ["Potential Event", "Probability", "Impact"],
    probabilities.map(p => [
        p.event,
        p.chance + "%",
        p.chance > 60 ? "🔴 High" : p.chance > 40 ? "🟡 Medium" : "🟢 Low"
    ])
);
```

## 📈 Session Trends

### Last 5 Sessions Analysis
```dataviewjs
const sessionData = [
    { num: 6, combat: 2, rp: 3, exploration: 2, danger: 6 },
    { num: 7, combat: 1, rp: 4, exploration: 3, danger: 7 },
    { num: 8, combat: 3, rp: 2, exploration: 2, danger: 8 },
    { num: 9, combat: 0, rp: 5, exploration: 1, danger: 5 },
    { num: 10, combat: 4, rp: 1, exploration: 3, danger: 9 }
];

dv.paragraph("**Session Activity Distribution:**");
const totals = { combat: 0, rp: 0, exploration: 0 };
sessionData.forEach(s => {
    totals.combat += s.combat;
    totals.rp += s.rp;
    totals.exploration += s.exploration;
});

const total = totals.combat + totals.rp + totals.exploration;
dv.paragraph(`Combat: ${Math.round(totals.combat/total*100)}% | RP: ${Math.round(totals.rp/total*100)}% | Exploration: ${Math.round(totals.exploration/total*100)}%`);
```

---

## 🔄 Quick State Updates

```button
name Update Session Count
type command
action MetaEdit: Run MetaEdit
id update-session
```
^button-session

```button
name Advance Timeline Day
type command
action Templater: Replace templates in the active file
id advance-day
```
^button-day

```button
name Update Faction Reputation
type link
action obsidian://open?vault=ObsidianTTRPGVault&file=00_Dashboard/Faction_Updater
id update-faction
```
^button-faction

---
*Last Updated: Session 10 | Auto-refresh enabled*