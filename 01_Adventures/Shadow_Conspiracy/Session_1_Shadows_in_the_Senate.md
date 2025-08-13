---
created: '2025-08-13'
status: active
tags:
- session/shadow-conspiracy
- session-1
- investigation
- political-intrigue
- world/aquabyssos
- status/active
type: Session
updated: '2025-08-13T17:15:00.000000'
world: Aquabyssos
---

# Session 1: Shadows in the Senate
*The Shadow Conspiracy Investigation Begins*

> [!info] Session Overview
> **Duration**: 4-6 hours
> **Level Range**: 5-8
> **Focus**: Investigation, Social Encounters, Light Combat
> **Location**: Parliament of Echoes, Aquabyssos
> **Key Theme**: Something is terribly wrong with democracy

## Opening Scene

### The Impossible Vote

*Read aloud:*
> The grand chamber of the Parliament of Echoes resonates with an unnatural harmony. Where once heated debates echoed off the coral-carved walls, now only unanimous agreement flows like a dark tide. The Speaker calls for a vote on the "Emergency Powers Act" - a bill that would effectively dissolve democratic oversight.
>
> "All in favor?" 
>
> Every hand rises in perfect synchronization. Not a single voice of dissent. Not even a moment's hesitation. The watching crowd gasps as even historically opposed parties vote as one.
>
> In the observation gallery, you notice a parliamentary aide's face go pale. She clutches a portfolio to her chest and rushes toward the exit, glancing fearfully over her shoulder. As she passes your group, she stumbles, dropping a single document that reads: "HELP - THEY'RE NOT THEMSELVES ANYMORE."

### Initial Reactions

**Perception DC 12**: Notice several parliament members have identical posture
**Insight DC 14**: Recognize the terror in the aide's eyes is genuine
**History DC 13**: Remember these parties have never agreed on anything
**Arcana DC 16**: Detect faint necrotic energy in the chamber

### The Aide's Plea

**Marina Currentswift** (Parliamentary Aide)
- Young triton woman, visibly shaking
- Knows something is wrong but not what
- Afraid she's being watched
- Will only talk in private

*If approached:*
> "Please, not here. They have eyes everywhere now. Meet me at the Drowned Scholar tavern tonight. Back room. Come alone - or at least look like you are. I'll explain everything I can, but... but you have to promise to help. Democracy is dying and no one else seems to notice or care."

## Investigation Paths

### Path A: Parliamentary Records

**Location**: Parliamentary Archive
**Guardian**: Archivist Kelp-Tome (shadow-touched)

**Challenges**:
1. Gain access (Persuasion DC 15 or Deception DC 17)
2. Navigate archive maze (Investigation DC 14)
3. Find voting records (History DC 13)
4. Avoid Archivist's suspicion (Stealth DC 16)

**Discoveries**:
- Last 7 votes were unanimous (unprecedented)
- Voting happened faster than physically possible
- Some members voted while officially absent
- **Evidence**: Impossible Voting Records (1 point)

**If Caught**: Archivist attacks with shadow tendrils

```statblock
name: Shadow-Touched Archivist
size: Medium
type: humanoid
alignment: lawful evil
ac: 14
hp: 52 (8d8 + 16)
speed: 30 ft.
str: 10
dex: 14
con: 14
int: 16
wis: 12
cha: 10
skills:
  - investigation: 6
  - history: 6
damage_resistances: necrotic
senses: darkvision 60 ft.
languages: Common, Deep Speech
cr: 3
actions:
  - name: Shadow Tendril
    desc: "Melee Attack: +5 to hit, reach 10 ft., one target. Hit: 10 (2d6 + 3) necrotic damage and target is grappled (escape DC 13)."
  - name: Memory Drain
    desc: "One grappled creature must make a DC 13 Wisdom save or forget the last hour."
```

### Path B: Staff Interviews

**Location**: Parliamentary Offices
**Key NPCs**: Various staff members

**Interview Subjects**:
1. **Secretary Coral-Ink**: Noticed schedule changes
2. **Guard Captain Trident**: Reports security anomalies  
3. **Janitor Algae-Sweep**: Saw late-night "meetings"
4. **Chef Brine-Spice**: Parliament members stopped eating

**Social Encounter Mechanics**:
- Each NPC starts at Trust 0
- Successful Persuasion/Insight increases Trust by 1
- Intimidation works but alerts conspiracy
- At Trust 3, NPC shares crucial information

**Information Gained**:
- Parliament members arrive/leave at exact same times
- Secret late-night gatherings in basement
- Dietary changes (no longer eat normal food)
- Strange surgical scars on necks
- **Evidence**: Staff Testimony (1 point per 2 witnesses)

### Path C: Shadow Parliament Member

**Target**: Councilor Reef-Garden
**Location**: Private office

**Observation** (Stealth DC 15):
- Watches shadow duplicate in mirror
- Speaks to someone not present
- References "the surgery" and "prime directive"
- Temperature drops noticeably near them

**Direct Confrontation**:
- Denies everything perfectly
- No emotional response to accusations
- If pressed, claims party is delusional
- If violence threatened, calls guards

**Shadow Test** (requires creative approach):
- Mirror shows different reflection
- Doesn't remember childhood memories
- Can't eat normal food (Constitution save)
- Reacts to shadow detection magic

## The Drowned Scholar Meeting

### Evening Rendezvous

**Atmosphere**:
> The Drowned Scholar squats in the Deepwater District like a barnacle-encrusted secret. Water drips constantly from the ceiling, and bioluminescent algae provides the only light. Marina waits in the back room, hood drawn up, hands shaking as she nurses a cup of kelp wine.

### Marina's Information

*What she knows:*
- Started 3 months ago with subtle changes
- Parliament members' personalities shifted
- Unanimous votes began 3 weeks ago
- She found surgical equipment in restricted area
- Several members have scars at skull base
- She's been followed since she started investigating

*What she suspects:*
- Some kind of mind control or replacement
- Connected to recent diplomatic missions
- Involves highest levels of government
- Related to increased security contracts

*What she fears:*
- She's next for "conversion"
- Democracy is being deliberately destroyed
- No one in authority can be trusted
- War between realms might be orchestrated

### The Ambush

As the meeting concludes, shadow operatives attack!

**Encounter**: Shadow Strike Team
- 2 Shadow Operatives (CR 2 each)
- 1 Shadow Enforcer (CR 4)
- Environmental hazard: Darkness spell

```statblock
name: Shadow Operative
size: Medium
type: humanoid
alignment: neutral evil
ac: 15
hp: 32 (5d8 + 10)
speed: 40 ft.
str: 11
dex: 17
con: 14
int: 13
wis: 12
cha: 10
skills:
  - stealth: 7
  - acrobatics: 6
damage_resistances: necrotic
senses: darkvision 60 ft.
languages: Common, Thieves' Cant
cr: 2
actions:
  - name: Multiattack
    desc: Two shadow blade attacks
  - name: Shadow Blade
    desc: "Melee Attack: +6 to hit, 5 ft., one target. Hit: 7 (1d6 + 4) slashing plus 3 (1d6) necrotic damage."
  - name: Shadow Step
    desc: "Bonus action teleport 30 ft. to a shadow."
```

```statblock
name: Shadow Enforcer
size: Medium
type: humanoid
alignment: lawful evil
ac: 16
hp: 58 (9d8 + 18)
speed: 30 ft.
str: 16
dex: 14
con: 15
int: 12
wis: 13
cha: 14
skills:
  - intimidation: 5
  - athletics: 6
damage_resistances: necrotic, psychic
senses: darkvision 60 ft.
languages: Common, Deep Speech
cr: 4
traits:
  - name: Shadow Strike
    desc: First attack each turn deals extra 2d6 necrotic damage
actions:
  - name: Multiattack
    desc: Two attacks with shadow mace
  - name: Shadow Mace
    desc: "Melee Attack: +6 to hit, 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage."
  - name: Commanding Darkness
    desc: "All shadow operatives within 30 ft. gain advantage on next attack."
```

**Tactics**:
- Operatives flank and use shadow step
- Enforcer protects exit routes
- Try to capture Marina alive
- Retreat if reduced to half health

## Evidence and Clues

### Physical Evidence Found
- Shadow surgical tools (if operatives searched)
- Coded communications device
- Map marking parliament building basement
- List of parliament members with check marks

### Information Learned
- Conspiracy calls itself "The Unity Project"
- Shadow surgery performed in secret facility
- Parliament basement has restricted area
- Next vote scheduled in 3 days
- Some members might be salvageable

### Connections Revealed
- Link to Silverscale Consortium (economic angle)
- Military contracts being adjusted
- Diplomatic corps also compromised
- Pattern suggests systematic takeover

## Session Conclusion Options

### If Players Succeed
- Marina becomes ongoing contact
- Gain 2-3 evidence points
- Identify 2-3 shadow-touched officials
- Learn about surgery facility location
- Parliament insider advantage

### If Players Struggle
- Marina captured or killed
- Gain only 1 evidence point
- Conspiracy becomes aware of them
- Increased security going forward
- Must find alternate investigation path

### If Players Fail
- Marina is taken for surgery
- No evidence gained
- Marked as enemies of state
- Must go underground
- Conspiracy control increases 10%

## Hooks for Session 2

**Immediate Concerns**:
- Rescue Marina (if captured)
- Investigate parliament basement
- Find the surgery facility
- Identify more conspirators
- Prevent the next vote

**Longer Term**:
- Build resistance network
- Find way to reverse shadow surgery
- Identify conspiracy leadership
- Prevent military involvement
- Save democracy itself

## DM Notes

### Pacing Guidance
- Start with observation and social
- Build tension through investigation
- Combat as climactic release
- End with clear next steps

### Adaptation Notes
- If players are combat-focused, add more operatives
- If investigation-heavy, expand archive section
- If social-focused, add more NPCs to interview
- Scale trust requirements to party skills

### Key Information to Convey
1. Democracy is being subverted from within
2. Shadow surgery creates perfect servants
3. The conspiracy is vast and organized
4. Time pressure exists (3-day deadline)
5. Trust is a precious commodity

### Random Encounters (if needed)

`dice: 1d6`

| d6 | Encounter |
|----|-----------|
| 1 | Suspicious guard patrol |
| 2 | Shadow-touched clerk |
| 3 | Terrified witness |
| 4 | False friend |
| 5 | Conspiracy surveillance |
| 6 | Unexpected ally |

## Experience Rewards

**Combat XP**: As per encounter CR
**Investigation XP**: 200 XP per evidence point
**Social XP**: 100 XP per successful interview
**Bonus XP**: 500 XP for keeping Marina safe

## Treasure

**Monetary**: 200 gp in conspiracy funds
**Magic Items**: 
- Shadow detection powder (3 uses)
- Amulet of proof against detection
- Potion of mind reading (1)

**Special Rewards**:
- Parliamentary access badge
- Marina's investigation notes
- Contact in government

---

## Connected Resources
- [[Shadow Conspiracy Overview]]
- [[Parliament Building Map]]
- [[Marina Currentswift Full Stats]]
- [[Investigation Mechanics]]
- [[Session 2 The Shadow Surgery]]

---

*"In democracy's hall where voices should ring, / Now only shadows dance and shadows sing."* - Marina's journal