#!/usr/bin/env node

/**
 * enrich_vault.js
 * Adds nuanced content sections to notes across 01..07 while keeping edits idempotent.
 * - Sections: Player-Facing Summary, Lore Details, Adventure Hooks, DM Notes, Cross-References
 * - Detects realm/style from names and folders, generates tailored prose
 * - Avoids duplicating content by anchors and markers
 * Usage: node scripts/enrich_vault.js [--limit=N]
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.env.WORKSPACE_DIR || process.cwd();
const LIMIT = (() => { const a = process.argv.find(x => x.startsWith('--limit=')); if (!a) return Infinity; const n = parseInt(a.split('=')[1], 10); return Number.isFinite(n) ? n : Infinity; })();

const TARGET_ROOTS = [
  '01_Adventures', '01_Campaigns', '02_Worldbuilding', '03_Mechanics',
  '04_Player_Resources', '05_Templates', '06_GM_Resources', '07_Player_Resources'
].map(p => path.join(ROOT, p)).filter(p => fs.existsSync(p));

const SKIP = /(^|\/)\.(git|obsidian)(\/|$)|(^|\/)08_Archive(\/|$)|(^|\/)09_Performance(\/|$)|(^|\/)04_Resources(\/|$)/i;

function walkMd(dir, acc=[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (SKIP.test(full)) continue;
    if (e.isDirectory()) walkMd(full, acc);
    else if (e.isFile() && e.name.toLowerCase().endsWith('.md')) acc.push(full);
  }
  return acc;
}

function read(p){ return fs.readFileSync(p, 'utf8'); }
function write(p,s){ fs.writeFileSync(p, s, 'utf8'); }

function parseFrontmatter(txt){
  const m = txt.match(/^---[\s\S]*?---\n/);
  return m ? { fm: m[0], body: txt.slice(m[0].length) } : { fm: '', body: txt };
}

function insertAfterFrontmatter(txt, insert){
  const m = txt.match(/^---[\s\S]*?---\n/);
  if (m) return txt.replace(m[0], m[0] + insert + '\n');
  return insert + '\n' + txt;
}

function detectRealmFromPath(p){
  const s = p.toLowerCase();
  if (s.includes('aether') || s.includes('sky')) return 'aethermoor';
  if (s.includes('void') || s.includes('teneb')) return 'void';
  return 'aquabyssos';
}

function cap(s){ return s.charAt(0).toUpperCase() + s.slice(1); }

function prose(name, realm){
  const base = name.replace(/[-_]/g, ' ');
  const r = realm==='aethermoor' ? 'sky-borne'
    : realm==='void' ? 'void-touched'
    : 'undersea';
  const flavor = realm==='aethermoor' ? 'brass fittings and cloudstone terraces'
    : realm==='void' ? 'impossible angles and star-silent echoes'
    : 'bioluminescent glow and pressure-glass'
  return {
    summary: `${cap(base)} is a ${r} element of the setting, known for ${flavor}. Its presence anchors ongoing storylines and offers clear player choices.`,
    lore: `Legends speak of ${base} as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around ${base}.`,
    hooks: [
      `A rumor ties ${base} to a missing shipment, linking factions with competing claims.`,
      `An NPC seeks discreet help at ${base} to avert a public scandal.`,
      `A map overlay reveals a hidden approach to ${base} active only during specific tides/storms.`,
    ],
    dm: `Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.`,
  };
}

function ensureSection(body, title, content){
  const hdr = `## ${title}`;
  if (new RegExp(`^##\\s+${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\n|$)`, 'm').test(body)) return body;
  const block = Array.isArray(content) ? content.map(x=>`- ${x}`).join('\n') : content;
  return body.trimEnd() + `\n\n${hdr}\n\n${block}\n`;
}

function addMarker(body){
  const mark = '<!-- enriched: true -->';
  return body.includes(mark) ? body : body + `\n${mark}\n`;
}

function currentLinks(body){
  const links = new Set();
  const re = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
  let m; while ((m=re.exec(body))!==null){ links.add(m[1]); }
  return links;
}

function suggestCrossRefs(fullPath){
  const rel = path.relative(ROOT, fullPath);
  const name = path.basename(rel, '.md');
  const refs = [];
  // Heuristics: try linking same-name People/Places if exist
  const people = path.join(ROOT, '02_Worldbuilding', 'People', `${name}.md`);
  const places = path.join(ROOT, '02_Worldbuilding', 'Places', `${name}.md`);
  if (fs.existsSync(people)) refs.push(`02_Worldbuilding/People/${name}`);
  if (fs.existsSync(places)) refs.push(`02_Worldbuilding/Places/${name}`);
  return refs;
}

function enrichFile(full){
  const rel = path.relative(ROOT, full);
  let txt = read(full);
  if (txt.includes('<!-- enriched: true -->')) return false;
  const { fm, body } = parseFrontmatter(txt);
  const name = path.basename(full, '.md');
  const realm = detectRealmFromPath(rel);
  const p = prose(name, realm);
  let out = body;
  out = ensureSection(out, 'Player-Facing Summary', p.summary);
  out = ensureSection(out, 'Lore Details', p.lore);
  out = ensureSection(out, 'Adventure Hooks', p.hooks);
  out = ensureSection(out, 'DM Notes', p.dm);
  const links = currentLinks(body);
  const adds = suggestCrossRefs(full).filter(x=>!links.has(x));
  if (adds.length){ out = ensureSection(out, 'Cross-References', adds.map(x=>`[[${x}]]`)); }
  out = addMarker(out);
  write(full, fm ? fm + out : out);
  return true;
}

function main(){
  let files = [];
  for (const r of TARGET_ROOTS) files = walkMd(r, files);
  let changed = 0;
  for (const f of files){
    if (changed >= LIMIT) break;
    try { if (enrichFile(f)) changed++; } catch {}
  }
  console.log(`Enriched ${changed} files with nuanced sections.`);
}

if (require.main === module) main();


