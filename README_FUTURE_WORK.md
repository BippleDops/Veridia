---
aliases: []
tags:
  - Category/Note
type: note
status: unknown
---
# Vault Technical Guide (for future development)

## Purpose
This document orients future work on the lean TTRPG vault. It captures structure, conventions, active plugins, and migration history so maintenance and extensions can proceed safely.

## Structure
- 1-DM Toolkit: home dashboards, DM utilities, button definitions
- 1-Session Journals: session notes (`type: Session Journal`)
- 02_Worldbuilding/*: People, Groups, Places, Regions, Quests, Lore (and Planets/Star Systems/etc. if used)
- 3-Mechanics: mechanical notes/rules
- 05_Templates/World Builder Templates: source templates triggered by Meta Bind
- 08_Archive/2025-08-09/*: historical docs, legacy dashboards/scripts, campaign docs, demos/tutorials

## Conventions
- Canonical properties for world entities:
  - tags: `Category/People | Category/Group | Category/Place | Category/Region | Category/Quest | ...`
  - `MyContainer`: parent link (e.g., a Region or Hub)
  - `MyCategory`: classification (e.g., Commerce, Military)
- Sessions: `type: Session Journal` in frontmatter
- Keep `02_Worldbuilding/*` folder names stable; templates depend on them

## Active flows
- Creation: Meta Bind buttons + Templater; buttons are embedded in `1-DM Toolkit/DM Board.md` and enumerated in `1-DM Toolkit/Button Templates.md`
- Viewing: Dataview/Bases sections in `Home`, `DM Board`, and entity templates

## Plugins (lean set)
- Enabled: Meta Bind, Templater, Dataview, 5e Statblocks, Initiative Tracker, Dice Roller, Style Settings, New Tab Default Page, Markdown Attributes (Leaflet/Admonition optional)
- Removed from active use: QuickAdd, Buttons (automation replaced by Meta Bind)

## Migration summary
- Removed `ObsidianTTRPGVault with Bases Implementation Effective/`
- Collapsed `02_Worldbuilding/*` into `02_Worldbuilding/*` (Atlas→Places, Factions→Groups, remainder→Lore)
- Collapsed `01_Campaigns/*` into `02_Worldbuilding/*` and `1-Session Journals`; archived campaign docs
- Normalized frontmatter across moved notes; repaired cross-vault links
- Archived demo/tutorial and legacy materials to `08_Archive/2025-08-09/*`

## Extension guidelines
- To add new entity types: create a template in `05_Templates/World Builder Templates`, add a Meta Bind button with a unique `id`, and place inline `BUTTON[id]` where needed
- To add properties: prefer adding to frontmatter in templates and reflect in Dataview/Bases snippets
- To adjust dashboards: edit `1-DM Toolkit/Home` or `DM Board.md`; keep structure minimal

## QA checklist (when changing structure)
- [ ] `02_Worldbuilding/*` folder names unchanged
- [ ] Templates resolve with Templater (no QuickAdd assumptions)
- [ ] Buttons render and create notes in expected folders
- [ ] Dataview queries return expected rows; no orphan categories
- [ ] Sessions show under `1-Session Journals`
- [ ] No references to legacy paths (`00_Dashboard`, `02_Worldbuilding`, old master dashboard)

## Current state artifacts
- `POST_CLEANUP_REPORT.md`: counts and summary
- `08_Archive/2025-08-09/Historical_Docs.md`: combined legacy docs
- `08_Archive/2025-08-09/Campaign_Docs/*`: campaign-specific materials

## Roadmap (optional)
- Add minimal verification script to report missing `MyContainer/MyCategory`
- Expand Bases views for `2-World` if desired
- Add importers for external system SRDs into `3-Mechanics`


