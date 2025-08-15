#!/bin/bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

INTERVAL_SECS="${1:-3600}"
QPS="${QPS:-2}"
CONCURRENCY="${CONCURRENCY:-2}"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"
}

start_batch() {
  log "Starting real generation batch (qps=$QPS, concurrency=$CONCURRENCY)"
  ( node scripts/generate_assets.js --real --strict --qps="$QPS" --concurrency="$CONCURRENCY" --types=portrait,creature --limit=250 &
    node scripts/generate_assets.js --real --strict --qps="$QPS" --concurrency="$CONCURRENCY" --types=location,scene --limit=250 &
    node scripts/generate_assets.js --real --strict --qps="$QPS" --concurrency="$CONCURRENCY" --types=item --limit=400 &
    node scripts/generate_assets.js --real --strict --qps="$QPS" --concurrency="$CONCURRENCY" --types=map,handout,ui --limit=200 &
    wait ) || true
}

post_link() {
  log "Running sweep + link + commit/push"
  node scripts/sweep_upgrade_images.js || true
  node scripts/link_assets.js || true
  git add -A || true
  git commit -m "chore(auto): hourly sweep/link after gen batch" || true
  git push || true
}

is_idle() {
  # return 0 (true) if no running generate_assets.js processes
  if pgrep -fl "node scripts/generate_assets.js" >/dev/null 2>&1; then
    return 1
  else
    return 0
  fi
}

log "Auto loop started (interval=${INTERVAL_SECS}s) in $ROOT_DIR"

while true; do
  if is_idle; then
    start_batch
    post_link
  else
    log "Generation already running; skipping new batch this cycle"
  fi
  sleep "$INTERVAL_SECS"
done


