---
tags: [moc, index, navigation]
created: "2025-08-15T14:04:34.377143"
---

# Quest Log

## Quick Navigation
- [[00_Indexes/Quick_Access_Sidebar|← Back to Index
- [00_System/MASTER_CONTROL|🎮 Master Control]]

## Content Directory

### By Category
```dataview
TABLE file.folder as "Location", file.size as "Size"
FROM ""
WHERE contains(file.link, "quest")
sort file.name asc
LIMIT 20
```

### Recently Updated
```dataview
TABLE file.link as "File"
FROM ""
WHERE contains(file.link, "quest")
SORT file.mtime DESC
LIMIT 10
```

### Orphaned Quests
```dataview
TABLE file.link as "File"
FROM ""
WHERE contains(file.link, "quest") AND length(file.inlinks) = 0
LIMIT 10
```

---
*Auto-generated MOC for better navigation*
