---
MyContainer: []
MyCategory: null
tags:
- active
- both
- category/item
- lore
obsidianUIMode: preview
aliases:
- ItemOtherName
Connected_Quests:
- '[[05_Templates/World Builder Templates/Template-Quest.md|Template-Quest]]'
Connected_Groups:
- '[[05_Templates/World Builder Templates/Template-Group.md|Template-Group]]'
world: Both
updated: '2025-08-13T01:18:31.186927+00:00'
created: 2025-08-11
status: active
type: Lore
---





<%*

// 1) Prompt for item name
const poiName = await tp.system.prompt("Enter Item Name", tp.file.title);
if (!poiName) return;
await tp.file.rename(poiName);

// 2) Gather and pick a container from multiple directories
const containerPaths = [
  "02_Worldbuilding/Quests/",
  "02_Worldbuilding/People/",
  "02_Worldbuilding/Groups/",
  "02_Worldbuilding/Points of Interest/",
  "02_Worldbuilding/Places/"
];

const containerFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => containerPaths.some(path => f.path.startsWith(path)));

const placeholderLabel = "🌀 No Container Selected";
const placeholderPath = "__placeholder__";

// Build list of choices
const containerChoices = [placeholderLabel, ...containerFiles.map(f => f.basename)];
const containerValues = [placeholderPath, ...containerFiles.map(f => f.path)];

const chosenPath = await tp.system.suggester(containerChoices, containerValues, true);
if (!chosenPath) return;

// 3) Build full wiki-link for MyContainer
let wikiLink = null;
if (chosenPath !== placeholderPath) {
  const containerAlias = chosenPath.split("/").pop().replace(/\.md$/, "");
  wikiLink = `[[${chosenPath}|${containerAlias}]]`;
}

// 4) Write MyContainer into front-matter
setTimeout(() => {
  const file = app.vault.getAbstractFileByPath(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm["MyContainer"] = wikiLink ?? "None";
  });
}, 100);

%>




> [!NOTE|div-m] Parent Location: `INPUT[inlineListSuggester(optionQuery(#Category/Quest),optionQuery(#Category/People),optionQuery(#Category/Group),optionQuery(#Category/Place),optionQuery(#Category/PointofInterest)):MyContainer]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![[Template_Item_Placeholder.png]]
>
>> [!div-m|no-title] Place Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️Description),
>> option(2, ⚔️Features),
>> option(3, 🔗Connections),
>> option(4, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#Description|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Features|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Connections|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

# Description

This is the items description. 

---

*Source:*

# Features

Cost: `INPUT[number:cost]`

Weight: `INPUT[number:weight]`

Category: `INPUT[template-item-type][:item_type]`
%% MODIFY OPTIONS IN SETTINGS > COMMUNITY PLUGINS > META-BIND > EDIT TEMPLATES > template-item-type %%

---

**Activate:** How to active?
**Frequency:** How often can it be activated?
**Trigger:** Does something trigger the activation?
**Effect:** What happens when activated?

# GM Notes

Make notes of what you need to track in the town here.  Secrets perhaps?

# Connections
Is the item linked to any groups or quests?

Quests: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):Connected_Quests]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

Groups: `INPUT[inlineListSuggester(optionQuery(#Category/Group)):Connected_Groups]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

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

Template Item is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Item as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Item.

## Adventure Hooks

- A rumor ties Template Item to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template Item to avert a public scandal.
- A map overlay reveals a hidden approach to Template Item active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[05_Templates/World Builder Templates/Template-Group]]
