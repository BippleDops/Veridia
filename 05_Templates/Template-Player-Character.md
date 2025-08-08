---
type: player-character
tags: [pc, character, player]
aliases: []
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
character_name: "<% tp.file.title %>"
player_name: ""
class: fighter
level: 1
race: human
background: sailor
alignment: neutral
status: active
---

# <% tp.file.title %>

> [!infobox]
> # <% tp.file.title %>
> ![[<% tp.file.title.toLowerCase().replace(/ /g, "_") %>_portrait.jpg]]
> ###### Basic Information
> | | |
> |---|---|
> | **Player** | `INPUT[text:player_name]` |
> | **Class** | `INPUT[text:class]` Level `INPUT[number:level]` |
> | **Race** | `INPUT[text:race]` |
> | **Background** | `INPUT[text:background]` |
> | **Alignment** | `INPUT[inlineSelect(option(LG), option(NG), option(CG), option(LN), option(N), option(CN), option(LE), option(NE), option(CE)):alignment]` |

## 📊 Character Stats

### Ability Scores
| Ability | Score | Modifier | Save Prof | Save Bonus |
|---------|-------|----------|-----------|------------|
| **STR** | `INPUT[number:str_score]` | `VIEW[{str_score:0}-10/2]` | `INPUT[toggle:str_save]` | `VIEW[{str_score:0}-10/2+({str_save}?{proficiency}:0)]` |
| **DEX** | `INPUT[number:dex_score]` | `VIEW[{dex_score:0}-10/2]` | `INPUT[toggle:dex_save]` | `VIEW[{dex_score:0}-10/2+({dex_save}?{proficiency}:0)]` |
| **CON** | `INPUT[number:con_score]` | `VIEW[{con_score:0}-10/2]` | `INPUT[toggle:con_save]` | `VIEW[{con_score:0}-10/2+({con_save}?{proficiency}:0)]` |
| **INT** | `INPUT[number:int_score]` | `VIEW[{int_score:0}-10/2]` | `INPUT[toggle:int_save]` | `VIEW[{int_score:0}-10/2+({int_save}?{proficiency}:0)]` |
| **WIS** | `INPUT[number:wis_score]` | `VIEW[{wis_score:0}-10/2]` | `INPUT[toggle:wis_save]` | `VIEW[{wis_score:0}-10/2+({wis_save}?{proficiency}:0)]` |
| **CHA** | `INPUT[number:cha_score]` | `VIEW[{cha_score:0}-10/2]` | `INPUT[toggle:cha_save]` | `VIEW[{cha_score:0}-10/2+({cha_save}?{proficiency}:0)]` |

### Combat Stats
| Stat | Value | Notes |
|------|-------|-------|
| **Armor Class** | `INPUT[number:ac]` | `INPUT[text:ac_notes]` |
| **Initiative** | `VIEW[{dex_score:0}-10/2]` | Dex modifier |
| **Speed** | `INPUT[number:speed]` ft | `INPUT[text:speed_notes]` |
| **Proficiency** | `INPUT[number:proficiency]` | Based on level |

### Hit Points
**Hit Point Maximum**: `INPUT[number:hp_max]`
**Current Hit Points**: `INPUT[number:hp_current]` / `VIEW[{hp_max}]`
**Temporary HP**: `INPUT[number:hp_temp]`
**Hit Dice**: `INPUT[text:hit_dice]` (d`INPUT[number:hit_die_size]`)
**Death Saves**: Successes `INPUT[number:death_success]`/3 | Failures `INPUT[number:death_fails]`/3

---

## 🎯 Skills

| Skill | Ability | Prof | Bonus | Skill | Ability | Prof | Bonus |
|-------|---------|------|-------|-------|---------|------|-------|
| Acrobatics | DEX | `INPUT[toggle:acrobatics]` | `VIEW[{dex_score:0}-10/2+({acrobatics}?{proficiency}:0)]` | Medicine | WIS | `INPUT[toggle:medicine]` | `VIEW[{wis_score:0}-10/2+({medicine}?{proficiency}:0)]` |
| Animal Handling | WIS | `INPUT[toggle:animal_handling]` | `VIEW[{wis_score:0}-10/2+({animal_handling}?{proficiency}:0)]` | Nature | INT | `INPUT[toggle:nature]` | `VIEW[{int_score:0}-10/2+({nature}?{proficiency}:0)]` |
| Arcana | INT | `INPUT[toggle:arcana]` | `VIEW[{int_score:0}-10/2+({arcana}?{proficiency}:0)]` | Perception | WIS | `INPUT[toggle:perception]` | `VIEW[{wis_score:0}-10/2+({perception}?{proficiency}:0)]` |
| Athletics | STR | `INPUT[toggle:athletics]` | `VIEW[{str_score:0}-10/2+({athletics}?{proficiency}:0)]` | Performance | CHA | `INPUT[toggle:performance]` | `VIEW[{cha_score:0}-10/2+({performance}?{proficiency}:0)]` |
| Deception | CHA | `INPUT[toggle:deception]` | `VIEW[{cha_score:0}-10/2+({deception}?{proficiency}:0)]` | Persuasion | CHA | `INPUT[toggle:persuasion]` | `VIEW[{cha_score:0}-10/2+({persuasion}?{proficiency}:0)]` |
| History | INT | `INPUT[toggle:history]` | `VIEW[{int_score:0}-10/2+({history}?{proficiency}:0)]` | Religion | INT | `INPUT[toggle:religion]` | `VIEW[{int_score:0}-10/2+({religion}?{proficiency}:0)]` |
| Insight | WIS | `INPUT[toggle:insight]` | `VIEW[{wis_score:0}-10/2+({insight}?{proficiency}:0)]` | Sleight of Hand | DEX | `INPUT[toggle:sleight_of_hand]` | `VIEW[{dex_score:0}-10/2+({sleight_of_hand}?{proficiency}:0)]` |
| Intimidation | CHA | `INPUT[toggle:intimidation]` | `VIEW[{cha_score:0}-10/2+({intimidation}?{proficiency}:0)]` | Stealth | DEX | `INPUT[toggle:stealth]` | `VIEW[{dex_score:0}-10/2+({stealth}?{proficiency}:0)]` |
| Investigation | INT | `INPUT[toggle:investigation]` | `VIEW[{int_score:0}-10/2+({investigation}?{proficiency}:0)]` | Survival | WIS | `INPUT[toggle:survival]` | `VIEW[{wis_score:0}-10/2+({survival}?{proficiency}:0)]` |

**Passive Perception**: `VIEW[10+{wis_score:0}-10/2+({perception}?{proficiency}:0)]`
**Passive Investigation**: `VIEW[10+{int_score:0}-10/2+({investigation}?{proficiency}:0)]`

---

## ⚔️ Attacks & Spellcasting

### Weapons
| Weapon | Atk Bonus | Damage | Type | Range | Notes |
|--------|-----------|---------|------|-------|-------|
| `INPUT[text:weapon1]` | `INPUT[text:atk1]` | `INPUT[text:dmg1]` | `INPUT[text:type1]` | `INPUT[text:range1]` | `INPUT[text:notes1]` |
| `INPUT[text:weapon2]` | `INPUT[text:atk2]` | `INPUT[text:dmg2]` | `INPUT[text:type2]` | `INPUT[text:range2]` | `INPUT[text:notes2]` |
| `INPUT[text:weapon3]` | `INPUT[text:atk3]` | `INPUT[text:dmg3]` | `INPUT[text:type3]` | `INPUT[text:range3]` | `INPUT[text:notes3]` |

### Spellcasting
**Spellcasting Ability**: `INPUT[inlineSelect(option(None), option(INT), option(WIS), option(CHA)):spell_ability]`
**Spell Save DC**: `INPUT[number:spell_dc]`
**Spell Attack Bonus**: `INPUT[number:spell_attack]`

#### Spell Slots
| Level | Slots Total | Slots Used | Level | Slots Total | Slots Used |
|-------|-------------|------------|-------|-------------|------------|
| 1st | `INPUT[number:slots_1]` | `INPUT[number:used_1]` | 6th | `INPUT[number:slots_6]` | `INPUT[number:used_6]` |
| 2nd | `INPUT[number:slots_2]` | `INPUT[number:used_2]` | 7th | `INPUT[number:slots_7]` | `INPUT[number:used_7]` |
| 3rd | `INPUT[number:slots_3]` | `INPUT[number:used_3]` | 8th | `INPUT[number:slots_8]` | `INPUT[number:used_8]` |
| 4th | `INPUT[number:slots_4]` | `INPUT[number:used_4]` | 9th | `INPUT[number:slots_9]` | `INPUT[number:used_9]` |
| 5th | `INPUT[number:slots_5]` | `INPUT[number:used_5]` | | | |

---

## 🎒 Equipment

### Currency
| Coin | Amount |
|------|--------|
| CP | `INPUT[number:cp]` |
| SP | `INPUT[number:sp]` |
| GP | `INPUT[number:gp]` |
| PP | `INPUT[number:pp]` |

**Total Value**: `VIEW[{cp:0}/100+{sp:0}/10+{gp:0}+{pp:0}*10]` gp

### Inventory
| Item | Quantity | Weight | Location | Notes |
|------|----------|--------|----------|-------|
| | | | | |
| | | | | |
| | | | | |

**Carrying Capacity**: `VIEW[{str_score:0}*15]` lbs
**Current Weight**: `INPUT[number:weight]` lbs
**Encumbrance**: `VIEW[{weight:0}>{str_score:0}*15?"Encumbered":"Normal"]`

### Magic Items
1. **Item Name**: Description, attunement required?
2. 
3. 

---

## 🌟 Features & Traits

### Racial Traits
- 

### Class Features
- 

### Background Feature
- 

### Feats
- 

---

## 📖 Backstory & Roleplay

### Appearance
**Age**: `INPUT[number:age]` | **Height**: `INPUT[text:height]` | **Weight**: `INPUT[text:weight]`
**Eyes**: `INPUT[text:eyes]` | **Hair**: `INPUT[text:hair]` | **Skin**: `INPUT[text:skin]`

**Distinguishing Features**:
- 

### Personality
**Personality Traits**:
- 
- 

**Ideals**:
- 

**Bonds**:
- 

**Flaws**:
- 

### Backstory
`INPUT[textArea:backstory]`

### Goals & Motivations
**Short-term Goals**:
- 

**Long-term Goals**:
- 

**Fears**:
- 

---

## 🤝 Relationships

### Party Members
- **[[Character Name]]**: Relationship description
- 

### Important NPCs
- **[[NPC Name]]**: Relationship, how met
- 

### Organizations
- **[[Faction Name]]**: Standing, rank/role
- 

---

## 📜 Character Development

### Session Notes
```dataview
TABLE session_number as "Session", date_played as "Date", file.link as "Notes"
FROM #session
WHERE contains(characters_present, this.character_name)
SORT session_number DESC
LIMIT 10
```

### Character Arc Milestones
- [ ] 
- [ ] 
- [ ] 

### Memorable Moments
- **Session X**: What happened
- 

### Deaths & Resurrections
- 

---

## 🎯 Quick Reference

### Combat Actions
- **Attack**: Roll d20 + proficiency + ability mod
- **Damage**: Roll weapon dice + ability mod
- **Save DC**: 8 + proficiency + ability mod

### Conditions Tracker
- [ ] Blinded
- [ ] Charmed
- [ ] Deafened
- [ ] Exhaustion (Level: ___)
- [ ] Frightened
- [ ] Grappled
- [ ] Incapacitated
- [ ] Invisible
- [ ] Paralyzed
- [ ] Petrified
- [ ] Poisoned
- [ ] Prone
- [ ] Restrained
- [ ] Stunned
- [ ] Unconscious

### Resources Tracker
**Hit Dice Remaining**: ___/___
**Inspiration**: `INPUT[toggle:inspiration]`
**Lucky Points**: ___/3
**Action Surge**: ___/___
**Second Wind**: ___/___
**Other**: ___/___

---

## 💰 Treasure & Rewards Log

### Treasure Gained
| Session | Items/Gold | From | Notes |
|---------|------------|------|-------|
| | | | |

### Items Crafted/Lost
| Session | Item | Action | Notes |
|---------|------|--------|-------|
| | | | |

---

## 📋 Player Notes

### Session Prep
- Questions for DM:
- Things to remember:
- Goals for next session:

### Campaign Notes
`INPUT[textArea:campaign_notes]`

### Private Notes
> [!note]- Player Only
> `INPUT[textArea:private_notes]`

---

## 🎲 Dice Roller Integration

`dice: 1d20 + {proficiency} + {str_score}-10/2|Attack Roll (STR)`
`dice: 1d20 + {proficiency} + {dex_score}-10/2|Attack Roll (DEX)`
`dice: 1d20 + {proficiency} + {wis_score}-10/2 + {perception}*{proficiency}|Perception Check`

---

*Character sheet v2.0 - Compatible with D&D 5e*
*Last updated: <% tp.date.now("YYYY-MM-DD HH:mm") %>*