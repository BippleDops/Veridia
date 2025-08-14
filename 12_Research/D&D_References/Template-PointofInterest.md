# Template-PointofInterest

---
title: Template PointofInterest
type: Lore
tags:
- lore
- both
- category/pointofinterest
- research
- active
created: '2025-08-11'
modified: '2025-08-14'
status: complete
MyContainer:
- '[[Jungle of Screams|Jungle of Screams]]'
MyCategory: Encounter
obsidianUIMode: preview
world: Both
updated: '2025-08-13T01:18:31.198375+00:00'
---






<%*

// 1) Prompt for POI name
const poiName = await tp.system.prompt("Enter Point of Interest Name", tp.file.title);
if (!poiName) return;
await tp.file.rename(poiName);

// 2) Gather files from Regions and Star Systems
const regionFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("02_Worldbuilding/Regions/"));
const systemFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("02_Worldbuilding/Star Systems/"));

// Add placeholder option
const placeholderLabel = "🌀 No Container Selected";
const placeholderPath = "__placeholder__";

// Combine all choices
const allFiles = [...regionFiles, ...systemFiles];
const allChoices = [placeholderLabel, ...allFiles.map(f => f.basename)];
const allValues  = [placeholderPath, ...allFiles.map(f => f.path)];

// 3) Prompt user to choose a container
const chosenPath = await tp.system.suggester(allChoices, allValues, true);
if (!chosenPath) return;

// 4) Create wiki-link or fallback
let wikiLink = null;
if (chosenPath !== placeholderPath) {
  const chosenAlias = chosenPath.split("/").pop().replace(/\.md$/, '');
  wikiLink = `[[${chosenPath}|${chosenAlias}]]`;
}

// 5) Write to frontmatter
setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm["MyContainer"] = wikiLink ?? "None";
  });
}, 100);

%>

> [!NOTE] Parent Region: `INPUT[suggester(optionQuery(#Category/Region),optionQuery(#Category/StarSystem)):MyContainer]`

> [!column|no-i no-t]
>> [!info|no-title] Map
>> ```leaflet  
>> id: ZalkorsFerry ### Must be unique with no spaces  
>> image: [[A Cave.png]] ### Link to the map image file. Do not add a ! in front of the image  
>> bounds: [[0,0], [6491, 6479]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
>> height: 500px ### Size of the leaflet embed in px on your screen  
>> width: 95% ### Size of the leaflet embed in your note  
>> lat: 3200 ### To center the map, make this half of the map height.  
>> long: 3200 ### To center the map, make this half of the map width.  
>> minZoom: -5 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
>> maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
>> defaultZoom: -4 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
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
>> option(3, 📝GM Notes),
>> option(4, 📝Travel),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh|no-title]
>>> >[!div-m|no-title]
>>> > ![[#General|no-h clean]]
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
> option(1, 🎬Scene Summary),
> option(2, ❗Quests),
> option(3, 🧑People),
> option(4, ⚔️Encounters),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh|no-title]
> > >[!div-m|no-title]
> > > ![[#Scene Summary|no-h1 clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Quests|no-h2 clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#People|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Encounter|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Loot|no-h clean]]

---
# General

Select Category: `INPUT[template-poi-type][:MyCategory]`
%% MODIFY OPTIONS IN SETTINGS > COMMUNITY PLUGINS > META-BIND > EDIT TEMPLATES > template-poi-type %%

This is the description for the location.

## GM Notes

Make notes of what you need to track in the Point of Interest here. 

## Travel

`VIEW[{Travel Calculator#HoursPerDay}][math]` hrs per day
[[Travel Calculator]]  / [[Exhaustion]] Level: `VIEW[{Travel Calculator#ExhaustionLevel}][math]`

| Destination |  Travel Days  |
| ---|---|
| [[Next Town B]] | 🕓: `VIEW[round((88* {Travel Calculator#TravelCalc}) / 60 / {Travel Calculator#HoursPerDay}, 1)]`      |
| [[Next Town B]] | 🕓: `VIEW[round((99* {Travel Calculator#TravelCalc}) / 60 / {Travel Calculator#HoursPerDay}, 1)]`

## Scene Summary

This is a cave

```statblock
monster: Troll
```

### Forest Approach

This is the approach

### Cave Interior

This is inside


## Quests

`BUTTON[button_quest]` 

- [ ]  Locate the human remains. 
- [ ] Recover the journal. 

```dataview
TABLE WITHOUT ID link(file.name) AC "Name", questStatus AC "Status", questGiver AC "Quest Giver"
FROM "02_Worldbuilding/Quests"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

## People

`BUTTON[button_person]`  The following people are associated with this location.

```dataview
TABLE WITHOUT ID link(file.name) AC "Name", char_race AC "Race", char_gender AC "Gender", Connected_Groups AC "Associated Group"
FROM "02_Worldbuilding/People"
WHERE contains(char_status, "Alive")
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```


## Encounter

Lists any mentioned monsters in this note.
```dataview
TABLE WITHOUT ID link(file.name) AC Monster
WHERE contains(file.inlinks, this.file.link) AND SourceType = "Bestiary"
```

```encounter
name: Example
creatures:
 - 3: Goblin, 5, 15, 2, 25 # 1 goblin with HP: 7, AC: 15, MOD: 2 worth 25 XP will be added.
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

Template PointofInterest is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template PointofInterest as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template PointofInterest.

## Adventure Hooks

- A rumor ties Template PointofInterest to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template PointofInterest to avert a public scandal.
- A map overlay reveals a hidden approach to Template PointofInterest active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[02_Worldbuilding/Lore/A Cave.png|02 Worldbuilding/Lore/A Cave.png]]


## Related

*Links to related content will be added here.*
