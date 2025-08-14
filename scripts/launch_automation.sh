#!/bin/bash
set -euo pipefail

# Launch ComfyUI + n8n automation pipeline
# This script orchestrates the entire image generation system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$ROOT_DIR/09_Performance/logs"
PID_DIR="$ROOT_DIR/09_Performance/pids"

# Create directories
mkdir -p "$LOG_DIR" "$PID_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() { echo -e "${GREEN}[$(date '+%H:%M:%S')]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1" >&2; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }

# Check dependencies
check_deps() {
    log "Checking dependencies..."
    
    # Check ComfyUI
    if ! curl -s http://127.0.0.1:8188/system_stats > /dev/null 2>&1; then
        warn "ComfyUI not running on port 8188"
        log "Starting ComfyUI..."
        start_comfyui
    else
        log "✓ ComfyUI is running"
    fi
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        error "Node.js not found"
        exit 1
    fi
    log "✓ Node.js $(node --version)"
    
    # Check n8n (optional)
    if command -v n8n &> /dev/null; then
        log "✓ n8n found"
        N8N_AVAILABLE=true
    else
        warn "n8n not installed (npm install -g n8n)"
        N8N_AVAILABLE=false
    fi
}

start_comfyui() {
    cd ~/ComfyUI
    
    # Use Python 3.11 if available
    if [ -d "venv311" ]; then
        PYTHON_CMD="./venv311/bin/python"
    elif [ -d "venv" ]; then
        PYTHON_CMD="./venv/bin/python"
    else
        error "No Python venv found in ~/ComfyUI"
        exit 1
    fi
    
    # Launch with MPS fallback for macOS
    export PYTORCH_ENABLE_MPS_FALLBACK=1
    export PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0
    
    nohup $PYTHON_CMD main.py \
        --listen 127.0.0.1 \
        --port 8188 \
        > "$LOG_DIR/comfyui.log" 2>&1 &
    
    echo $! > "$PID_DIR/comfyui.pid"
    log "ComfyUI started (PID: $!)"
    
    # Wait for it to be ready
    sleep 10
}

start_orchestrator() {
    log "Starting generation orchestrator..."
    
    cd "$ROOT_DIR"
    
    # Start the orchestrator with n8n listener
    nohup node scripts/n8n_comfyui_automation.js \
        --orchestrate \
        --concurrency 2 \
        --n8n 5679 \
        > "$LOG_DIR/orchestrator.log" 2>&1 &
    
    echo $! > "$PID_DIR/orchestrator.pid"
    log "Orchestrator started (PID: $!)"
    log "  - Queue API: http://localhost:5679/queue/add"
    log "  - Stats API: http://localhost:5679/stats"
}

start_n8n() {
    if [ "$N8N_AVAILABLE" != "true" ]; then
        warn "Skipping n8n (not installed)"
        return
    fi
    
    log "Starting n8n..."
    
    # Create n8n data directory
    mkdir -p "$ROOT_DIR/.n8n"
    
    # Start n8n
    cd "$ROOT_DIR"
    N8N_USER_FOLDER="$ROOT_DIR/.n8n" \
    nohup n8n start \
        --port 5678 \
        > "$LOG_DIR/n8n.log" 2>&1 &
    
    echo $! > "$PID_DIR/n8n.pid"
    log "n8n started (PID: $!)"
    log "  - Web UI: http://localhost:5678"
    log "  - Import workflow from: scripts/n8n_workflows/comfyui_automation.json"
}

queue_initial_jobs() {
    log "Queueing initial generation jobs..."
    
    cd "$ROOT_DIR"
    
    # Queue some starter jobs for each world
    for world in aquabyssos aethermoor void; do
        for type in portrait creature location; do
            node scripts/n8n_comfyui_automation.js \
                --queue \
                --type "$type" \
                --world "$world" \
                --count 3
        done
    done
    
    log "Queued 27 initial images (3 types × 3 worlds × 3 each)"
}

monitor_system() {
    log "Starting system monitor..."
    
    while true; do
        sleep 30
        
        # Check if services are still running
        if [ -f "$PID_DIR/comfyui.pid" ] && ! ps -p $(cat "$PID_DIR/comfyui.pid") > /dev/null 2>&1; then
            error "ComfyUI crashed, restarting..."
            start_comfyui
        fi
        
        if [ -f "$PID_DIR/orchestrator.pid" ] && ! ps -p $(cat "$PID_DIR/orchestrator.pid") > /dev/null 2>&1; then
            error "Orchestrator crashed, restarting..."
            start_orchestrator
        fi
        
        # Get stats
        if curl -s http://localhost:5679/stats > /dev/null 2>&1; then
            STATS=$(curl -s http://localhost:5679/stats)
            COMPLETED=$(echo "$STATS" | grep -o '"completed":[0-9]*' | cut -d: -f2)
            log "Stats: $COMPLETED images completed"
        fi
    done
}

stop_all() {
    log "Stopping all services..."
    
    for pidfile in "$PID_DIR"/*.pid; do
        if [ -f "$pidfile" ]; then
            PID=$(cat "$pidfile")
            if ps -p "$PID" > /dev/null 2>&1; then
                kill "$PID" 2>/dev/null || true
                log "Stopped PID $PID"
            fi
            rm "$pidfile"
        fi
    done
}

# Main execution
case "${1:-start}" in
    start)
        log "Starting TTRPG asset automation system..."
        check_deps
        start_orchestrator
        start_n8n
        queue_initial_jobs
        log "System ready! Monitor logs in: $LOG_DIR"
        log "Press Ctrl+C to stop"
        monitor_system
        ;;
    
    stop)
        stop_all
        ;;
    
    status)
        log "System status:"
        curl -s http://127.0.0.1:8188/system_stats > /dev/null 2>&1 && echo "  ✓ ComfyUI running" || echo "  ✗ ComfyUI not running"
        curl -s http://localhost:5679/stats > /dev/null 2>&1 && echo "  ✓ Orchestrator running" || echo "  ✗ Orchestrator not running"
        [ "$N8N_AVAILABLE" = "true" ] && (curl -s http://localhost:5678 > /dev/null 2>&1 && echo "  ✓ n8n running" || echo "  ✗ n8n not running")
        
        if curl -s http://localhost:5679/stats > /dev/null 2>&1; then
            echo ""
            echo "Generation stats:"
            curl -s http://localhost:5679/stats | python3 -m json.tool
        fi
        ;;
    
    test)
        log "Running test generation..."
        cd "$ROOT_DIR"
        node scripts/comfyui_enhanced.js "mysterious wizard portrait" portrait aquabyssos
        ;;
    
    *)
        echo "Usage: $0 {start|stop|status|test}"
        exit 1
        ;;
esac
