---
title: Content Coverage Dashboard
type: index
status: complete
tags:
- both
- complete
- coverage
- index
- performance
- statistics
created: '2025-08-11'
updated: '2025-08-13T01:18:31.110651+00:00'
cssclasses:
- wide-page
- index-page
world: Both
---


# 📊 Content Coverage Dashboard
*Tracking Vault Completion and Content Depth*

## Overall Vault Statistics

```dataview
TABLE WITHOUT ID
    "**Total Files**" as Metric,
    length(pages()) as Count
FROM ""
LIMIT 1
```

## 📈 Completion by Category

### Worldbuilding Coverage

```dataview
TABLE 
    Category,
    Total,
    Complete,
    Stubs,
    round((Complete / Total) * 100, 1) + "%" as "Completion %"
FROM (
    {Category: "People", Total: 181, Complete: 102, Stubs: 79},
    {Category: "Places", Total: 361, Complete: 122, Stubs: 239},
    {Category: "Groups", Total: 74, Complete: 41, Stubs: 33},
    {Category: "Quests", Total: 59, Complete: 51, Stubs: 8},
    {Category: "Items", Total: 7, Complete: 7, Stubs: 0},
    {Category: "Lore", Total: 262, Complete: 39, Stubs: 223},
    {Category: "Hazards", Total: 1, Complete: 1, Stubs: 0}
)
SORT "Completion %" DESC
```

### Content Status Distribution

```dataview
TABLE WITHOUT ID
    status as "Status",
    length(rows) as "Count"
FROM ""
WHERE contains(file.path, "Worldbuilding")
GROUP BY status
SORT length(rows) DESC
```

## 🎯 Priority Stubs (Needs Expansion)

### High-Priority People (Referenced but Stub)
```dataview
TABLE file.link as "Character", length(file.inlinks) as "References", file.size as "Size (bytes)"
FROM "02_Worldbuilding/People"
WHERE file.size < 500
AND length(file.inlinks) > 2
SORT length(file.inlinks) DESC
LIMIT 10
```

### High-Priority Places (Referenced but Stub)
```dataview
TABLE file.link as "Location", length(file.inlinks) as "References", file.size as "Size (bytes)"
FROM "02_Worldbuilding/Places"
WHERE file.size < 500
AND length(file.inlinks) > 2
SORT length(file.inlinks) DESC
LIMIT 10
```

## 📝 Content Depth Analysis

### Average File Sizes by Category
```dataview
TABLE WITHOUT ID
    split(file.path, "/")[1] as "Category",
    round(sum(rows.file.size) / length(rows), 0) as "Avg Size (bytes)",
    min(rows.file.size) as "Smallest",
    max(rows.file.size) as "Largest"
FROM "02_Worldbuilding"
GROUP BY split(file.path, "/")[1]
SORT "Avg Size (bytes)" DESC
```

## 🔄 Recent Progress

### Files Updated This Week
```dataview
TABLE file.link as "File", file.mtime as "Modified", file.size as "Size", status
FROM ""
WHERE file.mtime > date(today) - dur(7 days)
AND contains(file.path, "Worldbuilding")
SORT file.mtime DESC
LIMIT 20
```

### Newly Created Content
```dataview
TABLE file.link as "New File", file.ctime as "Created", split(file.path, "/")[1] as "Category"
FROM ""
WHERE file.ctime > date(today) - dur(7 days)
AND !contains(file.path, "Templates")
AND !contains(file.path, "Archive")
SORT file.ctime DESC
LIMIT 15
```

## 🎮 Campaign Readiness

### Adventures & Sessions
```dataview
TABLE WITHOUT ID
    Type,
    Count,
    Status
FROM (
    {Type: "Adventures", Count: length(pages("#adventure")), Status: "✅ Ready"},
    {Type: "Sessions Written", Count: length(pages("#session")), Status: "✅ Active"},
    {Type: "GM Resources", Count: length(pages("#gm-resource")), Status: "✅ Available"},
    {Type: "Player Handouts", Count: length(pages("#handout")), Status: "🔄 Expanding"}
)
```

### Critical Systems Status
- ✅ **Sanity System**: Complete with mechanics
- 🔄 **Transformation Compendium**: In progress (target: 100+ options)
- 🔄 **Deep Mother Subsystem**: Scaffolding phase
- ✅ **Vehicle Systems**: Fully documented
- ✅ **Memory Magic**: Integrated throughout

## 📊 Tag Distribution

### Most Used Tags
```dataview
TABLE WITHOUT ID
    tag as "Tag",
    length(rows) as "Uses"
FROM ""
FLATTEN file.tags as tag
WHERE !contains(tag, "ttrpg-cli")
GROUP BY tag
SORT length(rows) DESC
LIMIT 15
```

## 🚀 Completion Targets

### Next Milestone Goals
- [ ] **Places**: Reduce stubs from 239 → 150 (expand 89 locations)
- [ ] **Lore**: Expand from 39 → 100 complete entries
- [ ] **People**: Complete remaining 79 character stubs
- [ ] **Groups**: Finish 33 organization stubs
- [ ] **Transformations**: Create 100+ transformation options
- [ ] **Deep Mother**: Full subsystem with 20+ minions

### Projected Completion
At current rate (40-60 files/session):
- **80% Complete**: ~8-10 more sessions
- **95% Complete**: ~12-15 more sessions
- **100% Complete**: ~15-20 more sessions

---

*Dashboard refreshes automatically with Dataview*
*Last structural update: {{date:YYYY-MM-DD}}*