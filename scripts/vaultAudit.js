#!/usr/bin/env node
/*
  vaultAudit.js – Obsidian vault auditor

  Usage:
    node scripts/vaultAudit.js [vaultPath]

  If vaultPath is omitted it defaults to current working directory.

  The script will:
  1. Recursively scan all Markdown files (*.md) in the vault.
  2. Collect every Obsidian wiki-style link ([[Page Name]], [[Page Name#Heading]], [[Folder/Page|alias]]).
  3. Collect every standard Markdown link of form [label](relative/path/to/file.md) or images ![alt](path).
  4. Build an index of existing Markdown note basenames (case-insensitive) and relative file paths.
  5. Report:
     • Broken wiki links – links where no corresponding note exists.
     • Broken Markdown links – relative paths that do not resolve.
     • Duplicate basenames – multiple notes that share the same basename, which can confuse wiki links.
  6. Output a summary JSON report to stdout and write a copy to vaultAudit-report.json in the vault root.

  This script does NOT modify any files. It is read-only and safe to run.
*/

const fs = require('fs');
const path = require('path');

/** Utility – walk directory recursively, returning array of absolute file paths */
function walk(dir, ignoreDirs = new Set(['.git', '.obsidian', 'node_modules'])) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    if (ignoreDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(full, ignoreDirs));
    } else {
      files.push(full);
    }
  }
  return files;
}

/** Regexes for link extraction */
const WIKI_LINK_RE = /\[\[([^\]]+)\]\]/g; // [[link]] capturing inside
const MARKDOWN_LINK_RE = /!?(?:\[[^\]]*\]\(([^)]+)\))/g; // ![alt](path) or [text](path)

/** Normalize Obsidian page name to compare with filenames */
function normalizePageName(str) {
  // Remove heading after # and alias after |
  return str.split('|')[0].split('#')[0].trim().toLowerCase();
}

function main() {
  const vaultRoot = path.resolve(process.argv[2] || process.cwd());
  console.log(`Scanning vault at ${vaultRoot}...`);

  const allFiles = walk(vaultRoot);
  const markdownFiles = allFiles.filter(f => f.toLowerCase().endsWith('.md'));

  // Build index of note basenames
  const basenameIndex = new Map(); // name -> Set of paths
  for (const file of markdownFiles) {
    const base = path.basename(file, '.md').toLowerCase();
    if (!basenameIndex.has(base)) basenameIndex.set(base, new Set());
    basenameIndex.get(base).add(file);
  }

  const brokenWiki = new Map(); // link -> array of source files
  const brokenMD = new Map(); // link -> array of source files
  const duplicateBasenames = [...basenameIndex.entries()].filter(([, set]) => set.size > 1);

  for (const file of markdownFiles) {
    const raw = fs.readFileSync(file, 'utf8');

    // Wiki links
    let m;
    while ((m = WIKI_LINK_RE.exec(raw)) !== null) {
      const target = normalizePageName(m[1]);
      if (!basenameIndex.has(target)) {
        if (!brokenWiki.has(target)) brokenWiki.set(target, []);
        brokenWiki.get(target).push(path.relative(vaultRoot, file));
      }
    }

    // Markdown links
    while ((m = MARKDOWN_LINK_RE.exec(raw)) !== null) {
      const targetPath = m[1].split('#')[0]; // strip anchor
      // Ignore absolute URLs (http/https)
      if (/^https?:\/\//i.test(targetPath)) continue;
      const abs = path.resolve(path.dirname(file), targetPath);
      if (!fs.existsSync(abs)) {
        const rel = path.relative(vaultRoot, targetPath);
        if (!brokenMD.has(rel)) brokenMD.set(rel, []);
        brokenMD.get(rel).push(path.relative(vaultRoot, file));
      }
    }
  }

  const report = {
    summary: {
      totalMarkdownFiles: markdownFiles.length,
      totalWikiLinksBroken: brokenWiki.size,
      totalMarkdownLinksBroken: brokenMD.size,
      totalDuplicateBasenames: duplicateBasenames.length,
    },
    brokenWikiLinks: Array.from(brokenWiki.entries()).map(([link, sources]) => ({ link, sources })),
    brokenMarkdownLinks: Array.from(brokenMD.entries()).map(([link, sources]) => ({ link, sources })),
    duplicateBasenames: duplicateBasenames.map(([name, paths]) => ({ name, paths: Array.from(paths) })),
  };

  fs.writeFileSync(path.join(vaultRoot, 'vaultAudit-report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report.summary, null, 2));
  console.log('Full report saved to vaultAudit-report.json');
}

if (require.main === module) {
  main();
} 