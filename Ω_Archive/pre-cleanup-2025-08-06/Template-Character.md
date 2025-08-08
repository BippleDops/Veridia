---
type: character
tags: [npc]
aliases: []
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
name: <% tp.file.title %>
player: ""
race: ""
class: ""
level: 1
alignment: ""
status: "active"
location_current: ""
location_home: ""
faction: ""
relationships:
  allies: []
  enemies: []
  family: []
ability_scores:
  str: 10
  dex: 10
  con: 10
  int: 10
  wis: 10
  cha: 10
combat:
  ac: 10
  hp: 10
  speed: "30ft"
---

~~~ai-context
When generating content for this character, consider:
- Setting: {{campaign_setting}}
- Tone: {{campaign_tone}}
- Connected elements: [[<% tp.file.title %>]]
~~~

# <% tp.file.title %>

> [!infobox]
> | | |
> | --- | --- |
> | **Race** | |
> | **Class** | |
> | **Alignment** | |
> | **Status** | |
> | **Location** | |
> | **Faction** | |

---

## 🎭 Appearance & Personality

~~~ai-context
When generating a personality, consider:
- Race: {{race}}
- Class: {{class}}
- Alignment: {{alignment}}
- Faction: {{faction}}
~~~

> [!NOTE] AI-Generated Personality
> *Click button to generate a personality description.*
> `BUTTON[generatePersonality]`

---

## 🕸️ Relationships

| Name | Relationship |
| --- | --- |
| | |

---

## 📜 Backstory

~~~ai-context
When generating a backstory, consider:
- Race: {{race}}
- Class: {{class}}
- Faction: {{faction}}
- Key Life Event: {{key_event}}
~~~

> [!NOTE] AI-Generated Backstory
> *Click button to generate a backstory.*
> `BUTTON[generateBackstory]`

---

## 📝 DM Notes

*Private notes, plot hooks, and secrets.*
