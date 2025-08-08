---
tags: [dashboard]
---

# 🎲 Master Campaign Control Center
> *Powered by Obsidian Bases 1.9.7 with full relationship linking*

---

## 📊 Quick Stats
- **Current Session:** 
- **Active Quests:** Check quest tracker below
- **Party Location:** 
- **Days in Campaign:** 
- **Next Session:** 

---

## ⚔️ Combat Management
Real-time initiative tracking with NPC links and threat assessment.

combat-tracker.base

**Quick Actions:**
- ⚔️ New Encounter
- Set `combat_status: "active"` to begin tracking

---

## 👥 NPC Network
Complete NPC database with relationship tracking and quest associations.

npc-roster.base

**Quick Actions:**
- 👤 Create NPC
- View NPC connections in Relationship Graph below

---

## 📜 Quest Management
Track all quests with prerequisites, NPC links, and urgency levels.

quest-tracker.base

**Quick Actions:**
- 🎯 New Quest
- Urgent quests auto-highlight when deadline < 3 days

---

## 🗺️ Location Database
All locations with population, danger levels, and quest activity.

location-tracker.base

**Quick Actions:**
- 📍 New Location
- Track NPC residents and active quests per location

---

## 🕸️ Relationship Web
Visualize all connections between NPCs, PCs, and factions.

relationship-graph.base

**Features:**
- Tracks allies, enemies, and neutral relationships
- Shows influence networks and faction affiliations
- Monitors romantic and family connections

---

## 📅 Campaign Timeline
Complete session history with NPC appearances and quest progress.

campaign-dashboard.base

**Quick Actions:**
- 📝 New Session
- Auto-tracks attendance and participation

---

## 🎯 GM Quick Tools

### Session Prep Checklist
- [ ] Review active quests and prerequisites
- [ ] Check NPC dispositions and relationships
- [ ] Update location events and encounters
- [ ] Prepare combat encounters with linked NPCs
- [ ] Review last session's consequences
- [ ] Set up quest progression triggers
- [ ] Update faction influences

### Quick References
| Tool | Purpose | Hotkey |
|------|---------|--------|
| [[03_Rules_Reference\|📖 Rules]] | Game mechanics | |
| [[06_GM_Resources\|🎭 GM Tools]] | Random tables | |
| [[02_Worldbuilding\|🗺️ World Lore]] | Setting info | |
| Dice Roller | Roll dice | `/roll` |

### Relationship Management
- **Update Dispositions:** Edit NPC `disposition` property (-10 to +10)
- **Link Relationships:** Use `NPC Name` in `relationships` property
- **Track Quests:** Link NPCs to quests via `related_quests` property
- **Location Residents:** Set NPC `location` to `[[Location Name]]`

### Quest Dependency Tracking
- **Prerequisites:** Use `prerequisite_quests` to create quest chains
- **Auto-blocking:** Quests with unmet prerequisites auto-hide from active view
- **Completion chain:** Completing quests automatically updates dependent quests

---

## 📈 Campaign Analytics

### Most Connected Entities
Check Relationship Graph for centrality scores

### Quest Completion Rate
View in Quest Tracker's completion percentage

### Location Visit Frequency
See Location Database for visit counts

### NPC Interaction History
Track via `last_encounter` links in NPC notes

---

## 🔧 Advanced Features (v1.9.7)

### New Capabilities
- **file.backlinks** - Track all references to any entity
- **Link.asFile()** - Access properties from linked files
- **Cards View** - Visual galleries for NPCs and locations
- **Image Properties** - Display portraits and maps
- **Formula Autocomplete** - Easier formula creation
- **Relationship Chaining** - Multi-level relationship tracking

### Linking Best Practices
1. Always use `[[]]` for entity links in properties
2. Set bidirectional relationships when possible
3. Use consistent naming for reliable linking
4. Track quest prerequisites for automatic flow
5. Link sessions to all encountered entities

---

## 📝 Notes & Reminders
<!-- Add your campaign-specific notes here -->




---

*Dashboard utilizing Obsidian Bases v1.9.7 • Full relationship linking enabled • Following Joshua Plunkett's TTRPG methodology*

**Last Updated:** August 6, 2025