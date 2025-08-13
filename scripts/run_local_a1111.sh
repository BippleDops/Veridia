#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

A1111_URL_DEFAULT="http://127.0.0.1:7860"
A1111_URL="${A1111_URL:-$A1111_URL_DEFAULT}"
WAIT_SECS="${WAIT_SECS:-1800}"
SLEEP_SECS="${SLEEP_SECS:-10}"
LIMIT_PER_BATCH="${LIMIT_PER_BATCH:-80}"

LOG_DIR="09_Performance"
GEN_LOG="$LOG_DIR/local_a1111_gen.log"
mkdir -p "$LOG_DIR"

echo "[run_local_a1111] url=$A1111_URL wait=${WAIT_SECS}s batch_limit=$LIMIT_PER_BATCH" | tee -a "$GEN_LOG"

ready=0
start_ts=$(date +%s)
while true; do
  if curl -sS "$A1111_URL/sdapi/v1/sd-models" >/dev/null 2>&1; then
    echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] ready: a1111 responding; starting local generation" | tee -a "$GEN_LOG"
    ready=1
    break
  fi
  now=$(date +%s)
  if [ $((now - start_ts)) -ge "$WAIT_SECS" ]; then
    echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] timeout: a1111 not ready after $WAIT_SECS seconds" | tee -a "$GEN_LOG"
    exit 0
  fi
  sleep "$SLEEP_SECS"
done

# Continuous local batches every 5 minutes
while [ "$ready" -eq 1 ]; do
  echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] batch start (local a1111)" | tee -a "$GEN_LOG"
  LOCAL_IMAGES=1 LOCAL_IMAGE_BACKEND=a1111 A1111_URL="$A1111_URL" \
    node scripts/generate_assets.js --real --local --types=map,location,portrait,creature --limit="$LIMIT_PER_BATCH" --qps=2 --concurrency=3 >> "$GEN_LOG" 2>&1 || true
  echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] batch end (local a1111)" | tee -a "$GEN_LOG"
  sleep 300
done


