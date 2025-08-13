#!/bin/bash
set -euo pipefail

# Nightly asset generation loop
# Usage: nightly_generate.sh [A|B]
#  A => portrait,creature
#  B => location,scene,map,item,vehicle

cd "$(dirname "$0")/.."

GROUP="${1:-A}"
case "$GROUP" in
  A) TYPES="portrait,creature" ;;
  B) TYPES="location,scene,map,item,vehicle" ;;
  *) TYPES="$GROUP" ;;
esac

LOG_DIR="09_Performance"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/nightly_${GROUP}.log"

# Tuning knobs
QPS="${QPS:-1}"
CONCURRENCY="${CONCURRENCY:-2}"
SLEEP_SECS="${SLEEP_SECS:-60}"

echo "[$(date -Is)] nightly_generate start group=$GROUP types=$TYPES qps=$QPS c=$CONCURRENCY" | tee -a "$LOG_FILE"

while true; do
  TS="$(date -Is)"
  echo "[$TS] batch start types=$TYPES" | tee -a "$LOG_FILE"
  # Real-only, strict (no placeholders). Prompts are idempotent and skip existing PNGs.
  env OPENAI_ORGANIZATION="${OPENAI_ORGANIZATION:-}" OPENAI_PROJECT="${OPENAI_PROJECT:-}" \
    node scripts/generate_assets.js --real --strict --types="$TYPES" --qps="$QPS" --concurrency="$CONCURRENCY" >> "$LOG_FILE" 2>&1 || true
  echo "[$(date -Is)] batch end types=$TYPES" | tee -a "$LOG_FILE"
  sleep "$SLEEP_SECS"
done


