---
obsidianUIMode: preview
assa:
---

# DM Board

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
    folderPath: 2-World/People
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
    folderPath: 2-World/Groups
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
    folderPath: 2-World/Hubs
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
    folderPath: 2-World/Places
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
    folderPath: 2-World/Points of Interest
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
    folderPath: 2-World/Regions
```

```dataview
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, ac, pasperc As "Pass Perc (WIS)"
from "1-Party"
where contains(Role, "Player")
where contains(Status, "Active")
```

`BUTTON[newJournal]` `BUTTON[button_player]`
%% These are Inline Buttons. Inline allows the buttons to be placed on the same line next to each other. Button's are defined within the Meta Bind Plugin. See Button Templates. %%
`BUTTON[button_region]`  `BUTTON[button_hub]` `BUTTON[button_place]`

`BUTTON[button_person]` `BUTTON[button_pointofinterest]`

`BUTTON[button_group]` `BUTTON[button_quest]`

## Known Languages

%% This will scan the player notes for any known languages and list the unique languages that the party know here. This is handy to determine quickly if the party can understand someone. %%

```dataviewjs
dv.list(
  dv.pages()
    .where(p => p.Status && p.Status.includes("Active") && p.Role && p.Role.includes("Player"))
    .PlayerKnownLanguages.distinct()
)
```
