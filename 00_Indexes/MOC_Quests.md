---
tags: [moc, index, navigation]
created: 2025-08-15T14:04:34.377143
---

# Quest Log

## Quick Navigation
- [[00_Indexes/Quick_Access_Sidebar|← Back to Index]]
- [[00_System/MASTER_CONTROL|🎮 Master Control]]

## Content Directory

### By Category
```dataview
TABLE file.folder as "Location", file.size as "Size"
FROM ""
WHERE contains(file.path, "quest")
SORT file.name
LIMIT 20
```

### Recently Updated
```dataview
LIST
FROM ""
WHERE contains(file.path, "quest")
SORT file.mtime DESC
LIMIT 10
```

### Orphaned Quests
```dataview
LIST
FROM ""
WHERE contains(file.path, "quest") AND length(file.inlinks) = 0
LIMIT 10
```

---
*Auto-generated MOC for better navigation*
