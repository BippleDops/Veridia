---
type: npc
status: active
tags:
  - NPC
  - '{{npcType}}'
aliases:
  - '{{npcAlias1}}'
  - '{{npcAlias2}}'
cssclasses:
  - npc-card
  - wide-page
location: '{{npcLocation}}'
occupation: '{{npcOccupation}}'
faction: '{{npcFaction}}'
relationship: neutral
appearance:
  age: '{{npcAge}}'
  race: '{{npcRace}}'
  gender: '{{npcGender}}'
  height: '{{npcHeight}}'
  build: '{{npcBuild}}'
  distinguishing: '{{npcDistinguishing}}'
personality:
  traits: []
  ideals: []
  bonds: []
  flaws: []
motivation: ''
secrets: []
first-met: null
last-seen: null
sessions: []
cr: null
ac: null
hp: null
speed: null
allies: []
enemies: []
family: []
image_path: null
voice_reference: null
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
---

<%*
// Templater automation
const npcName = await tp.system.prompt("NPC Name:");
if (!npcName) return;
await tp.file.rename(npcName);

// Location selection
const locations = app.vault.getMarkdownFiles()
  .filter(f => f.path.includes("2-World/Locations/"));
const locationNames = locations.map(f => f.basename);
const locationPaths = locations.map(f => f.path);
const chosenLocation = await tp.system.suggester(locationNames, locationPaths);

// Quick details
const race = await tp.system.suggester([
  "Human", "Elf", "Dwarf", "Halfling", "Dragonborn", 
  "Gnome", "Half-Elf", "Half-Orc", "Tiefling", "Other"
], [
  "Human", "Elf", "Dwarf", "Halfling", "Dragonborn", 
  "Gnome", "Half-Elf", "Half-Orc", "Tiefling", "Other"
]);

const occupation = await tp.system.prompt("Occupation:");
const faction = await tp.system.prompt("Faction (optional):");

// Update frontmatter
setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm.location = chosenLocation ? `[[${chosenLocation}]]` : "";
    fm.appearance.race = race;
    fm.occupation = occupation;
    fm.faction = faction || "";
  });
}, 100);
%>

> [!infobox]
> # `VIEW[{file.name}]`
> ![[`VIEW[{image_path}|]`|cover]]
> ###### Basic Information
> | | |
> |---|---|
> | **Occupation** | `VIEW[{occupation}]` |
> | **Location** | `VIEW[{location}]` |
> | **Faction** | `VIEW[{faction}]` |
> | **Status** | `INPUT[inlineSelect(option(active), option(dead), option(missing), option(retired)):status]` |
> ###### Appearance
> | | |
> |---|---|
> | **Race** | `VIEW[{appearance.race}]` |
> | **Age** | `INPUT[text:appearance.age]` |
> | **Gender** | `INPUT[inlineSelect(option(Male), option(Female), option(Non-binary), option(Other)):appearance.gender]` |

## Quick Actions
`BUTTON[addToSession]` Add to Current Session
`BUTTON[updateRelationship]` Update Relationship
`BUTTON[generateSecret]` Generate Secret
`BUTTON[linkToQuest]` Link to Quest

## Description

### First Impression
`INPUT[textArea:appearance.distinguishing]`

### Personality
**Traits:** `INPUT[list:personality.traits]`
**Ideals:** `INPUT[list:personality.ideals]`
**Bonds:** `INPUT[list:personality.bonds]`
**Flaws:** `INPUT[list:personality.flaws]`

## Motivation & Goals
`INPUT[textArea:motivation]`

## Secrets
`INPUT[list:secrets]`

## Relationships

```dataviewjs
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
```

## Session History

```dataviewjs
// Show all sessions where this NPC appears
const npcName = dv.current().file.name;
const sessions = dv.pages('"5-Campaign/Sessions"')
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
```

## Combat Stats
> [!note|clean no-t]
> `VIEW[{cr}|cr][**CR:** {cr} ||]`
> `VIEW[{ac}|ac][**AC:** {ac} ||]`
> `VIEW[{hp}|hp][**HP:** {hp} ||]`
> `VIEW[{speed}|speed][**Speed:** {speed} ||]`

## Notes & Development
<!-- GM notes, character development, plot hooks --> 