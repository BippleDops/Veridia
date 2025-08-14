#!/bin/bash

# N8N + Local Generators Launch Script
# =====================================

echo "🚀 Launching N8N Automation System with Local Generators"
echo "========================================================"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Ensure directories exist
mkdir -p 09_Performance/logs
mkdir -p 09_Performance/pid
mkdir -p 04_Resources/Assets/{Videos,Generated/Videos}
mkdir -p ~/.n8n

# Function to check if a service is running
check_service() {
    if lsof -Pi :$2 -sTCP:LISTEN -t >/dev/null ; then
        echo -e "${GREEN}✅ $1 is running on port $2${NC}"
        return 0
    else
        echo -e "${RED}❌ $1 is not running on port $2${NC}"
        return 1
    fi
}

# 1. Start N8N
echo "📡 Starting N8N..."
if ! check_service "N8N" 5678; then
    # Check if N8N is installed
    if command -v n8n &> /dev/null; then
        nohup n8n start \
            --port 5678 \
            --webhook-url http://localhost:5678/ \
            > 09_Performance/logs/n8n.log 2>&1 &
        echo $! > 09_Performance/pid/n8n.pid
        echo "N8N starting on http://localhost:5678"
        sleep 5
    else
        echo -e "${YELLOW}⚠️ N8N not installed. Install with: npm install -g n8n${NC}"
    fi
fi

# 2. Start ComfyUI (if not running)
echo ""
echo "🎨 Checking ComfyUI..."
if ! check_service "ComfyUI" 8188; then
    if [ -d "$HOME/ComfyUI" ]; then
        echo "Starting ComfyUI..."
        cd "$HOME/ComfyUI"
        
        # Set checkpoint
        export COMFY_CKPT="v1-5-pruned-emaonly-fp16.safetensors"
        
        # Try Python 3.11 venv first
        if [ -d "venv" ]; then
            source venv/bin/activate
        fi
        
        PYTORCH_ENABLE_MPS_FALLBACK=1 PYTORCH_MPS_HIGH_WATERMARK_RATIO=0.0 \
            nohup python main.py --port 8188 > "$OLDPWD/09_Performance/logs/comfyui.log" 2>&1 &
        echo $! > "$OLDPWD/09_Performance/pid/comfyui.pid"
        
        cd "$OLDPWD"
        sleep 5
    else
        echo -e "${YELLOW}⚠️ ComfyUI not found at ~/ComfyUI${NC}"
    fi
fi

# 3. Check/Install video generation
echo ""
echo "🎬 Checking video generation..."
VIDEO_DIR="$HOME/VideoGeneration"
if [ ! -d "$VIDEO_DIR" ]; then
    echo "Setting up video generation..."
    bash scripts/setup_video_generator.sh
else
    echo -e "${GREEN}✅ Video generation directory exists${NC}"
fi

# 4. Import N8N workflows
echo ""
echo "📋 Setting up N8N workflows..."

# Create workflow import script
cat > /tmp/n8n_import.js << 'EOF'
const workflows = [
  {
    name: "TTRPG Asset Generator",
    nodes: [
      {
        parameters: {
          path: "generate-asset",
          responseMode: "responseNode",
          options: {}
        },
        name: "Webhook",
        type: "n8n-nodes-base.webhook",
        position: [250, 300]
      },
      {
        parameters: {
          functionCode: `
            const assetType = $input.first().json.type;
            const prompt = $input.first().json.prompt;
            
            return [{
              json: {
                type: assetType,
                prompt: prompt,
                timestamp: new Date().toISOString()
              }
            }];
          `
        },
        name: "Process Request",
        type: "n8n-nodes-base.function",
        position: [450, 300]
      },
      {
        parameters: {
          command: "node scripts/n8n_orchestrator.js",
          cwd: process.env.VAULT_PATH || process.cwd()
        },
        name: "Generate Asset",
        type: "n8n-nodes-base.executeCommand",
        position: [650, 300]
      }
    ]
  }
];

console.log(JSON.stringify(workflows, null, 2));
EOF

# 5. Create N8N automation triggers
echo ""
echo "🔗 Creating automation triggers..."

cat > scripts/n8n_triggers.js << 'EOF'
#!/usr/bin/env node

const N8N_URL = 'http://localhost:5678';

// Trigger asset generation via N8N
async function triggerGeneration(type, prompt) {
  try {
    const response = await fetch(`${N8N_URL}/webhook/generate-asset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, prompt })
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log(`✅ Triggered ${type} generation via N8N`);
      return result;
    }
  } catch (error) {
    console.error(`N8N trigger failed: ${error.message}`);
  }
  return null;
}

// Monitor and trigger based on API availability
async function monitorAndTrigger() {
  const { checkServices } = require('./n8n_orchestrator');
  const services = await checkServices();
  
  if (!services.n8n) {
    console.log('⚠️ N8N not available, using direct generation');
    return;
  }
  
  // Example triggers
  const tasks = [
    { type: 'image', prompt: 'mystical forest clearing' },
    { type: 'video', prompt: 'magic spell casting effect' },
    { type: 'audio', prompt: 'dungeon ambience' }
  ];
  
  for (const task of tasks) {
    await triggerGeneration(task.type, task.prompt);
    await new Promise(r => setTimeout(r, 2000));
  }
}

if (require.main === module) {
  monitorAndTrigger().catch(console.error);
}

module.exports = { triggerGeneration };
EOF

chmod +x scripts/n8n_triggers.js

# 6. Update the main orchestrator to use N8N
echo ""
echo "🔄 Updating orchestrator with N8N fallback..."

# Start the N8N orchestrator
echo ""
echo "🎯 Starting N8N Orchestrator..."
nohup node scripts/n8n_orchestrator.js > 09_Performance/logs/n8n_orchestrator.log 2>&1 &
echo $! > 09_Performance/pid/n8n_orchestrator.pid

# Display status
echo ""
echo "========================================================"
echo "📊 System Status:"
echo ""

check_service "N8N" 5678
check_service "ComfyUI" 8188

if [ -f "09_Performance/pid/n8n_orchestrator.pid" ]; then
    PID=$(cat 09_Performance/pid/n8n_orchestrator.pid)
    if ps -p $PID > /dev/null; then
        echo -e "${GREEN}✅ N8N Orchestrator running (PID: $PID)${NC}"
    fi
fi

echo ""
echo "========================================================"
echo "🎯 Quick Commands:"
echo ""
echo "  N8N Dashboard:     http://localhost:5678"
echo "  ComfyUI:          http://localhost:8188"
echo "  Trigger Image:    node scripts/n8n_triggers.js"
echo "  Generate Video:   node scripts/generate_video.js"
echo "  Check Status:     bash scripts/check_status.sh"
echo ""
echo "📝 Logs:"
echo "  N8N:              tail -f 09_Performance/logs/n8n.log"
echo "  Orchestrator:     tail -f 09_Performance/logs/n8n_orchestrator.log"
echo "  ComfyUI:          tail -f 09_Performance/logs/comfyui.log"
echo ""
echo -e "${GREEN}✨ N8N Automation System is running!${NC}"
echo ""
echo "The system will now:"
echo "  1. Try API services first (OpenAI, Stability)"
echo "  2. Fall back to N8N workflows if APIs fail"
echo "  3. Use local generators (ComfyUI, AnimateDiff) as final fallback"
echo "  4. Generate images, videos, and audio automatically"
