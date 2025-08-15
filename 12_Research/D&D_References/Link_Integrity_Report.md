# Link_Integrity_Report

---
title: Link Integrity Report
type: Lore
tags:
- index
- status/complete
- link-analysis
- performance
- research
- world/both
- active
- importance/core
created: '2025-08-11'
modified: '2025-08-14'
status: complete
cssclasses:
- wide-page
- index-page
updated: '2025-08-12T23:37:33.009840'
world: Both
---



# 🔗 Link Integrity Report
*Tracking Unresolved Links and Orphaned Pages*

## Overview
This dashboard monitors link health across the vault, identifying broken references and isolated pages that need connection.

---

## ⚠️ Unresolved Links (Last 30 Days)

```dataview
TABLE file.link as "Source", length(file.outlinks) as "Total Links", length(filter(file.outlinks, (x) => !x.file)) as "Broken"
FROM ""
WHERE length(filter(file.outlinks, (x) => !x.file)) > 0
AND file.mtime > date(today) - dur(30 days)
SORT length(filter(file.outlinks, (x) => !x.file)) DESC
LIMIT 20
```

## 🏝️ Orphaned Pages (No Incoming Links)

```dataview
TABLE file.link as "Orphaned Page", file.mtime as "Last Modified", length(file.tags) as "Tags"
FROM ""
WHERE length(file.inlinks) = 0
AND !contains(file.path, "Templates")
AND !contains(file.path, "Archive")
AND file.name != this.file.name
SORT file.mtime DESC
LIMIT 20
```

## 📊 Link Statistics by Category

```dataview
TABLE 
    length(rows.file.link) as "Total Files",
    sum(rows.outlinks) as "Total Outgoing",
    sum(rows.inlinks) as "Total Incoming",
    round(sum(rows.outlinks) / length(rows.file.link), 2) as "Avg Out/File"
FROM ""
WHERE contains(file.path, "Worldbuilding")
GROUP BY split(file.path, "/")[1] as Category
SORT sum(rows.outlinks) DESC
```

## 🔄 Most Connected Pages

```dataview
TABLE file.link as "Page", length(file.inlinks) as "Incoming", length(file.outlinks) as "Outgoing", (length(file.inlinks) + length(file.outlinks)) as "Total Connections"
FROM ""
WHERE (length(file.inlinks) + length(file.outlinks)) > 10
SORT (length(file.inlinks) + length(file.outlinks)) DESC
LIMIT 15
```

## 🚨 Critical Missing Links

These are frequently referenced but non-existent pages that should be created:

```dataview
LIST
FROM ""
WHERE any(file.outlinks, (x) => x.display = "Marina" OR x.display = "Deep Mother" OR x.display = "Seven Shards" OR x.display = "Convergence Point")
AND !x.file
LIMIT 10
```

## 📈 Link Health Trends

### Files Created Without Links (Last 7 Days)
```dataview
TABLE file.link as "New File", file.ctime as "Created", length(file.outlinks) as "Outgoing", length(file.inlinks) as "Incoming"
FROM ""
WHERE file.ctime > date(today) - dur(7 days)
AND (length(file.outlinks) = 0 OR length(file.inlinks) = 0)
SORT file.ctime DESC
```

---

## 🛠️ Maintenance Actions

### Priority 1: Fix Broken Links
- [ ] Review top 20 files with broken links
- [ ] Create missing target pages or correct link paths
- [ ] Update outdated references

### Priority 2: Connect Orphaned Pages
- [ ] Add "See Also" sections to orphaned pages
- [ ] Link from relevant index pages
- [ ] Consider merging or archiving truly isolated content

### Priority 3: Strengthen Weak Connections
- [ ] Pages with < 3 connections need more integration
- [ ] Add bidirectional links where appropriate
- [ ] Create hub pages for scattered topics

---

*Last Updated: {{date:YYYY-MM-DD HH:mm}}*

## Related

*Links to related content will be added here.*


## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes
