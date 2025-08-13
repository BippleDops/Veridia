#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const ROOT = process.env.WORKSPACE_DIR || process.cwd();
const QUESTS_DIR = path.join(ROOT, '02_Worldbuilding', 'Quests');
const PEOPLE_DIR = path.join(ROOT, '02_Worldbuilding', 'People');
const PLACES_DIR = path.join(ROOT, '02_Worldbuilding', 'Places');
const GROUPS_DIR = path.join(ROOT, '02_Worldbuilding', 'Groups');
const OUT_DIR = path.join(ROOT, '04_Resources', 'Assets', 'Canvas', 'Quests');

fs.mkdirSync(OUT_DIR, { recursive: true });

const slug = (s) => (s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');

const walkMd = (dir, acc=[]) => {
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries){
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walkMd(full, acc);
    else if (e.isFile() && e.name.toLowerCase().endsWith('.md')) acc.push(full);
  }
  return acc;
};

const read = (p) => fs.readFileSync(p, 'utf8');
const exists = (p) => fs.existsSync(p);

const findLinkedFile = (title) => {
  // try People, Places, Groups, Quests by title
  const candidates = [
    path.join(PEOPLE_DIR, `${title}.md`),
    path.join(PLACES_DIR, `${title}.md`),
    path.join(GROUPS_DIR, `${title}.md`),
    path.join(QUESTS_DIR, `${title}.md`),
  ];
  for (const c of candidates){ if (exists(c)) return c; }
  return null;
};

function toFileNode(file, x, y, w=380, h=120){
  return { id: `n_${slug(file)}_${Math.abs((x+y)|0)}`, type: 'file', file, x, y, width: w, height: h };
}

function buildCanvas(questRel, links){
  const nodes = [];
  const edges = [];
  nodes.push({ id:'root', type:'file', file: questRel, x:0, y:0, width:460, height:140 });
  let i = 0;
  for (const rel of links){
    const node = toFileNode(rel, -520 + (i%3)*520, 220 + Math.floor(i/3)*180);
    nodes.push(node);
    edges.push({ id:`e_${i}`, fromNode:'root', toNode: node.id });
    i++;
  }
  return { nodes, edges };
}

function parseWikiLinks(md){
  const out = new Set();
  const re = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
  let m; while ((m=re.exec(md))!==null){ out.add(m[1]); }
  return Array.from(out);
}

function main(){
  const files = walkMd(QUESTS_DIR, []);
  let made = 0;
  for (const q of files){
    const qRel = path.relative(ROOT, q);
    const md = read(q);
    const titles = parseWikiLinks(md);
    const fileRels = [];
    for (const t of titles){
      // if link is a path, keep it; if bare title, resolve
      let rel = null;
      if (/\/.+/.test(t)){
        const abs = path.join(ROOT, t.endsWith('.md')?t:t+'.md');
        if (exists(abs)) rel = path.relative(ROOT, abs);
      } else {
        const abs2 = findLinkedFile(t);
        if (abs2) rel = path.relative(ROOT, abs2);
      }
      if (rel && !fileRels.includes(rel) && rel !== qRel) fileRels.push(rel);
    }
    const out = buildCanvas(qRel, fileRels.slice(0, 24));
    const outPath = path.join(OUT_DIR, `${slug(path.basename(q, '.md'))}.canvas`);
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
    made++;
  }
  console.log(`Generated ${made} quest canvases in ${path.relative(ROOT, OUT_DIR)}`);
}

if (require.main === module) main();


