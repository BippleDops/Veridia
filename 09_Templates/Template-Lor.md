# Template-Lor

---
title: Template Lor
type: Template
tags:
- category/lore
- both
- active
- research
created: '2025-08-11'
modified: '2025-08-14'
status: complete
updated: '2025-08-13T01:18:31.192984+00:00'
MyContainer: []
MyCategory: 
obsidianUIMode: preview
world: Both
---

<%*
const loreName = await tp.system.prompt("Enter Lore Name", tp.file.title);
if (!loreName) return;
await tp.file.rename(loreName);

const containerPaths = [
  "02_Worldbuilding/Places/",
  "02_Worldbuilding/Groups/",
  "02_Worldbuilding/Quests/",
  "02_Worldbuilding/People/"
];
const containerFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => containerPaths.some(p => f.path.startsWith(p)));
const placeholderLabel = "🌀 No Container Selected";
const placeholderPath = "__placeholder__";
const containerChoices = [placeholderLabel, ...containerFiles.map(f => f.basename)];
const containerValues  = [placeholderPath, ...containerFiles.map(f => f.path)];
const chosenPath = await tp.system.suggester(containerChoices, containerValues, true);
if (!chosenPath) return;
let wikiLink = ;
if (chosenPath !== placeholderPath) {
  const alias = chosenPath.split("/").pop().replace(/\.md$/, "");
  wikiLink = `[[${chosenPath}|${alias}]]`;
}
setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm["MyContainer"] = wikiLink ?? "None";
  });
}, 100);
%>

> [!NOTE] Parent Note: `INPUT[inlineListSuggester(optionQuery(#Category/Place),optionQuery(#Category/Group),optionQuery(#Category/Quest),optionQuery(#Category/People)):MyContainer]`

> [!column]
>> [!div-m|no-title]
>> ![[Template_Lore_Placeholder.png|Template Lore Placeholder.png]]
>
>> [!div-m|no-title] Lore Controls
>> ~~~meta-bind
>> INPUT[select(
>> option(1, 📜Summary),
>> option(2, 🧭Context),
>> option(3, 🎲At the Table),
>> option(4, 🧶Threads),
>> option(5, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#Summary|no-h clean]]
>>>
>>> > ![[#Context|no-h clean]]
>>> > ![[#At the Table|no-h clean]]
>>> > ![[#Threads|no-h clean]]
>>> > ![[#GM Notes|no-h clean]]

---
# Summary
Provide a concise in-world account players or NPCs might know.


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


## GM Notes
Secrets, clocks, complications, and twist levers.

## Auto-Indexes
```dataview
LIST FROM outgoing(file) WHERE status = "complete"
```

## Player-Facing Summary

Template Lor is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Lor as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Lor.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Plot Hooks

- An heirloom has gone missing and truth emerges
- Strange accidents suggest a curse
- A journal reveals ancient history about this place

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]
