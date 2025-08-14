---
created: '2025-08-13'
updated: '2025-08-13T12:44:30.000000'
status: active
world: Both
type: Dashboard
tags:
- status/active
- type/dashboard
- world/both
- priority/critical
cssclass: dashboard
---

# 🏛️ MASTER VAULT DASHBOARD
*The Central Command Center for the Cordelia TTRPG Vault*

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

## 🌊 World Realms Status

### 🌊 Aquabyssos (Underwater Realm)
```dataview
TABLE WITHOUT ID
    file.link as "Content",
    status as "Status",
    length(file.outlinks) as "Links"
FROM #aquabyssos 
WHERE status != "archived"
SORT file.mtime DESC
LIMIT 5
```

### ☁️ Aethermoor (Sky Realm)  
```dataview
TABLE WITHOUT ID
    file.link as "Content",
    status as "Status", 
    length(file.outlinks) as "Links"
FROM #aethermoor
WHERE status != "archived"
SORT file.mtime DESC
LIMIT 5
```

### 🌀 Convergence Zones
```dataview
TABLE WITHOUT ID
    file.link as "Content",
    world as "Realm",
    status as "Status"
FROM #both-worlds OR #convergence
WHERE status = "active"
SORT file.mtime DESC
LIMIT 5
```

## 📑 Content Distribution

### 📚 Content by Type
```dataview
TABLE WITHOUT ID
    ("**" + key + "**") as "Content Type",
    length(rows) as "Count",
    ("[[" + join(map(slice(rows, 0, 3), (row) => row.file.name), "]], [[") + "]]") as "Recent Examples"
FROM ""
WHERE type
GROUP BY type
SORT length(rows) DESC
```

### 📈 Content by Status
```dataview
TABLE WITHOUT ID
    ("**" + key + "**") as "Status",
    length(rows) as "Files",
    round((length(rows) / (SELECT length(file.lists) FROM "")) * 100, 1) + "%" as "Percentage"
FROM ""
WHERE status
GROUP BY status
SORT length(rows) DESC
```

## 🎯 Critical Campaign Elements

### 🎭 Major NPCs
```dataview
TABLE WITHOUT ID
    file.link as "Character",
    world as "Realm",
    join(factions, ", ") as "Affiliations",
    status as "Status"
FROM "02_Worldbuilding/Groups" OR "02_Worldbuilding/Lore"
WHERE type = "Character" AND contains(tags, "importance/major")
SORT file.mtime DESC
```

### 🏛️ Key Factions
```dataview
TABLE WITHOUT ID
    file.link as "Faction",
    world as "Realm", 
    faction_type as "Type",
    influence_level as "Power"
FROM "02_Worldbuilding/Groups"
WHERE type = "Faction"
SORT influence_level DESC
LIMIT 10
```

### 🗺️ Important Locations
```dataview  
TABLE WITHOUT ID
    file.link as "Location",
    world as "Realm",
    threat_level as "Danger",
    population as "Size"
FROM "02_Worldbuilding" 
WHERE type = "Location" AND contains(tags, "importance/major")
SORT threat_level DESC
```

## 🕸️ Link Network Analysis

### 🔗 Most Connected Content
```dataview
TABLE WITHOUT ID
    file.link as "Content",
    length(file.inlinks) as "Incoming",
    length(file.outlinks) as "Outgoing", 
    (length(file.inlinks) + length(file.outlinks)) as "Total Connections"
FROM ""
WHERE (length(file.inlinks) + length(file.outlinks)) > 5
SORT (length(file.inlinks) + length(file.outlinks)) DESC
LIMIT 15
```

### 🔍 Orphaned Content (Needs Linking)
```dataview
TABLE WITHOUT ID
    file.link as "Orphaned File",
    type as "Type",
    world as "Realm",
    status as "Status"
FROM ""
WHERE length(file.inlinks) = 0 AND status != "archived"
SORT file.mtime DESC  
LIMIT 10
```

### 🚫 Broken Links Detection
```dataview
TABLE WITHOUT ID
    file.link as "File with Issues",
    type as "Type",
    ("⚠️ Review Required") as "Action"
FROM ""
WHERE contains(lower(file.content), "[[") AND status != "archived"
LIMIT 5
```

## 📝 Recent Activity

### 🆕 Recently Updated
```dataview
TABLE WITHOUT ID
    file.link as "Updated Content",
    type as "Type",
    world as "Realm",
    file.mtime as "Last Modified"
FROM ""
WHERE file.mtime >= date(today) - dur(7 days)
SORT file.mtime DESC
LIMIT 10
```

### 📋 Work in Progress
```dataview
TABLE WITHOUT ID
    file.link as "Draft Content",
    type as "Type", 
    world as "Realm",
    file.mtime as "Last Worked"
FROM ""
WHERE status = "draft" OR status = "stub"
SORT file.mtime DESC
LIMIT 10
```

## 🎲 Campaign Management

### 📖 Active Sessions
```dataview
TABLE WITHOUT ID
    file.link as "Session",
    world as "Realm",
    session_number as "#",
    file.mtime as "Date"
FROM "01_Adventures" OR "1-Session Journals"
WHERE type = "Session"
SORT session_number DESC
LIMIT 8
```

### 🗂️ Available Quests
```dataview
TABLE WITHOUT ID
    file.link as "Quest",
    world as "Realm",
    suggested_level as "Level",
    status as "Status"
FROM "02_Worldbuilding/Quests" OR ""
WHERE type = "Quest" AND status = "active"
SORT suggested_level ASC
```

### ⚔️ Encounters & Mechanics
```dataview
TABLE WITHOUT ID
    file.link as "Encounter/Mechanic",
    type as "Type",
    file.size as "Complexity"
FROM "03_Mechanics"
WHERE status = "active"
SORT file.mtime DESC
LIMIT 8
```

## 🔧 Vault Health Metrics

### 📊 Quality Indicators
- **Content Completeness**: `$= dv.pages().where(p => p.status == "complete").length` / `$= dv.pages().length` files complete
- **Link Integrity**: `$= Math.round((dv.pages().where(p => p.file.inlinks.length > 0).length / dv.pages().length) * 100, 1)`% files are linked
- **Recent Activity**: `$= dv.pages().where(p => p.file.mtime >= dv.date("today") - dv.duration("7 days")).length` files updated this week
- **Template Usage**: `$= dv.pages().where(p => p.file.frontmatter && Object.keys(p.file.frontmatter).length >= 5).length` files have complete frontmatter

### 🚨 Issues Requiring Attention
```dataview
TASK
WHERE status != "complete"
FROM "reports"
SORT created DESC
LIMIT 5
```

## 🎯 Phase 1 Implementation Progress

### ✅ Completed Tasks
- [x] Comprehensive Pydantic models created
- [x] Vault analysis and recovery systems implemented  
- [x] Obsidian 1.9.7 configuration optimized
- [x] Data and reports directories populated
- [x] Content validation framework established
- [x] Missing directories created
- [x] Progress tracking system implemented

### 🔄 In Progress Tasks
- [ ] Complete content recovery (50/4701 files recovered)
- [ ] Fix broken links (250/25839 links fixed)
- [ ] Add missing frontmatter (189/17311 files updated)
- [ ] Expand stub content (5/59 stubs completed)

### ⏳ Pending Tasks
- [ ] D&D sourcebook integration
- [ ] Website enhancement and sample content
- [ ] Advanced link analysis and repair
- [ ] Template system completion
- [ ] Community features activation

## 🌐 Website Integration Status

### 📱 Vault Website Features
- **Local Server**: `scripts/vault_website.py` - Web interface for vault browsing
- **Search Integration**: Full-text search across all vault content
- **D&D Content**: Integration with official sourcebooks and homebrew
- **Mobile Friendly**: Responsive design for all devices
- **Export Options**: PDF, EPUB, and print-friendly formats

### 🎲 D&D Sourcebook Integration

#### Available Sourcebooks
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

## 🔍 Quick Navigation

### 📂 Core Directories
- [[01_Adventures]] - Campaign content and sessions
- [[02_Worldbuilding]] - Core world lore and content
- [[03_Mechanics]] - Game rules and systems
- [[04_Resources]] - Assets and reference materials
- [[05_Templates]] - Content generation templates
- [[06_GM_Resources]] - Game Master tools
- [[07_Player_Resources]] - Player-facing content
- [[08_Archive]] - Archived content
- [[09_Performance]] - Databases and performance tools

### 🎯 Campaign Essentials
- [[Shadow Conspiracy]] - Primary antagonist organization
- [[Crystal Plague]] - Major world threat and plot device
- [[Deep Mother]] - Cosmic horror entity
- [[Seven Shards Campaign]] - Epic artifact quest
- [[Queen Seraphina Lumengarde]] - Corrupted monarch
- [[The Convergence Point]] - Reality merger location

### 🔧 Management Tools
- [[scripts]] - Automation and maintenance tools
- [[data]] - Structured data and analysis
- [[reports]] - Vault metrics and progress tracking
- [[backups]] - Content recovery and backups

---

## 📋 Daily Checklist
- [ ] Review recent updates in activity section
- [ ] Check for new broken links or orphaned content
- [ ] Update campaign session logs
- [ ] Run automated link integrity check
- [ ] Review and approve any new content additions
- [ ] Update progress on Phase 1 implementation tasks

## 🎮 Quick Actions

### Content Creation
- Create new [[Template-Character|Character]]
- Create new [[Template-Location|Location]]  
- Create new [[Template-Quest|Quest]]
- Create new [[05_Templates/World Builder Templates/Template-Faction|Faction]]

### Vault Management  
- Run [[scripts/link_assets.js|Link Analysis]]
- Execute [[data/content_validator.py|Content Validation]]
- Generate [[reports/phase1_progress_tracker.py|Progress Report]]
- Launch [[scripts/vault_website.py|Vault Website]]

---

*This dashboard provides comprehensive oversight of the entire Cordelia TTRPG vault. Use the dataview queries above to monitor content health, track progress, and identify areas needing attention. All major vault components are accessible through the quick navigation links.*

**Last Updated**: `$= dv.current().file.mtime`  
**Total Vault Size**: `$= dv.pages().length` files across `$= Math.round(dv.pages().file.size.sum() / 1024 / 1024, 2)` MB