#!/usr/bin/env node

// Sweep the vault to upgrade image references wherever possible:
// - Prefer PNG over SVG/JPG if PNG counterpart exists
// - Replace Placeholder Images with Generated assets via metadata index
// - Update wiki and markdown image embeds
// - Upgrade .canvas image node refs

const fs = require('fs');
const path = require('path');

const ROOT = process.env.WORKSPACE_DIR || process.cwd();
const GEN = path.join(ROOT, '04_Resources', 'Assets');
const META_DIR = path.join(GEN, 'metadata');
const PLACEHOLDER_DIR = path.join(ROOT, '04_Resources', 'Assets', 'Placeholder Images');

const SUBDIR_TO_TYPE = {
  Portraits: 'portrait',
  Creatures: 'creature',
  Locations: 'location',
  Scenes: 'scene',
  Maps: 'map',
  Vehicles: 'vehicle',
  Handouts: 'handout',
  Items: 'item',
  Symbols: 'symbol',
  Digital: 'ui',
};

const TYPE_TO_SUBDIR = Object.fromEntries(Object.entries(SUBDIR_TO_TYPE).map(([k,v]) => [v,k]));

const skipDir = (p) => /(^|\/)\.git\//.test(p) || /(^|\/)node_modules\//.test(p) || /04_Resources\/Assets\//.test(p) || /08_Archive\//.test(p) || /(^|\/)backups\//.test(p);

const slug = (s) => String(s||'').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => fs.writeFileSync(p, s, 'utf8');
const fileExists = (relOrAbs) => fs.existsSync(path.isAbsolute(relOrAbs) ? relOrAbs : path.join(ROOT, relOrAbs));

function walkFiles(dir, acc = []){
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries){
    const full = path.join(dir, e.name);
    if (e.isDirectory()){
      if (skipDir(full + '/')) continue;
      walkFiles(full, acc);
    } else if (e.isFile()){
      acc.push(full);
    }
  }
  return acc;
}

function loadMetadataIndex(){
  const index = {}; // {type: { slugName: relPath }}
  if (!fs.existsSync(META_DIR)) return index;
  for (const f of fs.readdirSync(META_DIR)){
    if (!f.endsWith('.json')) continue;
    try{
      const obj = JSON.parse(fs.readFileSync(path.join(META_DIR, f), 'utf8'));
      const type = String(obj.type||'').toLowerCase();
      const name = String(obj.name||'');
      if (!type || !name) continue;
      const s = slug(name);
      const rel = obj.file ? obj.file : null;
      const relPng = rel ? rel.replace(/\.svg$/i,'.png') : null;
      const chosen = (relPng && fileExists(relPng)) ? relPng : rel;
      if (!chosen) continue;
      index[type] ||= {};
      if (!index[type][s]) index[type][s] = chosen;
    }catch{}
  }
  return index;
}

const META_INDEX = loadMetadataIndex();

function guessTypeForNote(mdPath){
  const p = mdPath.replace(ROOT + path.sep, '');
  if (p.includes(`02_Worldbuilding${path.sep}People`)) return 'portrait';
  if (p.includes(`02_Worldbuilding${path.sep}Groups`)) return 'symbol';
  if (p.includes(`02_Worldbuilding${path.sep}Places`)) return 'location';
  if (p.includes(`03_Mechanics${path.sep}`)) return null; // mixed; skip guessing
  if (p.includes(`01_Adventures${path.sep}`)) return 'scene';
  return null;
}

function findByMeta(nameSlug, preferredType){
  if (preferredType && META_INDEX[preferredType] && META_INDEX[preferredType][nameSlug]){
    return META_INDEX[preferredType][nameSlug];
  }
  // fallback scan by common priorities
  const priorities = ['portrait','location','scene','item','creature','map','symbol','handout','vehicle','ui'];
  for (const t of priorities){
    const hit = META_INDEX[t] && META_INDEX[t][nameSlug];
    if (hit) return hit;
  }
  return null;
}

function upgradeContent(mdPath, text){
  const baseName = path.basename(mdPath).replace(/\.md$/i,'');
  const nameSlug = slug(baseName);
  const preferredType = guessTypeForNote(mdPath);

  let out = text;

  // 1) Upgrade svg/jpg to png if counterpart exists
  out = out.replace(/!\[([^\]]*)\]\(([^)]+?)\)/g, (m, alt, url) => {
    const png = url.replace(/\.(svg|jpg|jpeg)$/i, '.png');
    return (png !== url && fileExists(png)) ? `![${alt}](${png})` : m;
  });
  out = out.replace(/!\[\[([^\]|#]+)\.(svg|jpg|jpeg)(#[^\]|]+)?(\|[^\]]+)?\]\]/gi, (m, base, ext, anchor='', alias='') => {
    const target = `${base}.png`;
    return fileExists(target) ? `![[${target}${anchor||''}${alias||''}]]` : m;
  });

  // 2) Replace Placeholder Images with Generated via metadata
  out = out.replace(/!\[([^\]]*)\]\(([^)]+Placeholder[^)]*)\)/gi, (m, alt, url) => {
    const replacement = findByMeta(nameSlug, preferredType);
    return replacement ? `![${alt}](${replacement})` : m;
  });
  out = out.replace(/!\[\[([^\]]*Placeholder[^\]]*)\]\]/gi, (m, u) => {
    const replacement = findByMeta(nameSlug, preferredType);
    return replacement ? `![[${replacement}]]` : m;
  });

  // 3) If no images present, optionally insert one based on metadata (portraits for People)
  if (!/!\[|!\[\[/.test(out)){
    const replacement = findByMeta(nameSlug, preferredType);
    if (replacement){
      const fm = out.match(/^---[\s\S]*?---\n/);
      const fig = `\n> [!figure] Asset\n![](${replacement})\n`;
      if (fm) out = out.replace(/^---[\s\S]*?---\n/, (x)=> x + fig + '\n'); else out = fig + '\n' + out;
    }
  }

  return out;
}

function upgradeCanvas(jsonStr){
  let data;
  try { data = JSON.parse(jsonStr); } catch { return null; }
  let changed = false;
  const visit = (obj) => {
    if (Array.isArray(obj)) return obj.forEach(visit);
    if (obj && typeof obj === 'object'){
      for (const k of Object.keys(obj)){
        const v = obj[k];
        if (typeof v === 'string'){
          if (/\.svg$/i.test(v)){
            const png = v.replace(/\.svg$/i,'.png');
            if (fileExists(png)) { obj[k] = png; changed = true; }
          }
          if (v.includes('Placeholder')){
            const bn = path.basename(v).replace(/\.[^.]+$/,'');
            const rep = findByMeta(slug(bn));
            if (rep){ obj[k] = rep; changed = true; }
          }
        } else {
          visit(v);
        }
      }
    }
  };
  visit(data);
  return changed ? JSON.stringify(data, null, 2) : null;
}

function main(){
  const files = walkFiles(ROOT, []);
  let mdChanged = 0, canvasChanged = 0;
  for (const f of files){
    const rel = path.relative(ROOT, f);
    if (rel.startsWith('04_Resources/Assets/Generated/')) continue;
    if (rel.endsWith('.md')){
      try{
        const s = read(f);
        const u = upgradeContent(f, s);
        if (u !== s){ write(f, u); mdChanged++; }
      } catch{}
    } else if (rel.endsWith('.canvas')){
      try{
        const s = read(f);
        const u = upgradeCanvas(s);
        if (u){ write(f, u); canvasChanged++; }
      } catch{}
    }
  }
  console.log(`Upgraded images in ${mdChanged} markdown files and ${canvasChanged} canvas files.`);
}

if (require.main === module) main();


