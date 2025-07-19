module.exports = async (params) => {
  const { quickAddApi: qa, app, obsidian } = params;
  
  // Get all existing sessions to determine number
  const sessions = app.vault.getMarkdownFiles()
    .filter(f => f.path.startsWith("5-Campaign/Sessions/"))
    .filter(f => f.basename.match(/Session \d+/))
    .sort((a, b) => {
      const numA = parseInt(a.basename.match(/Session (\d+)/)?.[1] || "0");
      const numB = parseInt(b.basename.match(/Session (\d+)/)?.[1] || "0");
      return numB - numA;
    });
  
  const lastSessionNum = sessions.length > 0 ? 
    parseInt(sessions[0].basename.match(/Session (\d+)/)?.[1] || "0") : 0;
  const sessionNum = lastSessionNum + 1;
  
  // Get campaign name if multiple campaigns
  const campaigns = app.vault.getMarkdownFiles()
    .filter(f => f.path.startsWith("5-Campaign/") && f.basename.includes("Campaign"))
    .map(f => f.basename);
  
  let campaignName = "main";
  if (campaigns.length > 1) {
    campaignName = await qa.suggester(campaigns, campaigns) || "main";
  }
  
  // Get players
  const partyFiles = app.vault.getMarkdownFiles()
    .filter(f => f.path.startsWith("4-Party/"));
  const allPlayers = partyFiles.map(f => f.basename);
  
  // Multi-select for present players
  const presentPlayers = [];
  for (const player of allPlayers) {
    const present = await qa.yesNoPrompt(`Is ${player} present?`);
    if (present) presentPlayers.push(player);
  }
  
  const absentPlayers = allPlayers.filter(p => !presentPlayers.includes(p));
  
  // Get last session info for recap
  let lastSessionRecap = "";
  let lastSessionCliffhanger = "";
  let activeQuests = [];
  
  if (sessions.length > 0) {
    const lastSession = sessions[0];
    const lastSessionContent = await app.vault.read(lastSession);
    
    // Extract cliffhanger
    const cliffhangerMatch = lastSessionContent.match(/cliffhanger:\s*"?([^"\n]+)"?/);
    if (cliffhangerMatch) {
      lastSessionCliffhanger = cliffhangerMatch[1];
    }
    
    // Extract active quests
    const questsMatch = lastSessionContent.match(/questsAdvanced:\s*\[(.*?)\]/s);
    if (questsMatch) {
      activeQuests = questsMatch[1]
        .split(',')
        .map(q => q.trim().replace(/["\[\]]/g, ''))
        .filter(q => q);
    }
  }
  
  // Session mood presets
  const moods = ["Epic", "Intense", "Light-hearted", "Mysterious", "Dark", "Chaotic", "Political", "Exploration"];
  const plannedMood = await qa.suggester(moods, moods) || "Unknown";
  
  // Set variables
  params.variables = {
    sessionNum: sessionNum,
    campaignName: campaignName,
    sessionDate: moment().format("YYYY-MM-DD"),
    sessionDateLong: moment().format("MMMM Do, YYYY"),
    players: presentPlayers,
    absent: absentPlayers,
    lastSessionCliffhanger: lastSessionCliffhanger,
    activeQuests: activeQuests,
    plannedMood: plannedMood
  };
  
  // Create the session note
  const fileName = `Session ${sessionNum} - ${moment().format("YYYY-MM-DD")}`;
  const filePath = `5-Campaign/Sessions/${fileName}.md`;
  
  // Create note from template
  const templatePath = "z_Templates/World Builder Templates/Template-Session-Ultra.md";
  await qa.utility.createFileWithTemplate(templatePath, filePath, params.variables);
  
  // Open the new session
  const newFile = app.vault.getAbstractFileByPath(filePath);
  if (newFile) {
    await app.workspace.getLeaf().openFile(newFile);
    
    // Auto-generate session prep if requested
    const generatePrep = await qa.yesNoPrompt("Generate session prep?");
    if (generatePrep) {
      await generateSessionPrep(app, qa, newFile, activeQuests);
    }
  }
  
  new obsidian.Notice(`Created Session ${sessionNum}`);
};

// Helper function to generate session prep
async function generateSessionPrep(app, qa, sessionFile, activeQuests) {
  let prepContent = "\n## 🎯 Session Prep\n\n";
  
  // Add active quests
  if (activeQuests.length > 0) {
    prepContent += "### Active Quests\n";
    for (const quest of activeQuests) {
      const questFile = app.vault.getMarkdownFiles()
        .find(f => f.basename === quest);
      if (questFile) {
        const questContent = await app.vault.read(questFile);
        const currentObj = questContent.match(/current_objective:\s*"?([^"\n]+)"?/)?.[1];
        prepContent += `- **${quest}**: ${currentObj || "Check quest objectives"}\n`;
      }
    }
    prepContent += "\n";
  }
  
  // Add NPC reminders
  prepContent += "### Key NPCs to Remember\n";
  prepContent += "- [ ] Review NPC relationships and motivations\n";
  prepContent += "- [ ] Prepare NPC voices and mannerisms\n\n";
  
  // Add location prep
  prepContent += "### Locations to Prepare\n";
  prepContent += "- [ ] Maps and descriptions ready\n";
  prepContent += "- [ ] Random encounters prepared\n\n";
  
  // Add rules reminders
  prepContent += "### Rules to Review\n";
  prepContent += "- [ ] \n\n";
  
  await app.vault.append(sessionFile, prepContent);
} 