# Rules_Reference - Homebrew - Items - New Item

---
title: Rules Reference   Homebrew   Items   New Item
aliases:
- ItemOtherName
type: Item
tags:
- both
- research
- world/both
- active
- complete
- content/item
- status/in-progress
- item
created: '2025-08-11'
modified: '2025-08-14'
status: complete
attunement: false
connected_-groups:
- Template-Group
connected_-quests:
- Template-Quest
my-category: 
my-container: '[[The Giants Skull]]'
obsidian-u-i-mode: preview
updated: '2025-08-13T12:34:17.776950+00:00'
world: Both
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
>>> > !Connections
>>> 
>>> > !GM Notes

# Description

This is the items description. 

---

*Source:*


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


## Features

Cost: `INPUT[number:cost]`

Weight: `INPUT[number:weight]`

Category: `INPUT[inlineListSuggester(option(Alchemical), option(Artifact), option(Consumable), option(Cursed), option(Intelligent), option(Invested), option(Magical), option(Relic), option(Rune), option(Snare), option(Stance), option(Talisman), option(Worn)):char_gender]`

---

**Activate:** How to active?
**Frequency:** How often can it be activated?
**Trigger:** Does something trigger the activation?
**Effect:** What happens when activated?

## GM Notes

Make notes of what you need to track in the town here.  Secrets perhaps?

## Connections
Is the item linked to any groups or quests?

Quests: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):Connected_Quests]`

Groups: `INPUT[inlineListSuggester(optionQuery(#Category/Group)):Connected_Groups]`

## Player-Facing Summary

New Item is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of New Item as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around New Item.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*


## Prophecy Connection

Mentioned in The Second Prophecy of Stars


## Plot Hooks

- A map reveals ancient history about the government
- A shipment has gone missing and war looms
- Strange disappearances suggest a portal

## Related Notes

- [[Similar Topic 1]]
- [[Contrasting Approach]]
- [[Advanced Version]]
- [[Historical Context]]


## 12_Research Specific Content

Contextual improvement based on 12_Research


## 12_Research Specific Content

Contextual improvement based on 12_Research


## 12_Research Specific Content

Contextual improvement based on 12_Research
