---
world: Both
updated: 2025-08-11
created: 2025-08-11
status: draft
tags:
- both
- draft
type: Lore
---


# Vault Improvement Phase 5

Commands (run from vault root):

Dry run (no writes):

```
DRY_RUN=1 python3 scripts/audit_standardize_cr_dates.py
DRY_RUN=1 python3 scripts/epoch_harmonizer.py
DRY_RUN=1 python3 scripts/metadata_linter.py
DRY_RUN=1 python3 scripts/tag_taxonomy.py
DRY_RUN=1 python3 scripts/bidirectional_links.py
DRY_RUN=1 python3 scripts/redlink_resolver.py
DRY_RUN=1 python3 scripts/canonical_names.py
DRY_RUN=1 python3 scripts/content_depth_audit.py
DRY_RUN=1 python3 scripts/timeline_alignment_checker.py
```

Apply with backups:

```
chmod +x scripts/safe_apply.sh
BACKUP_DIR=backups/$(date +%F) scripts/safe_apply.sh
```

Reports are written to `reports/`.