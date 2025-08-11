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
- session-journal
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

Template Journal is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Journal as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Journal.

## Adventure Hooks

- A rumor ties Template Journal to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template Journal to avert a public scandal.
- A map overlay reveals a hidden approach to Template Journal active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
