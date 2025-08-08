---
type: dashboard
tags: [dashboard, home]
aliases: [DM Dashboard]
---
# DM Dashboard

> Welcome back, Dungeon Master. Let's build a world.

---

## 🚀 Quick Actions
Use the buttons below to quickly create new notes for your campaign.

```meta-bind
<button class="mod-cta">
  <span class="lucide-plus-circle"></span> New Session
  <action>
    COMMAND 'templater:create-new-note-from-template' 'Ω_System/Templater/New Session'
  </action>
</button>

<button class="mod-cta">
  <span class="lucide-user-plus"></span> New NPC
  <action>
    COMMAND 'templater:create-new-note-from-template' 'Ω_System/Templater/New NPC'
  </action>
</button>

<button class="mod-cta">
  <span class="lucide-map"></span> New Location
  <action>
    COMMAND 'templater:create-new-note-from-template' 'Ω_System/Templater/New Location'
  </action>
</button>

<button class="mod-cta">
  <span class="lucide-scroll-text"></span> New Quest
  <action>
    COMMAND 'templater:create-new-note-from-template' 'Ω_System/Templater/New Quest'
  </action>
</button>
```

---

##  campaign Overview
*This section can be customized with Dataview queries to show active quests, recent sessions, or important NPCs.*

### Active Quests
```dataview
TABLE status, quest_giver
FROM "01_Campaigns"
WHERE type = "quest" AND status != "completed"
SORT session_date DESC
```

### Recent Sessions
```dataview
LIST
FROM "01_Campaigns"
WHERE type = "session"
SORT session_date DESC
LIMIT 10
```
