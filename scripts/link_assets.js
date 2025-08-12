#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const ROOT = process.env.WORKSPACE_DIR || process.cwd();
const PEOPLE_DIR = path.join(ROOT, '02_Worldbuilding', 'People');
const GROUPS_DIR = path.join(ROOT, '02_Worldbuilding', 'Groups');
const PLACES_DIR = path.join(ROOT, '02_Worldbuilding', 'Places');
// Additional roots 01..07 coverage
const EXTRA_DIRS = [
  path.join(ROOT, '01_Adventures'),
  path.join(ROOT, '01_Campaigns'),
  path.join(ROOT, '02_Worldbuilding'),
  path.join(ROOT, '03_Mechanics'),
  path.join(ROOT, '04_Player_Resources'),
  path.join(ROOT, '05_Templates'),
  path.join(ROOT, '06_GM_Resources'),
  path.join(ROOT, '07_Player_Resources'),
];
const GEN = path.join(ROOT, '04_Resources', 'Assets');
const META_DIR = path.join(GEN, 'metadata');
const GALLERIES_DIR = path.join(ROOT, '04_Resources', 'Assets', 'Galleries');

const ensureDir = (p) => fs.mkdirSync(p, { recursive: true });
ensureDir(GALLERIES_DIR);

const listFiles = (dir, ext='.md') => fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith(ext)) : [];
const walkMd = (dir, acc=[]) => {
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries){
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // skip assets and archive dirs
      if (/\b(04_Resources\/Assets\/|08_Archive|node_modules|.git)\b/.test(full)) continue;
      walkMd(full, acc);
    } else if (e.isFile() && e.name.toLowerCase().endsWith('.md')) {
      acc.push(full);
    }
  }
  return acc;
};
const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => fs.writeFileSync(p, s, 'utf8');
const fileExists = (rel) => fs.existsSync(path.isAbsolute(rel) ? rel : path.join(ROOT, rel));
const slug = (s) => (s||'').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
const hasImageEmbed = (content) => /!\[|!\[\[/.test(content);

// Metadata index for more reliable matches
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

function loadMetadataIndex(){
  const index = {}; // { type: { slugName: relPath } }
  if (!fs.existsSync(META_DIR)) return index;
  const files = fs.readdirSync(META_DIR).filter(f=>f.endsWith('.json'));
  for (const f of files){
    try{
      const obj = JSON.parse(fs.readFileSync(path.join(META_DIR, f), 'utf8'));
      const type = String(obj.type||'').toLowerCase();
      const name = String(obj.name||'');
      if (!type || !name) continue;
      const sname = slug(name);
      const rel = obj.file ? obj.file : null;
      let relPng = rel ? rel.replace(/\.svg$/i, '.png') : null;
      const chosen = (relPng && fileExists(relPng)) ? relPng : rel;
      if (!chosen) continue;
      index[type] ||= {};
      // only set if not already set to prefer first PNG-found
      if (!index[type][sname]) index[type][sname] = chosen;
    } catch{}
  }
  return index;
}
const META_INDEX = loadMetadataIndex();

const findAsset = (subdir, name) => {
  const s = slug(name);
  // Try metadata first
  const type = SUBDIR_TO_TYPE[subdir];
  if (type && META_INDEX[type] && META_INDEX[type][s]){
    return META_INDEX[type][s];
  }
  // Fallback to filename scan
  const dir = path.join(GEN, subdir);
  if (!fs.existsSync(dir)) return null;
  const entries = fs.readdirSync(dir);
  const png = entries.find(f => f.toLowerCase().endsWith('.png') && f.includes(s));
  if (png) return path.relative(ROOT, path.join(dir, png));
  const svg = entries.find(f => f.toLowerCase().endsWith('.svg') && f.includes(s));
  if (svg) return path.relative(ROOT, path.join(dir, svg));
  return null;
};

// Upgrade markdown and wiki image embeds from .svg to .png if PNG exists
const upgradeImageLinks = (content) => {
  let out = content;
  // Markdown image embeds
  out = out.replace(/!\[([^\]]*)\]\(([^)]+?)\)/g, (m, alt, url) => {
    if (!/\.svg($|[?#])/i.test(url)) return m;
    const png = url.replace(/\.svg(?![a-z])/i, '.png');
    return fileExists(png) ? `![${alt}](${png})` : m;
  });
  // Wiki image embeds ![[path.svg#...|...]]
  out = out.replace(/!\[\[([^\]|#]+)\.svg(#[^\]|]+)?(\|[^\]]+)?\]\]/gi, (m, base, anchor = '', alias = '') => {
    const target = `${base}.png`;
    return fileExists(target) ? `![[${target}${anchor || ''}${alias || ''}]]` : m;
  });
  return out;
};

const insertAfterFrontmatter = (content, insert) => {
  const fmRe = /^---[\s\S]*?---\n/;
  const m = content.match(fmRe);
  if (m) return content.replace(fmRe, (x)=> x + insert + '\n');
  return insert + '\n' + content;
};

const figureBlock = (relPath, title) => `\n> [!figure] ${title}\n![](${relPath})\n`;
const inlineThumb = (relPath) => `\n![](${relPath})\n`;

const linkDirWithAssets = (dir, subdir, title) => {
  const files = listFiles(dir);
  let changed = 0; const changedFiles = [];
  for (const file of files){
    const full = path.join(dir, file);
    const orig = read(full);
    const pref = upgradeImageLinks(orig);
    let content = pref;
    if (!hasImageEmbed(pref)){
      const name = file.replace(/\.md$/i,'');
      const rel = findAsset(subdir, name);
      if (rel) content = insertAfterFrontmatter(pref, figureBlock(rel, title));
    }
    if (content !== orig){ write(full, content); changed++; changedFiles.push(path.relative(ROOT, full)); }
  }
  return { changed, changedFiles };
};

const gatherGenerated = (subdir) => {
  const dir = path.join(GEN, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => /(\.png|\.svg)$/i.test(f)).map(f => ({ name: f.replace(/\.(png|svg)$/i,''), rel: path.relative(ROOT, path.join(dir, f)) }));
};

const galleryMd = (title, entries) => ['# '+title,'','%% Use reading mode for visual gallery %%','',...entries.flatMap(e=>['## '+e.name,'![]('+e.rel+')',''])].join('\n');

const buildGalleries = () => {
  const sections = [
    { key:'Portraits', title:'NPC Portraits Gallery' },
    { key:'Creatures', title:'Creatures Gallery' },
    { key:'Locations', title:'Locations Gallery' },
    { key:'Scenes', title:'Scenes Gallery' },
    { key:'Maps', title:'Battle Maps Gallery' },
    { key:'Vehicles', title:'Vehicles & Ships Gallery' },
    { key:'Symbols', title:'Faction Symbols & Heraldry' },
    { key:'Handouts', title:'In-World Handouts Gallery' },
    { key:'Items', title:'Magical Items Gallery' },
  ];
  const made = [];
  for (const s of sections){
    const outFile = path.join(GALLERIES_DIR, `${s.title.replace(/\s+/g,'_')}.md`);
    write(outFile, galleryMd(s.title, gatherGenerated(s.key)));
    made.push(path.relative(ROOT, outFile));
  }
  const indexFile = path.join(GALLERIES_DIR, 'Index.md');
  write(indexFile, ['# Visual Asset Galleries','',...sections.map(s=>' - [['+path.relative(ROOT, path.join(GALLERIES_DIR, `${s.title.replace(/\s+/g,'_')}.md`))+']]')].join('\n'));
  made.push(path.relative(ROOT, indexFile));
  return made;
};

function main(){
  const people = linkDirWithAssets(PEOPLE_DIR, 'Portraits', 'Portrait');
  const groups = linkDirWithAssets(GROUPS_DIR, 'Symbols', 'Heraldry');
  const places = linkDirWithAssets(PLACES_DIR, 'Locations', 'View');
  // Upgrade SVG embeds to PNG where available across these dirs
  let upgraded = 0;
  for (const dir of [PEOPLE_DIR, GROUPS_DIR, PLACES_DIR, ...EXTRA_DIRS]){
    const files = fs.existsSync(dir) ? walkMd(dir, []) : [];
    for (const full of files){
      const orig = read(full);
      const upd = upgradeImageLinks(orig);
      if (upd !== orig){ write(full, upd); upgraded++; }
    }
  }
  // Broad enrichment pass across 01..07: attach a best-match asset if none present
  let enriched = 0; const kinds = [
    { sub:'Portraits', hint:'Portrait' },
    { sub:'Creatures', hint:'Creature' },
    { sub:'Locations', hint:'View' },
    { sub:'Scenes', hint:'Scene' },
    { sub:'Items', hint:'Item' },
    { sub:'Vehicles', hint:'Vehicle' },
    { sub:'Symbols', hint:'Heraldry' },
    { sub:'Maps', hint:'Map' },
    { sub:'Handouts', hint:'Handout' },
  ];
  const hasPortraitEmbed = (s) => /(Assets\/Generated\/Portraits\/.+\.(png|jpg|jpeg|webp))/i.test(s) || /!\[\[[^\]]*Assets\/Generated\/Portraits\/[^\]]+\.(png|jpg|jpeg|webp)\]\]/i.test(s);

  for (const root of EXTRA_DIRS){
    const files = walkMd(root, []);
    for (const full of files){
      const content0 = read(full);
      const content1 = upgradeImageLinks(content0);
      const base = path.basename(full).replace(/\.md$/i,'');
      // People-specific: ensure portrait even if other images exist
      if (full.startsWith(PEOPLE_DIR)){
        let updated = content1;
        if (!hasPortraitEmbed(updated)){
          const rel = findAsset('Portraits', base);
          if (rel && rel.toLowerCase().endsWith('.png')){
            updated = insertAfterFrontmatter(updated, figureBlock(rel, 'Portrait'));
          }
        }
        if (updated !== content0){ write(full, updated); enriched++; }
        continue;
      }
      if (hasImageEmbed(content1)) { if (content1 !== content0) write(full, content1); continue; }
      let assetRel = null, title = 'Asset';
      for (const k of kinds){
        const cand = findAsset(k.sub, base);
        if (cand && cand.toLowerCase().endsWith('.png')) { assetRel = cand; title = k.hint; break; }
      }
      if (!assetRel) continue;
      const updated = insertAfterFrontmatter(content1, figureBlock(assetRel, title));
      if (updated !== content0){ write(full, updated); enriched++; }
    }
  }
  const galleries = buildGalleries();
  console.log(`Embedded portraits into ${people.changed} People notes.`);
  console.log(`Embedded heraldry into ${groups.changed} Group notes.`);
  console.log(`Embedded views into ${places.changed} Place notes.`);
  console.log(`Upgraded ${upgraded} notes from SVG to PNG where available.`);
  console.log(`Broad enrichment across 01..07 added assets to ${enriched} notes.`);
  console.log('Built galleries:'); for (const g of galleries) console.log(' - '+g);
}

if (require.main === module) main();


