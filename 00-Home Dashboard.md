# 🏰 Vault Home Dashboard

Welcome to the living index of the campaign vault. This page surfaces the most important information at a glance. All sections refresh automatically via the Dataview plugin.

---

## 📅 Recent Sessions
```dataview
LIST FROM "1-Session Journals"
SORT file.mtime DESC
LIMIT 5
```

## 🧑‍🤝‍🧑 Active PCs
```dataview
TABLE name as "Name", race, class, level
FROM "1-Party"
WHERE type = "pc"
SORT name ASC
```

## 🗺️ Open Quests
```dataview
TABLE objective as "Objective", status, priority
FROM "2-World/Quests"
WHERE status = "active"
SORT priority DESC
```

## 🏙️ Locations Catalog
```dataview
TABLE category, parent
FROM "2-World"
WHERE type = "location"
```

## 🐲 Recent Monsters Added
```dataview
LIST FROM "3-Mechanics/bestiary"
SORT file.mtime DESC
LIMIT 10
```

---

### Quick Links
* [[Documentation/Frontmatter Schema]]
* [[Documentation/Vault Style Guide]]
* [[CHANGELOG]]
* [[README]] 