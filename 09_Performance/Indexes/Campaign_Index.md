---
type: index
tags: [index, navigation, performance]
aliases: ["Campaign Index", "Quick Navigation"]
created: 2025-08-05
modified: 2025-08-05
cssclasses: [wide-page, index-page]
---

# 📚 Campaign Master Index

> [!navigation] Quick Navigation Hub
> Optimized index for rapid access to campaign content. Updated automatically via Dataview.

## 🎯 Quick Jump Navigation

### Core Sections
- [[#Active Quests|📜 Active Quests]]
- [[#Important NPCs|👥 Important NPCs]]
- [[#Key Locations|🗺️ Key Locations]]
- [[#Recent Sessions|📅 Recent Sessions]]
- [[#Player Resources|🎭 Player Resources]]
- [[#Rules Quick Reference|📖 Rules Reference]]

---

## 📜 Active Quests

```dataview
TABLE 
	quest_priority as "Priority",
	quest_progress as "Progress",
	current_objective as "Current Objective",
	related_npcs as "Key NPCs"
FROM #quest
WHERE quest_status = "active"
SORT quest_priority DESC, quest_progress DESC
```

### Quest Quick Links
- 🔴 **High Priority**: [[The Vanishing Merchant Vessels]]
- 🟡 **Medium Priority**: [[The Arcane Disturbances]]
- 🟢 **Low Priority**: [[Shadows in High Places]]

---

## 👥 Important NPCs

### By Location

#### Shadowhaven
```dataview
LIST
FROM #npc
WHERE contains(location, "Shadowhaven")
SORT importance DESC
LIMIT 10
```

#### Port Celeste
```dataview
LIST
FROM #npc
WHERE contains(location, "Port Celeste")
SORT importance DESC
LIMIT 10
```

### By Faction
<details>
<summary><strong>Merchants Guild</strong></summary>

```dataview
LIST
FROM #npc
WHERE contains(faction, "Merchants Guild")
```

</details>

<details>
<summary><strong>The Crimson Fleet</strong></summary>

```dataview
LIST
FROM #npc
WHERE contains(faction, "Crimson Fleet")
```

</details>

### Quick NPC Finder
- **A-E**: [[Admiral Cassius Stormhaven]] | [[Archmage Celestine Starweaver]] | [[Brother Matthias]] | [[Captain Blackwater]] | [[Councillor Elara Brightwater]]
- **F-J**: [[Flip the Famous]] | [[Frank the Tank]] | [[Gruff "Stone" Ironbelly]] | [[Harbormaster Willem Tidecaller]] | [[High Priestess Seraphina Lightbringer]]
- **K-O**: [[Lady Seraphina Goldleaf]] | [[Lyra Swiftwind]] | [[Marina Saltwhisper]] | [[Old Salt Pete]] | [[Oracle Moonwhisper]]
- **P-T**: [[Pirate King Razor Blackheart]] | [[Raven "Nighteyes" Thorne]] | [[Silken Sarai]] | [[The Benefactor]] | [[The Shadowbroker]]
- **U-Z**: [[Vex Nightwhisper]] | [[Whisper "Coin" Mordaine]] | [[Whisper Jack]]

---

## 🗺️ Key Locations

### Major Settlements
```dataview
TABLE 
	size as "Size",
	population as "Population",
	government as "Government",
	file.mtime as "Last Updated"
FROM #settlement OR #city
SORT population DESC
```

### Quick Location Access

#### Cities & Ports
- 🏛️ [[Shadowhaven]] - Major trade hub
- 🏛️ [[Port Celeste]] - Eastern rival city
- 🏛️ [[Port Verran]] - Under pirate threat
- 🏛️ [[Port Sorrow]] - Black market haven
- 🏛️ [[Ironhold Fortress]] - Military stronghold

#### Islands & Regions
- 🏝️ [[The Cerulean Archipelago]] - World overview
- 🏝️ [[Island of Skulls]] - Dangerous waters
- 🏝️ [[Merchant's Rest Island]] - Safe harbor
- 🏝️ [[Whisper Rock Lighthouse]] - Strategic point

#### Dungeons & Adventures Sites
- ⚔️ [[The Sunken City of Aeridor]] - Underwater ruins
- ⚔️ [[The Crystal Caves]] - Magical site
- ⚔️ [[The Graveyard of Ships]] - Naval hazard
- ⚔️ [[The Serpent's Spire]] - Pirate stronghold

---

## 📅 Recent Sessions

### Last 5 Sessions
```dataview
TABLE 
	date_played as "Date",
	duration_hours as "Hours",
	xp_awarded as "XP",
	file.link as "Session"
FROM #session
SORT session_number DESC
LIMIT 5
```

### Session Quick Stats
- **Total Sessions**: `$= dv.pages("#session").length`
- **Total Play Time**: `$= dv.pages("#session").map(p => p.duration_hours).reduce((a, b) => a + b, 0)` hours
- **Total XP Awarded**: `$= dv.pages("#session").map(p => p.xp_awarded).reduce((a, b) => a + b, 0)`

---

## 🎭 Player Resources

### Character Sheets
```dataview
LIST
FROM "01_Campaigns/Campaign_Name/Player_Characters"
SORT file.name ASC
```

### Quick References
- 📖 [[DnD5e-DM Screen-2014|Rules Quick Reference]]
- 🎲 [[Template-Loot-Table|Loot Tables]]
- ⚔️ [[Template-Combat-Encounter|Combat Tracker]]
- 🗺️ [[World Map|Campaign Map]]

### Handouts Available
```dataview
LIST
FROM "07_Player_Resources/Handouts"
WHERE file.mtime > date(today) - dur(30 days)
SORT file.mtime DESC
```

---

## 📖 Rules Quick Reference

### Combat
- [[Combat Actions]]
- [[Conditions]]
- [[Initiative Tracker]]

### Magic
- [[Spell Lists]]
- [[Magic Items]]
- [[Spell Components]]

### Exploration
- [[Travel Rules]]
- [[Random Encounters|Random Encounter Tables]]
- [[Environmental Hazards]]

### Social
- [[NPC Reactions]]
- [[Faction Standing]]
- [[Reputation System]]

---

## 🔍 Search Shortcuts

### By Type
- `tag:#quest` - All quests
- `tag:#npc` - All NPCs  
- `tag:#location` - All locations
- `tag:#session` - All sessions
- `tag:#combat` - Combat encounters
- `tag:#loot` - Treasure tables

### By Status
- `quest_status:active` - Active quests
- `npc_status:alive` - Living NPCs
- `location_status:discovered` - Known locations

### By Time
- `created:2025` - Created this year
- `modified:-7d` - Modified in last week
- `session_date:2025-01` - January sessions

---

## 📊 Campaign Statistics

### Content Overview
```dataview
TABLE WITHOUT ID
	"Type" as "Content Type",
	length(rows) as "Count"
FROM #quest OR #npc OR #location OR #session OR #faction
GROUP BY type
```

### Activity Heatmap
```dataview
TABLE WITHOUT ID
	dateformat(date(file.mtime), "yyyy-MM-dd") as "Date",
	length(rows) as "Files Modified"
FROM ""
WHERE file.mtime > date(today) - dur(30 days)
GROUP BY dateformat(date(file.mtime), "yyyy-MM-dd")
SORT date DESC
LIMIT 10
```

---

## 🚀 Quick Actions

### Common Tasks
- [[Template-Session-Enhanced|📝 Create New Session]]
- [[Template-Character|👤 Create New NPC]]
- [[Template-Location|📍 Create New Location]]
- [[Template-Quest|📜 Create New Quest]]
- [[Template-Combat-Encounter|⚔️ Create Combat Encounter]]

### Maintenance
- [[Vault Maintenance Checklist]]
- [[Archive Old Content]]
- [[Update Indexes]]
- [[Backup Procedures]]

---

## 🔧 Performance Notes

> [!info] Index Optimization
> - This index uses Dataview queries with limits to prevent performance issues
> - Large tables are collapsed by default
> - Consider archiving content older than 6 months
> - Run vault optimization monthly

### Vault Health Check
- **Total Files**: `$= dv.pages().length`
- **Total Markdown Files**: `$= dv.pages().where(p => p.file.ext == "md").length`
- **Files Over 100KB**: `$= dv.pages().where(p => p.file.size > 100000).length`
- **Orphaned Files**: `$= dv.pages().where(p => p.file.inlinks.length == 0 && p.file.outlinks.length == 0).length`

---

*Index last updated: 2025-08-05*
*Auto-refresh: Every vault reload*