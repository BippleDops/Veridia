#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${BACKUP_DIR:-}" ]]; then
  echo "BACKUP_DIR is not set. Please set BACKUP_DIR to a backup directory path."
  exit 1
fi

mkdir -p "$BACKUP_DIR"
export DRY_RUN=

# Run all standardizers (no dry run)
python3 /workspace/scripts/epoch_harmonizer.py
python3 /workspace/scripts/bidirectional_links.py
python3 /workspace/scripts/redlink_resolver.py
python3 /workspace/scripts/metadata_linter.py
python3 /workspace/scripts/audit_standardize_cr_dates.py
python3 /workspace/scripts/tag_taxonomy.py
python3 /workspace/scripts/canonical_names.py
python3 /workspace/scripts/content_depth_audit.py
python3 /workspace/scripts/timeline_alignment_checker.py

echo "Safe apply complete. Backups stored in: $BACKUP_DIR"