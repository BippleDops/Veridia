#!/usr/bin/env node

// Minimal ComfyUI HTTP client for txt2img using a simple workflow
// Env:
//   COMFY_URL      default http://127.0.0.1:8188
//   COMFY_CKPT     checkpoint filename as seen by ComfyUI (e.g., "v1-5-pruned-emaonly.safetensors")

const COMFY_URL = (process.env.COMFY_URL || 'http://127.0.0.1:8188').replace(/\/$/, '');

async function comfyPost(path, body){
  const res = await fetch(`${COMFY_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const t = await res.text().catch(()=> '');
    throw new Error(`comfy ${res.status} ${path}: ${t}`);
  }
  return res.json();
}

async function comfyGet(path){
  const res = await fetch(`${COMFY_URL}${path}`);
  if (!res.ok) throw new Error(`comfy ${res.status} ${path}`);
  return res;
}

function buildPromptGraph({ prompt, width = 512, height = 512, steps = 20, cfg = 6.5, seed = 0, ckpt }){
  // Simple graph adapted for SD1.5-like models
  return {
    '3': { // CheckpointLoaderSimple
      'inputs': { 'ckpt_name': ckpt },
      'class_type': 'CheckpointLoaderSimple'
    },
    '4': { // CLIPTextEncode (positive)
      'inputs': { 'text': prompt, 'clip': [ '3', 1 ] },
      'class_type': 'CLIPTextEncode'
    },
    '5': { // CLIPTextEncode (negative)
      'inputs': { 'text': 'text, watermark, signature, artist name, logo, lowres, blurry, bad anatomy', 'clip': [ '3', 1 ] },
      'class_type': 'CLIPTextEncode'
    },
    '6': { // EmptyLatentImage
      'inputs': { 'width': width, 'height': height, 'batch_size': 1 },
      'class_type': 'EmptyLatentImage'
    },
    '7': { // KSampler
      'inputs': {
        'seed': seed,
        'steps': steps,
        'cfg': cfg,
        'sampler_name': 'euler',
        'scheduler': 'normal',
        'denoise': 1,
        'model': [ '3', 0 ],
        'positive': [ '4', 0 ],
        'negative': [ '5', 0 ],
        'latent_image': [ '6', 0 ]
      },
      'class_type': 'KSampler'
    },
    '8': { // VAEDecode
      'inputs': { 'samples': [ '7', 0 ], 'vae': [ '3', 2 ] },
      'class_type': 'VAEDecode'
    },
    '9': { // SaveImage
      'inputs': { 'images': [ '8', 0 ] },
      'class_type': 'SaveImage'
    }
  };
}

async function generateImageViaComfy({ prompt, width, height, seed = Math.floor(Math.random()*1e9), ckpt }){
  if (!ckpt) throw new Error('comfy: COMFY_CKPT not set');
  const graph = buildPromptGraph({ prompt, width, height, seed, ckpt });
  const enqueue = await comfyPost('/prompt', { prompt: graph });
  const promptId = enqueue && enqueue.prompt_id;
  if (!promptId) throw new Error('comfy: no prompt_id');
  // Poll history until image is present
  const start = Date.now();
  let imgInfo = null;
  while (Date.now() - start < 180000) { // 3 min timeout
    await new Promise(r => setTimeout(r, 1000));
    try {
      const hist = await comfyGet(`/history/${promptId}`);
      const hjson = await hist.json();
      const item = hjson && hjson[promptId];
      if (item && item.outputs && item.outputs['9'] && item.outputs['9'].images && item.outputs['9'].images[0]){
        imgInfo = item.outputs['9'].images[0];
        break;
      }
    } catch {}
  }
  if (!imgInfo) throw new Error('comfy: no image produced');
  const { filename, subfolder, type } = imgInfo; // type likely 'output'
  const viewPath = `/view?filename=${encodeURIComponent(filename)}&type=${encodeURIComponent(type||'output')}&subfolder=${encodeURIComponent(subfolder||'')}`;
  const res = await comfyGet(viewPath);
  const buf = Buffer.from(await res.arrayBuffer());
  return buf;
}

module.exports = { generateImageViaComfy };

if (require.main === module){
  (async () => {
    try {
      const ckpt = process.env.COMFY_CKPT;
      const buf = await generateImageViaComfy({ prompt: 'test image: abstract shapes, minimal', width: 512, height: 512, ckpt });
      console.log(`ok bytes=${buf.length}`);
    } catch (e) {
      console.error(String(e && e.message || e));
      process.exit(1);
    }
  })();
}


