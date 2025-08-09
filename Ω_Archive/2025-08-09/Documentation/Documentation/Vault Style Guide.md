# Vault Style & Contribution Guide

Keeping a consistent style across thousands of notes makes everything **discoverable** and **automation-friendly**. Follow these guidelines whenever you add or edit content.

## 1. File & Folder Naming
* Use **Title Case** filenames (`City of Screams.md`).
* Avoid special characters other than spaces, hyphens, and apostrophes.
* Singular nouns for folders (`Monsters`, `Quests`, `People`).
* Place homebrew content under the same folder tree as official content with a `Homebrew` sub-folder when relevant.

## 2. Linking
* Prefer Obsidian wiki-links `[[Like This]]` over raw Markdown links.
* Include aliases when page title differs from in-text mention: `[[Councillor Elara Brightwater|Elara]]`.
* When referencing a **section**, link with heading: `[[Island of Skulls#Geography]]`.

## 3. Front-Matter
* Every note **must** have a `type` key (see Frontmatter Schema).
* Keep keys **lowercase kebab-case**.
* Boolean yes/no values in lowercase (`true`/`false`).

## 4. Markdown Conventions
* Use `#`-style headings; reserve H1 for the note title.
* Lists should be `-` dashes (not `*`).
* Bold rule labels (`**Traits.** Text`) for monster statblocks, matching 5e SRD style.
* Embed images with descriptive alt text: `![Shadowhaven skyline](2-World/Hubs/Shadowhaven.md)`.

## 5. Assets & Media
* Store images under `z_Assets/` mirroring note hierarchy where practical.
* Keep images under **1 MB**; use WebP or JPEG.
* Name assets in lowercase-kebab-case (`shadowhaven-skyline.webp`).

## 6. Dataview & Automation
* Sortable fields like `cr`, `level`, or `date` should be raw numbers/dates—**no formatting**.
* Use `status` fields (`active/completed`) to power dashboards.

## 7. Pull Requests / Note Reviews
1. Run `node scripts/vaultAudit.js` and ensure **zero** broken links.
2. Run `node scripts/assetsAudit.js` and confirm no missing assets.
3. Adhere to style guide; reviewers will request changes for inconsistencies.
4. Update `CHANGELOG.md` with a one-line summary of your change.

## 8. Common Pitfalls
| Issue | Fix |
|-------|-----|
| Broken wiki-link | Ensure target note exists and spelling matches. |
| Wrong front-matter date | Use YYYY-MM-DD only. |
| Image too large | Compress via TinyPNG or convert to WebP. |

Stay consistent, and the vault remains the most usable D&D knowledge base in history! 