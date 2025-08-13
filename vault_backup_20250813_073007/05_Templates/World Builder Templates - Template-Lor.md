---
MyCategory: null
MyContainer: []
created: '2025-08-11'
obsidianUIMode: preview
status: complete
tags:
- content/lore
- status/in-progress
- world/both
type: Template
updated: '2025-08-12T23:37:33.121198'
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
let wikiLink = null;
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
>>> >[!div-m|no-title]
>>> > ![[#Context|no-h clean]]
>>>
>>> >[!div-m|no-title]
>>> > ![[#At the Table|no-h clean]]
>>>
>>> >[!div-m|no-title]
>>> > ![[#Threads|no-h clean]]
>>>
>>> >[!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]

---
# Summary
Provide a concise in-world account players or NPCs might know.

## Context
- Origins
- Spread and adoption
- Present-day implications

## At the Table
- Investigation: actionable clues, DCs, and outcomes
- Social: rites, codes, or leverage the party can use
- Exploration: travel, navigation, or resource effects

## Threads
- Links: `INPUT[inlineListSuggester(optionQuery(#Category/Place),optionQuery(#Category/Quest),optionQuery(#Category/People),optionQuery(#Category/Group))]`

## GM Notes
Secrets, clocks, complications, and twist levers.
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

Template Lor is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Lor as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Lor.

## Adventure Hooks

- A rumor ties Template Lor to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template Lor to avert a public scandal.
- A map overlay reveals a hidden approach to Template Lor active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
