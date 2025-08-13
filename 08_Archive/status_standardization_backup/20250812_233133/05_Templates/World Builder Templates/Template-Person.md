---
MyContainer: []
MyCategory: null
tags:
- active
- both
- category/people
- lore
obsidianUIMode: preview
aliases:
- characters other name
NoteStatus: "\u2753"
char_status: Alive
char_race: Human
char_gender: Male
char_items: null
char_age: Adult
parents:
- Josh
- Susan
children:
- Bob
- Fred
enemies:
- Zander
allies:
- Emyerson
- Bob
- Frank
siblings:
- Flip
partner:
- Jane
Connected_Quests: []
Connected_Groups: []
in_combat: true
initiative: 12
current_hp: 15
max_hp: 20
relationships:
- target: '[[Captain Garrett Stormcutter]]'
  type: ally
  strength: 3
world: Both
updated: '2025-08-13T01:18:31.190995+00:00'
created: '2025-08-11'
status: active
type: Lore
---





<%*

// 1) Prompt for Person's Name and rename file
const personName = await tp.system.prompt("Enter Person’s Name", tp.file.title);
if (!personName) return;
await tp.file.rename(personName);

// 2) Gather all potential residence notes
const allFiles = tp.app.vault.getMarkdownFiles();
const locationFiles = allFiles.filter(f =>
  f.path.startsWith("02_Worldbuilding/Hubs/") ||
  f.path.startsWith("02_Worldbuilding/Points of Interest/") ||
  f.path.startsWith("02_Worldbuilding/Regions/") ||
  f.path.startsWith("02_Worldbuilding/Places/")
);

// Add placeholder option
const placeholderLabel = "🌀 No Residence Selected";
const placeholderPath = "__placeholder__";

const locationChoices = [placeholderLabel, ...locationFiles.map(f => f.basename)];
const locationValues  = [placeholderPath, ...locationFiles.map(f => f.path)];

const chosenPath = await tp.system.suggester(locationChoices, locationValues, true);
if (!chosenPath) return;

// 3) Build wiki-link
let locationLink = null;
if (chosenPath !== placeholderPath) {
  const alias = chosenPath.split("/").pop().replace(/\.md$/, "");
  locationLink = `[[${chosenPath}|${alias}]]`;
}

// 4) Insert into front-matter as MyContainer
setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm["MyContainer"] = locationLink ?? "None";
  });
}, 100);

%>



> [!NOTE|div-m] Parent Location: `INPUT[inlineListSuggester(optionQuery(#Category/Hub),optionQuery(#Category/Region),optionQuery(#Category/Place),optionQuery(#Category/PointofInterest)):MyContainer]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![[Template_Person_Placeholder.png]]
>
>> [!div-m|no-title] Place Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General),
>> option(2, 📒Statblock),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#General|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Statblock|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, ⚔️Inventory),
> option(2, 🔗Connections),
> option(3, 🧑‍🤝‍🧑Relationships),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Inventory|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Connections|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Relationships|no-h clean]]

---

# General

Name: `= this.file.name`


Status: `INPUT[inlineSelect(option(Alive), option(Dead), option(Missing), option(Unknown))][:char_status]`

Race/Species: `INPUT[inlineSelect(option(Human), option(Elf), option(Dwarf), option(Halfling), option(Orc), option(Dragonborn), option(Tiefling), option(Gnome), option(Half-Elf), option(Half-Orc))][:char_race]`

Gender: `INPUT[inlineSelect(option(Male), option(Female), option(Nonbinary), option(Other))][:char_gender]`

Age: `INPUT[inlineSelect(option(Child), option(Teen), option(Adult), option(Elder))][:char_age]`

---

This is the persons description. 

# Statblock

```statblock
monster: Commoner
```

# GM Notes

Make notes of what you need to track in the town here. 

# Inventory

The following items belong to `= this.file.name`.

```dataviewjs
// This dataviewjs code grabs a random item(s) from the folder below. You can remove this if that's not useful. It's an example of what's possible. 
// 1. grab all pages in the folder
let pages = dv.pages('"03_Mechanics/Items"').values;

// 2. shuffle (Fisher–Yates)
for (let i = pages.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [pages[i], pages[j]] = [pages[j], pages[i]];
}

// 3. take the first two
let pick = pages.slice(0, 1);

// 4. render table of clickable links + Gender
dv.table(
  ["Random Item", "cost", "weight"],
  pick.map(p => [
    dv.fileLink(p.file.path),        // clickable note link
    p.cost ?? "—",                  // frontmatter field (falls back to “—” if missing)
    p.weight ?? "—"                  // frontmatter field (falls back to “—” if missing)
  ])
);
```

# Connections
Is the person linked to any groups or quests?

Quests: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):Connected_Quests]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

Groups: `INPUT[inlineListSuggester(optionQuery(#Category/Group)):Connected_Groups]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

# Relationships

List important relationships here. 

```dataviewjs
var parents = dv.current().parents ?? [];
var children = dv.current().children ?? [];
var enemies = dv.current().enemies ?? [];
var allies = dv.current().allies ?? [];
var siblings = dv.current().siblings ?? [];
var current = dv.current().file.name;
var partner = dv.current().partner ?? [];

dv.paragraph("```mermaid\nflowchart LR\n" +
  // Parents with internal-link on individual nodes only
  (parents.length > 0 ? parents.map((parent, index) => `P${index + 1}[${parent}]:::internal-link\nP${index + 1} --> Current\n`).join('') : '') +
  
  // Current node
  `Current[${current}]\n` +
  
  // Partner group node (no internal-link applied)
  (partner.length > 0 ? `PT[Partner]\nCurrent --> PT\n` : '') +
  
  // Individual partners with internal-link
  (partner.length > 0 ? partner.map((p, index) => `PT${index + 1}[${p}]:::internal-link\nPT --> PT${index + 1}\n`).join('') : '') +

  // Children group node (no internal-link applied)
  (children.length > 0 ? `C[Children]\nCurrent --> C\n${children.map((child, index) => `C${index + 1}[${child}]:::internal-link\nC --> C${index + 1}\n`).join('')}` : '') +

  // Siblings group node (no internal-link applied)
  (siblings.length > 0 ? `S[Siblings]\nCurrent --> S\n${siblings.map((sibling, index) => `S${index + 1}[${sibling}]:::internal-link\nS --> S${index + 1}\n`).join('')}` : '') +

  // Enemies group node (no internal-link applied)
  (enemies.length > 0 ? `E[Enemies]\nCurrent --> E\n${enemies.map((enemy, index) => `E${index + 1}[${enemy}]:::internal-link\nE --> E${index + 1}\n`).join('')}` : '') +

  // Allies group node (no internal-link applied)
  (allies.length > 0 ? `A[Allies]\nCurrent --> A\n${allies.map((ally, index) => `A${index + 1}[${ally}]:::internal-link\nA --> A${index + 1}\n`).join('')}` : '') +

  // Styling: Apply internal-link only to individual nodes, not group nodes
  `class ${parents.length > 0 ? parents.map((_, index) => `P${index + 1},`).join('') : ''}Current${children.length > 0 ? children.map((_, index) => `C${index + 1},`).join('') : ''}${siblings.length > 0 ? siblings.map((_, index) => `S${index + 1},`).join('') : ''}${enemies.length > 0 ? enemies.map((_, index) => `E${index + 1},`).join('') : ''}${allies.length > 0 ? allies.map((_, index) => `A${index + 1},`).join('') : ''} internal-link;`
)
```
%% CODE ABOVE CREATED WITH CHAT-GPT. ITS COMPLEX CODE THAT SHOULD NOT BE CHANGED UNLESS YOU KNOW WHAT YOU ARE DOING %%
%% MERMAID-FIX-TEXT-CLIPPING.CSS is enabled in Settings > Appearance > CSS Snippets. This fixes text clipping and styles the boxes %%

> [!NOTE]- Relationship Config - Enter name of People Notes
> `BUTTON[button_person]` Nodes will link to notes of the same name. 
> 
> | Parents    | Partner    | Children |
> | --- | --- | --- |
> | `INPUT[list:parents]`    | `INPUT[list:partner]`    | `INPUT[list:children]`  |
> 
> | Siblings    | Enemies    | Allies |
> | --- | --- | --- |
> | `INPUT[list:siblings]`    | `INPUT[list:enemies]`    | `INPUT[list:allies]`  |




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

Template Person is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Person as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Person.

## Adventure Hooks

- A rumor ties Template Person to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template Person to avert a public scandal.
- A map overlay reveals a hidden approach to Template Person active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[02_Worldbuilding/Lore/Template_Person_Placeholder.png]]
