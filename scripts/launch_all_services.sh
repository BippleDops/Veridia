#!/bin/bash

# TTRPG Vault - Complete Service Launch Script
# ============================================

echo "🚀 TTRPG Vault Service Launcher"
echo "================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Ensure directories exist
mkdir -p 09_Performance/logs
mkdir -p 09_Performance/pid
mkdir -p 04_Resources/Assets/{Portraits,Locations,Creatures,Items,Maps,Scenes,Audio,Video}

# Function to check if a process is running
check_process() {
    if [ -f "09_Performance/pid/$1.pid" ]; then
        PID=$(cat "09_Performance/pid/$1.pid")
        if ps -p $PID > /dev/null 2>&1; then
            echo -e "${GREEN}✅ $2 is running (PID: $PID)${NC}"
            return 0
        else
            echo -e "${YELLOW}⚠️ $2 pid file exists but process not running${NC}"
            rm "09_Performance/pid/$1.pid"
            return 1
        fi
    else
        echo -e "${RED}❌ $2 is not running${NC}"
        return 1
    fi
}

# Function to start a service
start_service() {
    echo "Starting $2..."
    nohup $3 > "09_Performance/logs/$1.log" 2>&1 &
    echo $! > "09_Performance/pid/$1.pid"
    sleep 2
    if check_process "$1" "$2"; then
        return 0
    else
        return 1
    fi
}

echo "📊 Checking Services..."
echo ""

# 1. Check/Start ComfyUI
if ! check_process "comfyui" "ComfyUI"; then
    echo "🎨 Attempting to start ComfyUI..."
    
    # Check if ComfyUI directory exists
    if [ -d "$HOME/ComfyUI" ]; then
        cd "$HOME/ComfyUI"
        
        # Try with Python 3.11 venv first
        if [ -d "venv" ]; then
            source venv/bin/activate
            PYTORCH_ENABLE_MPS_FALLBACK=1 PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0 \
                nohup python main.py --port 8188 > "$OLDPWD/09_Performance/logs/comfyui.log" 2>&1 &
            echo $! > "$OLDPWD/09_Performance/pid/comfyui.pid"
        else
            # Fallback to system Python
            PYTORCH_ENABLE_MPS_FALLBACK=1 PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0 \
                nohup python main.py --port 8188 > "$OLDPWD/09_Performance/logs/comfyui.log" 2>&1 &
            echo $! > "$OLDPWD/09_Performance/pid/comfyui.pid"
        fi
        
        cd "$OLDPWD"
        sleep 5
        check_process "comfyui" "ComfyUI"
    else
        echo -e "${YELLOW}⚠️ ComfyUI not found at ~/ComfyUI${NC}"
    fi
fi

# 2. Start Asset Generation Orchestrator
if ! check_process "orchestrator" "Asset Orchestrator"; then
    start_service "orchestrator" "Asset Orchestrator" "node scripts/orchestrator.js"
fi

# 3. Start Auto-Commit Service
if ! check_process "auto_commit" "Auto-Commit Service"; then
    start_service "auto_commit" "Auto-Commit Service" "bash scripts/auto_commit_push.sh"
fi

# 4. Test all APIs
echo ""
echo "🔧 Testing API Connections..."
node scripts/test_all_apis.js

echo ""
echo "================================"
echo "📋 Service Summary:"
echo ""

check_process "comfyui" "ComfyUI"
check_process "orchestrator" "Asset Orchestrator"
check_process "auto_commit" "Auto-Commit Service"

echo ""
echo "================================"
echo "🎯 Quick Commands:"
echo ""
echo "  Generate 100 images:  node scripts/mega_generator.js"
echo "  Generate audio pack:  node scripts/generate_audio_pack.js"
echo "  Check status:        bash scripts/check_status.sh"
echo "  Stop all:           bash scripts/stop_all_services.sh"
echo ""
echo "✨ All services launched! Starting asset generation..."
echo ""

# Start initial generation batch
echo "🎨 Launching initial generation batch..."
node scripts/mega_generator.js &

echo ""
echo "🚀 System is now running! Check 09_Performance/logs/ for details."
