---
aliases: []
tags:
- both
- category/note
- lore
- note
- unknown
type: Lore
status: draft
world: Both
updated: '2025-08-13T01:18:31.112296+00:00'
created: '2025-08-11'
---




# Home Embeds - DV

## Party

```meta-bind-button
label: New Journal
hidden: true
id: newJournal
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Journal.md
    fileName: NewJournal
    folderPath: 1-Session Journals
```

```meta-bind-button
label: New Player
hidden: true
id: button_player
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Player.md
    fileName: NewPlayer
    folderPath: 1-Party
```

```meta-bind-button
label: New Person (NPC)
hidden: true
id: button_person
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Person.md
    fileName: NewPerson
    folderPath: 02_Worldbuilding/People
```

```meta-bind-button
label: New Group
hidden: true
id: button_group
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Group.md
    fileName: NewGroup
    folderPath: 02_Worldbuilding/Groups
```

```meta-bind-button
label: New Hub (Settlement)
hidden: true
id: button_hub
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Hub.md
    fileName: NewHub
    folderPath: 02_Worldbuilding/Hubs
```

```meta-bind-button
label: New Place
hidden: true
id: button_place
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Place.md
    fileName: NewPlace
    folderPath: 02_Worldbuilding/Places
```

```meta-bind-button
label: New Point of Interest
hidden: true
id: button_pointofinterest
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-PointofInterest.md
    fileName: NewPOI
    folderPath: 02_Worldbuilding/Points of Interest
```

```meta-bind-button
label: New Region
hidden: true
id: button_region
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Region.md
    fileName: NewRegion
    folderPath: 02_Worldbuilding/Regions
```

```meta-bind-button
label: New Continent
hidden: true
id: button_continent
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Continent.md
    fileName: NewContinent
    folderPath: 02_Worldbuilding/Continents
```

```meta-bind-button
label: New Galaxy
hidden: true
id: button_galaxy
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Galaxy.md
    fileName: NewGalaxy
    folderPath: 02_Worldbuilding/Galaxies
```

```meta-bind-button
label: New Star System
hidden: true
id: button_starsystem
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Star-System.md
    fileName: NewStarSystem
    folderPath: 02_Worldbuilding/Star Systems
```

```meta-bind-button
label: New Planet
hidden: true
id: button_planet
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Planet.md
    fileName: NewPlanet
    folderPath: 02_Worldbuilding/Planets
```

```meta-bind-button
label: New Sapient Species
hidden: true
id: button_species
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-SapientSpecies.md
    fileName: NewSapientSpecies
    folderPath: 02_Worldbuilding/Sapient Species
```

```meta-bind-button
label: New Quest
hidden: true
id: button_quest
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Quest.md
    fileName: NewQuest
    folderPath: 02_Worldbuilding/Quests
```

```meta-bind-button
label: New Item
hidden: true
id: button_item
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Item.md
    fileName: NewItem
    folderPath: 03_Mechanics/Items
```

```dataview
TABLE WITHOUT ID link(file.name) AC "Character Name", Player, Class, Race, level, Role
from "1-Party"
where (Role = "Player")
where (Status = "Active")
```

### Player Elements

- `BUTTON[button_player]` – Create a new Player Character note

- `BUTTON[button_journal]` – Start a new Journal Entry for a Player or Session

---

### World Elements

- `BUTTON[button_galaxy]` – Create a new Galaxy – the largest cosmic structure in your universe

- `BUTTON[button_starsystem]` – Create a new Star System – a sun and its orbiting bodies

- `BUTTON[button_planet]` – Create a new Planet – a world within a star system

- `BUTTON[button_continent]` – Create a new Continent – a major landmass on a planet

- `BUTTON[button_region]` – Create a new Region – a local area within a continent (political, geographic, or cultural)

- `BUTTON[button_species]` – Define a new Sapient Species – intelligent inhabitants of your world

- `BUTTON[button_hub]` – Create a new Hub – populated places like Cities, Towns, Villages, Hamlets, Encampments, Keeps, Fortresses, Strongholds

- `BUTTON[button_place]` – Create a new Place – natural or constructed locations like mountains, ruins, temples

- `BUTTON[button_pointofinterest]` – Create a new Point of Interest – explorable sites like dungeons, ruins, crash sites, shrines

- `BUTTON[button_person]` – Create a new Person – an individual NPC or character in the world

- `BUTTON[button_group]` – Create a new Group – organizations like cults, guilds, factions, military orders

- `BUTTON[button_quest]` – Create a new Quest – assignable tasks, missions, or narrative arcs

- `BUTTON[button_item]` – Create a new Item – gear, artifacts, treasures, relics, or magical items

## Recently Modified

### Recently Modified People and Groups

```dataview
TABLE WITHOUT ID
  link(file.name) AC "Location Name", MyContainer, MyCategory
FROM "2-World"
WHERE
  contains(tags, "Category/People")
  OR contains(tags, "Category/Groups")
SORT file.mtime DESC
LIMIT 10
```

### Recently Modified Locations

```dataview
TABLE WITHOUT ID
  link(file.name) AC "Location Name", MyContainer, MyCategory
FROM "2-World"
WHERE
  contains(tags, "Category/Place")
  OR contains(tags, "Category/Hub")
  OR contains(tags, "Category/Region")
SORT file.mtime DESC
LIMIT 10
```

### Recently Modified Notes

```dataview
TABLE WITHOUT ID
    link(file.path, file.folder + " / " + file.name) AC "Note",
    file.mtime AC "Last modified"
FROM "/"
WHERE file.mtime >= date(today) - dur(30 days)
AND file.name != this.file.name
    AND !contains(file.path, "z_Assets")
    AND !contains(file.path, "Inline Scripts")
    AND !contains(file.path, "z_Templates")
    AND !contains(file.path, "daily notes")
    AND !contains(file.path, "BRAT")
SORT file.mtime DESC
LIMIT 10
```

## Session Journals

```dataview
TABLE WITHOUT ID link(file.name) AC "Session Date", Status, players
from "1-Session Journals"
where (type = "Session Journal")
SORT file.name DESC
```

## Vault Graph

![[Vault Report]]

## Cross-References

- [[1-DM Toolkit/Vault Report]]


## Connections

- [[Vault Report]]
