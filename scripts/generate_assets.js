#!/usr/bin/env node

/**
 * generate_assets.js
 * Scans 04_Resources/Assets/** prompt markdown files for JSON code blocks and
 * generates placeholder SVG images plus JSON metadata for each prompt.
 *
 * With --real and a configured OpenAI key, generates real images (PNG) using DALL·E 3.
 * Filters: --types=portrait,creature,... and --limit=N
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.env.WORKSPACE_DIR || process.cwd();
const ASSETS_ROOT = path.join(ROOT, '04_Resources', 'Assets');
// Unified into top-level assets directories (no 'Generated' segregation)
const GENERATED_ROOT = ASSETS_ROOT;

const ensureDir = (dir) => { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); };

const OUT_DIRS = {
  portrait: path.join(GENERATED_ROOT, 'Portraits'),
  creature: path.join(GENERATED_ROOT, 'Creatures'),
  location: path.join(GENERATED_ROOT, 'Locations'),
  scene: path.join(GENERATED_ROOT, 'Scenes'),
  item: path.join(GENERATED_ROOT, 'Items'),
  map: path.join(GENERATED_ROOT, 'Maps'),
  vehicle: path.join(GENERATED_ROOT, 'Vehicles'),
  handout: path.join(GENERATED_ROOT, 'Handouts'),
  symbol: path.join(GENERATED_ROOT, 'Symbols'),
  ui: path.join(GENERATED_ROOT, 'Digital'),
};
Object.values(OUT_DIRS).forEach(ensureDir);
ensureDir(path.join(GENERATED_ROOT, 'metadata'));

const ARGS = process.argv.slice(2);
const USE_REAL = ARGS.includes('--real');
const TYPES_FILTER = (() => { const a = ARGS.find(x => x.startsWith('--types=')); return a ? a.replace('--types=', '').split(',').map(s=>s.trim().toLowerCase()) : null; })();
const LIMIT = (() => { const a = ARGS.find(x => x.startsWith('--limit=')); if (!a) return null; const n = parseInt(a.replace('--limit=', ''), 10); return Number.isFinite(n) ? n : null; })();
const STRICT_REAL = ARGS.includes('--strict') || ARGS.includes('--no-placeholder');
const CONCURRENCY = (() => { const a = ARGS.find(x => x.startsWith('--concurrency=')); if (!a) return 2; const n = parseInt(a.split('=')[1], 10); return Number.isFinite(n) && n > 0 ? n : 2; })();
const QPS = (() => { const a = ARGS.find(x => x.startsWith('--qps=')); if (!a) return 1; const n = parseInt(a.split('=')[1], 10); return Number.isFinite(n) && n > 0 ? n : 1; })();

const CONFIG_PATH = path.join(ROOT, '.obsidian', 'api_config.json');
const USE_LOCAL_IMAGES = process.env.LOCAL_IMAGES === '1' || ARGS.includes('--local');
let localImageClient = null;
if (USE_LOCAL_IMAGES) {
  try { localImageClient = require('./local_image_client'); } catch {}
}
let OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
let DALLE_MODEL = 'dall-e-3';
let OPENAI_ORG = process.env.OPENAI_ORGANIZATION || process.env.OPENAI_ORG || '';
let OPENAI_PROJECT = process.env.OPENAI_PROJECT || '';
try {
  if (fs.existsSync(CONFIG_PATH)) {
    const cfg = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
    if (!OPENAI_API_KEY && cfg?.openai?.api_key) OPENAI_API_KEY = cfg.openai.api_key;
    if (cfg?.openai?.dalle_model) DALLE_MODEL = cfg.openai.dalle_model;
    if (!OPENAI_ORG && cfg?.openai?.organization) OPENAI_ORG = cfg.openai.organization;
    if (!OPENAI_PROJECT && cfg?.openai?.project) OPENAI_PROJECT = cfg.openai.project;
  }
} catch {}

const walkFiles = (dir, acc = []) => {
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (full.includes(path.join(ASSETS_ROOT, 'Generated'))) continue;
      acc = walkFiles(full, acc);
    } else if (e.isFile() && e.name.toLowerCase().endsWith('.md')) {
      acc.push(full);
    }
  }
  return acc;
};

const CODE_BLOCK_RE = /```json\s*([\s\S]*?)```/g;
const safeJsonParse = (s) => { try { return JSON.parse(s); } catch { return null; } };

const parsePromptsFromMd = (content) => {
  const out = [];
  let m;
  while ((m = CODE_BLOCK_RE.exec(content)) !== null) {
    const parsed = safeJsonParse(m[1]);
    if (!parsed) continue;
    if (Array.isArray(parsed)) { for (const p of parsed) if (p && typeof p === 'object') out.push(p); }
    else if (typeof parsed === 'object') out.push(parsed);
  }
  return out;
};

function xmur3(str) { let h = 1779033703 ^ str.length; for (let i=0;i<str.length;i++){ h=Math.imul(h ^ str.charCodeAt(i),3432918353); h=(h<<13)|(h>>>19);} return function(){ h=Math.imul(h ^ (h>>>16),2246822507); h=Math.imul(h ^ (h>>>13),3266489909); return (h^=h>>>16)>>>0; }; }
function mulberry32(a){ return function(){ let t=(a+=0x6D2B79F5); t=Math.imul(t ^ (t>>>15),t|1); t^= t + Math.imul(t ^ (t>>>7), t|61); return ((t ^ (t>>>14))>>>0)/4294967296; }; }
const slug = (s) => String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');

const parseResolution = (res, aspect) => {
  if (typeof res === 'string' && /^(\d+)x(\d+)$/.test(res)) { const [w,h] = res.split('x').map(n=>parseInt(n,10)); return { width:w, height:h }; }
  const a = aspect || '1:1'; let width=2048, height=2048; if (a==='16:9'){width=2560; height=1440;} if (a==='2:3' || a==='3:2'){ width=2048; height=3072; } return { width, height };
};

const pickColors = (seed, kind) => {
  const rng = mulberry32(seed);
  const palettes = {
    portrait: [['#0b132b','#1c2541','#3a506b','#5bc0be'],['#1f0f24','#49274a','#94618e','#f8eee7'],['#0f2027','#203a43','#2c5364','#68d8d6']],
    creature: [['#1b262c','#0f4c75','#3282b8','#bbe1fa'],['#2b2d42','#8d99ae','#edf2f4','#ef233c'],['#2d132c','#801336','#c72c41','#ee4540']],
    location: [['#0a2463','#3e92cc','#2a628f','#a7cced'],['#001219','#005f73','#0a9396','#94d2bd'],['#14213d','#fca311','#e5e5e5','#000000']],
    scene: [['#001845','#003566','#ffc300','#ffd60a'],['#2c003e','#512b58','#b05f6d','#ffd4b2'],['#03045e','#0077b6','#00b4d8','#90e0ef']],
    item: [['#2e1f27','#4a2c2a','#f0a202','#f18805'],['#1a1a1d','#4e4e50','#c3073f','#950740'],['#1d3557','#457b9d','#a8dadc','#f1faee']],
    map: [['#3d405b','#81b29a','#f2cc8f','#e07a5f'],['#2c2a4a','#e84545','#903749','#53354a'],['#22223b','#4a4e69','#9a8c98','#c9ada7']],
    vehicle: [['#1b1b1e','#6b6e70','#a4a8ab','#00a6fb'],['#0d1b2a','#1b263b','#415a77','#e0e1dd'],['#2f4858','#33658a','#86bbd8','#f6ae2d']],
    handout: [['#5e503f','#a9927d','#d7bea8','#eae0d5'],['#3a2e39','#1e555c','#d4d2a5','#edeec9'],['#343a40','#adb5bd','#ced4da','#e9ecef']],
    symbol: [['#0b090a','#161a1d','#660708','#b1a7a6'],['#14281d','#355834','#6a994e','#a7c957'],['#231942','#5e548e','#9f86c0','#be95c4']],
    ui: [['#0f172a','#1e293b','#334155','#22d3ee'],['#0b0f19','#111827','#374151','#60a5fa'],['#101010','#232323','#3b3b3b','#facc15']],
  };
  const p = palettes[kind] || palettes.portrait; const set = p[Math.floor(rng()*p.length)]; return { bg:set[0], accent1:set[1], accent2:set[2], text:set[3] };
};

const svgTemplate = ({ width, height, colors, title, subtitle, footer }) => {
  const fontSizeTitle = Math.max(24, Math.round(Math.min(width, height) * 0.06));
  const fontSizeSubtitle = Math.round(fontSizeTitle * 0.45);
  const fontSizeFooter = Math.round(fontSizeTitle * 0.35);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">\n  <defs>\n    <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">\n      <stop offset="0%" stop-color="${colors.bg}"/>\n      <stop offset="100%" stop-color="${colors.accent1}"/>\n    </linearGradient>\n  </defs>\n  <rect width="100%" height="100%" fill="url(#grad)"/>\n  <circle cx="${Math.round(width*0.85)}" cy="${Math.round(height*0.2)}" r="${Math.round(Math.min(width,height)*0.12)}" fill="${colors.accent2}" opacity="0.25"/>\n  <g fill="${colors.text}" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif">\n    <text x="5%" y="50%" font-size="${fontSizeTitle}" font-weight="700">${title}</text>\n    <text x="5%" y="50%" dy="${Math.round(fontSizeTitle*0.9)}" font-size="${fontSizeSubtitle}" opacity="0.9">${subtitle}</text>\n    <text x="5%" y="95%" font-size="${fontSizeFooter}" opacity="0.8">${footer}</text>\n  </g>\n</svg>`;
};

const writePlaceholder = (prompt) => {
  const type = (prompt.type || 'portrait').toLowerCase();
  if (TYPES_FILTER && !TYPES_FILTER.includes(type)) return null;
  const outDir = OUT_DIRS[type]; if (!outDir) return null;

  const { width, height } = parseResolution(prompt.resolution, prompt.aspect);
  const title = (prompt.name || 'Untitled').slice(0, 80);
  const subtitle = [type.toUpperCase(), prompt.mood || '', prompt.lighting || ''].filter(Boolean).join(' • ').slice(0, 140);
  const footer = [prompt.aspect || '1:1', prompt.resolution || '2048x2048', (prompt.style||[]).slice(0,3).join(', ')].filter(Boolean).join(' · ').slice(0, 200);

  const seed = typeof prompt.seed === 'number' ? prompt.seed : xmur3((prompt.id || title))();
  const colors = pickColors(seed, type);
  const svg = svgTemplate({ width, height, colors, title, subtitle, footer });

  const baseName = `${type}-${slug(prompt.id || title)}-${slug(title)}`.replace(/-+/g, '-');
  const outPathSvg = path.join(outDir, `${baseName}.svg`);
  if (!fs.existsSync(outPathSvg)) fs.writeFileSync(outPathSvg, svg, 'utf8');

  const metaOut = path.join(GENERATED_ROOT, 'metadata', `${baseName}.json`);
  const meta = { ...prompt, generator: 'placeholder', file: path.relative(ROOT, outPathSvg) };
  fs.writeFileSync(metaOut, JSON.stringify(meta, null, 2), 'utf8');
  return { outPath: outPathSvg, metaOut, baseName, outDir };
};

const openaiSizeFor = (aspect) => {
  // gpt-image-1 is strict; stick to supported sizes (1024x1024 guaranteed)
  const isGptImage = (String(DALLE_MODEL).toLowerCase().includes('gpt-image'));
  if (isGptImage) return '1024x1024';
  if (!aspect) return '1024x1024';
  const a = aspect.trim();
  if (a === '1:1') return '1024x1024';
  if (a === '16:9' || a==='3:2' || a==='4:3') return '1792x1024';
  if (a === '2:3' || a==='9:16' || a==='3:4') return '1024x1792';
  return '1024x1024';
};

async function generateRealImage(promptObj) {
  const type = (promptObj.type || 'portrait').toLowerCase();
  if (TYPES_FILTER && !TYPES_FILTER.includes(type)) return null;
  const outDir = OUT_DIRS[type]; if (!outDir) return null;
  const baseName = `${type}-${slug(promptObj.id || promptObj.name || 'untitled')}-${slug(promptObj.name || 'untitled')}`.replace(/-+/g, '-');
  const outPath = path.join(outDir, `${baseName}.png`);
  const metaOut = path.join(GENERATED_ROOT, 'metadata', `${baseName}.json`);

  const size = openaiSizeFor(promptObj.aspect);
  const promptText = promptObj.prompt || `${promptObj.name} ${type} in ${Array.isArray(promptObj.style)?promptObj.style.join(', '):'cohesive style'}`;

  // Skip if PNG already exists to avoid unnecessary regeneration
  try {
    if (fs.existsSync(outPath)) {
      return { outPath, metaOut };
    }
  } catch {}

  // Local backend branch
  if (USE_LOCAL_IMAGES && localImageClient) {
    const dim = parseResolution(promptObj.resolution, promptObj.aspect);
    const width = dim.width || 1024;
    const height = dim.height || 1024;
    const buf = await localImageClient.generateImageLocal({ prompt: promptText, width, height });
    fs.writeFileSync(outPath, buf);
    const meta = { ...promptObj, generator: `local-${localImageClient.getBackendName()}`, size: `${width}x${height}`, file: path.relative(ROOT, outPath) };
    fs.writeFileSync(metaOut, JSON.stringify(meta, null, 2), 'utf8');
    return { outPath, metaOut };
  }

  // OpenAI branch
  if (!OPENAI_API_KEY) throw new Error('OPENAI_API_KEY missing');

  const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}` };
  if (OPENAI_ORG) headers['OpenAI-Organization'] = OPENAI_ORG;
  if (OPENAI_PROJECT) headers['OpenAI-Project'] = OPENAI_PROJECT;
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers,
    // For gpt-image-1, omit unsupported fields like 'style'
    body: JSON.stringify({ model: DALLE_MODEL, prompt: promptText, size, n: 1 })
  });
  if (!res.ok) { const t = await res.text().catch(()=>'' ); throw new Error(`OpenAI error ${res.status}: ${t}`); }
  const data = await res.json();
  const first = data?.data?.[0]; if (!first) throw new Error('OpenAI returned no image');

  let buf = null;
  if (first.b64_json) buf = Buffer.from(first.b64_json, 'base64');
  else if (first.url) { const r = await fetch(first.url); if (!r.ok) throw new Error(`Fetch image URL ${r.status}`); buf = Buffer.from(await r.arrayBuffer()); }
  else throw new Error('No image content in response');

  fs.writeFileSync(outPath, buf);
  const meta = { ...promptObj, generator: 'openai', model: DALLE_MODEL, size, revised_prompt: first.revised_prompt || null, file: path.relative(ROOT, outPath) };
  fs.writeFileSync(metaOut, JSON.stringify(meta, null, 2), 'utf8');
  return { outPath, metaOut };
}

async function main() {
  const files = walkFiles(ASSETS_ROOT, []);
  const promptsAll = [];
  for (const file of files) {
    const md = fs.readFileSync(file, 'utf8');
    const prompts = parsePromptsFromMd(md);
    for (const p of prompts) {
      if (!p || p.disabled) continue;
      if (!p.type || !p.name || !p.id) continue;
      const t = String(p.type).toLowerCase();
      if (['audio','animation','ui','handout'].includes(t)) continue; // de-prioritize low-value types
      promptsAll.push(p);
    }
  }
  const filtered = TYPES_FILTER ? promptsAll.filter(p => TYPES_FILTER.includes(String(p.type).toLowerCase())) : promptsAll;
  const toProcess = typeof LIMIT === 'number' ? filtered.slice(0, LIMIT) : filtered;

  let parsed = 0, written = 0; const outputs = [];

  // Simple global rate limiter and concurrency control
  const minIntervalMs = Math.max(Math.floor(1000 / QPS), 1);
  let lastTime = 0;
  const sleep = (ms) => new Promise(res => setTimeout(res, ms));
  async function waitForRate() {
    const now = Date.now();
    const wait = Math.max(0, lastTime + minIntervalMs - now);
    if (wait > 0) await sleep(wait);
    lastTime = Date.now();
  }

  let idx = 0;
  async function worker() {
    while (true) {
      const i = idx++;
      if (i >= toProcess.length) return;
      const p = toProcess[i];
      try {
        parsed++;
        if (USE_REAL && OPENAI_API_KEY) {
          let attempt = 0;
          while (true) {
            await waitForRate();
            try {
              const r = await generateRealImage(p);
              if (r) { written++; outputs.push(r); }
              break;
            } catch (e) {
              const msg = String(e && e.message || e);
              if (attempt === 0) {
                console.error(`[gen-error] type=${p.type} name=${p.name} size=${p.aspect||''}/${p.resolution||''} msg=${msg.slice(0,200)}`);
              }
              if (/429|rate|quota|timeout|5\d\d/i.test(msg) && attempt < 6) {
                const delay = Math.min(60000, (2 ** attempt) * 1000);
                attempt++;
                await sleep(delay);
                continue;
              } else {
                if (!STRICT_REAL) {
                  const r2 = writePlaceholder(p); if (r2) { written++; outputs.push(r2); }
                }
                break;
              }
            }
          }
        } else {
          const r = writePlaceholder(p);
          if (r) { written++; outputs.push(r); }
        }
      } catch (err) {
        if (!STRICT_REAL) {
          try { const r = writePlaceholder(p); if (r) { written++; outputs.push(r); } } catch {}
        }
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  const mode = USE_REAL ? (STRICT_REAL ? 'real-only' : 'real/placeholder mix') : 'placeholders';
  console.log(`Parsed ${parsed} prompts, wrote ${written} assets (${mode}).`);
  for (const o of outputs.slice(0, 10)) console.log(` - ${path.relative(ROOT, o.outPath)}`);
  if (outputs.length > 10) console.log(` ... and ${outputs.length - 10} more`);
}

if (require.main === module) { main(); }


