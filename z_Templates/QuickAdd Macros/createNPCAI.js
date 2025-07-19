module.exports = async (params) => {
  const { quickAddApi: qa, app, obsidian } = params;
  
  // Ensure AI integration is loaded
  if (!window.ttrpgAI) {
    new obsidian.Notice("AI integration not loaded! Check console for errors.", 5000);
    return;
  }
  
  // Get basic NPC information
  const name = await qa.inputPrompt("NPC Name:");
  if (!name) return;
  
  const races = ["Human", "Elf", "Dwarf", "Halfling", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling", "Other"];
  const race = await qa.suggester(races, races) || "Human";
  
  const occupation = await qa.inputPrompt("Occupation:") || "Commoner";
  
  // Get location
  const locations = app.vault.getMarkdownFiles()
    .filter(f => f.path.includes("2-World/Hubs/") || f.path.includes("2-World/Places/"))
    .map(f => f.basename);
  const location = await qa.suggester(["None", ...locations], ["", ...locations]) || "";
  
  // Get additional details for AI generation
  const age = await qa.suggester(["Young Adult (20-30)", "Adult (30-50)", "Middle-aged (50-70)", "Elder (70+)"], 
                                ["Young Adult", "Adult", "Middle-aged", "Elder"]) || "Adult";
  
  const gender = await qa.suggester(["Male", "Female", "Non-binary", "Other"], 
                                   ["Male", "Female", "Non-binary", "Other"]) || "Other";
  
  // Ask if user wants AI enhancement
  const useAI = await qa.yesNoPrompt("Use AI to generate detailed description and portrait?");
  
  let aiDescription = "";
  let imagePath = "";
  
  if (useAI) {
    new obsidian.Notice("Generating AI content... This may take 30-60 seconds.", 3000);
    
    try {
      // Prepare data for AI generation
      const npcData = {
        name,
        race,
        occupation,
        location: location || "Unknown",
        age,
        gender
      };
      
      // Generate AI content
      const aiResult = await window.ttrpgAI.generateCompleteNPC(npcData);
      aiDescription = aiResult.description;
      imagePath = aiResult.imagePath;
      
      new obsidian.Notice(`AI generation complete for ${name}!`, 3000);
      
    } catch (error) {
      new obsidian.Notice(`AI generation failed: ${error.message}. Continuing with manual creation.`, 5000);
      console.error('AI NPC Generation Error:', error);
    }
  }
  
  // Manual personality if AI didn't work or wasn't used
  let personality = "";
  if (!aiDescription) {
    const personalities = [
      "Friendly and helpful",
      "Suspicious and paranoid", 
      "Greedy and opportunistic",
      "Noble and honorable",
      "Mysterious and secretive",
      "Jovial and boisterous",
      "Nervous and anxious",
      "Arrogant and condescending"
    ];
    personality = await qa.suggester(personalities, personalities) || "";
  }
  
  // Create the note
  const fileName = `${name}`;
  const filePath = `2-World/People/${fileName}.md`;
  
  // Check if file exists
  const existingFile = app.vault.getAbstractFileByPath(filePath);
  if (existingFile) {
    const overwrite = await qa.yesNoPrompt(`NPC "${name}" already exists. Overwrite?`);
    if (!overwrite) return;
  }
  
  // Generate note content
  const currentDate = moment().format("YYYY-MM-DD HH:mm");
  const noteContent = `---
tags: 
  - NPC
  - "${occupation.toLowerCase()}"
aliases: 
  - "${name}"
cssclasses: 
  - npc-card
  - wide-page
location: "${location ? `[[${location}]]` : ''}"
occupation: "${occupation}"
faction: ""
status: active
relationship: neutral
appearance:
  age: "${age}"
  race: "${race}"
  gender: "${gender}"
  height: ""
  build: ""
  distinguishing: ""
personality:
  traits: []
  ideals: []
  bonds: []
  flaws: []
motivation: ""
secrets: []
firstMet: 
lastSeen: 
sessions: []
# Combat Stats
cr: 
ac: 
hp: 
speed: 
# Relationships
allies: []
enemies: []
family: []
# Visual
image_path: "${imagePath}"
voice_reference: ""
# Meta
created: ${currentDate}
modified: ${currentDate}
ai_generated: ${useAI}
---

> [!infobox]
> # ${name}
> ${imagePath ? `![[${imagePath}|cover]]` : '![[z_Assets/Placeholder Images/Character_Default.png|cover]]'}
> ###### Basic Information
> | | |
> |---|---|
> | **Occupation** | ${occupation} |
> | **Location** | ${location ? `[[${location}]]` : 'Unknown'} |
> | **Faction** | \`INPUT[text:faction]\` |
> | **Status** | \`INPUT[inlineSelect(option(active), option(dead), option(missing), option(retired)):status]\` |
> ###### Appearance
> | | |
> |---|---|
> | **Race** | ${race} |
> | **Age** | ${age} |
> | **Gender** | ${gender} |

## Quick Actions
\`BUTTON[addToSession]\` Add to Current Session
\`BUTTON[updateRelationship]\` Update Relationship
\`BUTTON[generateSecret]\` Generate Secret
\`BUTTON[linkToQuest]\` Link to Quest

## AI-Generated Description

${aiDescription || `**Personality**: ${personality}

*AI description was not generated. Add your own details here.*`}

## Motivation & Goals
\`INPUT[textArea:motivation]\`

## Secrets
\`INPUT[list:secrets]\`

## Relationships

\`\`\`dataviewjs
// Dynamic relationship tracker
const thisNPC = dv.current().file.path;
const relationships = [];

// Find all NPCs that reference this one
const npcs = dv.pages('#NPC').where(p => {
  return (p.allies && p.allies.includes(thisNPC)) ||
         (p.enemies && p.enemies.includes(thisNPC)) ||
         (p.family && p.family.includes(thisNPC));
});

if (npcs.length > 0) {
  dv.table(
    ["NPC", "Relationship", "Status", "Last Interaction"],
    npcs.map(npc => {
      let rel = "Neutral";
      if (npc.allies && npc.allies.includes(thisNPC)) rel = "Ally";
      if (npc.enemies && npc.enemies.includes(thisNPC)) rel = "Enemy";
      if (npc.family && npc.family.includes(thisNPC)) rel = "Family";
      
      return [
        npc.file.link,
        rel,
        npc.status || "Unknown",
        npc.lastSeen || "Never"
      ];
    })
  );
} else {
  dv.paragraph("*No established relationships yet.*");
}
\`\`\`

## Session History

\`\`\`dataviewjs
// Show all sessions where this NPC appears
const npcName = dv.current().file.name;
const sessions = dv.pages('"1-Session Journals"')
  .where(s => s.npcsMet && s.npcsMet.includes(npcName))
  .sort(s => s.date, 'desc');

if (sessions.length > 0) {
  dv.table(
    ["Session", "Date", "Key Events"],
    sessions.map(s => [
      s.file.link,
      s.date,
      s.plotPoints ? s.plotPoints.filter(p => p.includes(npcName)).join(", ") : ""
    ])
  );
} else {
  dv.paragraph("*Not encountered in any sessions yet.*");
}
\`\`\`

## Notes & Development
${aiDescription ? `*This NPC was enhanced with AI-generated content on ${currentDate}.*` : ''}

<!-- GM notes, character development, plot hooks -->`;

  // Create or update the file
  if (existingFile) {
    await app.vault.modify(existingFile, noteContent);
  } else {
    await app.vault.create(filePath, noteContent);
  }
  
  // Open the new note
  const newFile = app.vault.getAbstractFileByPath(filePath);
  if (newFile) {
    await app.workspace.getLeaf().openFile(newFile);
  }
  
  new obsidian.Notice(`Created ${useAI ? 'AI-enhanced ' : ''}NPC: ${name}`);
  
  // Log creation
  console.log(`NPC Created: ${name} (AI: ${useAI})`);
}; 