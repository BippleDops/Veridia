---
type: combat-encounter
tags: [combat, encounter]
aliases: []
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
encounter_name: "<% tp.file.title %>"
difficulty: medium
environment: ""
trigger: ""
location: ""
cr_total: 0
xp_total: 0
party_level: 1
party_size: 4
---

# <% tp.file.title %>

> [!danger] Combat Encounter
> **Difficulty:** `INPUT[inlineSelect(option(easy), option(medium), option(hard), option(deadly)):difficulty]`
> **Environment:** `INPUT[text:environment]`
> **Total CR:** `INPUT[number:cr_total]`
> **Total XP:** `INPUT[number:xp_total]`

## 🎯 Encounter Overview

**Trigger:** `INPUT[text:trigger]`
**Location:** [[`INPUT[suggester(tp.system.getFiles().filter(f => f.path.includes("Locations")).map(f => f.basename)):location]`]]

### Encounter Objectives
- [ ] Primary: 
- [ ] Secondary: 
- [ ] Hidden: 

## ⚔️ Initiative Tracker

```initiative-tracker
name: <% tp.file.title %>
party:
  - name: Player 1
    hp: 0
    ac: 0
    initiative: 0
    status: []
  - name: Player 2
    hp: 0
    ac: 0
    initiative: 0
    status: []
  - name: Player 3
    hp: 0
    ac: 0
    initiative: 0
    status: []
  - name: Player 4
    hp: 0
    ac: 0
    initiative: 0
    status: []
creatures:
  - name: Enemy 1
    hp: 0
    ac: 0
    initiative: 0
    cr: 0
    status: []
```

## 🐉 Combatants

### Enemies

#### Enemy Type 1
- **Quantity:** `INPUT[number:1]`
- **HP:** `INPUT[text:hp]` per creature
- **AC:** `INPUT[number:ac]`
- **CR:** `INPUT[text:cr]`
- **Notable Abilities:**
  - 
- **Tactics:**
  - 

### Environmental Hazards
- [ ] Difficult Terrain
- [ ] Cover Available
- [ ] Environmental Damage
- [ ] Special Conditions

**Details:**

## 🗺️ Battle Map

![[battle-map-placeholder.png]]

### Map Features
- **Dimensions:** 
- **Important Features:**
  - 
- **Cover Locations:**
  - 
- **Hazards:**
  - 

## 📊 Difficulty Scaling

### Easy (Party Level -1)
- Reduce enemy HP by 20%
- Remove 1 enemy
- Reduce damage dice by 1 step

### Hard (Party Level +1)
- Add 1 enemy
- Increase HP by 20%
- Add legendary/lair actions

### Deadly (Party Level +2)
- Add 2 enemies
- Increase HP by 40%
- Add environmental hazards
- Full legendary/lair actions

## 💎 Treasure

### Individual Treasure
`dice: [[Loot Tables#Individual Treasure]]`

### Hoard Treasure
`dice: [[Loot Tables#Treasure Hoard]]`

### Unique Items
- 

## 📝 DM Notes

### Running the Combat
- **Opening Moves:**
- **Mid-Combat Events:**
- **Retreat Conditions:**

### Roleplay Opportunities
- 

### Connections
- **Quest Ties:** 
- **NPC Relations:** 
- **Future Hooks:** 

## 🎭 Post-Combat

### Victory
- 
### Defeat
- 
### Negotiation
- 

---

## Quick Reference

> [!tip] Combat Actions
> - **Attack:** Roll d20 + modifiers vs AC
> - **Dodge:** Disadvantage on attacks against you
> - **Dash:** Double movement
> - **Help:** Give advantage to ally
> - **Hide:** Stealth check
> - **Ready:** Prepare action with trigger