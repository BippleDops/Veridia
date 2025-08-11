---
tags:
- both
- category/continent
- draft
obsidianUIMode: preview
MyContainer: null
world: Both
updated: '2025-08-11T13:08:47.024853+00:00'
created: '2025-08-11T13:08:47.024853+00:00'
status: draft
type: Lore
---


<%*

// 1) Rename if the file starts with "NewContinent"
let title;
if (tp.file.title.startsWith("NewContinent")) {
  title = await tp.system.prompt("Enter Continent Name");
  if (!title) {
    new Notice("No title entered. Aborting.");
    return;
  }
  await tp.file.rename(title);
} else {
  title = tp.file.title;
}

// 2) Gather all planet files under 02_Worldbuilding/Planets/
const planetFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("02_Worldbuilding/Planets/"));

const placeholderLabel = "🌀 No Continent Selected";
const placeholderPath = "__placeholder__";

// 3) Build options list with placeholder
const planetChoices = [placeholderLabel, ...planetFiles.map(f => f.basename)];
const planetValues = [placeholderPath, ...planetFiles.map(f => f.path)];

// 4) Prompt user to select
const chosenPath = await tp.system.suggester(planetChoices, planetValues, true);
if (!chosenPath) return;

// 5) Build wiki-link or fallback
let wikiLink = null;
if (chosenPath !== placeholderPath) {
  const chosenAlias = chosenPath.split("/").pop().replace(/\.md$/, '');
  wikiLink = `[[${chosenPath}|${chosenAlias}]]`;
}

// 6) Write to frontmatter
setTimeout(() => {
  const newFile = tp.file.find_tfile(tp.file.path(true));
  if (!newFile) {
    new Notice("Could not find file after rename.");
    return;
  }
  app.fileManager.processFrontMatter(newFile, fm => {
    fm["MyContainer"] = wikiLink ?? "None";
  });
}, 100);

%>


> [!NOTE] Parent Planet: `INPUT[suggester(optionQuery(#Category/Planet)):MyContainer]`

> [!column|no-i no-t]
>> [!info|no-title] Map
>> ![[Template_Continent_Placeholder.png]]
>
>> [!note|no-title] Town Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General Info),
>> option(2, 🌐Region Details),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#General Info|no-h clean]]
>>>
>>> >[!div-m|no-title]
>>> > ![[#Region Details|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🗺️Regions),
> option(2, ⚔️Capital Cities),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Regions|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Capital Cities|no-h clean]]
> > 

---
# General Info

This is the continent description. 

# Region Details

**Dominant Races:**  
**Climate:** 

# GM Notes

Make notes of what you need to track in the region here. 

# Regions

`BUTTON[button_region]` **continent** Places where people live - Cities, Towns, Villages, Hamlets, Encampment, Keeps, Fortresses, Strongholds.

```dataview
TABLE WITHOUT ID link(file.name) AC "Region(s)", MyCategory as "Type"
FROM "02_Worldbuilding/Regions"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

# Capital Cities

`BUTTON[button_group]` Groups of people and power - religious, cults, guilds, military

```dataviewjs
// Step 1: Get current continent note path
const thisContinent = dv.current().file.path;

// Step 2: Find all Region notes that belong to this continent
const regions = dv.pages('"02_Worldbuilding/Regions"')
  .where(region => {
    if (!region.MyContainer) return false;
    const containerLinks = Array.isArray(region.MyContainer) ? region.MyContainer : [region.MyContainer];
    return containerLinks.some(link => link.path === thisContinent);
  });

// Get a Set of matching Region paths
const regionPaths = new Set(regions.map(r => r.file.path));

// Step 3: Find all Hubs in those Regions and matching category
const hubs = dv.pages('"02_Worldbuilding/Hubs"')
  .where(hub => {
    if (!hub.MyContainer || !hub.MyCategory) return false;
    const containers = Array.isArray(hub.MyContainer) ? hub.MyContainer : [hub.MyContainer];
    return containers.some(link => regionPaths.has(link.path)) &&
      hub.MyCategory.includes("City +1500");
  });

// Step 4: Output
dv.table(
  ["Hub", "Type", "Region(s)"],
  hubs.map(h => [
    h.file.link,
    h.MyCategory,
    h.MyContainer
  ])
);
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
