# Template-SapientSpecies

---
title: Template SapientSpecies
type: Lore
tags:
- lore
- both
- research
- category/sapientspecies
- active
created: '2025-08-11'
modified: '2025-08-14'
status: complete
MyContainer:
- '[[Jungle of Screams|Jungle of Screams]]'
MyCategory: Knightly Order
obsidianUIMode: preview
leader: Bob
officers:
- Officer 1
- Officer 2
members:
- Member 1
- Member 2
- Member 3
initiates:
- Initiative 1
- Initiative 2
- Initiative 3
faction: Faction Name 1
primary_contact: John Doe
benefits:
- standing: 1
  reward: What do they get at level 1?
- standing: 2
  reward: What do they get at level 2?
- standing: 3
  reward: What do they get at level 3?
world: Both
updated: '2025-08-13T01:18:31.197584+00:00'
---

<%*

// 1) Rename if title starts with "NewSpecies"
let title;
if (tp.file.title.startsWith("NewSpecies")) {
  title = await tp.system.prompt("Enter Sapient Species Name");
  if (!title) {
    new Notice("No name entered. Aborting.");
    return;
  }
  await tp.file.rename(title);
} else {
  title = tp.file.title;
}

// 2) Gather all planet files under 02_Worldbuilding/Planets
const planetFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("02_Worldbuilding/Planets/"));

const placeholderLabel = "🌀 No Planet Selected";
const placeholderPath = "__placeholder__";

// 3) Prompt for container planet
const planetChoices = [placeholderLabel, ...planetFiles.map(f => f.basename)];
const planetValues  = [placeholderPath, ...planetFiles.map(f => f.path)];
const chosenPath    = await tp.system.suggester(planetChoices, planetValues, true);
if (!chosenPath) return;

// 4) Build the wiki-link or fallback
let wikiLink = ;
if (chosenPath !== placeholderPath) {
  const chosenAlias = chosenPath.split("/").pop().replace(/\.md$/, "");
  wikiLink = `[[${chosenPath}|${chosenAlias}]]`;

// 5) Write to frontmatter
setTimeout(() => {
  const newFile = tp.file.find_tfile(tp.file.path(true));
  if (!newFile) return;
  app.fileManager.processFrontMatter(newFile, fm => {
    fm["MyContainer"] = wikiLink ?? "None";
  });
}, 100);

%>

%% DO NOT MAKE CHANGES TO THIS PART OF THE TEMPLATE %%

> [!NOTE] Parent Region: `INPUT[inlineListSuggester(optionQuery(#Category/Place), optionQuery(#Category/Planet)):MyContainer]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

> [!column|no-i no-t]
>> [!note|no-title]
>> ![[Template_Species_Placeholder.png|Template Species Placeholder.png]]
>
>> [!note|div-m] Place Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General),
>> option(2, ⁉️Goals),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!note|no-title]
>>> > ![[#General|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Goals|no-h clean]]
>>> 
>>> > ![[#GM Notes|no-h clean]]

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🧾History),
> option(2, 🧑‍🦰Psyiology),
> option(3, 🧬Biology),
> option(4,🙃Personality),
> option(5, 🧠Intelligence),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Hierarchy|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Enemies/Allies|no-h clean]]
> > > ![[#Services|no-h clean]]
> > 
> > > ![[#Membership|no-h clean]]
> > > ![[#Ranks|no-h clean]]

%% MAKE CHANGES BELOW THIS LINE %%

---

# General

Enter description of the sapient species here. 


## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement
- Add 12_Research-specific enhancement


## Membership
To join the group, a PC must spend X week 'doing' something, or 'something else'.

## GM Notes

Make notes of what you need to track in the town here. 

## Hierarchy

`BUTTON[button_person]` List important relationships here. 

```dataviewjs
// 1) Grab your frontmatter arrays
const leader    = dv.current().leader    ?? ;
const officers  = dv.current().officers  ?? [];
const members   = dv.current().members   ?? [];
const initiates = dv.current().initiates ?? [];

// 2) Render the Mermaid diagram
dv.paragraph(
  "```mermaid\nflowchart LR\n" +

  // Leader node
  (leader
    ? `L[${leader}]:::internal-link\n`
    : "") +

  // Officers group
  (officers.length > 0
    ? `OG[Officers]\nL --> OG\n` +
      officers.map((o,i) =>
        `O${i+1}[${o}]:::internal-link\nOG --> O${i+1}\n`
      ).join("")

  // Members group
  (members.length > 0
    ? `MG[Members]\n${officers.length ? "OG" : "L"} --> MG\n` +
      members.map((m,i) =>
        `M${i+1}[${m}]:::internal-link\nMG --> M${i+1}\n`

  // Initiates group
  (initiates.length > 0
    ? `IG[Initiates]\n${members.length ? "MG" : (officers.length ? "OG" : "L")} --> IG\n` +
      initiates.map((n,i) =>
        `I${i+1}[${n}]:::internal-link\nIG --> I${i+1}\n`

  "```"
)
```

> [!NOTE]- Relationship Config - Enter name of People Notes
> | Leader    | Officers    | 
> | --- | --- | 
> | `INPUT[list:leader]`    | `INPUT[list:officers]`    | 
> 
> | Members    | Initiates    | 
> | `INPUT[list:members]`    | `INPUT[list:initiates]`    |

## Enemies/Allies
**Enemies:** `INPUT[inlineListSuggester(optionQuery(#Category/Group),optionQuery(#Category/People)):MyEnemies]`

**Allies:** `INPUT[inlineListSuggester(optionQuery(#Category/Group),optionQuery(#Category/People)):MyAllies]`

## People

The following people are members of this group.  

```dataview
TABLE WITHOUT ID link(file.name) AC "Name", char_race AC "Race", char_gender AC "Gender"
FROM "02_Worldbuilding/People"
WHERE contains(Connected_Groups, this.file.link)
SORT file.name ASC

```base
properties:
  property.char_age:
    displayName: Age
  property.char_gender:
    displayName: Gender
  property.char_race:
    displayName: Race
  property.char_status:
    displayName: Status
  file.name:
    displayName: Name
  note.char_status:
  note.char_race:
  note.char_gender:
  note.char_age:
    displayName: Age Range
views:
  - type: table
    name: People
    filters:
      and:
        - file.inFolder("02_Worldbuilding/People")
        - MyContainer.contains(this.file.path)
    order:
      - file.name
      - MyContainer
      - MyCategory
      - char_status
      - char_race
      - char_gender
      - char_age
    sort:
      - column: note.char_race
        direction: ASC
      - column: note.MyContainer
      - column: file.name
    columnSize:
      file.name: 177
      note.MyCategory: 221
      note.MyContainer: 244
      note.char_status: 137
      note.char_race: 160
      note.char_gender: 143
      note.char_age: 149

## Services

Services offered. 

> [!NOTE]+ Public Services
> | Item   | Cost | Weight |
> | ------ | ---- | ------ |
> | Service 1 | 1gp  | L      |
> | Service 2 | 1cp  | -      |

> [!NOTE]- Member Services

## Ranks

Ranks listed here

- Rank 1: Benefit
- Rank 2: Benefit
- Rank 3: Benefit

## Auto-Indexes
LIST FROM outgoing(file) WHERE status = "complete"

## Player-Facing Summary

Template SapientSpecies is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template SapientSpecies as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template SapientSpecies.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Plot Hooks

- A stranger needs help delivering before winter
- A map reveals ancient history about this place
- A stranger needs help stealing before the new moon
- Strange disappearances suggest a curse

## 12_Research Specific Content

Contextual improvement based on 12_Research
