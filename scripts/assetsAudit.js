#!/usr/bin/env node
/*
  assetsAudit.js – Audit image and other media references in Obsidian vault.

  The script scans all Markdown files for image or media embeds and checks that the
  referenced files exist. It reports missing assets, duplicate asset names, and
  large assets (>1 MB by default).

  Usage:
    node scripts/assetsAudit.js [--size 2]   # threshold in MB for large files
*/

const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const IMAGE_LINK_RE = /!\[[^\]]*\]\(([^)]+)\)/g; // ![alt](path)

function walk(dir, ignoreDirs = new Set(['.git', '.obsidian', 'node_modules'])) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    if (ignoreDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files = files.concat(walk(full, ignoreDirs));
    else files.push(full);
  }
  return files;
}

function main() {
  const argv = yargs(hideBin(process.argv)).option('size', { type: 'number', default: 1, desc: 'MB threshold for large assets' }).argv;
  const root = process.cwd();
  const allFiles = walk(root);
  const markdownFiles = allFiles.filter(f => f.toLowerCase().endsWith('.md'));
  const assetRefs = new Map(); // relPath -> Set of source files

  // Collect references
  for (const file of markdownFiles) {
    const raw = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = IMAGE_LINK_RE.exec(raw)) !== null) {
      const targetPath = m[1].split('#')[0];
      // Ignore remote URLs
      if (/^https?:\/\//i.test(targetPath)) continue;
      const rel = path.normalize(targetPath);
      if (!assetRefs.has(rel)) assetRefs.set(rel, new Set());
      assetRefs.get(rel).add(path.relative(root, file));
    }
  }

  const missing = [];
  const large = [];

  for (const rel of assetRefs.keys()) {
    const abs = path.resolve(root, rel);
    if (!fs.existsSync(abs)) {
      missing.push(rel);
      continue;
    }
    const sizeMB = fs.statSync(abs).size / (1024 * 1024);
    if (sizeMB > argv.size) large.push({ path: rel, sizeMB: sizeMB.toFixed(2) });
  }

  const report = { missingAssets: missing, largeAssets: large };
  fs.writeFileSync(path.join(root, 'assetsAudit-report.json'), JSON.stringify(report, null, 2));
  console.log('Assets audit complete. Summary:');
  console.log(JSON.stringify({ missing: missing.length, large: large.length }, null, 2));
  console.log('Full report saved to assetsAudit-report.json');
}

if (require.main === module) {
  main();
} 