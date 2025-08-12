---
tags:
- both
- category/group
- draft
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
updated: 2025-08-11
created: 2025-08-11
status: draft
type: Lore
---



<%*

// 1) Rename if title starts with "NewHub"
let title;
if (tp.file.title.startsWith("NewGroup")) {
  title = await tp.system.prompt("Enter Group Name");
  if (!title) {
    new Notice("No name entered. Aborting.");
    return;
  }
  await tp.file.rename(title);
} else {
  title = tp.file.title;
}

// 2) Gather all region files under 02_Worldbuilding/Regions
const regionFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("02_Worldbuilding/Regions/"));

const placeholderLabel = "🌀 No Region Selected";
const placeholderPath = "__placeholder__";

// 3) Build suggester options
const regionChoices = [placeholderLabel, ...regionFiles.map(f => f.basename)];
const regionValues  = [placeholderPath, ...regionFiles.map(f => f.path)];
const chosenPath    = await tp.system.suggester(regionChoices, regionValues, true);
if (!chosenPath) return;

// 4) Build the wiki-link or fallback
let wikiLink = null;
if (chosenPath !== placeholderPath) {
  const chosenAlias = chosenPath.split("/").pop().replace(/\.md$/, "");
  wikiLink = `[[${chosenPath}|${chosenAlias}]]`;
}

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

> [!NOTE] Parent Region: `INPUT[suggester(optionQuery(#Category/Place)):MyContainer]`

> [!column|no-i no-t]
>> [!note|no-title]
>> ![[Template_Group_Placeholder.png]]
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
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

%% DO NOT MAKE CHANGES TO THIS PART OF THE TEMPLATE %%

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🔗Hierarchy),
> option(2, ⚡Enemies/Allies),
> option(3, 🛠️Services),
> option(4,➕Membership),
> option(5, 🛡️Ranks),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Hierarchy|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Enemies/Allies|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Services|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Membership|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Ranks|no-h clean]]

%% MAKE CHANGES BELOW THIS LINE %%

---

# General

**Select Parent:** `INPUT[suggester(optionQuery(#Category/Hub),optionQuery(#Category/Region)):MyContainer]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

**Select Category:** `INPUT[template-group-type][:MyCategory]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

**Values:** The syndicate values skill and ambition, but also discretion and loyalty.

Allies / Enemies:

Membership Requirements:

Benefits This crime syndicate can protect its members from the consequences of all but the most heinous crimes.
Rank 1: borrow resources (100 gp), case (+15), diversion (+15), gather information, lookout (4 ways, +15)
Rank 2: borrow resources (1,000 gp), put in a good word, remove evidence, rob, search black market
Rank 3: borrow resources (5,000 gp), command team (1d4 NPCs of 3rd level, or 3d4 NPCs of 1st level), destroy evidence, market manipulation, reciprocal benefits Rank 4: black market mastery, borrow resources (15,000 gp), command team (1d4 NPCs of 6th level, or 5d4 NPCs of 3rd level)

# Goals

> [!NOTE]+ Public Goals
> - [ ] Achieve This
> - [ ] Achieve That

> [!NOTE]- Private Goals
> - [ ] Achieve This
> - [ ] Achieve That

# Membership
To join the group, a PC must spend X week 'doing' something, or 'something else'.

# GM Notes

Make notes of what you need to track in the town here. 

# Hierarchy

`BUTTON[button_person]` List important relationships here. 

```dataviewjs
// 1) Grab your frontmatter arrays
const leader    = dv.current().leader    ?? null;
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
    : "") +

  // Members group
  (members.length > 0
    ? `MG[Members]\n${officers.length ? "OG" : "L"} --> MG\n` +
      members.map((m,i) =>
        `M${i+1}[${m}]:::internal-link\nMG --> M${i+1}\n`
      ).join("")
    : "") +

  // Initiates group
  (initiates.length > 0
    ? `IG[Initiates]\n${members.length ? "MG" : (officers.length ? "OG" : "L")} --> IG\n` +
      initiates.map((n,i) =>
        `I${i+1}[${n}]:::internal-link\nIG --> I${i+1}\n`
      ).join("")
    : "") +

  "```"
)
```
%% CODE ABOVE CREATED WITH CHAT-GPT. ITS COMPLEX CODE THAT SHOULD NOT BE CHANGED UNLESS YOU KNOW WHAT YOU ARE DOING %%

> [!NOTE]- Relationship Config - Enter name of People Notes
> | Leader    | Officers    | 
> | --- | --- | 
> | `INPUT[list:leader]`    | `INPUT[list:officers]`    | 
> 
> | Members    | Initiates    | 
> | --- | --- | 
> | `INPUT[list:members]`    | `INPUT[list:initiates]`    |

# Enemies/Allies
**Enemies:** `INPUT[inlineListSuggester(optionQuery(#Category/Group),optionQuery(#Category/People)):MyEnemies]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

**Allies:** `INPUT[inlineListSuggester(optionQuery(#Category/Group),optionQuery(#Category/People)):MyAllies]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

# People

The following people are members of this group.  

```dataview
TABLE WITHOUT ID link(file.name) AC "Name", char_race AC "Race", char_gender AC "Gender"
FROM "02_Worldbuilding/People"
WHERE contains(Connected_Groups, this.file.link)
SORT file.name ASC
```


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
    displayName: Status
  note.char_race:
    displayName: Race
  note.char_gender:
    displayName: Gender
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
        direction: ASC
      - column: file.name
        direction: ASC
    columnSize:
      file.name: 177
      note.MyCategory: 221
      note.MyContainer: 244
      note.char_status: 137
      note.char_race: 160
      note.char_gender: 143
      note.char_age: 149

```


# Services

Services offered. 


> [!NOTE]+ Public Services
> | Item   | Cost | Weight |
> | ------ | ---- | ------ |
> | Service 1 | 1gp  | L      |
> | Service 2 | 1cp  | -      |

> [!NOTE]- Member Services
> | Item   | Cost | Weight |
> | ------ | ---- | ------ |
> | Service 1 | 1gp  | L      |
> | Service 2 | 1cp  | -      |

# Ranks

Ranks listed here

- Rank 1: Benefit
- Rank 2: Benefit
- Rank 3: Benefit

<!-- ENHANCED_TEMPLATE_FOOTER -->

## Quick Actions
- Button: `BUTTON[button_person]` (create or link a person)
- Dice: `= round(d(20))` test roll

## Auto-Indexes
```dataview
LIST FROM outgoing(file) WHERE status = "complete"
```

## Accessibility Defaults
- Screen reader summary field in frontmatter recommended.
- Content warnings list; safety tools references.

## Player-Facing Summary

Template Group is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Group as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Group.

## Adventure Hooks

- A rumor ties Template Group to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template Group to avert a public scandal.
- A map overlay reveals a hidden approach to Template Group active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[05_Templates/World Builder Templates/Template-Item]]
