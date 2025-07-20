---
type: races-index
tags:
  - races
  - character-creation
  - playable-races
cssclasses:
  - races-dashboard
  - wide-page
created: 2025-01-25
modified: 2025-01-25
---

# 👥 Campaign Races
*Master Index of All Playable Races and Their Variants*

> [!quote] *"From the towering mountains to the deepest seas, from ancient forests to bustling cities, the peoples of this world are as diverse as the lands they call home."*

---

## 📊 Race Statistics

```dataview
TABLE WITHOUT ID
  length(rows) as "Total Races",
  length(filter(rows, (r) => r.origin = "phb")) as "Player's Handbook",
  length(filter(rows, (r) => r.origin = "custom")) as "Custom Races",
  length(filter(rows, (r) => r.origin = "setting")) as "Setting-Specific"
FROM "3-Mechanics/races"
WHERE type = "race"
```

---

## 🏷️ Races by Origin

### Core Races (Player's Handbook)
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  size as "Size",
  speed as "Speed",
  ability_bonuses as "Ability Bonuses"
FROM "3-Mechanics/races"
WHERE type = "race" AND origin = "phb"
SORT file.name ASC
```

### Custom Races
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  size as "Size",
  speed as "Speed",
  ability_bonuses as "Ability Bonuses"
FROM "3-Mechanics/races"
WHERE type = "race" AND origin = "custom"
SORT file.name ASC
```

### Setting-Specific Races
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  size as "Size",
  speed as "Speed",
  ability_bonuses as "Ability Bonuses"
FROM "3-Mechanics/races"
WHERE type = "race" AND origin = "setting"
SORT file.name ASC
```

---

## 🌍 Races by Environment

### Mountain Dwellers
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  origin as "Origin",
  typical_homeland as "Homeland"
FROM "3-Mechanics/races"
WHERE type = "race" AND contains(typical_homeland, "mountain")
SORT file.name ASC
```

### Forest Peoples
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  origin as "Origin",
  typical_homeland as "Homeland"
FROM "3-Mechanics/races"
WHERE type = "race" AND contains(typical_homeland, "forest")
SORT file.name ASC
```

### Aquatic Races
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  origin as "Origin",
  typical_homeland as "Homeland"
FROM "3-Mechanics/races"
WHERE type = "race" AND contains(typical_homeland, "aquatic")
SORT file.name ASC
```

### Urban Dwellers
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  origin as "Origin",
  typical_homeland as "Homeland"
FROM "3-Mechanics/races"
WHERE type = "race" AND contains(typical_homeland, "urban")
SORT file.name ASC
```

---

## 🎯 Races by Class Synergy

### Best for Warriors
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  ability_bonuses as "Bonuses",
  racial_features as "Key Features"
FROM "3-Mechanics/races"
WHERE type = "race" AND contains(racial_features, "strength") OR contains(racial_features, "combat")
SORT file.name ASC
```

### Best for Spellcasters
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  ability_bonuses as "Bonuses",
  racial_features as "Key Features"
FROM "3-Mechanics/races"
WHERE type = "race" AND contains(racial_features, "magic") OR contains(racial_features, "spellcasting")
SORT file.name ASC
```

### Best for Rogues
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  ability_bonuses as "Bonuses",
  racial_features as "Key Features"
FROM "3-Mechanics/races"
WHERE type = "race" AND contains(racial_features, "stealth") OR contains(racial_features, "dexterity")
SORT file.name ASC
```

### Best for Clerics
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  ability_bonuses as "Bonuses",
  racial_features as "Key Features"
FROM "3-Mechanics/races"
WHERE type = "race" AND contains(racial_features, "wisdom") OR contains(racial_features, "divine")
SORT file.name ASC
```

---

## 🗺️ Races by Region

### Races Common in Shadowhaven
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  population_percentage as "Population %",
  typical_occupations as "Common Jobs"
FROM "3-Mechanics/races"
WHERE type = "race" AND contains(regions, "Shadowhaven")
SORT population_percentage DESC
```

### Races of The Island of Skulls
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  population_percentage as "Population %",
  typical_occupations as "Common Jobs"
FROM "3-Mechanics/races"
WHERE type = "race" AND contains(regions, "Island of Skulls")
SORT population_percentage DESC
```

### Races of The Contested Waters
```dataview
TABLE WITHOUT ID
  file.link as "Race",
  population_percentage as "Population %",
  typical_occupations as "Common Jobs"
FROM "3-Mechanics/races"
WHERE type = "race" AND contains(regions, "Contested Waters")
SORT population_percentage DESC
```

---

## 🎲 Recently Added Races

```dataview
TABLE WITHOUT ID
  file.link as "Race",
  origin as "Origin",
  size as "Size",
  file.mtime as "Added"
FROM "3-Mechanics/races"
WHERE type = "race"
SORT file.mtime DESC
LIMIT 10
```

---

## 🔗 Connected Content

### NPCs of Each Race
```dataview
TABLE WITHOUT ID
  file.link as "NPC",
  occupation as "Occupation",
  location as "Location"
FROM "2-World/People"
WHERE contains(char_race, this.file.link)
SORT file.name ASC
```

### Player Characters by Race
```dataview
TABLE WITHOUT ID
  file.link as "PC",
  class as "Class",
  level as "Level"
FROM "1-Party"
WHERE contains(race, this.file.link)
SORT file.name ASC
```

### Quests Involving Specific Races
```dataview
TABLE WITHOUT ID
  file.link as "Quest",
  quest-status as "Status"
FROM "2-World/Quests"
WHERE contains(quest-races, this.file.link)
SORT file.name ASC
```

---

## 🏛️ Racial Organizations

### Racial Councils
```dataview
TABLE WITHOUT ID
  file.link as "Organization",
  organization_type as "Type",
  leader as "Leader"
FROM "2-World/Groups"
WHERE contains(racial_focus, this.file.link)
SORT file.name ASC
```

### Racial Guilds
```dataview
TABLE WITHOUT ID
  file.link as "Guild",
  guild_type as "Type",
  headquarters as "Location"
FROM "2-World/Groups"
WHERE contains(guild_races, this.file.link)
SORT file.name ASC
```

---

## 📝 Quick Actions

`BUTTON[newRace]` Create New Race
`BUTTON[raceGallery]` View Race Gallery
`BUTTON[racialFeats]` Browse Racial Feats
`BUTTON[racialSubraces]` Create Subrace

---

## 🎯 DM Notes

### Race Distribution Guidelines:
- **Common Races**: 60-80% of population (Humans, Elves, Dwarves, Halflings)
- **Uncommon Races**: 15-25% of population (Half-Elves, Half-Orcs, Gnomes)
- **Rare Races**: 5-10% of population (Tieflings, Dragonborn, Genasi)
- **Exotic Races**: 1-5% of population (Custom races, setting-specific)

### Racial Relations:
- **Allied Races**: Work together, share communities, intermarry
- **Neutral Races**: Coexist peacefully, limited interaction
- **Hostile Races**: Historical conflicts, territorial disputes
- **Isolated Races**: Rare contact, mysterious, often misunderstood

### Cultural Integration:
- **Assimilation**: Races adopt dominant culture
- **Integration**: Races maintain identity while participating in society
- **Segregation**: Races live separately, limited interaction
- **Conflict**: Active racial tensions and discrimination

### Racial Traits Balance:
- **Ability Score Bonuses**: +2 to one, +1 to another (or +1 to three)
- **Racial Features**: 2-4 significant abilities
- **Languages**: Common + 1-2 additional
- **Size**: Usually Medium, some Small or Large
- **Speed**: Usually 30 ft, some 25 ft or 35 ft

---

## 🌟 Racial Variants and Subraces

### Elven Subraces
```dataview
TABLE WITHOUT ID
  file.link as "Subrace",
  parent_race as "Parent",
  ability_bonuses as "Bonuses"
FROM "3-Mechanics/races"
WHERE type = "subrace" AND parent_race = "Elf"
SORT file.name ASC
```

### Dwarven Subraces
```dataview
TABLE WITHOUT ID
  file.link as "Subrace",
  parent_race as "Parent",
  ability_bonuses as "Bonuses"
FROM "3-Mechanics/races"
WHERE type = "subrace" AND parent_race = "Dwarf"
SORT file.name ASC
```

### Human Variants
```dataview
TABLE WITHOUT ID
  file.link as "Variant",
  parent_race as "Parent",
  ability_bonuses as "Bonuses"
FROM "3-Mechanics/races"
WHERE type = "variant" AND parent_race = "Human"
SORT file.name ASC
```

---

*This races index automatically updates as new races are added to the vault. Use the categorization above to help players choose the perfect race for their character concept.*