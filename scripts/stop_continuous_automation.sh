#!/bin/bash

# Stop Continuous Vault Automation

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VAULT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "🛑 Stopping Continuous Vault Automation..."
echo "=========================================="
echo ""

# Check for PID file
if [ -f "$VAULT_ROOT/09_Performance/continuous_automation.pid" ]; then
    PID=$(cat "$VAULT_ROOT/09_Performance/continuous_automation.pid")
    
    if ps -p $PID > /dev/null; then
        echo "Stopping process $PID..."
        kill $PID
        
        # Wait for graceful shutdown
        sleep 2
        
        # Force kill if still running
        if ps -p $PID > /dev/null; then
            echo "Force stopping..."
            kill -9 $PID
        fi
        
        rm "$VAULT_ROOT/09_Performance/continuous_automation.pid"
        echo "✅ Automation stopped"
    else
        echo "Process $PID not found"
        rm "$VAULT_ROOT/09_Performance/continuous_automation.pid"
    fi
else
    # Try to find by name
    PIDS=$(pgrep -f "continuous_vault_automation.js")
    
    if [ -n "$PIDS" ]; then
        echo "Found processes: $PIDS"
        kill $PIDS
        
        sleep 2
        
        # Force kill if still running
        if pgrep -f "continuous_vault_automation.js" > /dev/null; then
            echo "Force stopping..."
            pkill -9 -f "continuous_vault_automation.js"
        fi
        
        echo "✅ Automation stopped"
    else
        echo "No automation process found"
    fi
fi

echo ""
echo "To restart: ./scripts/start_continuous_automation.sh"
