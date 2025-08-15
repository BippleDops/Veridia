---
title: Template-Journal
type: template
tags:
- template
created: '2025-01-15'
modified: '2025-01-15'
---

# Template-Journal

---
title: Template Journal
type: Lore
tags:
- lore
- both
- session-journal
- journal
- '#category/journal'
- research
- active
created: '2025-08-11'
modified: '2025-08-14'
status: complete
NoteIcon: journal
aat-render-enabled: true
fc-category:
- Event Category 1
fc-display-name: 
sessionstatus:
- Occured
sessionDate: 2000-01-01
players: 2
Status:
- "\u23F3"
OneLiner: 1 Line Summary
timelines:
- journal
obsidianUIMode: preview
world: Both
updated: '2025-08-13T01:18:31.187744+00:00'
---

<%*
const hasTitle = !tp.file.title.startsWith("NewJournal");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Date (yyyy-mm-dd)");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

# Roster 

%% Keep track of who turned up. %%

`INPUT[inlineListSuggester(optionQuery(#Category/Player)):sessionRoster]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

## 🔧 Deep Evaluation Improvements

*20 targeted improvements identified*

### Connection Improvements

- Add cross-references to related notes

### Enhancement Improvements

- Add 12_Research-specific enhancement

## Absent

%% Keep track of who didn't turn up. %%

`INPUT[inlineListSuggester(optionQuery(#Category/Player)):sessionAbsent]`

## Session Overview

%% I like to keep a quick summary of sessions here. %%

This is what happened! 

## Auto-Indexes
```dataview
LIST FROM outgoing(file) WHERE status = "complete"
```

## Player-Facing Summary

Template Journal is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Journal as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Journal.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

## Related

*Links to related content will be added here.*

## Prophecy Connection

Mentioned in The First Prophecy of Shadows

## 12_Research Specific Content

Contextual improvement based on 12_Research

## 12_Research Specific Content

Contextual improvement based on 12_Research
