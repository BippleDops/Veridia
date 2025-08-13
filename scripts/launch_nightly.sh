#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

mkdir -p 09_Performance

# Quick smoke test to validate strict real generation
SMOKE_LOG="09_Performance/asset_smoke_$(date +%Y%m%d_%H%M).log"
nohup node scripts/generate_assets.js --real --strict --types=portrait,location --limit=6 --qps=1 --concurrency=2 >> "$SMOKE_LOG" 2>&1 &
echo $! > 09_Performance/.smoke_pid

# Nightly groups
nohup QPS=1 CONCURRENCY=2 SLEEP_SECS=60 bash scripts/nightly_generate.sh A >> 09_Performance/nightly_A.log 2>&1 &
echo $! > 09_Performance/.nightly_A.pid
nohup QPS=1 CONCURRENCY=2 SLEEP_SECS=60 bash scripts/nightly_generate.sh B >> 09_Performance/nightly_B.log 2>&1 &
echo $! > 09_Performance/.nightly_B.pid

# Hourly auto-commit/push loop
nohup bash scripts/auto_commit_push.sh >> 09_Performance/auto_commit_push.log 2>&1 &
echo $! > 09_Performance/.autopush.pid

echo "Started:"
echo " smoke pid=$(cat 09_Performance/.smoke_pid)"
echo " nightly_A pid=$(cat 09_Performance/.nightly_A.pid)"
echo " nightly_B pid=$(cat 09_Performance/.nightly_B.pid)"
echo " autopush pid=$(cat 09_Performance/.autopush.pid)"


