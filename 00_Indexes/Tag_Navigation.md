# Tag_Navigation

---
title: Tag Navigation
type: navigation
tags:
- navigation
- index
- active
- tags
- hierarchy
created: 2025-08-14
modified: '2025-08-14'
updated: 2025-08-14
cssclass: tag-hierarchy
---


# 🏷️ Tag Navigation System

## 📊 Tag Hierarchy

### World Tags
- `#world/aquabyssos` - Underwater realm content
- `#world/aethermoor` - Sky realm content
- `#world/both` - Cross-realm content
- `#world/material` - Material plane
- `#world/planar` - Other planes

### Content Type Tags
- `#type/npc` - Non-player characters
- `#type/location` - Places and locations
- `#type/item` - Items and equipment
- `#type/quest` - Quests and objectives
- `#type/session` - Game sessions
- `#type/lore` - World lore

### Status Tags
- `#status/active` - Currently in use
- `#status/draft` - Work in progress
- `#status/complete` - Finished content
- `#status/archived` - Old/unused content
- `#status/idea` - Future possibilities

### Gameplay Tags
- `#combat` - Combat encounters
- `#social` - Social interactions
- `#exploration` - Exploration content
- `#puzzle` - Puzzles and riddles
- `#stealth` - Stealth missions

## 🔍 Tag Search Queries

### Find by Single Tag
```dataview
TABLE WITHOUT ID
  file.link as Content,
  file.folder as Location
FROM #combat
LIMIT 10
```

### Find by Multiple Tags
```dataview
TABLE WITHOUT ID
  file.link as Content,
  tags as Tags
FROM #npc AND #aquabyssos
LIMIT 10
```

### Tag Combinations
```dataview
TABLE WITHOUT ID
  file.link as Content,
  status as Status
FROM (#quest OR #adventure) AND #active
```

## 📈 Tag Statistics

```dataview
TABLE WITHOUT ID
  tag as Tag,
  length(rows) as "Usage Count"
FROM ""
FLATTEN tags as tag
WHERE tag != null
GROUP BY tag
SORT length(rows) DESC
LIMIT 20
```

## 🎯 Smart Tag Groups

### Campaign Tags
```dataview
LIST
FROM #campaign OR #seven-shards OR #shadow-conspiracy
GROUP BY file.folder
```

### Faction Tags
```dataview
LIST
FROM #faction OR #guild OR #organization
GROUP BY tags
```

### Danger Level Tags
```dataview
TABLE WITHOUT ID
  file.link as Content,
  danger-level as "Danger"
FROM #dangerous OR #deadly OR #safe
SORT danger-level DESC
```

## 🔧 Tag Management

### Recently Tagged
```dataview
TABLE WITHOUT ID
  file.link as Content,
  file.tags as Tags,
  file.mtime as Modified
FROM ""
WHERE file.mtime >= date(today) - dur(3 days) AND tags != null
SORT file.mtime DESC
LIMIT 10
```

### Untagged Content
```dataview
LIST
FROM ""
WHERE !tags OR tags = null
LIMIT 20
```

---
*Tag-based navigation powered by Dataview*


## Related

*Links to related content will be added here.*


## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes
