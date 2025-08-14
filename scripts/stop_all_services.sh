#!/bin/bash

echo "🛑 Stopping All TTRPG Vault Services"
echo "===================================="
echo ""

# Function to stop a service
stop_service() {
    if [ -f "09_Performance/pid/$1.pid" ]; then
        PID=$(cat "09_Performance/pid/$1.pid")
        if ps -p $PID > /dev/null 2>&1; then
            echo "Stopping $2 (PID: $PID)..."
            kill $PID
            sleep 2
            
            # Force kill if still running
            if ps -p $PID > /dev/null 2>&1; then
                echo "  Force killing $2..."
                kill -9 $PID
            fi
            
            rm "09_Performance/pid/$1.pid"
            echo "  ✅ $2 stopped"
        else
            rm "09_Performance/pid/$1.pid"
            echo "  ⚠️ $2 was not running (cleaned PID file)"
        fi
    else
        echo "  ℹ️ $2 was not running"
    fi
}

# Stop all services
stop_service "orchestrator" "Orchestrator"
stop_service "auto_commit" "Auto-Commit Service"
stop_service "comfyui" "ComfyUI"

echo ""
echo "✅ All services stopped"
echo ""
echo "To restart: bash scripts/launch_all_services.sh"
