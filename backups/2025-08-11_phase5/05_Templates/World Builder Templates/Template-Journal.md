---
NoteIcon: journal
aat-render-enabled: true
fc-category:
- Event Category 1
fc-display-name: null
sessionstatus:
- Occured
type: Lore
sessionDate: 2000-01-01
players: 2
Status:
- ⏳
OneLiner: 1 Line Summary
timelines:
- journal
tags:
- '#category/journal'
- both
- draft
- journal
- session journal
obsidianUIMode: preview
world: Both
updated: '2025-08-11T13:08:47.013707+00:00'
created: '2025-08-11T13:08:47.013707+00:00'
status: draft
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

## Absent

%% Keep track of who didn't turn up. %%

`INPUT[inlineListSuggester(optionQuery(#Category/Player)):sessionAbsent]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %% 

# Session Overview

%% I like to keep a quick summary of sessions here. %%

This is what happened! 