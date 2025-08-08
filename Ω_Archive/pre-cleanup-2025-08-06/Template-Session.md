---
type: session
tags: [session]
aliases: []
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
session_number: <% tp.file.title.split(" ")[1] %>
date_played: <% tp.date.now("YYYY-MM-DD") %>
date_ingame: ""
location_primary: ""
characters_present: []
npcs_encountered: []
combat_occurred: false
secrets_revealed: []
loot_gained: []
---

~~~ai-context
When generating content for this session, consider:
- Setting: {{campaign_setting}}
- Tone: {{campaign_tone}}
- Connected elements: [[<% tp.file.title %>]]
~~~

# Session <% tp.file.title.split(" ")[1] %> - <% tp.file.title.split(" - ")[1] %>

> [!abstract]
> **Date Played:** <% tp.date.now("YYYY-MM-DD") %>
> **In-Game Date:**
> **Primary Location:**
> **PCs Present:**

---

## 🔮 Previously...

~~~ai-context
When generating the recap, consider the following:
- Setting: {{campaign_setting}}
- Tone: {{campaign_tone}}
- Previous Session Cliffhanger: {{last_session_cliffhanger}}
~~~

> [!NOTE] AI-Generated Recap
> *Click button to generate recap from previous session notes.*
> `BUTTON[generateRecap]`

---

## 🎬 Scenes

### Scene 1:
**Location:**
**NPCs:**
**Summary:**

~~~ai-context
When generating a scene description, consider:
- Location: {{location}}
- NPCs Present: {{npcs}}
- Mood: {{mood}}
~~~

> [!NOTE] AI-Generated Scene
> *Click button to generate a descriptive scene.*
> `BUTTON[generateScene]`

---

## 🎭 NPCs Encountered

*A list of NPCs encountered in this session.*

---

## 🗺️ Locations Visited

*A list of locations visited in this session.*

---

## 📜 Quests Advanced

*A list of quests that progressed in this session.*

---

## 💎 Loot & Rewards

*A list of all loot, treasure, and experience gained.*

---

## 📝 DM Notes

*Private notes, observations, and ideas for the next session.*

---

## 🎬 Cliffhanger

*What is the hook for the next session?*
