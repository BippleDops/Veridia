---
tags: 
  - session
  - campaign/{{campaignName}}
date: <% tp.date.now("YYYY-MM-DD") %>
sessionNumber: {{sessionNum}}
players: []
absent: []
recap: ""
plotPoints: []
npcsMet: []
locationsVisited: []
combatEncounters: []
loot: []
xpAwarded: 0
treasureValue: 0
questsAdvanced: []
questsCompleted: []
questsStarted: []
nextSessionPrep: ""
secrets_revealed: []
cliffhanger: ""
mood: ""
mvp: ""
memorable_quotes: []
---

<%*
// Auto-generate session number
const sessions = app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("5-Campaign/Sessions/"))
  .sort((a, b) => b.stat.ctime - a.stat.ctime);
const lastSessionNum = sessions.length > 0 ? 
  parseInt(sessions[0].basename.match(/Session (\d+)/)?.[1] || "0") : 0;
const sessionNum = lastSessionNum + 1;

const sessionTitle = `Session ${sessionNum} - ${tp.date.now("YYYY-MM-DD")}`;
await tp.file.rename(sessionTitle);

// Get active players
const party = app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("4-Party/"));
const playerNames = party.map(f => f.basename);
const activePlayers = await tp.system.suggester(
  playerNames, 
  playerNames, 
  true, 
  "Select present players (multi-select)"
);

// Update frontmatter
setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm.sessionNumber = sessionNum;
    fm.players = activePlayers || [];
  });
}, 100);
%>

# Session <% sessionNum %> - <% tp.date.now("MMMM Do, YYYY") %>

## 🎬 Quick Actions
`BUTTON[prepSession]` Session Prep
`BUTTON[generateRecap]` Generate Recap
`BUTTON[addNPC]` Add NPC
`BUTTON[addCombat]` Add Combat
`BUTTON[distributeXP]` Distribute XP

## 👥 Players
**Present:** `INPUT[list:players]`
**Absent:** `INPUT[list:absent]`

## 📖 Previously...
```ad-recap
title: Last Session Recap
<%*
// Auto-pull last session's cliffhanger
const lastSession = sessions[1]; // [0] is current, [1] is previous
if (lastSession) {
  const content = await app.vault.read(lastSession);
  const cliffhanger = content.match(/cliffhanger: "(.*?)"/)?.[1];
  if (cliffhanger) {
    tR += cliffhanger;
  }
}
%>
```

## 🎯 Session Goals
- [ ] 
- [ ] 
- [ ] 

## 📝 Session Notes

### Opening Scene
<!-- How did the session begin? -->

### Key Events
`INPUT[list:plotPoints]`

### NPCs Encountered
```dataviewjs
// Dynamic NPC tracker
const npcs = dv.current().npcsMet || [];
if (npcs.length > 0) {
  dv.table(
    ["NPC", "Location", "Status", "Notes"],
    npcs.map(npcName => {
      const npcFile = dv.page(`2-World/NPCs/${npcName}`);
      return [
        npcFile ? npcFile.file.link : npcName,
        npcFile?.location || "",
        npcFile?.status || "",
        ""
      ];
    })
  );
} else {
  dv.paragraph("*No NPCs encountered yet.*");
}
```

### Locations Visited
`INPUT[list:locationsVisited]`

### Combat Encounters
```ad-combat
title: Combat Log
| Encounter | Enemies | Difficulty | Outcome |
|-----------|---------|------------|---------|
| | | | |
```

## 💰 Loot & Rewards

### Items Found
`INPUT[list:loot]`

### Gold & Treasure
**Total Value:** `INPUT[number:treasureValue]` gp

### Experience Points
**XP Awarded:** `INPUT[number:xpAwarded]`
**Per Player:** <% Math.floor(xpAwarded / players.length) %>

## 📋 Quest Progress

### Advanced
`INPUT[list:questsAdvanced]`

### Completed
`INPUT[list:questsCompleted]`

### New Quests
`INPUT[list:questsStarted]`

## 🎭 Roleplay Highlights

### MVP
`INPUT[text:mvp]`

### Memorable Quotes
`INPUT[list:memorable_quotes]`

### Character Development
<!-- Notable character moments, relationship changes -->

## 🔮 Secrets & Revelations
`INPUT[list:secrets_revealed]`

## 🎬 Cliffhanger
`INPUT[textArea:cliffhanger]`

## 📅 Next Session Prep

### To Prepare
`INPUT[textArea:nextSessionPrep]`

### Expected Direction
- [ ] 
- [ ] 
- [ ] 

## 🎲 Session Mood
`INPUT[inlineSelect(option(Epic), option(Intense), option(Light-hearted), option(Mysterious), option(Dark), option(Chaotic)):mood]`

---
*Session ended at: <% tp.date.now("HH:mm") %>* 