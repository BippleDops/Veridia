---
type: item
attunement: false
my-container: '[[The Giants Skull]]'
my-category: null
tags:
- Category/Item
obsidian-u-i-mode: preview
aliases:
- ItemOtherName
connected_-quests:
- Template-Quest
connected_-groups:
- Template-Group
world: Both
updated: '2025-08-11T13:08:41.859593+00:00'
---

> [!NOTE|div-m] Parent Location: `INPUT[inlineListSuggester(optionQuery(#Category/Quest),optionQuery(#Category/People),optionQuery(#Category/Group),optionQuery(#Category/Place),optionQuery(#Category/PointofInterest)):MyContainer]`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> [Image placeholder]
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
