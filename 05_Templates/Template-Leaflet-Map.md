---
type: map
tags: [map, leaflet]
title: "{{title}}"
image: "z_Assets/Maps/{{map_file}}"
bounds: [0, 0, 4096, 4096]  # adjust to your image pixels
markers: []
---

# {{title}}

```leaflet
id: {{title}}
image: {{image}}
bounds: [[0,0],[4096,4096]]
minZoom: -2
maxZoom: 2
zoomDelta: 0.5
marker: [2048, 2048]
markerName: Center
markerPopup: Starting point
```

## Locations
- [[01_Campaigns/Aethermoor/Locations/Port Meridian]] @ (x,y)
- [[01_Campaigns/Aquabyssos/Locations/Abyssos Prime]] @ (x,y)

Tips:
- Set image bounds to pixel size for accurate distance measurement.
- Add `marker` lines to denote POIs, each linking to a location note.

