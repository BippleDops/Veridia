---
type: quest
status: active
priority: medium
tags:
  - quest
  - quest/{{questType}}
  - '{{questStatus}}'
aliases:
  - '{{questAlias}}'
cssclasses:
  - quest-note
quest_name: '{{questName}}'
quest_type: '{{questType}}'
quest_status: not-started
quest_priority: normal
quest_giver: null
quest_level: null
quest_deadline: null
quest_progress: 0
objectives:
  - name: ''
    status: incomplete
    description: ''
milestones: []
current_objective: null
reward_gold: null
reward_items: []
reward_xp: null
reward_other: ''
related_npcs: []
related_locations: []
related_organizations: []
related_quests: []
antagonist: null
hook: ''
description: ''
background: ''
resolution_conditions: []
failure_conditions: []
consequences:
  success: ''
  failure: ''
sessions_involved: []
date_received: null
date_completed: null
image_path: null
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
---

<%*
// Quest setup
const questName = await tp.system.prompt("Quest Name:");
if (!questName) return;
await tp.file.rename(questName);

// Quest type
const questTypes = [
  "main", "side", "fetch", "escort", "investigation",
  "combat", "social", "exploration", "personal"
];
const questType = await tp.system.suggester(questTypes, questTypes);

// Quest giver
const npcs = app.vault.getMarkdownFiles()
  .filter(f => f.path.includes("2-World/NPCs/"));
const questGiver = await tp.system.suggester(
  ["None", ...npcs.map(f => f.basename)],
  ["", ...npcs.map(f => f.path)]
);

// Priority
const priority = await tp.system.suggester(
  ["Low", "Normal", "High", "Urgent", "Critical"],
  ["low", "normal", "high", "urgent", "critical"]
);

// Update frontmatter
setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm.quest_name = questName;
    fm.quest_type = questType;
    fm.quest_giver = questGiver ? `[[${questGiver}]]` : "";
    fm.quest_priority = priority;
    fm.date_received = tp.date.now("YYYY-MM-DD");
  });
}, 100);
%>

> [!infobox]
> # `VIEW[{quest_name}]`
> ![[`VIEW[{image_path}|]`|cover]]
> ###### Quest Details
> | | |
> |---|---|
> | **Type** | `VIEW[{quest_type}]` |
> | **Status** | `INPUT[inlineSelect(option(not-started), option(active), option(completed), option(failed), option(abandoned)):quest_status]` |
> | **Priority** | `INPUT[inlineSelect(option(low), option(normal), option(high), option(urgent), option(critical)):quest_priority]` |
> | **Giver** | `VIEW[{quest_giver}]` |
> | **Level** | `INPUT[number:quest_level]` |
> | **Deadline** | `INPUT[date:quest_deadline]` |
> ###### Progress
> `INPUT[progressBar:quest_progress]`

## Quick Actions
`BUTTON[updateProgress]` Update Progress
`BUTTON[completeObjective]` Complete Objective
`BUTTON[addNote]` Add Session Note
`BUTTON[distributeRewards]` Distribute Rewards

## 🎯 Quest Overview

### Hook
`INPUT[textArea:hook]`

### Description
`INPUT[textArea:description]`

### Background
`INPUT[textArea:background]`

## 📋 Objectives

```dataviewjs
// Dynamic objective tracker
const objectives = dv.current().objectives || [];
if (objectives.length > 0) {
  dv.taskList(
    objectives.map(obj => {
      const status = obj.status === "complete" ? "x" : " ";
      return `[${status}] **${obj.name}** - ${obj.description}`;
    })
  );
} else {
  dv.paragraph("*No objectives defined yet.*");
}
```

### Current Objective
**→** `VIEW[{current_objective}]`

### Milestones
`INPUT[list:milestones]`

## 🎁 Rewards

| Type | Amount | Details |
|------|--------|---------|
| **Gold** | `INPUT[number:reward_gold]` gp | |
| **XP** | `INPUT[number:reward_xp]` | Per character |
| **Items** | `INPUT[list:reward_items]` | |
| **Other** | `INPUT[text:reward_other]` | |

## 🔗 Connections

### NPCs Involved
```dataviewjs
const relatedNPCs = dv.current().related_npcs || [];
if (relatedNPCs.length > 0) {
  dv.table(
    ["NPC", "Role", "Location", "Status"],
    relatedNPCs.map(npcLink => {
      const npc = dv.page(npcLink);
      return [
        npcLink,
        "", // Role in quest
        npc?.location || "",
        npc?.status || ""
      ];
    })
  );
}
```

### Locations
`INPUT[list:related_locations]`

### Organizations
`INPUT[list:related_organizations]`

### Related Quests
`INPUT[list:related_quests]`

### Primary Antagonist
`INPUT[link:antagonist]`

## 📊 Resolution Conditions

### Success Conditions
`INPUT[list:resolution_conditions]`

### Failure Conditions
`INPUT[list:failure_conditions]`

### Consequences
**Success:** `INPUT[textArea:consequences.success]`

**Failure:** `INPUT[textArea:consequences.failure]`

## 📅 Session History

```dataviewjs
// Track quest progress through sessions
const questName = dv.current().file.name;
const sessions = dv.pages('#session')
  .where(s => 
    (s.questsAdvanced && s.questsAdvanced.includes(questName)) ||
    (s.questsCompleted && s.questsCompleted.includes(questName)) ||
    (s.questsStarted && s.questsStarted.includes(questName))
  )
  .sort(s => s.date, 'desc');

if (sessions.length > 0) {
  dv.table(
    ["Session", "Date", "Progress", "Notes"],
    sessions.map(s => {
      let progress = "Advanced";
      if (s.questsStarted && s.questsStarted.includes(questName)) progress = "Started";
      if (s.questsCompleted && s.questsCompleted.includes(questName)) progress = "Completed";
      
      return [
        s.file.link,
        s.date,
        progress,
        ""
      ];
    })
  );
}
```

## 🎲 DM Notes
<!-- Hidden information, twists, contingencies -->

### Plot Twists
- 

### Contingencies
- What if the party refuses?
- What if they fail?
- What if they find an alternative solution?

### Scaling
- **Lower Level:** 
- **Higher Level:** 

## Development Log
<!-- Track changes and developments to the quest --> 