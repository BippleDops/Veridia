---
type: faction-tracker
tags: [faction, relationships, politics]
aliases: []
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
---

# Faction Relationship Tracker

> [!abstract] Campaign Faction Web
> Track the complex relationships between major factions in the Cerulean Archipelago

## 🕸️ Relationship Matrix

```dataview
TABLE 
	relationship AS "Relationship",
	tension AS "Tension (1-10)",
	recent_events AS "Recent Events"
FROM #faction
WHERE file.name != this.file.name
SORT relationship DESC
```

## 📊 Faction Overview

### Major Powers

#### [[Shadowhaven Merchant Marine]]
**Power:** ⭐⭐⭐⭐⭐
**Influence:** Trade, Naval, Political
**Leader:** Council of Merchants
**Status:** `INPUT[inlineSelect(option(Dominant), option(Strong), option(Neutral), option(Weakened), option(Threatened)):status]`

**Relationships:**
- [[Merchants Guild]]: 🟢 Allied (Trade partners)
- [[The Crimson Fleet]]: 🔴 Hostile (Pirates vs Trade)
- [[Port Celeste]]: 🟡 Rival (Competition)
- [[Temple of Divine Order]]: 🟢 Friendly (Protection deals)

**Current Tensions:** `INPUT[number(1-10):tension]`
**Recent Events:**
- [ ] Missing merchant vessels investigation
- [ ] Trade route negotiations
- [ ] New naval defenses

---

#### [[The Crimson Fleet]]
**Power:** ⭐⭐⭐⭐
**Influence:** Naval, Criminal, Fear
**Leader:** [[Captain Kaelen]]
**Status:** `INPUT[inlineSelect(option(Dominant), option(Strong), option(Neutral), option(Weakened), option(Threatened)):status]`

**Relationships:**
- [[Port Verran]]: 🔴 Hostile (Active raids)
- [[Shadowhaven Smugglers Ring]]: 🟡 Neutral (Mutual benefit)
- [[Cult of Screams]]: 🟡 Curious (Potential alliance?)
- [[Port Sorrow Trading Company]]: 🟢 Trading (Black market)

**Current Tensions:** `INPUT[number(1-10):tension]`
**Recent Events:**
- [ ] Raid on Port Verran
- [ ] Search for ancient artifact
- [ ] New captain recruited

---

#### [[Port Celeste]]
**Power:** ⭐⭐⭐⭐
**Influence:** Trade, Diplomatic, Cultural
**Leader:** Duke Aurelius
**Status:** `INPUT[inlineSelect(option(Dominant), option(Strong), option(Neutral), option(Weakened), option(Threatened)):status]`

**Relationships:**
- [[Shadowhaven]]: 🟡 Rival (Trade competition)
- [[Merchants Guild]]: 🟢 Allied (Trade agreements)
- [[The Order of the Azure Flame]]: 🟢 Patron (Funding)
- [[Investigators Anonymous]]: 🟡 Employs (Information)

**Current Tensions:** `INPUT[number(1-10):tension]`
**Recent Events:**
- [ ] New trade agreements
- [ ] Diplomatic summit planned
- [ ] Espionage suspected

---

### Faction Tension Tracker

| Faction 1 | Faction 2 | Tension | Trend | Flash Point |
|-----------|-----------|---------|--------|-------------|
| Shadowhaven | Port Celeste | 6/10 | Rising ↗️ | Trade routes |
| Crimson Fleet | Port Verran | 9/10 | Stable → | Open warfare |
| Merchants Guild | Thieves Guild | 7/10 | Rising ↗️ | Black market |
| Temple | Cult of Screams | 10/10 | Critical ⚠️ | Religious war |
| Dockworkers | Port Authority | 8/10 | Rising ↗️ | Strike threat |

## 🎯 Faction Goals

### Economic Goals
- **Shadowhaven**: Maintain trade dominance
- **Port Celeste**: Expand eastern routes
- **Merchants Guild**: Standardize currency
- **Crimson Fleet**: Control shipping lanes

### Political Goals
- **Noble Houses**: Increase council seats
- **Temple**: Religious authority
- **Thieves Guild**: Legitimacy
- **Investigators**: Information monopoly

### Military Goals
- **Naval Forces**: Pirate eradication
- **Crimson Fleet**: Naval supremacy
- **Mercenary Companies**: Contracts
- **City Guards**: Order maintenance

## 📈 Power Dynamics

### Current Power Balance
```
Shadowhaven Merchants: ████████████ 40%
Port Celeste: ███████████ 35%
Crimson Fleet: ██████ 15%
Minor Factions: ████ 10%
```

### Shifting Alliances
- [ ] **Proposed**: Shadowhaven-Ironhold naval treaty
- [ ] **Rumored**: Crimson Fleet-Cult alliance
- [ ] **Breaking**: Port Celeste-Merchant Guild tensions
- [ ] **Secret**: Thieves Guild double agents

## 🔮 Faction Events

### Upcoming Events
1. **Trade Summit** (5 days)
   - Attendees: Major merchant factions
   - Issues: Route rights, tariffs
   - Sabotage risk: High

2. **Naval Exercises** (2 weeks)
   - Participants: Shadowhaven, Port Celeste
   - Purpose: "Training"
   - Real purpose: Show of force

3. **Harvest Festival** (1 month)
   - All factions attend
   - Neutral ground
   - Perfect for intrigue

### Recent Developments
- Crimson Fleet spotted near Port Celeste
- New Merchant Guild regulations anger smugglers
- Temple condemns Cult practices publicly
- Mysterious benefactor funding Investigators

## 🎭 Player Interactions

### Reputation Tracker
| Faction | Standing | Reputation Points | Rank |
|---------|----------|-------------------|------|
| Shadowhaven | Neutral | 0 | Unknown |
| Crimson Fleet | Hostile | -10 | Enemy |
| Merchants Guild | Friendly | +5 | Associate |
| Temple | Neutral | 0 | Unknown |

### Available Faction Missions
- **Shadowhaven**: Investigate missing ships
- **Port Celeste**: Diplomatic courier
- **Thieves Guild**: Steal trade documents
- **Temple**: Root out cult members

### Faction Benefits by Rank
1. **Unknown** (0): No benefits
2. **Known** (+5): Basic information
3. **Associate** (+10): Minor favors
4. **Ally** (+20): Major assistance
5. **Champion** (+50): Faction resources

## 🗺️ Territory Control

### Shadowhaven Influence
- Harbor District: 90%
- Merchant Quarter: 85%
- Noble Heights: 60%
- Shadow Market: 30%

### Port Celeste Influence
- Eastern Trade Routes: 70%
- Diplomatic Quarter: 95%
- Cultural Centers: 80%
- Information Networks: 50%

### Disputed Territories
- Merchant's Rest Island
- Northern Trade Routes
- Warehouse Districts
- Underground Markets

## ⚔️ Conflict Predictions

### Likely Conflicts (Next Month)
1. **Trade War**: Shadowhaven vs Port Celeste (70%)
2. **Pirate Raids**: Crimson Fleet vs Everyone (90%)
3. **Religious Conflict**: Temple vs Cult (80%)
4. **Worker Strike**: Dockworkers vs Authority (60%)

### Potential Alliances
- Shadowhaven + Ironhold (Military)
- Port Celeste + Southern Cities (Trade)
- Criminals + Pirates (Mutual benefit)
- Temple + Nobles (Traditional values)

## 📜 Historical Context

### The Trade Wars (10 years ago)
- Shadowhaven emerged dominant
- Port Celeste lost western routes
- Seeds of current rivalry

### The Pirate Uprising (5 years ago)
- Crimson Fleet formed
- Naval forces weakened
- New balance of power

### Recent Shifts (1 year ago)
- Cult of Screams emerges
- Missing ships begin
- Tensions escalate

---

## DM Tools

### Faction Turn Actions
Each week, factions take actions:
1. Roll d6 for each major faction
2. Consult action table
3. Adjust relationships accordingly

| d6 | Action Type |
|----|-------------|
| 1 | Aggressive (Attack/Raid) |
| 2 | Expansion (Territory/Influence) |
| 3 | Diplomatic (Alliance/Treaty) |
| 4 | Economic (Trade/Sabotage) |
| 5 | Intelligence (Spy/Investigate) |
| 6 | Internal (Strengthen/Reorganize) |

### Random Faction Events
`dice: [[Random Tables#Faction Events]]`

### Reputation Adjustments
- Minor favor: +2 points
- Major quest: +5 points
- Betrayal: -10 points
- Enemy of enemy: +1 point