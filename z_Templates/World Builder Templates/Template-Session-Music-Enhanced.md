---
tags:
  - session
  - "session-{{VALUE:session_number}}"
  - campaign
date: {{date:YYYY-MM-DD}}
session_number: {{VALUE:session_number}}
campaign: "{{VALUE:campaign_name}}"
duration: {{VALUE:duration}}
players_present: 
  - "{{VALUE:player_1}}"
  - "{{VALUE:player_2}}"
  - "{{VALUE:player_3}}"
  - "{{VALUE:player_4}}"
dm_prep_time: {{VALUE:prep_time}}
session_rating: 
session_mood: {{VALUE:overall_mood}}
music_enabled: true
musicLog: []
# NPCs encountered this session
npcsMet: []
# Locations visited
locationsVisited: []  
# Quests advanced
questsAdvanced: []
# Items gained/lost
loot: []
# Combat encounters
combats: []
# Key story beats
plotPoints: []
# Player achievements
achievements: []
# Cliffhanger for next session  
cliffhanger: ""
# Meta information
created: {{date:YYYY-MM-DD HH:mm}}
modified: {{date:YYYY-MM-DD HH:mm}}
---

# 🎲 Session {{VALUE:session_number}} - {{title}}

**Date**: {{date:YYYY-MM-DD}} | **Duration**: {{VALUE:duration}} hours | **Campaign**: {{VALUE:campaign_name}}

---

## 🎵 Session Atmosphere & Music

### Music Control Panel
`BUTTON[setExplorationMood]` 🗺️ Exploration | `BUTTON[setCombatMood]` ⚔️ Combat | `BUTTON[setTavernMood]` 🍺 Social | `BUTTON[setMysteryMood]` 🔍 Investigation

**Current Mood**: `INPUT[inlineSelect(option(exploration), option(combat), option(tavern), option(mystery), option(city), option(dungeon), option(victory), option(rest)):currentMood]`
**Volume**: `INPUT[slider(addLabels(0, 100), class(music-volume)):musicVolume]`%

### Music Log
*Atmospheric changes during this session:*

| Time | Scene | Mood | Playlist/Track | Volume | Notes |
|------|-------|------|----------------|--------|-------|
| Session Start | Opening | Exploration | *Auto-generated* | 25% | Ambient start |
|  |  |  |  |  |  |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

---

## 📋 Session Summary

### Opening Scene
*How did the session begin? What was the party's situation?*

### Key Events
1. **Event 1**: 
2. **Event 2**: 
3. **Event 3**: 

### Major Decisions
*What significant choices did the party make?*

### Cliffhanger
*Where did the session end? What's the hook for next time?*
`INPUT[textArea(class(cliffhanger-input)):cliffhanger]`

---

## 🎭 NPCs Encountered

### New NPCs Met This Session
```dataviewjs
// Show NPCs linked to this session
const sessionFile = dv.current().file.path;
const npcs = dv.pages('#NPC')
  .where(p => p.sessions && p.sessions.includes(sessionFile))
  .sort(p => p.file.name);

if (npcs.length > 0) {
  dv.table(
    ["NPC", "Occupation", "Location", "Relationship", "Key Interaction"],
    npcs.map(npc => [
      npc.file.link,
      npc.occupation || "Unknown",
      npc.location || "Unknown", 
      npc.relationship || "Neutral",
      "*(Add interaction notes)*"
    ])
  );
} else {
  dv.paragraph("*No NPCs linked to this session yet. Use the Quick Add NPC button or manually add them.*");
}
```

### Quick NPC Actions
`BUTTON[newNPC]` 👥 Create New NPC | `BUTTON[linkExistingNPC]` 🔗 Link Existing NPC | `BUTTON[updateNPCRelationship]` 💝 Update Relationships

### Notable NPC Moments
- **[NPC Name]**: *Key dialogue, actions, or revelations*
- **[NPC Name]**: *Relationship changes or character development*

---

## 🗺️ Locations Visited

### Primary Locations This Session
```dataviewjs
// Show locations linked to this session  
const sessionFile = dv.current().file.path;
const locations = dv.pages('"2-World/Hubs" OR "2-World/Places" OR "2-World/Points of Interest"')
  .where(p => p.sessions_visited && p.sessions_visited.includes(sessionFile))
  .sort(p => p.file.name);

if (locations.length > 0) {
  dv.table(
    ["Location", "Type", "Key Events", "Music Mood"],
    locations.map(loc => [
      loc.file.link,
      loc.type || "Unknown",
      "*(Add events)*",
      "*(Add atmosphere)*"
    ])
  );
} else {
  dv.paragraph("*No locations formally linked to this session. Consider adding them for better tracking.*");
}
```

### Location Atmosphere Notes
*How did music and description enhance each location?*

---

## ⚔️ Combat Encounters

### Combat Music & Atmosphere
**Combat Music Used**: `INPUT[inlineSelect(option(epic-battle), option(skirmish), option(stealth), option(boss-fight), option(none)):combatMusic]`
**Average Combat Volume**: `INPUT[number:combatVolume]`%

### Encounter Details
| # | Enemies | CR | Outcome | Music Impact | Players' Reaction |
|---|---------|----|---------|--------------| -----------------|
| 1 |         |    |         |              |                  |
| 2 |         |    |         |              |                  |
| 3 |         |    |         |              |                  |

### Combat Highlights
*Epic moments, critical hits, near-death experiences, tactical brilliance*

---

## 📜 Quest Progress

### Active Quests This Session
```dataviewjs
// Show quests progressed this session
const questsAdvanced = dv.current().questsAdvanced || [];
if (questsAdvanced.length > 0) {
  const quests = dv.pages('"2-World/Quests"')
    .where(q => questsAdvanced.some(qa => q.file.path.includes(qa)));
    
  if (quests.length > 0) {
    dv.table(
      ["Quest", "Status", "Progress Made", "Next Steps"],
      quests.map(q => [
        q.file.link,
        q.status || "Active",
        "*(Add progress notes)*",
        "*(Add next steps)*"
      ])
    );
  }
} else {
  dv.paragraph("*No quest progress formally tracked this session.*");
}
```

### Quest Development Notes
*How did music enhance quest moments? Which atmospheric moods worked best for investigation/revelation scenes?*

---

## 💎 Loot & Rewards

### Items Gained
| Item | Type | Source | Value | Music Moment |
|------|------|--------|-------|--------------|
|      |      |        |       |              |

### Experience & Advancement
**XP Awarded**: `INPUT[number:xpAwarded]`
**Milestone Progress**: `INPUT[textArea:milestoneProgress]`

### Character Development
*Notable character growth, new abilities, roleplay moments*

---

## 🎯 Session Atmosphere Analysis

### Music Effectiveness
**Overall Atmosphere Rating**: `INPUT[inlineSelect(option(1), option(2), option(3), option(4), option(5)):atmosphereRating]`/5

**Most Effective Music Moments**:
- 
- 
- 

**Areas for Improvement**:
- 
- 

### Player Feedback on Atmosphere
**Player Comments on Music/Mood**:
> *(Collect player feedback about the musical atmosphere)*

**Volume Levels**:
- **Too Quiet**: *(scenes where volume should be higher)*
- **Too Loud**: *(scenes where volume should be lower)*
- **Perfect**: *(scenes with ideal volume)*

---

## 📊 Session Statistics

### Participation & Engagement
```dataviewjs
const sessionData = dv.current();
const stats = {
  'NPCs Encountered': (sessionData.npcsMet || []).length,
  'Locations Visited': (sessionData.locationsVisited || []).length,
  'Quests Advanced': (sessionData.questsAdvanced || []).length,
  'Combat Encounters': (sessionData.combats || []).length,
  'Music Changes': (sessionData.musicLog || []).length,
  'Session Rating': sessionData.session_rating || 'Not rated'
};

dv.table(['Metric', 'Value'], Object.entries(stats));
```

### Memorable Moments Ranking
1. **Most Epic Moment**: 
2. **Funniest Moment**: 
3. **Most Dramatic**: 
4. **Best Roleplay**: 
5. **Cleverest Solution**: 

---

## 🔮 Next Session Prep

### Player Character Status
- **[Character 1]**: *Status, goals, concerns*
- **[Character 2]**: *Status, goals, concerns*  
- **[Character 3]**: *Status, goals, concerns*
- **[Character 4]**: *Status, goals, concerns*

### Continuing Plot Threads
1. **[Plot Thread]**: *Current status and next steps*
2. **[Plot Thread]**: *Current status and next steps*
3. **[Plot Thread]**: *Current status and next steps*

### Music Planning for Next Session
**Expected Moods Needed**: 
- [ ] Exploration/Travel
- [ ] Social/Tavern scenes  
- [ ] Investigation/Mystery
- [ ] Combat encounters
- [ ] Dramatic revelations

**Playlist Prep Notes**:
*Which playlists worked well? What new moods might be needed?*

### DM Reminders
- [ ] Follow up on [specific plot point]
- [ ] Prepare [NPC/location/item]
- [ ] Review [rules/mechanics]
- [ ] Test new music playlist
- [ ] Check with players about [feedback/concern]

---

## 🎪 Player Quotes & Memorable Dialogue

### Best In-Character Quotes
> *"[Memorable player dialogue]"* - [Character Name]

> *"[Funny or dramatic moment]"* - [Character Name]

### DM Narration Highlights
*Particularly effective descriptions or moments*

### Table Banter
*Funny out-of-character moments that enhanced the session*

---

## 🎨 Session Mood Board

### Visual Atmosphere
*Describe the overall visual/atmospheric theme of this session*

### Musical Journey
**Session Start**: [Mood/Genre] → **Mid-Session**: [Mood/Genre] → **Session End**: [Mood/Genre]

**Signature Track**: *The one song/playlist that defined this session*

**Musical Discoveries**: *New playlists or tracks that worked particularly well*

---

## 📈 Campaign Continuity

### Long-term Consequences
*How will events from this session impact future sessions?*

### Character Arc Development
*Progress made on individual character storylines*

### World State Changes
*How has the campaign world changed because of this session?*

### Relationship Dynamics
*Changes in party dynamics, NPC relationships, faction standings*

---

## 🎭 Post-Session Reflection

### What Went Well
- **Atmosphere**: 
- **Pacing**: 
- **Player Engagement**: 
- **Story Development**: 

### Areas for Improvement  
- **Music Timing**: 
- **Volume Management**: 
- **Playlist Selection**: 
- **Technical Issues**: 

### Player Feedback Summary
*Key points from post-session discussion*

### DM Learning Notes
*Insights for future sessions*

---

## 🔗 Related Content

### Session Files
- **Previous Session**: `[[Session {{VALUE:session_number - 1}}]]`
- **Next Session**: `[[Session {{VALUE:session_number + 1}}]]` *(when created)*

### Campaign Resources
- **Campaign Overview**: `[[Campaign Name]]`
- **Character Sheets**: `[[Party Information]]`
- **World Reference**: `[[Campaign World]]`

---

*Session {{VALUE:session_number}} complete! Music-enhanced storytelling for the win.* 🎵🎲 