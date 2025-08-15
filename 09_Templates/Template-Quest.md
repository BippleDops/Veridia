# Template-Quest

---
title: Template Quest
type: Lore
tags:
- category/quest
- lore
- both
- research
- active
created: '2025-08-11'
modified: '2025-08-14'
status: complete
MyContainer: []
MyCategory: 
obsidianUIMode: preview
questObtained: 
questStatus: Not Started
questGiver: 
questLocationObtained: 
questSessionObtained: 
questNotes: 
questLootAvail: 
questLookEarned: 
NoteIcon: quest
world: Both
updated: '2025-08-13T01:18:31.193835+00:00'
---

<%*

// 1) Prompt for Quest name
const poiName = await tp.system.prompt("Enter Quest Name", tp.file.title);
if (!poiName) return;
await tp.file.rename(poiName);

// 2) Gather region notes
const regionFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("02_Worldbuilding/Regions/"));

const placeholderLabel = "🌀 No Region Selected";
const placeholderPath = "__placeholder__";

// 3) Prompt to choose a container region
const regionChoices = [placeholderLabel, ...regionFiles.map(f => f.basename)];
const regionValues  = [placeholderPath, ...regionFiles.map(f => f.path)];
const chosenPath    = await tp.system.suggester(regionChoices, regionValues, true);
if (!chosenPath) return;

// 4) Build wiki-link or fallback
let regionLink = ;
if (chosenPath !== placeholderPath) {
  const regionAlias = chosenPath.split("/").pop().replace(/\.md$/, "");
  regionLink = `[[${chosenPath}|${regionAlias}]]`;
}

// 5) Write into frontmatter
setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm["MyContainer"] = regionLink ?? "None";
  });
}, 100);

%>

> [!NOTE] Parent Region: `INPUT[inlineListSuggester(optionQuery(#Category/Hub),optionQuery(#Category/Region),optionQuery(#Category/Place),optionQuery(#Category/PointofInterest)):MyContainer]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

> [!column|no-i no-t]
>> [!info|no-title] Map
>> ![[Template_Quest_Placeholder.png|Template Quest Placeholder.png]]
>
>> [!note|no-title] Town Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, 🏆Quest Info),
>> option(2, 🕵️‍♀️Quest Details),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#Quest Info|no-h clean]]
>>>
>>> > ![[#Quest Details|no-h clean]]
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title] 
> ~~~meta-bind
> INPUT[select(
> option(1, 🏡Backstory),
> option(2, 🍎Planning),
> option(3, 🙎‍♂️People),
> class(tabbed)
> )]
> ~~~
>>[!tabbed-box-maxh|div-m]
>>>[!div-m|no-title]
>>> ![[#Backstory|no-h clean]]
>>
>>> [!div-m|no-title]
>>> ![[#Planning|no-h clean]]
>>> ![[#People|no-h clean]]

---
# Quest Info

Provide a summary of the quest here. 

- [ ] Obtain the quest
- [ ] Embark on an epic journey
- [ ] Complete the quest
- [ ] Roll in epic loot


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


## Quest Details

Date Obtained: `INPUT[datePicker:questObtained]` 
Status: `INPUT[inlineSelect(option(Not Started), option(In Progress), option(Complete)):questStatus]` 
Quest Giver: `INPUT[suggester(optionQuery(#Category/People)):questGiver]` 
Quest Location: `INPUT[suggester(optionQuery(#Category/Hub)):questLocationObtained]` 
Session Obtained: `INPUT[suggester(optionQuery(#Category/Journal)):questSessionObtained]` 
Available Loot: `INPUT[suggester(optionQuery(#item)):questLootAvail]` 
Acquired Loot: `INPUT[suggester(optionQuery(#item)):questLookEarned]` 

## GM Notes

Make notes of what you need to track in the region here. 

## Backstory

Describe the backstory of the quest here. Why is it important for the party to complete?

## Planning

Plan your quest out here. 

## People

`BUTTON[button_person]` The following people are associated with this quest.

```dataview
TABLE WITHOUT ID link(file.name) AC "Name", char_race AC "Race", char_gender AC "Gender", Connected_Groups AC "Associated Group"
FROM "02_Worldbuilding/People"
WHERE contains(char_status, "Alive")
WHERE contains(Connected_Quests, this.file.link)
SORT file.name ASC
```

## Auto-Indexes
LIST FROM outgoing(file) WHERE status = "complete"

## Player-Facing Summary

Template Quest is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Quest as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Quest.

### Connected Elements

**Involved NPCs**: 0 character connections identified

**Affected Locations**: 1 location connections identified

### Campaign Impact

**Immediate Effects**: Quest outcomes directly influence connected NPCs and locations
**Long-term Consequences**: Resolution shapes ongoing relationships and world state
**Reputation Changes**: Character actions affect standing with involved factions

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*
