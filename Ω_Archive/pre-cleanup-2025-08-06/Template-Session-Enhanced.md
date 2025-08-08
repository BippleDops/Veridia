---
type: session
tags: [session, session-<% tp.date.now("YYYY") %>]
aliases: ["S<% tp.file.title.match(/\d+/)[0] %>"]
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
session_number: <% tp.file.title.match(/\d+/)[0] %>
date_played: <% tp.date.now("YYYY-MM-DD") %>
date_ingame_start: ""
date_ingame_end: ""
campaign: "[[01_Campaigns/Campaign_Name|Cerulean Archipelago]]"
duration_hours: 0
recap_generated: false
xp_awarded: 0
milestone: false
---

# Session <% tp.file.title.match(/\d+/)[0] %> - <% tp.date.now("YYYY-MM-DD") %>

> [!session-header]
> ## 🎲 Session <% tp.file.title.match(/\d+/)[0] %> Overview
> **Date Played:** <% tp.date.now("dddd, MMMM Do YYYY") %>
> **Time:** `INPUT[text:time]` | **Duration:** `INPUT[number:duration]` hours
> **In-Game Dates:** `INPUT[text:date_start]` to `INPUT[text:date_end]`
> **Primary Location:** [[`INPUT[suggester(tp.system.getFiles().filter(f => f.path.includes("Locations")).map(f => f.basename)):location]`]]

## 👥 Attendance

### Player Characters Present
- [ ] `INPUT[text:pc1_name]` - `INPUT[text:pc1_player]`
- [ ] `INPUT[text:pc2_name]` - `INPUT[text:pc2_player]`
- [ ] `INPUT[text:pc3_name]` - `INPUT[text:pc3_player]`
- [ ] `INPUT[text:pc4_name]` - `INPUT[text:pc4_player]`
- [ ] `INPUT[text:pc5_name]` - `INPUT[text:pc5_player]`

### Character Status
| Character | HP | Conditions | Notes |
|-----------|----|-----------:|-------|
| | / | | |
| | / | | |
| | / | | |
| | / | | |

## 🔮 Previously on <% tp.file.folder %>...

> [!note]- Last Session Recap
> ```dataview
> LIST summary
> FROM "01_Campaigns/Campaign_Name/Sessions"
> WHERE session_number = <% tp.file.title.match(/\d+/)[0] - 1 %>
> LIMIT 1
> ```

### Key Events from Last Time:
- 
- 
- 

### Cliffhanger/Hook:
> 

---

## 🎬 Session Narrative

### Opening Scene
**Time:** 
**Location:** 
**Atmosphere:** 

> [!scene]
> 

### Act I: <Title>
**Key NPCs:** 
**Conflict:** 
**Resolution:** 

#### Scene Details
- 

#### Notable Dialogue
> " " - 

### Act II: <Title>
**Key NPCs:** 
**Conflict:** 
**Resolution:** 

#### Scene Details
- 

#### Complications
- 

### Act III: <Title>
**Key NPCs:** 
**Conflict:** 
**Resolution:** 

#### Scene Details
- 

#### Climax
- 

---

## 🎭 NPCs Encountered

### New NPCs
- **Name** - *Role* - Description, motivation, notable features
- 

### Recurring NPCs
```dataview
TABLE role as "Role", last_seen as "Last Seen", relationship as "Relationship"
FROM #npc
WHERE contains(sessions_appeared, this.file.name)
SORT name ASC
```

### NPC Interactions Summary
- 

---

## 🗺️ Locations Visited

### New Locations
- [[Location Name]] - Brief description
- 

### Revisited Locations
- [[Location Name]] - What happened here
- 

### Travel Log
```
Start: 
→ 
→ 
End: 
```

---

## ⚔️ Combat Encounters

### Encounter 1: <Name>
**Initiative Order:**
1. 
2. 
3. 

**Enemies Defeated:**
- 
- 

**Tactics Used:**
- 

**Outcome:**
- 

### Combat Statistics
- Total Encounters: 
- Rounds Total: 
- Party Knockouts: 
- Resources Expended: 

---

## 📜 Quests & Objectives

### Main Quest Progress
**[[Quest Name]]**
- [x] Previous objective completed
- [ ] Current objective
- [ ] Next objective

**Progress:** ████████░░ 80%

### Side Quests
- **[[Quest Name]]** - Status: `INPUT[inlineSelect(option(New), option(Active), option(Completed), option(Failed)):status]`
- 

### New Leads
- 
- 

---

## 💎 Treasure & Rewards

### Monetary Gains
- **Coins:** 
  - Copper: 
  - Silver: 
  - Gold: 
  - Platinum: 
- **Gems/Art:** 
- **Total Value:** gp

### Items Found
| Item | Type | Value | Claimed By |
|------|------|-------|------------|
| | | | |

### Special Rewards
- **Favors:** 
- **Information:** 
- **Titles/Ranks:** 

---

## 🎯 Character Development

### Milestone Moments
- **Character Name:** What they learned/how they grew
- 

### Relationship Changes
- 
- 

### Personal Quest Progress
- 

---

## 📊 Session Mechanics

### Experience Points
**Combat XP:** 
**Quest XP:** 
**Roleplay XP:** 
**Total XP:** `= combat + quest + roleplay`

**Milestone?** `INPUT[toggle:milestone]`

### Resources Used
- **Spell Slots:** 
- **Hit Dice:** 
- **Consumables:** 
- **Ammunition:** 

### Rules Clarifications
- 

---

## 🎪 Memorable Moments

### Quotes of the Night
> " " - 
> " " - 

### Epic Successes
- 

### Critical Failures
- 

### Running Jokes
- 

---

## 🔚 Session End

### Cliffhanger
> [!danger] TO BE CONTINUED...
> 

### Next Session Prep
- [ ] Level up characters?
- [ ] Distribute treasure
- [ ] Update quest progress
- [ ] Prepare new locations
- [ ] Stat new NPCs

### Player Homework
- 
- 

---

## 📝 DM Notes

### What Worked Well
- 

### Areas for Improvement
- 

### Hidden Information
> [!warning]- DM ONLY
> - 
> - 

### Future Hooks
- 

### Behind the Scenes
- Random encounters rolled but not used:
- NPC motivations not revealed:
- Faction movements:

---

## 🔗 Links & References

### Related Sessions
- Previous: [[Session <% tp.file.title.match(/\d+/)[0] - 1 %>]]
- Next: [[Session <% tp.file.title.match(/\d+/)[0] + 1 %>]]

### Campaign Timeline
```dataview
TABLE date_played as "Date", date_ingame_start as "In-Game Date", summary as "Summary"
FROM #session
WHERE campaign = this.campaign
SORT session_number DESC
LIMIT 5
```

### Resource Links
- [[00_Dashboard/DM_Dashboard|DM Dashboard]]
- [[02_Worldbuilding/Atlas/World Map|World Map]]
- [[03_Rules_Reference/Quick_Reference/DnD5e-DM Screen-2014|Quick Rules]]

---

## 📸 Session Gallery

![[session_<% tp.file.title.match(/\d+/)[0] %>_photo_1.jpg]]
*Caption*

![[session_<% tp.file.title.match(/\d+/)[0] %>_battlemap.png]]
*Battle map from encounter*

---

## Summary for Campaign Log

> [!tldr] Session <% tp.file.title.match(/\d+/)[0] %> Summary
> <One paragraph summary for campaign chronicle>

---

*Session notes taken by: <% tp.user.name %>*
*Using template version: 2.0*