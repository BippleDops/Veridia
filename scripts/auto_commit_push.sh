#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

LOG="09_Performance/auto_commit_push.log"
mkdir -p "$(dirname "$LOG")"

MSG_PREFIX="chore(nightly): batch assets + link/sweep"

while true; do
  echo "[$(date -Is)] auto-commit cycle" | tee -a "$LOG"
  # Link and sweep to embed new images
  node scripts/link_assets.js >> "$LOG" 2>&1 || true
  node scripts/sweep_upgrade_images.js >> "$LOG" 2>&1 || true

  git add -A || true
  if ! git diff --cached --quiet; then
    git commit -m "$MSG_PREFIX" >> "$LOG" 2>&1 || true
    git push >> "$LOG" 2>&1 || true
  fi
  sleep 3600
done


