---
type: note
tags: []
aliases: []
created: 2025-07-23 12:39
modified: 2025-07-23 12:39
---
```base
source:
  folder: "2-World/People"
properties:
  - name: RandSeed
    type: formula
    # a simple hash: (name length * day-of-month) % 100, normalized to [0,1)
    formula: (file.name.length * file.mtime.date.day % 100) / 100
  - name: Location
    type: text
    source: LocationName
views:
  - type: table
    sorts:
      - property: RandSeed
        direction: asc
    limit: 5
```