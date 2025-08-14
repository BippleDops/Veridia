#!/bin/bash

# Local Video Generation Setup Script
# ====================================

echo "🎬 Setting up Local Video Generation"
echo "===================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check Python
echo "📦 Checking Python installation..."
if command -v python3 &> /dev/null; then
    PYTHON_VERSION=$(python3 --version | cut -d' ' -f2)
    echo -e "${GREEN}✅ Python ${PYTHON_VERSION} found${NC}"
else
    echo -e "${RED}❌ Python 3 not found. Please install Python 3.10+${NC}"
    exit 1
fi

# Create video generation directory
VIDEO_DIR="$HOME/VideoGeneration"
echo ""
echo "📁 Setting up video generation in: $VIDEO_DIR"
mkdir -p "$VIDEO_DIR"
cd "$VIDEO_DIR"

# Option 1: AnimateDiff (Recommended)
echo ""
echo "🎨 Option 1: AnimateDiff (Stable Diffusion + Motion)"
echo "----------------------------------------------------"

if [ ! -d "animatediff-cli" ]; then
    echo "Installing AnimateDiff..."
    git clone https://github.com/s9roll7/animatediff-cli.git
    cd animatediff-cli
    
    # Create virtual environment
    python3 -m venv venv
    source venv/bin/activate
    
    # Install dependencies
    pip install --upgrade pip
    pip install torch torchvision torchaudio
    pip install diffusers transformers accelerate
    pip install opencv-python pillow numpy
    pip install gradio  # For web UI
    
    echo -e "${GREEN}✅ AnimateDiff installed${NC}"
else
    echo -e "${YELLOW}⚠️ AnimateDiff already exists${NC}"
fi

# Option 2: Stable Video Diffusion
echo ""
echo "🎥 Option 2: Stable Video Diffusion (Image-to-Video)"
echo "----------------------------------------------------"

if [ ! -d "stable-video-diffusion" ]; then
    echo "Setting up Stable Video Diffusion..."
    mkdir -p stable-video-diffusion
    cd stable-video-diffusion
    
    # Create virtual environment
    python3 -m venv venv
    source venv/bin/activate
    
    # Install SVD dependencies
    pip install --upgrade pip
    pip install diffusers transformers accelerate
    pip install torch torchvision
    
    # Create runner script
    cat > run_svd.py << 'EOF'
import torch
from diffusers import StableVideoDiffusionPipeline
from diffusers.utils import load_image, export_to_video
import argparse

def generate_video(image_path, output_path, seed=42):
    pipe = StableVideoDiffusionPipeline.from_pretrained(
        "stabilityai/stable-video-diffusion-img2vid",
        torch_dtype=torch.float16,
        variant="fp16"
    )
    
    if torch.cuda.is_available():
        pipe = pipe.to("cuda")
    elif torch.backends.mps.is_available():
        pipe = pipe.to("mps")
    
    image = load_image(image_path)
    image = image.resize((1024, 576))
    
    generator = torch.manual_seed(seed)
    frames = pipe(image, num_frames=25, generator=generator).frames
    
    export_to_video(frames, output_path, fps=7)
    print(f"Video saved to: {output_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--image", required=True)
    parser.add_argument("--output", required=True)
    parser.add_argument("--seed", type=int, default=42)
    args = parser.parse_args()
    
    generate_video(args.image, args.output, args.seed)
EOF
    
    echo -e "${GREEN}✅ Stable Video Diffusion configured${NC}"
else
    echo -e "${YELLOW}⚠️ Stable Video Diffusion already exists${NC}"
fi

# Option 3: Simple Frame Interpolation (Lightweight)
echo ""
echo "🎞️ Option 3: Frame Interpolation (Lightweight)"
echo "----------------------------------------------"

cd "$VIDEO_DIR"
mkdir -p frame-interpolation
cd frame-interpolation

cat > interpolate_frames.py << 'EOF'
import cv2
import numpy as np
from PIL import Image
import argparse
import os

def interpolate_frames(image1_path, image2_path, output_dir, num_frames=16):
    """Generate interpolated frames between two images"""
    
    img1 = cv2.imread(image1_path)
    img2 = cv2.imread(image2_path)
    
    # Ensure same size
    height, width = img1.shape[:2]
    img2 = cv2.resize(img2, (width, height))
    
    os.makedirs(output_dir, exist_ok=True)
    
    for i in range(num_frames):
        alpha = i / (num_frames - 1)
        interpolated = cv2.addWeighted(img1, 1 - alpha, img2, alpha, 0)
        
        frame_path = os.path.join(output_dir, f"frame_{i:04d}.png")
        cv2.imwrite(frame_path, interpolated)
    
    print(f"Generated {num_frames} frames in {output_dir}")
    
    # Create video with ffmpeg
    video_path = os.path.join(output_dir, "output.mp4")
    os.system(f"ffmpeg -framerate 8 -i {output_dir}/frame_%04d.png -c:v libx264 -pix_fmt yuv420p -y {video_path}")
    print(f"Video saved to: {video_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--image1", required=True)
    parser.add_argument("--image2", required=True)
    parser.add_argument("--output", default="./output")
    parser.add_argument("--frames", type=int, default=16)
    args = parser.parse_args()
    
    interpolate_frames(args.image1, args.image2, args.output, args.frames)
EOF

echo -e "${GREEN}✅ Frame interpolation script created${NC}"

# Create launcher script
cd "$VIDEO_DIR"
cat > launch_video_generator.sh << 'EOF'
#!/bin/bash

echo "🎬 Video Generation Service Launcher"
echo "===================================="
echo ""
echo "Select generator:"
echo "1) AnimateDiff (Best quality)"
echo "2) Stable Video Diffusion (Image-to-video)"
echo "3) Frame Interpolation (Fast & simple)"
echo ""
read -p "Choice (1-3): " choice

case $choice in
    1)
        echo "Starting AnimateDiff..."
        cd animatediff-cli
        source venv/bin/activate
        python -m animatediff generate \
            --prompt "fantasy scene" \
            --model_path "models/" \
            --output "output/"
        ;;
    2)
        echo "Starting Stable Video Diffusion..."
        cd stable-video-diffusion
        source venv/bin/activate
        python run_svd.py --image input.png --output output.mp4
        ;;
    3)
        echo "Starting Frame Interpolation..."
        cd frame-interpolation
        python interpolate_frames.py --image1 img1.png --image2 img2.png
        ;;
    *)
        echo "Invalid choice"
        ;;
esac
EOF

chmod +x launch_video_generator.sh

# Back to project directory
cd "$OLDPWD"

echo ""
echo "===================================="
echo -e "${GREEN}✅ Video Generation Setup Complete!${NC}"
echo ""
echo "Available generators:"
echo "  1. AnimateDiff - Text-to-video with motion"
echo "  2. Stable Video Diffusion - Image-to-video"
echo "  3. Frame Interpolation - Simple & fast"
echo ""
echo "To launch: cd $VIDEO_DIR && ./launch_video_generator.sh"
echo ""

# Create integration script for the vault
cat > scripts/generate_video.js << 'EOF'
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
const execAsync = util.promisify(exec);

async function generateVideo(prompt, outputPath, method = 'animatediff') {
  const videoDir = path.join(process.env.HOME, 'VideoGeneration');
  
  try {
    switch (method) {
      case 'animatediff':
        // Generate with AnimateDiff
        const animateCmd = `cd ${videoDir}/animatediff-cli && ` +
          `source venv/bin/activate && ` +
          `python -m animatediff generate --prompt "${prompt}" --output "${outputPath}"`;
        await execAsync(animateCmd);
        break;
        
      case 'svd':
        // First generate an image, then convert to video
        const tempImage = `/tmp/svd_input_${Date.now()}.png`;
        // Generate image with ComfyUI or another method
        await generateBaseImage(prompt, tempImage);
        
        const svdCmd = `cd ${videoDir}/stable-video-diffusion && ` +
          `source venv/bin/activate && ` +
          `python run_svd.py --image "${tempImage}" --output "${outputPath}"`;
        await execAsync(svdCmd);
        
        // Clean up temp image
        fs.unlinkSync(tempImage);
        break;
        
      case 'interpolation':
        // Generate two keyframes and interpolate
        const frame1 = `/tmp/frame1_${Date.now()}.png`;
        const frame2 = `/tmp/frame2_${Date.now()}.png`;
        
        await generateBaseImage(prompt + ' first frame', frame1);
        await generateBaseImage(prompt + ' last frame', frame2);
        
        const interpCmd = `cd ${videoDir}/frame-interpolation && ` +
          `python interpolate_frames.py --image1 "${frame1}" --image2 "${frame2}" --output "${path.dirname(outputPath)}"`;
        await execAsync(interpCmd);
        
        // Move output video to desired location
        const tempVideo = path.join(path.dirname(outputPath), 'output.mp4');
        fs.renameSync(tempVideo, outputPath);
        
        // Clean up
        fs.unlinkSync(frame1);
        fs.unlinkSync(frame2);
        break;
    }
    
    console.log(`✅ Video generated: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`❌ Video generation failed: ${error.message}`);
    return false;
  }
}

async function generateBaseImage(prompt, outputPath) {
  // Use ComfyUI or another image generator
  const { generateImageViaComfy } = require('./comfy_client');
  const buffer = await generateImageViaComfy({
    prompt: prompt,
    width: 512,
    height: 512,
    seed: Math.floor(Math.random() * 1e9)
  });
  
  if (buffer) {
    fs.writeFileSync(outputPath, buffer);
    return true;
  }
  return false;
}

// Export for use in other scripts
module.exports = { generateVideo };

// Run if called directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const prompt = args[0] || 'fantasy landscape with moving clouds';
  const output = args[1] || '04_Resources/Assets/Videos/test_video.mp4';
  const method = args[2] || 'animatediff';
  
  generateVideo(prompt, output, method)
    .then(() => console.log('Done!'))
    .catch(console.error);
}
EOF

echo -e "${GREEN}✅ Video generation script created: scripts/generate_video.js${NC}"
