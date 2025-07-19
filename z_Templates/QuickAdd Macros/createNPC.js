module.exports = async (params) => {
  const { quickAddApi: qa, app, obsidian } = params;
  
  // Get NPC name
  const name = await qa.inputPrompt("NPC Name:");
  if (!name) return;
  
  // Get NPC type
  const npcTypes = ["commoner", "merchant", "noble", "guard", "criminal", "scholar", "adventurer"];
  const npcType = await qa.suggester(npcTypes, npcTypes) || "commoner";
  
  // Get race
  const races = ["Human", "Elf", "Dwarf", "Halfling", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling", "Other"];
  const race = await qa.suggester(races, races) || "Human";
  
  // Get occupation
  const occupation = await qa.inputPrompt("Occupation:") || "Commoner";
  
  // Get location
  const locations = app.vault.getMarkdownFiles()
    .filter(f => f.path.includes("2-World/Locations/"))
    .map(f => f.basename);
  const location = await qa.suggester(["None", ...locations], ["", ...locations]) || "";
  
  // Get faction (optional)
  const factions = app.vault.getMarkdownFiles()
    .filter(f => f.path.includes("2-World/Organizations/"))
    .map(f => f.basename);
  const faction = await qa.suggester(["None", ...factions], ["", ...factions]) || "";
  
  // Quick personality generator
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
  const personality = await qa.suggester(personalities, personalities) || "";
  
  // Generate appearance based on race
  const appearances = {
    "Human": ["Tall and lean", "Short and stout", "Average build", "Athletic", "Heavyset"],
    "Elf": ["Graceful", "Ethereal", "Sharp features", "Ageless", "Elegant"],
    "Dwarf": ["Stocky", "Broad-shouldered", "Thick beard", "Weathered", "Sturdy"],
    "Halfling": ["Plump", "Nimble", "Cheerful face", "Small but sturdy", "Quick"],
    "Dragonborn": ["Scaled", "Imposing", "Proud bearing", "Battle-scarred", "Regal"],
    "default": ["Distinctive", "Unremarkable", "Well-groomed", "Disheveled", "Intimidating"]
  };
  
  const raceAppearances = appearances[race] || appearances.default;
  const appearance = await qa.suggester(raceAppearances, raceAppearances) || "";
  
  // Set variables for template
  params.variables = {
    npcName: name,
    npcType: npcType,
    npcRace: race,
    npcOccupation: occupation,
    npcLocation: location ? `[[2-World/Locations/${location}|${location}]]` : "",
    npcFaction: faction ? `[[2-World/Organizations/${faction}|${faction}]]` : "",
    npcPersonality: personality,
    npcAppearance: appearance,
    npcAge: await qa.suggester(["Young", "Adult", "Middle-aged", "Old", "Ancient"], 
                               ["Young", "Adult", "Middle-aged", "Old", "Ancient"]) || "Adult",
    npcGender: await qa.suggester(["Male", "Female", "Non-binary", "Other"], 
                                  ["Male", "Female", "Non-binary", "Other"]) || "Other",
    createdDate: moment().format("YYYY-MM-DD"),
    createdTime: moment().format("HH:mm")
  };
  
  // Create the note
  const fileName = `${name}`;
  const filePath = `2-World/NPCs/${fileName}.md`;
  
  // Check if file exists
  const existingFile = app.vault.getAbstractFileByPath(filePath);
  if (existingFile) {
    const overwrite = await qa.yesNoPrompt(`NPC "${name}" already exists. Overwrite?`);
    if (!overwrite) return;
  }
  
  // Get template content
  const templatePath = "z_Templates/World Builder Templates/Template-NPC-Ultra.md";
  const template = app.vault.getAbstractFileByPath(templatePath);
  if (!template) {
    new obsidian.Notice("NPC template not found!");
    return;
  }
  
  // Create note from template
  await qa.utility.createFileWithTemplate(templatePath, filePath, params.variables);
  
  // Open the new note
  const newFile = app.vault.getAbstractFileByPath(filePath);
  if (newFile) {
    await app.workspace.getLeaf().openFile(newFile);
    
    // Add to current session if one is open
    const activeFile = app.workspace.getActiveFile();
    if (activeFile && activeFile.path.includes("5-Campaign/Sessions/")) {
      const addToSession = await qa.yesNoPrompt("Add NPC to current session?");
      if (addToSession) {
        await app.fileManager.processFrontMatter(activeFile, fm => {
          if (!fm.npcsMet) fm.npcsMet = [];
          if (!fm.npcsMet.includes(name)) {
            fm.npcsMet.push(name);
          }
        });
      }
    }
  }
  
  new obsidian.Notice(`Created NPC: ${name}`);
  
  // Log to daily note if exists
  const dailyNote = app.workspace.getActiveFile();
  if (dailyNote && dailyNote.basename === moment().format("YYYY-MM-DD")) {
    const logEntry = `- Created NPC: [[${filePath}|${name}]] (${occupation})`;
    await app.vault.append(dailyNote, `\n${logEntry}`);
  }
}; 