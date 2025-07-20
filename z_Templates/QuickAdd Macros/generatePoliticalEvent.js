module.exports = async (params) => {
  const { quickAddApi: qa, app, obsidian } = params;
  
  // Advanced political event generator based on existing campaign context
  
  // Analyze existing factions and relationships
  const factions = app.vault.getMarkdownFiles()
    .filter(f => f.path.includes("Organizations/") || f.path.includes("Groups/"))
    .map(f => f.basename);
  
  const npcs = app.vault.getMarkdownFiles()
    .filter(f => f.path.includes("2-World/People/"))
    .map(f => f.basename);
  
  // Event type selection
  const eventTypes = [
    "Political Scandal",
    "Economic Crisis", 
    "Territory Dispute",
    "Alliance Formation",
    "Leadership Challenge",
    "Secret Revelation",
    "Foreign Interference",
    "Popular Uprising",
    "Succession Crisis",
    "Trade War Declaration"
  ];
  
  const eventType = await qa.suggester(eventTypes, eventTypes);
  if (!eventType) return;
  
  // Complexity level
  const complexityLevels = [
    "Simple (2 parties, clear outcome)",
    "Moderate (3-4 parties, multiple interests)", 
    "Complex (5+ parties, web of alliances)",
    "Epic (City-wide impact, long-term consequences)"
  ];
  
  const complexity = await qa.suggester(complexityLevels, complexityLevels);
  if (!complexity) return;
  
  // Select primary actors
  let primaryActors = [];
  const actorCount = complexity.includes("Simple") ? 2 : 
                     complexity.includes("Moderate") ? 3 : 
                     complexity.includes("Complex") ? 4 : 5;
  
  for (let i = 0; i < actorCount; i++) {
    const actorType = await qa.suggester(
      ["Existing Faction", "Existing NPC", "New Entity"],
      ["faction", "npc", "new"]
    );
    
    if (actorType === "faction" && factions.length > 0) {
      const faction = await qa.suggester(factions, factions);
      if (faction) primaryActors.push(`[[${faction}]]`);
    } else if (actorType === "npc" && npcs.length > 0) {
      const npc = await qa.suggester(npcs, npcs);
      if (npc) primaryActors.push(`[[${npc}]]`);
    } else {
      const newEntity = await qa.inputPrompt(`Name of new ${actorType === "new" ? "entity" : actorType}:`);
      if (newEntity) primaryActors.push(newEntity);
    }
  }
  
  // Generate event title
  const eventTitle = await qa.inputPrompt("Event Title:", `The ${eventType} of ${new Date().getFullYear()}`);
  if (!eventTitle) return;
  
  // Get additional details
  const timeframe = await qa.suggester(
    ["Immediate (days)", "Short-term (weeks)", "Medium-term (months)", "Long-term (years)"],
    ["days", "weeks", "months", "years"]
  );
  
  const publicKnowledge = await qa.suggester(
    ["Public knowledge", "Partially secret", "Completely hidden", "Leaked information"],
    ["public", "partial", "secret", "leaked"]
  );
  
  // Generate consequences
  const consequenceTypes = await qa.suggester(
    ["Economic impact", "Political realignment", "Social unrest", "Military action", "All of the above"],
    ["economic", "political", "social", "military", "comprehensive"]
  );
  
  // Advanced event generation based on type
  let eventDetails = generateEventDetails(eventType, primaryActors, complexity);
  
  // Create the file
  const fileName = eventTitle.replace(/[\/\\:*?"<>|]/g, "-");
  const filePath = `2-World/Events/${fileName}.md`;
  
  const currentDate = moment().format("YYYY-MM-DD HH:mm");
  const noteContent = `---
tags:
  - political-event
  - ${eventType.toLowerCase().replace(/\s+/g, '-')}
  - ${complexity.includes("Epic") ? "epic-event" : "standard-event"}
aliases:
  - "${eventTitle}"
cssclasses:
  - event-card
  - wide-page
event_type: "${eventType}"
complexity: "${complexity}"
status: "developing"
timeframe: "${timeframe}"
public_knowledge: "${publicKnowledge}"
primary_actors: [${primaryActors.map(a => `"${a}"`).join(', ')}]
consequences_type: "${consequenceTypes}"
impact_level: "${complexity.includes("Epic") ? "city-wide" : complexity.includes("Complex") ? "regional" : "local"}"
# Escalation tracking
escalation_level: 1
max_escalation: ${complexity.includes("Epic") ? 10 : complexity.includes("Complex") ? 8 : complexity.includes("Moderate") ? 5 : 3}
# Relationship impacts
relationship_changes: []
power_shifts: []
# Meta
created: ${currentDate}
modified: ${currentDate}
generated_by: "Advanced Political Event Generator"
---

> [!infobox]
> # ${eventTitle}
> ![[z_Assets/Events/political_crisis.jpg|cover]]
> ###### Event Details
> | | |
> |---|---|
> | **Type** | ${eventType} |
> | **Status** | \`INPUT[inlineSelect(option(developing), option(active), option(escalating), option(resolved), option(failed)):status]\` |
> | **Complexity** | ${complexity.split('(')[0].trim()} |
> | **Public Knowledge** | ${publicKnowledge} |
> | **Timeframe** | ${timeframe} |

## Quick Actions
\`BUTTON[escalateEvent]\` 📈 Escalate Crisis
\`BUTTON[addDevelopment]\` 📰 Add Development
\`BUTTON[updateRelationships]\` 🕸️ Update Relationships
\`BUTTON[resolveCrisis]\` ✅ Resolve Event

---

## 🎭 The Situation

### Primary Crisis
${eventDetails.crisis}

### Key Actors & Their Positions
${primaryActors.map((actor, index) => `
**${index + 1}. ${actor}**
- **Position**: ${eventDetails.positions[index] || "Position unclear"}
- **Motivation**: ${eventDetails.motivations[index] || "Seeking advantage"}  
- **Resources**: \`INPUT[text:${actor.replace(/[\[\]]/g, '').replace(/\s+/g, '_')}_resources]\`
- **Vulnerability**: \`INPUT[text:${actor.replace(/[\[\]]/g, '').replace(/\s+/g, '_')}_weakness]\`
`).join('\n')}

---

## ⚡ Escalation Framework

### Current Escalation: Level 1/${complexity.includes("Epic") ? 10 : complexity.includes("Complex") ? 8 : complexity.includes("Moderate") ? 5 : 3}

${eventDetails.escalationPath}

### Escalation Triggers
\`\`\`dataviewjs
// Dynamic escalation tracking
const escalationTriggers = [
  "Public exposure of secrets",
  "Economic sanctions implemented", 
  "Physical violence occurs",
  "Foreign powers intervene",
  "Popular protests begin",
  "Legal action initiated",
  "Military forces mobilized",
  "Alliance betrayals occur"
];

const currentLevel = dv.current().escalation_level || 1;
const maxLevel = dv.current().max_escalation || 5;

dv.paragraph(\`**Escalation Progress**: \${currentLevel}/\${maxLevel}\`);

if (currentLevel < maxLevel) {
  dv.paragraph("**Potential Next Triggers**:");
  escalationTriggers.slice(currentLevel - 1, currentLevel + 2).forEach((trigger, index) => {
    dv.paragraph(\`\${currentLevel + index}. \${trigger}\`);
  });
}
\`\`\`

---

## 📊 Political Impact Analysis

### Power Dynamics Shift
\`\`\`dataviewjs
// Analyze how this event affects existing power structures
const actors = dv.current().primary_actors || [];
const eventType = dv.current().event_type;

dv.paragraph("**Projected Power Changes**:");

actors.forEach(actor => {
  const cleanActor = actor.replace(/[\[\]]/g, '');
  const impact = eventType.includes("Scandal") ? "Likely weakened" :
                 eventType.includes("Alliance") ? "Potentially strengthened" :
                 eventType.includes("Crisis") ? "Under pressure" :
                 "Variable impact";
  dv.paragraph(\`- **\${cleanActor}**: \${impact}\`);
});

const complexity = dv.current().complexity || "";
if (complexity.includes("Epic")) {
  dv.paragraph("⚠️ **City-wide implications**: All major factions will be affected");
}
\`\`\`

### Economic Consequences
${eventDetails.economicImpact}

### Social Ramifications  
${eventDetails.socialImpact}

---

## 🎯 Adventure Opportunities

### Immediate Hooks
${eventDetails.immediateHooks}

### Investigation Angles
1. **Who Benefits?** - Follow the money and power to find hidden orchestrators
2. **Information Warfare** - Gather intelligence on all parties' true positions
3. **Damage Control** - Help factions manage public relations and minimize losses
4. **Mediation Opportunity** - Serve as neutral arbitrators in negotiations
5. **Exploitation Potential** - Use the chaos to advance party's own agenda

### Long-term Implications
- **New Power Structures**: How will the political landscape change?
- **Alliance Shifts**: Which relationships will strengthen or break?
- **Economic Disruption**: What businesses will succeed or fail?
- **Social Change**: How will public opinion and daily life change?
- **Foreign Relations**: Will other cities/kingdoms see opportunity or threat?

---

## 📈 Development Timeline

### Phase 1: Initial Crisis (Current)
- **Duration**: ${timeframe === "days" ? "3-7 days" : timeframe === "weeks" ? "2-4 weeks" : "1-3 months"}
- **Key Events**: ${eventDetails.phase1Events}
- **Decision Points**: Major actors must choose their responses

### Phase 2: Active Conflict
- **Triggers**: ${eventDetails.phase2Triggers}
- **Developments**: Open opposition, public stance-taking, resource mobilization
- **Risks**: Point of no return - peaceful resolution becomes difficult

### Phase 3: Peak Crisis
- **Characteristics**: Maximum tension, public attention, economic disruption
- **Outcomes**: Clear winners/losers emerge, or stalemate develops
- **Resolution**: Major decisions made, new status quo established

### Phase 4: Aftermath
- **Duration**: Long-term consequences unfold over months/years
- **Changes**: New power structures, relationship dynamics, economic patterns
- **Legacy**: How this event is remembered and what precedents it sets

---

## 🎲 Random Development Generator

\`BUTTON[generateDevelopment]\` Generate Random Development

**Potential Developments:**
1. Key figure changes position unexpectedly
2. New evidence emerges supporting one side
3. External party makes surprise intervention  
4. Economic pressure forces compromise
5. Popular opinion shifts dramatically
6. Secret alliance is revealed publicly
7. Violence escalates beyond expectations
8. Foreign power offers mediation/interference
9. Religious or cultural factor becomes relevant
10. Previous unrelated scandal resurfaces

---

## 🕸️ Relationship Web Tracking

\`\`\`dataviewjs
// Track how relationships change due to this event
const actors = dv.current().primary_actors || [];
const relationshipChanges = dv.current().relationship_changes || [];

if (relationshipChanges.length > 0) {
  dv.paragraph("**Documented Relationship Changes:**");
  relationshipChanges.forEach(change => {
    dv.paragraph(\`- \${change.from} → \${change.to}: \${change.change_type} (\${change.reason})\`);
  });
} else {
  dv.paragraph("*No relationship changes documented yet.*");
}

// Generate potential relationship impacts
dv.paragraph("**Potential Future Changes:**");
actors.forEach((actor1, index) => {
  actors.slice(index + 1).forEach(actor2 => {
    const cleanActor1 = actor1.replace(/[\[\]]/g, '');
    const cleanActor2 = actor2.replace(/[\[\]]/g, '');
    dv.paragraph(\`- **\${cleanActor1}** ↔ **\${cleanActor2}**: Relationship likely to shift\`);
  });
});
\`\`\`

---

## 📚 Session Integration Notes

### For DMs
- **Pacing**: ${eventDetails.pacingNotes}
- **Player Agency**: ${eventDetails.playerAgencyNotes}
- **Preparation**: ${eventDetails.prepNotes}

### Player Engagement
- **Moral Complexity**: No clear "right" side - encourage thoughtful decision-making
- **Multiple Solutions**: Political, economic, social, or violent resolutions all possible
- **Consequences Matter**: Choices will have lasting campaign impact
- **Information Gathering**: Investigation and social interaction are key

---

## 🎪 Resolution Scenarios

### Peaceful Resolution
**Requirements**: ${eventDetails.peacefulRequirements}
**Outcome**: ${eventDetails.peacefulOutcome}

### Violent Resolution  
**Triggers**: ${eventDetails.violentTriggers}
**Outcome**: ${eventDetails.violentOutcome}

### Economic Resolution
**Method**: ${eventDetails.economicMethod}
**Outcome**: ${eventDetails.economicOutcome}

### Stalemate
**Conditions**: ${eventDetails.stalemateConditions}
**Consequences**: ${eventDetails.stalemateConsequences}

---

*This political event provides rich opportunities for roleplay, investigation, negotiation, and strategic decision-making while creating lasting changes to the campaign world's political landscape.*`;

  // Create the file
  const existingFile = app.vault.getAbstractFileByPath(filePath);
  if (existingFile) {
    const overwrite = await qa.yesNoPrompt(`Event "${eventTitle}" already exists. Overwrite?`);
    if (!overwrite) return;
    await app.vault.modify(existingFile, noteContent);
  } else {
    await app.vault.create(filePath, noteContent);
  }
  
  // Open the new note
  const newFile = app.vault.getAbstractFileByPath(filePath);
  if (newFile) {
    await app.workspace.getLeaf().openFile(newFile);
  }
  
  new obsidian.Notice(`Created political event: ${eventTitle}`);
  console.log(`Political Event Generated: ${eventTitle}`);
};

// Helper function to generate event-specific details
function generateEventDetails(eventType, actors, complexity) {
  const templates = {
    "Political Scandal": {
      crisis: "Damaging information has been revealed or discovered about a major political figure, threatening to destabilize existing power structures and alliances.",
      positions: ["Damage control mode", "Exploiting the scandal", "Calling for investigation", "Distancing themselves", "Secretly involved"],
      motivations: ["Protecting reputation", "Gaining political advantage", "Seeking justice", "Avoiding association", "Covering involvement"],
      escalationPath: "**Level 1**: Rumors circulate → **Level 2**: Evidence surfaces → **Level 3**: Public accusations → **Level 4**: Official investigation → **Level 5**: Legal consequences",
      economicImpact: "Markets react to instability, affected businesses face boycotts or investigation, corruption may invalidate contracts.",
      socialImpact: "Public trust in institutions erodes, rival factions gain support, social movements may mobilize.",
      immediateHooks: "Investigate the scandal's origins, protect or expose involved parties, manage public relations crisis, uncover deeper conspiracies.",
      phase1Events: "Initial allegations surface, denials issued, supporters rally, investigators begin work",
      phase2Triggers: "Undeniable evidence emerges, official statements fail, protests begin",
      peacefulRequirements: "Full transparency, accountability measures, compensation to affected parties",
      peacefulOutcome: "Reformed institutions, new oversight systems, damaged parties step down gracefully",
      violentTriggers: "Attempts to silence whistleblowers, crowds clash with authorities, vigilante justice emerges",
      violentOutcome: "Political violence, breakdown of law and order, potential revolution or military intervention",
      economicMethod: "Economic sanctions, boycotts, financial investigations freeze assets",
      economicOutcome: "Financial ruin for corrupt parties, economic reforms, new regulatory systems",
      stalemateConditions: "Evidence inconclusive, public opinion divided, legal systems overwhelmed",
      stalemateConsequences: "Prolonged instability, paralyzed government, continued public distrust",
      pacingNotes: "Let tension build gradually - don't rush to resolution",
      playerAgencyNotes: "Players can shape outcome through investigation and public relations",
      prepNotes: "Prepare evidence trails, NPC reactions, and multiple resolution paths"
    },
    
    "Economic Crisis": {
      crisis: "A major economic disruption threatens the financial stability of the region, forcing difficult choices about resources, trade, and survival.",
      positions: ["Protectionist measures", "Free market solutions", "Government intervention", "Foreign assistance", "Exploitation of chaos"],
      motivations: ["Protecting wealth", "Maintaining stability", "Gaining market share", "Helping citizens", "Profiting from crisis"],
      escalationPath: "**Level 1**: Financial strain appears → **Level 2**: Businesses fail → **Level 3**: Unemployment rises → **Level 4**: Social unrest begins → **Level 5**: Economic collapse",
      economicImpact: "Massive unemployment, business failures, currency devaluation, trade disruptions, potential famine.",
      socialImpact: "Class tensions rise, crime increases, mass migration, political extremism, family breakdown.",
      immediateHooks: "Investigate crisis causes, protect vulnerable populations, stabilize key businesses, prevent social breakdown.",
      phase1Events: "Market instability, bank runs, layoffs announced, prices fluctuate wildly",
      phase2Triggers: "Major business failures, currency collapse, foreign markets react",
      peacefulRequirements: "Coordinated response, resource sharing, international assistance, long-term planning",
      peacefulOutcome: "Managed recession, reformed economic systems, stronger social safety nets",
      violentTriggers: "Food shortages, mass unemployment, wealth inequality protests",
      violentOutcome: "Economic riots, revolutionary movements, potential regime change",
      economicMethod: "Emergency spending, price controls, nationalization of key industries",
      economicOutcome: "Government-controlled economy, reduced private enterprise, state dependency",
      stalemateConditions: "Insufficient resources, political gridlock, continued external pressure",
      stalemateConsequences: "Prolonged recession, brain drain, permanent economic restructuring",
      pacingNotes: "Economic effects build slowly but have dramatic human costs",
      playerAgencyNotes: "Players can influence response through investigation and resource management",
      prepNotes: "Research real economic crises for realistic effects and timeframes"
    }
    
    // Additional templates would be added for other event types...
  };
  
  return templates[eventType] || templates["Political Scandal"];
} 