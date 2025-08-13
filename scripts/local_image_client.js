#!/usr/bin/env node

// Local image generation client
// Supports: Automatic1111 WebUI (txt2img)
// ComfyUI (via workflow submission)
const { generateImageViaComfy } = (() => { try { return require('./comfy_client'); } catch { return {}; } })();

const A1111_URL = process.env.A1111_URL || 'http://127.0.0.1:7860';
const BACKEND = (process.env.LOCAL_IMAGE_BACKEND || 'a1111').toLowerCase();

function getBackendName(){ return BACKEND; }

async function generateWithA1111({ prompt, negativePrompt, width, height, steps = 24, cfgScale = 6.5, sampler = 'DPM++ 2M Karras', seed = -1 }){
  const body = {
    prompt,
    negative_prompt: negativePrompt || process.env.A1111_NEGATIVE_PROMPT || 'text, watermark, signature, artist name, logo, lowres, bad anatomy, extra fingers',
    width,
    height,
    steps,
    cfg_scale: cfgScale,
    sampler_name: sampler,
    seed,
    batch_size: 1,
    n_iter: 1,
  };
  const res = await fetch(`${A1111_URL.replace(/\/$/, '')}/sdapi/v1/txt2img`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const t = await res.text().catch(()=> '');
    throw new Error(`a1111 ${res.status}: ${t}`);
  }
  const data = await res.json();
  const imgB64 = data && Array.isArray(data.images) && data.images[0];
  if (!imgB64) throw new Error('a1111: no images returned');
  return Buffer.from(imgB64, 'base64');
}

async function generateWithComfyUI(/* params */){
  throw new Error('comfy backend not yet implemented');
}

async function generateImageLocal({ prompt, width, height, seed }){
  if (BACKEND === 'a1111') return generateWithA1111({ prompt, width, height, seed });
  if (BACKEND === 'comfy') return generateImageViaComfy({ prompt, width, height, seed, ckpt: process.env.COMFY_CKPT });
  throw new Error(`Unsupported backend: ${BACKEND}`);
}

module.exports = { generateImageLocal, getBackendName };

if (require.main === module){
  (async () => {
    try {
      const buf = await generateImageLocal({ prompt: 'test image: abstract shapes, minimal', width: 512, height: 512 });
      console.log(`ok bytes=${buf.length} backend=${getBackendName()}`);
    } catch (e) {
      console.error(String(e && e.message || e));
      process.exit(1);
    }
  })();
}


