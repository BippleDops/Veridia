#!/bin/bash
set -euo pipefail

# Spawns local generation agents using Ollama for text prompt synthesis
# and our existing Node scripts for image sweeps.

cd "$(dirname "$0")/.."

LOG=09_Performance/local_agents.log
mkdir -p "$(dirname "$LOG")"

TS() { date -u +%Y-%m-%dT%H:%M:%SZ; }
echo "[$(TS)] starting local agents" | tee -a "$LOG"

# Probe Ollama
node scripts/ollama_client.js >> "$LOG" 2>&1 || true

append_prompts(){
  local KIND="$1"; local REALM="$2"; local COUNT="$3"; local OUTMD="$4"
  local JSON
  JSON=$(KIND="$KIND" REALM="$REALM" COUNT="$COUNT" node scripts/ollama_synth_prompts.js 2>>"$LOG" || echo '[]')
  if echo "$JSON" | grep -q '^\s*\['; then
    {
      echo "\n\n## $REALM $KIND prompts ($(TS))\n"
      echo '```json'
      echo "$JSON"
      echo '```'
    } >> "$OUTMD"
  fi
}

# Main loop: synthesize prompts and then generate assets
(
  while true; do
    append_prompts portrait Aquabyssos 6 "04_Resources/Assets/Portrait_Prompts - NPCs.md" || true
    append_prompts location Aquabyssos 6 "04_Resources/Assets/Location Prompts.md" || true
    append_prompts map Aquabyssos 4 "04_Resources/Assets/Maps/Battle Map Descriptions.md" || true
    append_prompts creature Aquabyssos 4 "04_Resources/Assets/Scenes - Atmospheric Art.md" || true
    node scripts/generate_assets.js --real --strict --types=portrait,location,map,creature --qps=2 --concurrency=3 --limit=120 >> 09_Performance/local_agents_img.log 2>&1 || true
    sleep 240
  done
) >> "$LOG" 2>&1 & echo $! > 09_Performance/.agent_main.pid

# Secondary loop with Aethermoor realm focus
(
  while true; do
    append_prompts portrait Aethermoor 5 "04_Resources/Assets/Portrait_Prompts - NPCs.md" || true
    append_prompts location Aethermoor 5 "04_Resources/Assets/Location_Prompts - Cities.md" || true
    append_prompts map Aethermoor 3 "04_Resources/Assets/Maps/Battle Map Descriptions.md" || true
    node scripts/generate_assets.js --real --strict --types=portrait,location,map --qps=2 --concurrency=3 --limit=90 >> 09_Performance/local_agents_img_2.log 2>&1 || true
    sleep 300
  done
) >> "$LOG" 2>&1 & echo $! > 09_Performance/.agent_secondary.pid

echo "[$(TS)] local agents launched" | tee -a "$LOG"


