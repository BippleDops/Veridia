---
tags: [map, leaflet, aquabyssos]
type: map
aliases: [Aquabyssos Map Demo]
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
    link: [[01_Campaigns/Aquabyssos/Locations/Abyssos Prime]]
  - coordinates: [41.7, 13.0]
    name: Parliament of Echoes
    link: [[01_Campaigns/Aquabyssos/Locations/Parliament of Echoes]]
``` 

Notes
- Edit markers above to add more locations. Coordinates are illustrative.
- You can switch to an image overlay map if you add a local image and specify bounds.

