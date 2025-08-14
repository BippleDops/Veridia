#!/bin/bash

echo "🔍 TTRPG Vault System Status"
echo "============================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Check services
echo "📊 Service Status:"
echo "-----------------"

# Function to check service
check_service() {
    if [ -f "09_Performance/pid/$1.pid" ]; then
        PID=$(cat "09_Performance/pid/$1.pid")
        if ps -p $PID > /dev/null 2>&1; then
            echo -e "${GREEN}✅ $2: Running (PID: $PID)${NC}"
        else
            echo -e "${RED}❌ $2: Not running (stale PID)${NC}"
        fi
    else
        echo -e "${RED}❌ $2: Not running${NC}"
    fi
}

check_service "comfyui" "ComfyUI"
check_service "orchestrator" "Orchestrator"
check_service "auto_commit" "Auto-Commit"

echo ""
echo "📈 Generation Statistics:"
echo "------------------------"

if [ -f "09_Performance/orchestrator_state.json" ]; then
    echo -e "${BLUE}$(cat 09_Performance/orchestrator_state.json | grep totalGenerated | cut -d':' -f2 | tr -d ',' | xargs echo "Total Generated:" )${NC}"
    echo -e "${BLUE}$(cat 09_Performance/orchestrator_state.json | grep currentBatch | cut -d':' -f2 | tr -d ',' | xargs echo "Current Batch:" )${NC}"
fi

echo ""
echo "💾 Asset Counts:"
echo "---------------"

count_files() {
    local dir="04_Resources/Assets/$1"
    if [ -d "$dir" ]; then
        local count=$(find "$dir" -name "*.png" -o -name "*.jpg" -o -name "*.webp" 2>/dev/null | wc -l | tr -d ' ')
        echo "$2: $count files"
    fi
}

count_files "Portraits" "Portraits"
count_files "Locations" "Locations"
count_files "Creatures" "Creatures"
count_files "Items" "Items"
count_files "Maps" "Maps"
count_files "Scenes" "Scenes"
count_files "Audio" "Audio"

echo ""
echo "🔧 API Status:"
echo "-------------"

if [ -f "09_Performance/api_test_results.json" ]; then
    echo -e "${YELLOW}Last API test results:${NC}"
    cat 09_Performance/api_test_results.json | grep -E '"status":|"message":' | head -8
fi

echo ""
echo "📝 Recent Logs:"
echo "--------------"

if [ -f "09_Performance/logs/orchestrator.log" ]; then
    echo "Orchestrator (last 5 lines):"
    tail -5 09_Performance/logs/orchestrator.log 2>/dev/null || echo "  No recent logs"
fi

echo ""
echo "🎯 Quick Actions:"
echo "----------------"
echo "  Restart all:     bash scripts/launch_all_services.sh"
echo "  Stop all:        bash scripts/stop_all_services.sh"
echo "  Generate batch:  node scripts/mega_generator.js"
echo "  View logs:       tail -f 09_Performance/logs/*.log"
