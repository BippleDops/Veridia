---
tags: [session-prep, automated, template]
session_number: <% tp.system.prompt("Session Number") %>
date: <% tp.date.now("YYYY-MM-DD") %>
prep_date: <% tp.date.now("YYYY-MM-DD HH:mm") %>
campaign: "Aquabyssos - The Parliament of Shadows"
---

# Session <% tp.system.prompt("Session Number") %> Prep
## <% tp.system.prompt("Session Title") %>
*Prepared: <% tp.date.now("YYYY-MM-DD HH:mm") %>*

## 📊 Campaign State Summary
<%*
// Pull from Campaign State
const stateFile = tp.file.find_tfile("Campaign_State");
const stateContent = await app.vault.read(stateFile);
const depthMatch = stateContent.match(/"Party Average": (\d+)/);
const currentDepth = depthMatch ? depthMatch[1] : "Unknown";
const dayMatch = stateContent.match(/current_day: (\d+)/);
const currentDay = dayMatch ? dayMatch[1] : "Unknown";
-%>
- **Current Depth**: <%= currentDepth %>m
- **Campaign Day**: <%= currentDay %>
- **Reality Status**: Prime Timeline

## 📜 Previously On...
<%*
// Get last 3 sessions
const sessions = app.vault.getMarkdownFiles()
    .filter(f => f.path.includes("Sessions") && f.path.includes("Aquabyssos"))
    .sort((a, b) => b.basename.localeCompare(a.basename))
    .slice(0, 3);

if (sessions.length > 0) {
    tR += "### Recent Events:\n";
    for (const session of sessions) {
        const content = await app.vault.read(session);
        const titleMatch = content.match(/title: "(.+?)"/);
        const summaryMatch = content.match(/## Session Summary\n(.+?)(?=\n##|\n---|$)/s);
        if (titleMatch) {
            tR += `- **${session.basename}**: ${titleMatch[1]}\n`;
            if (summaryMatch && summaryMatch[1]) {
                const firstLine = summaryMatch[1].split('\n')[0];
                tR += `  - ${firstLine.substring(0, 100)}...\n`;
            }
        }
    }
}
-%>

## 🎯 Session Objectives

### Primary Goals
- [ ] <%tp.system.prompt("Primary Objective 1")%>
- [ ] <%tp.system.prompt("Primary Objective 2")%>
- [ ] <%tp.system.prompt("Primary Objective 3 (optional)", "")%>

### Secondary Goals
- [ ] Advance character arcs
- [ ] Introduce new plot thread
- [ ] Foreshadow future events

## 🗺️ Planned Locations
<%*
// Get location templates based on depth
const depth = parseInt(currentDepth);
let suggestedLocations = [];

if (depth < 1000) {
    suggestedLocations = ["Abyssos Prime - Upper Districts", "Parliament Antechamber", "Surface Markets"];
} else if (depth < 3000) {
    suggestedLocations = ["Parliament of Echoes", "The Inverse Palace", "Memory Trading Post"];
} else if (depth < 5000) {
    suggestedLocations = ["The Cerulean Trench", "Silhouette Surgeon Facility", "Deep Current Rapids"];
} else {
    suggestedLocations = ["The Primordial Vaults", "Hadal Zone", "Deep Mother's Domain"];
}

for (const loc of suggestedLocations) {
    tR += `- [ ] [[${loc}]]\n`;
}
-%>

### Location Notes
```dataview
TABLE 
    danger_level as "Danger",
    environmental_effects as "Effects",
    key_features as "Features"
FROM #location
WHERE contains(file.name, this.planned_locations)
```

## 👥 NPCs This Session

### Definitely Appearing
<%*
// Pull NPCs based on recent sessions and faction involvement
const recentNPCs = [];
const factionFile = tp.file.find_tfile("Campaign_State");
if (factionFile) {
    const factionContent = await app.vault.read(factionFile);
    if (factionContent.includes("Parliament") && factionContent.includes("Allied")) {
        recentNPCs.push("Senator Glaucus");
    }
    if (factionContent.includes("Shadow Liberation")) {
        recentNPCs.push("Shadow Duchess Nyx");
    }
}
for (const npc of recentNPCs) {
    tR += `- [[${npc}]]\n`;
}
-%>

### Potentially Appearing
- [[<%tp.system.prompt("Potential NPC 1", "")%>]]
- [[<%tp.system.prompt("Potential NPC 2", "")%>]]

### NPC Dispositions
```dataview
TABLE 
    faction as "Faction",
    current_goal as "Current Goal",
    disposition as "Disposition to Party"
FROM #npc
WHERE contains(this.file.outlinks, file.link)
```

## ⚔️ Planned Encounters

### Combat Encounters
<%*
const encounterDifficulty = depth > 3000 ? "Deadly" : depth > 1500 ? "Hard" : "Medium";
-%>
**Suggested Difficulty**: <%= encounterDifficulty %>

1. **Encounter 1**: <%tp.system.prompt("Combat Encounter 1", "Shadow Ambush")%>
   - Trigger: <%tp.system.prompt("Trigger condition", "Investigation progress")%>
   - Enemies: <%tp.system.prompt("Enemy composition", "3 Shadow Stalkers, 1 Shadow Weaver")%>
   - Terrain: <%tp.system.prompt("Terrain features", "Narrow corridor with shadow pools")%>

2. **Optional Combat**: <%tp.system.prompt("Optional Combat", "")%>
   - Can be avoided by: <%tp.system.prompt("Avoidance method", "Successful negotiation")%>

### Social Encounters
1. **Key Negotiation**: <%tp.system.prompt("Social Encounter", "Faction representative meeting")%>
   - Stakes: <%tp.system.prompt("What's at stake", "Alliance terms")%>
   - Success: <%tp.system.prompt("Success outcome", "Gain faction support")%>
   - Failure: <%tp.system.prompt("Failure outcome", "Faction becomes hostile")%>

### Exploration Challenges
1. **Environmental Hazard**: Pressure adaptation check
   - DC: <%= 10 + Math.floor(depth/500) %>
   - Failure: Gain 1 level of exhaustion

## 🎭 Contingency Plans

### If Players Go Off-Script
<%*
const contingencies = [
    "Return to main plot via urgent NPC message",
    "Random encounter that redirects to objective",
    "Environmental hazard forces specific path",
    "Faction reaction creates time pressure"
];
for (const cont of contingencies) {
    tR += `- ${cont}\n`;
}
-%>

### If Session Runs Short
- **Quick Encounter**: Shadow manifestation event
- **Roleplay Scene**: Memory trading opportunity
- **Exploration**: Discover hidden cache

### If Session Runs Long
- End on cliffhanger: <%tp.system.prompt("Cliffhanger idea", "Shadow Duchess arrives unexpectedly")%>

## 📊 Faction Actions (While Party Was Away)

<%*
// Generate faction actions based on reputation
const factionActions = {
    "Parliament of Echoes": "Passed new shadow containment law",
    "Shadow Liberation Front": "Sabotaged pressure regulation system",
    "Memory Traders Guild": "Discovered new memory vein",
    "The Silhouette Surgeons": "Completed new shadow hybrid",
    "The Resonance Prophets": "Issued cryptic warning about the depths"
};

for (const [faction, action] of Object.entries(factionActions)) {
    tR += `- **${faction}**: ${action}\n`;
}
-%>

## 🎲 Random Tables

### Rumors (d6)
1. "The shadows are organizing in the lower districts..."
2. "A memory trader found something ancient in the deep..."
3. "The Parliament is hiding something about the pressure systems..."
4. "Someone saw the Deep Mother's herald near the Trench..."
5. "The Silhouette Surgeons are recruiting test subjects..."
6. "Time flows differently below 5000 meters..."

### Random Encounters (d10)
<%*
const encounterTable = [
    "Shadow manifestation (non-hostile, observing)",
    "Pressure suit malfunction (random PC)",
    "Memory trader with rare goods",
    "Faction messenger with urgent news",
    "Environmental anomaly (time skip/loop)",
    "Escaped shadow hybrid seeking help",
    "Parliament enforcer patrol",
    "Wild memory fragment (vision of past/future)",
    "Depth sickness outbreak nearby",
    "Discovery of ancient artifact"
];

let counter = 1;
for (const enc of encounterTable) {
    tR += `${counter}. ${enc}\n`;
    counter++;
}
-%>

## 🎁 Treasure & Rewards

### Guaranteed Rewards
- **XP**: <%tp.system.prompt("XP amount", Math.floor(depth/100) * 100)%>
- **Faction Reputation**: +/- <%tp.system.prompt("Rep change", "2")%> with <%tp.system.prompt("Faction", "Parliament")%>

### Potential Loot
- **Monetary**: <%tp.system.prompt("Gold amount", depth * 2)%> depth coins
- **Items**: 
  - [ ] Pressure adaptation equipment
  - [ ] Shadow-touched item
  - [ ] Memory crystal
  - [ ] Faction token

## 📝 Session Notes Section

### Opening Scene
<%tp.system.prompt("Describe opening scene", "The party awakens to emergency alarms...")%>

### Key Decision Points
1. 
2. 
3. 

### Closing Scene Ideas
- Option A: <%tp.system.prompt("Closing option A", "Mysterious figure appears")%>
- Option B: <%tp.system.prompt("Closing option B", "Environmental crisis begins")%>

## ⚠️ DM Reminders

### Rules to Remember
- Pressure effects at current depth: <%= depth %>m
- Shadow independence checks
- Memory integrity tracking
- Timeline divergence possibilities

### Player-Specific Notes
<%*
const players = await tp.system.prompt("Player names (comma separated)", "");
if (players) {
    const playerList = players.split(',');
    for (const player of playerList) {
        tR += `- **${player.trim()}**: \n`;
    }
}
-%>

### Props/Materials Needed
- [ ] Battle map for <%tp.system.prompt("Which encounter", "main combat")%>
- [ ] NPC reference cards
- [ ] Faction reputation tracker
- [ ] Depth/pressure reference

## 🔮 Foreshadowing Elements

### Near Future (Next 2-3 Sessions)
- 
- 

### Far Future (5+ Sessions)
- 
- 

## 🎭 Mood & Atmosphere

### Sensory Details
- **Visual**: <%tp.system.prompt("Visual theme", "Bioluminescent darkness")%>
- **Auditory**: <%tp.system.prompt("Sound theme", "Crushing pressure groans")%>
- **Tactile**: <%tp.system.prompt("Touch theme", "Cold, dense water pressure")%>

### Emotional Tone
Target feeling: <%tp.system.prompt("Emotional goal", "Paranoid tension")%>

---
## Post-Session Checklist
- [ ] Update Campaign State
- [ ] Log faction reputation changes
- [ ] Record PC transformation progress
- [ ] Note timeline divergence points
- [ ] Update NPC goals/locations
- [ ] Schedule next session

---
*Generated: <% tp.date.now("YYYY-MM-DD HH:mm") %>*
*Next Prep: [[Session_<%parseInt(tp.system.prompt("Session Number")) + 1%>_Prep]]*