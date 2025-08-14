#!/bin/bash

# TTRPG Vault - Live Monitoring Dashboard
# ========================================

clear

while true; do
    clear
    echo "🎮 TTRPG VAULT ASSET GENERATION DASHBOARD"
    echo "========================================="
    date
    echo ""
    
    # Service Status
    echo "📊 SERVICE STATUS:"
    echo "-----------------"
    
    check_pid() {
        if [ -f "09_Performance/pid/$1.pid" ]; then
            PID=$(cat "09_Performance/pid/$1.pid")
            if ps -p $PID > /dev/null 2>&1; then
                echo "✅ $2: Running (PID: $PID)"
            else
                echo "❌ $2: Stopped"
            fi
        else
            echo "❌ $2: Not running"
        fi
    }
    
    check_pid "orchestrator" "Orchestrator"
    check_pid "production" "Production Pipeline"
    check_pid "comfyui" "ComfyUI"
    check_pid "auto_commit" "Auto-Commit"
    
    echo ""
    echo "💾 ASSET COUNTS:"
    echo "---------------"
    
    count_assets() {
        local count=$(find "04_Resources/Assets/$1" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.webp" \) 2>/dev/null | wc -l | tr -d ' ')
        printf "%-15s: %4d files\n" "$2" "$count"
    }
    
    count_assets "Portraits" "Portraits"
    count_assets "Locations" "Locations"
    count_assets "Creatures" "Creatures"
    count_assets "Items" "Items"
    count_assets "Maps" "Maps"
    count_assets "Scenes" "Scenes"
    
    AUDIO_COUNT=$(find "04_Resources/Assets/Audio" -name "*.wav" 2>/dev/null | wc -l | tr -d ' ')
    printf "%-15s: %4d files\n" "Audio" "$AUDIO_COUNT"
    
    echo ""
    echo "📈 GENERATION RATE:"
    echo "------------------"
    
    if [ -f "09_Performance/orchestrator_state.json" ]; then
        TOTAL=$(cat 09_Performance/orchestrator_state.json | grep totalGenerated | cut -d':' -f2 | tr -d ',' | xargs)
        BATCH=$(cat 09_Performance/orchestrator_state.json | grep currentBatch | cut -d':' -f2 | tr -d ',' | xargs)
        echo "Total Generated : $TOTAL assets"
        echo "Current Batch   : $BATCH"
    fi
    
    echo ""
    echo "📝 RECENT ACTIVITY:"
    echo "------------------"
    
    if [ -f "09_Performance/logs/production_pipeline.log" ]; then
        tail -3 09_Performance/logs/production_pipeline.log 2>/dev/null | sed 's/^/  /'
    fi
    
    echo ""
    echo "🔄 API USAGE:"
    echo "------------"
    
    if [ -f "09_Performance/smart_generation_report.json" ]; then
        echo -n "OpenAI:   "
        cat 09_Performance/smart_generation_report.json | grep -A1 '"openai":' | tail -1 | xargs
        echo -n "Stability: "
        cat 09_Performance/smart_generation_report.json | grep -A1 '"stability":' | tail -1 | xargs
        echo -n "ComfyUI:  "
        cat 09_Performance/smart_generation_report.json | grep -A1 '"comfyui":' | tail -1 | xargs
    fi
    
    echo ""
    echo "========================================="
    echo "Press Ctrl+C to exit | Refreshing in 5s..."
    
    sleep 5
done
