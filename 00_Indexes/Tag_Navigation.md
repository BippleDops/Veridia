---
title: Tag_Navigation
type: note
tags:
- combat
- quest
- shadow-touched
- note
created: '2025-01-15'
modified: '2025-01-15'
---

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

### Find by Single Tag
```dataview
TABLE WITHOUT ID
  file.link as Content,
  file.folder as Location
FROM # combat

LIMIT 10
```
### Find by Multiple Tags

  tags as Tags
FROM #npc AND #aquabyssos

### Tag Combinations

  status as Status
FROM (#quest OR #adventure) AND #active

## 📈 Tag Statistics

  tag as Tag,
  length(rows) as "Usage Count"
FROM ""
FLATTEN tags as tag
WHERE tag != 
GROUP BY tag
SORT length(rows) DESC
LIMIT 20

### Campaign Tags

LIST
FROM # campaign OR #seven-shards OR #shadow-conspiracy

GROUP BY file.folder

### Faction Tags

FROM # faction OR #guild OR #organization

GROUP BY tags

### Danger Level Tags

  danger-level as "Danger"
FROM # dangerous OR #deadly OR #safe

SORT danger-level DESC

### Recently Tagged

  file.tags as Tags,
  file.mtime as Modified
WHERE file.mtime >= date(today) - dur(3 days) AND tags != 
SORT file.mtime DESC

### Untagged Content

WHERE !tags OR tags = 

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
