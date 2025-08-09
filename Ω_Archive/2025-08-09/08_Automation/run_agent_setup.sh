#!/bin/zsh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$ROOT_DIR"
echo "Running agent setup from: $ROOT_DIR"

python3 "$ROOT_DIR/08_Automation/Scripts/agent_setup.py"

