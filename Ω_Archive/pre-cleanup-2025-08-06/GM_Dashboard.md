---
cssclass: dashboard-main
tags: [dashboard, gm-tools]
created: 2025-01-08
---

# 🎮 Game Master Dashboard

> [!multi-column]
>
>> [!info]+ ## 📊 Campaign Status
>> ```dataview
>> TABLE WITHOUT ID
>>   file.link AS "Campaign",
>>   status AS "Status",
>>   player_count AS "Players",
>>   current_session AS "Session #"
>> FROM "01_Campaigns"
>> WHERE type = "campaign"
>> SORT status DESC, file.name ASC
>> ```
>
>> [!tip]+ ## 🎯 Active Quests
>> ```dataview
>> TABLE WITHOUT ID
>>   file.link AS "Quest",
>>   quest_giver AS "Giver",
>>   priority AS "Priority",
>>   reward AS "Reward"
>> FROM #quest
>> WHERE status = "active"
>> SORT priority DESC
>> LIMIT 5
>> ```

## 🗓️ Session Management

### Next Session Prep
```dataview
TABLE WITHOUT ID
  file.link AS "Session",
  date AS "Date",
  status AS "Status",
  location AS "Location"
FROM "01_Campaigns"
WHERE type = "session" AND status = "planned"
SORT date ASC
LIMIT 3
```

### Recent Sessions
```dataview
TABLE WITHOUT ID
  file.link AS "Session",
  date AS "Date",
  key_events AS "Key Events",
  xp_awarded AS "XP"
FROM "01_Campaigns"
WHERE type = "session" AND status = "completed"
SORT date DESC
LIMIT 5
```

---

## 👥 Character & NPC Quick Access

> [!multi-column]
>
>> [!example]+ ### 🦸 Player Characters
>> ```dataview
>> TABLE WITHOUT ID
>>   file.link AS "Character",
>>   race AS "Race",
>>   class AS "Class",
>>   level AS "Level",
>>   hp AS "HP"
>> FROM #player-character
>> WHERE status = "active"
>> SORT level DESC
>> ```
>
>> [!warning]+ ### 👤 Important NPCs
>> ```dataview
>> TABLE WITHOUT ID
>>   file.link AS "NPC",
>>   race AS "Race",
>>   faction AS "Faction",
>>   location_current AS "Location"
>> FROM #npc
>> WHERE importance = "major" OR importance = "recurring"
>> SORT importance DESC, file.name ASC
>> LIMIT 10
>> ```

---

## 🗺️ World & Locations

### Active Locations
```dataview
TABLE WITHOUT ID
  file.link AS "Location",
  type AS "Type",
  region AS "Region",
  population AS "Population",
  danger_level AS "Danger"
FROM "02_Worldbuilding"
WHERE type = "location" AND visited = true
SORT last_visited DESC
LIMIT 10
```

### Unexplored Hooks
```dataview
LIST
FROM "02_Worldbuilding"
WHERE contains(tags, "plot-hook") AND status = "unexplored"
SORT file.ctime DESC
LIMIT 5
```

---

## ⚔️ Combat & Encounters

> [!multi-column]
>
>> [!danger]+ ### 🎲 Recent Encounters
>> ```dataview
>> TABLE WITHOUT ID
>>   file.link AS "Encounter",
>>   difficulty AS "CR",
>>   outcome AS "Result"
>> FROM #encounter
>> WHERE date >= date(today) - dur(7 days)
>> SORT date DESC
>> ```
>
>> [!abstract]+ ### 💰 Loot Distribution
>> ```dataview
>> TABLE WITHOUT ID
>>   item AS "Item",
>>   rarity AS "Rarity",
>>   holder AS "Owner",
>>   date_acquired AS "Acquired"
>> FROM #loot
>> WHERE distributed = true
>> SORT date_acquired DESC
>> LIMIT 10
>> ```

---

## 📝 Quick Actions

### Session Tools
- [[Template-Session-Prep|📋 Prep New Session]]
- [[Template-Combat-Encounter|⚔️ Create Encounter]]
- [[Initiative Tracker|🎯 Initiative Tracker]]
- [[Dice Roller|🎲 Roll Dice]]

### World Building
- [[Template-Character|👤 New NPC]]
- [[Template-Location|🏰 New Location]]
- [[Template-Quest|📜 New Quest]]
- [[Template-Faction-Relationship|🤝 Faction Relations]]

### Reference
- [[03_Rules_Reference/Rules Index|📖 Rules Reference]]
- [[04_Resources/Magic Items|✨ Magic Items]]
- [[04_Resources/Monster Manual|👹 Monster Manual]]
- [[04_Resources/Spell List|📜 Spell List]]

---

## 📊 Campaign Statistics

```dataviewjs
// Calculate campaign statistics
const sessions = dv.pages('"01_Campaigns"').where(p => p.type == "session" && p.status == "completed");
const totalSessions = sessions.length;
const totalXP = sessions.array().reduce((sum, s) => sum + (s.xp_awarded || 0), 0);
const totalPlayTime = sessions.array().reduce((sum, s) => sum + (s.duration_hours || 0), 0);

const players = dv.pages('#player-character').where(p => p.status == "active");
const avgLevel = Math.round(players.array().reduce((sum, p) => sum + (p.level || 1), 0) / players.length);

dv.paragraph(`**Total Sessions:** ${totalSessions} | **Total XP Awarded:** ${totalXP} | **Total Play Time:** ${totalPlayTime} hours | **Average Party Level:** ${avgLevel}`);
```

---

## 🔄 Recent Changes

```dataview
TABLE WITHOUT ID
  file.link AS "File",
  file.mtime AS "Modified"
FROM ""
WHERE file.mtime >= date(today) - dur(3 days)
SORT file.mtime DESC
LIMIT 10
```

---

*Dashboard last updated: `=dateformat(date(now), "yyyy-MM-dd HH:mm")`*