# Navigation_Hub

---
title: Navigation Hub
type: index
tags:
- active
- navigation
- index
- dynamic
created: 2025-08-14
modified: '2025-08-14'
updated: 2025-08-14
cssclass: navigation-hub
---


# 🗺️ Vault Navigation Hub

> *This page auto-updates to show current vault contents using Dataview queries*

## 📊 Vault Overview

### Content by Category
<!-- Dataview query to show content organized by folder -->
```dataview
TABLE WITHOUT ID
  file.folder as "📁 Category",
  length(rows) as "📄 Files"
FROM ""
WHERE file.name != this.file.name
GROUP BY file.folder
SORT length(rows) DESC
```

## 🎯 Quick Access

### Recent Sessions
```dataview
TABLE WITHOUT ID
  file.link as Session,
  campaign as Campaign,
  date as Date
FROM "01_Adventures"
WHERE type = "session" OR contains(tags, "session")
SORT file.mtime DESC
LIMIT 5
```

### Active NPCs
```dataview
TABLE WITHOUT ID
  file.link as NPC,
  faction as Faction,
  location as Location
FROM "02_Worldbuilding/People"
WHERE type = "npc" OR contains(tags, "npc")
SORT file.mtime DESC
LIMIT 10
```

### Key Locations
```dataview
TABLE WITHOUT ID
  file.link as Location,
  world as Realm,
  type as Type
FROM "02_Worldbuilding/Places"
WHERE type = "location" OR contains(tags, "location")
SORT file.mtime DESC
LIMIT 10
```

## 🔥 Recently Modified

```dataview
TABLE WITHOUT ID
  file.link as Content,
  file.folder as Category,
  file.mtime as "Last Modified"
FROM ""
WHERE file.mtime >= date(today) - dur(7 days)
SORT file.mtime DESC
LIMIT 15
```

## 🏷️ Popular Tags

```dataview
LIST
FROM ""
FLATTEN tags as tag
GROUP BY tag
SORT length(rows) DESC
LIMIT 20
```

## 🔍 Smart Searches

### By Status
- `status:active` - [[Active Content]]
- `status:draft` - [[Draft Content]]
- `status:complete` - [[Completed Content]]

### By World
- `world:Aquabyssos` - [[Aquabyssos Content]]
- `world:Aethermoor` - [[Aethermoor Content]]

### By Type
- `type:npc` - [[All NPCs]]
- `type:location` - [[All Locations]]
- `type:quest` - [[All Quests]]
- `type:session` - [[All Sessions]]

---
*Navigation hub powered by Dataview - automatically updates with vault changes*


## Related

*Links to related content will be added here.*
