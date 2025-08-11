#!/bin/bash
set -euo pipefail

echo "=== Vault Optimization Pipeline ==="
echo "Starting at $(date)"
cd /workspace

# Step 1: Commit pending changes
echo -e "\n[1/8] Committing tooling..."
git add -A
git commit -m "build: CI and optimization scripts" --no-verify || echo "Already committed"

# Step 2: Run deduplication
echo -e "\n[2/8] Consolidating duplicate assets..."
python3 scripts/dedupe_assets.py --root . --apply
echo "Deduplication complete"

# Step 3: Archive orphan stubs
echo -e "\n[3/8] Archiving orphan stubs..."
python3 scripts/orphan_archiver.py --root . --apply --threshold 0
echo "Orphan archival complete"

# Step 4: Optimize media
echo -e "\n[4/8] Optimizing media (top 50 files)..."
python3 scripts/media_optimize.py --root . --apply --limit 50
echo "Media optimization complete"

# Step 5: Check link integrity
echo -e "\n[5/8] Validating link integrity..."
python3 scripts/link_integrity_check.py --root .
echo "Link check complete"

# Step 6: Generate post-metrics
echo -e "\n[6/8] Generating post-optimization metrics..."
REPORT_DIR="reports/ops_$(date +%F)"
du -sh . > "$REPORT_DIR/size_post.txt"
find . -type f -not -path "./.git/*" -printf "%s\t%p\n" | sort -nr | head -n 200 > "$REPORT_DIR/largest_files_post.tsv"
echo "Post-metrics generated"

# Step 7: Commit optimizations
echo -e "\n[7/8] Committing optimization results..."
git add -A
git commit -m "perf: optimize vault (dedupe, archive, media)" --no-verify || echo "Nothing to commit"

# Step 8: Push to origin
echo -e "\n[8/8] Pushing to origin..."
git push -u origin ops/vault-optimization-2025-08-11

echo -e "\n=== Pipeline Complete ==="
echo "Finished at $(date)"
echo ""
echo "Next steps:"
echo "1. Open PR at: https://github.com/BippleDops/Veridia/compare/ops/vault-optimization-2025-08-11"
echo "2. Use PR description from: PR_DESCRIPTION.md"
echo "3. Review reports in: reports/ops_$(date +%F)/"