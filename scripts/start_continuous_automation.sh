#!/bin/bash

# Start Continuous Vault Automation
# This script launches the 24/7 automation system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "🚀 Starting 24/7 Continuous Vault Automation..."
echo "================================================"
echo ""

# Check if already running
if pgrep -f "continuous_vault_automation.js" > /dev/null; then
    echo "⚠️  Automation is already running!"
    echo ""
    echo "To stop it, run: ./scripts/stop_continuous_automation.sh"
    exit 1
fi

# Create necessary directories
mkdir -p "$VAULT_ROOT/09_Performance/continuous_logs"
mkdir -p "$VAULT_ROOT/08_Archive/backups"

# Start in background with logging
cd "$VAULT_ROOT"

# Option 1: Run in foreground (recommended for testing)
# node scripts/continuous_vault_automation.js

# Option 2: Run in background with nohup
nohup node scripts/continuous_vault_automation.js > 09_Performance/continuous_logs/main.log 2>&1 &
PID=$!

echo "✅ Automation started with PID: $PID"
echo ""
echo "📊 Status: 09_Performance/AUTOMATION_STATUS.md"
echo "📝 Logs: 09_Performance/continuous_logs/"
echo ""
echo "To stop: ./scripts/stop_continuous_automation.sh"
echo "To check: ps aux | grep continuous_vault_automation"
echo ""

# Save PID for stop script
echo $PID > 09_Performance/continuous_automation.pid

echo "The system will now run 24/7 and:"
echo "  • Fix broken links every 5 minutes"
echo "  • Enhance content every 10 minutes"
echo "  • Generate assets every 15 minutes"
echo "  • Optimize metadata every 20 minutes"
echo "  • Auto-commit to git every 30 minutes"
echo "  • Rebuild indexes every hour"
echo "  • Monitor quality every 2 hours"
echo "  • Create backups every 6 hours"
echo ""
echo "Happy automating! 🎉"
