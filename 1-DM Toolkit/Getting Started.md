---
obsidianUIMode: preview
world: Both
updated: '2025-08-12T14:31:02.282872+00:00'
created: 2025-08-11
status: active
tags:
- both
type: Lore
---




# Getting Started

## What this vault is
- A lean TTRPG campaign management vault built around: `02_Worldbuilding/*` (world data), `1-Session Journals` (sessions), Meta Bind + Templater creation buttons, and Dataview/Bases views.

## Organization
- `1-DM Toolkit`: Home dashboards and button definitions.
- `1-Session Journals`: Session notes (frontmatter `type: Session Journal`).
- `02_Worldbuilding/*`: People, Groups, Places, Regions, Quests, Lore, etc. All use canonical properties: `tags: Category/*`, `MyContainer`, `MyCategory`.
- `3-Mechanics`: System mechanics/rules landing.
- `05_Templates/World Builder Templates`: Authoring templates triggered by Meta Bind buttons.
- `08_Archive/2025-08-09/*`: Historical docs, campaign docs, demos/tutorials, legacy dashboards/scripts.

## How to use
1) Open `1-DM Toolkit/Home` (default new tab) and use the tabbed interface.
2) Create content via embedded buttons (Meta Bind) on `Home`/`DM Board.md`.
3) Fill `MyContainer` and `MyCategory` when prompted; Dataview/Bases will pick these up.
4) Sessions go in `1-Session Journals` and include `type: Session Journal` in frontmatter.

## Buttons and templates
- Buttons are defined in `1-DM Toolkit/Button Templates.md` and embedded (hidden) in `DM Board.md`.
- Templates live in `05_Templates/World Builder Templates/` and are wired for Templater + Meta Bind.

## Conventions
- Use `tags: Category/*` for world entities:
  - People → `Category/People`, Groups → `Category/Group`, Places → `Category/Place`, Quests → `Category/Quest`, etc.
- Always include `MyContainer` (parent link) and `MyCategory` (classification) where applicable.
- Keep folder names in `02_Worldbuilding/*` unchanged to avoid breaking templates.

## What it’s supposed to do
- Provide fast creation flows for NPCs, locations, quests, etc.
- Maintain clean Dataview/Bases views driven by canonical properties.
- Reduce clutter with systematic archiving in `Ω_Archive`.

## Process summary
- Replaced QuickAdd/Buttons flows with Meta Bind + Templater.
- Consolidated `02_Worldbuilding` and `01_Campaigns/*` into `02_Worldbuilding/*` and `1-Session Journals`.
- Normalized frontmatter, repaired links, and archived legacy/demo content.

## Maintenance tips
- Keep Meta Bind, Templater, Dataview enabled. Bases optional but supported.
- Avoid renaming `02_Worldbuilding/*` subfolders.
- File demos or old docs to `08_Archive/` rather than deleting.

## Next steps
- Add or adjust Meta Bind input templates for your system.
- Populate `3-Mechanics` with your rules reference.
- Start a new session from the Home dashboard and let the structures grow organically.


