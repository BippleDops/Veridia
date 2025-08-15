# MASTER_VAULT_DASHBOARD

---
title: MASTER VAULT DASHBOARD
type: Dashboard
tags:
- priority/critical
- type/dashboard
- research
- world/both
- status/active
- active
created: '2025-08-13'
modified: '2025-08-14'
status: active
updated: '2025-08-13T12:44:30.000000'
world: Both
cssclass: dashboard
---

# 🏛️ MASTER VAULT DASHBOARD
*The Central Command Center for the Cordelia TTRPG Vault*


## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement


## 📊 Vault Status Overview

```dataview
TABLE WITHOUT ID
    ("📈 **Overall Progress**: " + round((100 - (length(split(choice(contains(string(this.file.tasks), "❌"), "❌", "✅"), "❌")) / length(this.file.tasks)) * 100), 1) + "%") as "Progress",
    ("📁 **Total Files**: " + length(file.lists.text)) as "Files",
    ("🔗 **Total Links**: " + length(file.outlinks)) as "Links",
    ("📋 **Active Tasks**: " + length(filter(this.file.tasks, (t) => !t.completed))) as "Tasks"
FROM ""
WHERE file.name = this.file.name
```

### 🌊 Aquabyssos (Underwater Realm)
    file.link as "Content",
    status as "Status",
    length(file.outlinks) as "Links"
FROM #aquabyssos 
WHERE status != "archived"
SORT file.mtime DESC
LIMIT 5

### ☁️ Aethermoor (Sky Realm)  
    status as "Status", 
FROM #aethermoor

### 🌀 Convergence Zones
    world as "Realm",
    status as "Status"
FROM #both-worlds OR #convergence
WHERE status = "active"

### 📚 Content by Type
    ("**" + key + "**") as "Content Type",
    length(rows) as "Count",
    ("[[" + join(map(slice(rows, 0, 3), (row) => row.file.name), "]], [[") + "]]") as "Recent Examples"
WHERE type
GROUP BY type
SORT length(rows) DESC

### 📈 Content by Status
    ("**" + key + "**") as "Status",
    length(rows) as "Files",
    round((length(rows) / (SELECT length(file.lists) FROM "")) * 100, 1) + "%" as "Percentage"
WHERE status
GROUP BY status

### 🎭 Major NPCs
    file.link as "Character",
    join(factions, ", ") as "Affiliations",
FROM "02_Worldbuilding/Groups" OR "02_Worldbuilding/Lore"
WHERE type = "Character" AND contains(tags, "importance/major")

### 🏛️ Key Factions
    file.link as "Faction",
    world as "Realm", 
    faction_type as "Type",
    influence_level as "Power"
FROM "02_Worldbuilding/Groups"
WHERE type = "Faction"
SORT influence_level DESC
LIMIT 10

### 🗺️ Important Locations
```dataview  
    file.link as "Location",
    threat_level as "Danger",
    population as "Size"
FROM "02_Worldbuilding" 
WHERE type = "Location" AND contains(tags, "importance/major")
SORT threat_level DESC

### 🔗 Most Connected Content
    length(file.inlinks) as "Incoming",
    length(file.outlinks) as "Outgoing", 
    (length(file.inlinks) + length(file.outlinks)) as "Total Connections"
WHERE (length(file.inlinks) + length(file.outlinks)) > 5
SORT (length(file.inlinks) + length(file.outlinks)) DESC
LIMIT 15

### 🔍 Orphaned Content (Needs Linking)
    file.link as "Orphaned File",
    type as "Type",
WHERE length(file.inlinks) = 0 AND status != "archived"
SORT file.mtime DESC  

### 🚫 Broken Links Detection
    file.link as "File with Issues",
    ("⚠️ Review Required") as "Action"
WHERE contains(lower(file.content), "[[") AND status != "archived"

### 🆕 Recently Updated
    file.link as "Updated Content",
    file.mtime as "Last Modified"
WHERE file.mtime >= date(today) - dur(7 days)

### 📋 Work in Progress
    file.link as "Draft Content",
    type as "Type", 
    file.mtime as "Last Worked"
WHERE status = "draft" OR status = "stub"

### 📖 Active Sessions
    file.link as "Session",
    session_number as "#",
    file.mtime as "Date"
FROM "01_Adventures" OR "1-Session Journals"
WHERE type = "Session"
SORT session_number DESC
LIMIT 8

### 🗂️ Available Quests
    file.link as "Quest",
    suggested_level as "Level",
FROM "02_Worldbuilding/Quests" OR ""
WHERE type = "Quest" AND status = "active"
SORT suggested_level ASC

### ⚔️ Encounters & Mechanics
    file.link as "Encounter/Mechanic",
    file.size as "Complexity"
FROM "03_Mechanics"

### 🚨 Issues Requiring Attention
TASK
WHERE status != "complete"
FROM "reports"
SORT created DESC

#### Available Sourcebooks]]
- [ ] **Curse of Strahd** - Gothic horror campaign
- [ ] **Tomb of Annihilation** - Jungle exploration adventure  
- [ ] **Waterdeep: Dragon Heist** - Urban intrigue campaign
- [ ] **Waterdeep: Dungeon of the Mad Mage** - Mega-dungeon crawl
- [ ] **Ghosts of Saltmarsh** - Maritime adventures
- [ ] **Baldur's Gate: Descent into Avernus** - Planar adventure
- [ ] **Icewind Dale: Rime of the Frostmaiden** - Arctic horror
- [ ] **Candlekeep Mysteries** - Anthology adventures
- [ ] **The Wild Beyond the Witchlight** - Feywild adventure
- [ ] **Call of the Netherdeep** - Epic campaign (Critical Role)

*Use checkboxes above to select desired sourcebook integrations*

### Vault Management  
- Run [[scripts/link_assets.js|Link Analysis]]
- Execute [[data/content_validator.py|Content Validation]]
- Generate [[reports/phase1_progress_tracker.py|Progress Report]]
- Launch [[scripts/vault_website.py|Vault Website]]

---

*This dashboard provides comprehensive oversight of the entire Cordelia TTRPG vault. Use the dataview queries above to monitor content health, track progress, and identify areas needing attention. All major vault components are accessible through the quick navigation links.*

**Last Updated**: `$= dv.current().file.mtime`  
**Total Vault Size**: `$= dv.pages().length` files across `$= Math.round(dv.pages().file.size.sum() / 1024 / 1024, 2)` MB

## Related

*Links to related content will be added here.*

## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes


## Plot Hooks

- The authorities needs help investigating before dawn
- Strange accidents suggest a curse
- A prisoner has gone missing and chaos spreads
- Strange dreams suggest a portal

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]


## 12_Research Specific Content

Contextual improvement based on 12_Research
