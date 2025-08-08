---
type: settlement
tags: [location, settlement, city]
aliases: []
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
settlement_name: "<% tp.file.title %>"
size: town
population: 0
government: autocracy
alignment: neutral
---

# <% tp.file.title %>

> [!infobox]
> # <% tp.file.title %>
> ![[<% tp.file.title.toLowerCase().replace(/ /g, "_") %>_map.jpg]]
> ###### Settlement Statistics
> | Stat | Value |
> |------|-------|
> | **Size** | `INPUT[inlineSelect(option(thorp), option(hamlet), option(village), option(town), option(city), option(metropolis)):size]` |
> | **Population** | `INPUT[number:population]` |
> | **Government** | `INPUT[inlineSelect(option(autocracy), option(council), option(democracy), option(dictatorship), option(monarchy), option(oligarchy), option(theocracy)):government]` |
> | **Alignment** | `INPUT[inlineSelect(option(lawful good), option(neutral good), option(chaotic good), option(lawful neutral), option(neutral), option(chaotic neutral), option(lawful evil), option(neutral evil), option(chaotic evil)):alignment]` |
> | **Leader** | [[`INPUT[text:leader]`]] |
> | **Founded** | `INPUT[text:founded]` |

## 🏛️ Overview

> [!quote] Local Saying
> "`INPUT[text:saying]`"

**First Impressions:** 
`INPUT[text:first_impressions]`

**General Description:**


**Unique Features:**
- 
- 
- 

---

## 📊 Demographics

### Population Breakdown
| Race | Percentage | Approx. Number |
|------|------------|----------------|
| Human | 60% | |
| Elf | 15% | |
| Dwarf | 10% | |
| Halfling | 8% | |
| Other | 7% | |

### Social Classes
- **Nobility/Wealthy:** 5%
- **Merchants/Artisans:** 20%
- **Common Workers:** 60%
- **Poor/Destitute:** 15%

### Major Factions
1. **[[Faction Name]]** - Influence: High/Medium/Low
2. **[[Faction Name]]** - Influence: High/Medium/Low
3. **[[Faction Name]]** - Influence: High/Medium/Low

---

## 🏰 Government & Law

### Leadership
**Current Ruler:** [[Leader Name]]
**Title:** `INPUT[text:title]`
**Tenure:** `INPUT[text:tenure]` years
**Disposition:** `INPUT[inlineSelect(option(benevolent), option(fair), option(neutral), option(corrupt), option(tyrannical)):disposition]`

### Council/Advisors
- **Name** - *Position* - Loyalty: ⭐⭐⭐⭐⭐
- **Name** - *Position* - Loyalty: ⭐⭐⭐⭐⭐

### Laws & Justice
**Legal System:** `INPUT[inlineSelect(option(fair trial), option(trial by combat), option(mob justice), option(arbitrary), option(religious law)):legal_system]`

**Notable Laws:**
- 
- 
- 

**Punishments:**
- **Minor Crimes:** Fines, stocks, flogging
- **Major Crimes:** Imprisonment, exile, execution
- **Unique:** 

### City Watch/Guards
**Total Force:** `INPUT[number:guards]` guards
**Quality:** `INPUT[inlineSelect(option(elite), option(professional), option(adequate), option(poor), option(corrupt)):quality]`
**Captain:** [[Captain Name]]
**Notable Features:**
- 

---

## 💰 Economy

### Economic Status
**Prosperity:** `INPUT[inlineSelect(option(booming), option(prosperous), option(stable), option(struggling), option(impoverished)):prosperity]`
**Primary Industry:** `INPUT[text:industry]`
**Secondary Industries:**
- 
- 

### Trade
**Major Exports:**
1. 
2. 
3. 

**Major Imports:**
1. 
2. 
3. 

**Trade Routes:**
- To [[Settlement]]: Export/Import
- To [[Settlement]]: Export/Import

### Currency
**Accepted:** Standard (cp/sp/gp/pp)
**Local Currency:** 
**Exchange Rate:** 

### Taxation
**Tax Rate:** `INPUT[inlineSelect(option(none), option(low 5%), option(moderate 10%), option(high 15%), option(crushing 20%+)):tax_rate]`
**Special Taxes:**
- Gate tax: 
- Trade tax: 
- Magic tax: 

---

## 🗺️ Districts & Landmarks

### Major Districts

#### The Harbor District
**Description:** 
**Notable Locations:**
- [[05_Templates/Example_Campaign/Locations/The Salty Anchor Tavern]]
- [[05_Templates/Example_Campaign/Locations/Harbor Master's Office]]
**Atmosphere:** Busy, salty, dangerous at night
**Safety:** ⭐⭐⭐☆☆

#### Market Quarter
**Description:** 
**Notable Locations:**
- 
- 
**Atmosphere:** 
**Safety:** ⭐⭐⭐⭐☆

#### Noble Heights
**Description:** 
**Notable Locations:**
- 
- 
**Atmosphere:** 
**Safety:** ⭐⭐⭐⭐⭐

#### [Custom District]
**Description:** 
**Notable Locations:**
- 
- 
**Atmosphere:** 
**Safety:** ⭐⭐☆☆☆

### Important Locations

#### Government Buildings
- **[Building Name]**: Description
- **[Building Name]**: Description

#### Religious Sites
- **Temple of [Deity]**: Description
- **Shrine of [Deity]**: Description

#### Commercial
- **[Business Name]**: Type - Owner - Specialty
- **[Business Name]**: Type - Owner - Specialty

#### Entertainment
- **[Venue Name]**: Type - Clientele - Notable features
- **[Venue Name]**: Type - Clientele - Notable features

---

## 🛡️ Defenses

### Fortifications
**Walls:** `INPUT[inlineSelect(option(none), option(wooden palisade), option(stone walls), option(fortified stone), option(magical barriers)):walls]`
**Height:** `INPUT[number:height]` feet
**Condition:** `INPUT[inlineSelect(option(excellent), option(good), option(fair), option(poor), option(ruins)):condition]`

### Military Assets
- **Standing Army:** `INPUT[number:army]` soldiers
- **Militia:** `INPUT[number:militia]` (when called)
- **Navy:** `INPUT[number:ships]` ships
- **Special Forces:** 

### Strategic Resources
- **Weapons:** 
- **Food Stores:** 
- **Water Supply:** 
- **Magical Defenses:** 

---

## 🏪 Services & Amenities

### Inns & Taverns
| Name | Quality | Prices | Clientele | Notable Features |
|------|---------|---------|-----------|------------------|
| The [Name] | ⭐⭐⭐ | Moderate | Merchants | |
| The [Name] | ⭐⭐ | Cheap | Sailors | |
| The [Name] | ⭐⭐⭐⭐ | Expensive | Nobles | |

### Shops & Services

#### Weapons & Armor
- **[Shop Name]**: Stock level - Specialties - Max item value

#### Magic Items & Components
- **[Shop Name]**: Stock level - Specialties - Max item value

#### General Goods
- **[Shop Name]**: Stock level - Specialties

#### Specialty Services
- **Banking:** Available/Not available - Institution
- **Healing:** Temple/Healer - Services available
- **Information:** Broker name - Reliability
- **Transportation:** Types available - Destinations

### Guilds & Organizations
1. **[[Guild Name]]**
   - Services: 
   - Membership: Open/Restricted
   - Fees: 

2. **[[Guild Name]]**
   - Services: 
   - Membership: Open/Restricted
   - Fees: 

---

## 👥 Notable NPCs

### Power Players
- **[[NPC Name]]** - *Role* - Influence: ⭐⭐⭐⭐⭐
  - Motivation: 
  - Secret: 

- **[[NPC Name]]** - *Role* - Influence: ⭐⭐⭐⭐☆
  - Motivation: 
  - Secret: 

### Merchants & Services
- **[[NPC Name]]** - *Profession*
  - Specialty: 
  - Personality: 

### Underworld
- **[[NPC Name]]** - *Criminal Role*
  - Territory: 
  - Operations: 

### Other Notables
- **[[NPC Name]]** - *Role*
  - Quirk: 
  - Usefulness: 

---

## 🎭 Culture & Entertainment

### Local Customs
- **Greeting:** 
- **Taboos:** 
- **Superstitions:** 

### Festivals & Events
| Festival | Date | Description | Duration |
|----------|------|-------------|----------|
| | | | |

### Entertainment Venues
- **The [Name] Theater**: Plays, performances
- **The [Name] Arena**: Combat sports, contests
- **The [Name] Hall**: Music, dancing

### Food & Drink
**Local Specialties:**
- *[Dish Name]*: Description
- *[Drink Name]*: Description

**Tavern Fare:**
- Common meal: 3 sp
- Good meal: 1 gp  
- Feast: 5 gp

---

## 🌟 Adventures & Hooks

### Current Events
1. **Event**: Impact on city
2. **Event**: Impact on city
3. **Event**: Impact on city

### Rumors (d12)
| d12 | Rumor | Truth? |
|-----|-------|--------|
| 1 | | Maybe |
| 2 | | False |
| 3 | | True |
| 4 | | Partial |
| 5 | | False |
| 6 | | True |
| 7 | | Maybe |
| 8 | | True |
| 9 | | False |
| 10 | | Partial |
| 11 | | True |
| 12 | | DM's Choice |

### Immediate Opportunities
- **Help Wanted**: 
- **Missing Person**: 
- **Mysterious Event**: 

### Long-term Plots
- 
- 
- 

---

## 🏛️ History

### Founding
**Year Established:** 
**Founders:** 
**Original Purpose:** 

### Major Historical Events
- **[Year]**: Event - Impact
- **[Year]**: Event - Impact
- **[Year]**: Event - Impact

### Recent History
- 
- 
- 

---

## 🗺️ Surroundings

### Geography
**Terrain:** 
**Climate:** 
**Natural Resources:** 

### Nearby Locations
- **[[Location]]** - Distance - Relationship
- **[[Location]]** - Distance - Relationship
- **[[Location]]** - Distance - Relationship

### Regional Threats
- 
- 
- 

---

## 📋 Quick Reference

### City Statistics
- **AC** (for siege): 
- **HP** (for siege): 
- **Damage Threshold**: 

### Lifestyle Expenses
- **Wretched**: 0
- **Squalid**: 1 sp/day
- **Poor**: 2 sp/day
- **Modest**: 1 gp/day
- **Comfortable**: 2 gp/day
- **Wealthy**: 4 gp/day
- **Aristocratic**: 10+ gp/day

### Random Encounters (d20)
| d20 | Day Encounter | Night Encounter |
|-----|---------------|-----------------|
| 1-10 | Nothing | Nothing |
| 11-14 | City watch patrol | Drunk nobles |
| 15-16 | Pickpocket attempt | Thugs |
| 17-18 | Street merchant | City watch |
| 19 | Notable NPC | Mysterious figure |
| 20 | Special event | Dangerous encounter |

---

## DM Notes

### Secrets
> [!warning]- Hidden Information
> - 
> - 

### Plot Threads
- 
- 

### Customization Notes
- Adjust population numbers based on campaign
- Modify districts to fit setting
- Add/remove services as needed
- Scale defenses to party level