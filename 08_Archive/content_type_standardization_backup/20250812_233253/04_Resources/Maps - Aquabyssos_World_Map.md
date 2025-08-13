---
updated: '2025-08-13T12:34:14.647908+00:00'
created: '2025-08-12'
tags:
- aquabyssos
- draft
- leaflet
- lore
- map
- stable
status: draft
type: Lore
aliases:
- Aquabyssos Map Demo
world: Aquabyssos
---





# Aquabyssos World Map (Leaflet Demo)

Use this interactive map to drop markers that link to locations in Aquabyssos.

```leaflet
id: aquabyssos-demo
height: 520
defaultZoom: 4
minZoom: 2
maxZoom: 18
unit: meters
darkMode: true
scale: true
tileServer: https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
marker:
  - coordinates: [42.1, 12.5]
    name: Abyssos Prime
    link: [[02_Worldbuilding/Places/Abyssos Prime|02 Worldbuilding/Places/Abyssos Prime]]
  - coordinates: [41.7, 13.0]
    name: Parliament of Echoes
    link: [[02_Worldbuilding/Places/Parliament of Echoes|02 Worldbuilding/Places/Parliament Of Echoes]]
``` 

Notes
- Edit markers above to add more locations. Coordinates are illustrative.
- You can switch to an image overlay map if you add a local image and specify bounds.

## Cross-References

- [[AQUABYSSOS_VAULT_README|AQUABYSSOS VAULT README]]
