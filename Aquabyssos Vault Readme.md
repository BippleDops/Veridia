---
created: '2025-08-11'
status: draft
tags:
- aquabyssos
- draft
- guide
- index
- lore
- readme
- stable
- world/aquabyssos
type: Lore
updated: '2025-08-13T12:34:03.139615+00:00'
world: Aquabyssos
---




# Aquabyssos / Aethermoor Vault

This vault contains worldbuilding, mechanics, assets, canvases, and tools for running campaigns across Aquabyssos (undersea) and Aethermoor (sky) realms.

## Getting started
- Open the canvas: [[04_Resources/Assets/Canvas/Vault_Overview.canvas|04 Resources/Assets/Canvas/Vault Overview.canvas]]
- Browse visual assets via [[04_Resources/Assets/Galleries/Index.md|04 Resources/Assets/Galleries/Index.md]]
- Explore the interactive world map: [[04_Resources/Maps/Aquabyssos_World_Map.md|04 Resources/Maps/Aquabyssos World Map.md]] and overlays [[04_Resources/Assets/Maps/World_Map_Layers.md|04 Resources/Assets/Maps/World Map Layers.md]]

## Key directories
- People/Groups/Places: `02_Worldbuilding/`
- Mechanics: `03_Mechanics/`
- Assets & Galleries: `04_Resources/Assets/`
- GM Tools: `06_GM_Resources/`
- Player materials: `07_Player_Resources/`

## Canvases
- Vault Overview: [[04_Resources/Assets/Canvas/Vault_Overview.canvas|04 Resources/Assets/Canvas/Vault Overview.canvas]]
- World Map & Regions: [[04_Resources/Assets/Canvas/World_Map_and_Regions.canvas|04 Resources/Assets/Canvas/World Map And Regions.canvas]]

## Asset generation pipeline
1) Build prompts: `node scripts/build_prompts.js`
2) Generate assets: `node scripts/generate_assets.js [--limit=...] [--types=portrait,...]`
3) Optional audio: `node scripts/generate_audio.js`
4) Link embeds and galleries: `node scripts/link_assets.js`

Outputs are written to `04_Resources/Assets/**` with JSON sidecars in `Generated/metadata`.

## Map standards
- Battle maps: 140 px grid, no embedded text, icons only; see [[04_Resources/Assets/Maps/Battle_Map_Descriptions.md|04 Resources/Assets/Maps/Battle Map Descriptions.md]]
- World overlays: political, routes, depth, faction, magic, hidden; see [[04_Resources/Assets/Maps/World_Map_Layers.md|04 Resources/Assets/Maps/World Map Layers.md]]
- Markers link directly to place notes under `02_Worldbuilding/Places/`

## Git and remote
Primary repo: `origin` at `https://github.com/BippleDops/Veridia.git`
Use rebase workflow: `git pull --rebase`, `git push`.

## Housekeeping
- Archived: `08_Archive/` (reports/backups/data snapshots zipped)
- Ignored: `scripts/`, `08_Archive/Reports/`, `backups/`, `data/`, `snapshots/`, `*.zip`

## Notes
This README is the stable entry point; update canvases and galleries as content grows.

## Cross-References

- [[04_Resources/Maps/Aquabyssos_World_Map|04 Resources/Maps/Aquabyssos World Map]]


## Connections

- [[Aquabyssos_World_Map|Aquabyssos World Map]]
