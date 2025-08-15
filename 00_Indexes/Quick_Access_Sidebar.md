---
title: Quick_Access_Sidebar
type: note
tags:
- note
created: '2025-01-15'
modified: '2025-01-15'
---

# Quick_Access_Sidebar

---
title: Quick Access Sidebar
type: sidebar
tags:
- navigation
- index
- sidebar
- active
- quick-access
created: 2025-08-14
modified: '2025-08-14'
updated: 2025-08-14
cssclass: quick-access
---

## 📌 Pinned Content

```dataview
LIST
FROM ""
WHERE contains(tags, "pinned") OR contains(tags, "favorite")
SORT file.name ASC
```

## 🔥 Hot Keys

| Action | Shortcut | Description |
|--------|----------|-------------|
| Quick Search | `Cmd/Ctrl + O` | Open file |
| Command Palette | `Cmd/Ctrl + P` | Commands |
| Daily Note | `Cmd/Ctrl + D` | Today's note |
| Graph View | `Cmd/Ctrl + G` | Visual graph |
| Tag Search | `Cmd/Ctrl + T` | Find by tag |

### Campaigns
FROM "01_Adventures"
WHERE type = "campaign" AND status = "active"
LIMIT 3

### Current NPCs
FROM "02_Worldbuilding/People"
WHERE contains(tags, "current") OR contains(tags, "active")
LIMIT 5

### Active Locations
FROM "02_Worldbuilding/Places"
WHERE contains(tags, "current") OR last-visited = date(today)

---
*Quick access sidebar for rapid navigation*

## Related

*Links to related content will be added here.*

## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes
