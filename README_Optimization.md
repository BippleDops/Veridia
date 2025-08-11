### Vault Optimization Pipeline

This repository includes an aggressive-but-careful optimization pipeline focused on:

- Media size reduction with WebP and lossless PNG/SVG optimization
- Git LFS adoption and large-file guardrails
- Link integrity validation for Obsidian-style `[[wikilinks]]`
- Frontmatter schema hardening and tag taxonomy normalization
- Duplicate asset consolidation and orphan triage/archival
- CI checks for markdown style, LFS compliance, and link health

#### How to run locally

- Pre-metrics snapshot (already automated in reports/):
  - size map, largest files, duplicates, orphans, stub markers
- Apply selected steps:
  - Media optimization: `python3 scripts/media_optimize.py --apply`
  - Deduplicate assets: `python3 scripts/dedupe_assets.py --apply`
  - Link integrity: `python3 scripts/link_integrity_check.py --root . --report reports/link_integrity.md`

All scripts support `--dry-run` and generate reports in `reports/ops_YYYY-MM-DD`.

#### CI

The workflow in `.github/workflows/vault-ci.yml` runs on PRs and pushes:
- Link integrity (wikilinks)
- Markdown lint
- LFS enforcement and size budget advisory

#### Safety & Rollback

- A dated git tag is created before apply steps (opt-snapshot-YYYY-MM-DD)
- Backups folder is archived as `backups_YYYY-MM-DD.tar.gz`
- Revert the optimization PR with: `git revert <first-apply-commit>^..HEAD`