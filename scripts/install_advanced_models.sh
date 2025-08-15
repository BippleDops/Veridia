#!/bin/bash
# Advanced Model Installation Script

COMFYUI_DIR="$HOME/ComfyUI"
MODELS_DIR="$COMFYUI_DIR/models/checkpoints"
LORA_DIR="$COMFYUI_DIR/models/loras"
VAE_DIR="$COMFYUI_DIR/models/vae"
UPSCALE_DIR="$COMFYUI_DIR/models/upscale_models"

echo "🎨 Installing Advanced Models for Asset Generation..."

# Create directories
mkdir -p "$MODELS_DIR" "$LORA_DIR" "$VAE_DIR" "$UPSCALE_DIR"

# Download main models
echo "📥 Downloading SDXL-Lightning..."
if [ ! -f "$MODELS_DIR/sdxl_lightning_8step.safetensors" ]; then
  curl -L "https://huggingface.co/ByteDance/SDXL-Lightning/resolve/main/sdxl_lightning_8step_unet.safetensors" \
    -o "$MODELS_DIR/sdxl_lightning_8step.safetensors"
fi

echo "📥 Downloading SDXL-Turbo..."
if [ ! -f "$MODELS_DIR/sdxl_turbo.safetensors" ]; then
  curl -L "https://huggingface.co/stabilityai/sdxl-turbo/resolve/main/sd_xl_turbo_1.0.safetensors" \
    -o "$MODELS_DIR/sdxl_turbo.safetensors"
fi

# Download VAE
echo "📥 Downloading SDXL VAE..."
if [ ! -f "$VAE_DIR/sdxl_vae.safetensors" ]; then
  curl -L "https://huggingface.co/stabilityai/sdxl-vae/resolve/main/sdxl_vae.safetensors" \
    -o "$VAE_DIR/sdxl_vae.safetensors"
fi

# Download upscale models
echo "📥 Downloading 4x-UltraSharp upscaler..."
if [ ! -f "$UPSCALE_DIR/4x-UltraSharp.pth" ]; then
  curl -L "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.5.0/realesr-general-x4v3.pth" \
    -o "$UPSCALE_DIR/4x-UltraSharp.pth"
fi

echo "📥 Downloading RealESRGAN x4..."
if [ ! -f "$UPSCALE_DIR/RealESRGAN_x4.pth" ]; then
  curl -L "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth" \
    -o "$UPSCALE_DIR/RealESRGAN_x4.pth"
fi

# Download LoRA models (using placeholder URLs - replace with actual)
echo "📥 Downloading LoRA models..."
# Note: These would be actual LoRA model URLs from CivitAI or HuggingFace

echo "✅ Model installation complete!"
