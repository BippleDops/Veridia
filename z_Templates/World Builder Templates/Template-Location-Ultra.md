---
type: location
tags:
  - location
  - location/{{locationType}}
  - location/{{continent}}/{{region}}/{{settlement}}
aliases:
  - '{{locationAlias1}}'
  - '{{locationAlias2}}'
cssclasses:
  - location-note
  - wide-page
location_type:
  '[object Object]': null
parent_location: '{{parentLocation}}'
continent: '{{continent}}'
region: '{{region}}'
settlement: '{{settlement}}'
coordinates:
  x: null
  'y': null
climate: '{{climate}}'
terrain: '{{terrain}}'
population: null
population_breakdown:
  human: null
  elf: null
  dwarf: null
  other: null
government: '{{government}}'
ruler: null
notable_features: []
districts: []
landmarks: []
shops: []
inns: []
temples: []
connected_locations: []
travel_times: {}
organizations_present: []
notable_npcs: []
quest_hooks: []
rumors: []
secrets: []
image_path: null
map_path: null
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
---

<%*
// Location setup
const locationName = await tp.system.prompt("Location Name:");
if (!locationName) return;
await tp.file.rename(locationName);

// Location type selection
const locTypes = [
  "continent", "region", "city", "town", "village", 
  "district", "building", "dungeon", "wilderness", "landmark"
];
const locationType = await tp.system.suggester(locTypes, locTypes);

// Parent location selection
const locations = app.vault.getMarkdownFiles()
  .filter(f => f.path.includes("2-World/Locations/"));
const parentLocation = await tp.system.suggester(
  ["None", ...locations.map(f => f.basename)],
  ["", ...locations.map(f => f.path)]
);

// Climate and terrain for outdoor locations
let climate = "", terrain = "";
if (["continent", "region", "wilderness"].includes(locationType)) {
  climate = await tp.system.suggester([
    "Arctic", "Temperate", "Tropical", "Desert", "Magical"
  ], [
    "Arctic", "Temperate", "Tropical", "Desert", "Magical"
  ]);
  
  terrain = await tp.system.suggester([
    "Mountains", "Forest", "Plains", "Desert", "Coastal", 
    "Swamp", "Underground", "Planar"
  ], [
    "Mountains", "Forest", "Plains", "Desert", "Coastal", 
    "Swamp", "Underground", "Planar"
  ]);
}

// Update frontmatter
setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm.location_type = locationType;
    fm.parent_location = parentLocation ? `${parentLocation}` : "";
    fm.climate = climate;
    fm.terrain = terrain;
    
    // Generate hierarchical tags
    if (parentLocation) {
      // Logic to extract continent/region/settlement from parent
      fm.tags.push(`location/${locationType}`);
    }
  });
}, 100);
%>

> [!infobox]
> # `VIEW[{file.name}]`
> ![[`VIEW[{map_path}|{image_path}|]`|cover]]
> ###### Location Info
> | | |
> |---|---|
> | **Type** | `VIEW[{location_type}]` |
> | **Parent** | `VIEW[{parent_location}]` |
> | **Climate** | `VIEW[{climate}]` |
> | **Terrain** | `VIEW[{terrain}]` |
> | **Population** | `VIEW[{population}]` |
> | **Government** | `VIEW[{government}]` |
> | **Ruler** | `VIEW[{ruler}]` |

## Quick Actions
`BUTTON[addNPC]` Add NPC Here
`BUTTON[addShop]` Add Shop
`BUTTON[addQuest]` Add Quest Hook
`BUTTON[generateRumor]` Generate Rumor

## Description

### Overview
<!-- General description of the location -->

### History
<!-- Historical significance, founding, major events -->

### Current State
<!-- What's happening now, political climate, threats -->

## Notable Features
`INPUT[list:notable_features]`

## Districts & Areas
```dataviewjs
// Show sub-locations
const thisLocation = dv.current().file.path;
const subLocations = dv.pages('#location')
  .where(l => l.parent_location && l.parent_location.path === thisLocation);

if (subLocations.length > 0) {
  dv.table(
    ["Area", "Type", "Notable Features", "NPCs"],
    subLocations.map(loc => [
      loc.file.link,
      loc.location_type,
      loc.notable_features ? loc.notable_features.join(", ") : "",
      loc.notable_npcs ? loc.notable_npcs.length : 0
    ])
  );
} else {
  dv.paragraph("*No districts or sub-areas defined.*");
}
```

## Landmarks
`INPUT[list:landmarks]`

## 🏪 Shops & Services

### Shops
```ad-shop
| Shop Name | Type | Owner | Specialty |
|-----------|------|-------|-----------|
| | | | |
```

### Inns & Taverns
```ad-inn
| Name | Quality | Prices | Notable Features |
|------|---------|--------|------------------|
| | | | |
```

### Temples & Shrines
`INPUT[list:temples]`

## 👥 Notable NPCs
```dataviewjs
// List all NPCs in this location
const thisLoc = dv.current().file.path;
const npcs = dv.pages('#NPC')
  .where(n => n.location && n.location.path === thisLoc)
  .sort(n => n.occupation);

if (npcs.length > 0) {
  dv.table(
    ["NPC", "Occupation", "Faction", "Status", "Relationship"],
    npcs.map(npc => [
      npc.file.link,
      npc.occupation || "",
      npc.faction || "",
      npc.status || "active",
      npc.relationship || "neutral"
    ])
  );
} else {
  dv.paragraph("*No notable NPCs at this location.*");
}
```

## 🏛️ Organizations
`INPUT[list:organizations_present]`

## 🗺️ Connected Locations

### Direct Connections
```dataviewjs
// Show connected locations with travel times
const connections = dv.current().connected_locations || [];
const times = dv.current().travel_times || {};

if (connections.length > 0) {
  dv.table(
    ["Location", "Direction", "Travel Time", "Route Type"],
    connections.map(loc => {
      const locName = loc.replace(/[\[\]]/g, '');
      return [
        loc,
        "", // Could be calculated from coordinates
        times[locName] || "Unknown",
        "" // Road, trail, teleport, etc.
      ];
    })
  );
}
```

## 🎯 Adventure Hooks
`INPUT[list:quest_hooks]`

## 💬 Rumors & Information
`INPUT[list:rumors]`

## 🔐 Secrets
```ad-secret
title: DM Only
`INPUT[list:secrets]`
```

## 🎲 Random Encounters

| d20 | Day Encounter | Night Encounter |
|-----|---------------|-----------------|
| 1-10 | Nothing | Nothing |
| 11-14 | | |
| 15-17 | | |
| 18-19 | | |
| 20 | | |

## Notes
<!-- Additional DM notes, development ideas --> 