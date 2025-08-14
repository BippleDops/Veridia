#!/bin/bash
set -euo pipefail

# Full System Deployment Script for TTRPG Asset Generation
# Integrates ComfyUI, video generation, and automation

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$ROOT_DIR/09_Performance/logs"
PID_DIR="$ROOT_DIR/09_Performance/pids"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() { echo -e "${GREEN}[$(date '+%H:%M:%S')]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1" >&2; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
info() { echo -e "${BLUE}[INFO]${NC} $1"; }

# Create directories
mkdir -p "$LOG_DIR" "$PID_DIR" "$ROOT_DIR/04_Resources/Assets/Videos"

# ==============================================================================
# System Health Check
# ==============================================================================
check_system() {
    log "🔍 System Health Check"
    echo ""
    
    # Check ComfyUI
    if curl -s http://127.0.0.1:8188/system_stats > /dev/null 2>&1; then
        log "✅ ComfyUI is running on port 8188"
        COMFYUI_STATUS="running"
    else
        warn "ComfyUI not detected on port 8188"
        COMFYUI_STATUS="stopped"
    fi
    
    # Check Python versions
    if command -v python3.11 &> /dev/null; then
        log "✅ Python 3.11 found: $(python3.11 --version)"
        PYTHON311_AVAILABLE=true
    else
        warn "Python 3.11 not found (recommended for stability)"
        PYTHON311_AVAILABLE=false
    fi
    
    # Check GPU/MPS availability
    if [[ "$OSTYPE" == "darwin"* ]]; then
        if system_profiler SPDisplaysDataType | grep -q "Metal"; then
            log "✅ Metal Performance Shaders available"
            GPU_AVAILABLE=true
        else
            warn "No Metal GPU detected"
            GPU_AVAILABLE=false
        fi
    else
        if command -v nvidia-smi &> /dev/null; then
            log "✅ NVIDIA GPU detected"
            GPU_AVAILABLE=true
        else
            warn "No NVIDIA GPU detected"
            GPU_AVAILABLE=false
        fi
    fi
    
    # Check disk space
    DISK_FREE=$(df -h "$ROOT_DIR" | awk 'NR==2 {print $4}')
    log "💾 Free disk space: $DISK_FREE"
    
    # Check memory
    if [[ "$OSTYPE" == "darwin"* ]]; then
        MEM_FREE=$(vm_stat | grep "Pages free" | awk '{print $3}' | sed 's/\.//')
        MEM_FREE_GB=$((MEM_FREE * 4096 / 1024 / 1024 / 1024))
        log "💾 Free memory: ~${MEM_FREE_GB}GB"
    fi
    
    echo ""
}

# ==============================================================================
# Fix and Launch ComfyUI
# ==============================================================================
fix_comfyui() {
    log "🔧 Fixing ComfyUI Configuration"
    
    cd ~/ComfyUI
    
    # Kill existing process if needed
    if [[ "$COMFYUI_STATUS" == "running" ]]; then
        info "Restarting ComfyUI..."
        pkill -f "python.*main.py.*8188" || true
        sleep 2
    fi
    
    # Determine Python version to use
    if [[ "$PYTHON311_AVAILABLE" == "true" ]] && [[ -d "venv311" ]]; then
        PYTHON_CMD="./venv311/bin/python"
        log "Using Python 3.11 venv"
    elif [[ -d "venv" ]]; then
        PYTHON_CMD="./venv/bin/python"
        log "Using existing venv"
    else
        error "No Python venv found in ~/ComfyUI"
        return 1
    fi
    
    # Set environment for macOS MPS
    if [[ "$OSTYPE" == "darwin"* ]]; then
        export PYTORCH_ENABLE_MPS_FALLBACK=1
        export PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0
        log "Enabled MPS fallback for macOS"
    fi
    
    # Launch ComfyUI
    log "Starting ComfyUI..."
    nohup $PYTHON_CMD main.py \
        --listen 127.0.0.1 \
        --port 8188 \
        --preview-method auto \
        > "$LOG_DIR/comfyui.log" 2>&1 &
    
    echo $! > "$PID_DIR/comfyui.pid"
    log "ComfyUI started (PID: $!)"
    
    # Wait for it to be ready
    for i in {1..30}; do
        if curl -s http://127.0.0.1:8188/system_stats > /dev/null 2>&1; then
            log "✅ ComfyUI is ready!"
            break
        fi
        sleep 1
    done
    
    cd "$ROOT_DIR"
}

# ==============================================================================
# Install Video Generation Support
# ==============================================================================
install_video_support() {
    log "📦 Installing Video Generation Support"
    
    # Check if we should install video nodes
    read -p "Install video generation nodes? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log "Skipping video installation"
        return
    fi
    
    cd ~/ComfyUI
    
    # Install AnimateDiff
    if [[ ! -d "custom_nodes/ComfyUI-AnimateDiff-Evolved" ]]; then
        log "Installing AnimateDiff..."
        cd custom_nodes
        git clone https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved
        cd ComfyUI-AnimateDiff-Evolved
        pip install -r requirements.txt
        cd ../..
    else
        log "AnimateDiff already installed"
    fi
    
    # Install VideoHelper Suite
    if [[ ! -d "custom_nodes/ComfyUI-VideoHelperSuite" ]]; then
        log "Installing VideoHelper Suite..."
        cd custom_nodes
        git clone https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite
        cd ComfyUI-VideoHelperSuite
        pip install -r requirements.txt
        cd ../..
    else
        log "VideoHelper Suite already installed"
    fi
    
    # Download AnimateDiff models if not present
    ANIMATEDIFF_DIR="models/animatediff_models"
    mkdir -p "$ANIMATEDIFF_DIR"
    
    if [[ ! -f "$ANIMATEDIFF_DIR/animatediff_lightning_4step_comfyui.safetensors" ]]; then
        log "Downloading AnimateDiff Lightning model..."
        cd "$ANIMATEDIFF_DIR"
        wget -q --show-progress \
            "https://huggingface.co/ByteDance/AnimateDiff-Lightning/resolve/main/animatediff_lightning_4step_comfyui.safetensors"
        cd ../..
    fi
    
    cd "$ROOT_DIR"
    log "✅ Video support installed"
}

# ==============================================================================
# Run Security Audit
# ==============================================================================
run_security_audit() {
    log "🔒 Running Security Audit"
    
    if [[ -f "scripts/security_audit.js" ]]; then
        node scripts/security_audit.js || true
    else
        warn "Security audit script not found"
    fi
}

# ==============================================================================
# Run Quality Tests
# ==============================================================================
run_quality_tests() {
    log "🧪 Running Quality Tests"
    
    if [[ -f "scripts/test_comfyui_quality.js" ]]; then
        timeout 300 node scripts/test_comfyui_quality.js || warn "Quality tests timed out or failed"
    else
        warn "Quality test script not found"
    fi
}

# ==============================================================================
# Start Automation System
# ==============================================================================
start_automation() {
    log "🤖 Starting Automation System"
    
    # Start the orchestrator
    if [[ -f "scripts/n8n_comfyui_automation.js" ]]; then
        log "Starting orchestrator..."
        nohup node scripts/n8n_comfyui_automation.js \
            --orchestrate \
            --concurrency 2 \
            --n8n 5679 \
            > "$LOG_DIR/orchestrator.log" 2>&1 &
        
        echo $! > "$PID_DIR/orchestrator.pid"
        log "Orchestrator started (PID: $!)"
    fi
    
    # Queue initial jobs
    log "Queueing initial generation jobs..."
    node scripts/simple_batch_gen.js 1 || true
}

# ==============================================================================
# Generate Status Report
# ==============================================================================
generate_report() {
    log "📊 Generating Status Report"
    
    REPORT_FILE="$ROOT_DIR/09_Performance/deployment_report.md"
    
    cat > "$REPORT_FILE" << EOF
# TTRPG Asset Generation System - Deployment Report
Generated: $(date)

## System Status

| Component | Status | Port | PID |
|-----------|--------|------|-----|
| ComfyUI | ${COMFYUI_STATUS} | 8188 | $(cat "$PID_DIR/comfyui.pid" 2>/dev/null || echo "N/A") |
| Orchestrator | $(ps -p $(cat "$PID_DIR/orchestrator.pid" 2>/dev/null) > /dev/null 2>&1 && echo "running" || echo "stopped") | 5679 | $(cat "$PID_DIR/orchestrator.pid" 2>/dev/null || echo "N/A") |

## Asset Statistics

- Total PNGs: $(find "$ROOT_DIR/04_Resources/Assets" -name "*.png" 2>/dev/null | wc -l)
- Total Videos: $(find "$ROOT_DIR/04_Resources/Assets/Videos" -name "*.mp4" -o -name "*.gif" 2>/dev/null | wc -l)
- Recent (1hr): $(find "$ROOT_DIR/04_Resources/Assets" -name "*.png" -mmin -60 2>/dev/null | wc -l)

## Recent Generations

\`\`\`
$(find "$ROOT_DIR/04_Resources/Assets" -name "*.png" -mmin -60 2>/dev/null | tail -5)
\`\`\`

## Logs

- ComfyUI: $LOG_DIR/comfyui.log
- Orchestrator: $LOG_DIR/orchestrator.log
- Security Audit: $ROOT_DIR/09_Performance/security_audit_report.json
- Quality Tests: $ROOT_DIR/09_Performance/test_report.json

## Quick Commands

\`\`\`bash
# Generate batch of images
node scripts/simple_batch_gen.js 5

# Run security audit
node scripts/security_audit.js

# Run quality tests
node scripts/test_comfyui_quality.js

# Generate video from image
node scripts/video_generation.js --image path/to/image.png

# Check system status
curl http://127.0.0.1:8188/system_stats | jq
\`\`\`
EOF
    
    log "Report saved to: $REPORT_FILE"
}

# ==============================================================================
# Main Deployment Flow
# ==============================================================================
main() {
    echo "=================================================="
    echo "   TTRPG Asset Generation System Deployment"
    echo "=================================================="
    echo ""
    
    # Step 1: System check
    check_system
    
    # Step 2: Fix and launch ComfyUI
    fix_comfyui
    
    # Step 3: Install video support (optional)
    install_video_support
    
    # Step 4: Security audit
    run_security_audit
    
    # Step 5: Quality tests
    run_quality_tests
    
    # Step 6: Start automation
    start_automation
    
    # Step 7: Generate report
    generate_report
    
    echo ""
    echo "=================================================="
    log "🎉 Deployment Complete!"
    echo ""
    echo "Access points:"
    echo "  - ComfyUI: http://localhost:8188"
    echo "  - Orchestrator API: http://localhost:5679/stats"
    echo "  - Report: 09_Performance/deployment_report.md"
    echo ""
    echo "Next steps:"
    echo "  1. Review security audit results"
    echo "  2. Check quality test report"
    echo "  3. Monitor generation progress"
    echo "=================================================="
}

# Handle command line arguments
case "${1:-deploy}" in
    deploy)
        main
        ;;
    
    restart)
        log "Restarting services..."
        fix_comfyui
        start_automation
        ;;
    
    status)
        check_system
        generate_report
        cat "$ROOT_DIR/09_Performance/deployment_report.md"
        ;;
    
    stop)
        log "Stopping all services..."
        pkill -f "python.*main.py.*8188" || true
        pkill -f "node.*orchestrator" || true
        rm -f "$PID_DIR"/*.pid
        log "Services stopped"
        ;;
    
    *)
        echo "Usage: $0 {deploy|restart|status|stop}"
        exit 1
        ;;
esac
