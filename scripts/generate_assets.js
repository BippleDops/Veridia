#!/usr/bin/env node

/**
 * generate_assets.js
 * Scans 04_Resources/Assets/** prompt markdown files for JSON code blocks and
 * generates placeholder SVG images plus JSON metadata for each prompt.
 *
 * If OPENAI_API_KEY is provided and --real flag is passed, this script will prepare
 * payloads for real image generation but will NOT call external APIs by default.
 * You can extend the real generation section to integrate with your provider.
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.env.WORKSPACE_DIR || '/workspace';
const ASSETS_ROOT = path.join(ROOT, '04_Resources', 'Assets');
const GENERATED_ROOT = path.join(ASSETS_ROOT, 'Generated');

// Ensure output directories exist
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

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

const walkFiles = (dir, acc = []) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (full.includes(path.join(ASSETS_ROOT, 'Generated'))) continue; // skip outputs
      acc = walkFiles(full, acc);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      acc.push(full);
    }
  }
  return acc;
};

const CODE_BLOCK_RE = /```json\s*([\s\S]*?)```/g;

const safeJsonParse = (text) => {
  try { return JSON.parse(text); } catch { return null; }
};

const parsePromptsFromMd = (content) => {
  const prompts = [];
  let match;
  while ((match = CODE_BLOCK_RE.exec(content)) !== null) {
    const raw = match[1];
    const parsed = safeJsonParse(raw);
    if (!parsed) continue;
    if (Array.isArray(parsed)) {
      for (const p of parsed) if (p && typeof p === 'object') prompts.push(p);
    } else if (typeof parsed === 'object') {
      prompts.push(parsed);
    }
  }
  return prompts;
};

// Simple seeded PRNG
function xmur3(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function() {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}
function mulberry32(a) {
  return function() {
    let t = (a += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const parseResolution = (res, aspect) => {
  if (typeof res === 'string' && /^(\d+)x(\d+)$/.test(res)) {
    const [w, h] = res.split('x').map((n) => parseInt(n, 10));
    return { width: w, height: h };
  }
  // Default by aspect
  const a = aspect || '1:1';
  let width = 2048, height = 2048;
  if (a === '16:9') { width = 2560; height = 1440; }
  if (a === '2:3' || a === '3:2') { width = 2048; height = 3072; }
  return { width, height };
};

const pickColors = (seed, kind) => {
  const rng = mulberry32(seed);
  // Choose palette based on kind to roughly match vibe
  const palettes = {
    portrait: [ ['#0b132b','#1c2541','#3a506b','#5bc0be'], ['#1f0f24','#49274a','#94618e','#f8eee7'], ['#0f2027','#203a43','#2c5364','#68d8d6'] ],
    creature: [ ['#1b262c','#0f4c75','#3282b8','#bbe1fa'], ['#2b2d42','#8d99ae','#edf2f4','#ef233c'], ['#2d132c','#801336','#c72c41','#ee4540'] ],
    location: [ ['#0a2463','#3e92cc','#2a628f','#a7cced'], ['#001219','#005f73','#0a9396','#94d2bd'], ['#14213d','#fca311','#e5e5e5','#000000'] ],
    scene: [ ['#001845','#003566','#ffc300','#ffd60a'], ['#2c003e','#512b58','#b05f6d','#ffd4b2'], ['#03045e','#0077b6','#00b4d8','#90e0ef'] ],
    item: [ ['#2e1f27','#4a2c2a','#f0a202','#f18805'], ['#1a1a1d','#4e4e50','#c3073f','#950740'], ['#1d3557','#457b9d','#a8dadc','#f1faee'] ],
    map: [ ['#3d405b','#81b29a','#f2cc8f','#e07a5f'], ['#2c2a4a','#e84545','#903749','#53354a'], ['#22223b','#4a4e69','#9a8c98','#c9ada7'] ],
    vehicle: [ ['#1b1b1e','#6b6e70','#a4a8ab','#00a6fb'], ['#0d1b2a','#1b263b','#415a77','#e0e1dd'], ['#2f4858','#33658a','#86bbd8','#f6ae2d'] ],
    handout: [ ['#5e503f','#a9927d','#d7bea8','#eae0d5'], ['#3a2e39','#1e555c','#d4d2a5','#edeec9'], ['#343a40','#adb5bd','#ced4da','#e9ecef'] ],
    symbol: [ ['#0b090a','#161a1d','#660708','#b1a7a6'], ['#14281d','#355834','#6a994e','#a7c957'], ['#231942','#5e548e','#9f86c0','#be95c4'] ],
    ui: [ ['#0f172a','#1e293b','#334155','#22d3ee'], ['#0b0f19','#111827','#374151','#60a5fa'], ['#101010','#232323','#3b3b3b','#facc15'] ],
  };
  const p = palettes[kind] || palettes.portrait;
  const set = p[Math.floor(rng() * p.length)];
  return { bg: set[0], accent1: set[1], accent2: set[2], text: set[3] };
};

const svgTemplate = ({ width, height, colors, title, subtitle, footer }) => {
  const fontSizeTitle = Math.max(24, Math.round(Math.min(width, height) * 0.06));
  const fontSizeSubtitle = Math.round(fontSizeTitle * 0.45);
  const fontSizeFooter = Math.round(fontSizeTitle * 0.35);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="${colors.bg}"/>
      <stop offset="100%" stop-color="${colors.accent1}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <circle cx="${Math.round(width*0.85)}" cy="${Math.round(height*0.2)}" r="${Math.round(Math.min(width,height)*0.12)}" fill="${colors.accent2}" opacity="0.25"/>
  <g fill="${colors.text}" font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif">
    <text x="5%" y="50%" font-size="${fontSizeTitle}" font-weight="700">${title}</text>
    <text x="5%" y="50%" dy="${Math.round(fontSizeTitle*0.9)}" font-size="${fontSizeSubtitle}" opacity="0.9">${subtitle}</text>
    <text x="5%" y="95%" font-size="${fontSizeFooter}" opacity="0.8">${footer}</text>
  </g>
</svg>`;
};

const writePlaceholder = (prompt) => {
  const type = (prompt.type || 'portrait').toLowerCase();
  const outDir = OUT_DIRS[type];
  if (!outDir) return null;

  const { width, height } = parseResolution(prompt.resolution, prompt.aspect);
  const title = (prompt.name || 'Untitled').slice(0, 80);
  const subtitle = [type.toUpperCase(), prompt.mood || '', prompt.lighting || ''].filter(Boolean).join(' • ').slice(0, 140);
  const footer = [prompt.aspect || '1:1', prompt.resolution || '2048x2048', (prompt.style||[]).slice(0,3).join(', ')].filter(Boolean).join(' · ').slice(0, 200);

  const seed = typeof prompt.seed === 'number' ? prompt.seed : xmur3((prompt.id || title))();
  const colors = pickColors(seed, type);
  const svg = svgTemplate({ width, height, colors, title, subtitle, footer });

  const baseName = `${type}-${slug(prompt.id || title)}-${slug(title)}`.replace(/-+/g, '-');
  const fileName = `${baseName}.svg`;
  const outPath = path.join(outDir, fileName);
  fs.writeFileSync(outPath, svg, 'utf8');

  // metadata sidecar
  const metaOut = path.join(GENERATED_ROOT, 'metadata', `${baseName}.json`);
  fs.writeFileSync(metaOut, JSON.stringify(prompt, null, 2), 'utf8');

  return { outPath, metaOut };
};

const main = () => {
  const files = walkFiles(ASSETS_ROOT, []);
  let parsedCount = 0;
  let writtenCount = 0;
  const written = [];

  for (const file of files) {
    const md = fs.readFileSync(file, 'utf8');
    const prompts = parsePromptsFromMd(md);
    if (!prompts.length) continue;

    for (const p of prompts) {
      // basic validation
      if (!p || p.disabled) continue;
      if (!p.type || !p.name || !p.id) continue;
      // skip non-visual specs (audio/animation)
      if (['audio','animation'].includes(String(p.type).toLowerCase())) continue;

      parsedCount++;
      const res = writePlaceholder(p);
      if (res) {
        writtenCount++;
        written.push(res);
      }
    }
  }

  console.log(`Parsed ${parsedCount} prompts, wrote ${writtenCount} image placeholders.`);
  for (const w of written.slice(0, 10)) {
    console.log(` - ${path.relative(ROOT, w.outPath)}`);
  }
  if (written.length > 10) console.log(` ... and ${written.length - 10} more`);
};

if (require.main === module) {
  main();
}