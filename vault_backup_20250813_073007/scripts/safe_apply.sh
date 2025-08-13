#!/usr/bin/env bash
set -euo pipefail

ROOT="${WORKSPACE_DIR:-$(pwd)}"
BACKUP_DIR="${BACKUP_DIR:-$ROOT/backups/$(date +%F_%H%M%S)}"
REPORTS_DIR="$ROOT/reports"
mkdir -p "$BACKUP_DIR" "$REPORTS_DIR"

echo "Backup to: $BACKUP_DIR"
rsync -a --exclude ".git" --exclude "04_Resources/Assets/Generated" --exclude "09_Performance" --exclude "08_Archive" "$ROOT/" "$BACKUP_DIR/"

echo "Running audits and fixes..."
DRY_RUN=0 python3 "$ROOT/scripts/audit_standardize_cr_dates.py"
DRY_RUN=0 python3 "$ROOT/scripts/epoch_harmonizer.py"
DRY_RUN=0 python3 "$ROOT/scripts/metadata_linter.py"
DRY_RUN=0 python3 "$ROOT/scripts/tag_taxonomy.py"
DRY_RUN=0 python3 "$ROOT/scripts/bidirectional_links.py"
DRY_RUN=0 python3 "$ROOT/scripts/redlink_resolver.py"
DRY_RUN=0 python3 "$ROOT/scripts/content_depth_audit.py"
DRY_RUN=0 python3 "$ROOT/scripts/timeline_alignment_checker.py"

echo "Done. Reports at $REPORTS_DIR"

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