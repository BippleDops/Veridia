---
type: character
tags: []
aliases: []
created: 2025-07-23 12:39
modified: 2025-07-23 12:39
name: Example Party 2
player: ''
race: ''
class: ''
level: 1
alignment: ''
status: active
location_current: ''
location_home: ''
faction: ''
relationships:
  allies: []
  enemies: []
  family: []
ability_scores:
  str: 10
  dex: 10
  con: 10
  int: 10
  wis: 10
  cha: 10
combat:
  ac: 10
  hp: 10
  speed: 30ft
---
```dataview
TABLE WITHOUT ID link(file.name) AS "Character Name", Player, Class, Race, level, Role
from "1-Party/Example Party 2"
where (Role = "Player") 
where (Status = "Active") 
```