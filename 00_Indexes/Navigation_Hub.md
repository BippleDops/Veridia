---

title: Navigation_Hub
type: note
tags:
- quest
- note
created: '2025-01-15'
modified: '2025-01-15'
status: active
---

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

### Content by Category
```dataview
TABLE WITHOUT ID
  file.folder as "📁 Category",
  length(rows) as "📄 Files"
FROM ""
WHERE file.name != this.file.name
GROUP BY file.folder
SORT length(rows) DESC
```
### Recent Sessions

  file.link as Session,
  campaign as Campaign,
  date as Date
FROM "01_Adventures"
WHERE type = "session" OR contains(tags, "session")
SORT file.mtime DESC
LIMIT 5

### Active NPCs

  file.link as NPC,
  faction as Faction,
  location as Location
FROM "02_Worldbuilding/People"
WHERE type = "npc" OR contains(tags, "npc")
LIMIT 10

### Key Locations

  file.link as Location,
  world as Realm,
  type as Type
FROM "02_Worldbuilding/Places"
WHERE type = "location" OR contains(tags, "location")

## 🔥 Recently Modified

  file.link as Content,
  file.folder as Category,
  file.mtime as "Last Modified"
WHERE file.mtime >= date(today) - dur(7 days)
LIMIT 15

## 🏷️ Popular Tags

LIST
FLATTEN tags as tag
GROUP BY tag
LIMIT 20

### By Type

- `type:npc` - [[Npc]]
- `type:location` - [[Places]]
- `type:quest` - [[All Quests]]
- `type:session` - [[All Sessions]]

---
*Navigation hub powered by Dataview - automatically updates with vault changes*

## Related

*Links to related content will be added here.*

## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes

## Alternate Descriptions
- **First Impression**: Initial appearance
- **Closer Look**: Detailed examination
- **Hidden Details**: Secret aspects

## Random Table
| d6 | Result |
|----|--------|
| 1  | Option A |
| 2  | Option B |
| 3  | Option C |
| 4  | Option D |
| 5  | Option E |
| 6  | Option F |

## Player Tips
> 🎮 **Strategy**: How to approach this content
> Work together and communicate