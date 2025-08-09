#!/usr/bin/env node
/*
  fixBrokenLinks.js – semi-automatic Obsidian link fixer

  Requires that you have already run vaultAudit.js and generated vaultAudit-report.json.
  The script performs two modes:

  1. Suggest mode (default): Analyses the audit report plus the current file system to
     propose fixes for each broken link.
  2. Apply mode (--apply): If a mapping JSON is supplied via ‑-map <file>, it will
     update notes in-place, replacing broken links with new targets.

  Usage examples:

    # Just see suggestions
    node scripts/fixBrokenLinks.js

    # Generate a mapping template of suggested fixes
    node scripts/fixBrokenLinks.js --generate-map > link-mapping.json

    # Review and edit link-mapping.json, then apply
    node scripts/fixBrokenLinks.js --apply --map link-mapping.json

  The mapping file structure is:
    {
      "brokenLink": "replacementLink",
      ...
    }

  Where brokenLink is exactly the string reported by vaultAudit (for wiki links, the
  normalised page name; for markdown links, the relative path).
*/

const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

function loadAudit(root) {
  const auditPath = path.join(root, 'vaultAudit-report.json');
  if (!fs.existsSync(auditPath)) {
    console.error('vaultAudit-report.json not found – please run vaultAudit.js first.');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(auditPath, 'utf8'));
}

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
  const argv = yargs(hideBin(process.argv))
    .option('apply', { type: 'boolean', description: 'Apply fixes in-place' })
    .option('map', { type: 'string', description: 'Path to mapping JSON' })
    .option('generate-map', { type: 'boolean', description: 'Output suggested mapping to stdout' })
    .argv;

  const root = process.cwd();
  const audit = loadAudit(root);
  const mapping = argv.map ? JSON.parse(fs.readFileSync(argv.map, 'utf8')) : {};

  // Build quick lookup of existing files by basename (lowercase) and by relative path
  const allFiles = walk(root);
  const markdownFiles = allFiles.filter(f => f.toLowerCase().endsWith('.md'));
  const basenameLookup = new Map();
  for (const file of markdownFiles) {
    const base = path.basename(file, '.md').toLowerCase();
    if (!basenameLookup.has(base)) basenameLookup.set(base, path.relative(root, file));
  }

  const suggestions = {};

  // Wiki links suggestions – find same basename case-insensitive
  for (const { link } of audit.brokenWikiLinks) {
    if (basenameLookup.has(link)) {
      suggestions[link] = basenameLookup.get(link);
    }
  }

  // Markdown links suggestions – attempt to match by filename only
  for (const { link } of audit.brokenMarkdownLinks) {
    const base = path.basename(link, path.extname(link)).toLowerCase();
    if (basenameLookup.has(base)) {
      suggestions[link] = basenameLookup.get(base);
    }
  }

  if (argv['generate-map']) {
    console.log(JSON.stringify(suggestions, null, 2));
    process.exit(0);
  }

  if (!argv.apply) {
    console.log('Suggested fixes (edit or export with --generate-map to apply):');
    console.log(JSON.stringify(suggestions, null, 2));
    return;
  }

  // Apply fixes
  if (!argv.map) {
    console.error('--apply requires --map <file>');
    process.exit(1);
  }
  const fixes = mapping;
  let changes = 0;

  for (const file of markdownFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    for (const [broken, fixed] of Object.entries(fixes)) {
      // Replace wiki links [[broken]] or markdown links containing broken
      const wikiPattern = new RegExp(`\\[\\[${broken.replace(/[-/\\^$*+?.()|[\\]{}]/g, '\\$&')}\\]\]`, 'gi');
      
      // For markdown links, we need to preserve the link text and only replace the path
      // Match [text](broken) or ![alt](broken)
      const mdPattern = new RegExp(`(\\!?\\[[^\\]]*\\]\\()${broken.replace(/[-/\\^$*+?.()|[\\]{}]/g, '\\$&')}(\\))`, 'gi');
      
      content = content.replace(wikiPattern, `[[${fixed}]]`);
      content = content.replace(mdPattern, `$1${fixed}$2`);
    }
    if (content !== original) {
      fs.writeFileSync(file, content);
      changes += 1;
      console.log(`Updated ${path.relative(root, file)}`);
    }
  }

  console.log(`Link fixer completed – updated ${changes} file(s).`);
}

if (require.main === module) {
  main();
} 