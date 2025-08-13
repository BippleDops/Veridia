#!/usr/bin/env node

// Migrate assets from 04_Resources/Assets/Generated/* to 04_Resources/Assets/*
// Update all links from Assets/Generated/... -> Assets/...
// Merge metadata into 04_Resources/Assets/metadata

const fs = require('fs');
const path = require('path');

const ROOT = process.env.WORKSPACE_DIR || process.cwd();
const SRC = path.join(ROOT, '04_Resources', 'Assets', 'Generated');
const DST = path.join(ROOT, '04_Resources', 'Assets');

const skipDir = (p) => /(^|\/)\.git\//.test(p) || /(^|\/)node_modules\//.test(p) || /08_Archive\//.test(p) || /(^|\/)backups\//.test(p);

function ensureDir(p){ if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function listDirs(p){ if (!fs.existsSync(p)) return []; return fs.readdirSync(p, {withFileTypes:true}).filter(d=>d.isDirectory()).map(d=>d.name); }
function listFilesRecursive(dir, acc = []){
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, {withFileTypes:true});
  for (const e of entries){
    const full = path.join(dir, e.name);
    if (e.isDirectory()) listFilesRecursive(full, acc); else if (e.isFile()) acc.push(full);
  }
  return acc;
}

function moveFileSafe(src, dst){
  ensureDir(path.dirname(dst));
  if (fs.existsSync(dst)) return { skipped: true };
  try{ fs.renameSync(src, dst); return { moved: true }; }
  catch{
    try{ const data = fs.readFileSync(src); fs.writeFileSync(dst, data); fs.unlinkSync(src); return { moved: true, copied: true }; }
    catch{ return { failed: true }; }
  }
}

function rewriteLinksInText(content){
  return content.replace(/Assets\/Generated\//g, 'Assets/');
}

function rewriteLinksEverywhere(){
  let changed = 0;
  function walk(dir){
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, {withFileTypes:true});
    for (const e of entries){
      const full = path.join(dir, e.name);
      if (e.isDirectory()){
        if (skipDir(full + '/')) continue;
        walk(full);
      } else if (e.isFile()){
        const ext = path.extname(e.name).toLowerCase();
        if (!['.md', '.canvas', '.json'].includes(ext)) continue;
        try{
          const s = fs.readFileSync(full, 'utf8');
          const u = rewriteLinksInText(s);
          if (u !== s){ fs.writeFileSync(full, u, 'utf8'); changed++; }
        }catch{}
      }
    }
  }
  walk(ROOT);
  return changed;
}

function main(){
  if (!fs.existsSync(SRC)){
    console.log('No Generated directory present; nothing to migrate.');
    return;
  }
  const subdirs = listDirs(SRC);
  let moved = 0, skipped = 0, failed = 0;
  for (const sd of subdirs){
    if (sd === 'metadata') continue;
    const fromDir = path.join(SRC, sd);
    const toDir = path.join(DST, sd);
    ensureDir(toDir);
    const files = listFilesRecursive(fromDir);
    for (const f of files){
      const relInside = path.relative(fromDir, f);
      const target = path.join(toDir, relInside);
      const res = moveFileSafe(f, target);
      if (res.moved) moved++; else if (res.skipped) skipped++; else if (res.failed) failed++;
    }
  }
  // metadata
  const srcMeta = path.join(SRC, 'metadata');
  const dstMeta = path.join(DST, 'metadata');
  if (fs.existsSync(srcMeta)){
    ensureDir(dstMeta);
    const files = listFilesRecursive(srcMeta);
    for (const f of files){
      const relInside = path.relative(srcMeta, f);
      const target = path.join(dstMeta, relInside);
      const res = moveFileSafe(f, target);
      if (res.moved) moved++; else if (res.skipped) skipped++; else if (res.failed) failed++;
    }
  }

  const changed = rewriteLinksEverywhere();

  // Remove empty Generated dir
  try{
    const remaining = listFilesRecursive(SRC, []);
    if (remaining.length === 0){ fs.rmdirSync(srcMeta, { recursive: true }); fs.rmdirSync(SRC, { recursive: true }); }
  } catch{}

  console.log(JSON.stringify({ moved, skipped, failed, changed }, null, 2));
}

if (require.main === module) main();


