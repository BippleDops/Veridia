#!/bin/bash
set -euo pipefail

# Spawns local generation agents using Ollama for text prompt synthesis
# and our existing Node scripts for image/audio sweeps.

cd "$(dirname "$0")/.."

LOG=09_Performance/local_agents.log
mkdir -p "$(dirname "$LOG")"

echo "[$(date -Is)] starting local agents" | tee -a "$LOG"

# Probe Ollama
node scripts/ollama_client.js >> "$LOG" 2>&1 || true

# Lightweight loop to synthesize new prompt blocks (portraits/locations)
nohup bash -c '
  while true; do
    node -e "const {generate}=require('./scripts/ollama_client'); (async()=>{const p=await generate({prompt:'Generate 5 terse D&D location prompt JSON objects with fields id,name,type,style,aspect,resolution,prompt suitable for Aquabyssos undersea city. Output JSON array only.'}); console.log(p)})().catch(e=>console.error(e))" >> 04_Resources/Assets/Location_Prompts.md 2>>"$LOG" || true;
    sleep 120;
  done
' >> "$LOG" 2>&1 & echo $! > 09_Performance/.agent_prompts.pid

# Kick small image generation loop (maps/locations)
nohup bash -c '
  while true; do
    node scripts/generate_assets.js --real --strict --types=location,map --qps=2 --concurrency=3 --limit=80 >> 09_Performance/local_agents_img.log 2>&1 || true;
    sleep 300;
  done
' >> "$LOG" 2>&1 & echo $! > 09_Performance/.agent_images.pid

echo "[$(date -Is)] local agents launched" | tee -a "$LOG"


