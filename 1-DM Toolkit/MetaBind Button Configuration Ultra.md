---
tags:
  - configuration
  - metabind
  - buttons
---

# MetaBind Button Configuration Ultra

Add these button configurations to your MetaBind settings.

## 🎯 Core Actions

### `newSession`
```js
const qa = app.plugins.plugins['quickadd'].api;
const macro = app.plugins.plugins['quickadd'].settings.macros.find(m => m.name === "Create Session");
if (macro) {
  await qa.executeChoiceMacro(macro);
} else {
  // Fallback if QuickAdd not configured
  const tp = app.plugins.plugins['templater-obsidian'].templater;
  const sessions = app.vault.getMarkdownFiles()
    .filter(f => f.path.startsWith("5-Campaign/Sessions/"))
    .filter(f => f.basename.match(/Session \d+/));
  
  const lastNum = sessions.length > 0 ? 
    Math.max(...sessions.map(s => parseInt(s.basename.match(/Session (\d+)/)?.[1] || "0"))) : 0;
  const sessionNum = lastNum + 1;
  
  const fileName = `Session ${sessionNum} - ${moment().format("YYYY-MM-DD")}`;
  const filePath = `5-Campaign/Sessions/${fileName}.md`;
  
  await tp.file.create_new(
    app.vault.getAbstractFileByPath("z_Templates/World Builder Templates/Template-Session-Ultra.md"),
    fileName,
    false,
    app.vault.getAbstractFileByPath("5-Campaign/Sessions")
  );
  
  new Notice(`Created ${fileName}`);
}
```

### `newNPC`
```js
const qa = app.plugins.plugins['quickadd']?.api;
if (qa) {
  const macro = app.plugins.plugins['quickadd'].settings.macros.find(m => m.name === "Create NPC");
  if (macro) {
    await qa.executeChoiceMacro(macro);
    return;
  }
}

// Fallback
const tp = app.plugins.plugins['templater-obsidian'].templater;
const name = await tp.system.prompt("NPC Name:");
if (!name) return;

const race = await tp.system.suggester(
  ["Human", "Elf", "Dwarf", "Halfling", "Dragonborn", "Other"],
  ["Human", "Elf", "Dwarf", "Halfling", "Dragonborn", "Other"]
) || "Human";

const occupation = await tp.system.prompt("Occupation:") || "Commoner";

const filePath = `2-World/NPCs/${name}.md`;
await tp.file.create_new(
  app.vault.getAbstractFileByPath("z_Templates/World Builder Templates/Template-NPC-Ultra.md"),
  name,
  false,
  app.vault.getAbstractFileByPath("2-World/NPCs")
);

// Update frontmatter
setTimeout(async () => {
  const file = app.vault.getAbstractFileByPath(filePath);
  if (file) {
    await app.fileManager.processFrontMatter(file, fm => {
      fm.appearance = fm.appearance || {};
      fm.appearance.race = race;
      fm.occupation = occupation;
    });
  }
}, 200);

new Notice(`Created NPC: ${name}`);
```

### `newLocation`
```js
const tp = app.plugins.plugins['templater-obsidian'].templater;

const name = await tp.system.prompt("Location Name:");
if (!name) return;

const types = ["city", "town", "village", "district", "building", "dungeon", "wilderness", "landmark"];
const type = await tp.system.suggester(types, types) || "location";

const filePath = `2-World/Locations/${name}.md`;
await tp.file.create_new(
  app.vault.getAbstractFileByPath("z_Templates/World Builder Templates/Template-Location-Ultra.md"),
  name,
  false,
  app.vault.getAbstractFileByPath("2-World/Locations")
);

// Update location type
setTimeout(async () => {
  const file = app.vault.getAbstractFileByPath(filePath);
  if (file) {
    await app.fileManager.processFrontMatter(file, fm => {
      fm.location_type = type;
    });
  }
}, 200);

new Notice(`Created Location: ${name}`);
```

### `newQuest`
```js
const tp = app.plugins.plugins['templater-obsidian'].templater;

const name = await tp.system.prompt("Quest Name:");
if (!name) return;

const types = ["main", "side", "fetch", "escort", "investigation", "combat", "social"];
const type = await tp.system.suggester(types, types) || "side";

const priority = await tp.system.suggester(
  ["Low", "Normal", "High", "Urgent", "Critical"],
  ["low", "normal", "high", "urgent", "critical"]
) || "normal";

const filePath = `5-Campaign/Quests/${name}.md`;
await tp.file.create_new(
  app.vault.getAbstractFileByPath("z_Templates/World Builder Templates/Template-Quest-Ultra.md"),
  name,
  false,
  app.vault.getAbstractFileByPath("5-Campaign/Quests")
);

// Update quest properties
setTimeout(async () => {
  const file = app.vault.getAbstractFileByPath(filePath);
  if (file) {
    await app.fileManager.processFrontMatter(file, fm => {
      fm.quest_name = name;
      fm.quest_type = type;
      fm.quest_priority = priority;
      fm.quest_status = "active";
      fm.date_received = moment().format("YYYY-MM-DD");
    });
  }
}, 200);

new Notice(`Created Quest: ${name}`);
```

## ⚔️ Combat Management

### `newCombat`
```js
// Initialize combat tracker
const combatants = [];
const tp = app.plugins.plugins['templater-obsidian'].templater;

// Add PCs
const party = app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("4-Party/"));

for (const pc of party) {
  const add = await tp.system.suggester(
    ["Add to combat", "Skip"],
    [true, false],
    false,
    `Add ${pc.basename} to combat?`
  );
  
  if (add) {
    const init = await tp.system.prompt(`${pc.basename} initiative:`) || "10";
    combatants.push({
      name: pc.basename,
      initiative: parseInt(init),
      file: pc
    });
  }
}

// Add enemies
let addingEnemies = true;
while (addingEnemies) {
  const enemyName = await tp.system.prompt("Enemy name (blank to finish):");
  if (!enemyName) {
    addingEnemies = false;
    break;
  }
  
  const init = await tp.system.prompt(`${enemyName} initiative:`) || "10";
  const hp = await tp.system.prompt(`${enemyName} HP:`) || "10";
  const ac = await tp.system.prompt(`${enemyName} AC:`) || "10";
  
  combatants.push({
    name: enemyName,
    initiative: parseInt(init),
    hp: parseInt(hp),
    ac: parseInt(ac)
  });
}

// Sort by initiative
combatants.sort((a, b) => b.initiative - a.initiative);

// Create combat note
const combatNote = `# Combat - ${moment().format("YYYY-MM-DD HH:mm")}

## Initiative Order
${combatants.map(c => `- [ ] **${c.name}** - Init: ${c.initiative}${c.hp ? ` | HP: ${c.hp}/${c.hp}` : ''}${c.ac ? ` | AC: ${c.ac}` : ''}`).join('\n')}

## Round: 1

### Actions
- 

## Notes
- 
`;

const fileName = `Combat ${moment().format("YYYY-MM-DD HHmm")}`;
const file = await app.vault.create(`5-Campaign/Combat Logs/${fileName}.md`, combatNote);
await app.workspace.getLeaf().openFile(file);

new Notice("Combat initialized!");
```

### `randomEncounter`
```js
// Random encounter generator
const environments = [
  "forest", "mountain", "swamp", "urban", 
  "dungeon", "coastal", "desert", "underdark"
];

const env = await tp.system.suggester(environments, environments) || "forest";
const cr = await tp.system.prompt("Average party level:") || "5";

// Encounter tables by environment and CR
const encounters = {
  forest: {
    low: ["Wolves (2d4)", "Dire Wolf", "Awakened Tree", "Dryad"],
    medium: ["Owlbear", "Dire Wolves (1d4+1)", "Displacer Beast", "Shambling Mound"],
    high: ["Treant", "Green Dragon Wyrmling", "Unicorn", "Corrupted Treant"]
  },
  urban: {
    low: ["Thugs (1d4+1)", "Spy", "Noble with Guards", "Street Urchins (2d6)"],
    medium: ["Assassin", "Cult Fanatics (1d4)", "Corrupt Guards (2d4)", "Gang Leader"],
    high: ["Vampire Spawn", "Rakshasa", "Thieves' Guild Strike Team", "Mind Flayer"]
  },
  dungeon: {
    low: ["Goblins (2d4)", "Zombies (1d6)", "Skeletons (2d4)", "Giant Spiders (1d4)"],
    medium: ["Minotaur", "Gelatinous Cube", "Wights (1d4)", "Flesh Golem"],
    high: ["Beholder Zombie", "Death Knight", "Lich", "Adult Black Dragon"]
  }
};

const crLevel = parseInt(cr) < 5 ? "low" : parseInt(cr) < 11 ? "medium" : "high";
const envEncounters = encounters[env] || encounters.forest;
const possibleEncounters = envEncounters[crLevel] || envEncounters.low;

const roll = Math.floor(Math.random() * possibleEncounters.length);
const encounter = possibleEncounters[roll];

new Notice(`Random ${env} encounter: ${encounter}`);

// Option to create combat
const startCombat = await tp.system.suggester(
  ["Start Combat", "Just Note It"],
  [true, false],
  false,
  `Start combat with ${encounter}?`
);

if (startCombat) {
  app.commands.executeCommandById("ultra-dm-tools:newCombat");
}
```

## 📋 Session Management

### `prepSession`
```js
const activeFile = app.workspace.getActiveFile();
if (!activeFile || !activeFile.path.includes("Sessions")) {
  new Notice("Please open a session note first");
  return;
}

// Generate prep checklist
const prep = `
## Session Prep Checklist

### Review
- [ ] Read last session notes
- [ ] Check active quest objectives
- [ ] Review NPC relationships
- [ ] Prepare relevant stat blocks

### Prepare
- [ ] Maps and handouts ready
- [ ] Background music playlist
- [ ] Combat encounters balanced
- [ ] Treasure and rewards determined

### NPCs
- [ ] Voice and mannerisms practiced
- [ ] Motivations clear
- [ ] Secrets and information to reveal

### Contingencies
- [ ] What if party goes off-script?
- [ ] Backup encounters ready
- [ ] Improvisation notes

### Technical
- [ ] VTT/Discord set up
- [ ] Dice and tools ready
- [ ] Notes organized
`;

await app.vault.append(activeFile, prep);
new Notice("Session prep checklist added!");
```

### `generateRecap`
```js
const sessions = app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("5-Campaign/Sessions/"))
  .sort((a, b) => b.stat.ctime - a.stat.ctime);

if (sessions.length < 2) {
  new Notice("Need at least one previous session for recap");
  return;
}

const lastSession = sessions[1]; // [0] is current
const content = await app.vault.read(lastSession);

// Extract key information
const plotPoints = content.match(/plotPoints:\s*\[(.*?)\]/s)?.[1]
  ?.split(',')
  .map(p => p.trim().replace(/["\[\]]/g, ''))
  .filter(p => p) || [];

const npcsMet = content.match(/npcsMet:\s*\[(.*?)\]/s)?.[1]
  ?.split(',')
  .map(n => n.trim().replace(/["\[\]]/g, ''))
  .filter(n => n) || [];

const cliffhanger = content.match(/cliffhanger:\s*"([^"]+)"/)?.[1] || "";

// Generate recap
let recap = `## Previously on the Campaign...\n\n`;

if (cliffhanger) {
  recap += `*${cliffhanger}*\n\n`;
}

if (plotPoints.length > 0) {
  recap += `The party:\n`;
  plotPoints.forEach(point => {
    recap += `- ${point}\n`;
  });
  recap += `\n`;
}

if (npcsMet.length > 0) {
  recap += `Notable encounters with: ${npcsMet.join(", ")}\n\n`;
}

// Copy to clipboard
await navigator.clipboard.writeText(recap);
new Notice("Recap copied to clipboard!");

// Also add to current session if open
const activeFile = app.workspace.getActiveFile();
if (activeFile && activeFile.path.includes("Sessions")) {
  const currentContent = await app.vault.read(activeFile);
  const updatedContent = currentContent.replace(
    /## 📖 Previously\.\.\.\n```ad-recap\ntitle: Last Session Recap\n\n```/,
    `## 📖 Previously...\n\`\`\`ad-recap\ntitle: Last Session Recap\n${recap}\n\`\`\``
  );
  await app.vault.modify(activeFile, updatedContent);
}
```

## 🎭 NPC Tools

### `generateName`
```js
const tp = app.plugins.plugins['templater-obsidian'].templater;

const races = ["Human", "Elf", "Dwarf", "Halfling", "Dragonborn", "Orc", "Tiefling"];
const race = await tp.system.suggester(races, races) || "Human";

const gender = await tp.system.suggester(["Male", "Female", "Neutral"], ["M", "F", "N"]) || "N";

// Name lists by race and gender
const names = {
  Human: {
    M: ["Gareth", "Marcus", "William", "James", "Robert", "Thomas", "Henry", "Edmund"],
    F: ["Elena", "Maria", "Sarah", "Elizabeth", "Catherine", "Anne", "Margaret", "Joan"],
    N: ["River", "Sky", "Storm", "Sage", "Phoenix", "Ash", "Winter", "Rain"]
  },
  Elf: {
    M: ["Alaric", "Celeborn", "Elrond", "Legolas", "Thranduil", "Faelar", "Silvyr"],
    F: ["Arwen", "Galadriel", "Tauriel", "Elaria", "Nimrodel", "Celebrian", "Idril"],
    N: ["Whisper", "Moonbeam", "Starlight", "Silverleaf", "Nightshade"]
  },
  Dwarf: {
    M: ["Thorin", "Gimli", "Balin", "Dwalin", "Oin", "Gloin", "Groin", "Thrain"],
    F: ["Dís", "Kili", "Mim", "Dain", "Nori", "Bera", "Gilda", "Hilda"],
    N: ["Strongforge", "Ironfoot", "Goldbeard", "Stonebreaker"]
  }
  // Add more races...
};

const raceNames = names[race] || names.Human;
const nameList = raceNames[gender] || raceNames.N;
const selectedName = nameList[Math.floor(Math.random() * nameList.length)];

// Surnames
const surnames = {
  Human: ["Smith", "Cooper", "Fletcher", "Mason", "Carter", "Wright", "Miller"],
  Elf: ["Moonwhisper", "Starweaver", "Goldleaf", "Silverbirch", "Nightingale"],
  Dwarf: ["Ironforge", "Stouthammer", "Goldbeard", "Battlehammer", "Fireforge"]
};

const surnameList = surnames[race] || surnames.Human;
const surname = surnameList[Math.floor(Math.random() * surnameList.length)];

const fullName = `${selectedName} ${surname}`;

await navigator.clipboard.writeText(fullName);
new Notice(`Generated name: ${fullName} (copied to clipboard)`);

// Option to create NPC
const createNPC = await tp.system.suggester(
  ["Create NPC", "Just the name"],
  [true, false],
  false,
  `Create NPC for ${fullName}?`
);

if (createNPC) {
  // Set name in variables and trigger NPC creation
  window.generatedNPCName = fullName;
  app.commands.executeCommandById("ultra-dm-tools:newNPC");
}
```

### `updateRelationship`
```js
const currentFile = app.workspace.getActiveFile();
if (!currentFile || !currentFile.path.includes("NPCs")) {
  new Notice("Please open an NPC note first");
  return;
}

const relationships = ["hostile", "unfriendly", "neutral", "friendly", "allied"];
const current = app.metadataCache.getFileCache(currentFile)?.frontmatter?.relationship || "neutral";

const newRel = await tp.system.suggester(
  relationships.map(r => r === current ? `${r} (current)` : r),
  relationships
) || current;

await app.fileManager.processFrontMatter(currentFile, fm => {
  fm.relationship = newRel;
  fm.lastSeen = moment().format("YYYY-MM-DD");
});

new Notice(`Relationship updated to: ${newRel}`);
```

## 💰 Treasure & Loot

### `generateLoot`
```js
const tp = app.plugins.plugins['templater-obsidian'].templater;

const cr = await tp.system.prompt("Challenge Rating (0-20):") || "5";
const crNum = parseInt(cr);

// Treasure tables
const treasureByCR = {
  "0-4": {
    coins: { cp: "5d6", sp: "4d6", gp: "3d6", pp: "0" },
    items: ["Potion of Healing", "Scroll of Detect Magic", "Silvered Weapon", "+1 Ammunition (20)"]
  },
  "5-10": {
    coins: { cp: "0", sp: "2d6x10", gp: "6d6x10", pp: "3d6" },
    items: ["+1 Weapon", "+1 Armor", "Bag of Holding", "Immovable Rod", "Rope of Climbing"]
  },
  "11-16": {
    coins: { cp: "0", sp: "0", gp: "4d6x100", pp: "5d6x10" },
    items: ["+2 Weapon", "+2 Armor", "Ring of Protection", "Cloak of Displacement", "Boots of Speed"]
  },
  "17+": {
    coins: { cp: "0", sp: "0", gp: "12d6x100", pp: "8d6x10" },
    items: ["+3 Weapon", "+3 Armor", "Legendary Item", "Artifact", "Wish Scroll"]
  }
};

const tier = crNum <= 4 ? "0-4" : crNum <= 10 ? "5-10" : crNum <= 16 ? "11-16" : "17+";
const treasure = treasureByCR[tier];

// Roll coins
const rollDice = (formula) => {
  if (formula === "0") return 0;
  const match = formula.match(/(\d+)d(\d+)(?:x(\d+))?/);
  if (!match) return 0;
  
  const [_, num, die, mult] = match;
  let total = 0;
  for (let i = 0; i < parseInt(num); i++) {
    total += Math.floor(Math.random() * parseInt(die)) + 1;
  }
  return total * (mult ? parseInt(mult) : 1);
};

const coins = {
  cp: rollDice(treasure.coins.cp),
  sp: rollDice(treasure.coins.sp),
  gp: rollDice(treasure.coins.gp),
  pp: rollDice(treasure.coins.pp)
};

// Roll for magic items
const itemRoll = Math.random();
const numItems = itemRoll < 0.3 ? 0 : itemRoll < 0.7 ? 1 : itemRoll < 0.9 ? 2 : 3;
const items = [];

for (let i = 0; i < numItems; i++) {
  const item = treasure.items[Math.floor(Math.random() * treasure.items.length)];
  items.push(item);
}

// Generate loot text
let lootText = `## Treasure Hoard (CR ${cr})\n\n`;
lootText += `### Coins\n`;
if (coins.cp > 0) lootText += `- **Copper:** ${coins.cp} cp\n`;
if (coins.sp > 0) lootText += `- **Silver:** ${coins.sp} sp\n`;
if (coins.gp > 0) lootText += `- **Gold:** ${coins.gp} gp\n`;
if (coins.pp > 0) lootText += `- **Platinum:** ${coins.pp} pp\n`;

const totalGP = coins.cp/100 + coins.sp/10 + coins.gp + coins.pp*10;
lootText += `\n**Total Value:** ${totalGP.toFixed(2)} gp\n`;

if (items.length > 0) {
  lootText += `\n### Magic Items\n`;
  items.forEach(item => {
    lootText += `- ${item}\n`;
  });
}

await navigator.clipboard.writeText(lootText);
new Notice("Loot generated and copied to clipboard!");

// Add to current note if it's a session
const activeFile = app.workspace.getActiveFile();
if (activeFile && activeFile.path.includes("Sessions")) {
  await app.vault.append(activeFile, `\n${lootText}`);
}
```

## 🏗️ World Building

### `buildEncounter`
```js
const tp = app.plugins.plugins['templater-obsidian'].templater;

// Get party info
const partySize = await tp.system.prompt("Party size:") || "4";
const avgLevel = await tp.system.prompt("Average party level:") || "5";
const difficulty = await tp.system.suggester(
  ["Easy", "Medium", "Hard", "Deadly"],
  ["easy", "medium", "hard", "deadly"]
) || "medium";

// XP thresholds by level
const xpThresholds = {
  easy: [25, 50, 75, 125, 250, 300, 350, 450, 550, 600, 800, 1000, 1100, 1250, 1400, 1600, 2000, 2100, 2400, 2800],
  medium: [50, 100, 150, 250, 500, 600, 750, 900, 1100, 1200, 1600, 2000, 2200, 2500, 2800, 3200, 3900, 4200, 4900, 5700],
  hard: [75, 150, 225, 375, 750, 900, 1100, 1400, 1600, 1900, 2400, 3000, 3400, 3800, 4300, 4800, 5900, 6300, 7300, 8500],
  deadly: [100, 200, 400, 500, 1100, 1400, 1700, 2100, 2400, 2800, 3600, 4500, 5100, 5700, 6400, 7200, 8800, 9500, 10900, 12700]
};

const level = parseInt(avgLevel) - 1;
const threshold = xpThresholds[difficulty][Math.min(level, 19)] * parseInt(partySize);

// Get available monsters
const monsters = app.vault.getMarkdownFiles()
  .filter(f => f.path.includes("3-Mechanics/CLI/bestiary"))
  .map(f => {
    const cache = app.metadataCache.getFileCache(f);
    const cr = cache?.frontmatter?.cr;
    const xp = crToXP(cr);
    return { file: f, name: f.basename, cr: cr, xp: xp };
  })
  .filter(m => m.xp > 0 && m.xp <= threshold)
  .sort((a, b) => b.xp - a.xp);

// Build encounter
let encounter = [];
let totalXP = 0;
let remainingXP = threshold;

// Try to build a balanced encounter
while (remainingXP > 0 && monsters.length > 0) {
  const available = monsters.filter(m => m.xp <= remainingXP);
  if (available.length === 0) break;
  
  const monster = available[Math.floor(Math.random() * Math.min(5, available.length))];
  const maxCount = Math.floor(remainingXP / monster.xp);
  const count = Math.min(maxCount, Math.floor(Math.random() * 3) + 1);
  
  encounter.push({ ...monster, count: count });
  totalXP += monster.xp * count;
  remainingXP = threshold - totalXP;
}

// Generate encounter text
let encounterText = `## ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Encounter\n\n`;
encounterText += `**Party:** ${partySize} characters, level ${avgLevel}\n`;
encounterText += `**XP Budget:** ${threshold} XP\n`;
encounterText += `**Actual XP:** ${totalXP} XP\n\n`;

encounterText += `### Enemies\n`;
encounter.forEach(e => {
  encounterText += `- ${e.count}x [[${e.file.path}|${e.name}]] (CR ${e.cr}, ${e.xp} XP each)\n`;
});

// Copy and optionally start combat
await navigator.clipboard.writeText(encounterText);
new Notice("Encounter built and copied!");

const startCombat = await tp.system.suggester(
  ["Start Combat", "Just Copy"],
  [true, false]
);

if (startCombat) {
  app.commands.executeCommandById("ultra-dm-tools:newCombat");
}

// Helper function
function crToXP(cr) {
  const xpByCR = {
    "0": 10, "1/8": 25, "1/4": 50, "1/2": 100,
    "1": 200, "2": 450, "3": 700, "4": 1100,
    "5": 1800, "6": 2300, "7": 2900, "8": 3900,
    "9": 5000, "10": 5900, "11": 7200, "12": 8400,
    "13": 10000, "14": 11500, "15": 13000, "16": 15000,
    "17": 18000, "18": 20000, "19": 22000, "20": 25000,
    "21": 33000, "22": 41000, "23": 50000, "24": 62000,
    "25": 75000, "26": 90000, "27": 105000, "28": 120000,
    "29": 135000, "30": 155000
  };
  return xpByCR[cr] || 0;
}
```

---

## 📋 Installation Instructions

1. Open Obsidian Settings → MetaBind
2. Navigate to Button Actions
3. For each button above:
   - Click "Add Button Action"
   - Set the ID (e.g., `newSession`)
   - Paste the corresponding JavaScript code
   - Save

4. Test buttons in your DM Dashboard

---

*Note: These buttons require Templater and QuickAdd plugins to be installed and configured.* 