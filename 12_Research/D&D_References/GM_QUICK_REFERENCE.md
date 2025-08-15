# GM_QUICK_REFERENCE

---
title: GM QUICK REFERENCE
type: research
tags:
- active
- research
created: '2025-08-14'
modified: '2025-08-14'
---

# GM QUICK REFERENCE GUIDE

**Version**: 1.0 | **Updated**: August 13, 2025  
**For**: Game Masters running Cordelia campaigns  
**Quick Setup Time**: 5 minutes | **Session Prep**: 15 minutes

---

## 🚀 IMMEDIATE ESSENTIALS

### Session Zero Setup

**Required Files** (Pin these in Obsidian):
1. `Master Campaign Index.md` - Your control center
2. `06_GM_Resources/Campaign_Timeline_Tracker.md` - Time management  
3. `06_GM_Resources/Faction_Network_Tracker.md` - Politics & relationships
4. `06_GM_Resources/GM_Toolkit.canvas` - Visual dashboard

**Quick Automation Setup** (5 minutes):
```bash
cd "/path/to/vault"
python scripts/content_validator.py --vault-path . report
python scripts/backup_automation.py --vault-path . backup --type full
python scripts/update_notification_system.py --vault-path . &
```

### Critical Hotkeys

- **Quick Open**: `Ctrl/Cmd + O` → Jump to any file
- **Global Search**: `Ctrl/Cmd + Shift + F` → Search all content  
- **Random Page**: `Alt + R` → Inspiration when stuck
- **Graph View**: `Ctrl/Cmd + G` → See content connections
- **Command Palette**: `Ctrl/Cmd + P` → Access all functions

---

## ⚡ SESSION PREP SPEEDRUN (15 Minutes)

### Minutes 1-5: World State Check
```markdown
## Pre-Session Checklist
- [ ] Current date: ___________
- [ ] Active quests: ___________
- [ ] PC relationships: ___________  
- [ ] Faction tensions: ___________
- [ ] Upcoming deadlines: ___________
```

### Minutes 6-10: NPC Quick Prep
**Key NPCs This Session**:
- What they want right now
- How they feel about the PCs  
- What information they have/need
- Their next move if PCs don't intervene

### Minutes 11-15: Resources & Tools
- [ ] Combat stats ready (if likely)
- [ ] Random generators tested
- [ ] Handouts prepared
- [ ] Session tracking template opened

---

## 🎯 CORE MECHANICS REFERENCE

### Pressure/Altitude System

| Environment | Effect | Requirements |
|-------------|--------|--------------|
| **Surface** | Normal | None |
| **Shallow Depth** | -1 to physical rolls | Breathing apparatus |
| **Deep Ocean** | -2 to physical, advantage on stealth | Pressure gear |
| **Abyss** | -3 to physical, psychic pressure | Specialized equipment |
| **Low Altitude** | Normal | None |
| **High Altitude** | -1 to physical rolls | Breathing assistance |
| **Storm Layer** | -2 to physical, weather effects | Wind gear |
| **Sky Limit** | -3 to physical, extreme weather | Specialized equipment |

### Social Systems

**Reputation Levels**:
- **10**: Legendary hero - doors open automatically
- **8-9**: Renowned - significant influence
- **6-7**: Respected - favorable treatment  
- **4-5**: Unknown - neutral interactions
- **2-3**: Suspicious - unfriendly treatment
- **0-1**: Notorious - hostile reactions

**Cross-Realm Etiquette**:
- **Aquabyssos**: Group harmony, honor, duty, hierarchy
- **Aethermoor**: Individual achievement, innovation, artistic expression
- **Diplomatic**: Formal protocols, gift exchange, neutral ground

---

## 🧙‍♂️ NPC QUICK REFERENCE

### Instant NPC Generation
```bash
# During session - instant NPC
python scripts/random_generator_engine.py --vault-path . --type npc --count 1 --quick

# With specific parameters
python scripts/ai_content_generator.py --vault-path . generate quick_npc \
    --input role="merchant" --input realm="Aquabyssos"
```

### NPC Reaction Matrix

| PC Action | Aquabyssos NPC | Aethermoor NPC |
|-----------|----------------|----------------|
| **Respectful** | +2 to reactions | +1 to reactions |
| **Direct/Blunt** | -1 to reactions | +1 to reactions |  
| **Innovative** | Cautious interest | +2 to reactions |
| **Disruptive** | -2 to reactions | Mixed reaction |
| **Group-focused** | +2 to reactions | Neutral |
| **Individual glory** | -1 to reactions | +2 to reactions |

### Essential NPCs (Always Available)

**Parliament of Echoes**:
- **Queen Seraphina Lumengarde**: Ruler, crystal corruption concern
- **Parliamentary Speaker**: Political authority, information access
- **Admiral Marina Stormcrest**: Military leader, honorable, strategic

**Shadow Conspiracy**:  
- **Vex Shadowthorn**: Shadow Surgeon Prime, main antagonist
- **Shadow Infiltrator**: Generic operative, adaptable threat
- **Corrupted Official**: Parliament member, inside information

**Neutral Contacts**:
- **Trade Guild Representative**: Economic information, resources
- **Cultural Liaison**: Cross-realm knowledge, etiquette guide
- **Information Broker**: Rumors, secrets, plot hooks

---

## 🗺️ LOCATION QUICK REFERENCE

### Instant Location Access

**Aquabyssos Major Locations**:
- `[[Crystal Palace]]` - Government center, formal meetings
- `[[Parliament Naval Headquarters]]` - Military operations
- `[[Shadow Surgery Center]]` - Conspiracy operations
- `[[Merchant Quarter]]` - Commerce, information, neutral ground
- `[[Embassy District]]` - Cross-realm diplomacy

**Aethermoor Major Locations**:  
- `[[Sky Council Chambers]]` - Government, wind-carved marble
- `[[Windwright Academy]]` - Knowledge, innovation, teaching
- `[[Floating Markets]]` - Commerce, cultural exchange
- `[[Storm Observatories]]` - Weather monitoring, high altitude
- `[[Cloud Gardens]]` - Recreation, artistic expression

**Neutral/Convergence Locations**:
- `[[Crystal Bridge Embassy]]` - Diplomatic meetings
- `[[Convergence Point]]` - Reality intersection, strange effects
- `[[Trade Route Stations]]` - Travel, supplies, information

### Quick Location Details

**Generate on-demand**:
```bash
python scripts/ai_content_generator.py --vault-path . generate location_description \
    --input name="Tavern Name" --input world="Aquabyssos" --input type="Social Hub"
```

---

## ⚔️ ENCOUNTER QUICK REFERENCE

### Instant Encounter Generation
```bash
# Balanced encounter for party level
python scripts/random_generator_engine.py --vault-path . --type encounter --party-level 5 --difficulty medium

# Environmental challenge
python scripts/random_generator_engine.py --vault-path . --type encounter --environment "underwater" --challenge-type "exploration"
```

### Encounter Scaling
| Party Level | Easy CR | Medium CR | Hard CR | Deadly CR |
|-------------|---------|-----------|---------|-----------|
| **Level 1** | 1/4 | 1/2 | 1 | 2 |
| **Level 3** | 1 | 2 | 3 | 5 |  
| **Level 5** | 2 | 4 | 5 | 8 |
| **Level 7** | 3 | 6 | 8 | 11 |
| **Level 9** | 5 | 8 | 11 | 15 |

### Quick Combat NPCs

**Shadow Operatives** (Scalable):
- **AC**: 13 + level | **HP**: 8 × level | **Speed**: 30 ft
- **Abilities**: Stealth, Sneak Attack, Shadow Step
- **Tactics**: Hit and run, environmental advantage

**Corrupted Guards** (Scalable):
- **AC**: 15 + level | **HP**: 10 × level | **Speed**: 25 ft  
- **Abilities**: Shield Wall, Coordinated Attack
- **Tactics**: Formation fighting, protect VIPs

**Diplomatic Encounter**:
- **Goal**: Information exchange or favor negotiation
- **Stakes**: Relationship status change
- **Complications**: Cultural misunderstanding, hidden agendas
- **Resolution**: Multiple success paths available

---

## 🎯 QUEST MANAGEMENT

### Quick Quest Tracking
```bash
# List active quests  
python scripts/dynamic_quest_tracker.py --vault-path . list --status active

# Update quest progress
python scripts/dynamic_quest_tracker.py --vault-path . update "Quest Name" \
    --progress "New development" --status "in-progress"
```

### Quest Status Reference
- **Available**: PCs can discover/accept
- **Active**: Currently being pursued  
- **In-Progress**: Partially completed
- **Completed**: Successfully finished
- **Failed**: Unsuccessful conclusion
- **On-Hold**: Temporarily suspended

### Common Quest Types

**Investigation Quests**:
- **Structure**: Clue → Investigation → Revelation → Confrontation
- **Tools**: NPC interviews, location searches, document analysis
- **Complications**: False leads, time pressure, hostile interference

**Diplomatic Quests**:
- **Structure**: Problem → Research → Negotiation → Agreement  
- **Tools**: Cultural knowledge, NPC relationships, compromise options
- **Complications**: Cultural misunderstandings, competing interests

**Infiltration Quests**:
- **Structure**: Planning → Infiltration → Objective → Extraction
- **Tools**: Stealth, disguises, inside information, alternative routes
- **Complications**: Security alerts, unexpected encounters, time limits

---

## 🔄 CONSEQUENCE TRACKING

### Immediate Consequences (This Session)
- **NPC Reactions**: Attitude changes based on PC actions
- **Environmental**: Location state changes
- **Information**: Availability of clues and knowledge
- **Resources**: Gains/losses in equipment, money, allies

### Short-term Consequences (1-3 Sessions)  
- **NPC Goal Shifts**: Characters adjust plans based on PC interference
- **Faction Relations**: Political standings change  
- **World Events**: Background developments triggered by PC actions
- **New Opportunities**: Doors open from PC successes

### Long-term Consequences (Campaign Arcs)
- **World State Changes**: Major political/environmental shifts
- **Reputation Effects**: PC legend and influence development  
- **Historical Impact**: Events that reshape the world
- **Character Legacy**: Long-lasting effects of PC choices

### Quick Consequence Logging
```markdown
## Session Consequences Log

### Immediate (Today)
- NPC Reaction: [Character] now [attitude change] because [PC action]
- World Change: [Location/situation] now [new state] because [PC action]

### Short-term (Next few sessions)  
- [NPC] will [new goal] in response to [PC action]
- [Faction] relationship [change direction] due to [PC action]

### Long-term (Campaign arc)
- [Major change] will develop over time from [accumulated PC actions]
```

---

## 🛠️ SESSION TOOLS

### During-Session Commands

**Need an NPC fast?**
```bash
python scripts/random_generator_engine.py --vault-path . --type npc --count 1 --quick
```

**Need a location detail?**
```bash  
python scripts/ai_content_generator.py --vault-path . generate quick_location --input type="tavern"
```

**Check faction relationship?**
Open: `06_GM_Resources/Faction_Network_Tracker.md`

**What happened last session?**
Check: Most recent file in `01_Adventures/`

### Post-Session Workflow (10 minutes)

1. **Update Timeline** (2 minutes):
   - Add session events with dates
   - Note any time passage

2. **Update NPC Status** (3 minutes):
   - Change locations if they moved
   - Update relationship attitudes  
   - Adjust current goals/motivations

3. **Update Faction Relations** (2 minutes):
   - Modify relationship scores based on PC actions
   - Note any political developments

4. **Quest Progress** (2 minutes):
   - Update quest statuses
   - Add new quest hooks discovered

5. **Consequences Planning** (1 minute):
   - Note what should happen between sessions
   - Set reminders for next session prep

---

## 🔧 TROUBLESHOOTING

### Common Session Issues

**"I need an NPC but don't have time to create one"**
```bash
python scripts/random_generator_engine.py --vault-path . --type npc --count 1 --quick
```

**"Players went somewhere I didn't prep"**  
- Use location templates from `05_Templates/World Builder Templates/`
- Quick generate: `python scripts/ai_content_generator.py --vault-path . generate location_description`
- Improvise with vault search: `Ctrl/Cmd + O` → type location type

**"I forgot what happened last session"**
- Check: Most recent session file in `01_Adventures/`  
- Check: `Master Campaign Index.md` recent events section
- Check: `06_GM_Resources/Campaign_Timeline_Tracker.md`

**"Player asked about an NPC I can't remember"**
- Quick search: `Ctrl/Cmd + Shift + F` → search character name
- If not found: Create quick stub, fill in later
- Use relationship tracker: `06_GM_Resources/Faction_Network_Tracker.md`

### Technical Quick Fixes

**Vault running slow?**
```bash
python scripts/content_validator.py --vault-path . --cleanup
```

**Broken links everywhere?**
```bash
python scripts/auto_link_suggester.py --vault-path . --auto-apply --confidence-threshold 0.8
```

**Lost/corrupted files?**  
```bash
python scripts/backup_automation.py --vault-path . restore --backup-id "latest" --target "filename.md"
```

---

## 📊 CAMPAIGN HEALTH DASHBOARD

### Weekly Check (5 minutes)

**Content Health**:
```bash
python scripts/content_validator.py --vault-path . report
```
- ✅ Green: All systems good
- ⚠️ Yellow: Minor issues, continue playing  
- ❌ Red: Address before next session

**Relationship Status**:
Open: `06_GM_Resources/Faction_Network_Tracker.md`
- Check for relationships approaching extreme values (0-1 or 9-10)
- Note any factions without recent interaction
- Identify potential alliance/conflict opportunities

**Quest Momentum**:
```bash  
python scripts/dynamic_quest_tracker.py --vault-path . report
```
- Active quests making progress?
- Stalled quests need attention?
- New quest hooks needed?

### Monthly Deep Dive (20 minutes)

1. **Performance Review**:
   - Vault size and performance
   - Automation system health  
   - Backup integrity verification

2. **Content Quality**:
   - Link consistency and coverage
   - Metadata completeness
   - Cross-reference accuracy

3. **Campaign Balance**:
   - Player engagement assessment
   - Story pacing evaluation
   - World complexity management

---

## 🎮 PLAYER INTERACTION REFERENCE

### Information Management

**What Players Can Know**:
- **Public Information**: Available to anyone in the realm
- **Professional Knowledge**: Related to character backgrounds
- **Relationship Information**: Based on NPC connections  
- **Investigation Discoveries**: Earned through roleplay

**Information Reveal Techniques**:
- **Direct**: NPC tells them outright
- **Overheard**: Background conversations, eavesdropping
- **Documents**: Letters, reports, public records
- **Physical Evidence**: What they can observe and deduce
- **Reputation**: What others say about people/events

### Reaction Guidelines

**Aquabyssos NPCs Respond Well To**:
- Respect for hierarchy and tradition
- Group-focused decision making
- Honor and duty appeals
- Formal courtesy and protocol
- Collective good arguments

**Aethermoor NPCs Respond Well To**:
- Individual achievement recognition
- Innovation and new ideas
- Artistic and aesthetic appreciation  
- Direct communication and efficiency
- Personal freedom arguments

**Universal Positive Reactions**:
- Genuine interest in their culture/work
- Respect for their expertise
- Help with their personal problems
- Protection of their loved ones
- Fair treatment and honesty

---

## 🚨 EMERGENCY PROCEDURES

### Session Disaster Recovery

**Obsidian Crashes Mid-Session**:
1. Restart Obsidian
2. Check if auto-recovery worked
3. If files missing: `python scripts/backup_automation.py --vault-path . restore --backup-id "latest"`
4. Continue session with simplified notes

**Total Creative Block**:
1. Roll on random encounter table: `04_Resources/Random_Tables/`
2. Generate random NPC: `python scripts/random_generator_engine.py --vault-path . --type npc --count 1 --quick`
3. Check faction relationships for tension: `06_GM_Resources/Faction_Network_Tracker.md`
4. Ask players what their characters want to do

**Player Asks About Something You Forgot**:
1. Search vault: `Ctrl/Cmd + Shift + F`
2. If not found: "Let me check my notes" (buy time)
3. Create quick answer, note to fill in details later
4. Use existing content as inspiration

### Data Protection

**Before Major Changes**:
```bash
python scripts/backup_automation.py --vault-path . backup --type full
```

**Before Each Session**:
```bash  
python scripts/backup_automation.py --vault-path . backup --type incremental
```

**After Each Session**:
```bash
python scripts/content_validator.py --vault-path . report
```

---

## 🎯 SUCCESS METRICS

### Session Success Indicators
- [ ] Players were engaged and active
- [ ] Story advanced meaningfully  
- [ ] Character relationships developed
- [ ] World felt alive and reactive
- [ ] Consequences were clear and satisfying

### Campaign Health Indicators
- [ ] Plot threads are progressing  
- [ ] Character arcs have momentum
- [ ] World events continue between sessions
- [ ] Player investment is high
- [ ] GM prep time is manageable

### System Health Indicators  
- [ ] Vault performance is acceptable
- [ ] Automation systems are functioning
- [ ] Content quality is maintained
- [ ] Backups are current and verified
- [ ] Links and references are accurate

---

## 📋 CHECKLISTS

### Session Prep Checklist
- [ ] Timeline position confirmed
- [ ] Key NPC status updated  
- [ ] Active quest status reviewed
- [ ] Likely locations prepared
- [ ] Potential complications identified
- [ ] Resources organized and accessible

### During Session Checklist  
- [ ] Important decisions documented
- [ ] NPC reaction changes noted
- [ ] Quest progress updated
- [ ] Consequences identified
- [ ] New hooks captured

### Post-Session Checklist
- [ ] Timeline updated with session events
- [ ] NPC status changes applied
- [ ] Faction relationships adjusted
- [ ] Quest progress recorded  
- [ ] Future consequences planned
- [ ] Next session prep notes created

---

*Keep this reference handy during sessions. The Cordelia Vault is designed to support your creativity, not constrain it. When in doubt, make a decision that serves the story and update the vault later.*

**Happy Gaming!**

---

**Document Length**: ~4,000 words  
**Print-Friendly**: Yes  
**Last Updated**: August 13, 2025  
**Version**: 1.0

## Related

*Links to related content will be added here.*


## DM Notes

*Private notes for campaign integration:*
- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes
