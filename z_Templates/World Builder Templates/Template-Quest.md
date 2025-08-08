---
type: quest
status: active
priority: medium
tags:
  - Category/Quest
my-container:
  - 'Template-PointofInterest'
  - 'Template-Place'
  - 'Template-Hub'
my-category: null
obsidian-u-i-mode: preview
quest-obtained: null
quest-status: Not Started
quest-giver: null
quest-location-obtained: null
quest-session-obtained: null
quest-notes: null
quest-loot-avail: null
quest-look-earned: null
note-icon: quest
---

<%*
/* 1) Prompt for POI name */
const poiName = await tp.system.prompt("Enter Quest Name", tp.file.title);
if (!poiName) return;                     // cancel if blank
await tp.file.rename(poiName);             // rename the file

/* 2) Gather and pick a container region */
const regionFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("2-World/Regions/"));
const regionChoices = regionFiles.map(f => f.basename);
const regionValues  = regionFiles.map(f => f.path);
const chosenPath    = await tp.system.suggester(regionChoices, regionValues, true);
if (!chosenPath) return;                   // cancel if none chosen

/* Build full wiki-link for MyContainer */
const regionAlias = chosenPath.split("/").pop().replace(/\.md$/, "");
const regionLink  = `[[${chosenPath}|${regionAlias}]]`;

/* 4) Write into front-matter */
setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm["MyContainer"] = regionLink;
  });
}, 100);
%>

> [!NOTE] Parent Region: `INPUT[inlineListSuggester(optionQuery(#Category/Hub),optionQuery(#Category/Region),optionQuery(#Category/Place),optionQuery(#Category/PointofInterest)):MyContainer]`

> [!column|no-i no-t]
>> [!info|no-title] Map
>> [Map placeholder]
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
>>> > !Quest Info
>>>
>>> >[!div-m|no-title]
>>> > !Quest Details
>>>
>>> > [!div-m|no-title]
>>> > !GM Notes
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
>>> !Backstory
>>
>>> [!div-m|no-title]
>>> !Planning
>>
>>> [!div-m|no-title]
>>> !People



---
# Quest Info

Provide a summary of the quest here. 

- [ ] Obtain the quest
- [ ] Embark on an epic journey
- [ ] Complete the quest
- [ ] Roll in epic loot

# Quest Details


Date Obtained: `INPUT[datePicker:questObtained]` 
Status: `INPUT[inlineSelect(option(Not Started), option(In Progress), option(Complete)):questStatus]` 
Quest Giver: `INPUT[suggester(optionQuery(#Category/People)):questGiver]` 
Quest Location: `INPUT[suggester(optionQuery(#Category/Hub)):questLocationObtained]` 
Session Obtained: `INPUT[suggester(optionQuery(#Category/Journal)):questSessionObtained]` 
Available Loot: `INPUT[suggester(optionQuery(#item)):questLootAvail]` 
Acquired Loot: `INPUT[suggester(optionQuery(#item)):questLookEarned]` 

# GM Notes

Make notes of what you need to track in the region here. 

# Backstory

Describe the backstory of the quest here. Why is it important for the party to complete?

# Planning

Plan your quest out here. 

# People

`BUTTON[button_person]` The following people are associated with this quest.

```dataview
TABLE WITHOUT ID link(file.name) AS "Name", char_race AS "Race", char_gender AS "Gender", Connected_Groups AS "Associated Group"
FROM "2-World/People"
WHERE contains(char_status, "Alive")
WHERE contains(Connected_Quests, this.file.link)
SORT file.name ASC
```




