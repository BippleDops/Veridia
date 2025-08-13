---
obsidianUIMode: preview
world: Both
updated: '2025-08-13T12:34:25.230388+00:00'
created: '2025-08-11'
status: complete
tags:
- active
- both
- complete
- lore
type: Lore
---





 
# Button Templates

> [!NOTE]
> The buttons below are used by inline references like `BUTTON[button_person]` in DM boards and dashboards. You can move this note anywhere; the buttons will still work as long as their `id` stays the same.

 
```meta-bind-button
label: New Journal
hidden: false
id: newJournal
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Journal.md
    fileName: NewJournal
    folderPath: 1-Session Journals
icon: book-plus
tooltip: Create a new session or player journal
```
```meta-bind-button
label: New Player
hidden: false
id: button_player
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Player.md
    fileName: NewPlayer
    folderPath: 1-Party
icon: user-pen
tooltip: Create a new Player Character note
```
```meta-bind-button
label: New Person (NPC)
hidden: false
id: button_person
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Person.md
    fileName: NewPerson
    folderPath: 02_Worldbuilding/People
icon: users
tooltip: Create a new Person (NPC)
```
```meta-bind-button
label: New Group
hidden: false
id: button_group
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Group.md
    fileName: NewGroup
    folderPath: 02_Worldbuilding/Groups
icon: users-round
tooltip: Create a new Group/Faction
```
```meta-bind-button
label: New Hub (Settlement)
hidden: false
id: button_hub
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Hub.md
    fileName: NewHub
    folderPath: 02_Worldbuilding/Hubs
icon: building-2
tooltip: Create a new Hub (city, town, village)
```
```meta-bind-button
label: New Place
hidden: false
id: button_place
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Place.md
    fileName: NewPlace
    folderPath: 02_Worldbuilding/Places
icon: landmark
tooltip: Create a new Place
```
```meta-bind-button
label: New Point of Interest
hidden: false
id: button_pointofinterest
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-PointofInterest.md
    fileName: NewPOI
    folderPath: 02_Worldbuilding/Points of Interest
icon: map-pin
tooltip: Create a new Point of Interest
```
```meta-bind-button
label: New Region
hidden: false
id: button_region
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Region.md
    fileName: NewRegion
    folderPath: 02_Worldbuilding/Regions
icon: map
tooltip: Create a new Region
```
```meta-bind-button
label: New Continent
hidden: false
id: button_continent
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Continent.md
    fileName: NewContinent
    folderPath: 02_Worldbuilding/Continents
icon: globe-2
tooltip: Create a new Continent
```
```meta-bind-button
label: New Galaxy
hidden: false
id: button_galaxy
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Galaxy.md
    fileName: NewGalaxy
    folderPath: 02_Worldbuilding/Galaxies
icon: galaxy
tooltip: Create a new Galaxy
```
```meta-bind-button
label: New Star System
hidden: false
id: button_starsystem
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Star-System.md
    fileName: NewStarSystem
    folderPath: 02_Worldbuilding/Star Systems
icon: orbit
tooltip: Create a new Star System
```
```meta-bind-button
label: New Planet
hidden: false
id: button_planet
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Planet.md
    fileName: NewPlanet
    folderPath: 02_Worldbuilding/Planets
icon: planet
tooltip: Create a new Planet
```
```meta-bind-button
label: New Sapient Species
hidden: false
id: button_species
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-SapientSpecies.md
    fileName: NewSapientSpecies
    folderPath: 02_Worldbuilding/Sapient Species
icon: dna
tooltip: Create a new Sapient Species
```
```meta-bind-button
label: New Quest
hidden: false
id: button_quest
style: primary
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Quest.md
    fileName: NewQuest
    folderPath: 02_Worldbuilding/Quests
icon: target
tooltip: Create a new Quest
```

```meta-bind-button
label: New Item
hidden: false
id: button_item
style: default
actions:
  - type: templaterCreateNote
    templateFile: 05_Templates/World Builder Templates/Template-Item.md
    fileName: NewItem
    folderPath: 03_Mechanics/Items
icon: package-plus
tooltip: Create a new Item
```


