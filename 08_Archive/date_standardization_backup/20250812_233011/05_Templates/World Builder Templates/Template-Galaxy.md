---
tags:
- active
- both
- category/galaxy
- lore
obsidianUIMode: preview
MyContainer: null
world: Both
updated: '2025-08-13T01:18:31.188986+00:00'
created: 2025-08-11
status: active
type: Lore
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
>>> >[!div-m|no-title]
>>> > ![[#Planet Details|no-h clean]]
>>>
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

## Planet Details

**Dominant Races:**  

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

Template Galaxy is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Galaxy as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Galaxy.

## Adventure Hooks

- A rumor ties Template Galaxy to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template Galaxy to avert a public scandal.
- A map overlay reveals a hidden approach to Template Galaxy active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[02_Worldbuilding/Lore/Template_Galaxy_Placeholder.png|02 Worldbuilding/Lore/Template Galaxy Placeholder.png]]
