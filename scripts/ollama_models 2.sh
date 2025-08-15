#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")/.."

LOG="09_Performance/ollama_models.log"
mkdir -p "$(dirname "$LOG")"

if ! command -v ollama >/dev/null 2>&1; then
  echo "ollama not found; install from https://ollama.com/download" | tee -a "$LOG"
  exit 0
fi

TS() { date -u +%Y-%m-%dT%H:%M:%SZ; }
echo "[$(TS)] Checking/pulling Ollama models" | tee -a "$LOG"

MODELS=(
  "llama3.1:8b"
  "llama3.2:3b"
  "mistral:7b-instruct"
  "qwen2:7b-instruct"
  "phi3:mini"
  "deepseek-coder:6.7b-instruct"
)

for m in "${MODELS[@]}"; do
  if ollama show "$m" >/dev/null 2>&1; then
    echo "exists: $m" | tee -a "$LOG"
  else
    echo "pulling: $m" | tee -a "$LOG"
    ollama pull "$m" >> "$LOG" 2>&1 || true
  fi
done

echo "[$(TS)] Installed models:" | tee -a "$LOG"
ollama list | tee -a "$LOG"


