---
created: '2025-08-11'
status: complete
tags:
- both
- campaign/arc
- complete
- content/faction
- content/lore
- gm-resource
- gm_resource
- lore
- status/complete
- world/both
title: Campaign Management Guide
type: Lore
updated: '2025-08-13T12:34:03.183458+00:00'
world: Both
---





# Campaign Management Guide
*Orchestrating the Depths and Heights*

## Session Packets
Use the template at `05_Templates/Sessions/Session_Packet_Template.md` to build a packet for each session.

Steps:
1. Create a new note from the template; fill `session_number`, `session_date`, `campaign_name`.
2. Add wiki-links of handouts to the `handouts:` list and GM sheets to the `gm_sheets:` list.
3. Optional: add `assets:` links (indexes, maps).
4. The DataviewJS blocks will auto-render lists for quick export and printing.

Tip: Keep one packet per session in `06_GM_Resources/Session_Packets/Session_XX.md`.

## Campaign Frameworks

### Campaign Types

#### Political Intrigue
**Focus**: Faction maneuvering, social challenges, conspiracy
**Key Mechanics**: Faction standing, social encounters, investigation
**Session Structure**: 
- 20% combat
- 50% roleplay
- 30% investigation

**Essential NPCs**:
- Faction leaders (3-5)
- Information brokers (2-3)
- Double agents (1-2)
- Neutral mediators (1-2)

**Plot Drivers**:
- Assassination attempts
- Blackmail chains
- Treaty negotiations
- Succession crises
- Faction wars

#### Depth Exploration
**Focus**: Environmental challenges, discovery, survival
**Key Mechanics**: Pressure system, resource management, exploration
**Session Structure**:
- 30% combat
- 30% exploration
- 40% problem-solving

**Essential Locations**:
- Safe zones (decreasing with depth)
- Hazard areas (increasing danger)
- Discovery sites (ancient ruins, resources)
- Transition zones (depth boundaries)

**Plot Drivers**:
- Lost expeditions
- Resource discovery
- Ancient awakening
- Depth migrations
- Environmental collapse

#### Cosmic Horror
**Focus**: Mystery, transformation, existential dread
**Key Mechanics**: Sanity, corruption, investigation
**Session Structure**:
- 20% combat
- 40% investigation
- 40% horror/transformation

**Essential Elements**:
- Corruption spread tracking
- Madness progression
- Reality distortion events
- Transformation temptations

**Plot Drivers**:
- Deep Mother awakening
- Parasite outbreak
- Reality mergers
- Prophetic visions
- Mass transformations

#### Revolutionary Action
**Focus**: Changing the world order, resistance, rebellion
**Key Mechanics**: Faction warfare, resource gathering, momentum
**Session Structure**:
- 40% combat
- 30% planning
- 30% recruitment

**Revolution Stages**:
1. **Spark** (1-3 sessions): Initial incident
2. **Growth** (4-8 sessions): Building support
3. **Conflict** (9-15 sessions): Open warfare
4. **Resolution** (16-20 sessions): New order

## Faction Management

### Faction Standing Tracker

| Action | Faction A | Faction B | Others |
|---------|-----------|-----------|--------|
| Complete faction mission | +2 | -1 | 0 |
| Publicly support | +1 | -2 | -1 |
| Betray/expose | -5 | +3 | +1 |
| Neutral assistance | +1 | 0 | 0 |
| Kill faction member | -3 | +1 | 0 |

### Faction Power Dynamics

#### Power Level Scale (1-10)
- **1-2**: Underground, hunted
- **3-4**: Minor influence, local only
- **5-6**: Regional power, recognized
- **7-8**: Major faction, widespread
- **9-10**: Dominant force

#### Power Shift Events
**Weekly Check** (d20 + Power Level):
- **1-5**: Faction loses power (-1)
- **6-10**: Status quo
- **11-15**: Minor gain (influence)
- **16-20**: Power increase (+1)
- **21+**: Major victory (plot event)

### Faction Relationships Matrix

```
         TC  SS  DC  PP  MG  CS
TC       --  -2  +1  -3  +2  -1
SS       -2  --  -3  -1  0   +1
DC       +1  -3  --  +2  -1  -2
PP       -3  -1  +2  --  -2  +3
MG       +2  0   -1  -2  --  +1
CS       -1  +1  -2  +3  +1  --

TC: Tidal Council
SS: Surface Seekers
DC: Depth Concordat
PP: Parasite Priests
MG: Merchant Guilds
CS: Criminal Syndicates

-3: War | -2: Hostile | -1: Tense
+1: Neutral | +2: Allied | +3: United
```

## Session Planning Tools

### Session Structure Templates

#### Three-Act Structure
**Act 1 - Hook (30 minutes)**:
- Inciting incident
- Information gathering
- Planning phase

**Act 2 - Development (2 hours)**:
- Main challenge
- Complications arise
- Resource depletion

**Act 3 - Resolution (30 minutes)**:
- Climactic moment
- Consequences
- Next hooks

#### Depth Progression Structure
**Surface Layer** (Opening):
- Social encounter
- Gather information
- Secure resources

**Middle Layer** (Development):
- Environmental challenge
- Combat/hazard
- Discovery

**Deep Layer** (Climax):
- Major revelation
- Boss/horror
- Transformation choice

### Random Event Tables

#### Daily Events (d20)
| Roll | Event |
|------|-------|
| 1-2 | Equipment failure |
| 3-4 | Faction encounter |
| 5-6 | Environmental hazard |
| 7-8 | Resource discovery |
| 9-10 | Neutral NPC |
| 11-12 | Memory tide |
| 13-14 | Predator stalking |
| 15-16 | Political news |
| 17-18 | Depth migration |
| 19 | Reality distortion |
| 20 | Major opportunity |

#### Depth-Specific Complications

**Sunlight Zone (d6)**:
1. Political messenger
2. Merchant opportunity
3. Law enforcement
4. Social obligation
5. Faction recruitment
6. Public event

**Twilight Zone (d6)**:
1. Pressure leak
2. Predator pack
3. Lost expedition
4. Resource cache
5. Ancient ruins
6. Smuggler convoy

**Midnight Zone (d6)**:
1. Bioluminescent swarm
2. Pressure anomaly
3. Parasite infection
4. Memory fragment
5. Abyssal current
6. Reality thin spot

**Abyssal Zone (d6)**:
1. Deep Mother whisper
2. Transformation urge
3. Time distortion
4. Leviathan passing
5. Consciousness merge
6. Prophetic vision

## NPC Management

### Quick NPC Generator

#### Name Formula
**Pattern**: [Descriptor] + [Name] + [Depth Marker]

**Descriptors** (d10):
1. Silent / 2. Golden / 3. Deep
4. Crystal / 5. Shadow / 6. Tide
7. Pressure / 8. Memory / 9. Storm
10. Void

**Depth Markers** (d6):
1. -in-Twilight / 2. the Risen
3. Deepborn / 4. of-the-Abyss
5. Pressure-Touched / 6. Twice-Drowned

### NPC Motivation Matrix

| Surface Want | Deep Need | Dark Secret |
|--------------|-----------|-------------|
| Power | Security | Betrayed faction |
| Wealth | Belonging | Hidden hybrid |
| Knowledge | Purpose | Memory thief |
| Love | Identity | Parasite host |
| Freedom | Transformation | Prophet dreams |
| Justice | Redemption | Killed someone |

### Instant NPC Stats

#### By Role (CR 1-5)
**Combatant**: HP = CR × 15, AC = 10 + CR, Attack = +2 + CR, Damage = 1d8 + CR

**Social**: HP = CR × 8, AC = 10, Persuasion = +2 + (CR × 2), Deception = +1 + CR

**Expert**: HP = CR × 10, AC = 11, Skill Bonus = +3 + CR, Saves = +1 + CR

## Depth Management

### Pressure Pacing

#### Session Depth Budget
Allocate "depth points" per session:
- **Shallow Session** (5 points): Mostly 0-500ft
- **Standard Session** (10 points): Mix of zones
- **Deep Session** (15 points): Significant depth
- **Abyssal Session** (20 points): Extreme depth

**Spending Points**:
- Sunlight Zone: 0 points/hour
- Twilight Zone: 2 points/hour
- Midnight Zone: 5 points/hour
- Abyssal Zone: 10 points/hour

### Environmental Pressure

#### Building Tension
**Pressure Meter** (0-10):
- 0-3: Safe, normal operations
- 4-6: Stressed, equipment strain
- 7-8: Dangerous, failures beginning
- 9: Critical, immediate threat
- 10: Catastrophic failure

**Increasing Pressure** (+1 per):
- Failed skill check
- Combat round underwater
- Depth increase
- Equipment damage
- Time pressure

**Relieving Pressure** (-1 per):
- Successful rest
- Equipment repair
- Return to safe depth
- NPC assistance
- Resource expenditure

## Campaign Arcs

### Arc Structure

#### Act 1: The Surface Tension (Sessions 1-5)
**Themes**: Introduction, faction establishment, initial mystery
**Key Events**:
- Character convergence
- First depth exposure
- Faction introduction
- Initial conspiracy hint
- First transformation witness

#### Act 2: The Deepening (Sessions 6-15)
**Themes**: Exploration, faction conflict, revelation
**Key Events**:
- Major faction conflict
- Deep Mother contact
- Reality merger event
- Parasite outbreak
- Political assassination

#### Act 3: The Convergence (Sessions 16-20)
**Themes**: Choice, transformation, resolution
**Key Events**:
- Final faction war
- Deep Mother awakening
- World merger decision
- Character transformation
- New world order

### Campaign Variations

#### The Unification Path
- Focus on bringing worlds together
- Emphasize diplomatic solutions
- Build cross-faction alliances
- Culminate in merger ceremony

#### The Separation Path
- Maintain the divide
- Strengthen the seal
- Eliminate merger threats
- Establish permanent boundary

#### The Transformation Path
- Embrace change
- Pursue evolution
- Accept Deep Mother
- Create new hybrid world

#### The Destruction Path
- Prevent all outcomes
- Destroy both societies
- Stop ancient powers
- Reset to primordial state

## Resource Management

### Economy Tracking

#### Depth-Based Pricing
| Depth | Price Multiplier | Availability |
|-------|------------------|--------------|
| Surface | ×1 | Full |
| 500ft | ×1.5 | 75% |
| 1500ft | ×2 | 50% |
| 4000ft | ×5 | 25% |
| Abyssal | ×10 | 10% |

### Treasure Distribution

#### Treasure by Depth
**Sunlight Zone**: 
- Gold, gems, art
- Political favors
- Surface goods

**Twilight Zone**:
- Pressure gear
- Depth materials
- Memory pearls

**Midnight Zone**:
- Ancient artifacts
- Biological samples
- Forbidden knowledge

**Abyssal Zone**:
- Reality fragments
- Transformation catalysts
- Prophetic visions

## Managing Horror Elements

### Comfort Tools

#### Safety Mechanics
- **X-Card**: Remove content immediately
- **Lines**: Never cross these boundaries
- **Veils**: Fade to black for these elements
- **Rewind**: Undo recent events if needed

#### Horror Gradients
1. **Atmospheric**: Dread, unease, tension
2. **Psychological**: Paranoia, distrust, confusion
3. **Body**: Transformation, parasites, mutation
4. **Cosmic**: Incomprehension, insignificance, doom
5. **Existential**: Identity loss, reality doubt, merger

### Transformation Tracking

#### Stages of Change
1. **Exposure**: First contact
2. **Infection**: Taking hold
3. **Adaptation**: Body changing
4. **Integration**: Mind altering
5. **Transcendence**: No longer human

## Quick Resolution Systems

### Faction Conflict Resolution

#### Quick War (No Combat)
**Each Side Rolls**: d20 + Power Level + Resources

**Outcome Difference**:
- 0-5: Stalemate, both lose resources
- 6-10: Minor victory, loser -1 Power
- 11-15: Major victory, loser -2 Power
- 16+: Decisive victory, loser eliminated

### Investigation Shortcuts

#### Three-Clue Rule
Every mystery has three ways to discover each essential fact:
1. Physical evidence
2. NPC testimony  
3. Documentation/records

#### Investigation Pool
Players have shared pool = total INT bonuses
Spend points to:
- Reveal clue (1 point)
- Connect clues (2 points)
- Breakthrough (3 points)

## Campaign Customization

### Dial Settings

#### Pressure Intensity
- **Low**: Depth is flavor, minimal mechanics
- **Medium**: Standard rules, meaningful choice
- **High**: Constant threat, detailed tracking

#### Political Complexity
- **Simple**: Clear good/bad factions
- **Moderate**: Gray morality, shifting alliances
- **Complex**: No clear answers, all compromised

#### Transformation Rate
- **Slow**: Sessions to change
- **Medium**: Gradual progression
- **Fast**: Rapid mutation possible

#### Reality Stability
- **Stable**: Fixed world rules
- **Fluctuating**: Occasional mergers
- **Unstable**: Constant reality shifts

---

*Remember: You're not just running a game, you're conducting a symphony of pressure—physical, political, and psychological. Every choice echoes through both worlds.*

## Player-Facing Summary

Campaign Management Guide is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Campaign Management Guide as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Campaign Management Guide.

## Adventure Hooks

- A rumor ties Campaign Management Guide to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Campaign Management Guide to avert a public scandal.
- A map overlay reveals a hidden approach to Campaign Management Guide active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
