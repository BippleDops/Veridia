---
audience: dm
created: '2025-08-11'
status: complete
tags:
- both
- complete
- guide
- lore
- status/complete
- world/both
title: Handouts Export Guide
type: Lore
updated: '2025-08-13T12:34:32.366024+00:00'
world: Both
timeline: current_era
chronology: active
updated: 2025-08-13T07:59:50.466828
---
# Handouts Export Guide

This guide explains how to export player handouts and GM encounter sheets to PDF.

## Setup
- Ensure the print stylesheet is present: `04_Resources/Styles/print.css`
- In Obsidian or your markdown viewer, enable custom CSS/themes if required.

## Export Steps (Obsidian)
1. Open the handout or GM sheet note you want to export.
2. Apply the desired CSS class if your setup supports it (optional):
   - Add `handout` for player handouts, `gm` for GM sheets in your CSS class assignment workflow.
3. File → Export to PDF.
4. In options:
   - Margins: default or 10–16mm
   - Background graphics: on
   - Scale: 100%
5. Save to your preferred location.

## Tips
- Use the Dataview lists in the Player Portal and Campaign Dashboard to find all handouts and GM sheets quickly.
- For multi-page packs, export individual encounter sheets rather than entire packs for cleaner session packets.

## Where to Find Content
- Player Handouts (Encounters): `04_Resources/Handouts/Encounters/`
- Player Doctrine Handouts: `04_Resources/Handouts/Doctrines/`
- GM Sheets (Encounters): `06_GM_Resources/Travel/Encounter_Sheets/`

## Troubleshooting
- If prints include UI, enable “Simplified page” in your browser or use Obsidian’s native export.
- If code/boxed text looks off, ensure `04_Resources/Styles/print.css` is loaded by your theme.
