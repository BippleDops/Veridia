# Bases Enhancement Guide

Generated: {{date:YYYY-MM-DD HH:mm}}

Scope: NPC Directory.base, Session Log.base, Combat Tracker.base, Quest Campaign Tracker.base, Monster Gallery.base, Item Showcase.base, Spell Compendium.base, Image Library.base, Modern Card Galleries.base.

## Recommended Canon Properties (add to frontmatter where relevant)

- npc: true | false
- location: [[Link]] or { path, name }
- faction: [[Link]] or list
- relationship: hostile | unfriendly | neutral | friendly | allied
- status: active | dead | missing | retired | imprisoned | unknown
- lastSeen: ISO date
- disposition: -10 … +10
- danger_level: 1..10 (locations)
- environment: [Underwater, Urban, …]
- quest_status: Not Started | Active | In Progress | Completed | Failed | On Hold | Abandoned
- quest_priority: Critical | High | Normal | Low | Optional
- quest_giver: NPC or list
- quest_location: Location or list
- sessionNumber: number
- npcsMet: NPC list
- questsStarted / questsAdvanced / questsCompleted: Quest lists
- items_gained: string[]

Using consistent keys enables reliable filters and cross-views across Bases.

## Enhancements by Database

### 1) NPC Directory.base

- Add views:
  - “Recently Seen” (sort by lastSeen desc)
  - “By Disposition” (group by disposition buckets: ≤-5, -4..0, 1..5, >5)
  - “Session Hooks” (npcs with status=active and lastSeen older than 30d)
- Useful formulas:
  - OverdueContact: days since lastSeen > 30 → "⏰ Check-in"
  - SessionFlag: disposition change indicator if frontmatter stores history (optional)

### 2) Session Log.base

- Add views:
  - “By Arc” (filter by tag or arc property)
  - “Encounter Index” (sessions where encounters exist; list count)
  - “Loot Summary” (aggregate items_gained; see Loot Tracker)
- Useful formulas:
  - EncounterCount: count(encounters)
  - LootCount: items_gained?.length || 0

### 3) Combat Tracker.base

- Add views:
  - “Concentration Watch” (is_concentrating true)
  - “Low HP” (< 25%)
  - “Conditions” (any active conditions)
- Useful formulas:
  - LowHPBadge: current_hp/max_hp < 0.25 → "⚠️ Low"

### 4) Quest Campaign Tracker.base

- Add views:
  - “By Location” (quest_location)
  - “Approaching Deadlines” (quest_deadline within 7 days)
  - “By Priority” (quest_priority desc)
- Useful formulas:
  - TimeRemaining (provided) and DueSoon: days ≤ 7

### 5) Monster Gallery.base

- Add views:
  - “Underwater Encounters” (environment contains Underwater)
  - “By CR Band” (0–1, 2–4, 5–8, 9–12, 13–16, 17+)
  - “Boss Picks” (legendary/mythic/unique)

### 6) Item Showcase.base

- Add views:
  - “By Owner” (item_owner)
  - “Attunement Required” (attunement true)
  - “Shop Inventory” (tag or folder-based)

### 7) Spell Compendium.base

- Add views:
  - “Concentration by Level” (concentration true; sort by level)
  - “Underwater-Friendly” (custom list by tag)
  - “Rituals by Class” (ritual true; group by class)

### 8) Image Library.base

- Add views:
  - “Missing Images” (where image_path missing but category implies one)
  - “NPC Portraits” (Category/People)

## Relational Linking Patterns

- Use [[Links]] in properties where possible (e.g., faction, location, quest_giver). Bases formulas can render these as direct links via `target.faction` or `target.location`.
- Maintain “bidirectional” consistency: if NPC lists a location, location should list the NPC under Notable NPCs; see `_RELATIONSHIP_VALIDATION.md` for one-way links to fix.

## Filtered Views for Session Prep

- “NPCs in Current Location”: filter by `location` equals selected value (parameterized view).
- “Active Quests in Region”: filter by `quest_status ∈ {Active, In Progress}` and `quest_location` includes selected hub.
- “Recent Antagonists”: `npc && relationship in ['hostile','unfriendly'] && lastSeen <= 30d`.

## Statistical Views

- Sessions per month (line chart via statistics view if supported; else counts with moment buckets).
- NPC disposition histogram (count by disposition buckets).
- Quest completion rate (completed / total).

## Player-Facing Views (safe to share)

- “Known NPCs” (hide DM-only fields; status except secrets).
- “Visited Locations” (no secret areas; reduced descriptions).
- “Quest Log (Player)” (objectives and status only; no hidden rewards).

## Implementation Notes

- Adopt the Canon Properties above incrementally; do not mass-edit mid-session. Update templates in `05_Templates/*` first to prevent drift.
- For legacy notes, add only the fields needed to surface them in key views. Full normalization is not required immediately.
- Keep views fast: prefer simple field filters over expensive full-text formulas. Avoid unbounded galleries on mobile.

---

Planned follow-up: add the six new databases (factions, timeline, loot, random encounters, rules, consequences) and wire them into dashboards.



## Phase 3 Implementation (current vault)

- Databases detected: `NPC Directory.base`, `Session Log.base`, `Quest Campaign Tracker.base`, `Combat Tracker.base`, `Monster Gallery.base`, `Item Showcase.base`, `Spell Compendium.base`, `Image Library.base`, `Modern Card Galleries.base`.
- Canon properties: adopt incrementally in content and templates; aim for minimal fields to power new views first.

### Enhancements applied
- NPC Directory.base: broadened tag filter to accept `#NPC` or `#npc` across all views.
- Session Log.base: broadened tag filter to accept `#session` or `#Session` across all views.
- Quest Campaign Tracker.base: broadened tag filter to accept `#Category/Quest` or `#Quest` across views.
- Combat Tracker.base: retained view layout; ready for LowHP/Concentration formula additions if desired.

### Next actions (Phase 3)
- Add formulas/columns:
  - NPC: OverdueContact, SessionFlag.
  - Combat: LowHPBadge, Conditions filter quick toggles.
  - Quests: DueSoon flag, By Location param view.
- Create missing .base:
  - `Faction_Tracker.base`: factions, standings, relationships.
  - `Item_Catalog.base`: unify items with ownership and attunement.
  - `Relationship_Graph.base` (if not present in root) with entity relationships.
  - `Timeline_Tracker.base` (if dashboard needs dedicated view separate from Session Log).
- Wire dashboards: replace `EMBED[...]` with working database names and ensure parameters exist.

Generated: {{date:YYYY-MM-DD HH:mm}}

---

## Phase 5–7 Progress (current)

- Created `Location Tracker.base` with views: Quest Hubs, All Locations, Dangerous Areas, By Region. Wired into `1-DM Toolkit/Home` via `EMBED[Location Tracker.base][Quest Hubs]`.
- Templates updated (minimal canonical fields):
  - `Session_Template.md`: added `sessionNumber`, `npcsMet`, `questsStarted`, `questsAdvanced`, `questsCompleted`, `loot`, `treasureValue` (legacy underscore fields retained).
  - `NPC_Template.md`: added `aliases`, `status`, `lastSeen` for NPC Directory views.
  - `Location_Template.md`: added `active_quests`, optional `event_date`/`event_location` for calendar.
  - `Quest_Template.md`: normalized to `quest_status`, `quest_priority`, `quest_location`, `quest_progress`, `reward_gold`, `reward_xp`.
- Templater hygiene fixes:
  - Removed `[[<%...%>]]` wrappers in `NPC_Brain_Template.md` and `Session_Prep_Automated.md`.
- Dice Roller examples added to Session/NPC/Location templates.
- Documentation updated in `Documentation/Plugin Optimization Guide.md` with Dataview limits, Dice Roller usage, Fantasy Calendar wiring to `Aethel.json`, and Initiative/Statblocks notes.

---

## Phase 8–9 Implementation Notes

### Phase 8: Visual Content
- Leaflet map template added: `05_Templates/Template-Leaflet-Map.md`. Use this to create interactive maps; set `bounds` to your image dimensions and add markers linked to location notes.
- Portraits/tokens: recommend `z_Assets/Portraits/` and `z_Assets/Tokens/` folders; reference via `image_path`/`token` fields used by Bases.
- Relationship diagrams: use Canvas for ad-hoc visualizations; link nodes to entities.

### Phase 9: Automation
- Random tables: `04_Resources/Random_Tables/Encounter_and_Loot_Generators.md` with Dice Roller syntax for quick generation.
- QuickAdd: define macros to instantiate `Session_Template.md`, `NPC_Template.md`, `Quest_Template.md`, and `Template-Leaflet-Map.md` with prompts.

---

## Phase 11: Vault Optimization (post-integration)
### Phase 8–11 Status (current)

- Phase 8 (Visual): Leaflet demo created at `04_Resources/Maps/Aquabyssos_World_Map.md`; dashboard link added. Canvas relationship diagram at `z_Assets/Canvas/Relationship_Graph.canvas`.
- Phase 9 (Automation): QuickAdd macro config scaffolded at `08_Automation/Configs/QuickAdd/macros.json`. Random tables expanded in `04_Resources/Random_Tables/Encounter_and_Loot_Generators.md`.
- Phase 10 (Review): Dataview limits verified on dashboard; template/plugin notes updated in docs.
- Phase 11 (Optimization): Archive suggestions generated in `_AGENT_SETUP_REPORT.md`; duplicate dashboards scheduled for archive after merge.

### Goals
- Lean organization and intuitive navigation
- Minimize load time and cognitive overhead
- Ensure full, repeatable configuration by the agent

### Pruning & Archiving
- Identify stale/low-value content:
  - Orphans (no inlinks), duplicates, superseded templates, outdated dashboards
  - Large legacy sections (e.g., deprecated guides) not referenced by active systems
- Actions (link-safe):
  - Replace links to removed notes with stubs or safe text when needed
  - Move long-term references to `Ω_Archive/` with an index note
  - Remove redundant files after confirming zero inlinks
- Validation:
  - Re-run link audit; broken links must remain ≤ 50
  - Update `_LINK_TRIAGE_TOP200.md` and `_LINK_INTEGRITY_REPORT.md`

### Automated Configuration (agent-run)
- One-click setup flow to ensure consistent environment:
  - Verify required databases exist (`*.base`) and dashboard embeds resolve
  - Check template presence and canonical fields
  - Recommend plugin profiles (desktop/mobile) and Dataview limits
  - Generate/refresh reports and snapshots
- Deliverable:
  - Scripted entrypoint under `08_Automation/Scripts/` to run audits, sanity checks, and produce a summary
  - Alias runner: `08_Automation/run_agent_setup.sh` and dashboard links under Quick Actions → Maintenance
