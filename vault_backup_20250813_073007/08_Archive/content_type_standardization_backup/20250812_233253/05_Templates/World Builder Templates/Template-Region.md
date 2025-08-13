---
tags:
- active
- both
- category/region
- complete
- lore
obsidianUIMode: preview
MyContainer: null
world: Both
updated: '2025-08-13T12:34:25.286202+00:00'
created: '2025-08-11'
status: complete
type: Lore
---





<%*

// 1) Rename if title starts with "NewRegion"
let title;
if (tp.file.title.startsWith("NewRegion")) {
  title = await tp.system.prompt("Enter Region Name");
  if (!title) {
    new Notice("No title entered. Aborting.");
    return;
  }
  await tp.file.rename(title);
} else {
  title = tp.file.title;
}

// 2) Gather all continent files under 02_Worldbuilding/Continents/
const continentFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("02_Worldbuilding/Continents/"));

if (continentFiles.length === 0) {
  new Notice("No continent notes found.");
  return;
}

const placeholderLabel = "🌀 No Continent Selected";
const placeholderPath = "__placeholder__";

// 3) Prompt user to choose container
const continentChoices = [placeholderLabel, ...continentFiles.map(f => f.basename)];
const continentValues  = [placeholderPath, ...continentFiles.map(f => f.path)];
const chosenPath       = await tp.system.suggester(continentChoices, continentValues, true);
if (!chosenPath) return;

// 4) Build the wiki-link or fallback
let wikiLink = null;
if (chosenPath !== placeholderPath) {
  const chosenAlias = chosenPath.split("/").pop().replace(/\.md$/, '');
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

> [!NOTE] Parent Continent: `INPUT[suggester(optionQuery(#Category/Continent)):MyContainer]`

> [!column|no-i no-t]
>> [!info|no-title] Map
>> ```leaflet  
>> id: ZalkorsFerry ### Must be unique with no spaces  
>> image: [[The Island of Screams.jpg]] ### Link to the map image file. Do not add a ! in front of the image  
>> bounds: [[0,0], [5888, 5882]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
>> height: 500px ### Size of the leaflet embed in px on your screen  
>> width: 95% ### Size of the leaflet embed in your note  
>> lat: 2944 ### To center the map, make this half of the map height.  
>> long: 2941 ### To center the map, make this half of the map width.  
>> minZoom: -5 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
>> maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
>> defaultZoom: -3.5 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
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
> option(1, 🏡Hubs),
> option(2, 🍎Points of Interest),
> option(3, ⚔️Groups),
> option(4, 💭Quests),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Hubs|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Points of Interest|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Groups|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Quests|no-h clean]]

---
# General Info

This is the region description. 

## Region Details

**Dominant Races:**  
**Climate:** 
**Seasons:**

## GM Notes

Make notes of what you need to track in the region here. 

## Hubs

`BUTTON[button_hub]` **Hubs** Places where people live - Cities, Towns, Villages, Hamlets, Encampment, Keeps, Fortresses, Strongholds.

```dataview
TABLE WITHOUT ID link(file.name) AC "Hubs(s)", MyCategory as "Type"
FROM "02_Worldbuilding/Hubs"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

## Points of Interest

`BUTTON[button_pointofinterest]`  Places that can be explored. 

```dataview
TABLE WITHOUT ID link(file.name) AC "Points of Interest(s)", MyCategory as "Type"
FROM "02_Worldbuilding/Points of Interest"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

## Groups

`BUTTON[button_group]` Groups of people and power - religious, cults, guilds, military

```dataview
TABLE WITHOUT ID link(file.name) AC "Group(s)", MyCategory as "Type"
FROM "02_Worldbuilding/Groups"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```


## Quests

`BUTTON[button_quest]` **P - Philosophy** (Religion and Education) - Houses of Worship, Schools, Universities, Laboratories, Arboretums

```dataview
TABLE WITHOUT ID link(file.name) AC "Quest(s)", questGiver AC "Quest Giver", questStatus AC "Status"
FROM "02_Worldbuilding/Quests"
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

Template Region is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Region as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Region.

## Adventure Hooks

- A rumor ties Template Region to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template Region to avert a public scandal.
- A map overlay reveals a hidden approach to Template Region active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[02_Worldbuilding/Lore/The Island of Screams.jpg|02 Worldbuilding/Lore/The Island Of Screams.jpg]]
