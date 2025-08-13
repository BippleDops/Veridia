---
type: Lore
status: complete
tags:
- active
- both
- category/planet
- lore
obsidianUIMode: preview
MyContainer: null
world: Both
updated: '2025-08-13T01:18:31.198930+00:00'
created: '2025-08-11'
---




<%*

// 1) Rename if the file starts with "NewPlanet"
let title;
if (tp.file.title.startsWith("NewPlanet")) {
title = await tp.system.prompt("Enter Planet Name");
if (!title) {
  new Notice("No name entered. Aborting.");
  return;
}
await tp.file.rename(title);
} else {
title = tp.file.title;
}

// 2) Get all Star System notes from folder
const systemFiles = tp.app.vault.getMarkdownFiles()
.filter(f => f.path.startsWith("02_Worldbuilding/Star Systems/"));

const placeholderLabel = "🌀 No Star System Selected";
const placeholderPath = "__placeholder__";

// Combine options
const systemChoices = [placeholderLabel, ...systemFiles.map(f => f.basename)];
const systemValues = [placeholderPath, ...systemFiles.map(f => f.path)];

// 3) Prompt user to pick a Star System
const chosenPath = await tp.system.suggester(systemChoices, systemValues, true);
if (!chosenPath) return;

// 4) Build the wiki-link or set fallback
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



> [!NOTE] Parent Star System: `INPUT[suggester(optionQuery(#Category/StarSystem)):MyContainer]`

> [!column|no-i no-t]
>> [!info|no-title] Map
>> ![[Template_Planet_Placeholder.png|Template Planet Placeholder.png]]
>
>> [!note|no-title] Town Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General Info),
>> option(2, 🌐Planet Details),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#General Info|no-h clean]]
>>>
>>> >[!div-m|no-title]
>>> > ![[#Planet Details|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🗺️Continents),
> option(2, 👽Sapient Species),
> option(3, ⚔️Capital Cities),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Continents|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Sapient Species|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Capital Cities|no-h clean]]
> > 

---
# General Info

This is the planet description. 

## Planet Details

**Dominant Races:**  
**Climate:** 
**Seasons:**

## GM Notes

Make notes of what you need to track in the region here. 

## Continents

`BUTTON[button_continent]` **Continents**  Large continuous landmasses that contain regions.

```dataview
TABLE WITHOUT ID link(file.name) AC "Continent(s)"
FROM "02_Worldbuilding/Continents"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

## Sapient Species

`BUTTON[button_species]`  Intelligent species that live on this planet. 

```dataview
TABLE WITHOUT ID link(file.name) AC "Sapient Species"
FROM "02_Worldbuilding/Sapient Species"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

## Capital Cities

`BUTTON[button_hub]` Groups of people and power - religious, cults, guilds, military

```dataviewjs
const hubs = dv.pages('"02_Worldbuilding/Hubs"')
  .where(hub => {
    if (!hub.MyContainer) return false;
    const regions = Array.isArray(hub.MyContainer) ? hub.MyContainer : [hub.MyContainer];

    for (const regionLink of regions) {
      const region = dv.page(regionLink);
      if (!region || !region.MyContainer) continue;

      const continents = Array.isArray(region.MyContainer) ? region.MyContainer : [region.MyContainer];
      for (const continentLink of continents) {
        const continent = dv.page(continentLink);
        if (!continent || !continent.MyContainer) continue;

        const planets = Array.isArray(continent.MyContainer) ? continent.MyContainer : [continent.MyContainer];
        for (const planetLink of planets) {
          if (planetLink.path === dv.current().file.path) {
            return hub.MyCategory && hub.MyCategory.includes("City +1500");
          }
        }
      }
    }
    return false;
  });

dv.table(
  ["Hub", "Type", "Region(s)"],
  hubs.map(h => [
    h.file.link,
    h.MyCategory,
    h.MyContainer  // This shows the link(s) to the Region(s)
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

## Player-Facing Summary

Template Planet is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Planet as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Planet.

## Adventure Hooks

- A rumor ties Template Planet to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template Planet to avert a public scandal.
- A map overlay reveals a hidden approach to Template Planet active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[02_Worldbuilding/Lore/Template_Planet_Placeholder.png|02 Worldbuilding/Lore/Template Planet Placeholder.png]]
