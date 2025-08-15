# Template-Star-System

---
title: Template Star System
type: Lore
tags:
- lore
- both
- category/starsystem
- research
- active
created: '2025-08-11'
modified: '2025-08-14'
status: active
obsidianUIMode: preview
MyContainer: 
world: Both
updated: '2025-08-13T01:18:31.189482+00:00'
---

<%*
const placeholderPrefix = "NewStarSystem";
let title;

// 1) Prompt only if still using placeholder name
if (tp.file.title.startsWith(placeholderPrefix)) {
  title = await tp.system.prompt("Enter Star System Name");
  if (!title) {
    new Notice("No name entered. Aborting.");
    return;
  }
  await tp.file.rename(title);
} else {
  title = tp.file.title;
}

// 2) Gather Galaxy files from folder
const galaxyFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("02_Worldbuilding/Galaxies/"));

const placeholderLabel = "🌀 No Galaxy Selected";
const placeholderPath = "__placeholder__";

// 3) Prompt to choose Galaxy (or skip)
const galaxyChoices = [placeholderLabel, ...galaxyFiles.map(f => f.basename)];
const galaxyValues = [placeholderPath, ...galaxyFiles.map(f => f.path)];

const chosenPath = await tp.system.suggester(galaxyChoices, galaxyValues, true);
if (!chosenPath) return;

// 4) Build wiki-link if selected
let wikiLink = ;
if (chosenPath !== placeholderPath) {
  const chosenAlias = chosenPath.split("/").pop().replace(/\.md$/, "");
  wikiLink = `[[${chosenPath}|${chosenAlias}]]`;

// 5) Write to frontmatter
setTimeout(() => {
  const newFile = tp.file.find_tfile(tp.file.path(true));
  if (!newFile) {
    new Notice("Could not find file after rename.");
  app.fileManager.processFrontMatter(newFile, fm => {
    fm["MyContainer"] = wikiLink ?? "None";
  });
}, 200);
%>

> [!NOTE] Parent Continent: `INPUT[suggester(optionQuery(#Category/Galaxy)):MyContainer]`

> [!column|no-i no-t]
>> [!info|no-title] Map
>> ![[Template_StarSystem_Placeholder.png|Template StarSystem Placeholder.png]]
>
>> [!note|no-title] Town Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General Info),
>> option(2, 🌐Star System),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#General Info|no-h clean]]
>>>
>>> > ![[#Star System Details|no-h clean]]
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🗺️Planets),
> option(2, 🗺️Points of Interest),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Planets|no-h clean]]
> >
> > > ![[#Points of Interest|no-h clean]]

---
# General Info

This is the star system description. 


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


## Star System Details

**Domit Races:**  

## GM Notes

Make notes of what you need to track in the star system here. 

## Planets

`BUTTON[button_planet]` 

```dataview
TABLE WITHOUT ID link(file.name) AC "Planet(s)"
FROM "02_Worldbuilding/Planets"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

## Points of Interest

`BUTTON[button_pointofinterest]` 

TABLE WITHOUT ID link(file.name) AC "Points of Interest(s)"
FROM "02_Worldbuilding/Points of Interest"

## Auto-Indexes
LIST FROM outgoing(file) WHERE status = "complete"

## Player-Facing Summary

Template Star System is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Star System as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Star System.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Plot Hooks

- A noble needs help delivering before winter
- A prisoner has gone missing and war looms

## 12_Research Specific Content

Contextual improvement based on 12_Research


## 12_Research Specific Content

Contextual improvement based on 12_Research


## 12_Research Specific Content

Contextual improvement based on 12_Research
