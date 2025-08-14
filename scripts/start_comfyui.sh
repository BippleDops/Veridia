#!/bin/bash

# ComfyUI Start Script
# ====================

echo "🎨 ComfyUI Launcher"
echo "==================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check if ComfyUI is already running
if lsof -Pi :8188 -sTCP:LISTEN -t >/dev/null ; then
    echo -e "${YELLOW}⚠️ ComfyUI is already running on port 8188${NC}"
    echo "To restart, first run: kill $(lsof -t -i:8188)"
    exit 0
fi

# Find ComfyUI installation
COMFY_PATHS=(
    "$HOME/ComfyUI"
    "$HOME/AITools/ComfyUI"
    "$HOME/Documents/ComfyUI"
    "/Applications/ComfyUI"
)

COMFY_DIR=""
for path in "${COMFY_PATHS[@]}"; do
    if [ -d "$path" ]; then
        COMFY_DIR="$path"
        echo -e "${GREEN}✅ Found ComfyUI at: $COMFY_DIR${NC}"
        break
    fi
done

if [ -z "$COMFY_DIR" ]; then
    echo -e "${RED}❌ ComfyUI not found!${NC}"
    echo ""
    echo "To install ComfyUI:"
    echo "1. cd ~"
    echo "2. git clone https://github.com/comfyanonymous/ComfyUI.git"
    echo "3. cd ComfyUI"
    echo "4. pip3 install -r requirements.txt"
    exit 1
fi

# Change to ComfyUI directory
cd "$COMFY_DIR"

# Set environment variables for Mac
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🍎 Configuring for macOS..."
    export PYTORCH_ENABLE_MPS_FALLBACK=1
    export PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0
fi

# Set checkpoint if provided
if [ -n "$1" ]; then
    export COMFY_CKPT="$1"
    echo "Using checkpoint: $COMFY_CKPT"
else
    export COMFY_CKPT="v1-5-pruned-emaonly.safetensors"
    echo "Using default checkpoint: $COMFY_CKPT"
fi

# Check for Python and venv
echo ""
echo "🐍 Checking Python environment..."

# Try venv first
if [ -d "venv" ]; then
    echo "Using virtual environment..."
    source venv/bin/activate
    PYTHON_CMD="python"
elif [ -d ".venv" ]; then
    echo "Using .venv environment..."
    source .venv/bin/activate
    PYTHON_CMD="python"
elif command -v python3 &> /dev/null; then
    echo "Using system Python 3..."
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    echo "Using system Python..."
    PYTHON_CMD="python"
else
    echo -e "${RED}❌ Python not found!${NC}"
    exit 1
fi

# Check Python version
PYTHON_VERSION=$($PYTHON_CMD --version 2>&1 | cut -d' ' -f2)
echo "Python version: $PYTHON_VERSION"

# Install requirements if needed
if [ ! -d "custom_nodes" ]; then
    echo ""
    echo "📦 First time setup - installing requirements..."
    $PYTHON_CMD -m pip install -r requirements.txt
fi

# Create models directories if they don't exist
mkdir -p models/checkpoints
mkdir -p models/vae
mkdir -p models/loras
mkdir -p models/controlnet
mkdir -p output
mkdir -p input

# Download a model if no models exist
if [ -z "$(ls -A models/checkpoints 2>/dev/null)" ]; then
    echo ""
    echo -e "${YELLOW}⚠️ No models found in models/checkpoints/${NC}"
    echo ""
    echo "Download models from:"
    echo "  • https://huggingface.co/runwayml/stable-diffusion-v1-5"
    echo "  • https://civitai.com/"
    echo ""
    echo "Or use this command:"
    echo "  wget -P models/checkpoints/ https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned-emaonly.safetensors"
    echo ""
fi

# Start ComfyUI
echo ""
echo "🚀 Starting ComfyUI..."
echo "===================="

# Create log directory
mkdir -p "$HOME/Library/Logs"
LOG_FILE="$HOME/Library/Logs/comfyui.log"

# Start in background or foreground based on argument
if [ "$2" == "--background" ]; then
    echo "Starting in background..."
    nohup $PYTHON_CMD main.py --port 8188 > "$LOG_FILE" 2>&1 &
    PID=$!
    echo "ComfyUI started with PID: $PID"
    echo "Logs: tail -f $LOG_FILE"
    
    # Save PID
    echo $PID > "$HOME/.comfyui.pid"
    
    # Wait a moment and check if it's running
    sleep 3
    if ps -p $PID > /dev/null; then
        echo -e "${GREEN}✅ ComfyUI is running at: http://localhost:8188${NC}"
    else
        echo -e "${RED}❌ ComfyUI failed to start. Check logs: $LOG_FILE${NC}"
        exit 1
    fi
else
    echo "Starting in foreground (Ctrl+C to stop)..."
    echo ""
    echo "ComfyUI will be available at: http://localhost:8188"
    echo ""
    $PYTHON_CMD main.py --port 8188
fi
