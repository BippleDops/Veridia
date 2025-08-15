# Template-Galaxy

---
title: Template Galaxy
type: Lore
tags:
- lore
- both
- category/galaxy
- research
- active
created: '2025-08-11'
modified: '2025-08-14'
status: complete
obsidianUIMode: preview
MyContainer: 
world: Both
updated: '2025-08-13T01:18:31.188986+00:00'
---

<%*
const hasTitle = !tp.file.title.startsWith("NewGalaxy");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Galaxy Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

> [!NOTE] Parent:

> [!column|no-i no-t]
>> [!info|no-title] Map
>> ![[Template_Galaxy_Placeholder.png|Template Galaxy Placeholder.png]]
>
>> [!note|no-title] Town Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General Info),
>> option(2, 🌐Galaxy Details),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#General Info|no-h clean]]
>>>
>>> > ![[#Planet Details|no-h clean]]
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🗺️Star Systems),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Star Systems|no-h clean]]
> >

---
# General Info

This is the planet description. 


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


## Planet Details

**Domit Races:**  

## GM Notes

Make notes of what you need to track in the region here. 

## Star Systems

`BUTTON[button_starsystem]` **Continents**  Large continuous landmasses that contain regions.

```dataview
TABLE WITHOUT ID link(file.name) AC "Galaxy(s)"
FROM "02_Worldbuilding/Continents"
WHERE contains(MyContainer, this.file.link)
SORT file.name ASC
```

## Auto-Indexes
LIST FROM outgoing(file) WHERE status = "complete"

## Player-Facing Summary

Template Galaxy is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Galaxy as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Galaxy.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Plot Hooks

- A shipment has gone missing and war looms
- A corpse reveals the truth about a local noble
- A map reveals a betrayal about the cult

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]


## 12_Research Specific Content

Contextual improvement based on 12_Research


## 12_Research Specific Content

Contextual improvement based on 12_Research
