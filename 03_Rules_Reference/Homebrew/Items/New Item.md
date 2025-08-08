---
MyContainer: '[[05_Templates/Example_Campaign/Quests/The Giants Skull]]'
MyCategory: null
tags:
- Category/Item
obsidianUIMode: preview
aliases:
- ItemOtherName
Connected_Quests:
- '[[05_Templates/World Builder Templates/Template-Quest.md|Template-Quest]]'
Connected_Groups:
- '[[05_Templates/Template-Character.md|Template-Group]]'
type: note
created: 2025-07-23 12:39
modified: 2025-07-23 12:39
---
> [!NOTE|div-m] Parent Location: `INPUT[inlineListSuggester(optionQuery(#Category/Quest),optionQuery(#Category/People),optionQuery(#Category/Group),optionQuery(#Category/Place),optionQuery(#Category/PointofInterest)):MyContainer]`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![[Pasted image 20250514201228.png]]
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
>>> > !Description
>>>
>>> > [!div-m|no-title]
>>> > !Features
>>>
>>> > [!div-m|no-title]
>>> > !Connections
>>> 
>>> > [!div-m|no-title]
>>> > !GM Notes
>>> 

# Description

This is the items description. 

---

*Source:*

# Features

Cost: `INPUT[number:cost]`

Weight: `INPUT[number:weight]`

Category: `INPUT[inlineListSuggester(option(Alchemical), option(Artifact), option(Consumable), option(Cursed), option(Intelligent), option(Invested), option(Magical), option(Relic), option(Rune), option(Snare), option(Stance), option(Talisman), option(Worn)):char_gender]`

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

Groups: `INPUT[inlineListSuggester(optionQuery(#Category/Group)):Connected_Groups]`
