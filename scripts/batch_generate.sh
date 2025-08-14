#!/bin/bash
# Batch generate assets using local ComfyUI

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../" && pwd)"
cd "$ROOT"

TYPES=(portrait creature location)
WORLDS=(aquabyssos aethermoor void)

echo "🎨 Batch Asset Generation"
echo "Generating ${1:-2} assets per type/world combination..."

COUNT=${1:-2}
GENERATED=0
FAILED=0

for type in "${TYPES[@]}"; do
  for world in "${WORLDS[@]}"; do
    echo ""
    echo "📸 Generating $type for $world..."
    
    # Build world-specific prompt prefix
    case $world in
      aquabyssos)
        WORLD_MOD="underwater, deep sea, bioluminescent, aquatic"
        ;;
      aethermoor)
        WORLD_MOD="floating islands, sky realm, ethereal, windswept"
        ;;
      void)
        WORLD_MOD="eldritch, cosmic horror, otherworldly, void-touched"
        ;;
      *)
        WORLD_MOD=""
        ;;
    esac
    
    # Generate using comfy_client directly for reliability
    for i in $(seq 1 $COUNT); do
      echo -n "  Image $i/$COUNT: "
      
      node -e "
        const fs = require('fs');
        const path = require('path');
        const { generateImageViaComfy } = require('./scripts/comfy_client');
        
        (async () => {
          try {
            const prompt = '${type}, ${WORLD_MOD}, highly detailed fantasy art, professional quality';
            const buf = await generateImageViaComfy({
              prompt: prompt,
              width: 512,
              height: 512,
              seed: Math.floor(Math.random() * 1e9),
              ckpt: 'v1-5-pruned-emaonly-fp16.safetensors'
            });
            
            const dir = '04_Resources/Assets/${type^}s';
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            
            const filename = path.join(dir, '${type}_${world}_${i}_' + Date.now() + '.png');
            fs.writeFileSync(filename, buf);
            console.log('✓ ' + filename);
            process.exit(0);
          } catch (e) {
            console.error('✗ ' + e.message);
            process.exit(1);
          }
        })();
      " && ((GENERATED++)) || ((FAILED++))
      
      sleep 1
    done
  done
done

echo ""
echo "========================================="
echo "✅ Batch generation complete!"
echo "  Generated: $GENERATED images"
echo "  Failed: $FAILED attempts"
echo ""
echo "Recent assets:"
find 04_Resources/Assets -name '*.png' -mmin -10 2>/dev/null | tail -5
echo ""
echo "Total PNGs in vault: $(find 04_Resources/Assets -name '*.png' 2>/dev/null | wc -l)"
