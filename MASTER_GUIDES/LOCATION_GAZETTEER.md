---
tags: [gazetteer, locations, reference]
created: 2025-08-15T14:13:16.711148
---

# 🗺️ LOCATION GAZETTEER

## Major Regions
```dataview
TABLE population as "Population", government as "Government"
FROM "02_Worldbuilding/Locations"
WHERE contains(tags, "region")
```

## Cities & Towns
```dataview
TABLE size as "Size", notable as "Notable Features"
FROM "02_Worldbuilding/Locations"
WHERE contains(tags, "city") OR contains(tags, "town")
SORT population DESC
```

## Points of Interest
```dataview
LIST
FROM "02_Worldbuilding/Locations"
WHERE contains(tags, "poi") OR contains(tags, "landmark")
```

---
*Complete location reference*