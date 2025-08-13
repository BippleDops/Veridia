---
MyContainer: null
created: '2025-08-11'
obsidianUIMode: preview
status: complete
tags:
- both
- complete
- content/lore
- content/mechanics
- lore
- status/in-progress
- world/both
type: Lore
updated: '2025-08-13T12:34:03.274895+00:00'
world: Both
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
let wikiLink = null;
if (chosenPath !== placeholderPath) {
  const chosenAlias = chosenPath.split("/").pop().replace(/\.md$/, "");
  wikiLink = `[[${chosenPath}|${chosenAlias}]]`;
}

// 5) Write to frontmatter
setTimeout(() => {
  const newFile = tp.file.find_tfile(tp.file.path(true));
  if (!newFile) {
    new Notice("Could not find file after rename.");
    return;
  }
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
>>> >[!div-m|no-title]
>>> > ![[#Star System Details|no-h clean]]
>>>
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
> > >[!div-m|no-title]
> > > ![[#Points of Interest|no-h clean]]
> >

---
# General Info

This is the star system description. 

## Star System Details

**Dominant Races:**  

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

```dataview
TABLE WITHOUT ID link(file.name) AC "Points of Interest(s)"
FROM "02_Worldbuilding/Points of Interest"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```
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

Template Star System is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Star System as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Star System.

## Adventure Hooks

- A rumor ties Template Star System to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template Star System to avert a public scandal.
- A map overlay reveals a hidden approach to Template Star System active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[02_Worldbuilding/Lore/Template_StarSystem_Placeholder.png|02 Worldbuilding/Lore/Template StarSystem Placeholder.png]]
