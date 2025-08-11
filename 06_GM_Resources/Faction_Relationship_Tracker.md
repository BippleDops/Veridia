---
tags:
  - gm-tool
  - factions
  - relationships
  - tracking
  - politics
status: "complete"
type: "tool"
created: 2025-01-10
---

# Faction Relationship Tracker

*Navigate the treacherous waters of inter-faction politics*

## Overview

The Faction Relationship Tracker is a dynamic system for monitoring the complex web of alliances, rivalries, and tensions between the various factions of Aquabyssos and Aethermoor. As player actions ripple through the political landscape, this tool helps GMs track both faction standings with the party and inter-faction relationships that affect the world.

## Current Faction Status Matrix

### Party Standing with Factions

| Faction | Current Standing | Reputation | Trend | Recent Event |
|---------|-----------------|------------|-------|---------------|
| **Parliament of Echoes** | Neutral | 0 | → | Initial contact |
| **Coral Throne Syndicate** | Suspicious | -5 | ↓ | Disrupted smuggling |
| **The Reconcilers** | Friendly | +8 | ↑ | Helped refugees |
| **Deep Mother Cult** | Unknown | 0 | → | No contact |
| **Crystal Court** | Hostile | -12 | ↓ | Killed agent |
| **Sky Guard** | Allied | +15 | ↑ | Saved commander |
| **Merchant Consortium** | Neutral | +2 | → | Completed trade |
| **Whispering Way** | Watched | +3 | ↑ | Shared information |
| **Shadow Parliament** | Unknown | 0 | → | Unaware of party |
| **Pressure Forged** | Neutral | 0 | → | No interaction |

### Standing Levels
- **Nemesis** (-30 to -21): Active elimination attempts
- **Hostile** (-20 to -11): Attack on sight
- **Suspicious** (-10 to -6): Watched, restricted
- **Neutral** (-5 to +5): Standard treatment
- **Friendly** (+6 to +10): Minor benefits
- **Allied** (+11 to +20): Major support
- **Champion** (+21 to +30): Full resources

## Inter-Faction Relationships

### Relationship Heat Map

```
         PRL CTS REC DMC CCT SKG MRC WSP SHP PRF
    PRL  [0] [-2] [+1] [-3] [-1] [0] [+1] [+2] [-1] [0]
    CTS  [-2] [0] [-3] [+2] [+1] [-2] [+3] [-1] [+1] [+1]
    REC  [+1] [-3] [0] [-3] [-2] [+2] [0] [+1] [0] [+2]
    DMC  [-3] [+2] [-3] [0] [+3] [-3] [0] [+1] [+2] [-1]
    CCT  [-1] [+1] [-2] [+3] [0] [+2] [+2] [-1] [+1] [-2]
    SKG  [0] [-2] [+2] [-3] [+2] [0] [+1] [-1] [-2] [+1]
    MRC  [+1] [+3] [0] [0] [+2] [+1] [0] [0] [0] [+2]
    WSP  [+2] [-1] [+1] [+1] [-1] [-1] [0] [0] [+3] [0]
    SHP  [-1] [+1] [0] [+2] [+1] [-2] [0] [+3] [0] [-1]
    PRF  [0] [+1] [+2] [-1] [-2] [+1] [+2] [0] [-1] [0]
```

**Key**: -3 (War) | -2 (Hostile) | -1 (Tense) | 0 (Neutral) | +1 (Cordial) | +2 (Allied) | +3 (Merged)

### Active Conflicts
1. **Deep Mother Cult vs Sky Guard**: Religious war
2. **Coral Throne vs Reconcilers**: Trade dispute
3. **Parliament vs Deep Mother**: Ideological opposition

### Active Alliances
1. **Merchant Consortium + Coral Throne**: Trade agreement
2. **Whispering Way + Shadow Parliament**: Information sharing
3. **Reconcilers + Pressure Forged**: Mutual defense

## Faction Action Tracker

### This Month's Faction Actions

| Faction | Action | Target | Success | Consequence |
|---------|--------|--------|---------|-------------|
| **Parliament** | Diplomatic mission | Reconcilers | Pending | +1 relationship if success |
| **Coral Throne** | Smuggling operation | Sky Guard | Failed | -1 with Sky Guard |
| **Deep Mother** | Recruitment drive | All | Partial | +2 members, -1 all factions |
| **Crystal Court** | Assassinate | Parliament leader | Unknown | War if discovered |
| **Merchant** | Trade expansion | Neutral zones | Success | +wealth, +influence |

### Faction Resources

| Faction | Military | Economic | Political | Magical | Intelligence |
|---------|----------|----------|-----------|---------|--------------|
| **Parliament** | ●●●○○ | ●●●●○ | ●●●●● | ●●●○○ | ●●●●○ |
| **Coral Throne** | ●●●●○ | ●●●●● | ●●○○○ | ●●○○○ | ●●●○○ |
| **Reconcilers** | ●●○○○ | ●●●○○ | ●●●○○ | ●●●●○ | ●●○○○ |
| **Deep Mother** | ●●●○○ | ●○○○○ | ●●○○○ | ●●●●● | ●●●○○ |
| **Crystal Court** | ●●○○○ | ●●●●○ | ●●●●○ | ●●●●○ | ●●○○○ |
| **Sky Guard** | ●●●●● | ●●●○○ | ●●●○○ | ●●○○○ | ●●●○○ |

## Reputation Mechanics

### Gaining Reputation
| Action | Reputation Change | Notes |
|--------|------------------|-------|
| Complete faction quest | +2 to +5 | Based on difficulty |
| Public support | +1 | Once per month max |
| Donate resources | +1 per 1000gp | Diminishing returns |
| Share intelligence | +1 to +3 | Based on value |
| Defeat faction enemy | +2 to +4 | Must be significant |
| Save faction member | +1 to +3 | Based on importance |

### Losing Reputation
| Action | Reputation Change | Notes |
|--------|------------------|-------|
| Fail faction quest | -2 to -5 | Based on severity |
| Public opposition | -1 | Accumulates |
| Work with enemies | -3 to -5 | Per incident |
| Betray secrets | -5 to -10 | Based on importance |
| Kill faction member | -5 to -15 | Based on rank |
| Destroy faction property | -2 to -8 | Based on value |

### Reputation Decay
- Reputation moves toward 0 by 1 point per month of no interaction
- Negative reputation decays faster than positive
- Champion/Nemesis status doesn't decay

## Faction Goals & Motivations

### Current Faction Objectives

| Faction | Public Goal | Secret Goal | Method |
|---------|------------|-------------|--------|
| **Parliament** | Maintain order | Control Convergence | Legislation |
| **Coral Throne** | Dominate trade | Rule Aquabyssos | Economic warfare |
| **Reconcilers** | Unite realms | Prevent war | Diplomacy |
| **Deep Mother** | Spread faith | Awaken Mother | Corruption |
| **Crystal Court** | Preserve nobility | Possess Queen | Manipulation |
| **Sky Guard** | Protect realm | Military coup | Force |
| **Merchants** | Free trade | Monopoly | Negotiation |
| **Whispering** | Share knowledge | Control information | Secrets |
| **Shadow Parl** | Hidden governance | Replace Parliament | Subterfuge |
| **Pressure** | Worker rights | Revolution | Strikes |

## Faction Interaction Rules

### Alliance Formation
Requirements for alliance:
- Relationship +2 or higher
- Shared enemy or goal
- Successful diplomacy (DC 15+)
- No conflicting alliances

### Conflict Escalation
Stages of conflict:
1. **Tension** (-1): Trade restrictions
2. **Hostility** (-2): Skirmishes, sabotage
3. **War** (-3): Open conflict

### Faction Merger
When relationship reaches +3:
- Factions begin sharing resources
- Leadership considers unification
- Members intermingle
- Possible full merger

## PC Influence on Factions

### Direct Actions
| PC Action | Faction Effect | Ripple Effects |
|-----------|---------------|----------------|
| Assassination | Target -1 Military | Allies investigate |
| Sabotage | Target -1 Economic | Increased security |
| Diplomacy | +1 relationship | Other factions notice |
| Information | +1 Intelligence | Secrets spread |
| Public speech | +/-1 Political | Public opinion shifts |

### Indirect Influence
- Completing quests affects faction resources
- Spreading rumors changes relationships
- Economic actions affect faction wealth
- Military actions shift power balance

## Faction Event Generator

### Random Faction Event (d20)

| Roll | Event | Effect |
|------|-------|--------|
| 1-2 | Alliance forms | Two factions merge interests |
| 3-4 | War declared | Open conflict begins |
| 5-6 | Coup attempt | Leadership challenged |
| 7-8 | Economic crisis | -1 Economic all factions |
| 9-10 | Resource discovery | +1 Economic to discoverer |
| 11-12 | Scandal exposed | -1 Political to target |
| 13-14 | Hero emerges | +1 Military to faction |
| 15-16 | Plague/disaster | -1 to all resources |
| 17-18 | Technological advance | +1 Magical to inventor |
| 19 | Prophecy revealed | All factions react |
| 20 | Convergence event | Reality shift affects all |

## Using the Tracker

### Session Prep
1. Roll for faction actions
2. Check relationship changes
3. Update party reputation
4. Generate faction events
5. Plan faction responses

### During Play
- Track PC actions affecting factions
- Note reputation changes immediately
- Roll faction reactions as needed
- Telegraph faction movements

### Between Sessions
- Process faction actions
- Calculate reputation decay
- Advance faction plots
- Update relationship matrix

## Quick Resolution Systems

### Faction Negotiation
**Base DC**: 15
**Modifiers**:
- Per point of positive reputation: -1
- Per point of negative reputation: +1
- Offering valuable trade: -2
- Asking for military aid: +3
- Previous betrayal: +5

### Faction Combat
**Simple Resolution**:
- Compare Military scores
- Roll 1d6 per point
- Highest total wins
- Loser loses 1 Military

### Information Warfare
**Spy vs Counter-spy**:
- Intelligence vs Intelligence
- Winner learns one secret
- Loser loses 1 Political

## Faction Reputation Rewards

### Benefits by Standing

| Standing | Benefits |
|----------|----------|
| **Friendly** | 10% discount, minor information, safe passage |
| **Allied** | 25% discount, faction safe houses, minor aid |
| **Champion** | 50% discount, faction resources, major support |

### Faction-Specific Rewards

| Faction | Unique Benefit |
|---------|---------------|
| **Parliament** | Legal immunity |
| **Coral Throne** | Black market access |
| **Reconcilers** | Diplomatic immunity |
| **Deep Mother** | Eldritch powers |
| **Crystal Court** | Noble title |
| **Sky Guard** | Military backup |
| **Merchants** | Trade routes |
| **Whispering** | Secret knowledge |
| **Shadow** | Hidden influence |
| **Pressure** | Worker support |

## Campaign Integration

### Early Campaign
- Introduce 3-4 factions
- Simple reputation tracking
- Clear faction identities
- Binary choices

### Mid Campaign  
- All factions active
- Complex relationships
- Reputation consequences
- Multiple allegiances

### Late Campaign
- Faction war/merger
- Party chooses side
- World-changing events
- Final alliances

## Quick Reference Card

### Reputation Change Cheat Sheet
- **Quest**: +2 to +5 / -2 to -5
- **Public**: +1 / -1
- **Combat**: +2 to +4 / -5 to -15
- **Betrayal**: -5 to -10
- **Monthly Decay**: ±1 toward 0

### Relationship Levels
- **+3**: Merged
- **+2**: Allied
- **+1**: Cordial
- **0**: Neutral
- **-1**: Tense
- **-2**: Hostile
- **-3**: War

---

*"In the game of factions, every friend is a future enemy, every enemy a potential ally, and neutrality is the most dangerous position of all."*