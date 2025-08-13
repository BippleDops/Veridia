---
MyCategory: Hamlet <80
MyContainer: null
created: '2025-08-11'
obsidianUIMode: preview
status: complete
tags:
- both
- category/hub
- complete
- content/lore
- lore
- status/in-progress
- world/both
type: Lore
updated: '2025-08-13T12:34:17.979221+00:00'
world: Both
---






%% CODE BELOW IS TEMPLATER CODE. IT TRIGGERS THIS CODE WHEN THE NOTE IS CREATED USING THE META-BIND BUTTONS %% 
<%*

// 1) Rename if title starts with "NewHub"
let title;
if (tp.file.title.startsWith("NewHub")) {
  title = await tp.system.prompt("Enter Hub Name");
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

// 3) Suggester for picking region (with placeholder)
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

// 5) Prompt for Hub type (MyCategory)
const categoryOptions = [
  "City +1500",
  "Town +200",
  "Village +80",
  "Hamlet <80",
  "Encampment",
  "Keep",
  "Fortress",
  "Stronghold"
];
const chosenCat = await tp.system.suggester(categoryOptions, categoryOptions, true);
if (!chosenCat) return;

// 6) Write both properties into frontmatter
setTimeout(() => {
  const newFile = tp.file.find_tfile(tp.file.path(true));
  if (!newFile) return;
  app.fileManager.processFrontMatter(newFile, fm => {
    fm["MyContainer"] = wikiLink ?? "None";
    fm["MyCategory"]  = chosenCat;
  });
}, 100);

%>


> [!NOTE|div-m] Parent Region: `INPUT[inlineListSuggester(optionQuery(#Category/Region)):MyContainer]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

> [!column|no-i no-t]
>> [!info|no-title] Map
>> ```leaflet  
>> id: ZalkorsFerry ### Must be unique with no spaces  
>> image: [[Zelkor's Ferry.png]] ### Link to the map image file. Do not add a ! in front of the image  
>> bounds: [[0,0], [5000, 4025]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
>> height: 500px ### Size of the leaflet embed in px on your screen  
>> width: 95% ### Size of the leaflet embed in your note  
>> lat: 2500 ### To center the map, make this half of the map height.  
>> long: 2012.5 ### To center the map, make this half of the map width.  
>> minZoom: -3 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
>> maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
>> defaultZoom: -3 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
>> zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
>> unit: mi ### The value displayed when measuring so you know what type of unit is being measure.  
>> scale: 0.09328358208955223 ### Real units/px (resolution) of your map  
>> recenter: false  
>> darkmode: false ### marker
>> ```
>
>> [!note|no-title] Town Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General),
>> option(2, 🏃‍♂️‍➡️NPCs),
>> option(3, 📝GM Notes),
>> option(4, 🐎Travel),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#General|no-h clean]]
>>>
>>> >[!div-m|no-title]
>>> > ![[#NPCs|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#Travel|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🛒Commerce),
> option(2, 🍎Agriculture),
> option(3, ⚔️Military),
> option(4, 💭Philosophy),
> option(5, ⚙️Industrial),
> option(6, 🏠Nesting),
> option(7, 👑Government),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Commerce|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Agriculture|no-h2 clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Military|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Philosophy|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Industrial|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Nesting|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Government|no-h clean]]

---
# General

Select Settlement: `INPUT[suggester(optionQuery(#Category/Region)):MyContainer]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

Select Category: `INPUT[template-hub-category][:MyCategory]`
%% MODIFY OPTIONS IN SETTINGS > COMMUNITY PLUGINS > META-BIND > EDIT TEMPLATES > template-hub-category %%

This is the town description. 

## NPCs

`BUTTON[button_person]` List important NPCs here. 

```dataviewjs
// 1) Hub’s vault-relative path
const hubPath = dv.current().file.path;

// 2) Helper to extract the path from a "[[vault_backup_20250813_073007/02_Worldbuilding/Lore/path]]" entry
function extractPaths(mc) {
  if (!mc) return [];
  const arr = Array.isArray(mc) ? mc : [mc];
  return arr
    .map(link => {
      const m = String(link).match(/\[\[(.*?)\|/);
      return m ? m[1] : null;
    })
    .filter(Boolean);
}

// 3) Find all Places whose MyContainer points to this Hub
const placePages = dv.pages(`"02_Worldbuilding/Places"`)
  .where(p => extractPaths(p.MyContainer).includes(hubPath))
  .values;
// collect their **paths**
const placePaths = placePages.map(p => p.file.path);

// 4a) Indirect People: whose MyContainer links to any of those placePaths
const indirect = dv.pages(`"02_Worldbuilding/People"`)
  .where(p => {
    const paths = extractPaths(p.MyContainer);
    return paths.some(path => placePaths.includes(path));
  })
  .values;

// 4b) Direct People: whose MyContainer links **directly** to this Hub
const direct = dv.pages(`"02_Worldbuilding/People"`)
  .where(p => extractPaths(p.MyContainer).includes(hubPath))
  .values;

// 5) Merge & dedupe by file path
const allPeople = [...indirect, ...direct];
const unique = Array.from(
  new Map(allPeople.map(p => [p.file.path, p])).values()
);

// 6) Build rows (Name clickable, Race, Gender, Associated Group)
const rows = unique.map(p => {
  const linkEl = dv.el("a", p.file.name, {
    href: "#",
    cls: "dataview-link",
  });
  linkEl.addEventListener("click", e => {
    e.preventDefault();
    app.workspace.openLinkText(p.file.path, dv.current().file.path);
  });

  const race = p.char_race ?? "";
  const gender = p.char_gender ?? "";
  let groups = p.Connected_Groups ?? [];
  if (!Array.isArray(groups)) groups = [groups];
  const assoc = groups.join(", ");

  return [linkEl, race, gender, assoc];
});

// 7) Render the table
dv.table(
  ["Name", "Race", "Gender", "Associated Group"],
  rows
);
```

## GM Notes

Make notes of what you need to track in the town here. 

## Travel

%% For every other hub/location that you would like to see travel time to, add a line in the table and replicate the format provided. Change the Town name and link it to that towns note and then change the 88 in the formula to match the distance in miles to that place. Use a Leaflet map to measure the distance. %%

`VIEW[{Travel Calculator#HoursPerDay}][math]` hrs per day
[[02_Worldbuilding/Lore/Travel Calculator]]  / [[02_Worldbuilding/Lore/Exhaustion]] Level: `VIEW[{Travel Calculator#ExhaustionLevel}][math]`

| Destination |  Travel Days  |
| ---|---|
| [[vault_backup_20250813_073007/02_Worldbuilding/Lore/Next Town B]] | 🕓: `VIEW[round((88* {Travel Calculator#TravelCalc}) / 60 / {Travel Calculator#HoursPerDay}, 1)]`      |
| [[Next Town B ]] | 🕓: `VIEW[round((88* {Travel Calculator#TravelCalc}) / 60 / {Travel Calculator#HoursPerDay}, 1)]`

# CAMPING 

C - Commerce (Economics and Entertainment) - Shops, Malls, Theatres, Markets, Carnivals, Electronics
A - Agriculture (Resource Production and Collection) - Farms, Mines, Fisheries, Lumber Yards, Oil Rigs, Power Plants
M - Military (Protection and Transportation) - Forts, Bases, Armories, Walls, Seaports, Airports, Spaceports
P - Philosophy (Religion and Education) - Houses of Worship, Schools, Universities, Laboratories, Arboretums
I - Industrial (Resource Utilization and Processing) - Factories, Metalworks, Bakeries, Artisans, Jewelers
N - Nesting (Housing and Civil Engineering) - Residential Areas, Inns/Hotels
G - Government (Legislation and Judicial) - Town Halls, Courthouses, Tourist Stops, Monuments/Landmarks

## Commerce

This is the content

`BUTTON[button_place]` `BUTTON[button_person]` **C - Commerce** (Economics and Entertainment) - Shops, Malls, Theatres, Markets, Carnivals, Electronics

```dataview
TABLE WITHOUT ID link(file.name) AC "Place(s)", MyCategory AC "Type"
FROM "02_Worldbuilding/Places"
WHERE contains(MyContainer, this.file.link)
  AND MyCategory = "Commerce"
SORT file.name ASC
```

## Agriculture

`BUTTON[button_place]` `BUTTON[button_person]` **A - Agriculture** (Resource Production and Collection) - Farms, Mines, Fisheries, Lumber Yards, Oil Rigs, Power Plants

```dataview
TABLE WITHOUT ID link(file.name) AC "Place(s)", MyCategory AC "Type"
FROM "02_Worldbuilding/Places"
WHERE contains(MyContainer, this.file.link)
  AND MyCategory = "Agriculture"
SORT file.name ASC
```

## Military

`BUTTON[button_place]` `BUTTON[button_person]` **M - Military** (Protection and Transportation) - Forts, Bases, Armories, Walls, Seaports, Airports, Spaceports

```dataview
TABLE WITHOUT ID link(file.name) AC "Place(s)", MyCategory AC "Type"
FROM "02_Worldbuilding/Places"
WHERE contains(MyContainer, this.file.link)
  AND MyCategory = "Military"
SORT file.name ASC
```


## Philosophy

`BUTTON[button_place]` `BUTTON[button_person]` **P - Philosophy** (Religion and Education) - Houses of Worship, Schools, Universities, Laboratories, Arboretums

```dataview
TABLE WITHOUT ID link(file.name) AC "Place(s)", MyCategory AC "Type"
FROM "02_Worldbuilding/Places"
WHERE contains(MyContainer, this.file.link)
  AND MyCategory = "Philosophy"
SORT file.name ASC
```

## Industrial

`BUTTON[button_place]` `BUTTON[button_person]` **I - Industrial** (Resource Utilization and Processing) - Factories, Metalworks, Bakeries, Artisans, Jewelers

```dataview
TABLE WITHOUT ID link(file.name) AC "Place(s)", MyCategory AC "Type"
FROM "02_Worldbuilding/Places"
WHERE contains(MyContainer, this.file.link)
  AND MyCategory = "Industrial"
SORT file.name ASC
```

## Nesting

`BUTTON[button_place]` `BUTTON[button_person]` **N - Nesting** (Housing and Civil Engineering) - Residential Areas, Bridges, Parks, Inns/Hotels

```dataview
TABLE WITHOUT ID link(file.name) AC "Place(s)", MyCategory AC "Type"
FROM "02_Worldbuilding/Places"
WHERE contains(MyContainer, this.file.link)
  AND MyCategory = "Nesting"
SORT file.name ASC
```

## Government

`BUTTON[button_place]` `BUTTON[button_person]` **G - Government** (Legislation and Judicial) - Town Halls, Courthouses, Tourist Stops, Monuments/Landmarks

```dataview
TABLE WITHOUT ID link(file.name) AC "Place(s)", MyCategory AC "Type"
FROM "02_Worldbuilding/Places"
WHERE contains(MyContainer, this.file.link)
  AND MyCategory = "Government"
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

Template Hub is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Hub as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Hub.

## Adventure Hooks

- A rumor ties Template Hub to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template Hub to avert a public scandal.
- A map overlay reveals a hidden approach to Template Hub active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[05_Templates/World Builder Templates/Template-Place|05 Templates/World Builder Templates/Template Place]]
