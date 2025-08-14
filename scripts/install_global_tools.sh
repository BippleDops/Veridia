#!/bin/bash

# Global Tool Installation Script
# ================================
# Installs all AI/generation tools globally for use across projects

echo "🚀 GLOBAL AI TOOL INSTALLATION"
echo "=============================="
echo "Installing tools system-wide for all projects"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# Check for sudo access
if [[ $EUID -eq 0 ]]; then
   echo -e "${RED}Don't run this script as root!${NC}"
   exit 1
fi

# Create global tools directory
TOOLS_DIR="$HOME/AITools"
echo -e "${BLUE}📁 Creating global tools directory: $TOOLS_DIR${NC}"
mkdir -p "$TOOLS_DIR"
mkdir -p "$TOOLS_DIR/bin"
mkdir -p "$TOOLS_DIR/lib"
mkdir -p "$TOOLS_DIR/models"
mkdir -p "$TOOLS_DIR/workflows"

# ========================================
# 1. INSTALL NODE.JS GLOBAL PACKAGES
# ========================================
echo ""
echo -e "${YELLOW}📦 Installing Node.js global packages...${NC}"

# N8N - Workflow automation
echo "Installing N8N..."
npm install -g n8n

# PM2 - Process manager
echo "Installing PM2..."
npm install -g pm2

# Node utilities
npm install -g nodemon
npm install -g concurrently

# ========================================
# 2. INSTALL PYTHON TOOLS
# ========================================
echo ""
echo -e "${YELLOW}🐍 Installing Python AI tools...${NC}"

# Upgrade pip
python3 -m pip install --upgrade pip

# Core AI libraries
echo "Installing core AI libraries..."
pip3 install --user torch torchvision torchaudio
pip3 install --user transformers diffusers accelerate
pip3 install --user opencv-python pillow numpy
pip3 install --user gradio streamlit

# ComfyUI Manager
echo ""
echo "Installing ComfyUI..."
cd "$TOOLS_DIR"
if [ ! -d "ComfyUI" ]; then
    git clone https://github.com/comfyanonymous/ComfyUI.git
    cd ComfyUI
    pip3 install -r requirements.txt
    
    # Install ComfyUI Manager
    cd custom_nodes
    git clone https://github.com/ltdrdata/ComfyUI-Manager.git
    cd ../..
else
    echo "ComfyUI already installed"
fi

# Stable Diffusion WebUI (Automatic1111)
echo ""
echo "Installing Stable Diffusion WebUI..."
cd "$TOOLS_DIR"
if [ ! -d "stable-diffusion-webui" ]; then
    git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
    cd stable-diffusion-webui
    # Install will happen on first run
    cd ..
else
    echo "SD WebUI already installed"
fi

# AnimateDiff
echo ""
echo "Installing AnimateDiff..."
cd "$TOOLS_DIR"
if [ ! -d "animatediff-cli" ]; then
    git clone https://github.com/s9roll7/animatediff-cli.git
    cd animatediff-cli
    pip3 install --user -r requirements.txt
    cd ..
else
    echo "AnimateDiff already installed"
fi

# AudioCraft (Meta's audio generation)
echo ""
echo "Installing AudioCraft..."
cd "$TOOLS_DIR"
if [ ! -d "audiocraft" ]; then
    git clone https://github.com/facebookresearch/audiocraft.git
    cd audiocraft
    pip3 install --user -e .
    cd ..
else
    echo "AudioCraft already installed"
fi

# ========================================
# 3. CREATE GLOBAL COMMAND SHORTCUTS
# ========================================
echo ""
echo -e "${YELLOW}🔗 Creating global command shortcuts...${NC}"

# ComfyUI launcher
cat > "$TOOLS_DIR/bin/comfyui" << 'EOF'
#!/bin/bash
cd "$HOME/AITools/ComfyUI"
PYTORCH_ENABLE_MPS_FALLBACK=1 python main.py --port 8188 "$@"
EOF
chmod +x "$TOOLS_DIR/bin/comfyui"

# SD WebUI launcher
cat > "$TOOLS_DIR/bin/sdwebui" << 'EOF'
#!/bin/bash
cd "$HOME/AITools/stable-diffusion-webui"
./webui.sh "$@"
EOF
chmod +x "$TOOLS_DIR/bin/sdwebui"

# AnimateDiff launcher
cat > "$TOOLS_DIR/bin/animatediff" << 'EOF'
#!/bin/bash
cd "$HOME/AITools/animatediff-cli"
python -m animatediff "$@"
EOF
chmod +x "$TOOLS_DIR/bin/animatediff"

# AudioCraft launcher
cat > "$TOOLS_DIR/bin/audiocraft" << 'EOF'
#!/bin/bash
cd "$HOME/AITools/audiocraft"
python -m audiocraft.app "$@"
EOF
chmod +x "$TOOLS_DIR/bin/audiocraft"

# N8N launcher
cat > "$TOOLS_DIR/bin/n8n-start" << 'EOF'
#!/bin/bash
export N8N_PORT="${N8N_PORT:-5678}"
export N8N_WEBHOOK_URL="${N8N_WEBHOOK_URL:-http://localhost:5678/}"
n8n start
EOF
chmod +x "$TOOLS_DIR/bin/n8n-start"

# ========================================
# 4. INSTALL OLLAMA (Local LLMs)
# ========================================
echo ""
echo -e "${YELLOW}🤖 Installing Ollama for local LLMs...${NC}"

if ! command -v ollama &> /dev/null; then
    curl -fsSL https://ollama.ai/install.sh | sh
    
    # Pull useful models
    echo "Pulling Ollama models..."
    ollama pull llama2
    ollama pull codellama
    ollama pull mistral
else
    echo "Ollama already installed"
fi

# ========================================
# 5. INSTALL ADDITIONAL UTILITIES
# ========================================
echo ""
echo -e "${YELLOW}🛠️ Installing additional utilities...${NC}"

# FFmpeg (if not installed)
if ! command -v ffmpeg &> /dev/null; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install ffmpeg
    else
        sudo apt-get update && sudo apt-get install -y ffmpeg
    fi
fi

# ImageMagick
if ! command -v convert &> /dev/null; then
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew install imagemagick
    else
        sudo apt-get install -y imagemagick
    fi
fi

# ========================================
# 6. DOWNLOAD MODELS
# ========================================
echo ""
echo -e "${YELLOW}📥 Setting up models directory...${NC}"

mkdir -p "$TOOLS_DIR/models/stable-diffusion"
mkdir -p "$TOOLS_DIR/models/animatediff"
mkdir -p "$TOOLS_DIR/models/audiocraft"

# Create model downloader script
cat > "$TOOLS_DIR/bin/download-models" << 'EOF'
#!/bin/bash
echo "Model Downloader"
echo "================"
echo ""
echo "1. Stable Diffusion 1.5"
echo "2. SDXL"
echo "3. AnimateDiff Motion Modules"
echo "4. AudioCraft Models"
echo ""
read -p "Select models to download (1-4): " choice

MODELS_DIR="$HOME/AITools/models"

case $choice in
    1)
        echo "Downloading SD 1.5..."
        cd "$MODELS_DIR/stable-diffusion"
        wget -c https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned-emaonly.safetensors
        ;;
    2)
        echo "Downloading SDXL..."
        cd "$MODELS_DIR/stable-diffusion"
        wget -c https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors
        ;;
    3)
        echo "Downloading AnimateDiff modules..."
        cd "$MODELS_DIR/animatediff"
        wget -c https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v15_v2.ckpt
        ;;
    4)
        echo "AudioCraft models will be downloaded automatically on first use"
        ;;
esac
EOF
chmod +x "$TOOLS_DIR/bin/download-models"

# ========================================
# 7. ADD TO PATH
# ========================================
echo ""
echo -e "${YELLOW}🔧 Configuring PATH...${NC}"

# Detect shell
if [ -n "$ZSH_VERSION" ]; then
    SHELL_RC="$HOME/.zshrc"
elif [ -n "$BASH_VERSION" ]; then
    SHELL_RC="$HOME/.bashrc"
else
    SHELL_RC="$HOME/.profile"
fi

# Add tools to PATH
if ! grep -q "AITools/bin" "$SHELL_RC"; then
    echo "" >> "$SHELL_RC"
    echo "# AI Tools" >> "$SHELL_RC"
    echo "export PATH=\"\$HOME/AITools/bin:\$PATH\"" >> "$SHELL_RC"
    echo "export AITOOLS_HOME=\"\$HOME/AITools\"" >> "$SHELL_RC"
    echo -e "${GREEN}✅ Added AITools to PATH${NC}"
else
    echo "AITools already in PATH"
fi

# ========================================
# 8. CREATE PM2 ECOSYSTEM FILE
# ========================================
echo ""
echo -e "${YELLOW}📋 Creating PM2 ecosystem file...${NC}"

cat > "$TOOLS_DIR/ecosystem.config.js" << 'EOF'
module.exports = {
  apps: [
    {
      name: 'comfyui',
      script: 'python',
      args: 'main.py --port 8188',
      cwd: process.env.HOME + '/AITools/ComfyUI',
      env: {
        PYTORCH_ENABLE_MPS_FALLBACK: '1',
        PYTORCH_MPS_HIGH_WATERMARK_RATIO: '0.0'
      }
    },
    {
      name: 'n8n',
      script: 'n8n',
      args: 'start',
      env: {
        N8N_PORT: 5678,
        N8N_WEBHOOK_URL: 'http://localhost:5678/'
      }
    },
    {
      name: 'ollama',
      script: 'ollama',
      args: 'serve'
    }
  ]
};
EOF

# ========================================
# 9. CREATE TOOL LIBRARY
# ========================================
echo ""
echo -e "${YELLOW}📚 Creating Tool Library...${NC}"

cat > "$TOOLS_DIR/TOOL_LIBRARY.md" << 'EOF'
# AI Tools Library

## Quick Start Commands

### Image Generation
- `comfyui` - Start ComfyUI on port 8188
- `sdwebui` - Start Stable Diffusion WebUI
- `animatediff` - Generate videos from text

### Audio Generation
- `audiocraft` - Start AudioCraft interface

### LLM
- `ollama run llama2` - Run Llama 2 locally
- `ollama run codellama` - Run Code Llama

### Automation
- `n8n-start` - Start N8N workflow automation
- `pm2 start ~/AITools/ecosystem.config.js` - Start all services

### Process Management
- `pm2 status` - Check service status
- `pm2 logs` - View logs
- `pm2 stop all` - Stop all services

## API Endpoints

- ComfyUI: http://localhost:8188
- SD WebUI: http://localhost:7860
- N8N: http://localhost:5678
- Ollama: http://localhost:11434

## Model Locations

- Stable Diffusion: `~/AITools/models/stable-diffusion/`
- AnimateDiff: `~/AITools/models/animatediff/`
- ComfyUI: `~/AITools/ComfyUI/models/`

## Download Models

Run `download-models` to download additional models.

## Python Libraries

All installed globally via pip:
- torch, torchvision, torchaudio
- transformers, diffusers, accelerate
- opencv-python, pillow, numpy
- gradio, streamlit

## Node.js Tools

- n8n - Workflow automation
- pm2 - Process manager
EOF

# ========================================
# FINAL SETUP
# ========================================
echo ""
echo "========================================"
echo -e "${GREEN}✅ GLOBAL TOOL INSTALLATION COMPLETE!${NC}"
echo "========================================"
echo ""
echo "Installed Tools:"
echo "  • ComfyUI - Image generation"
echo "  • Stable Diffusion WebUI - Image generation"
echo "  • AnimateDiff - Video generation"
echo "  • AudioCraft - Audio generation"
echo "  • Ollama - Local LLMs"
echo "  • N8N - Workflow automation"
echo "  • PM2 - Process management"
echo ""
echo "Quick Start:"
echo "  1. Reload shell: source $SHELL_RC"
echo "  2. Start all services: pm2 start $TOOLS_DIR/ecosystem.config.js"
echo "  3. Access tools:"
echo "     - ComfyUI: http://localhost:8188"
echo "     - N8N: http://localhost:5678"
echo ""
echo "All tools installed in: $TOOLS_DIR"
echo "Commands available globally after reloading shell"
echo ""
echo -e "${BLUE}Run 'cat $TOOLS_DIR/TOOL_LIBRARY.md' for full documentation${NC}"
